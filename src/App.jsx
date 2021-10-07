import "./App.css";
import "./normalize.css";
import ListadoVentas from "pages/ListadoVentas";
import { Login } from "../src/components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/ListadoVentas">
              <ListadoVentas />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
