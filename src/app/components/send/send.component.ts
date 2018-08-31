import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MainserviceService } from '../../services/mainservice.service';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  send:cashOutnInterface[];
  httpHeaders:HttpHeaders;
  showLoading:boolean = true;
  url ="https://m-zeg.herokuapp.com/account/moneysend"; 

  constructor(private service: MainserviceService,private http: HttpClient) { 
    this.getSendTransactions(); 
   }

  ngOnInit() {
  }

  getSendTransactions(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ this.service.getToken(),      
    });

    this.http.get<cashoutResponse>(this.url,{headers:this.httpHeaders}).subscribe(res=>{
      console.log(res);
      this.showLoading=false;
      if(res){
        this.send = res.cashOut;
        console.log(res.cashOut);
      }else{
        console.log(res);
      }

    })
  }
  

}
interface cashOutnInterface{
  _id:string,
  email:string,
  receiverName:string;
  receiverMobile:string;
  receiverEmail:string;
  amount:number,
  date:string,   

}
interface cashoutResponse {
  status: boolean;
  message: string;
  cashOut:cashOutnInterface[];  
}
