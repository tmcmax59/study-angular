import { ViewChild, ElementRef, Renderer2 } from '@angular/core';


export class Loading{
    constructor() { }
    @ViewChild('body', { static: false }) loading_component: string;private renderer: Renderer2;
    pathimg: string = 'assets/img/loading.svg';
    getLoading(type: string){
        if(type === 'show'){
             const s: string = `<div class='loading-component'>=<div class='overlay'></div></div>`;
            document.querySelector('body').append(s);
            // document.getElementById('body').innerHTML = "<div class='loading-component'><img src='" + this.pathimg + "'><div class='overlay'></div></div>";
             return 'ปิด';
        }
        else{
            return 'ปิด';
        }
    }
}