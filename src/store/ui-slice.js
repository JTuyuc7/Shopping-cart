import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
    cartVisible: false,

}

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: uiInitialState,
    reducers: {
        toggle(state, action){
            state.cartVisible = action.payload 
        }
    }
})

export const uiActions = uiSlice.actions;