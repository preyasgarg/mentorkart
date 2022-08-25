import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentorsidebar',
  templateUrl: './mentorsidebar.component.html',
  styleUrls: ['./mentorsidebar.component.css']
})
export class MentorsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mentorProfile()
  {
    window.location.href="/mentor/mentorprofile"
  }
}
