import Paginador from "components/Paginador";
import React, { useState, useEffect }  from "react";
import Header from "../components/Header";
// import "../styles/styles.css";
import popup from "js/popup";
import axios from 'axios';

const ActualizarProducto = () => {

  // const queryParams = new URLSearchParams(window.location.search);  //esto es nuevo

  // const id = queryParams.get('id'); //esto es nuevo
  // const name = queryParams.get('nombre');//esto es nuevo
  // const type = queryParams.get('precio');//esto es nuevo
  
  // console.log(id, name, type);//esto es nuevo



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
      <Header />;
      <body className="ventas">
        <div className="main-div">
          <h1 className="titulo-actualizar-producto">Actualizar Producto</h1>
          <div className="Cuadro-de-datos">
            <p className="p1">Id</p>
            <input
                  readOnly
                  className="input1 extra"
                  placeholder={"AQUI VA LA ID"}
                />
            {/* <p className="extra">#####</p> */}
          </div>
          <div className="Cuadro-de-datos">
            <p className="p2">Nombre</p>
            <input type="Nombre" className="input1" value={busqueda} onChange={buscadorDiv} placeholder="Escriba el nombre" />
          </div>
          <div className="Cuadro-de-datos">
            <p className="p3">Precio</p>
            <input type="Precio" className="input1"  placeholder="Escriba el precio" />  
          </div>
          <div className="margen">
            <button
              onClick={popup}
              className="boton-venta button-g x "
              id="open"
            >
              Actualizar
            </button>

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
                <button  className="boton-ver-ventas">
                <a href="/ListadoProductos">Ver Productos</a>
              </button>
                <button className="boton-nueva-venta">Nuevo Producto</button>

                {/* <!-- boton X eliminado --> */}
               
                <button id="cerrar" className="cerrar-pop-venta"></button>
              </div>
            </div>
          </div>
        </div>

        <script src="js/popup.js"></script>
      </body>
      <Paginador />
    </div>
  );
};
export default ActualizarProducto;
