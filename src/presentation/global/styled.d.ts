import 'styled-components/native';
import { MyTheme } from './theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends MyTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
