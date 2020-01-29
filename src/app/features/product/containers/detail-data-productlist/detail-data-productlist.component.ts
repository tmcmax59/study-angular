import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductList } from '../../product';

@Component({
  selector: 'app-detail-data-productlist',
  templateUrl: './detail-data-productlist.component.html',
  styleUrls: ['./detail-data-productlist.component.scss']
})
export class DetailDataProductlistComponent implements OnInit {
  @Input() products: ProductList;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.products);
  }
  getDetail(product){
      const url = '/product/product-detail/' + product ;
      this.router.navigate([url]);
  }
}
