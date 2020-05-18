import { handleResponse, handleError } from "./apiUtils";
import { BASE_URL } from "../helpers/constants";

const baseUrl = `${BASE_URL}/media`;

export function getFeaturedMedia() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
