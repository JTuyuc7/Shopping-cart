import { createSlice } from '@reduxjs/toolkit';
const cartInitialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: cartInitialState,
    reducers: {
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItemToCart(state, action){
            const item = action.payload
            const existingItem = state.items.find( (ele) => ele.id === item.id )
            state.totalQuantity++
            state.changed = true
            if( !existingItem ){
                state.items.push({
                    id: item.id, 
                    price: item.price, 
                    quantity: 1, 
                    totalPrice: item.price, 
                    name: item.name 
                })
            }else {
                
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + item.price
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload
                const existingItem = state.items.find( (ele) => ele.id === id );
                state.totalQuantity--
                state.changed = true
            if( existingItem.quantity === 1){
                state.items = state.items.filter( (ele) => ele.id !== id );
            }else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
});



export const cartActions = cartSlice.actions