import { 
    Injectable 
 } from '@angular/core';  
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 @Injectable()
 export class appService {  

    constructor(private http:HttpClient) {}
    private userUrl = 'http://127.0.0.1:8282/demo/all';

    getUsers(){
        return this.http.get<User[]>(this.userUrl);
    }
 } 