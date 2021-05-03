/*
 * Copyright (C) 2019-present Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */
import 'dart:collection';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/scheduler.dart';
import 'package:kraken/bridge.dart';
import 'package:kraken/css.dart';
import 'package:kraken/dom.dart';
import 'package:kraken/module.dart';
import 'package:kraken/rendering.dart';
import 'package:kraken/src/dom/platform_view_client.dart';
import 'package:kraken/src/gesture/scroll_rect_info.dart';

const String PLATFORM_VIEW = 'PLATFORM-VIEW';

const _debugLifecycle = false;
const Map<String, dynamic> _defaultStyle = {
  WIDTH: ELEMENT_DEFAULT_WIDTH,
  HEIGHT: ELEMENT_DEFAULT_HEIGHT,
};

final Pointer<NativeFunction<Native_Call>> nativeCall = Pointer.fromFunction(PlatformViewElement._call);

class RenderComponentViewBoundaryBox extends RenderConstrainedBox {

  RenderComponentViewBoundaryBox({
    BoxConstraints additionalConstraints,
    RenderBox child,
  }) : super(additionalConstraints: additionalConstraints, child: child);


  @override
  bool get isRepaintBoundary => true;


  @override
  void detach() {
    super.detach();
  }
}

class PlatformViewElement extends Element implements PlatformViewHost {

  static SplayTreeMap<int, PlatformViewElement> _nativeMap = SplayTreeMap();

  JSContext _jsContext;

  bool _hasTag;

  static PlatformViewElement getPlatformViewOfNativePtr(Pointer<NativePlatformViewElement> nativePlatformViewElement) {
    PlatformViewElement platformViewElement = _nativeMap[nativePlatformViewElement.address];
    assert(platformViewElement != null, 'Can not get PlatformViewElement from nativeElement: $nativePlatformViewElement');
    return platformViewElement;
  }

  static void _call(Pointer<NativePlatformViewElement> nativePtr, Pointer<NativeString> name,Pointer<NativeString> paramsJson) {
    PlatformViewElement element = getPlatformViewOfNativePtr(nativePtr);
    element.call(nativeStringToString(name), nativeStringToString(paramsJson));
  }
  // ObjectElement(int targetId, Pointer<NativeObjectElement> nativePtr, ElementManager elementManager)
  //     : super(targetId, nativePtr.ref.nativeElement, elementManager, tagName: OBJECT, defaultStyle: _defaultStyle, isIntrinsicBox: true)

  PlatformViewElement(int targetId, this.nativePlatformViewElement, ElementManager elementManager)
      : super(targetId, nativePlatformViewElement.ref.nativeElement, elementManager,
            tagName: PLATFORM_VIEW,
            defaultStyle: _defaultStyle,
            isIntrinsicBox: true) {
    _nativeMap[nativePlatformViewElement.address] = this;
    nativePlatformViewElement.ref.call = nativeCall;
    _width = CSSLength.toDisplayPortValue(ELEMENT_DEFAULT_WIDTH, viewportSize);
    _height = CSSLength.toDisplayPortValue(ELEMENT_DEFAULT_HEIGHT, viewportSize);

    try {
      _jsContext = JSContext(elementManager?.controller?.bundleURL, '${elementManager?.controller?.view?.contextId}');
    } catch (e) {
      print(e);
    }
    if (Platform.isAndroid && false) {
      super.setProperty("loading", 'lazy');
    } else {
      super.setProperty("loading", "immediately");
    }

    addEventListener("intersectionchange", (e) {
      // if(kDebugMode && false) {
      //   print('PlatformView[$targetId] intersectionchange');
      // }
    });
    addEvent('intersectionchange');
  }

  final Pointer<NativePlatformViewElement> nativePlatformViewElement;

  String componentType;
  Map componentParams = Map();

  RenderConstrainedBox sizedBox;

  PlatformViewComponentClient platformViewComponent;
  RenderBox platformRenderBox;
  bool _hasAddIntersectionChangeListener = false;

  static const String TYPE = 'type';
  static const String WIDTH = 'width';
  static const String HEIGHT = 'height';

  static const String _displayPortWidth = "displayPortWidth";
  static const String _displayPortHeight = "displayPortHeight";

  @override
  void setProperty(String key, value) {
    super.setProperty(key, value);
    if (key != null && key.isNotEmpty) {
      componentParams[key] = value is String ? value : json.encode(value);
    }

    if (key == TYPE) {
      (renderBoxModel as RenderIntrinsic)?.child = null;
      componentType = value;
      if(properties['loading'] != 'lazy') {
        _buildPlatformRenderBox();
      } else {
        renderBoxModel?.addIntersectionChangeListener(_handleIntersectionChange);
      }
      // addChild(sizedBox);
      platformViewComponent?.setProperty(key, value);
    } else if (key == WIDTH || key == HEIGHT) {
      setStyle(key, value);
    } else {
      platformViewComponent?.setProperty(key, value);
    }
  }


  void _handleIntersectionChange(IntersectionObserverEntry entry) {

    // When appear
    if (entry.isIntersecting) {
      if(kDebugMode || _debugLifecycle) {
        print('PlatformView[$targetId] entry.isIntersecting[${entry.isIntersecting}] isIntersecting lazyload[]');
      }
      _buildPlatformRenderBox();
    }

    try {
      platformViewComponent?.onIntersectionChange(entry);
    } catch (e) {
      print(e);
    }

  }

