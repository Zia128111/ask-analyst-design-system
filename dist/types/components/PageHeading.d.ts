import type { ReactNode } from 'react';
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
export declare function PageHeading({ title, meta, centered, children }: PageHeadingProps): import("react").JSX.Element;
//# sourceMappingURL=PageHeading.d.ts.map