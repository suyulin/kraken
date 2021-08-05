#import "AppDelegate.h"
#import "GeneratedPluginRegistrant.h"
#import "TestViewController.h"
#include "CustFlutterVC.h"

@interface AppDelegate ()


@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    
//    self.engineGroup = [[FlutterEngineGroup alloc] initWithName:@"my flutter engine" project:nil];
//    self.flutterEngine = [self.engineGroup makeEngineWithEntrypoint:@"main" libraryURI:nil];
    
    //@ normal engine
//    self.flutterEngine = [[FlutterEngine alloc] initWithName:@"my flutter engine"];


//    [FlutterEngineGroup group]
    // Runs the default Dart entrypoint with a default Flutter route.
//    [self.flutterEngine run];
    // Used to connect plugins (only if you have plugins with iOS platform code).
//    [GeneratedPluginRegistrant registerWithRegistry:self.flutterEngine];
    BOOL ret =  [super application:application didFinishLaunchingWithOptions:launchOptions];
    

//    [self.window.rootViewController.view addSubview:[self scanButton]];
    
//    [self.window.rootViewController.view addSubview:[self multiButton]];

    return ret;
    
//    __block UINavigationController *rvc = [[UINavigationController alloc] init];


    
//    [[BoostManger sharedInstance] initEngineWith:rvc complete:^{
//        rvc = [rvc initWithRootViewController:[[FlutterBoostPlugin sharedInstance] currentViewController]];
//        [rvc setNavigationBarHidden:YES];
//        [[[FlutterBoostPlugin sharedInstance] currentViewController].view addSubview:[self scanButton]];
//        self.window.rootViewController = rvc;
//    }];

}

- (void)click:(id)sender{

    //打开扫码 业务方自行替换
//    [[UniKrakenPlaygroundRouter sharedInstance] openKrakenScanPage];
}

- (UIButton*)scanButton{

    
    CGFloat width = [UIScreen mainScreen].bounds.size.width;
    UIButton *nativeButton = [UIButton buttonWithType:UIButtonTypeCustom];
       nativeButton.frame = CGRectMake((width - 200)/2,150,200,40);
       nativeButton.backgroundColor = [UIColor blueColor];
       [nativeButton setTitle:@"open Kraken standalone Page" forState:UIControlStateNormal];
    [nativeButton addTarget:self action:@selector(openHalfKrakenPage:) forControlEvents:UIControlEventTouchUpInside];
//    [self.view addSubview:nativeButton];
    
//    UIButton *scanButton = [UIButton buttonWithType:UIButtonTypeCustom];
//    [scanButton setImage:[UIImage imageNamed:@"scan_normal_scan_btn"] forState:UIControlStateNormal];
//    [scanButton  addTarget:self action:@selector(click:) forControlEvents:UIControlEventTouchUpInside];
//    if (@available(iOS 11.0, *)) {
//        [scanButton setFrame:CGRectMake(self.window.bounds.size.width - 50,self.window.safeAreaInsets.top, 40, 40)];
//    } else {
//        [scanButton setFrame:CGRectMake(0,120, 40, 40)];
//    }

    return nativeButton;
}


- (UIButton*)multiButton{

    
    CGFloat width = [UIScreen mainScreen].bounds.size.width;
    UIButton *nativeButton = [UIButton buttonWithType:UIButtonTypeCustom];
       nativeButton.frame = CGRectMake((width - 200)/2,400,200,40);
       nativeButton.backgroundColor = [UIColor blueColor];
       [nativeButton setTitle:@"Kraken multiview Page" forState:UIControlStateNormal];
    [nativeButton addTarget:self action:@selector(multiKrakenPage:) forControlEvents:UIControlEventTouchUpInside];
//    [self.view addSubview:nativeButton];
    
//    UIButton *scanButton = [UIButton buttonWithType:UIButtonTypeCustom];
//    [scanButton setImage:[UIImage imageNamed:@"scan_normal_scan_btn"] forState:UIControlStateNormal];
//    [scanButton  addTarget:self action:@selector(click:) forControlEvents:UIControlEventTouchUpInside];
//    if (@available(iOS 11.0, *)) {
//        [scanButton setFrame:CGRectMake(self.window.bounds.size.width - 50,self.window.safeAreaInsets.top, 40, 40)];
//    } else {
//        [scanButton setFrame:CGRectMake(0,120, 40, 40)];
//    }

    return nativeButton;
}

- (void)openHalfKrakenPage:(id)sender{
    
    FlutterEngine * engine = [[FlutterEngine alloc] init];
    
    
//    [engine runWithEntrypoint:@"flutterpagealone"];
    [engine run];
//    [engine runWithEntrypoint:@"standalone"];
    CustFlutterViewContainer* vc1 = [[CustFlutterViewContainer alloc] initWithEngine:engine nibName:nil bundle:nil];
//    FlutterViewController *flutterViewController =
//          [[FlutterViewController alloc] initWithProject:nil nibName:nil bundle:nil];
//    FlutterViewController* vc1 = [[FlutterViewController alloc] initWithEngine:engine nibName:nil bundle:nil];
//    [self addChildViewController:flutterViewController];
//    [self showViewController:<#(nonnull UIViewController *)#> sender:<#(nullable id)#>]
//    self.hidesBottomBarWhenPushed = YES;

    
    [self.window.rootViewController presentViewController:vc1 animated:YES completion:nil];
    
//    [self.window.rootViewController.navigationController pushViewController:vc1 animated:YES];
//    ]
//    FlutterViewController *flutterViewController =
//         [[FlutterViewController alloc] initWithProject:nil nibName:nil bundle:nil];
    
//     [self presentViewController:vc1 animated:YES completion:nil];
    
//    [[UniKrakenPlaygroundRouter sharedInstance] openHalfKrakenPage:@"https://dev.g.alicdn.com/UniKraken/unikraken_rax_demos/0.0.2/kraken/home.js"];

}

- (void)multiKrakenPage:(id)sender{

    TestViewController* vc1 = [TestViewController alloc];
    [self.window.rootViewController presentViewController:vc1 animated:YES completion:nil];

}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
