import Header from "components/Header";
import Paginador from "components/Paginador";
import React from "react";

export const ListadoUsuarios = () => {
  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="titulo-contenedor">
          <h1>LISTA DE USUARIOS</h1>
          <button id="open" className="boton-venta button-g">
            <a href="/ActualizarUsuario">Nuevo Usuario </a>
          </button>
        </div>
        <section className="section-ventas">
          <table className="ventas">
            <thead>
              <tr>
                <th scope="row">No°</th>
                <th>Nombre</th>
                <th>Numero</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="/">Editar</a>
              </td>
            </tr>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
    <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}
      </body>
      <Paginador />
    </div>
  );
};
export default ListadoUsuarios;
