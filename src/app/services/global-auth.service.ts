import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private token: string;
  constructor() { }

  get isLogin() {
    if (localStorage.getItem('sn_app_token')) {
      return true;
    } else {
      return false;
    }
  }
}
