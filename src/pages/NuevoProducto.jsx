import React from "react";

export const NuevoProducto = () => {
  return (
    <div>
      <body class="ventas">
        <header>
          <div class="menu">
            <nav>
              <ul>
                <a href="#">
                  <button class="button-ventas button-g">Usuarios</button>
                </a>
                <a href="#">
                  <button class="button-ventas button-g">Vendedores</button>
                </a>
                <a href="#">
                  <button class="button-ventas button-g">Ventas</button>
                </a>
                <a href="#">
                  <button class="button_logout button-g">logout</button>
                </a>
              </ul>
            </nav>
          </div>
        </header>
        <div class="producto boton">
          <h1>NUEVO PRODUCTO</h1>
          <form method="post">
            <label>
              <span>Nombre</span>
              <input
                class="estilizar"
                type="text"
                name="n"
                required="required"
              />
            </label>
            <label>
              <span>Precio</span>
              <input
                class="estilizar"
                type="text"
                number="p"
                required="required"
              />
            </label>

            <button
              class="boton-venta button-g"
              type="submit"
              class="btn btn-primary btn-block btn-large"
            >
              Guardar
            </button>
          </form>
        </div>
      </body>
    </div>
  );
};
