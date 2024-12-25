import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

//remember only one store for a project
const store = configureStore({
    reducer:{
        auth:authSlice,
    }
});

export default store;