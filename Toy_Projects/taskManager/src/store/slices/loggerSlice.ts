import { createSlice } from "@reduxjs/toolkit";
import { ILogITem } from "../../types";

type TLoggerState = {
    logArray : ILogITem[]
};

const initialState: TLoggerState = {
    logArray: []
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers:{}
});

export const loggerReducer = loggerSlice.reducer;
