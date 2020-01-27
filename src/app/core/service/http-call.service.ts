import { UserlistsService } from 'src/app/core/service/userlist.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { ResponseAPI } from 'src/app/shared/models/response';
import { ProfileUser } from '../headder/headder.model';

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private httpClient: HttpClient,
                private UserList: UserlistsService) { }
    async callLogin( obj: object ){
        const res: ResponseAPI = await  this.httpClient.post<ResponseAPI>(environment.apiLogin, obj).toPromise();
        return res;
     }
     async callUsername( obj ){
     const res: ProfileUser = await this.httpClient.get<ProfileUser>(environment.apiUser, { params: obj }).toPromise();
     return res;
     }
     async initUser() {
        try {   
                const token = localStorage.getItem('token');
                if(token){
                const res: ProfileUser = await this.callUsername(token);
                this.UserList.setUser(res.data.customerFullName);
                }
                
        } catch (error) {
            localStorage.removeItem('token');
            console.error('error init user', error);
        }

    }
}

