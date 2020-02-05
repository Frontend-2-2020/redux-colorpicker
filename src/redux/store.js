import { createStore, combineReducers } from "redux";
import colorReducer from "./reducers/colorReducer";
import authReducer from "./reducers/authReducer";

const store = createStore(
  combineReducers({
    color: colorReducer,
    auth: authReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
