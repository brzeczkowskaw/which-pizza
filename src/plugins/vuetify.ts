import "vuetify/styles";
import * as components from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

const defaultTheme = {
  dark: false,
  colors: {
    primary: "#2980b9",
    secondary: "#8e44ad",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "default",
    themes: {
      default: defaultTheme,
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
