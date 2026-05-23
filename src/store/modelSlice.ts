import {
  createAsyncThunk,
  createSlice,
 type  PayloadAction,
} from "@reduxjs/toolkit";

interface Complectation {
  name: string;
  title: string;
  price: string;
}

export interface Model {
  id: number;
  name: string;
  price: string;
  image: string;
  slug: string;
  complectations: Complectation[];
}

interface ModelState {
  models: Model[];
  loading: boolean;
}

const initialState: ModelState = {
  models: [],
  loading: false,
};


// GET MODELS
export const fetchModels = createAsyncThunk(
  "models/fetchModels",
  async () => {
    const res = await fetch(
      "http://localhost:3000/models",{
        method:"GET"
      }
    );

    return await res.json();
  }
);


// ADD MODEL
export const addModel = createAsyncThunk(
  "models/addModel",
  async (modelData: Omit<Model, "id">) => {
    const res = await fetch(
      "http://localhost:3000/models",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(modelData),
      }
    );

    return await res.json();
  }
);

export const deleteModel = createAsyncThunk(
  "models/deleteModel",
  async (id: number) => {
    await fetch(`http://localhost:3000/models/${id}`, {
      method: "DELETE",
    });

    return id;
  }
);

export const updateModel = createAsyncThunk(
  "models/updateModel",
  async (model: Model) => {
    const res = await fetch(
      `http://localhost:3000/models/${model.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
      }
    );

    return await res.json();
  }
);

const modelSlice = createSlice({
  name: "models",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET
      .addCase(fetchModels.pending, (state) => {
        state.loading = true;
      })

  


.addCase(fetchModels.fulfilled, (state, action) => {
  state.loading = false;
  state.models = action.payload;
})
    
      .addCase(
        addModel.fulfilled,
        (
          state,
          action: PayloadAction<Model>
        ) => {
          state.models.push(action.payload);
        }
      )

      .addCase(deleteModel.fulfilled, (state, action: PayloadAction<number>) => {
  state.models = state.models.filter(
    (model) => model.id !== action.payload
  );
})

.addCase(updateModel.fulfilled, (state, action: PayloadAction<Model>) => {
  const index = state.models.findIndex(
    (m) => m.id === action.payload.id
  );

  if (index !== -1) {
    state.models[index] = action.payload;
  }
});
  },
});

export default modelSlice.reducer;