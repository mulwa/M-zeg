import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm:FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      firstname : ['', Validators.required],
      surname: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['',Validators.required, Validators.minLength(5)],
      confirmPasssword: ['',Validators.required, Validators.minLength(5)]

    })
  }
  onRegister(){


  }

}
