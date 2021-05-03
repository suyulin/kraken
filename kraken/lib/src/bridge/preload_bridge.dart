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
  preloadBridge();
  return context;
}
