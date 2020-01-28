import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private httpClient: HttpClient) { }
    async InsertRegister(obj: object) {
        // console.log(obj)
        const res = await this.httpClient.post(environment.apiInsert, obj).toPromise();
        return res;
    }
}

