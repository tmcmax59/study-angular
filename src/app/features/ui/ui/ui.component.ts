import { Loading } from './../../../shared/models/function';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  @ViewChild('myDiv', { static: false }) loading_component: ElementRef;
  @ViewChild('img', { static: false }) file_img: ElementRef;
  pathimg: string = 'assets/img/loading.svg';
  pathicon: string = 'assets/img/wait.gif';
  // // loading_component: ElementRef;
  // text_html: string;
  constructor(private router: Router
              ,private loading: Loading) { }

  ngOnInit() {
  }
  Onloding(){
    // const res = this.loading.getLoading('show');
    // console.log(res);
    this.loading_component.nativeElement.innerHTML  = "<div class='loading-component'><img src='" + this.pathimg + "'><div class='overlay'></div></div>";
    // console.log(this.loading_component.nativeElement);
    // setTimeout(() => {
    //   this.router.navigate(['/ui']);
    // }, 500);
  }
  Onlodingb() { 
      this.file_img.nativeElement.innerHTML = "<img src='" + this.pathicon + "' style='width: 17px'>";
  }
}
