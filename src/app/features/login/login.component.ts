import { HttpService } from './../../core/service/http-call.service';

import { UserlistsService } from './../../core/service/userlist.service';
import { ProfileUser } from './../../core/headder/headder.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService,
    private router: Router,
    private UserList: UserlistsService) { }
  username: string;
  password: string;
  user: ProfileUser;
  ngOnInit() {

  }
  async getLogin() {
    const myObj = {
      email: this.username,
      password: this.password
    };
    const res = await this.http.callLogin(myObj);
    if (res.status.code) {
      const token = res.data.accessToken;
      localStorage.setItem('token', token);
      this.getUser(); // get user เก็บที่ Userservice 
      setTimeout(() => {
        this.router.navigate(['/product/product-list']);
      }, 500);
    } else {
      alert('เข้าสู่ระบบไม่ผ่าน');
    }
  }
  async getUser() {
    const token = localStorage.getItem('token');
    const res = await this.http.callUsername(token);
    this.UserList.setUser(res.data.customerFullName);
  }
}
