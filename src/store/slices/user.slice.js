import { createSlice } from '@reduxjs/toolkit';

export const userTube = createSlice ({
    name: 'user',
    initialState: '',
    reducers: {
        setUserSlice: (state, action) => action.payload
    }
})

export const { setUserSlice } = userTube.actions;

export default userTube.reducer;