import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { environment } from "@env/environment";
import {Observable} from "rxjs";
import {HomeContent} from "../interfaces/HomeContent";
import {Challenge} from "../interfaces/Challenge";

@Injectable()
export class HomeService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  getHomePage(): Observable<HomeContent>{
    return this.http.get<HomeContent>(`${this.apiUrl}/public/home`);
  }
  getActiveChallenges(): Observable<Challenge[]>{
    let params = new HttpParams();
    params = params.append('isActive', '0')
      .append('isClosed', '1')
      .append('limit', '6');
    const httpOptions = {
      params
    };
  return this.http.get<Challenge[]>(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }
}
