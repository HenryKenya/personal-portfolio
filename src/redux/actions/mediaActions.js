import * as types from "../../helpers/constants";
import * as mediaApi from "../../api/mediaApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadMediaSuccess(media) {
  return { type: types.LOAD_IMAGES_SUCCESS, media };
}

export function loadMedia() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return mediaApi
      .getFeaturedMedia()
      .then((media) => {
        dispatch(loadMediaSuccess(media));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
