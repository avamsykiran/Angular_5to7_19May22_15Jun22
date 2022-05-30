import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  str:string;
  num:number;
  dt:Date;

  constructor() {
    this.str="hello All of you";
    this.dt=new Date("1947-08-15");
    this.num=123.456789;
  }

  ngOnInit(): void {
  }

}
