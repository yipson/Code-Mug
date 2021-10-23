import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "components/Login/Login";
import Register from "components/Register/Register";
import NuevaVenta from "pages/NuevaVenta";
import ListadoProductos from "pages/ListadoProductos";
import ListadoUsuarios from "pages/ListadoUsuarios";
import ListadoVentas from "pages/LIstadoVentas";
import { NuevoProducto } from "pages/NuevoProducto";

import "styles/styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/nuevaVenta">
          <NuevaVenta />
        </Route>
        <Route path="/nuevoProducto">
          <NuevoProducto />
        </Route>
        <Route path="/listadoVentas">
          <ListadoVentas />
        </Route>
        <Route path="/listadoUsuarios">
          <ListadoUsuarios />
        </Route>
        <Route path="/listadoProductos">
          <ListadoProductos />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
