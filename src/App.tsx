import { Link, Route, Router, Switch } from "wouter";

import home from "./pages/home/home";
import login from "./pages/login/login";
import Register from "./pages/register/Register";


const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

const App = () => (
    <Router base={base}> 
    <Link href="/users/1">Profile</Link>

    <Route path="/about">About Us</Route>

    {/* 
      Routes below are matched exclusively -
      the first matched route gets rendered
    */}
    <Switch>
      <Route path="/" component={home} />
      <Route path="/login" component={login} />
      <Route path="/register" component={Register} />

      <Route path="/users/:name">
        {(params) => <>Hello, {params.name}!</>}
      </Route>

      {/* Default route in a switch */}
      <Route>404: error!</Route>
    </Switch>
  </Router>
);

export default App