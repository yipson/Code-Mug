import React from 'react'


const Header = () => {
    return (
        <div>
            <nav>
        <ul>
          <a href="#"><button className="button-ventas button-g">Usuarios</button></a>
          <a href="#"><button className="button-ventas button-g">Vendedores</button></a>
          <a href="#"><button className="button-ventas button-g">Ventas</button></a>
          <a href="#"><button className="button_logout button-g">logout</button></a>
        </ul>
      </nav>
            
        </div>
    )
}

export default Header;
