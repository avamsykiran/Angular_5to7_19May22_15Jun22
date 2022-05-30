import { Component, OnInit } from '@angular/core';
import { NumericOperationsService } from '../numeric-operations.service';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.css']
})
export class ServicesDemoComponent implements OnInit {
  
  /*nos:NumericOperationsService;

  constructor(nos:NumericOperationsService) { 
    this.nos=nos;
  }*/

  n:number;
  isPrime!:boolean;
  isEven!:boolean;
  factors!:number[];
  isPositive!:boolean;

  constructor(private nos:NumericOperationsService) { 
    this.n=0;
    this.analyze();
  }

  ngOnInit(): void {
  }

  analyze(){
    this.isPositive=this.nos.isPostiive(this.n);
    this.isPrime=this.nos.isPrime(this.n);
    this.factors=this.nos.factors(this.n);
    this.isEven=this.nos.isEven(this.n);
  }
}
