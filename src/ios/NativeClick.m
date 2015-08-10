//
//  CDVNativeClick.m
//  HelloCordova
//
//  Created by Matias Menich on 8/10/15.
//
//

#import "NativeClick.h"

@implementation NativeClick

- (void) click:(CDVInvokedUrlCommand *)command {
    [self.commandDelegate runInBackground:^{

        AudioServicesPlaySystemSound(0x450);

        NSString* payload = nil;

        CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        
    }];
}

@end
