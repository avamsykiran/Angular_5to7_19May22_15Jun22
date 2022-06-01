import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  txnFormGroup:FormGroup;
  isCreditTxn:boolean;

  constructor() { 
    
    this.isCreditTxn=true;

    this.txnFormGroup = new FormGroup({
      id:new FormControl(0),
      dt:new FormControl((new Date()).toISOString().substring(0,10),[Validators.required]),
      desp:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      crAmt:new FormControl(0),
      dbAmt:new FormControl(0)
    });
  }

  ngOnInit(): void {
  }

  setCreditTxn(isCreditTxn:boolean){
    this.isCreditTxn=isCreditTxn;
  }
}
