import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import{AuthService} from "../auth.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(public auth: AuthService, public route:Router) {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
      mobileNo: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {}

  submit() {
    this.auth.post(this.form.value).subscribe((res) => {
      Swal.fire('Sent OTP Successfully!');
        this.route.navigateByUrl('/otp');
    });
  }
}
