import { useState, } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../reducers/loginReducer";
import { Card, CardBody } from "@chakra-ui/react";
import "./login.styles.css";

export function LoginForm() {
  // const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      username,
      password,
    };

    dispatch(logUserIn(credentials));
    setUsername("");
    setPassword("");
  };



  return (
    <Card className="loginCard">
      <CardBody className="loginBody">
        <BoxContainer>
          <FormContainer onSubmit={handleLogin}>
            <Marginer direction="vertical" margin="3em" />
            <Input name="username" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
            <Input name="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton type="submit">Login</SubmitButton>
          </FormContainer>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink href="#">Forgot your password?</MutedLink>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink href="#">Don&apos;t have an account? <BoldLink href="#" onClick={console.log("switchToSignup")}>Sign Up</BoldLink></MutedLink>
          <Marginer direction="vertical" margin="2em" />
        </BoxContainer>
      </CardBody>
    </Card>
  );
}

export default LoginForm;