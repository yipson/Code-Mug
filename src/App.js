import "./App.css";
import "./normalize.css";
import ListadoVentas from "pages/ListadoVentas";
import { Login } from "../src/components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "Layout/Layout";
import React from "react";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/ListadoVentas">
            <ListadoVentas />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
