import Header from "components/Header";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";
import popup from "js/popup";

// import { obtenerProductos } from "../utils/api";

import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_PRODUCTOS = "productos/";

const ListadoProductos = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [productos, setProductos] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");



  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    // id: '',
    nombre: "",
    precio: "",
  });

  const seleccionarProducto = (dato, caso) => {
    setProductoSeleccionado(dato);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const envioDatosActualizados = async (producto) => {

    const url = BASE_URL + PATH_PRODUCTOS + producto._id

    const options = {
      method: "PUT", //put
      url:url,
      headers: { "Content-Type": "application/json" },
      data: { nombre: producto.nombre, precio: producto.precio },
    };
    
    await axios //
      .request(options)
      .then(function (response) {
        console.log(response.data);
        popup();
      })
      .catch(function (error) {
        console.error(error);
        //lamar pop-up error nuevo producto
      });
  };

  const editar = (productoSeleccionado) => {
    var productosNuevos = productos;
    productosNuevos.map((producto) => {
      if (producto._id === productoSeleccionado._id) {
        producto.precio = productoSeleccionado.precio;
        producto.nombre = productoSeleccionado.nombre;
        setProductos(productosNuevos);
        envioDatosActualizados(producto);
      }
    });
    setModalEditar(false);
  };

  
  useEffect(() => {
    if (!user) {
      return history.replace("/");
    }
    user.getIdToken(true).then((token) => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const fetchData = async () => {
        await axios(`${BASE_URL}${PATH_PRODUCTOS}`, requestOptions)
          .then((response) => {
            setProductos(response.data);
            setListaProductos(response.data);
          })
          .catch((error) => console.log(error));
      };
      fetchData();
    });
  }, []);

  const buscadorDiv = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("busqueda: " + e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let ResultadoBusqueda = listaProductos.filter((elemento) => {
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
    setProductos(ResultadoBusqueda);
  };

  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="info">
          <div className="titulo-contenedor">
            <h1>LISTADO PRODUCTOS</h1>
            <button className="boton-venta button-g">
              <a className="a-visited" href="/NuevoProducto">
                Nuevo Producto
              </a>
            </button>
          </div>

          <div className="contenedor-busqueda">
            <p className="text-buscar">Buscar:</p>
            <input type="text" value={busqueda} onChange={buscadorDiv} />
          </div>
        </div>

        <section className="section-ventas">
          <table className="ventas">
            <thead>
              <tr>
                <th></th>
                <th scope="row">Id °</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((dato, id) => (
                <tr key={dato._id}>
                  <td> {id + 1} </td>
                  <td> {dato._id} </td>
                  <td>{dato.nombre}</td>
                  <td>{dato.precio}</td>
                  <td>
                    <button
                      className="btn btn-primary boton-editar"
                      onClick={() => seleccionarProducto(dato, "Editar")}
                    >
                      Editar
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="alinear"></tfoot>
          </table>
          <Modal isOpen={modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar Producto</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                  value={productoSeleccionado._id}
                />
                <br />

                <label>Producto</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  value={productoSeleccionado && productoSeleccionado.nombre}
                  onChange={handleChange}
                />
                <br />

                <label>Precio</label>
                <input
                  className="form-control"
                  type="text"
                  name="precio"
                  value={productoSeleccionado && productoSeleccionado.precio}
                  onChange={handleChange}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-primary"
                onClick={() => editar(productoSeleccionado)}
              >
                Actualizar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setModalEditar(false)}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
        </section>
        
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}
        <div id="contenedorpopup" className="contenedor-pop">
          <div className="popup">
            <h1>
              Producto Actualizado Exitosamente{" "}
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
              <a >Ver Productos</a>
            </button>
            <button className="boton-nueva-venta"> 
            <a href="/NuevoProducto">Nuevo Producto</a></button>
          </div>
        </div>
        <script src="js/popup.js"></script>
      </body>
    </div>
  );
};
export default ListadoProductos;
