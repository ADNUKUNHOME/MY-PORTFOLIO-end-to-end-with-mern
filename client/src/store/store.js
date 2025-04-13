import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth-slice'
import projectReducer from './admin-slice/projectSlice'
import contactReducer from './user/contactSlice'


const store  = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        contact: contactReducer
    }
})

export default store;