import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NavComponent} from "./nav/nav.component";


const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "nav", component: NavComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}