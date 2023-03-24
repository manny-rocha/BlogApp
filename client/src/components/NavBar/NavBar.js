import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logUserOut } from "../../reducers/loginReducer";

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Text,
  Tooltip,
  Avatar,
  Flex,
  MenuGroup,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logUserOut());
    navigate("/");
  };

  return (
    <Box>
      <Flex alignItems="center" py={2}>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Menu
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            placement="bottom-end"
          >
            <MenuItem as={Link} to="/" onClick={() => setIsOpen(false)}>
              Blogs
            </MenuItem>
            <MenuItem
              as={Link}
              to="/users"
              onClick={() => setIsOpen(false)}
            >
              Users
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip label="Open settings">
            <IconButton onClick={console.log("handleOpenUserMenu")} sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            placement="bottom-end"
          >
            <MenuGroup title="User">
              <MenuItem onClick={handleLogout}>
                <Text textAlign="center">
                  Logout
                </Text>
              </MenuItem>
            </MenuGroup>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;