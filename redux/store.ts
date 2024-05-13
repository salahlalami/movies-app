"use client";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import storePersist from "./storePersist";

import { INITIAL_STATE } from "./github/reducer";

const initialState: any = storePersist.get("favorList")
  ? { github: { ...INITIAL_STATE, favorList: storePersist.get("favorList") } }
  : {};

const enableDevTools: boolean = process.env.NODE_ENV ? true : false;
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: enableDevTools, // Enable Redux DevTools in development mode
});

export default store;
