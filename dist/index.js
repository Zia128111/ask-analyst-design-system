"use client";
import { Accordion as e, ActionIcon as t, Alert as n, Anchor as r, Autocomplete as i, Avatar as a, Badge as o, Blockquote as s, Breadcrumbs as c, Burger as l, Button as u, Card as ee, Center as te, Checkbox as ne, Chip as re, Code as ie, ColorInput as ae, Combobox as oe, Container as se, Divider as ce, Drawer as le, Fieldset as ue, FileInput as de, Group as d, Indicator as fe, JsonInput as pe, Kbd as me, Loader as he, Menu as ge, Modal as _e, MultiSelect as ve, NativeSelect as ye, NavLink as be, Notification as xe, NumberInput as Se, Overlay as Ce, Pagination as we, Paper as Te, PasswordInput as Ee, Pill as De, PillsInput as Oe, Popover as ke, Progress as Ae, Radio as je, Rating as Me, RingProgress as Ne, SegmentedControl as Pe, Select as Fe, Skeleton as Ie, Slider as Le, Spoiler as Re, Stack as ze, Stepper as Be, Switch as Ve, Table as f, Tabs as He, TagsInput as Ue, Text as p, TextInput as We, Textarea as Ge, ThemeIcon as Ke, Timeline as qe, Title as Je, Tooltip as Ye, Tree as Xe, createTheme as Ze, useDirection as Qe, useMantineColorScheme as $e } from "@mantine/core";
import { DateInput as et, DatePicker as tt, DatePickerInput as nt, MonthPickerInput as rt } from "@mantine/dates";
import { IconActivity as it, IconAlertTriangle as at, IconArrowsExchange as ot, IconArrowsSort as st, IconBell as ct, IconCalendar as lt, IconCaretDownFilled as ut, IconCaretUpFilled as dt, IconChartCandle as ft, IconChartLine as pt, IconCheck as mt, IconChevronDown as ht, IconChevronRight as gt, IconCoins as _t, IconDownload as vt, IconExternalLink as yt, IconEye as bt, IconFileText as xt, IconFilter as St, IconInfoCircle as Ct, IconMinus as wt, IconMoon as Tt, IconNews as Et, IconRefresh as Dt, IconSearch as Ot, IconSortAscending as kt, IconSortDescending as At, IconStar as jt, IconStarFilled as Mt, IconSun as Nt, IconTextDirectionLtr as Pt, IconTextDirectionRtl as Ft, IconTrendingDown as It, IconTrendingUp as Lt, IconWorld as Rt, IconX as zt } from "@tabler/icons-react";
import { Fragment as Bt, jsx as m, jsxs as h } from "react/jsx-runtime";
import { useId as Vt, useMemo as Ht, useState as Ut } from "react";
import { Chart as Wt } from "react-google-charts";
//#region \0rolldown/runtime.js
var Gt = Object.defineProperty, Kt = (e, t) => {
	let n = {};
	for (var r in e) Gt(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Gt(n, Symbol.toStringTag, { value: "Module" }), n;
}, qt = { root: "_root_16zwp_17" }, Jt = {
	root: "_root_to86a_17",
	title: "_title_to86a_29",
	message: "_message_to86a_41"
}, Yt = { root: "_root_307li_21" }, Xt = {
	root: "_root_gy76h_9",
	placeholder: "_placeholder_gy76h_35"
}, Zt = {
	root: "_root_13wer_17",
	label: "_label_13wer_49"
}, Qt = { root: "_root_p1hp1_27" }, g = {
	calendarHeader: "_calendarHeader_1xmu9_17",
	calendarHeaderLevel: "_calendarHeaderLevel_1xmu9_27",
	weekday: "_weekday_1xmu9_39",
	day: "_day_1xmu9_57"
}, $t = { root: "_root_j9dhw_3" }, en = {
	dropdown: "_dropdown_1f2gn_21",
	option: "_option_1f2gn_39",
	empty: "_empty_1f2gn_107",
	groupLabel: "_groupLabel_1f2gn_121"
}, tn = {
	skeleton: "_skeleton_p35qq_15",
	divider: "_divider_p35qq_41",
	dividerLabel: "_dividerLabel_p35qq_49"
}, _ = {
	chipLabel: "_chipLabel_lntni_15",
	themeIcon: "_themeIcon_lntni_81",
	indicator: "_indicator_lntni_91",
	kbd: "_kbd_lntni_101",
	code: "_code_lntni_123",
	blockquote: "_blockquote_lntni_141",
	blockquoteCite: "_blockquoteCite_lntni_161"
}, v = {
	input: "_input_11g9r_19",
	placeholder: "_placeholder_11g9r_55",
	label: "_label_11g9r_155",
	description: "_description_11g9r_169",
	error: "_error_11g9r_181",
	required: "_required_11g9r_193"
}, nn = {
	root: "_root_13nlo_25",
	label: "_label_13nlo_105",
	description: "_description_13nlo_115"
}, rn = {
	root: "_root_1e9g1_15",
	title: "_title_1e9g1_43",
	description: "_description_1e9g1_55"
}, y = {
	dropdown: "_dropdown_ow5s2_11",
	drawerContent: "_drawerContent_ow5s2_31",
	drawerHeader: "_drawerHeader_ow5s2_39",
	drawerTitle: "_drawerTitle_ow5s2_51",
	drawerBody: "_drawerBody_ow5s2_63"
}, an = {
	control: "_control_do166_11",
	dots: "_dots_do166_79"
}, on = { root: "_root_gkxj1_11" }, sn = {
	root: "_root_579d4_11",
	remove: "_remove_579d4_35"
}, b = {
	progressRoot: "_progressRoot_rwqjg_11",
	progressSection: "_progressSection_rwqjg_21",
	sliderTrack: "_sliderTrack_rwqjg_31",
	sliderBar: "_sliderBar_rwqjg_39",
	sliderThumb: "_sliderThumb_rwqjg_47",
	sliderLabel: "_sliderLabel_rwqjg_79",
	sliderMarkLabel: "_sliderMarkLabel_rwqjg_95"
}, cn = {
	root: "_root_kskrc_17",
	control: "_control_kskrc_31",
	label: "_label_kskrc_39",
	indicator: "_indicator_kskrc_107"
}, x = {
	accordionItem: "_accordionItem_1hmry_13",
	accordionControl: "_accordionControl_1hmry_23",
	accordionPanelContent: "_accordionPanelContent_1hmry_49",
	stepperStepIcon: "_stepperStepIcon_1hmry_65",
	stepperStepLabel: "_stepperStepLabel_1hmry_105",
	stepperStepDescription: "_stepperStepDescription_1hmry_117",
	stepperSeparator: "_stepperSeparator_1hmry_127",
	timelineItemBullet: "_timelineItemBullet_1hmry_137",
	timelineItemTitle: "_timelineItemTitle_1hmry_149",
	timelineItemBody: "_timelineItemBody_1hmry_161",
	breadcrumbsRoot: "_breadcrumbsRoot_1hmry_173",
	breadcrumbsSeparator: "_breadcrumbsSeparator_1hmry_181"
}, ln = { table: "_table_8duyc_41" }, S = { classNames: v }, C = {
	classNames: {
		...v,
		...en
	},
	defaultProps: { nothingFoundMessage: "No matches found" }
}, un = {
	nextMonth: "Next month",
	previousMonth: "Previous month",
	nextYear: "Next year",
	previousYear: "Previous year",
	nextDecade: "Next decade",
	previousDecade: "Previous decade",
	monthLevelControl: "Change month",
	yearLevelControl: "Change year"
}, dn = {
	Button: u.extend({
		classNames: Qt,
		defaultProps: { variant: "default" },
		vars: (e, t) => t.variant === "filled" ? { root: { "--button-color": "var(--ask-text-on-brand)" } } : t.variant && t.variant !== "default" ? { root: {} } : { root: {
			"--button-bg": "var(--ask-bg-surface)",
			"--button-hover": "var(--ask-bg-hover)",
			"--button-color": "var(--ask-text-primary)",
			"--button-bd": "1px solid var(--ask-border-brand)"
		} }
	}),
	Anchor: r.extend({ classNames: Yt }),
	ActionIcon: t.extend({
		classNames: qt,
		defaultProps: { variant: "subtle" }
	}),
	Alert: n.extend({
		classNames: Jt,
		defaultProps: {
			variant: "info",
			radius: "md"
		}
	}),
	SegmentedControl: Pe.extend({
		classNames: cn,
		defaultProps: { radius: "md" }
	}),
	Pagination: we.extend({
		classNames: an,
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
	NavLink: be.extend({
		classNames: nn,
		vars: () => ({
			root: {
				"--nl-bg": "var(--ask-bg-brand-subtle)",
				"--nl-hover": "var(--ask-bg-selected)",
				"--nl-color": "var(--ask-text-link)"
			},
			children: {}
		})
	}),
	Notification: xe.extend({
		classNames: rn,
		defaultProps: {
			radius: "md",
			withBorder: !0
		}
	}),
	Loader: he.extend({ defaultProps: {
		color: "brand.6",
		type: "oval"
	} }),
	Skeleton: Ie.extend({
		classNames: { root: tn.skeleton },
		defaultProps: { radius: "xs" }
	}),
	Divider: ce.extend({ classNames: {
		root: tn.divider,
		label: tn.dividerLabel
	} }),
	Badge: o.extend({
		classNames: Zt,
		defaultProps: { variant: "company" }
	}),
	Paper: Te.extend({
		classNames: on,
		defaultProps: {
			radius: "lg",
			shadow: "sm",
			withBorder: !0
		}
	}),
	Card: ee.extend({
		classNames: $t,
		defaultProps: {
			radius: "lg",
			shadow: "sm",
			withBorder: !0
		}
	}),
	Avatar: a.extend({ classNames: Xt }),
	Table: f.extend({
		classNames: ln,
		defaultProps: {
			withTableBorder: !1,
			withColumnBorders: !1,
			withRowBorders: !1
		}
	}),
	TextInput: We.extend(S),
	Textarea: Ge.extend(S),
	PasswordInput: Ee.extend(S),
	NumberInput: Se.extend(S),
	Select: Fe.extend(C),
	MultiSelect: ve.extend(C),
	NativeSelect: ye.extend(S),
	Combobox: oe.extend({ classNames: en }),
	Pill: De.extend({ classNames: sn }),
	PillsInput: Oe.extend(S),
	Checkbox: ne.extend({ defaultProps: { radius: "xs" } }),
	Radio: je.extend({}),
	Switch: Ve.extend({}),
	Modal: _e.extend({ defaultProps: {
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
	Tooltip: Ye.extend({ defaultProps: {
		radius: "sm",
		withArrow: !0,
		openDelay: 200,
		events: {
			hover: !0,
			focus: !0,
			touch: !0
		}
	} }),
	Menu: ge.extend({ defaultProps: {
		radius: "md",
		shadow: "md"
	} }),
	Tabs: He.extend({ defaultProps: { keepMounted: !1 } }),
	Container: se.extend({ defaultProps: { size: "xl" } }),
	Autocomplete: i.extend(C),
	TagsInput: Ue.extend(C),
	FileInput: de.extend(S),
	ColorInput: ae.extend(S),
	JsonInput: pe.extend(S),
	Fieldset: ue.extend({ defaultProps: { radius: "md" } }),
	DatePicker: tt.extend({
		classNames: g,
		defaultProps: { ariaLabels: un }
	}),
	DatePickerInput: nt.extend({
		classNames: {
			...v,
			...g
		},
		defaultProps: { ariaLabels: un }
	}),
	MonthPickerInput: rt.extend({
		classNames: {
			...v,
			...g
		},
		defaultProps: { ariaLabels: un }
	}),
	DateInput: et.extend({ classNames: {
		...v,
		...g
	} }),
	Popover: ke.extend({
		classNames: { dropdown: y.dropdown },
		defaultProps: {
			radius: "md",
			shadow: "md",
			withinPortal: !0
		}
	}),
	Drawer: le.extend({
		classNames: {
			content: y.drawerContent,
			header: y.drawerHeader,
			title: y.drawerTitle,
			body: y.drawerBody
		},
		defaultProps: {
			returnFocus: !0,
			overlayProps: {
				backgroundOpacity: .55,
				blur: 2
			}
		}
	}),
	Overlay: Ce.extend({ defaultProps: {
		backgroundOpacity: .55,
		blur: 2
	} }),
	Progress: Ae.extend({ classNames: {
		root: b.progressRoot,
		section: b.progressSection
	} }),
	Slider: Le.extend({
		defaultProps: { thumbLabel: "Value" },
		classNames: {
			track: b.sliderTrack,
			bar: b.sliderBar,
			thumb: b.sliderThumb,
			label: b.sliderLabel,
			markLabel: b.sliderMarkLabel
		}
	}),
	RingProgress: Ne.extend({ defaultProps: {
		thickness: 8,
		roundCaps: !0
	} }),
	Rating: Me.extend({ defaultProps: { color: "caution.5" } }),
	Accordion: e.extend({ classNames: {
		item: x.accordionItem,
		control: x.accordionControl,
		content: x.accordionPanelContent
	} }),
	Stepper: Be.extend({ classNames: {
		stepIcon: x.stepperStepIcon,
		stepLabel: x.stepperStepLabel,
		stepDescription: x.stepperStepDescription,
		separator: x.stepperSeparator
	} }),
	Timeline: qe.extend({ classNames: {
		itemBullet: x.timelineItemBullet,
		itemTitle: x.timelineItemTitle,
		itemBody: x.timelineItemBody
	} }),
	Breadcrumbs: c.extend({ classNames: {
		root: x.breadcrumbsRoot,
		separator: x.breadcrumbsSeparator
	} }),
	Spoiler: Re.extend({}),
	Tree: Xe.extend({}),
	Burger: l.extend({ defaultProps: { size: "sm" } }),
	Chip: re.extend({
		classNames: { label: _.chipLabel },
		vars: () => ({ root: {
			"--chip-color": "var(--ask-text-link)",
			"--chip-hover": "var(--ask-bg-selected)"
		} })
	}),
	ThemeIcon: Ke.extend({ classNames: { root: _.themeIcon } }),
	Indicator: fe.extend({ classNames: { indicator: _.indicator } }),
	Kbd: me.extend({ classNames: { root: _.kbd } }),
	Code: ie.extend({ classNames: { root: _.code } }),
	Blockquote: s.extend({ classNames: {
		root: _.blockquote,
		cite: _.blockquoteCite
	} })
}, fn = /* @__PURE__ */ Kt({
	ICON_RULES: () => An,
	amber: () => k,
	blue: () => w,
	borderWidth: () => P,
	breakpoint: () => I,
	chartCategorical: () => R,
	chartDiverging: () => Dn,
	chartMark: () => B,
	chartSequential: () => En,
	chartSurface: () => z,
	container: () => wn,
	controlHeight: () => vn,
	duration: () => xn,
	easing: () => Sn,
	focusRing: () => Tn,
	fontSize: () => A,
	fontWeight: () => hn,
	green: () => D,
	grid: () => L,
	iconSize: () => On,
	iconStroke: () => kn,
	ink: () => E,
	letterSpacing: () => gn,
	lineHeight: () => j,
	minTargetAA: () => bn,
	minTouchTarget: () => yn,
	neutral: () => T,
	numeric: () => _n,
	radius: () => N,
	red: () => O,
	semanticDark: () => mn,
	semanticLight: () => pn,
	shadow: () => F,
	space: () => M,
	zIndex: () => Cn
}), w = [
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
], T = [
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
], E = "#0a0a0a", D = [
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
], O = [
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
], k = [
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
], pn = {
	"text-primary": E,
	"text-secondary": T[7],
	"text-tertiary": T[6],
	"text-disabled": T[4],
	"text-link": w[7],
	"text-link-hover": w[8],
	"text-inverse": "#ffffff",
	"text-on-brand": "#ffffff",
	"bg-page": "#ffffff",
	"bg-surface": "#ffffff",
	"bg-subtle": T[0],
	"bg-muted": T[1],
	"bg-brand-subtle": w[0],
	"bg-brand": w[6],
	"bg-hover": w[0],
	"bg-selected": w[1],
	"border-subtle": T[2],
	"border-default": T[3],
	"border-strong": T[5],
	"border-brand": w[6],
	"border-focus": w[7],
	"positive-text": D[7],
	"positive-bg": D[1],
	"positive-border": D[6],
	"negative-text": O[7],
	"negative-bg": O[1],
	"negative-border": O[6],
	"warning-text": k[7],
	"warning-bg": k[1],
	"warning-border": k[6],
	"neutral-text": T[6],
	"neutral-bg": T[1],
	"neutral-border": T[3],
	"logo-wordmark": "#1F2630"
}, mn = {
	"text-primary": "#f8fafc",
	"text-secondary": "#cbd5e1",
	"text-tertiary": "#94a3b8",
	"text-disabled": "#475569",
	"text-link": "#5cb0ff",
	"text-link-hover": "#8ac6ff",
	"text-inverse": E,
	"text-on-brand": "#ffffff",
	"bg-page": "#0b1220",
	"bg-surface": "#111a2b",
	"bg-subtle": "#0f172a",
	"bg-muted": "#1e293b",
	"bg-brand-subtle": "#0e2744",
	"bg-brand": w[6],
	"bg-hover": "#16233a",
	"bg-selected": "#1b2b47",
	"border-subtle": "#1e293b",
	"border-default": "#334155",
	"border-strong": "#64748b",
	"border-brand": w[5],
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
}, A = {
	"2xs": "12px",
	xs: "14px",
	sm: "16px",
	md: "18px",
	lg: "20px",
	xl: "24px",
	"2xl": "30px",
	"3xl": "36px",
	"4xl": "48px"
}, j = {
	tight: "1.1",
	snug: "1.25",
	normal: "1.4",
	relaxed: "1.5"
}, hn = {
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700
}, gn = {
	tighter: "-0.02em",
	tight: "-0.01em",
	normal: "0",
	wide: "0.04em"
}, _n = {
	tabular: "tabular-nums",
	proportional: "proportional-nums"
}, M = {
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
}, N = {
	xs: "4px",
	sm: "6px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	full: "9999px"
}, P = {
	none: "0",
	thin: "1px",
	thick: "2px"
}, F = {
	none: "none",
	xs: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
	sm: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 6px 24px 0 rgba(15, 23, 42, 0.03)",
	md: "0 4px 8px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
	lg: "0 12px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.04)",
	xl: "0 24px 32px -8px rgba(15, 23, 42, 0.12), 0 8px 12px -6px rgba(15, 23, 42, 0.06)"
}, vn = {
	xs: "28px",
	sm: "32px",
	md: "40px",
	lg: "48px"
}, yn = "44px", bn = "24px", xn = {
	instant: "0ms",
	fast: "120ms",
	base: "200ms",
	slow: "320ms"
}, Sn = {
	standard: "cubic-bezier(0.2, 0, 0, 1)",
	decelerate: "cubic-bezier(0, 0, 0, 1)",
	accelerate: "cubic-bezier(0.3, 0, 1, 1)"
}, Cn = {
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
}, wn = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	content: "1280px",
	wide: "1600px",
	grid: "1300px",
	prose: "68ch"
}, L = {
	columns: 12,
	columnWidth: "90px",
	gutter: "20px"
}, Tn = {
	width: P.thick,
	offset: "2px"
}, R = [
	"#1485ff",
	"#ea580c",
	"#0d9488",
	"#9333ea",
	"#a16207",
	"#0891b2",
	"#db2777",
	"#4d7c0f"
], En = [
	"#5cb0ff",
	"#1485ff",
	"#0759b0",
	"#044386"
], Dn = {
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
}, z = {
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
}, B = {
	lineWidth: 2,
	markerSize: 8,
	barRadius: 4,
	seriesGap: 2,
	areaOpacity: .12
}, On = {
	xs: 14,
	sm: 16,
	md: 20,
	lg: 24,
	xl: 32,
	"2xl": 48
}, kn = {
	default: 1.5,
	small: 1.75
}, An = {
	noEmoji: !0,
	decorativeIsAriaHidden: !0,
	iconOnlyNeedsLabel: !0
}, jn = w, Mn = T, Nn = D, Pn = O, Fn = k, In = { ...pn }, Ln = { ...mn }, Rn = Ze({
	primaryColor: "brand",
	primaryShade: 6,
	colors: {
		brand: jn,
		gray: Mn,
		positive: Nn,
		negative: Pn,
		caution: Fn
	},
	fontFamily: "'Lato', sans-serif",
	fontFamilyMonospace: "ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, Consolas, monospace",
	headings: {
		fontFamily: "'Lato', sans-serif",
		sizes: {
			h1: {
				fontSize: A["3xl"],
				fontWeight: "700",
				lineHeight: j.tight
			},
			h2: {
				fontSize: A["2xl"],
				fontWeight: "700",
				lineHeight: j.snug
			},
			h3: {
				fontSize: A.xl,
				fontWeight: "600",
				lineHeight: j.snug
			},
			h4: {
				fontSize: A.lg,
				fontWeight: "600",
				lineHeight: j.snug
			},
			h5: {
				fontSize: A.md,
				fontWeight: "600",
				lineHeight: j.normal
			},
			h6: {
				fontSize: A.sm,
				fontWeight: "700",
				lineHeight: j.normal
			}
		}
	},
	fontSizes: {
		xs: A["2xs"],
		sm: A.xs,
		md: A.sm,
		lg: A.md,
		xl: A.lg
	},
	lineHeights: {
		xs: j.normal,
		sm: j.normal,
		md: j.relaxed,
		lg: j.relaxed,
		xl: j.snug
	},
	spacing: {
		xs: M[1],
		sm: M[2],
		md: M[3],
		lg: M[4],
		xl: M[6]
	},
	radius: {
		xs: N.xs,
		sm: N.sm,
		md: N.md,
		lg: N.lg,
		xl: N.xl
	},
	defaultRadius: "md",
	shadows: {
		xs: F.xs,
		sm: F.sm,
		md: F.md,
		lg: F.lg,
		xl: F.xl
	},
	breakpoints: {
		xs: I.sm,
		sm: I.md,
		md: I.lg,
		lg: I.xl,
		xl: I["2xl"]
	},
	black: E,
	white: "#ffffff",
	respectReducedMotion: !0,
	components: dn,
	other: {
		space: M,
		radius: N,
		borderWidth: P,
		controlHeight: vn,
		duration: xn,
		easing: Sn,
		zIndex: Cn,
		container: wn,
		fontWeight: hn,
		letterSpacing: gn,
		minTouchTarget: yn
	}
}), zn = () => {
	let e = {};
	for (let [t, n] of Object.entries(M)) e[`--ask-space-${t}`] = n;
	for (let [t, n] of Object.entries(N)) e[`--ask-radius-${t}`] = n;
	for (let [t, n] of Object.entries(P)) e[`--ask-border-${t}`] = n;
	for (let [t, n] of Object.entries(vn)) e[`--ask-control-${t}`] = n;
	for (let [t, n] of Object.entries(xn)) e[`--ask-duration-${t}`] = n;
	for (let [t, n] of Object.entries(Sn)) e[`--ask-ease-${t}`] = n;
	for (let [t, n] of Object.entries(Cn)) e[`--ask-z-${t}`] = String(n);
	for (let [t, n] of Object.entries(A)) e[`--ask-font-${t}`] = n;
	for (let [t, n] of Object.entries(j)) e[`--ask-leading-${t}`] = n;
	for (let [t, n] of Object.entries(wn)) e[`--ask-container-${t}`] = n;
	e["--ask-grid-columns"] = String(L.columns), e["--ask-grid-column"] = L.columnWidth, e["--ask-grid-gutter"] = L.gutter, e["--ask-focus-width"] = Tn.width, e["--ask-focus-offset"] = Tn.offset, e["--ask-touch-target"] = yn;
	let t = (e) => Object.fromEntries(Object.entries(e).map(([e, t]) => [`--ask-${e}`, t])), n = (e) => Object.fromEntries(Object.entries(z[e]).map(([e, t]) => [`--ask-chart-${e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())}`, t]));
	return {
		variables: e,
		light: {
			...t(In),
			...n("light")
		},
		dark: {
			...t(Ln),
			...n("dark")
		}
	};
}, V = {
	price: 2,
	index: 2,
	percent: 2,
	change: 2,
	ratio: 2,
	volume: 0,
	shares: 0,
	currency: 2
}, Bn = "—", H = "en-US", U = (e) => e == null || typeof e == "number" && !Number.isFinite(e);
function W(e, t, n) {
	return t ? n === "parens" ? `(${e})` : `-${e}` : e;
}
function G(e, t = {}) {
	if (U(e)) return "—";
	let { decimals: n = 2, signStyle: r = "minus" } = t;
	return W(new Intl.NumberFormat(H, {
		minimumFractionDigits: n,
		maximumFractionDigits: n
	}).format(Math.abs(e)), e < 0, r);
}
var Vn = [
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
function Hn(e, t = {}) {
	if (U(e)) return "—";
	let { decimals: n = 2, threshold: r = 1e6, signStyle: i = "minus" } = t, a = Math.abs(e);
	if (a < r) return W(new Intl.NumberFormat(H, { maximumFractionDigits: 0 }).format(a), e < 0, i);
	let o = Vn.find((e) => a >= e.limit);
	if (!o) return G(e, {
		decimals: n,
		signStyle: i
	});
	let s = a / o.limit;
	return W(`${new Intl.NumberFormat(H, {
		minimumFractionDigits: n,
		maximumFractionDigits: n
	}).format(s)}${o.suffix}`, e < 0, i);
}
function Un(e, t = {}) {
	if (U(e)) return "—";
	let { decimals: n = V.percent, signStyle: r = "parens", showPlus: i = !1 } = t, a = new Intl.NumberFormat(H, {
		minimumFractionDigits: n,
		maximumFractionDigits: n
	}).format(Math.abs(e));
	return e > 0 && i ? `+${a}%` : `${W(a, e < 0, r)}%`;
}
var Wn = (e) => G(e, { decimals: V.price }), Gn = (e) => Hn(e, {
	decimals: V.price,
	threshold: 1e6
}), Kn = (e) => U(e) ? "—" : `Rs ${Hn(e, {
	decimals: 2,
	threshold: 1e6
})}`, qn = (e) => G(e, {
	decimals: V.change,
	signStyle: "minus"
});
function Jn(e) {
	return U(e) || e === 0 ? "flat" : e > 0 ? "up" : "down";
}
var Yn = {
	up: "▲",
	down: "▼",
	flat: "–"
}, Xn = {
	up: "up",
	down: "down",
	flat: "unchanged"
}, Zn = {
	up: "var(--ask-positive-text)",
	down: "var(--ask-negative-text)",
	flat: "var(--ask-text-tertiary)"
};
function Qn(e, t = "Asia/Karachi") {
	return e ? new Intl.DateTimeFormat(H, {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: t,
		timeZoneName: "short"
	}).format(e) : "—";
}
function $n(e, t = "Asia/Karachi") {
	return e ? new Intl.DateTimeFormat(H, {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: t
	}).format(e) : "—";
}
//#endregion
//#region src/lib/icons.tsx
function K(e, t) {
	function n({ size: t = "sm", label: n, color: r, className: i }) {
		let a = On[t];
		return /* @__PURE__ */ m(e, {
			size: a,
			stroke: a <= On.xs ? kn.small : kn.default,
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
var q = {
	up: K(dt, "IconUp"),
	down: K(ut, "IconDown"),
	flat: K(wt, "IconFlat"),
	search: K(Ot, "IconSearch"),
	filter: K(St, "IconFilter"),
	sort: K(st, "IconSort"),
	sortAsc: K(kt, "IconSortAsc"),
	sortDesc: K(At, "IconSortDesc"),
	download: K(vt, "IconDownload"),
	refresh: K(Dt, "IconRefresh"),
	close: K(zt, "IconClose"),
	check: K(mt, "IconCheck"),
	externalLink: K(yt, "IconExternalLink"),
	star: K(jt, "IconStar"),
	starFilled: K(Mt, "IconStarFilled"),
	chevronDown: K(ht, "IconChevronDown"),
	chevronRight: K(gt, "IconChevronRight"),
	info: K(Ct, "IconInfo"),
	warning: K(at, "IconWarning"),
	sun: K(Nt, "IconSun"),
	moon: K(Tt, "IconMoon"),
	directionLtr: K(Pt, "IconDirectionLtr"),
	directionRtl: K(Ft, "IconDirectionRtl"),
	chart: K(pt, "IconChart"),
	report: K(xt, "IconReport"),
	calendar: K(lt, "IconCalendar"),
	watch: K(bt, "IconWatch"),
	alerts: K(ct, "IconAlerts"),
	activity: K(it, "IconActivity"),
	trendUp: K(Lt, "IconTrendUp"),
	trendDown: K(It, "IconTrendDown"),
	flows: K(ot, "IconFlows"),
	world: K(Rt, "IconWorld"),
	currency: K(_t, "IconCurrency"),
	briefing: K(Et, "IconBriefing"),
	candles: K(ft, "IconCandles")
}, er = {
	up: q.up,
	down: q.down,
	flat: q.flat
};
//#endregion
//#region src/lib/chart.ts
function tr(e) {
	let t = new Map(e.map((e, t) => [e, t]));
	return {
		colorFor(e) {
			let n = t.get(e);
			return n === void 0 || n >= R.length ? "var(--ask-text-tertiary)" : R[n];
		},
		get overflows() {
			return e.length > R.length;
		},
		max: R.length
	};
}
function nr(e, t = "market") {
	if (e == null || e === 0) return "var(--ask-text-tertiary)";
	let n = Dn[t];
	return e > 0 ? n.positive[2] : n.negative[2];
}
var rr = {
	strokeWidth: B.lineWidth,
	dotSize: B.markerSize,
	fillOpacity: B.areaOpacity,
	barRadius: B.barRadius
};
function ir(e) {
	let t = new Set(e);
	if (t.size > 1) throw Error(`Dual-axis chart refused: series span ${t.size} units (${[...t].join(", ")}). Use small multiples, or index the series to a common base.`);
}
//#endregion
//#region src/lib/googleChartTheme.ts
function ar({ gutter: e = 64, edge: t = 16 } = {}) {
	return {
		left: e,
		right: t,
		top: 16,
		bottom: 40,
		width: "100%",
		height: "100%"
	};
}
var J = (e) => parseFloat(e);
function Y(e, t = "ltr") {
	let n = z[e];
	return {
		backgroundColor: "transparent",
		colors: [...R],
		fontName: "Lato",
		fontSize: J(A["2xs"]),
		chartArea: ar(),
		hAxis: {
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: J(A["2xs"])
			},
			gridlines: { color: "transparent" },
			baselineColor: n.axis
		},
		vAxis: {
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: J(A["2xs"])
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
				fontSize: J(A["2xs"])
			}
		},
		tooltip: {
			isHtml: !0,
			trigger: "focus"
		},
		animation: { duration: 0 }
	};
}
function or(e, t = "ltr", n = {}) {
	let r = Y(e, t);
	return {
		...r,
		lineWidth: B.lineWidth,
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
function sr(e, t = "ltr") {
	return {
		...or(e, t),
		areaOpacity: B.areaOpacity
	};
}
function cr(e, t = "ltr") {
	let n = Y(e, t);
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
function lr(e, t = "ltr", n = !0) {
	let r = Y(e, t);
	return {
		...r,
		pieHole: n ? .6 : 0,
		pieSliceBorderColor: z[e].surface,
		pieSliceText: "none",
		legend: {
			...r.legend,
			position: t === "rtl" ? "left" : "right"
		},
		chartArea: {
			...ar({
				gutter: 8,
				edge: 8
			}),
			top: 8,
			bottom: 8
		}
	};
}
function ur(e, t, n) {
	if (t !== "rtl" || n < 1) return e;
	let r = {};
	for (let e = 0; e < n; e += 1) r[e] = { targetAxisIndex: 1 };
	return {
		...e,
		series: r,
		vAxes: {
			0: {
				textPosition: "none",
				gridlines: { color: "transparent" },
				minorGridlines: { count: 0 },
				baselineColor: "transparent"
			},
			1: { ...e.vAxis }
		},
		chartArea: {
			...e.chartArea,
			left: 16,
			right: 64
		}
	};
}
function dr(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		let t = n[e];
		n[e] = fr(t) && fr(r) ? {
			...t,
			...r
		} : r;
	}
	return n;
}
function fr(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var pr = N.md, X = "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif", Z = {
	brand: w[6],
	brandTint: w[0],
	link: w[7],
	textPrimary: E,
	textSecondary: T[7],
	textTertiary: T[6],
	border: T[2],
	surface: "#ffffff",
	positive: D[7],
	negative: O[7],
	warning: k[7],
	onBrand: pn["text-on-brand"]
}, Q = {
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
}, mr = {
	body: `margin:0;padding:0;background-color:${Z.surface};font-family:${X};font-size:${Q.bodyText}px;line-height:${Q.lineHeightBody}px;color:${Z.textPrimary};`,
	container: `width:100%;max-width:${Q.contentWidth}px;margin:0 auto;`,
	h1: `margin:0 0 16px;font-family:${X};font-size:${Q.h1}px;line-height:34px;font-weight:700;color:${Z.textPrimary};`,
	h2: `margin:24px 0 8px;font-family:${X};font-size:${Q.h2}px;line-height:28px;font-weight:700;color:${Z.textPrimary};`,
	paragraph: `margin:0 0 16px;font-size:${Q.bodyText}px;line-height:${Q.lineHeightBody}px;color:${Z.textSecondary};`,
	link: `color:${Z.link};text-decoration:underline;`,
	tableHeaderCell: `padding:${Q.cellPaddingY}px ${Q.cellPaddingX}px;background-color:${Z.brandTint};border-bottom:2px solid ${Z.brand};font-size:${Q.label}px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${Z.textSecondary};text-align:left;`,
	tableCell: `padding:${Q.cellPaddingY}px ${Q.cellPaddingX}px;border-bottom:1px solid ${Z.brand};font-size:${Q.smallText}px;color:${Z.textPrimary};`,
	tableCellNumeric: `padding:${Q.cellPaddingY}px ${Q.cellPaddingX}px;border-bottom:1px solid ${Z.brand};font-size:${Q.smallText}px;color:${Z.textPrimary};text-align:right;`,
	positive: `color:${Z.positive};font-weight:700;`,
	negative: `color:${Z.negative};font-weight:700;`,
	button: `display:inline-block;padding:12px 20px;background-color:${Z.brand};border-radius:8px;color:${Z.onBrand};font-size:14px;font-weight:700;text-decoration:none;`,
	meta: `font-size:${Q.label}px;color:${Z.textTertiary};`
}, hr = {
	up: {
		glyph: "▲",
		word: "up",
		color: Z.positive
	},
	down: {
		glyph: "▼",
		word: "down",
		color: Z.negative
	},
	flat: {
		glyph: "–",
		word: "unchanged",
		color: Z.textTertiary
	}
};
//#endregion
//#region src/components/Logo.tsx
function gr({ height: e = 32, title: t = "Ask Analyst", className: n }) {
	let r = Vt();
	return /* @__PURE__ */ h("svg", {
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
			/* @__PURE__ */ m("path", {
				d: "M107.202 38.7237L118.404 2.93158H125.742L136.971 38.7237H132.266L122.438 6.06999H121.735L111.907 38.7237H107.202ZM113.924 28.1653V24.3178H130.221V28.1653H113.924Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M149.178 39.3394C147.232 39.371 145.291 39.1305 143.412 38.6249C142.003 38.2377 140.634 37.7168 139.323 37.0694L138.9 32.8702C140.343 33.6121 141.847 34.2299 143.396 34.717C145.195 35.264 147.067 35.5291 148.947 35.503C151.058 35.503 152.646 35.1658 153.712 34.4916C154.225 34.1836 154.643 33.7422 154.924 33.2146C155.205 32.687 155.337 32.093 155.306 31.4961V31.1883C155.335 30.4332 155.124 29.6883 154.702 29.0613C154.129 28.3779 153.38 27.8646 152.536 27.5772C151.086 27.031 149.596 26.5991 148.079 26.2856C146.201 25.9239 144.377 25.3274 142.648 24.5103C141.472 23.9566 140.485 23.0674 139.812 21.9545C139.212 20.8164 138.918 19.5415 138.96 18.2555V18.0026C138.96 15.6172 139.79 13.8071 141.45 12.5723C143.11 11.3374 145.609 10.7291 148.947 10.7475C150.836 10.7124 152.72 10.9569 154.537 11.473C155.888 11.8706 157.188 12.4239 158.412 13.1219L158.835 16.9693C157.52 16.2174 156.119 15.6251 154.663 15.205C152.942 14.7165 151.159 14.4796 149.37 14.5015C148.206 14.4692 147.044 14.6157 145.924 14.9357C145.177 15.1392 144.512 15.5717 144.022 16.1724C143.633 16.7222 143.432 17.3838 143.451 18.0576V18.2774C143.425 19.0178 143.631 19.7478 144.039 20.3661C144.589 21.0493 145.32 21.5636 146.149 21.8501C147.525 22.3663 148.94 22.7689 150.382 23.0538C152.295 23.3805 154.162 23.934 155.944 24.7027C157.152 25.2183 158.179 26.0811 158.895 27.1815C159.537 28.3592 159.847 29.689 159.791 31.0289V31.5016C159.791 34.0666 158.895 36.0086 157.104 37.3277C155.312 38.6469 152.67 39.3174 149.178 39.3394Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M163.936 38.7238V1.61807H168.443V38.7238H163.936ZM181.689 38.7238L170.883 25.9778H167.998V22.4492H170.883L181.244 11.3906H186.619L174.23 24.5818V23.4825L187.141 38.7183L181.689 38.7238Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M107.202 80.2486L118.404 44.4894H125.742L136.971 80.2761H132.266L122.438 47.6278H121.735L111.907 80.2761L107.202 80.2486ZM113.924 69.6956V65.8482H130.221V69.6956H113.924Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M140.637 80.2487V52.9209H145.177L144.979 59.4725L145.177 59.7254V80.2487H140.637ZM158.923 80.2487V63.254C158.953 61.9587 158.75 60.6685 158.324 59.445C157.958 58.4264 157.269 57.5556 156.362 56.9662C155.235 56.3213 153.947 56.0141 152.652 56.0813C151.359 56.0507 150.077 56.3296 148.914 56.8947C147.893 57.4068 147.014 58.1618 146.353 59.0933C145.687 60.0395 145.219 61.1109 144.979 62.2427L144.165 59.0218H145.144C145.439 57.8041 145.974 56.6571 146.715 55.6471C147.501 54.5999 148.534 53.7634 149.722 53.2122C151.181 52.5676 152.766 52.2577 154.361 52.3053C156.191 52.2218 158.008 52.6481 159.61 53.5365C160.947 54.3626 161.975 55.6067 162.534 57.0761C163.198 58.8914 163.513 60.816 163.463 62.7483V80.2487H158.923Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M175.879 80.8367C173.171 80.8367 171.094 80.1789 169.646 78.8635C168.201 77.5499 167.475 75.6646 167.475 73.2243V72.4108C167.475 69.8898 168.256 68.0082 169.817 66.7661C171.378 65.5239 173.855 64.661 177.248 64.1773L185.905 62.9461L186.152 66.2439L177.808 67.4476C175.72 67.7444 174.227 68.2537 173.329 68.9756C172.873 69.3637 172.513 69.8531 172.28 70.4046C172.046 70.9562 171.944 71.5547 171.982 72.1525V72.5977C171.945 73.2116 172.046 73.8261 172.276 74.3965C172.506 74.9669 172.86 75.4789 173.312 75.8955C174.203 76.6613 175.533 77.0424 177.303 77.0387C178.691 77.0762 180.07 76.8001 181.337 76.2308C182.407 75.7287 183.339 74.9742 184.052 74.0322C184.739 73.1316 185.218 72.0897 185.454 70.9818L186.152 74.0597H185.283C185.024 75.2593 184.525 76.3941 183.816 77.396C183.043 78.4686 182.005 79.3227 180.804 79.8748C179.255 80.5592 177.572 80.8879 175.879 80.8367ZM185.283 80.2486L185.498 73.62L185.333 72.9165V64.2048L185.36 62.6053C185.36 60.3848 184.794 58.7359 183.662 57.6586C182.53 56.5814 180.743 56.0482 178.303 56.0592C176.472 56.0381 174.649 56.3223 172.911 56.9001C171.398 57.4067 169.94 58.0641 168.558 58.8623L168.976 55.0149C169.79 54.5317 170.637 54.1056 171.51 53.7398C173.891 52.7468 176.449 52.2475 179.029 52.2722C180.723 52.2329 182.413 52.4724 184.03 52.9813C185.269 53.3651 186.393 54.0515 187.299 54.9785C188.206 55.9055 188.868 57.0439 189.224 58.2907C189.631 59.6715 189.829 61.1054 189.812 62.5449V80.2431L185.283 80.2486Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M195.495 80.2486V43.1484H200.002V80.2486H195.495Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M218.371 76.022L216.002 77.0553L224.181 52.9209H228.858L216.002 89.8837H211.413L215.722 77.3961L217.712 79.1329H212.562L203.625 52.9209H208.308L215.761 76.0055L218.371 76.022Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M240.692 80.8642C238.744 80.898 236.801 80.6575 234.921 80.1497C233.513 79.7657 232.145 79.2466 230.837 78.5997L230.414 74.3951C231.856 75.1411 233.36 75.7608 234.91 76.2473C236.711 76.7929 238.585 77.0562 240.466 77.0278C242.577 77.0278 244.164 76.6925 245.226 76.022C245.74 75.7147 246.159 75.2736 246.441 74.7459C246.723 74.2182 246.856 73.6239 246.826 73.0265V72.7187C246.855 71.9634 246.644 71.2183 246.221 70.5916C245.64 69.9028 244.879 69.389 244.023 69.1076C242.577 68.5553 241.088 68.1233 239.571 67.8159C237.693 67.4551 235.868 66.8586 234.14 66.0406C232.965 65.4937 231.976 64.6124 231.299 63.5068C230.696 62.3692 230.401 61.0943 230.441 59.8078V59.555C230.441 57.1659 231.273 55.3558 232.937 54.1246C234.6 52.8934 237.101 52.2778 240.439 52.2778C242.328 52.2428 244.211 52.4872 246.029 53.0033C247.381 53.3985 248.681 53.952 249.904 54.6522L250.327 58.4997C247.454 56.8349 244.182 55.982 240.862 56.0318C239.698 55.9992 238.536 56.1457 237.416 56.466C236.669 56.6714 236.003 57.1012 235.509 57.6972C235.112 58.2566 234.907 58.9298 234.926 59.6154V59.8408C234.901 60.5803 235.105 61.3094 235.509 61.9294C236.062 62.6112 236.795 63.1252 237.625 63.4134C239.003 63.9369 240.422 64.3433 241.868 64.6281C243.781 64.9641 245.647 65.5288 247.425 66.3099C248.636 66.823 249.665 67.6862 250.382 68.7888C251.024 69.9664 251.333 71.2963 251.278 72.6362V73.0704C251.278 75.6354 250.382 77.5774 248.59 78.8966C246.798 80.2157 244.166 80.8716 240.692 80.8642Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M252.003 56.9497V53.3111H272.109L271.691 56.9497H252.003ZM256.516 53.7618V46.0669L261.078 45.4788L260.88 53.7233L256.516 53.7618ZM265.25 80.8093C263.501 80.88 261.76 80.555 260.154 79.8584C258.905 79.2635 257.91 78.2395 257.351 76.9728C256.73 75.446 256.436 73.8057 256.488 72.158V54.9325H260.968V71.6469C260.968 73.4387 261.375 74.7633 262.199 75.6097C263.024 76.4562 264.398 76.8849 266.343 76.8849C267.413 76.8884 268.479 76.7667 269.52 76.5221C270.513 76.2862 271.476 75.9377 272.389 75.4833L271.972 79.3747C270.995 79.8584 269.96 80.2167 268.894 80.441C267.696 80.6948 266.474 80.8183 265.25 80.8093Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ m("path", {
				d: "M87.3332 69.822C87.0859 79.0449 79.3525 86.9651 70.2011 87.9599C61.6214 88.9108 53.0196 88.2073 44.4288 88.3777C42.8862 88.3538 41.3705 88.7838 40.0703 89.6143C32.6337 94.5061 25.1312 99.2329 17.6562 104.031C14.6497 105.966 11.6597 104.454 11.5663 100.81C11.4618 96.6936 11.4893 92.5659 11.5663 88.4546C11.6249 87.8808 11.5069 87.3027 11.2279 86.7978C10.9489 86.2929 10.5224 85.8853 10.0053 85.6295C3.12939 81.4468 0.216331 74.9391 0.122893 67.2278C-0.0694783 52.1293 -0.00352228 37.0309 0.100908 21.9545C0.166864 13.71 3.45917 7.11437 10.7088 2.71731C13.7843 0.937742 17.2858 0.0277129 20.8386 0.0845626C38.1355 -0.0308604 55.4655 -0.00337858 72.7405 0.0241031C81.3367 0.0241031 87.4212 6.0261 87.5146 14.6444C87.7262 33.0008 87.8207 51.4692 87.3332 69.822ZM17.1066 97.6885C24.5211 92.9011 31.4355 88.4601 38.3059 83.9806C39.7337 82.9984 41.4319 82.4854 43.1647 82.5131C51.0354 82.59 58.9135 82.59 66.7989 82.5131C75.725 82.4141 81.6665 76.9178 81.7654 68.1237C81.9578 51.0081 81.9193 33.887 81.7654 16.7659C81.7105 9.55475 77.5992 5.60288 70.3935 5.5699C54.1848 5.48746 37.9651 5.44349 21.773 5.5699C12.715 5.64136 6.09741 11.7093 5.92702 20.7288C5.62472 36.6682 5.75664 52.6075 5.97649 68.5084C6.05344 74.384 8.84008 78.9515 14.4903 81.3753C16.458 82.2163 17.1725 83.5739 17.1121 85.679C17.0351 89.5044 17.1066 93.3299 17.1066 97.6885Z",
				fill: `url(#${r})`
			}),
			/* @__PURE__ */ m("path", {
				d: "M71.4489 44.2806C71.4489 52.69 71.3774 61.0994 71.4928 69.5088C71.5313 72.0316 70.5585 72.9879 68.1401 72.944C64.573 72.878 60.9948 72.8945 57.4442 72.944C55.4545 72.9769 54.7565 72.1305 54.762 70.1298C54.817 52.7614 54.817 35.393 54.762 18.0246C54.762 15.892 55.6689 15.3259 57.5431 15.3479C61.2037 15.3973 64.8588 15.4303 68.5358 15.3479C70.8058 15.2984 71.5258 16.2987 71.5038 18.5028C71.3884 27.0935 71.4489 35.6953 71.4489 44.2806Z",
				fill: "#0086DB"
			}),
			/* @__PURE__ */ m("path", {
				d: "M34.6509 52.7615C34.6509 47.1882 34.7498 41.6039 34.6069 36.0306C34.541 33.3484 35.6457 32.4415 38.1905 32.5349C41.2959 32.6559 44.4124 32.6229 47.5343 32.5349C49.8427 32.469 51.0245 33.6012 51.0354 35.7668C51.0904 47.1076 51.0904 58.4465 51.0354 69.7836C51.0354 71.7843 50.0516 72.999 47.7981 72.9385C44.4124 72.856 41.0266 72.8341 37.6464 72.9385C35.3269 73.0099 34.6069 71.9382 34.6344 69.7781C34.6948 64.1059 34.6509 58.4337 34.6509 52.7615Z",
				fill: "#09A2F0"
			}),
			/* @__PURE__ */ m("path", {
				d: "M30.7759 60.5058C30.7759 63.7046 30.688 66.909 30.8089 70.1079C30.8859 72.103 30.1549 72.9605 28.1432 72.922C24.7575 72.856 21.3717 72.922 17.986 72.889C15.7874 72.889 14.7157 71.7897 14.7376 69.4593C14.8109 63.1495 14.8109 56.8397 14.7376 50.5299C14.7102 48.3314 15.6555 47.3476 17.8321 47.375C21.0364 47.408 24.2408 47.4135 27.4397 47.375C29.7206 47.3366 30.8199 48.3039 30.7759 50.6728C30.721 53.9706 30.7759 57.2684 30.7759 60.5662V60.5058Z",
				fill: "#0EA4F1"
			}),
			/* @__PURE__ */ m("defs", { children: /* @__PURE__ */ h("linearGradient", {
				id: r,
				x1: "-0.00352228",
				y1: "52.4371",
				x2: "87.5696",
				y2: "52.4371",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ m("stop", { stopColor: "#0EA4F1" }), /* @__PURE__ */ m("stop", {
					offset: "1",
					stopColor: "#0077CA"
				})]
			}) })
		]
	});
}
function _r({ height: e = 32, title: t = "Ask Analyst", className: n }) {
	let r = Vt();
	return /* @__PURE__ */ h("svg", {
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
			/* @__PURE__ */ m("path", {
				d: "M87.3332 69.822C87.0859 79.0449 79.3525 86.9651 70.2011 87.9599C61.6214 88.9108 53.0196 88.2073 44.4288 88.3777C42.8862 88.3538 41.3705 88.7838 40.0703 89.6143C32.6337 94.5061 25.1312 99.2329 17.6562 104.031C14.6497 105.966 11.6597 104.454 11.5663 100.81C11.4618 96.6936 11.4893 92.5659 11.5663 88.4546C11.6249 87.8808 11.5069 87.3027 11.2279 86.7978C10.9489 86.2929 10.5224 85.8853 10.0053 85.6295C3.12939 81.4468 0.216331 74.9391 0.122893 67.2278C-0.0694783 52.1293 -0.00352228 37.0309 0.100908 21.9545C0.166864 13.71 3.45917 7.11437 10.7088 2.71731C13.7843 0.937742 17.2858 0.0277129 20.8386 0.0845626C38.1355 -0.0308604 55.4655 -0.00337858 72.7405 0.0241031C81.3367 0.0241031 87.4212 6.0261 87.5146 14.6444C87.7262 33.0008 87.8207 51.4692 87.3332 69.822ZM17.1066 97.6885C24.5211 92.9011 31.4355 88.4601 38.3059 83.9806C39.7337 82.9984 41.4319 82.4854 43.1647 82.5131C51.0354 82.59 58.9135 82.59 66.7989 82.5131C75.725 82.4141 81.6665 76.9178 81.7654 68.1237C81.9578 51.0081 81.9193 33.887 81.7654 16.7659C81.7105 9.55475 77.5992 5.60288 70.3935 5.5699C54.1848 5.48746 37.9651 5.44349 21.773 5.5699C12.715 5.64136 6.09741 11.7093 5.92702 20.7288C5.62472 36.6682 5.75664 52.6075 5.97649 68.5084C6.05344 74.384 8.84008 78.9515 14.4903 81.3753C16.458 82.2163 17.1725 83.5739 17.1121 85.679C17.0351 89.5044 17.1066 93.3299 17.1066 97.6885Z",
				fill: `url(#${r})`
			}),
			/* @__PURE__ */ m("path", {
				d: "M71.4489 44.2806C71.4489 52.69 71.3774 61.0994 71.4928 69.5088C71.5313 72.0316 70.5585 72.9879 68.1401 72.944C64.573 72.878 60.9948 72.8945 57.4442 72.944C55.4545 72.9769 54.7565 72.1305 54.762 70.1298C54.817 52.7614 54.817 35.393 54.762 18.0246C54.762 15.892 55.6689 15.3259 57.5431 15.3479C61.2037 15.3973 64.8588 15.4303 68.5358 15.3479C70.8058 15.2984 71.5258 16.2987 71.5038 18.5028C71.3884 27.0935 71.4489 35.6953 71.4489 44.2806Z",
				fill: "#0086DB"
			}),
			/* @__PURE__ */ m("path", {
				d: "M34.6509 52.7615C34.6509 47.1882 34.7498 41.6039 34.6069 36.0306C34.541 33.3484 35.6457 32.4415 38.1905 32.5349C41.2959 32.6559 44.4124 32.6229 47.5343 32.5349C49.8427 32.469 51.0245 33.6012 51.0354 35.7668C51.0904 47.1076 51.0904 58.4465 51.0354 69.7836C51.0354 71.7843 50.0516 72.999 47.7981 72.9385C44.4124 72.856 41.0266 72.8341 37.6464 72.9385C35.3269 73.0099 34.6069 71.9382 34.6344 69.7781C34.6948 64.1059 34.6509 58.4337 34.6509 52.7615Z",
				fill: "#09A2F0"
			}),
			/* @__PURE__ */ m("path", {
				d: "M30.7759 60.5058C30.7759 63.7046 30.688 66.909 30.8089 70.1079C30.8859 72.103 30.1549 72.9605 28.1432 72.922C24.7575 72.856 21.3717 72.922 17.986 72.889C15.7874 72.889 14.7157 71.7897 14.7376 69.4593C14.8109 63.1495 14.8109 56.8397 14.7376 50.5299C14.7102 48.3314 15.6555 47.3476 17.8321 47.375C21.0364 47.408 24.2408 47.4135 27.4397 47.375C29.7206 47.3366 30.8199 48.3039 30.7759 50.6728C30.721 53.9706 30.7759 57.2684 30.7759 60.5662V60.5058Z",
				fill: "#0EA4F1"
			}),
			/* @__PURE__ */ m("defs", { children: /* @__PURE__ */ h("linearGradient", {
				id: r,
				x1: "-0.00352228",
				y1: "52.4371",
				x2: "87.5696",
				y2: "52.4371",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ m("stop", { stopColor: "#0EA4F1" }), /* @__PURE__ */ m("stop", {
					offset: "1",
					stopColor: "#0077CA"
				})]
			}) })
		]
	});
}
var $ = {
	skipLink: "_skipLink_b57eq_47",
	header: "_header_b57eq_107",
	headerInner: "_headerInner_b57eq_125",
	nav: "_nav_b57eq_209",
	burger: "_burger_b57eq_231",
	navItem: "_navItem_b57eq_241",
	titleSection: "_titleSection_b57eq_353",
	title: "_title_b57eq_353",
	meta: "_meta_b57eq_385",
	metaDot: "_metaDot_b57eq_405"
}, vr = [
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
function yr({ items: e = vr, activeHref: t, mainId: n = "main", brand: r, actions: i, width: a = "content" }) {
	let [o, s] = Ut(!1), c = (e, n) => /* @__PURE__ */ m("a", {
		href: e.href,
		className: $.navItem,
		"aria-current": e.href === t ? "page" : void 0,
		onClick: n,
		children: e.label
	}, e.href);
	return /* @__PURE__ */ h(Bt, { children: [
		/* @__PURE__ */ m("a", {
			href: `#${n}`,
			className: $.skipLink,
			children: "Skip to content"
		}),
		/* @__PURE__ */ m("header", {
			className: $.header,
			children: /* @__PURE__ */ h("div", {
				className: $.headerInner,
				"data-width": a,
				children: [
					/* @__PURE__ */ m(d, {
						gap: "sm",
						wrap: "nowrap",
						children: r ?? /* @__PURE__ */ m(gr, {
							height: 28,
							title: "Ask Analyst"
						})
					}),
					/* @__PURE__ */ m("nav", {
						"aria-label": "Primary",
						className: $.nav,
						children: e.map((e) => c(e))
					}),
					/* @__PURE__ */ h(d, {
						gap: "sm",
						wrap: "nowrap",
						children: [i, /* @__PURE__ */ m(l, {
							opened: o,
							onClick: () => s((e) => !e),
							className: $.burger,
							"aria-label": o ? "Close navigation" : "Open navigation",
							"aria-expanded": o,
							size: "sm"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ m(le, {
			opened: o,
			onClose: () => s(!1),
			title: "Navigation",
			size: "xs",
			position: "right",
			children: /* @__PURE__ */ m("nav", {
				"aria-label": "Primary mobile",
				children: /* @__PURE__ */ m(ze, {
					gap: "xs",
					children: e.map((e) => c(e, () => s(!1)))
				})
			})
		})
	] });
}
//#endregion
//#region src/components/AskChart.tsx
var br = {
	Line: "LineChart",
	Area: "AreaChart",
	Bar: "BarChart",
	Column: "ColumnChart",
	Pie: "PieChart",
	Donut: "PieChart"
}, xr = /* @__PURE__ */ new Set([
	"Line",
	"Area",
	"Column"
]);
function Sr(e, t, n) {
	switch (e) {
		case "Line": return or(t, n);
		case "Area": return sr(t, n);
		case "Bar":
		case "Column": return cr(t, n);
		case "Pie": return lr(t, n, !1);
		case "Donut": return lr(t, n, !0);
		default: return Y(t, n);
	}
}
function Cr({ kind: e, data: t, title: n, description: r, height: i = 240, seriesKeys: a, options: o }) {
	let { colorScheme: s } = $e(), { dir: c } = Qe(), l = s === "dark" ? "dark" : s === "light" ? "light" : document.documentElement.getAttribute("data-mantine-color-scheme") ?? "light", u = Math.max(0, (t[0]?.length ?? 1) - 1), ee = Ht(() => {
		let t = Sr(e, l, c), n = a ? a.map((e) => tr(a).colorFor(e)) : t.colors;
		return dr({
			...xr.has(e) ? ur(t, c, u) : t,
			colors: n
		}, o);
	}, [
		e,
		l,
		c,
		a,
		u,
		o
	]), [te, ...ne] = t;
	return /* @__PURE__ */ h("figure", {
		style: { margin: 0 },
		children: [
			/* @__PURE__ */ h("figcaption", { children: [/* @__PURE__ */ m(p, {
				size: "xs",
				fw: 700,
				c: "var(--ask-text-secondary)",
				children: n
			}), r && /* @__PURE__ */ m(p, {
				size: "xs",
				c: "var(--ask-text-tertiary)",
				children: r
			})] }),
			/* @__PURE__ */ m("div", {
				"aria-hidden": "true",
				className: "ask-chart-frame",
				children: /* @__PURE__ */ m(Wt, {
					chartType: br[e],
					data: t,
					options: ee,
					width: "100%",
					height: `${i}px`,
					loader: /* @__PURE__ */ m(Ie, {
						height: i,
						radius: "sm"
					})
				})
			}),
			/* @__PURE__ */ h("table", {
				className: "sr-only",
				children: [
					/* @__PURE__ */ m("caption", { children: n }),
					/* @__PURE__ */ m("thead", { children: /* @__PURE__ */ m("tr", { children: te.map((e, t) => /* @__PURE__ */ m("th", {
						scope: "col",
						children: String(e)
					}, t)) }) }),
					/* @__PURE__ */ m("tbody", { children: ne.map((e, t) => /* @__PURE__ */ m("tr", { children: e.map((e, t) => t === 0 ? /* @__PURE__ */ m("th", {
						scope: "row",
						children: String(e)
					}, t) : /* @__PURE__ */ m("td", { children: e === null ? "no data" : String(e) }, t)) }, t)) })
				]
			})
		]
	});
}
var wr = { root: "_root_rwkhr_27" };
//#endregion
//#region src/components/ColorSchemeToggle.tsx
function Tr() {
	let { colorScheme: e, setColorScheme: t } = $e(), n = e === "auto" ? document.documentElement.getAttribute("data-mantine-color-scheme") ?? "light" : e;
	return /* @__PURE__ */ m(Pe, {
		className: wr.root,
		value: n,
		onChange: (e) => t(e),
		"aria-label": "Colour scheme",
		data: [{
			value: "light",
			label: /* @__PURE__ */ h(d, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ m(q.sun, { size: "xs" }), /* @__PURE__ */ m("span", { children: "Light" })]
			})
		}, {
			value: "dark",
			label: /* @__PURE__ */ h(d, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ m(q.moon, { size: "xs" }), /* @__PURE__ */ m("span", { children: "Dark" })]
			})
		}]
	});
}
//#endregion
//#region src/components/DirectionToggle.tsx
function Er() {
	let { dir: e, setDirection: t } = Qe();
	return /* @__PURE__ */ m(Pe, {
		className: wr.root,
		value: e,
		onChange: (e) => t(e),
		"aria-label": "Text direction",
		data: [{
			value: "ltr",
			label: /* @__PURE__ */ h(d, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ m(q.directionLtr, { size: "xs" }), /* @__PURE__ */ m("span", { children: "LTR" })]
			})
		}, {
			value: "rtl",
			label: /* @__PURE__ */ h(d, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ m(q.directionRtl, { size: "xs" }), /* @__PURE__ */ m("span", { children: "RTL" })]
			})
		}]
	});
}
//#endregion
//#region src/components/DataState.tsx
function Dr({ rows: e = 5, cols: t = 5 }) {
	return /* @__PURE__ */ h("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		children: [/* @__PURE__ */ m(p, {
			style: {
				position: "absolute",
				width: 1,
				height: 1,
				overflow: "hidden",
				clip: "rect(0 0 0 0)",
				whiteSpace: "nowrap"
			},
			children: "Loading market data"
		}), /* @__PURE__ */ m(f, {
			"aria-hidden": "true",
			children: /* @__PURE__ */ m(f.Tbody, { children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ m(f.Tr, { children: Array.from({ length: t }).map((e, t) => /* @__PURE__ */ m(f.Td, { children: /* @__PURE__ */ m(Ie, {
				height: 14,
				radius: "xs",
				width: t === 0 ? "60%" : "80%"
			}) }, t)) }, n)) })
		})]
	});
}
function Or({ title: e, description: t, action: n }) {
	return /* @__PURE__ */ m(te, {
		py: "xl",
		role: "status",
		children: /* @__PURE__ */ h(ze, {
			align: "center",
			gap: "sm",
			maw: 360,
			children: [
				/* @__PURE__ */ m(p, {
					fw: 600,
					children: e
				}),
				t && /* @__PURE__ */ m(p, {
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
function kr({ title: e = "Could not load data", description: t, onRetry: r }) {
	return /* @__PURE__ */ m(n, {
		role: "alert",
		variant: "error",
		title: e,
		children: /* @__PURE__ */ h(ze, {
			gap: "sm",
			align: "flex-start",
			children: [t && /* @__PURE__ */ m(p, {
				size: "sm",
				children: t
			}), r && /* @__PURE__ */ m(u, {
				size: "sm",
				onClick: r,
				children: "Try again"
			})]
		})
	});
}
function Ar({ asOf: e, delayedMinutes: t }) {
	return /* @__PURE__ */ h(p, {
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
var jr = {
	scroller: "_scroller_3bdgz_37",
	stickyHeader: "_stickyHeader_3bdgz_145",
	"ask-tick-up": "_ask-tick-up_3bdgz_1",
	"ask-tick-down": "_ask-tick-down_3bdgz_1",
	stale: "_stale_3bdgz_313"
};
//#endregion
//#region src/components/MarketTable.tsx
function Mr({ rows: e, status: t = "ready", caption: n, stale: r = !1, stickyHeader: i = !1, onRetry: a }) {
	return t === "loading" ? /* @__PURE__ */ m(Dr, {
		rows: 5,
		cols: 5
	}) : t === "error" ? /* @__PURE__ */ m(kr, {
		description: "The market feed did not respond. Your connection may be offline.",
		onRetry: a
	}) : t === "empty" || e.length === 0 ? /* @__PURE__ */ m(Or, {
		title: "No matching stocks",
		description: "Try widening your filters, or clear the search to see the full list."
	}) : /* @__PURE__ */ m("div", {
		className: jr.scroller,
		children: /* @__PURE__ */ h(f, {
			className: [i && jr.stickyHeader, r && jr.stale].filter(Boolean).join(" "),
			children: [
				/* @__PURE__ */ h(f.Caption, {
					style: {
						captionSide: "top",
						textAlign: "left",
						paddingBottom: "var(--ask-space-2)",
						color: "var(--ask-text-tertiary)",
						fontSize: "var(--ask-font-2xs)"
					},
					children: [n, r && " · Delayed"]
				}),
				/* @__PURE__ */ m(f.Thead, { children: /* @__PURE__ */ h(f.Tr, { children: [
					/* @__PURE__ */ m(f.Th, {
						scope: "col",
						"data-priority": "1",
						children: "Symbol"
					}),
					/* @__PURE__ */ m(f.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "1",
						children: "Price"
					}),
					/* @__PURE__ */ m(f.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "2",
						children: "Change"
					}),
					/* @__PURE__ */ m(f.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "1",
						children: "%"
					}),
					/* @__PURE__ */ m(f.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "3",
						children: "Volume"
					})
				] }) }),
				/* @__PURE__ */ m(f.Tbody, { children: e.map((e) => {
					let t = Jn(e.changePct), n = Zn[t], r = er[t];
					return /* @__PURE__ */ h(f.Tr, { children: [
						/* @__PURE__ */ m(f.Th, {
							scope: "row",
							"data-priority": "1",
							children: e.symbol
						}),
						/* @__PURE__ */ m(f.Td, {
							"data-numeric": !0,
							"data-priority": "1",
							"data-tick": e.tick,
							children: Wn(e.price)
						}),
						/* @__PURE__ */ m(f.Td, {
							"data-numeric": !0,
							"data-priority": "2",
							style: { color: n },
							children: qn(e.change)
						}),
						/* @__PURE__ */ m(f.Td, {
							"data-numeric": !0,
							"data-priority": "1",
							style: { color: n },
							children: /* @__PURE__ */ h("span", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 4
								},
								children: [
									/* @__PURE__ */ m(r, { size: "xs" }),
									/* @__PURE__ */ h("span", {
										className: "sr-only",
										children: [Xn[t], " "]
									}),
									Un(e.changePct)
								]
							})
						}),
						/* @__PURE__ */ m(f.Td, {
							"data-numeric": !0,
							"data-priority": "3",
							children: Gn(e.volume)
						})
					] }, e.symbol);
				}) })
			]
		})
	});
}
//#endregion
//#region src/components/PageHeading.tsx
function Nr({ title: e, meta: t = [], centered: n = !1, children: r }) {
	return /* @__PURE__ */ h("div", {
		className: $.titleSection,
		"data-centered": n || void 0,
		children: [
			/* @__PURE__ */ m(Je, {
				order: 1,
				className: $.title,
				children: e
			}),
			t.length > 0 && /* @__PURE__ */ m("div", {
				className: $.meta,
				children: t.map((e, t) => /* @__PURE__ */ h("span", {
					style: { display: "contents" },
					children: [t > 0 && /* @__PURE__ */ m("span", {
						className: $.metaDot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ m("span", { children: e })]
				}, t))
			}),
			r
		]
	});
}
//#endregion
export { yr as AppHeader, Cr as AskChart, pr as CHART_TOOLTIP_RADIUS, Tr as ColorSchemeToggle, Yn as DIRECTION_GLYPH, er as DIRECTION_ICON, Xn as DIRECTION_LABEL, Zn as DIRECTION_TOKEN, Er as DirectionToggle, hr as EMAIL_DIRECTION, X as EMAIL_FONT_STACK, Or as EmptyState, kr as ErrorState, q as Icons, gr as Logo, _r as LogoMark, Mr as MarketTable, vr as NAV_ITEMS, Bn as NOT_AVAILABLE, V as PRECISION, Nr as PageHeading, Ar as StaleNotice, Dr as TableSkeleton, sr as areaChartOptions, ir as assertSingleAxis, cr as barChartOptions, Y as baseChartOptions, tr as createSeriesPalette, zn as cssVariablesResolver, Jn as direction, nr as directionColor, Z as emailColor, Q as emailSize, mr as emailStyle, qn as formatChange, Hn as formatCompact, $n as formatDate, Kn as formatMarketCap, G as formatNumber, Un as formatPercent, Wn as formatPrice, Qn as formatTime, Gn as formatVolume, or as lineChartOptions, K as makeIcon, rr as markDefaults, dr as mergeChartOptions, ur as mirrorValueAxis, lr as pieChartOptions, Rn as theme, fn as tokens };

//# sourceMappingURL=index.js.map