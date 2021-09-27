import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const logIn = () => {
  return history.push("/Main");
};

export const logOut = () => {
  return history.push("/Login");
};
