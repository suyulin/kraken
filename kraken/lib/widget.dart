/*
 * Copyright (C) 2019-present Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */
import 'dart:async';
import 'dart:ffi';
import 'dart:io';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/scheduler.dart';
import 'package:kraken/bridge.dart';
import 'package:kraken/css.dart';
import 'package:kraken/dom.dart' as dom;
import 'package:kraken/gesture.dart';
import 'package:kraken/kraken.dart';
import 'package:kraken/module.dart';
import 'package:kraken/src/dom/element_registry.dart';

typedef KrakenOnLoad = Future<dynamic> Function(KrakenController controller);
typedef KrakenOnBundleReady = Future<dynamic> Function(KrakenController controller);
typedef KrakenOnJSRuntimeReady = Future<dynamic> Function(KrakenController controller);
typedef KrakenOnDispose = Future<dynamic> Function(String jsContextId);
typedef KrakenOnStatus = Future<dynamic> Function(String status, KrakenController controller, {String message});

typedef WidgetCreator = Widget Function(Map<String, dynamic>);
class _WidgetCustomElement extends dom.Element {
  late WidgetCreator _widgetCreator;
  late Element _renderViewElement;
  late BuildOwner _buildOwner;
  late Widget _widget;
  _KrakenAdapterWidgetPropertiesState? _propertiesState;
  _WidgetCustomElement(int targetId, Pointer<NativeElement> nativePtr, dom.ElementManager elementManager, String tagName, WidgetCreator creator)
      : super(
      targetId,
      nativePtr,
      elementManager,
      tagName: tagName,
      isIntrinsicBox: true,
      defaultStyle: {
        DISPLAY: INLINE_BLOCK,
      }
  ) {
    _widgetCreator = creator;
  }

  @override
  void didAttachRenderer() {
    super.didAttachRenderer();

    WidgetsFlutterBinding.ensureInitialized();

    _propertiesState = _KrakenAdapterWidgetPropertiesState(_widgetCreator, properties);
    _widget = _KrakenAdapterWidget(_propertiesState!);
    _attachWidget(_widget);
  }

  @override
  void removeProperty(String key) {
    super.removeProperty(key);
    if (_propertiesState != null) {
      _propertiesState!.onAttributeChanged(properties);
    }
  }

  @override
  void setProperty(String key, dynamic value) {
    super.setProperty(key, value);
    if (_propertiesState != null) {
      _propertiesState!.onAttributeChanged(properties);
    }
  }

  void _handleBuildScheduled() {
    // Register drawFrame callback same with [WidgetsBinding.drawFrame]
    SchedulerBinding.instance!.addPostFrameCallback((Duration timeStamp) {
      _buildOwner.buildScope(_renderViewElement);
      // ignore: invalid_use_of_protected_member
      RendererBinding.instance!.drawFrame();
      _buildOwner.finalizeTree();
    });
    SchedulerBinding.instance!.ensureVisualUpdate();
  }

  void _attachWidget(Widget widget) {
    // A new buildOwner difference with flutter's buildOwner
    _buildOwner = BuildOwner(focusManager: WidgetsBinding.instance!.buildOwner!.focusManager);
    _buildOwner.onBuildScheduled = _handleBuildScheduled;
    _renderViewElement = RenderObjectToWidgetAdapter<RenderBox>(
        child: widget,
        container: renderBoxModel as RenderObjectWithChildMixin<RenderBox>,
      ).attachToRenderTree(_buildOwner);
  }
}

class _KrakenAdapterWidget extends StatefulWidget {
  final _KrakenAdapterWidgetPropertiesState _state;
  _KrakenAdapterWidget(this._state);
  @override
  State<StatefulWidget> createState() {
    return _state;
  }
}

class _KrakenAdapterWidgetPropertiesState extends State<_KrakenAdapterWidget> {
  Map<String, dynamic> _properties;
  final WidgetCreator _widgetCreator;
  _KrakenAdapterWidgetPropertiesState(this._widgetCreator, this._properties);

  void onAttributeChanged(Map<String, dynamic> properties) {
    setState(() {
      _properties = properties;
    });
  }

  @override
  Widget build(BuildContext context) {
    return _widgetCreator(_properties);
  }
}

typedef LoadMonitorHandler = Function(String url, Map info);

bool debugPerformance = kDebugMode || true;

class KrakenWidget extends StatefulWidget {
  // The background color for viewport, default to transparent.
  final Color? background;

  final String name;

  // the width of krakenWidget
  final double? viewportWidth;

  // the height of krakenWidget
  final double? viewportHeight;

  // The initial URL to load.
  final String? bundleURL;

