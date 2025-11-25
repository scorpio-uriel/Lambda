// Export all theme elements
export { colors, getColors } from './colors';
export { typography, textStyles } from './typography';
export { spacing, borderRadius, shadows, layout } from './layout';

// Main theme object
import { colors, getColors } from './colors';
import { typography, textStyles } from './typography';
import { spacing, borderRadius, shadows, layout } from './layout';

export const createTheme = (mode: 'light' | 'dark') => ({
  colors: getColors(mode),
  typography,
  textStyles,
  spacing,
  borderRadius,
  shadows,
  layout,
  mode,
});

export type Theme = ReturnType<typeof createTheme>;

// Default themes
export const lightTheme = createTheme('light');
export const darkTheme = createTheme('dark');