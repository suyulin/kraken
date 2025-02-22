/*
 * Copyright (C) 2021-present Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

import 'dart:ffi';

import 'package:kraken/bridge.dart';
import 'package:kraken/css.dart';
import 'package:kraken/dom.dart';

const String TEMPLATE = 'TEMPLATE';

const Map<String, dynamic> _defaultStyle = {
  DISPLAY: NONE,
};

class TemplateElement extends Element {
  TemplateElement(int targetId, Pointer<NativeEventTarget> nativePtr, ElementManager elementManager)
      : super( targetId, nativePtr, elementManager, defaultStyle: _defaultStyle);
}