  // The initial assets path to load.
  final String? bundlePath;

  // The initial raw javascript content to load.
  final String? bundleContent;

  // The animationController of Flutter Route object.
  // Pass this object to KrakenWidget to make sure Kraken execute JavaScripts scripts after route transition animation completed.
  final AnimationController? animationController;

  // The methods of the KrakenNavigateDelegation help you implement custom behaviors that are triggered
  // during a kraken view's process of loading, and completing a navigation request.
  final KrakenNavigationDelegate? navigationDelegate;

  // A method channel for receiving messaged from JavaScript code and sending message to JavaScript.
  final KrakenMethodChannel? javaScriptChannel;

  final LoadErrorHandler? onLoadError;

  final DartKrakenControllerWrapper? _dartKrakenController;

  final LoadHandler? onLoad;

  final LoadMonitorHandler? loadMonitorHandler;

  final JSErrorHandler? onJSError;

  final KrakenOnBundleReady? onBundleReady;
  final KrakenOnJSRuntimeReady? onJSRuntimeReady;
  final KrakenOnDispose? onDispose;

  // Open a service to support Chrome DevTools for debugging.
  // https://github.com/openkraken/devtools
  final DevToolsService? devToolsService;

  final KrakenOnStatus? onStatus;

  final bool? debugEnableInspector;

  final GestureClient? gestureClient;

  final EventClient? eventClient;

  final HttpClientInterceptor? httpClientInterceptor;

  final UriParser? uriParser;


  const KrakenWidget(
      {Key? key,
      @required this.viewportWidth,
      @required this.viewportHeight,
      this.loadMonitorHandler,
      this.bundleURL,
      this.bundlePath,
      this.bundleContent,
      this.onLoad,
      this.onBundleReady,
      this.onJSRuntimeReady,
      this.onDispose,
      this.onStatus,
      this.navigationDelegate,
      this.javaScriptChannel,
      this.background,
      this.gestureClient,
      this.eventClient,
      DartKrakenControllerWrapper? dartKrakenController,
      this.devToolsService,
      this.httpClientInterceptor,
      this.onLoadError,
      this.animationController,
      this.debugEnableInspector,
      this.onJSError,
      this.uriParser,
      required this.name})
      : _dartKrakenController = dartKrakenController,
        super(key: key);

  static bool _isValidCustomElementName(localName) {
    return RegExp(r'^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$').hasMatch(localName);
  }

  static void defineCustomElement(String localName, WidgetCreator creator) {
    if (!_isValidCustomElementName(localName)) {
      throw ArgumentError('The element name "$localName" is not valid.');
    }

    String tagName = localName.toUpperCase();

    defineElement(tagName, (id, nativePtr, elementManager) {
      return _WidgetCustomElement(id, nativePtr.cast<NativeElement>(), elementManager, tagName, creator);
    });
  }

  @override
  _KrakenWidgetState createState() => _KrakenWidgetState();

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<double>('viewportWidth', viewportWidth));
    properties.add(DiagnosticsProperty<double>('viewportHeight', viewportHeight));
    properties.add(DiagnosticsProperty<String>('bundleURL', bundleURL));
    properties.add(DiagnosticsProperty<String>('bundlePath', bundlePath));
    properties.add(DiagnosticsProperty<String>('bundleContent', bundleContent));
  }
}

class _KrakenWidgetState extends State<KrakenWidget> {
  KrakenController? _controller;
  Map _loadInfo = Map();
  bool _hasFinishRenderFirstTime = false;
  bool _hasBundleReady = false;
  VoidCallback? _ordinaryOnMetricsChanged;
  _KrakenWidgetState();

  @override
  Widget build(BuildContext context) {
    if (_controller == null) {
      return Container();
    }

    // window.physicalSize are Size.zero when app first loaded. This only happened on Android and iOS physical devices with release build.
    // We should wait for onMetricsChanged when window.physicalSize get updated from Flutter Engine.
    if (window.physicalSize == Size.zero) {
      return Container();
    }

    if (_hasBundleReady == true && _hasFinishRenderFirstTime != true) {
      handleFirstRender();
    }
    return KrakenRenderConstrainedBoxWidget(
      widget.name,
      key: ValueKey(widget.name),
      constraints: BoxConstraints.expand(),
    );
  }

  Future handleFirstRender() async {
    _hasFinishRenderFirstTime = true;
    _loadInfo['renderFinishFirstTime'] = DateTime.now().millisecondsSinceEpoch;
    try {
      await widget.loadMonitorHandler?.call(widget.bundleURL ?? 'unknown', _loadInfo);
    } catch (e) {
      print(e);
    }
  }

