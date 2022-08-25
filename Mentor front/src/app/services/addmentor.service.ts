import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './helper';


@Injectable({
  providedIn: 'root'
})
export class AddmentorService {

  constructor(private httpClient : HttpClient) { }
    
  public addmentor(mentorId : number,menteeId : number)
  {
    return this.httpClient.get(`${environment.baseUrl}/addmentor/${mentorId}/${menteeId}`);
  }
 
  public otherthanmymentor(menteeId : number)
  {
    return this.httpClient.get(`${environment.baseUrl}/otherthanmymentor/${menteeId}`);
  }
  public otherthanmymentee(mentorId : number)
  {
    return this.httpClient.get(`${environment.baseUrl}/otherthanmymentee/${mentorId}`);
  }

}
