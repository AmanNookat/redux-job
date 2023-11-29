import { createSlice } from "@reduxjs/toolkit";
import { setChatGpt } from "./gptAction";

interface ChatGpt {
  message: string;
  mess: null | any;
  error: boolean;
  loading: boolean;
}
interface RootState {
  // other slices...
  gpt: ChatGpt;
}
const initialState: ChatGpt = {
  message: "",
  mess: null,
  error: false,
  loading: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setChatGpt.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(setChatGpt.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.message = action.meta.arg;
        state.mess = action.payload;
        console.log(state.mess);
      })
      .addCase(setChatGpt.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default gptSlice.reducer;
