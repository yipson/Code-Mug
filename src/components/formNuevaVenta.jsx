import React from "react";

const formNuevaVenta = () => {
  return (
    <>
      <div>
        <div>
          <form cellspacing="6">
            <div className="controls">
              <label>
                <span>Cliente</span>
                <input className="estilizar" type="text" />
              </label>
              <label>
                <span>Direccion</span>
                <input className="estilizar" type="text" />
              </label>
              <label>
                <span>Contacto</span>
                <input className="estilizar" type="text" />
              </label>
            </div>
          </form>
        </div>
      </div>
      <section className="section-ventas">
        <table className="ventas">
          <thead>
            <tr>
              <th scope="row">Cantidad</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123412</td>
              <td>
                <selection>
                  <select name="Descripcion">
                    <option>"1"</option>

                    <option>"2"</option>

                    <option>"3"</option>
                  </select>
                </selection>
              </td>

              <td>Price</td>
              <td>Total</td>
            </tr>
          </tbody>
          <tfoot className="alinear">
            <tr>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td>Sub-Total</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default formNuevaVenta;
