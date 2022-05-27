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

export const getTours = createAsyncThunk(
  "tour/getTours",
  async (_, { rejectWithValue }) => {
    try {
      const response = await Api.getTours();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTour = createAsyncThunk(
  "tour/getTour",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Api.getTour();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getTourByUser = createAsyncThunk(
  "tour/getTourByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await Api.getTourByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteTour = createAsyncThunk(
  "tour/deleteTour",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await Api.deleteTour(id);
      toast.success("Post Delete successfully");
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
    userTours: [],
    tour: {},
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
    [getTours.pending]: (state, action) => {
      state.loading = true;
    },
    [getTours.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = action.payload;
    },
    [getTours.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getTour.pending]: (state, action) => {
      state.loading = true;
    },
    [getTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = action.payload;
    },
    [getTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getTourByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getTourByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userTours = action.payload;
    },
    [getTourByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteTour.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTour.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userTours = state.userTours.filter((item) => item._id !== id);
        state.tours = state.userTours.filter((item) => item._id !== id);
      }
    },
    [deleteTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default postSlice.reducer;
