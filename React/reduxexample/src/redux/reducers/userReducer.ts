import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: { // estado inicial
        name: 'Lucas',
        age: 26
    },
    reducers: { //actions
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const {setName, setAge} = slice.actions;
export default slice.reducer;