  @override
  void willAttachRenderer() {
    super.willAttachRenderer();
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] willAttachRenderer');
    }
    if (sizedBox != null && sizedBox.attached != true ) {
      try {
        addChild(sizedBox);
      } catch (e) {
        print(e.toString());
      }
    }
    // if (_hasIntersectionObserverEvent(eventHandlers)) {
    renderBoxModel?.addIntersectionChangeListener(_handleIntersectionChange);
    // }
  }

  @override
  RenderObject createRenderer(){
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] createRenderer');
    }
    return super.createRenderer();
  }

  @override
  void didAttachRenderer() {
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] didAttachRenderer');
    }
    super.didAttachRenderer();
  }

  @override
  void didDetachRenderer() {
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] didDetachRenderer');
    }
    super.didDetachRenderer();
  }

  @override
  void willDetachRenderer() {
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] willDetachRenderer');
    }
    super.willDetachRenderer();
  }


  @override
  void setStyle(String key, value) {
    super.setStyle(key, value);
    if (key == WIDTH) {
      width = CSSLength.toDisplayPortValue(value, viewportSize) ?? width;
      componentParams[_displayPortWidth] = width;
    } else if (key == HEIGHT) {
      height = CSSLength.toDisplayPortValue(value, viewportSize) ?? height;
      componentParams[_displayPortHeight] = height;
    }
    platformViewComponent?.setStyle(key, value);
  }

  void call(String name, String paramsJson) async{
    dynamic map = {};
    try {
      map = json.decode(paramsJson);
    } catch (e) {
      print(e);
    }
    return await platformViewComponent?.method(name, map);
  }

  @override
  bool dispatchEvent(Event event) {
    return super.dispatchEvent(event);
  }

  /// Create a new platformed render box.
  void _buildPlatformRenderBox() {
    if(platformViewComponent == null) {
      if(kDebugMode || _debugLifecycle) {
        print("PlatformView[$targetId] _buildPlatformRenderBox");
      }
      // renderBoxModel?.removeIntersectionChangeListener(_handleIntersectionChange);
      platformViewComponent = platformViewComponentFactory(
        this,
        componentType,
        creationParams: componentParams,
        gestureRecognizers: _emptyRecognizersSet,
      );
      platformRenderBox = platformViewComponent?.getRenderBox();
      sizedBox = RenderComponentViewBoundaryBox(
          additionalConstraints: BoxConstraints.tight(Size(width, height)),
          child: platformRenderBox);
      addChild(sizedBox);
    }
  }

  @override
  dynamic getProperty(String key) {
    return super.getProperty(key);
  }

  @override
  Map<String, dynamic> getProperties() {
    return properties;
  }


  @override
  void attachTo(Element parent, {RenderObject after}) {
    super.attachTo(parent,after: after);
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] attachTo');
      print("${hashCode} + attachTo element");
    }
    try {
      platformViewComponent?.onAttachTo(parent, after: after);
    } catch (e) {
      print(e);
    }
    _ensureAddScrollRectTargetIds();
  }

  void _ensureAddScrollRectTargetIds() {
    if (targetId >= 0 && _hasTag != true) {
      _hasTag = true;
      ScrollRectInfo.addTargetIds(elementManager?.controller, targetId);
    }
  }

  @override
  void detach() {
    super.detach();
    if(kDebugMode || _debugLifecycle) {
      print('PlatformView[$targetId] detach');
      print("${hashCode} + detach");
    }
    try {
      platformViewComponent?.onDetach();
    } catch (e) {
      print(e);
    }

  }

  @override
  void dispose() {
    super.dispose();
    try {
      _nativeMap.remove(nativePlatformViewElement.address);
    } catch (e) {
      print(e);
    }

    try {
      platformViewComponent?.onDispose();
    } catch (e) {
      print(e);
    }
  }

  @override
  void removeProperty(String key) {
    super.removeProperty(key);
    platformViewComponent?.removeProperty(key);
  }

  double _width;

  double get width => _width;

  set width(double newValue) {
    if (newValue != null) {
      bool changed = _width != newValue;
      _width = newValue;
      sizedBox?.additionalConstraints = BoxConstraints.tight(Size(width, height));
      try {
        if (changed) {
          platformViewComponent?.onSizeChange(width, height);
        }
      } catch (e) {
        print(e);
      }
    }
  }

  /// Element attribute height
  double _height;

  double get height => _height;

  set height(double newValue) {
    if (newValue != null) {
      bool changed = _height != newValue;
      _height = newValue;
      sizedBox?.additionalConstraints =
          BoxConstraints.tight(Size(width, height));
      try {
        if (changed) {
          platformViewComponent?.onSizeChange(width, height);
        }
      } catch (e) {
        print(e);
      }
    }
  }

  static final Set<Factory<OneSequenceGestureRecognizer>> _emptyRecognizersSet =
  <Factory<OneSequenceGestureRecognizer>>{};

  @override
  JSContext getJSContext() => _jsContext;
}

abstract class PlatformViewHost {
  dynamic getProperty(String key);

  Map<String, dynamic> getProperties();

  JSContext getJSContext();

  bool dispatchEvent(Event event);


}
