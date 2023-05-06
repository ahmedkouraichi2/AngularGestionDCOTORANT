import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { InformationComponent } from './pages/information/information.component';
import { AdminDoctorantsComponent } from './pages/admin-doctorants/admin-doctorants.component';
import { AdminMessageComponent } from './pages/admin-message/admin-message.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminAnnoncesComponent } from './pages/admin-annonces/admin-annonces.component';
import { AuthGuardsService } from './services/auth-guards.service';
import { RoleComponent } from './pages/role/role.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [

  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent, children: [
      {path:'',component:CourseComponent}
  ] },
  { path: 'login', component: LoginComponent },
   {path:'annonces',component:InformationComponent},
   {
    path: 'menu', canActivate: [AuthGuardsService] , component: AdminLayoutComponent, children: [
      { path: 'doctorants', component: AdminDoctorantsComponent },
      { path: 'message', component: AdminMessageComponent },
      { path: 'profile', component: AdminProfileComponent },
      { path: 'annonce', component: AdminAnnoncesComponent },
      {path:"contact",component:ContactComponent},
      {path:"role",component:RoleComponent},
      {path:"add",component:AddUserComponent}
    ]
  },


  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
