import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AddTokenInterceptor implements HttpInterceptor {


    constructor() {
    }
    apiNotTransform = [
        'http://localhost:4200/login'
    ];
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url != environment.apiLogin) {
            const authReq = this.addToken(req);
            return next.handle(authReq);
        }
        return next.handle(req);
    }

    private addToken(request: HttpRequest<any>) {
        const token = localStorage.getItem('token');
        const authReq = request.clone({
            headers: request.headers.set('access-token', token)
        });
        return authReq;
    }
    private checkAPITransform(url: string): boolean {
        const check = this.apiNotTransform.find(x => x === url);
        return (check) ? false : true;
    }
}
