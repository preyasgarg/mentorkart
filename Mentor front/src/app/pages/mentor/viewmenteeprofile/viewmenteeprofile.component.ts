import { Component, OnInit } from '@angular/core';
import { GetmymetorsService } from 'src/app/services/getmymetors.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewmenteeprofile',
  templateUrl: './viewmenteeprofile.component.html',
  styleUrls: ['./viewmenteeprofile.component.css']
})
export class ViewmenteeprofileComponent implements OnInit {

  mentee : any = null;
  
  constructor(private getmymentors : GetmymetorsService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getmenteeprofile();
  }


  
  public getmenteeprofile()
  {
    console.log("aaya")
    var ids =  Number(this.activatedRoute.snapshot.paramMap.get("id"))
    console.log("aaya"+ids)

  this.getmymentors.getmenteeprofile(ids).subscribe(
    (data:any)=>
    {
      console.log(data);
      this.mentee=data;
    },
    (error:any)=>
    {
      console.log(error);
    }
    
  );
    console.log("gotmentor")
    console.log(this.mentee);
  }

}
