"use client";
import { A as e, C as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, S as d, T as f, _ as p, a as ee, b as te, c as ne, d as re, f as m, g as h, h as g, i as ie, j as ae, k as oe, l as _, m as se, n as ce, o as le, p as v, r as ue, s as de, t as fe, u as y, v as pe, w as me, x as he, y as b } from "./email-tokens-D-AP8vjd.js";
import { a as ge, c as _e, d as ve, f as ye, h as be, i as xe, l as Se, m as Ce, n as we, o as Te, p as x, r as S, s as C, t as Ee, u as De } from "./format-G4N3Y_M_.js";
import { Accordion as Oe, ActionIcon as ke, Alert as w, Anchor as Ae, Autocomplete as je, Avatar as Me, Badge as Ne, Blockquote as Pe, Breadcrumbs as Fe, Burger as T, Button as E, Card as Ie, Center as Le, Checkbox as Re, Chip as ze, Code as Be, ColorInput as Ve, Combobox as He, Container as Ue, Divider as We, Drawer as D, Fieldset as Ge, FileInput as Ke, Group as O, Indicator as qe, JsonInput as Je, Kbd as Ye, Loader as Xe, Menu as Ze, Modal as Qe, MultiSelect as $e, NativeSelect as et, NavLink as tt, Notification as nt, NumberInput as rt, Overlay as it, Pagination as at, Paper as ot, PasswordInput as st, Pill as ct, PillsInput as lt, Popover as ut, Progress as dt, Radio as ft, Rating as pt, RingProgress as mt, SegmentedControl as k, Select as ht, Skeleton as A, Slider as gt, Spoiler as _t, Stack as j, Stepper as vt, Switch as yt, Table as M, Tabs as bt, TagsInput as xt, Text as N, TextInput as St, Textarea as Ct, ThemeIcon as wt, Timeline as Tt, Title as Et, Tooltip as Dt, Tree as Ot, createTheme as kt, useDirection as At, useMantineColorScheme as jt } from "@mantine/core";
import { DateInput as Mt, DatePicker as Nt, DatePickerInput as Pt, MonthPickerInput as Ft } from "@mantine/dates";
import { IconActivity as It, IconAlertTriangle as Lt, IconArrowsExchange as Rt, IconArrowsSort as zt, IconBell as Bt, IconCalendar as Vt, IconCaretDownFilled as Ht, IconCaretUpFilled as Ut, IconChartCandle as Wt, IconChartLine as Gt, IconCheck as Kt, IconChevronDown as qt, IconChevronRight as Jt, IconCoins as Yt, IconDownload as Xt, IconExternalLink as Zt, IconEye as Qt, IconFileText as $t, IconFilter as en, IconInfoCircle as tn, IconMinus as nn, IconMoon as rn, IconNews as an, IconRefresh as on, IconSearch as sn, IconSortAscending as cn, IconSortDescending as ln, IconStar as un, IconStarFilled as dn, IconSun as fn, IconTextDirectionLtr as pn, IconTextDirectionRtl as mn, IconTrendingDown as hn, IconTrendingUp as gn, IconWorld as _n, IconX as vn } from "@tabler/icons-react";
import { Fragment as yn, jsx as P, jsxs as F } from "react/jsx-runtime";
import { useId as bn, useMemo as xn, useState as Sn } from "react";
import { Chart as Cn } from "react-google-charts";
var wn = { root: "_root_af6795" }, Tn = {
	root: "_root_e8b62d",
	title: "_title_e8b62d",
	message: "_message_e8b62d"
}, En = { root: "_root_2888f5" }, Dn = {
	root: "_root_bf4ed8",
	placeholder: "_placeholder_bf4ed8"
}, On = {
	root: "_root_b736d5",
	label: "_label_b736d5"
}, kn = { root: "_root_c9b754" }, I = {
	calendarHeader: "_calendarHeader_15d5dc",
	calendarHeaderLevel: "_calendarHeaderLevel_15d5dc",
	weekday: "_weekday_15d5dc",
	day: "_day_15d5dc"
}, An = { root: "_root_5b99ed" }, jn = {
	dropdown: "_dropdown_5f0fb8",
	option: "_option_5f0fb8",
	empty: "_empty_5f0fb8",
	groupLabel: "_groupLabel_5f0fb8"
}, L = {
	skeleton: "_skeleton_d553d9",
	divider: "_divider_d553d9",
	dividerLabel: "_dividerLabel_d553d9"
}, R = {
	chipLabel: "_chipLabel_a50dbc",
	themeIcon: "_themeIcon_a50dbc",
	indicator: "_indicator_a50dbc",
	kbd: "_kbd_a50dbc",
	code: "_code_a50dbc",
	blockquote: "_blockquote_a50dbc",
	blockquoteCite: "_blockquoteCite_a50dbc"
}, z = {
	input: "_input_9f5de7",
	placeholder: "_placeholder_9f5de7",
	label: "_label_9f5de7",
	description: "_description_9f5de7",
	error: "_error_9f5de7",
	required: "_required_9f5de7"
}, Mn = {
	root: "_root_622121",
	label: "_label_622121",
	description: "_description_622121"
}, Nn = {
	root: "_root_7634a5",
	title: "_title_7634a5",
	description: "_description_7634a5"
}, B = {
	dropdown: "_dropdown_c26251",
	drawerContent: "_drawerContent_c26251",
	drawerHeader: "_drawerHeader_c26251",
	drawerTitle: "_drawerTitle_c26251",
	drawerBody: "_drawerBody_c26251"
}, Pn = {
	control: "_control_95a301",
	dots: "_dots_95a301"
}, Fn = { root: "_root_3a64ba" }, In = {
	root: "_root_5e5cbc",
	remove: "_remove_5e5cbc"
}, V = {
	progressRoot: "_progressRoot_592f61",
	progressSection: "_progressSection_592f61",
	sliderTrack: "_sliderTrack_592f61",
	sliderBar: "_sliderBar_592f61",
	sliderThumb: "_sliderThumb_592f61",
	sliderLabel: "_sliderLabel_592f61",
	sliderMarkLabel: "_sliderMarkLabel_592f61"
}, Ln = {
	root: "_root_e8b932",
	control: "_control_e8b932",
	label: "_label_e8b932",
	indicator: "_indicator_e8b932"
}, H = {
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
}, Rn = { table: "_table_0f6ee9" }, U = { classNames: z }, W = {
	classNames: {
		...z,
		...jn
	},
	defaultProps: { nothingFoundMessage: "No matches found" }
}, G = {
	nextMonth: "Next month",
	previousMonth: "Previous month",
	nextYear: "Next year",
	previousYear: "Previous year",
	nextDecade: "Next decade",
	previousDecade: "Previous decade",
	monthLevelControl: "Change month",
	yearLevelControl: "Change year"
}, zn = {
	Button: E.extend({
		classNames: kn,
		defaultProps: { variant: "default" },
		vars: (e, t) => t.variant === "filled" ? { root: { "--button-color": "var(--ask-text-on-brand)" } } : t.variant && t.variant !== "default" ? { root: {} } : { root: {
			"--button-bg": "var(--ask-bg-surface)",
			"--button-hover": "var(--ask-bg-hover)",
			"--button-color": "var(--ask-text-primary)",
			"--button-bd": "1px solid var(--ask-border-brand)"
		} }
	}),
	Anchor: Ae.extend({ classNames: En }),
	ActionIcon: ke.extend({
		classNames: wn,
		defaultProps: { variant: "subtle" }
	}),
	Alert: w.extend({
		classNames: Tn,
		defaultProps: {
			variant: "info",
			radius: "md"
		}
	}),
	SegmentedControl: k.extend({
		classNames: Ln,
		defaultProps: { radius: "md" }
	}),
	Pagination: at.extend({
		classNames: Pn,
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
	NavLink: tt.extend({
		classNames: Mn,
		vars: () => ({
			root: {
				"--nl-bg": "var(--ask-bg-brand-subtle)",
				"--nl-hover": "var(--ask-bg-selected)",
				"--nl-color": "var(--ask-text-link)"
			},
			children: {}
		})
	}),
	Notification: nt.extend({
		classNames: Nn,
		defaultProps: {
			radius: "md",
			withBorder: !0
		}
	}),
	Loader: Xe.extend({ defaultProps: {
		color: "brand.6",
		type: "oval"
	} }),
	Skeleton: A.extend({
		classNames: { root: L.skeleton },
		defaultProps: { radius: "xs" }
	}),
	Divider: We.extend({ classNames: {
		root: L.divider,
		label: L.dividerLabel
	} }),
	Badge: Ne.extend({
		classNames: On,
		defaultProps: { variant: "company" }
	}),
	Paper: ot.extend({
		classNames: Fn,
		defaultProps: {
			radius: "lg",
			withBorder: !0
		}
	}),
	Card: Ie.extend({
		classNames: An,
		defaultProps: {
			radius: "lg",
			withBorder: !0
		}
	}),
	Avatar: Me.extend({ classNames: Dn }),
	Table: M.extend({
		classNames: Rn,
		defaultProps: {
			withTableBorder: !1,
			withColumnBorders: !1,
			withRowBorders: !1
		}
	}),
	TextInput: St.extend(U),
	Textarea: Ct.extend(U),
	PasswordInput: st.extend(U),
	NumberInput: rt.extend(U),
	Select: ht.extend(W),
	MultiSelect: $e.extend(W),
	NativeSelect: et.extend(U),
	Combobox: He.extend({ classNames: jn }),
	Pill: ct.extend({ classNames: In }),
	PillsInput: lt.extend(U),
	Checkbox: Re.extend({ defaultProps: { radius: "xs" } }),
	Radio: ft.extend({}),
	Switch: yt.extend({}),
	Modal: Qe.extend({ defaultProps: {
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
	Tooltip: Dt.extend({ defaultProps: {
		radius: "sm",
		withArrow: !0,
		openDelay: 200,
		events: {
			hover: !0,
			focus: !0,
			touch: !0
		}
	} }),
	Menu: Ze.extend({ defaultProps: {
		radius: "md",
		shadow: "md"
	} }),
	Tabs: bt.extend({ defaultProps: { keepMounted: !1 } }),
	Container: Ue.extend({ defaultProps: { size: "xl" } }),
	Autocomplete: je.extend(W),
	TagsInput: xt.extend(W),
	FileInput: Ke.extend(U),
	ColorInput: Ve.extend(U),
	JsonInput: Je.extend(U),
	Fieldset: Ge.extend({ defaultProps: { radius: "md" } }),
	DatePicker: Nt.extend({
		classNames: I,
		defaultProps: { ariaLabels: G }
	}),
	DatePickerInput: Pt.extend({
		classNames: {
			...z,
			...I
		},
		defaultProps: { ariaLabels: G }
	}),
	MonthPickerInput: Ft.extend({
		classNames: {
			...z,
			...I
		},
		defaultProps: { ariaLabels: G }
	}),
	DateInput: Mt.extend({ classNames: {
		...z,
		...I
	} }),
	Popover: ut.extend({
		classNames: { dropdown: B.dropdown },
		defaultProps: {
			radius: "md",
			shadow: "md",
			withinPortal: !0
		}
	}),
	Drawer: D.extend({
		classNames: {
			content: B.drawerContent,
			header: B.drawerHeader,
			title: B.drawerTitle,
			body: B.drawerBody
		},
		defaultProps: {
			returnFocus: !0,
			overlayProps: {
				backgroundOpacity: .55,
				blur: 2
			}
		}
	}),
	Overlay: it.extend({ defaultProps: {
		backgroundOpacity: .55,
		blur: 2
	} }),
	Progress: dt.extend({ classNames: {
		root: V.progressRoot,
		section: V.progressSection
	} }),
	Slider: gt.extend({
		defaultProps: { thumbLabel: "Value" },
		classNames: {
			track: V.sliderTrack,
			bar: V.sliderBar,
			thumb: V.sliderThumb,
			label: V.sliderLabel,
			markLabel: V.sliderMarkLabel
		}
	}),
	RingProgress: mt.extend({ defaultProps: {
		thickness: 8,
		roundCaps: !0
	} }),
	Rating: pt.extend({ defaultProps: { color: "caution.5" } }),
	Accordion: Oe.extend({ classNames: {
		item: H.accordionItem,
		control: H.accordionControl,
		content: H.accordionPanelContent
	} }),
	Stepper: vt.extend({ classNames: {
		stepIcon: H.stepperStepIcon,
		stepLabel: H.stepperStepLabel,
		stepDescription: H.stepperStepDescription,
		separator: H.stepperSeparator
	} }),
	Timeline: Tt.extend({ classNames: {
		itemBullet: H.timelineItemBullet,
		itemTitle: H.timelineItemTitle,
		itemBody: H.timelineItemBody
	} }),
	Breadcrumbs: Fe.extend({ classNames: {
		root: H.breadcrumbsRoot,
		separator: H.breadcrumbsSeparator
	} }),
	Spoiler: _t.extend({}),
	Tree: Ot.extend({}),
	Burger: T.extend({ defaultProps: { size: "sm" } }),
	Chip: ze.extend({
		classNames: { label: R.chipLabel },
		vars: () => ({ root: {
			"--chip-color": "var(--ask-text-link)",
			"--chip-hover": "var(--ask-bg-selected)"
		} })
	}),
	ThemeIcon: wt.extend({ classNames: { root: R.themeIcon } }),
	Indicator: qe.extend({ classNames: { indicator: R.indicator } }),
	Kbd: Ye.extend({ classNames: { root: R.kbd } }),
	Code: Be.extend({ classNames: { root: R.code } }),
	Blockquote: Pe.extend({ classNames: {
		root: R.blockquote,
		cite: R.blockquoteCite
	} })
}, Bn = de, Vn = oe, Hn = he, Un = ae, Wn = le, Gn = { ...c }, Kn = { ...s }, qn = kt({
	primaryColor: "brand",
	primaryShade: 6,
	colors: {
		brand: Bn,
		gray: Vn,
		positive: Hn,
		negative: Un,
		caution: Wn
	},
	fontFamily: "'Lato', sans-serif",
	fontFamilyMonospace: "ui-monospace, 'SF Mono', 'Cascadia Mono', Menlo, Consolas, monospace",
	headings: {
		fontFamily: "'Lato', sans-serif",
		sizes: {
			h1: {
				fontSize: b["3xl"],
				fontWeight: "700",
				lineHeight: n.tight
			},
			h2: {
				fontSize: b["2xl"],
				fontWeight: "700",
				lineHeight: n.snug
			},
			h3: {
				fontSize: b.xl,
				fontWeight: "600",
				lineHeight: n.snug
			},
			h4: {
				fontSize: b.lg,
				fontWeight: "600",
				lineHeight: n.snug
			},
			h5: {
				fontSize: b.md,
				fontWeight: "600",
				lineHeight: n.normal
			},
			h6: {
				fontSize: b.sm,
				fontWeight: "700",
				lineHeight: n.normal
			}
		}
	},
	fontSizes: {
		xs: b["2xs"],
		sm: b.xs,
		md: b.sm,
		lg: b.md,
		xl: b.lg
	},
	lineHeights: {
		xs: n.normal,
		sm: n.normal,
		md: n.relaxed,
		lg: n.relaxed,
		xl: n.snug
	},
	spacing: {
		xs: i[1],
		sm: i[2],
		md: i[3],
		lg: i[4],
		xl: i[6]
	},
	radius: {
		xs: e.xs,
		sm: e.sm,
		md: e.md,
		lg: e.lg,
		xl: e.xl
	},
	defaultRadius: "md",
	shadows: {
		xs: u.xs,
		sm: u.sm,
		md: u.md,
		lg: u.lg,
		xl: u.xl
	},
	breakpoints: {
		xs: _.sm,
		sm: _.md,
		md: _.lg,
		lg: _.xl,
		xl: _["2xl"]
	},
	black: f,
	white: "#ffffff",
	respectReducedMotion: !0,
	components: zn,
	other: {
		space: i,
		radius: e,
		borderWidth: ne,
		controlHeight: g,
		duration: h,
		easing: p,
		zIndex: o,
		container: se,
		fontWeight: te,
		letterSpacing: r,
		minTouchTarget: l
	}
}), Jn = () => {
	let t = {};
	for (let [e, n] of Object.entries(i)) t[`--ask-space-${e}`] = n;
	for (let [n, r] of Object.entries(e)) t[`--ask-radius-${n}`] = r;
	for (let [e, n] of Object.entries(ne)) t[`--ask-border-${e}`] = n;
	for (let [e, n] of Object.entries(g)) t[`--ask-control-${e}`] = n;
	for (let [e, n] of Object.entries(h)) t[`--ask-duration-${e}`] = n;
	for (let [e, n] of Object.entries(p)) t[`--ask-ease-${e}`] = n;
	for (let [e, n] of Object.entries(o)) t[`--ask-z-${e}`] = String(n);
	for (let [e, n] of Object.entries(b)) t[`--ask-font-${e}`] = n;
	for (let [e, r] of Object.entries(n)) t[`--ask-leading-${e}`] = r;
	for (let [e, n] of Object.entries(se)) t[`--ask-container-${e}`] = n;
	t["--ask-grid-columns"] = String(d.columns), t["--ask-grid-column"] = d.columnWidth, t["--ask-grid-gutter"] = d.gutter, t["--ask-focus-width"] = pe.width, t["--ask-focus-offset"] = pe.offset, t["--ask-touch-target"] = l;
	let r = (e) => Object.fromEntries(Object.entries(e).map(([e, t]) => [`--ask-${e}`, t])), a = (e) => Object.fromEntries(Object.entries(v[e]).map(([e, t]) => [`--ask-chart-${e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())}`, t]));
	return {
		variables: t,
		light: {
			...r(Gn),
			...a("light")
		},
		dark: {
			...r(Kn),
			...a("dark")
		}
	};
};
//#endregion
//#region src/lib/icons.tsx
function K(e, n) {
	function r({ size: n = "sm", label: r, color: i, className: a }) {
		let o = t[n];
		return /* @__PURE__ */ P(e, {
			size: o,
			stroke: o <= t.xs ? me.small : me.default,
			color: i ?? "currentColor",
			className: a,
			"aria-hidden": !r || void 0,
			focusable: !1,
			role: r ? "img" : void 0,
			"aria-label": r
		});
	}
	return r.displayName = n, r;
}
var q = {
	up: K(Ut, "IconUp"),
	down: K(Ht, "IconDown"),
	flat: K(nn, "IconFlat"),
	search: K(sn, "IconSearch"),
	filter: K(en, "IconFilter"),
	sort: K(zt, "IconSort"),
	sortAsc: K(cn, "IconSortAsc"),
	sortDesc: K(ln, "IconSortDesc"),
	download: K(Xt, "IconDownload"),
	refresh: K(on, "IconRefresh"),
	close: K(vn, "IconClose"),
	check: K(Kt, "IconCheck"),
	externalLink: K(Zt, "IconExternalLink"),
	star: K(un, "IconStar"),
	starFilled: K(dn, "IconStarFilled"),
	chevronDown: K(qt, "IconChevronDown"),
	chevronRight: K(Jt, "IconChevronRight"),
	info: K(tn, "IconInfo"),
	warning: K(Lt, "IconWarning"),
	sun: K(fn, "IconSun"),
	moon: K(rn, "IconMoon"),
	directionLtr: K(pn, "IconDirectionLtr"),
	directionRtl: K(mn, "IconDirectionRtl"),
	chart: K(Gt, "IconChart"),
	report: K($t, "IconReport"),
	calendar: K(Vt, "IconCalendar"),
	watch: K(Qt, "IconWatch"),
	alerts: K(Bt, "IconAlerts"),
	activity: K(It, "IconActivity"),
	trendUp: K(gn, "IconTrendUp"),
	trendDown: K(hn, "IconTrendDown"),
	flows: K(Rt, "IconFlows"),
	world: K(_n, "IconWorld"),
	currency: K(Yt, "IconCurrency"),
	briefing: K(an, "IconBriefing"),
	candles: K(Wt, "IconCandles")
}, Yn = {
	up: q.up,
	down: q.down,
	flat: q.flat
};
//#endregion
//#region src/lib/chart.ts
function Xn(e) {
	let t = new Map(e.map((e, t) => [e, t]));
	return {
		colorFor(e) {
			let n = t.get(e);
			return n === void 0 || n >= y.length ? "var(--ask-text-tertiary)" : y[n];
		},
		get overflows() {
			return e.length > y.length;
		},
		max: y.length
	};
}
function Zn(e, t = "market") {
	if (e == null || e === 0) return "var(--ask-text-tertiary)";
	let n = re[t];
	return e > 0 ? n.positive[2] : n.negative[2];
}
var Qn = {
	strokeWidth: m.lineWidth,
	dotSize: m.markerSize,
	fillOpacity: m.areaOpacity,
	barRadius: m.barRadius
};
function $n(e) {
	let t = new Set(e);
	if (t.size > 1) throw Error(`Dual-axis chart refused: series span ${t.size} units (${[...t].join(", ")}). Use small multiples, or index the series to a common base.`);
}
//#endregion
//#region src/lib/googleChartTheme.ts
function er({ gutter: e = 64, edge: t = 16 } = {}) {
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
	let n = v[e];
	return {
		backgroundColor: "transparent",
		colors: [...y],
		fontName: "Lato",
		fontSize: J(b["2xs"]),
		chartArea: er(),
		hAxis: {
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: J(b["2xs"])
			},
			gridlines: { color: "transparent" },
			baselineColor: n.axis
		},
		vAxis: {
			textStyle: {
				color: n.axisLabel,
				fontName: "Lato",
				fontSize: J(b["2xs"])
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
				fontSize: J(b["2xs"])
			}
		},
		tooltip: {
			isHtml: !0,
			trigger: "focus"
		},
		animation: { duration: 0 }
	};
}
function X(e, t = "ltr", n = {}) {
	let r = Y(e, t);
	return {
		...r,
		lineWidth: m.lineWidth,
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
function tr(e, t = "ltr") {
	return {
		...X(e, t),
		areaOpacity: m.areaOpacity
	};
}
function nr(e, t = "ltr") {
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
function Z(e, t = "ltr", n = !0) {
	let r = Y(e, t);
	return {
		...r,
		pieHole: n ? .6 : 0,
		pieSliceBorderColor: v[e].surface,
		pieSliceText: "none",
		legend: {
			...r.legend,
			position: t === "rtl" ? "left" : "right"
		},
		chartArea: {
			...er({
				gutter: 8,
				edge: 8
			}),
			top: 8,
			bottom: 8
		}
	};
}
function rr(e, t, n) {
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
function ir(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		let t = n[e];
		n[e] = ar(t) && ar(r) ? {
			...t,
			...r
		} : r;
	}
	return n;
}
function ar(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var or = e.md;
//#endregion
//#region src/components/Logo.tsx
function sr({ height: e = 32, title: t = "Ask Analyst", className: n }) {
	let r = bn();
	return /* @__PURE__ */ F("svg", {
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
			/* @__PURE__ */ P("path", {
				d: "M107.202 38.7237L118.404 2.93158H125.742L136.971 38.7237H132.266L122.438 6.06999H121.735L111.907 38.7237H107.202ZM113.924 28.1653V24.3178H130.221V28.1653H113.924Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M149.178 39.3394C147.232 39.371 145.291 39.1305 143.412 38.6249C142.003 38.2377 140.634 37.7168 139.323 37.0694L138.9 32.8702C140.343 33.6121 141.847 34.2299 143.396 34.717C145.195 35.264 147.067 35.5291 148.947 35.503C151.058 35.503 152.646 35.1658 153.712 34.4916C154.225 34.1836 154.643 33.7422 154.924 33.2146C155.205 32.687 155.337 32.093 155.306 31.4961V31.1883C155.335 30.4332 155.124 29.6883 154.702 29.0613C154.129 28.3779 153.38 27.8646 152.536 27.5772C151.086 27.031 149.596 26.5991 148.079 26.2856C146.201 25.9239 144.377 25.3274 142.648 24.5103C141.472 23.9566 140.485 23.0674 139.812 21.9545C139.212 20.8164 138.918 19.5415 138.96 18.2555V18.0026C138.96 15.6172 139.79 13.8071 141.45 12.5723C143.11 11.3374 145.609 10.7291 148.947 10.7475C150.836 10.7124 152.72 10.9569 154.537 11.473C155.888 11.8706 157.188 12.4239 158.412 13.1219L158.835 16.9693C157.52 16.2174 156.119 15.6251 154.663 15.205C152.942 14.7165 151.159 14.4796 149.37 14.5015C148.206 14.4692 147.044 14.6157 145.924 14.9357C145.177 15.1392 144.512 15.5717 144.022 16.1724C143.633 16.7222 143.432 17.3838 143.451 18.0576V18.2774C143.425 19.0178 143.631 19.7478 144.039 20.3661C144.589 21.0493 145.32 21.5636 146.149 21.8501C147.525 22.3663 148.94 22.7689 150.382 23.0538C152.295 23.3805 154.162 23.934 155.944 24.7027C157.152 25.2183 158.179 26.0811 158.895 27.1815C159.537 28.3592 159.847 29.689 159.791 31.0289V31.5016C159.791 34.0666 158.895 36.0086 157.104 37.3277C155.312 38.6469 152.67 39.3174 149.178 39.3394Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M163.936 38.7238V1.61807H168.443V38.7238H163.936ZM181.689 38.7238L170.883 25.9778H167.998V22.4492H170.883L181.244 11.3906H186.619L174.23 24.5818V23.4825L187.141 38.7183L181.689 38.7238Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M107.202 80.2486L118.404 44.4894H125.742L136.971 80.2761H132.266L122.438 47.6278H121.735L111.907 80.2761L107.202 80.2486ZM113.924 69.6956V65.8482H130.221V69.6956H113.924Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M140.637 80.2487V52.9209H145.177L144.979 59.4725L145.177 59.7254V80.2487H140.637ZM158.923 80.2487V63.254C158.953 61.9587 158.75 60.6685 158.324 59.445C157.958 58.4264 157.269 57.5556 156.362 56.9662C155.235 56.3213 153.947 56.0141 152.652 56.0813C151.359 56.0507 150.077 56.3296 148.914 56.8947C147.893 57.4068 147.014 58.1618 146.353 59.0933C145.687 60.0395 145.219 61.1109 144.979 62.2427L144.165 59.0218H145.144C145.439 57.8041 145.974 56.6571 146.715 55.6471C147.501 54.5999 148.534 53.7634 149.722 53.2122C151.181 52.5676 152.766 52.2577 154.361 52.3053C156.191 52.2218 158.008 52.6481 159.61 53.5365C160.947 54.3626 161.975 55.6067 162.534 57.0761C163.198 58.8914 163.513 60.816 163.463 62.7483V80.2487H158.923Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M175.879 80.8367C173.171 80.8367 171.094 80.1789 169.646 78.8635C168.201 77.5499 167.475 75.6646 167.475 73.2243V72.4108C167.475 69.8898 168.256 68.0082 169.817 66.7661C171.378 65.5239 173.855 64.661 177.248 64.1773L185.905 62.9461L186.152 66.2439L177.808 67.4476C175.72 67.7444 174.227 68.2537 173.329 68.9756C172.873 69.3637 172.513 69.8531 172.28 70.4046C172.046 70.9562 171.944 71.5547 171.982 72.1525V72.5977C171.945 73.2116 172.046 73.8261 172.276 74.3965C172.506 74.9669 172.86 75.4789 173.312 75.8955C174.203 76.6613 175.533 77.0424 177.303 77.0387C178.691 77.0762 180.07 76.8001 181.337 76.2308C182.407 75.7287 183.339 74.9742 184.052 74.0322C184.739 73.1316 185.218 72.0897 185.454 70.9818L186.152 74.0597H185.283C185.024 75.2593 184.525 76.3941 183.816 77.396C183.043 78.4686 182.005 79.3227 180.804 79.8748C179.255 80.5592 177.572 80.8879 175.879 80.8367ZM185.283 80.2486L185.498 73.62L185.333 72.9165V64.2048L185.36 62.6053C185.36 60.3848 184.794 58.7359 183.662 57.6586C182.53 56.5814 180.743 56.0482 178.303 56.0592C176.472 56.0381 174.649 56.3223 172.911 56.9001C171.398 57.4067 169.94 58.0641 168.558 58.8623L168.976 55.0149C169.79 54.5317 170.637 54.1056 171.51 53.7398C173.891 52.7468 176.449 52.2475 179.029 52.2722C180.723 52.2329 182.413 52.4724 184.03 52.9813C185.269 53.3651 186.393 54.0515 187.299 54.9785C188.206 55.9055 188.868 57.0439 189.224 58.2907C189.631 59.6715 189.829 61.1054 189.812 62.5449V80.2431L185.283 80.2486Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M195.495 80.2486V43.1484H200.002V80.2486H195.495Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M218.371 76.022L216.002 77.0553L224.181 52.9209H228.858L216.002 89.8837H211.413L215.722 77.3961L217.712 79.1329H212.562L203.625 52.9209H208.308L215.761 76.0055L218.371 76.022Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M240.692 80.8642C238.744 80.898 236.801 80.6575 234.921 80.1497C233.513 79.7657 232.145 79.2466 230.837 78.5997L230.414 74.3951C231.856 75.1411 233.36 75.7608 234.91 76.2473C236.711 76.7929 238.585 77.0562 240.466 77.0278C242.577 77.0278 244.164 76.6925 245.226 76.022C245.74 75.7147 246.159 75.2736 246.441 74.7459C246.723 74.2182 246.856 73.6239 246.826 73.0265V72.7187C246.855 71.9634 246.644 71.2183 246.221 70.5916C245.64 69.9028 244.879 69.389 244.023 69.1076C242.577 68.5553 241.088 68.1233 239.571 67.8159C237.693 67.4551 235.868 66.8586 234.14 66.0406C232.965 65.4937 231.976 64.6124 231.299 63.5068C230.696 62.3692 230.401 61.0943 230.441 59.8078V59.555C230.441 57.1659 231.273 55.3558 232.937 54.1246C234.6 52.8934 237.101 52.2778 240.439 52.2778C242.328 52.2428 244.211 52.4872 246.029 53.0033C247.381 53.3985 248.681 53.952 249.904 54.6522L250.327 58.4997C247.454 56.8349 244.182 55.982 240.862 56.0318C239.698 55.9992 238.536 56.1457 237.416 56.466C236.669 56.6714 236.003 57.1012 235.509 57.6972C235.112 58.2566 234.907 58.9298 234.926 59.6154V59.8408C234.901 60.5803 235.105 61.3094 235.509 61.9294C236.062 62.6112 236.795 63.1252 237.625 63.4134C239.003 63.9369 240.422 64.3433 241.868 64.6281C243.781 64.9641 245.647 65.5288 247.425 66.3099C248.636 66.823 249.665 67.6862 250.382 68.7888C251.024 69.9664 251.333 71.2963 251.278 72.6362V73.0704C251.278 75.6354 250.382 77.5774 248.59 78.8966C246.798 80.2157 244.166 80.8716 240.692 80.8642Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M252.003 56.9497V53.3111H272.109L271.691 56.9497H252.003ZM256.516 53.7618V46.0669L261.078 45.4788L260.88 53.7233L256.516 53.7618ZM265.25 80.8093C263.501 80.88 261.76 80.555 260.154 79.8584C258.905 79.2635 257.91 78.2395 257.351 76.9728C256.73 75.446 256.436 73.8057 256.488 72.158V54.9325H260.968V71.6469C260.968 73.4387 261.375 74.7633 262.199 75.6097C263.024 76.4562 264.398 76.8849 266.343 76.8849C267.413 76.8884 268.479 76.7667 269.52 76.5221C270.513 76.2862 271.476 75.9377 272.389 75.4833L271.972 79.3747C270.995 79.8584 269.96 80.2167 268.894 80.441C267.696 80.6948 266.474 80.8183 265.25 80.8093Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ P("path", {
				d: "M87.3332 69.822C87.0859 79.0449 79.3525 86.9651 70.2011 87.9599C61.6214 88.9108 53.0196 88.2073 44.4288 88.3777C42.8862 88.3538 41.3705 88.7838 40.0703 89.6143C32.6337 94.5061 25.1312 99.2329 17.6562 104.031C14.6497 105.966 11.6597 104.454 11.5663 100.81C11.4618 96.6936 11.4893 92.5659 11.5663 88.4546C11.6249 87.8808 11.5069 87.3027 11.2279 86.7978C10.9489 86.2929 10.5224 85.8853 10.0053 85.6295C3.12939 81.4468 0.216331 74.9391 0.122893 67.2278C-0.0694783 52.1293 -0.00352228 37.0309 0.100908 21.9545C0.166864 13.71 3.45917 7.11437 10.7088 2.71731C13.7843 0.937742 17.2858 0.0277129 20.8386 0.0845626C38.1355 -0.0308604 55.4655 -0.00337858 72.7405 0.0241031C81.3367 0.0241031 87.4212 6.0261 87.5146 14.6444C87.7262 33.0008 87.8207 51.4692 87.3332 69.822ZM17.1066 97.6885C24.5211 92.9011 31.4355 88.4601 38.3059 83.9806C39.7337 82.9984 41.4319 82.4854 43.1647 82.5131C51.0354 82.59 58.9135 82.59 66.7989 82.5131C75.725 82.4141 81.6665 76.9178 81.7654 68.1237C81.9578 51.0081 81.9193 33.887 81.7654 16.7659C81.7105 9.55475 77.5992 5.60288 70.3935 5.5699C54.1848 5.48746 37.9651 5.44349 21.773 5.5699C12.715 5.64136 6.09741 11.7093 5.92702 20.7288C5.62472 36.6682 5.75664 52.6075 5.97649 68.5084C6.05344 74.384 8.84008 78.9515 14.4903 81.3753C16.458 82.2163 17.1725 83.5739 17.1121 85.679C17.0351 89.5044 17.1066 93.3299 17.1066 97.6885Z",
				fill: `url(#${r})`
			}),
			/* @__PURE__ */ P("path", {
				d: "M71.4489 44.2806C71.4489 52.69 71.3774 61.0994 71.4928 69.5088C71.5313 72.0316 70.5585 72.9879 68.1401 72.944C64.573 72.878 60.9948 72.8945 57.4442 72.944C55.4545 72.9769 54.7565 72.1305 54.762 70.1298C54.817 52.7614 54.817 35.393 54.762 18.0246C54.762 15.892 55.6689 15.3259 57.5431 15.3479C61.2037 15.3973 64.8588 15.4303 68.5358 15.3479C70.8058 15.2984 71.5258 16.2987 71.5038 18.5028C71.3884 27.0935 71.4489 35.6953 71.4489 44.2806Z",
				fill: "#0086DB"
			}),
			/* @__PURE__ */ P("path", {
				d: "M34.6509 52.7615C34.6509 47.1882 34.7498 41.6039 34.6069 36.0306C34.541 33.3484 35.6457 32.4415 38.1905 32.5349C41.2959 32.6559 44.4124 32.6229 47.5343 32.5349C49.8427 32.469 51.0245 33.6012 51.0354 35.7668C51.0904 47.1076 51.0904 58.4465 51.0354 69.7836C51.0354 71.7843 50.0516 72.999 47.7981 72.9385C44.4124 72.856 41.0266 72.8341 37.6464 72.9385C35.3269 73.0099 34.6069 71.9382 34.6344 69.7781C34.6948 64.1059 34.6509 58.4337 34.6509 52.7615Z",
				fill: "#09A2F0"
			}),
			/* @__PURE__ */ P("path", {
				d: "M30.7759 60.5058C30.7759 63.7046 30.688 66.909 30.8089 70.1079C30.8859 72.103 30.1549 72.9605 28.1432 72.922C24.7575 72.856 21.3717 72.922 17.986 72.889C15.7874 72.889 14.7157 71.7897 14.7376 69.4593C14.8109 63.1495 14.8109 56.8397 14.7376 50.5299C14.7102 48.3314 15.6555 47.3476 17.8321 47.375C21.0364 47.408 24.2408 47.4135 27.4397 47.375C29.7206 47.3366 30.8199 48.3039 30.7759 50.6728C30.721 53.9706 30.7759 57.2684 30.7759 60.5662V60.5058Z",
				fill: "#0EA4F1"
			}),
			/* @__PURE__ */ P("defs", { children: /* @__PURE__ */ F("linearGradient", {
				id: r,
				x1: "-0.00352228",
				y1: "52.4371",
				x2: "87.5696",
				y2: "52.4371",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ P("stop", { stopColor: "#0EA4F1" }), /* @__PURE__ */ P("stop", {
					offset: "1",
					stopColor: "#0077CA"
				})]
			}) })
		]
	});
}
function cr({ height: e = 32, title: t = "Ask Analyst", className: n }) {
	let r = bn();
	return /* @__PURE__ */ F("svg", {
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
			/* @__PURE__ */ P("path", {
				d: "M87.3332 69.822C87.0859 79.0449 79.3525 86.9651 70.2011 87.9599C61.6214 88.9108 53.0196 88.2073 44.4288 88.3777C42.8862 88.3538 41.3705 88.7838 40.0703 89.6143C32.6337 94.5061 25.1312 99.2329 17.6562 104.031C14.6497 105.966 11.6597 104.454 11.5663 100.81C11.4618 96.6936 11.4893 92.5659 11.5663 88.4546C11.6249 87.8808 11.5069 87.3027 11.2279 86.7978C10.9489 86.2929 10.5224 85.8853 10.0053 85.6295C3.12939 81.4468 0.216331 74.9391 0.122893 67.2278C-0.0694783 52.1293 -0.00352228 37.0309 0.100908 21.9545C0.166864 13.71 3.45917 7.11437 10.7088 2.71731C13.7843 0.937742 17.2858 0.0277129 20.8386 0.0845626C38.1355 -0.0308604 55.4655 -0.00337858 72.7405 0.0241031C81.3367 0.0241031 87.4212 6.0261 87.5146 14.6444C87.7262 33.0008 87.8207 51.4692 87.3332 69.822ZM17.1066 97.6885C24.5211 92.9011 31.4355 88.4601 38.3059 83.9806C39.7337 82.9984 41.4319 82.4854 43.1647 82.5131C51.0354 82.59 58.9135 82.59 66.7989 82.5131C75.725 82.4141 81.6665 76.9178 81.7654 68.1237C81.9578 51.0081 81.9193 33.887 81.7654 16.7659C81.7105 9.55475 77.5992 5.60288 70.3935 5.5699C54.1848 5.48746 37.9651 5.44349 21.773 5.5699C12.715 5.64136 6.09741 11.7093 5.92702 20.7288C5.62472 36.6682 5.75664 52.6075 5.97649 68.5084C6.05344 74.384 8.84008 78.9515 14.4903 81.3753C16.458 82.2163 17.1725 83.5739 17.1121 85.679C17.0351 89.5044 17.1066 93.3299 17.1066 97.6885Z",
				fill: `url(#${r})`
			}),
			/* @__PURE__ */ P("path", {
				d: "M71.4489 44.2806C71.4489 52.69 71.3774 61.0994 71.4928 69.5088C71.5313 72.0316 70.5585 72.9879 68.1401 72.944C64.573 72.878 60.9948 72.8945 57.4442 72.944C55.4545 72.9769 54.7565 72.1305 54.762 70.1298C54.817 52.7614 54.817 35.393 54.762 18.0246C54.762 15.892 55.6689 15.3259 57.5431 15.3479C61.2037 15.3973 64.8588 15.4303 68.5358 15.3479C70.8058 15.2984 71.5258 16.2987 71.5038 18.5028C71.3884 27.0935 71.4489 35.6953 71.4489 44.2806Z",
				fill: "#0086DB"
			}),
			/* @__PURE__ */ P("path", {
				d: "M34.6509 52.7615C34.6509 47.1882 34.7498 41.6039 34.6069 36.0306C34.541 33.3484 35.6457 32.4415 38.1905 32.5349C41.2959 32.6559 44.4124 32.6229 47.5343 32.5349C49.8427 32.469 51.0245 33.6012 51.0354 35.7668C51.0904 47.1076 51.0904 58.4465 51.0354 69.7836C51.0354 71.7843 50.0516 72.999 47.7981 72.9385C44.4124 72.856 41.0266 72.8341 37.6464 72.9385C35.3269 73.0099 34.6069 71.9382 34.6344 69.7781C34.6948 64.1059 34.6509 58.4337 34.6509 52.7615Z",
				fill: "#09A2F0"
			}),
			/* @__PURE__ */ P("path", {
				d: "M30.7759 60.5058C30.7759 63.7046 30.688 66.909 30.8089 70.1079C30.8859 72.103 30.1549 72.9605 28.1432 72.922C24.7575 72.856 21.3717 72.922 17.986 72.889C15.7874 72.889 14.7157 71.7897 14.7376 69.4593C14.8109 63.1495 14.8109 56.8397 14.7376 50.5299C14.7102 48.3314 15.6555 47.3476 17.8321 47.375C21.0364 47.408 24.2408 47.4135 27.4397 47.375C29.7206 47.3366 30.8199 48.3039 30.7759 50.6728C30.721 53.9706 30.7759 57.2684 30.7759 60.5662V60.5058Z",
				fill: "#0EA4F1"
			}),
			/* @__PURE__ */ P("defs", { children: /* @__PURE__ */ F("linearGradient", {
				id: r,
				x1: "-0.00352228",
				y1: "52.4371",
				x2: "87.5696",
				y2: "52.4371",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ P("stop", { stopColor: "#0EA4F1" }), /* @__PURE__ */ P("stop", {
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
}, lr = [
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
function ur({ items: e = lr, activeHref: t, mainId: n = "main", brand: r, actions: i, width: a = "content" }) {
	let [o, s] = Sn(!1), c = (e, n) => /* @__PURE__ */ P("a", {
		href: e.href,
		className: Q.navItem,
		"aria-current": e.href === t ? "page" : void 0,
		onClick: n,
		children: e.label
	}, e.href);
	return /* @__PURE__ */ F(yn, { children: [
		/* @__PURE__ */ P("a", {
			href: `#${n}`,
			className: Q.skipLink,
			children: "Skip to content"
		}),
		/* @__PURE__ */ P("header", {
			className: Q.header,
			children: /* @__PURE__ */ F("div", {
				className: Q.headerInner,
				"data-width": a,
				children: [
					/* @__PURE__ */ P(O, {
						gap: "sm",
						wrap: "nowrap",
						children: r ?? /* @__PURE__ */ P(sr, {
							height: 28,
							title: "Ask Analyst"
						})
					}),
					/* @__PURE__ */ P("nav", {
						"aria-label": "Primary",
						className: Q.nav,
						children: e.map((e) => c(e))
					}),
					/* @__PURE__ */ F(O, {
						gap: "sm",
						wrap: "nowrap",
						children: [i, /* @__PURE__ */ P(T, {
							opened: o,
							onClick: () => s((e) => !e),
							className: Q.burger,
							"aria-label": o ? "Close navigation" : "Open navigation",
							"aria-expanded": o,
							size: "sm"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ P(D, {
			opened: o,
			onClose: () => s(!1),
			title: "Navigation",
			size: "xs",
			position: "right",
			children: /* @__PURE__ */ P("nav", {
				"aria-label": "Primary mobile",
				children: /* @__PURE__ */ P(j, {
					gap: "xs",
					children: e.map((e) => c(e, () => s(!1)))
				})
			})
		})
	] });
}
//#endregion
//#region src/components/AskChart.tsx
var dr = {
	Line: "LineChart",
	Area: "AreaChart",
	Bar: "BarChart",
	Column: "ColumnChart",
	Pie: "PieChart",
	Donut: "PieChart"
}, fr = /* @__PURE__ */ new Set([
	"Line",
	"Area",
	"Column"
]);
function pr(e, t, n) {
	switch (e) {
		case "Line": return X(t, n);
		case "Area": return tr(t, n);
		case "Bar":
		case "Column": return nr(t, n);
		case "Pie": return Z(t, n, !1);
		case "Donut": return Z(t, n, !0);
		default: return Y(t, n);
	}
}
function mr({ kind: e, data: t, title: n, description: r, height: i = 240, seriesKeys: a, options: o }) {
	let { colorScheme: s } = jt(), { dir: c } = At(), l = s === "dark" ? "dark" : s === "light" ? "light" : document.documentElement.getAttribute("data-mantine-color-scheme") ?? "light", u = Math.max(0, (t[0]?.length ?? 1) - 1), d = xn(() => {
		let t = pr(e, l, c), n = a ? a.map((e) => Xn(a).colorFor(e)) : t.colors;
		return ir({
			...fr.has(e) ? rr(t, c, u) : t,
			colors: n
		}, o);
	}, [
		e,
		l,
		c,
		a,
		u,
		o
	]), [f, ...p] = t;
	return /* @__PURE__ */ F("figure", {
		style: { margin: 0 },
		children: [
			/* @__PURE__ */ F("figcaption", { children: [/* @__PURE__ */ P(N, {
				size: "xs",
				fw: 700,
				c: "var(--ask-text-secondary)",
				children: n
			}), r && /* @__PURE__ */ P(N, {
				size: "xs",
				c: "var(--ask-text-tertiary)",
				children: r
			})] }),
			/* @__PURE__ */ P("div", {
				"aria-hidden": "true",
				className: "ask-chart-frame",
				children: /* @__PURE__ */ P(Cn, {
					chartType: dr[e],
					data: t,
					options: d,
					width: "100%",
					height: `${i}px`,
					loader: /* @__PURE__ */ P(A, {
						height: i,
						radius: "sm"
					})
				})
			}),
			/* @__PURE__ */ F("table", {
				className: "sr-only",
				children: [
					/* @__PURE__ */ P("caption", { children: n }),
					/* @__PURE__ */ P("thead", { children: /* @__PURE__ */ P("tr", { children: f.map((e, t) => /* @__PURE__ */ P("th", {
						scope: "col",
						children: String(e)
					}, t)) }) }),
					/* @__PURE__ */ P("tbody", { children: p.map((e, t) => /* @__PURE__ */ P("tr", { children: e.map((e, t) => t === 0 ? /* @__PURE__ */ P("th", {
						scope: "row",
						children: String(e)
					}, t) : /* @__PURE__ */ P("td", { children: e === null ? "no data" : String(e) }, t)) }, t)) })
				]
			})
		]
	});
}
var hr = { root: "_root_201721" };
//#endregion
//#region src/components/ColorSchemeToggle.tsx
function gr() {
	let { colorScheme: e, setColorScheme: t } = jt(), n = e === "auto" ? document.documentElement.getAttribute("data-mantine-color-scheme") ?? "light" : e;
	return /* @__PURE__ */ P(k, {
		className: hr.root,
		value: n,
		onChange: (e) => t(e),
		"aria-label": "Colour scheme",
		data: [{
			value: "light",
			label: /* @__PURE__ */ F(O, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ P(q.sun, { size: "xs" }), /* @__PURE__ */ P("span", { children: "Light" })]
			})
		}, {
			value: "dark",
			label: /* @__PURE__ */ F(O, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ P(q.moon, { size: "xs" }), /* @__PURE__ */ P("span", { children: "Dark" })]
			})
		}]
	});
}
//#endregion
//#region src/components/DirectionToggle.tsx
function _r() {
	let { dir: e, setDirection: t } = At();
	return /* @__PURE__ */ P(k, {
		className: hr.root,
		value: e,
		onChange: (e) => t(e),
		"aria-label": "Text direction",
		data: [{
			value: "ltr",
			label: /* @__PURE__ */ F(O, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ P(q.directionLtr, { size: "xs" }), /* @__PURE__ */ P("span", { children: "LTR" })]
			})
		}, {
			value: "rtl",
			label: /* @__PURE__ */ F(O, {
				gap: 6,
				wrap: "nowrap",
				justify: "center",
				children: [/* @__PURE__ */ P(q.directionRtl, { size: "xs" }), /* @__PURE__ */ P("span", { children: "RTL" })]
			})
		}]
	});
}
//#endregion
//#region src/components/DataState.tsx
function vr({ rows: e = 5, cols: t = 5 }) {
	return /* @__PURE__ */ F("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		children: [/* @__PURE__ */ P(N, {
			style: {
				position: "absolute",
				width: 1,
				height: 1,
				overflow: "hidden",
				clip: "rect(0 0 0 0)",
				whiteSpace: "nowrap"
			},
			children: "Loading market data"
		}), /* @__PURE__ */ P(M, {
			"aria-hidden": "true",
			children: /* @__PURE__ */ P(M.Tbody, { children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ P(M.Tr, { children: Array.from({ length: t }).map((e, t) => /* @__PURE__ */ P(M.Td, { children: /* @__PURE__ */ P(A, {
				height: 14,
				radius: "xs",
				width: t === 0 ? "60%" : "80%"
			}) }, t)) }, n)) })
		})]
	});
}
function yr({ title: e, description: t, action: n }) {
	return /* @__PURE__ */ P(Le, {
		py: "xl",
		role: "status",
		children: /* @__PURE__ */ F(j, {
			align: "center",
			gap: "sm",
			maw: 360,
			children: [
				/* @__PURE__ */ P(N, {
					fw: 600,
					children: e
				}),
				t && /* @__PURE__ */ P(N, {
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
function br({ title: e = "Could not load data", description: t, onRetry: n }) {
	return /* @__PURE__ */ P(w, {
		role: "alert",
		variant: "error",
		title: e,
		children: /* @__PURE__ */ F(j, {
			gap: "sm",
			align: "flex-start",
			children: [t && /* @__PURE__ */ P(N, {
				size: "sm",
				children: t
			}), n && /* @__PURE__ */ P(E, {
				size: "sm",
				onClick: n,
				children: "Try again"
			})]
		})
	});
}
function xr({ asOf: e, delayedMinutes: t }) {
	return /* @__PURE__ */ F(N, {
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
function Sr({ rows: e, status: t = "ready", caption: n, stale: r = !1, stickyHeader: i = !1, onRetry: a }) {
	return t === "loading" ? /* @__PURE__ */ P(vr, {
		rows: 5,
		cols: 5
	}) : t === "error" ? /* @__PURE__ */ P(br, {
		description: "The market feed did not respond. Your connection may be offline.",
		onRetry: a
	}) : t === "empty" || e.length === 0 ? /* @__PURE__ */ P(yr, {
		title: "No matching stocks",
		description: "Try widening your filters, or clear the search to see the full list."
	}) : /* @__PURE__ */ P("div", {
		className: $.scroller,
		children: /* @__PURE__ */ F(M, {
			className: [i && $.stickyHeader, r && $.stale].filter(Boolean).join(" "),
			children: [
				/* @__PURE__ */ F(M.Caption, {
					style: {
						captionSide: "top",
						textAlign: "left",
						paddingBottom: "var(--ask-space-2)",
						color: "var(--ask-text-tertiary)",
						fontSize: "var(--ask-font-2xs)"
					},
					children: [n, r && " · Delayed"]
				}),
				/* @__PURE__ */ P(M.Thead, { children: /* @__PURE__ */ F(M.Tr, { children: [
					/* @__PURE__ */ P(M.Th, {
						scope: "col",
						"data-priority": "1",
						children: "Symbol"
					}),
					/* @__PURE__ */ P(M.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "1",
						children: "Price"
					}),
					/* @__PURE__ */ P(M.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "2",
						children: "Change"
					}),
					/* @__PURE__ */ P(M.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "1",
						children: "%"
					}),
					/* @__PURE__ */ P(M.Th, {
						scope: "col",
						"data-numeric": !0,
						"data-priority": "3",
						children: "Volume"
					})
				] }) }),
				/* @__PURE__ */ P(M.Tbody, { children: e.map((e) => {
					let t = Te(e.changePct), n = S[t], r = Yn[t];
					return /* @__PURE__ */ F(M.Tr, { children: [
						/* @__PURE__ */ P(M.Th, {
							scope: "row",
							"data-priority": "1",
							children: e.symbol
						}),
						/* @__PURE__ */ P(M.Td, {
							"data-numeric": !0,
							"data-priority": "1",
							"data-tick": e.tick,
							children: x(e.price)
						}),
						/* @__PURE__ */ P(M.Td, {
							"data-numeric": !0,
							"data-priority": "2",
							style: { color: n },
							children: C(e.change)
						}),
						/* @__PURE__ */ P(M.Td, {
							"data-numeric": !0,
							"data-priority": "1",
							style: { color: n },
							children: /* @__PURE__ */ F("span", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: 4
								},
								children: [
									/* @__PURE__ */ P(r, { size: "xs" }),
									/* @__PURE__ */ F("span", {
										className: "sr-only",
										children: [we[t], " "]
									}),
									ye(e.changePct)
								]
							})
						}),
						/* @__PURE__ */ P(M.Td, {
							"data-numeric": !0,
							"data-priority": "3",
							children: be(e.volume)
						})
					] }, e.symbol);
				}) })
			]
		})
	});
}
//#endregion
//#region src/components/PageHeading.tsx
function Cr({ title: e, meta: t = [], centered: n = !1, children: r }) {
	return /* @__PURE__ */ F("div", {
		className: Q.titleSection,
		"data-centered": n || void 0,
		children: [
			/* @__PURE__ */ P(Et, {
				order: 1,
				className: Q.title,
				children: e
			}),
			t.length > 0 && /* @__PURE__ */ P("div", {
				className: Q.meta,
				children: t.map((e, t) => /* @__PURE__ */ F("span", {
					style: { display: "contents" },
					children: [t > 0 && /* @__PURE__ */ P("span", {
						className: Q.metaDot,
						"aria-hidden": "true"
					}), /* @__PURE__ */ P("span", { children: e })]
				}, t))
			}),
			r
		]
	});
}
//#endregion
export { ur as AppHeader, mr as AskChart, or as CHART_TOOLTIP_RADIUS, gr as ColorSchemeToggle, Ee as DIRECTION_GLYPH, Yn as DIRECTION_ICON, we as DIRECTION_LABEL, S as DIRECTION_TOKEN, _r as DirectionToggle, fe as EMAIL_DIRECTION, ce as EMAIL_FONT_STACK, yr as EmptyState, br as ErrorState, q as Icons, sr as Logo, cr as LogoMark, Sr as MarketTable, lr as NAV_ITEMS, xe as NOT_AVAILABLE, ge as PRECISION, Cr as PageHeading, xr as StaleNotice, vr as TableSkeleton, tr as areaChartOptions, $n as assertSingleAxis, nr as barChartOptions, Y as baseChartOptions, Xn as createSeriesPalette, Jn as cssVariablesResolver, Te as direction, Zn as directionColor, ue as emailColor, ie as emailSize, ee as emailStyle, C as formatChange, _e as formatCompact, Se as formatDate, De as formatMarketCap, ve as formatNumber, ye as formatPercent, x as formatPrice, Ce as formatTime, be as formatVolume, X as lineChartOptions, K as makeIcon, Qn as markDefaults, ir as mergeChartOptions, rr as mirrorValueAxis, Z as pieChartOptions, qn as theme, a as tokens };

//# sourceMappingURL=index.js.map