import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Api from "../api";

export const createTour = createAsyncThunk(
  "tour/createTour",
  async ({ tourData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await Api.createTour(tourData);
      toast.success("Post Added Successfully");
      // navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    error: "",
    loading: false,
    tours: [],
    user: "",
  },
  extraReducers: {
    [createTour.pending]: (state, action) => {
      state.loading = true;
    },
    [createTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = [action.payload];
    },

    [createTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.msg;
    },
  },
});

export default postSlice.reducer;
