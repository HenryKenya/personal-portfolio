import { handleResponse, handleError } from "./apiUtils";
import { BASE_URL } from "../helpers/constants";

const baseUrl = `${BASE_URL}/media`;

export function getArticles(featuredMedia) {
  return fetch(baseUrl + "/" + featuredMedia)
    .then(handleResponse)
    .catch(handleError);
}
