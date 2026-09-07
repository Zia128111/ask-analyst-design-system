export interface NavItem {
    label: string;
    href: string;
}
/** The nine top-level sections of the product. */
export declare const NAV_ITEMS: NavItem[];
/**
 * How wide the header's inner row runs.
 *
 * The header MUST agree with the page beneath it, or the logo and the first
 * heading sit on two different inline-start edges — which is why this is a
 * prop and not something a consumer overrides with its own CSS.
 *
 *   content  the reading measure, 1280px — the default, and right for most pages
 *   wide     1600px — data-dense boards where columns are worth more than measure
 *   full     no cap — edge to edge, for a page that really is the whole screen
 */
export type HeaderWidth = 'content' | 'wide' | 'full';
export interface AppHeaderProps {
    items?: NavItem[];
    activeHref?: string;
    /** Id of the <main> element the skip link jumps to. */
    mainId?: string;
    brand?: React.ReactNode;
    actions?: React.ReactNode;
    /** Defaults to 'content', so existing pages are unaffected. */
    width?: HeaderWidth;
}
export declare function AppHeader({ items, activeHref, mainId, brand, actions, width, }: AppHeaderProps): import("react").JSX.Element;
//# sourceMappingURL=AppHeader.d.ts.map