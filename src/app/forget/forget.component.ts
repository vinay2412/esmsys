import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  forgetForm: FormGroup;
  Email:any;


 constructor(
   public router : Router,
   public formBuilder: FormBuilder,
   public auth : AuthService) {

     this.forgetForm = this.formBuilder.group({
       Email: new FormControl('', Validators.compose([
         Validators.required,
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
       ])),
 });
}
 resetPassword(){
   this.router.navigateByUrl('/login');
 }

   }



