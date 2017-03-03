// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import * as SocialLogin from "nativescript-social-login";
import * as Application from "application";
import {AppModule} from "./app.module";
require("nativescript-localstorage");


if (Application.android) {
    Application.android.onActivityCreated = (activity) => {
        var result = SocialLogin.init({
            activity: activity
        });
    }

    SocialLogin.addLogger(function (msg: any, tag: string) {
        console.log('[nativescript-social-login]: (' + tag + '): ' + msg);
    });
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
