import { extendTheme } from "@chakra-ui/react";
import LayoutStyles from "./components/Organism/LayoutStyle";

const theme = extendTheme({
  components: {
    Layout: LayoutStyles,
  },
  styles: {
    global: {
      "html, body, #root, #__next": {
        h: "100%",
        minHeight: "100%",
      },
    },
  },
});

export default theme;
