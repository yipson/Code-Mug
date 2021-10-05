import Header from "../components/Header";

<Header />

function ActualizarProducto(){
    return(
        <div className="main-div">
        <h1 className="titulo-actualizar-producto">Actualizar Producto</h1>
        <div className="Cuadro-de-datos">
            <p className="p1">Id</p>
            <p className="extra">#####</p>
        </div>
        <div className="Cuadro-de-datos">
            <p className="p2">Nombre</p>
            <input type="Nombre" placeholder="Escriba el nombre"></input>
        </div>
        <div className="Cuadro-de-datos">
            <p className="p3">Precio</p>
            <input type="Precio"  placeholder="Escriba el precio"></input>
        </div>
        <div className="margen">
            <button className="boton-venta button-g x " id="open">
            Actualizar
            </button>

             <div id="contenedorpopup" className="contenedor-pop">
          <div className="popup" > 
            <h1>
              Producto Actualizado Exitosamente   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                            </svg>
            </h1>
            <button className="boton-ver-ventas">
              Ver Productos
            </button>
            <button className="boton-nueva-venta">
              Nuevo Producto 
            </button>
            <!-- boton X eliminado -->
            <!-- <button id="cerrar" className="cerrar-pop-venta"> 
              X
            </button> -->
          </div>
        </div>
        </div>
        
    </div>
    </section>
    
   <script src="js/popup.js"></script>
</body>

    );

}
export default ActualizarProducto;