import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Txn } from '../txn';
import { TxnsService } from '../txns.service';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  txns!:Txn[];
  errMsg!:string;
  totalCredit!:number;
  totalDebit!:number;

  ahId!:number;

  constructor(private activatedRoute:ActivatedRoute,private ts:TxnsService) { }

  ngOnInit(): void {

    this.ahId = this.activatedRoute.snapshot.params["ahid"];
    if(this.ahId){
     this.loadData();
    }
  }

  loadData(){
    this.ts.getAllTxns(this.ahId).subscribe({
      next: data => {
        this.txns=data;
        this.totalCredit=this.ts.sumOf(data,"CREDIT");
        this.totalDebit=this.ts.sumOf(data,"DEBIT");
      },
      error: err => {
        console.error(err);
        this.errMsg="Unable to laod data";
      }
    })
  }
  
  addTxn(txn:Txn){
    this.ts.addTxn(this.ahId,txn).subscribe({
      next: data => {
        this.loadData();
      },
      error: err => {
        console.error(err);
        this.errMsg="Unable to save data";
      }
    })
  }
}
