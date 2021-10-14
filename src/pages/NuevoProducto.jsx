import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

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
            >
              Guardar
            </button>
          </form>
          <hr />

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
