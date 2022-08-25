import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class UpdatementeeService {

  constructor(private httpClient : HttpClient) { }

  public getSearchMentees(menteeId:number)
  {
    return this.httpClient.get(`${environment.baseUrl}/allmentee/${menteeId}`);
  }
  public getSearchMentors(mentorId:number)
  {
    return this.httpClient.get(`${environment.baseUrl}/allmentor/${mentorId}`);
  }
  public updateMentee(mentee : any,menteeId : number)
  {
    return this.httpClient.post(`${environment.baseUrl}/updatementee/${menteeId}`,mentee);
  }
  public updateMentor(mentor : any,mentorId : number)
  {
    return this.httpClient.post(`${environment.baseUrl}/updatementor/${mentorId}`,mentor);
  }
}
