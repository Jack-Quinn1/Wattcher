import { combineReducers } from "redux";
import { reducerOption } from "./reducer-options";
import { reducerActive } from "./reducer-active";

const allred = combineReducers({
  users: reducerOption,
  activeUser: reducerActive,
});

export default allred;
