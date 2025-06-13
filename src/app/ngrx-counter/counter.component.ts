import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, SetCounter } from './counter.actions';
import { selectCount } from './counter.selectors'; 

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h3>NgRx Counter</h3>
      <p>Current Count: <span>{{ count$ | async }}</span></p>

      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
      <div>
        <input type="number" [(ngModel)]="setValue" placeholder="Set value" >
        <button (click)="setCounter()">Set Count</button>
      </div>
    </div>
  `,
})
export class CounterComponent implements OnInit, OnDestroy {
  count$: Observable<number>;
  setValue: number = 0;

  constructor(private store: Store<{ counter: { count: number } }>) {}

  ngOnInit() {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(new Increment());
    console.log('Dispatched: Increment action');
  }

  decrement() {
    this.store.dispatch(new Decrement());
    console.log('Dispatched: Decrement action');
  }

  reset() {
    this.store.dispatch(new Reset());
    console.log('Dispatched: Reset action');
  }

  setCounter() {
    const value =
      typeof this.setValue === 'number'
        ? this.setValue
        : parseInt((this.setValue as string).toString(), 10);
    if (!isNaN(value)) {
      // Dispatch the SetCounter action with its payload.
      this.store.dispatch(new SetCounter({ value: value }));
      console.log('Dispatched: SetCounter action with value', value);
    } else {
      console.warn('Invalid input for setCounter:', this.setValue);
    }
  }

  ngOnDestroy() {
  }
}
