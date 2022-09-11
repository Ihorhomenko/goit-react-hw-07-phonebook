import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        addFilter(_, {payload}) {
            return payload
        } 
    }
    
})

export const {addFilter} = filterSlice.actions 