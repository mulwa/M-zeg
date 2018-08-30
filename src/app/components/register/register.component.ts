import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm:FormGroup;
  url ="http://localhost:9090/http://localhost:3000/user";
  httpHeaders:HttpHeaders;

  constructor( private fb: FormBuilder,private http: HttpClient) { 
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
  onRegister(){
    console.log('registering')
    let user = this.signupForm.value
    console.log(user)
    this.http.post(this.url,user,{headers:this.httpHeaders}).subscribe((res) =>{
      console.log(res);
    },error =>{
      console.log(error)
    })

  }

}
