import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { popup } from "../js/popup";

const NuevaVenta = () => {
  const [ventas, setVentas] = useState("");
  const [listaVentas, setListaVentas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const dataForm = useRef("null");

  const url = "http://localhost:3030/ventas";

  useEffect(() => {
    const fetchData = async () => {
      await axios(`${url}`)
        .then((response) => {
          setVentas(response.data);
          setListaVentas(response.data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const datos = new FormData(dataForm.current);
    console.log(datos);
  };

  const buscadorDiv = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("busqueda: " + e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let ResultadoBusqueda = listaVentas.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento._id.includes(terminoBusqueda)
      ) {
        return elemento;
      }
    });
    setVentas(ResultadoBusqueda);
  };;

  const RepetidorTabla = ({
    productos,
    productoSeleccionado,
    setProductoSeleccionado,
    filasTabla,
    setFilasTabla,
    setProductos,
  }) => {
    const agregarNuevoProducto = () => {
      setFilasTabla([...filasTabla, productoSeleccionado]);
      setProductos(productos.filter((el) => el !== productoSeleccionado));
      setProductoSeleccionado("");
    };

    const deleteFila = (v) => {
      setFilasTabla(filasTabla.filter((el) => el !== v));
      setProductos([...productos, v]);
    };

  return (
    <div>
      <Header />
      <body className="ventas">
        <form ref={dataForm} onSubmit={enviarFormulario}>
          <div className="info">
            <div className="titulo-contenedor">
              {/* <div className="nueva-venta-div"> */}
              <h1>NUEVA VENTA</h1>
              <button
                onClick={popup}
                id="open"
                className="boton-venta button-g"
              >
                Guardar
              </button>
            </div>
            {/* <div className="contenedor-busqueda">
            <p className="text-buscar">Buscar:</p> */}
            {/* <div className="select">
              <select>
                <option value="" selected disabled>
                  Buscar por:
                </option>
                <option value="">Id</option>
                <option value="">Descripcion</option>
              </select>
            </div> */}
            {/* <input type="text" value={busqueda} onChange={buscadorDiv} />
          </div> */}
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
              <form cellspacing="6">
                <div className="controls">
                  <label>
                    <span>Cliente</span>
                    <input
                      className="estilizar"
                      type="text"
                      name="clienteNombre"
                    />
                  </label>
                  <label>
                    <span>Direccion</span>
                    <input
                      className="estilizar"
                      type="text"
                      name="clienteDireccion"
                    />
                  </label>
                  <label>
                    <span>Contacto</span>
                    <input
                      className="estilizar"
                      type="text"
                      name="clienteContacto"
                    />
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
                {/* <tr>
                  <td className="separacion">
                    <input type="num" placeholder="Cantidad" />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={busqueda}
                      onChange={buscadorDiv}
                      placeholder="Buscar"
                    />
                  </td>

                  <td></td>
                  <td></td>
                </tr> */}
                <tr>
                  <td>
                    <input
                      className="estilizar"
                      type="number"
                      name="cantidad"
                      required="required"
                      placeholder="Digite cantidad"
                    ></input>
                  </td>
                  <td>
                    <select
                      className="estilizar"
                      value={productoSeleccionado._id ?? ""}
                    >
                      <option disabled value="">
                        Seleccione un Producto
                      </option>
                      {productos
                        .filter((el) => !filasTabla.includes(el._id))
                        .map((el) => {
                          return (
                            <option
                              value={el._id}
                            >{`${el.nombre} ${el.precio}`}</option>
                          );
                        })}
                    </select>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                {/* seccion total y subtotal */}
              </tbody>

              <tfoot className="alinear">
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                </tr>
              </tfoot>
            </table>
          </section>
        </form>
      </body>
      <script src="js/popup.js"></script>
      <Paginador />
    </div>
  );
                      }
                    }

  export default NuevaVenta;
  // const FilaVehiculo = ({ cantidad, productoSeleccionado, deleteFila }) => {
  //   return (
  //     <tr>
  //       <td>{productoSeleccionado._id.slice(20) ?? ""}</td>
  //       <td>{productoSeleccionado.nombre ?? ""}</td>
  //       <td>{productoSeleccionado.precio ?? ""}</td>
  //       <td> className='fas fa-minus cursor-pointer hover:text-red-500'</td>
  //       <td className="hidden">
  //         <input hidden defaultValue={productoSeleccionado._id} name={nombre} />
  //       </td>
  //     </tr>
  //   );
  // };

  /* <div className="section-ventas nueva-venta-tabla ">
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
                </div> */

