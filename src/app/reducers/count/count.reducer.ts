import { State } from "@ngrx/store";
import { CountActions, countActionsType } from "src/app/reducers/count/count.actions";

export const countNode = 'count';

export interface CountState {
  count: number,
  updatedAt: number
}

const initialState: CountState = {
  count: 0, 
  updatedAt: Date.now()
};

export const countReducer = (state = initialState, action: CountActions): CountState => {
  switch (action.type) {
    case countActionsType.increase: 
      return {
        ...state,
        count: state.count + 1
      };
    case countActionsType.decrease: 
      return {
        ...state,
        count: state.count - 1
      };
    case countActionsType.clear:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};