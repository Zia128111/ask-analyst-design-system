import type { ComponentType } from 'react';
import { iconSize } from '../theme/tokens';
export type IconSizeToken = keyof typeof iconSize;
export interface IconProps {
    size?: IconSizeToken;
    /**
     * Accessible label. Omit ONLY when the icon sits beside real text, in which
     * case it is marked aria-hidden automatically.
     */
    label?: string;
    color?: string;
    className?: string;
}
/**
 * Wraps a Tabler icon so the two accessibility rules are structural rather
 * than remembered:
 *   - no label  -> aria-hidden, focusable={false} (decorative)
 *   - a label   -> role="img" with an accessible name
 */
export declare function makeIcon(Glyph: ComponentType<Record<string, unknown>>, displayName: string): {
    ({ size, label, color, className }: IconProps): import("react").JSX.Element;
    displayName: string;
};
export declare const Icons: {
    readonly up: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly down: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly flat: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly search: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly filter: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly sort: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly sortAsc: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly sortDesc: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly download: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly refresh: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly close: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly check: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly externalLink: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly star: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly starFilled: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly chevronDown: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly chevronRight: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly info: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly warning: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly sun: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly moon: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly directionLtr: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly directionRtl: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly chart: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly report: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly calendar: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly watch: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly alerts: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
};
/** Direction icon for a market movement, matching lib/format's Direction. */
export declare const DIRECTION_ICON: {
    readonly up: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly down: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
    readonly flat: {
        ({ size, label, color, className }: IconProps): import("react").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=icons.d.ts.map