import { c as I, r as u, j as e, d as W, m as y, A as M, W as P, k as U } from "./index-DznMvQEf.js";
import { I as T, T as $ } from "./input-DeF7lX2V.js";
import { B as E } from "./button-CWomrNrA.js";
import { u as V } from "./useFlashcards-CJZZOr_9.js";
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y = I("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z = I("CopyPlus", [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = I("Flame", [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        key: "96xj49",
      },
    ],
  ]),
  R = u.forwardRef(({ className: a, ...r }, t) =>
    e.jsx("textarea", {
      className: W(
        "flex min-h-[80px] text-black w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ref: t,
      ...r,
    })
  );
R.displayName = "Textarea";
const q = ({ column: a, onCreateFlashcard: r }) => {
    const [t, n] = u.useState({ kanji: "", reading: "", meaning: "" }),
      [c, o] = u.useState(!1);
    function x(m) {
      const { name: h, value: f } = m.target;
      n((i) => ({ ...i, [h]: f }));
    }
    function v(m) {
      var C;
      m.preventDefault();
      const h = (C = t == null ? void 0 : t.kanji) != null && C.trim().length ? t.kanji.trim() : null,
        f = t.reading.trim(),
        i = t.meaning.trim();
      if (!t.reading.trim().length || !t.meaning.trim().length) return;
      r({ status: a, kanji: h, reading: f, meaning: i }), o(!1);
    }
    return e.jsx(e.Fragment, {
      children: c
        ? e.jsxs(y.form, {
            layout: !0,
            onSubmit: v,
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(T, { name: "kanji", onChange: x, autoFocus: !0, placeholder: "Kanji" }),
                  e.jsx(T, { name: "reading", onChange: x, placeholder: "Reading" }),
                  e.jsx(R, { name: "meaning", onChange: x, placeholder: "Meaning" }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-1.5 flex items-center justify-end gap-1.5",
                children: [
                  e.jsx("button", {
                    onClick: () => o(!1),
                    className: "px-3 py-1.5 text-xs text-red-400 transition-colors hover:text-neutral-50",
                    children: "Close",
                  }),
                  e.jsxs("button", {
                    type: "submit",
                    className:
                      "flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300",
                    children: [e.jsx("span", { children: "Add" }), e.jsx(z, {})],
                  }),
                ],
              }),
            ],
          })
        : e.jsxs(y.button, {
            layout: !0,
            onClick: () => o(!0),
            className:
              "flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50",
            children: [e.jsx("span", { children: "Add card" }), e.jsx(z, {})],
          }),
    });
  },
  B = ({ beforeId: a, column: r }) =>
    e.jsx("div", { "data-before": a || "-1", "data-column": r, className: "my-0.5 h-0.5 w-full bg-primary opacity-0" }),
  G = ({ word: a, onDragStart: r }) => {
    const { id: t, status: n } = a;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(B, { beforeId: t, column: n }),
        e.jsx(y.div, {
          layout: !0,
          layoutId: t,
          draggable: "true",
          onDragStart: (c) => r(c, a),
          className: "cursor-move rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing",
          children: e.jsxs("p", {
            className: "text-lg text-neutral-100",
            children: [
              e.jsx("span", { className: "text-xl", children: a == null ? void 0 : a.kanji }),
              " (",
              a.reading,
              ") ",
              a.meaning,
            ],
          }),
        }),
      ],
    });
  },
  w = ({ title: a, headingColor: r, cards: t, column: n, onCreateFlashcard: c, onUpdateFlashcard: o, setWords: x }) => {
    const [v, m] = u.useState(!1),
      h = (s, l) => {
        s.dataTransfer.setData("cardId", l.id);
      },
      f = (s) => {
        const l = s.dataTransfer.getData("cardId");
        m(!1), N();
        const p = D(),
          { element: S } = F(s, p),
          j = S.dataset.before || "-1";
        if (j !== l) {
          let d = [...t],
            g = d.find((b) => b.id === l);
          if (!g) return;
          if (((g = { ...g, status: n }), (d = d.filter((b) => b.id !== l)), j === "-1")) d.push(g);
          else {
            const b = d.findIndex((O) => O.id === j);
            if (b === void 0) return;
            d.splice(b, 0, g);
          }
          o(g), x(d);
        }
      },
      i = (s) => {
        s.preventDefault(), C(s), m(!0);
      },
      N = (s) => {
        (s || D()).forEach((p) => {
          p.style.opacity = "0";
        });
      },
      C = (s) => {
        const l = D();
        N(l);
        const p = F(s, l);
        p.element.style.opacity = "1";
      },
      F = (s, l) =>
        l.reduce(
          (j, d) => {
            const g = d.getBoundingClientRect(),
              k = s.clientY - (g.top + 50);
            return k < 0 && k > j.offset ? { offset: k, element: d } : j;
          },
          { offset: Number.NEGATIVE_INFINITY, element: l[l.length - 1] }
        ),
      D = () => Array.from(document.querySelectorAll(`[data-column="${n}"]`)),
      L = () => {
        N(), m(!1);
      },
      A = t.filter((s) => s.status === n);
    return e.jsxs("div", {
      className: "w-full shrink-0 px-2 ",
      children: [
        e.jsxs("div", {
          className: "mb-3 flex items-center justify-between",
          children: [
            e.jsx("h3", { className: `font-medium ${r}`, children: a }),
            e.jsx("span", { className: "rounded text-sm text-neutral-400", children: A.length }),
          ],
        }),
        e.jsxs("div", {
          onDrop: f,
          onDragOver: i,
          onDragLeave: L,
          className: `h-full max-h-[800px] overflow-y-auto overflow-x-hidden w-full transition-colors ${v ? "bg-neutral-800/50" : "bg-neutral-800/0"}`,
          children: [
            e.jsx(q, { column: n, onCreateFlashcard: c }),
            A.map((s) => e.jsx(G, { word: s, onDragStart: h }, s.id)),
            e.jsx(B, { beforeId: "-1", column: n }),
          ],
        }),
      ],
    });
  },
  H = ({ children: a, isOpen: r, onClose: t }) =>
    e.jsx(M, {
      children:
        r &&
        e.jsx(y.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: t,
          className:
            "bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer",
          children: a,
        }),
    }),
  K = ({ isOpen: a, onClose: r, onConfirm: t }) =>
    e.jsx(H, {
      isOpen: a,
      onClose: r,
      children: e.jsxs(y.div, {
        initial: { scale: 0, rotate: "12.5deg" },
        animate: { scale: 1, rotate: "0deg" },
        exit: { scale: 0, rotate: "0deg" },
        onClick: (n) => n.stopPropagation(),
        className:
          "bg-gradient-to-br from-red-800 to-red-200 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden",
        children: [
          e.jsx("div", {
            className: "text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-10",
            children: "Alert",
          }),
          e.jsxs("div", {
            className: "relative z-10",
            children: [
              e.jsx("div", {
                className: "bg-red-700 size-12 mb-2 rounded-full text-3xl grid place-items-center mx-auto",
                children: e.jsx(Y, { className: "size-8" }),
              }),
              e.jsx("h3", { className: "text-3xl font-bold text-center mb-2", children: "Are you sure?" }),
              e.jsx("p", {
                className: "text-center mb-6",
                children:
                  "If you confirm the action, the word will be removed permanently together with all it's progress data.",
              }),
              e.jsxs("div", {
                className: "flex justify-center gap-2",
                children: [
                  e.jsx(E, { variant: "secondary", onClick: r, children: "Nah, go back" }),
                  e.jsx(E, { variant: "destructive", onClick: t, children: "Yes, delete" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  J = ({ onRemoveFlashcard: a }) => {
    const r = u.useRef(null),
      [t, n] = u.useState(!1),
      [c, o] = u.useState(!1),
      x = (i) => {
        i.preventDefault(), n(!0);
      },
      v = () => {
        n(!1);
      },
      m = (i) => {
        o(!0), (r.current = i.dataTransfer.getData("cardId")), n(!1);
      },
      h = () => {
        o(!1);
      },
      f = () => {
        const i = r.current;
        i && (a(i), h());
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          onDrop: m,
          onDragOver: x,
          onDragLeave: v,
          className: `grid h-72 w-full shrink-0 place-content-center rounded border text-3xl ${t ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`,
          children: t
            ? e.jsx(_, { className: "animate-bounce pointer-events-none size-10" })
            : e.jsx($, { className: "size-8" }),
        }),
        e.jsx(K, { isOpen: c, onClose: h, onConfirm: f }),
      ],
    });
  },
  Q = () => {
    const a = u.useRef(!1),
      [r, t] = u.useState([]),
      { flashcards: n, handleCreateFlashcard: c, handleUpdateFlashcard: o, handleRemoveFlashcard: x } = V();
    return (
      u.useEffect(() => {
        n.length > 0 && !a.current && (t(n), (a.current = !0));
      }, [n]),
      e.jsx(P, {
        children: e.jsxs("div", {
          className: "py-12 min-h-[calc(100dvh-49px)] grid grid-cols-4 gap-x-6",
          children: [
            e.jsx(w, {
              title: "知らない単語",
              cards: r,
              column: "unrecognized",
              headingColor: "text-red-300",
              onCreateFlashcard: c,
              onUpdateFlashcard: o,
              setWords: t,
            }),
            e.jsx(w, {
              title: "五分五分単語",
              cards: r,
              column: "familiar",
              headingColor: "text-blue-300",
              onCreateFlashcard: c,
              onUpdateFlashcard: o,
              setWords: t,
            }),
            e.jsx(w, {
              title: "知っている単語",
              cards: r,
              column: "known",
              headingColor: "text-emerald-300",
              onCreateFlashcard: c,
              onUpdateFlashcard: o,
              setWords: t,
            }),
            e.jsx(J, { onRemoveFlashcard: x }),
          ],
        }),
      })
    );
  },
  ae = U("/reviewed-words")({ component: Q });
export { ae as Route };
