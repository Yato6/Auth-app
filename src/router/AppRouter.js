import { Redirect, Router, Route, Switch } from "react-router";
import Account from "../pages/Account";
import Auth from "../pages/Auth";
import { history } from "../Components/History";
import Weather from "../pages/Weather";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/Auth"} component={Auth} />
        <Route path={"/Account"} component={Account} />
        <Route path={"/Weather"} component={Weather} />
        <Redirect from="/" to={"/Auth"} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
