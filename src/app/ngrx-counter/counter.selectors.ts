import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer'; 

export const selectCounterFeature =
  createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterFeature, 
  (state: CounterState) => state.count 
);
