import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MainserviceService } from '../../services/mainservice.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
  receive:cashInInterface[];
  httpHeaders:HttpHeaders;
  showLoading:boolean = true;
  url ="https://m-zeg.herokuapp.com/account/moneyreceived"; 

  constructor(private service: MainserviceService,private http: HttpClient) {  
    this.getReceivedTransaction();   
  }

  ngOnInit() {
  }

  getReceivedTransaction(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ this.service.getToken(),      
    });

    this.http.get<cashinResponse>(this.url,{headers:this.httpHeaders}).subscribe(res =>{
      this.showLoading = false;
      if(res){
        this.receive = res.cashIn;
      }else{
        console.log(res)
      }
    }, error=>{
      console.log(error);
    })
  }

}
interface cashInInterface{
  _id:string,
  email:string,
  senderName:string;
  senderMobile:string;
  senderEmail:string;
  amount:number,
  date:string,
}
interface cashinResponse {
  status: boolean;
  message: string;
  cashIn:cashInInterface[];  
}
