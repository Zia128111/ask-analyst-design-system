//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = /* @__PURE__ */ ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	ICON_RULES: () => I,
	amber: () => s,
	blue: () => n,
	borderWidth: () => _,
	breakpoint: () => T,
	chartCategorical: () => k,
	chartDiverging: () => j,
	chartMark: () => N,
	chartSequential: () => A,
	chartSurface: () => M,
	container: () => E,
	controlHeight: () => y,
	duration: () => S,
	easing: () => C,
	focusRing: () => O,
	fontSize: () => u,
	fontWeight: () => f,
	green: () => a,
	grid: () => D,
	iconSize: () => P,
	iconStroke: () => F,
	ink: () => i,
	letterSpacing: () => p,
	lineHeight: () => d,
	minTargetAA: () => x,
	minTouchTarget: () => b,
	neutral: () => r,
	numeric: () => m,
	radius: () => g,
	red: () => o,
	semanticDark: () => l,
	semanticLight: () => c,
	shadow: () => v,
	space: () => h,
	zIndex: () => w
}), n = [
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
], r = [
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
], i = "#0a0a0a", a = [
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
], o = [
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
], s = [
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
], c = {
	"text-primary": i,
	"text-secondary": r[7],
	"text-tertiary": r[6],
	"text-disabled": r[4],
	"text-link": n[7],
	"text-link-hover": n[8],
	"text-inverse": "#ffffff",
	"text-on-brand": "#ffffff",
	"bg-page": "#ffffff",
	"bg-surface": "#ffffff",
	"bg-subtle": r[0],
	"bg-muted": r[1],
	"bg-brand-subtle": n[0],
	"bg-brand": n[6],
	"bg-hover": n[0],
	"bg-selected": n[1],
	"border-subtle": r[2],
	"border-default": r[3],
	"border-strong": r[5],
	"border-brand": n[6],
	"border-focus": n[7],
	"positive-text": a[7],
	"positive-bg": a[1],
	"positive-border": a[6],
	"negative-text": o[7],
	"negative-bg": o[1],
	"negative-border": o[6],
	"warning-text": s[7],
	"warning-bg": s[1],
	"warning-border": s[6],
	"neutral-text": r[6],
	"neutral-bg": r[1],
	"neutral-border": r[3],
	"logo-wordmark": "#1F2630"
}, l = {
	"text-primary": "#f8fafc",
	"text-secondary": "#cbd5e1",
	"text-tertiary": "#94a3b8",
	"text-disabled": "#475569",
	"text-link": "#5cb0ff",
	"text-link-hover": "#8ac6ff",
	"text-inverse": i,
	"text-on-brand": "#ffffff",
	"bg-page": "#0b1220",
	"bg-surface": "#111a2b",
	"bg-subtle": "#0f172a",
	"bg-muted": "#1e293b",
	"bg-brand-subtle": "#0e2744",
	"bg-brand": n[6],
	"bg-hover": "#16233a",
	"bg-selected": "#1b2b47",
	"border-subtle": "#1e293b",
	"border-default": "#334155",
	"border-strong": "#64748b",
	"border-brand": n[5],
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
}, u = {
	"2xs": "12px",
	xs: "14px",
	sm: "16px",
	md: "18px",
	lg: "20px",
	xl: "24px",
	"2xl": "30px",
	"3xl": "36px",
	"4xl": "48px"
}, d = {
	tight: "1.1",
	snug: "1.25",
	normal: "1.4",
	relaxed: "1.5"
}, f = {
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700
}, p = {
	tighter: "-0.02em",
	tight: "-0.01em",
	normal: "0",
	wide: "0.04em"
}, m = {
	tabular: "tabular-nums",
	proportional: "proportional-nums"
}, h = {
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
}, g = {
	xs: "4px",
	sm: "6px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	full: "9999px"
}, _ = {
	none: "0",
	thin: "1px",
	thick: "2px"
}, v = {
	none: "none",
	xs: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
	sm: "0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 6px 24px 0 rgba(15, 23, 42, 0.03)",
	md: "0 4px 8px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
	lg: "0 12px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.04)",
	xl: "0 24px 32px -8px rgba(15, 23, 42, 0.12), 0 8px 12px -6px rgba(15, 23, 42, 0.06)"
}, y = {
	xs: "28px",
	sm: "32px",
	md: "40px",
	lg: "48px"
}, b = "44px", x = "24px", S = {
	instant: "0ms",
	fast: "120ms",
	base: "200ms",
	slow: "320ms"
}, C = {
	standard: "cubic-bezier(0.2, 0, 0, 1)",
	decelerate: "cubic-bezier(0, 0, 0, 1)",
	accelerate: "cubic-bezier(0.3, 0, 1, 1)"
}, w = {
	base: 0,
	raised: 10,
	sticky: 1100,
	overlay: 1200,
	modal: 1300,
	popover: 1400,
	toast: 1500,
	tooltip: 1600
}, T = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px"
}, E = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	content: "1280px",
	wide: "1600px",
	grid: "1300px",
	prose: "68ch"
}, D = {
	columns: 12,
	columnWidth: "90px",
	gutter: "20px"
}, O = {
	width: _.thick,
	offset: "2px"
}, k = [
	"#1485ff",
	"#ea580c",
	"#0d9488",
	"#9333ea",
	"#a16207",
	"#0891b2",
	"#db2777",
	"#4d7c0f"
], A = [
	"#5cb0ff",
	"#1485ff",
	"#0759b0",
	"#044386"
], j = {
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
}, M = {
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
}, N = {
	lineWidth: 2,
	markerSize: 8,
	barRadius: 4,
	seriesGap: 2,
	areaOpacity: .12
}, P = {
	xs: 14,
	sm: 16,
	md: 20,
	lg: 24,
	xl: 32,
	"2xl": 48
}, F = {
	default: 1.5,
	small: 1.75
}, I = {
	noEmoji: !0,
	decorativeIsAriaHidden: !0,
	iconOnlyNeedsLabel: !0
}, L = "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif", R = {
	brand: n[6],
	brandTint: n[0],
	link: n[7],
	textPrimary: i,
	textSecondary: r[7],
	textTertiary: r[6],
	border: r[2],
	surface: "#ffffff",
	positive: a[7],
	negative: o[7],
	warning: s[7],
	onBrand: c["text-on-brand"]
}, z = {
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
}, B = {
	body: `margin:0;padding:0;background-color:${R.surface};font-family:${L};font-size:${z.bodyText}px;line-height:${z.lineHeightBody}px;color:${R.textPrimary};`,
	container: `width:100%;max-width:${z.contentWidth}px;margin:0 auto;`,
	h1: `margin:0 0 16px;font-family:${L};font-size:${z.h1}px;line-height:34px;font-weight:700;color:${R.textPrimary};`,
	h2: `margin:24px 0 8px;font-family:${L};font-size:${z.h2}px;line-height:28px;font-weight:700;color:${R.textPrimary};`,
	paragraph: `margin:0 0 16px;font-size:${z.bodyText}px;line-height:${z.lineHeightBody}px;color:${R.textSecondary};`,
	link: `color:${R.link};text-decoration:underline;`,
	tableHeaderCell: `padding:${z.cellPaddingY}px ${z.cellPaddingX}px;background-color:${R.brandTint};border-bottom:2px solid ${R.brand};font-size:${z.label}px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${R.textSecondary};text-align:left;`,
	tableCell: `padding:${z.cellPaddingY}px ${z.cellPaddingX}px;border-bottom:1px solid ${R.brand};font-size:${z.smallText}px;color:${R.textPrimary};`,
	tableCellNumeric: `padding:${z.cellPaddingY}px ${z.cellPaddingX}px;border-bottom:1px solid ${R.brand};font-size:${z.smallText}px;color:${R.textPrimary};text-align:right;`,
	positive: `color:${R.positive};font-weight:700;`,
	negative: `color:${R.negative};font-weight:700;`,
	button: `display:inline-block;padding:12px 20px;background-color:${R.brand};border-radius:8px;color:${R.onBrand};font-size:14px;font-weight:700;text-decoration:none;`,
	meta: `font-size:${z.label}px;color:${R.textTertiary};`
}, V = {
	up: {
		glyph: "▲",
		word: "up",
		color: R.positive
	},
	down: {
		glyph: "▼",
		word: "down",
		color: R.negative
	},
	flat: {
		glyph: "–",
		word: "unchanged",
		color: R.textTertiary
	}
};
//#endregion
export { g as A, P as C, d as D, p as E, h as F, t as I, w as L, l as M, c as N, b as O, v as P, D as S, i as T, C as _, B as a, f as b, _ as c, j as d, N as f, S as g, y as h, z as i, o as j, r as k, T as l, E as m, L as n, s as o, M as p, R as r, n as s, V as t, k as u, O as v, F as w, a as x, u as y };

//# sourceMappingURL=email-tokens-D-AP8vjd.js.map