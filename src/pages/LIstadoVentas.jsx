import React from "react";

const ListadoVentas = () => {
  return (
    <div>
      <body class="ventas">
        <div class="info">
          <div class="titulo-contenedor">
            <h1>LISTADO VENTAS</h1>
            <button class="boton-venta button-g">
              <a class="a-visited" href="nuevaVenta.html">
                {" "}
                Agregar venta
              </a>
            </button>
          </div>

          <div class="contenedor-busqueda">
            <h2 class="center"> Buscar</h2>
            <div class="select">
              <select>
                <option value="" selected disabled>
                  Buscar por:
                </option>
                <option value="">Id Venta</option>
                <option value="">Id Cliente</option>
                <option value="">Cliente</option>
              </select>
            </div>
            <input type="text" />
          </div>
        </div>

        <div class="fecha-contenedor">
          <div class="filtro-fecha">
            <p class="espacio">Desde: </p>
            <input type="date" class="fecha" />
          </div>
          <div class="filtro-fecha">
            <p class="espacio">Hasta: </p>

            <input type="date" class="fecha" />
          </div>
        </div>

        <section class="section-ventas">
          <table class="ventas">
            <thead>
              <tr>
                <th scope="row">No°</th>
                <th>Fecha</th>
                <th>Vendedor</th>
                <th>Total Factura</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>

            <tfoot class="alinear">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>Sub-Total</td>
              </tr>
            </tfoot>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
    <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};

export default ListadoVentas;
