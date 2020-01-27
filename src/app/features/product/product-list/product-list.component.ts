import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  
  constructor(private router: Router) {
   }
  email: string;
  fullname: string;
  ngOnInit() {
  }
 
}
