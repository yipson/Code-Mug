import Header from "components/Header";
import Paginador from "components/Paginador";
import popup from "js/popup";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosAc, setUsuariosAc] = useState([]);
  const [mostarEditar, setMostarEditar] = useState(false);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const url = "http://localhost:3030/usuarios";
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
 

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    email: "",
    estado: "",
    nombre: "",
    numero: "",
    rol: "",
    id: "",
  });

  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Cargar datos del backend
  useEffect(() => {
    const fetchData = async () => {
      await axios(`${url}`)
        .then((response) => {
          setUsuarios(response.data);
          setListaUsuarios(response.data);
          console.log(response.data);
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
    let ResultadoBusqueda = listaUsuarios.filter((elemento) => {
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
    setUsuarios(ResultadoBusqueda);
  };

  const envioDatosActualizados = async (usuario) => {
    const options = {
      method: "PUT", //put
      url: "http://localhost:3030/usuarios/" + usuario._id,
      headers: { "Content-Type": "application/json" },
      data: {
        email: usuario.email,
        estado: usuario.estado,
        nombre: usuario.nombre,
        numero: usuario.numero,
        rol: usuario.rol,
        id: usuario._id,
      },
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

  const editar = (usuarioSeleccionado) =>{
    var usuariosNuevos = usuarios;
    usuariosNuevos.map((usuario) => {
      if (usuario._id === usuarioSeleccionado._id ){
        usuario.estado = usuarioSeleccionado.estado;
        usuario.rol = usuarioSeleccionado.rol;
        setUsuarios(usuariosNuevos);
        envioDatosActualizados(usuario);
      }
    });
    setModalEditar(false);
  };

  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="info">
          <div className="titulo-contenedor">
            <h1>LISTA DE USUARIOS</h1>
            <button className="boton-venta button-g">
              <a className="a-visited" href="/NuevoUsuario">
                Nuevo Usuario
              </a>
            </button>
          </div>

          <div className="contenedor-busqueda">
            <p className="text-buscar">Buscar:</p>
            <input type="text" value={busqueda} onChange={buscadorDiv} />
          </div>
        </div>

        {/* <section className="section-ventas">
          <table className="ventas"> */}

        <div>
          {/* <h1>LISTA DE USUARIOS </h1> */}
          {/* ( <div className="titulo-contenedor"> */}
          {/* </div> */}
          <section>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="row">Id °</th>
                  <th>Nombre</th>
                  <th>Numero</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((dato, id) => (
                  <tr>
                    <td> {dato._id} </td>
                    <td>{dato.nombre}</td>
                    <td>{dato.numero}</td>
                    <td>{dato.email}</td>
                    <td>{dato.rol}</td>
                    <td>{dato.estado}</td>
                    {console.log(dato)}
                    <td>
                      <button
                        className="btn btn-primary boton-editar"
                        onClick={() => seleccionarUsuario(dato, "Editar")}
                      >
                        Editar
                      </button>
                      {"   "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          )
        </div>

        <Modal isOpen={modalEditar}>
          <ModalHeader> Editar Usuarios </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre</label>
              <input
                readOnly
                className="form-control"
                type="text"
                name="nombre"
                value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Numero</label>
              <input
                readOnly
                className="form-control"
                type="text"
                name="nombre"
                value={usuarioSeleccionado && usuarioSeleccionado.numero}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Correo</label>
              <input
                readOnly
                className="form-control"
                type="text"
                name="email"
                value={usuarioSeleccionado && usuarioSeleccionado.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Rol</label>
              <select
                className="form-control"
                type="text"
                name="rol"
                value={usuarioSeleccionado && usuarioSeleccionado.rol}
                onChange={handleChange}
              >
                <option value="adminstrador">adminstrador</option>
                <option value="vendedor">vendedor</option>
              </select>
            </div>

            <div className="form-group">
              <label>Estado</label>
              <select
                className="form-control"
                type="text"
                name="estado"
                value={usuarioSeleccionado && usuarioSeleccionado.estado}
                onChange={handleChange}
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter col-auto>
            <button
              className="btn btn-primary"
              onClick={() => editar(usuarioSeleccionado)}
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
            <button className="boton-ver-ventas">
              <a>Ver Usuarios</a>
            </button>
          </div>
        </div>
      </body>
      <script src="js/popup.js"></script>
    </div>
  );
};

export default ListadoUsuarios;
