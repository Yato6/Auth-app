import { Redirect, Router, Route, Switch } from "react-router";
import Account from "../pages/Account";
import Login from "../pages/Login";
import { history } from "../Components/History";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/Login"} component={Login} />
        <Route path={"/Account"} component={Account} />
        <Redirect from={"/"} to={"/Login"} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
