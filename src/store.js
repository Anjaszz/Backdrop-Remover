// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import removeBackgroundReducer from './features/RemoveBg';

export const store = configureStore({
  reducer: {
    status: removeBackgroundReducer,
  },
});
