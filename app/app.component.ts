import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";



@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    constructor(private router: RouterExtensions) {

    }

    ngOnInit() {

    }
}