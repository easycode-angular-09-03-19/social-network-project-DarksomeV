import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@env/environment";
import { PhotoAnswer } from "../interfaces/PhotoAnswer";
import {Follow} from "../interfaces/Follow";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getImages(id:string):Observable<PhotoAnswer> {
    return this.http.get<PhotoAnswer>(`${this.apiUrl}/public/users/my-images/${id}`);
  }

  getFavorites(id:string):Observable<PhotoAnswer> {
    let params = new HttpParams();
    params = params.append("part", "1").append("limit", "20");
    const httpOptions = {
      params
    };
    return this.http.get<PhotoAnswer>(`${this.apiUrl}/public/users/my-favorites/${id}`, httpOptions);
  }

  getFollowings(id:string):Observable<Follow> {
    let params = new HttpParams();
    params = params.append("part", "1").append("limit", "6").append('path', 'followers');
    const httpOptions = {
      params
    };
    return this.http.get<Follow>(`${this.apiUrl}/public/users/my-followers-followings/${id}`, httpOptions);
  }

  getFollowers(id:string):Observable<Follow> {
    let params = new HttpParams();
    params = params.append("part", "1").append("limit", "6").append('path', 'followings');
    const httpOptions = {
      params
    };
    return this.http.get<Follow>(`${this.apiUrl}/public/users/my-followers-followings/${id}`, httpOptions);
  }
}
