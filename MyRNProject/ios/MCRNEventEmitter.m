//
//  MCRNEventEmitter.m
//  MyRNProject
//
//  Created by 184564 on 2021/12/21.
//

#import "MCRNEventEmitter.h"


@implementation MCRNEventEmitter

RCT_EXPORT_MODULE(MCRNEventEmitter);


- (NSArray<NSString *> *)supportedEvents {
  return @[@"componentDidAppear", @"componentDisAppear"];
}

RCT_EXPORT_METHOD(sendMCEvent:(NSString *)msg) {
  [self sendEventWithName:@"componentDidAppear" body:@{@"msg":msg}];
}

- (instancetype)init {
  if(self = [super init]) {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(receiveNot:) name:@"" object:nil];
  }
  return self;
}

- (void)receiveNot:(NSNotification *)not {
  
}

+(BOOL)requiresMainQueueSetup {
  return YES;
}

@end
