import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenteeService } from 'src/app/services/mentee.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public mentee={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    addLine1: '',
    addLine2: '',
    district:'',
    state:'',
    pin:'',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    email: '',
    phoneNumber: '',
    gender: '',
    balance: 0,
    age: 0,
    type: ''
  }
  constructor(private meteeService : MenteeService,private snackBar : MatSnackBar) { }

  ngOnInit(): void {}
    formSubmit()
    {
      alert('submit');
      console.log(this.mentee);
if (this.mentee.username == '' || this.mentee.username == null){
// alert('User is required !!');
this.snackBar.open('Username is required !! ',  ' ', {duration: 3000,
});
return;
}
      this.meteeService.addMentee(this.mentee).subscribe(
        (data:any)=>{
          console.log(data);
          //alert('success');
          Swal.fire('Success ','mentee is registerd'+ data.id,'success');
        },
        (error:any)=>{
            console.log(error);
            alert('error');
            this.snackBar.open('something is went wrong !! ',  ' ', {duration: 3000,
            });
            
        }
      )
    }
}


