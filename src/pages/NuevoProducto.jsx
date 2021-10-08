import Header from "components/Header";
import Paginador from "components/Paginador";
import React from "react";

export const NuevoProducto = () => {
  return (
    <div>
      <Header />
      <body className="ventas">
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
              type="submit"
              className="btn btn-primary btn-block btn-large boton-venta button-g"
            >
              Guardar
            </button>
          </form>
        </div>
      </body>
      <Paginador />
    </div>
  );
};
