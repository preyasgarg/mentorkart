import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddmentorService } from 'src/app/services/addmentor.service';
import Swal from 'sweetalert2';

export interface mentor {
  firstName : string,
  lastName : string,
  email: string
}

@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.css']
})
export class AddmentorComponent implements OnInit {


  constructor(private addMentorService : AddmentorService) { }

  ELEMENT_DATA!: mentor[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action1','action2'];
  dataSource = new MatTableDataSource<mentor>(this.ELEMENT_DATA);
  menteeId=0;


  ngOnInit(): void {
    this.loadMentor();
  }
   public addMentor(mentorId : number)
   {
    console.log("reched in here")
    var x = JSON.parse(localStorage.getItem('user') || "")
    this.menteeId = x.id;

    let response = this.addMentorService.addmentor(mentorId,this.menteeId).subscribe(
      (data:any)=>
      {
         console.log("in add mentor"+response);
         Swal.fire("added successfully");
         console.log("added successfully")
         window.location.href="/mentee/addmentor";
      },
      (error:any)=>
      {
         console.log(error);
         Swal.fire("nai hua");
         
      },

    );
     

     console.log(mentorId);
     console.log(this.menteeId)

     
   }

   public loadMentor(){

     console.log("reched in here")
     var x = JSON.parse(localStorage.getItem('user') || "")
     this.menteeId = x.id;

     let response = this.addMentorService.otherthanmymentor(this.menteeId);
     response.subscribe(
       mentor => {this.dataSource.data = mentor as mentor[]
       console.log("in  load mentor"+mentor)});

   }
}
