import React from "react";
import LalitReducer from "./LalitReducer"
import { createStore } from "redux";

const LalitStore = createStore(LalitReducer)

// Debug: log store creation and initial state
try {
	console.log('LalitStore created, initial state:', LalitStore.getState());
} catch (e) {}

export default LalitStore