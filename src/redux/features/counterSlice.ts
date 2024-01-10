import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counterState {
  value: number;
  boxCount: number;
}

const initialState: counterState = {
  value: 0,
  boxCount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      const shouldAddBox = state.value % 10 == 0;
      state.boxCount = shouldAddBox ? state.boxCount + 1 : state.boxCount;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      const shouldAddBox = state.value % 10 == 0;
      state.boxCount = shouldAddBox ? state.boxCount + 1 : state.boxCount;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
