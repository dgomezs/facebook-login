"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var page_1 = require("ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var NavComponent = (function () {
    function NavComponent(page, router) {
        this.page = page;
        this.router = router;
        this.tabindex = 0;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        console.log("tabs initialize");
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: "nav",
        templateUrl: "nav/nav.component.html",
        styleUrls: ["nav/nav.component.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, nativescript_angular_1.RouterExtensions])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUNoRCxpQ0FBK0I7QUFDL0IsZ0NBQTZCO0FBQzdCLDZEQUFzRDtBQVF0RCxJQUFhLFlBQVk7SUFJckIsc0JBQW9CLElBQVUsRUFBVSxNQUF3QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBRXZDLENBQUM7cUNBSzRCLFdBQUksRUFBa0IsdUNBQWdCO0dBSnZELFlBQVksQ0FheEI7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5hdlwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIm5hdi9uYXYuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIm5hdi9uYXYuY29tcG9uZW50LmNzc1wiXVxuXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWJzIGluaXRpYWxpemVcIilcbiAgICB9XG5cbn1cbiJdfQ==