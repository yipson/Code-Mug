import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:3030/productos",
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProductos = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:3030/productos",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProductos = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `http://localhost:3030/productos/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:3030/productos/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:3030/usuarios",
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:3030/ventas",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
// Authorization: getToken();
