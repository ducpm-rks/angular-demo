
import { Action } from '@ngrx/store';
import {
  INCREMENT,
  DECREMENT,
  RESET,
  SET_COUNTER,
  SetCounter,
} from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export function counterReducer(
  state: CounterState = initialState,
  action: Action
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case SET_COUNTER:
      const setValueAction = action as SetCounter;
      return { ...state, count: setValueAction.payload.value };
    default:
      return state;
  }
}
