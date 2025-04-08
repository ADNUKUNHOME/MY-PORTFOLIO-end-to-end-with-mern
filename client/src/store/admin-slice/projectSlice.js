import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    projects: []
}

export const addNewProject = createAsyncThunk('admin/addnewproject', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/admin/projects/add', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error('Project Add error:', error.response?.data);
        return rejectWithValue(error.response?.data || { message: 'Something went wrong!' });
    }
});


export const editProject = createAsyncThunk('admin/editproject', async ({ projectId, formData }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/admin/projects/edit/:${projectId}`, formData);
        return response.data;
    } catch (error) {
        console.error('Project Add error:', error.response?.data);
        return rejectWithValue(error.response?.data || { message: 'Something went wrong!' });
    }
});


export const deleteProject = createAsyncThunk('admin/deleteproject', async ({ projectId }, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/admin/projects/delete/:${projectId}`)
        return response.data;
    } catch (error) {
        console.error('Project Add error:', error.response?.data);
        return rejectWithValue(error.response?.data || { message: 'Something went wrong!' });
    }
});


export const fetchAllProjects = createAsyncThunk('admin/fetchallprojects', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:5000/api/admin/projects/get');
        return response.data;
    } catch (error) {
        console.error('Project Add error:', error.response?.data);
        return rejectWithValue(error.response?.data || { message: 'Something went wrong!' });
    }
});



const ProjectSlice = createSlice({
    name: 'projectslice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // addcase for adding projects
            .addCase(addNewProject.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addNewProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects.push(action.payload?.data);
            })
            .addCase(addNewProject.rejected, (state) => {
                state.isLoading = false;
                state.projects = [];
            })
            //addcase for editing projects
            .addCase(editProject.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects.push(action.payload?.data);
            })
            .addCase(editProject.rejected, (state) => {
                state.isLoading = false;
                state.projects = [];
            })
            //addcase for deleteing projects
            .addCase(deleteProject.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects = action.payload?.data;
            })
            .addCase(deleteProject.rejected, (state) => {
                state.isLoading = false;
                state.projects = [];
            })
            //addcase for fetching all projects
            .addCase(fetchAllProjects.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProjects.fulfilled, (state, action) => {                
                state.isLoading = false;
                state.projects = action.payload?.data || [];
            })
            .addCase(fetchAllProjects.rejected, (state) => {
                state.isLoading = false;
                state.projects = [];
            })
    }
})

export default ProjectSlice.reducer;