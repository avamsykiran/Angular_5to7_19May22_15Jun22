import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Txn } from '../txn';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  idFC:FormControl;
  despFC:FormControl;
  amountFC:FormControl;
  typeFC:FormControl;
  dateFC:FormControl;

  txnForm:FormGroup;

  @Output()
  addTxnEvent:EventEmitter<Txn>;

  constructor() {
    this.addTxnEvent = new EventEmitter<Txn>();

    this.idFC=new FormControl(0);
    this.despFC=new FormControl('',[Validators.required]);
    this.dateFC=new FormControl('',[Validators.required]);
    this.amountFC=new FormControl(0,[Validators.required]);
    this.typeFC=new FormControl('',[Validators.required]);

    this.txnForm = new FormGroup({
      txnId:this.idFC,
      desp:this.despFC,
      txnDate:this.dateFC,
      amount:this.amountFC,
      type:this.typeFC
    });
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    this.addTxnEvent.emit(this.txnForm.value);
    this.txnForm.reset();
  }
}