  @override
  void initState() {
    super.initState();


    // window.physicalSize are Size.zero when app first loaded. This only happened on Android and iOS physical devices with release build.
    // We should wait for onMetricsChanged when window.physicalSize get updated from Flutter Engine.

    _ordinaryOnMetricsChanged = window.onMetricsChanged;

    if (window.physicalSize == Size.zero) {
      window.onMetricsChanged = () async {
        if (window.physicalSize == Size.zero) {
          window.onMetricsChanged = _ordinaryOnMetricsChanged;
          return;
        }
        // Bootstrap binding.
        init();
        setState(() {});
        // Should proxy to ordinary window.onMetricsChanged callbacks.
        if (_ordinaryOnMetricsChanged != null) {
          _ordinaryOnMetricsChanged!();
          // Recover ordinary callback to window.onMetricsChanged
          window.onMetricsChanged = _ordinaryOnMetricsChanged;
        }
      };
    } else {
      // Bootstrap binding.
      init();
    }
  }

  @override
  void didUpdateWidget(KrakenWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget != null && oldWidget.bundleURL != widget.bundleURL) {
      // _updateUrl(widget.bundleURL);
    }
  }

  Future _updateUrl(String url) async {
    if (url != null && url.isNotEmpty) {
      await _controller?.reloadUrl(url);
      setState(() {});
    }
  }

  _innerOnJSError(String message) {
    try {
      if (widget.onStatus != null) {
        widget.onStatus!('JSError', _controller!, message: message);
      }
    } catch (e) {
      print(e);
    }

    try {
      if (widget.onJSError != null) {
        widget.onJSError!(message);
      }
    } catch (e, stack) {
      print(e);
    }
  }

  Future init() async {
    _loadInfo['loadBundleStart'] = DateTime.now().millisecondsSinceEpoch;
    _loadInfo['cacheType'] =
        widget.bundleContent != null && widget.bundleContent!.isNotEmpty
            ? 'cache'
            : 'request';
    int? last;
    int? current;
    int? delta;
    last = DateTime.now().millisecondsSinceEpoch;

    double viewportWidth = widget.viewportWidth ?? window.physicalSize.width / window.devicePixelRatio;
    double viewportHeight = widget.viewportHeight ?? window.physicalSize.height / window.devicePixelRatio;

    //@set default size
    if (viewportWidth == 0.0 || viewportHeight == 0.0) {
      viewportWidth = 350;
      viewportHeight = 150;
    };

    _controller = KrakenController.getControllerOfName(widget.name) ??
        KrakenController(
            widget.name, viewportWidth, viewportHeight,
            showPerformanceOverlay:
                Platform.environment[ENABLE_PERFORMANCE_OVERLAY] != null,
            onLoadError: widget.onLoadError,
            onJSError: _innerOnJSError,
            bundleURL: widget.bundleURL,
            background: Color(0xffffffff),
            bundlePath: widget.bundlePath,
            methodChannel: KrakenNativeChannel(),
            bundleContent: widget.bundleContent,
            gestureClient: widget.gestureClient,
            eventClient: widget.eventClient,
            devToolsService: widget.devToolsService,
            httpClientInterceptor: widget.httpClientInterceptor);


    widget._dartKrakenController?._provider = () => _controller;

    current = DateTime.now().millisecondsSinceEpoch;
    delta = current - last;
    last = current;
    if (debugPerformance) {
      print('KrakenTyPerformance create controller pass [$delta]');
    }
    if (_controllerValid(_controller)) {
      try {
        if (widget.onLoad != null) {
          await widget.onLoad!(_controller!);
        }
      } catch (e) {
        print(e);
      }
    }
    current = DateTime.now().millisecondsSinceEpoch;
    delta = current - last;
    last = current;
    if (debugPerformance) {
      print('KrakenTyPerformance call onload pass [$delta]');
    }

    if (_controllerValid(_controller)) {
      await _controller?.loadBundle(
          bundleURL: widget.bundleURL,
          bundlePath: widget.bundlePath,
          bundleContent: widget.bundleContent);
    }

    // Future.microtask(() async {
    current = DateTime.now().millisecondsSinceEpoch;
    delta = current - last;
    last = current;
    _loadInfo['loadBundleTime'] = delta;
    if (debugPerformance) {
      print('KrakenTyPerformance load bundle pass [$delta]');
    }

    if (_controllerValid(_controller)) {
      try {
        if (widget.onBundleReady != null) {
          await widget.onBundleReady!(_controller!);
        }
      } catch (e) {
        print(e);
      }
    }
    current = DateTime.now().millisecondsSinceEpoch;
    delta = current - last;
    last = current;
    if (debugPerformance) {
      print('KrakenTyPerformance call onBundleReady controller pass [$delta]');
    }

    int _loadBundleFinishTime = DateTime.now().millisecondsSinceEpoch;
    _loadInfo['loadBundleEnd'] = _loadBundleFinishTime;
    _loadInfo['runBundleStart'] = _loadBundleFinishTime;
    if (_controllerValid(_controller)) {
      await _controller?.evalBundle();
    }
    current = DateTime.now().millisecondsSinceEpoch;
    delta = current - last;
    last = current;
    _loadInfo['runBundleTime'] = delta;
    if (debugPerformance) {
      print('KrakenTyPerformance run bundle pass [$delta]');
    }

    int _runBundleStartFinishTime = DateTime.now().millisecondsSinceEpoch;
    _loadInfo['runBundleEnd'] = _runBundleStartFinishTime;
    _hasBundleReady = true;
    if (_controllerValid(_controller)) {
      try {
        if (widget.onJSRuntimeReady != null) {
          await widget.onJSRuntimeReady!(_controller!);
        }
      } catch (e) {
        print(e);
      }
    }

    current = DateTime.now().millisecondsSinceEpoch;
    delta = current - last;
    last = current;
    if (debugPerformance) {
      print('KrakenTyPerformance call onJSRuntimeReady pass [$delta]');
    }
    if (_controllerValid(_controller)) {
      setState(() {});
    }
    // });
  }

  bool _controllerValid(final KrakenController? controller) {
    return controller != null &&
        controller.view != null &&
        controller.view.disposed != true &&
        controller.view.contextId != null &&
        controller.view.contextId >= 0 &&
        isContextValid(controller.view.contextId);
  }

  Future<dynamic> _onDispose(String? contextId) async {
    try {
      if (widget.onDispose != null && contextId != null) {
        await widget.onDispose!(contextId);
      }
    } catch (e) {
      print(e);
    }
  }

  @override
  void dispose() {
    super.dispose();
    String? jsContextId;
    try {
      jsContextId = '${_controller?.view?.contextId}';
    } catch (e) {
      print(e);
    }

    if (_controllerValid(_controller)) {
      _controller?.dispose();
    }

    _onDispose(jsContextId);
  }
}

