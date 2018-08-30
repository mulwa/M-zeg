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
   

  setSession(token:string){
    localStorage.setItem("token",token);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  logOut(){
    localStorage.removeItem("token");
  }

}
