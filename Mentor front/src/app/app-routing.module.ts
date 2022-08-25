import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/mentee/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/mentee/profile/profile.component';
import { SignupComponent } from './pages/mentee/signup/signup.component';
import { WelcomeComponent } from './pages/mentee/welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AddmentorComponent } from './pages/mentee/addmentor/addmentor.component';
import { ViewmentorprofileComponent } from './pages/mentee/viewmentorprofile/viewmentorprofile.component';
import { MentorsignupComponent } from './pages/mentor/mentorsignup/mentorsignup.component';
import { UpdatementeeComponent } from './pages/mentee/updatementee/updatementee.component';
import { GlobalsignupComponent } from './pages/globalsignup/globalsignup.component';
import { UpdatebalanceComponent } from './pages/mentee/updatebalance/updatebalance.component';
import { MentordashboardComponent } from './pages/mentor/mentordashboard/mentordashboard.component';
import { MentorwelcomeComponent } from './pages/mentor/mentorwelcome/mentorwelcome.component';
import { MentorprofileComponent } from './pages/mentor/mentorprofile/mentorprofile.component';
import { AddmenteeComponent } from './pages/mentor/addmentee/addmentee.component';
import { UpdatefeesComponent } from './pages/mentor/updatefees/updatefees.component';
import { ViewmenteeprofileComponent } from './pages/mentor/viewmenteeprofile/viewmenteeprofile.component';
import { UpdatementorComponent } from './pages/mentor/updatementor/updatementor.component';


const routes: Routes = [

{
  path:'',
component: HomeComponent,
pathMatch: 'full',
},
{
  path : 'globalsignup',
  component: GlobalsignupComponent,
  pathMatch : 'full'
},
{  path: 'menteeSignup',
component : SignupComponent,
pathMatch : 'full'
},
{
  path : 'mentorsignup',
  component : MentorsignupComponent,
  pathMatch:'full'
},
{
  path: 'login',
  component : LoginComponent,
  pathMatch : 'full'
},
{
  path: 'mentee',
  component : DashboardComponent,
  // canActivate : [MenteeGuard],
  children: 
  [
    {
      path:'',
      component:WelcomeComponent,
      
      // children:
      // [
      //   {
      //  path : 'viewmentorprofile/:id',
      //  component : ViewmentorprofileComponent,
      //   }
      // ],

    },

    {
    path: 'profile',
    component: ProfileComponent,
    },
    {
      path:'addmentor',
      component : AddmentorComponent,
    },
    {
      path:'updatebalance',
      component : UpdatebalanceComponent,
    },
  ],

},
{
  path : 'viewmentorprofile/:id',
  component: ViewmentorprofileComponent,
},
{
  path: 'updatementee',
  component:UpdatementeeComponent,
  pathMatch: 'full'
},
{
  path: 'mentor',
  component : MentordashboardComponent,
  // canActivate : [MenteeGuard],
  children: 
  [
    {
      path:'',
      component:MentorwelcomeComponent,
      pathMatch: 'full'

    },
    {
    path: 'mentorprofile',
    component: MentorprofileComponent,
    pathMatch: 'full'
    },
    {
      path:'addmentee',
      component : AddmenteeComponent,
      //pathMatch:'full'
    },
    {
      path:'updatefees',
      component : UpdatefeesComponent,
      //pathMatch: 'full'
    },
  ],

},

{
  path : 'viewmenteeprofile/:id',
  component: ViewmenteeprofileComponent,
  pathMatch: 'full'
},
{
  path: 'updatementor',
  component:UpdatementorComponent,
  pathMatch: 'full'
},

{
  path:'**',
  component: ErrorComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
