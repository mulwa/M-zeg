import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class MainserviceService { 
  httpHeaders:HttpHeaders; 
  url ="https://m-zeg.herokuapp.com/user/login"; 

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
  isAuthenticated():boolean{
    let token = this.getToken();  
    if(token == null){
      return false;
    }
    return true;       
  }
 
}

