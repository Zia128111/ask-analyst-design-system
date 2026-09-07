"use client";
import { Accordion as e, ActionIcon as t, Alert as n, Anchor as r, Autocomplete as i, Avatar as a, Badge as o, Blockquote as s, Breadcrumbs as ee, Burger as c, Button as te, Card as ne, Center as re, Checkbox as ie, Chip as ae, Code as oe, ColorInput as se, Combobox as ce, Container as le, Divider as ue, Drawer as de, Fieldset as fe, FileInput as pe, Group as l, Indicator as me, JsonInput as he, Kbd as ge, Loader as _e, Menu as ve, Modal as ye, MultiSelect as be, NativeSelect as xe, NavLink as Se, Notification as Ce, NumberInput as we, Overlay as Te, Pagination as Ee, Paper as De, PasswordInput as Oe, Pill as ke, PillsInput as Ae, Popover as je, Progress as Me, Radio as Ne, Rating as Pe, RingProgress as Fe, SegmentedControl as Ie, Select as Le, Skeleton as Re, Slider as ze, Spoiler as Be, Stack as Ve, Stepper as He, Switch as Ue, Table as u, Tabs as We, TagsInput as Ge, Text as d, TextInput as Ke, Textarea as qe, ThemeIcon as Je, Timeline as Ye, Title as Xe, Tooltip as Ze, Tree as Qe, createTheme as $e, useDirection as et, useMantineColorScheme as tt } from "@mantine/core";
import { DateInput as nt, DatePicker as rt, DatePickerInput as it, MonthPickerInput as at } from "@mantine/dates";
import { IconAlertTriangle as ot, IconArrowsSort as st, IconBell as ct, IconCalendar as lt, IconCaretDownFilled as ut, IconCaretUpFilled as dt, IconChartLine as ft, IconCheck as pt, IconChevronDown as mt, IconChevronRight as ht, IconDownload as gt, IconExternalLink as _t, IconEye as vt, IconFileText as yt, IconFilter as bt, IconInfoCircle as xt, IconMinus as St, IconMoon as Ct, IconRefresh as wt, IconSearch as Tt, IconSortAscending as Et, IconSortDescending as Dt, IconStar as Ot, IconStarFilled as kt, IconSun as At, IconTextDirectionLtr as jt, IconTextDirectionRtl as Mt, IconX as Nt } from "@tabler/icons-react";
import { Fragment as Pt, jsx as f, jsxs as p } from "react/jsx-runtime";
import { useId as Ft, useMemo as It, useState as Lt } from "react";
import { Chart as Rt } from "react-google-charts";
//#region \0rolldown/runtime.js
var zt = Object.defineProperty, Bt = (e, t) => {
	let n = {};
	for (var r in e) zt(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || zt(n, Symbol.toStringTag, { value: "Module" }), n;
}, Vt = { root: "_root_af6795" }, Ht = {
	root: "_root_e8b62d",
	title: "_title_e8b62d",
	message: "_message_e8b62d"
}, Ut = { root: "_root_2888f5" }, Wt = {
	root: "_root_bf4ed8",
	placeholder: "_placeholder_bf4ed8"
}, Gt = {
	root: "_root_b736d5",
	label: "_label_b736d5"
}, Kt = { root: "_root_c9b754" }, m = {
	calendarHeader: "_calendarHeader_15d5dc",
	calendarHeaderLevel: "_calendarHeaderLevel_15d5dc",
	weekday: "_weekday_15d5dc",
	day: "_day_15d5dc"
}, qt = { root: "_root_5b99ed" }, Jt = {
	dropdown: "_dropdown_5f0fb8",
	option: "_option_5f0fb8",
	empty: "_empty_5f0fb8",
	groupLabel: "_groupLabel_5f0fb8"
}, h = {
	skeleton: "_skeleton_d553d9",
	divider: "_divider_d553d9",
	dividerLabel: "_dividerLabel_d553d9"
}, g = {
	chipLabel: "_chipLabel_a50dbc",
	themeIcon: "_themeIcon_a50dbc",
	indicator: "_indicator_a50dbc",
	kbd: "_kbd_a50dbc",
	code: "_code_a50dbc",
	blockquote: "_blockquote_a50dbc",
	blockquoteCite: "_blockquoteCite_a50dbc"
}, _ = {
	input: "_input_9f5de7",
	placeholder: "_placeholder_9f5de7",
	label: "_label_9f5de7",
	description: "_description_9f5de7",
	error: "_error_9f5de7",
	required: "_required_9f5de7"
}, Yt = {
	root: "_root_622121",
	label: "_label_622121",
	description: "_description_622121"
}, Xt = {
	root: "_root_7634a5",
	title: "_title_7634a5",
	description: "_description_7634a5"
}, v = {
	dropdown: "_dropdown_c26251",
	drawerContent: "_drawerContent_c26251",
	drawerHeader: "_drawerHeader_c26251",
	drawerTitle: "_drawerTitle_c26251",
	drawerBody: "_drawerBody_c26251"
}, Zt = {
	control: "_control_95a301",
	dots: "_dots_95a301"
}, Qt = { root: "_root_3a64ba" }, $t = {
	root: "_root_5e5cbc",
	remove: "_remove_5e5cbc"
}, y = {
	progressRoot: "_progressRoot_592f61",
	progressSection: "_progressSection_592f61",
	sliderTrack: "_sliderTrack_592f61",
	sliderBar: "_sliderBar_592f61",
	sliderThumb: "_sliderThumb_592f61",
	sliderLabel: "_sliderLabel_592f61",
	sliderMarkLabel: "_sliderMarkLabel_592f61"
}, en = {
	root: "_root_e8b932",
	control: "_control_e8b932",
	label: "_label_e8b932",
	indicator: "_indicator_e8b932"
}, b = {
	accordionItem: "_accordionItem_cdddbc",
	accordionControl: "_accordionControl_cdddbc",
	accordionPanelContent: "_accordionPanelContent_cdddbc",
	stepperStepIcon: "_stepperStepIcon_cdddbc",
	stepperStepLabel: "_stepperStepLabel_cdddbc",
	stepperStepDescription: "_stepperStepDescription_cdddbc",
	stepperSeparator: "_stepperSeparator_cdddbc",
	timelineItemBullet: "_timelineItemBullet_cdddbc",
	timelineItemTitle: "_timelineItemTitle_cdddbc",
	timelineItemBody: "_timelineItemBody_cdddbc",
	breadcrumbsRoot: "_breadcrumbsRoot_cdddbc",
	breadcrumbsSeparator: "_breadcrumbsSeparator_cdddbc"
}, tn = { table: "_table_0f6ee9" }, x = { classNames: _ }, S = {
	classNames: {
		..._,
		...Jt
	},
	defaultProps: { nothingFoundMessage: "No matches found" }
}, nn = {
	nextMonth: "Next month",
	previousMonth: "Previous month",
	nextYear: "Next year",
	previousYear: "Previous year",
	nextDecade: "Next decade",
	previousDecade: "Previous decade",
	monthLevelControl: "Change month",
	yearLevelControl: "Change year"
}, rn = {
	Button: te.extend({
		classNames: Kt,
		defaultProps: { variant: "default" },
		vars: (e, t) => t.variant === "filled" ? { root: { "--button-color": "var(--ask-text-on-brand)" } } : t.variant && t.variant !== "default" ? { root: {} } : { root: {
			"--button-bg": "var(--ask-bg-surface)",
			"--button-hover": "var(--ask-bg-hover)",
			"--button-color": "var(--ask-text-primary)",
			"--button-bd": "1px solid var(--ask-border-brand)"
		} }
	}),
	Anchor: r.extend({ classNames: Ut }),
	ActionIcon: t.extend({
		classNames: Vt,
		defaultProps: { variant: "subtle" }
	}),
	Alert: n.extend({
		classNames: Ht,
		defaultProps: {
			variant: "info",
			radius: "md"
		}
	}),
	SegmentedControl: Ie.extend({
		classNames: en,
		defaultProps: { radius: "md" }
	}),
	Pagination: Ee.extend({
		classNames: Zt,
		defaultProps: {
			radius: "md",
			withEdges: !0,
			getControlProps: (e) => {
				let t = {
					first: "Go to first page",
					previous: "Go to previous page",
					next: "Go to next page",
					last: "Go to last page"
				};
				return t[e] ? { "aria-label": t[e] } : {};
			}
		}
	}),
	NavLink: Se.extend({
		classNames: Yt,
		vars: () => ({
			root: {
				"--nl-bg": "var(--ask-bg-brand-subtle)",
				"--nl-hover": "var(--ask-bg-selected)",
				"--nl-color": "var(--ask-text-link)"
			},
			children: {}
		})
	}),
	Notification: Ce.extend({
		classNames: Xt,
		defaultProps: {
			radius: "md",
			withBorder: !0
		}
	}),
	Loader: _e.extend({ defaultProps: {
		color: "brand.6",
		type: "oval"
	} }),
	Skeleton: Re.extend({
		classNames: { root: h.skeleton },
		defaultProps: { radius: "xs" }
	}),
	Divider: ue.extend({ classNames: {
		root: h.divider,
		label: h.dividerLabel
	} }),
	Badge: o.extend({
		classNames: Gt,
		defaultProps: { variant: "company" }
	}),
	Paper: De.extend({
		classNames: Qt,
		defaultProps: {
			radius: "lg",
			shadow: "sm",
			withBorder: !0
		}
	}),
	Card: ne.extend({
		classNames: qt,
		defaultProps: {
			radius: "lg",
			shadow: "sm",
			withBorder: !0
		}
	}),
	Avatar: a.extend({ classNames: Wt }),
	Table: u.extend({
		classNames: tn,
		defaultProps: {
			withTableBorder: !1,
			withColumnBorders: !1,
			withRowBorders: !1
		}
	}),
	TextInput: Ke.extend(x),
	Textarea: qe.extend(x),
	PasswordInput: Oe.extend(x),
	NumberInput: we.extend(x),
	Select: Le.extend(S),
	MultiSelect: be.extend(S),
	NativeSelect: xe.extend(x),
	Combobox: ce.extend({ classNames: Jt }),
	Pill: ke.extend({ classNames: $t }),
	PillsInput: Ae.extend(x),
	Checkbox: ie.extend({ defaultProps: { radius: "xs" } }),
	Radio: Ne.extend({}),
	Switch: Ue.extend({}),
	Modal: ye.extend({ defaultProps: {
		radius: "xl",
		centered: !0,
		overlayProps: {
			backgroundOpacity: .55,
			blur: 2
		},
		returnFocus: !0,
		transitionProps: {
			duration: 200,
			transition: "pop"
		}
	} }),
	Tooltip: Ze.extend({ defaultProps: {
		radius: "sm",
		withArrow: !0,
		openDelay: 200,
		events: {
			hover: !0,
			focus: !0,
			touch: !0
		}
	} }),
	Menu: ve.extend({ defaultProps: {
		radius: "md",
		shadow: "md"
	} }),
	Tabs: We.extend({ defaultProps: { keepMounted: !1 } }),
	Container: le.extend({ defaultProps: { size: "xl" } }),
	Autocomplete: i.extend(S),
	TagsInput: Ge.extend(S),
	FileInput: pe.extend(x),
	ColorInput: se.extend(x),
	JsonInput: he.extend(x),
	Fieldset: fe.extend({ defaultProps: { radius: "md" } }),
	DatePicker: rt.extend({
		classNames: m,
		defaultProps: { ariaLabels: nn }
	}),
	DatePickerInput: it.extend({
		classNames: {
			..._,
			...m
		},
		defaultProps: { ariaLabels: nn }
	}),
	MonthPickerInput: at.extend({
		classNames: {
			..._,
			...m
		},
		defaultProps: { ariaLabels: nn }
	}),
	DateInput: nt.extend({ classNames: {
		..._,
		...m
	} }),
	Popover: je.extend({
		classNames: { dropdown: v.dropdown },
		defaultProps: {
			radius: "md",
			shadow: "md",
			withinPortal: !0
		}
	}),
	Drawer: de.extend({
		classNames: {
			content: v.drawerContent,
			header: v.drawerHeader,
			title: v.drawerTitle,
			body: v.drawerBody
		},
		defaultProps: {
			returnFocus: !0,
			overlayProps: {
				backgroundOpacity: .55,
				blur: 2
			}
		}
	}),
	Overlay: Te.extend({ defaultProps: {
		backgroundOpacity: .55,
		blur: 2
	} }),
	Progress: Me.extend({ classNames: {
		root: y.progressRoot,
		section: y.progressSection
	} }),
	Slider: ze.extend({
		defaultProps: { thumbLabel: "Value" },
		classNames: {
			track: y.sliderTrack,
			bar: y.sliderBar,
			thumb: y.sliderThumb,
			label: y.sliderLabel,
			markLabel: y.sliderMarkLabel
		}
	}),
	RingProgress: Fe.extend({ defaultProps: {
		thickness: 8,
		roundCaps: !0
	} }),
	Rating: Pe.extend({ defaultProps: { color: "caution.5" } }),
	Accordion: e.extend({ classNames: {
		item: b.accordionItem,
		control: b.accordionControl,
		content: b.accordionPanelContent
	} }),
	Stepper: He.extend({ classNames: {
		stepIcon: b.stepperStepIcon,
		stepLabel: b.stepperStepLabel,
		stepDescription: b.stepperStepDescription,
		separator: b.stepperSeparator
	} }),
	Timeline: Ye.extend({ classNames: {
		itemBullet: b.timelineItemBullet,
		itemTitle: b.timelineItemTitle,
		itemBody: b.timelineItemBody
	} }),
	Breadcrumbs: ee.extend({ classNames: {
		root: b.breadcrumbsRoot,
		separator: b.breadcrumbsSeparator
	} }),
	Spoiler: Be.extend({}),
	Tree: Qe.extend({}),
	Burger: c.extend({ defaultProps: { size: "sm" } }),
	Chip: ae.extend({
		classNames: { label: g.chipLabel },
		vars: () => ({ root: {
			"--chip-color": "var(--ask-text-link)",
			"--chip-hover": "var(--ask-bg-selected)"
		} })
	}),
	ThemeIcon: Je.extend({ classNames: { root: g.themeIcon } }),
	Indicator: me.extend({ classNames: { indicator: g.indicator } }),
	Kbd: ge.extend({ classNames: { root: g.kbd } }),
	Code: oe.extend({ classNames: { root: g.code } }),
	Blockquote: s.extend({ classNames: {
		root: g.blockquote,
		cite: g.blockquoteCite
	} })
}, an = /* @__PURE__ */ Bt({
	ICON_RULES: () => Sn,
	amber: () => O,
	blue: () => C,
	borderWidth: () => N,
	breakpoint: () => I,
	chartCategorical: () => L,
	chartDiverging: () => yn,
	chartMark: () => z,
	chartSequential: () => vn,
	chartSurface: () => R,
	container: () => gn,
	controlHeight: () => F,
	duration: () => pn,
	easing: () => mn,
	focusRing: () => _n,
	fontSize: () => k,
	fontWeight: () => cn,
	green: () => E,
	iconSize: () => bn,
	iconStroke: () => xn,
	ink: () => T,
	letterSpacing: () => ln,
	lineHeight: () => A,
	minTargetAA: () => fn,
	minTouchTarget: () => dn,
	neutral: () => w,
	numeric: () => un,
	radius: () => M,
	red: () => D,
	semanticDark: () => sn,
	semanticLight: () => on,
	shadow: () => P,
	space: () => j,
	zIndex: () => hn
}), C = [
	"#f0f7ff",
	"#e0efff",
	"#b8dcff",
	"#8ac6ff",
	"#5cb0ff",
	"#349bff",
	"#1485ff",
	"#0a6fdb",
	"#0759b0",
	"#044386"
], w = [
	"#f8fafc",
	"#f1f5f9",
	"#e8edf3",
	"#cbd5e1",
	"#94a3b8",
	"#64748b",
	"#475569",
	"#334155",
	"#1e293b",
	"#0f172a"
], T = "#0a0a0a", E = [
	"#f0fdf4",
	"#dcfce7",
	"#bbf7d0",
	"#86efac",
	"#4ade80",
	"#22c55e",
	"#16a34a",
	"#15803d",
	"#166534",
	"#14532d"
], D = [
	"#fef2f2",
	"#fee2e2",
	"#fecaca",
	"#fca5a5",
	"#f87171",
	"#ef4444",
	"#dc2626",
	"#b91c1c",
	"#991b1b",
	"#7f1d1d"
], O = [
	"#fffbeb",
	"#ffedbf",
	"#fde68a",
	"#fcd34d",
	"#fbbf24",
	"#f59e0b",
	"#b45309",
	"#8c6500",
	"#78350f",
	"#6b2d0a"
], on = {
	"text-primary": T,
	"text-secondary": w[7],
	"text-tertiary": w[6],
	"text-disabled": w[4],
	"text-link": C[7],
	"text-link-hover": C[8],
	"text-inverse": "#ffffff",
	"text-on-brand": "#ffffff",
	"bg-page": "#ffffff",
	"bg-surface": "#ffffff",
	"bg-subtle": w[0],
	"bg-muted": w[1],
	"bg-brand-subtle": C[0],
	"bg-brand": C[6],
	"bg-hover": C[0],
	"bg-selected": C[1],
	"border-subtle": w[2],
	"border-default": w[3],
	"border-strong": w[5],
	"border-brand": C[6],
	"border-focus": C[7],
	"positive-text": E[7],
	"positive-bg": E[1],
	"positive-border": E[6],
	"negative-text": D[7],
	"negative-bg": D[1],
	"negative-border": D[6],
	"warning-text": O[7],
	"warning-bg": O[1],
	"warning-border": O[6],
	"neutral-text": w[6],
	"neutral-bg": w[1],
	"neutral-border": w[3],
	"logo-wordmark": "#1F2630"
}, sn = {
	"text-primary": "#f8fafc",
	"text-secondary": "#cbd5e1",
	"text-tertiary": "#94a3b8",
	"text-disabled": "#475569",
	"text-link": "#5cb0ff",
	"text-link-hover": "#8ac6ff",
	"text-inverse": T,
	"text-on-brand": "#ffffff",
	"bg-page": "#0b1220",
	"bg-surface": "#111a2b",
	"bg-subtle": "#0f172a",
	"bg-muted": "#1e293b",
	"bg-brand-subtle": "#0e2744",
	"bg-brand": C[6],
	"bg-hover": "#16233a",
	"bg-selected": "#1b2b47",
	"border-subtle": "#1e293b",
	"border-default": "#334155",
	"border-strong": "#64748b",
	"border-brand": C[5],
	"border-focus": "#5cb0ff",
	"positive-text": "#4ade80",
	"positive-bg": "#052e16",
	"positive-border": "#166534",
	"negative-text": "#f87171",
	"negative-bg": "#450a0a",
	"negative-border": "#991b1b",
	"warning-text": "#fbbf24",
	"warning-bg": "#3d2b04",
	"warning-border": "#78350f",
	"neutral-text": "#94a3b8",
	"neutral-bg": "#1e293b",
	"neutral-border": "#334155",
	"logo-wordmark": "#ffffff"
}, k = {
	"2xs": "12px",
	xs: "14px",
	sm: "16px",
	md: "18px",
	lg: "20px",
	xl: "24px",
	"2xl": "30px",
	"3xl": "36px",
	"4xl": "48px"
}, A = {
	tight: "1.1",
	snug: "1.25",
	normal: "1.4",
	relaxed: "1.5"
}, cn = {
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700
}, ln = {
	tighter: "-0.02em",
	tight: "-0.01em",
	normal: "0",
	wide: "0.04em"
}, un = {
	tabular: "tabular-nums",
	proportional: "proportional-nums"
}, j = {
	0: "0px",
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	8: "32px",
	10: "40px",
	12: "48px",
	16: "64px",
	20: "80px",
	24: "96px"
}, M = {
	xs: "4px",
	sm: "6px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	full: "9999px"
}, N = {
	none: "0",
	thin: "1px",
	thick: "2px"
}, P = {
	none: "none",
	xs: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
	sm: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 6px 24px 0 rgba(15, 23, 42, 0.03)",
	md: "0 4px 8px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
	lg: "0 12px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.04)",
	xl: "0 24px 32px -8px rgba(15, 23, 42, 0.12), 0 8px 12px -6px rgba(15, 23, 42, 0.06)"
}, F = {
	xs: "28px",
	sm: "32px",
	md: "40px",
	lg: "48px"
}, dn = "44px", fn = "24px", pn = {
	instant: "0ms",
	fast: "120ms",
	base: "200ms",
	slow: "320ms"
}, mn = {
	standard: "cubic-bezier(0.2, 0, 0, 1)",
	decelerate: "cubic-bezier(0, 0, 0, 1)",
	accelerate: "cubic-bezier(0.3, 0, 1, 1)"
}, hn = {
	base: 0,
	raised: 10,
	sticky: 1100,
	overlay: 1200,
	modal: 1300,
	popover: 1400,
	toast: 1500,
	tooltip: 1600
}, I = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px"
}, gn = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	content: "1280px",
	prose: "68ch"
}, _n = {
	width: N.thick,
	offset: "2px"
}, L = [
	"#1485ff",
	"#ea580c",
	"#0d9488",
	"#9333ea",
	"#a16207",
	"#0891b2",
	"#db2777",
	"#4d7c0f"
], vn = [
	"#5cb0ff",
	"#1485ff",
	"#0759b0",
	"#044386"
], yn = {
	market: {
		negative: [
			"#f87171",
			"#dc2626",
			"#b91c1c"
		],
		neutral: "#e8edf3",
		positive: [
			"#22c55e",
			"#16a34a",
			"#15803d"
		],
		cvdSafe: !1
	},
	accessible: {
		negative: [
			"#fb923c",
			"#ea580c",
			"#c2410c"
		],
		neutral: "#e8edf3",
		positive: [
			"#5cb0ff",
			"#1485ff",
			"#0759b0"
		],
		cvdSafe: !0
	}
}, R = {
	light: {
		surface: "#ffffff",
		grid: "#e8edf3",
		axis: "#cbd5e1",
		axisLabel: "#475569",
		crosshair: "#64748b",
		tooltipBg: "#ffffff",
		tooltipBorder: "#cbd5e1"
	},
	dark: {
		surface: "#111a2b",
		grid: "#1e293b",
		axis: "#334155",
		axisLabel: "#94a3b8",
		crosshair: "#64748b",
		tooltipBg: "#1e293b",
		tooltipBorder: "#334155"
	}
}, z = {
	lineWidth: 2,
	markerSize: 8,
	barRadius: 4,
	seriesGap: 2,
	areaOpacity: .12
}, bn = {
	xs: 14,
	sm: 16,
	md: 20,
	lg: 24,
	xl: 32,
	"2xl": 48
}, xn = {
	default: 1.5,
	small: 1.75
}, Sn = {
	noEmoji: !0,
	decorativeIsAriaHidden: !0,
	iconOnlyNeedsLabel: !0
}, Cn = C, wn = w, Tn = E, En = D, Dn = O, On = { ...on }, kn = { ...sn }, An = $e({
	primaryColor: "brand",
	primaryShade: 6,
	colors: {
		brand: Cn,
		gray: wn,
		positive: Tn,
		negative: En,
		caution: Dn
	},
	fontFamily: "'Lato', sans-serif",
	fontFamilyMonospace: "ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, Consolas, monospace",
	headings: {
		fontFamily: "'Lato', sans-serif",
		sizes: {
			h1: {
				fontSize: k["3xl"],
				fontWeight: "700",
				lineHeight: A.tight
			},
			h2: {
				fontSize: k["2xl"],
				fontWeight: "700",
				lineHeight: A.snug
			},
			h3: {
				fontSize: k.xl,
				fontWeight: "600",
				lineHeight: A.snug
			},
			h4: {
				fontSize: k.lg,
				fontWeight: "600",
				lineHeight: A.snug
			},
			h5: {
				fontSize: k.md,
				fontWeight: "600",
				lineHeight: A.normal
			},
			h6: {
				fontSize: k.sm,
				fontWeight: "700",
				lineHeight: A.normal
			}
		}
	},
	fontSizes: {
		xs: k["2xs"],
		sm: k.xs,
		md: k.sm,
		lg: k.md,
		xl: k.lg
	},
	lineHeights: {
		xs: A.normal,
		sm: A.normal,
		md: A.relaxed,
		lg: A.relaxed,
		xl: A.snug
	},
	spacing: {
		xs: j[1],
		sm: j[2],
		md: j[3],
		lg: j[4],
		xl: j[6]
	},
	radius: {
		xs: M.xs,
		sm: M.sm,
		md: M.md,
		lg: M.lg,
		xl: M.xl
	},
	defaultRadius: "md",
	shadows: {
		xs: P.xs,
		sm: P.sm,
		md: P.md,
		lg: P.lg,
		xl: P.xl
	},
	breakpoints: {
		xs: I.sm,
		sm: I.md,
		md: I.lg,
		lg: I.xl,
		xl: I["2xl"]
	},
	black: T,
	white: "#ffffff",
	respectReducedMotion: !0,
	components: rn,
	other: {
		space: j,
		radius: M,
		borderWidth: N,
		controlHeight: F,
		duration: pn,
		easing: mn,
		zIndex: hn,
		container: gn,
		fontWeight: cn,
		letterSpacing: ln,
		minTouchTarget: dn
	}
}), jn = () => {
	let e = {};
	for (let [t, n] of Object.entries(j)) e[`--ask-space-${t}`] = n;
	for (let [t, n] of Object.entries(M)) e[`--ask-radius-${t}`] = n;
	for (let [t, n] of Object.entries(N)) e[`--ask-border-${t}`] = n;
	for (let [t, n] of Object.entries(F)) e[`--ask-control-${t}`] = n;
	for (let [t, n] of Object.entries(pn)) e[`--ask-duration-${t}`] = n;
	for (let [t, n] of Object.entries(mn)) e[`--ask-ease-${t}`] = n;
	for (let [t, n] of Object.entries(hn)) e[`--ask-z-${t}`] = String(n);
	for (let [t, n] of Object.entries(k)) e[`--ask-font-${t}`] = n;
	for (let [t, n] of Object.entries(A)) e[`--ask-leading-${t}`] = n;
	for (let [t, n] of Object.entries(gn)) e[`--ask-container-${t}`] = n;
	e["--ask-focus-width"] = _n.width, e["--ask-focus-offset"] = _n.offset, e["--ask-touch-target"] = dn;
	let t = (e) => Object.fromEntries(Object.entries(e).map(([e, t]) => [`--ask-${e}`, t])), n = (e) => Object.fromEntries(Object.entries(R[e]).map(([e, t]) => [`--ask-chart-${e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())}`, t]));
	return {
		variables: e,
		light: {
			...t(On),
			...n("light")
		},
		dark: {
			...t(kn),
			...n("dark")
		}
	};
}, B = {
	price: 2,
	index: 2,
	percent: 2,
	change: 2,
	ratio: 2,
	volume: 0,
	shares: 0,
	currency: 2
}, Mn = "—", V = "en-US", H = (e) => e == null || typeof e == "number" && !Number.isFinite(e);
function U(e, t, n) {
	return t ? n === "parens" ? `(${e})` : `-${e}` : e;
}
function W(e, t = {}) {
	if (H(e)) return "—";
	let { decimals: n = 2, signStyle: r = "minus" } = t;
	return U(new Intl.NumberFormat(V, {
		minimumFractionDigits: n,
		maximumFractionDigits: n
	}).format(Math.abs(e)), e < 0, r);
}
var Nn = [
	{
		limit: 0xe8d4a51000,
		suffix: "T"
	},
	{
		limit: 1e9,
		suffix: "B"
	},
	{
		limit: 1e6,
		suffix: "M"
	},
	{
		limit: 1e3,
		suffix: "K"
	}
];
function Pn(e, t = {}) {
	if (H(e)) return "—";
	let { decimals: n = 2, threshold: r = 1e6, signStyle: i = "minus" } = t, a = Math.abs(e);
	if (a < r) return U(new Intl.NumberFormat(V, { maximumFractionDigits: 0 }).format(a), e < 0, i);
	let o = Nn.find((e) => a >= e.limit);
	if (!o) return W(e, {
		decimals: n,
		signStyle: i
	});
	let s = a / o.limit;
	return U(`${new Intl.NumberFormat(V, {
		minimumFractionDigits: n,
		maximumFractionDigits: n
	}).format(s)}${o.suffix}`, e < 0, i);
}
function Fn(e, t = {}) {
	if (H(e)) return "—";
	let { decimals: n = B.percent, signStyle: r = "parens", showPlus: i = !1 } = t, a = new Intl.NumberFormat(V, {
		minimumFractionDigits: n,
		maximumFractionDigits: n
	}).format(Math.abs(e));
	return e > 0 && i ? `+${a}%` : `${U(a, e < 0, r)}%`;
}
var In = (e) => W(e, { decimals: B.price }), Ln = (e) => Pn(e, {
	decimals: B.price,
	threshold: 1e6
}), Rn = (e) => H(e) ? "—" : `Rs ${Pn(e, {
	decimals: 2,
	threshold: 1e6
})}`, zn = (e) => W(e, {
	decimals: B.change,
	signStyle: "minus"
});
function Bn(e) {
	return H(e) || e === 0 ? "flat" : e > 0 ? "up" : "down";
}
var Vn = {
	up: "▲",
	down: "▼",
	flat: "–"
}, Hn = {
	up: "up",
	down: "down",
	flat: "unchanged"
}, Un = {
	up: "var(--ask-positive-text)",
	down: "var(--ask-negative-text)",
	flat: "var(--ask-text-tertiary)"
};
function Wn(e, t = "Asia/Karachi") {
	return e ? new Intl.DateTimeFormat(V, {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: t,
		timeZoneName: "short"
	}).format(e) : "—";
}
function Gn(e, t = "Asia/Karachi") {
	return e ? new Intl.DateTimeFormat(V, {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: t
	}).format(e) : "—";
}
//#endregion
//#region src/lib/icons.tsx
function G(e, t) {
	function n({ size: t = "sm", label: n, color: r, className: i }) {
		let a = bn[t];
		return /* @__PURE__ */ f(e, {
			size: a,
			stroke: a <= bn.xs ? xn.small : xn.default,
			color: r ?? "currentColor",
			className: i,
			"aria-hidden": !n || void 0,
			focusable: !1,
			role: n ? "img" : void 0,
			"aria-label": n
		});
	}
	return n.displayName = t, n;
}
var K = {
	up: G(dt, "IconUp"),
	down: G(ut, "IconDown"),
	flat: G(St, "IconFlat"),
	search: G(Tt, "IconSearch"),
	filter: G(bt, "IconFilter"),
	sort: G(st, "IconSort"),
	sortAsc: G(Et, "IconSortAsc"),
	sortDesc: G(Dt, "IconSortDesc"),
	download: G(gt, "IconDownload"),
	refresh: G(wt, "IconRefresh"),
	close: G(Nt, "IconClose"),
	check: G(pt, "IconCheck"),
	externalLink: G(_t, "IconExternalLink"),
	star: G(Ot, "IconStar"),
	starFilled: G(kt, "IconStarFilled"),
	chevronDown: G(mt, "IconChevronDown"),
	chevronRight: G(ht, "IconChevronRight"),
	info: G(xt, "IconInfo"),
	warning: G(ot, "IconWarning"),
	sun: G(At, "IconSun"),
	moon: G(Ct, "IconMoon"),
	directionLtr: G(jt, "IconDirectionLtr"),
	directionRtl: G(Mt, "IconDirectionRtl"),
	chart: G(ft, "IconChart"),
	report: G(yt, "IconReport"),
	calendar: G(lt, "IconCalendar"),
	watch: G(vt, "IconWatch"),
	alerts: G(ct, "IconAlerts")
}, Kn = {
	up: K.up,
	down: K.down,
	flat: K.flat
};
//#endregion
//#region src/lib/chart.ts
function qn(e) {
	let t = new Map(e.map((e, t) => [e, t]));
	return {
		colorFor(e) {
			let n = t.get(e);
			return n === void 0 || n >= L.length ? "var(--ask-text-tertiary)" : L[n];
		},
		get overflows() {
			return e.length > L.length;
		},
		max: L.length
	};
}
function Jn(e, t = "market") {
	if (e == null || e === 0) return "var(--ask-text-tertiary)";
	let n = yn[t];
	return e > 0 ? n.positive[2] : n.negative[2];
}
var Yn = {
	strokeWidth: z.lineWidth,
	dotSize: z.markerSize,
	fillOpacity: z.areaOpacity,
	barRadius: z.barRadius
};
function Xn(e) {
	let t = new Set(e);
	if (t.size > 1) throw Error(`Dual-axis chart refused: series span ${t.size} units (${[...t].join(", ")}). Use small multiples, or index the series to a common base.`);
}
//#endregion
//#region src/lib/googleChartTheme.ts
function Zn(e, t = 64, n = 16) {
	return {
		...e === "rtl" ? {
			left: n,
			right: t
		} : {
			left: t,
			right: n
		},
		top: 16,
		bottom: 40,
		width: "100%",
		height: "100%"
	};
}
var q = (e) => parseFloat(e);
function J(e, t = "ltr") {
	let n = R[e];
	return {
		backgroundColor: "transparent",
		colors: [...L],
		fontName: "Lato",
		fontSize: q(k["2xs"]),
		chartArea: Zn(t),
		hAxis: {
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: q(k["2xs"])
			},
			gridlines: { color: "transparent" },
			baselineColor: n.axis
		},
		vAxis: {
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: q(k["2xs"])
			},
			gridlines: {
				color: n.grid,
				count: 5
			},
			minorGridlines: { count: 0 },
			baselineColor: n.axis
		},
		legend: {
			position: "top",
			alignment: "start",
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: q(k["2xs"])
			}
		},
		tooltip: {
			isHtml: !0,
			trigger: "focus"
		},
		animation: { duration: 0 }
	};
}
function Qn(e, t = "ltr", n = {}) {
	let r = J(e, t);
	return {
		...r,
		lineWidth: z.lineWidth,
		pointSize: 0,
		curveType: n.curve ? "function" : void 0,
		vAxis: {
			...r.vAxis,
			viewWindowMode: "pretty"
		},
		legend: {
			...r.legend,
			position: "none"
		}
	};
}
function $n(e, t = "ltr") {
	return {
		...Qn(e, t),
		areaOpacity: z.areaOpacity
	};
}
function er(e, t = "ltr") {
	let n = J(e, t);
	return {
		...n,
		bar: { groupWidth: "62%" },
		vAxis: {
			...n.vAxis,
			minValue: 0
		},
		legend: {
			...n.legend,
			position: "none"
		}
	};
}
function tr(e, t = "ltr", n = !0) {
	let r = J(e, t);
	return {
		...r,
		pieHole: n ? .6 : 0,
		pieSliceBorderColor: R[e].surface,
		pieSliceText: "none",
		legend: {
			...r.legend,
			position: t === "rtl" ? "left" : "right"
		},
		chartArea: {
			...Zn(t, 8, 8),
			top: 8,
			bottom: 8
		}
	};
}
var nr = M.md, Y = "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif", X = {
	brand: C[6],
	brandTint: C[0],
	link: C[7],
	textPrimary: T,
	textSecondary: w[7],
	textTertiary: w[6],
	border: w[2],
	surface: "#ffffff",
	positive: E[7],
	negative: D[7],
	warning: O[7],
	onBrand: on["text-on-brand"]
}, Z = {
	bodyText: 16,
	smallText: 14,
	label: 12,
	h1: 28,
	h2: 22,
	h3: 18,
	lineHeightBody: 24,
	lineHeightTight: 22,
	cellPaddingY: 8,
	cellPaddingX: 12,
	contentWidth: 600
}, rr = {
	body: `margin:0;padding:0;background-color:${X.surface};font-family:${Y};font-size:${Z.bodyText}px;line-height:${Z.lineHeightBody}px;color:${X.textPrimary};`,
	container: `width:100%;max-width:${Z.contentWidth}px;margin:0 auto;`,
	h1: `margin:0 0 16px;font-family:${Y};font-size:${Z.h1}px;line-height:34px;font-weight:700;color:${X.textPrimary};`,
	h2: `margin:24px 0 8px;font-family:${Y};font-size:${Z.h2}px;line-height:28px;font-weight:700;color:${X.textPrimary};`,
	paragraph: `margin:0 0 16px;font-size:${Z.bodyText}px;line-height:${Z.lineHeightBody}px;color:${X.textSecondary};`,
	link: `color:${X.link};text-decoration:underline;`,
	tableHeaderCell: `padding:${Z.cellPaddingY}px ${Z.cellPaddingX}px;background-color:${X.brandTint};border-bottom:2px solid ${X.brand};font-size:${Z.label}px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${X.textSecondary};text-align:left;`,
	tableCell: `padding:${Z.cellPaddingY}px ${Z.cellPaddingX}px;border-bottom:1px solid ${X.brand};font-size:${Z.smallText}px;color:${X.textPrimary};`,
	tableCellNumeric: `padding:${Z.cellPaddingY}px ${Z.cellPaddingX}px;border-bottom:1px solid ${X.brand};font-size:${Z.smallText}px;color:${X.textPrimary};text-align:right;`,
	positive: `color:${X.positive};font-weight:700;`,
	negative: `color:${X.negative};font-weight:700;`,
	button: `display:inline-block;padding:12px 20px;background-color:${X.brand};border-radius:8px;color:${X.onBrand};font-size:14px;font-weight:700;text-decoration:none;`,
	meta: `font-size:${Z.label}px;color:${X.textTertiary};`
}, ir = {
	up: {
		glyph: "▲",
		word: "up",
		color: X.positive
	},
	down: {
		glyph: "▼",
		word: "down",
		color: X.negative
	},
	flat: {
		glyph: "–",
		word: "unchanged",
		color: X.textTertiary
	}
};
//#endregion
//#region src/components/Logo.tsx
function ar({ height: e = 32, title: t = "Ask Analyst", className: n }) {
	let r = Ft();
	return /* @__PURE__ */ p("svg", {
		viewBox: "0 0 273 105",
		height: e,
		width: 273 / 105 * e,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		role: t ? "img" : void 0,
		"aria-label": t ?? void 0,
		"aria-hidden": !t || void 0,
		focusable: "false",
		className: n,
		style: { color: "var(--ask-logo-wordmark)" },
		children: [
			/* @__PURE__ */ f("path", {
				d: "M107.202 38.7237L118.404 2.93158H125.742L136.971 38.7237H132.266L122.438 6.06999H121.735L111.907 38.7237H107.202ZM113.924 28.1653V24.3178H130.221V28.1653H113.924Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M149.178 39.3394C147.232 39.371 145.291 39.1305 143.412 38.6249C142.003 38.2377 140.634 37.7168 139.323 37.0694L138.9 32.8702C140.343 33.6121 141.847 34.2299 143.396 34.717C145.195 35.264 147.067 35.5291 148.947 35.503C151.058 35.503 152.646 35.1658 153.712 34.4916C154.225 34.1836 154.643 33.7422 154.924 33.2146C155.205 32.687 155.337 32.093 155.306 31.4961V31.1883C155.335 30.4332 155.124 29.6883 154.702 29.0613C154.129 28.3779 153.38 27.8646 152.536 27.5772C151.086 27.031 149.596 26.5991 148.079 26.2856C146.201 25.9239 144.377 25.3274 142.648 24.5103C141.472 23.9566 140.485 23.0674 139.812 21.9545C139.212 20.8164 138.918 19.5415 138.96 18.2555V18.0026C138.96 15.6172 139.79 13.8071 141.45 12.5723C143.11 11.3374 145.609 10.7291 148.947 10.7475C150.836 10.7124 152.72 10.9569 154.537 11.473C155.888 11.8706 157.188 12.4239 158.412 13.1219L158.835 16.9693C157.52 16.2174 156.119 15.6251 154.663 15.205C152.942 14.7165 151.159 14.4796 149.37 14.5015C148.206 14.4692 147.044 14.6157 145.924 14.9357C145.177 15.1392 144.512 15.5717 144.022 16.1724C143.633 16.7222 143.432 17.3838 143.451 18.0576V18.2774C143.425 19.0178 143.631 19.7478 144.039 20.3661C144.589 21.0493 145.32 21.5636 146.149 21.8501C147.525 22.3663 148.94 22.7689 150.382 23.0538C152.295 23.3805 154.162 23.934 155.944 24.7027C157.152 25.2183 158.179 26.0811 158.895 27.1815C159.537 28.3592 159.847 29.689 159.791 31.0289V31.5016C159.791 34.0666 158.895 36.0086 157.104 37.3277C155.312 38.6469 152.67 39.3174 149.178 39.3394Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M163.936 38.7238V1.61807H168.443V38.7238H163.936ZM181.689 38.7238L170.883 25.9778H167.998V22.4492H170.883L181.244 11.3906H186.619L174.23 24.5818V23.4825L187.141 38.7183L181.689 38.7238Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M107.202 80.2486L118.404 44.4894H125.742L136.971 80.2761H132.266L122.438 47.6278H121.735L111.907 80.2761L107.202 80.2486ZM113.924 69.6956V65.8482H130.221V69.6956H113.924Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M140.637 80.2487V52.9209H145.177L144.979 59.4725L145.177 59.7254V80.2487H140.637ZM158.923 80.2487V63.254C158.953 61.9587 158.75 60.6685 158.324 59.445C157.958 58.4264 157.269 57.5556 156.362 56.9662C155.235 56.3213 153.947 56.0141 152.652 56.0813C151.359 56.0507 150.077 56.3296 148.914 56.8947C147.893 57.4068 147.014 58.1618 146.353 59.0933C145.687 60.0395 145.219 61.1109 144.979 62.2427L144.165 59.0218H145.144C145.439 57.8041 145.974 56.6571 146.715 55.6471C147.501 54.5999 148.534 53.7634 149.722 53.2122C151.181 52.5676 152.766 52.2577 154.361 52.3053C156.191 52.2218 158.008 52.6481 159.61 53.5365C160.947 54.3626 161.975 55.6067 162.534 57.0761C163.198 58.8914 163.513 60.816 163.463 62.7483V80.2487H158.923Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M175.879 80.8367C173.171 80.8367 171.094 80.1789 169.646 78.8635C168.201 77.5499 167.475 75.6646 167.475 73.2243V72.4108C167.475 69.8898 168.256 68.0082 169.817 66.7661C171.378 65.5239 173.855 64.661 177.248 64.1773L185.905 62.9461L186.152 66.2439L177.808 67.4476C175.72 67.7444 174.227 68.2537 173.329 68.9756C172.873 69.3637 172.513 69.8531 172.28 70.4046C172.046 70.9562 171.944 71.5547 171.982 72.1525V72.5977C171.945 73.2116 172.046 73.8261 172.276 74.3965C172.506 74.9669 172.86 75.4789 173.312 75.8955C174.203 76.6613 175.533 77.0424 177.303 77.0387C178.691 77.0762 180.07 76.8001 181.337 76.2308C182.407 75.7287 183.339 74.9742 184.052 74.0322C184.739 73.1316 185.218 72.0897 185.454 70.9818L186.152 74.0597H185.283C185.024 75.2593 184.525 76.3941 183.816 77.396C183.043 78.4686 182.005 79.3227 180.804 79.8748C179.255 80.5592 177.572 80.8879 175.879 80.8367ZM185.283 80.2486L185.498 73.62L185.333 72.9165V64.2048L185.36 62.6053C185.36 60.3848 184.794 58.7359 183.662 57.6586C182.53 56.5814 180.743 56.0482 178.303 56.0592C176.472 56.0381 174.649 56.3223 172.911 56.9001C171.398 57.4067 169.94 58.0641 168.558 58.8623L168.976 55.0149C169.79 54.5317 170.637 54.1056 171.51 53.7398C173.891 52.7468 176.449 52.2475 179.029 52.2722C180.723 52.2329 182.413 52.4724 184.03 52.9813C185.269 53.3651 186.393 54.0515 187.299 54.9785C188.206 55.9055 188.868 57.0439 189.224 58.2907C189.631 59.6715 189.829 61.1054 189.812 62.5449V80.2431L185.283 80.2486Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M195.495 80.2486V43.1484H200.002V80.2486H195.495Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M218.371 76.022L216.002 77.0553L224.181 52.9209H228.858L216.002 89.8837H211.413L215.722 77.3961L217.712 79.1329H212.562L203.625 52.9209H208.308L215.761 76.0055L218.371 76.022Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M240.692 80.8642C238.744 80.898 236.801 80.6575 234.921 80.1497C233.513 79.7657 232.145 79.2466 230.837 78.5997L230.414 74.3951C231.856 75.1411 233.36 75.7608 234.91 76.2473C236.711 76.7929 238.585 77.0562 240.466 77.0278C242.577 77.0278 244.164 76.6925 245.226 76.022C245.74 75.7147 246.159 75.2736 246.441 74.7459C246.723 74.2182 246.856 73.6239 246.826 73.0265V72.7187C246.855 71.9634 246.644 71.2183 246.221 70.5916C245.64 69.9028 244.879 69.389 244.023 69.1076C242.577 68.5553 241.088 68.1233 239.571 67.8159C237.693 67.4551 235.868 66.8586 234.14 66.0406C232.965 65.4937 231.976 64.6124 231.299 63.5068C230.696 62.3692 230.401 61.0943 230.441 59.8078V59.555C230.441 57.1659 231.273 55.3558 232.937 54.1246C234.6 52.8934 237.101 52.2778 240.439 52.2778C242.328 52.2428 244.211 52.4872 246.029 53.0033C247.381 53.3985 248.681 53.952 249.904 54.6522L250.327 58.4997C247.454 56.8349 244.182 55.982 240.862 56.0318C239.698 55.9992 238.536 56.1457 237.416 56.466C236.669 56.6714 236.003 57.1012 235.509 57.6972C235.112 58.2566 234.907 58.9298 234.926 59.6154V59.8408C234.901 60.5803 235.105 61.3094 235.509 61.9294C236.062 62.6112 236.795 63.1252 237.625 63.4134C239.003 63.9369 240.422 64.3433 241.868 64.6281C243.781 64.9641 245.647 65.5288 247.425 66.3099C248.636 66.823 249.665 67.6862 250.382 68.7888C251.024 69.9664 251.333 71.2963 251.278 72.6362V73.0704C251.278 75.6354 250.382 77.5774 248.59 78.8966C246.798 80.2157 244.166 80.8716 240.692 80.8642Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M252.003 56.9497V53.3111H272.109L271.691 56.9497H252.003ZM256.516 53.7618V46.0669L261.078 45.4788L260.88 53.7233L256.516 53.7618ZM265.25 80.8093C263.501 80.88 261.76 80.555 260.154 79.8584C258.905 79.2635 257.91 78.2395 257.351 76.9728C256.73 75.446 256.436 73.8057 256.488 72.158V54.9325H260.968V71.6469C260.968 73.4387 261.375 74.7633 262.199 75.6097C263.024 76.4562 264.398 76.8849 266.343 76.8849C267.413 76.8884 268.479 76.7667 269.52 76.5221C270.513 76.2862 271.476 75.9377 272.389 75.4833L271.972 79.3747C270.995 79.8584 269.96 80.2167 268.894 80.441C267.696 80.6948 266.474 80.8183 265.25 80.8093Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ f("path", {
				d: "M87.3332 69.822C87.0859 79.0449 79.3525 86.9651 70.2011 87.9599C61.6214 88.9108 53.0196 88.2073 44.4288 88.3777C42.8862 88.3538 41.3705 88.7838 40.0703 89.6143C32.6337 94.5061 25.1312 99.2329 17.6562 104.031C14.6497 105.966 11.6597 104.454 11.5663 100.81C11.4618 96.6936 11.4893 92.5659 11.5663 88.4546C11.6249 87.8808 11.5069 87.3027 11.2279 86.7978C10.9489 86.2929 10.5224 85.8853 10.0053 85.6295C3.12939 81.4468 0.216331 74.9391 0.122893 67.2278C-0.0694783 52.1293 -0.00352228 37.0309 0.100908 21.9545C0.166864 13.71 3.45917 7.11437 10.7088 2.71731C13.7843 0.937742 17.2858 0.0277129 20.8386 0.0845626C38.1355 -0.0308604 55.4655 -0.00337858 72.7405 0.0241031C81.3367 0.0241031 87.4212 6.0261 87.5146 14.6444C87.7262 33.0008 87.8207 51.4692 87.3332 69.822ZM17.1066 97.6885C24.5211 92.9011 31.4355 88.4601 38.3059 83.9806C39.7337 82.9984 41.4319 82.4854 43.1647 82.5131C51.0354 82.59 58.9135 82.59 66.7989 82.5131C75.725 82.4141 81.6665 76.9178 81.7654 68.1237C81.9578 51.0081 81.9193 33.887 81.7654 16.7659C81.7105 9.55475 77.5992 5.60288 70.3935 5.5699C54.1848 5.48746 37.9651 5.44349 21.773 5.5699C12.715 5.64136 6.09741 11.7093 5.92702 20.7288C5.62472 36.6682 5.75664 52.6075 5.97649 68.5084C6.05344 74.384 8.84008 78.9515 14.4903 81.3753C16.458 82.2163 17.1725 83.5739 17.1121 85.679C17.0351 89.5044 17.1066 93.3299 17.1066 97.6885Z",
				fill: `url(#${r})`
			}),
			/* @__PURE__ */ f("path", {
				d: "M71.4489 44.2806C71.4489 52.69 71.3774 61.0994 71.4928 69.5088C71.5313 72.0316 70.5585 72.9879 68.1401 72.944C64.573 72.878 60.9948 72.8945 57.4442 72.944C55.4545 72.9769 54.7565 72.1305 54.762 70.1298C54.817 52.7614 54.817 35.393 54.762 18.0246C54.762 15.892 55.6689 15.3259 57.5431 15.3479C61.2037 15.3973 64.8588 15.4303 68.5358 15.3479C70.8058 15.2984 71.5258 16.2987 71.5038 18.5028C71.3884 27.0935 71.4489 35.6953 71.4489 44.2806Z",
				fill: "#0086DB"
			}),
			/* @__PURE__ */ f("path", {
				d: "M34.6509 52.7615C34.6509 47.1882 34.7498 41.6039 34.6069 36.0306C34.541 33.3484 35.6457 32.4415 38.1905 32.5349C41.2959 32.6559 44.4124 32.6229 47.5343 32.5349C49.8427 32.469 51.0245 33.6012 51.0354 35.7668C51.0904 47.1076 51.0904 58.4465 51.0354 69.7836C51.0354 71.7843 50.0516 72.999 47.7981 72.9385C44.4124 72.856 41.0266 72.8341 37.6464 72.9385C35.3269 73.0099 34.6069 71.9382 34.6344 69.7781C34.6948 64.1059 34.6509 58.4337 34.6509 52.7615Z",
				fill: "#09A2F0"
			}),
			/* @__PURE__ */ f("path", {
				d: "M30.7759 60.5058C30.7759 63.7046 30.688 66.909 30.8089 70.1079C30.8859 72.103 30.1549 72.9605 28.1432 72.922C24.7575 72.856 21.3717 72.922 17.986 72.889C15.7874 72.889 14.7157 71.7897 14.7376 69.4593C14.8109 63.1495 14.8109 56.8397 14.7376 50.5299C14.7102 48.3314 15.6555 47.3476 17.8321 47.375C21.0364 47.408 24.2408 47.4135 27.4397 47.375C29.7206 47.3366 30.8199 48.3039 30.7759 50.6728C30.721 53.9706 30.7759 57.2684 30.7759 60.5662V60.5058Z",
				fill: "#0EA4F1"
			}),
			/* @__PURE__ */ f("defs", { children: /* @__PURE__ */ p("linearGradient", {
				id: r,
				x1: "-0.00352228",
				y1: "52.4371",
				x2: "87.5696",
				y2: "52.4371",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ f("stop", { stopColor: "#0EA4F1" }), /* @__PURE__ */ f("stop", {
					offset: "1",
					stopColor: "#0077CA"
				})]
			}) })
		]
	});
}
function or({ height: e = 32, title: t = "Ask Analyst", className: n }) {
	let r = Ft();
	return /* @__PURE__ */ p("svg", {
		viewBox: "0 0 88 105",
		height: e,
		width: 88 / 105 * e,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		role: t ? "img" : void 0,
		"aria-label": t ?? void 0,
		"aria-hidden": !t || void 0,
		focusable: "false",
		className: n,
		children: [
			/* @__PURE__ */ f("path", {
				d: "M87.3332 69.822C87.0859 79.0449 79.3525 86.9651 70.2011 87.9599C61.6214 88.9108 53.0196 88.2073 44.4288 88.3777C42.8862 88.3538 41.3705 88.7838 40.0703 89.6143C32.6337 94.5061 25.1312 99.2329 17.6562 104.031C14.6497 105.966 11.6597 104.454 11.5663 100.81C11.4618 96.6936 11.4893 92.5659 11.5663 88.4546C11.6249 87.8808 11.5069 87.3027 11.2279 86.7978C10.9489 86.2929 10.5224 85.8853 10.0053 85.6295C3.12939 81.4468 0.216331 74.9391 0.122893 67.2278C-0.0694783 52.1293 -0.00352228 37.0309 0.100908 21.9545C0.166864 13.71 3.45917 7.11437 10.7088 2.71731C13.7843 0.937742 17.2858 0.0277129 20.8386 0.0845626C38.1355 -0.0308604 55.4655 -0.00337858 72.7405 0.0241031C81.3367 0.0241031 87.4212 6.0261 87.5146 14.6444C87.7262 33.0008 87.8207 51.4692 87.3332 69.822ZM17.1066 97.6885C24.5211 92.9011 31.4355 88.4601 38.3059 83.9806C39.7337 82.9984 41.4319 82.4854 43.1647 82.5131C51.0354 82.59 58.9135 82.59 66.7989 82.5131C75.725 82.4141 81.6665 76.9178 81.7654 68.1237C81.9578 51.0081 81.9193 33.887 81.7654 16.7659C81.7105 9.55475 77.5992 5.60288 70.3935 5.5699C54.1848 5.48746 37.9651 5.44349 21.773 5.5699C12.715 5.64136 6.09741 11.7093 5.92702 20.7288C5.62472 36.6682 5.75664 52.6075 5.97649 68.5084C6.05344 74.384 8.84008 78.9515 14.4903 81.3753C16.458 82.2163 17.1725 83.5739 17.1121 85.679C17.0351 89.5044 17.1066 93.3299 17.1066 97.6885Z",
				fill: `url(#${r})`
			}),
			/* @__PURE__ */ f("path", {
				d: "M71.4489 44.2806C71.4489 52.69 71.3774 61.0994 71.4928 69.5088C71.5313 72.0316 70.5585 72.9879 68.1401 72.944C64.573 72.878 60.9948 72.8945 57.4442 72.944C55.4545 72.9769 54.7565 72.1305 54.762 70.1298C54.817 52.7614 54.817 35.393 54.762 18.0246C54.762 15.892 55.6689 15.3259 57.5431 15.3479C61.2037 15.3973 64.8588 15.4303 68.5358 15.3479C70.8058 15.2984 71.5258 16.2987 71.5038 18.5028C71.3884 27.0935 71.4489 35.6953 71.4489 44.2806Z",
				fill: "#0086DB"
			}),
			/* @__PURE__ */ f("path", {
				d: "M34.6509 52.7615C34.6509 47.1882 34.7498 41.6039 34.6069 36.0306C34.541 33.3484 35.6457 32.4415 38.1905 32.5349C41.2959 32.6559 44.4124 32.6229 47.5343 32.5349C49.8427 32.469 51.0245 33.6012 51.0354 35.7668C51.0904 47.1076 51.0904 58.4465 51.0354 69.7836C51.0354 71.7843 50.0516 72.999 47.7981 72.9385C44.4124 72.856 41.0266 72.8341 37.6464 72.9385C35.3269 73.0099 34.6069 71.9382 34.6344 69.7781C34.6948 64.1059 34.6509 58.4337 34.6509 52.7615Z",
				fill: "#09A2F0"
			}),
			/* @__PURE__ */ f("path", {
				d: "M30.7759 60.5058C30.7759 63.7046 30.688 66.909 30.8089 70.1079C30.8859 72.103 30.1549 72.9605 28.1432 72.922C24.7575 72.856 21.3717 72.922 17.986 72.889C15.7874 72.889 14.7157 71.7897 14.7376 69.4593C14.8109 63.1495 14.8109 56.8397 14.7376 50.5299C14.7102 48.3314 15.6555 47.3476 17.8321 47.375C21.0364 47.408 24.2408 47.4135 27.4397 47.375C29.7206 47.3366 30.8199 48.3039 30.7759 50.6728C30.721 53.9706 30.7759 57.2684 30.7759 60.5662V60.5058Z",
				fill: "#0EA4F1"
			}),
			/* @__PURE__ */ f("defs", { children: /* @__PURE__ */ p("linearGradient", {
				id: r,
				x1: "-0.00352228",
				y1: "52.4371",
				x2: "87.5696",
				y2: "52.4371",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ f("stop", { stopColor: "#0EA4F1" }), /* @__PURE__ */ f("stop", {
					offset: "1",
					stopColor: "#0077CA"
				})]
			}) })
		]
	});
}
var Q = {
	skipLink: "_skipLink_3087d2",
	header: "_header_3087d2",
	headerInner: "_headerInner_3087d2",
	nav: "_nav_3087d2",
	burger: "_burger_3087d2",
	navItem: "_navItem_3087d2",
	titleSection: "_titleSection_3087d2",
	title: "_title_3087d2",
	meta: "_meta_3087d2",
	metaDot: "_metaDot_3087d2"
}, sr = [
	{
		label: "Market",
		href: "#market"
	},
	{
		label: "Companies",
		href: "#companies"
	},
	{
		label: "Data Bank",
		href: "#data-bank"
	},
	{
		label: "Sector Fundamentals",
		href: "#sectors"
	},
	{
		label: "Economy",
		href: "#economy"
	},
	{
		label: "Media",
		href: "#media"
	},
	{
		label: "Features",
		href: "#features"
	},
	{
		label: "Calculator",
		href: "#calculator"
	},
	{
		label: "Research Report",
		href: "#research"
	}
];
function cr({ items: e = sr, activeHref: t, mainId: n = "main", brand: r, actions: i }) {
	let [a, o] = Lt(!1), s = (e, n) => /* @__PURE__ */ f("a", {
		href: e.href,
		className: Q.navItem,
		"aria-current": e.href === t ? "page" : void 0,
		onClick: n,
		children: e.label
	}, e.href);
	return /* @__PURE__ */ p(Pt, { children: [
		/* @__PURE__ */ f("a", {
			href: `#${n}`,
			className: Q.skipLink,
			children: "Skip to content"
		}),
		/* @__PURE__ */ f("header", {
			className: Q.header,
			children: /* @__PURE__ */ p("div", {
				className: Q.headerInner,
				children: [
					/* @__PURE__ */ f(l, {
						gap: "sm",
						wrap: "nowrap",
						children: r ?? /* @__PURE__ */ f(ar, {
							height: 28,
							title: "Ask Analyst"
						})
					}),
					/* @__PURE__ */ f("nav", {
						"aria-label": "Primary",
						className: Q.nav,
						children: e.map((e) => s(e))
					}),
					/* @__PURE__ */ p(l, {
						gap: "sm",
						wrap: "nowrap",
						children: [i, /* @__PURE__ */ f(c, {
							opened: a,
							onClick: () => o((e) => !e),
							className: Q.burger,
							"aria-label": a ? "Close navigation" : "Open navigation",
							"aria-expanded": a,
							size: "sm"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ f(de, {
			opened: a,
			onClose: () => o(!1),
			title: "Navigation",
			size: "xs",
			position: "right",
			children: /* @__PURE__ */ f("nav", {
				"aria-label": "Primary mobile",
				children: /* @__PURE__ */ f(Ve, {
					gap: "xs",
					children: e.map((e) => s(e, () => o(!1)))
				})
			})
		})
	] });
}
//#endregion
//#region src/components/AskChart.tsx
var lr = {
	Line: "LineChart",
	Area: "AreaChart",
	Bar: "BarChart",
	Column: "ColumnChart",
	Pie: "PieChart",
	Donut: "PieChart"
};
function ur(e, t, n) {
	switch (e) {
		case "Line": return Qn(t, n);
		case "Area": return $n(t, n);
		case "Bar":
		case "Column": return er(t, n);
		case "Pie": return tr(t, n, !1);
		case "Donut": return tr(t, n, !0);
		default: return J(t, n);
	}
}
function dr({ kind: e, data: t, title: n, description: r, height: i = 240, seriesKeys: a, options: o }) {
	let { colorScheme: s } = tt(), { dir: ee } = et(), c = s === "dark" ? "dark" : s === "light" ? "light" : document.documentElement.getAttribute("data-mantine-color-scheme") ?? "light", te = It(() => {
		let t = ur(e, c, ee), n = a ? a.map((e) => qn(a).colorFor(e)) : t.colors;
		return {
			...t,
			colors: n,
			...o ?? {}
		};
	}, [
		e,
		c,
		ee,
		a,
		o
	]), [ne, ...re] = t;
	return /* @__PURE__ */ p("figure", {
		style: { margin: 0 },
		children: [
			/* @__PURE__ */ p("figcaption", { children: [/* @__PURE__ */ f(d, {
				size: "xs",
				fw: 700,
				c: "var(--ask-text-secondary)",
				children: n
			}), r && /* @__PURE__ */ f(d, {
				size: "xs",
				c: "var(--ask-text-tertiary)",
				children: r
			})] }),
			/* @__PURE__ */ f("div", {
				"aria-hidden": "true",
				className: "ask-chart-frame",
				children: /* @__PURE__ */ f(Rt, {
					chartType: lr[e],
					data: t,
					options: te,
					width: "100%",
					height: `${i}px`,
					loader: /* @__PURE__ */ f(Re, {
						height: i,
						radius: "sm"
					})
				})
			}),
			/* @__PURE__ */ p("table", {
				className: "sr-only",
				children: [
					/* @__PURE__ */ f("caption", { children: n }),
					/* @__PURE__ */ f("thead", { children: /* @__PURE__ */ f("tr", { children: ne.map((e, t) => /* @__PURE__ */ f("th", {
						scope: "col",
						children: String(e)
					}, t)) }) }),
					/* @__PURE__ */ f("tbody", { children: re.map((e, t) => /* @__PURE__ */ f("tr", { children: e.map((e, t) => t === 0 ? /* @__PURE__ */ f("th", {
						scope: "row",
						children: String(e)
					}, t) : /* @__PURE__ */ f("td", { children: e === null ? "no data" : String(e) }, t)) }, t)) })
				]
			})
		]
	});
}
var fr = { root: "_root_201721" };
//#endregion
//#region src/components/ColorSchemeToggle.tsx
function pr() {
	let { colorScheme: e, setColorScheme: t } = tt(), n = e === "auto" ? document.documentElement.getAttribute("data-mantine-color-scheme") ?? "light" : e;
	return /* @__PURE__ */ f(Ie, {
		className: fr.root,
		value: n,
		onChange: (e) => t(e),
		"aria-label": "Colour scheme",
		data: [{
			value: "light",
			label: /* @__PURE__ */ p(l, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ f(K.sun, { size: "xs" }), /* @__PURE__ */ f("span", { children: "Light" })]
			})
		}, {
			value: "dark",
			label: /* @__PURE__ */ p(l, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ f(K.moon, { size: "xs" }), /* @__PURE__ */ f("span", { children: "Dark" })]
			})
		}]
	});
}
//#endregion
//#region src/components/DirectionToggle.tsx
function mr() {
	let { dir: e, setDirection: t } = et();
	return /* @__PURE__ */ f(Ie, {
		className: fr.root,
		value: e,
		onChange: (e) => t(e),
		"aria-label": "Text direction",
		data: [{
			value: "ltr",
			label: /* @__PURE__ */ p(l, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ f(K.directionLtr, { size: "xs" }), /* @__PURE__ */ f("span", { children: "LTR" })]
			})
		}, {
			value: "rtl",
			label: /* @__PURE__ */ p(l, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ f(K.directionRtl, { size: "xs" }), /* @__PURE__ */ f("span", { children: "RTL" })]
			})
		}]
	});
}
//#endregion
//#region src/components/DataState.tsx
function hr({ rows: e = 5, cols: t = 5 }) {
	return /* @__PURE__ */ p("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		children: [/* @__PURE__ */ f(d, {
			style: {
				position: "absolute",
				width: 1,
				height: 1,
				overflow: "hidden",
				clip: "rect(0 0 0 0)",
				whiteSpace: "nowrap"
			},
			children: "Loading market data"
		}), /* @__PURE__ */ f(u, {
			"aria-hidden": "true",
			children: /* @__PURE__ */ f(u.Tbody, { children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ f(u.Tr, { children: Array.from({ length: t }).map((e, t) => /* @__PURE__ */ f(u.Td, { children: /* @__PURE__ */ f(Re, {
				height: 14,
				radius: "xs",
				width: t === 0 ? "60%" : "80%"
			}) }, t)) }, n)) })
		})]
	});
}
function gr({ title: e, description: t, action: n }) {
	return /* @__PURE__ */ f(re, {
		py: "xl",
		role: "status",
		children: /* @__PURE__ */ p(Ve, {
			align: "center",
			gap: "sm",
			maw: 360,
			children: [
				/* @__PURE__ */ f(d, {
					fw: 600,
					children: e
				}),
				t && /* @__PURE__ */ f(d, {
					size: "sm",
					c: "var(--ask-text-tertiary)",
					ta: "center",
					children: t
				}),
				n
			]
		})
	});
}
function _r({ title: e = "Could not load data", description: t, onRetry: r }) {
	return /* @__PURE__ */ f(n, {
		role: "alert",
		variant: "error",
		title: e,
		children: /* @__PURE__ */ p(Ve, {
			gap: "sm",
			align: "flex-start",
			children: [t && /* @__PURE__ */ f(d, {
				size: "sm",
				children: t
			}), r && /* @__PURE__ */ f(te, {
				size: "sm",
				onClick: r,
				children: "Try again"
			})]
		})
	});
}
function vr({ asOf: e, delayedMinutes: t }) {
	return /* @__PURE__ */ p(d, {
		size: "xs",
		c: "var(--ask-text-tertiary)",
		role: "status",
		children: [
			t ? `Delayed by ${t} minutes · ` : "",
			"As of ",
			e
		]
	});
}
var $ = {
	scroller: "_scroller_844434",
	stickyHeader: "_stickyHeader_844434",
	"ask-tick-up": "_ask-tick-up_844434",
	"ask-tick-down": "_ask-tick-down_844434",
	stale: "_stale_844434"
};
//#endregion
//#region src/components/MarketTable.tsx
function yr({ rows: e, status: t = "ready", caption: n, stale: r = !1, stickyHeader: i = !1, onRetry: a }) {
	return t === "loading" ? /* @__PURE__ */ f(hr, {
		rows: 5,
		cols: 5
	}) : t === "error" ? /* @__PURE__ */ f(_r, {
		description: "The market feed did not respond. Your connection may be offline.",
		onRetry: a
	}) : t === "empty" || e.length === 0 ? /* @__PURE__ */ f(gr, {
		title: "No matching stocks",
		description: "Try widening your filters, or clear the search to see the full list."
	}) : /* @__PURE__ */ f("div", {
		className: $.scroller,
		children: /* @__PURE__ */ p(u, {
			className: [i && $.stickyHeader, r && $.stale].filter(Boolean).join(" "),
			children: [
				/* @__PURE__ */ p(u.Caption, {
					style: {
						captionSide: "top",
						textAlign: "left",
						paddingBottom: "var(--ask-space-2)",
						color: "var(--ask-text-tertiary)",
						fontSize: "var(--ask-font-2xs)"
					},
					children: [n, r && " · Delayed"]
				}),
				/* @__PURE__ */ f(u.Thead, { children: /* @__PURE__ */ p(u.Tr, { children: [
					/* @__PURE__ */ f(u.Th, {
						scope: "col",
						"data-priority": "1",
						children: "Symbol"
					}),
					/* @__PURE__ */ f(u.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "1",
						children: "Price"
					}),
					/* @__PURE__ */ f(u.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "2",
						children: "Change"
					}),
					/* @__PURE__ */ f(u.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "1",
						children: "%"
					}),
					/* @__PURE__ */ f(u.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "3",
						children: "Volume"
					})
				] }) }),
				/* @__PURE__ */ f(u.Tbody, { children: e.map((e) => {
					let t = Bn(e.changePct), n = Un[t], r = Kn[t];
					return /* @__PURE__ */ p(u.Tr, { children: [
						/* @__PURE__ */ f(u.Th, {
							scope: "row",
							"data-priority": "1",
							children: e.symbol
						}),
						/* @__PURE__ */ f(u.Td, {
							"data-numeric": !0,
							"data-priority": "1",
							"data-tick": e.tick,
							children: In(e.price)
						}),
						/* @__PURE__ */ f(u.Td, {
							"data-numeric": !0,
							"data-priority": "2",
							style: { color: n },
							children: /* @__PURE__ */ p("span", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 4
								},
								children: [
									/* @__PURE__ */ f(r, { size: "xs" }),
									/* @__PURE__ */ p("span", {
										className: "sr-only",
										children: [Hn[t], " "]
									}),
									zn(e.change)
								]
							})
						}),
						/* @__PURE__ */ f(u.Td, {
							"data-numeric": !0,
							"data-priority": "1",
							style: { color: n },
							children: Fn(e.changePct)
						}),
						/* @__PURE__ */ f(u.Td, {
							"data-numeric": !0,
							"data-priority": "3",
							children: Ln(e.volume)
						})
					] }, e.symbol);
				}) })
			]
		})
	});
}
//#endregion
//#region src/components/PageHeading.tsx
function br({ title: e, meta: t = [], centered: n = !1, children: r }) {
	return /* @__PURE__ */ p("div", {
		className: Q.titleSection,
		"data-centered": n || void 0,
		children: [
			/* @__PURE__ */ f(Xe, {
				order: 1,
				className: Q.title,
				children: e
			}),
			t.length > 0 && /* @__PURE__ */ f("div", {
				className: Q.meta,
				children: t.map((e, t) => /* @__PURE__ */ p("span", {
					style: { display: "contents" },
					children: [t > 0 && /* @__PURE__ */ f("span", {
						className: Q.metaDot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ f("span", { children: e })]
				}, t))
			}),
			r
		]
	});
}
//#endregion
export { cr as AppHeader, dr as AskChart, nr as CHART_TOOLTIP_RADIUS, pr as ColorSchemeToggle, Vn as DIRECTION_GLYPH, Kn as DIRECTION_ICON, Hn as DIRECTION_LABEL, Un as DIRECTION_TOKEN, mr as DirectionToggle, ir as EMAIL_DIRECTION, Y as EMAIL_FONT_STACK, gr as EmptyState, _r as ErrorState, K as Icons, ar as Logo, or as LogoMark, yr as MarketTable, sr as NAV_ITEMS, Mn as NOT_AVAILABLE, B as PRECISION, br as PageHeading, vr as StaleNotice, hr as TableSkeleton, $n as areaChartOptions, Xn as assertSingleAxis, er as barChartOptions, J as baseChartOptions, qn as createSeriesPalette, jn as cssVariablesResolver, Bn as direction, Jn as directionColor, X as emailColor, Z as emailSize, rr as emailStyle, zn as formatChange, Pn as formatCompact, Gn as formatDate, Rn as formatMarketCap, W as formatNumber, Fn as formatPercent, In as formatPrice, Wn as formatTime, Ln as formatVolume, Qn as lineChartOptions, G as makeIcon, Yn as markDefaults, tr as pieChartOptions, An as theme, an as tokens };

//# sourceMappingURL=index.js.map