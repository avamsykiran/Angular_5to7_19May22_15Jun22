import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb:number;
  ub:number;

  results!:number[];
  errMsg!:string|undefined;

  isJobInProgress!:boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb=0;
    this.ub=0;
  }

  ngOnInit(): void {
  }

  startSeries(){
    this.results=[];
    this.errMsg=undefined;
    this.isJobInProgress=true;

    this.nss.generateSeries(this.lb,this.ub).subscribe({
      next: val => this.results.push(val),
      error: err => {console.error(err); this.errMsg=err; this.isJobInProgress=false;},
      complete: () => this.isJobInProgress=false
    });
  }
}
