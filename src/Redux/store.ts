import { configureStore, createReducer } from '@reduxjs/toolkit'
const rootReducer = createReducer([],{
    
})
export const store = configureStore({
  reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>
