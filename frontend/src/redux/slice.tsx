import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  title: string;
  description: string;
}

const initialState: FormState = {
  title: '',
  description: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setField: (state, action: PayloadAction<{ field: string, value: string }>) => {
      const { field, value } = action.payload;
      (state as any)[field] = value;
    },
  },
});

export const { setTitle, setDescription, setField } = formSlice.actions;
export default formSlice.reducer;
