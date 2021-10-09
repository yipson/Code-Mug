import React from "react";
import Paginador from "components/Paginador";
import Header from "components/Header";

const ListadoVentas = () => {
  return (
    <>
      <Header />
      <body className="ventas">
        <div className="info">
          <div className="titulo-contenedor">
            <h1>LISTADO VENTAS</h1>
            <button className="boton-venta button-g">
              <a className="a-visited" href="/NuevaVenta">
                Agregar venta
              </a>
            </button>
          </div>

          <div className="contenedor-busqueda">
            <h2 className="center"> Buscar</h2>
            <div className="select">
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

        <div className="fecha-contenedor">
          <div className="filtro-fecha">
            <p className="espacio">Desde: </p>
            <input type="date" className="fecha" />
          </div>
          <div className="filtro-fecha">
            <p className="espacio">Hasta: </p>

            <input type="date" className="fecha" />
          </div>
        </div>

        <section className="section-ventas">
          <table className="ventas">
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
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>123412</td> <td>Date</td> <td>Seller</td> <td>Total</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>

            <tfoot className="alinear">
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
        <Paginador />
      </body>
    </>
  );
};

export default ListadoVentas;
