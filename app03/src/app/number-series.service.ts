import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number):Observable<number> {
    return new Observable<number>(
      (observer:Observer<number>) => {

        if(lb>ub){
          observer.error("Invalid boundaries!");
          return;
        }

        let currentValue=lb;
        let handle = setInterval(()=>{
          observer.next(currentValue);
          currentValue++;
          if(currentValue>ub){
            observer.complete();
            clearInterval(handle);
          }
        },500);
      }
    );
  }
}
