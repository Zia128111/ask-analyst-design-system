import { type DataStatus } from './DataState';
export interface Quote {
    symbol: string;
    price: number | null;
    change: number | null;
    changePct: number | null;
    volume: number | null;
    /** Set transiently when a live tick arrives, to trigger the flash. */
    tick?: 'up' | 'down';
}
export interface MarketTableProps {
    rows: Quote[];
    status?: DataStatus;
    caption: string;
    stale?: boolean;
    stickyHeader?: boolean;
    onRetry?: () => void;
}
export declare function MarketTable({ rows, status, caption, stale, stickyHeader, onRetry, }: MarketTableProps): import("react").JSX.Element;
//# sourceMappingURL=MarketTable.d.ts.map