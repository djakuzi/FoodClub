import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const CART_PERSISTENT_STATE = 'cartData'

export interface CartItem{
    id: number;
    count: number;

}

export interface CartState {
    items: CartItem[]
  
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
    items: []
}

// const initialState: CartState = {
//     items: loadState<CartState>(CART_PERSISTENT_STATE)?.cart ?? null,
// }

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clear: (state)=>{
            state.items = []
        },
        add: (state, action: PayloadAction<number>) =>{
            const existed = state.items.find( el => el.id === action.payload)
            if(!existed){
                state.items.push({id: action.payload, count: 1})
                return
            }
            state.items.map( el =>{
                if(el.id === action.payload) el.count += 1
                return el
            })
        },
        remove: (state, action: PayloadAction<number>) =>{
            const existed = state.items.find( el => el.id === action.payload)
            if(!existed) return
            if(existed){
                if(existed.count == 1){
                    state.items = state.items.filter( el => el.id != action.payload)
                } else {
                    state.items.map( el =>{
                        if(el.id === action.payload) el.count -= 1
                        return el
                    })
                }
            }
            

        },
        delete: (state, action: PayloadAction<number>) => {
           state.items = state.items.filter( el => el.id != action.payload)
        }
    }
})

export default cartSlice.reducer
export const cartActions = cartSlice.actions