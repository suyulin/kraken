import 'package:kraken/bridge.dart';

int preloadedContext;

preloadBridge() {
  try {
    preloadedContext = initBridge();
  } catch (e) {
    print(e);
  }
}

int peekPreloadContext() {
  int context = preloadedContext;
  context = _ensureContext(context);
  preloadBridge();
  return context;
}

int _ensureContext(int context) {
  if(context == null){
    try {
      context = initBridge();
    } catch (e) {
      print(e);
    }
  }
  return context;
}
