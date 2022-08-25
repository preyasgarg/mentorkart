import { Component, OnInit } from '@angular/core';
import { UpdatementeeService } from 'src/app/services/updatementee.service';
import { UpdatebalanceService } from 'src/app/updatebalance.service';

@Component({
  selector: 'app-updatefees',
  templateUrl: './updatefees.component.html',
  styleUrls: ['./updatefees.component.css']
})
export class UpdatefeesComponent implements OnInit {

  pickedoption!: string;
  options: string[] = ['increment','decrement'];
current_fees! : any; 
public mentor =
{
  fees:0,
}

   
constructor(private updatementee : UpdatementeeService,private updateBalance : UpdatebalanceService){}

  ngOnInit() : void 
  {
    this.current_fees=0;
    var x  = JSON.parse(localStorage.getItem('user') || "");
    var mentorId = x.id;
    this.current_fees = x.fees;
    console.log(this.current_fees);

    this.updatementee.getSearchMentors(mentorId).subscribe(
      (response:any) => {
        console.log(this.current_fees);
        this.mentor.fees=response.fees;
        this.current_fees=this.mentor.fees;
        console.log(this.current_fees);
      },
      (error:any) =>  {
        console.log(error);
      }
    );
  }
  dochange()
  {
    var x  = JSON.parse(localStorage.getItem('user') || "");
    var mentorId = x.id;
  console.log("in do change");
  if(this.pickedoption==='decrement')
  {
    this.current_fees=(-1*this.current_fees);
    console.log(this.current_fees)
  }
    this.updateBalance.updatementorfees(mentorId,this.current_fees).subscribe(
      (response:any) => {
        console.log(this.current_fees);
        console.log(response);
        window.location.href="/mentor/updatefees"
        
      },
      (error:any) =>  {
        console.log(error);
      }
    );



  }
}
