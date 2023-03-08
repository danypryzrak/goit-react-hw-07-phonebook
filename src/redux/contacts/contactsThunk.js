import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "Service/contactsAPI"


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
        return await fetchContacts()
        } catch (error) {
        return thunkAPI.rejectWithValue(error)
        }
    })

export const addContactThunk = createAsyncThunk('contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            return await addContact(contact)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
    async (contact, { rejectWithValue }) => {
        try {
            return await deleteContact(contact, contact.id)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

