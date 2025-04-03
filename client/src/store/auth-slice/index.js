import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    user: null,
    isAuthenticated: false,
    error: null,
    otpSent: false,
    emailVerified: false,
    resetOtpSent: false,
    passwordReset: false,
}


export const registerUser = createAsyncThunk('/auth/register', async (formData) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', formData);
    return response.data;
});

export const loginUser = createAsyncThunk('/auth/loginUser', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', formData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data);

        return rejectWithValue(error.response?.data || { message: "Something went wrong!" });
    }
});


export const logoutUser = createAsyncThunk('/auth/logoutUser', async () => {
    const response = await axios.post('http://localhost:5000/api/auth/logout');
    return response.data;
});

export const sendVerifyOtp = createAsyncThunk('/auth/sendVerifyOtp', async (userId) => {
    const response = await axios.post('http://localhost:5000/api/auth/send-verify-otp', userId);
    return response.data;
});

export const emailVerify = createAsyncThunk('/auth/emailVerify', async ({ userId, otp }) => {
    const response = await axios.post('http://localhost:5000/api/auth/verify-account', { userId, otp });
    return response.data;
});


export const passwordResetOtp = createAsyncThunk('/auth/passwordResetOtp', async (email, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/send-reset-password', { email }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data);

        return rejectWithValue(error.response?.data || { message: "Something went wrong!" });
    }
});

export const resetPassword = createAsyncThunk('/auth/resetPassword', async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/reset-password', { email, otp, newPassword }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data);

        return rejectWithValue(error.response?.data || { message: "Something went wrong!" });
    }
});


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Register User
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success ? true : false
                state.user = action.payload.success ? action.payload.user : null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
                state.isAuthenticated = false
            })
            //Login User
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success ? true : false
                state.user = action.payload.success ? action.payload.user : null
                sessionStorage.setItem('token', JSON.stringify(action.payload.token));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload?.message
                state.isAuthenticated = false
            })
            // Logout User
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message;
            })

            // Send Verification OTP
            .addCase(sendVerifyOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendVerifyOtp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.otpSent = action.payload.success;
            })
            .addCase(sendVerifyOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message;
            })

            // Verify Email with OTP
            .addCase(emailVerify.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(emailVerify.fulfilled, (state, action) => {
                state.isLoading = false;
                state.emailVerified = action.payload.success;
            })
            .addCase(emailVerify.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message;
            })

            // Request Password Reset OTP
            .addCase(passwordResetOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(passwordResetOtp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.resetOtpSent = action.payload.success;
            })
            .addCase(passwordResetOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message;
            })

            // Reset Password
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.passwordReset = action.payload.success;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message;
            });
    }
})


export default authSlice.reducer;