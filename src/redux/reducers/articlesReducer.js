import * as types from "../../helpers/constants";
import initialState from "./initialState";

export default function articlesReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return action.articles;
    default:
      return state;
  }
}
