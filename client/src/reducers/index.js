import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import { connectRouter } from "connected-react-router";
import { history } from "../history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  home: homeReducer
});
export default rootReducer;
