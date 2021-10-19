import Header from "components/Header";
import Paginador from "components/Paginador";
import React,{ useState, useEffect } from "react";
import ActualizarUsuario from "./ActualizarUsuario";
import axios from 'axios';

// export const ListadoUsuarios = () => {
//   return (
//     <div>
//       <Header />
//       <body className="ventas">
//         <div className="titulo-contenedor">
//           <h1>LISTA DE USUARIOS</h1>
//           <button id="open" className="boton-venta button-g">
//             <a href="/ActualizarUsuario">Nuevo Usuario </a>
//           </button>
//         </div>
//         <section className="section-ventas">
//           <table className="ventas">
//             <thead>
//               <tr>
//                 <th scope="row">No°</th>
//                 <th>Nombre</th>
//                 <th>Numero</th>
//                 <th>Email</th>
//                 <th>Rol</th>
//                 <th>Acciones</th>
//               </tr>
//             </thead>
//             <tr>
//               <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
//               <td>Actions</td>{" "}
//               <td>
//                 <a href="/">Editar</a>
//               </td>
//             </tr>
//             <tr>
//               <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
//               <td>Actions</td>{" "}
//               <td>
//                 <a href="/">Editar</a>
//               </td>
//             </tr>
//             <tr>
//               <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
//               <td>Actions</td>{" "}
//               <td>
//                 <a href="/">Editar</a>
//               </td>
//             </tr>
//             <tr>
//               <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
//               <td>Actions</td>{" "}
//               <td>
//                 <a href="/">Editar</a>
//               </td>
//             </tr>
//             <tr>
//               <td>1</td> <td>Name</td> <td>Number</td> <td>Email</td>{" "}
//               <td>Actions</td>{" "}
//               <td>
//                 <a href="/">Editar</a>
//               </td>
//             </tr>
//           </table>
//         </section>
//         {/* <!-- Estados de las ventas: -->
//     <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}
//       </body>
//       <Paginador />
//     </div>
//   );
// };
const ListadoUsuarios = () => {

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

  const actualizarUsuario = (e) =>{
    let arregloUsuarios = usuarios;
    let usuarioModificar ;
    arregloUsuarios.map((registro)=> {
      if(e.target.id === registro._id ) {
        usuarioModificar = registro;
        console.log(usuarioModificar);
        <ActualizarUsuario usuario={usuarioModificar}/>
      }
    })
  }
  const buscadorDiv = (e) =>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
    console.log('busqueda: '+e.target.value);
  }

  const filtrar = (terminoBusqueda) =>{
    let ResultadoBusqueda = listaUsuarios.filter((elemento=>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) 
      || elemento._id.includes(terminoBusqueda)){
        return elemento;
      }
    }))
    setUsuarios(ResultadoBusqueda)
  }

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
            {/* <div className="select">
              <select>
                <option value="" selected disabled>
                  Buscar por:
                </option>
                <option value="">Id</option>
                <option value="">Descripcion</option>
              </select>
            </div> */}
            <input type="text" value={busqueda} onChange={buscadorDiv} />
          </div>
        </div>

        <section className="section-ventas">
          <table className="ventas">
            <thead>
              <tr>
                <th scope="row">Id °</th>
                <th>Nombre</th>
                <th>Numero</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody>
                {usuarios.map((dato, id)=>(
                <tr key={dato._id}>
                  <td> {id + 1} </td>
                  <td>{dato.nombre}</td>
                  <td>{dato.numero}</td>
                  <td>{dato.email}</td>
                  <td>{dato.rol}</td>
                  <td><button id={dato._id}  onClick={actualizarUsuario} className="btn btn-primary boton-editar"> 
                    <a  href = "/ActualizarUsuario" >Editar</a>
                    </button></td>
                </tr> 
                ))}
            </tbody>
           

            <tfoot className="alinear"></tfoot>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
      <Paginador />
    </div>
  );
};
export default ListadoUsuarios;
