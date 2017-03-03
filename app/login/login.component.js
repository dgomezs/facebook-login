"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var page_1 = require("ui/page");
var SocialLogin = require("nativescript-social-login");
var nativescript_angular_1 = require("nativescript-angular");
var application = require("application");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        SocialLogin.loginWithFacebook(function (result) {
            if (result.authToken) {
                sessionStorage.setItem("AUTHENTICATED", true);
                _this.restartApp();
            }
        });
    };
    LoginComponent.prototype.restartApp = function () {
        var intent = new android.content.Intent(application.android.context, java.lang.Class.forName("com.tns.NativeScriptActivity"));
        intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        application.android.foregroundActivity.startActivity(intent);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "login/login.component.html",
        styleUrls: ["login/login.component.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, nativescript_angular_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0Q7QUFDaEQsaUNBQStCO0FBQy9CLGdDQUE2QjtBQUM3Qix1REFBeUQ7QUFFekQsNkRBQXNEO0FBQ3RELHlDQUEyQztBQVczQyxJQUFhLGNBQWM7SUFFdkIsd0JBQW9CLElBQVUsRUFBVSxNQUF3QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDaEUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUFBLGlCQVFDO1FBTkcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFVBQUMsTUFBTTtZQUNqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUVJLElBQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNoSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDL0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBRTNDLENBQUM7cUNBRzRCLFdBQUksRUFBa0IsdUNBQWdCO0dBRnZELGNBQWMsQ0F5QjFCO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsTG9naW4gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtbG9naW5cIjtcbmltcG9ydCB7SUxvZ2luUmVzdWx0fSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1sb2dpblwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5kZWNsYXJlIHZhciBzZXNzaW9uU3RvcmFnZTogYW55O1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcIl1cblxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGxvZ2luV2l0aEZhY2Vib29rKCk6IHZvaWQge1xuXG4gICAgICAgIFNvY2lhbExvZ2luLmxvZ2luV2l0aEZhY2Vib29rKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuYXV0aFRva2VuKSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIkFVVEhFTlRJQ0FURURcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0QXBwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RhcnRBcHAoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaW50ZW50ID0gbmV3IGFuZHJvaWQuY29udGVudC5JbnRlbnQoYXBwbGljYXRpb24uYW5kcm9pZC5jb250ZXh0LCBqYXZhLmxhbmcuQ2xhc3MuZm9yTmFtZShcImNvbS50bnMuTmF0aXZlU2NyaXB0QWN0aXZpdHlcIikpO1xuICAgICAgICBpbnRlbnQuYWRkRmxhZ3MoYW5kcm9pZC5jb250ZW50LkludGVudC5GTEFHX0FDVElWSVRZX05FV19UQVNLKTtcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xuICAgIH1cbn1cbiJdfQ==