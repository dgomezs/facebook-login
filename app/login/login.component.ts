import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {Page} from "ui/page";
import * as SocialLogin from "nativescript-social-login";
import {ILoginResult} from "nativescript-social-login";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "login",
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]

})
export class LoginComponent implements OnInit {

    constructor(private page: Page, private router: RouterExtensions) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    facebookResult(result: ILoginResult): void {

        this.router.navigate(["nav"]);
    }

    loginWithFacebook(): void {
        let self: any = this;
        SocialLogin.loginWithFacebook((result) => {
            if (result.authToken) {
                console.log("result");
                self.facebookResult(result);
            } else {
                console.log("init");
            }
        });
    }
}
