import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './helper';

@Injectable({
  providedIn: 'root'
})
export class GetmymetorsService 
{

  constructor(private httpClient : HttpClient) { }
  
  public getmymentors(menteeId : number)
  {
    return this.httpClient.get(`${environment.baseUrl}/listAllMentors/${menteeId}`);
  }
  public getmymentees(mentorId : number)
  {
    return this.httpClient.get(`${environment.baseUrl}/mymentees/${mentorId}`);
  }
  
  public getmentorprofile(mentorId : number)
  {
        //console.log("aayi"+mentorId)
        var response= this.httpClient.get(`${environment.baseUrl}/allmentor/${mentorId}`);
        console.log(response)
        return response;
  }
  public getmenteeprofile(menteeId : number)
  {
        //console.log("aayi"+mentorId)
        var response= this.httpClient.get(`${environment.baseUrl}/allmentee/${menteeId}`);
        console.log(response)
        return response;
  }
  public deletementors(mentorId:number,menteeId:number)
  {
    var response = this.httpClient.get(`${environment.baseUrl}/deletementor/${mentorId}/${menteeId}`);
    return response;
  }
  
 }

