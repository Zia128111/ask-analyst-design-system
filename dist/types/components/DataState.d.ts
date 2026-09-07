import type { ReactNode } from 'react';
export type DataStatus = 'loading' | 'ready' | 'empty' | 'error';
export declare function TableSkeleton({ rows, cols }: {
    rows?: number;
    cols?: number;
}): import("react").JSX.Element;
export declare function EmptyState({ title, description, action, }: {
    title: string;
    description?: string;
    action?: ReactNode;
}): import("react").JSX.Element;
export declare function ErrorState({ title, description, onRetry, }: {
    title?: string;
    description?: string;
    onRetry?: () => void;
}): import("react").JSX.Element;
export declare function StaleNotice({ asOf, delayedMinutes }: {
    asOf: string;
    delayedMinutes?: number;
}): import("react").JSX.Element;
//# sourceMappingURL=DataState.d.ts.map