import React from "react";

export const NuevoProducto = () => {
  return (
    <div>
      <body className="ventas">
        <header>
          <div className="menu">
            <nav>
              <ul>
                <a href="#">
                  <button className="button-ventas button-g">Usuarios</button>
                </a>
                <a href="#">
                  <button className="button-ventas button-g">Vendedores</button>
                </a>
                <a href="#">
                  <button className="button-ventas button-g">Ventas</button>
                </a>
                <a href="#">
                  <button className="button_logout button-g">logout</button>
                </a>
              </ul>
            </nav>
          </div>
        </header>
        <div className="producto boton">
          <h1>NUEVO PRODUCTO</h1>
          <form method="post">
            <label>
              <span>Nombre</span>
              <input
                className="estilizar"
                type="text"
                name="n"
                required="required"
              />
            </label>
            <label>
              <span>Precio</span>
              <input
                className="estilizar"
                type="text"
                number="p"
                required="required"
              />
            </label>

            <button
              className="boton-venta button-g"
              type="submit"
              className="btn btn-primary btn-block btn-large"
            >
              Guardar
            </button>
          </form>
        </div>
      </body>
    </div>
  );
};
