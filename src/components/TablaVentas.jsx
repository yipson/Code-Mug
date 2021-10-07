import React from "react";
import { Link } from "react-router-dom";

const TablaVentas = () => {
  return (
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
  );
};
export default TablaVentas;
