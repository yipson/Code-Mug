import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";

import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import NuevaVenta from "pages/NuevaVenta";
import ActualizarProducto from "pages/ActualizarProducto";
import ActualizarUsuario from "pages/ActualizarUsuario";
import ActualizarVenta from "pages/ActualizarVenta";
// import Layout from "Layout/Layout";
// import Index from "pages/Index";
import ListadoProductos from "pages/ListadoProductos";
import ListadoUsuarios from "pages/ListadoUsuarios";
import ListadoVentas from "pages/LIstadoVentas";
import { NuevoProducto } from "pages/NuevoProducto";

import "styles/styles.css";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/registro">
          <Register />
        </Route>
          
        <Route path="/NuevaVenta">
          <NuevaVenta />
        </Route>
        <Route path="/NuevoProducto">
          <NuevoProducto />
        </Route>
        <Route path="/ListadoVentas">
          <ListadoVentas />
        </Route>
        <Route path="/ListadoUsuarios">
          <ListadoUsuarios />
        </Route>
        <Route path="/ListadoProductos">
          <ListadoProductos />
        </Route>
        <Route path="/ActualizarProducto">
          <ActualizarProducto />
        </Route>
        <Route path="/ActualizarUsuario">
          <ActualizarUsuario />
        </Route>
        <Route path="/ActualizarVenta">
          <ActualizarVenta />
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
