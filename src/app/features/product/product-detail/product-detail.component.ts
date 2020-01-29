import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  customerId: any;
  constructor(private route: Router) {
    this.customerId = this.route.params.id;
   }

  ngOnInit() {
  }

}
