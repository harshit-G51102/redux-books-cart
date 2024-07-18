import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed:false
    },
    reducers: {
        replaceCart(state,action){
            state.totalQuantity=action.payload.totalQuantity;
            state.items=action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.itemId === newItem.itemId);
            state.totalQuantity++;
            state.changed=true;
            if (!existingItem) {
                state.items.push({
                    key: newItem.itemId,
                    itemId: newItem.itemId,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeFromCart(state, action) {
            state.totalQuantity--;
            const id = action.payload;
            const existingItem = state.items.find(item => item.itemId === id);
            state.changed=true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemId !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    },

})

export const cartActions = cartSlice.actions;
export default cartSlice;