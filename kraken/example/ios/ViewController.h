//
//  ViewController.h
//  Runner
//
//  Created by Tylor Van on 2021/8/4.
//

#import <UIKit/UIKit.h>
#import <Flutter/Flutter.h>
#import <UIKit/UIKit.h>
#include <Flutter/FlutterEngineGroup.h>
#include "CustFlutterVC.h"

NS_ASSUME_NONNULL_BEGIN

@interface ViewController : UIViewController

@property (nonatomic,strong) FlutterEngine *flutterEngine;
@property (nonatomic,strong) FlutterEngineGroup *engineGroup;

@end

NS_ASSUME_NONNULL_END
