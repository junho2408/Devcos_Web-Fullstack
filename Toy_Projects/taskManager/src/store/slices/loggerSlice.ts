import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers:{
    addLog: (state, {payload}: PayloadAction<ILogITem>) => {
      state.logArray.push(payload);
    }
  }
});

export const {addLog} = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;
