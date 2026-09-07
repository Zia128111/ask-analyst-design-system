import {
  Accordion,
  ActionIcon,
  Alert,
  Anchor,
  Autocomplete,
  Avatar,
  Blockquote,
  Breadcrumbs,
  Burger,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  Code,
  ColorInput,
  Combobox,
  Container,
  Divider,
  Drawer,
  Fieldset,
  FileInput,
  Indicator,
  JsonInput,
  Kbd,
  Loader,
  Menu,
  Modal,
  MultiSelect,
  NativeSelect,
  NavLink,
  Notification,
  NumberInput,
  Paper,
  PasswordInput,
  Pill,
  PillsInput,
  Overlay,
  Pagination,
  Popover,
  Progress,
  Radio,
  Rating,
  RingProgress,
  SegmentedControl,
  Select,
  Skeleton,
  Slider,
  Spoiler,
  Stepper,
  Switch,
  Table,
  Tabs,
  TagsInput,
  Textarea,
  TextInput,
  ThemeIcon,
  Timeline,
  Tooltip,
  Tree,
} from '@mantine/core';
import type { MantineThemeComponents } from '@mantine/core';
import { DateInput, DatePicker, DatePickerInput, MonthPickerInput } from '@mantine/dates';

import actionIconClasses from './ActionIcon.module.css';
import alertClasses from './Alert.module.css';
import anchorClasses from './Anchor.module.css';
import avatarClasses from './Avatar.module.css';
import badgeClasses from './Badge.module.css';
import buttonClasses from './Button.module.css';
import calendarClasses from './Calendar.module.css';
import cardClasses from './Card.module.css';
import comboboxClasses from './Combobox.module.css';
import feedbackClasses from './Feedback.module.css';
import inlineClasses from './Inline.module.css';
import inputClasses from './Input.module.css';
import navLinkClasses from './NavLink.module.css';
import notificationClasses from './Notification.module.css';
import overlayClasses from './Overlay.module.css';
import paginationClasses from './Pagination.module.css';
import paperClasses from './Paper.module.css';
import pillClasses from './Pill.module.css';
import progressClasses from './Progress.module.css';
import segmentedClasses from './SegmentedControl.module.css';
import structureClasses from './Structure.module.css';
import tableClasses from './Table.module.css';

/**
 * Component defaults for Ask Analyst Design System v2.0.
 *
 * v1.0's own component checklist left Form Input, Modal, Dropdown and Toast
 * unchecked — they were never specified at all. They are covered here.
 */

/** Every text-like control shares one contract: visible label, a 3:1 border,
 *  16px type so iOS does not zoom on focus, and errors next to the field. */
const inputLike = { classNames: inputClasses };

/**
 * Select-family controls need BOTH contracts: the input contract above and the
 * dropdown-panel contract.
 *
 * `Combobox.extend({ classNames })` does NOT reach them — Select renders its
 * panel under its own `mantine-Select-option` / `-dropdown` slots, so classes
 * registered on Combobox never appear there and the panel silently falls back
 * to Mantine defaults. The slots must be passed to each control directly.
 */
const selectLike = {
  classNames: { ...inputClasses, ...comboboxClasses },
  // A search that matches nothing must SAY so. Mantine's default is to render
  // an empty dropdown, which reads as "the control is broken" rather than "no
  // results" — the same empty-state principle the tables already follow.
  defaultProps: { nothingFoundMessage: 'No matches found' },
};

/**
 * Mantine's calendar header arrows (previous/next month, year, decade) render
 * as icon-only buttons with NO accessible name — axe flags this as a critical
 * button-name failure. Naming them here fixes every date control at once.
 */
const calendarAriaLabels = {
  nextMonth: 'Next month',
  previousMonth: 'Previous month',
  nextYear: 'Next year',
  previousYear: 'Previous year',
  nextDecade: 'Next decade',
  previousDecade: 'Previous decade',
  monthLevelControl: 'Change month',
  yearLevelControl: 'Change year',
};

