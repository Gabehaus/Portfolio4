import {
  SHOW_LINKS,
  FADEOUT_LINKS,
  SHOW_PORT,
  FADEOUT_PORT,
  SHOW_ACCOUNTS,
  SHOW_WHEEL,
  SHOW_NAME
} from "./types";

export const showLinks = () => {
  return {
    type: SHOW_LINKS
  };
};

export const showPort = () => {
  return {
    type: SHOW_PORT
  };
};

export const showAccounts = () => {
  return {
    type: SHOW_ACCOUNTS
  };
};

export const showWheel = () => {
  return {
    type: SHOW_WHEEL
  };
};

export const showName = () => {
  return {
    type: SHOW_NAME
  };
};
