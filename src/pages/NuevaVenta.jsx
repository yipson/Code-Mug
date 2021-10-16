import axios from "axios";
import popup from "js/popup";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Paginador from "../components/Paginador";

export const NuevaVenta = () => {


    const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
    const [listaProductos, setListaProductos] = useState([]);

    const url = "http://localhost:3030/productos"

  useEffect(()=>{
    const fetchData = async () =>{
      await axios(`${url}`)
      .then(response => {
        setProductos(response.data);
        setListaProductos(response.data);
      })
      .catch(error => console.log(error))
    }
    fetchData()
  }, [])


  useEffect(() => {
    //obtener lista de productos desde el backend
    // setProductos(productosBackend);
  }, []);


  const dataForm = useRef("null");

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const datos = new FormData(dataForm.current);

    const nuevaVenta = {};
    datos.forEach((value, key) => {
      nuevaVenta[key] = value;
    });
    console.log(nuevaVenta);

    const options = {
      method: "POST",
      url: "http://localhost:3030/productos",
      headers: { "Content-Type": "application/json" },
      data: { nombre: nuevaVenta.nombre, precio: nuevaVenta.precio },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //llamar pop-up nuevo producto
      })
      .catch(function (error) {
        console.error(error);
        //lamar pop-up error nuevo producto
      });

    setMostrarTabla(true);
  };


  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="info">
          <div className="titulo-contenedor">
            {/* <div className="nueva-venta-div"> */}
            <h1>NUEVA VENTA</h1>
            <button onClick={popup} id="open" className="boton-venta button-g">
              Guardar
            </button>
          </div>
          <div id="contenedorpopup" className="contenedor-pop">
            <div className="popup">
              <h1>
                Venta Agregada{" "}
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
              <button className="boton-ver-ventas">
                  <a href="/ListadoVentas">Ver Ventas</a>
                </button>
              <button className="boton-nueva-venta">Nueva Venta</button>
              {/* <!-- boton X eliminado --> */}
              <button id="cerrar" className="cerrar-pop-venta"></button>
            </div>
            {/* </div> */}
          </div>
          <div>
            {/* Seccion info cliente */}
            <form cellspacing="6" ref={dataForm} onSubmit={enviarFormulario}>
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

        {/* seccion tabla */}
        <section className="section-ventas">
          <table className="ventas">
            <thead>
              <tr>
                <th scope="row">Cantidad</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* <form cellspacing="6" ref={dataForm} onSubmit={enviarFormulario}> */}
              <tr>
                <td className="separacion">
                  <input type="Num" placeholder="Escriba el numero" />
                </td>
                <td>
                <input placeholder='Descripcion'></input>
                </td>

                <td>

                </td>
                <td>
                  
                </td>
              </tr>
            {/* seccion total y subtotal */}
            </tbody>
            {/* </form> */}
            <tfoot className="alinear">
              <tr>
                <td></td>
                <td></td>
                <td>Total:</td>
              </tr>
            </tfoot>
          </table>
        </section>
      </body>
      <script src="js/popup.js"></script>
      <Paginador />
    </div>
  );
};

export default NuevaVenta;


            {/* <div className="section-ventas nueva-venta-tabla ">
                  <table className="ventas ">
                    <thead>
                      <tr>
                        <th scope="row">Cantidad</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>123412</td>
                        <td>
                          <selection>
                            <select name="Descripcion">
                              <option>"1"</option>

                              <option>"2"</option>

                              <option>"3"</option>
                            </select>
                          </selection>
                        </td>

                        <td>Price</td>
                        <td>Total</td>
                      </tr>
                    </tbody>
                    <tfoot className="alinear">
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>Sub-Total</td>
                      </tr>
                    </tfoot>
                  </table>
                </div> */}