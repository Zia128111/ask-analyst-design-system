---
category: Data States
---

# ErrorState

The failure state. Assertive (`role="alert"`, so it interrupts - unlike loading
and empty), recoverable, and never a dead end.

```tsx
<ErrorState
  description="The market feed did not respond. Your connection may be offline."
  onRetry={() => refetch()}
/>
```

- `title` defaults to "Could not load data". Override it when you can name the
  specific thing that failed.
- `description` should say what the user can infer about the cause - network,
  permissions, an upstream feed - not the stack trace.
- `onRetry` renders a "Try again" button. Always wire it when a retry is possible;
  an error with no way forward is the state this component exists to prevent.
- Rendered as a Mantine `Alert` with the system error tone.
