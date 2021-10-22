import React from "react";
import {logout} from "./Firebase/Firebase";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <a href="/ListadoUsuarios">
            <button className="button-ventas button-g">Usuarios</button>
          </a>
          <a href="/ListadoProductos">
            <button className="button-ventas button-g">Productos</button>
          </a>
          <a href="/ListadoVentas">
            <button className="button-ventas button-g">Ventas</button>
          </a>
          <a href="/">
            <button className="button_logout button-g" onClick={logout}>
              Logout
            </button>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
