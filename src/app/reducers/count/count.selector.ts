import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CountState, countNode } from "src/app/reducers/count/count.reducer";

export const selectCountFeature = createFeatureSelector<CountState>(countNode);

export const selectCount = createSelector(
  selectCountFeature,
  (state: CountState): number => state.count
)

export const selectUpdatedAt = createSelector(
  selectCountFeature,
  (state: CountState): number => state.updatedAt
)