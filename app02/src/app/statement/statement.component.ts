import { Component, OnInit } from '@angular/core';
import { Txn } from '../models/txn';
import { TxnService } from '../services/txn.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  txns!:Txn[];
  totalCredit!:number;
  totalDebit!:number;

  constructor(private ts:TxnService) {
    this.loadData();
  }

  loadData(){
    this.txns=this.ts.getAll();
    this.totalCredit=this.ts.getSumOf(this.txns,"CREDIT");
    this.totalDebit=this.ts.getSumOf(this.txns,"DEBIT");
  }

  ngOnInit(): void {
  }

  delTxn(id:number){
    this.ts.deletebyId(id);
    this.loadData();
  }

  addTxn(txn:Txn){
    this.ts.add(txn);
    this.loadData();
  }
}
