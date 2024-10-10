import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TestState {
  test: string;
}

const initialState: TestState = {
  test: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<Partial<TestState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setConfig } = testSlice.actions;

export default testSlice.reducer;
