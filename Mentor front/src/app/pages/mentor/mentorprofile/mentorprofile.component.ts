import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DeletementeeService } from 'src/app/services/deletementee.service';

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.css']
})
export class MentorprofileComponent implements OnInit {

  mentor:any = null ;
  constructor(private loginService : LoginService,private deleteMenteeService : DeletementeeService) { }

  ngOnInit(): void {

    console.log("Reached init")
    this.mentor = this.loginService.getUser();
    console.log(this.mentor);

}
public delete(){

  console.log("reached here")
  var x  = JSON.parse(localStorage.getItem('user') || "")
  var mentorId = x.id;

  console.log(mentorId)

  this.deleteMenteeService.mentordelete(mentorId).subscribe(
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
  window.location.href="/updatementor"
}
}
