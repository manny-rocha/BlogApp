import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logUserOut } from "../../reducers/loginReducer";

import {
  Switch,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import "./navStyles.css";

const NavBar = ({ name, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logUserOut());
    navigate("/");
  };

  return (
    <Flex className="navBox" alignItems="center" py={2}>
      <Box display={{ base: "block", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          />
          <MenuList onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <MenuItem as={Link} to="/" onClick={() => setIsOpen(false)}>
              Blogs
            </MenuItem>
            <MenuItem as={Link} to="/users" onClick={() => setIsOpen(false)}>
              Users
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            sx={{ p: 0 }}
            aria-label="User options"
            icon={<Avatar id="avatar" />}
          />
          <MenuList id="menu-appbar">
            <MenuGroup title={name}>
              <MenuItem onClick={handleLogout}>
                <Text textAlign="center">Logout</Text>
              </MenuItem>
            </MenuGroup>
          </MenuList>
          <Switch isChecked={isDarkMode} onChange={toggleTheme} />
        </Menu>
      </Box>
    </Flex>
  );
};

export default NavBar;
