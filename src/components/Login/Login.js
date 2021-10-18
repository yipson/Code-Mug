import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  ButtonGroup,
  ListGroup,
  ListGroupItem
} from "reactstrap";
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
    if (user) { history.replace("/users"); }
  }, [user, loading]);
  

  return (
    <Container>
        <FormGroup>
          <label>
            Email:
          </label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>
            Password:
          </label>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </FormGroup>

        <ButtonGroup>
          <Button
            color="primary"
            type="submit"
            onClick={() => signInEmailAndPassword(email, password)}
          >
            Login
          </Button>

          <Button
            color="danger"
            onClick={signInWithGoogle}
          >
            Login con Google
          </Button>
        </ButtonGroup>


      <br />

      <ListGroup>
        <ListGroupItem tag="a" href="/reset">Olvide mi clave</ListGroupItem>
        <ListGroupItem tag="a" href="/register">Crea tu cuenta</ListGroupItem>
      </ListGroup>

    </Container>
  );
}
export default Login;