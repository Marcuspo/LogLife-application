import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: {
      bold: string;
      light: string;
      italic: string;
      medium: string;
      extraLight: string;
      regular: string;
      thin: string;
    };
    colors: {
      primary: string;
    };
  }
}
