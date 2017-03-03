"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var page_1 = require("ui/page");
var NavComponent = (function () {
    function NavComponent(page) {
        this.page = page;
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
    __metadata("design:paramtypes", [page_1.Page])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRDtBQUNoRCxpQ0FBK0I7QUFDL0IsZ0NBQTZCO0FBUzdCLElBQWEsWUFBWTtJQUlyQixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBRXZDLENBQUM7cUNBSzRCLFdBQUk7R0FKckIsWUFBWSxDQWF4QjtBQWJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibmF2XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwibmF2L25hdi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibmF2L25hdi5jb21wb25lbnQuY3NzXCJdXG5cbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgdGFiaW5kZXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFicyBpbml0aWFsaXplXCIpXG4gICAgfVxuXG59XG4iXX0=