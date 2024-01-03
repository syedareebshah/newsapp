// export action creators
import * as loginActions from "./authActions";
import * as navigationActions from "./navigationActions";

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions
);
