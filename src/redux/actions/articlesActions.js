import * as types from "../../helpers/constants";
import * as articlesApi from "../../api/articlesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadArticlesSuccess(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles };
}

export function loadArticles() {
  console.log("action called");
  return function (dispatch) {
    dispatch(beginApiCall());

    return articlesApi
      .getArticles()
      .then((articles) => {
        dispatch(loadArticlesSuccess(articles));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
