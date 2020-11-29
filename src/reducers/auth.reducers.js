import { authConstants } from "../actions/constants";

const initState = {
  name: "Riz",
};
export default (state = {}, action) => {
  console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_RRQUEST:
      state = {
        ...state,
        ...action.payload,
      };
      break;
  }
  return state;
};
