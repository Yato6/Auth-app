import { Router, Switch, Route } from "react-router-dom";
import Account from "./pages/Account";
import Login from "./pages/Login";
import { Redirect } from "react-router";
import { history } from "./Components/History";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Account" component={Account} />
        <Redirect from="/" to="/Login" />
      </Switch>
    </Router>
  );
}

export default App;
