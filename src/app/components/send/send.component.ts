import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  send:any[];

  constructor() {
    this.send = [
      { name: "Ester Paul", mobile:"0707200314", amount:500, date:"10-12-2017"},
      { name: "Joseph Mwangi", mobile:"0707200314", amount:300, date:"10-12-2017"},
      { name: "Faith Zari", mobile:"0707200314", amount:200, date:"10-12-2017"},
      { name: "John Doe", mobile:"0707200314", amount:600, date:"10-12-2017"},
    ]
   }

  ngOnInit() {
  }

}
