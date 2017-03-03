import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "nav",
    templateUrl: "nav/nav.component.html",
    styleUrls: ["nav/nav.component.css"]

})
export class NavComponent implements OnInit {

    private tabindex: number;

    constructor(private page: Page) {
        this.tabindex = 0;
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        console.log("tabs initialize")
    }

}
