import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../Reducers";
import history from "../../Lib/Utils/history";

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);
