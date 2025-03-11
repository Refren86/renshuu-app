import {
  c as xt,
  j as h,
  d as j,
  r as m,
  R as Ln,
  u as Fn,
  l as Ye,
  n as me,
  P as J,
  o as B,
  p as St,
  q as In,
  t as Mn,
  v as Bn,
  w as He,
  x as Un,
  y as Z,
  S as qn,
  D as Hn,
  z as Wn,
  X as $n,
  B as zn,
  C as Vn,
  E as Ze,
  A as Kn,
  m as Jn,
  k as Xn,
} from "./index-DznMvQEf.js";
import { L as Gn } from "./Loader-RIRhO-G5.js";
import { b as Yn, B as ne } from "./button-CWomrNrA.js";
import { u as Zn } from "./useFlashcards-CJZZOr_9.js";
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qn = xt("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const er = xt("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]),
  tr = ({ flashcard: e, isAnimating: t, onCopy: n }) => {
    const { kanji: r, reading: o, meaning: s } = e;
    return h.jsx("button", {
      onClick: () => n(r || o),
      className: j("group cursor-pointer h-96 w-96 [perspective:1000px]", { "pointer-events-none": t }),
      children: h.jsxs("div", {
        className:
          "relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]",
        children: [
          h.jsx("div", {
            className:
              "absolute inset-0 h-full w-full flex justify-center items-center rounded-xl bg-primary [backface-visibility:hidden]",
            children: h.jsx("p", { className: "md:my-6 text-4xl", children: r || o }),
          }),
          h.jsx("div", {
            className:
              "absolute inset-0 h-full w-full rounded-xl bg-primary/60 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]",
            children: h.jsxs("div", {
              className: "flex min-h-full flex-col items-center justify-center",
              children: [
                h.jsx("h2", { className: "text-2xl font-bold mb-4", children: o }),
                h.jsx("p", { className: "text-xl text-pretty text-center mb-4", children: s }),
              ],
            }),
          }),
        ],
      }),
    });
  };
