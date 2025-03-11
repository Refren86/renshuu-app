import {
  c as $,
  _ as de,
  i as me,
  a as ue,
  b as ae,
  g as fe,
  r as n,
  j as t,
  d as R,
  e as he,
  f as U,
  s as xe,
  W as ge,
  h as pe,
  k as be,
} from "./index-DznMvQEf.js";
import { T as je, I as B } from "./input-DeF7lX2V.js";
import { B as H } from "./button-CWomrNrA.js";
import { u as ve } from "./useFlashcards-CJZZOr_9.js";
import { L as ye } from "./Loader-RIRhO-G5.js";
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ne = $("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ne = $("CirclePlus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const re = $("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Te = $("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ke = $("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
var Ce = de,
  Ie = function () {
    return Ce.Date.now();
  },
  Ee = Ie,
  Se = /\s/;
function Re(e) {
  for (var s = e.length; s-- && Se.test(e.charAt(s)); );
  return s;
}
var we = Re,
  Le = we,
  ze = /^\s+/;
function He(e) {
  return e && e.slice(0, Le(e) + 1).replace(ze, "");
}
var Fe = He,
  _e = ue,
  Oe = me,
  Ae = "[object Symbol]";
function Me(e) {
  return typeof e == "symbol" || (Oe(e) && _e(e) == Ae);
}
var Be = Me,
  $e = Fe,
  Z = ae,
  We = Be,
  ee = NaN,
  Ue = /^[-+]0x[0-9a-f]+$/i,
  De = /^0b[01]+$/i,
  Pe = /^0o[0-7]+$/i,
  Ve = parseInt;
function qe(e) {
  if (typeof e == "number") return e;
  if (We(e)) return ee;
  if (Z(e)) {
    var s = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Z(s) ? s + "" : s;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = $e(e);
  var a = De.test(e);
  return a || Pe.test(e) ? Ve(e.slice(2), a ? 2 : 8) : Ue.test(e) ? ee : +e;
}
var Ke = qe,
  Ge = ae,
  V = Ee,
  te = Ke,
  Xe = "Expected a function",
  Ye = Math.max,
  Qe = Math.min;
function Je(e, s, a) {
  var d,
    i,
    u,
    m,
    l,
    h,
    g = 0,
    w = !1,
    T = !1,
    j = !0;
  if (typeof e != "function") throw new TypeError(Xe);
  (s = te(s) || 0),
    Ge(a) &&
      ((w = !!a.leading),
      (T = "maxWait" in a),
      (u = T ? Ye(te(a.maxWait) || 0, s) : u),
      (j = "trailing" in a ? !!a.trailing : j));
  function L(o) {
    var p = d,
      k = i;
    return (d = i = void 0), (g = o), (m = e.apply(k, p)), m;
  }
  function A(o) {
    return (g = o), (l = setTimeout(I, s)), w ? L(o) : m;
  }
  function F(o) {
    var p = o - h,
      k = o - g,
      c = s - p;
    return T ? Qe(c, u - k) : c;
  }
  function _(o) {
    var p = o - h,
      k = o - g;
    return h === void 0 || p >= s || p < 0 || (T && k >= u);
  }
  function I() {
    var o = V();
    if (_(o)) return O(o);
    l = setTimeout(I, F(o));
  }
  function O(o) {
    return (l = void 0), j && d ? L(o) : ((d = i = void 0), m);
  }
  function f() {
    l !== void 0 && clearTimeout(l), (g = 0), (d = h = i = l = void 0);
  }
  function r() {
    return l === void 0 ? m : O(V());
  }
  function v() {
    var o = V(),
      p = _(o);
    if (((d = arguments), (i = this), (h = o), p)) {
      if (l === void 0) return A(h);
      if (T) return clearTimeout(l), (l = setTimeout(I, s)), L(h);
    }
    return l === void 0 && (l = setTimeout(I, s)), m;
  }
  return (v.cancel = f), (v.flush = r), v;
}
var Ze = Je;
const et = fe(Ze),
  ie = n.forwardRef(({ className: e, ...s }, a) =>
    t.jsx("div", {
      className: "relative w-full overflow-auto",
      children: t.jsx("table", { ref: a, className: R("w-full caption-bottom text-sm", e), ...s }),
    })
  );
ie.displayName = "Table";
const le = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("thead", { ref: a, className: R("[&_tr]:border-b", e), ...s })
);
le.displayName = "TableHeader";
const ce = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("tbody", { ref: a, className: R("[&_tr:last-child]:border-0", e), ...s })
);
ce.displayName = "TableBody";
const tt = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("tfoot", { ref: a, className: R("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e), ...s })
);
tt.displayName = "TableFooter";
const K = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("tr", {
    ref: a,
    className: R("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
    ...s,
  })
);
K.displayName = "TableRow";
const D = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("th", {
    ref: a,
    className: R("h-12 px-4 bg-primary text-left text-xl align-middle font-medium [&:has([role=checkbox])]:pr-0", e),
    ...s,
  })
);
D.displayName = "TableHead";
const G = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("td", { ref: a, className: R("p-4 text-lg align-middle [&:has([role=checkbox])]:pr-0", e), ...s })
);
G.displayName = "TableCell";
const st = n.forwardRef(({ className: e, ...s }, a) =>
  t.jsx("caption", { ref: a, className: R("mt-4 text-sm", e), ...s })
);
st.displayName = "TableCaption";
const at = ({ word: e, editedRows: s, className: a, onEdit: d }) =>
  t.jsx(G, {
    className: a,
    children: s[e.id]
      ? t.jsxs("div", {
          className: "flex gap-x-2",
          children: [
            t.jsx(H, {
              name: "cancel",
              onClick: (i) => d(i, e),
              variant: "destructive",
              children: t.jsx(re, { className: "size-4" }),
            }),
            " ",
            t.jsx(H, {
              name: "done",
              variant: "success",
              onClick: (i) => d(i, e),
              children: t.jsx(ne, { className: "size-4" }),
            }),
          ],
        })
      : t.jsxs("div", {
          className: "flex gap-x-2",
          children: [
            t.jsx(H, { name: "edit", onClick: (i) => d(i, e), children: t.jsx(Te, { className: "size-4" }) }),
            t.jsx(H, {
              name: "delete",
              variant: "destructive",
              onClick: (i) => d(i, e),
              children: t.jsx(je, { className: "size-4" }),
            }),
          ],
        }),
  });
function oe(e) {
  const s = n.useRef(e);
  return (
    n.useInsertionEffect(() => {
      s.current = e;
    }),
    s
  );
}
function nt(e) {
  const s = oe(e),
    a = n.useMemo(
      () =>
        new ResizeObserver((d, i) => {
          s.current(d, i);
        }),
      [s]
    );
  return n.useEffect(() => () => a.disconnect(), [a]), a;
}
const rt = 3,
  it = 150;
function lt(e) {
  const { itemHeight: s, estimateItemHeight: a } = e;
  if (!s && !a) throw new Error('You must pass either "itemHeight" or "estimateItemHeight" prop');
}
function ct(e) {
  lt(e);
  const {
      itemHeight: s,
      estimateItemHeight: a,
      getItemKey: d,
      itemsCount: i,
      scrollingDelay: u = it,
      overscan: m = rt,
      getScrollElement: l,
    } = e,
    [h, g] = n.useState({}),
    [w, T] = n.useState(0),
    [j, L] = n.useState(0),
    [A, F] = n.useState(!1);
  n.useLayoutEffect(() => {
    const c = l();
    if (!c) return;
    const b = new ResizeObserver(([x]) => {
      var y;
      if (!x) return;
      const C = ((y = x.borderBoxSize[0]) == null ? void 0 : y.blockSize) ?? x.target.getBoundingClientRect().height;
      T(C);
    });
    return (
      b.observe(c),
      () => {
        b.disconnect();
      }
    );
  }, [l]),
    n.useLayoutEffect(() => {
      const c = l();
      if (!c) return;
      const x = he(() => {
        const { scrollTop: C } = c;
        L(C);
      });
      return c.addEventListener("scroll", x), () => c.removeEventListener("scroll", x);
    }, [l]),
    n.useEffect(() => {
      const c = l();
      if (!c) return;
      let b = null;
      const x = () => {
        F(!0),
          U(b) && clearTimeout(b),
          (b = setTimeout(() => {
            F(!1);
          }, u));
      };
      return (
        c.addEventListener("scroll", x),
        () => {
          U(b) && clearTimeout(b), c.removeEventListener("scroll", x);
        }
      );
    }, [u, l]);
  const {
      virtualItems: _,
      startIndex: I,
      endIndex: O,
      totalHeight: f,
      allItems: r,
    } = n.useMemo(() => {
      const c = (N) => {
          if (s) return s(N);
          const z = d(N);
          return U(h[z]) ? h[z] : a(N);
        },
        b = j,
        x = j + w;
      let C = 0,
        y = -1,
        E = -1;
      const M = Array(i);
      for (let N = 0; N < i; N++) {
        const S = { key: d(N), index: N, height: c(N), offsetTop: C };
        (C += S.height), (M[N] = S), S.offsetTop + S.height < b && y++, S.offsetTop + S.height < x && E++;
      }
      return (
        (y = Math.max(0, y - m)),
        (E = Math.min(i - 1, E + m)),
        { virtualItems: M.slice(y, E + 1), startIndex: y, endIndex: E, allItems: M, totalHeight: C }
      );
    }, [j, m, w, s, d, a, h, i]),
    v = oe({ measurementCache: h, getItemKey: d, allItems: r, getScrollElement: l, scrollTop: j }),
    o = n.useCallback(
      (c, b, x) => {
        var J;
        if (!c) return;
        if (!c.isConnected) {
          b.unobserve(c);
          return;
        }
        const C = c.getAttribute("data-index") || "",
          y = parseInt(C, 10);
        if (Number.isNaN(y)) {
          console.error("Dynamic elements must have a valid `data-index` attribute");
          return;
        }
        const { measurementCache: E, getItemKey: M, allItems: X, scrollTop: N } = v.current,
          z = M(y),
          S = !!x;
        if ((b.observe(c), !S && U(E[z]))) return;
        const P =
          ((J = x == null ? void 0 : x.borderBoxSize[0]) == null ? void 0 : J.blockSize) ??
          c.getBoundingClientRect().height;
        if (E[z] === P) return;
        const Y = X[y],
          Q = P - Y.height;
        if (Q !== 0 && N > Y.offsetTop) {
          const W = l();
          W &&
            xe(() => {
              W.scrollBy(0, Q);
            });
        }
        g((W) => ({ ...W, [z]: P }));
      },
      [l, v]
    ),
    p = nt((c, b) => {
      c.forEach((x) => {
        o(x.target, b, x);
      });
    }),
    k = n.useCallback(
      (c) => {
        o(c, p);
      },
      [p, o]
    );
  return {
    virtualItems: _,
    totalHeight: f,
    startIndex: I,
    endIndex: O,
    isScrolling: A,
    allItems: r,
    measureElement: k,
  };
}
const q = ({ word: e, keyToUpdate: s, editedRows: a, className: d, setEditedRows: i }) => {
    const u = e[s],
      [m, l] = n.useState(u || "");
    n.useEffect(() => {
      l(u || "");
    }, [u]);
    function h() {
      i((g) => ({ ...g, [e.id]: { ...g[e.id], [s]: m } }));
    }
    return t.jsx(G, {
      className: d,
      children: a[e.id]
        ? t.jsx(B, { type: "text", value: m, onChange: (g) => l(g.target.value), onBlur: h })
        : t.jsx("span", { children: m }),
    });
  },
  se = { kanji: "", reading: "", meaning: "" },
  ot = n.memo(({ onCreateNewFlashcard: e }) => {
    const [s, a] = n.useState(se),
      [d, i] = n.useState(!1);
    function u(m) {
      const { name: l, value: h } = m.target;
      a((g) => ({ ...g, [l]: h }));
    }
    return t.jsxs("form", {
      className: "flex gap-x-4",
      onSubmit: (m) => {
        e(m, s), a(se), i(!1);
      },
      children: [
        d &&
          t.jsxs("div", {
            className: "flex gap-x-4",
            children: [
              t.jsx(B, { name: "kanji", onChange: u, autoFocus: !0, placeholder: "Kanji" }),
              t.jsx(B, { name: "reading", onChange: u, placeholder: "Reading" }),
              t.jsx(B, { name: "meaning", onChange: u, placeholder: "Meaning" }),
            ],
          }),
        d
          ? t.jsxs("div", {
              className: "flex gap-x-4",
              children: [
                t.jsxs(H, {
                  type: "button",
                  variant: "destructive",
                  onClick: () => i(!1),
                  children: [t.jsx(re, {}), t.jsx("span", { className: "ml-2", children: "Cancel" })],
                }),
                t.jsxs(H, {
                  variant: "success",
                  type: "submit",
                  children: [t.jsx(ne, {}), t.jsx("span", { className: "ml-2", children: "Add" })],
                }),
              ],
            })
          : t.jsxs(H, {
              type: "button",
              onClick: () => i(!0),
              children: [t.jsx(Ne, {}), t.jsx("span", { className: "ml-2", children: "Add new word" })],
            }),
      ],
    });
  }),
  dt = () => {
    const e = n.useRef(null),
      s = n.useRef(null),
      [a, d] = n.useState(""),
      [i, u] = n.useState({}),
      m = n.useRef(
        et((f) => {
          d(f);
        }, 500)
      ).current;
    n.useEffect(
      () => () => {
        m.cancel();
      },
      [m]
    );
    const {
        flashcards: l,
        loading: h,
        handleCreateFlashcard: g,
        handleUpdateFlashcard: w,
        handleRemoveFlashcard: T,
      } = ve(),
      j = n.useMemo(() => {
        if (!a) return l;
        const f = a.toLowerCase();
        return l.filter(
          (r) => (r.kanji && r.kanji.includes(f)) || r.reading.includes(f) || r.meaning.toLowerCase().includes(f)
        );
      }, [l, a]),
      {
        virtualItems: L,
        totalHeight: A,
        measureElement: F,
      } = ct({
        estimateItemHeight: n.useCallback(() => 72, []),
        itemsCount: j.length,
        getScrollElement: n.useCallback(() => (h ? null : s.current), [h]),
        getItemKey: n.useCallback(
          (f) => {
            var r;
            return (r = j[f]) == null ? void 0 : r.id;
          },
          [j]
        ),
      }),
      _ = n.useCallback(
        (f) => {
          const r = f.target.value.trim();
          m(r);
        },
        [m]
      ),
      I = async (f, r) => {
        var c;
        f.preventDefault();
        const v = (c = r == null ? void 0 : r.kanji) != null && c.trim().length ? r.kanji.trim() : null,
          o = r.reading.trim(),
          p = r.meaning.trim();
        if (!r.reading.trim().length || !r.meaning.trim().length) return;
        const k = { id: pe(), status: "unset", kanji: v, reading: o, meaning: p };
        await g(k);
      },
      O = async (f, r) => {
        const v = f.currentTarget.name;
        if (v === "edit") {
          u((o) => ({ ...o, [r.id]: r }));
          return;
        } else v === "done" ? await w(i[r.id]) : v === "delete" && (await T(r.id));
        u((o) => {
          const p = structuredClone(o);
          return delete p[r.id], p;
        });
      };
    return t.jsx("section", {
      className: "pt-8 min-h-[calc(100dvh-49px)]",
      children: t.jsxs(ge, {
        children: [
          t.jsxs("div", {
            className: "flex items-center gap-x-4 mb-8",
            children: [
              t.jsxs("div", {
                className: "relative",
                children: [
                  t.jsx(ke, { className: "absolute -translate-y-1/2 left-2 text-muted-foreground top-1/2" }),
                  t.jsx(B, { ref: e, onChange: _, placeholder: "Search...", className: "pl-10" }),
                ],
              }),
              t.jsx("div", { className: "h-[30px] w-[2px] bg-green-200" }),
              t.jsx(ot, { onCreateNewFlashcard: I }),
            ],
          }),
          h
            ? t.jsx("div", { className: "pt-10", children: t.jsx(ye, { size: "lg" }) })
            : t.jsxs(t.Fragment, {
                children: [
                  t.jsx("div", {
                    ref: s,
                    className: "h-[800px] overflow-y-auto pr-2",
                    children:
                      j.length > 0
                        ? t.jsxs(ie, {
                            className: "w-full",
                            children: [
                              t.jsx(le, {
                                children: t.jsxs(K, {
                                  children: [
                                    t.jsx(D, { className: "w-[200px]", children: "漢字" }),
                                    t.jsx(D, { className: "w-[250px]", children: "読み方" }),
                                    t.jsx(D, { colSpan: 2, children: "意味" }),
                                  ],
                                }),
                              }),
                              t.jsx(ce, {
                                className: "relative",
                                style: { height: A },
                                children: L.map((f) => {
                                  const r = j[f.index];
                                  return t.jsxs(
                                    K,
                                    {
                                      "data-index": f.index,
                                      ref: F,
                                      className: "absolute top-0",
                                      style: { transform: `translateY(${f.offsetTop}px)` },
                                      children: [
                                        t.jsx(q, {
                                          keyToUpdate: "kanji",
                                          word: r,
                                          editedRows: i,
                                          setEditedRows: u,
                                          className: "min-w-[200px] text-xl max-w-[200px]",
                                        }),
                                        t.jsx(q, {
                                          keyToUpdate: "reading",
                                          word: r,
                                          editedRows: i,
                                          setEditedRows: u,
                                          className: "min-w-[250px] max-w-[250px]",
                                        }),
                                        t.jsx(q, {
                                          keyToUpdate: "meaning",
                                          word: r,
                                          editedRows: i,
                                          setEditedRows: u,
                                          className: "w-full",
                                        }),
                                        t.jsx(at, {
                                          word: r,
                                          editedRows: i,
                                          className: "min-w-[150px] max-w-[150px]",
                                          onEdit: O,
                                        }),
                                      ],
                                    },
                                    r == null ? void 0 : r.id
                                  );
                                }),
                              }),
                            ],
                          })
                        : t.jsx("h2", {
                            className: "text-center mt-8 text-3xl font-semibold",
                            children: "何も見つからなかった",
                          }),
                  }),
                  t.jsxs("p", { className: "text-end mt-6", children: ["Total words: ", l.length] }),
                ],
              }),
        ],
      }),
    });
  },
  gt = be("/vocabulary")({ component: dt });
export { gt as Route };
