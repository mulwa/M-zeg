import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
  receive:any[];

  constructor() { 
    this.receive = [
      { name: "christopher Mulwa", mobile:"0707200314", amount:5222, date:"10-12-2017"},
      { name: "christopher Mulwa", mobile:"0707200314", amount:5222, date:"10-12-2017"},
      { name: "christopher Mulwa", mobile:"0707200314", amount:5222, date:"10-12-2017"},
      { name: "christopher Mulwa", mobile:"0707200314", amount:5222, date:"10-12-2017"},
    ]
      
    
  }

  ngOnInit() {
  }

}
