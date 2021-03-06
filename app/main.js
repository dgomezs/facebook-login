"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var SocialLogin = require("nativescript-social-login");
var Application = require("application");
var app_module_1 = require("./app.module");
require("nativescript-localstorage");
if (Application.android) {
    Application.android.onActivityCreated = function (activity) {
        var result = SocialLogin.init({
            activity: activity
        });
    };
    SocialLogin.addLogger(function (msg, tag) {
        console.log('[nativescript-social-login]: (' + tag + '): ' + msg);
    });
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRywwREFBMEU7QUFDMUUsdURBQXlEO0FBQ3pELHlDQUEyQztBQUMzQywyQ0FBdUM7QUFDdkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFHckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLFFBQVE7UUFDN0MsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMxQixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUE7SUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBUSxFQUFFLEdBQVc7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7cGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIFNvY2lhbExvZ2luIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLWxvZ2luXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7QXBwTW9kdWxlfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcblxuXG5pZiAoQXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub25BY3Rpdml0eUNyZWF0ZWQgPSAoYWN0aXZpdHkpID0+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFNvY2lhbExvZ2luLmluaXQoe1xuICAgICAgICAgICAgYWN0aXZpdHk6IGFjdGl2aXR5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFNvY2lhbExvZ2luLmFkZExvZ2dlcihmdW5jdGlvbiAobXNnOiBhbnksIHRhZzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbbmF0aXZlc2NyaXB0LXNvY2lhbC1sb2dpbl06ICgnICsgdGFnICsgJyk6ICcgKyBtc2cpO1xuICAgIH0pO1xufVxuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdfQ==