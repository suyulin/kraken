#import <Flutter/Flutter.h>
#import <UIKit/UIKit.h>
#include <Flutter/FlutterEngineGroup.h>

@interface AppDelegate : FlutterAppDelegate // More on the FlutterAppDelegate below.
@property (nonatomic,strong) FlutterEngine *flutterEngine;
@property (nonatomic,strong) FlutterEngineGroup *engineGroup;

@property (nullable, nonatomic, strong) UIWindow *window;

@end
