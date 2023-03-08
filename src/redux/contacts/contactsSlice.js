import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { addContactThunk, deleteContactThunk, fetchContactsThunk} from './contactsThunk';

const extraActions = [fetchContactsThunk, addContactThunk, deleteContactThunk]
function createExtraActions(type) {
    return extraActions.map(action => {
        return action[type]
    })
}

function setStatusPending(state) {
  state.isLoading = true
}

function setStatusRejected(state, action) {
  state.error = action
  state.isLoading = false
}

function setStatusFulfilled(state) {
  state.isLoading = false
  state.error = null
}

function fetchContactsFulfilled(state, action) {
  state.items = action.payload;
  setStatusFulfilled(state)
}

function addContactFulfilled(state, action) {
  state.items.unshift(action.payload)
  setStatusFulfilled(state)
}

function deleteContactFulfilled(state, action) {
  state.items = state.items.filter(contact =>
  contact.id !== action.payload.id)
  setStatusFulfilled(state)
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState.contacts,
  extraReducers: (builder) => {
        builder.addCase(fetchContactsThunk.fulfilled, fetchContactsFulfilled)
            .addCase(addContactThunk.fulfilled, addContactFulfilled)
            .addCase(deleteContactThunk.fulfilled, deleteContactFulfilled)
            .addMatcher(isAnyOf(...createExtraActions('pending'), setStatusPending))
            .addMatcher(isAnyOf(...createExtraActions('rejected'), setStatusRejected))
}});

export const contactsReducer = contactsSlice.reducer;

