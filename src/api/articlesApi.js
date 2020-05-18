import { handleResponse, handleError } from "./apiUtils";
import { BASE_URL } from "../helpers/constants";

const baseUrl = `${BASE_URL}/posts`;

export function getArticles() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getSingleArticle(slug) {
  return fetch(`${baseUrl}?slug=${slug}`)
    .then(handleResponse)
    .catch(handleError);
}
