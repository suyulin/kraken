import 'package:kraken/src/module/js_context.dart';

abstract class MethodCallbackInterceptor {
  //True if the listener has consumed the event, false otherwise
  bool interceptJSMethodCall(JSContext jsContext, String method, dynamic arguments);

  Future<dynamic> onJSMethodCall(JSContext jsContext, String method, dynamic arguments);
}

Map<String, MethodCallbackInterceptor> _interceptors = Map();

void setMethodCallbackInterceptor(
    String name, MethodCallbackInterceptor interceptor) {
  if (name == null ||
      name.isEmpty ||
      interceptor == null ||
      _interceptors.containsKey(name)) {
    return;
  }

  _interceptors[name] = interceptor;
}

bool needInterceptorMethod(JSContext _jsContext, String _name, dynamic params) {
  if (_name == null || _name.isEmpty || _interceptors[_name] == null) {
    return false;
  }

  try {
    bool ret = _interceptors[_name] != null && _interceptors[_name].interceptJSMethodCall(_jsContext, _name, params);
    return ret;
  } catch (e) {
    print(e);
  }
  return false;
}

Future<dynamic> interceptorMethod(JSContext _jsContext, String _name, dynamic arguments) async {
  if (_name == null || _name.isEmpty || _interceptors[_name] == null) {
    return null;
  }

  try {
    MethodCallbackInterceptor interceptor = _interceptors[_name];
    return await interceptor.onJSMethodCall(_jsContext, _name, arguments);
  } catch (e) {
    print(e);
  }
  return null;
}
