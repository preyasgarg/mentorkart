import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatementeeService } from 'src/app/services/updatementee.service';

@Component({
  selector: 'app-updatementor',
  templateUrl: './updatementor.component.html',
  styleUrls: ['./updatementor.component.css']
})
export class UpdatementorComponent implements OnInit {

  mentor = {
    id: 0,
    firstName : '',
    lastName : '',
    addLine1: '',
    addLine2: '',
    district: '',
    pin: '',
    state:'',
    company1:'',
    company2:'',
    company3:'',
    company4:'',
    skill1 : '',
    skill2 : '',
    skill3 : '',
    skill4 : '',
    email : '',
    phoneNumber : '',
    gender : '',
    balance:0,
    age:0,
    yearOfExperience:0,
    fees:0,
  };

  disable = true;
  isComplaintUpdate = true;
  errorMsg = '';
  mentorId=0;

  constructor(private activatedroute: ActivatedRoute, private updatementee : UpdatementeeService) { }

  ngOnInit(): void {

    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var mentorId = x.id;

    this.updatementee.getSearchMentors(mentorId).subscribe(
      (response:any) => {
        console.log("response is "+response);
        console.log("response firstname is "+response.firstName);
        console.log("response skill 1 is "+response.currentskills);
        console.log("response adress is "+response.addressDetail);
        this.mentor.id = response.id;
        this.mentor.firstName=response.firstName;
        this.mentor.lastName=response.lastName;
        this.mentor.addLine1 = response.addressDetail.addLine1;
        this.mentor.addLine2 = response.addressDetail.addLine2;
        this.mentor.pin = response.addressDetail.pin;
        this.mentor.state = response.addressDetail.state;
        this.mentor.district = response.addressDetail.district;
        this.mentor.company1 = response.companies.company1;
        this.mentor.company2 = response.companies.company2;
        this.mentor.company3 = response.companies.company3;
        this.mentor.company4=response.companies.company4;
        this.mentor.skill1 = response.currentskills.skill1;
        this.mentor.skill2 = response.currentskills.skill2;
        this.mentor.skill3 = response.currentskills.skill3;
        this.mentor.skill4 = response.currentskills.skill4;
        this.mentor.email = response.email;
        this.mentor.phoneNumber=response.phoneNumber;
        this.mentor.gender=response.gender;
        this.mentor.balance=response.balance;
        this.mentor.age=response.age;
        this.mentor.yearOfExperience=response.yearOfExperience;
        this.mentor.fees=response.fees;
        

        console.log("mentor response is "+this.mentor);
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
    this.updatementee.updateMentor(this.mentor, this.mentor.id).subscribe(
      (response:any) => {
        console.log(response);
        window.location.href="/mentorprofile";
      },
      error => {
        console.log(error);
      }
    );
  }
  dochange()
  {
    console.log("form is submitted");
    this.updatementee.updateMentor(this.mentor, this.mentor.id).subscribe(
      (response:any) => {
        console.log("Success message");
        window.location.href="/mentor/mentorprofile";
      },
      error => {
        console.log(error);
        console.log("error aaya update mai")
      }
    );
  }
}
