import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  notification: null,
};

const UISlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice.reducer;
