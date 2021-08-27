#import <Foundation/Foundation.h>
#import "Kraken.h"

static NSMutableArray *engineList = nil;
static NSMutableArray<Kraken*> *instanceList = nil;
static NSMutableArray *messengerList = nil;

@implementation Kraken

+ (Kraken*) instanceByBinaryMessenger: (NSObject<FlutterBinaryMessenger>*) messenger {
  for (int i = 0; i < messengerList.count; i++) {
    NSObject<FlutterBinaryMessenger>* msger = messengerList[i];
      if (msger == messenger) {
        return [instanceList objectAtIndex:i];
      }
  }
  return nil;
}

- (instancetype)initWithFlutterEngine: (FlutterEngine*) engine {

    self.flutterEngine = engine;

    return [self initWithBinaryMessenger:engine.binaryMessenger];;
}

- (instancetype _Nonnull)initWithBinaryMessenger: (NSObject<FlutterBinaryMessenger>* _Nonnull) messenger{

    FlutterMethodChannel *channel = [KrakenPlugin getMethodChannel];

    if (channel == nil) {
      NSException* exception = [NSException
                                exceptionWithName:@"InitError"
                                reason:@"KrakenSDK should init after Flutter's plugin registered."
                                userInfo:nil];
      @throw exception;
    }
    self.channel = channel;

    if (messengerList == nil) {
      messengerList = [[NSMutableArray alloc] initWithCapacity: 0];
    }
    [messengerList addObject: messenger];

    if (instanceList == nil) {
      instanceList = [[NSMutableArray alloc] initWithCapacity: 0];
    }
    [instanceList addObject: self];

    return self;
}

- (void) loadUrl:(NSString*)url {
  if (url != nil) {
    self.bundleUrl = url;
  }
}

- (void) reload {
  if (self.channel != nil) {
    [self.channel invokeMethod:@"reload" arguments:nil];
  }
}

- (void) reloadWithUrl: (NSString*) url {
  [self loadUrl: url];
  [self reload];
}

- (NSString*) getUrl {
  return self.bundleUrl;
}

- (void) invokeMethod:(NSString *)method arguments:(nullable id) arguments {
  dispatch_async(dispatch_get_main_queue(), ^{
    if (self.channel != nil) {
      [self.channel invokeMethod:method arguments:arguments];
    }
  });
}

- (void) _handleMethodCall:(FlutterMethodCall*)call result:(FlutterResult)result {
  if (self.methodHandler != nil) {
    self.methodHandler(call, result);
  }
}

- (void) registerMethodCallHandler: (MethodHandler) handler {
  self.methodHandler = handler;
}

@end