export const components: MantineThemeComponents = {
  Button: Button.extend({
    classNames: buttonClasses,
    defaultProps: { variant: 'default' },
    // Mantine emits these as inline styles; a CSS module cannot override them.
    vars: (_theme, props) => {
      // Filled sits on the #1485ff brand fill, so its label follows the
      // `text-on-brand` token rather than a hard-coded colour — change that
      // token once and every brand-filled control moves together.
      if (props.variant === 'filled') {
        return { root: { '--button-color': 'var(--ask-text-on-brand)' } };
      }
      if (props.variant && props.variant !== 'default') return { root: {} };
      return {
        root: {
          /*
           * CSS VARIABLES, not resolved literals.
           *
           * These were `theme.white` / `theme.black` / `theme.colors.brand[0]`,
           * which bake #ffffff and #0a0a0a into the inline style — so the
           * button stayed a glaring white card with black text on a dark page.
           * A `vars` resolver runs once per render, not per colour scheme, so
           * anything scheme-dependent MUST be referenced as a var and left for
           * CSS to resolve.
           */
          '--button-bg': 'var(--ask-bg-surface)',
          '--button-hover': 'var(--ask-bg-hover)',
          '--button-color': 'var(--ask-text-primary)',
          // Brand #1485ff in light; the dark scheme lifts it for legibility.
          '--button-bd': '1px solid var(--ask-border-brand)',
        },
      };
    },
  }),

  Anchor: Anchor.extend({ classNames: anchorClasses }),

  /* Icon-only control. It MUST always be given an aria-label by the caller —
     an icon with no accessible name announces as just "button". */
  ActionIcon: ActionIcon.extend({
    classNames: actionIconClasses,
    defaultProps: { variant: 'subtle' },
  }),

  /* Four tones matching the badge palette. Pass role="alert" for errors. */
  Alert: Alert.extend({
    classNames: alertClasses,
    defaultProps: { variant: 'info', radius: 'md' },
  }),

  /* The chart timeframe switch — the most-clicked control in the product. */
  SegmentedControl: SegmentedControl.extend({
    classNames: segmentedClasses,
    defaultProps: { radius: 'md' },
  }),

  Pagination: Pagination.extend({
    classNames: paginationClasses,
    defaultProps: {
      radius: 'md',
      withEdges: true,
      // Mantine's first/prev/next/last controls are icon-only with NO
      // accessible name — axe flags this as a critical button-name failure.
      // Naming them here fixes every Pagination in the product at once.
      getControlProps: (control) => {
        const labels = {
          first: 'Go to first page',
          previous: 'Go to previous page',
          next: 'Go to next page',
          last: 'Go to last page',
        };
        return labels[control] ? { 'aria-label': labels[control] } : {};
      },
    },
  }),

  NavLink: NavLink.extend({
    classNames: navLinkClasses,
    /* Mantine's `filled` variant writes --nl-bg / --nl-color inline (brand
       fill + white label). The active nav item is a light tint with blue
       text, so those vars are redirected here — a CSS module rule cannot beat
       an inline style. */
    vars: () => ({
      root: {
        '--nl-bg': 'var(--ask-bg-brand-subtle)',
        '--nl-hover': 'var(--ask-bg-selected)',
        '--nl-color': 'var(--ask-text-link)',
      },
      // NavLinkCssVariables declares both slots, so `children` must be present
      // even when empty.
      children: {},
    }),
  }),

  /* Toast. Listed but never specified in v1.0's own checklist. */
  Notification: Notification.extend({
    classNames: notificationClasses,
    defaultProps: { radius: 'md', withBorder: true },
  }),

  Loader: Loader.extend({ defaultProps: { color: 'brand.6', type: 'oval' } }),

  Skeleton: Skeleton.extend({
    classNames: { root: feedbackClasses.skeleton },
    defaultProps: { radius: 'xs' },
  }),

  Divider: Divider.extend({
    classNames: { root: feedbackClasses.divider, label: feedbackClasses.dividerLabel },
  }),

  Badge: Badge.extend({
    classNames: badgeClasses,
    defaultProps: { variant: 'company' },
  }),

  /*
   * Cards keep their brand-blue outline, and carry NO shadow.
   *
   * The outline is the card's edge and is wanted. What was not wanted was the
   * TABLE drawing its own left and right edges: the scroller used to paint a
   * 12px shadow at each inline edge, which on a phone — where the table fills
   * the card — sat just inside the card's own rule and read as a doubled
   * border. That is fixed in DataTable.module.css; the card outline here is
   * unrelated and stays.
   *
   * `shadow` is dropped from the defaults: an outline and a drop shadow are
   * two answers to the same question, and on a white page the shadow only
   * muddied the edge it sat under. Still available as an opt-in for the cases
   * that genuinely float — a modal panel, a popover.
   */
  Paper: Paper.extend({
    classNames: paperClasses,
    defaultProps: { radius: 'lg', withBorder: true },
  }),

  Card: Card.extend({
    classNames: cardClasses,
    defaultProps: { radius: 'lg', withBorder: true },
  }),

  Avatar: Avatar.extend({ classNames: avatarClasses }),

  Table: Table.extend({
    classNames: tableClasses,
    // Horizontal blue rules only — no outer frame, no column separators.
    // Mantine's row border lives on the <tr> and would double-draw the rule
    // the <td> already paints.
    defaultProps: {
      withTableBorder: false,
      withColumnBorders: false,
      withRowBorders: false,
    },
  }),

  // --- Form controls: entirely unspecified in v1.0 ------------------------
  TextInput: TextInput.extend(inputLike),
  Textarea: Textarea.extend(inputLike),
  PasswordInput: PasswordInput.extend(inputLike),
  NumberInput: NumberInput.extend(inputLike),
  Select: Select.extend(selectLike),
  MultiSelect: MultiSelect.extend(selectLike),
  NativeSelect: NativeSelect.extend(inputLike), // native <select>, no panel

  // The dropdown PANEL, shared by Select / MultiSelect / Autocomplete. Theming
  // the control without theming this leaves the system the moment it opens.
  Combobox: Combobox.extend({ classNames: comboboxClasses }),
  Pill: Pill.extend({ classNames: pillClasses }),
  PillsInput: PillsInput.extend(inputLike),

  Checkbox: Checkbox.extend({ defaultProps: { radius: 'xs' } }),
  Radio: Radio.extend({}),
  Switch: Switch.extend({}),

  // --- Overlays ----------------------------------------------------------
  Modal: Modal.extend({
    defaultProps: {
      radius: 'xl',
      centered: true,
      overlayProps: { backgroundOpacity: 0.55, blur: 2 },
      // Returning focus to the trigger on close is required for keyboard use.
      returnFocus: true,
      transitionProps: { duration: 200, transition: 'pop' },
    },
  }),

  Tooltip: Tooltip.extend({
    defaultProps: {
      radius: 'sm',
      withArrow: true,
      openDelay: 200,
      // Must be reachable by keyboard, not hover-only (WCAG 1.4.13).
      events: { hover: true, focus: true, touch: true },
    },
  }),

  Menu: Menu.extend({
    defaultProps: { radius: 'md', shadow: 'md' },
  }),

  Tabs: Tabs.extend({
    defaultProps: { keepMounted: false },
  }),

  Container: Container.extend({
    defaultProps: { size: 'xl' },
  }),

  // --- Ticker search -----------------------------------------------------
  // Autocomplete and TagsInput take the full select contract: input styling
  // AND the dropdown panel, since Combobox.extend does not reach them.
  Autocomplete: Autocomplete.extend(selectLike),
  TagsInput: TagsInput.extend(selectLike),

  // --- Remaining text-like controls --------------------------------------
  FileInput: FileInput.extend(inputLike),
  ColorInput: ColorInput.extend(inputLike),
  JsonInput: JsonInput.extend(inputLike),
  Fieldset: Fieldset.extend({ defaultProps: { radius: 'md' } }),

  // --- Dates: the chart range and report archive filters ------------------
  DatePicker: DatePicker.extend({
    classNames: calendarClasses,
    defaultProps: { ariaLabels: calendarAriaLabels },
  }),
  DatePickerInput: DatePickerInput.extend({
    classNames: { ...inputClasses, ...calendarClasses },
    defaultProps: { ariaLabels: calendarAriaLabels },
  }),
  MonthPickerInput: MonthPickerInput.extend({
    classNames: { ...inputClasses, ...calendarClasses },
    defaultProps: { ariaLabels: calendarAriaLabels },
  }),
  DateInput: DateInput.extend({ classNames: { ...inputClasses, ...calendarClasses } }),

  // --- Floating surfaces: one material for all of them --------------------
  Popover: Popover.extend({
    classNames: { dropdown: overlayClasses.dropdown },
    defaultProps: { radius: 'md', shadow: 'md', withinPortal: true },
  }),
  Drawer: Drawer.extend({
    classNames: {
      content: overlayClasses.drawerContent,
      header: overlayClasses.drawerHeader,
      title: overlayClasses.drawerTitle,
      body: overlayClasses.drawerBody,
    },
    // Focus must return to the trigger on close, or keyboard users are stranded.
    defaultProps: { returnFocus: true, overlayProps: { backgroundOpacity: 0.55, blur: 2 } },
  }),
  Overlay: Overlay.extend({ defaultProps: { backgroundOpacity: 0.55, blur: 2 } }),

  // --- Progress family ----------------------------------------------------
  Progress: Progress.extend({
    classNames: { root: progressClasses.progressRoot, section: progressClasses.progressSection },
  }),
  Slider: Slider.extend({
    // The thumb carries role="slider" and is named from `thumbLabel` — an
    // aria-label on the root does NOT reach it, leaving it nameless. This is a
    // safety net; every Slider should still pass a meaningful thumbLabel.
    defaultProps: { thumbLabel: 'Value' },
    classNames: {
      track: progressClasses.sliderTrack,
      bar: progressClasses.sliderBar,
      thumb: progressClasses.sliderThumb,
      label: progressClasses.sliderLabel,
      markLabel: progressClasses.sliderMarkLabel,
    },
  }),
  RingProgress: RingProgress.extend({ defaultProps: { thickness: 8, roundCaps: true } }),
  Rating: Rating.extend({ defaultProps: { color: 'caution.5' } }),

  // --- Disclosure & wayfinding -------------------------------------------
  Accordion: Accordion.extend({
    classNames: {
      item: structureClasses.accordionItem,
      control: structureClasses.accordionControl,
      content: structureClasses.accordionPanelContent,
    },
  }),
  Stepper: Stepper.extend({
    classNames: {
      stepIcon: structureClasses.stepperStepIcon,
      stepLabel: structureClasses.stepperStepLabel,
      stepDescription: structureClasses.stepperStepDescription,
      separator: structureClasses.stepperSeparator,
    },
  }),
  Timeline: Timeline.extend({
    classNames: {
      itemBullet: structureClasses.timelineItemBullet,
      itemTitle: structureClasses.timelineItemTitle,
      itemBody: structureClasses.timelineItemBody,
    },
  }),
  Breadcrumbs: Breadcrumbs.extend({
    classNames: {
      root: structureClasses.breadcrumbsRoot,
      separator: structureClasses.breadcrumbsSeparator,
    },
  }),
  Spoiler: Spoiler.extend({}),
  Tree: Tree.extend({}),
  Burger: Burger.extend({ defaultProps: { size: 'sm' } }),

  // --- Small inline surfaces ---------------------------------------------
  Chip: Chip.extend({
    classNames: { label: inlineClasses.chipLabel },
    /*
     * Mantine's check icon reads `color: var(--chip-icon-color, inherit)` and
     * sets that var to #ffffff, because its default checked chip is a FILLED
     * blue with a white tick. Ours is a light tint with blue text, so the white
     * tick was invisible.
     *
     * Mantine derives it as `--chip-icon-color: var(--chip-color)`, and
     * `--chip-color` also drives the checked label text — so setting that one
     * var fixes the tick AND keeps it identical to the word beside it.
     * Set as a var because Mantine writes it inline, where a CSS module rule
     * could not win.
     */
    vars: () => ({
      root: {
        '--chip-color': 'var(--ask-text-link)',
        /*
         * Mantine derives --chip-hover from primary shade 7, which is the
         * SAME value as our chip text (#0a6fdb) — so hovering a selected chip
         * painted the background in the text colour and the label vanished.
         * The hover tint deepens instead; the CSS module deepens the label to
         * match, giving 5.86:1.
         */
        '--chip-hover': 'var(--ask-bg-selected)',
      },
    }),
  }),
  ThemeIcon: ThemeIcon.extend({ classNames: { root: inlineClasses.themeIcon } }),
  Indicator: Indicator.extend({ classNames: { indicator: inlineClasses.indicator } }),
  Kbd: Kbd.extend({ classNames: { root: inlineClasses.kbd } }),
  Code: Code.extend({ classNames: { root: inlineClasses.code } }),
  Blockquote: Blockquote.extend({
    classNames: { root: inlineClasses.blockquote, cite: inlineClasses.blockquoteCite },
  }),
};
