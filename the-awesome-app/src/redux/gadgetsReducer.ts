import { CartItem } from "@/model/CartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GadgetState = {
    cart: CartItem[],
    user?: string
}

const initialState: GadgetState = {
    cart: [],
    user: "abc"
}


//action: {type: "addtocart", payload: CartItem}
//action: {type: "removeitem", id: 1}
// export const gadgetsReducer = (state=initialState, action) => {

//     if(action.type === "addtocart" && action.payload){

//         //state.cart.push(action.payload);
//         const cart = [...state.cart];
//         cart.push(action.payload);
//         return {
//             ...state,
//             cart: cart,
//         }
//     }
//     return state;
// }

const slice = createSlice({
    name: "gadgets",
    initialState: initialState,

    reducers: {

        addItemToCart: (state, action: PayloadAction<CartItem>) => {

            state.cart.push(action.payload);

        },
        removeItem: (state, action: PayloadAction<number>) => {

            const index = state.cart.findIndex(item => item.product.id == action.payload);
            if(index !== -1){
                state.cart.splice(index, 1);
            }
        }
    }
});

// action creators(helpers to creacte action)
export const {addItemToCart, removeItem} =  slice.actions;
export const gadgetsReducer =  slice.reducer;