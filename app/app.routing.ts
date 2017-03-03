import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NavComponent} from "./nav/nav.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "", component: NavComponent, canActivate: [AuthGuard]}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}