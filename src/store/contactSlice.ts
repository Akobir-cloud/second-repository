import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Contact {
  id?: string;
  name: string;
  phone: string;
  model: string;
}

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  success: false,
  error: null,
};


// POST
export const sendContact = createAsyncThunk(
  "contact/sendContact",
  async (formData: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/contact",
        formData
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error"
      );
    }
  }
);


// GET
export const getContacts = createAsyncThunk(
  "contact/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/contact"
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error"
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // SEND CONTACT
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
      })

      .addCase(sendContact.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      .addCase(sendContact.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })


      // GET CONTACTS
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
      })

      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })

      .addCase(getContacts.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;