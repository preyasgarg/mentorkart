import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddmentorService } from 'src/app/services/addmentor.service';
import { GetmymetorsService } from 'src/app/services/getmymetors.service';
import Swal from 'sweetalert2';

export interface mentee {
  firstName : string,
  lastName : string,
  email: string
}


@Component({
  selector: 'app-addmentee',
  templateUrl: './addmentee.component.html',
  styleUrls: ['./addmentee.component.css']
})
export class AddmenteeComponent implements OnInit {

  constructor(private addMentorService : AddmentorService,private getMyMentors : GetmymetorsService) { }

  ELEMENT_DATA!: mentee[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action1','action2'];
  dataSource = new MatTableDataSource<mentee>(this.ELEMENT_DATA);
  mentorId=0;


  ngOnInit(): void {
    this.loadMentee();
  }
   public addMentee(menteeId : number)
   {
    console.log("reched in here")
    var x = JSON.parse(localStorage.getItem('user') || "")
    this.mentorId = x.id;

    let response = this.addMentorService.addmentor(this.mentorId,menteeId).subscribe(
      (data:any)=>
      {
         console.log("in add mentor"+response);
         Swal.fire("added successfully");
         console.log("added successfully")
         window.location.href="/mentor/addmentee";
      },
      (error:any)=>
      {
         console.log(error);
         Swal.fire("nai hua");
         
      },

    );
     

     console.log(this.mentorId);
     console.log(menteeId)

     
   }

   public loadMentee(){

     console.log("reched in here")
     var x = JSON.parse(localStorage.getItem('user') || "")
     this.mentorId = x.id;

     let response = this.addMentorService.otherthanmymentee(this.mentorId);
     response.subscribe(
       mentee => {this.dataSource.data = mentee as mentee[]
       console.log("in  load mentee"+mentee)});

   }

}
