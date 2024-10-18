import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../api/authService";
import to from "await-to-js";

const userInitialState = {
  userData: {
    name: "",
    username: "",
    email: "",
    roles: [],
  },
  imageSrc: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setImageSrc: (state, action) => {
      state.imageSrc = action.payload;
    },
  },
});

export const fetchUser = createAsyncThunk(
  "api/user",
  async (params, { dispatch }) => {
    const [error, response] = await to(getCurrentUser());
    console.log("the response data is " + JSON.stringify(response.data));
    dispatch(setUser(response.data));
  }
);

export const { setUser, setImageSrc } = userSlice.actions;
export default userSlice.reducer;
