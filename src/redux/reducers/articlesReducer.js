import * as types from "../../helpers/constants";
import initialState from "./initialState";

export default function articlesReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      console.log("articles loaded");
      console.log(action.articles);
      return action.articles;
    default:
      return state;
  }
}
