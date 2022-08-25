import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DeletementeeService } from 'src/app/services/deletementee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  mentee:any = null ;
  constructor(private loginService : LoginService,private deleteMenteeService : DeletementeeService) { 
  }

  ngOnInit(): void {

    console.log("Reached init mentee")
    this.mentee = this.loginService.getUser();
    console.log(this.mentee);
    
  }
  public delete(){

    console.log("reached here")
    var x  = JSON.parse(localStorage.getItem('user') || "")
    var menteeId = x.id;

    console.log(menteeId)

    this.deleteMenteeService.delete(menteeId).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.loginService.logout();
        alert('Successfully deleted');
        window.location.href="/globalsignup";
      },
      (error) => {
        //error
        console.log(error);
        alert('something went wrong');
      }
    );
  }
  public redirecttoupdate()
  {
    window.location.href="/updatementee"
  }

}
