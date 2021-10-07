import React from "react";

export const ListadoUsuarios = () => {
  return (
    <div>
      <body class="ventas">
        <div class="titulo-contenedor">
          <h1>LISTA DE USUARIOS</h1>
          <button id="open" class="boton-venta button-g">
            Nuevo Usuario
          </button>
        </div>
        <section class="section-ventas">
          <table class="ventas">
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
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
            <tr>
              <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
              <td>Actions</td>{" "}
              <td>
                <a href="#">Editar</a>
              </td>
            </tr>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
    <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}
      </body>
    </div>
  );
};
