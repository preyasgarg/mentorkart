import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from './helper';

@Injectable({
  providedIn: 'root'
})
export class MenteeService {

  constructor(private http: HttpClient) {
  
   }

  public addMentee(mentee:any)
  {
      return this.http.post(`${environment.baseUrl}/registermentee`,mentee);
  }
}
