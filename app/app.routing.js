"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var nav_component_1 = require("./nav/nav.component");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "nav", component: nav_component_1.NavComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVDO0FBQ3ZDLHNEQUFxRTtBQUVyRSwyREFBdUQ7QUFDdkQscURBQWlEO0FBR2pELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFDbkQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQzFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBQztDQUN6QyxDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFDQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUM1QjtBQURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXZDb21wb25lbnR9IGZyb20gXCIuL25hdi9uYXYuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxuICAgIHtwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuICAgIHtwYXRoOiBcIm5hdlwiLCBjb21wb25lbnQ6IE5hdkNvbXBvbmVudH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcbn0iXX0=