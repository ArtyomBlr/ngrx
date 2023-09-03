import {
  Action,
  ActionReducerMap, MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { CountState, countNode, countReducer } from './count/count.reducer';

export interface State {
  [countNode]: CountState;
}

export const reducers:ActionReducerMap<State, Action> = {
  [countNode]: countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
