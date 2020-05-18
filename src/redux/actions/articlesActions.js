import * as types from "../../helpers/constants";
import * as articlesApi from "../../api/articlesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadArticlesSuccess(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles };
}

export function loadSingleArticleSuccess(article) {
  return { type: types.LOAD_ARTICLES_SUCCESS, article };
}

export function loadArticles() {
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

export function loadSingleArticle(slug) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return articlesApi
      .getSingleArticle(slug)
      .then((article) => dispatch(loadSingleArticleSuccess(article)))
      .catch((error) => dispatch(apiCallError(error)));
  };
}
