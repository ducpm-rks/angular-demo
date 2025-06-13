
import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter Component] Increment';
export const DECREMENT = '[Counter Component] Decrement';
export const RESET = '[Counter Component] Reset';
export const SET_COUNTER = '[Counter Component] Set Counter';

// Increment Action
export class Increment implements Action {
  readonly type = INCREMENT; 
}

// Decrement Action
export class Decrement implements Action {
  readonly type = DECREMENT; 
}

// Reset Action
export class Reset implements Action {
  readonly type = RESET;
}

export class SetCounter implements Action {
  readonly type = SET_COUNTER; 
  constructor(public payload: { value: number }) {}
}

export type CounterActions = Increment | Decrement | Reset | SetCounter;
