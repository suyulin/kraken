//
//  TestViewController.m
//  Runner
//
//  Created by Tylor Van on 2021/8/4.
//
#import "AppDelegate.h"
#import "TestViewController.h"

@interface TestViewController ()

@end

@implementation TestViewController

- (void)viewDidLoad {
    [super viewDidLoad];
//    [self.view addSubview: [self multiButton]];
//    [self.view addSubview:[self multiButton]];
    // Do any additional setup after loading the view.
    
    
    
    AppDelegate *delegate = (AppDelegate*) [[UIApplication sharedApplication] delegate];
    
    
    
    FlutterEngineGroup *engineGroup = delegate.engineGroup;
    if(engineGroup == nil){
        delegate.engineGroup = [[FlutterEngineGroup alloc] initWithName:@"my flutter engine" project:nil];
        engineGroup = delegate.engineGroup;
    }
    FlutterEngine *engine = [engineGroup makeEngineWithEntrypoint:@"main" libraryURI:nil];
    
//    FlutterEngine *engine = [[FlutterEngine alloc]initWithName:@"my flutter engine1"];

//    [engine runWithEntrypoint:@"flutterpagealone"];
    [engine run];
//    [engine runWithEntrypoint:@"standalone"];
    FlutterViewController* vc1 = [[FlutterViewController alloc] initWithEngine:engine nibName:nil bundle:nil];
    [self addChildViewController:vc1];
    
    CGRect safeFrame =  self.view.safeAreaLayoutGuide.layoutFrame;
    CGFloat height =  safeFrame.size.height/2;
    
    vc1.view.frame = CGRectMake(safeFrame.origin.x, safeFrame.origin.y, safeFrame.size.width, height);
    [self.view addSubview:vc1.view];
//    [self didMoveToParentViewController:vc1]
    [vc1 didMoveToParentViewController:self];
    
//    FlutterEngine *engine2 = [[FlutterEngine alloc]initWithName:@"my flutter engine1"];

        FlutterEngine *engine2 = [engineGroup makeEngineWithEntrypoint:@"main" libraryURI:nil];
    
//    [engine runWithEntrypoint:@"flutterpagealone"];
    [engine2 run];
//    [engine runWithEntrypoint:@"standalone"];
    
    
    FlutterViewController* vc2 = [[FlutterViewController alloc] initWithEngine:engine2 nibName:nil bundle:nil];
    [self addChildViewController:vc2];
    vc2.view.frame = CGRectMake(safeFrame.origin.x, safeFrame.origin.y + height, safeFrame.size.width, height);
    [self.view addSubview:vc2.view];
//    [self didMoveToParentViewController:vc1]
    [vc2 didMoveToParentViewController:self];
    
}



- (UIButton*) multiButton{

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

- (void)multiKrakenPage:(id)sender{
    
//    FlutterEngine * engine = [[FlutterEngine alloc] init];
    
    AppDelegate *delegate = (AppDelegate*) [[UIApplication sharedApplication] delegate];
    FlutterEngineGroup *engineGroup = delegate.engineGroup;
    FlutterEngine *engine = [engineGroup makeEngineWithEntrypoint:@"main" libraryURI:nil];
    
//    [engine runWithEntrypoint:@"flutterpagealone"];
    [engine run];
//    [engine runWithEntrypoint:@"standalone"];
    FlutterViewController* vc1 = [[FlutterViewController alloc] initWithEngine:engine nibName:nil bundle:nil];
    [self addChildViewController:vc1];
    
    CGRect safeFrame =  self.view.safeAreaLayoutGuide.layoutFrame;
    CGFloat height =  safeFrame.size.height/2;
    
    vc1.view.frame = CGRectMake(safeFrame.origin.x, safeFrame.origin.y, safeFrame.size.width, height);
    [self.view addSubview:vc1.view];
//    [self didMoveToParentViewController:vc1]
    [vc1 didMoveToParentViewController:self];
//    vc1.didMoveToParentViewController
    
//    FlutterViewController *flutterViewController =
//          [[FlutterViewController alloc] initWithProject:nil nibName:nil bundle:nil];
//    FlutterViewController* vc1 = [[FlutterViewController alloc] initWithEngine:engine nibName:nil bundle:nil];
//    [self addChildViewController:flutterViewController];
//    [self showViewController:<#(nonnull UIViewController *)#> sender:<#(nullable id)#>]
//    self.hidesBottomBarWhenPushed = YES;

    
//    [self.parentViewController presentViewController:vc1 animated:YES completion:nil];
    
//    [self.window.rootViewController.navigationController pushViewController:vc1 animated:YES];
//    ]
//    FlutterViewController *flutterViewController =
//         [[FlutterViewController alloc] initWithProject:nil nibName:nil bundle:nil];
    
//     [self presentViewController:vc1 animated:YES completion:nil];
    
//    [[UniKrakenPlaygroundRouter sharedInstance] openHalfKrakenPage:@"https://dev.g.alicdn.com/UniKraken/unikraken_rax_demos/0.0.2/kraken/home.js"];

}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
