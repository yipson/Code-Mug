import Header from "components/Header";
import Paginador from "components/Paginador";
import popup from "js/popup";
import React from "react";

export const ActualizarUsuario = ({usuarioModificar}) => {
  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="main-div">
          <div className="contenido">
            <h1 className="centrar">Editar Usuario</h1>

            <h2 className="centrar">Id <input readonly></input></h2>
          </div>

          <div className="contenedor4x5">
            <div className="C1 R1">
              <p className="p2">Nombre:</p>

              <div className="C2 R1">
                <input
                  type="text"
                  className="input1"
                  placeholder={"Digite su nombre"}
                />
              </div>

              <div className="C1 R3">
                <p className="p2">Numero:</p>
              </div>

              <div className="C2 R3">
                <input
                  type="text"
                  className="input1"
                  placeholder={"Digite Numero"}
                />
              </div>

              <div className="C1 R5">
                <p className="p2">Email:</p>
              </div>

              <div className="C2 R5">
                <input
                  type="email"
                  className="input1"
                  placeholder={"Digite su Email"}
                />
              </div>

              <div className="C3 R2">
                <p className="p2">Estado:</p>
              </div>

              <div className="C4 R2">
                <select>
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>

              <div className="C3 R4">
                <p className="p2">Rol:</p>
              </div>

              <div className="C4 R4">
                <select>
                  <option>Administrador</option>
                  <option>Cliente</option>
                  <option>Vendedor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="margen">
          <button onClick={popup} className="boton-venta button-g x " id="open">
            Actualizar
          </button>

          <div id="contenedorpopup" className="contenedor-pop">
            <div className="popup">
              <h1>
                Usuario Actualizado Exitosamente{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-checks"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 12l5 5l10 -10" />
                  <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>
              </h1>
              <button className="boton-ver-ventas">Ver Usuario</button>
              <button className="boton-nueva-venta">Nuevo Usuario</button>
              {/* <!-- boton X eliminado --> */}
              <button id="cerrar" className="cerrar-pop-venta"></button>
            </div>
          </div>
        </div>
      </body>
      <script src="js/popup.js"></script>
      <Paginador />
    </div>
  );
};
export default ActualizarUsuario;
