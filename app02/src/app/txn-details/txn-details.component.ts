import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-details',
  templateUrl: './txn-details.component.html',
  styleUrls: ['./txn-details.component.css']
})
export class TxnDetailsComponent implements OnInit {

  @Input()
  txn!:Txn;

  @Output()
  delTxnEvent:EventEmitter<number>;

  constructor() {
    this.delTxnEvent=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  raiseDelTxnEvent(){
    this.delTxnEvent.emit(this.txn.txnId);
  }

}
