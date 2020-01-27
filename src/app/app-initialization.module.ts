import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpService } from './core/service/http-call.service';
export function initUser(authService: HttpService) {
    return () => authService.initUser();
}
// @dynamic
@NgModule({
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initUser,
            deps: [HttpService],
            multi: true,
        }
    ],
})
export class AppInitializationModule { }
