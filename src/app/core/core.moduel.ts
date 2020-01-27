// import { HeadderComponent } from './headder/headder.component';

import { AddTokenInterceptor } from './interceptors/add-token.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES_ROOT = [

];


@NgModule({
    declarations: [
    //    HeadderComponent
    ],
    exports: [
       
    ],
    imports: [
        BrowserAnimationsModule,
        ...MODULES_ROOT

    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AddTokenInterceptor,
            multi: true
        },
    ],
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.'
            );
        }
    }
}
