import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {NavComponent} from "./nav/nav.component";
import {AuthGuard} from "./auth.guard";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent
    ],
    providers: [AuthGuard],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
