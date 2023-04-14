import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams: 20,
}

export const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, actions) => {
            state.numOfIcecreams += actions.payload
        },
    },
    // extraReducers : {
    //     ['cake/odered'] : (state)=> {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    }
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;

