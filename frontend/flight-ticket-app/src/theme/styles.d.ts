import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: {
        primary: string;
      }

      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
      }

      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      }

      error: {
        primary: string;
      }

      icon: {
        primary: string;
      }
    }
  }
}
