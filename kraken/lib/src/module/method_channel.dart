import 'dart:async';
import 'package:flutter/services.dart';
import 'package:flutter/foundation.dart';
import 'package:kraken/kraken.dart';
import 'package:kraken/src/module/module_manager.dart';

typedef MethodCallCallback = Future<dynamic> Function(JSContext jsContext, String method, dynamic arguments);
const String METHOD_CHANNEL_NOT_INITIALIZED = 'MethodChannel not initialized.';
const String CONTROLLER_NOT_INITIALIZED = 'Kraken controller not initialized.';

Future<dynamic> invokeMethodFromJavaScript(
    KrakenController controller, String method, List args) async {
  return await _invokeMethodFromJavaScript(controller, method, args);
}

Future<dynamic> _invokeMethodFromJavaScript(KrakenController controller, String method, List args) async{

  if(kDebugMode) {
    print('testTylor-> invokeMethodFromJavaScript context[${controller.module.moduleManager
        .contextId}] context[${controller.view.contextId}] method[$method] args[${args.toString()}]');
  }
  try {
    if (needInterceptorMethod(JSContext(controller.bundleURL, '${controller.view.contextId}'), method, args)) {
      return await interceptorMethod(JSContext(controller.bundleURL, '${controller.view.contextId}'), method, args);
    }
  } catch (e) {
    print(e);
  }

  if (controller == null || controller.methodChannel == null) {
    return Future.error(FlutterError(METHOD_CHANNEL_NOT_INITIALIZED));
  }
  return controller.methodChannel._invokeMethodFromJavaScript(JSContext(controller.bundleURL, '${controller.view.contextId}'), method, args);
}

const METHOD_CHANNEL_NAME = 'MethodChannel';

class MethodChannelModule extends BaseModule {
  @override
  String get name => METHOD_CHANNEL_NAME;
  MethodChannelModule(ModuleManager moduleManager) : super(moduleManager);

  @override
  void dispose() {}

  @override
  String invoke(String method, dynamic params, callback) {
    if (method == 'invokeMethod') {
      _invokeMethodFromJavaScript(moduleManager.controller, params[0], params[1]).then((result) {
        callback(data: result);
      }).catchError((e, stack) {
        callback(errmsg: '$e\n$stack');
      });
    }
    return '';
  }
}

class KrakenMethodChannel {
  MethodCallCallback _onJSMethodCallCallback;

  set _onJSMethodCall(MethodCallCallback value) {
    assert(value != null);
    _onJSMethodCallCallback = value;
  }

  Future<dynamic> _invokeMethodFromJavaScript(JSContext jsContext,String method, List arguments) async {}

  static void setJSMethodCallCallback(KrakenController controller) {
    if (controller.methodChannel == null) return;

    controller.methodChannel._onJSMethodCall = (JSContext jsContext,String method, dynamic arguments) async {
      controller.module.moduleManager.emitModuleEvent(METHOD_CHANNEL_NAME, data: [method, arguments]);
    };
  }
}

class KrakenJavaScriptChannel extends KrakenMethodChannel {
  Future<dynamic> invokeMethod(JSContext jsContext, String method, dynamic arguments) async {
    try {
      if (needInterceptorMethod(jsContext, method, arguments)) {
        return await interceptorMethod(jsContext, method, arguments);
      }
    } catch (e) {
      print(e);
    }

    if (_onJSMethodCallCallback == null) {
      return null;
    }
    return _onJSMethodCallCallback(jsContext, method, arguments);
  }

  MethodCallCallback _methodCallCallback;

  MethodCallCallback get methodCallCallback => _methodCallCallback;

  set onMethodCall(MethodCallCallback value) {
    assert(value != null);
    _methodCallCallback = value;
  }

  Future<dynamic> _invokeMethodFromJavaScript(JSContext jsContext, String method, List arguments) {
    if (_methodCallCallback == null) return Future.value(null);
    return _methodCallCallback(jsContext, method, arguments);
  }
}

class KrakenNativeChannel extends KrakenMethodChannel {
  // Flutter method channel used to communicate with public SDK API
  // Only works when integration wieh public SDK API
  static MethodChannel _nativeChannel = MethodChannel('kraken')
    ..setMethodCallHandler((call) async {
      String method = call.method;
      KrakenController controller = KrakenController.getControllerOfJSContextId(0);

      if ('reload' == method) {
        await controller.reload();
      } else if (controller.methodChannel._onJSMethodCallCallback != null) {
        return controller.methodChannel._onJSMethodCallCallback(JSContext(controller.bundleURL, '${controller.view.contextId}'), method, call.arguments);
      }

      return Future<dynamic>.value(null);
    });

  Future<dynamic> _invokeMethodFromJavaScript(JSContext jsContext,String method, List arguments) async {
    Map<String, dynamic> argsWrap = {
      'method': method,
      'jsContext': jsContext.toMap(),
      'args': arguments,
    };
    try {
      if (needInterceptorMethod(jsContext,method, arguments)) {
        return await interceptorMethod(jsContext,method, arguments);
      }
    } catch (e) {
      print(e);
    }
    return _nativeChannel.invokeMethod('invokeMethod', argsWrap);
  }

  Future<String> getUrl() async {
    // Maybe url of zip bundle or js bundle
    String url = await _nativeChannel.invokeMethod('getUrl');

    // @NOTE(zhuoling.lcl): Android plugin protocol cannot return `null` directly, which
    // will case method channel invoke failed with exception, use empty
    // string to represent null value.
    if (url != null && url.isEmpty) url = null;
    return url;
  }
}
