import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth-slice'
import projectReducer from './admin-slice/projectSlice'


const store  = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer
    }
})

export default store;