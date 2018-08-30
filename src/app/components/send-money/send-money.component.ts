import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  sendForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.sendForm = this.fb.group({
      receiverEmail:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      amount: ['',Validators.required]
    })
  }
  onsendMoney(){
    console.log("sendiing money clicked");
    if(this.sendForm.valid){
      console.log(this.sendForm.value);
    }

  }

}
