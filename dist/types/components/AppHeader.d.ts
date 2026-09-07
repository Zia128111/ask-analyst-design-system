export interface NavItem {
    label: string;
    href: string;
}
/** The nine top-level sections of the product. */
export declare const NAV_ITEMS: NavItem[];
export interface AppHeaderProps {
    items?: NavItem[];
    activeHref?: string;
    /** Id of the <main> element the skip link jumps to. */
    mainId?: string;
    brand?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare function AppHeader({ items, activeHref, mainId, brand, actions, }: AppHeaderProps): import("react").JSX.Element;
//# sourceMappingURL=AppHeader.d.ts.map