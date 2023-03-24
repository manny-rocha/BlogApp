import { extendTheme } from "@chakra-ui/react";

export const lightTheme = extendTheme({
  colors: {
    background: "#FF0000",
    text: "#000000",
  }

  ,
});

export const darkTheme = extendTheme({
  colors: {
    background: "#1A202C",
    text: "#FFFFFF",
  }

  ,
});
