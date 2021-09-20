import { BrowserRouter, Switch, Route } from "react-router-dom";
import Account from "./pages/Account";
import Login from "./pages/Login";
import { Redirect } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path ="/Login" component={Login} />
        <Route path="/Account" component={Account}/>
        <Redirect from="/" to="/Login" />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
