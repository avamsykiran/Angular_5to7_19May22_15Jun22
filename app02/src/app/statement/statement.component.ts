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

}
