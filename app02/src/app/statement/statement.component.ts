import { Component, OnInit } from '@angular/core';
import { Txn } from '../models/txn';
import { TxnService } from '../services/txn.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  txns:Txn[];

  constructor(private ts:TxnService) {
    this.txns=this.ts.getAll();
  }

  ngOnInit(): void {
  }

  delTxn(id:number){
    this.ts.deletebyId(id);
    this.txns=this.ts.getAll();
  }

  addTxn(txn:Txn){
    this.ts.add(txn);
    this.txns=this.ts.getAll();
  }
}
