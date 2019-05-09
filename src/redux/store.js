import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storeInfoReducer from "./StoreInfo/StoreInfo.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  storeInfoReducer
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
export default store;
