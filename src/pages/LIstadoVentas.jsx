import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import popup from "js/popup";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";

  const BASE_URL = process.env.REACT_APP_API_URL;
  const PATH_USUARIOS = "ventas/";

const ListadoVentas = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [vendedor, setVendedor] = useState([]);
  const [TablaVentas, setTablaVentas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [ventas, setVentas] = useState([]);
  const [listaVentas, setListaVentas] = useState([]);

  // const url = "http://localhost:3030/ventas";

  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [paisSeleccionado, setPaisSeleccionado] = useState({
    // id: '',
    vendedor: "",
    total: "",
  });

  const seleccionarPais = (dato, caso) => {
    setPaisSeleccionado(dato);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaisSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const envioDatosActualizados = async (venta) => {
    const options = {
      method: "PUT", //put
      url: "http://localhost:3030/ventas/" + venta._id,
      headers: { "Content-Type": "application/json" },
      data: { vendedor: venta.vendedor, total: venta.total },
    };
    await axios //
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //llamar pop-up nuevo producto
        popup();
      })
      .catch(function (error) {
        console.error(error);
        //lamar pop-up error nuevo producto
      });
    setModalEditar(false);
  };

  const editar = (productoSeleccionado) => {
    var productosNuevos = ventas;
    productosNuevos.map((producto) => {
      if (producto._id === productoSeleccionado._id) {
        producto.precio = productoSeleccionado.precio;
        producto.nombre = productoSeleccionado.nombre;
        setListaVentas(productosNuevos);
        envioDatosActualizados(producto);
      }
    });
    setModalEditar(false);
  };

  const eliminar = () => {
    setListaVentas(ventas.filter((pais) => pais.id !== paisSeleccionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setPaisSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = paisSeleccionado;
    valorInsertar.id = ventas[ventas.length - 1].id + 1;
    var productoNuevo = ventas;
    productoNuevo.push(valorInsertar);
    setListaVentas(productoNuevo);
    setModalInsertar(false);
  };

    useEffect(() => {
    const fetchData = async () => {
      await axios(`${BASE_URL}${PATH_USUARIOS}`)
        .then((response) => {
          setVendedor(response.data);
          setTablaVentas(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [modalEditar]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios(`${url}`)
  //       .then((response) => {
  //         setVendedor(response.data); //muestra tabla
  //         setTablaVentas(response.data); //busqueda
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   fetchData();
  // },[] );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios(`${url}`)
  //       .then((response) => {
  //         setVendedor(response.data); //muestra tabla
  //         setTablaVentas(response.data); //busqueda
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   fetchData();
  // }, [{ modalEditar }]); 

  const totalventa = (dato) => {
    let total = 0;
    dato.forEach((element) => {
      total += element.precio;
    });
    return total;
  };

  const buscadorDiv = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("busqueda: " + e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let ResultadoBusqueda = TablaVentas.filter((elemento) => {
      if (
        elemento._id
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento._id.includes(terminoBusqueda)
      ) {
        return elemento;
      }
    });
    setVendedor(ResultadoBusqueda);
  };

  return (
    <>
      <Header />
      <body className="ventas">
        <div className="info">
          <div className="titulo-contenedor">
            <h1>LISTADO VENTAS</h1>
            <button className="boton-venta button-g">
              <a className="a-visited" href="/NuevaVenta">
                Agregar venta
              </a>
            </button>
          </div>

          <div className="contenedor-busqueda">
            <h2 className="center"> Buscar</h2>
            <div className="select">
              {/* <select>
                <option value="" selected disabled>
                  Buscar por:
                </option>
                <option value="">Id Venta</option>
                <option value="">Id Cliente</option>
                <option value="">Cliente</option>
              </select> */}
            </div>
            <input type="text" value={busqueda} onChange={buscadorDiv} />
          </div>
        </div>

        <div className="fecha-contenedor">
          <div className="filtro-fecha">
            <p className="espacio">Desde: </p>
            <input type="date" className="fecha" />
          </div>
          <div className="filtro-fecha">
            <p className="espacio">Hasta: </p>

            <input type="date" className="fecha" />
          </div>
        </div>

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

            <tbody>
              {vendedor.map((dato, id) => (
                <tr key={dato._id}>
                  <td> {dato._id} </td>
                  <td>{dato.fecha}</td>
                  <td>{dato.vendedor}</td>
                  <td>$ {dato.total} </td>
                  <td></td>
                  <td>
                    {/* {console.log(dato.productos[id].precio)} */}
                    <button
                      className="btn btn-primary boton-editar"
                      onClick={() => seleccionarPais(dato, "Editar")}
                    >
                      Editar
                    </button>{" "}
                    {"   "}
                  </td>
                  {/* <td><button className="btn btn-primary" onClick={()=>seleccionarPais(dato, 'Editar')}>Editar</button>
                   </td> */}
                </tr>
              ))}
            </tbody>
            {/* {console.log(listaProductos)} */}
            <tfoot className="alinear"></tfoot>
          </table>
          <Modal isOpen={modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar Venta</h3>
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
                  value={paisSeleccionado._id}
                />
                <br />

                <label>Vendedor</label>
                <input
                  className="form-control"
                  type="text"
                  name="vendedor"
                  value={paisSeleccionado && paisSeleccionado.vendedor}
                  onChange={handleChange}
                />
                <br />

                <label>Total</label>
                <input
                  className="form-control"
                  type="text"
                  name="total"
                  value={paisSeleccionado && paisSeleccionado.total}
                  onChange={handleChange}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-primary"
                onClick={() => envioDatosActualizados(paisSeleccionado)}
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

          <Modal isOpen={modalEliminar}>
            <ModalBody>
              Estás Seguro que deseas eliminar el país{" "}
              {paisSeleccionado && paisSeleccionado.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => eliminar()}>
                Sí
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setModalEliminar(false)}
              >
                No
              </button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar País</h3>
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
                />
                <br />

                <label>Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  value={paisSeleccionado ? paisSeleccionado.nombre : ""}
                  onChange={handleChange}
                />
                <br />

                <label>Precio</label>
                <input
                  className="form-control"
                  type="text"
                  name="Precio"
                  value={paisSeleccionado ? paisSeleccionado.precio : ""}
                  onChange={handleChange}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => insertar()}>
                Insertar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setModalInsertar(false)}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
        </section>

        <script src="js/popup.js"></script>
      </body>
      <Paginador />
    </>
  );
};

export default ListadoVentas;

{
  /* <Modal isOpen={modalEditar}>
    <ModalHeader>
      <div>
        <h3>Editar Venta</h3>
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
          value={ventaSeleccionada._id}
        />
        <br />

        <label>Fecha</label>
        <input
          className="form-control"
          type="text"
          name="fecha"
          value={ventaSeleccionada && ventaSeleccionada.fecha}
          onChange={handleChange}
        />
        <br />

        <label>Vendedor</label>
        <input
          className="form-control"
          type="text"
          name="vendedor"
          value={ventaSeleccionada && ventaSeleccionada.vendedor}
          onChange={handleChange}
        />
        <br />

        <label>Cliente</label>
        <input
          className="form-control"
          type="text"
          name="cliente"
          value={ventaSeleccionada && ventaSeleccionada.cliente}
          onChange={handleChange}
        />
        <br />

        <label>Producto</label>
        <input
          className="form-control"
          type="text"
          name="producto"
          value={ventaSeleccionada && ventaSeleccionada.producto}
          onChange={handleChange}
        />
        <br />
      </div>
    </ModalBody>
    <ModalFooter>
      <button
        className="btn btn-primary"
        onClick={() => editar(ventaSeleccionada)}
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

  <Modal isOpen={modalEliminar}>
    <ModalBody>
      Estás Seguro que deseas eliminar la venta{" "}
      {ventaSeleccionada && ventaSeleccionada.vendedor}
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-danger" onClick={() => eliminar()}>
        Sí
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setModalEliminar(false)}
      >
        No
      </button>
    </ModalFooter>
  </Modal>

  <Modal isOpen={modalInsertar}>
    <ModalHeader>
      <div>
        <h3>Insertar Venta</h3>
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
        />
        <br />

        <label>Fecha</label>
        <input
          className="form-control"
          type="text"
          name="fecha"
          value={ventaSeleccionada ? ventaSeleccionada.fecha : ""}
          onChange={handleChange}
        />
        <br />

        <label>Vendedor</label>
        <input
          className="form-control"
          type="text"
          name="vendedor"
          value={ventaSeleccionada ? ventaSeleccionada.vendedor : ""}
          onChange={handleChange}
        />
        <br />

        <label>Cliente</label>
        <input
          className="form-control"
          type="text"
          name="cliente"
          value={ventaSeleccionada ? ventaSeleccionada.cliente : ""}
          onChange={handleChange}
        />
        <br />

        <label>Producto</label>
        <input
          className="form-control"
          type="text"
          name="producto"
          value={ventaSeleccionada ? ventaSeleccionada.producto : ""}
          onChange={handleChange}
        />
        <br />
      </div>
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-primary" onClick={() => insertar()}>
        Insertar
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setModalInsertar(false)}
      >
        Cancelar
      </button>
    </ModalFooter>
  </Modal>
</section> */
}
{
  /* <!-- Estados de las ventas: -->
<!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */
}
