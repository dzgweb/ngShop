import { Action, createReducer, on } from '@ngrx/store';

import { TasksState, initialTasksState } from './tasks.state';
import * as TasksActions from './tasks.actions';

export const ordersFeatureKey = 'orders';


const ordersReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return ordersReducer(state, action);
}
