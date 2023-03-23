// import { useContext } from "react";
import { useField } from "../hooks/index";
import { useDispatch } from "react-redux";
import { logUserIn } from "../reducers/loginReducer";
import { Button } from "@mui/material";
import { BoxContainer, FormContainer, Input } from "./accountBox/common";
import { Marginer } from "./marginer/index";
// import { AccountContext } from "./accountBox/accountContext";

// import Notification from "./Notification";

const LoginForm = () => {
  // const { switchToSignup } = useContext(AccountContext);
  const { reset: resetUsername, ...username } = useField("text");
  const { reset: resetPassword, ...password } = useField("password");

  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = {
      username: username.value,
      password: password.value,
    };
    dispatch(logUserIn(credentials));
    resetUsername();
    resetPassword();
  };

  return (
    // <div>
    //   <h2 className="header-title">Blogs App</h2>
    //   <Notification />
    //   <h2>Log in to application</h2>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <TextField label="username" {...username} />
    //     </div>
    //     <div>
    //       <TextField label="password" {...password} />
    //     </div>
    //       login
    //     </Button>
    //   </form>
    // </div>
    <BoxContainer>
      <FormContainer onSubmit={handleLogin}>
        <Marginer direction="vertical" margin="3em" />
        <Input name="username" type="text" placeholder="Username" value={username} {...username} />
        <Input name="password" type="password" placeholder="Password" value={password} {...password} />
        <Marginer direction="vertical" margin="1em" />
        <Button variant="contained" color="primary" type="submit">Log In</Button>
      </FormContainer>
    </BoxContainer>
  );
};

export default LoginForm;
