import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { shoppingListAPI } from 'store/services/shopping-list.service';

const rootReducer = combineReducers({
  // userSlice,
  [shoppingListAPI.reducerPath]: shoppingListAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoppingListAPI.middleware),
});
