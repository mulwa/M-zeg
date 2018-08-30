import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class MainserviceService { 
  httpHeaders:HttpHeaders; 

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',      
    });  
   }
   

  getUsers(){
    this.http.get("http://localhost:9090/http://localhost:3000/user",{headers:this.httpHeaders});
  }

}
