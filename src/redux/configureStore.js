import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant))
  );
}
