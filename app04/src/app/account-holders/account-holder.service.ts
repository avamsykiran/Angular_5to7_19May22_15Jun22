import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountHolder } from './account-holder';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {
  apiUrl:string;
  constructor(private hc:HttpClient) {
    this.apiUrl="http://localhost:9999/accounts";
  }

  getAll():Observable<AccountHolder[]>{
    return this.hc.get<AccountHolder[]>(this.apiUrl);
  }

  getById(id:number):Observable<AccountHolder>{
    return this.hc.get<AccountHolder>(`${this.apiUrl}/${id}`);
  }

  add(ah:AccountHolder):Observable<AccountHolder>{
    return this.hc.post<AccountHolder>(this.apiUrl,ah);
  }
}
