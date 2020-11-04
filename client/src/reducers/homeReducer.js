import {
  SHOW_LINKS,
  FADEOUT_LINKS,
  SHOW_PORT,
  FADEOUT_PORT,
  SHOW_ACCOUNTS,
  SHOW_WHEEL,
  SHOW_NAME
} from "../actions/types";

const initialState = {
  showLinks: true,
  showPort: false,
  showAccounts: true,
  showWheel: false,
  showName: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LINKS:
      return {
        ...state,
        showLinks: !state.showLinks
      };
    case SHOW_PORT:
      return {
        ...state,
        showPort: !state.showPort
      };
    case SHOW_ACCOUNTS:
      return {
        ...state,
        showAccounts: !state.showAccounts
      };
    case SHOW_WHEEL:
      return {
        ...state,
        showWheel: !state.showWheel
      };
    case SHOW_NAME:
      return {
        ...state,
        showName: !state.showName
      };

    default:
      return state;
  }
}
