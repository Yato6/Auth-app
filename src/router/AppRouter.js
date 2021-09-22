import { Redirect, Router, Route, Switch } from "react-router";
import Account from "../pages/Account";
import Auth from "../pages/Auth";
import { history } from "../Components/History";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/Auth"} component={Auth} />
        <Route path={"/Account"} component={Account} />
        <Redirect from="/" to={"/Auth"} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
