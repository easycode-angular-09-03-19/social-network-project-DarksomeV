import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Notification } from "../interfaces/Notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private apiUrl: string = environment.apiUrl;
  private token = localStorage.getItem('sn_app_token');

  constructor(
    private http: HttpClient
  ) {}

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/public/users/notification`, { headers: new HttpHeaders({'x-access-token': this.token})
    });
  }
}
