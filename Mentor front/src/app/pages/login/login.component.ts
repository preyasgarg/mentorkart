import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData = {
    role: '',
    username: '',
    password: '',
  };

  constructor( private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    // if(this.loginService.isUserLoggedIn()){
    //   location.reload();
    // }
  }

  formSubmit(){

    console.log("Login button clicked");

    if (
      this.loginData.username.trim() == '' || this.loginData.username == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' || this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //authenticate: loginService
    this.loginService.authenticate(this.loginData).subscribe(
      (data: any) => {
        //success
        this.loginService.setUser(data);
        console.log("Login successful");
        alert('success');

        if(this.loginData.role === "mentee"){

          window.location.href="/mentee";
          //this.router.navigate(['admin']);
        }
        else
        {
          window.location.href="/mentor"
        }
        // else if(this.loginData.role=== "mentor"){

        //   window.location.href="/user-dashboard";
        //   //this.router.navigate(['user-dashboard']);
        // }
      },
      (error) => {
        //error
        // alert("hello world")
        console.log(error);
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );

  }

}