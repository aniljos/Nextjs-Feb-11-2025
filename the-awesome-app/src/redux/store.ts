import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';


const combinedReducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})

//create the redux store
export const store = configureStore({

    reducer: combinedReducer,
    devTools: true
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;