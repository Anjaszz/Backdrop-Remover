
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bgRemoved: null
};

const removeBg = createSlice({
  name: 'removeBg',
  initialState,
  reducers: {
    setActionStatus: (state, action) => {
      state.bgRemoved = action.payload;
    },
  },
});

export const { setActionStatus } = removeBg.actions;
export default removeBg.reducer;
