import React from 'react';
import Header from "../components/Header";

<><Header /><title>Nuevo Producto</title></>



const nuevoProducto = () => {
    return (
        <div>
            <div className="producto boton">
        <h1>NUEVO PRODUCTO</h1>
        <form method="post">
            <label> 
                <span>Nombre</span>
                <input className="estilizar" type="text" name="n" required="required" />
            </label>
            <label>
                <span>Precio</span>
                <input className="estilizar" type="text" number="p" required="required" />
            </label>
           
            <button className="boton-venta button-g" type="submit" className="btn btn-primary btn-block btn-large">Guardar</button>
        </form>
    </div>    

            
        </div>
    );
}

export default nuevoProducto;
