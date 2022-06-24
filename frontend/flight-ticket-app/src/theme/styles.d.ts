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
      }

      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      }
    }
  }
}
