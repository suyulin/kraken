#import <Flutter/Flutter.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN
@interface CustFlutterViewContainer  : FlutterViewController

- (instancetype)init NS_DESIGNATED_INITIALIZER;

- (void)surfaceUpdated:(BOOL)appeared;

@end
NS_ASSUME_NONNULL_END
