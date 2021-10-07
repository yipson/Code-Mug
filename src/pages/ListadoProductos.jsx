import React from "react";

export const ListadoProductos = () => {
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

        <div class="info">
          <div class="titulo-contenedor">
            <h1>LISTADO PRODUCTOS</h1>
            <button class="boton-venta button-g">
              <a class="a-visited" href="nuevoProducto.html">
                Nuevo Producto
              </a>
            </button>
          </div>

          <div class="contenedor-busqueda">
            <p class="text-buscar">Buscar:</p>
            <div class="select">
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

        <section class="section-ventas">
          <table class="ventas">
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

            <tfoot class="alinear"></tfoot>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};
