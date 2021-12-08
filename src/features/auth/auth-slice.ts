import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: "",
};

const AuthStateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = AuthStateSlice.actions;
export default AuthStateSlice.reducer;
