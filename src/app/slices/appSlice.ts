import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types";

const initialState: AppTypeInitialState = {}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {}
})

export const {} = appSlice.actions;