import { ProductList } from './../product';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  productList: ProductList[] = [
    {
    No: 1,
    serviceNo: '15646846',
    customerF: 'สตาบัค สาขา เซนทรัล',
    startTime: '2019-05-01',
    status: 'Y'
  },
  {
    No: 2,
    serviceNo: '1545757',
    customerF: 'KFC สาขาสยาม',
    startTime: '2019-05-01',
    status: 'Y'
  },
  {
    No: 3,
    serviceNo: '78575785',
    customerF: 'MK สาขาสยาม',
    startTime: '2019-05-01',
    status: 'N'
  }
];
  constructor(private router: Router) {
   }
  email: string;
  fullname: string;
  ngOnInit() {
    console.log(this.productList);
  }
  
}
