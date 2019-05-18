import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "../../services/global-auth.service";
import { environment } from "@env/environment";
import { BehaviorSubject } from "rxjs";
import { UserServerAnswer } from "../interfaces/UserServerAnswer";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserStoreService {
  private currentUser = {};
  private apiUrl: string = environment.apiUrl;
  private  userWatcherSource: BehaviorSubject<any> = new BehaviorSubject(this.info);
  public userWatcher = this.userWatcherSource.asObservable();
  constructor(
    private  http: HttpClient,
    private globalAuth: GlobalAuthService
  ) { }
  public get info(): any {
    return this.currentUser;
  }

  public set info(user) {
    this.currentUser = { ...user };
    this.userWatcherSource.next({...user});
  }

  initCurrentUser(){
    const id = this.globalAuth.userId;
    this.http.get(`${this.apiUrl}/public/users/get-info/${id}`).subscribe((user: UserServerAnswer)=>{
      if (user._id) {
        this.info = user;
      }
    })
  }
}
