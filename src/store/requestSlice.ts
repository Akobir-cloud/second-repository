import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface RequestType {
  id: number;
  name: string;
  phone: string;
  model: string;
  comment: string;
}

interface RequestState {
  requests: RequestType[];
  loading: boolean;
}

const initialState: RequestState = {
  requests: [],
  loading: false,
};

const API =
  "http://localhost:3000/requests";


// GET
export const fetchRequests =
  createAsyncThunk(
    "requests/fetchRequests",
    async () => {
      const res = await fetch(API);

      return await res.json();
    }
  );


// ADD
export const addRequest =
  createAsyncThunk(
    "requests/addRequest",
    async (
      data: Omit<RequestType, "id">
    ) => {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      });

      return await res.json();
    }
  );


// DELETE
export const deleteRequest =
  createAsyncThunk(
    "requests/deleteRequest",
    async (id: number) => {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      return id;
    }
  );

const requestSlice = createSlice({
  name: "requests",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET
      .addCase(
        fetchRequests.fulfilled,
        (state, action) => {
          state.requests =
            action.payload;
        }
      )

      // ADD
      .addCase(
        addRequest.fulfilled,
        (state, action) => {
          state.requests.push(
            action.payload
          );
        }
      )

      // DELETE
      .addCase(
        deleteRequest.fulfilled,
        (state, action) => {
          state.requests =
            state.requests.filter(
              (item) =>
                item.id !==
                action.payload
            );
        }
      );
  },
});

export default requestSlice.reducer;