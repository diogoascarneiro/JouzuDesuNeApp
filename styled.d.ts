// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent1: string;
      accent2: string;
      accent3: string;
      light: string;
      dark: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
  }
}
