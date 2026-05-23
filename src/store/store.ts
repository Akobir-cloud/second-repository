
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import headerReducer from "./headerSlice";
import modelReducer from "./modelSlice";
import requestReducer from "./requestSlice";

 const store =configureStore({
    reducer:{
      header: headerReducer,
      models: modelReducer,
      requests: requestReducer,
    },
    
    
 })

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)


