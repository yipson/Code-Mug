import Header from "components/Header";
import React, { useState, useRef, useEffect } from "react";
import popup from "js/popup";
import { nanoid } from "nanoid";
import { crearVenta } from "utils/api";
import { obtenerProductos } from "utils/api";

const Ventas = () => {
  const form = useRef(null);

  const [productos, setproductos] = useState([]);
  const [productosTabla, setproductosTabla] = useState([]);

  const [formVenta, setformVenta] = useState({
    cliente: "",
    vendedor: "",
    fecha: "",
  });

  useEffect(() => {
    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setproductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    fetchProductos();
  }, []);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });

    // console.log("form data", formData);

    const listaProductos = [
      Object.keys(formData)
        .map((k) => {
          if (k.includes("Producto")) {
            return productosTabla.filter((v) => v._id === formData[k])[0];
          }
          return null;
        })
        .filter((v) => v),
    ];

    const datosVenta = {
      // datosVenta: formVenta,
      fecha: formVenta.fecha,
      vendedor: formVenta.vendedor,
      cliente: formVenta.cliente,
      total: formData.valor,
      productos: listaProductos,
    };

    console.log("datosVenta", datosVenta);

    await crearVenta(
      datosVenta,
      (response) => {
        console.log(response);
        popup();
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const Inputdatos = (e) => {
    setformVenta({
      ...formVenta,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  return (
    <div>
      <Header />
      <form ref={form} onSubmit={enviarFormulario}>
        <div className="productoVenta boton">
          <h1>Crear una nueva venta</h1>

          {/* form cliente */}
          <div>
            <input
              className="estilizar"
              type="date"
              placeholder="Fecha"
              required
              name="fecha"
              onChange={Inputdatos}
            />
          </div>
          <div>
            <input
              className="estilizar"
              type="text"
              placeholder="Nombre Cliente"
              required
              name="cliente"
              onChange={Inputdatos}
            />
          </div>
          <div>
            <input
              className="estilizar"
              type="text"
              placeholder="Nombre Vendedor"
              required
              name="vendedor"
              onChange={Inputdatos}
            />
          </div>

          <TablaProductos
            productos={productos}
            setproductos={setproductos}
            setproductosTabla={setproductosTabla}
          />

          <label style={{ marginTop: "10px" }}>
            <span style={{ display: "unset", marginRight: "10px" }}>
              Valor Total Venta
            </span>
            <input type="number" name="valor" required />
          </label>
          <button
            type="submit"
            className="botonesVentas"
            style={{ display: "unset" }}
          >
            Crear Venta
          </button>
        </div>
      </form>
      <div id="contenedorpopup" className="contenedor-pop">
        <div className="popup">
          <h1>
            Venta Creada Exitosamente{" "}
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
            <a>Ver Ventas</a>
          </button>
          <button className="boton-nueva-venta">
            <a href="/NuevaVenta">Nueva Venta</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const TablaProductos = ({ productos, setproductos, setproductosTabla }) => {
  const [productoAAgregar, setproductoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);

  useEffect(() => {
    setproductosTabla(filasTabla);
  }, [filasTabla, setproductosTabla]);

  const AgregarNuevoProducto = () => {
    setFilasTabla([...filasTabla, productoAAgregar]);
    setproductos(productos.filter((v) => v._id !== productoAAgregar._id));
    setproductoAAgregar({});
  };

  const eliminarProducto = (productoAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
    setproductos([...productos, productoAEliminar]);
  };

  const modificarProducto = (producto, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto.id) {
          ft.cantidad = cantidad;
          ft.total = producto.valor * cantidad;
        }
        return ft;
      })
    );
  };

  let total = 0;

  return (
    <div>
      <div>
        <label htmlFor="producto">
          <select
            className="p-2"
            value={productoAAgregar._id ?? ""}
            onChange={(e) =>
              setproductoAAgregar(
                productos.filter((v) => v._id === e.target.value)[0]
              )
            }
          >
            <option disabled value="">
              Seleccione un Articulo
            </option>
            {productos.map((el) => {
              return (
                <option
                  key={nanoid()}
                  value={el._id}
                >{`${el.nombre} ${el.precio}`}</option>
              );
            })}
          </select>
        </label>
        <button
          type="button"
          className="botonesVentas"
          onClick={() => AgregarNuevoProducto()}
        >
          Agregar Producto
        </button>
      </div>
      <table className="tabla eNuevaVenta">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Valor Unitario</th>
            <th>Cantidad</th>
            <th className="hidden"></th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaProducto
                key={el._id}
                veh={el}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ veh, index, eliminarProducto, modificarProducto }) => {
  const [producto, setproducto] = useState(veh);
  useEffect(() => {
    console.log("veh", producto);
  }, [producto]);
  return (
    <>
      <tr>
        <td>{producto._id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>
          <label htmlFor={`valor_${index}`}>
            <input
              type="number"
              name={`cantidad_${index}`}
              value={producto.cantidad}
              onChange={(e) => {
                // console.log(producto, e.target.value === '' ? '0' : e.target.value);
                modificarProducto(
                  producto,
                  e.target.value === "" ? "0" : e.target.value
                );
                setproducto({
                  ...producto,
                  cantidad: e.target.value === "" ? "0" : e.target.value,
                  total:
                    parseFloat(producto.precio) *
                    parseFloat(e.target.value === "" ? "0" : e.target.value),
                });
              }}
            />
          </label>
        </td>
        <td>{(producto.valor += producto.total)}</td>
        <td>{parseFloat(producto.total ?? 0)}</td>
        <td>
          <i
            onClick={() => eliminarProducto(producto)}
            className="fas fa-minus text-red-500 cursor-pointer"
          />
        </td>
        <td className="hidden">
          <input
            hidden
            defaultValue={producto._id}
            name={`Producto_${index}`}
          />
        </td>
      </tr>
      <script src="js/popup.js"></script>
    </>
  );
};

export default Ventas;
