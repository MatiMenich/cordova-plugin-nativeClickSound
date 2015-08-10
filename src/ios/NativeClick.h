//
//  CDVNativeClick.h
//  HelloCordova
//
//  Created by Matias Menich on 8/10/15.
//
//

#import <Cordova/CDV.h>
#import <AudioToolbox/AudioToolbox.h>

@interface NativeClick : CDVPlugin

- (void) click:(CDVInvokedUrlCommand *)command;

@end
