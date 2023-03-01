import { createSlice } from "@reduxjs/toolkit";


export const mySlice = createSlice(
    {
        name: 'mySlice',
        initialState: [],
        reducers: {
            fetchData: (state,action) => {
                console.log(action.payload);
                state = action.payload;
                return state;
            },       
            deleteData: (state, action) => {
                state = [];
                console.log(state);
                return state;
            }
        }
    }
)
export const { fetchData, deleteData } = mySlice.actions;

export default mySlice.reducer;