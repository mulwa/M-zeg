import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { error } from 'util';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm:FormGroup;
  url ="https://m-zeg.herokuapp.com/user";
  httpHeaders:HttpHeaders;

  constructor( private fb: FormBuilder,private http: HttpClient,private _flashMessagesService: FlashMessagesService,private spinnerService: Ng4LoadingSpinnerService, private router:Router) { 
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',      
    });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      firstname : ['', Validators.required],
      surname: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['',Validators.required],
      confirmPasssword: ['',Validators.required]

    })
  }
  get email(){
    return this.signupForm.get('email') as FormControl;
  }
  get firstname(){
    return this.signupForm.get('firstname') as FormControl;
  }
  get surname (){
    return this.signupForm.get('surname') as FormControl;
  }
  get mobile(){
    return  this.signupForm.get('mobile') as  FormControl;
  }
  get password(){
    return  this.signupForm.get('password') as FormControl;
  }
  get confirmPasssword(){
    return this.signupForm.get('confirmPasssword') as FormControl;
  }
  onRegister(){ 
    this.spinnerService.show();   
    let user = this.signupForm.value    
    this.http.post<registrationResponse>(this.url,user,{headers:this.httpHeaders}).subscribe((res) =>{
      console.log(res);
      this.spinnerService.hide();
      if(res.status){
        this.signupForm.reset();
        this._flashMessagesService.show(res.message, { cssClass: 'alert-success',timeout:4000 } );
        // redirect after message
        setTimeout(()=>{
          this.router.navigate(['login']);
        },5000)
      }else{
        this._flashMessagesService.show(res.message, { cssClass: 'alert-danger',timeout:5000 } );

      }
    },error =>{
      this.spinnerService.hide();
      console.log(error)
      this._flashMessagesService.show('Please Check your Connection', { cssClass: 'alert-danger',timeout:5000 } );
    })

  }

}
interface registrationResponse {
  status: boolean;
  message: string;
 
}
