import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import BlogList from "./components/Blog/BlogList";
import LoginForm from "./components/accountBox/loginForm";
import Notification from "./components/Notification/Notification";
import NavBar from "./components/NavBar/NavBar";
import Blog from "./components/Blog/Blog";
import Users from "./components/User/Users";
import User from "./components/User/User";
import BlogForm from "./components/Forms/BlogForm";

import userService from "./services/users";

import { login } from "./reducers/loginReducer";
import { initializeUsers } from "./reducers/userReducer";
import { initializeBlogs } from "./reducers/blogReducer";

const App = () => {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const user = useSelector((state) => state.login);

  useEffect(() => {
    const userFromStorage = userService.getUser();
    if (userFromStorage) {
      dispatch(login(userFromStorage));
    }
  }, []);

  useEffect(() => {
    dispatch(initializeUsers());
    dispatch(initializeBlogs());
  }, []);

  if (user === null) {
    return <LoginForm />;
  }

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ChakraProvider>
      <ColorModeProvider value={isDarkMode ? "dark" : "light"}>
        <NavBar name={user.name} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Notification />
        <BlogForm />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
