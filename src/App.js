import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./screens/home";
import Details from "./screens/details";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}