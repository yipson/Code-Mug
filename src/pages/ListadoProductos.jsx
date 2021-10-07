import React from "react";

export const ListadoProductos = () => {
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

        <div className="info">
          <div className="titulo-contenedor">
            <h1>LISTADO PRODUCTOS</h1>
            <button className="boton-venta button-g">
              <a className="a-visited" href="nuevoProducto.html">
                Nuevo Producto
              </a>
            </button>
          </div>

          <div className="contenedor-busqueda">
            <p className="text-buscar">Buscar:</p>
            <div className="select">
              <select>
                <option value="" selected disabled>
                  Buscar por:
                </option>
                <option value="">Id</option>
                <option value="">Descripcion</option>
              </select>
            </div>
            <input type="text" />
          </div>
        </div>

        <section className="section-ventas">
          <table className="ventas">
            <thead>
              <tr>
                <th scope="row">Id °</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tr>
              <td>123412</td>
              <td>abc</td>
              <td>1234</td>
              <td>acb</td>
            </tr>
            <tr>
              <td>123412</td>
              <td>abc</td>
              <td>1234</td>
              <td>acb</td>
            </tr>
            <tr>
              <td>123412</td>
              <td>abc</td>
              <td>1234</td>
              <td>acb</td>
            </tr>
            <tr>
              <td>123412</td>
              <td>abc</td>
              <td>1234</td>
              <td>acb</td>
            </tr>
            <tr>
              <td>123412</td>
              <td>abc</td>
              <td>1234</td>
              <td>acb</td>
            </tr>

            <tfoot className="alinear"></tfoot>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};
