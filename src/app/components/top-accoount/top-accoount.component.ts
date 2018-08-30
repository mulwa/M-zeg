import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-accoount',
  templateUrl: './top-accoount.component.html',
  styleUrls: ['./top-accoount.component.css']
})
export class TopAccoountComponent implements OnInit {
  topupForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.topupForm = this.fb.group({
      amount:['',Validators.required]
    })
  }
  onTopUp(){
    console.log('Top up clicked');
    if(this.topupForm.valid){
      console.log(this.topupForm.value);
    }
  }

}
