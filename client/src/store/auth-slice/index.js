import { createSlice }  from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    user: null,
    isAuthenticated: false,
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})


export default authSlice;