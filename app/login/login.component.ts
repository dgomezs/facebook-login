import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {Page} from "ui/page";
import * as SocialLogin from "nativescript-social-login";
import {ILoginResult} from "nativescript-social-login";
import {RouterExtensions} from "nativescript-angular";
import * as application from "application";

declare var sessionStorage: any;


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

    loginWithFacebook(): void {

        SocialLogin.loginWithFacebook((result) => {
            if (result.authToken) {
                sessionStorage.setItem("AUTHENTICATED", true);
                this.restartApp();
            }
        });
    }

    restartApp(): void {

        const intent = new android.content.Intent(application.android.context, java.lang.Class.forName("com.tns.NativeScriptActivity"));
        intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        application.android.foregroundActivity.startActivity(intent);
    }
}
