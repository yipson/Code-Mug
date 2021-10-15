import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { popup } from "../js/popup";

export const NuevoProducto = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //obtener lista de productos desde el backend
    // setProductos(productosBackend);
  }, []);


  const dataForm = useRef("null");

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const datos = new FormData(dataForm.current);

    const nuevoProducto = {};
    datos.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    console.log(nuevoProducto);

    const options = {
      method: "POST",
      url: "http://localhost:3030/productos",
      headers: { "Content-Type": "application/json" },
      data: { nombre: nuevoProducto.nombre, precio: nuevoProducto.precio },
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

  // await crearProducto(
  //   {
  //     nombre: nuevoProducto.nombre,
  //     precio: nuevoProducto.precio,
  //   },
  //   (response) => {
  //     console.log(response.data);
  //     //llamar al pop-up de nuevo producto **
  //   },
  //   (error) => {
  //     console.error(error);
  //     //llamar al pop-up de error nuevo producto
  //   }
  // );

  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="producto boton">
          <h1>NUEVO PRODUCTO</h1>
          <form ref={dataForm} onSubmit={enviarFormulario}>
            <input
              className="estilizar"
              type="text"
              name="nombre"
              required="required"
              placeholder="Digite Nombre"
            ></input>

            <input
              className="estilizar"
              type="text"
              number="p"
              required="required"
              placeholder="Precio"
              name="precio"
            ></input>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-large boton-venta button-g"
              onClick={popup}
              id="open"
            >
              Guardar
            </button>
          </form>
          <hr />

          <div id="contenedorpopup" className="contenedor-pop">
            <div className="popup">
              <h1>
                Producto Agregado Exitosamente{" "}
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
              <button  className="boton-ver-ventas">
                <a href="/ListadoProductos">Ver Productos</a>
              </button>
              <button className="boton-nueva-venta">Nuevo Producto</button>
              {/* <!-- boton X eliminado --> */}
              <button id="cerrar" className="cerrar-pop-venta"></button>
            </div>
          </div>
          {/* <section className="section-ventas">
            <table className="ventas">
              <thead>
                <tr>
                  <th> Id </th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                </tr>
              </thead>

              <tbody>
                {productos.map((producto) => {
                  return (
                    <tr>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.precio}</td>
                    </tr>
                  );
                })}
              </tbody>

              <tfoot className="alinear"></tfoot>
            </table>
          </section> */}
        </div>
      </body>
      <Paginador />
    </div>
  );
};
