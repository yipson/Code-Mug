import React from "react";
import loginEnter from "components/Login";

export const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

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
                    <label className="simbolos-login">
                      <i class="fas fa-envelope"></i>
                      <input
                        type="email"
                        placeholder={"Email or Username"}
                        required
                      />
                    </label>

                    <div className="linea"></div>

                    <label className="simbolos-login">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder={"Password"}
                        required
                      />
                    </label>

                    <div className="linea"></div>

                    <div className="remember-and-forgot">
                      <div className="checkbox2">
                        <input
                          type="checkbox"
                          name={"checkbox2"}
                          id={"checkbox2"}
                        />
                        <label htmlForm="checkbox2" className="checkbox2-text">
                          Remember Username
                        </label>
                      </div>

                      <div className="enlace">
                        <button className="button">
                          <a href="hipervinculo.html" className="x enlace">
                            &lsaquo; Forgot your Password ?
                          </a>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="botones">
                  <button onClick={loginEnter} className="botonLogin">
                    <a href="/LIstadoVentas"> login</a>
                  </button>
                  <div className="or">
                    <p>or</p>
                  </div>
                  <div class="button-google">
                    {/* <GoogleLogin
                      clientId="451355320708-5s48t28g525l19p64jhu0m08jhginp5s.apps.googleusercontent.com"
                      buttonText="continue with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
