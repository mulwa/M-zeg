import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  balance:number;
  httpHeaders:HttpHeaders;
  url ="https://m-zeg.herokuapp.com/account/balance"; 

  constructor(private http: HttpClient,private service:MainserviceService) { 
    this.getBalance();
   
  }

  ngOnInit() {
    
  }
  getBalance(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ this.service.getToken(),      
    });
    this.http.get<balanceResponse>(this.url,{headers:this.httpHeaders}).subscribe(res =>{
      if(res){
        this.balance = res.balance;
      }else{
        this.balance = 0;
      }
    })
  }
}
interface balanceResponse {
  status: boolean;
  message: string;
  balance?:number;  
}
