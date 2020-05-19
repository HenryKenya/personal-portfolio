import { combineReducers } from "redux";
import articles from "./articlesReducer";
import media from "./mediaReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  articles,
  media,
  apiCallsInProgress,
});

export default rootReducer;
