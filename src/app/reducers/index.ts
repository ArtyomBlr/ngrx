import {
  ActionReducerMap, MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { CountState, countNode, countReducer } from 'src/app/reducers/count/count.reducer';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
