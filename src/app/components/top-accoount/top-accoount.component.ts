import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-top-accoount',
  templateUrl: './top-accoount.component.html',
  styleUrls: ['./top-accoount.component.css']
})
export class TopAccoountComponent implements OnInit {
  topupForm:FormGroup;
  httpHeaders:HttpHeaders;
  url ="http://localhost:9090/http://localhost:3000/user/login"; 

  constructor(private fb:FormBuilder,private http: HttpClient,private _flashMessagesService: FlashMessagesService,private service:MainserviceService) { }

  ngOnInit() {
    this.topupForm = this.fb.group({
      amount:['',Validators.required]
    })
  }
  onTopUp(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer '+ this.service.getToken(),      
    });
    if(this.topupForm.valid){
      let totopUp = this.topupForm.value;
      this.http.post<topUpResponse>(this.url,totopUp,{headers:this.httpHeaders}).subscribe(res=>{
        if(res.status){
          this.topupForm.reset();
          this._flashMessagesService.show(res.message, { cssClass: 'alert-success', timeout:5000 } );
        }else{
          this._flashMessagesService.show(res.message, { cssClass: 'alert-danger', timeout:5000 } );

        }
      },error =>{
        this._flashMessagesService.show("Can't connect to server Try again later", { cssClass: 'alert-danger', timeout:5000 } );

      })
    }
  }

}
interface topUpResponse {
  status: boolean;
  message: string;
  account?: any; 
}
