import { Component, OnInit } from '@angular/core';
import { GetmymetorsService } from 'src/app/services/getmymetors.service';
import { MatTableDataSource } from '@angular/material/table';
import { Mentee } from '../mentee';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



export interface mentor {
  firstName : string,
  lastName : string,
  email: string
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  mentor : any = null;
  constructor(private getMyMentors : GetmymetorsService,private router : Router) { }


  ELEMENT_DATA!: mentor[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action1','action2'];
  dataSource = new MatTableDataSource<mentor>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.getAllMentees();
  }

  public getAllMentees(){
    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var menteeId = x.id;

    console.log(menteeId);
    
    
    let response = this.getMyMentors.getmymentors(menteeId);

    response.subscribe(mentor => this.dataSource.data = mentor as mentor[]);
  }

  public deletementor(mentorId:number)
  {
    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var menteeId = x.id;

    console.log(mentorId);
    console.log(menteeId);

     var res = this.getMyMentors.deletementors(mentorId,menteeId).subscribe(
       (data:any) =>
       {
           console.log(data.resString);
           Swal.fire("deleted successfully");
           window.location.href="/mentee"
       },
       (error:any) =>
       {
           console.error(error.resString);
           Swal.fire("nai hua");
       },
     );
     
    
  }
 

}
