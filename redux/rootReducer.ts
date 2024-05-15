import { combineReducers } from "redux";

import { reducer as filmsReducer } from "./films";

// Combine all reducers.

const rootReducer = combineReducers({
  films: filmsReducer,
});

export default rootReducer;
