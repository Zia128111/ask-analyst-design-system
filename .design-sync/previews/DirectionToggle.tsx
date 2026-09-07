import { ColorSchemeToggle, DirectionToggle, Group, Logo, Stack, Text } from '@akseer/ask-analyst-design-system';

export const Default = () => <DirectionToggle />;

/* Where it actually lives: the actions slot of AppHeader, before ColorSchemeToggle. */
export const InHeaderActions = () => (
  <div
    style={{
      borderBottom: 'var(--ask-border-thick) solid var(--ask-border-brand)',
      padding: 'var(--ask-space-3) var(--ask-space-4)',
    }}
  >
    <Group justify="space-between" align="center">
      <Logo height={24} title="Ask Analyst" />
      <Group gap="sm">
        <DirectionToggle />
        <ColorSchemeToggle />
      </Group>
    </Group>
  </div>
);

export const WithLabel = () => (
  <Stack gap="xs" align="flex-start">
    <Text size="xs" fw={700} c="var(--ask-text-tertiary)">
      TEXT DIRECTION
    </Text>
    <DirectionToggle />
  </Stack>
);
