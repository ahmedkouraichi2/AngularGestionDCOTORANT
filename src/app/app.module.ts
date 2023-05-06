import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { AdminDoctorantsComponent } from './pages/admin-doctorants/admin-doctorants.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminMessageComponent } from './pages/admin-message/admin-message.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InformationComponent } from './pages/information/information.component';


import { JwPaginationComponent } from 'jw-angular-pagination';
import { AnnoncedetailComponent } from './pages/annoncedetail/annoncedetail.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminAnnoncesComponent } from './pages/admin-annonces/admin-annonces.component';
import { RoleComponent } from './pages/role/role.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CourseComponent } from './pages/course/course.component';
import { ContactIdComponent } from './pages/contact-id/contact-id.component';
import { TopnavbarComponent } from './pages/topnavbar/topnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    SidebarComponent,
    HomeComponent,
    MenubarComponent,
    AdminDoctorantsComponent,
    AdminProfileComponent,
    AdminMessageComponent,
    ContactComponent,
    InformationComponent,
    AnnoncedetailComponent,
    NavbarComponent,
    AdminLayoutComponent,
    AdminAnnoncesComponent,
    RoleComponent,
    AddUserComponent,
    FooterComponent,
    CourseComponent,
    ContactIdComponent,
    TopnavbarComponent ,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
