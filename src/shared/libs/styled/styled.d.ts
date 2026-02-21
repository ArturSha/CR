/* eslint-disable @typescript-eslint/no-empty-object-type */

import 'styled-components';
import type { Theme } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
