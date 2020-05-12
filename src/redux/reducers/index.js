import { combineReducers } from "redux";
import articles from "./articlesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  articles,
  apiCallsInProgress,
});

export default rootReducer;
