import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imc: 0,
};

const imcSlice = createSlice({
  name: 'imc',
  initialState,
  reducers: {
    setImc: (state, action) => {
      state.imc = action.payload;
    },
  },
});

export const { setImc } = imcSlice.actions;

export default imcSlice.reducer;
