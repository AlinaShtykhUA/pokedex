import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { appSlice } from './slices/appSlice';
import { pokemonSlice } from './slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    pokemon: pokemonSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
