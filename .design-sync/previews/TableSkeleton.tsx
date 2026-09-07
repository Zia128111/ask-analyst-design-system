import { TableSkeleton } from '@akseer/ask-analyst-design-system';

export const Default = () => <TableSkeleton />;

export const CompactThreeColumns = () => <TableSkeleton rows={3} cols={3} />;

export const LongList = () => <TableSkeleton rows={10} cols={5} />;
