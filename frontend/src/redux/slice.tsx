import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  title: string;
  location: string;
  urgencyId: number;
  departmentId: number;
  progressId: number;
  detail: string;
}

const initialState: FormState = {
  title: "",
  location: "",
  urgencyId: 0,
  departmentId: 0,
  progressId: 1,
  detail: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setUrgencyId: (state, action: PayloadAction<number>) => {
      state.urgencyId = action.payload;
    },
    setDepartmentId: (state, action: PayloadAction<number>) => {
      state.departmentId = action.payload;
    },
    setProgressId: (state, action: PayloadAction<number>) => {
      state.progressId = action.payload;
    },
    setDetail: (state, action: PayloadAction<string>) => {
      state.detail = action.payload;
    },
    setField: (
      state,
      action: PayloadAction<{ field: string; value: string | number }>
    ) => {
      const { field, value } = action.payload;
      (state as any)[field] = value;
    },
  },
});

export const { setTitle, setLocation, setUrgencyId, setDepartmentId, setProgressId, setDetail, setField } = formSlice.actions;
export default formSlice.reducer;
