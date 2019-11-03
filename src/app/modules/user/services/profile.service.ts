import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@env/environment";
import { PhotoAnswer } from "../interfaces/PhotoAnswer";

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
}
