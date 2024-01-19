import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appName: "Alfsa Shopping",
  username: "Jennifer",
};

export const generalAppConfigSlice = createSlice({
  name: "generalAppConfigs",
  initialState,
  reducers: {
    // It is written only to give an example. This method has not been used anywhere.
    appNameChange: (state, action) => {
      state.appName = action.payload;
    },
  },
});
