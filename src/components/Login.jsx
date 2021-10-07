import React from 'react'

export const Login = () => {
    return (
        <div>
    <div className="main">
      <div className="contenedor">
        <div className="login">
          {/* <!-- Lado informativo --> */}
          <div className="izquierda">
            <h1 className="texto-izquierda">Code Mug</h1>
            <h2 className="sub-texto-izquierda">
              "22 Neque porro quisquam est qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit..."
            </h2>
            
          </div>

          {/* <!-- Lado de Login --> */}
          <div className="derecha">
            <div className="derecha-form">
              <div className="forma">
                <form className="from">
                  <input type="email" placeholder={"Email or Username"}></input>
                  <div className="linea"></div>
                  {/* <input type="password" placeholder={"Password"}>
                    {" "}
                  </input> */}
                  <div className="linea"></div>
                </form>
                <button className="botonLogin">login</button>
              </div>

              <div className="checkbox2">
                <input type="checkbox" name={"checkbox2"} id={"checkbox2"} />
                <label for="checkbox2">Remember Username</label>
              </div>
              <div className="enlace">
                <button className="button">
                  <a href="hipervinculo.html" className="x enlace">
                    &lsaquo; Forgot your Password ?
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
