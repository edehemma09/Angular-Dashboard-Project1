import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { PasswordComponent } from './Components/password/password.component';
import { RegisterComponent } from './Components/register/register.component';
import { ToggleComponent } from './Components/toggle/toggle.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'Home', component: ToggleComponent, pathMatch: 'full'},
    {path:'login',component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'changepassword', component: PasswordComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }
