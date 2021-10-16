import Header from "components/Header";
import Paginador from "components/Paginador";
import React, { useState, useEffect } from "react";
// import { obtenerProductos } from "../utils/api";
import axios from 'axios';


const ListadoProductos = () => {

  const queryParams = new URLSearchParams(window.location.search);  //esto es nuevo

  const id = queryParams.get('id'); //esto es nuevo
  const name = queryParams.get('name');//esto es nuevo
  const type = queryParams.get('type');//esto es nuevo
  
  console.log(id, name, type);//esto es nuevo


  const [productos, setProductos] = useState([])
  const [listaProductos, setListaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("")

  const url = "http://localhost:3030/productos"

  useEffect(()=>{
    const fetchData = async () =>{
      await axios(`${url}`)
      .then(response => {
        setProductos(response.data);
        setListaProductos(response.data);
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
    let ResultadoBusqueda = listaProductos.filter((elemento=>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) 
      || elemento._id.includes(terminoBusqueda)){
        return elemento;
      }
    }))
    setProductos(ResultadoBusqueda)
  }

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
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody>
                {productos.map((dato, id)=>(
                <tr key={dato._id}>
                  <td> # {id + 1} </td>
                  <td>{dato.nombre}</td>
                  <td>{dato.precio}</td>
                  <td>
                    <a href={'/ActualizarProducto?id='+dato._id}
                    >
                      Editar
                    </a>
                  </td>
                </tr>
                ))}
            </tbody>
            {/* {console.log(listaProductos)} */}

            <tfoot className="alinear"></tfoot>
          </table>
        </section>
        {/* <!-- Estados de las ventas: -->
  <!-- Creacion, embalaje, despacho, ruta, ubicacion, recepcion --> */}

        <script src="js/popup.js"></script>
      </body>
      <Paginador />
    </div>

    // useEffect(() => {
    //   fetch(obtenerProductos())
    //     .then((response) => response.json())
    //     .then((datos) => {
    //       setListaProductos(datos);
    //     });
    // }, []);

    // return listaProductos;

    // const [mostrarTabla, setMostrarTabla] = useState(true);
    // const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    // const [loading, setLoading] = useState(false);
    // const [ListProductos, setListProductos] = useState([]);

    // useEffect(() => {
    //   const fetchProductos = async () => {
    //     setLoading(true);
    //     await obtenerProductos(
    //       (response) => {
    //         console.log("la respuesta que se recibio fue", response);
    //         setListProductos(response.data);
    //         setEjecutarConsulta(false);
    //         setLoading(false);
    //       },
    //       (error) => {
    //         console.error("Salio un error:", error);
    //         setLoading(false);
    //       }
    //     );
    //   };
    //   console.log("consulta", ejecutarConsulta);
    //   if (ejecutarConsulta) {
    //     fetchProductos();
    //   }
    // }, [ejecutarConsulta]);

    // useEffect(() => {
    //   //obtener lista de vehículos desde el backend
    //   if (mostrarTabla) {
    //     setEjecutarConsulta(true);
    //   }
    // }, [mostrarTabla]);

    // useEffect(() => {
    //   if (mostrarTabla) {
    //     setTextoBoton('Crear Nuevo Vehículo');
    //     setColorBoton('indigo');
    //   } else {
    //     setTextoBoton('Mostrar Todos los vehículos');
    //     setColorBoton('green');
    //   }
    // }, [mostrarTabla]);

    // // class s
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     data: [],
    //     form: {
    //       _id: "",
    //       nombre: "",
    //       precio: "",
    //     },
    //     mostrarCargando: false,
    //   };
    // }

    // componentDidMount() {
    //   this.cargarProductos();
    // }

    // mostrarModalActualizar = (dato) => {
    //   this.setState({ modalActualizar: true, form: dato });
    // };

    // cargarProductos() {
    //   this.setState({ mostrarCargando: true });
    //   fetch(`${BASE_URL}${PATH_PRODUCTOS}`)
    //     .then((result) => result.json())
    //     .then(
    //       (result) => {
    //         this.setState({ data: result, mostrarCargando: false });
    //       },
    //       // Nota: es importante manejar errores aquí y no en
    //       // un bloque catch() para que no interceptemos errores
    //       // de errores reales en los componentes.
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    // }

    // const { data: productos } = componentDidMount;
  );
};
export default ListadoProductos;
