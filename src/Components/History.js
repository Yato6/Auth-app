import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const logIn = ()  => {
  return history.push("/Account");
};

export const logOut = () => {
  return history.push("/Login")
}
