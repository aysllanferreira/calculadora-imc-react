import { configureStore } from '@reduxjs/toolkit';
import imcReducer from './reducer/imc';

export const store = configureStore({
  reducer: {
    imc: imcReducer,
  },
});
