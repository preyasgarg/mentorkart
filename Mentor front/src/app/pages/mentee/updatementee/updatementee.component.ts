import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatementeeService } from 'src/app/services/updatementee.service';


@Component({
  selector: 'app-updatementee',
  templateUrl: './updatementee.component.html',
  styleUrls: ['./updatementee.component.css']
})
export class UpdatementeeComponent implements OnInit {

  mentee = {
    id: 0,
    firstName : '',
    lastName : '',
    addLine1: '',
    addLine2: '',
    district: '',
    pin: '',
    state:'',
    skill1 : '',
    skill2 : '',
    skill3 : '',
    skill4 : '',
    email : '',
    phoneNumber : '',
    gender : '',
    balance:0,
    age:0,
    type:'',
  };

  disable = true;
  isComplaintUpdate = true;
  errorMsg = '';
  menteeId=0;

  constructor(private activatedroute: ActivatedRoute, private updatementee : UpdatementeeService) { }

  ngOnInit(): void {

    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var menteeId = x.id;

    this.updatementee.getSearchMentees(menteeId).subscribe(
      (response:any) => {
        console.log("response is "+response);
        console.log("response firstname is "+response.firstName);
        console.log("response skill 1 is "+response.currentskills);
        console.log("response adress is "+response.addressDetail);
        this.mentee.id = response.id;
        this.mentee.firstName=response.firstName;
        this.mentee.lastName=response.lastName;
        this.mentee.addLine1 = response.addressDetail.addLine1;
        this.mentee.addLine2 = response.addressDetail.addLine2;
        this.mentee.pin = response.addressDetail.pin;
        this.mentee.state = response.addressDetail.state;
        this.mentee.district = response.addressDetail.district;
        this.mentee.skill1 = response.currentskills.skill1;
        this.mentee.skill2 = response.currentskills.skill2;
        this.mentee.skill3 = response.currentskills.skill3;
        this.mentee.skill4 = response.currentskills.skill4;
        this.mentee.email = response.email;
        this.mentee.phoneNumber=response.phoneNumber;
        this.mentee.gender=response.gender;
        this.mentee.balance=response.balance;
        this.mentee.age=response.age;
        this.mentee.type=response.type;

        console.log("mentee response is "+this.mentee);
      },
      (error:any) =>  {
        console.log(error);
      }
    );


  }

  change(){
    this.disable = !this.disable;
  }

  formSubmit(){
    console.log("form is submitted");
    this.updatementee.updateMentee(this.mentee, this.mentee.id).subscribe(
      (response:any) => {
        console.log(response);
        window.location.href="/profile";
      },
      error => {
        console.log(error);
      }
    );
  }
  dochange()
  {
    console.log("form is submitted");
    this.updatementee.updateMentee(this.mentee, this.mentee.id).subscribe(
      (response:any) => {
        console.log("Success message");
        window.location.href="/mentee/profile";
      },
      error => {
        console.log(error);
        console.log("error aaya update mai")
      }
    );
  }

}
