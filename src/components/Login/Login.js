import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Container,
//   Form,
//   FormGroup,
//   ButtonGroup,
//   ListGroup,
//   ListGroupItem
// } from "reactstrap";
import {
  auth,
  signInEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [errors, seterrors] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) { history.replace("/ListadoProductos"); }
  }, [user, loading]);
  

  return (
    // <Container>
      <div>
        <div className="main">
          <div className="contenedor">
            <div className="login">

              {/* <!-- Lado informativo --> */}
              <div className="izquierda">
                <h1 className="texto-izquierda">Code Mug</h1>
                <h2 className="sub-texto-izquierda">
                  "Ofrecemos el mejor servicio, variedad, calidad 
                  y valor en nuestros productos"
                </h2>
              </div>

              {/* <!-- Lado de Login --> */}
              <div className="derecha">
                <div className="derecha-form">
                  <div className="forma">
                      {/* <FormGroup> */}
                        <label className="simbolos-login">
                          <i class="fas fa-envelope"></i>
                          <input
                            // className="form-control"
                            className="inputsLogin"
                            name="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={"Email or Username"}
                            required
                            />
                        </label>
                        <div className="linea"></div>
                      {/* </FormGroup> */}

                      

                      {/* <FormGroup> */}
                      <label className="simbolos-login">
                        <i class="fas fa-lock"></i>
                        <input
                          // className="form-control"
                          className="inputsLogin"
                          name="password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder={"Password"}
                          value={password}
                          required
                          />
                      </label>

                      <div className="linea"></div>

                      <div className="remember-and-forgot" style={{marginRight:"3rem", marginLeft:"4rem", paddingBottom:"1rem"}} >
                        <div className="enlace" >
                          <button className="button">
                            <a /*href="/reset" */className="x" >
                              Forgot your Password ?
                            </a>
                          </button>
                        </div>
                        <div className="enlace" style={{}} >
                          <button className="button ">
                            <a /*href="/register" */className="x">
                              Don't have an account? Sign up
                            </a>
                          </button>
                        </div>
                      </div>
                        

                      {/* </FormGroup> */}

                      {/* <ListGroup> */}
                        {/* <ListGroupItem tag="a" href="/reset">Olvide mi clave</ListGroupItem> */}
                        {/* <ListGroupItem tag="a" href="/register">Crea tu cuenta</ListGroupItem> */}
                      {/* </ListGroup> */}

                      <div className="botones">
                        {/* <ButtonGroup className="botones"> */}
                          <button
                            className="botonLogin"
                            type="submit"
                            onClick={() => signInEmailAndPassword(email, password)}>
                            Login
                          </button>

                          <div className="or"><p>or</p></div>

                          <button
                            class="button-google"
                            onClick={signInWithGoogle}>
                            Login con Google
                          </button>
                        {/* </ButtonGroup> */}
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <br />
    // </Container>
  );
}
export default Login;