//
//  CustFlutterVC.m
//  Runner
//
//  Created by Tylor Van on 2021/8/4.
//

#import "CustFlutterVC.h"
#import "AppDelegate.h"

@interface CustFlutterViewContainer()

@property (nonatomic, strong) NSString * routeParams;

@end


@implementation CustFlutterViewContainer


- (void)viewDidLoad {
    [super viewDidLoad];
    NSLog(@"CustFlutterViewContainer viewDidLoad");
    [[self view] addSubview:[self scanButton]];
//    [self.window.rootViewController.view addSubview:[self scanButton]];
}


- (UIButton*)scanButton{

    
    CGFloat width = [UIScreen mainScreen].bounds.size.width;
    UIButton *nativeButton = [UIButton buttonWithType:UIButtonTypeCustom];
       nativeButton.frame = CGRectMake((width - 200)/2,150,200,40);
       nativeButton.backgroundColor = [UIColor blueColor];
       [nativeButton setTitle:@"open 2 Kraken standalone Page" forState:UIControlStateNormal];
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

- (void)openHalfKrakenPage:(id)sender{
    
    
    AppDelegate *delegate = (AppDelegate*)[[UIApplication sharedApplication] delegate];
    FlutterEngineGroup *engineGroup = delegate.engineGroup;
    FlutterEngine * engine = [engineGroup makeEngineWithEntrypoint:@"main" libraryURI:nil];
//    FlutterEngine * engine = [[FlutterEngine alloc] init];
    
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

 
    [self presentViewController:vc1 animated:YES completion:nil];
    
//    [self.window.rootViewController.navigationController pushViewController:vc1 animated:YES];
//    ]
//    FlutterViewController *flutterViewController =
//         [[FlutterViewController alloc] initWithProject:nil nibName:nil bundle:nil];
    
//     [self presentViewController:vc1 animated:YES completion:nil];
    
//    [[UniKrakenPlaygroundRouter sharedInstance] openHalfKrakenPage:@"https://dev.g.alicdn.com/UniKraken/unikraken_rax_demos/0.0.2/kraken/home.js"];

}

-(void)dealloc
{
    NSLog(@"CustFlutterViewContainer dealloc");
}
@end