class KrakenRenderConstrainedBoxWidget extends SingleChildRenderObjectWidget {
  KrakenRenderConstrainedBoxWidget(
    this.id, {
    Key? key,
    required this.constraints,
    Widget? child,
  })  :super(key: key, child: child) {
    this._controller = KrakenController.getControllerOfName(id);
  }

  double? width;
  double? height;
  String id;
  KrakenController? _controller;

  /// The additional constraints to impose on the child.
  BoxConstraints constraints = BoxConstraints.tight(Size(
    math.min(350.0, window.physicalSize.width),
    math.min(150.0, window.physicalSize.height),
  ));

  @override
  KrakenRenderConstrainedBox createRenderObject(BuildContext context) {
    _controller = KrakenController.getControllerOfName(id);
    // return RenderConstrainedBox(additionalConstraints: constraints);

    // _controller?.view?.getRootRenderObject()?.parentData?.detach();
    // if (_controller?.view?.getRootRenderObject()?.parent != null) {
    //   RenderConstrainedBox box = _controller.view.getRootRenderObject().parent;
    //   box.dropChild(_controller.view.getRootRenderObject());
    // }
    return KrakenRenderConstrainedBox(id,
        child: _controller?.view.getRootRenderObject(),
        additionalConstraints: constraints);
  }

  @override
  void updateRenderObject(
      BuildContext context, KrakenRenderConstrainedBox renderObject) {
    renderObject.additionalConstraints = constraints;
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<BoxConstraints>(
        'constraints', constraints,
        showName: false));
  }
}

class KrakenRenderConstrainedBox extends RenderProxyBox {
  /// Creates a render box that constrains its child.
  ///
  /// The [additionalConstraints] argument must not be null and must be valid.
  KrakenRenderConstrainedBox(
    this.id, {
    RenderBox? child,
    required BoxConstraints additionalConstraints,
  })  : assert(additionalConstraints != null),
        assert(additionalConstraints.debugAssertIsValid()),
        _additionalConstraints = additionalConstraints,
        super(child);

  String id;

  /// Additional constraints to apply to [child] during layout.
  BoxConstraints get additionalConstraints => _additionalConstraints;
  BoxConstraints _additionalConstraints;

  set additionalConstraints(BoxConstraints value) {
    assert(value != null);
    assert(value.debugAssertIsValid());
    if (_additionalConstraints == value) return;
    _additionalConstraints = value;
    markNeedsLayout();
  }

