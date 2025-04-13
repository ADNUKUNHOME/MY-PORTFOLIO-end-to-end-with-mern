import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    contact: []
}

export const userContactSubmission = createAsyncThunk('contact/userContactSubmission', async (formData, { rejectWithValue }) => {
    try {

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/contact/add`, formData);
        return response.data;

    } catch (error) {
        console.error('contact error', error.response?.data);
        return rejectWithValue(error.response?.data || { message: 'Somethig went wrong!' })
    }
})

export const getAllContacts = createAsyncThunk('contact/getAllContacts', async (_, { rejectWithValue }) => {
    try {

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/contact/get`);
        return response.data;

    } catch (error) {
        console.error('contact error', error.response?.data);
        return rejectWithValue(error.response?.data || { message: 'Somethig went wrong!' })
    }
})

const userContactSlice = createSlice({
    name: 'usercontact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contact = action.payload?.data;
            })
            .addCase(getAllContacts.rejected, (state) => {
                state.isLoading = false;
                state.contact = [];
            })
    }
});

export default userContactSlice.reducer;