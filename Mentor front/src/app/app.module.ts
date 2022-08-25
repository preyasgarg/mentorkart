import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/mentee/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from './pages/mentee/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/mentee/sidebar/sidebar.component';
import { DashboardComponent } from './pages/mentee/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/mentee/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { MenteedataTableComponent } from './pages/mentee/menteedata-table/menteedata-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ErrorComponent } from './error/error.component';
import {MatSelectModule} from '@angular/material/select';
import { AddmentorComponent } from './pages/mentee/addmentor/addmentor.component';
import { ViewmentorprofileComponent } from './pages/mentee/viewmentorprofile/viewmentorprofile.component';
import { UpdatementeeComponent } from './pages/mentee/updatementee/updatementee.component';
import { MentorsignupComponent } from './pages/mentor/mentorsignup/mentorsignup.component';
import { UpdatebalanceComponent } from './pages/mentee/updatebalance/updatebalance.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatRadioModule} from '@angular/material/radio';
import { GlobalsignupComponent } from './pages/globalsignup/globalsignup.component';
import { MentordashboardComponent } from './pages/mentor/mentordashboard/mentordashboard.component';
import { MentorprofileComponent } from './pages/mentor/mentorprofile/mentorprofile.component';
import { MentorsidebarComponent } from './pages/mentor/mentorsidebar/mentorsidebar.component';
import { MentorwelcomeComponent } from './pages/mentor/mentorwelcome/mentorwelcome.component';
import { ViewmenteeprofileComponent } from './pages/mentor/viewmenteeprofile/viewmenteeprofile.component';
import { UpdatefeesComponent } from './pages/mentor/updatefees/updatefees.component';
import { UpdatementorComponent } from './pages/mentor/updatementor/updatementor.component';
import { AddmenteeComponent } from './pages/mentor/addmentee/addmentee.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomeComponent,
    MenteedataTableComponent,
    ErrorComponent,
    AddmentorComponent,
    ViewmentorprofileComponent,
    UpdatementeeComponent,
    MentorsignupComponent,
    UpdatebalanceComponent,
    GlobalsignupComponent,
    MentordashboardComponent,
    MentorprofileComponent,
    MentorsidebarComponent,
    MentorwelcomeComponent,
    ViewmenteeprofileComponent,
    UpdatefeesComponent,
    UpdatementorComponent,
    AddmenteeComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    TextFieldModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
