import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  txnFormGroup:FormGroup;
  isCreditTxn:boolean;

  idFC:FormControl;
  dtFC:FormControl;
  despFC:FormControl;
  amountFC:FormControl;

  @Output()
  addTxnEvent:EventEmitter<Txn>;

  constructor() { 
    
    this.addTxnEvent=new EventEmitter<Txn>();

    this.isCreditTxn=true;

    this.idFC=new FormControl(0);
    this.dtFC=new FormControl((new Date()).toISOString().substring(0,10),[Validators.required]);
    this.despFC=new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]);
    this.amountFC=new FormControl(0,[Validators.required,Validators.min(0)]);

    this.txnFormGroup = new FormGroup({
      id:this.idFC,
      dt:this.dtFC,
      desp:this.despFC,
      amount:this.amountFC
    });
  }

  ngOnInit(): void {
  }

  setCreditTxn(isCreditTxn:boolean){
    this.isCreditTxn=isCreditTxn;
  }

  formSubmitted(){
    let formData = this.txnFormGroup.value;
    this.addTxnEvent.emit({
      txnId:formData.id,
      txnAmount:formData.amount,
      txnDate:formData.dt,
      txnDesp:formData.desp,
      txnType:this.isCreditTxn?"CREDIT":"DEBIT"
    });
    this.txnFormGroup.reset({id:0,dt:(new Date()).toISOString().substring(0,10),desp:'',amount:0});
  }
}
