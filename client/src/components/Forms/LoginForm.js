import { useField } from "../../hooks/index";
import { useDispatch } from "react-redux";
import { logUserIn } from "../../reducers/loginReducer";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

import Notification from "../Notification/Notification";

// import "./formStyles.css";

const LoginForm = () => {
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
    <div className="loginForm">
      <h2 className="header-title">Blogs App</h2>
      <Notification />
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <span className="p-float-label">
          <InputText inputid="username" {...username} />
          <label htmlFor="username">Username</label>
        </span>
        <span className="p-float-label">
          <Password inputid="password" {...password} toggleMask />
          <label htmlFor="password">Password</label>
        </span>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
