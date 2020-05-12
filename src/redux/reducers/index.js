import { combineReducer } from "redux";
import articles from "./articlesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducer({
  articles,
  apiCallsInProgress,
});

export default rootReducer;
