import type { ReactNode } from 'react';
import { Title } from '@mantine/core';

import classes from '../theme/components/Layout.module.css';

/* ============================================================================
 * TITLE + META SECTION — Ask Analyst Design System v2.0
 * ============================================================================
 * Implements v1.0 §Component Specifications › Title Section and Meta Section.
 * ========================================================================= */

export interface PageHeadingProps {
  title: string;
  /** Meta items — ticker, sector, timestamp, author. Rendered dot-separated. */
  meta?: ReactNode[];
  /**
   * v1.0 centred every page title. For a scanning-heavy data product the
   * default is left-aligned: the eye returns to a consistent inline-start edge
   * down the page. Opt in to centring for marketing or report covers.
   */
  centered?: boolean;
  children?: ReactNode;
}

export function PageHeading({ title, meta = [], centered = false, children }: PageHeadingProps) {
  return (
    <div className={classes.titleSection} data-centered={centered || undefined}>
      {/* Exactly one h1 per page — heading order is a landmark for screen
          readers, not a font-size choice. */}
      <Title order={1} className={classes.title}>
        {title}
      </Title>

      {meta.length > 0 && (
        <div className={classes.meta}>
          {meta.map((item, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {i > 0 && (
                /* Decorative separator. aria-hidden is required: without it a
                   screen reader announces a bullet between every meta item. */
                <span className={classes.metaDot} aria-hidden="true" />
              )}
              <span>{item}</span>
            </span>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}
