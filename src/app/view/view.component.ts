import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  public item: any;
  public form: FormGroup;
  userID: number;

  constructor(public auth: AuthService, public route: Router, private routes: ActivatedRoute,) {
    this.userID = this.routes.snapshot.params['itemId'];
    this.auth.find(this.userID).subscribe((res) => {
      this.form.patchValue({
        userID: this.item.UserID,
        first_name: this.item.firstName,
        last_name: this.item.lastName,
        user_email: this.item.email,
        user_phone_no: this.item.mobileNo,
      });
    });
    this.form = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      user_email: new FormControl('', Validators.required),
      user_phone_no: new FormControl('', Validators.required)
      });
  }

  submit(){
    this.auth.find(this.form.value).subscribe((res) => {
      this.route.navigateByUrl('/dashboard')
    });
  }
}
