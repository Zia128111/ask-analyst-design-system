import {
  createTheme,
  type CSSVariablesResolver,
  type MantineColorsTuple,
} from '@mantine/core';

import { components } from './components';
import * as t from './tokens';

/**
 * Ask Analyst Design System v2.0 — Mantine binding.
 *
 * This file only MAPS tokens onto Mantine's slots. It must not invent values:
 * a number here that is not imported from ./tokens is a bug.
 *
 * BRAND COLOUR IS FIXED AT #1485ff (blue[6]) and is used for every fill,
 * border, button, table rule, badge, icon and heading. The single exception is
 * `text-link` at body size — see tokens.ts.
 */

const brand = t.blue as unknown as MantineColorsTuple;
const gray = t.neutral as unknown as MantineColorsTuple;
const positive = t.green as unknown as MantineColorsTuple;
const negative = t.red as unknown as MantineColorsTuple;
const caution = t.amber as unknown as MantineColorsTuple;

const semanticLightRecord: Record<string, string> = { ...t.semanticLight };
const semanticDarkRecord: Record<string, string> = { ...t.semanticDark };

export const theme = createTheme({
  primaryColor: 'brand',
  primaryShade: 6, // #1485ff — the brand blue, unchanged from v1.0
  colors: { brand, gray, positive, negative, caution },

  fontFamily: "'Lato', sans-serif",
  fontFamilyMonospace:
    "ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, Consolas, monospace",

  headings: {
    fontFamily: "'Lato', sans-serif",
    sizes: {
      h1: { fontSize: t.fontSize['3xl'], fontWeight: '700', lineHeight: t.lineHeight.tight },
      h2: { fontSize: t.fontSize['2xl'], fontWeight: '700', lineHeight: t.lineHeight.snug },
      h3: { fontSize: t.fontSize.xl, fontWeight: '600', lineHeight: t.lineHeight.snug },
      h4: { fontSize: t.fontSize.lg, fontWeight: '600', lineHeight: t.lineHeight.snug },
      h5: { fontSize: t.fontSize.md, fontWeight: '600', lineHeight: t.lineHeight.normal },
      h6: { fontSize: t.fontSize.sm, fontWeight: '700', lineHeight: t.lineHeight.normal },
    },
  },

  fontSizes: {
    xs: t.fontSize['2xs'], // 12
    sm: t.fontSize.xs, //     14
    md: t.fontSize.sm, //     16 — body default
    lg: t.fontSize.md, //     18
    xl: t.fontSize.lg, //     20
  },
  lineHeights: {
    xs: t.lineHeight.normal,
    sm: t.lineHeight.normal,
    md: t.lineHeight.relaxed,
    lg: t.lineHeight.relaxed,
    xl: t.lineHeight.snug,
  },

  spacing: {
    xs: t.space[1], //  4px
    sm: t.space[2], //  8px
    md: t.space[3], // 12px
    lg: t.space[4], // 16px
    xl: t.space[6], // 24px
  },

  radius: {
    xs: t.radius.xs,
    sm: t.radius.sm,
    md: t.radius.md,
    lg: t.radius.lg,
    xl: t.radius.xl,
  },
  defaultRadius: 'md',

  shadows: {
    xs: t.shadow.xs,
    sm: t.shadow.sm,
    md: t.shadow.md,
    lg: t.shadow.lg,
    xl: t.shadow.xl,
  },

  breakpoints: {
    xs: t.breakpoint.sm,
    sm: t.breakpoint.md,
    md: t.breakpoint.lg,
    lg: t.breakpoint.xl,
    xl: t.breakpoint['2xl'],
  },

  black: t.ink,
  white: '#ffffff',

  // Centralised so prefers-reduced-motion is handled in exactly one place.
  respectReducedMotion: true,

  components,

  other: {
    space: t.space,
    radius: t.radius,
    borderWidth: t.borderWidth,
    controlHeight: t.controlHeight,
    duration: t.duration,
    easing: t.easing,
    zIndex: t.zIndex,
    container: t.container,
    fontWeight: t.fontWeight,
    letterSpacing: t.letterSpacing,
    minTouchTarget: t.minTouchTarget,
  },
});

/**
 * Publishes every semantic token as a `--ask-*` CSS variable in BOTH colour
 * schemes, so component CSS modules never hard-code a hex, and dark mode is a
 * source swap rather than a parallel stylesheet.
 */
export const cssVariablesResolver: CSSVariablesResolver = () => {
  const scalars: Record<string, string> = {};

  for (const [k, v] of Object.entries(t.space)) scalars[`--ask-space-${k}`] = v;
  for (const [k, v] of Object.entries(t.radius)) scalars[`--ask-radius-${k}`] = v;
  for (const [k, v] of Object.entries(t.borderWidth)) scalars[`--ask-border-${k}`] = v;
  for (const [k, v] of Object.entries(t.controlHeight)) scalars[`--ask-control-${k}`] = v;
  for (const [k, v] of Object.entries(t.duration)) scalars[`--ask-duration-${k}`] = v;
  for (const [k, v] of Object.entries(t.easing)) scalars[`--ask-ease-${k}`] = v;
  for (const [k, v] of Object.entries(t.zIndex)) scalars[`--ask-z-${k}`] = String(v);
  for (const [k, v] of Object.entries(t.fontSize)) scalars[`--ask-font-${k}`] = v;
  for (const [k, v] of Object.entries(t.lineHeight)) scalars[`--ask-leading-${k}`] = v;
  for (const [k, v] of Object.entries(t.container)) scalars[`--ask-container-${k}`] = v;

  scalars['--ask-focus-width'] = t.focusRing.width;
  scalars['--ask-focus-offset'] = t.focusRing.offset;
  scalars['--ask-touch-target'] = t.minTouchTarget;

  const toVars = (palette: Record<string, string>) =>
    Object.fromEntries(Object.entries(palette).map(([k, v]) => [`--ask-${k}`, v]));

  // Chart furniture differs per scheme, so it rides the light/dark blocks.
  const chartVars = (m: 'light' | 'dark') =>
    Object.fromEntries(
      Object.entries(t.chartSurface[m]).map(([k, v]) => [
        `--ask-chart-${k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())}`,
        v,
      ]),
    );

  return {
    variables: scalars,
    light: { ...toVars(semanticLightRecord), ...chartVars('light') },
    dark: { ...toVars(semanticDarkRecord), ...chartVars('dark') },
  };
};

export * as tokens from './tokens';
