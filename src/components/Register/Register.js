import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  ButtonGroup,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/Firebase";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();


  const register = () => {

    if (!name) {
      alert("Please enter name");
    }

    registerWithEmailAndPassword(name, email, password);
  };


  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/users");
  }, [user, loading]);

  return (
    <Container>
      <FormGroup>
        <label>
          Nombre:
        </label>
        <input
          className="form-control"
          name="fullname"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre completo"
        />
      </FormGroup>
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
        />
      </FormGroup>
      <FormGroup>
        <label>
          Nombre:
        </label>
        <input
          className="form-control"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </FormGroup>

      <ButtonGroup>
        <Button
          color="primary"
          onClick={register}
        >
          Registrar
        </Button>

        <Button
          color="danger"
          onClick={signInWithGoogle}
        >
          Registrate con Google
        </Button>
      </ButtonGroup>

      <br />

      <ListGroup>
        <ListGroupItem tag="a" href="/login">Autenticate si ya tienes una cuenta</ListGroupItem>
      </ListGroup>

    </Container>
  );
}
export default Register;