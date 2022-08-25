import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MentorService } from 'src/app/services/mentor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {

  public mentor={
    username: '',
    password: '',
   // confirmpassword: '',
    firstName: '',
    lastName: '',
    addLine1: '',
    addLine2: '',
    district:'',
    state:'',
    pin:'',
    company1:'',
    company2:'',
    company3:'',
    company4:'',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    email: '',
    phoneNumber: '',
    gender: '',
    balance:0,
    fees: 0,
    age: 0,
    yearOfExperience: 0,
  }

  constructor(private mentorService : MentorService,private snackBar : MatSnackBar ) { }
  passwordPtn ='^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPtn= '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
  phonePtn = '[6789][0-9]{9}'

  ngOnInit(): void {}

  formSubmit() {
    alert('submit');
    console.log(this.mentor);
if (this.mentor.username == '' || this.mentor.username == null){
// alert('User is required !!');
this.snackBar.open('Username is required !! ',  ' ', {duration: 3000,
});
return;
}
// if (this.mentor.password != this.mentor.confirmpassword) {
//   this.snackBar.open('Password and Confirm Password should be same !! ',  ' ', {duration: 3000,
//   });
//   return;
// }
    this.mentorService.addMentor(this.mentor).subscribe(
      (data:any)=>{
        console.log(data);
        alert('success');
        Swal.fire('Success ','We have registered you. Go on.'+ data.id,'success');
      },
      (error:any)=>{
          console.log(error);
          alert('error');
          this.snackBar.open('Oops something went wrong !! ',  ' ', {duration: 3000,
          });
           
      }
    )
  }

}