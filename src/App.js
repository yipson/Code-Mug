import "./App.css";
import "./normalize.css";
import ListadoVentas from "./pages/ListadoVentas";
import Header from "./Layout/Header";
import { Login } from "../src/components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header>
        <Switch>
          <Route path="./pages/ListadoVentas.jsx">
            <ListadoVentas />
          </Route>
        </Switch>
      </Header>
    </Router>
  );
};

export default App;
