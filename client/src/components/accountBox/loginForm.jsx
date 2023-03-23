import { useState, useContext } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../reducers/loginReducer";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 50,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#df0",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
    borderRadius: 8,
  },
});

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
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
      username: username.valueOf,
      password: password.valueOf,
    };
    dispatch(logUserIn(credentials));
    setUsername();
    setPassword();
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
        <Marginer direction="vertical" margin="1.6em" />
        <MutedLink href="#">Don&apos;t have an account? <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink></MutedLink>
      </BoxContainer>
    </Card>
  );
}

export default LoginForm;