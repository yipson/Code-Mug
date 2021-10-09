import Header from "components/Header";
import Paginador from "components/Paginador";
import popup from "js/popup";
import React from "react";

const ActualizarVenta = () => {
  return (
    <div>
      <Header />
      <div className="info">
        <div className="titulo-contenedor">
          <h1>ID Venta</h1>
          <button id="open" onClick={popup} className="boton-venta button-g x">
            Actualizar
          </button>

          <div id="contenedorpopup" className="contenedor-pop">
            <div className="popup">
              <h1>
                Venta Actualizada Exitosamente{" "}
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
              <button className="boton-ver-ventas">Ver Ventas</button>
              <button className="boton-nueva-venta">Nueva Venta</button>
              {/* <!-- boton X eliminado --> */}
              <button id="cerrar" className="cerrar-pop-venta"></button>
            </div>
          </div>
        </div>

        <div>
          <form cellspacing="6">
            <div className="controls">
              <label>
                <span>Cliente</span>
                <input className="estilizar" type="text" />
              </label>
              <label>
                <span>Direccion</span>
                <input className="estilizar" type="text" />
              </label>
              <label>
                <span>Contacto</span>
                <input className="estilizar" type="text" />
              </label>
            </div>
          </form>
        </div>
      </div>

      <script src="js/popup.js"></script>
      <Paginador />
    </div>
  );
};

export default ActualizarVenta;
