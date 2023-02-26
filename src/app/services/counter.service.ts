import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private cartCounter = new BehaviorSubject(0)
  counterVal= this.cartCounter.asObservable();
  constructor() { }

  updateCounter(newVal : number){
    this.cartCounter.next(newVal)
}
}
