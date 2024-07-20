import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoSrc: "",
  title: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.videoSrc = action.payload.videoSrc;
      state.title = action.payload.title;
    },
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
