import { Group, Logo, Stack, Text } from '@akseer/ask-analyst-design-system';

export const HeaderSize = () => <Logo height={28} title="Ask Analyst" />;

export const Sizes = () => (
  <Stack gap="lg" align="flex-start">
    {[20, 28, 40, 56].map((h) => (
      <Group key={h} gap="md" align="center">
        <Logo height={h} title={null} />
        <Text size="xs" c="var(--ask-text-tertiary)">
          {h}px
        </Text>
      </Group>
    ))}
  </Stack>
);

/* The lockup in the place it actually appears: the product header rule.
   The mark keeps its own brand colours (#0EA4F1 / #0086DB / #09A2F0) - never
   the interface blue - and the wordmark takes --ask-logo-wordmark, which is
   what makes one component cover both colour schemes. */
export const InHeaderStrip = () => (
  <div
    style={{
      borderBottom: 'var(--ask-border-thick) solid var(--ask-border-brand)',
      padding: 'var(--ask-space-3) var(--ask-space-4)',
    }}
  >
    <Group justify="space-between" align="center">
      <Logo height={28} title="Ask Analyst" />
      <Text size="sm" c="var(--ask-text-tertiary)">
        Akseer Research
      </Text>
    </Group>
  </div>
);
