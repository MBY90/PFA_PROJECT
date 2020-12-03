import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { patientReducer } from "./reducer/patientReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  patientReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
