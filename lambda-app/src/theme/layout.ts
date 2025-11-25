// Spacing and layout constants
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 80,
} as const;

// Border radius values
export const borderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

// Shadow definitions (for elevation)
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  base: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
  },
} as const;

// Layout dimensions
export const layout = {
  // Screen padding
  screenPadding: spacing.base,
  screenPaddingHorizontal: spacing.base,
  screenPaddingVertical: spacing.lg,
  
  // Component dimensions
  buttonHeight: {
    sm: 32,
    base: 44,
    lg: 52,
  },
  
  inputHeight: {
    sm: 36,
    base: 44,
    lg: 52,
  },
  
  // Icon sizes
  iconSize: {
    xs: 12,
    sm: 16,
    base: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
  },
  
  // Card dimensions
  cardPadding: spacing.base,
  cardRadius: borderRadius.md,
  
  // Header heights
  headerHeight: 56,
  tabBarHeight: 60,
  
  // Progress bar
  progressBarHeight: 8,
} as const;

export type SpacingKey = keyof typeof spacing;
export type BorderRadiusKey = keyof typeof borderRadius;
export type ShadowKey = keyof typeof shadows;