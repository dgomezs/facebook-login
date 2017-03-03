import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
declare var sessionStorage: any;

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log("session " + sessionStorage.getItem("AUTHENTICATED"));
        if (sessionStorage.getItem("AUTHENTICATED")) {
            return true;
        } else {
            // not logged in so redirect to login page
            this.router.navigate(["/login"]);
            return false;
        }
    }
}
