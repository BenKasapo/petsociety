/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Api from "../api";

export const comment = createAsyncThunk(
  "comment/comment",
  async ({ id, commentData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await Api.comment(id, commentData);
      toast.success("Comment Added Successfully");
      //navigate("/Myprofile");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    error: "",
    loading: false,
    comments: [],
  },
  extraReducers: {
    [comment.pending]: (state, action) => {
      state.loading = true;
    },
    [comment.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.comments = [action.payload];
      }
    },

    [comment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.msg;
    },
  },
});

export default commentSlice.reducer;
 */
