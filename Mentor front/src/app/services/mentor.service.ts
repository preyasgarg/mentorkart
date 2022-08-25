import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class MentorService
 {

  constructor(private http: HttpClient) {}

 public addMentor(mentor:any)
 {
     return this.http.post(`${environment.baseUrl}/registermentor`,mentor);
 }
}