
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserlistsService } from '../service/userlist.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.scss']
})
export class HeadderComponent implements OnInit {
  user: string;
  constructor(private router: Router
    , private Userlists: UserlistsService
  ) { }

  ngOnInit() {
    this.user = this.Userlists.user$.getValue();
    // console.log(this.user);
  }
  logout() {
    console.log('BYE');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
