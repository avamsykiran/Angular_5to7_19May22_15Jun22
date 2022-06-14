import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Txn } from './txn';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {
  apiUrl:string;
  constructor(private hc:HttpClient) {
    this.apiUrl="http://localhost:9999/accounts";
  }

  getAllTxns(ahId:number):Observable<Txn[]>{
    return this.hc.get<Txn[]>(`${this.apiUrl}/${ahId}/txns`);
  }

  addTxn(ahId:number,txn:Txn):Observable<Txn>{
    return this.hc.post<Txn>(`${this.apiUrl}/${ahId}/txns`,txn);
  }

  sumOf(txns:Txn[],type:string){
    let sum=0;

    if(txns && txns.length>0){
      let filteredTxns = txns.filter(t => t.type===type);
      if(filteredTxns && filteredTxns.length>0){
        sum = filteredTxns.map(t => t.amount).reduce((a1,a2)=>a1+a2);
      }
    }

    return sum;
  }
}
