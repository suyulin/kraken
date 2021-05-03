import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/rendering.dart';
import 'package:kraken/dom.dart';
import 'package:kraken/rendering.dart';
import 'package:kraken/src/dom/elements/platform_view.dart';

typedef PlatformViewComponentFactory = PlatformViewComponentClient Function(
  PlatformViewHost platformViewHost,
  String type, {
  Map creationParams,
  Set<Factory<OneSequenceGestureRecognizer>> gestureRecognizers,
});

PlatformViewComponentFactory _platformViewComponentFactory;

set platformViewComponentFactory(
    PlatformViewComponentFactory platformViewComponentFactory) {
  _platformViewComponentFactory = platformViewComponentFactory;
}

PlatformViewComponentFactory get platformViewComponentFactory {
  if (_platformViewComponentFactory == null) {
    throw Exception('PlatformViewComponentFactory cannot be null');
  }
  return _platformViewComponentFactory;
}

abstract class PlatformViewComponentClient {
  RenderBox getRenderBox();

  void setProperty(String key, value);

  void removeProperty(String key);

  void setStyle(String key, value);

  dynamic method(String name, dynamic args);

  void onSizeChange(double width, double height);

  void onAttachTo(Element parent, {RenderObject after});

  void onIntersectionChange(IntersectionObserverEntry entry);

  void onDetach();

  void onDispose();
}
