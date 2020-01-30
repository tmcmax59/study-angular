import { ProductDetail } from './../product';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // data_detail: ProductDetail [] = [];
  customerId: string;
  customerDetail: ProductDetail;
  detail_list: ProductDetail [] = [{
    serviceNo: '15646846',
    customerF: 'สตาบัค สาขา เซนทรัล',
    Fname: 'นายสมหมาย',
    tel: '081-222-3344',
    detail_service: 'ท่อรั่ว'
  },
  {
    serviceNo: '1545757',
    customerF: 'KFC สาขาสยาม',
    Fname: 'นายสมชาย',
    tel: '082-888-1234',
    detail_service: 'กระเบื้องแตก'
  },
  {
    serviceNo: '78575785',
    customerF: 'MK สาขาสยาม',
    Fname: 'นายสมพง',
    tel: '081-233-1233',
    detail_service: 'ปั้มน้ำระเบิด'
  }
];
  
  constructor(private route: ActivatedRoute) {
  this.customerId = this.route.snapshot.params.id;
  this.getDetail();
   }
  ngOnInit() {
  }
  getDetail() {
    this.customerDetail = this.detail_list.find(d => d.serviceNo === this.customerId);
  }
}
