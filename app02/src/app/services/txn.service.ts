import { Injectable } from '@angular/core';
import { Txn } from '../models/txn';

@Injectable({
  providedIn: 'root'
})
export class TxnService {

  txns:Txn[];

  constructor() {
    this.txns=[
      {txnId:1,txnAmount:55000,txnDate:new Date(),txnDesp:'Salary',txnType:'CREDIT'},
      {txnId:2,txnAmount:5000,txnDate:new Date(),txnDesp:'Rent',txnType:'DEBIT'},
      {txnId:3,txnAmount:10000,txnDate:new Date(),txnDesp:'Bonus',txnType:'CREDIT'},
      {txnId:4,txnAmount:5500,txnDate:new Date(),txnDesp:'Car EMI',txnType:'DEBIT'},
      {txnId:5,txnAmount:500,txnDate:new Date(),txnDesp:'Car Fuel',txnType:'DEBIT'}
    ];
  }

  getAll():Txn[] {
    return [...this.txns];
  }

  getById(id:number):Txn|undefined{
    return this.txns.find(t => t.txnId === id);
  }

  add(txn:Txn):Txn{
    if(txn.txnId===0){
      txn.txnId=(this.txns.map(t => t.txnId).reduce((id1,id2) => Math.max(id1,id2)))+1;
    }    

    this.txns.push(txn);
    return txn;
  }

  update(txn:Txn):Txn {
    let index = this.txns.findIndex(t => t.txnId===txn.txnId);
    
    if(index==-1)
      throw new Error("No Such Record Found");

    this.txns[index]=txn;
    return txn;
  }

  deletebyId(id:number):void {
    let index = this.txns.findIndex(t => t.txnId===id);
    
    if(index==-1)
      throw new Error("No Such Record Found");

    this.txns.splice(index,1);
  }

  getSumOf(txns:Txn[],type:string):number{
    let sum =0;

    if(txns && txns.length>0){
      let filteredTxns = txns.filter(t => t.txnType==type);
      if(filteredTxns && filteredTxns.length>0){
        sum = filteredTxns.map(t => t.txnAmount).reduce((a1,a2)=>a1+a2);
      }
    }

    return sum;
  }

}
