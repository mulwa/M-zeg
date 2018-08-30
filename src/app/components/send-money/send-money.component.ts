import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  sendForm:FormGroup;
  httpHeaders:HttpHeaders;
  url ="http://localhost:9090/http://localhost:3000/account/sendmoney";

  constructor(private fb:FormBuilder,private service: MainserviceService,private http: HttpClient,private _flashMessagesService: FlashMessagesService) {

   }

  ngOnInit() {
    this.sendForm = this.fb.group({
      receiverEmail:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      amount: ['',Validators.required]
    })
  }
  onsendMoney(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ this.service.getToken(),      
    });
    
    
    if(this.sendForm.valid){
      let  sendInfor = this.sendForm.value;
    this.http.post<sendResponse>(this.url,sendInfor,{headers:this.httpHeaders}).subscribe(res =>{
      if(res.status){
        this.sendForm.reset();
        this._flashMessagesService.show(res.message, { cssClass: 'alert-success', timeout:5000 } );
      }else{
        this._flashMessagesService.show(res.message, { cssClass: 'alert-danger', timeout:5000 } );
      }

    },error =>{
      console.log(error);
      this._flashMessagesService.show("Please check Your internet Conection", { cssClass: 'alert-danger', timeout:5000 } );

    })
    }

  }

}
interface sendResponse {
  status: boolean;
  message: string;
  account?: any; 
}
