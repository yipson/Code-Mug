import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { popup } from "../js/popup"

export const ListadoUsuarios = () => {

  const [usuarios, setUsuarios] = useState([])
  const [usuariosAc, setUsuariosAc] = useState([])
  const [mostarEditar, setMostarEditar] = useState(false)
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("")
  
  useEffect(() => {
    console.log(usuariosAc)
    setMostarEditar(!mostarEditar)
  }, [usuariosAc]);

  const url = "http://localhost:3030/usuarios"

  useEffect(()=>{
    const fetchData = async () =>{
      await axios(`${url}`)
      .then(response => {
        setUsuarios(response.data);
        setListaUsuarios(response.data);
        console.log(response.data)
        
      })
      .catch(error => console.log(error))
    }
    fetchData()
  }, [])
  
  const editar= async (usuariosAc)=>{ 
    const urlEditarusuario="http://localhost:3030/usuarios/"+usuariosAc._id
    console.log(urlEditarusuario)
    const options = {
      method: "PUT",
      url: urlEditarusuario,
      headers: { "Content-Type": "application/json" },
      data: { estado: usuariosAc.estado, rol: usuariosAc.rol},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("Usuario Actualizado",response.data);
        //llamar pop-up usuario
      

      })
      .catch(function (error) {
        console.error("Error Actualización",error);
        //lamar pop-up error nuevo producto
      }
      
      );

      

  
   }
  
  
  return (
    <div>
      <Header />
      <body className="ventas">
       
       
       {mostarEditar?
       
        <div>
          <h1>LISTA DE USUARIOS </h1>
       ( <div className="titulo-contenedor">
          <button id="open" className="boton-venta button-g">
            <a href="/ActualizarUsuario">Nuevo Usuario </a>
          </button>
        </div>
        <section className="section-ventas">
          <table className="ventas">
            <thead>
              <tr>
                <th scope="row">No°</th>
                <th>Nombre</th>
                <th>Numero</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
                {usuarios.map((dato, id)=>(
                <tr key={dato._id}>
                  <td> # {id + 1} </td>
                  <td>{dato.nombre}</td>
                  <td>{dato.numero}</td>
                  <td>{dato.email}</td>
                  <td>{dato.rol}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <button onClick={()=>setUsuariosAc(dato)} >Editar</button>
                    {/*{console.log(dato)}*/}
                    </td>
                  
                </tr>
                ))}
            </tbody>

          </table>
        </section>)
        </div>
       : 
         <ActualizarUsuario 
         usuariosAc={usuariosAc} 
         setUsuariosAc={usuariosAc}
         mostarEditar={mostarEditar}
         setMostarEditar={setMostarEditar}
         editar={editar}
         ></ActualizarUsuario>
        }


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

        
      </body>
      <Paginador />
    </div>
  );
};


const ActualizarUsuario = ({usuariosAc, setUsuariosAc,mostarEditar,setMostarEditar,editar}) => {

  useEffect(()=>{console.log("voy a auncualizar")}, [usuariosAc])
  
  return (
    <div>
      
      <body className="ventas">
        <div className="main-div">
          <div className="contenido">
            <h1 className="centrar">Editar Usuario</h1>

            <h2 className="centrar">Id #</h2>
          </div>

          <div className="contenedor4x5">
            <div className="C1 R1">
              <p className="p2">Nombre:</p>

              <div className="C2 R1">
                <input
                  type="text"
                  className="input1"
                  placeholder={"Digite su nombre"}
                  value={usuariosAc.nombre}
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
                  value={usuariosAc.numero}
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
                  value={usuariosAc.email}
                />
              </div>

              <div className="C3 R2">
                <p className="p2">Estado:</p>
              </div>

              <div className="C4 R2">
                <select value={usuariosAc.estado}>
                  <option>Activo</option>
                  <option>Inactivo</option>
                  
                </select>
              </div>

              <div className="C3 R4">
                <p className="p2">Rol:</p>
              </div>

              <div className="C4 R4">
                <select autoFocus={usuariosAc.rol}>
                  <option>administrador</option>
                  <option >vendedor</option>
                </select>

              </div>
            </div>
          </div>
        </div>
        <div className="margen">
          <button onClick={()=>editar(usuariosAc)}  className="boton-venta button-g x " id="open">
            Actualizar
          </button>

          

          
        </div>
      </body>
      <script src="js/popup.js"></script>
      <Paginador />
    </div>
  );
};



export default ListadoUsuarios;