  @override
  double computeMinIntrinsicWidth(double height) {
    if (_additionalConstraints.hasBoundedWidth &&
        _additionalConstraints.hasTightWidth)
      return _additionalConstraints.minWidth;
    double width = super.computeMinIntrinsicWidth(height);
    assert(width.isFinite);
    if (!_additionalConstraints.hasInfiniteWidth) {
      width = _additionalConstraints.constrainWidth(width);
    }
    return width;
  }

  @override
  double computeMaxIntrinsicWidth(double height) {
    if (_additionalConstraints.hasBoundedWidth &&
        _additionalConstraints.hasTightWidth)
      return _additionalConstraints.minWidth;
    double width = super.computeMaxIntrinsicWidth(height);
    assert(width.isFinite);
    if (!_additionalConstraints.hasInfiniteWidth) {
      width = _additionalConstraints.constrainWidth(width);
    }
    return width;
  }

  @override
  double computeMinIntrinsicHeight(double width) {
    if (_additionalConstraints.hasBoundedHeight &&
        _additionalConstraints.hasTightHeight)
      return _additionalConstraints.minHeight;
    double height = super.computeMinIntrinsicHeight(width);
    assert(height.isFinite);
    if (!_additionalConstraints.hasInfiniteHeight) {
      height = _additionalConstraints.constrainHeight(height);
    }

    return height;
  }

  @override
  double computeMaxIntrinsicHeight(double width) {
    if (_additionalConstraints.hasBoundedHeight &&
        _additionalConstraints.hasTightHeight)
      return _additionalConstraints.minHeight;
    double height = super.computeMaxIntrinsicHeight(width);
    assert(height.isFinite);

    if (!_additionalConstraints.hasInfiniteHeight) {
      height = _additionalConstraints.constrainHeight(height);
    }

    return height;
  }

  @override
  void performResize() {
    // TODO: implement performResize
    super.performResize();
  }

  @override
  void setupParentData(covariant RenderObject child) {
    // TODO: implement setupParentData
    super.setupParentData(child);
  }

  void _check(double width, double height) {
    KrakenController _controller = KrakenController.getControllerOfName(id)!;
    if(_controller == null){
      return;
    }
    print('tylorvan check id[$id]->[$width,$height]');
    bool viewportWidthHasChanged = _controller.view.viewportWidth != width;
    bool viewportHeightHasChanged = _controller.view.viewportHeight != height;
    Size viewportSize = Size(width, height);

    Future.microtask(() {
      if (viewportWidthHasChanged) {
        _controller.view.viewportWidth = width;
        _controller.view.document!.documentElement.style.setProperty(WIDTH, _controller.view.viewportWidth.toString() + 'px', viewportSize);
      }
      if (viewportHeightHasChanged) {
        _controller.view.viewportHeight = height;
        _controller.view.document!.documentElement.style.setProperty(HEIGHT, _controller.view.viewportHeight.toString() + 'px', viewportSize);
      }

      if (viewportWidthHasChanged || viewportHeightHasChanged) {
        // _controller.view.document.body.updateViewport(width, height);
        // _controller.view.viewport.markNeedsLayout();
        if (_controller.view != null) {
          traverseElement(_controller.view.document!.documentElement, (element) {
            if (element.isRendererAttached) {
              try {
                element.style.applyTargetProperties();
                element.renderBoxModel?.markNeedsLayout();
              } catch (e, stack) {
                print(stack);
              }
            }
          });
        }
      }
    });
  }

  @override
  void performLayout() {
    final BoxConstraints constraints = this.constraints;

    if (child != null) {
      child?.layout(_additionalConstraints.enforce(constraints),
          parentUsesSize: true);
      size = child!.size;
    } else {
      size = _additionalConstraints.enforce(constraints).constrain(Size.zero);
    }
    _check(constraints.maxWidth, constraints.maxHeight);
  }

  @override
  void debugPaintSize(PaintingContext context, Offset offset) {
    super.debugPaintSize(context, offset);
    assert(() {
      Paint paint;
      if (child == null || child!.size != null || child!.size.isEmpty) {
        paint = Paint()..color = const Color(0x90909090);
        context.canvas.drawRect(offset & size, paint);
      }
      return true;
    }());
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<BoxConstraints>(
        'additionalConstraints', additionalConstraints));
  }
}

class _KrakenResizeBox extends RenderBox {}

typedef KrakenControllerProvider = KrakenController? Function();

class DartKrakenControllerWrapper {
  KrakenControllerProvider? _provider;

  KrakenControllerProvider? get provider => _provider;
}
