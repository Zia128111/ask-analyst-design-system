/* ============================================================================
 * SERVER-SAFE ENTRY — design tokens
 * ============================================================================
 * The main entry carries a 'use client' banner, because the components are
 * Mantine components and Mantine is client-only. That banner applies to the
 * whole bundle, so importing tokens from the root makes them client values —
 * and a Next.js Server Component calling into them fails with
 * "Attempted to call X from the server but X is on the client".
 *
 * These are plain data. This entry ships WITHOUT the banner so server
 * components, generateMetadata and route handlers can use them:
 *
 *   import { tokens } from '@akseer/ask-analyst-design-system/tokens';
 * ========================================================================= */

export * as tokens from '../theme/tokens';
export {
  EMAIL_FONT_STACK,
  emailColor,
  emailSize,
  emailStyle,
  EMAIL_DIRECTION,
} from '../lib/email-tokens';
