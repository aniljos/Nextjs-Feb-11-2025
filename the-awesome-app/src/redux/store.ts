import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';


const combinedReducer = combineReducers({
    auth: authReducer
})

//create the redux store
export const store = configureStore({

    reducer: combinedReducer,
    devTools: true
});