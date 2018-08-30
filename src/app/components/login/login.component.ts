import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm =  this.fb.group({
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password :['',Validators.required]

    })
  }
  onlogin(){
    console.log('on  login clicck');
    if(this.loginForm.valid) {
      let user = this.loginForm.value;
      console.log(user);
      
      /* Any API call logic via services goes here */
  }
  }

}
