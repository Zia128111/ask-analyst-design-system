import { Group, LogoMark, Stack, Text } from '@akseer/ask-analyst-design-system';

export const Default = () => <LogoMark height={32} title="Ask Analyst" />;

export const Sizes = () => (
  <Group gap="lg" align="flex-end">
    {[16, 24, 32, 48].map((h) => (
      <Stack key={h} gap="xs" align="center">
        <LogoMark height={h} title={null} />
        <Text size="xs" c="var(--ask-text-tertiary)">
          {h}px
        </Text>
      </Stack>
    ))}
  </Group>
);

export const BesideWordmark = () => (
  <Group gap="sm" align="center">
    {/* title={null} because the text beside it already carries the name. */}
    <LogoMark height={28} title={null} />
    <Text fw={700} size="lg">
      Ask Analyst
    </Text>
  </Group>
);
