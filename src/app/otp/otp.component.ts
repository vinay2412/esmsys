import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent {
  data: any

  constructor(public router: Router) {

  }

  verify(data: any) {
    Swal.fire('Otp Verify')
    this.router.navigateByUrl('/login');
  }
}
