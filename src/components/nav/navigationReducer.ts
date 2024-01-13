import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface INavigationState {
  expanded: boolean;
}

const initialState: INavigationState = {
  expanded: true
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setExpandedStatus: (state, action) => {
      state.expanded = action.payload;
    }
  }
});

export const { setExpandedStatus } = navigationSlice.actions;

export const selectNavigationExpandedState = createSelector(
  (state: RootState) => state.navigation.expanded,
  (state) => state
);

export default navigationSlice.reducer;
