
import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UpdatementeeService } from 'src/app/services/updatementee.service';
import { UpdatebalanceService } from 'src/app/updatebalance.service';
@Component({
  selector: 'app-updatebalance',
  templateUrl: './updatebalance.component.html',
  styleUrls: ['./updatebalance.component.css']
})

export class UpdatebalanceComponent implements OnInit
{
  pickedoption!: string;
  options: string[] = ['increment','decrement'];
current_bal! : any; 
public mentee =
{
  balance:0,
}

   
constructor(private updatementee : UpdatementeeService,private updateBalance : UpdatebalanceService){}

  ngOnInit() : void 
  {
    this.current_bal=0;
    var x  = JSON.parse(localStorage.getItem('user') || "");
    var menteeId = x.id;
    this.current_bal = menteeId.balance;
    console.log(this.current_bal);

    this.updatementee.getSearchMentees(menteeId).subscribe(
      (response:any) => {
        console.log(this.current_bal);
        this.mentee.balance=response.balance;
        this.current_bal=this.mentee.balance;
        console.log(this.current_bal);
      },
      (error:any) =>  {
        console.log(error);
      }
    );
  }
  dochange()
  {
    var x  = JSON.parse(localStorage.getItem('user') || "");
    var menteeId = x.id;
  console.log("in do change");
  if(this.pickedoption==='decrement')
  {
    this.current_bal=(-1*this.current_bal);
    //console.log(this.current_bal)
  }
    this.updateBalance.updatementeebalance(menteeId,this.current_bal).subscribe(
      (response:any) => {
        console.log(this.current_bal);
        console.log(response);
        window.location.href="/mentee/updatebalance"
        
      },
      (error:any) =>  {
        console.log(error);
      }
    );



  }
}

  