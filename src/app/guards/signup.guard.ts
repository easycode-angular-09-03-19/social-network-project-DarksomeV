import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {GlobalAuthService} from "../services/global-auth.service";

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {
  constructor(
    private globalAuth:GlobalAuthService,
    private router: Router
  ){}

  canActivate(route, state) {
    if (this.globalAuth.isLogin) {
      this.router.navigate(['/']);
    } else {
      return true;
    }
  }

}
