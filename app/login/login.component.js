"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var page_1 = require("ui/page");
var SocialLogin = require("nativescript-social-login");
var nativescript_angular_1 = require("nativescript-angular");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.facebookResult = function (result) {
        this.router.navigate(["nav"]);
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        var self = this;
        SocialLogin.loginWithFacebook(function (result) {
            if (result.authToken) {
                console.log("result");
                self.facebookResult(result);
            }
            else {
                console.log("init");
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0Q7QUFDaEQsaUNBQStCO0FBQy9CLGdDQUE2QjtBQUM3Qix1REFBeUQ7QUFFekQsNkRBQXNEO0FBUXRELElBQWEsY0FBYztJQUV2Qix3QkFBb0IsSUFBVSxFQUFVLE1BQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUNoRSxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLE1BQW9CO1FBRS9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFDLE1BQU07WUFDakMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBRTNDLENBQUM7cUNBRzRCLFdBQUksRUFBa0IsdUNBQWdCO0dBRnZELGNBQWMsQ0F5QjFCO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsTG9naW4gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtbG9naW5cIjtcbmltcG9ydCB7SUxvZ2luUmVzdWx0fSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1sb2dpblwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibG9naW4vbG9naW4uY29tcG9uZW50LmNzc1wiXVxuXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgZmFjZWJvb2tSZXN1bHQocmVzdWx0OiBJTG9naW5SZXN1bHQpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJuYXZcIl0pO1xuICAgIH1cblxuICAgIGxvZ2luV2l0aEZhY2Vib29rKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcbiAgICAgICAgU29jaWFsTG9naW4ubG9naW5XaXRoRmFjZWJvb2soKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5hdXRoVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmZhY2Vib29rUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19