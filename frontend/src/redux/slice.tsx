import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface FormState {
  title: string;
  location: string;
  urgencyId: number | null;
  urgencyTitle: string;
  departmentId: number | null;
  departmentTitle: string;
  progressId: number;
  detail: string;
}

const initialState: FormState = {
  title: "",
  location: "",
  urgencyId: null,
  urgencyTitle: "",
  departmentId: null,
  departmentTitle: "",
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
    setUrgencyTitle: (state, action: PayloadAction<string>) => {
      state.urgencyTitle = action.payload;
    },
    setDepartmentId: (state, action: PayloadAction<number>) => {
      state.departmentId = action.payload;
    },
    setDepartmentTitle: (state, action: PayloadAction<string>) => {
      state.departmentTitle = action.payload;
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
    resetForm: (state) => {
      state.title = "";
      state.location = "";
      state.urgencyId = null;
      state.urgencyTitle = "";
      state.departmentId = null;
      state.departmentTitle = "";
      state.detail = "";
    },
  },
});

export const {
  setTitle,
  setLocation,
  setUrgencyId,
  setUrgencyTitle,
  setDepartmentId,
  setDepartmentTitle,
  setProgressId,
  setDetail,
  setField,
  resetForm,
} = formSlice.actions;
export default formSlice.reducer;
