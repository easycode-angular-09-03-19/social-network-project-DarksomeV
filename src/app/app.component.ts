import { Component, OnInit } from '@angular/core';
import {CurrentUserStoreService} from "./common/services/current-user-store.service";
import {GlobalAuthService} from "./services/global-auth.service";
import { RouteConfigLoadStart, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadingRouterConfig: Observable<boolean>;
  constructor(
    private currentUser: CurrentUserStoreService,
    private globalAuth: GlobalAuthService,
    private router: Router
  ){}
  ngOnInit(): void {
    if (this.globalAuth.token){
      this.currentUser.initCurrentUser();
    }

    this.loadingRouterConfig = this.router.events.pipe(map((event) => event instanceof RouteConfigLoadStart));


    // this.router.events.subscribe((event) => {
    //   if (event instanceof RouteConfigLoadStart) {
    //     this.loadingRouterConfig = true;
    //   } else if (event instanceof RouteConfigLoadEnd) {
    //     this.loadingRouterConfig = false;
    //   }
    // });
  }
}
