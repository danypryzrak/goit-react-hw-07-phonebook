import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./contactsInitialState";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: contactsInitialState.filter,
    reducers: {
        FILTER: (_, { payload }) => payload,
    },
});

export const { FILTER } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;