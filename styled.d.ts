import 'styled-components';
import { AppTheme } from './theme';

type Theme = typeof AppTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
