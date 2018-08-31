import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class MainserviceService { 
  httpHeaders:HttpHeaders; 

  constructor(private http: HttpClient,public jwtHelper: JwtHelperService) {
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
  isAuthenticated():boolean{
    let token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
    
  }

}
