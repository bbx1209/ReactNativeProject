//
//  MCRNStorage.m
//  MyRNProject
//
//  Created by 184564 on 2021/12/21.
//

#import "MCRNStorage.h"


 NSString * const const1= @"this is a const1";

@implementation MCRNStorage

RCT_EXPORT_MODULE(MCRNStorage);

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

-(NSDictionary *)constantsToExport {
  return @{
    @"Const1":[NSString stringWithString:const1],
    @"Const2":@"12345"
  };
}


RCT_EXPORT_METHOD(nativeDoSthNoParam) {
  NSLog(@"ios native do something");
}

RCT_EXPORT_METHOD(nativeDoSth:(NSString *)sth item:(NSString *)item) {
  NSLog(@"==== %@ %@", sth, item);
}

RCT_EXPORT_METHOD(queryCallback:(NSString *)url callback:(RCTResponseSenderBlock)callback) {
  NSLog(@"==== %@ ", url);
  if (callback) {
    callback(@[[NSNull null], @"result"]);
  }
}

RCT_EXPORT_METHOD(query:(NSString *)url resolver:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
  NSLog(@"==== %@ ", url);
  if (resolve) {
    resolve(url);
  }else {
    if (reject) {
      reject(@"error code", @"error msg", [NSError errorWithDomain:@"domain" code:300 userInfo:nil]);
    }
  }

}
- (dispatch_queue_t)methodQueue {
  return dispatch_queue_create("DISPATCH_QUEUE_SERIAL", DISPATCH_QUEUE_SERIAL);
}

@end
