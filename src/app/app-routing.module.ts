import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/SignUp' },
  { path:'SignUp', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'otp', component: OtpComponent},
  { path:'forget', component: ForgetComponent},
  { path:'view/:UserID', component: ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
