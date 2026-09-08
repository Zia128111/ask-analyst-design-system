//#region src/lib/format.ts
var e = {
	price: 2,
	index: 2,
	percent: 2,
	change: 2,
	ratio: 2,
	volume: 0,
	shares: 0,
	currency: 2
}, t = "—", n = "en-US", r = (e) => e == null || typeof e == "number" && !Number.isFinite(e);
function i(e, t, n) {
	return t ? n === "parens" ? `(${e})` : `-${e}` : e;
}
function a(e, t = {}) {
	if (r(e)) return "—";
	let { decimals: a = 2, signStyle: o = "minus" } = t;
	return i(new Intl.NumberFormat(n, {
		minimumFractionDigits: a,
		maximumFractionDigits: a
	}).format(Math.abs(e)), e < 0, o);
}
var o = [
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
function s(e, t = {}) {
	if (r(e)) return "—";
	let { decimals: s = 2, threshold: c = 1e6, signStyle: l = "minus" } = t, u = Math.abs(e);
	if (u < c) return i(new Intl.NumberFormat(n, { maximumFractionDigits: 0 }).format(u), e < 0, l);
	let d = o.find((e) => u >= e.limit);
	if (!d) return a(e, {
		decimals: s,
		signStyle: l
	});
	let f = u / d.limit;
	return i(`${new Intl.NumberFormat(n, {
		minimumFractionDigits: s,
		maximumFractionDigits: s
	}).format(f)}${d.suffix}`, e < 0, l);
}
function c(t, a = {}) {
	if (r(t)) return "—";
	let { decimals: o = e.percent, signStyle: s = "parens", showPlus: c = !1 } = a, l = new Intl.NumberFormat(n, {
		minimumFractionDigits: o,
		maximumFractionDigits: o
	}).format(Math.abs(t));
	return t > 0 && c ? `+${l}%` : `${i(l, t < 0, s)}%`;
}
var l = (t) => a(t, { decimals: e.price }), u = (t) => s(t, {
	decimals: e.price,
	threshold: 1e6
}), d = (e) => r(e) ? "—" : `Rs ${s(e, {
	decimals: 2,
	threshold: 1e6
})}`, f = (t) => a(t, {
	decimals: e.change,
	signStyle: "minus"
});
function p(e) {
	return r(e) || e === 0 ? "flat" : e > 0 ? "up" : "down";
}
var m = {
	up: "▲",
	down: "▼",
	flat: "–"
}, h = {
	up: "up",
	down: "down",
	flat: "unchanged"
}, g = {
	up: "var(--ask-positive-text)",
	down: "var(--ask-negative-text)",
	flat: "var(--ask-text-tertiary)"
};
function _(e, t = "Asia/Karachi") {
	return e ? new Intl.DateTimeFormat(n, {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: t,
		timeZoneName: "short"
	}).format(e) : "—";
}
function v(e, t = "Asia/Karachi") {
	return e ? new Intl.DateTimeFormat(n, {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: t
	}).format(e) : "—";
}
//#endregion
export { e as a, s as c, a as d, c as f, u as h, t as i, v as l, _ as m, h as n, p as o, l as p, g as r, f as s, m as t, d as u };

//# sourceMappingURL=format-G4N3Y_M_.js.map