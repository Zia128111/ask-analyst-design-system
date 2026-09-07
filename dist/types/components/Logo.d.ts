export interface LogoProps {
    /** Rendered height in px; width scales with the aspect ratio. */
    height?: number;
    /**
     * Accessible name. Pass `null` when the logo sits beside a text version of
     * the same name, so screen readers do not announce it twice.
     */
    title?: string | null;
    className?: string;
}
/** Full lockup: mark + wordmark. */
export declare function Logo({ height, title, className }: LogoProps): import("react").JSX.Element;
/** Mark only — favicons, avatars, collapsed nav, loading states. */
export declare function LogoMark({ height, title, className }: LogoProps): import("react").JSX.Element;
//# sourceMappingURL=Logo.d.ts.map