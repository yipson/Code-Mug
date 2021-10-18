import Header from "components/Header";
import Paginador from "components/Paginador";
import popup from "js/popup";
import React, { useState, useEffect }  from "react";
import axios from 'axios';
// import actualizarUsuario from "ListadoUsuarios";{/* esto es nuevo */}

export const ActualizarUsuario = ({usuarioModificar}) => {

  const [usuarios, setUsuarios] = useState([])
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("")

  const url = "http://localhost:3030/usuarios"

  useEffect(()=>{
    const fetchData = async () =>{
      await axios(`${url}`)
      .then(response => {
        setUsuarios(response.data);
        setListaUsuarios(response.data);
      })
      .catch(error => console.log(error))
    }
    fetchData()
  }, [])

  const buscadorDiv = (e) =>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
    console.log('busqueda: '+e.target.value);
  }

  const filtrar = (terminoBusqueda) =>{
    let ResultadoBusqueda = listaUsuarios.filter((elemento=>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) 
      ||elemento._id.includes(terminoBusqueda)){
        return elemento;
      }
    }))
    setUsuarios(ResultadoBusqueda)
  }

  return (
    <div>
      <Header />
      <body className="ventas">
        <div className="main-div">
          <div className="contenido">
            <h1 className="centrar">Editar Usuario</h1>
            {/* <h2 className="centrar">Id <input readonly></input></h2> */}
          </div>

          <div className="contenedor4x5">
            <div className="C1 R1">

              <div className="C1 R3">
                <p className="p2">ID:</p>
              </div>
              <div className="C2 R1">
                <input
                  readOnly
                  className="input1"
                  placeholder={"AQUI VA LA ID"}
                />
              </div>
                {/* <div className="contenedor-busqueda">
                  <p className="text-buscar ">Buscar:</p>
                  <input type="text" value={busqueda} onChange={buscadorDiv} />
                </div> */}

              <p className="p2">Nombre:</p>

              <div className="C2 R1">
                <input
                  type="text"
                  className="input1"
                  value={busqueda} 
                  onChange={buscadorDiv}
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
              <button className="boton-ver-ventas">
                <a href="/ListadoUsuarios">Ver Usuarios</a>
              </button>
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
