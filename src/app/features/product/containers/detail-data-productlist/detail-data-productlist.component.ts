import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductList } from '../../product';

@Component({
  selector: 'app-detail-data-productlist',
  templateUrl: './detail-data-productlist.component.html',
  styleUrls: ['./detail-data-productlist.component.scss']
})
export class DetailDataProductlistComponent implements OnInit {
  @Input() products: ProductList;
  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }
  getDetail(product){
    console.log(product);
  }
}
