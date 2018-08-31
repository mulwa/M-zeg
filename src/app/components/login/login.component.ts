import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  httpHeaders:HttpHeaders;
  url ="https://m-zeg.herokuapp.com/user/login"; 
  

  constructor(private fb: FormBuilder, private http: HttpClient,private _flashMessagesService: FlashMessagesService,private service:MainserviceService,
    private spinnerService: Ng4LoadingSpinnerService, private router:Router ) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',      
    });
    
   }

  ngOnInit() {
    this.loginForm =  this.fb.group({
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password :['',Validators.required]

    })
  }
  onlogin(){
    this.spinnerService.show();
    if(this.loginForm.valid) {
      let user = this.loginForm.value;        
      this.http.post<loginResponse>(this.url,user,{headers:this.httpHeaders}).subscribe((data)=>{
        this.spinnerService.hide();
        if(data.status){
          this.loginForm.reset();
          this.service.setSession(data.token);
          this._flashMessagesService.show(data.message, { cssClass: 'alert-success', timeout:4000 } );          
        }else{
          this._flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout:4000 } );
        }
      },error =>{
        this.spinnerService.hide();
        this._flashMessagesService.show('Failed Try again Later!', { cssClass: 'alert-danger', timeout:4000 } );

      })
     
  }
  }  

}
interface loginResponse {
  status: boolean;
  message: string;
  token?:string;  
}
