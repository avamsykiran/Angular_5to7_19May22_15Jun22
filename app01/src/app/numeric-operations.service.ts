import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumericOperationsService {

  constructor() { }

  isEven(n:number) : boolean{
    return n%2===0;
  }

  isPostiive(n:number):boolean{
    return n>=0;
  }

  factors(n:number):number[]{
    let ftrs:number[] = [1];

    for(let i=2;i<=n/2;i++){
      if(n%i===0){
        ftrs.push(i);
      }
    }

    ftrs.push(n);

    return ftrs;
  }

  isPrime(n:number):boolean{
    return this.factors(n).length===2;
  }
}
