import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globalsignup',
  templateUrl: './globalsignup.component.html',
  styleUrls: ['./globalsignup.component.css']
})
export class GlobalsignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedoption!: string;
  options: string[] = ['Mentee', 'Mentor'];

  redirection()
  {
    console.log(this.selectedoption)
    if(this.selectedoption==='Mentee')
    {
      //console.log("Mentee linking")
      window.location.href="/menteeSignup";
    }
    else if(this.selectedoption==='Mentor')
    {
      window.location.href="/mentorsignup";
    }
    else
    {
      window.location.href="/RadioNgModelExample";

    }
  }

}
