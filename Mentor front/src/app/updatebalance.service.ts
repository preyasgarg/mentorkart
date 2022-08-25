import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './services/helper';


@Injectable({
  providedIn: 'root'
})
export class UpdatebalanceService 
{

  constructor(private httpClient : HttpClient) { }

  public updatementeebalance(menteeId : number,balance : number)
  {
    return this.httpClient.get(`${environment.baseUrl}/updatementeebalance/${menteeId}/${balance}`);
  }
  public updatementorfees(mentorId : number,fees : number)
  {
    console.log("In update mentor fees")
    return this.httpClient.get(`${environment.baseUrl}/updatementorfees/${mentorId}/${fees}`);
  }
}
