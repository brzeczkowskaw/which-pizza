import 'vuetify/styles';
import * as components from 'vuetify/labs/components';

import { createVuetify } from 'vuetify';

const theme = {
  defaultTheme: 'light',
  themes: {
    light: {
      dark: false,
      colors: {
        // the tool for colors: https://material.io/resources/color/
        primary: '#2368a2',
        secondary: '#64748B',
        background: '#FF1744',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#3997e6',
        secondary: '#78909C',
      },
    },
  },
};

export default createVuetify({ theme, components });