function Rt(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: nr } = Object.prototype,
  { getPrototypeOf: We } = Object,
  ge = ((e) => (t) => {
    const n = nr.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _ = (e) => ((e = e.toLowerCase()), (t) => ge(t) === e),
  ye = (e) => (t) => typeof t === e,
  { isArray: X } = Array,
  Q = ye("undefined");
function rr(e) {
  return (
    e !== null &&
    !Q(e) &&
    e.constructor !== null &&
    !Q(e.constructor) &&
    D(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ct = _("ArrayBuffer");
function or(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Ct(e.buffer)),
    t
  );
}
const sr = ye("string"),
  D = ye("function"),
  Nt = ye("number"),
  ve = (e) => e !== null && typeof e == "object",
  ar = (e) => e === !0 || e === !1,
  ie = (e) => {
    if (ge(e) !== "object") return !1;
    const t = We(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ir = _("Date"),
  cr = _("File"),
  lr = _("Blob"),
  ur = _("FileList"),
  fr = (e) => ve(e) && D(e.pipe),
  dr = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (D(e.append) &&
          ((t = ge(e)) === "formdata" || (t === "object" && D(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  pr = _("URLSearchParams"),
  [hr, mr, gr, yr] = ["ReadableStream", "Request", "Response", "Headers"].map(_),
  vr = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function ee(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), X(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = s.length;
    let i;
    for (r = 0; r < a; r++) (i = s[r]), t.call(null, e[i], i, e);
  }
}
function At(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const U = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
  Tt = (e) => !Q(e) && e !== U;
function _e() {
  const { caseless: e } = (Tt(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && At(t, o)) || o;
      ie(t[s]) && ie(r) ? (t[s] = _e(t[s], r)) : ie(r) ? (t[s] = _e({}, r)) : X(r) ? (t[s] = r.slice()) : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && ee(arguments[r], n);
  return t;
}
const br = (e, t, n, { allOwnKeys: r } = {}) => (
    ee(
      t,
      (o, s) => {
        n && D(o) ? (e[s] = Rt(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  wr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Er = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  xr = (e, t, n, r) => {
    let o, s, a;
    const i = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (a = o[s]), (!r || r(a, e, t)) && !i[a] && ((t[a] = e[a]), (i[a] = !0));
      e = n !== !1 && We(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Sr = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Rr = (e) => {
    if (!e) return null;
    if (X(e)) return e;
    let t = e.length;
    if (!Nt(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Cr = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && We(Uint8Array)),
  Nr = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  Ar = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Tr = _("HTMLFormElement"),
  Or = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Qe = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Pr = _("RegExp"),
  Ot = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ee(n, (o, s) => {
      let a;
      (a = t(o, s, e)) !== !1 && (r[s] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  Dr = (e) => {
    Ot(e, (t, n) => {
      if (D(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (D(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  jr = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return X(e) ? r(e) : r(String(e).split(t)), n;
  },
  kr = () => {},
  _r = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Lr(e) {
  return !!(e && D(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Fr = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ve(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = X(r) ? [] : {};
            return (
              ee(r, (a, i) => {
                const y = n(a, o + 1);
                !Q(y) && (s[i] = y);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Ir = _("AsyncFunction"),
  Mr = (e) => e && (ve(e) || D(e)) && D(e.then) && D(e.catch),
  Pt = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            U.addEventListener(
              "message",
              ({ source: o, data: s }) => {
                o === U && s === n && r.length && r.shift()();
              },
              !1
            ),
            (o) => {
              r.push(o), U.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(typeof setImmediate == "function", D(U.postMessage)),
  Br = typeof queueMicrotask < "u" ? queueMicrotask.bind(U) : (typeof process < "u" && process.nextTick) || Pt,
  c = {
    isArray: X,
    isArrayBuffer: Ct,
    isBuffer: rr,
    isFormData: dr,
    isArrayBufferView: or,
    isString: sr,
    isNumber: Nt,
    isBoolean: ar,
    isObject: ve,
    isPlainObject: ie,
    isReadableStream: hr,
    isRequest: mr,
    isResponse: gr,
    isHeaders: yr,
    isUndefined: Q,
    isDate: ir,
    isFile: cr,
    isBlob: lr,
    isRegExp: Pr,
    isFunction: D,
    isStream: fr,
    isURLSearchParams: pr,
    isTypedArray: Cr,
    isFileList: ur,
    forEach: ee,
    merge: _e,
    extend: br,
    trim: vr,
    stripBOM: wr,
    inherits: Er,
    toFlatObject: xr,
    kindOf: ge,
    kindOfTest: _,
    endsWith: Sr,
    toArray: Rr,
    forEachEntry: Nr,
    matchAll: Ar,
    isHTMLForm: Tr,
    hasOwnProperty: Qe,
    hasOwnProp: Qe,
    reduceDescriptors: Ot,
    freezeMethods: Dr,
    toObjectSet: jr,
    toCamelCase: Or,
    noop: kr,
    toFiniteNumber: _r,
    findKey: At,
    global: U,
    isContextDefined: Tt,
    isSpecCompliantForm: Lr,
    toJSONObject: Fr,
    isAsyncFn: Ir,
    isThenable: Mr,
    setImmediate: Pt,
    asap: Br,
  };
function S(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
c.inherits(S, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Dt = S.prototype,
  jt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  jt[e] = { value: e };
});
Object.defineProperties(S, jt);
Object.defineProperty(Dt, "isAxiosError", { value: !0 });
S.from = (e, t, n, r, o, s) => {
  const a = Object.create(Dt);
  return (
    c.toFlatObject(
      e,
      a,
      function (y) {
        return y !== Error.prototype;
      },
      (i) => i !== "isAxiosError"
    ),
    S.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    s && Object.assign(a, s),
    a
  );
};
const Ur = null;
function Le(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function kt(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function et(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = kt(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function qr(e) {
  return c.isArray(e) && !e.some(Le);
}
const Hr = c.toFlatObject(c, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function be(e, t, n) {
  if (!c.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = c.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (l, d) {
      return !c.isUndefined(d[l]);
    }));
  const r = n.metaTokens,
    o = n.visitor || f,
    s = n.dots,
    a = n.indexes,
    y = (n.Blob || (typeof Blob < "u" && Blob)) && c.isSpecCompliantForm(t);
  if (!c.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (c.isDate(g)) return g.toISOString();
    if (!y && c.isBlob(g)) throw new S("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(g) || c.isTypedArray(g)
      ? y && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function f(g, l, d) {
    let b = g;
    if (g && !d && typeof g == "object") {
      if (c.endsWith(l, "{}")) (l = r ? l : l.slice(0, -2)), (g = JSON.stringify(g));
      else if ((c.isArray(g) && qr(g)) || ((c.isFileList(g) || c.endsWith(l, "[]")) && (b = c.toArray(g))))
        return (
          (l = kt(l)),
          b.forEach(function (w, C) {
            !(c.isUndefined(w) || w === null) && t.append(a === !0 ? et([l], C, s) : a === null ? l : l + "[]", u(w));
          }),
          !1
        );
    }
    return Le(g) ? !0 : (t.append(et(d, l, s), u(g)), !1);
  }
  const p = [],
    v = Object.assign(Hr, { defaultVisitor: f, convertValue: u, isVisitable: Le });
  function x(g, l) {
    if (!c.isUndefined(g)) {
      if (p.indexOf(g) !== -1) throw Error("Circular reference detected in " + l.join("."));
      p.push(g),
        c.forEach(g, function (b, E) {
          (!(c.isUndefined(b) || b === null) && o.call(t, b, c.isString(E) ? E.trim() : E, l, v)) === !0 &&
            x(b, l ? l.concat(E) : [E]);
        }),
        p.pop();
    }
  }
  if (!c.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function tt(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function $e(e, t) {
  (this._pairs = []), e && be(e, this, t);
}
const _t = $e.prototype;
_t.append = function (t, n) {
  this._pairs.push([t, n]);
};
_t.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, tt);
      }
    : tt;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Wr(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Lt(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Wr;
  c.isFunction(n) && (n = { serialize: n });
  const o = n && n.serialize;
  let s;
  if ((o ? (s = o(t, n)) : (s = c.isURLSearchParams(t) ? t.toString() : new $e(t, n).toString(r)), s)) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class nt {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    c.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ft = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  $r = typeof URLSearchParams < "u" ? URLSearchParams : $e,
  zr = typeof FormData < "u" ? FormData : null,
  Vr = typeof Blob < "u" ? Blob : null,
  Kr = {
    isBrowser: !0,
    classes: { URLSearchParams: $r, FormData: zr, Blob: Vr },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ze = typeof window < "u" && typeof document < "u",
  Fe = (typeof navigator == "object" && navigator) || void 0,
  Jr = ze && (!Fe || ["ReactNative", "NativeScript", "NS"].indexOf(Fe.product) < 0),
  Xr = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
  Gr = (ze && window.location.href) || "http://localhost",
  Yr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ze,
        hasStandardBrowserEnv: Jr,
        hasStandardBrowserWebWorkerEnv: Xr,
        navigator: Fe,
        origin: Gr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  O = { ...Yr, ...Kr };
function Zr(e, t) {
  return be(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return O.isNode && c.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Qr(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function eo(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function It(e) {
  function t(n, r, o, s) {
    let a = n[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a),
      y = s >= n.length;
    return (
      (a = !a && c.isArray(o) ? o.length : a),
      y
        ? (c.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !i)
        : ((!o[a] || !c.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && c.isArray(o[a]) && (o[a] = eo(o[a])), !i)
    );
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return (
      c.forEachEntry(e, (r, o) => {
        t(Qr(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function to(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const te = {
  transitional: Ft,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = c.isObject(t);
      if ((s && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))) return o ? JSON.stringify(It(t)) : t;
      if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
        return t;
      if (c.isArrayBufferView(t)) return t.buffer;
      if (c.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1) return Zr(t, this.formSerializer).toString();
        if ((i = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return be(i ? { "files[]": t } : t, y && new y(), this.formSerializer);
        }
      }
      return s || o ? (n.setContentType("application/json", !1), to(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || te.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (c.isResponse(t) || c.isReadableStream(t)) return t;
      if (t && c.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (i) {
          if (a) throw i.name === "SyntaxError" ? S.from(i, S.ERR_BAD_RESPONSE, this, null, this.response) : i;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const no = c.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ro = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && no[n])) &&
                (n === "set-cookie" ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  rt = Symbol("internals");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function ce(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ce) : String(e);
}
function oo(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const so = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Se(e, t, n, r, o) {
  if (c.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!c.isString(t))) {
    if (c.isString(r)) return t.indexOf(r) !== -1;
    if (c.isRegExp(r)) return r.test(t);
  }
}
function ao(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function io(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, a) {
        return this[r].call(this, t, o, s, a);
      },
      configurable: !0,
    });
  });
}
let P = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(i, y, u) {
      const f = Y(y);
      if (!f) throw new Error("header name must be a non-empty string");
      const p = c.findKey(o, f);
      (!p || o[p] === void 0 || u === !0 || (u === void 0 && o[p] !== !1)) && (o[p || y] = ce(i));
    }
    const a = (i, y) => c.forEach(i, (u, f) => s(u, f, y));
    if (c.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (c.isString(t) && (t = t.trim()) && !so(t)) a(ro(t), n);
    else if (c.isHeaders(t)) for (const [i, y] of t.entries()) s(y, i, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Y(t)), t)) {
      const r = c.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return oo(o);
        if (c.isFunction(n)) return n.call(this, o, r);
        if (c.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Y(t)), t)) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Se(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(a) {
      if (((a = Y(a)), a)) {
        const i = c.findKey(r, a);
        i && (!n || Se(r, r[i], i, n)) && (delete r[i], (o = !0));
      }
    }
    return c.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Se(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      c.forEach(this, (o, s) => {
        const a = c.findKey(r, s);
        if (a) {
          (n[a] = ce(o)), delete n[s];
          return;
        }
        const i = t ? ao(s) : String(s).trim();
        i !== s && delete n[s], (n[i] = ce(o)), (r[i] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      c.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && c.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[rt] = this[rt] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(a) {
      const i = Y(a);
      r[i] || (io(o, a), (r[i] = !0));
    }
    return c.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
P.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(P.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
c.freezeMethods(P);
function Re(e, t) {
  const n = this || te,
    r = t || n,
    o = P.from(r.headers);
  let s = r.data;
  return (
    c.forEach(e, function (i) {
      s = i.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function Mt(e) {
  return !!(e && e.__CANCEL__);
}
function G(e, t, n) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
c.inherits(G, S, { __CANCEL__: !0 });
function Bt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new S(
          "Request failed with status code " + n.status,
          [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function co(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function lo(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    s = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (y) {
      const u = Date.now(),
        f = r[s];
      a || (a = u), (n[o] = y), (r[o] = u);
      let p = s,
        v = 0;
      for (; p !== o; ) (v += n[p++]), (p = p % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - a < t)) return;
      const x = f && u - f;
      return x ? Math.round((v * 1e3) / x) : void 0;
    }
  );
}
function uo(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    s;
  const a = (u, f = Date.now()) => {
    (n = f), (o = null), s && (clearTimeout(s), (s = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const f = Date.now(),
        p = f - n;
      p >= r
        ? a(u, f)
        : ((o = u),
          s ||
            (s = setTimeout(() => {
              (s = null), a(o);
            }, r - p)));
    },
    () => o && a(o),
  ];
}
const de = (e, t, n = 3) => {
    let r = 0;
    const o = lo(50, 250);
    return uo((s) => {
      const a = s.loaded,
        i = s.lengthComputable ? s.total : void 0,
        y = a - r,
        u = o(y),
        f = a <= i;
      r = a;
      const p = {
        loaded: a,
        total: i,
        progress: i ? a / i : void 0,
        bytes: y,
        rate: u || void 0,
        estimated: u && i && f ? (i - a) / u : void 0,
        event: s,
        lengthComputable: i != null,
        [t ? "download" : "upload"]: !0,
      };
      e(p);
    }, n);
  },
  ot = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  st =
    (e) =>
    (...t) =>
      c.asap(() => e(...t)),
  fo = O.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, O.origin)), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(O.origin), O.navigator && /(msie|trident)/i.test(O.navigator.userAgent))
    : () => !0,
  po = O.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, s) {
          const a = [e + "=" + encodeURIComponent(t)];
          c.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            c.isString(r) && a.push("path=" + r),
            c.isString(o) && a.push("domain=" + o),
            s === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function ho(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function mo(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ut(e, t, n) {
  let r = !ho(t);
  return (e && r) || n == !1 ? mo(e, t) : t;
}
const at = (e) => (e instanceof P ? { ...e } : e);
function H(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, p, v) {
    return c.isPlainObject(u) && c.isPlainObject(f)
      ? c.merge.call({ caseless: v }, u, f)
      : c.isPlainObject(f)
        ? c.merge({}, f)
        : c.isArray(f)
          ? f.slice()
          : f;
  }
  function o(u, f, p, v) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u)) return r(void 0, u, p, v);
    } else return r(u, f, p, v);
  }
  function s(u, f) {
    if (!c.isUndefined(f)) return r(void 0, f);
  }
  function a(u, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function i(u, f, p) {
    if (p in t) return r(u, f);
    if (p in e) return r(void 0, u);
  }
  const y = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (u, f, p) => o(at(u), at(f), p, !0),
  };
  return (
    c.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const p = y[f] || o,
        v = p(e[f], t[f], f);
      (c.isUndefined(v) && p !== i) || (n[f] = v);
    }),
    n
  );
}
const qt = (e) => {
    const t = H({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: i } = t;
    (t.headers = a = P.from(a)),
      (t.url = Lt(Ut(t.baseURL, t.url), e.params, e.paramsSerializer)),
      i &&
        a.set(
          "Authorization",
          "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
        );
    let y;
    if (c.isFormData(n)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
      else if ((y = a.getContentType()) !== !1) {
        const [u, ...f] = y
          ? y
              .split(";")
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        a.setContentType([u || "multipart/form-data", ...f].join("; "));
      }
    }
    if (O.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || (r !== !1 && fo(t.url)))) {
      const u = o && s && po.read(s);
      u && a.set(o, u);
    }
    return t;
  },
  go = typeof XMLHttpRequest < "u",
  yo =
    go &&
    function (e) {
      return new Promise(function (n, r) {
        const o = qt(e);
        let s = o.data;
        const a = P.from(o.headers).normalize();
        let { responseType: i, onUploadProgress: y, onDownloadProgress: u } = o,
          f,
          p,
          v,
          x,
          g;
        function l() {
          x && x(),
            g && g(),
            o.cancelToken && o.cancelToken.unsubscribe(f),
            o.signal && o.signal.removeEventListener("abort", f);
        }
        let d = new XMLHttpRequest();
        d.open(o.method.toUpperCase(), o.url, !0), (d.timeout = o.timeout);
        function b() {
          if (!d) return;
          const w = P.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()),
            R = {
              data: !i || i === "text" || i === "json" ? d.responseText : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: w,
              config: e,
              request: d,
            };
          Bt(
            function (T) {
              n(T), l();
            },
            function (T) {
              r(T), l();
            },
            R
          ),
            (d = null);
        }
        "onloadend" in d
          ? (d.onloadend = b)
          : (d.onreadystatechange = function () {
              !d ||
                d.readyState !== 4 ||
                (d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                setTimeout(b);
            }),
          (d.onabort = function () {
            d && (r(new S("Request aborted", S.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new S("Network Error", S.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const R = o.transitional || Ft;
            o.timeoutErrorMessage && (C = o.timeoutErrorMessage),
              r(new S(C, R.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED, e, d)),
              (d = null);
          }),
          s === void 0 && a.setContentType(null),
          "setRequestHeader" in d &&
            c.forEach(a.toJSON(), function (C, R) {
              d.setRequestHeader(R, C);
            }),
          c.isUndefined(o.withCredentials) || (d.withCredentials = !!o.withCredentials),
          i && i !== "json" && (d.responseType = o.responseType),
          u && (([v, g] = de(u, !0)), d.addEventListener("progress", v)),
          y &&
            d.upload &&
            (([p, x] = de(y)), d.upload.addEventListener("progress", p), d.upload.addEventListener("loadend", x)),
          (o.cancelToken || o.signal) &&
            ((f = (w) => {
              d && (r(!w || w.type ? new G(null, e, d) : w), d.abort(), (d = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(f),
            o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
        const E = co(o.url);
        if (E && O.protocols.indexOf(E) === -1) {
          r(new S("Unsupported protocol " + E + ":", S.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(s || null);
      });
    },
  vo = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const s = function (u) {
        if (!o) {
          (o = !0), i();
          const f = u instanceof Error ? u : this.reason;
          r.abort(f instanceof S ? f : new G(f instanceof Error ? f.message : f));
        }
      };
      let a =
        t &&
        setTimeout(() => {
          (a = null), s(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
        }, t);
      const i = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
          e.forEach((u) => {
            u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", s));
      const { signal: y } = r;
      return (y.unsubscribe = () => c.asap(i)), y;
    }
  },
  bo = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  wo = async function* (e, t) {
    for await (const n of Eo(e)) yield* bo(n, t);
  },
  Eo = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  it = (e, t, n, r) => {
    const o = wo(e, t);
    let s = 0,
      a,
      i = (y) => {
        a || ((a = !0), r && r(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: u, value: f } = await o.next();
            if (u) {
              i(), y.close();
              return;
            }
            let p = f.byteLength;
            if (n) {
              let v = (s += p);
              n(v);
            }
            y.enqueue(new Uint8Array(f));
          } catch (u) {
            throw (i(u), u);
          }
        },
        cancel(y) {
          return i(y), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  we = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  Ht = we && typeof ReadableStream == "function",
  xo =
    we &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Wt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  So =
    Ht &&
    Wt(() => {
      let e = !1;
      const t = new Request(O.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  ct = 64 * 1024,
  Ie = Ht && Wt(() => c.isReadableStream(new Response("").body)),
  pe = { stream: Ie && ((e) => e.body) };
we &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !pe[t] &&
        (pe[t] = c.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new S(`Response type '${t}' is not supported`, S.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Ro = async (e) => {
    if (e == null) return 0;
    if (c.isBlob(e)) return e.size;
    if (c.isSpecCompliantForm(e))
      return (await new Request(O.origin, { method: "POST", body: e }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(e) || c.isArrayBuffer(e)) return e.byteLength;
    if ((c.isURLSearchParams(e) && (e = e + ""), c.isString(e))) return (await xo(e)).byteLength;
  },
  Co = async (e, t) => {
    const n = c.toFiniteNumber(e.getContentLength());
    return n ?? Ro(t);
  },
  No =
    we &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: s,
        timeout: a,
        onDownloadProgress: i,
        onUploadProgress: y,
        responseType: u,
        headers: f,
        withCredentials: p = "same-origin",
        fetchOptions: v,
      } = qt(e);
      u = u ? (u + "").toLowerCase() : "text";
      let x = vo([o, s && s.toAbortSignal()], a),
        g;
      const l =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let d;
      try {
        if (y && So && n !== "get" && n !== "head" && (d = await Co(f, r)) !== 0) {
          let R = new Request(t, { method: "POST", body: r, duplex: "half" }),
            A;
          if ((c.isFormData(r) && (A = R.headers.get("content-type")) && f.setContentType(A), R.body)) {
            const [T, k] = ot(d, de(st(y)));
            r = it(R.body, ct, T, k);
          }
        }
        c.isString(p) || (p = p ? "include" : "omit");
        const b = "credentials" in Request.prototype;
        g = new Request(t, {
          ...v,
          signal: x,
          method: n.toUpperCase(),
          headers: f.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: b ? p : void 0,
        });
        let E = await fetch(g);
        const w = Ie && (u === "stream" || u === "response");
        if (Ie && (i || (w && l))) {
          const R = {};
          ["status", "statusText", "headers"].forEach((I) => {
            R[I] = E[I];
          });
          const A = c.toFiniteNumber(E.headers.get("content-length")),
            [T, k] = (i && ot(A, de(st(i), !0))) || [];
          E = new Response(
            it(E.body, ct, T, () => {
              k && k(), l && l();
            }),
            R
          );
        }
        u = u || "text";
        let C = await pe[c.findKey(pe, u) || "text"](E, e);
        return (
          !w && l && l(),
          await new Promise((R, A) => {
            Bt(R, A, {
              data: C,
              headers: P.from(E.headers),
              status: E.status,
              statusText: E.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (b) {
        throw (
          (l && l(),
          b && b.name === "TypeError" && /fetch/i.test(b.message)
            ? Object.assign(new S("Network Error", S.ERR_NETWORK, e, g), { cause: b.cause || b })
            : S.from(b, b && b.code, e, g))
        );
      }
    }),
  Me = { http: Ur, xhr: yo, fetch: No };
c.forEach(Me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const lt = (e) => `- ${e}`,
  Ao = (e) => c.isFunction(e) || e === null || e === !1,
  $t = {
    getAdapter: (e) => {
      e = c.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let a;
        if (((r = n), !Ao(n) && ((r = Me[(a = String(n)).toLowerCase()]), r === void 0)))
          throw new S(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([i, y]) =>
            `adapter ${i} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let a = t
          ? s.length > 1
            ? `since :
` +
              s.map(lt).join(`
`)
            : " " + lt(s[0])
          : "as no adapter specified";
        throw new S("There is no suitable adapter to dispatch the request " + a, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: Me,
  };
function Ce(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new G(null, e);
}
function ut(e) {
  return (
    Ce(e),
    (e.headers = P.from(e.headers)),
    (e.data = Re.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $t
      .getAdapter(e.adapter || te.adapter)(e)
      .then(
        function (r) {
          return Ce(e), (r.data = Re.call(e, e.transformResponse, r)), (r.headers = P.from(r.headers)), r;
        },
        function (r) {
          return (
            Mt(r) ||
              (Ce(e),
              r &&
                r.response &&
                ((r.response.data = Re.call(e, e.transformResponse, r.response)),
                (r.response.headers = P.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const zt = "1.8.2",
  Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ee[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ft = {};
Ee.transitional = function (t, n, r) {
  function o(s, a) {
    return "[Axios v" + zt + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, i) => {
    if (t === !1) throw new S(o(a, " has been removed" + (n ? " in " + n : "")), S.ERR_DEPRECATED);
    return (
      n &&
        !ft[a] &&
        ((ft[a] = !0),
        console.warn(o(a, " has been deprecated since v" + n + " and will be removed in the near future"))),
      t ? t(s, a, i) : !0
    );
  };
};
Ee.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function To(e, t, n) {
  if (typeof e != "object") throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      a = t[s];
    if (a) {
      const i = e[s],
        y = i === void 0 || a(i, s, e);
      if (y !== !0) throw new S("option " + s + " must be " + y, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new S("Unknown option " + s, S.ERR_BAD_OPTION);
  }
}
const le = { assertOptions: To, validators: Ee },
  F = le.validators;
let q = class {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new nt(), response: new nt() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : (o = new Error());
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = H(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      le.assertOptions(
        r,
        {
          silentJSONParsing: F.transitional(F.boolean),
          forcedJSONParsing: F.transitional(F.boolean),
          clarifyTimeoutError: F.transitional(F.boolean),
        },
        !1
      ),
      o != null &&
        (c.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : le.assertOptions(o, { encode: F.function, serialize: F.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      le.assertOptions(n, { baseUrl: F.spelling("baseURL"), withXsrfToken: F.spelling("withXSRFToken") }, !0),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = s && c.merge(s.common, s[n.method]);
    s &&
      c.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (g) => {
        delete s[g];
      }),
      (n.headers = P.concat(a, s));
    const i = [];
    let y = !0;
    this.interceptors.request.forEach(function (l) {
      (typeof l.runWhen == "function" && l.runWhen(n) === !1) ||
        ((y = y && l.synchronous), i.unshift(l.fulfilled, l.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (l) {
      u.push(l.fulfilled, l.rejected);
    });
    let f,
      p = 0,
      v;
    if (!y) {
      const g = [ut.bind(this), void 0];
      for (g.unshift.apply(g, i), g.push.apply(g, u), v = g.length, f = Promise.resolve(n); p < v; )
        f = f.then(g[p++], g[p++]);
      return f;
    }
    v = i.length;
    let x = n;
    for (p = 0; p < v; ) {
      const g = i[p++],
        l = i[p++];
      try {
        x = g(x);
      } catch (d) {
        l.call(this, d);
        break;
      }
    }
    try {
      f = ut.call(this, x);
    } catch (g) {
      return Promise.reject(g);
    }
    for (p = 0, v = u.length; p < v; ) f = f.then(u[p++], u[p++]);
    return f;
  }
  getUri(t) {
    t = H(this.defaults, t);
    const n = Ut(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Lt(n, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function (t) {
  q.prototype[t] = function (n, r) {
    return this.request(H(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
c.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, a, i) {
      return this.request(
        H(i || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: s, data: a })
      );
    };
  }
  (q.prototype[t] = n()), (q.prototype[t + "Form"] = n(!0));
});
let Oo = class Vt {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const a = new Promise((i) => {
          r.subscribe(i), (s = i);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(s);
          }),
          a
        );
      }),
      t(function (s, a, i) {
        r.reason || ((r.reason = new G(s, a, i)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new Vt(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function Po(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Do(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const Be = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Be).forEach(([e, t]) => {
  Be[t] = e;
});
function Kt(e) {
  const t = new q(e),
    n = Rt(q.prototype.request, t);
  return (
    c.extend(n, q.prototype, t, { allOwnKeys: !0 }),
    c.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Kt(H(e, o));
    }),
    n
  );
}
const N = Kt(te);
N.Axios = q;
N.CanceledError = G;
N.CancelToken = Oo;
N.isCancel = Mt;
N.VERSION = zt;
N.toFormData = be;
N.AxiosError = S;
N.Cancel = N.CanceledError;
N.all = function (t) {
  return Promise.all(t);
};
N.spread = Po;
N.isAxiosError = Do;
N.mergeConfig = H;
N.AxiosHeaders = P;
N.formToJSON = (e) => It(c.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = $t.getAdapter;
N.HttpStatusCode = Be;
N.default = N;
const {
  Axios: Zs,
  AxiosError: Qs,
  CanceledError: ea,
  isCancel: ta,
  CancelToken: na,
  VERSION: ra,
  all: oa,
  Cancel: sa,
  isAxiosError: aa,
  spread: ia,
  toFormData: ca,
  AxiosHeaders: la,
  HttpStatusCode: ua,
  formToJSON: fa,
  getAdapter: da,
  mergeConfig: pa,
} = N;
var jo = Ln.useId || (() => {}),
  ko = 0;
function Ne(e) {
  const [t, n] = m.useState(jo());
  return (
    Fn(() => {
      n((r) => r ?? String(ko++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var Ae = "focusScope.autoFocusOnMount",
  Te = "focusScope.autoFocusOnUnmount",
  dt = { bubbles: !1, cancelable: !0 },
  _o = "FocusScope",
  Jt = m.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...a } = e,
      [i, y] = m.useState(null),
      u = Ye(o),
      f = Ye(s),
      p = m.useRef(null),
      v = me(t, (l) => y(l)),
      x = m.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    m.useEffect(() => {
      if (r) {
        let l = function (w) {
            if (x.paused || !i) return;
            const C = w.target;
            i.contains(C) ? (p.current = C) : M(p.current, { select: !0 });
          },
          d = function (w) {
            if (x.paused || !i) return;
            const C = w.relatedTarget;
            C !== null && (i.contains(C) || M(p.current, { select: !0 }));
          },
          b = function (w) {
            if (document.activeElement === document.body) for (const R of w) R.removedNodes.length > 0 && M(i);
          };
        document.addEventListener("focusin", l), document.addEventListener("focusout", d);
        const E = new MutationObserver(b);
        return (
          i && E.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", l), document.removeEventListener("focusout", d), E.disconnect();
          }
        );
      }
    }, [r, i, x.paused]),
      m.useEffect(() => {
        if (i) {
          ht.add(x);
          const l = document.activeElement;
          if (!i.contains(l)) {
            const b = new CustomEvent(Ae, dt);
            i.addEventListener(Ae, u),
              i.dispatchEvent(b),
              b.defaultPrevented || (Lo(Uo(Xt(i)), { select: !0 }), document.activeElement === l && M(i));
          }
          return () => {
            i.removeEventListener(Ae, u),
              setTimeout(() => {
                const b = new CustomEvent(Te, dt);
                i.addEventListener(Te, f),
                  i.dispatchEvent(b),
                  b.defaultPrevented || M(l ?? document.body, { select: !0 }),
                  i.removeEventListener(Te, f),
                  ht.remove(x);
              }, 0);
          };
        }
      }, [i, u, f, x]);
    const g = m.useCallback(
      (l) => {
        if ((!n && !r) || x.paused) return;
        const d = l.key === "Tab" && !l.altKey && !l.ctrlKey && !l.metaKey,
          b = document.activeElement;
        if (d && b) {
          const E = l.currentTarget,
            [w, C] = Fo(E);
          w && C
            ? !l.shiftKey && b === C
              ? (l.preventDefault(), n && M(w, { select: !0 }))
              : l.shiftKey && b === w && (l.preventDefault(), n && M(C, { select: !0 }))
            : b === E && l.preventDefault();
        }
      },
      [n, r, x.paused]
    );
    return h.jsx(J.div, { tabIndex: -1, ...a, ref: v, onKeyDown: g });
  });
Jt.displayName = _o;
function Lo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((M(r, { select: t }), document.activeElement !== n)) return;
}
function Fo(e) {
  const t = Xt(e),
    n = pt(t, e),
    r = pt(t.reverse(), e);
  return [n, r];
}
function Xt(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function pt(e, t) {
  for (const n of e) if (!Io(n, { upTo: t })) return n;
}
function Io(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Mo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function M(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Mo(e) && t && e.select();
  }
}
var ht = Bo();
function Bo() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = mt(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = mt(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function mt(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Uo(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Oe = 0;
function qo() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? gt()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? gt()),
      Oe++,
      () => {
        Oe === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Oe--;
      }
    );
  }, []);
}
function gt() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ue = "right-scroll-bar-position",
  fe = "width-before-scroll-bar",
  Ho = "with-scroll-bars-hidden",
  Wo = "--removed-body-scroll-bar-size";
function Pe(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $o(e, t) {
  var n = m.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var zo = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  yt = new WeakMap();
function Vo(e, t) {
  var n = $o(null, function (r) {
    return e.forEach(function (o) {
      return Pe(o, r);
    });
  });
  return (
    zo(
      function () {
        var r = yt.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            a = n.current;
          o.forEach(function (i) {
            s.has(i) || Pe(i, null);
          }),
            s.forEach(function (i) {
              o.has(i) || Pe(i, a);
            });
        }
        yt.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Ko(e) {
  return e;
}
function Jo(e, t) {
  t === void 0 && (t = Ko);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var a = t(s, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (i) {
              return i !== a;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(s);
        }
        n = {
          push: function (i) {
            return s(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var a = [];
        if (n.length) {
          var i = n;
          (n = []), i.forEach(s), (a = n);
        }
        var y = function () {
            var f = a;
            (a = []), f.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(y);
          };
        u(),
          (n = {
            push: function (f) {
              a.push(f), u();
            },
            filter: function (f) {
              return (a = a.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function Xo(e) {
  e === void 0 && (e = {});
  var t = Jo(null);
  return (t.options = B({ async: !0, ssr: !1 }, e)), t;
}
var Gt = function (e) {
  var t = e.sideCar,
    n = St(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return m.createElement(r, B({}, n));
};
Gt.isSideCarExport = !0;
function Go(e, t) {
  return e.useMedium(t), Gt;
}
var Yt = Xo(),
  De = function () {},
  xe = m.forwardRef(function (e, t) {
    var n = m.useRef(null),
      r = m.useState({ onScrollCapture: De, onWheelCapture: De, onTouchMoveCapture: De }),
      o = r[0],
      s = r[1],
      a = e.forwardProps,
      i = e.children,
      y = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      v = e.sideCar,
      x = e.noIsolation,
      g = e.inert,
      l = e.allowPinchZoom,
      d = e.as,
      b = d === void 0 ? "div" : d,
      E = e.gapMode,
      w = St(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = v,
      R = Vo([n, t]),
      A = B(B({}, w), o);
    return m.createElement(
      m.Fragment,
      null,
      f &&
        m.createElement(C, {
          sideCar: Yt,
          removeScrollBar: u,
          shards: p,
          noIsolation: x,
          inert: g,
          setCallbacks: s,
          allowPinchZoom: !!l,
          lockRef: n,
          gapMode: E,
        }),
      a
        ? m.cloneElement(m.Children.only(i), B(B({}, A), { ref: R }))
        : m.createElement(b, B({}, A, { className: y, ref: R }), i)
    );
  });
xe.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
xe.classNames = { fullWidth: fe, zeroRight: ue };
var Yo = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Zo() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yo();
  return t && e.setAttribute("nonce", t), e;
}
function Qo(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function es(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ts = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Zo()) && (Qo(t, n), es(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  ns = function () {
    var e = ts();
    return function (t, n) {
      m.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Zt = function () {
    var e = ns(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  rs = { left: 0, top: 0, right: 0, gap: 0 },
  je = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  os = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [je(n), je(r), je(o)];
  },
  ss = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return rs;
    var t = os(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  as = Zt(),
  K = "data-scroll-locked",
  is = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      a = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Ho,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          K,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(i, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ue,
          ` {
    right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          fe,
          ` {
    margin-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ue, " .")
        .concat(
          ue,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(fe, " .")
        .concat(
          fe,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          K,
          `] {
    `
        )
        .concat(Wo, ": ")
        .concat(
          i,
          `px;
  }
`
        )
    );
  },
  vt = function () {
    var e = parseInt(document.body.getAttribute(K) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  cs = function () {
    m.useEffect(function () {
      return (
        document.body.setAttribute(K, (vt() + 1).toString()),
        function () {
          var e = vt() - 1;
          e <= 0 ? document.body.removeAttribute(K) : document.body.setAttribute(K, e.toString());
        }
      );
    }, []);
  },
  ls = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    cs();
    var s = m.useMemo(
      function () {
        return ss(o);
      },
      [o]
    );
    return m.createElement(as, { styles: is(s, !t, o, n ? "" : "!important") });
  },
  Ue = !1;
if (typeof window < "u")
  try {
    var re = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ue = !0), !0;
      },
    });
    window.addEventListener("test", re, re), window.removeEventListener("test", re, re);
  } catch {
    Ue = !1;
  }
var $ = Ue ? { passive: !1 } : !1,
  us = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Qt = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !us(e) && n[t] === "visible");
  },
  fs = function (e) {
    return Qt(e, "overflowY");
  },
  ds = function (e) {
    return Qt(e, "overflowX");
  },
  bt = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = en(e, r);
      if (o) {
        var s = tn(e, r),
          a = s[1],
          i = s[2];
        if (a > i) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ps = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  hs = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  en = function (e, t) {
    return e === "v" ? fs(t) : ds(t);
  },
  tn = function (e, t) {
    return e === "v" ? ps(t) : hs(t);
  },
  ms = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  gs = function (e, t, n, r, o) {
    var s = ms(e, window.getComputedStyle(t).direction),
      a = s * r,
      i = n.target,
      y = t.contains(i),
      u = !1,
      f = a > 0,
      p = 0,
      v = 0;
    do {
      var x = tn(e, i),
        g = x[0],
        l = x[1],
        d = x[2],
        b = l - d - s * g;
      (g || b) && en(e, i) && ((p += b), (v += g)), i instanceof ShadowRoot ? (i = i.host) : (i = i.parentNode);
    } while ((!y && i !== document.body) || (y && (t.contains(i) || t === i)));
    return ((f && Math.abs(p) < 1) || (!f && Math.abs(v) < 1)) && (u = !0), u;
  },
  oe = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  wt = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Et = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ys = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  vs = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  bs = 0,
  z = [];
function ws(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    o = m.useState(bs++)[0],
    s = m.useState(Zt)[0],
    a = m.useRef(e);
  m.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    m.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var l = In([e.lockRef.current], (e.shards || []).map(Et), !0).filter(Boolean);
          return (
            l.forEach(function (d) {
              return d.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                l.forEach(function (d) {
                  return d.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var i = m.useCallback(function (l, d) {
      if (("touches" in l && l.touches.length === 2) || (l.type === "wheel" && l.ctrlKey))
        return !a.current.allowPinchZoom;
      var b = oe(l),
        E = n.current,
        w = "deltaX" in l ? l.deltaX : E[0] - b[0],
        C = "deltaY" in l ? l.deltaY : E[1] - b[1],
        R,
        A = l.target,
        T = Math.abs(w) > Math.abs(C) ? "h" : "v";
      if ("touches" in l && T === "h" && A.type === "range") return !1;
      var k = bt(T, A);
      if (!k) return !0;
      if ((k ? (R = T) : ((R = T === "v" ? "h" : "v"), (k = bt(T, A))), !k)) return !1;
      if ((!r.current && "changedTouches" in l && (w || C) && (r.current = R), !R)) return !0;
      var I = r.current || R;
      return gs(I, d, l, I === "h" ? w : C);
    }, []),
    y = m.useCallback(function (l) {
      var d = l;
      if (!(!z.length || z[z.length - 1] !== s)) {
        var b = "deltaY" in d ? wt(d) : oe(d),
          E = t.current.filter(function (R) {
            return R.name === d.type && (R.target === d.target || d.target === R.shadowParent) && ys(R.delta, b);
          })[0];
        if (E && E.should) {
          d.cancelable && d.preventDefault();
          return;
        }
        if (!E) {
          var w = (a.current.shards || [])
              .map(Et)
              .filter(Boolean)
              .filter(function (R) {
                return R.contains(d.target);
              }),
            C = w.length > 0 ? i(d, w[0]) : !a.current.noIsolation;
          C && d.cancelable && d.preventDefault();
        }
      }
    }, []),
    u = m.useCallback(function (l, d, b, E) {
      var w = { name: l, delta: d, target: b, should: E, shadowParent: Es(b) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== w;
          });
        }, 1);
    }, []),
    f = m.useCallback(function (l) {
      (n.current = oe(l)), (r.current = void 0);
    }, []),
    p = m.useCallback(function (l) {
      u(l.type, wt(l), l.target, i(l, e.lockRef.current));
    }, []),
    v = m.useCallback(function (l) {
      u(l.type, oe(l), l.target, i(l, e.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      z.push(s),
      e.setCallbacks({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: v }),
      document.addEventListener("wheel", y, $),
      document.addEventListener("touchmove", y, $),
      document.addEventListener("touchstart", f, $),
      function () {
        (z = z.filter(function (l) {
          return l !== s;
        })),
          document.removeEventListener("wheel", y, $),
          document.removeEventListener("touchmove", y, $),
          document.removeEventListener("touchstart", f, $);
      }
    );
  }, []);
  var x = e.removeScrollBar,
    g = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    g ? m.createElement(s, { styles: vs(o) }) : null,
    x ? m.createElement(ls, { gapMode: e.gapMode }) : null
  );
}
function Es(e) {
  for (var t = null; e !== null; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const xs = Go(Yt, ws);
var nn = m.forwardRef(function (e, t) {
  return m.createElement(xe, B({}, e, { ref: t, sideCar: xs }));
});
nn.classNames = xe.classNames;
var Ss = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  V = new WeakMap(),
  se = new WeakMap(),
  ae = {},
  ke = 0,
  rn = function (e) {
    return e && (e.host || rn(e.parentNode));
  },
  Rs = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = rn(n);
        return r && e.contains(r)
          ? r
          : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Cs = function (e, t, n, r) {
    var o = Rs(t, Array.isArray(e) ? e : [e]);
    ae[n] || (ae[n] = new WeakMap());
    var s = ae[n],
      a = [],
      i = new Set(),
      y = new Set(o),
      u = function (p) {
        !p || i.has(p) || (i.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var f = function (p) {
      !p ||
        y.has(p) ||
        Array.prototype.forEach.call(p.children, function (v) {
          if (i.has(v)) f(v);
          else
            try {
              var x = v.getAttribute(r),
                g = x !== null && x !== "false",
                l = (V.get(v) || 0) + 1,
                d = (s.get(v) || 0) + 1;
              V.set(v, l),
                s.set(v, d),
                a.push(v),
                l === 1 && g && se.set(v, !0),
                d === 1 && v.setAttribute(n, "true"),
                g || v.setAttribute(r, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", v, b);
            }
        });
    };
    return (
      f(t),
      i.clear(),
      ke++,
      function () {
        a.forEach(function (p) {
          var v = V.get(p) - 1,
            x = s.get(p) - 1;
          V.set(p, v), s.set(p, x), v || (se.has(p) || p.removeAttribute(r), se.delete(p)), x || p.removeAttribute(n);
        }),
          ke--,
          ke || ((V = new WeakMap()), (V = new WeakMap()), (se = new WeakMap()), (ae = {}));
      }
    );
  },
  Ns = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Ss(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Cs(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ve = "Dialog",
  [on, ha] = Bn(Ve),
  [As, L] = on(Ve),
  sn = (e) => {
    const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: a = !0 } = e,
      i = m.useRef(null),
      y = m.useRef(null),
      [u = !1, f] = Mn({ prop: r, defaultProp: o, onChange: s });
    return h.jsx(As, {
      scope: t,
      triggerRef: i,
      contentRef: y,
      contentId: Ne(),
      titleId: Ne(),
      descriptionId: Ne(),
      open: u,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: n,
    });
  };
sn.displayName = Ve;
var an = "DialogTrigger",
  Ts = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = L(an, n),
      s = me(t, o.triggerRef);
    return h.jsx(J.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Xe(o.open),
      ...r,
      ref: s,
      onClick: Z(e.onClick, o.onOpenToggle),
    });
  });
Ts.displayName = an;
var Ke = "DialogPortal",
  [Os, cn] = on(Ke, { forceMount: void 0 }),
  ln = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      s = L(Ke, t);
    return h.jsx(Os, {
      scope: t,
      forceMount: n,
      children: m.Children.map(r, (a) =>
        h.jsx(He, { present: n || s.open, children: h.jsx(Un, { asChild: !0, container: o, children: a }) })
      ),
    });
  };
ln.displayName = Ke;
var he = "DialogOverlay",
  un = m.forwardRef((e, t) => {
    const n = cn(he, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = L(he, e.__scopeDialog);
    return s.modal ? h.jsx(He, { present: r || s.open, children: h.jsx(Ps, { ...o, ref: t }) }) : null;
  });
un.displayName = he;
var Ps = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = L(he, n);
    return h.jsx(nn, {
      as: qn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: h.jsx(J.div, { "data-state": Xe(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }),
    });
  }),
  W = "DialogContent",
  fn = m.forwardRef((e, t) => {
    const n = cn(W, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = L(W, e.__scopeDialog);
    return h.jsx(He, {
      present: r || s.open,
      children: s.modal ? h.jsx(Ds, { ...o, ref: t }) : h.jsx(js, { ...o, ref: t }),
    });
  });
fn.displayName = W;
var Ds = m.forwardRef((e, t) => {
    const n = L(W, e.__scopeDialog),
      r = m.useRef(null),
      o = me(t, n.contentRef, r);
    return (
      m.useEffect(() => {
        const s = r.current;
        if (s) return Ns(s);
      }, []),
      h.jsx(dn, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Z(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent,
            i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: Z(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  js = m.forwardRef((e, t) => {
    const n = L(W, e.__scopeDialog),
      r = m.useRef(!1),
      o = m.useRef(!1);
    return h.jsx(dn, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var a, i;
        (a = e.onCloseAutoFocus) == null || a.call(e, s),
          s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (s) => {
        var y, u;
        (y = e.onInteractOutside) == null || y.call(e, s),
          s.defaultPrevented || ((r.current = !0), s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const a = s.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(),
          s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
      },
    });
  }),
  dn = m.forwardRef((e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e,
      i = L(W, n),
      y = m.useRef(null),
      u = me(t, y);
    return (
      qo(),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(Jt, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: h.jsx(Hn, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Xe(i.open),
              ...a,
              ref: u,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          h.jsxs(h.Fragment, {
            children: [h.jsx(ks, { titleId: i.titleId }), h.jsx(Ls, { contentRef: y, descriptionId: i.descriptionId })],
          }),
        ],
      })
    );
  }),
  Je = "DialogTitle",
  pn = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = L(Je, n);
    return h.jsx(J.h2, { id: o.titleId, ...r, ref: t });
  });
pn.displayName = Je;
var hn = "DialogDescription",
  mn = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = L(hn, n);
    return h.jsx(J.p, { id: o.descriptionId, ...r, ref: t });
  });
mn.displayName = hn;
var gn = "DialogClose",
  yn = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = L(gn, n);
    return h.jsx(J.button, { type: "button", ...r, ref: t, onClick: Z(e.onClick, () => o.onOpenChange(!1)) });
  });
yn.displayName = gn;
function Xe(e) {
  return e ? "open" : "closed";
}
var vn = "DialogTitleWarning",
  [ma, bn] = Wn(vn, { contentName: W, titleName: Je, docsSlug: "dialog" }),
  ks = ({ titleId: e }) => {
    const t = bn(vn),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      m.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  _s = "DialogDescriptionWarning",
  Ls = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bn(_s).contentName}}.`;
    return (
      m.useEffect(() => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Fs = sn,
  Is = ln,
  wn = un,
  En = fn,
  xn = pn,
  Sn = mn,
  Ms = yn;
const Bs = Fs,
  Us = Is,
  Rn = m.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(wn, {
      ref: n,
      className: j(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
Rn.displayName = wn.displayName;
const Cn = m.forwardRef(({ className: e, children: t, ...n }, r) =>
  h.jsxs(Us, {
    children: [
      h.jsx(Rn, {}),
      h.jsxs(En, {
        ref: r,
        className: j(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-muted p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          h.jsxs(Ms, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-white",
            children: [h.jsx($n, { className: "size-7" }), h.jsx("span", { className: "sr-only", children: "Close" })],
          }),
        ],
      }),
    ],
  })
);
Cn.displayName = En.displayName;
const Nn = ({ className: e, ...t }) =>
  h.jsx("div", { className: j("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
Nn.displayName = "DialogHeader";
const An = ({ className: e, ...t }) =>
  h.jsx("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
An.displayName = "DialogFooter";
const Tn = m.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(xn, { ref: n, className: j("text-lg font-semibold leading-none tracking-tight", e), ...t })
);
Tn.displayName = xn.displayName;
const On = m.forwardRef(({ className: e, ...t }, n) => h.jsx(Sn, { ref: n, className: j("text-sm", e), ...t }));
On.displayName = Sn.displayName;
const Pn = ({ className: e, ...t }) =>
  h.jsx("nav", {
    role: "navigation",
    "aria-label": "pagination",
    className: j("mx-auto flex w-full justify-center", e),
    ...t,
  });
Pn.displayName = "Pagination";
const Dn = m.forwardRef(({ className: e, ...t }, n) =>
  h.jsx("ul", { ref: n, className: j("flex flex-row items-center gap-1", e), ...t })
);
Dn.displayName = "PaginationContent";
const qe = m.forwardRef(({ className: e, ...t }, n) => h.jsx("li", { ref: n, className: j("", e), ...t }));
qe.displayName = "PaginationItem";
const Ge = ({ className: e, isActive: t, size: n = "icon", ...r }) =>
  h.jsx("a", {
    "aria-current": t ? "page" : void 0,
    className: j("cursor-pointer", Yn({ variant: t ? "default" : "ghost", size: n }), e),
    ...r,
  });
Ge.displayName = "PaginationLink";
const jn = ({ className: e, ...t }) =>
  h.jsxs(Ge, {
    "aria-label": "Go to previous page",
    size: "default",
    className: j("gap-1 pl-2.5", e),
    ...t,
    children: [h.jsx(Qn, { className: "size-6" }), h.jsx("span", { children: "前のページ" })],
  });
jn.displayName = "PaginationPrevious";
const kn = ({ className: e, ...t }) =>
  h.jsxs(Ge, {
    "aria-label": "Go to next page",
    size: "default",
    className: j("gap-1 pr-2.5", e),
    ...t,
    children: [h.jsx("span", { children: "次のページ" }), h.jsx(er, { className: "size-6" })],
  });
kn.displayName = "PaginationNext";
const qs = "http://localhost:5000/api",
  Hs = ({ isOpen: e, currentFlashcard: t, onToggle: n }) => {
    const [r, o] = m.useState([]),
      [s, a] = m.useState(!1),
      [i, y] = m.useState({ page: 1, prevPage: !1, nextPage: !1 }),
      u = (t == null ? void 0 : t.kanji) || (t == null ? void 0 : t.reading),
      f = async (g = "", l = 1) => {
        const { data: d } = await N.get(`${qs}/search`, { params: { keyword: g, page: l } });
        return d;
      },
      p = m.useCallback(
        async (g = 1) => {
          try {
            a(!0);
            const { results: l, paging: d } = await f(u, g),
              { page: b, prevPage: E, nextPage: w } = d.Sentences;
            y({ page: b, prevPage: E, nextPage: w }), o(l);
          } catch (l) {
            console.error("Error fetching sentences:", l);
          } finally {
            a(!1);
          }
        },
        [u]
      );
    m.useEffect(() => {
      e && p();
    }, [e, p, u]);
    const v = (g) => {
        const l = g === "next" ? i.page + 1 : i.page - 1;
        ((g === "next" && i.nextPage) || (g === "prev" && i.prevPage)) && p(l);
      },
      x = (g) => {
        var l;
        return h.jsx(
          "div",
          {
            className: "text-2xl py-2",
            children:
              (l = g == null ? void 0 : g.transcriptions) != null && l[0]
                ? h.jsxs("div", {
                    className: "flex items-start gap-x-3",
                    children: [
                      h.jsx("div", {
                        className: "flex-1",
                        dangerouslySetInnerHTML: { __html: g.transcriptions[0].html },
                      }),
                      h.jsx("div", {
                        className: "flex-1",
                        children: g.translations
                          .flat(2)
                          .map((d) => d.text)
                          .join(" / "),
                      }),
                    ],
                  })
                : h.jsx("div", { children: g.text }),
          },
          g.id
        );
      };
    return h.jsx(Bs, {
      open: e,
      onOpenChange: n,
      children: h.jsxs(Cn, {
        className: "max-h-[1000px] overflow-y-auto max-w-4xl",
        "aria-describedby": `${u} sentences`,
        children: [
          h.jsxs(Nn, {
            children: [
              h.jsxs(Tn, {
                className: "text-3xl mb-6",
                children: [
                  u,
                  " ",
                  (t == null ? void 0 : t.kanji) && `(${t == null ? void 0 : t.reading})`,
                  " - ",
                  t == null ? void 0 : t.meaning,
                ],
              }),
              h.jsx(On, {
                asChild: !0,
                children: s
                  ? h.jsx(Gn, {})
                  : h.jsx("div", { className: "divide-y divide-slate-700", children: r.map(x) }),
              }),
            ],
          }),
          h.jsx(An, {
            children: h.jsx(Pn, {
              children: h.jsxs(Dn, {
                children: [
                  h.jsx(qe, {
                    children: h.jsx(jn, { className: "w-32", isActive: i.prevPage, onClick: () => v("prev") }),
                  }),
                  h.jsx(qe, {
                    children: h.jsx(kn, { className: "w-32", isActive: i.nextPage, onClick: () => v("next") }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  Ws = zn.memo(({ currentFlashcard: e, handleClick: t, toggleExamplesModal: n }) =>
    h.jsxs(h.Fragment, {
      children: [
        h.jsxs("div", {
          className: "flex gap-x-4 mt-12",
          children: [
            h.jsx(ne, { onClick: () => t(e, "unrecognized"), variant: "destructive", children: "わからない" }),
            h.jsx(ne, { onClick: () => t(e, "familiar"), variant: "secondary", children: "まあまあ" }),
            h.jsx(ne, { onClick: () => t(e, "known"), variant: "default", children: "知っている" }),
          ],
        }),
        h.jsx("div", {
          className: "flex justify-center mt-6",
          children: h.jsx(ne, { onClick: n, children: "Show examples" }),
        }),
      ],
    })
  ),
  $s = {
    initial: { x: 600, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -600, opacity: 0 },
    transition: { duration: 0.5 },
  };
function zs() {
  const { toast: e } = Vn(),
    t = m.useRef(!1),
    n = m.useRef(null),
    r = m.useRef(null),
    { flashcards: o, handleUpdateFlashcard: s } = Zn(),
    [a, i] = m.useState([]),
    [y, u] = m.useState(0),
    [f, p] = m.useState(!1),
    [v, x] = m.useState(!1),
    g = o[a[y]];
  m.useEffect(() => {
    !t.current && o.length > 0 && (i(Ze(o)), (t.current = !0));
  }, [o]),
    m.useEffect(() => {
      r.current = () => {
        x((E) => !E);
      };
    }, []),
    m.useEffect(() => {
      n.current = async (E, w) => {
        if (!f) {
          p(!0);
          try {
            let C = function (A) {
              u((T) => {
                if (T + 1 >= a.length) {
                  const k = structuredClone(o),
                    I = o.findIndex((_n) => _n.id === A.id);
                  return I !== -1 && (k[I] = A), i(Ze(k)), 0;
                }
                return T + 1;
              });
            };
            const R = { ...E, status: w };
            C(R), await s(R);
          } catch (C) {
            console.error("Update flashcard error: ", C),
              e({ description: "Failed to update flashcard. Please try again.", variant: "destructive" });
          } finally {
            p(!1);
          }
        }
      };
    }, [o, f, a.length, s, e]);
  const l = m.useCallback(async (E, w) => {
      n.current(E, w);
    }, []),
    d = m.useCallback(() => {
      r.current();
    }, []);
  async function b(E) {
    try {
      await navigator.clipboard.writeText(E), e({ description: "Copied to clipboard" });
    } catch (w) {
      console.error("Copy error: ", w), e({ description: `Failed to copy ${E}`, variant: "destructive" });
    }
  }
  return h.jsxs(h.Fragment, {
    children: [
      h.jsxs("div", {
        className: "flex flex-col justify-center items-center h-[calc(100dvh-49px)] overflow-hidden",
        children: [
          h.jsx("div", {
            className: "relative w-full max-w-md h-96",
            children: h.jsx(Kn, {
              onExitComplete: () => p(!1),
              children: h.jsx(
                Jn.div,
                {
                  className: "absolute inset-0 flex justify-center items-center",
                  ...$s,
                  children: g && h.jsx(tr, { flashcard: g, isAnimating: f, onCopy: b }),
                },
                y
              ),
            }),
          }),
          h.jsx(Ws, { currentFlashcard: g, handleClick: l, toggleExamplesModal: d }),
        ],
      }),
      v && h.jsx(Hs, { isOpen: v, currentFlashcard: g, onToggle: d }),
    ],
  });
}
const ga = Xn("/flashcards")({ component: zs });
export { ga as Route };
