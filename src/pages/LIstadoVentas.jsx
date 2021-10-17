import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

const ListadoVentas = () => {
  const [vendedores, setVendedores] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [listaventas, setListaventas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const url = "http://localhost:3030/ventas";

  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [ventaSeleccionada, setVentaSeleccionada] = useState({
    // id: '',
    fecha: "",
    vendedor: "",
    cliente: "",
    productos: "",
  });

  const seleccionarVenta = (dato, caso) => {
    setVentaSeleccionada(dato);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVentaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const envioDatosActualizados = async (venta) => {
    const options = {
      method: "PUT",
      url: "http://localhost:3030/ventas/" + venta._id,
      headers: { "Content-Type": "application/json" },
      data: {
        fecha: venta.fecha,
        vendedor: venta.vendedor,
        cliente: venta.cliente,
        productos: venta.productos,
      },
    };
    await axios //
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //llamar pop-up nueva venta
      })
      .catch(function (error) {
        console.error(error);
        //lamar pop-up error nueva venta
      });
  };

  const editar = (ventaSeleccionada) => {
    var ventasNuevas = ventas;
    ventasNuevas.map((venta) => {
      if (venta._id === ventaSeleccionada._id) {
        venta.fecha = ventaSeleccionada.fecha;
        venta.vendedor = ventaSeleccionada.vendedor;
        venta.cliente = ventaSeleccionada.cliente;
        venta.productos = ventaSeleccionada.productos;
        setVentas(ventasNuevas);
        envioDatosActualizados(venta);
      }
    });
    setModalEditar(false);
  };

  const eliminar = () => {
    setVentas(ventas.filter((venta) => venta.id !== ventaSeleccionada.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setVentaSeleccionada(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = ventaSeleccionada;
    valorInsertar.id = ventas[ventas.length - 1].id + 1;
    var ventaNueva = ventas;
    ventaNueva.push(valorInsertar);
    setVentas(ventaNueva);
    setModalInsertar(false);
  };

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

  const buscadorDiv = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log("busqueda: " + e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let ResultadoBusqueda = listaVentas.filter((elemento) => {
      if (
        elemento.cliente
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento._id.includes(terminoBusqueda)
      ) {
        return elemento;
      }
    });
    setVentas(ResultadoBusqueda);
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
              {ventas.map((dato, id) => (
                <tr key={dato._id}>
                  <td> {id + 1} </td>
                  <td>{dato.fecha}</td>
                  <td>{dato.vendedor}</td>
                  <td>{dato.cliente}</td>
                  <td>{dato.productos}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => seleccionarPais(dato, "Editar")}
                    >
                      Editar
                    </button>{" "}
                    {"   "}
                    <button
                      className="btn btn-danger" /*onClick={()=>seleccionarPais(dato, 'Eliminar')}*/
                    >
                      Eliminar
                    </button>
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
        </section>
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
      <Paginador />
    </>
  );
};

export default ListadoVentas;
