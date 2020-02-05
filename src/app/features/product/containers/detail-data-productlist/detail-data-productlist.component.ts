import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductList } from '../../product';

@Component({
  selector: 'app-detail-data-productlist',
  templateUrl: './detail-data-productlist.component.html',
  styleUrls: ['./detail-data-productlist.component.scss']
})
export class DetailDataProductlistComponent implements OnInit {
  @Input() products: ProductList[];
  testinput: string;
  dataproduct:ProductList[];
  constructor(private router: Router) {}
  ngOnInit() {
    this.dataproduct = this.products;
    console.log(this.dataproduct);
  }
  getDetail(product){
      const url = '/product/product-detail/' + product ;
      this.router.navigate([url]);
  }
  getDataproduct(){

  }
  Inputsaech(){
    if(this.testinput){
      this.products = this.products.filter(res => {
        return res.serviceNo.match(this.testinput)
      });
    }else{
      this.ngOnInit();
    }
  }
}
