import "vuetify/styles";
import * as components from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#2980b9",
    secondary: "#8e44ad",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
});
