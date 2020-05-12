import * as types from "../../helpers/constants";
import initialState from "./initialState";

function actionTypesEndInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default apiStatusReducer(state = initialState.apiCallsInProgress, action) {
    if(action.type ==  "BEGIN_API_CALL") {
        return state + 1
    } else if(action.type == types.API_CALL_ERROR || actionTypesEndInSuccess(type)) {
        return state - 1
    }
    return state;
}