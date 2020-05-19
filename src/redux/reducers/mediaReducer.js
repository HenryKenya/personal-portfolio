import * as types from "../../helpers/constants";
import initialState from "./initialState";

export default function mediaReducer(state = initialState.media, action) {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return [...state, { ...action.media }];
    default:
      return state;
  }
}
