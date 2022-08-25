import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class DeletementeeService {

  constructor(private httpClient : HttpClient) { }

  public delete(menteeId : number){

    return this.httpClient.get(`${environment.baseUrl}/deletementee/${menteeId}`);
  }
  public mentordelete(mentorId : number){

    return this.httpClient.get(`${environment.baseUrl}/deletementor/${mentorId}`);
  }
}
