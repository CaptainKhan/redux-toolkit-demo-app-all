
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: '',
}

// Generated pending, fulfilled and rejected actions types
// export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
//     return axios
//         .get('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.data.map(user => user.id))
// })
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
                state.error = ''
            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.users = []
                state.error = action.error.message
            })
    }
})

export default userSlice.reducer