import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

type HeaderState = {
  title: string;
  videoUrl: string;
};

const initialState: HeaderState = {
  title: "KIA K3",
  videoUrl: "",
};

// FETCH
export const fetchHeader = createAsyncThunk(
  "header/fetchHeader",
  async () => {
    const res = await axios.get("http://localhost:3000/header");
    return res.data;
  }
);

// SAVE (NOW SIMPLE OBJECT, NO FILE)
export const saveHeader = createAsyncThunk<
  HeaderState,
  HeaderState
>("header/saveHeader", async (data) => {
  const res = await axios.put(
    "http://localhost:3000/header",
    data
  );

  return res.data;
});

const headerSlice = createSlice({
  name: "header",
  initialState,

  reducers: {
    setHeader: (
      state,
      action: PayloadAction<HeaderState>
    ) => {
      state.title = action.payload.title;
      state.videoUrl = action.payload.videoUrl;
    },
  },

  extraReducers: (builder) => {
    // FETCH
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.title = action.payload.title;
      state.videoUrl = action.payload.videoUrl;
    });

    // SAVE
    builder.addCase(saveHeader.fulfilled, (state, action) => {
      state.title = action.payload.title;
      state.videoUrl = action.payload.videoUrl;
    });
  },
});

export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;