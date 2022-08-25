import { Component, OnInit } from '@angular/core';
import { GetmymetorsService } from 'src/app/services/getmymetors.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

// export interface mentor {
//   id:0;
//   firstName : string;
//   lastName : string;
//   addLine1 : string;
//   addLine2 : string;
//   district:string;
//   state:string;
//   pin:string;
//   company1:string;
//   company2:string;
//   company3:string;
//   company4:string;
//   skill1:string;
//   skill2:string;
//   skill3:string;
//   skill4:string;
//   email: string;
//   phoneNumber:string;
//   gender:string;
//   balance:number;
//   age:number;
//   yearOfExperience:number;
//   fees:number;
// }

@Component({
  selector: 'app-viewmentorprofile',
  templateUrl: './viewmentorprofile.component.html',
  styleUrls: ['./viewmentorprofile.component.css']
})
export class ViewmentorprofileComponent implements OnInit {
  mentor : any = null;
  
  constructor(private getmymentors : GetmymetorsService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getmentorrprofile();
  }


  
  public getmentorrprofile()
  {
    console.log("aaya")
    var ids =  Number(this.activatedRoute.snapshot.paramMap.get("id"))
    console.log("aaya"+ids)

  this.getmymentors.getmentorprofile(ids).subscribe(
    (data:any)=>
    {
      console.log(data);
      this.mentor=data;
    },
    (error:any)=>
    {
      console.log(error);
    }
    
  );
    console.log("gotmentor")
    console.log(this.mentor);
  }
}
