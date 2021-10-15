import Header from "components/Header";
import Paginador from "components/Paginador";
import React,{ useState, useEffect } from "react";
import ActualizarUsuario from "./ActualizarUsuario";

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

  const [listaUsuarios, setListaUsuarios] = useState([]);

  const url = "http://localhost:3030/usuarios"

  useEffect(()=>{
    const fetchData = async () =>{
      await fetch(`${url}`)
      .then(response => response.json())
      .then(json => setListaUsuarios(json))
      .catch(error => console.log(error))
    }
    fetchData()
  }, [])

  const actualizarUsuario = (e) =>{
    let arregloUsuarios = listaUsuarios;
    let usuarioModificar ;
    arregloUsuarios.map((registro)=> {
      if(e.target.id === registro._id ) {
        usuarioModificar = registro;
        console.log(usuarioModificar);
        <ActualizarUsuario usuario={usuarioModificar}/>
      }
    })
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
            <div className="select">
              <select>
                <option value="" selected disabled>
                  Buscar por:
                </option>
                <option value="">Id</option>
                <option value="">Descripcion</option>
              </select>
            </div>
            <input type="text" />
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
                {listaUsuarios.map((dato, id)=>(
                <tr key={dato._id}>
                  <td> {id + 1} </td>
                  <td>{dato.nombre}</td>
                  <td>{dato.numero}</td>
                  <td>{dato.email}</td>
                  <td>{dato.rol}</td>
                  <td><button id={dato._id}  onClick={actualizarUsuario} >
                    <a href = "/ActualizarUsuario?id={dato._id}">Editar</a>
                    </button></td>
                </tr>
                ))}
            </tbody>
            {console.log(listaUsuarios)}

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
