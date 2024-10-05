import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './invoiceSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch