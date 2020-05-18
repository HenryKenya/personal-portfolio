import * as types from "../../helpers/constants";
import * as articlesApi from "../../api/articlesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadArticlesSuccess(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles };
}

export function loadArticles() {
  return function (dispatch) {
    console.log("this is called again");
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
