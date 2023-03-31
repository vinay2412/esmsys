import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
import {Item} from '../item'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public items : any;
  message: boolean = false;

  constructor(public auth: AuthService, public route:Router) { }

  ngOnInit(): void {
    this.auth.getAll().subscribe((data: any) => {
      this.items= data.data;
      console.log(this.items);
    });
  }


  deletePost(UserID: number, firstname: string) {
    if (
      confirm('Do you really want to delete :'+UserID)
    ) {
      this.auth.delete(UserID).subscribe((res) => {
        this.items = this.items.filter((item:any) => item.UserID !== UserID)
        if ((this.message = true)) {
          setTimeout(() => this.remove(), 1000);
        console.log('User Deleted successfully!');
        this.message = true;
        }

      });
    }
  }
  remove() {
    // auto close alert if required
    this.message = false;
  }

}
