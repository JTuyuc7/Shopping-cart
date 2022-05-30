import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
    cartVisible: false,
    notification: null
}

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: uiInitialState,
    reducers: {
        toggle(state, action){
            state.cartVisible = action.payload 
        },
        showNotification(state, action){
            state.notification = { 
                status: action.payload.status, 
                title: action.payload.title, 
                message: action.payload.message 
            }
        }
    }
})

export const uiActions = uiSlice.actions;