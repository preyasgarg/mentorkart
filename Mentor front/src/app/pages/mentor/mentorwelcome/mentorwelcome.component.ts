import { Component, OnInit } from '@angular/core';
import { GetmymetorsService } from 'src/app/services/getmymetors.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface mentee {
  firstName : string,
  lastName : string,
  email: string
}

@Component({
  selector: 'app-mentorwelcome',
  templateUrl: './mentorwelcome.component.html',
  styleUrls: ['./mentorwelcome.component.css']
})
export class MentorwelcomeComponent implements OnInit {

  mentor : any = null;
  constructor(private getMyMentors : GetmymetorsService,private router : Router) { }


  ELEMENT_DATA!: mentee[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action1','action2'];
  dataSource = new MatTableDataSource<mentee>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.getAllMentees();
  }

  public getAllMentees(){
    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var mentorId = x.id;

    console.log(mentorId);
    
    
    let response = this.getMyMentors.getmymentees(mentorId);

    response.subscribe(mentor => this.dataSource.data = mentor as mentee[]);
  }

  public deletementee(menteeId:number)
  {
    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var mentorId = x.id;

    console.log(mentorId);
    console.log(menteeId);

     var res = this.getMyMentors.deletementors(mentorId,menteeId).subscribe(
       (data:any) =>
       {
           console.log(data.resString);
           Swal.fire("deleted successfully");
           window.location.href="/mentor"
       },
       (error:any) =>
       {
           console.error(error.resString);
           Swal.fire("nai hua");
       },
     );
     
    
  }
}
