import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

import navigationReducer from '../components/nav/navigationReducer';

export const reducer = combineReducers({
  navigation: navigationReducer
});

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
