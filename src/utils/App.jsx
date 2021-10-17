import NuevaVenta from "pages/NuevaVenta";
import ActualizarProducto from "pages/ActualizarProducto";
import ActualizarUsuario from "pages/ActualizarUsuario";
import ActualizarVenta from "pages/ActualizarVenta";
// import Layout from "Layout/Layout";
import Index from "pages/Index";
import ListadoProductos from "pages/ListadoProductos";
import ListadoUsuarios from "pages/ListadoUsuarios";
import ListadoVentas from "pages/LIstadoVentas";
import { NuevoProducto } from "pages/NuevoProducto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";
import { UserContext } from "Context/userContex";
import React, { useState, useEffect } from 'react';

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider value={{ userData, setUserData }}>

    
    <Router>
      <Switch>
        <Route path="/index">
          <Index />
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
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
};

export default App;
