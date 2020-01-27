import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserlistsService {
    user: string;
    user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor() { }
    setUser(user: any) {
        this.user = user;
        this.user$.next(this.user);
    }
    getUser() {
        console.log(this.user);
        return this.user;
    }
}