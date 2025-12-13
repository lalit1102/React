import React from "react";
import LalitReducer from "./LalitReducer"
import { createStore } from "redux";

const LalitStore = createStore(LalitReducer)
export default LalitStore