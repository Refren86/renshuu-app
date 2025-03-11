const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/vocabulary.lazy-iK1gqOvH.js",
      "assets/input-DeF7lX2V.js",
      "assets/button-CWomrNrA.js",
      "assets/useFlashcards-CJZZOr_9.js",
      "assets/Loader-RIRhO-G5.js",
      "assets/reviewed-words.lazy-CVga3iFm.js",
      "assets/flashcards.lazy-BVa94mGS.js",
      "assets/index.lazy-CM5Ogc1x.js",
    ])
) => i.map((i) => d[i]);
function uw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var xa =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Pu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cw = { exports: {} },
  Cu = {},
  fw = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs = Symbol.for("react.element"),
  eP = Symbol.for("react.portal"),
  tP = Symbol.for("react.fragment"),
  nP = Symbol.for("react.strict_mode"),
  rP = Symbol.for("react.profiler"),
  iP = Symbol.for("react.provider"),
  oP = Symbol.for("react.context"),
  sP = Symbol.for("react.forward_ref"),
  aP = Symbol.for("react.suspense"),
  lP = Symbol.for("react.memo"),
  uP = Symbol.for("react.lazy"),
  Hm = Symbol.iterator;
function cP(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hm && e[Hm]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var dw = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hw = Object.assign,
  pw = {};
function io(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = pw), (this.updater = n || dw);
}
io.prototype.isReactComponent = {};
io.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
io.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mw() {}
mw.prototype = io.prototype;
function Mh(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = pw), (this.updater = n || dw);
}
var Ah = (Mh.prototype = new mw());
Ah.constructor = Mh;
hw(Ah, io.prototype);
Ah.isPureReactComponent = !0;
var Gm = Array.isArray,
  vw = Object.prototype.hasOwnProperty,
  Ih = { current: null },
  yw = { key: !0, ref: !0, __self: !0, __source: !0 };
function gw(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t))
      vw.call(t, r) && !yw.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Zs, type: e, key: o, ref: s, props: i, _owner: Ih.current };
}
function fP(e, t) {
  return { $$typeof: Zs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Lh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
}
function dP(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Km = /\/+/g;
function wc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? dP("" + e.key) : t.toString(36);
}
function nl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zs:
          case eP:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + wc(s, 0) : r),
      Gm(i)
        ? ((n = ""),
          e != null && (n = e.replace(Km, "$&/") + "/"),
          nl(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Lh(i) &&
            (i = fP(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(Km, "$&/") + "/") + e)),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Gm(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + wc(o, a);
      s += nl(o, t, n, l, i);
    }
  else if (((l = cP(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (l = r + wc(o, a++)), (s += nl(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function _a(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    nl(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function hP(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  rl = { transition: null },
  pP = { ReactCurrentDispatcher: nt, ReactCurrentBatchConfig: rl, ReactCurrentOwner: Ih };
function ww() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: _a,
  forEach: function (e, t, n) {
    _a(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _a(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _a(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Lh(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
K.Component = io;
K.Fragment = tP;
K.Profiler = rP;
K.PureComponent = Mh;
K.StrictMode = nP;
K.Suspense = aP;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pP;
K.act = ww;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = hw({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ih.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t) vw.call(t, l) && !yw.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Zs, type: e.type, key: i, ref: o, props: r, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: oP,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: iP, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = gw;
K.createFactory = function (e) {
  var t = gw.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: sP, render: e };
};
K.isValidElement = Lh;
K.lazy = function (e) {
  return { $$typeof: uP, _payload: { _status: -1, _result: e }, _init: hP };
};
K.memo = function (e, t) {
  return { $$typeof: lP, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = rl.transition;
  rl.transition = {};
  try {
    e();
  } finally {
    rl.transition = t;
  }
};
K.unstable_act = ww;
K.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
K.useContext = function (e) {
  return nt.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
K.useId = function () {
  return nt.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return nt.current.useRef(e);
};
K.useState = function (e) {
  return nt.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return nt.current.useTransition();
};
K.version = "18.3.1";
fw.exports = K;
var x = fw.exports;
const Mn = Pu(x),
  u5 = uw({ __proto__: null, default: Mn }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mP = x,
  vP = Symbol.for("react.element"),
  yP = Symbol.for("react.fragment"),
  gP = Object.prototype.hasOwnProperty,
  wP = mP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  SP = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sw(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) gP.call(t, r) && !SP.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: vP, type: e, key: o, ref: s, props: i, _owner: wP.current };
}
Cu.Fragment = yP;
Cu.jsx = Sw;
Cu.jsxs = Sw;
cw.exports = Cu;
var O = cw.exports,
  bw = { exports: {} },
  yt = {},
  xw = { exports: {} },
  _w = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, I) {
    var j = M.length;
    M.push(I);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        U = M[Q];
      if (0 < i(U, I)) (M[Q] = I), (M[j] = U), (j = Q);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var I = M[0],
      j = M.pop();
    if (j !== I) {
      M[0] = j;
      e: for (var Q = 0, U = M.length, Y = U >>> 1; Q < Y; ) {
        var J = 2 * (Q + 1) - 1,
          oe = M[J],
          Z = J + 1,
          Xe = M[Z];
        if (0 > i(oe, j))
          Z < U && 0 > i(Xe, oe) ? ((M[Q] = Xe), (M[Z] = j), (Q = Z)) : ((M[Q] = oe), (M[J] = j), (Q = J));
        else if (Z < U && 0 > i(Xe, j)) (M[Q] = Xe), (M[Z] = j), (Q = Z);
        else break e;
      }
    }
    return I;
  }
  function i(M, I) {
    var j = M.sortIndex - I.sortIndex;
    return j !== 0 ? j : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    v = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= M) r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function b(M) {
    if (((y = !1), g(M), !v))
      if (n(l) !== null) (v = !0), q(S);
      else {
        var I = n(u);
        I !== null && z(b, I.startTime - M);
      }
  }
  function S(M, I) {
    (v = !1), y && ((y = !1), p(E), (E = -1)), (h = !0);
    var j = d;
    try {
      for (g(I), f = n(l); f !== null && (!(f.expirationTime > I) || (M && !D())); ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var U = Q(f.expirationTime <= I);
          (I = e.unstable_now()), typeof U == "function" ? (f.callback = U) : f === n(l) && r(l), g(I);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Y = !0;
      else {
        var J = n(u);
        J !== null && z(b, J.startTime - I), (Y = !1);
      }
      return Y;
    } finally {
      (f = null), (d = j), (h = !1);
    }
  }
  var _ = !1,
    T = null,
    E = -1,
    C = 5,
    k = -1;
  function D() {
    return !(e.unstable_now() - k < C);
  }
  function R() {
    if (T !== null) {
      var M = e.unstable_now();
      k = M;
      var I = !0;
      try {
        I = T(!0, M);
      } finally {
        I ? F() : ((_ = !1), (T = null));
      }
    } else _ = !1;
  }
  var F;
  if (typeof m == "function")
    F = function () {
      m(R);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      B = L.port2;
    (L.port1.onmessage = R),
      (F = function () {
        B.postMessage(null);
      });
  } else
    F = function () {
      w(R, 0);
    };
  function q(M) {
    (T = M), _ || ((_ = !0), F());
  }
  function z(M, I) {
    E = w(function () {
      M(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), q(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var j = d;
      d = I;
      try {
        return M();
      } finally {
        d = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, I) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var j = d;
      d = M;
      try {
        return I();
      } finally {
        d = j;
      }
    }),
    (e.unstable_scheduleCallback = function (M, I, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? Q + j : Q))
          : (j = Q),
        M)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = j + U),
        (M = { id: c++, callback: I, priorityLevel: M, startTime: j, expirationTime: U, sortIndex: -1 }),
        j > Q
          ? ((M.sortIndex = j), t(u, M), n(l) === null && M === n(u) && (y ? (p(E), (E = -1)) : (y = !0), z(b, j - Q)))
          : ((M.sortIndex = U), t(l, M), v || h || ((v = !0), q(S))),
        M
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (M) {
      var I = d;
      return function () {
        var j = d;
        d = I;
        try {
          return M.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    });
})(_w);
xw.exports = _w;
var bP = xw.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xP = x,
  mt = bP;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ew = new Set(),
  Es = {};
function qr(e, t) {
  Bi(e, t), Bi(e + "Capture", t);
}
function Bi(e, t) {
  for (Es[e] = t, e = 0; e < t.length; e++) Ew.add(t[e]);
}
var pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ff = Object.prototype.hasOwnProperty,
  _P =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ym = {},
  Xm = {};
function EP(e) {
  return Ff.call(Xm, e) ? !0 : Ff.call(Ym, e) ? !1 : _P.test(e) ? (Xm[e] = !0) : ((Ym[e] = !0), !1);
}
function TP(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function PP(e, t, n, r) {
  if (t === null || typeof t > "u" || TP(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function rt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Be[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Be[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fh = /[\-:]([a-z])/g;
function Nh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fh, Nh);
    Be[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Fh, Nh);
  Be[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fh, Nh);
  Be[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new rt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jh(e, t, n, r) {
  var i = Be.hasOwnProperty(t) ? Be[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (PP(t, n, i, r) && (n = null),
    r || i === null
      ? EP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var En = xP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ea = Symbol.for("react.element"),
  oi = Symbol.for("react.portal"),
  si = Symbol.for("react.fragment"),
  Vh = Symbol.for("react.strict_mode"),
  Nf = Symbol.for("react.profiler"),
  Tw = Symbol.for("react.provider"),
  Pw = Symbol.for("react.context"),
  $h = Symbol.for("react.forward_ref"),
  jf = Symbol.for("react.suspense"),
  Vf = Symbol.for("react.suspense_list"),
  zh = Symbol.for("react.memo"),
  Ln = Symbol.for("react.lazy"),
  Cw = Symbol.for("react.offscreen"),
  Jm = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jm && e[Jm]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var be = Object.assign,
  Sc;
function zo(e) {
  if (Sc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sc = (t && t[1]) || "";
    }
  return (
    `
` +
    Sc +
    e
  );
}
var bc = !1;
function xc(e, t) {
  if (!e || bc) return "";
  bc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (bc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zo(e) : "";
}
function CP(e) {
  switch (e.tag) {
    case 5:
      return zo(e.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xc(e.type, !1)), e;
    case 11:
      return (e = xc(e.type.render, !1)), e;
    case 1:
      return (e = xc(e.type, !0)), e;
    default:
      return "";
  }
}
function $f(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case si:
      return "Fragment";
    case oi:
      return "Portal";
    case Nf:
      return "Profiler";
    case Vh:
      return "StrictMode";
    case jf:
      return "Suspense";
    case Vf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pw:
        return (e.displayName || "Context") + ".Consumer";
      case Tw:
        return (e._context.displayName || "Context") + ".Provider";
      case $h:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zh:
        return (t = e.displayName || null), t !== null ? t : $f(e.type) || "Memo";
      case Ln:
        (t = e._payload), (e = e._init);
        try {
          return $f(e(t));
        } catch {}
    }
  return null;
}
function kP(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $f(t);
    case 8:
      return t === Vh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function kw(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function OP(e) {
  var t = kw(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ta(e) {
  e._valueTracker || (e._valueTracker = OP(e));
}
function Ow(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = kw(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function kl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zf(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Rw(e, t) {
  (t = t.checked), t != null && jh(e, "checked", t, !1);
}
function Bf(e, t) {
  Rw(e, t);
  var n = nr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Uf(e, t.type, n) : t.hasOwnProperty("defaultValue") && Uf(e, t.type, nr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ev(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Uf(e, t, n) {
  (t !== "number" || kl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bo = Array.isArray;
function Ci(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return be({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tv(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Bo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nr(n) };
}
function Dw(e, t) {
  var n = nr(t.value),
    r = nr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function nv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mw(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Mw(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Pa,
  Aw = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Pa = Pa || document.createElement("div"),
          Pa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ts(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var os = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  RP = ["Webkit", "ms", "Moz", "O"];
Object.keys(os).forEach(function (e) {
  RP.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (os[t] = os[e]);
  });
});
function Iw(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (os.hasOwnProperty(e) && os[e])
      ? ("" + t).trim()
      : t + "px";
}
function Lw(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Iw(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var DP = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function qf(e, t) {
  if (t) {
    if (DP[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Hf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gf = null;
function Bh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kf = null,
  ki = null,
  Oi = null;
function rv(e) {
  if ((e = na(e))) {
    if (typeof Kf != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Mu(t)), Kf(e.stateNode, e.type, t));
  }
}
function Fw(e) {
  ki ? (Oi ? Oi.push(e) : (Oi = [e])) : (ki = e);
}
function Nw() {
  if (ki) {
    var e = ki,
      t = Oi;
    if (((Oi = ki = null), rv(e), t)) for (e = 0; e < t.length; e++) rv(t[e]);
  }
}
function jw(e, t) {
  return e(t);
}
function Vw() {}
var _c = !1;
function $w(e, t, n) {
  if (_c) return e(t, n);
  _c = !0;
  try {
    return jw(e, t, n);
  } finally {
    (_c = !1), (ki !== null || Oi !== null) && (Vw(), Nw());
  }
}
function Ps(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Yf = !1;
if (pn)
  try {
    var To = {};
    Object.defineProperty(To, "passive", {
      get: function () {
        Yf = !0;
      },
    }),
      window.addEventListener("test", To, To),
      window.removeEventListener("test", To, To);
  } catch {
    Yf = !1;
  }
function MP(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ss = !1,
  Ol = null,
  Rl = !1,
  Xf = null,
  AP = {
    onError: function (e) {
      (ss = !0), (Ol = e);
    },
  };
function IP(e, t, n, r, i, o, s, a, l) {
  (ss = !1), (Ol = null), MP.apply(AP, arguments);
}
function LP(e, t, n, r, i, o, s, a, l) {
  if ((IP.apply(this, arguments), ss)) {
    if (ss) {
      var u = Ol;
      (ss = !1), (Ol = null);
    } else throw Error(A(198));
    Rl || ((Rl = !0), (Xf = u));
  }
}
function Hr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function iv(e) {
  if (Hr(e) !== e) throw Error(A(188));
}
function FP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hr(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return iv(i), e;
        if (o === r) return iv(i), t;
        o = o.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Bw(e) {
  return (e = FP(e)), e !== null ? Uw(e) : null;
}
function Uw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Uw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ww = mt.unstable_scheduleCallback,
  ov = mt.unstable_cancelCallback,
  NP = mt.unstable_shouldYield,
  jP = mt.unstable_requestPaint,
  ke = mt.unstable_now,
  VP = mt.unstable_getCurrentPriorityLevel,
  Uh = mt.unstable_ImmediatePriority,
  Qw = mt.unstable_UserBlockingPriority,
  Dl = mt.unstable_NormalPriority,
  $P = mt.unstable_LowPriority,
  qw = mt.unstable_IdlePriority,
  ku = null,
  Ht = null;
function zP(e) {
  if (Ht && typeof Ht.onCommitFiberRoot == "function")
    try {
      Ht.onCommitFiberRoot(ku, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : WP,
  BP = Math.log,
  UP = Math.LN2;
function WP(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((BP(e) / UP) | 0)) | 0;
}
var Ca = 64,
  ka = 4194304;
function Uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Uo(a)) : ((o &= s), o !== 0 && (r = Uo(o)));
  } else (s = n & ~i), s !== 0 ? (r = Uo(s)) : o !== 0 && (r = Uo(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - $t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function QP(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qP(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - $t(o),
      a = 1 << s,
      l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = QP(a, t)) : l <= t && (e.expiredLanes |= a), (o &= ~a);
  }
}
function Jf(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Hw() {
  var e = Ca;
  return (Ca <<= 1), !(Ca & 4194240) && (Ca = 64), e;
}
function Ec(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ea(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function HP(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $t(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Wh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var re = 0;
function Gw(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kw,
  Qh,
  Yw,
  Xw,
  Jw,
  Zf = !1,
  Oa = [],
  Qn = null,
  qn = null,
  Hn = null,
  Cs = new Map(),
  ks = new Map(),
  $n = [],
  GP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qn = null;
      break;
    case "dragenter":
    case "dragleave":
      qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Hn = null;
      break;
    case "pointerover":
    case "pointerout":
      Cs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ks.delete(t.pointerId);
  }
}
function Po(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
      t !== null && ((t = na(t)), t !== null && Qh(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function KP(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Qn = Po(Qn, e, t, n, r, i)), !0;
    case "dragenter":
      return (qn = Po(qn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Hn = Po(Hn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Cs.set(o, Po(Cs.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (o = i.pointerId), ks.set(o, Po(ks.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Zw(e) {
  var t = Pr(e.target);
  if (t !== null) {
    var n = Hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zw(n)), t !== null)) {
          (e.blockedOn = t),
            Jw(e.priority, function () {
              Yw(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function il(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ed(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gf = r), n.target.dispatchEvent(r), (Gf = null);
    } else return (t = na(n)), t !== null && Qh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function av(e, t, n) {
  il(e) && n.delete(t);
}
function YP() {
  (Zf = !1),
    Qn !== null && il(Qn) && (Qn = null),
    qn !== null && il(qn) && (qn = null),
    Hn !== null && il(Hn) && (Hn = null),
    Cs.forEach(av),
    ks.forEach(av);
}
function Co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Zf || ((Zf = !0), mt.unstable_scheduleCallback(mt.unstable_NormalPriority, YP)));
}
function Os(e) {
  function t(i) {
    return Co(i, e);
  }
  if (0 < Oa.length) {
    Co(Oa[0], e);
    for (var n = 1; n < Oa.length; n++) {
      var r = Oa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qn !== null && Co(Qn, e), qn !== null && Co(qn, e), Hn !== null && Co(Hn, e), Cs.forEach(t), ks.forEach(t), n = 0;
    n < $n.length;
    n++
  )
    (r = $n[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $n.length && ((n = $n[0]), n.blockedOn === null); ) Zw(n), n.blockedOn === null && $n.shift();
}
var Ri = En.ReactCurrentBatchConfig,
  Al = !0;
function XP(e, t, n, r) {
  var i = re,
    o = Ri.transition;
  Ri.transition = null;
  try {
    (re = 1), qh(e, t, n, r);
  } finally {
    (re = i), (Ri.transition = o);
  }
}
function JP(e, t, n, r) {
  var i = re,
    o = Ri.transition;
  Ri.transition = null;
  try {
    (re = 4), qh(e, t, n, r);
  } finally {
    (re = i), (Ri.transition = o);
  }
}
function qh(e, t, n, r) {
  if (Al) {
    var i = ed(e, t, n, r);
    if (i === null) Ic(e, t, r, Il, n), sv(e, r);
    else if (KP(i, e, t, n, r)) r.stopPropagation();
    else if ((sv(e, r), t & 4 && -1 < GP.indexOf(e))) {
      for (; i !== null; ) {
        var o = na(i);
        if ((o !== null && Kw(o), (o = ed(e, t, n, r)), o === null && Ic(e, t, r, Il, n), o === i)) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ic(e, t, r, null, n);
  }
}
var Il = null;
function ed(e, t, n, r) {
  if (((Il = null), (e = Bh(r)), (e = Pr(e)), e !== null))
    if (((t = Hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zw(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Il = e), null;
}
function eS(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (VP()) {
        case Uh:
          return 1;
        case Qw:
          return 4;
        case Dl:
        case $P:
          return 16;
        case qw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bn = null,
  Hh = null,
  ol = null;
function tS() {
  if (ol) return ol;
  var e,
    t = Hh,
    n = t.length,
    r,
    i = "value" in Bn ? Bn.value : Bn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (ol = i.slice(e, 1 < r ? 1 - r : void 0));
}
function sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ra() {
  return !0;
}
function lv() {
  return !1;
}
function gt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ra : lv),
      (this.isPropagationStopped = lv),
      this
    );
  }
  return (
    be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ra));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ra));
      },
      persist: function () {},
      isPersistent: Ra,
    }),
    t
  );
}
var oo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Gh = gt(oo),
  ta = be({}, oo, { view: 0, detail: 0 }),
  ZP = gt(ta),
  Tc,
  Pc,
  ko,
  Ou = be({}, ta, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Kh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ko &&
            (ko && e.type === "mousemove"
              ? ((Tc = e.screenX - ko.screenX), (Pc = e.screenY - ko.screenY))
              : (Pc = Tc = 0),
            (ko = e)),
          Tc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pc;
    },
  }),
  uv = gt(Ou),
  eC = be({}, Ou, { dataTransfer: 0 }),
  tC = gt(eC),
  nC = be({}, ta, { relatedTarget: 0 }),
  Cc = gt(nC),
  rC = be({}, oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iC = gt(rC),
  oC = be({}, oo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sC = gt(oC),
  aC = be({}, oo, { data: 0 }),
  cv = gt(aC),
  lC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  uC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function fC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cC[e]) ? !!t[e] : !1;
}
function Kh() {
  return fC;
}
var dC = be({}, ta, {
    key: function (e) {
      if (e.key) {
        var t = lC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? uC[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Kh,
    charCode: function (e) {
      return e.type === "keypress" ? sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  hC = gt(dC),
  pC = be({}, Ou, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  fv = gt(pC),
  mC = be({}, ta, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kh,
  }),
  vC = gt(mC),
  yC = be({}, oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gC = gt(yC),
  wC = be({}, Ou, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  SC = gt(wC),
  bC = [9, 13, 27, 32],
  Yh = pn && "CompositionEvent" in window,
  as = null;
pn && "documentMode" in document && (as = document.documentMode);
var xC = pn && "TextEvent" in window && !as,
  nS = pn && (!Yh || (as && 8 < as && 11 >= as)),
  dv = " ",
  hv = !1;
function rS(e, t) {
  switch (e) {
    case "keyup":
      return bC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function iS(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ai = !1;
function _C(e, t) {
  switch (e) {
    case "compositionend":
      return iS(t);
    case "keypress":
      return t.which !== 32 ? null : ((hv = !0), dv);
    case "textInput":
      return (e = t.data), e === dv && hv ? null : e;
    default:
      return null;
  }
}
function EC(e, t) {
  if (ai) return e === "compositionend" || (!Yh && rS(e, t)) ? ((e = tS()), (ol = Hh = Bn = null), (ai = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nS && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var TC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function pv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TC[e.type] : t === "textarea";
}
function oS(e, t, n, r) {
  Fw(r),
    (t = Ll(t, "onChange")),
    0 < t.length && ((n = new Gh("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var ls = null,
  Rs = null;
function PC(e) {
  vS(e, 0);
}
function Ru(e) {
  var t = ci(e);
  if (Ow(t)) return e;
}
function CC(e, t) {
  if (e === "change") return t;
}
var sS = !1;
if (pn) {
  var kc;
  if (pn) {
    var Oc = "oninput" in document;
    if (!Oc) {
      var mv = document.createElement("div");
      mv.setAttribute("oninput", "return;"), (Oc = typeof mv.oninput == "function");
    }
    kc = Oc;
  } else kc = !1;
  sS = kc && (!document.documentMode || 9 < document.documentMode);
}
function vv() {
  ls && (ls.detachEvent("onpropertychange", aS), (Rs = ls = null));
}
function aS(e) {
  if (e.propertyName === "value" && Ru(Rs)) {
    var t = [];
    oS(t, Rs, e, Bh(e)), $w(PC, t);
  }
}
function kC(e, t, n) {
  e === "focusin" ? (vv(), (ls = t), (Rs = n), ls.attachEvent("onpropertychange", aS)) : e === "focusout" && vv();
}
function OC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ru(Rs);
}
function RC(e, t) {
  if (e === "click") return Ru(t);
}
function DC(e, t) {
  if (e === "input" || e === "change") return Ru(t);
}
function MC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bt = typeof Object.is == "function" ? Object.is : MC;
function Ds(e, t) {
  if (Bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ff.call(t, i) || !Bt(e[i], t[i])) return !1;
  }
  return !0;
}
function yv(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gv(e, t) {
  var n = yv(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = yv(n);
  }
}
function lS(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? lS(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function uS() {
  for (var e = window, t = kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = kl(e.document);
  }
  return t;
}
function Xh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function AC(e) {
  var t = uS(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lS(n.ownerDocument.documentElement, n)) {
    if (r !== null && Xh(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = gv(n, o));
        var s = gv(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var IC = pn && "documentMode" in document && 11 >= document.documentMode,
  li = null,
  td = null,
  us = null,
  nd = !1;
function wv(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nd ||
    li == null ||
    li !== kl(r) ||
    ((r = li),
    "selectionStart" in r && Xh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (us && Ds(us, r)) ||
      ((us = r),
      (r = Ll(td, "onSelect")),
      0 < r.length &&
        ((t = new Gh("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = li))));
}
function Da(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var ui = {
    animationend: Da("Animation", "AnimationEnd"),
    animationiteration: Da("Animation", "AnimationIteration"),
    animationstart: Da("Animation", "AnimationStart"),
    transitionend: Da("Transition", "TransitionEnd"),
  },
  Rc = {},
  cS = {};
pn &&
  ((cS = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ui.animationend.animation, delete ui.animationiteration.animation, delete ui.animationstart.animation),
  "TransitionEvent" in window || delete ui.transitionend.transition);
function Du(e) {
  if (Rc[e]) return Rc[e];
  if (!ui[e]) return e;
  var t = ui[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cS) return (Rc[e] = t[n]);
  return e;
}
var fS = Du("animationend"),
  dS = Du("animationiteration"),
  hS = Du("animationstart"),
  pS = Du("transitionend"),
  mS = new Map(),
  Sv =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cr(e, t) {
  mS.set(e, t), qr(t, [e]);
}
for (var Dc = 0; Dc < Sv.length; Dc++) {
  var Mc = Sv[Dc],
    LC = Mc.toLowerCase(),
    FC = Mc[0].toUpperCase() + Mc.slice(1);
  cr(LC, "on" + FC);
}
cr(fS, "onAnimationEnd");
cr(dS, "onAnimationIteration");
cr(hS, "onAnimationStart");
cr("dblclick", "onDoubleClick");
cr("focusin", "onFocus");
cr("focusout", "onBlur");
cr(pS, "onTransitionEnd");
Bi("onMouseEnter", ["mouseout", "mouseover"]);
Bi("onMouseLeave", ["mouseout", "mouseover"]);
Bi("onPointerEnter", ["pointerout", "pointerover"]);
Bi("onPointerLeave", ["pointerout", "pointerover"]);
qr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  NC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));
function bv(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), LP(r, t, void 0, e), (e.currentTarget = null);
}
function vS(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          bv(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== o && i.isPropagationStopped())
          )
            break e;
          bv(i, a, u), (o = l);
        }
    }
  }
  if (Rl) throw ((e = Xf), (Rl = !1), (Xf = null), e);
}
function he(e, t) {
  var n = t[ad];
  n === void 0 && (n = t[ad] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yS(t, e, 2, !1), n.add(r));
}
function Ac(e, t, n) {
  var r = 0;
  t && (r |= 4), yS(n, e, r, t);
}
var Ma = "_reactListening" + Math.random().toString(36).slice(2);
function Ms(e) {
  if (!e[Ma]) {
    (e[Ma] = !0),
      Ew.forEach(function (n) {
        n !== "selectionchange" && (NC.has(n) || Ac(n, !1, e), Ac(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ma] || ((t[Ma] = !0), Ac("selectionchange", !1, t));
  }
}
function yS(e, t, n, r) {
  switch (eS(t)) {
    case 1:
      var i = XP;
      break;
    case 4:
      i = JP;
      break;
    default:
      i = qh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Yf || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function Ic(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Pr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  $w(function () {
    var u = o,
      c = Bh(n),
      f = [];
    e: {
      var d = mS.get(e);
      if (d !== void 0) {
        var h = Gh,
          v = e;
        switch (e) {
          case "keypress":
            if (sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = hC;
            break;
          case "focusin":
            (v = "focus"), (h = Cc);
            break;
          case "focusout":
            (v = "blur"), (h = Cc);
            break;
          case "beforeblur":
          case "afterblur":
            h = Cc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = uv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = tC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = vC;
            break;
          case fS:
          case dS:
          case hS:
            h = iC;
            break;
          case pS:
            h = gC;
            break;
          case "scroll":
            h = ZP;
            break;
          case "wheel":
            h = SC;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = sC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = fv;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var b = g.stateNode;
          if (
            (g.tag === 5 && b !== null && ((g = b), p !== null && ((b = Ps(m, p)), b != null && y.push(As(m, b, g)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < y.length && ((d = new h(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d && n !== Gf && (v = n.relatedTarget || n.fromElement) && (Pr(v) || v[mn]))
        )
          break e;
        if (
          (h || d) &&
          ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? Pr(v) : null),
              v !== null && ((w = Hr(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((y = uv),
            (b = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = fv), (b = "onPointerLeave"), (p = "onPointerEnter"), (m = "pointer")),
            (w = h == null ? d : ci(h)),
            (g = v == null ? d : ci(v)),
            (d = new y(b, m + "leave", h, n, c)),
            (d.target = w),
            (d.relatedTarget = g),
            (b = null),
            Pr(c) === u && ((y = new y(p, m + "enter", v, n, c)), (y.target = g), (y.relatedTarget = w), (b = y)),
            (w = b),
            h && v)
          )
            t: {
              for (y = h, p = v, m = 0, g = y; g; g = Zr(g)) m++;
              for (g = 0, b = p; b; b = Zr(b)) g++;
              for (; 0 < m - g; ) (y = Zr(y)), m--;
              for (; 0 < g - m; ) (p = Zr(p)), g--;
              for (; m--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = Zr(y)), (p = Zr(p));
              }
              y = null;
            }
          else y = null;
          h !== null && xv(f, d, h, y, !1), v !== null && w !== null && xv(f, w, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? ci(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var S = CC;
        else if (pv(d))
          if (sS) S = DC;
          else {
            S = OC;
            var _ = kC;
          }
        else
          (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = RC);
        if (S && (S = S(e, u))) {
          oS(f, S, n, c);
          break e;
        }
        _ && _(e, d, u),
          e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && Uf(d, "number", d.value);
      }
      switch (((_ = u ? ci(u) : window), e)) {
        case "focusin":
          (pv(_) || _.contentEditable === "true") && ((li = _), (td = u), (us = null));
          break;
        case "focusout":
          us = td = li = null;
          break;
        case "mousedown":
          nd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nd = !1), wv(f, n, c);
          break;
        case "selectionchange":
          if (IC) break;
        case "keydown":
        case "keyup":
          wv(f, n, c);
      }
      var T;
      if (Yh)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        ai ? rS(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (nS &&
          n.locale !== "ko" &&
          (ai || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && ai && (T = tS())
            : ((Bn = c), (Hh = "value" in Bn ? Bn.value : Bn.textContent), (ai = !0))),
        (_ = Ll(u, E)),
        0 < _.length &&
          ((E = new cv(E, e, null, n, c)),
          f.push({ event: E, listeners: _ }),
          T ? (E.data = T) : ((T = iS(n)), T !== null && (E.data = T)))),
        (T = xC ? _C(e, n) : EC(e, n)) &&
          ((u = Ll(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new cv("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    vS(f, t);
  });
}
function As(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o), (o = Ps(e, n)), o != null && r.unshift(As(e, o, i)), (o = Ps(e, t)), o != null && r.push(As(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Zr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xv(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ps(n, o)), l != null && s.unshift(As(n, l, a)))
        : i || ((l = Ps(n, o)), l != null && s.push(As(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var jC = /\r\n?/g,
  VC = /\u0000|\uFFFD/g;
function _v(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jC,
      `
`
    )
    .replace(VC, "");
}
function Aa(e, t, n) {
  if (((t = _v(t)), _v(e) !== t && n)) throw Error(A(425));
}
function Fl() {}
var rd = null,
  id = null;
function od(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sd = typeof setTimeout == "function" ? setTimeout : void 0,
  $C = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ev = typeof Promise == "function" ? Promise : void 0,
  zC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ev < "u"
        ? function (e) {
            return Ev.resolve(null).then(e).catch(BC);
          }
        : sd;
function BC(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Os(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Os(t);
}
function Gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Tv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var so = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + so,
  Is = "__reactProps$" + so,
  mn = "__reactContainer$" + so,
  ad = "__reactEvents$" + so,
  UC = "__reactListeners$" + so,
  WC = "__reactHandles$" + so;
function Pr(e) {
  var t = e[qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mn] || n[qt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Tv(e); e !== null; ) {
          if ((n = e[qt])) return n;
          e = Tv(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function na(e) {
  return (e = e[qt] || e[mn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Mu(e) {
  return e[Is] || null;
}
var ld = [],
  fi = -1;
function fr(e) {
  return { current: e };
}
function me(e) {
  0 > fi || ((e.current = ld[fi]), (ld[fi] = null), fi--);
}
function ce(e, t) {
  fi++, (ld[fi] = e.current), (e.current = t);
}
var rr = {},
  Ye = fr(rr),
  at = fr(!1),
  Nr = rr;
function Ui(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function lt(e) {
  return (e = e.childContextTypes), e != null;
}
function Nl() {
  me(at), me(Ye);
}
function Pv(e, t, n) {
  if (Ye.current !== rr) throw Error(A(168));
  ce(Ye, t), ce(at, n);
}
function gS(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, kP(e) || "Unknown", i));
  return be({}, n, r);
}
function jl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rr),
    (Nr = Ye.current),
    ce(Ye, e),
    ce(at, at.current),
    !0
  );
}
function Cv(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? ((e = gS(e, t, Nr)), (r.__reactInternalMemoizedMergedChildContext = e), me(at), me(Ye), ce(Ye, e)) : me(at),
    ce(at, n);
}
var on = null,
  Au = !1,
  Fc = !1;
function wS(e) {
  on === null ? (on = [e]) : on.push(e);
}
function QC(e) {
  (Au = !0), wS(e);
}
function dr() {
  if (!Fc && on !== null) {
    Fc = !0;
    var e = 0,
      t = re;
    try {
      var n = on;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (on = null), (Au = !1);
    } catch (i) {
      throw (on !== null && (on = on.slice(e + 1)), Ww(Uh, dr), i);
    } finally {
      (re = t), (Fc = !1);
    }
  }
  return null;
}
var di = [],
  hi = 0,
  Vl = null,
  $l = 0,
  Tt = [],
  Pt = 0,
  jr = null,
  sn = 1,
  an = "";
function vr(e, t) {
  (di[hi++] = $l), (di[hi++] = Vl), (Vl = e), ($l = t);
}
function SS(e, t, n) {
  (Tt[Pt++] = sn), (Tt[Pt++] = an), (Tt[Pt++] = jr), (jr = e);
  var r = sn;
  e = an;
  var i = 32 - $t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - $t(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (sn = (1 << (32 - $t(t) + i)) | (n << i) | r),
      (an = o + e);
  } else (sn = (1 << o) | (n << i) | r), (an = e);
}
function Jh(e) {
  e.return !== null && (vr(e, 1), SS(e, 1, 0));
}
function Zh(e) {
  for (; e === Vl; ) (Vl = di[--hi]), (di[hi] = null), ($l = di[--hi]), (di[hi] = null);
  for (; e === jr; )
    (jr = Tt[--Pt]), (Tt[Pt] = null), (an = Tt[--Pt]), (Tt[Pt] = null), (sn = Tt[--Pt]), (Tt[Pt] = null);
}
var ht = null,
  dt = null,
  ye = !1,
  Nt = null;
function bS(e, t) {
  var n = Ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function kv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (dt = Gn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jr !== null ? { id: sn, overflow: an } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ht = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ud(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cd(e) {
  if (ye) {
    var t = dt;
    if (t) {
      var n = t;
      if (!kv(e, t)) {
        if (ud(e)) throw Error(A(418));
        t = Gn(n.nextSibling);
        var r = ht;
        t && kv(e, t) ? bS(r, n) : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (ht = e));
      }
    } else {
      if (ud(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ye = !1), (ht = e);
    }
  }
}
function Ov(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ht = e;
}
function Ia(e) {
  if (e !== ht) return !1;
  if (!ye) return Ov(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !od(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (ud(e)) throw (xS(), Error(A(418)));
    for (; t; ) bS(e, t), (t = Gn(t.nextSibling));
  }
  if ((Ov(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = Gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = ht ? Gn(e.stateNode.nextSibling) : null;
  return !0;
}
function xS() {
  for (var e = dt; e; ) e = Gn(e.nextSibling);
}
function Wi() {
  (dt = ht = null), (ye = !1);
}
function ep(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var qC = En.ReactCurrentBatchConfig;
function Oo(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function La(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Rv(e) {
  var t = e._init;
  return t(e._payload);
}
function _S(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; ) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = Jn(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate), g !== null ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g) : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, m, g, b) {
    return m === null || m.tag !== 6 ? ((m = Uc(g, p.mode, b)), (m.return = p), m) : ((m = i(m, g)), (m.return = p), m);
  }
  function l(p, m, g, b) {
    var S = g.type;
    return S === si
      ? c(p, m, g.props.children, b, g.key)
      : m !== null &&
          (m.elementType === S || (typeof S == "object" && S !== null && S.$$typeof === Ln && Rv(S) === m.type))
        ? ((b = i(m, g.props)), (b.ref = Oo(p, m, g)), (b.return = p), b)
        : ((b = hl(g.type, g.key, g.props, null, p.mode, b)), (b.ref = Oo(p, m, g)), (b.return = p), b);
  }
  function u(p, m, g, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = Wc(g, p.mode, b)), (m.return = p), m)
      : ((m = i(m, g.children || [])), (m.return = p), m);
  }
  function c(p, m, g, b, S) {
    return m === null || m.tag !== 7
      ? ((m = Ir(g, p.mode, b, S)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function f(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Uc("" + m, p.mode, g)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ea:
          return (g = hl(m.type, m.key, m.props, null, p.mode, g)), (g.ref = Oo(p, null, m)), (g.return = p), g;
        case oi:
          return (m = Wc(m, p.mode, g)), (m.return = p), m;
        case Ln:
          var b = m._init;
          return f(p, b(m._payload), g);
      }
      if (Bo(m) || Eo(m)) return (m = Ir(m, p.mode, g, null)), (m.return = p), m;
      La(p, m);
    }
    return null;
  }
  function d(p, m, g, b) {
    var S = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number") return S !== null ? null : a(p, m, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ea:
          return g.key === S ? l(p, m, g, b) : null;
        case oi:
          return g.key === S ? u(p, m, g, b) : null;
        case Ln:
          return (S = g._init), d(p, m, S(g._payload), b);
      }
      if (Bo(g) || Eo(g)) return S !== null ? null : c(p, m, g, b, null);
      La(p, g);
    }
    return null;
  }
  function h(p, m, g, b, S) {
    if ((typeof b == "string" && b !== "") || typeof b == "number") return (p = p.get(g) || null), a(m, p, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ea:
          return (p = p.get(b.key === null ? g : b.key) || null), l(m, p, b, S);
        case oi:
          return (p = p.get(b.key === null ? g : b.key) || null), u(m, p, b, S);
        case Ln:
          var _ = b._init;
          return h(p, m, g, _(b._payload), S);
      }
      if (Bo(b) || Eo(b)) return (p = p.get(g) || null), c(m, p, b, S, null);
      La(m, b);
    }
    return null;
  }
  function v(p, m, g, b) {
    for (var S = null, _ = null, T = m, E = (m = 0), C = null; T !== null && E < g.length; E++) {
      T.index > E ? ((C = T), (T = null)) : (C = T.sibling);
      var k = d(p, T, g[E], b);
      if (k === null) {
        T === null && (T = C);
        break;
      }
      e && T && k.alternate === null && t(p, T),
        (m = o(k, m, E)),
        _ === null ? (S = k) : (_.sibling = k),
        (_ = k),
        (T = C);
    }
    if (E === g.length) return n(p, T), ye && vr(p, E), S;
    if (T === null) {
      for (; E < g.length; E++)
        (T = f(p, g[E], b)), T !== null && ((m = o(T, m, E)), _ === null ? (S = T) : (_.sibling = T), (_ = T));
      return ye && vr(p, E), S;
    }
    for (T = r(p, T); E < g.length; E++)
      (C = h(T, p, E, g[E], b)),
        C !== null &&
          (e && C.alternate !== null && T.delete(C.key === null ? E : C.key),
          (m = o(C, m, E)),
          _ === null ? (S = C) : (_.sibling = C),
          (_ = C));
    return (
      e &&
        T.forEach(function (D) {
          return t(p, D);
        }),
      ye && vr(p, E),
      S
    );
  }
  function y(p, m, g, b) {
    var S = Eo(g);
    if (typeof S != "function") throw Error(A(150));
    if (((g = S.call(g)), g == null)) throw Error(A(151));
    for (var _ = (S = null), T = m, E = (m = 0), C = null, k = g.next(); T !== null && !k.done; E++, k = g.next()) {
      T.index > E ? ((C = T), (T = null)) : (C = T.sibling);
      var D = d(p, T, k.value, b);
      if (D === null) {
        T === null && (T = C);
        break;
      }
      e && T && D.alternate === null && t(p, T),
        (m = o(D, m, E)),
        _ === null ? (S = D) : (_.sibling = D),
        (_ = D),
        (T = C);
    }
    if (k.done) return n(p, T), ye && vr(p, E), S;
    if (T === null) {
      for (; !k.done; E++, k = g.next())
        (k = f(p, k.value, b)), k !== null && ((m = o(k, m, E)), _ === null ? (S = k) : (_.sibling = k), (_ = k));
      return ye && vr(p, E), S;
    }
    for (T = r(p, T); !k.done; E++, k = g.next())
      (k = h(T, p, E, k.value, b)),
        k !== null &&
          (e && k.alternate !== null && T.delete(k.key === null ? E : k.key),
          (m = o(k, m, E)),
          _ === null ? (S = k) : (_.sibling = k),
          (_ = k));
    return (
      e &&
        T.forEach(function (R) {
          return t(p, R);
        }),
      ye && vr(p, E),
      S
    );
  }
  function w(p, m, g, b) {
    if (
      (typeof g == "object" && g !== null && g.type === si && g.key === null && (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ea:
          e: {
            for (var S = g.key, _ = m; _ !== null; ) {
              if (_.key === S) {
                if (((S = g.type), S === si)) {
                  if (_.tag === 7) {
                    n(p, _.sibling), (m = i(_, g.props.children)), (m.return = p), (p = m);
                    break e;
                  }
                } else if (
                  _.elementType === S ||
                  (typeof S == "object" && S !== null && S.$$typeof === Ln && Rv(S) === _.type)
                ) {
                  n(p, _.sibling), (m = i(_, g.props)), (m.ref = Oo(p, _, g)), (m.return = p), (p = m);
                  break e;
                }
                n(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            g.type === si
              ? ((m = Ir(g.props.children, p.mode, b, g.key)), (m.return = p), (p = m))
              : ((b = hl(g.type, g.key, g.props, null, p.mode, b)), (b.ref = Oo(p, m, g)), (b.return = p), (p = b));
          }
          return s(p);
        case oi:
          e: {
            for (_ = g.key; m !== null; ) {
              if (m.key === _)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(p, m.sibling), (m = i(m, g.children || [])), (m.return = p), (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = Wc(g, p.mode, b)), (m.return = p), (p = m);
          }
          return s(p);
        case Ln:
          return (_ = g._init), w(p, m, _(g._payload), b);
      }
      if (Bo(g)) return v(p, m, g, b);
      if (Eo(g)) return y(p, m, g, b);
      La(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = Uc(g, p.mode, b)), (m.return = p), (p = m)),
        s(p))
      : n(p, m);
  }
  return w;
}
var Qi = _S(!0),
  ES = _S(!1),
  zl = fr(null),
  Bl = null,
  pi = null,
  tp = null;
function np() {
  tp = pi = Bl = null;
}
function rp(e) {
  var t = zl.current;
  me(zl), (e._currentValue = t);
}
function fd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Di(e, t) {
  (Bl = e),
    (tp = pi = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (st = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if (tp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pi === null)) {
      if (Bl === null) throw Error(A(308));
      (pi = e), (Bl.dependencies = { lanes: 0, firstContext: e });
    } else pi = pi.next = e;
  return t;
}
var Cr = null;
function ip(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function TS(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), ip(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), vn(e, r);
}
function vn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Fn = !1;
function op(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function PS(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ln(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), vn(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ip(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    vn(e, n)
  );
}
function al(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wh(e, n);
  }
}
function Dv(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ul(e, t, n, r) {
  var i = e.updateQueue;
  Fn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next = { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var v = e,
            y = a;
          switch (((d = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(h, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = y.payload), (d = typeof v == "function" ? v.call(h, f, d) : v), d == null)) break e;
              f = be({}, f, d);
              break e;
            case 2:
              Fn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [a]) : d.push(a));
      } else
        (h = { eventTime: h, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a), (a = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ($r |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Mv(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(A(191, i));
        i.call(r);
      }
    }
}
var ra = {},
  Gt = fr(ra),
  Ls = fr(ra),
  Fs = fr(ra);
function kr(e) {
  if (e === ra) throw Error(A(174));
  return e;
}
function sp(e, t) {
  switch ((ce(Fs, t), ce(Ls, e), ce(Gt, ra), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Qf(t, e));
  }
  me(Gt), ce(Gt, t);
}
function qi() {
  me(Gt), me(Ls), me(Fs);
}
function CS(e) {
  kr(Fs.current);
  var t = kr(Gt.current),
    n = Qf(t, e.type);
  t !== n && (ce(Ls, e), ce(Gt, n));
}
function ap(e) {
  Ls.current === e && (me(Gt), me(Ls));
}
var ge = fr(0);
function Wl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Nc = [];
function lp() {
  for (var e = 0; e < Nc.length; e++) Nc[e]._workInProgressVersionPrimary = null;
  Nc.length = 0;
}
var ll = En.ReactCurrentDispatcher,
  jc = En.ReactCurrentBatchConfig,
  Vr = 0,
  Se = null,
  De = null,
  Ie = null,
  Ql = !1,
  cs = !1,
  Ns = 0,
  HC = 0;
function Ue() {
  throw Error(A(321));
}
function up(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
  return !0;
}
function cp(e, t, n, r, i, o) {
  if (
    ((Vr = o),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ll.current = e === null || e.memoizedState === null ? XC : JC),
    (e = n(r, i)),
    cs)
  ) {
    o = 0;
    do {
      if (((cs = !1), (Ns = 0), 25 <= o)) throw Error(A(301));
      (o += 1), (Ie = De = null), (t.updateQueue = null), (ll.current = ZC), (e = n(r, i));
    } while (cs);
  }
  if (((ll.current = ql), (t = De !== null && De.next !== null), (Vr = 0), (Ie = De = Se = null), (Ql = !1), t))
    throw Error(A(300));
  return e;
}
function fp() {
  var e = Ns !== 0;
  return (Ns = 0), e;
}
function Qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ie === null ? (Se.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
}
function Rt() {
  if (De === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Ie === null ? Se.memoizedState : Ie.next;
  if (t !== null) (Ie = t), (De = e);
  else {
    if (e === null) throw Error(A(310));
    (De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Ie === null ? (Se.memoizedState = Ie = e) : (Ie = Ie.next = e);
  }
  return Ie;
}
function js(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vc(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = De,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Vr & c) === c)
        l !== null &&
          (l = l.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f), (Se.lanes |= c), ($r |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      Bt(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Se.lanes |= o), ($r |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $c(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Bt(o, t.memoizedState) || (st = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function kS() {}
function OS(e, t) {
  var n = Se,
    r = Rt(),
    i = t(),
    o = !Bt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (st = !0)),
    (r = r.queue),
    dp(MS.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Vs(9, DS.bind(null, n, r, i, t), void 0, null), Le === null)) throw Error(A(349));
    Vr & 30 || RS(n, t, i);
  }
  return i;
}
function RS(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Se.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function DS(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), AS(t) && IS(e);
}
function MS(e, t, n) {
  return n(function () {
    AS(t) && IS(e);
  });
}
function AS(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bt(e, n);
  } catch {
    return !0;
  }
}
function IS(e) {
  var t = vn(e, 1);
  t !== null && zt(t, e, 1, -1);
}
function Av(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: js, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = YC.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function Vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Se.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function LS() {
  return Rt().memoizedState;
}
function ul(e, t, n, r) {
  var i = Qt();
  (Se.flags |= e), (i.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Iu(e, t, n, r) {
  var i = Rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (((o = s.destroy), r !== null && up(r, s.deps))) {
      i.memoizedState = Vs(t, n, o, r);
      return;
    }
  }
  (Se.flags |= e), (i.memoizedState = Vs(1 | t, n, o, r));
}
function Iv(e, t) {
  return ul(8390656, 8, e, t);
}
function dp(e, t) {
  return Iu(2048, 8, e, t);
}
function FS(e, t) {
  return Iu(4, 2, e, t);
}
function NS(e, t) {
  return Iu(4, 4, e, t);
}
function jS(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function VS(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Iu(4, 4, jS.bind(null, t, e), n);
}
function hp() {}
function $S(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && up(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function zS(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && up(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function BS(e, t, n) {
  return Vr & 21
    ? (Bt(n, t) || ((n = Hw()), (Se.lanes |= n), ($r |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function GC(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = jc.transition;
  jc.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (jc.transition = r);
  }
}
function US() {
  return Rt().memoizedState;
}
function KC(e, t, n) {
  var r = Xn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), WS(e))) QS(t, n);
  else if (((n = TS(e, t, n, r)), n !== null)) {
    var i = et();
    zt(n, e, r, i), qS(n, t, r);
  }
}
function YC(e, t, n) {
  var r = Xn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (WS(e)) QS(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Bt(a, s))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), ip(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = TS(e, t, i, r)), n !== null && ((i = et()), zt(n, e, r, i), qS(n, t, r));
  }
}
function WS(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function QS(e, t) {
  cs = Ql = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function qS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wh(e, n);
  }
}
var ql = {
    readContext: Ot,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useInsertionEffect: Ue,
    useLayoutEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useMutableSource: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    unstable_isNewReconciler: !1,
  },
  XC = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: Iv,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), ul(4194308, 4, jS.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ul(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ul(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Qt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = KC.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Av,
    useDebugValue: hp,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Av(!1),
        t = e[0];
      return (e = GC.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        i = Qt();
      if (ye) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(A(349));
        Vr & 30 || RS(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Iv(MS.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Vs(9, DS.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = Le.identifierPrefix;
      if (ye) {
        var n = an,
          r = sn;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ns++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = HC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  JC = {
    readContext: Ot,
    useCallback: $S,
    useContext: Ot,
    useEffect: dp,
    useImperativeHandle: VS,
    useInsertionEffect: FS,
    useLayoutEffect: NS,
    useMemo: zS,
    useReducer: Vc,
    useRef: LS,
    useState: function () {
      return Vc(js);
    },
    useDebugValue: hp,
    useDeferredValue: function (e) {
      var t = Rt();
      return BS(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = Vc(js)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: kS,
    useSyncExternalStore: OS,
    useId: US,
    unstable_isNewReconciler: !1,
  },
  ZC = {
    readContext: Ot,
    useCallback: $S,
    useContext: Ot,
    useEffect: dp,
    useImperativeHandle: VS,
    useInsertionEffect: FS,
    useLayoutEffect: NS,
    useMemo: zS,
    useReducer: $c,
    useRef: LS,
    useState: function () {
      return $c(js);
    },
    useDebugValue: hp,
    useDeferredValue: function (e) {
      var t = Rt();
      return De === null ? (t.memoizedState = e) : BS(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = $c(js)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: kS,
    useSyncExternalStore: OS,
    useId: US,
    unstable_isNewReconciler: !1,
  };
function Lt(e, t) {
  if (e && e.defaultProps) {
    (t = be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function dd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = Xn(e),
      o = ln(r, i);
    (o.payload = t), n != null && (o.callback = n), (t = Kn(e, o, i)), t !== null && (zt(t, e, i, r), al(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = Xn(e),
      o = ln(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Kn(e, o, i)),
      t !== null && (zt(t, e, i, r), al(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = Xn(e),
      i = ln(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = Kn(e, i, r)), t !== null && (zt(t, e, r, n), al(t, e, r));
  },
};
function Lv(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ds(n, r) || !Ds(i, o)
        : !0
  );
}
function HS(e, t, n) {
  var r = !1,
    i = rr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ot(o))
      : ((i = lt(t) ? Nr : Ye.current), (r = t.contextTypes), (o = (r = r != null) ? Ui(e, i) : rr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fv(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lu.enqueueReplaceState(t, t.state, null);
}
function hd(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), op(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (i.context = Ot(o)) : ((o = lt(t) ? Nr : Ye.current), (i.context = Ui(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (dd(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Lu.enqueueReplaceState(i, i.state, null),
      Ul(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += CP(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function zc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var e1 = typeof WeakMap == "function" ? WeakMap : Map;
function GS(e, t, n) {
  (n = ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gl || ((Gl = !0), (Ed = r)), pd(e, t);
    }),
    n
  );
}
function KS(e, t, n) {
  (n = ln(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        pd(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        pd(e, t), typeof r != "function" && (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function Nv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new e1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = p1.bind(null, e, t, n)), t.then(e, e));
}
function jv(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vv(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = ln(-1, 1)), (t.tag = 2), Kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var t1 = En.ReactCurrentOwner,
  st = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? ES(t, null, n, r) : Qi(t, e.child, n, r);
}
function $v(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Di(t, i),
    (r = cp(e, t, n, r, o, i)),
    (n = fp()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), yn(e, t, i))
      : (ye && n && Jh(t), (t.flags |= 1), Ze(e, t, r, i), t.child)
  );
}
function zv(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !bp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), YS(e, t, o, r, i))
      : ((e = hl(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ds), n(s, r) && e.ref === t.ref)) return yn(e, t, i);
  }
  return (t.flags |= 1), (e = Jn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function YS(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ds(o, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), yn(e, t, i);
  }
  return md(e, t, n, r, i);
}
function XS(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ce(vi, ct), (ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ce(vi, ct),
          (ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ce(vi, ct),
        (ct |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), ce(vi, ct), (ct |= r);
  return Ze(e, t, i, n), t.child;
}
function JS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function md(e, t, n, r, i) {
  var o = lt(n) ? Nr : Ye.current;
  return (
    (o = Ui(t, o)),
    Di(t, i),
    (n = cp(e, t, n, r, o, i)),
    (r = fp()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), yn(e, t, i))
      : (ye && r && Jh(t), (t.flags |= 1), Ze(e, t, n, i), t.child)
  );
}
function Bv(e, t, n, r, i) {
  if (lt(n)) {
    var o = !0;
    jl(t);
  } else o = !1;
  if ((Di(t, i), t.stateNode === null)) cl(e, t), HS(t, n, r), hd(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = Ot(u)) : ((u = lt(n) ? Nr : Ye.current), (u = Ui(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Fv(t, s, r, u)),
      (Fn = !1);
    var d = t.memoizedState;
    (s.state = d),
      Ul(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || at.current || Fn
        ? (typeof c == "function" && (dd(t, n, c, r), (l = t.memoizedState)),
          (a = Fn || Lv(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      PS(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Lt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null ? (l = Ot(l)) : ((l = lt(n) ? Nr : Ye.current), (l = Ui(t, l)));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Fv(t, s, r, l)),
      (Fn = !1),
      (d = t.memoizedState),
      (s.state = d),
      Ul(t, r, s, i);
    var v = t.memoizedState;
    a !== f || d !== v || at.current || Fn
      ? (typeof h == "function" && (dd(t, n, h, r), (v = t.memoizedState)),
        (u = Fn || Lv(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vd(e, t, n, r, o, i);
}
function vd(e, t, n, r, i, o) {
  JS(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Cv(t, n, !1), yn(e, t, o);
  (r = t.stateNode), (t1.current = t);
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Qi(t, e.child, null, o)), (t.child = Qi(t, null, a, o))) : Ze(e, t, a, o),
    (t.memoizedState = r.state),
    i && Cv(t, n, !0),
    t.child
  );
}
function ZS(e) {
  var t = e.stateNode;
  t.pendingContext ? Pv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pv(e, t.context, !1),
    sp(e, t.containerInfo);
}
function Uv(e, t, n, r, i) {
  return Wi(), ep(i), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var yd = { dehydrated: null, treeContext: null, retryLane: 0 };
function gd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function eb(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    ce(ge, i & 1),
    e === null)
  )
    return (
      cd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = ju(s, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = gd(n)),
              (t.memoizedState = yd),
              e)
            : pp(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return n1(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Jn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Jn(a, o)) : ((o = Ir(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? gd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = yd),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Jn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function pp(e, t) {
  return (t = ju({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Fa(e, t, n, r) {
  return (
    r !== null && ep(r),
    Qi(t, e.child, null, n),
    (e = pp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function n1(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zc(Error(A(422)))), Fa(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ju({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Ir(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Qi(t, e.child, null, s),
          (t.child.memoizedState = gd(s)),
          (t.memoizedState = yd),
          o);
  if (!(t.mode & 1)) return Fa(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(A(419))), (r = zc(o, r, void 0)), Fa(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), st || a)) {
    if (((r = Le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), vn(e, i), zt(r, e, i, -1));
    }
    return Sp(), (r = zc(Error(A(421)))), Fa(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = m1.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (dt = Gn(i.nextSibling)),
      (ht = t),
      (ye = !0),
      (Nt = null),
      e !== null && ((Tt[Pt++] = sn), (Tt[Pt++] = an), (Tt[Pt++] = jr), (sn = e.id), (an = e.overflow), (jr = t)),
      (t = pp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fd(e.return, t, n);
}
function Bc(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function tb(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ze(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wv(e, n, t);
        else if (e.tag === 19) Wv(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Wl(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Bc(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Wl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Bc(t, !0, n, null, o);
        break;
      case "together":
        Bc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function cl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), ($r |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Jn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function r1(e, t, n) {
  switch (t.tag) {
    case 3:
      ZS(t), Wi();
      break;
    case 5:
      CS(t);
      break;
    case 1:
      lt(t.type) && jl(t);
      break;
    case 4:
      sp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ce(zl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? eb(e, t, n)
            : (ce(ge, ge.current & 1), (e = yn(e, t, n)), e !== null ? e.sibling : null);
      ce(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tb(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ce(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), XS(e, t, n);
  }
  return yn(e, t, n);
}
var nb, wd, rb, ib;
nb = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wd = function () {};
rb = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), kr(Gt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = zf(e, i)), (r = zf(e, r)), (o = []);
        break;
      case "select":
        (i = be({}, i, { value: void 0 })), (r = be({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (i = Wf(e, i)), (r = Wf(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fl);
    }
    qf(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Es.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
        if (u === "style")
          if (a) {
            for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") || (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Es.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && he("scroll", e), o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ib = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ro(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function i1(e, t, n) {
  var r = t.pendingProps;
  switch ((Zh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return We(t), null;
    case 1:
      return lt(t.type) && Nl(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qi(),
        me(at),
        me(Ye),
        lp(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ia(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (Cd(Nt), (Nt = null)))),
        wd(e, t),
        We(t),
        null
      );
    case 5:
      ap(t);
      var i = kr(Fs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rb(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return We(t), null;
        }
        if (((e = kr(Gt.current)), Ia(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qt] = t), (r[Is] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Wo.length; i++) he(Wo[i], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              Zm(r, o), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), he("invalid", r);
              break;
            case "textarea":
              tv(r, o), he("invalid", r);
          }
          qf(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 && Aa(r.textContent, a, e), (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 && Aa(r.textContent, a, e), (i = ["children", "" + a]))
                : Es.hasOwnProperty(s) && a != null && s === "onScroll" && he("scroll", r);
            }
          switch (n) {
            case "input":
              Ta(r), ev(r, o, !0);
              break;
            case "textarea":
              Ta(r), nv(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Mw(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[qt] = t),
            (e[Is] = r),
            nb(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Hf(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wo.length; i++) he(Wo[i], e);
                i = r;
                break;
              case "source":
                he("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (i = r);
                break;
              case "details":
                he("toggle", e), (i = r);
                break;
              case "input":
                Zm(e, r), (i = zf(e, r)), he("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = be({}, r, { value: void 0 })), he("invalid", e);
                break;
              case "textarea":
                tv(e, r), (i = Wf(e, r)), he("invalid", e);
                break;
              default:
                i = r;
            }
            qf(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Lw(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Aw(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ts(e, l)
                        : typeof l == "number" && Ts(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Es.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && he("scroll", e)
                          : l != null && jh(e, o, l, s));
              }
            switch (n) {
              case "input":
                Ta(e), ev(e, r, !1);
                break;
              case "textarea":
                Ta(e), nv(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ci(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && Ci(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) ib(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = kr(Fs.current)), kr(Gt.current), Ia(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[qt] = t), (o = r.nodeValue !== n) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                Aa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Aa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[qt] = t), (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (me(ge), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && dt !== null && t.mode & 1 && !(t.flags & 128)) xS(), Wi(), (t.flags |= 98560), (o = !1);
        else if (((o = Ia(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(A(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(A(317));
            o[qt] = t;
          } else Wi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (o = !1);
        } else Nt !== null && (Cd(Nt), (Nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ge.current & 1 ? Me === 0 && (Me = 3) : Sp())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return qi(), wd(e, t), e === null && Ms(t.stateNode.containerInfo), We(t), null;
    case 10:
      return rp(t.type._context), We(t), null;
    case 17:
      return lt(t.type) && Nl(), We(t), null;
    case 19:
      if ((me(ge), (o = t.memoizedState), o === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Ro(o, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Wl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ro(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return ce(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ke() > Gi && ((t.flags |= 128), (r = !0), Ro(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Wl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ro(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ye)
            )
              return We(t), null;
          } else
            2 * ke() - o.renderingStartTime > Gi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ro(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ke()),
          (t.sibling = null),
          (n = ge.current),
          ce(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        wp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ct & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function o1(e, t) {
  switch ((Zh(t), t.tag)) {
    case 1:
      return lt(t.type) && Nl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        qi(), me(at), me(Ye), lp(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ap(t), null;
    case 13:
      if ((me(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(A(340));
        Wi();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return me(ge), null;
    case 4:
      return qi(), null;
    case 10:
      return rp(t.type._context), null;
    case 22:
    case 23:
      return wp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Na = !1,
  qe = !1,
  s1 = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function mi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Sd(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Qv = !1;
function a1(e, t) {
  if (((rd = Al), (e = uS()), Xh(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if ((d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (h = f.nextSibling) !== null))
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (id = { focusedElem: e, selectionRange: n }, Al = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    w = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Lt(t.type, y), w);
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (b) {
          Ee(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (v = Qv), (Qv = !1), v;
}
function fs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Sd(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fu(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ob(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ob(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[qt], delete t[Is], delete t[ad], delete t[UC], delete t[WC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sb(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xd(e, t, n), e = e.sibling; e !== null; ) xd(e, t, n), (e = e.sibling);
}
function _d(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_d(e, t, n), e = e.sibling; e !== null; ) _d(e, t, n), (e = e.sibling);
}
var je = null,
  Ft = !1;
function kn(e, t, n) {
  for (n = n.child; n !== null; ) ab(e, t, n), (n = n.sibling);
}
function ab(e, t, n) {
  if (Ht && typeof Ht.onCommitFiberUnmount == "function")
    try {
      Ht.onCommitFiberUnmount(ku, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || mi(n, t);
    case 6:
      var r = je,
        i = Ft;
      (je = null),
        kn(e, t, n),
        (je = r),
        (Ft = i),
        je !== null &&
          (Ft
            ? ((e = je), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (Ft
          ? ((e = je), (n = n.stateNode), e.nodeType === 8 ? Lc(e.parentNode, n) : e.nodeType === 1 && Lc(e, n), Os(e))
          : Lc(je, n.stateNode));
      break;
    case 4:
      (r = je), (i = Ft), (je = n.stateNode.containerInfo), (Ft = !0), kn(e, t, n), (je = r), (Ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag), s !== void 0 && (o & 2 || o & 4) && Sd(n, t, s), (i = i.next);
        } while (i !== r);
      }
      kn(e, t, n);
      break;
    case 1:
      if (!qe && (mi(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Ee(n, t, a);
        }
      kn(e, t, n);
      break;
    case 21:
      kn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((qe = (r = qe) || n.memoizedState !== null), kn(e, t, n), (qe = r)) : kn(e, t, n);
      break;
    default:
      kn(e, t, n);
  }
}
function Hv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new s1()),
      t.forEach(function (r) {
        var i = v1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (je = a.stateNode), (Ft = !1);
              break e;
            case 3:
              (je = a.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (je = a.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(A(160));
        ab(o, s, i), (je = null), (Ft = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ee(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lb(t, e), (t = t.sibling);
}
function lb(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mt(t, e), Wt(e), r & 4)) {
        try {
          fs(3, e, e.return), Fu(3, e);
        } catch (y) {
          Ee(e, e.return, y);
        }
        try {
          fs(5, e, e.return);
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      break;
    case 1:
      Mt(t, e), Wt(e), r & 512 && n !== null && mi(n, n.return);
      break;
    case 5:
      if ((Mt(t, e), Wt(e), r & 512 && n !== null && mi(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Ts(i, "");
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Rw(i, o), Hf(a, s);
            var u = Hf(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Lw(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Aw(i, f)
                  : c === "children"
                    ? Ts(i, f)
                    : jh(i, c, f, u);
            }
            switch (a) {
              case "input":
                Bf(i, o);
                break;
              case "textarea":
                Dw(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? Ci(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ci(i, !!o.multiple, o.defaultValue, !0)
                      : Ci(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Is] = o;
          } catch (y) {
            Ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Mt(t, e), Wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      break;
    case 3:
      if ((Mt(t, e), Wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Os(t.containerInfo);
        } catch (y) {
          Ee(e, e.return, y);
        }
      break;
    case 4:
      Mt(t, e), Wt(e);
      break;
    case 13:
      Mt(t, e),
        Wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (yp = ke())),
        r & 4 && Hv(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((qe = (u = qe) || c), Mt(t, e), (qe = u)) : Mt(t, e),
        Wt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((d = N), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fs(4, d, d.return);
                  break;
                case 1:
                  mi(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount();
                    } catch (y) {
                      Ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  mi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Kv(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (N = h)) : Kv(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s = l != null && l.hasOwnProperty("display") ? l.display : null),
                      (a.style.display = Iw("display", s)));
              } catch (y) {
                Ee(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                Ee(e, e.return, y);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Mt(t, e), Wt(e), r & 4 && Hv(e);
      break;
    case 21:
      break;
    default:
      Mt(t, e), Wt(e);
  }
}
function Wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sb(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ts(i, ""), (r.flags &= -33));
          var o = qv(e);
          _d(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = qv(e);
          xd(e, a, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      Ee(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function l1(e, t, n) {
  (N = e), ub(e);
}
function ub(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Na;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || qe;
        a = Na;
        var u = qe;
        if (((Na = s), (qe = l) && !u))
          for (N = i; N !== null; )
            (s = N),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null ? Yv(i) : l !== null ? ((l.return = s), (N = l)) : Yv(i);
        for (; o !== null; ) (N = o), ub(o), (o = o.sibling);
        (N = i), (Na = a), (qe = u);
      }
      Gv(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : Gv(e);
  }
}
function Gv(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || Fu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Lt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Mv(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mv(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Os(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        qe || (t.flags & 512 && bd(t));
      } catch (d) {
        Ee(t, t.return, d);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Kv(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Yv(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fu(4, t);
          } catch (l) {
            Ee(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ee(t, i, l);
            }
          }
          var o = t.return;
          try {
            bd(t);
          } catch (l) {
            Ee(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bd(t);
          } catch (l) {
            Ee(t, s, l);
          }
      }
    } catch (l) {
      Ee(t, t.return, l);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var u1 = Math.ceil,
  Hl = En.ReactCurrentDispatcher,
  mp = En.ReactCurrentOwner,
  kt = En.ReactCurrentBatchConfig,
  ee = 0,
  Le = null,
  Re = null,
  $e = 0,
  ct = 0,
  vi = fr(0),
  Me = 0,
  $s = null,
  $r = 0,
  Nu = 0,
  vp = 0,
  ds = null,
  ot = null,
  yp = 0,
  Gi = 1 / 0,
  rn = null,
  Gl = !1,
  Ed = null,
  Yn = null,
  ja = !1,
  Un = null,
  Kl = 0,
  hs = 0,
  Td = null,
  fl = -1,
  dl = 0;
function et() {
  return ee & 6 ? ke() : fl !== -1 ? fl : (fl = ke());
}
function Xn(e) {
  return e.mode & 1
    ? ee & 2 && $e !== 0
      ? $e & -$e
      : qC.transition !== null
        ? (dl === 0 && (dl = Hw()), dl)
        : ((e = re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : eS(e.type))), e)
    : 1;
}
function zt(e, t, n, r) {
  if (50 < hs) throw ((hs = 0), (Td = null), Error(A(185)));
  ea(e, n, r),
    (!(ee & 2) || e !== Le) &&
      (e === Le && (!(ee & 2) && (Nu |= n), Me === 4 && zn(e, $e)),
      ut(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((Gi = ke() + 500), Au && dr()));
}
function ut(e, t) {
  var n = e.callbackNode;
  qP(e, t);
  var r = Ml(e, e === Le ? $e : 0);
  if (r === 0) n !== null && ov(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ov(n), t === 1))
      e.tag === 0 ? QC(Xv.bind(null, e)) : wS(Xv.bind(null, e)),
        zC(function () {
          !(ee & 6) && dr();
        }),
        (n = null);
    else {
      switch (Gw(r)) {
        case 1:
          n = Uh;
          break;
        case 4:
          n = Qw;
          break;
        case 16:
          n = Dl;
          break;
        case 536870912:
          n = qw;
          break;
        default:
          n = Dl;
      }
      n = yb(n, cb.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function cb(e, t) {
  if (((fl = -1), (dl = 0), ee & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (Mi() && e.callbackNode !== n) return null;
  var r = Ml(e, e === Le ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yl(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = db();
    (Le !== e || $e !== t) && ((rn = null), (Gi = ke() + 500), Ar(e, t));
    do
      try {
        d1();
        break;
      } catch (a) {
        fb(e, a);
      }
    while (!0);
    np(), (Hl.current = o), (ee = i), Re !== null ? (t = 0) : ((Le = null), ($e = 0), (t = Me));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Jf(e)), i !== 0 && ((r = i), (t = Pd(e, i)))), t === 1))
      throw ((n = $s), Ar(e, 0), zn(e, r), ut(e, ke()), n);
    if (t === 6) zn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !c1(i) &&
          ((t = Yl(e, r)), t === 2 && ((o = Jf(e)), o !== 0 && ((r = o), (t = Pd(e, o)))), t === 1))
      )
        throw ((n = $s), Ar(e, 0), zn(e, r), ut(e, ke()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          yr(e, ot, rn);
          break;
        case 3:
          if ((zn(e, r), (r & 130023424) === r && ((t = yp + 500 - ke()), 10 < t))) {
            if (Ml(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = sd(yr.bind(null, e, ot, rn), t);
            break;
          }
          yr(e, ot, rn);
          break;
        case 4:
          if ((zn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - $t(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * u1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sd(yr.bind(null, e, ot, rn), r);
            break;
          }
          yr(e, ot, rn);
          break;
        case 5:
          yr(e, ot, rn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return ut(e, ke()), e.callbackNode === n ? cb.bind(null, e) : null;
}
function Pd(e, t) {
  var n = ds;
  return (
    e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256),
    (e = Yl(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && Cd(t)),
    e
  );
}
function Cd(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function c1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Bt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zn(e, t) {
  for (t &= ~vp, t &= ~Nu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xv(e) {
  if (ee & 6) throw Error(A(327));
  Mi();
  var t = Ml(e, 0);
  if (!(t & 1)) return ut(e, ke()), null;
  var n = Yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Jf(e);
    r !== 0 && ((t = r), (n = Pd(e, r)));
  }
  if (n === 1) throw ((n = $s), Ar(e, 0), zn(e, t), ut(e, ke()), n);
  if (n === 6) throw Error(A(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), yr(e, ot, rn), ut(e, ke()), null;
}
function gp(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Gi = ke() + 500), Au && dr());
  }
}
function zr(e) {
  Un !== null && Un.tag === 0 && !(ee & 6) && Mi();
  var t = ee;
  ee |= 1;
  var n = kt.transition,
    r = re;
  try {
    if (((kt.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (kt.transition = n), (ee = t), !(ee & 6) && dr();
  }
}
function wp() {
  (ct = vi.current), me(vi);
}
function Ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $C(n)), Re !== null))
    for (n = Re.return; n !== null; ) {
      var r = n;
      switch ((Zh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Nl();
          break;
        case 3:
          qi(), me(at), me(Ye), lp();
          break;
        case 5:
          ap(r);
          break;
        case 4:
          qi();
          break;
        case 13:
          me(ge);
          break;
        case 19:
          me(ge);
          break;
        case 10:
          rp(r.type._context);
          break;
        case 22:
        case 23:
          wp();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (Re = e = Jn(e.current, null)),
    ($e = ct = t),
    (Me = 0),
    ($s = null),
    (vp = Nu = $r = 0),
    (ot = ds = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function fb(e, t) {
  do {
    var n = Re;
    try {
      if ((np(), (ll.current = ql), Ql)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ql = !1;
      }
      if (
        ((Vr = 0), (Ie = De = Se = null), (cs = !1), (Ns = 0), (mp.current = null), n === null || n.return === null)
      ) {
        (Me = 1), ($s = t), (Re = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (((t = $e), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = jv(s);
          if (h !== null) {
            (h.flags &= -257), Vv(h, s, a, o, t), h.mode & 1 && Nv(o, u, t), (t = h), (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Nv(o, u, t), Sp();
              break e;
            }
            l = Error(A(426));
          }
        } else if (ye && a.mode & 1) {
          var w = jv(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Vv(w, s, a, o, t), ep(Hi(l, a));
            break e;
          }
        }
        (o = l = Hi(l, a)), Me !== 4 && (Me = 2), ds === null ? (ds = [o]) : ds.push(o), (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = GS(o, l, t);
              Dv(o, p);
              break e;
            case 1:
              a = l;
              var m = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null && typeof g.componentDidCatch == "function" && (Yn === null || !Yn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var b = KS(o, a, t);
                Dv(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pb(n);
    } catch (S) {
      (t = S), Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function db() {
  var e = Hl.current;
  return (Hl.current = ql), e === null ? ql : e;
}
function Sp() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4), Le === null || (!($r & 268435455) && !(Nu & 268435455)) || zn(Le, $e);
}
function Yl(e, t) {
  var n = ee;
  ee |= 2;
  var r = db();
  (Le !== e || $e !== t) && ((rn = null), Ar(e, t));
  do
    try {
      f1();
      break;
    } catch (i) {
      fb(e, i);
    }
  while (!0);
  if ((np(), (ee = n), (Hl.current = r), Re !== null)) throw Error(A(261));
  return (Le = null), ($e = 0), Me;
}
function f1() {
  for (; Re !== null; ) hb(Re);
}
function d1() {
  for (; Re !== null && !NP(); ) hb(Re);
}
function hb(e) {
  var t = vb(e.alternate, e, ct);
  (e.memoizedProps = e.pendingProps), t === null ? pb(e) : (Re = t), (mp.current = null);
}
function pb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = o1(n, t)), n !== null)) {
        (n.flags &= 32767), (Re = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Re = null);
        return;
      }
    } else if (((n = i1(n, t, ct)), n !== null)) {
      Re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function yr(e, t, n) {
  var r = re,
    i = kt.transition;
  try {
    (kt.transition = null), (re = 1), h1(e, t, n, r);
  } finally {
    (kt.transition = i), (re = r);
  }
  return null;
}
function h1(e, t, n, r) {
  do Mi();
  while (Un !== null);
  if (ee & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (HP(e, o),
    e === Le && ((Re = Le = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ja ||
      ((ja = !0),
      yb(Dl, function () {
        return Mi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = kt.transition), (kt.transition = null);
    var s = re;
    re = 1;
    var a = ee;
    (ee |= 4),
      (mp.current = null),
      a1(e, n),
      lb(n, e),
      AC(id),
      (Al = !!rd),
      (id = rd = null),
      (e.current = n),
      l1(n),
      jP(),
      (ee = a),
      (re = s),
      (kt.transition = o);
  } else e.current = n;
  if (
    (ja && ((ja = !1), (Un = e), (Kl = i)),
    (o = e.pendingLanes),
    o === 0 && (Yn = null),
    zP(n.stateNode),
    ut(e, ke()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Gl) throw ((Gl = !1), (e = Ed), (Ed = null), e);
  return (
    Kl & 1 && e.tag !== 0 && Mi(),
    (o = e.pendingLanes),
    o & 1 ? (e === Td ? hs++ : ((hs = 0), (Td = e))) : (hs = 0),
    dr(),
    null
  );
}
function Mi() {
  if (Un !== null) {
    var e = Gw(Kl),
      t = kt.transition,
      n = re;
    try {
      if (((kt.transition = null), (re = 16 > e ? 16 : e), Un === null)) var r = !1;
      else {
        if (((e = Un), (Un = null), (Kl = 0), ee & 6)) throw Error(A(331));
        var i = ee;
        for (ee |= 4, N = e.current; N !== null; ) {
          var o = N,
            s = o.child;
          if (N.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fs(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var d = c.sibling,
                        h = c.return;
                      if ((ob(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (N = d);
                        break;
                      }
                      N = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (N = s);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fs(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (N = p);
                break e;
              }
              N = o.return;
            }
        }
        var m = e.current;
        for (N = m; N !== null; ) {
          s = N;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (N = g);
          else
            e: for (s = m; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fu(9, a);
                  }
                } catch (S) {
                  Ee(a, a.return, S);
                }
              if (a === s) {
                N = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (N = b);
                break e;
              }
              N = a.return;
            }
        }
        if (((ee = i), dr(), Ht && typeof Ht.onPostCommitFiberRoot == "function"))
          try {
            Ht.onPostCommitFiberRoot(ku, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (kt.transition = t);
    }
  }
  return !1;
}
function Jv(e, t, n) {
  (t = Hi(n, t)), (t = GS(e, t, 1)), (e = Kn(e, t, 1)), (t = et()), e !== null && (ea(e, 1, t), ut(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Jv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r)))
        ) {
          (e = Hi(n, e)), (e = KS(t, e, 1)), (t = Kn(t, e, 1)), (e = et()), t !== null && (ea(t, 1, e), ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function p1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      ($e & n) === n &&
      (Me === 4 || (Me === 3 && ($e & 130023424) === $e && 500 > ke() - yp) ? Ar(e, 0) : (vp |= n)),
    ut(e, t);
}
function mb(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ka), (ka <<= 1), !(ka & 130023424) && (ka = 4194304)) : (t = 1));
  var n = et();
  (e = vn(e, t)), e !== null && (ea(e, t, n), ut(e, n));
}
function m1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), mb(e, n);
}
function v1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), mb(e, n);
}
var vb;
vb = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), r1(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), ye && t.flags & 1048576 && SS(t, $l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      cl(e, t), (e = t.pendingProps);
      var i = Ui(t, Ye.current);
      Di(t, n), (i = cp(null, t, r, e, i, n));
      var o = fp();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lt(r) ? ((o = !0), jl(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            op(t),
            (i.updater = Lu),
            (t.stateNode = i),
            (i._reactInternals = t),
            hd(t, r, e, n),
            (t = vd(null, t, r, !0, o, n)))
          : ((t.tag = 0), ye && o && Jh(t), Ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (cl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = g1(r)),
          (e = Lt(r, e)),
          i)
        ) {
          case 0:
            t = md(null, t, r, e, n);
            break e;
          case 1:
            t = Bv(null, t, r, e, n);
            break e;
          case 11:
            t = $v(null, t, r, e, n);
            break e;
          case 14:
            t = zv(null, t, r, Lt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Lt(r, i)), md(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Lt(r, i)), Bv(e, t, r, i, n);
    case 3:
      e: {
        if ((ZS(t), e === null)) throw Error(A(387));
        (r = t.pendingProps), (o = t.memoizedState), (i = o.element), PS(e, t), Ul(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Hi(Error(A(423)), t)), (t = Uv(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Hi(Error(A(424)), t)), (t = Uv(e, t, r, n, i));
            break e;
          } else
            for (
              dt = Gn(t.stateNode.containerInfo.firstChild),
                ht = t,
                ye = !0,
                Nt = null,
                n = ES(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wi(), r === i)) {
            t = yn(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        CS(t),
        e === null && cd(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        od(r, i) ? (s = null) : o !== null && od(r, o) && (t.flags |= 32),
        JS(e, t),
        Ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && cd(t), null;
    case 13:
      return eb(e, t, n);
    case 4:
      return (
        sp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qi(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Lt(r, i)), $v(e, t, r, i, n);
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ce(zl, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Bt(o.value, s)) {
            if (o.children === i.children && !at.current) {
              t = yn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = ln(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                      }
                    }
                    (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), fd(o.return, n, t), (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(A(341));
                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), fd(s, n, t), (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ze(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Di(t, n),
        (i = Ot(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Lt(r, t.pendingProps)), (i = Lt(r.type, i)), zv(e, t, r, i, n);
    case 15:
      return YS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Lt(r, i)),
        cl(e, t),
        (t.tag = 1),
        lt(r) ? ((e = !0), jl(t)) : (e = !1),
        Di(t, n),
        HS(t, r, i),
        hd(t, r, i, n),
        vd(null, t, r, !0, e, n)
      );
    case 19:
      return tb(e, t, n);
    case 22:
      return XS(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function yb(e, t) {
  return Ww(e, t);
}
function y1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, n, r) {
  return new y1(e, t, n, r);
}
function bp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function g1(e) {
  if (typeof e == "function") return bp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $h)) return 11;
    if (e === zh) return 14;
  }
  return 2;
}
function Jn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hl(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) bp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case si:
        return Ir(n.children, i, o, t);
      case Vh:
        (s = 8), (i |= 8);
        break;
      case Nf:
        return (e = Ct(12, n, t, i | 2)), (e.elementType = Nf), (e.lanes = o), e;
      case jf:
        return (e = Ct(13, n, t, i)), (e.elementType = jf), (e.lanes = o), e;
      case Vf:
        return (e = Ct(19, n, t, i)), (e.elementType = Vf), (e.lanes = o), e;
      case Cw:
        return ju(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tw:
              s = 10;
              break e;
            case Pw:
              s = 9;
              break e;
            case $h:
              s = 11;
              break e;
            case zh:
              s = 14;
              break e;
            case Ln:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (t = Ct(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function Ir(e, t, n, r) {
  return (e = Ct(7, e, r, t)), (e.lanes = n), e;
}
function ju(e, t, n, r) {
  return (e = Ct(22, e, r, t)), (e.elementType = Cw), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Uc(e, t, n) {
  return (e = Ct(6, e, null, t)), (e.lanes = n), e;
}
function Wc(e, t, n) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function w1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ec(0)),
    (this.expirationTimes = Ec(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ec(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function xp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new w1(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ct(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    op(o),
    e
  );
}
function S1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: oi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gb(e) {
  if (!e) return rr;
  e = e._reactInternals;
  e: {
    if (Hr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (lt(n)) return gS(e, n, t);
  }
  return t;
}
function wb(e, t, n, r, i, o, s, a, l) {
  return (
    (e = xp(n, r, !0, e, i, o, s, a, l)),
    (e.context = gb(null)),
    (n = e.current),
    (r = et()),
    (i = Xn(n)),
    (o = ln(r, i)),
    (o.callback = t ?? null),
    Kn(n, o, i),
    (e.current.lanes = i),
    ea(e, i, r),
    ut(e, r),
    e
  );
}
function Vu(e, t, n, r) {
  var i = t.current,
    o = et(),
    s = Xn(i);
  return (
    (n = gb(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ln(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kn(i, t, s)),
    e !== null && (zt(e, i, s, o), al(e, i, s)),
    s
  );
}
function Xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _p(e, t) {
  Zv(e, t), (e = e.alternate) && Zv(e, t);
}
function b1() {
  return null;
}
var Sb =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ep(e) {
  this._internalRoot = e;
}
$u.prototype.render = Ep.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Vu(e, t, null, null);
};
$u.prototype.unmount = Ep.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zr(function () {
      Vu(null, e, null, null);
    }),
      (t[mn] = null);
  }
};
function $u(e) {
  this._internalRoot = e;
}
$u.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++);
    $n.splice(n, 0, e), n === 0 && Zw(e);
  }
};
function Tp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ey() {}
function x1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Xl(s);
        o.call(u);
      };
    }
    var s = wb(t, r, e, 0, null, !1, !1, "", ey);
    return (e._reactRootContainer = s), (e[mn] = s.current), Ms(e.nodeType === 8 ? e.parentNode : e), zr(), s;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Xl(l);
      a.call(u);
    };
  }
  var l = xp(e, 0, !1, null, null, !1, !1, "", ey);
  return (
    (e._reactRootContainer = l),
    (e[mn] = l.current),
    Ms(e.nodeType === 8 ? e.parentNode : e),
    zr(function () {
      Vu(t, l, n, r);
    }),
    l
  );
}
function Bu(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Xl(s);
        a.call(l);
      };
    }
    Vu(t, s, e, i);
  } else s = x1(n, t, e, i, r);
  return Xl(s);
}
Kw = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Uo(t.pendingLanes);
        n !== 0 && (Wh(t, n | 1), ut(t, ke()), !(ee & 6) && ((Gi = ke() + 500), dr()));
      }
      break;
    case 13:
      zr(function () {
        var r = vn(e, 1);
        if (r !== null) {
          var i = et();
          zt(r, e, 1, i);
        }
      }),
        _p(e, 1);
  }
};
Qh = function (e) {
  if (e.tag === 13) {
    var t = vn(e, 134217728);
    if (t !== null) {
      var n = et();
      zt(t, e, 134217728, n);
    }
    _p(e, 134217728);
  }
};
Yw = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = vn(e, t);
    if (n !== null) {
      var r = et();
      zt(n, e, t, r);
    }
    _p(e, t);
  }
};
Xw = function () {
  return re;
};
Jw = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Kf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Bf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Mu(r);
            if (!i) throw Error(A(90));
            Ow(r), Bf(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dw(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ci(e, !!n.multiple, t, !1);
  }
};
jw = gp;
Vw = zr;
var _1 = { usingClientEntryPoint: !1, Events: [na, ci, Mu, Fw, Nw, gp] },
  Do = { findFiberByHostInstance: Pr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  E1 = {
    bundleType: Do.bundleType,
    version: Do.version,
    rendererPackageName: Do.rendererPackageName,
    rendererConfig: Do.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: En.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bw(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Do.findFiberByHostInstance || b1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Va.isDisabled && Va.supportsFiber)
    try {
      (ku = Va.inject(E1)), (Ht = Va);
    } catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _1;
yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tp(t)) throw Error(A(200));
  return S1(e, t, null, n);
};
yt.createRoot = function (e, t) {
  if (!Tp(e)) throw Error(A(299));
  var n = !1,
    r = "",
    i = Sb;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = xp(e, 1, !1, null, null, n, !1, r, i)),
    (e[mn] = t.current),
    Ms(e.nodeType === 8 ? e.parentNode : e),
    new Ep(t)
  );
};
yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Bw(t)), (e = e === null ? null : e.stateNode), e;
};
yt.flushSync = function (e) {
  return zr(e);
};
yt.hydrate = function (e, t, n) {
  if (!zu(t)) throw Error(A(200));
  return Bu(null, e, t, !0, n);
};
yt.hydrateRoot = function (e, t, n) {
  if (!Tp(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Sb;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = wb(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[mn] = t.current),
    Ms(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new $u(t);
};
yt.render = function (e, t, n) {
  if (!zu(t)) throw Error(A(200));
  return Bu(null, e, t, !1, n);
};
yt.unmountComponentAtNode = function (e) {
  if (!zu(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (zr(function () {
        Bu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mn] = null);
        });
      }),
      !0)
    : !1;
};
yt.unstable_batchedUpdates = gp;
yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zu(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Bu(e, t, n, !1, r);
};
yt.version = "18.3.1-next-f1338f8080-20240426";
function bb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bb);
    } catch (e) {
      console.error(e);
    }
}
bb(), (bw.exports = yt);
var ia = bw.exports;
const T1 = Pu(ia);
var xb,
  ty = ia;
(xb = ty.createRoot), ty.hydrateRoot;
var P1 = "Invariant failed";
function Vt(e, t) {
  if (!e) throw new Error(P1);
}
function Ai(e) {
  const t = e.resolvedLocation,
    n = e.location,
    r = (t == null ? void 0 : t.pathname) !== n.pathname,
    i = (t == null ? void 0 : t.href) !== n.href,
    o = (t == null ? void 0 : t.hash) !== n.hash;
  return { fromLocation: t, toLocation: n, pathChanged: r, hrefChanged: i, hashChanged: o };
}
const C1 = "Error preloading route! ☝️";
function yi(e) {
  return e[e.length - 1];
}
function k1(e) {
  return typeof e == "function";
}
function Or(e, t) {
  return k1(e) ? e(t) : e;
}
function kd(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function xt(e, t) {
  if (e === t) return e;
  const n = t,
    r = ry(e) && ry(n);
  if (r || (Jl(e) && Jl(n))) {
    const i = r ? e : Object.keys(e),
      o = i.length,
      s = r ? n : Object.keys(n),
      a = s.length,
      l = r ? [] : {};
    let u = 0;
    for (let c = 0; c < a; c++) {
      const f = r ? c : s[c];
      ((!r && i.includes(f)) || r) && e[f] === void 0 && n[f] === void 0
        ? ((l[f] = void 0), u++)
        : ((l[f] = xt(e[f], n[f])), l[f] === e[f] && e[f] !== void 0 && u++);
    }
    return o === a && u === o ? e : l;
  }
  return n;
}
function Jl(e) {
  if (!ny(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!ny(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function ny(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ry(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function iy(e, t) {
  let n = Object.keys(e);
  return t && (n = n.filter((r) => e[r] !== void 0)), n;
}
function Ii(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Jl(e) && Jl(t)) {
    const r = (n == null ? void 0 : n.ignoreUndefined) ?? !0,
      i = iy(e, r),
      o = iy(t, r);
    return !(n != null && n.partial) && i.length !== o.length ? !1 : o.every((s) => Ii(e[s], t[s], n));
  }
  return Array.isArray(e) && Array.isArray(t) ? (e.length !== t.length ? !1 : !e.some((r, i) => !Ii(r, t[i], n))) : !1;
}
function ti(e) {
  let t, n;
  const r = new Promise((i, o) => {
    (t = i), (n = o);
  });
  return (
    (r.status = "pending"),
    (r.resolve = (i) => {
      (r.status = "resolved"), (r.value = i), t(i), e == null || e(i);
    }),
    (r.reject = (i) => {
      (r.status = "rejected"), n(i);
    }),
    r
  );
}
function O1(e) {
  return /%[0-9A-Fa-f]{2}/.test(e);
}
function un(e) {
  return Uu(e.filter((t) => t !== void 0).join("/"));
}
function Uu(e) {
  return e.replace(/\/{2,}/g, "/");
}
function Pp(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Rr(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function R1(e) {
  return Rr(Pp(e));
}
function Zl(e, t) {
  return e != null && e.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function D1(e, t, n) {
  return Zl(e, n) === Zl(t, n);
}
function M1({ basepath: e, base: t, to: n, trailingSlash: r = "never", caseSensitive: i }) {
  var o, s;
  (t = eu(e, t, i)), (n = eu(e, n, i));
  let a = Ki(t);
  const l = Ki(n);
  a.length > 1 && ((o = yi(a)) == null ? void 0 : o.value) === "/" && a.pop(),
    l.forEach((c, f) => {
      c.value === "/"
        ? f
          ? f === l.length - 1 && a.push(c)
          : (a = [c])
        : c.value === ".."
          ? a.pop()
          : c.value === "." || a.push(c);
    }),
    a.length > 1 &&
      (((s = yi(a)) == null ? void 0 : s.value) === "/"
        ? r === "never" && a.pop()
        : r === "always" && a.push({ type: "pathname", value: "/" }));
  const u = un([e, ...a.map((c) => c.value)]);
  return Uu(u);
}
function Ki(e) {
  if (!e) return [];
  e = Uu(e);
  const t = [];
  if ((e.slice(0, 1) === "/" && ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })), !e)) return t;
  const n = e.split("/").filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r === "$" || r === "*"
          ? { type: "wildcard", value: r }
          : r.charAt(0) === "$"
            ? { type: "param", value: r }
            : {
                type: "pathname",
                value: r.includes("%25")
                  ? r
                      .split("%25")
                      .map((i) => decodeURI(i))
                      .join("%25")
                  : decodeURI(r),
              }
      )
    ),
    e.slice(-1) === "/" && ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    t
  );
}
function $a({ path: e, params: t, leaveWildcards: n, leaveParams: r, decodeCharMap: i }) {
  const o = Ki(e);
  function s(u) {
    const c = t[u],
      f = typeof c == "string";
    return ["*", "_splat"].includes(u) ? (f ? encodeURI(c) : c) : f ? A1(c, i) : c;
  }
  const a = {},
    l = un(
      o.map((u) => {
        if (u.type === "wildcard") {
          a._splat = t._splat;
          const c = s("_splat");
          return n ? `${u.value}${c ?? ""}` : c;
        }
        if (u.type === "param") {
          const c = u.value.substring(1);
          if (((a[c] = t[c]), r)) {
            const f = s(u.value);
            return `${u.value}${f ?? ""}`;
          }
          return s(c) ?? "undefined";
        }
        return u.value;
      })
    );
  return { usedParams: a, interpolatedPath: l };
}
function A1(e, t) {
  let n = encodeURIComponent(e);
  if (t) for (const [r, i] of t) n = n.replaceAll(r, i);
  return n;
}
function za(e, t, n) {
  const r = I1(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function eu(e, t, n = !1) {
  const r = n ? e : e.toLowerCase(),
    i = n ? t : t.toLowerCase();
  switch (!0) {
    case r === "/":
      return t;
    case i === r:
      return "";
    case t.length < e.length:
      return t;
    case i[r.length] !== "/":
      return t;
    case i.startsWith(r):
      return t.slice(e.length);
    default:
      return t;
  }
}
function I1(e, t, n) {
  if (e !== "/" && !t.startsWith(e)) return;
  t = eu(e, t, n.caseSensitive);
  const r = eu(e, `${n.to ?? "$"}`, n.caseSensitive),
    i = Ki(t),
    o = Ki(r);
  t.startsWith("/") || i.unshift({ type: "pathname", value: "/" }),
    r.startsWith("/") || o.unshift({ type: "pathname", value: "/" });
  const s = {};
  return (() => {
    for (let l = 0; l < Math.max(i.length, o.length); l++) {
      const u = i[l],
        c = o[l],
        f = l >= i.length - 1,
        d = l >= o.length - 1;
      if (c) {
        if (c.type === "wildcard") {
          const h = decodeURI(un(i.slice(l).map((v) => v.value)));
          return (s["*"] = h), (s._splat = h), !0;
        }
        if (c.type === "pathname") {
          if (c.value === "/" && !(u != null && u.value)) return !0;
          if (u) {
            if (n.caseSensitive) {
              if (c.value !== u.value) return !1;
            } else if (c.value.toLowerCase() !== u.value.toLowerCase()) return !1;
          }
        }
        if (!u) return !1;
        if (c.type === "param") {
          if (u.value === "/") return !1;
          u.value.charAt(0) !== "$" && (s[c.value.substring(1)] = decodeURIComponent(u.value));
        }
      }
      if (!f && d)
        return (s["**"] = un(i.slice(l + 1).map((h) => h.value))), !!n.fuzzy && (c == null ? void 0 : c.value) !== "/";
    }
    return !0;
  })()
    ? s
    : void 0;
}
function L1(e, t) {
  let n,
    r,
    i,
    o = "";
  for (n in e)
    if ((i = e[n]) !== void 0)
      if (Array.isArray(i))
        for (r = 0; r < i.length; r++) o && (o += "&"), (o += encodeURIComponent(n) + "=" + encodeURIComponent(i[r]));
      else o && (o += "&"), (o += encodeURIComponent(n) + "=" + encodeURIComponent(i));
  return "" + o;
}
function oy(e) {
  if (!e) return "";
  const t = O1(e) ? decodeURIComponent(e) : decodeURIComponent(encodeURIComponent(e));
  return t === "false" ? !1 : t === "true" ? !0 : +t * 0 === 0 && +t + "" === t ? +t : t;
}
function F1(e, t) {
  let n, r;
  const i = {},
    o = e.split("&");
  for (; (n = o.shift()); ) {
    const s = n.indexOf("=");
    if (s !== -1) {
      (r = n.slice(0, s)), (r = decodeURIComponent(r));
      const a = n.slice(s + 1);
      i[r] !== void 0 ? (i[r] = [].concat(i[r], oy(a))) : (i[r] = oy(a));
    } else (r = n), (r = decodeURIComponent(r)), (i[r] = "");
  }
  return i;
}
const it = "__root__",
  N1 = V1(JSON.parse),
  j1 = $1(JSON.stringify, JSON.parse);
function V1(e) {
  return (t) => {
    t.substring(0, 1) === "?" && (t = t.substring(1));
    const n = F1(t);
    for (const r in n) {
      const i = n[r];
      if (typeof i == "string")
        try {
          n[r] = e(i);
        } catch {}
    }
    return n;
  };
}
function $1(e, t) {
  function n(r) {
    if (typeof r == "object" && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == "string" && typeof t == "function")
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return (r) => {
    (r = { ...r }),
      Object.keys(r).forEach((o) => {
        const s = r[o];
        typeof s > "u" || s === void 0 ? delete r[o] : (r[o] = n(s));
      });
    const i = L1(r).toString();
    return i ? `?${i}` : "";
  };
}
const Zn = "__TSR_index",
  sy = "popstate",
  ay = "beforeunload";
function _b(e) {
  let t = e.getLocation();
  const n = new Set(),
    r = (s) => {
      (t = e.getLocation()), n.forEach((a) => a({ location: t, action: s }));
    },
    i = (s) => {
      (e.notifyOnIndexChange ?? !0) ? r(s) : (t = e.getLocation());
    },
    o = async ({ task: s, navigateOpts: a, ...l }) => {
      var u, c;
      if ((a == null ? void 0 : a.ignoreBlocker) ?? !1) {
        s();
        return;
      }
      const d = ((u = e.getBlockers) == null ? void 0 : u.call(e)) ?? [],
        h = l.type === "PUSH" || l.type === "REPLACE";
      if (typeof document < "u" && d.length && h)
        for (const v of d) {
          const y = zs(l.path, l.state);
          if (await v.blockerFn({ currentLocation: t, nextLocation: y, action: l.type })) {
            (c = e.onBlocked) == null || c.call(e);
            return;
          }
        }
      s();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (s) => (
      n.add(s),
      () => {
        n.delete(s);
      }
    ),
    push: (s, a, l) => {
      const u = t.state[Zn];
      (a = Od(u + 1, a)),
        o({
          task: () => {
            e.pushState(s, a), r({ type: "PUSH" });
          },
          navigateOpts: l,
          type: "PUSH",
          path: s,
          state: a,
        });
    },
    replace: (s, a, l) => {
      const u = t.state[Zn];
      (a = Od(u, a)),
        o({
          task: () => {
            e.replaceState(s, a), r({ type: "REPLACE" });
          },
          navigateOpts: l,
          type: "REPLACE",
          path: s,
          state: a,
        });
    },
    go: (s, a) => {
      o({
        task: () => {
          e.go(s), i({ type: "GO", index: s });
        },
        navigateOpts: a,
        type: "GO",
      });
    },
    back: (s) => {
      o({
        task: () => {
          e.back((s == null ? void 0 : s.ignoreBlocker) ?? !1), i({ type: "BACK" });
        },
        navigateOpts: s,
        type: "BACK",
      });
    },
    forward: (s) => {
      o({
        task: () => {
          e.forward((s == null ? void 0 : s.ignoreBlocker) ?? !1), i({ type: "FORWARD" });
        },
        navigateOpts: s,
        type: "FORWARD",
      });
    },
    canGoBack: () => t.state[Zn] !== 0,
    createHref: (s) => e.createHref(s),
    block: (s) => {
      var a;
      if (!e.setBlockers) return () => {};
      const l = ((a = e.getBlockers) == null ? void 0 : a.call(e)) ?? [];
      return (
        e.setBlockers([...l, s]),
        () => {
          var u, c;
          const f = ((u = e.getBlockers) == null ? void 0 : u.call(e)) ?? [];
          (c = e.setBlockers) == null ||
            c.call(
              e,
              f.filter((d) => d !== s)
            );
        }
      );
    },
    flush: () => {
      var s;
      return (s = e.flush) == null ? void 0 : s.call(e);
    },
    destroy: () => {
      var s;
      return (s = e.destroy) == null ? void 0 : s.call(e);
    },
    notify: r,
  };
}
function Od(e, t) {
  return t || (t = {}), { ...t, key: Cp(), [Zn]: e };
}
function z1(e) {
  var t;
  const n = typeof document < "u" ? window : void 0,
    r = n.history.pushState,
    i = n.history.replaceState;
  let o = [];
  const s = () => o,
    a = (C) => (o = C),
    l = (C) => C,
    u = () => zs(`${n.location.pathname}${n.location.search}${n.location.hash}`, n.history.state);
  ((t = n.history.state) != null && t.key) || n.history.replaceState({ [Zn]: 0, key: Cp() }, "");
  let c = u(),
    f,
    d = !1,
    h = !1,
    v = !1,
    y = !1;
  const w = () => c;
  let p, m;
  const g = () => {
      p &&
        ((E._ignoreSubscribers = !0),
        (p.isPush ? n.history.pushState : n.history.replaceState)(p.state, "", p.href),
        (E._ignoreSubscribers = !1),
        (p = void 0),
        (m = void 0),
        (f = void 0));
    },
    b = (C, k, D) => {
      const R = l(k);
      m || (f = c),
        (c = zs(k, D)),
        (p = { href: R, state: D, isPush: (p == null ? void 0 : p.isPush) || C === "push" }),
        m || (m = Promise.resolve().then(() => g()));
    },
    S = (C) => {
      (c = u()), E.notify({ type: C });
    },
    _ = async () => {
      if (h) {
        h = !1;
        return;
      }
      const C = u(),
        k = C.state[Zn] - c.state[Zn],
        D = k === 1,
        R = k === -1,
        F = (!D && !R) || d;
      d = !1;
      const L = F ? "GO" : R ? "BACK" : "FORWARD",
        B = F ? { type: "GO", index: k } : { type: R ? "BACK" : "FORWARD" };
      if (v) v = !1;
      else {
        const q = s();
        if (typeof document < "u" && q.length) {
          for (const z of q)
            if (await z.blockerFn({ currentLocation: c, nextLocation: C, action: L })) {
              (h = !0), n.history.go(1), E.notify(B);
              return;
            }
        }
      }
      (c = u()), E.notify(B);
    },
    T = (C) => {
      if (y) {
        y = !1;
        return;
      }
      let k = !1;
      const D = s();
      if (typeof document < "u" && D.length)
        for (const R of D) {
          const F = R.enableBeforeUnload ?? !0;
          if (F === !0) {
            k = !0;
            break;
          }
          if (typeof F == "function" && F() === !0) {
            k = !0;
            break;
          }
        }
      if (k) return C.preventDefault(), (C.returnValue = "");
    },
    E = _b({
      getLocation: w,
      getLength: () => n.history.length,
      pushState: (C, k) => b("push", C, k),
      replaceState: (C, k) => b("replace", C, k),
      back: (C) => (C && (v = !0), (y = !0), n.history.back()),
      forward: (C) => {
        C && (v = !0), (y = !0), n.history.forward();
      },
      go: (C) => {
        (d = !0), n.history.go(C);
      },
      createHref: (C) => l(C),
      flush: g,
      destroy: () => {
        (n.history.pushState = r),
          (n.history.replaceState = i),
          n.removeEventListener(ay, T, { capture: !0 }),
          n.removeEventListener(sy, _);
      },
      onBlocked: () => {
        f && c !== f && (c = f);
      },
      getBlockers: s,
      setBlockers: a,
      notifyOnIndexChange: !1,
    });
  return (
    n.addEventListener(ay, T, { capture: !0 }),
    n.addEventListener(sy, _),
    (n.history.pushState = function (...C) {
      const k = r.apply(n.history, C);
      return E._ignoreSubscribers || S("PUSH"), k;
    }),
    (n.history.replaceState = function (...C) {
      const k = i.apply(n.history, C);
      return E._ignoreSubscribers || S("REPLACE"), k;
    }),
    E
  );
}
function B1(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1;
  const r = t.map((o, s) => Od(s, void 0));
  return _b({
    getLocation: () => zs(t[n], r[n]),
    getLength: () => t.length,
    pushState: (o, s) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)), r.push(s), t.push(o), (n = Math.max(t.length - 1, 0));
    },
    replaceState: (o, s) => {
      (r[n] = s), (t[n] = o);
    },
    back: () => {
      n = Math.max(n - 1, 0);
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: (o) => {
      n = Math.min(Math.max(n + o, 0), t.length - 1);
    },
    createHref: (o) => o,
  });
}
function zs(e, t) {
  const n = e.indexOf("#"),
    r = e.indexOf("?");
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : "",
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : "",
    state: t || { [Zn]: 0, key: Cp() },
  };
}
function Cp() {
  return (Math.random() + 1).toString(36).substring(7);
}
function kp(e) {
  const t = e.errorComponent ?? Wu;
  return O.jsx(U1, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) => (n ? x.createElement(t, { error: n, reset: r }) : e.children),
  });
}
class U1 extends x.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function Wu({ error: e }) {
  const [t, n] = x.useState(!1);
  return O.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      O.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          O.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          O.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => n((r) => !r),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      O.jsx("div", { style: { height: ".25rem" } }),
      t
        ? O.jsx("div", {
            children: O.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message ? O.jsx("code", { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
var Eb = { exports: {} },
  Tb = {},
  Pb = { exports: {} },
  Cb = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yi = x;
function W1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Q1 = typeof Object.is == "function" ? Object.is : W1,
  q1 = Yi.useState,
  H1 = Yi.useEffect,
  G1 = Yi.useLayoutEffect,
  K1 = Yi.useDebugValue;
function Y1(e, t) {
  var n = t(),
    r = q1({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    G1(
      function () {
        (i.value = n), (i.getSnapshot = t), Qc(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    H1(
      function () {
        return (
          Qc(i) && o({ inst: i }),
          e(function () {
            Qc(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    K1(n),
    n
  );
}
function Qc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Q1(e, n);
  } catch {
    return !0;
  }
}
function X1(e, t) {
  return t();
}
var J1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? X1 : Y1;
Cb.useSyncExternalStore = Yi.useSyncExternalStore !== void 0 ? Yi.useSyncExternalStore : J1;
Pb.exports = Cb;
var Z1 = Pb.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qu = x,
  ek = Z1;
function tk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nk = typeof Object.is == "function" ? Object.is : tk,
  rk = ek.useSyncExternalStore,
  ik = Qu.useRef,
  ok = Qu.useEffect,
  sk = Qu.useMemo,
  ak = Qu.useDebugValue;
Tb.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = ik(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = sk(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = r(h)), i !== void 0 && s.hasValue)) {
            var v = s.value;
            if (i(v, h)) return (f = v);
          }
          return (f = h);
        }
        if (((v = f), nk(c, h))) return v;
        var y = r(h);
        return i !== void 0 && i(v, y) ? ((c = h), v) : ((c = h), (f = y));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = rk(e, o[0], o[1]);
  return (
    ok(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    ak(a),
    a
  );
};
Eb.exports = Tb;
var lk = Eb.exports;
const Li = new WeakMap(),
  pl = new WeakMap(),
  tu = { current: [] };
let qc = !1,
  ps = 0;
const Qo = new Set(),
  Ba = new Map();
function kb(e) {
  const t = Array.from(e).sort((n, r) =>
    n instanceof Fi && n.options.deps.includes(r) ? 1 : r instanceof Fi && r.options.deps.includes(n) ? -1 : 0
  );
  for (const n of t) {
    if (tu.current.includes(n)) continue;
    tu.current.push(n), n.recompute();
    const r = pl.get(n);
    if (r)
      for (const i of r) {
        const o = Li.get(i);
        o && kb(o);
      }
  }
}
function uk(e) {
  e.listeners.forEach((t) => t({ prevVal: e.prevState, currentVal: e.state }));
}
function ck(e) {
  e.listeners.forEach((t) => t({ prevVal: e.prevState, currentVal: e.state }));
}
function Ob(e) {
  if ((ps > 0 && !Ba.has(e) && Ba.set(e, e.prevState), Qo.add(e), !(ps > 0) && !qc))
    try {
      for (qc = !0; Qo.size > 0; ) {
        const t = Array.from(Qo);
        Qo.clear();
        for (const n of t) {
          const r = Ba.get(n) ?? n.prevState;
          (n.prevState = r), uk(n);
        }
        for (const n of t) {
          const r = Li.get(n);
          r && (tu.current.push(n), kb(r));
        }
        for (const n of t) {
          const r = Li.get(n);
          if (r) for (const i of r) ck(i);
        }
      }
    } finally {
      (qc = !1), (tu.current = []), Ba.clear();
    }
}
function Hc(e) {
  ps++;
  try {
    e();
  } finally {
    if ((ps--, ps === 0)) {
      const t = Array.from(Qo)[0];
      t && Ob(t);
    }
  }
}
class Rd {
  constructor(t, n) {
    (this.listeners = new Set()),
      (this.subscribe = (r) => {
        var i, o;
        this.listeners.add(r);
        const s = (o = (i = this.options) == null ? void 0 : i.onSubscribe) == null ? void 0 : o.call(i, r, this);
        return () => {
          this.listeners.delete(r), s == null || s();
        };
      }),
      (this.setState = (r) => {
        var i, o, s;
        (this.prevState = this.state),
          (this.state =
            (i = this.options) != null && i.updateFn ? this.options.updateFn(this.prevState)(r) : r(this.prevState)),
          (s = (o = this.options) == null ? void 0 : o.onUpdate) == null || s.call(o),
          Ob(this);
      }),
      (this.prevState = t),
      (this.state = t),
      (this.options = n);
  }
}
class Fi {
  constructor(t) {
    (this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const n = [],
          r = [];
        for (const i of this.options.deps) n.push(i.prevState), r.push(i.state);
        return (this.lastSeenDepValues = r), { prevDepVals: n, currDepVals: r, prevVal: this.prevState ?? void 0 };
      }),
      (this.recompute = () => {
        var n, r;
        this.prevState = this.state;
        const { prevDepVals: i, currDepVals: o, prevVal: s } = this.getDepVals();
        (this.state = this.options.fn({ prevDepVals: i, currDepVals: o, prevVal: s })),
          (r = (n = this.options).onUpdate) == null || r.call(n);
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const o of this.options.deps) o instanceof Fi && o.checkIfRecalculationNeededDeeply();
        let n = !1;
        const r = this.lastSeenDepValues,
          { currDepVals: i } = this.getDepVals();
        for (let o = 0; o < i.length; o++)
          if (i[o] !== r[o]) {
            n = !0;
            break;
          }
        n && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const n of this._subscriptions) n();
        }
      )),
      (this.subscribe = (n) => {
        var r, i;
        this.listeners.add(n);
        const o = (i = (r = this.options).onSubscribe) == null ? void 0 : i.call(r, n, this);
        return () => {
          this.listeners.delete(n), o == null || o();
        };
      }),
      (this.options = t),
      (this.state = t.fn({ prevDepVals: void 0, prevVal: void 0, currDepVals: this.getDepVals().currDepVals }));
  }
  registerOnGraph(t = this.options.deps) {
    for (const n of t)
      if (n instanceof Fi) n.registerOnGraph(), this.registerOnGraph(n.options.deps);
      else if (n instanceof Rd) {
        let r = Li.get(n);
        r || ((r = new Set()), Li.set(n, r)), r.add(this);
        let i = pl.get(this);
        i || ((i = new Set()), pl.set(this, i)), i.add(n);
      }
  }
  unregisterFromGraph(t = this.options.deps) {
    for (const n of t)
      if (n instanceof Fi) this.unregisterFromGraph(n.options.deps);
      else if (n instanceof Rd) {
        const r = Li.get(n);
        r && r.delete(this);
        const i = pl.get(this);
        i && i.delete(n);
      }
  }
}
function fk(e, t = (n) => n) {
  return lk.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    dk
  );
}
function dk(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, i] of e) if (!t.has(r) || !Object.is(i, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
  return !0;
}
const Gc = x.createContext(null);
function Op() {
  return typeof document > "u"
    ? Gc
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = Gc), Gc);
}
function Dt(e) {
  const t = x.useContext(Op());
  return e == null || e.warn, t;
}
function ze(e) {
  const t = Dt({ warn: (e == null ? void 0 : e.router) === void 0 }),
    n = (e == null ? void 0 : e.router) || t,
    r = x.useRef(void 0);
  return fk(n.__store, (i) => {
    if (e != null && e.select) {
      if (e.structuralSharing ?? n.options.defaultStructuralSharing) {
        const o = xt(r.current, e.select(i));
        return (r.current = o), o;
      }
      return e.select(i);
    }
    return i;
  });
}
const qu = x.createContext(void 0),
  hk = x.createContext(void 0);
function gn(e) {
  const t = x.useContext(e.from ? hk : qu);
  return ze({
    select: (r) => {
      const i = r.matches.find((o) => (e.from ? e.from === o.routeId : o.id === t));
      if (
        (Vt(
          !((e.shouldThrow ?? !0) && !i),
          `Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`
        ),
        i !== void 0)
      )
        return e.select ? e.select(i) : i;
    },
    structuralSharing: e.structuralSharing,
  });
}
function Rb(e) {
  return gn({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function Db(e) {
  const { select: t, ...n } = e;
  return gn({ ...n, select: (r) => (t ? t(r.loaderDeps) : r.loaderDeps) });
}
function Mb(e) {
  return gn({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  });
}
function Ab(e) {
  return gn({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Et(e) {
  return !!(e != null && e.isNotFound);
}
function pk(e) {
  const t = ze({ select: (n) => `not-found-${n.location.pathname}-${n.status}` });
  return O.jsx(kp, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var i;
      if (Et(n)) (i = e.onCatch) == null || i.call(e, n, r);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      if (Et(n)) return (r = e.fallback) == null ? void 0 : r.call(e, n);
      throw n;
    },
    children: e.children,
  });
}
function mk() {
  return O.jsx("p", { children: "Not Found" });
}
function Ib(e) {
  const { navigate: t } = Dt();
  return x.useCallback((n) => t({ from: e == null ? void 0 : e.from, ...n }), [e == null ? void 0 : e.from, t]);
}
let Lb = class {
  constructor(t) {
    (this.init = (n) => {
      var r, i;
      this.originalIndex = n.originalIndex;
      const o = this.options,
        s = !(o != null && o.path) && !(o != null && o.id);
      (this.parentRoute = (i = (r = this.options).getParentRoute) == null ? void 0 : i.call(r)),
        s ? (this._path = it) : Vt(this.parentRoute);
      let a = s ? it : o.path;
      a && a !== "/" && (a = Pp(a));
      const l = (o == null ? void 0 : o.id) || a;
      let u = s ? it : un([this.parentRoute.id === it ? "" : this.parentRoute.id, l]);
      a === it && (a = "/"), u !== it && (u = un(["/", u]));
      const c = u === it ? "/" : un([this.parentRoute.fullPath, a]);
      (this._path = a),
        (this._id = u),
        (this._fullPath = c),
        (this._to = c),
        (this._ssr = (o == null ? void 0 : o.ssr) ?? n.defaultSsr ?? !0);
    }),
      (this.addChildren = (n) => this._addFileChildren(n)),
      (this._addFileChildren = (n) => (
        Array.isArray(n) && (this.children = n),
        typeof n == "object" && n !== null && (this.children = Object.values(n)),
        this
      )),
      (this._addFileTypes = () => this),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) =>
        gn({
          select: n == null ? void 0 : n.select,
          from: this.id,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
        })),
      (this.useRouteContext = (n) =>
        gn({ ...n, from: this.id, select: (r) => (n != null && n.select ? n.select(r.context) : r.context) })),
      (this.useSearch = (n) =>
        Ab({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (n) =>
        Mb({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (n) => Db({ ...n, from: this.id })),
      (this.useLoaderData = (n) => Rb({ ...n, from: this.id })),
      (this.useNavigate = () => Ib({ from: this.fullPath })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Vt(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for("react.memo"));
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
};
function vk(e) {
  return new Lb(e);
}
class yk extends Lb {
  constructor(t) {
    super(t);
  }
}
function gk(e) {
  return new yk(e);
}
function Hu(e) {
  return new wk(e, { silent: !0 }).createRoute;
}
class wk {
  constructor(t, n) {
    (this.path = t),
      (this.createRoute = (r) => {
        this.silent;
        const i = vk(r);
        return (i.isRoot = !1), i;
      }),
      (this.silent = n == null ? void 0 : n.silent);
  }
}
class Sk {
  constructor(t) {
    (this.useMatch = (n) =>
      gn({
        select: n == null ? void 0 : n.select,
        from: this.options.id,
        structuralSharing: n == null ? void 0 : n.structuralSharing,
      })),
      (this.useRouteContext = (n) =>
        gn({ from: this.options.id, select: (r) => (n != null && n.select ? n.select(r.context) : r.context) })),
      (this.useSearch = (n) =>
        Ab({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.options.id,
        })),
      (this.useParams = (n) =>
        Mb({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.options.id,
        })),
      (this.useLoaderDeps = (n) => Db({ ...n, from: this.options.id })),
      (this.useLoaderData = (n) => Rb({ ...n, from: this.options.id })),
      (this.useNavigate = () => {
        const n = Dt();
        return Ib({ from: n.routesById[this.options.id].fullPath });
      }),
      (this.options = t),
      (this.$$typeof = Symbol.for("react.memo"));
  }
}
function f5(e) {
  return (t) => new Sk({ id: e, ...t });
}
function gr(e) {
  return !!(e != null && e.isRedirect);
}
function Kc(e) {
  return !!(e != null && e.isRedirect) && e.href;
}
function ml(e) {
  return O.jsx(O.Fragment, { children: e.children });
}
function Fb(e, t, n) {
  return t.options.notFoundComponent
    ? O.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
      ? O.jsx(e.options.defaultNotFoundComponent, { data: n })
      : O.jsx(mk, {});
}
const Nb = {},
  bk = Nb.hasOwnProperty,
  jb = (e, t) => {
    for (const n in e) bk.call(e, n) && t(n, e[n]);
  },
  xk = (e, t) => (
    t &&
      jb(t, (n, r) => {
        e[n] = r;
      }),
    e
  ),
  _k = (e, t) => {
    const n = e.length;
    let r = -1;
    for (; ++r < n; ) t(e[r]);
  },
  Ua = (e) => "\\u" + ("0000" + e).slice(-4),
  Mo = (e, t) => {
    let n = e.toString(16);
    return t ? n : n.toUpperCase();
  },
  oa = Nb.toString,
  Ek = Array.isArray,
  Tk = (e) => typeof Buffer == "function" && Buffer.isBuffer(e),
  Pk = (e) => oa.call(e) == "[object Object]",
  Ck = (e) => typeof e == "string" || oa.call(e) == "[object String]",
  kk = (e) => typeof e == "number" || oa.call(e) == "[object Number]",
  Yc = (e) => typeof e == "bigint",
  Ok = (e) => typeof e == "function",
  Rk = (e) => oa.call(e) == "[object Map]",
  Dk = (e) => oa.call(e) == "[object Set]",
  Mk = { "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" },
  Ak = /[\\\b\f\n\r\t]/,
  Ik = /[0-9]/,
  Lk = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
  Fk = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
  Nk = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
  wr = (e, t) => {
    const n = () => {
        (u = l), ++t.indentLevel, (l = t.indent.repeat(t.indentLevel));
      },
      r = {
        escapeEverything: !1,
        minimal: !1,
        isScriptContext: !1,
        quotes: "single",
        wrap: !1,
        es6: !1,
        json: !1,
        compact: !0,
        lowercaseHex: !1,
        numbers: "decimal",
        indent: "	",
        indentLevel: 0,
        __inline1__: !1,
        __inline2__: !1,
      },
      i = t && t.json;
    i && ((r.quotes = "double"), (r.wrap = !0)),
      (t = xk(r, t)),
      t.quotes != "single" && t.quotes != "double" && t.quotes != "backtick" && (t.quotes = "single");
    const o = t.quotes == "double" ? '"' : t.quotes == "backtick" ? "`" : "'",
      s = t.compact,
      a = t.lowercaseHex;
    let l = t.indent.repeat(t.indentLevel),
      u = "";
    const c = t.__inline1__,
      f = t.__inline2__,
      d = s
        ? ""
        : `
`;
    let h,
      v = !0;
    const y = t.numbers == "binary",
      w = t.numbers == "octal",
      p = t.numbers == "decimal",
      m = t.numbers == "hexadecimal";
    if ((i && e && Ok(e.toJSON) && (e = e.toJSON()), !Ck(e))) {
      if (Rk(e))
        return e.size == 0
          ? "new Map()"
          : (s || ((t.__inline1__ = !0), (t.__inline2__ = !1)), "new Map(" + wr(Array.from(e), t) + ")");
      if (Dk(e)) return e.size == 0 ? "new Set()" : "new Set(" + wr(Array.from(e), t) + ")";
      if (Tk(e)) return e.length == 0 ? "Buffer.from([])" : "Buffer.from(" + wr(Array.from(e), t) + ")";
      if (Ek(e))
        return (
          (h = []),
          (t.wrap = !0),
          c && ((t.__inline1__ = !1), (t.__inline2__ = !0)),
          f || n(),
          _k(e, (b) => {
            (v = !1), f && (t.__inline2__ = !1), h.push((s || f ? "" : l) + wr(b, t));
          }),
          v ? "[]" : f ? "[" + h.join(", ") + "]" : "[" + d + h.join("," + d) + d + (s ? "" : u) + "]"
        );
      if (kk(e) || Yc(e)) {
        if (i) return JSON.stringify(Number(e));
        let b;
        if (p) b = String(e);
        else if (m) {
          let S = e.toString(16);
          a || (S = S.toUpperCase()), (b = "0x" + S);
        } else y ? (b = "0b" + e.toString(2)) : w && (b = "0o" + e.toString(8));
        return Yc(e) ? b + "n" : b;
      } else
        return Yc(e)
          ? i
            ? JSON.stringify(Number(e))
            : e + "n"
          : Pk(e)
            ? ((h = []),
              (t.wrap = !0),
              n(),
              jb(e, (b, S) => {
                (v = !1), h.push((s ? "" : l) + wr(b, t) + ":" + (s ? "" : " ") + wr(S, t));
              }),
              v ? "{}" : "{" + d + h.join("," + d) + d + (s ? "" : u) + "}")
            : i
              ? JSON.stringify(e) || "null"
              : String(e);
    }
    const g = t.escapeEverything ? Fk : Nk;
    return (
      (h = e.replace(g, (b, S, _, T, E, C) => {
        if (S) {
          if (t.minimal) return S;
          const D = S.charCodeAt(0),
            R = S.charCodeAt(1);
          if (t.es6) {
            const F = (D - 55296) * 1024 + R - 56320 + 65536;
            return "\\u{" + Mo(F, a) + "}";
          }
          return Ua(Mo(D, a)) + Ua(Mo(R, a));
        }
        if (_) return Ua(Mo(_.charCodeAt(0), a));
        if (b == "\0" && !i && !Ik.test(C.charAt(E + 1))) return "\\0";
        if (T) return T == o || t.escapeEverything ? "\\" + T : T;
        if (Ak.test(b)) return Mk[b];
        if (t.minimal && !Lk.test(b)) return b;
        const k = Mo(b.charCodeAt(0), a);
        return i || k.length > 2 ? Ua(k) : "\\x" + ("00" + k).slice(-2);
      })),
      o == "`" && (h = h.replace(/\$\{/g, "\\${")),
      t.isScriptContext &&
        (h = h.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, i ? "\\u003C!--" : "\\x3C!--")),
      t.wrap && (h = o + h + o),
      h
    );
  };
wr.version = "3.0.2";
function jk({ children: e, log: t }) {
  return typeof document < "u"
    ? null
    : O.jsx("script", {
        className: "tsr-once",
        dangerouslySetInnerHTML: {
          __html: [e, "", 'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()'].filter(Boolean).join(`
`),
        },
      });
}
const nu = "tsr-scroll-restoration-v1_3";
let Vb = !1;
try {
  Vb = typeof window < "u" && typeof window.sessionStorage == "object";
} catch {}
const Vk = (e, t) => {
    let n;
    return (...r) => {
      n ||
        (n = setTimeout(() => {
          e(...r), (n = null);
        }, t));
    };
  },
  gi = Vb
    ? {
        state: JSON.parse(window.sessionStorage.getItem(nu) || "null") || {},
        set: (t) => (
          (gi.state = Or(t, gi.state) || gi.state), window.sessionStorage.setItem(nu, JSON.stringify(gi.state))
        ),
      }
    : void 0,
  Dd = (e) => e.state.key || e.href;
function $k(e) {
  const t = [];
  let n;
  for (; (n = e.parentNode); ) t.unshift(`${e.tagName}:nth-child(${[].indexOf.call(n.children, e) + 1})`), (e = n);
  return `${t.join(" > ")}`.toLowerCase();
}
let ru = !1;
function $b(e, t, n, r, i) {
  var o;
  let s;
  try {
    s = JSON.parse(sessionStorage.getItem(e) || "{}");
  } catch (u) {
    console.error(u);
    return;
  }
  const a = t || ((o = window.history.state) == null ? void 0 : o.key),
    l = s[a];
  (ru = !0),
    (() => {
      if (r && l) {
        for (const c in l) {
          const f = l[c];
          if (c === "window") window.scrollTo({ top: f.scrollY, left: f.scrollX, behavior: n });
          else if (c) {
            const d = document.querySelector(c);
            d && ((d.scrollLeft = f.scrollX), (d.scrollTop = f.scrollY));
          }
        }
        return;
      }
      const u = window.location.hash.split("#")[1];
      if (u) {
        const c = (window.history.state || {}).__hashScrollIntoViewOptions ?? !0;
        if (c) {
          const f = document.getElementById(u);
          f && f.scrollIntoView(c);
        }
        return;
      }
      ["window", ...((i == null ? void 0 : i.filter((c) => c !== "window")) ?? [])].forEach((c) => {
        const f = c === "window" ? window : document.querySelector(c);
        f && f.scrollTo({ top: 0, left: 0, behavior: n });
      });
    })(),
    (ru = !1);
}
function zk(e, t) {
  if (
    ((e.options.scrollRestoration ?? !1) && (e.isScrollRestoring = !0),
    typeof document > "u" || e.isScrollRestorationSetup)
  )
    return;
  (e.isScrollRestorationSetup = !0), (ru = !1);
  const r = e.options.getScrollRestorationKey || Dd;
  window.history.scrollRestoration = "manual";
  const i = (o) => {
    if (ru || !e.isScrollRestoring) return;
    let s = "";
    if (o.target === document || o.target === window) s = "window";
    else {
      const l = o.target.getAttribute("data-scroll-restoration-id");
      l ? (s = `[data-scroll-restoration-id="${l}"]`) : (s = $k(o.target));
    }
    const a = r(e.state.location);
    gi.set((l) => {
      const u = (l[a] = l[a] || {}),
        c = (u[s] = u[s] || {});
      if (s === "window") (c.scrollX = window.scrollX || 0), (c.scrollY = window.scrollY || 0);
      else if (s) {
        const f = document.querySelector(s);
        f && ((c.scrollX = f.scrollLeft || 0), (c.scrollY = f.scrollTop || 0));
      }
      return l;
    });
  };
  typeof document < "u" && document.addEventListener("scroll", Vk(i, 100), !0),
    e.subscribe("onRendered", (o) => {
      const s = r(o.toLocation);
      if (!e.resetNextScroll) {
        e.resetNextScroll = !0;
        return;
      }
      $b(nu, s, e.options.scrollRestorationBehavior, e.isScrollRestoring, e.options.scrollToTopSelectors),
        e.isScrollRestoring && gi.set((a) => ((a[s] = a[s] || {}), a));
    });
}
function Bk() {
  const e = Dt(),
    n = (e.options.getScrollRestorationKey || Dd)(e.latestLocation),
    r = n !== Dd(e.latestLocation) ? n : null;
  return !e.isScrollRestoring || !e.isServer
    ? null
    : O.jsx(jk, {
        children: `(${$b.toString()})(${JSON.stringify(nu)},${JSON.stringify(r)}, undefined, true)`,
        log: !1,
      });
}
const zb = x.memo(function ({ matchId: t }) {
  var n, r;
  const i = Dt(),
    o = ze({
      select: (p) => {
        var m;
        return (m = p.matches.find((g) => g.id === t)) == null ? void 0 : m.routeId;
      },
    });
  Vt(o);
  const s = i.routesById[o],
    a = s.options.pendingComponent ?? i.options.defaultPendingComponent,
    l = a ? O.jsx(a, {}) : null,
    u = s.options.errorComponent ?? i.options.defaultErrorComponent,
    c = s.options.onCatch ?? i.options.defaultOnCatch,
    f = s.isRoot
      ? (s.options.notFoundComponent ?? ((n = i.options.notFoundRoute) == null ? void 0 : n.options.component))
      : s.options.notFoundComponent,
    d =
      (!s.isRoot || s.options.wrapInSuspense) &&
      (s.options.wrapInSuspense ?? a ?? ((r = s.options.errorComponent) == null ? void 0 : r.preload))
        ? x.Suspense
        : ml,
    h = u ? kp : ml,
    v = f ? pk : ml,
    y = ze({ select: (p) => p.loadedAt }),
    w = ze({
      select: (p) => {
        var m;
        const g = p.matches.findIndex((b) => b.id === t);
        return (m = p.matches[g - 1]) == null ? void 0 : m.routeId;
      },
    });
  return O.jsxs(O.Fragment, {
    children: [
      O.jsx(qu.Provider, {
        value: t,
        children: O.jsx(d, {
          fallback: l,
          children: O.jsx(h, {
            getResetKey: () => y,
            errorComponent: u || Wu,
            onCatch: (p, m) => {
              if (Et(p)) throw p;
              c == null || c(p, m);
            },
            children: O.jsx(v, {
              fallback: (p) => {
                if (!f || (p.routeId && p.routeId !== o) || (!p.routeId && !s.isRoot)) throw p;
                return x.createElement(f, p);
              },
              children: O.jsx(Wk, { matchId: t }),
            }),
          }),
        }),
      }),
      w === it && i.options.scrollRestoration ? O.jsxs(O.Fragment, { children: [O.jsx(Uk, {}), O.jsx(Bk, {})] }) : null,
    ],
  });
});
function Uk() {
  var e;
  const t = Dt(),
    n = x.useRef(void 0);
  return O.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      ref: (r) => {
        var i;
        r &&
          (n.current === void 0 || n.current.href !== ((i = t.state.resolvedLocation) == null ? void 0 : i.href)) &&
          (t.emit({ type: "onRendered", ...Ai(t.state) }), (n.current = t.state.resolvedLocation));
      },
    },
    (e = t.state.resolvedLocation) == null ? void 0 : e.state.key
  );
}
const Wk = x.memo(function ({ matchId: t }) {
    var n, r, i;
    const o = Dt(),
      {
        match: s,
        key: a,
        routeId: l,
      } = ze({
        select: (d) => {
          const h = d.matches.findIndex((g) => g.id === t),
            v = d.matches[h],
            y = v.routeId,
            w = o.routesById[y].options.remountDeps ?? o.options.defaultRemountDeps,
            p =
              w == null
                ? void 0
                : w({ routeId: y, loaderDeps: v.loaderDeps, params: v._strictParams, search: v._strictSearch });
          return { key: p ? JSON.stringify(p) : void 0, routeId: y, match: kd(v, ["id", "status", "error"]) };
        },
        structuralSharing: !0,
      }),
      u = o.routesById[l],
      c = x.useMemo(() => {
        const d = u.options.component ?? o.options.defaultComponent;
        return d ? O.jsx(d, {}, a) : O.jsx(Bb, {});
      }, [a, u.options.component, o.options.defaultComponent]),
      f = (u.options.errorComponent ?? o.options.defaultErrorComponent) || Wu;
    if (s.status === "notFound") return Vt(Et(s.error)), Fb(o, u, s.error);
    if (s.status === "redirected") throw (Vt(gr(s.error)), (n = o.getMatch(s.id)) == null ? void 0 : n.loadPromise);
    if (s.status === "error") {
      if (o.isServer) return O.jsx(f, { error: s.error, reset: void 0, info: { componentStack: "" } });
      throw s.error;
    }
    if (s.status === "pending") {
      const d = u.options.pendingMinMs ?? o.options.defaultPendingMinMs;
      if (d && !((r = o.getMatch(s.id)) != null && r.minPendingPromise) && !o.isServer) {
        const h = ti();
        Promise.resolve().then(() => {
          o.updateMatch(s.id, (v) => ({ ...v, minPendingPromise: h }));
        }),
          setTimeout(() => {
            h.resolve(), o.updateMatch(s.id, (v) => ({ ...v, minPendingPromise: void 0 }));
          }, d);
      }
      throw (i = o.getMatch(s.id)) == null ? void 0 : i.loadPromise;
    }
    return c;
  }),
  Bb = x.memo(function () {
    const t = Dt(),
      n = x.useContext(qu),
      r = ze({
        select: (u) => {
          var c;
          return (c = u.matches.find((f) => f.id === n)) == null ? void 0 : c.routeId;
        },
      }),
      i = t.routesById[r],
      o = ze({
        select: (u) => {
          const f = u.matches.find((d) => d.id === n);
          return Vt(f), f.globalNotFound;
        },
      }),
      s = ze({
        select: (u) => {
          var c;
          const f = u.matches,
            d = f.findIndex((h) => h.id === n);
          return (c = f[d + 1]) == null ? void 0 : c.id;
        },
      });
    if (o) return Fb(t, i, void 0);
    if (!s) return null;
    const a = O.jsx(zb, { matchId: s }),
      l = t.options.defaultPendingComponent ? O.jsx(t.options.defaultPendingComponent, {}) : null;
    return n === it ? O.jsx(x.Suspense, { fallback: l, children: a }) : a;
  }),
  qo = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Xc(e) {
  const t = x.useRef({ value: e, prev: null }),
    n = t.current.value;
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function Qk(e, t, n = {}, r = {}) {
  const i = x.useRef(typeof IntersectionObserver == "function"),
    o = x.useRef(null);
  return (
    x.useEffect(() => {
      if (!(!e.current || !i.current || r.disabled))
        return (
          (o.current = new IntersectionObserver(([s]) => {
            t(s);
          }, n)),
          o.current.observe(e.current),
          () => {
            var s;
            (s = o.current) == null || s.disconnect();
          }
        );
    }, [t, n, r.disabled, e]),
    o.current
  );
}
function qk(e) {
  const t = x.useRef(null);
  return x.useImperativeHandle(e, () => t.current, []), t;
}
function Hk() {
  const e = Dt(),
    t = x.useRef({ router: e, mounted: !1 }),
    n = ze({ select: ({ isLoading: f }) => f }),
    [r, i] = x.useState(!1),
    o = ze({ select: (f) => f.matches.some((d) => d.status === "pending"), structuralSharing: !0 }),
    s = Xc(n),
    a = n || r || o,
    l = Xc(a),
    u = n || o,
    c = Xc(u);
  return (
    e.isServer ||
      (e.startTransition = (f) => {
        i(!0),
          x.startTransition(() => {
            f(), i(!1);
          });
      }),
    x.useEffect(() => {
      const f = e.history.subscribe(e.load),
        d = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Rr(e.latestLocation.href) !== Rr(d.href) && e.commitLocation({ ...d, replace: !0 }),
        () => {
          f();
        }
      );
    }, [e, e.history]),
    qo(() => {
      if ((typeof window < "u" && e.clientSsr) || (t.current.router === e && t.current.mounted)) return;
      (t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (d) {
            console.error(d);
          }
        })();
    }, [e]),
    qo(() => {
      s && !n && e.emit({ type: "onLoad", ...Ai(e.state) });
    }, [s, e, n]),
    qo(() => {
      c && !u && e.emit({ type: "onBeforeRouteMount", ...Ai(e.state) });
    }, [u, c, e]),
    qo(() => {
      l &&
        !a &&
        (e.emit({ type: "onResolved", ...Ai(e.state) }),
        e.__store.setState((f) => ({ ...f, status: "idle", resolvedLocation: f.location })));
    }, [a, l, e]),
    null
  );
}
function Gk() {
  const e = Dt(),
    t = e.options.defaultPendingComponent ? O.jsx(e.options.defaultPendingComponent, {}) : null,
    n = e.isServer || (typeof document < "u" && e.clientSsr) ? ml : x.Suspense,
    r = O.jsxs(n, { fallback: t, children: [O.jsx(Hk, {}), O.jsx(Kk, {})] });
  return e.options.InnerWrap ? O.jsx(e.options.InnerWrap, { children: r }) : r;
}
function Kk() {
  const e = ze({
      select: (n) => {
        var r;
        return (r = n.matches[0]) == null ? void 0 : r.id;
      },
    }),
    t = ze({ select: (n) => n.loadedAt });
  return O.jsx(qu.Provider, {
    value: e,
    children: O.jsx(kp, {
      getResetKey: () => t,
      errorComponent: Wu,
      onCatch: (n) => {
        n.message || n.toString();
      },
      children: e ? O.jsx(zb, { matchId: e }) : null,
    }),
  });
}
function Ub(e) {
  return ze({
    select: (t) => {
      const n = t.matches;
      return e != null && e.select ? e.select(n) : n;
    },
    structuralSharing: e == null ? void 0 : e.structuralSharing,
  });
}
function Yk(e, t) {
  const n = Dt(),
    [r, i] = x.useState(!1),
    o = x.useRef(!1),
    s = qk(t),
    {
      activeProps: a = () => ({ className: "active" }),
      inactiveProps: l = () => ({}),
      activeOptions: u,
      to: c,
      preload: f,
      preloadDelay: d,
      hashScrollIntoView: h,
      replace: v,
      startTransition: y,
      resetScroll: w,
      viewTransition: p,
      children: m,
      target: g,
      disabled: b,
      style: S,
      className: _,
      onClick: T,
      onFocus: E,
      onMouseEnter: C,
      onMouseLeave: k,
      onTouchStart: D,
      ignoreBlocker: R,
      ...F
    } = e,
    { params: L, search: B, hash: q, state: z, mask: M, reloadDocument: I, ...j } = F,
    Q = x.useMemo(() => {
      try {
        return new URL(`${c}`), "external";
      } catch {}
      return "internal";
    }, [c]),
    U = ze({ select: (ie) => ie.location.search, structuralSharing: !0 }),
    Y = Ub({
      select: (ie) => {
        var fe;
        return e.from ?? ((fe = ie[ie.length - 1]) == null ? void 0 : fe.fullPath);
      },
    }),
    J = x.useMemo(() => ({ ...e, from: Y }), [e, Y]),
    oe = x.useMemo(() => n.buildLocation(J), [n, J, U]),
    Z = x.useMemo(
      () => (J.reloadDocument ? !1 : (f ?? n.options.defaultPreload)),
      [n.options.defaultPreload, f, J.reloadDocument]
    ),
    Xe = d ?? n.options.defaultPreloadDelay ?? 0,
    Cn = ze({
      select: (ie) => {
        if (u != null && u.exact) {
          if (!D1(ie.location.pathname, oe.pathname, n.basepath)) return !1;
        } else {
          const fe = Zl(ie.location.pathname, n.basepath).split("/");
          if (
            !Zl(oe.pathname, n.basepath)
              .split("/")
              .every((JT, ZT) => JT === fe[ZT])
          )
            return !1;
        }
        return ((u == null ? void 0 : u.includeSearch) ?? !0) &&
          !Ii(ie.location.search, oe.search, {
            partial: !(u != null && u.exact),
            ignoreUndefined: !(u != null && u.explicitUndefined),
          })
          ? !1
          : u != null && u.includeHash
            ? ie.location.hash === oe.hash
            : !0;
      },
    }),
    tn = x.useCallback(() => {
      n.preloadRoute(J).catch((ie) => {
        console.warn(ie), console.warn(C1);
      });
    }, [J, n]),
    ga = x.useCallback(
      (ie) => {
        ie != null && ie.isIntersecting && tn();
      },
      [tn]
    );
  if (
    (Qk(s, ga, { rootMargin: "100px" }, { disabled: !!b || Z !== "viewport" }),
    qo(() => {
      o.current || (!b && Z === "render" && (tn(), (o.current = !0)));
    }, [b, tn, Z]),
    Q === "external")
  )
    return {
      ...j,
      ref: s,
      type: Q,
      href: c,
      ...(m && { children: m }),
      ...(g && { target: g }),
      ...(b && { disabled: b }),
      ...(S && { style: S }),
      ...(_ && { className: _ }),
      ...(T && { onClick: T }),
      ...(E && { onFocus: E }),
      ...(C && { onMouseEnter: C }),
      ...(k && { onMouseLeave: k }),
      ...(D && { onTouchStart: D }),
    };
  const wa = (ie) => {
      if (!b && !Xk(ie) && !ie.defaultPrevented && (!g || g === "_self") && ie.button === 0) {
        ie.preventDefault(),
          ia.flushSync(() => {
            i(!0);
          });
        const fe = n.subscribe("onResolved", () => {
          fe(), i(!1);
        });
        return n.navigate({
          ...J,
          replace: v,
          resetScroll: w,
          hashScrollIntoView: h,
          startTransition: y,
          viewTransition: p,
          ignoreBlocker: R,
        });
      }
    },
    bo = (ie) => {
      b || (Z && tn());
    },
    Jr = bo,
    Je = (ie) => {
      if (b) return;
      const fe = ie.target || {};
      if (Z) {
        if (fe.preloadTimeout) return;
        fe.preloadTimeout = setTimeout(() => {
          (fe.preloadTimeout = null), tn();
        }, Xe);
      }
    },
    pr = (ie) => {
      if (b) return;
      const fe = ie.target || {};
      fe.preloadTimeout && (clearTimeout(fe.preloadTimeout), (fe.preloadTimeout = null));
    },
    Fe = (ie) => (fe) => {
      var gc;
      (gc = fe.persist) == null || gc.call(fe),
        ie.filter(Boolean).forEach((qm) => {
          fe.defaultPrevented || qm(fe);
        });
    },
    xo = Cn ? (Or(a, {}) ?? {}) : {},
    _o = Cn ? {} : Or(l, {}),
    Sa = [_, xo.className, _o.className].filter(Boolean).join(" "),
    ba = { ...S, ...xo.style, ..._o.style };
  return {
    ...j,
    ...xo,
    ..._o,
    href: b ? void 0 : oe.maskedLocation ? n.history.createHref(oe.maskedLocation.href) : n.history.createHref(oe.href),
    ref: s,
    onClick: Fe([T, wa]),
    onFocus: Fe([E, bo]),
    onMouseEnter: Fe([C, Je]),
    onMouseLeave: Fe([k, pr]),
    onTouchStart: Fe([D, Jr]),
    disabled: !!b,
    target: g,
    ...(Object.keys(ba).length && { style: ba }),
    ...(Sa && { className: Sa }),
    ...(b && { role: "link", "aria-disabled": !0 }),
    ...(Cn && { "data-status": "active", "aria-current": "page" }),
    ...(r && { "data-transitioning": "transitioning" }),
  };
}
const Wa = x.forwardRef((e, t) => {
  const { _asChild: n, ...r } = e,
    { type: i, ref: o, ...s } = Yk(r, t),
    a = typeof r.children == "function" ? r.children({ isActive: s["data-status"] === "active" }) : r.children;
  return typeof n > "u" && delete s.disabled, x.createElement(n || "a", { ...s, ref: o }, a);
});
function Xk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Wb = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function Jk(e) {
  var t;
  for (const n of Wb) if ((t = e.options[n]) != null && t.preload) return !0;
  return !1;
}
function Jc(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const n = e["~standard"].validate(t);
    if (n instanceof Promise) throw new iu("Async validation not supported");
    if (n.issues) throw new iu(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function Zk(e) {
  return new eO(e);
}
class eO {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.isScrollRestoring = !1),
      (this.isScrollRestorationSetup = !1),
      (this.startTransition = (n) => n()),
      (this.update = (n) => {
        var r;
        n.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info."
          );
        const i = this.options;
        (this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters
            ? new Map(this.options.pathParamsAllowedCharacters.map((o) => [encodeURIComponent(o), o]))
            : void 0),
          (!this.basepath || (n.basepath && n.basepath !== i.basepath)) &&
            (n.basepath === void 0 || n.basepath === "" || n.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${R1(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ?? (this.isServer ? B1({ initialEntries: [this.basepath || "/"] }) : z1())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            ((this.__store = new Rd(nO(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter((o) => !["redirected"].includes(o.status)),
                };
              },
            })),
            zk(this)),
          typeof window < "u" &&
            "CSS" in window &&
            typeof ((r = window.CSS) == null ? void 0 : r.supports) == "function" &&
            (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n && (n.init({ originalIndex: 99999999999, defaultSsr: this.options.defaultSsr }), (this.routesById[n.id] = n));
        const r = (s) => {
          s.forEach((a, l) => {
            a.init({ originalIndex: l, defaultSsr: this.options.defaultSsr });
            const u = this.routesById[a.id];
            if (
              (Vt(!u, `Duplicate routes found with id: ${String(a.id)}`),
              (this.routesById[a.id] = a),
              !a.isRoot && a.path)
            ) {
              const f = Rr(a.fullPath);
              (!this.routesByPath[f] || a.fullPath.endsWith("/")) && (this.routesByPath[f] = a);
            }
            const c = a.children;
            c != null && c.length && r(c);
          });
        };
        r([this.routeTree]);
        const i = [];
        Object.values(this.routesById).forEach((s, a) => {
          var l;
          if (s.isRoot || !s.path) return;
          const u = Pp(s.fullPath),
            c = Ki(u);
          for (; c.length > 1 && ((l = c[0]) == null ? void 0 : l.value) === "/"; ) c.shift();
          const f = c.map((d) =>
            d.value === "/" ? 0.75 : d.type === "param" ? 0.5 : d.type === "wildcard" ? 0.25 : 1
          );
          i.push({ child: s, trimmed: u, parsed: c, index: a, scores: f });
        }),
          (this.flatRoutes = i
            .sort((s, a) => {
              const l = Math.min(s.scores.length, a.scores.length);
              for (let u = 0; u < l; u++) if (s.scores[u] !== a.scores[u]) return a.scores[u] - s.scores[u];
              if (s.scores.length !== a.scores.length) return a.scores.length - s.scores.length;
              for (let u = 0; u < l; u++)
                if (s.parsed[u].value !== a.parsed[u].value) return s.parsed[u].value > a.parsed[u].value ? 1 : -1;
              return s.index - a.index;
            })
            .map((s, a) => ((s.child.rank = a), s.child)));
      }),
      (this.subscribe = (n, r) => {
        const i = { eventType: n, fn: r };
        return (
          this.subscribers.add(i),
          () => {
            this.subscribers.delete(i);
          }
        );
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.parseLocation = (n, r) => {
        const i = ({ pathname: l, search: u, hash: c, state: f }) => {
            const d = this.options.parseSearch(u),
              h = this.options.stringifySearch(d);
            return {
              pathname: l,
              searchStr: h,
              search: xt(n == null ? void 0 : n.search, d),
              hash: c.split("#").reverse()[0] ?? "",
              href: `${l}${h}${c}`,
              state: xt(n == null ? void 0 : n.state, f),
            };
          },
          o = i(r ?? this.history.location),
          { __tempLocation: s, __tempKey: a } = o.state;
        if (s && (!a || a === this.tempLocationKey)) {
          const l = i(s);
          return (l.state.key = o.state.key), delete l.state.__tempLocation, { ...l, maskedLocation: o };
        }
        return o;
      }),
      (this.resolvePathWithBase = (n, r) =>
        M1({
          basepath: this.basepath,
          base: n,
          to: Uu(r),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.matchRoutes = (n, r, i) =>
        typeof n == "string"
          ? this.matchRoutesInternal({ pathname: n, search: r }, i)
          : this.matchRoutesInternal(n, r)),
      (this.getMatchedRoutes = (n, r) => {
        let i = {};
        const o = Rr(n.pathname),
          s = (c) =>
            za(this.basepath, o, {
              to: c.fullPath,
              caseSensitive: c.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let a = (r == null ? void 0 : r.to) !== void 0 ? this.routesByPath[r.to] : void 0;
        a
          ? (i = s(a))
          : (a = this.flatRoutes.find((c) => {
              const f = s(c);
              return f ? ((i = f), !0) : !1;
            }));
        let l = a || this.routesById[it];
        const u = [l];
        for (; l.parentRoute; ) (l = l.parentRoute), u.unshift(l);
        return { matchedRoutes: u, routeParams: i, foundRoute: a };
      }),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n);
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = (n) => {
        const r = (o = {}, s) => {
            var a, l, u, c, f, d, h;
            const v = o._fromLocation ? this.matchRoutes(o._fromLocation, { _buildLocation: !0 }) : this.state.matches,
              y =
                o.from != null
                  ? v.find((R) => za(this.basepath, Rr(R.pathname), { to: o.from, caseSensitive: !1, fuzzy: !1 }))
                  : void 0,
              w = (y == null ? void 0 : y.pathname) || this.latestLocation.pathname;
            Vt(o.from == null || y != null, "Could not find match for from: " + o.from);
            const p =
                (a = this.state.pendingMatches) != null && a.length
                  ? (l = yi(this.state.pendingMatches)) == null
                    ? void 0
                    : l.search
                  : ((u = yi(v)) == null ? void 0 : u.search) || this.latestLocation.search,
              m = s == null ? void 0 : s.matchedRoutes.filter((R) => v.find((F) => F.routeId === R.id));
            let g;
            if (o.to) {
              const R =
                (y == null ? void 0 : y.fullPath) ||
                ((c = yi(v)) == null ? void 0 : c.fullPath) ||
                this.latestLocation.pathname;
              g = this.resolvePathWithBase(R, `${o.to}`);
            } else {
              const R =
                this.routesById[
                  (f =
                    m == null
                      ? void 0
                      : m.find((F) => {
                          const L = $a({
                            path: F.fullPath,
                            params: (s == null ? void 0 : s.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          }).interpolatedPath;
                          return un([this.basepath, L]) === w;
                        })) == null
                    ? void 0
                    : f.id
                ];
              g = this.resolvePathWithBase(w, (R == null ? void 0 : R.to) ?? w);
            }
            const b = { ...((d = yi(v)) == null ? void 0 : d.params) };
            let S = (o.params ?? !0) === !0 ? b : { ...b, ...Or(o.params, b) };
            Object.keys(S).length > 0 &&
              (s == null ||
                s.matchedRoutes
                  .map((R) => {
                    var F;
                    return ((F = R.options.params) == null ? void 0 : F.stringify) ?? R.options.stringifyParams;
                  })
                  .filter(Boolean)
                  .forEach((R) => {
                    S = { ...S, ...R(S) };
                  })),
              (g = $a({
                path: g,
                params: S ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }).interpolatedPath);
            let _ = p;
            if (n._includeValidateSearch && (h = this.options.search) != null && h.strict) {
              let R = {};
              s == null ||
                s.matchedRoutes.forEach((F) => {
                  try {
                    F.options.validateSearch && (R = { ...R, ...(Jc(F.options.validateSearch, { ...R, ..._ }) ?? {}) });
                  } catch {}
                }),
                (_ = R);
            }
            (_ = ((R) => {
              const F =
                  (s == null
                    ? void 0
                    : s.matchedRoutes.reduce((q, z) => {
                        var M;
                        const I = [];
                        if ("search" in z.options)
                          (M = z.options.search) != null && M.middlewares && I.push(...z.options.search.middlewares);
                        else if (z.options.preSearchFilters || z.options.postSearchFilters) {
                          const j = ({ search: Q, next: U }) => {
                            let Y = Q;
                            "preSearchFilters" in z.options &&
                              z.options.preSearchFilters &&
                              (Y = z.options.preSearchFilters.reduce((oe, Z) => Z(oe), Q));
                            const J = U(Y);
                            return "postSearchFilters" in z.options && z.options.postSearchFilters
                              ? z.options.postSearchFilters.reduce((oe, Z) => Z(oe), J)
                              : J;
                          };
                          I.push(j);
                        }
                        if (n._includeValidateSearch && z.options.validateSearch) {
                          const j = ({ search: Q, next: U }) => {
                            const Y = U(Q);
                            try {
                              return { ...Y, ...(Jc(z.options.validateSearch, Y) ?? {}) };
                            } catch {
                              return Y;
                            }
                          };
                          I.push(j);
                        }
                        return q.concat(I);
                      }, [])) ?? [],
                L = ({ search: q }) => (o.search ? (o.search === !0 ? q : Or(o.search, q)) : {});
              F.push(L);
              const B = (q, z) => {
                if (q >= F.length) return z;
                const M = F[q];
                return M({ search: z, next: (j) => B(q + 1, j) });
              };
              return B(0, R);
            })(_)),
              (_ = xt(p, _));
            const E = this.options.stringifySearch(_),
              C = o.hash === !0 ? this.latestLocation.hash : o.hash ? Or(o.hash, this.latestLocation.hash) : void 0,
              k = C ? `#${C}` : "";
            let D = o.state === !0 ? this.latestLocation.state : o.state ? Or(o.state, this.latestLocation.state) : {};
            return (
              (D = xt(this.latestLocation.state, D)),
              {
                pathname: g,
                search: _,
                searchStr: E,
                state: D,
                hash: C ?? "",
                href: `${g}${E}${k}`,
                unmaskOnReload: o.unmaskOnReload,
              }
            );
          },
          i = (o = {}, s) => {
            var a;
            const l = r(o);
            let u = s ? r(s) : void 0;
            if (!u) {
              let d = {};
              const h =
                (a = this.options.routeMasks) == null
                  ? void 0
                  : a.find((v) => {
                      const y = za(this.basepath, l.pathname, { to: v.from, caseSensitive: !1, fuzzy: !1 });
                      return y ? ((d = y), !0) : !1;
                    });
              if (h) {
                const { from: v, ...y } = h;
                (s = { ...kd(n, ["from"]), ...y, params: d }), (u = r(s));
              }
            }
            const c = this.getMatchedRoutes(l, o),
              f = r(o, c);
            if (u) {
              const d = this.getMatchedRoutes(u, s),
                h = r(s, d);
              f.maskedLocation = h;
            }
            return f;
          };
        return n.mask ? i(n, { ...kd(n, ["from"]), ...n.mask }) : i(n);
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...i }) => {
        const o = () => {
            const l = ["key", "__TSR_index", "__hashScrollIntoViewOptions"];
            l.forEach((c) => {
              i.state[c] = this.latestLocation.state[c];
            });
            const u = Ii(i.state, this.latestLocation.state);
            return (
              l.forEach((c) => {
                delete i.state[c];
              }),
              u
            );
          },
          s = this.latestLocation.href === i.href,
          a = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = ti(() => {
            a == null || a.resolve();
          })),
          s && o())
        )
          this.load();
        else {
          let { maskedLocation: l, hashScrollIntoView: u, ...c } = i;
          l &&
            ((c = {
              ...l,
              state: {
                ...l.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...c,
                  search: c.searchStr,
                  state: { ...c.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (c.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (c.state.__tempKey = this.tempLocationKey)),
            (c.state.__hashScrollIntoViewOptions = u ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = n),
            this.history[i.replace ? "replace" : "push"](c.href, c.state, { ignoreBlocker: r });
        }
        return (
          (this.resetNextScroll = i.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        hashScrollIntoView: i,
        viewTransition: o,
        ignoreBlocker: s,
        href: a,
        ...l
      } = {}) => {
        if (a) {
          const c = this.history.location.state.__TSR_index,
            f = zs(a, { __TSR_index: n ? c : c + 1 });
          (l.to = f.pathname), (l.search = this.options.parseSearch(f.search)), (l.hash = f.hash.slice(1));
        }
        const u = this.buildLocation({ ...l, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...u,
          viewTransition: o,
          replace: n,
          resetScroll: r,
          hashScrollIntoView: i,
          ignoreBlocker: s,
        });
      }),
      (this.navigate = ({ to: n, reloadDocument: r, href: i, ...o }) => {
        if (r) {
          if (!i) {
            const s = this.buildLocation({ to: n, ...o });
            i = this.history.createHref(s.href);
          }
          o.replace ? window.location.replace(i) : (window.location.href = i);
          return;
        }
        return this.buildAndCommitLocation({ ...o, href: i, to: n });
      }),
      (this.load = async (n) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let r, i, o;
        for (
          o = new Promise((s) => {
            this.startTransition(async () => {
              var a;
              try {
                const l = this.latestLocation,
                  u = this.state.resolvedLocation;
                this.cancelMatches();
                let c;
                Hc(() => {
                  (c = this.matchRoutes(l)),
                    this.__store.setState((f) => ({
                      ...f,
                      status: "pending",
                      isLoading: !0,
                      location: l,
                      pendingMatches: c,
                      cachedMatches: f.cachedMatches.filter((d) => !c.find((h) => h.id === d.id)),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({ type: "onBeforeNavigate", ...Ai({ resolvedLocation: u, location: l }) }),
                  this.emit({ type: "onBeforeLoad", ...Ai({ resolvedLocation: u, location: l }) }),
                  await this.loadMatches({
                    sync: n == null ? void 0 : n.sync,
                    matches: c,
                    location: l,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let f, d, h;
                        Hc(() => {
                          this.__store.setState((v) => {
                            const y = v.matches,
                              w = v.pendingMatches || v.matches;
                            return (
                              (f = y.filter((p) => !w.find((m) => m.id === p.id))),
                              (d = w.filter((p) => !y.find((m) => m.id === p.id))),
                              (h = y.filter((p) => w.find((m) => m.id === p.id))),
                              {
                                ...v,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: w,
                                pendingMatches: void 0,
                                cachedMatches: [...v.cachedMatches, ...f.filter((p) => p.status !== "error")],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [f, "onLeave"],
                            [d, "onEnter"],
                            [h, "onStay"],
                          ].forEach(([v, y]) => {
                            v.forEach((w) => {
                              var p, m;
                              (m = (p = this.looseRoutesById[w.routeId].options)[y]) == null || m.call(p, w);
                            });
                          });
                      });
                    },
                  });
              } catch (l) {
                Kc(l)
                  ? ((r = l), this.isServer || this.navigate({ ...r, replace: !0, ignoreBlocker: !0 }))
                  : Et(l) && (i = l),
                  this.__store.setState((u) => ({
                    ...u,
                    statusCode: r ? r.statusCode : i ? 404 : u.matches.some((c) => c.status === "error") ? 500 : 200,
                    redirect: r,
                  }));
              }
              this.latestLoadPromise === o &&
                ((a = this.commitLocationPromise) == null || a.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                s();
            });
          }),
            this.latestLoadPromise = o,
            await o;
          this.latestLoadPromise && o !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
        this.hasNotFoundMatch() && this.__store.setState((s) => ({ ...s, statusCode: 404 }));
      }),
      (this.startViewTransition = (n) => {
        const r = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          r &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            typeof document.startViewTransition == "function")
        ) {
          let i;
          typeof r == "object" && this.isViewTransitionTypesSupported ? (i = { update: n, types: r.types }) : (i = n),
            document.startViewTransition(i);
        } else n();
      }),
      (this.updateMatch = (n, r) => {
        var i;
        let o;
        const s = (i = this.state.pendingMatches) == null ? void 0 : i.find((c) => c.id === n),
          a = this.state.matches.find((c) => c.id === n),
          l = this.state.cachedMatches.find((c) => c.id === n),
          u = s ? "pendingMatches" : a ? "matches" : l ? "cachedMatches" : "";
        return (
          u &&
            this.__store.setState((c) => {
              var f;
              return { ...c, [u]: (f = c[u]) == null ? void 0 : f.map((d) => (d.id === n ? (o = r(d)) : d)) };
            }),
          o
        );
      }),
      (this.getMatch = (n) =>
        [...this.state.cachedMatches, ...(this.state.pendingMatches ?? []), ...this.state.matches].find(
          (r) => r.id === n
        )),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: i,
        onReady: o,
        updateMatch: s = this.updateMatch,
        sync: a,
      }) => {
        let l,
          u = !1;
        const c = async () => {
            u || ((u = !0), await (o == null ? void 0 : o()));
          },
          f = (h) => !!(i && !this.state.matches.find((v) => v.id === h));
        !this.isServer && !this.state.matches.length && c();
        const d = (h, v) => {
          var y, w, p, m;
          if (Kc(v) && !v.reloadDocument) throw v;
          if (gr(v) || Et(v)) {
            if (
              (s(h.id, (g) => ({
                ...g,
                status: gr(v) ? "redirected" : Et(v) ? "notFound" : "error",
                isFetching: !1,
                error: v,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              v.routeId || (v.routeId = h.routeId),
              (y = h.beforeLoadPromise) == null || y.resolve(),
              (w = h.loaderPromise) == null || w.resolve(),
              (p = h.loadPromise) == null || p.resolve(),
              gr(v))
            )
              throw ((u = !0), (v = this.resolveRedirect({ ...v, _fromLocation: n })), v);
            if (Et(v))
              throw (
                (this._handleNotFound(r, v, { updateMatch: s }),
                (m = this.serverSsr) == null || m.onMatchSettled({ router: this, match: this.getMatch(h.id) }),
                v)
              );
          }
        };
        try {
          await new Promise((h, v) => {
            (async () => {
              var y, w, p;
              try {
                const m = (S, _, T) => {
                  var E, C;
                  const { id: k, routeId: D } = r[S],
                    R = this.looseRoutesById[D];
                  if (_ instanceof Promise) throw _;
                  (_.routerCode = T), (l = l ?? S), d(this.getMatch(k), _);
                  try {
                    (C = (E = R.options).onError) == null || C.call(E, _);
                  } catch (F) {
                    (_ = F), d(this.getMatch(k), _);
                  }
                  s(k, (F) => {
                    var L, B;
                    return (
                      (L = F.beforeLoadPromise) == null || L.resolve(),
                      (B = F.loadPromise) == null || B.resolve(),
                      {
                        ...F,
                        error: _,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [S, { id: _, routeId: T }] of r.entries()) {
                  const E = this.getMatch(_),
                    C = (y = r[S - 1]) == null ? void 0 : y.id,
                    k = this.looseRoutesById[T],
                    D = k.options.pendingMs ?? this.options.defaultPendingMs,
                    R = !!(
                      o &&
                      !this.isServer &&
                      !f(_) &&
                      (k.options.loader || k.options.beforeLoad) &&
                      typeof D == "number" &&
                      D !== 1 / 0 &&
                      (k.options.pendingComponent ?? this.options.defaultPendingComponent)
                    );
                  let F = !0;
                  if (
                    ((E.beforeLoadPromise || E.loaderPromise) &&
                      (R &&
                        setTimeout(() => {
                          try {
                            c();
                          } catch {}
                        }, D),
                      await E.beforeLoadPromise,
                      (F = this.getMatch(_).status !== "success")),
                    F)
                  ) {
                    try {
                      s(_, (Z) => {
                        const Xe = Z.loadPromise;
                        return {
                          ...Z,
                          loadPromise: ti(() => {
                            Xe == null || Xe.resolve();
                          }),
                          beforeLoadPromise: ti(),
                        };
                      });
                      const L = new AbortController();
                      let B;
                      R &&
                        (B = setTimeout(() => {
                          try {
                            c();
                          } catch {}
                        }, D));
                      const { paramsError: q, searchError: z } = this.getMatch(_);
                      q && m(S, q, "PARSE_PARAMS"), z && m(S, z, "VALIDATE_SEARCH");
                      const M = () => (C ? this.getMatch(C).context : (this.options.context ?? {}));
                      s(_, (Z) => ({
                        ...Z,
                        isFetching: "beforeLoad",
                        fetchCount: Z.fetchCount + 1,
                        abortController: L,
                        pendingTimeout: B,
                        context: { ...M(), ...Z.__routeContext },
                      }));
                      const { search: I, params: j, context: Q, cause: U } = this.getMatch(_),
                        Y = f(_),
                        J = {
                          search: I,
                          abortController: L,
                          params: j,
                          preload: Y,
                          context: Q,
                          location: n,
                          navigate: (Z) => this.navigate({ ...Z, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: Y ? "preload" : U,
                          matches: r,
                        },
                        oe = (await ((p = (w = k.options).beforeLoad) == null ? void 0 : p.call(w, J))) ?? {};
                      (gr(oe) || Et(oe)) && m(S, oe, "BEFORE_LOAD"),
                        s(_, (Z) => ({
                          ...Z,
                          __beforeLoadContext: oe,
                          context: { ...M(), ...Z.__routeContext, ...oe },
                          abortController: L,
                        }));
                    } catch (L) {
                      m(S, L, "BEFORE_LOAD");
                    }
                    s(_, (L) => {
                      var B;
                      return (
                        (B = L.beforeLoadPromise) == null || B.resolve(),
                        { ...L, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const g = r.slice(0, l),
                  b = [];
                g.forEach(({ id: S, routeId: _ }, T) => {
                  b.push(
                    (async () => {
                      const { loaderPromise: E } = this.getMatch(S);
                      let C = !1,
                        k = !1;
                      if (E) {
                        await E;
                        const D = this.getMatch(S);
                        D.error && d(D, D.error);
                      } else {
                        const D = b[T - 1],
                          R = this.looseRoutesById[_],
                          F = () => {
                            const {
                                params: U,
                                loaderDeps: Y,
                                abortController: J,
                                context: oe,
                                cause: Z,
                              } = this.getMatch(S),
                              Xe = f(S);
                            return {
                              params: U,
                              deps: Y,
                              preload: !!Xe,
                              parentMatchPromise: D,
                              abortController: J,
                              context: oe,
                              location: n,
                              navigate: (Cn) => this.navigate({ ...Cn, _fromLocation: n }),
                              cause: Xe ? "preload" : Z,
                              route: R,
                            };
                          },
                          L = Date.now() - this.getMatch(S).updatedAt,
                          B = f(S),
                          q = B
                            ? (R.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4)
                            : (R.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          z = R.options.shouldReload,
                          M = typeof z == "function" ? z(F()) : z;
                        s(S, (U) => ({
                          ...U,
                          loaderPromise: ti(),
                          preload: !!B && !this.state.matches.find((Y) => Y.id === S),
                        }));
                        const I = async () => {
                            var U, Y, J, oe, Z, Xe, Cn, tn, ga, wa, bo;
                            try {
                              const Jr = async () => {
                                const Je = this.getMatch(S);
                                Je.minPendingPromise && (await Je.minPendingPromise);
                              };
                              try {
                                this.loadRouteChunk(R), s(S, (fe) => ({ ...fe, isFetching: "loader" }));
                                const Je = await ((Y = (U = R.options).loader) == null ? void 0 : Y.call(U, F()));
                                d(this.getMatch(S), Je), await R._lazyPromise, await Jr();
                                const pr = {
                                    matches: r,
                                    match: this.getMatch(S),
                                    params: this.getMatch(S).params,
                                    loaderData: Je,
                                  },
                                  Fe = (oe = (J = R.options).head) == null ? void 0 : oe.call(J, pr),
                                  xo = Fe == null ? void 0 : Fe.meta,
                                  _o = Fe == null ? void 0 : Fe.links,
                                  Sa = Fe == null ? void 0 : Fe.scripts,
                                  ba = (Xe = (Z = R.options).scripts) == null ? void 0 : Xe.call(Z, pr),
                                  ie =
                                    (tn = (Cn = R.options).headers) == null ? void 0 : tn.call(Cn, { loaderData: Je });
                                s(S, (fe) => ({
                                  ...fe,
                                  error: void 0,
                                  status: "success",
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: Je,
                                  meta: xo,
                                  links: _o,
                                  headScripts: Sa,
                                  headers: ie,
                                  scripts: ba,
                                }));
                              } catch (Je) {
                                let pr = Je;
                                await Jr(), d(this.getMatch(S), Je);
                                try {
                                  (wa = (ga = R.options).onError) == null || wa.call(ga, Je);
                                } catch (Fe) {
                                  (pr = Fe), d(this.getMatch(S), Fe);
                                }
                                s(S, (Fe) => ({ ...Fe, error: pr, status: "error", isFetching: !1 }));
                              }
                              (bo = this.serverSsr) == null ||
                                bo.onMatchSettled({ router: this, match: this.getMatch(S) }),
                                await R._componentsPromise;
                            } catch (Jr) {
                              s(S, (Je) => ({ ...Je, loaderPromise: void 0 })), d(this.getMatch(S), Jr);
                            }
                          },
                          { status: j, invalid: Q } = this.getMatch(S);
                        (C = j === "success" && (Q || (M ?? L > q))),
                          (B && R.options.preload === !1) ||
                            (C && !a
                              ? ((k = !0),
                                (async () => {
                                  try {
                                    await I();
                                    const { loaderPromise: U, loadPromise: Y } = this.getMatch(S);
                                    U == null || U.resolve(),
                                      Y == null || Y.resolve(),
                                      s(S, (J) => ({ ...J, loaderPromise: void 0 }));
                                  } catch (U) {
                                    Kc(U) && (await this.navigate(U));
                                  }
                                })())
                              : (j !== "success" || (C && a)) && (await I()));
                      }
                      if (!k) {
                        const { loaderPromise: D, loadPromise: R } = this.getMatch(S);
                        D == null || D.resolve(), R == null || R.resolve();
                      }
                      return (
                        s(S, (D) => ({
                          ...D,
                          isFetching: k ? D.isFetching : !1,
                          loaderPromise: k ? D.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(S)
                      );
                    })()
                  );
                }),
                  await Promise.all(b),
                  h();
              } catch (m) {
                v(m);
              }
            })();
          }),
            await c();
        } catch (h) {
          if (gr(h) || Et(h)) throw (Et(h) && !i && (await c()), h);
        }
        return r;
      }),
      (this.invalidate = (n) => {
        const r = (i) => {
          var o;
          return (((o = n == null ? void 0 : n.filter) == null ? void 0 : o.call(n, i)) ?? !0)
            ? { ...i, invalid: !0, ...(i.status === "error" ? { status: "pending", error: void 0 } : {}) }
            : i;
        };
        return (
          this.__store.setState((i) => {
            var o;
            return {
              ...i,
              matches: i.matches.map(r),
              cachedMatches: i.cachedMatches.map(r),
              pendingMatches: (o = i.pendingMatches) == null ? void 0 : o.map(r),
            };
          }),
          this.load({ sync: n == null ? void 0 : n.sync })
        );
      }),
      (this.resolveRedirect = (n) => {
        const r = n;
        return r.href || (r.href = this.buildLocation(r).href), r;
      }),
      (this.clearCache = (n) => {
        const r = n == null ? void 0 : n.filter;
        r !== void 0
          ? this.__store.setState((i) => ({ ...i, cachedMatches: i.cachedMatches.filter((o) => !r(o)) }))
          : this.__store.setState((i) => ({ ...i, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const n = (r) => {
          const i = this.looseRoutesById[r.routeId];
          if (!i.options.loader) return !0;
          const o =
            (r.preload
              ? (i.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (i.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3;
          return !(r.status !== "error" && Date.now() - r.updatedAt < o);
        };
        this.clearCache({ filter: n });
      }),
      (this.loadRouteChunk = (n) => (
        n._lazyPromise === void 0 &&
          (n.lazyFn
            ? (n._lazyPromise = n.lazyFn().then((r) => {
                const { id: i, ...o } = r.options;
                Object.assign(n.options, o);
              }))
            : (n._lazyPromise = Promise.resolve())),
        n._componentsPromise === void 0 &&
          (n._componentsPromise = n._lazyPromise.then(() =>
            Promise.all(
              Wb.map(async (r) => {
                const i = n.options[r];
                i != null && i.preload && (await i.preload());
              })
            )
          )),
        n._componentsPromise
      )),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n);
        let i = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: n });
        const o = new Set([...this.state.matches, ...(this.state.pendingMatches ?? [])].map((a) => a.id)),
          s = new Set([...o, ...this.state.cachedMatches.map((a) => a.id)]);
        Hc(() => {
          i.forEach((a) => {
            s.has(a.id) || this.__store.setState((l) => ({ ...l, cachedMatches: [...l.cachedMatches, a] }));
          });
        });
        try {
          return (
            (i = await this.loadMatches({
              matches: i,
              location: r,
              preload: !0,
              updateMatch: (a, l) => {
                o.has(a) ? (i = i.map((u) => (u.id === a ? l(u) : u))) : this.updateMatch(a, l);
              },
            })),
            i
          );
        } catch (a) {
          if (gr(a)) return a.reloadDocument ? void 0 : await this.preloadRoute({ ...a, _fromLocation: r });
          Et(a) || console.error(a);
          return;
        }
      }),
      (this.matchRoute = (n, r) => {
        const i = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || "", n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          o = this.buildLocation(i);
        if (r != null && r.pending && this.state.status !== "pending") return !1;
        const a = ((r == null ? void 0 : r.pending) === void 0 ? !this.state.isLoading : r.pending)
            ? this.latestLocation
            : this.state.resolvedLocation || this.state.location,
          l = za(this.basepath, a.pathname, { ...r, to: o.pathname });
        return !l || (n.params && !Ii(l, n.params, { partial: !0 }))
          ? !1
          : l && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? Ii(a.search, o.search, { partial: !0 })
              ? l
              : !1
            : l;
      }),
      (this._handleNotFound = (n, r, { updateMatch: i = this.updateMatch } = {}) => {
        const o = Object.fromEntries(n.map((l) => [l.routeId, l]));
        let s = (r.global ? this.looseRoutesById[it] : this.looseRoutesById[r.routeId]) || this.looseRoutesById[it];
        for (; !s.options.notFoundComponent && !this.options.defaultNotFoundComponent && s.id !== it; )
          (s = s.parentRoute), Vt(s);
        const a = o[s.id];
        Vt(a, "Could not find match for route: " + s.id),
          i(a.id, (l) => ({ ...l, status: "notFound", error: r, isFetching: !1 })),
          r.routerCode === "BEFORE_LOAD" &&
            s.parentRoute &&
            ((r.routeId = s.parentRoute.id), this._handleNotFound(n, r, { updateMatch: i }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((n) => n.status === "notFound" || n.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        caseSensitive: t.caseSensitive ?? !1,
        notFoundMode: t.notFoundMode ?? "fuzzy",
        stringifySearch: t.stringifySearch ?? j1,
        parseSearch: t.parseSearch ?? N1,
      }),
      typeof document < "u" && (window.__TSR_ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(t, n) {
    const { foundRoute: r, matchedRoutes: i, routeParams: o } = this.getMatchedRoutes(t, n == null ? void 0 : n.dest);
    let s = !1;
    (r ? r.path !== "/" && o["**"] : Rr(t.pathname)) &&
      (this.options.notFoundRoute ? i.push(this.options.notFoundRoute) : (s = !0));
    const a = (() => {
        if (s) {
          if (this.options.notFoundMode !== "root")
            for (let f = i.length - 1; f >= 0; f--) {
              const d = i[f];
              if (d.children) return d.id;
            }
          return it;
        }
      })(),
      l = i.map((f) => {
        var d;
        let h;
        const v = ((d = f.options.params) == null ? void 0 : d.parse) ?? f.options.parseParams;
        if (v)
          try {
            const y = v(o);
            Object.assign(o, y);
          } catch (y) {
            if (((h = new tO(y.message, { cause: y })), n != null && n.throwOnError)) throw h;
            return h;
          }
      }),
      u = [],
      c = (f) =>
        (f == null ? void 0 : f.id) ? (f.context ?? this.options.context ?? {}) : (this.options.context ?? {});
    return (
      i.forEach((f, d) => {
        var h, v;
        const y = u[d - 1],
          [w, p, m] = (() => {
            const F = (y == null ? void 0 : y.search) ?? t.search,
              L = (y == null ? void 0 : y._strictSearch) ?? {};
            try {
              const B = Jc(f.options.validateSearch, { ...F }) ?? {};
              return [{ ...F, ...B }, { ...L, ...B }, void 0];
            } catch (B) {
              let q = B;
              if ((B instanceof iu || (q = new iu(B.message, { cause: B })), n != null && n.throwOnError)) throw q;
              return [F, {}, q];
            }
          })(),
          g = ((v = (h = f.options).loaderDeps) == null ? void 0 : v.call(h, { search: w })) ?? "",
          b = g ? JSON.stringify(g) : "",
          { usedParams: S, interpolatedPath: _ } = $a({
            path: f.fullPath,
            params: o,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          T =
            $a({ path: f.id, params: o, leaveWildcards: !0, decodeCharMap: this.pathParamsDecodeCharMap })
              .interpolatedPath + b,
          E = this.getMatch(T),
          C = this.state.matches.find((F) => F.routeId === f.id),
          k = C ? "stay" : "enter";
        let D;
        if (E)
          D = {
            ...E,
            cause: k,
            params: C ? xt(C.params, o) : o,
            _strictParams: S,
            search: xt(C ? C.search : E.search, w),
            _strictSearch: p,
          };
        else {
          const F = f.options.loader || f.options.beforeLoad || f.lazyFn || Jk(f) ? "pending" : "success";
          D = {
            id: T,
            index: d,
            routeId: f.id,
            params: C ? xt(C.params, o) : o,
            _strictParams: S,
            pathname: un([this.basepath, _]),
            updatedAt: Date.now(),
            search: C ? xt(C.search, w) : w,
            _strictSearch: p,
            searchError: void 0,
            status: F,
            isFetching: !1,
            error: void 0,
            paramsError: l[d],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: k,
            loaderDeps: C ? xt(C.loaderDeps, g) : g,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: f.options.staticData || {},
            loadPromise: ti(),
            fullPath: f.fullPath,
          };
        }
        (n != null && n.preload) || (D.globalNotFound = a === f.id), (D.searchError = m);
        const R = c(y);
        (D.context = { ...R, ...D.__routeContext, ...D.__beforeLoadContext }), u.push(D);
      }),
      u.forEach((f, d) => {
        var h, v, y, w, p, m, g, b;
        const S = this.looseRoutesById[f.routeId];
        if (!this.getMatch(f.id) && (n == null ? void 0 : n._buildLocation) !== !0) {
          const T = u[d - 1],
            E = c(T),
            C = {
              deps: f.loaderDeps,
              params: f.params,
              context: E,
              location: t,
              navigate: (k) => this.navigate({ ...k, _fromLocation: t }),
              buildLocation: this.buildLocation,
              cause: f.cause,
              abortController: f.abortController,
              preload: !!f.preload,
              matches: u,
            };
          (f.__routeContext = ((v = (h = S.options).context) == null ? void 0 : v.call(h, C)) ?? {}),
            (f.context = { ...E, ...f.__routeContext, ...f.__beforeLoadContext });
        }
        if (f.status === "success") {
          f.headers = (w = (y = S.options).headers) == null ? void 0 : w.call(y, { loaderData: f.loaderData });
          const T = { matches: u, match: f, params: f.params, loaderData: f.loaderData },
            E = (m = (p = S.options).head) == null ? void 0 : m.call(p, T);
          (f.links = E == null ? void 0 : E.links),
            (f.headScripts = E == null ? void 0 : E.scripts),
            (f.meta = E == null ? void 0 : E.meta),
            (f.scripts = (b = (g = S.options).scripts) == null ? void 0 : b.call(g, T));
        }
      }),
      u
    );
  }
}
class iu extends Error {}
class tO extends Error {}
function nO(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function rO({ router: e, children: t, ...n }) {
  e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  const r = Op(),
    i = O.jsx(r.Provider, { value: e, children: t });
  return e.options.Wrap ? O.jsx(e.options.Wrap, { children: i }) : i;
}
function iO({ router: e, ...t }) {
  return O.jsx(rO, { router: e, ...t, children: O.jsx(Gk, {}) });
}
const oO = "modulepreload",
  sO = function (e) {
    return "/" + e;
  },
  ly = {},
  sa = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = sO(l)), l in ly)) return;
          ly[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : oO),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, h) => {
              f.addEventListener("load", d),
                f.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${l}`)));
            });
        })
      );
    }
    function o(s) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented)) throw s;
    }
    return i.then((s) => {
      for (const a of s || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  },
  Rp = x.createContext({});
function Dp(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const aa = x.createContext(null),
  Mp = x.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" });
class aO extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0), (r.width = n.offsetWidth || 0), (r.top = n.offsetTop), (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function lO({ children: e, isPresent: t }) {
  const n = x.useId(),
    r = x.useRef(null),
    i = x.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = x.useContext(Mp);
  return (
    x.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    O.jsx(aO, { isPresent: t, childRef: r, sizeRef: i, children: x.cloneElement(e, { ref: r }) })
  );
}
const uO = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = Dp(cO),
    l = x.useId(),
    u = x.useCallback(
      (f) => {
        a.set(f, !0);
        for (const d of a.values()) if (!d) return;
        r && r();
      },
      [a, r]
    ),
    c = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      o ? [Math.random(), u] : [n, u]
    );
  return (
    x.useMemo(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = O.jsx(lO, { isPresent: n, children: e })),
    O.jsx(aa.Provider, { value: c, children: e })
  );
};
function cO() {
  return new Map();
}
function Qb(e = !0) {
  const t = x.useContext(aa);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = x.useId();
  x.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = x.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
function fO() {
  return dO(x.useContext(aa));
}
function dO(e) {
  return e === null ? !0 : e.isPresent;
}
const Qa = (e) => e.key || "";
function uy(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ap = typeof window < "u",
  qb = Ap ? x.useLayoutEffect : x.useEffect,
  cy = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: s = !1,
  }) => {
    const [a, l] = Qb(s),
      u = x.useMemo(() => uy(e), [e]),
      c = s && !a ? [] : u.map(Qa),
      f = x.useRef(!0),
      d = x.useRef(u),
      h = Dp(() => new Map()),
      [v, y] = x.useState(u),
      [w, p] = x.useState(u);
    qb(() => {
      (f.current = !1), (d.current = u);
      for (let b = 0; b < w.length; b++) {
        const S = Qa(w[b]);
        c.includes(S) ? h.delete(S) : h.get(S) !== !0 && h.set(S, !1);
      }
    }, [w, c.length, c.join("-")]);
    const m = [];
    if (u !== v) {
      let b = [...u];
      for (let S = 0; S < w.length; S++) {
        const _ = w[S],
          T = Qa(_);
        c.includes(T) || (b.splice(S, 0, _), m.push(_));
      }
      o === "wait" && m.length && (b = m), p(uy(b)), y(u);
      return;
    }
    const { forceRender: g } = x.useContext(Rp);
    return O.jsx(O.Fragment, {
      children: w.map((b) => {
        const S = Qa(b),
          _ = s && !a ? !1 : u === w || c.includes(S),
          T = () => {
            if (h.has(S)) h.set(S, !0);
            else return;
            let E = !0;
            h.forEach((C) => {
              C || (E = !1);
            }),
              E && (g == null || g(), p(d.current), s && (l == null || l()), r && r());
          };
        return O.jsx(
          uO,
          {
            isPresent: _,
            initial: !f.current || n ? void 0 : !1,
            custom: _ ? void 0 : t,
            presenceAffectsLayout: i,
            mode: o,
            onExitComplete: _ ? void 0 : T,
            children: b,
          },
          S
        );
      }),
    });
  },
  pt = (e) => e;
let Hb = pt;
function Ip(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  cn = (e) => e * 1e3,
  fn = (e) => e / 1e3,
  hO = { useManualTiming: !1 };
function pO(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const h = f && r ? t : n;
      return c && o.add(u), h.has(u) || h.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0), ([t, n] = [n, t]), t.forEach(a), t.clear(), (r = !1), i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const qa = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  mO = 40;
function Gb(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = qa.reduce((p, m) => ((p[m] = pO(o)), p), {}),
    { read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d } = s,
    h = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, mO), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(h);
    };
  return {
    schedule: qa.reduce((p, m) => {
      const g = s[m];
      return (p[m] = (b, S = !1, _ = !1) => (n || v(), g.schedule(b, S, _))), p;
    }, {}),
    cancel: (p) => {
      for (let m = 0; m < qa.length; m++) s[qa[m]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: ve,
    cancel: ir,
    state: Ve,
    steps: Zc,
  } = Gb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pt, !0),
  Kb = x.createContext({ strict: !1 }),
  fy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ji = {};
for (const e in fy) Ji[e] = { isEnabled: (t) => fy[e].some((n) => !!t[n]) };
function vO(e) {
  for (const t in e) Ji[t] = { ...Ji[t], ...e[t] };
}
const yO = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ou(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    yO.has(e)
  );
}
let Yb = (e) => !ou(e);
function gO(e) {
  e && (Yb = (t) => (t.startsWith("on") ? !ou(t) : e(t)));
}
try {
  gO(require("@emotion/is-prop-valid").default);
} catch {}
function wO(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Yb(i) || (n === !0 && ou(i)) || (!t && !ou(i)) || (e.draggable && i.startsWith("onDrag"))) && (r[i] = e[i]));
  return r;
}
function SO(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, { get: (r, i) => (i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))) });
}
const Gu = x.createContext({});
function Bs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ku(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Lp = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Fp = ["initial", ...Lp];
function Yu(e) {
  return Ku(e.animate) || Fp.some((t) => Bs(e[t]));
}
function Xb(e) {
  return !!(Yu(e) || e.variants);
}
function bO(e, t) {
  if (Yu(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Bs(n) ? n : void 0, animate: Bs(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function xO(e) {
  const { initial: t, animate: n } = bO(e, x.useContext(Gu));
  return x.useMemo(() => ({ initial: t, animate: n }), [dy(t), dy(n)]);
}
function dy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const _O = Symbol.for("motionComponentSymbol");
function wi(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function EO(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : wi(n) && (n.current = r));
    },
    [t]
  );
}
const Np = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  TO = "framerAppearId",
  Jb = "data-" + Np(TO),
  { schedule: jp } = Gb(queueMicrotask, !1),
  Zb = x.createContext({});
function PO(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = x.useContext(Gu),
    l = x.useContext(Kb),
    u = x.useContext(aa),
    c = x.useContext(Mp).reducedMotion,
    f = x.useRef(null);
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    h = x.useContext(Zb);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && CO(f.current, n, i, h);
  const v = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && v.current && d.update(n, u);
  });
  const y = n[Jb],
    w = x.useRef(
      !!y &&
        !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, y)) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, y))
    );
  return (
    qb(() => {
      d &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        jp.render(d.render),
        w.current && d.animationState && d.animationState.animateChanges());
    }),
    x.useEffect(() => {
      d &&
        (!w.current && d.animationState && d.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, y);
          }),
          (w.current = !1)));
    }),
    d
  );
}
function CO(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  (e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : ex(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && wi(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function ex(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : ex(e.parent);
}
function kO({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var o, s;
  e && vO(e);
  function a(u, c) {
    let f;
    const d = { ...x.useContext(Mp), ...u, layoutId: OO(u) },
      { isStatic: h } = d,
      v = xO(u),
      y = r(u, h);
    if (!h && Ap) {
      RO();
      const w = DO(d);
      (f = w.MeasureLayout), (v.visualElement = PO(i, y, d, t, w.ProjectionNode));
    }
    return O.jsxs(Gu.Provider, {
      value: v,
      children: [
        f && v.visualElement ? O.jsx(f, { visualElement: v.visualElement, ...d }) : null,
        n(i, u, EO(y, v.visualElement, c), y, h, v.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = x.forwardRef(a);
  return (l[_O] = i), l;
}
function OO({ layoutId: e }) {
  const t = x.useContext(Rp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function RO(e, t) {
  x.useContext(Kb).strict;
}
function DO(e) {
  const { drag: t, layout: n } = Ji;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const MO = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Vp(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(MO.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function hy(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function $p(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = hy(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if ((typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function")) {
    const [i, o] = hy(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const Md = (e) => Array.isArray(e),
  AO = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  IO = (e) => (Md(e) ? e[e.length - 1] || 0 : e),
  He = (e) => !!(e && e.getVelocity);
function vl(e) {
  const t = He(e) ? e.get() : e;
  return AO(t) ? t.toValue() : t;
}
function LO({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, o) {
  const s = { latestValues: FO(r, i, o, e), renderState: t() };
  return n && ((s.onMount = (a) => n({ props: r, current: a, ...s })), (s.onUpdate = (a) => n(a))), s;
}
const tx = (e) => (t, n) => {
  const r = x.useContext(Gu),
    i = x.useContext(aa),
    o = () => LO(e, t, r, i);
  return n ? o() : Dp(o);
};
function FO(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = vl(o[d]);
  let { initial: s, animate: a } = e;
  const l = Yu(e),
    u = Xb(e);
  t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !Ku(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let h = 0; h < d.length; h++) {
      const v = $p(e, d[h]);
      if (v) {
        const { transitionEnd: y, transition: w, ...p } = v;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const b = c ? g.length - 1 : 0;
            g = g[b];
          }
          g !== null && (i[m] = g);
        }
        for (const m in y) i[m] = y[m];
      }
    }
  }
  return i;
}
const ao = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Gr = new Set(ao),
  nx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  rx = nx("--"),
  NO = nx("var(--"),
  zp = (e) => (NO(e) ? jO.test(e.split("/*")[0].trim()) : !1),
  jO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ix = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  wn = (e, t, n) => (n > t ? t : n < e ? e : n),
  lo = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  Us = { ...lo, transform: (e) => wn(0, 1, e) },
  Ha = { ...lo, default: 1 },
  la = (e) => ({
    test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  An = la("deg"),
  Kt = la("%"),
  W = la("px"),
  VO = la("vh"),
  $O = la("vw"),
  py = { ...Kt, parse: (e) => Kt.parse(e) / 100, transform: (e) => Kt.transform(e * 100) },
  zO = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
  },
  BO = {
    rotate: An,
    rotateX: An,
    rotateY: An,
    rotateZ: An,
    scale: Ha,
    scaleX: Ha,
    scaleY: Ha,
    scaleZ: Ha,
    skew: An,
    skewX: An,
    skewY: An,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: Us,
    originX: py,
    originY: py,
    originZ: W,
  },
  my = { ...lo, transform: Math.round },
  Bp = { ...zO, ...BO, zIndex: my, size: W, fillOpacity: Us, strokeOpacity: Us, numOctaves: my },
  UO = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  WO = ao.length;
function QO(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < WO; o++) {
    const s = ao[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if ((typeof a == "number" ? (l = a === (s.startsWith("scale") ? 1 : 0)) : (l = parseFloat(a) === 0), !l || n)) {
      const u = ix(a, Bp[s]);
      if (!l) {
        i = !1;
        const c = UO[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Up(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Gr.has(l)) {
      s = !0;
      continue;
    } else if (rx(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ix(u, Bp[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if ((t.transform || (s || n ? (r.transform = QO(t, e.transform, n)) : r.transform && (r.transform = "none")), a)) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const qO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  HO = { offset: "strokeDashoffset", array: "strokeDasharray" };
function GO(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? qO : HO;
  e[o.offset] = W.transform(-r);
  const s = W.transform(t),
    a = W.transform(n);
  e[o.array] = `${s} ${a}`;
}
function vy(e, t, n) {
  return typeof e == "string" ? e : W.transform(t + n * e);
}
function KO(e, t, n) {
  const r = vy(t, e.x, e.width),
    i = vy(n, e.y, e.height);
  return `${r} ${i}`;
}
function Wp(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((Up(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: h, dimensions: v } = e;
  d.transform && (v && (h.transform = d.transform), delete d.transform),
    v &&
      (i !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = KO(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && GO(d, s, a, l, !1);
}
const Qp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ox = () => ({ ...Qp(), attrs: {} }),
  qp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function sx(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const ax = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function lx(e, t, n, r) {
  sx(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(ax.has(i) ? i : Np(i), t.attrs[i]);
}
const su = {};
function YO(e) {
  Object.assign(su, e);
}
function ux(e, { layout: t, layoutId: n }) {
  return Gr.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!su[e] || e === "opacity"));
}
function Hp(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (He(i[s]) ||
      (t.style && He(t.style[s])) ||
      ux(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function cx(e, t, n) {
  const r = Hp(e, t, n);
  for (const i in e)
    if (He(e[i]) || He(t[i])) {
      const o = ao.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
function XO(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const yy = ["x", "y", "width", "height", "cx", "cy", "r"],
  JO = {
    useVisualState: tx({
      scrapeMotionValuesFromProps: cx,
      createRenderState: ox,
      onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
        if (!n) return;
        let o = !!e.drag;
        if (!o) {
          for (const a in i)
            if (Gr.has(a)) {
              o = !0;
              break;
            }
        }
        if (!o) return;
        let s = !t;
        if (t)
          for (let a = 0; a < yy.length; a++) {
            const l = yy[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          ve.read(() => {
            XO(n, r),
              ve.render(() => {
                Wp(r, i, qp(n.tagName), e.transformTemplate), lx(n, r);
              });
          });
      },
    }),
  },
  ZO = { useVisualState: tx({ scrapeMotionValuesFromProps: Hp, createRenderState: Qp }) };
function fx(e, t, n) {
  for (const r in t) !He(t[r]) && !ux(r, n) && (e[r] = t[r]);
}
function eR({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Qp();
    return Up(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function tR(e, t) {
  const n = e.style || {},
    r = {};
  return fx(r, n, e), Object.assign(r, eR(e, t)), r;
}
function nR(e, t) {
  const n = {},
    r = tR(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function rR(e, t, n, r) {
  const i = x.useMemo(() => {
    const o = ox();
    return Wp(o, t, qp(r), e.transformTemplate), { ...o.attrs, style: { ...o.style } };
  }, [t]);
  if (e.style) {
    const o = {};
    fx(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function iR(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (Vp(n) ? rR : nR)(r, o, s, n),
      u = wO(r, typeof n == "string", e),
      c = n !== x.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = x.useMemo(() => (He(f) ? f.get() : f), [f]);
    return x.createElement(n, { ...c, children: d });
  };
}
function oR(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = { ...(Vp(r) ? JO : ZO), preloadedFeatures: e, useRender: iR(i), createVisualElement: t, Component: r };
    return kO(s);
  };
}
function dx(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Xu(e, t, n) {
  const r = e.getProps();
  return $p(r, t, n !== void 0 ? n : r.custom, e);
}
const sR = Ip(() => window.ScrollTimeline !== void 0);
class aR {
  constructor(t) {
    (this.stop = () => this.runAll("stop")), (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((t) => ("finished" in t ? t.finished : t)));
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (sR() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class lR extends aR {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Gp(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ad = 2e4;
function hx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ad; ) (t += n), (r = e.next(t));
  return t >= Ad ? 1 / 0 : t;
}
function Kp(e) {
  return typeof e == "function";
}
function gy(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Yp = (e) => Array.isArray(e) && typeof e[0] == "number",
  uR = { linearEasing: void 0 };
function cR(e, t) {
  const n = Ip(e);
  return () => {
    var r;
    return (r = uR[t]) !== null && r !== void 0 ? r : n();
  };
}
const au = cR(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  px = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += e(Xi(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function mx(e) {
  return !!(
    (typeof e == "function" && au()) ||
    !e ||
    (typeof e == "string" && (e in Id || au())) ||
    Yp(e) ||
    (Array.isArray(e) && e.every(mx))
  );
}
const Ho = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Id = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ho([0, 0.65, 0.55, 1]),
    circOut: Ho([0.55, 0, 1, 0.45]),
    backIn: Ho([0.31, 0.01, 0.66, -0.59]),
    backOut: Ho([0.33, 1.53, 0.69, 0.99]),
  };
function vx(e, t) {
  if (e)
    return typeof e == "function" && au()
      ? px(e, t)
      : Yp(e)
        ? Ho(e)
        : Array.isArray(e)
          ? e.map((n) => vx(n, t) || Id.easeOut)
          : Id[e];
}
const It = { x: !1, y: !1 };
function yx() {
  return It.x || It.y;
}
function fR(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function gx(e, t) {
  const n = fR(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function wy(e) {
  return (t) => {
    t.pointerType === "touch" || yx() || e(t);
  };
}
function dR(e, t, n = {}) {
  const [r, i, o] = gx(e, n),
    s = wy((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = wy((f) => {
        u(f), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const wx = (e, t) => (t ? (e === t ? !0 : wx(e, t.parentElement)) : !1),
  Xp = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1),
  hR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function pR(e) {
  return hR.has(e.tagName) || e.tabIndex !== -1;
}
const Go = new WeakSet();
function Sy(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ef(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const mR = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Sy(() => {
    if (Go.has(n)) return;
    ef(n, "down");
    const i = Sy(() => {
        ef(n, "up");
      }),
      o = () => ef(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function by(e) {
  return Xp(e) && !yx();
}
function vR(e, t, n = {}) {
  const [r, i, o] = gx(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!by(a) || Go.has(l)) return;
      Go.add(l);
      const u = t(a),
        c = (h, v) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!by(h) || !Go.has(l)) && (Go.delete(l), typeof u == "function" && u(h, { success: v }));
        },
        f = (h) => {
          c(h, n.useGlobalTarget || wx(l, h.target));
        },
        d = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
    };
  return (
    r.forEach((a) => {
      !pR(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        a.addEventListener("focus", (u) => mR(u, i), i);
    }),
    o
  );
}
function yR(e) {
  return e === "x" || e === "y"
    ? It[e]
      ? null
      : ((It[e] = !0),
        () => {
          It[e] = !1;
        })
    : It.x || It.y
      ? null
      : ((It.x = It.y = !0),
        () => {
          It.x = It.y = !1;
        });
}
const Sx = new Set(["width", "height", "top", "left", "right", "bottom", ...ao]);
let yl;
function gR() {
  yl = void 0;
}
const Yt = {
  now: () => (yl === void 0 && Yt.set(Ve.isProcessing || hO.useManualTiming ? Ve.timestamp : performance.now()), yl),
  set: (e) => {
    (yl = e), queueMicrotask(gR);
  },
};
function Jp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class em {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Jp(this.subscriptions, t), () => Zp(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function bx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const xy = 30,
  wR = (e) => !isNaN(parseFloat(e));
class SR {
  constructor(t, n = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Yt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Yt.now()),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = wR(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new em());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ve.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Yt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > xy) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, xy);
    return bx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ws(e, t) {
  return new SR(e, t);
}
function bR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ws(n));
}
function xR(e, t) {
  const n = Xu(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = IO(o[s]);
    bR(e, s, a);
  }
}
function _R(e) {
  return !!(He(e) && e.add);
}
function Ld(e, t) {
  const n = e.getValue("willChange");
  if (_R(n)) return n.add(t);
}
function xx(e) {
  return e.props[Jb];
}
const _x = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  ER = 1e-7,
  TR = 12;
function PR(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = _x(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > ER && ++a < TR);
  return s;
}
function ua(e, t, n, r) {
  if (e === t && n === r) return pt;
  const i = (o) => PR(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : _x(i(o), t, r));
}
const Ex = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Tx = (e) => (t) => 1 - e(1 - t),
  Px = ua(0.33, 1.53, 0.69, 0.99),
  tm = Tx(Px),
  Cx = Ex(tm),
  kx = (e) => ((e *= 2) < 1 ? 0.5 * tm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  nm = (e) => 1 - Math.sin(Math.acos(e)),
  Ox = Tx(nm),
  Rx = Ex(nm),
  Dx = (e) => /^0[^.\s]+$/u.test(e);
function CR(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Dx(e) : !0;
}
const ms = (e) => Math.round(e * 1e5) / 1e5,
  rm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kR(e) {
  return e == null;
}
const OR =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  im = (e, t) => (n) =>
    !!(
      (typeof n == "string" && OR.test(n) && n.startsWith(e)) ||
      (t && !kR(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Mx = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(rm);
    return { [e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1 };
  },
  RR = (e) => wn(0, 255, e),
  tf = { ...lo, transform: (e) => Math.round(RR(e)) },
  Dr = {
    test: im("rgb", "red"),
    parse: Mx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" + tf.transform(e) + ", " + tf.transform(t) + ", " + tf.transform(n) + ", " + ms(Us.transform(r)) + ")",
  };
function DR(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
  );
}
const Fd = { test: im("#"), parse: DR, transform: Dr.transform },
  Si = {
    test: im("hsl", "hue"),
    parse: Mx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Kt.transform(ms(t)) +
      ", " +
      Kt.transform(ms(n)) +
      ", " +
      ms(Us.transform(r)) +
      ")",
  },
  Qe = {
    test: (e) => Dr.test(e) || Fd.test(e) || Si.test(e),
    parse: (e) => (Dr.test(e) ? Dr.parse(e) : Si.test(e) ? Si.parse(e) : Fd.parse(e)),
    transform: (e) => (typeof e == "string" ? e : e.hasOwnProperty("red") ? Dr.transform(e) : Si.transform(e)),
  },
  MR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function AR(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(rm)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(MR)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ax = "number",
  Ix = "color",
  IR = "var",
  LR = "var(",
  _y = "${}",
  FR =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      FR,
      (l) => (
        Qe.test(l)
          ? (r.color.push(o), i.push(Ix), n.push(Qe.parse(l)))
          : l.startsWith(LR)
            ? (r.var.push(o), i.push(IR), n.push(l))
            : (r.number.push(o), i.push(Ax), n.push(parseFloat(l))),
        ++o,
        _y
      )
    )
    .split(_y);
  return { values: n, split: a, indexes: r, types: i };
}
function Lx(e) {
  return Qs(e).values;
}
function Fx(e) {
  const { split: t, types: n } = Qs(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Ax ? (o += ms(i[s])) : a === Ix ? (o += Qe.transform(i[s])) : (o += i[s]);
      }
    return o;
  };
}
const NR = (e) => (typeof e == "number" ? 0 : e);
function jR(e) {
  const t = Lx(e);
  return Fx(e)(t.map(NR));
}
const or = { test: AR, parse: Lx, createTransformer: Fx, getAnimatableNone: jR },
  VR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $R(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(rm) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = VR.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const zR = /\b([a-z-]*)\(.*?\)/gu,
  Nd = {
    ...or,
    getAnimatableNone: (e) => {
      const t = e.match(zR);
      return t ? t.map($R).join(" ") : e;
    },
  },
  BR = {
    ...Bp,
    color: Qe,
    backgroundColor: Qe,
    outlineColor: Qe,
    fill: Qe,
    stroke: Qe,
    borderColor: Qe,
    borderTopColor: Qe,
    borderRightColor: Qe,
    borderBottomColor: Qe,
    borderLeftColor: Qe,
    filter: Nd,
    WebkitFilter: Nd,
  },
  om = (e) => BR[e];
function Nx(e, t) {
  let n = om(e);
  return n !== Nd && (n = or), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const UR = new Set(["auto", "none", "0"]);
function WR(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !UR.has(o) && Qs(o).values.length && (i = e[r]), r++;
  }
  if (i && n) for (const o of t) e[o] = Nx(n, i);
}
const Ey = (e) => e === lo || e === W,
  Ty = (e, t) => parseFloat(e.split(", ")[t]),
  Py =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Ty(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Ty(o[1], e) : 0;
      }
    },
  QR = new Set(["x", "y", "z"]),
  qR = ao.filter((e) => !QR.has(e));
function HR(e) {
  const t = [];
  return (
    qR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Zi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Py(4, 13),
  y: Py(5, 14),
};
Zi.translateX = Zi.x;
Zi.translateY = Zi.y;
const Lr = new Set();
let jd = !1,
  Vd = !1;
function jx() {
  if (Vd) {
    const e = Array.from(Lr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = HR(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Vd = !1), (jd = !1), Lr.forEach((e) => e.complete()), Lr.clear();
}
function Vx() {
  Lr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Vd = !0);
  });
}
function GR() {
  Vx(), jx();
}
class sm {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Lr.add(this), jd || ((jd = !0), ve.read(Vx), ve.resolveKeyframes(jx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Lr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Lr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const $x = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  KR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function YR(e) {
  const t = KR.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function zx(e, t, n = 1) {
  const [r, i] = YR(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return $x(s) ? parseFloat(s) : s;
  }
  return zp(i) ? zx(i, t, n + 1) : i;
}
const Bx = (e) => (t) => t.test(e),
  XR = { test: (e) => e === "auto", parse: (e) => e },
  Ux = [lo, W, Kt, An, $O, VO, XR],
  Cy = (e) => Ux.find(Bx(e));
class Wx extends sm {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), zp(u))) {
        const c = zx(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Sx.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Cy(i),
      a = Cy(o);
    if (s !== a)
      if (Ey(s) && Ey(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) CR(t[i]) && r.push(i);
    r.length && WR(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Zi[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = Zi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const ky = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" && (or.test(e) || e === "0") && !e.startsWith("url("))
      );
function JR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ZR(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = ky(i, t),
    a = ky(o, t);
  return !s || !a ? !1 : JR(e) || ((n === "spring" || Kp(n)) && r);
}
const eD = (e) => e !== null;
function Ju(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(eD),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const tD = 40;
class Qx {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Yt.now()),
      (this.options = { autoplay: t, delay: n, type: r, repeat: i, repeatDelay: o, repeatType: s, ...a }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > tD
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && GR(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Yt.now()), (this.hasAttemptedResolve = !0);
    const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !ZR(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l && l(Ju(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 && ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }), this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const we = (e, t, n) => e + (t - e) * n;
function nf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function nD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = nf(l, a, e + 1 / 3)), (o = nf(l, a, e)), (s = nf(l, a, e - 1 / 3));
  }
  return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r };
}
function lu(e, t) {
  return (n) => (n > 0 ? t : e);
}
const rf = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  rD = [Fd, Dr, Si],
  iD = (e) => rD.find((t) => t.test(e));
function Oy(e) {
  const t = iD(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Si && (n = nD(n)), n;
}
const Ry = (e, t) => {
    const n = Oy(e),
      r = Oy(t);
    if (!n || !r) return lu(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = rf(n.red, r.red, o)),
      (i.green = rf(n.green, r.green, o)),
      (i.blue = rf(n.blue, r.blue, o)),
      (i.alpha = we(n.alpha, r.alpha, o)),
      Dr.transform(i)
    );
  },
  oD = (e, t) => (n) => t(e(n)),
  ca = (...e) => e.reduce(oD),
  $d = new Set(["none", "hidden"]);
function sD(e, t) {
  return $d.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function aD(e, t) {
  return (n) => we(e, t, n);
}
function am(e) {
  return typeof e == "number"
    ? aD
    : typeof e == "string"
      ? zp(e)
        ? lu
        : Qe.test(e)
          ? Ry
          : cD
      : Array.isArray(e)
        ? qx
        : typeof e == "object"
          ? Qe.test(e)
            ? Ry
            : lD
          : lu;
}
function qx(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => am(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function lD(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = am(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function uD(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const cD = (e, t) => {
  const n = or.createTransformer(t),
    r = Qs(e),
    i = Qs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? ($d.has(e) && !i.values.length) || ($d.has(t) && !r.values.length)
      ? sD(e, t)
      : ca(qx(uD(r, i), i.values), n)
    : lu(e, t);
};
function Hx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? we(e, t, n) : am(e)(e, t);
}
const fD = 5;
function Gx(e, t, n) {
  const r = Math.max(t - fD, 0);
  return bx(n - e(r), t - r);
}
const xe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Dy = 0.001;
function dD({ duration: e = xe.duration, bounce: t = xe.bounce, velocity: n = xe.velocity, mass: r = xe.mass }) {
  let i,
    o,
    s = 1 - t;
  (s = wn(xe.minDamping, xe.maxDamping, s)),
    (e = wn(xe.minDuration, xe.maxDuration, fn(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            h = zd(u, s),
            v = Math.exp(-f);
          return Dy - (d / h) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            y = zd(Math.pow(u, 2), s);
          return ((-i(u) + Dy > 0 ? -1 : 1) * ((d - h) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -0.001 + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = pD(i, o, a);
  if (((e = cn(e)), isNaN(l))) return { stiffness: xe.stiffness, damping: xe.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const hD = 12;
function pD(e, t, n) {
  let r = n;
  for (let i = 1; i < hD; i++) r = r - e(r) / t(r);
  return r;
}
function zd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mD = ["duration", "bounce"],
  vD = ["stiffness", "damping", "mass"];
function My(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function yD(e) {
  let t = {
    velocity: xe.velocity,
    stiffness: xe.stiffness,
    damping: xe.damping,
    mass: xe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!My(e, vD) && My(e, mD))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * wn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: xe.mass, stiffness: i, damping: o };
    } else {
      const n = dD(e);
      (t = { ...t, ...n, mass: xe.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Kx(e = xe.visualDuration, t = xe.bounce) {
  const n = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: h,
    } = yD({ ...n, velocity: -fn(n.velocity || 0) }),
    v = d || 0,
    y = u / (2 * Math.sqrt(l * c)),
    w = s - o,
    p = fn(Math.sqrt(l / c)),
    m = Math.abs(w) < 5;
  r || (r = m ? xe.restSpeed.granular : xe.restSpeed.default),
    i || (i = m ? xe.restDelta.granular : xe.restDelta.default);
  let g;
  if (y < 1) {
    const S = zd(p, y);
    g = (_) => {
      const T = Math.exp(-y * p * _);
      return s - T * (((v + y * p * w) / S) * Math.sin(S * _) + w * Math.cos(S * _));
    };
  } else if (y === 1) g = (S) => s - Math.exp(-p * S) * (w + (v + p * w) * S);
  else {
    const S = p * Math.sqrt(y * y - 1);
    g = (_) => {
      const T = Math.exp(-y * p * _),
        E = Math.min(S * _, 300);
      return s - (T * ((v + y * p * w) * Math.sinh(E) + S * w * Math.cosh(E))) / S;
    };
  }
  const b = {
    calculatedDuration: (h && f) || null,
    next: (S) => {
      const _ = g(S);
      if (h) a.done = S >= f;
      else {
        let T = 0;
        y < 1 && (T = S === 0 ? cn(v) : Gx(g, S, _));
        const E = Math.abs(T) <= r,
          C = Math.abs(s - _) <= i;
        a.done = E && C;
      }
      return (a.value = a.done ? s : _), a;
    },
    toString: () => {
      const S = Math.min(hx(b), Ad),
        _ = px((T) => b.next(S * T).value, S, 30);
      return S + "ms " + _;
    },
  };
  return b;
}
function Ay({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    h = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    v = (E) => (a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l);
  let y = n * t;
  const w = f + y,
    p = s === void 0 ? w : s(w);
  p !== w && (y = p - f);
  const m = (E) => -y * Math.exp(-E / r),
    g = (E) => p + m(E),
    b = (E) => {
      const C = m(E),
        k = g(E);
      (d.done = Math.abs(C) <= u), (d.value = d.done ? p : k);
    };
  let S, _;
  const T = (E) => {
    h(d.value) &&
      ((S = E),
      (_ = Kx({
        keyframes: [d.value, v(d.value)],
        velocity: Gx(g, E, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let C = !1;
        return !_ && S === void 0 && ((C = !0), b(E), T(E)), S !== void 0 && E >= S ? _.next(E - S) : (!C && b(E), d);
      },
    }
  );
}
const gD = ua(0.42, 0, 1, 1),
  wD = ua(0, 0, 0.58, 1),
  Yx = ua(0.42, 0, 0.58, 1),
  SD = (e) => Array.isArray(e) && typeof e[0] != "number",
  bD = {
    linear: pt,
    easeIn: gD,
    easeInOut: Yx,
    easeOut: wD,
    circIn: nm,
    circInOut: Rx,
    circOut: Ox,
    backIn: tm,
    backInOut: Cx,
    backOut: Px,
    anticipate: kx,
  },
  Iy = (e) => {
    if (Yp(e)) {
      Hb(e.length === 4);
      const [t, n, r, i] = e;
      return ua(t, n, r, i);
    } else if (typeof e == "string") return bD[e];
    return e;
  };
function xD(e, t, n) {
  const r = [],
    i = n || Hx,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || pt : t;
      a = ca(l, a);
    }
    r.push(a);
  }
  return r;
}
function _D(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Hb(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = xD(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = Xi(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(wn(e[0], e[o - 1], c)) : u;
}
function ED(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xi(0, t, r);
    e.push(we(n, 1, i));
  }
}
function TD(e) {
  const t = [0];
  return ED(t, e.length - 1), t;
}
function PD(e, t) {
  return e.map((n) => n * t);
}
function CD(e, t) {
  return e.map(() => t || Yx).splice(0, e.length - 1);
}
function uu({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = SD(r) ? r.map(Iy) : Iy(r),
    o = { done: !1, value: t[0] },
    s = PD(n && n.length === t.length ? n : TD(t), e),
    a = _D(s, t, { ease: Array.isArray(i) ? i : CD(t, i) });
  return { calculatedDuration: e, next: (l) => ((o.value = a(l)), (o.done = l >= e), o) };
}
const kD = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return { start: () => ve.update(t, !0), stop: () => ir(t), now: () => (Ve.isProcessing ? Ve.timestamp : Yt.now()) };
  },
  OD = { decay: Ay, inertia: Ay, tween: uu, keyframes: uu, spring: Kx },
  RD = (e) => e / 100;
class lm extends Qx {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || sm,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options,
      a = Kp(n) ? n : OD[n] || uu;
    let l, u;
    a !== uu && typeof t[0] != "number" && ((l = ca(RD, Hx(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" && (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = hx(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      h = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: h,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const { delay: d, repeat: h, repeatType: v, repeatDelay: y, onUpdate: w } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let g = this.currentTime,
      b = o;
    if (h) {
      const E = Math.min(this.currentTime, c) / f;
      let C = Math.floor(E),
        k = E % 1;
      !k && E >= 1 && (k = 1),
        k === 1 && C--,
        (C = Math.min(C, h + 1)),
        !!(C % 2) && (v === "reverse" ? ((k = 1 - k), y && (k -= y / f)) : v === "mirror" && (b = s)),
        (g = wn(0, 1, k) * f);
    }
    const S = m ? { done: !1, value: l[0] } : b.next(g);
    a && (S.value = a(S.value));
    let { done: _ } = S;
    !m && u !== null && (_ = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const T = this.holdTime === null && (this.state === "finished" || (this.state === "running" && _));
    return T && i !== void 0 && (S.value = Ju(l, this.options, i)), w && w(S.value), T && this.finish(), S;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? fn(t.calculatedDuration) : 0;
  }
  get time() {
    return fn(this.currentTime);
  }
  set time(t) {
    (t = cn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = fn(this.currentTime));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = kD, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"), (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(), (this.pendingPlayState = this.state = "finished"), (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const DD = new Set(["opacity", "clipPath", "filter", "transform"]);
function MD(
  e,
  t,
  n,
  { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vx(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const AD = Ip(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  cu = 10,
  ID = 2e4;
function LD(e) {
  return Kp(e.type) || e.type === "spring" || !mx(e.ease);
}
function FD(e, t) {
  const n = new lm({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < ID; ) (r = n.sample(o)), i.push(r.value), (o += cu);
  return { times: void 0, keyframes: i, duration: o - cu, ease: "linear" };
}
const Xx = { anticipate: kx, backInOut: Cx, circInOut: Rx };
function ND(e) {
  return e in Xx;
}
class Ly extends Qx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Wx(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if ((typeof o == "string" && au() && ND(o) && (o = Xx[o]), LD(this.options))) {
      const { onComplete: f, onUpdate: d, motionValue: h, element: v, ...y } = this.options,
        w = FD(t, y);
      (t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = w.duration),
        (i = w.times),
        (o = w.ease),
        (s = "keyframes");
    }
    const c = MD(a.owner.current, l, t, { ...this.options, duration: r, times: i, ease: o });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (gy(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            a.set(Ju(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return fn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return fn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = cn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return pt;
      const { animation: r } = n;
      gy(r, t);
    }
    return pt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")) return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...h } = this.options,
        v = new lm({ ...h, keyframes: r, duration: i, type: o, ease: s, times: a, isGenerator: !0 }),
        y = cn(this.time);
      u.setWithVelocity(v.sample(y - cu).value, v.sample(y).value, cu);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return AD() && r && DD.has(r) && !l && !u && !i && o !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const jD = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  VD = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
  $D = { type: "keyframes", duration: 0.8 },
  zD = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  BD = (e, { keyframes: t }) => (t.length > 2 ? $D : Gr.has(e) ? (e.startsWith("scale") ? VD(t[1]) : jD) : zD);
function UD({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const um =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Gp(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - cn(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), a.onUpdate && a.onUpdate(d);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    UD(a) || (c = { ...c, ...BD(e, c) }),
      c.duration && (c.duration = cn(c.duration)),
      c.repeatDelay && (c.repeatDelay = cn(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) && ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const d = Ju(c.keyframes, a);
      if (d !== void 0)
        return (
          ve.update(() => {
            c.onUpdate(d), c.onComplete();
          }),
          new lR([])
        );
    }
    return !o && Ly.supports(c) ? new Ly(c) : new lm(c);
  };
function WD({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Jx(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null),
      h = l[f];
    if (h === void 0 || (c && WD(c, f))) continue;
    const v = { delay: n, ...Gp(s || {}, f) };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const p = xx(e);
      if (p) {
        const m = window.MotionHandoffAnimation(p, f, ve);
        m !== null && ((v.startTime = m), (y = !0));
      }
    }
    Ld(e, f), d.start(um(f, d, h, e.shouldReduceMotion && Sx.has(f) ? { type: !1 } : v, e, y));
    const w = d.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        ve.update(() => {
          a && xR(e, a);
        });
      }),
    u
  );
}
function Bd(e, t, n = {}) {
  var r;
  const i = Xu(
    e,
    t,
    n.type === "exit" ? ((r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom) : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Jx(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
            return QD(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function QD(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(qD)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(Bd(u, t, { ...o, delay: n + l(c) }).then(() => u.notify("AnimationComplete", t)));
      }),
    Promise.all(s)
  );
}
function qD(e, t) {
  return e.sortNodePosition(t);
}
function HD(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Bd(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Bd(e, t, n);
  else {
    const i = typeof t == "function" ? Xu(e, t, n.custom) : t;
    r = Promise.all(Jx(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const GD = Fp.length;
function Zx(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Zx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < GD; n++) {
    const r = Fp[n],
      i = e.props[r];
    (Bs(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const KD = [...Lp].reverse(),
  YD = Lp.length;
function XD(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => HD(e, n, r)));
}
function JD(e) {
  let t = XD(e),
    n = Fy(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Xu(e, c, l === "exit" ? ((f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom) : void 0);
    if (d) {
      const { transition: h, transitionEnd: v, ...y } = d;
      u = { ...u, ...y, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Zx(e.parent) || {},
      f = [],
      d = new Set();
    let h = {},
      v = 1 / 0;
    for (let w = 0; w < YD; w++) {
      const p = KD[w],
        m = n[p],
        g = u[p] !== void 0 ? u[p] : c[p],
        b = Bs(g),
        S = p === l ? m.isActive : null;
      S === !1 && (v = w);
      let _ = g === c[p] && g !== u[p] && b;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (m.protectedKeys = { ...h }),
        (!m.isActive && S === null) || (!g && !m.prevProp) || Ku(g) || typeof g == "boolean")
      )
        continue;
      const T = ZD(m.prevProp, g);
      let E = T || (p === l && m.isActive && !_ && b) || (w > v && b),
        C = !1;
      const k = Array.isArray(g) ? g : [g];
      let D = k.reduce(i(p), {});
      S === !1 && (D = {});
      const { prevResolvedValues: R = {} } = m,
        F = { ...R, ...D },
        L = (z) => {
          (E = !0), d.has(z) && ((C = !0), d.delete(z)), (m.needsAnimating[z] = !0);
          const M = e.getValue(z);
          M && (M.liveStyle = !1);
        };
      for (const z in F) {
        const M = D[z],
          I = R[z];
        if (h.hasOwnProperty(z)) continue;
        let j = !1;
        Md(M) && Md(I) ? (j = !dx(M, I)) : (j = M !== I),
          j ? (M != null ? L(z) : d.add(z)) : M !== void 0 && d.has(z) ? L(z) : (m.protectedKeys[z] = !0);
      }
      (m.prevProp = g),
        (m.prevResolvedValues = D),
        m.isActive && (h = { ...h, ...D }),
        r && e.blockInitialAnimation && (E = !1),
        E && (!(_ && T) || C) && f.push(...k.map((z) => ({ animation: z, options: { type: p } })));
    }
    if (d.size) {
      const w = {};
      d.forEach((p) => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p);
        g && (g.liveStyle = !0), (w[p] = m ?? null);
      }),
        f.push({ animation: w });
    }
    let y = !!f.length;
    return (
      r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var h;
        return (h = d.animationState) === null || h === void 0 ? void 0 : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Fy()), (r = !0);
    },
  };
}
function ZD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dx(t, e) : !1;
}
function mr(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Fy() {
  return {
    animate: mr(!0),
    whileInView: mr(),
    whileHover: mr(),
    whileTap: mr(),
    whileDrag: mr(),
    whileFocus: mr(),
    exit: mr(),
  };
}
class hr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class eM extends hr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = JD(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ku(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let tM = 0;
class nM extends hr {
  constructor() {
    super(...arguments), (this.id = tM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const rM = { animation: { Feature: eM }, exit: { Feature: nM } };
function qs(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function fa(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const iM = (e) => (t) => Xp(t) && e(t, fa(t));
function vs(e, t, n, r) {
  return qs(e, t, iM(n), r);
}
const Ny = (e, t) => Math.abs(e - t);
function oM(e, t) {
  const n = Ny(e.x, t.x),
    r = Ny(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class e_ {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = sf(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          h = oM(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !h) return;
        const { point: v } = f,
          { timestamp: y } = Ve;
        this.history.push({ ...v, timestamp: y });
        const { onStart: w, onMove: p } = this.handlers;
        d || (w && w(this.lastMoveEvent, f), (this.startEvent = this.lastMoveEvent)), p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = of(d, this.transformPagePoint)),
          ve.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: h, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if ((this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
        const w = sf(
          f.type === "pointercancel" ? this.lastMoveEventInfo : of(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(f, w), v && v(f, w);
      }),
      !Xp(t))
    )
      return;
    (this.dragSnapToOrigin = o), (this.handlers = n), (this.transformPagePoint = r), (this.contextWindow = i || window);
    const s = fa(t),
      a = of(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Ve;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, sf(a, this.history)),
      (this.removeListeners = ca(
        vs(this.contextWindow, "pointermove", this.handlePointerMove),
        vs(this.contextWindow, "pointerup", this.handlePointerUp),
        vs(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ir(this.updatePoint);
  }
}
function of(e, t) {
  return t ? { point: t(e.point) } : e;
}
function jy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function sf({ point: e }, t) {
  return { point: e, delta: jy(e, t_(t)), offset: jy(e, sM(t)), velocity: aM(t, 0.1) };
}
function sM(e) {
  return e[0];
}
function t_(e) {
  return e[e.length - 1];
}
function aM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = t_(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > cn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = fn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const n_ = 1e-4,
  lM = 1 - n_,
  uM = 1 + n_,
  r_ = 0.01,
  cM = 0 - r_,
  fM = 0 + r_;
function vt(e) {
  return e.max - e.min;
}
function dM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Vy(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = we(t.min, t.max, e.origin)),
    (e.scale = vt(n) / vt(t)),
    (e.translate = we(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= lM && e.scale <= uM) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= cM && e.translate <= fM) || isNaN(e.translate)) && (e.translate = 0);
}
function ys(e, t, n, r) {
  Vy(e.x, t.x, n.x, r ? r.originX : void 0), Vy(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $y(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + vt(t));
}
function hM(e, t, n) {
  $y(e.x, t.x, n.x), $y(e.y, t.y, n.y);
}
function zy(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + vt(t));
}
function gs(e, t, n) {
  zy(e.x, t.x, n.x), zy(e.y, t.y, n.y);
}
function pM(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? we(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? we(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function By(e, t, n) {
  return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function mM(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: By(e.x, n, i), y: By(e.y, t, r) };
}
function Uy(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function vM(e, t) {
  return { x: Uy(e.x, t.x), y: Uy(e.y, t.y) };
}
function yM(e, t) {
  let n = 0.5;
  const r = vt(e),
    i = vt(t);
  return i > r ? (n = Xi(t.min, t.max - r, e.min)) : r > i && (n = Xi(e.min, e.max - i, t.min)), wn(0, 1, n);
}
function gM(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ud = 0.35;
function wM(e = Ud) {
  return e === !1 ? (e = 0) : e === !0 && (e = Ud), { x: Wy(e, "left", "right"), y: Wy(e, "top", "bottom") };
}
function Wy(e, t, n) {
  return { min: Qy(e, t), max: Qy(e, n) };
}
function Qy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const qy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  bi = () => ({ x: qy(), y: qy() }),
  Hy = () => ({ min: 0, max: 0 }),
  Ce = () => ({ x: Hy(), y: Hy() });
function _t(e) {
  return [e("x"), e("y")];
}
function i_({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function SM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function bM(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function af(e) {
  return e === void 0 || e === 1;
}
function Wd({ scale: e, scaleX: t, scaleY: n }) {
  return !af(e) || !af(t) || !af(n);
}
function Sr(e) {
  return Wd(e) || o_(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function o_(e) {
  return Gy(e.x) || Gy(e.y);
}
function Gy(e) {
  return e && e !== "0%";
}
function fu(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ky(e, t, n, r, i) {
  return i !== void 0 && (e = fu(e, i, r)), fu(e, n, r) + t;
}
function Qd(e, t = 0, n = 1, r, i) {
  (e.min = Ky(e.min, t, n, r, i)), (e.max = Ky(e.max, t, n, r, i));
}
function s_(e, { x: t, y: n }) {
  Qd(e.x, t.translate, t.scale, t.originPoint), Qd(e.y, n.translate, n.scale, n.originPoint);
}
const Yy = 0.999999999999,
  Xy = 1.0000000000001;
function xM(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        _i(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), s_(e, s)),
      r && Sr(o.latestValues) && _i(e, o.latestValues));
  }
  t.x < Xy && t.x > Yy && (t.x = 1), t.y < Xy && t.y > Yy && (t.y = 1);
}
function xi(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Jy(e, t, n, r, i = 0.5) {
  const o = we(e.min, e.max, i);
  Qd(e, t, n, o, r);
}
function _i(e, t) {
  Jy(e.x, t.x, t.scaleX, t.scale, t.originX), Jy(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function a_(e, t) {
  return i_(bM(e.getBoundingClientRect(), t));
}
function _M(e, t, n) {
  const r = a_(e, n),
    { scroll: i } = t;
  return i && (xi(r.x, i.offset.x), xi(r.y, i.offset.y)), r;
}
const l_ = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  EM = new WeakMap();
class TM {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ce()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(fa(c).point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: h, onDragStart: v } = this.getProps();
        if (d && !h && (this.openDragLock && this.openDragLock(), (this.openDragLock = yR(d)), !this.openDragLock))
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
          _t((w) => {
            let p = this.getAxisMotionValue(w).get() || 0;
            if (Kt.test(p)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const g = m.layout.layoutBox[w];
                g && (p = vt(g) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[w] = p;
          }),
          v && ve.postRender(() => v(c, f)),
          Ld(this.visualElement, "transform");
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const { dragPropagation: d, dragDirectionLock: h, onDirectionLock: v, onDrag: y } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: w } = f;
        if (h && this.currentDirection === null) {
          (this.currentDirection = PM(w)), this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, w), this.updateAxis("y", f.point, w), this.visualElement.render(), y && y(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        _t((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new e_(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: a, resumeAnimation: l },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: l_(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && ve.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ga(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = pM(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    n && wi(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = mM(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = wM(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _t((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = gM(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !wi(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = _M(r, i.root, this.visualElement.getTransformPagePoint());
    let s = vM(i.layout.layoutBox, o);
    if (n) {
      const a = n(SM(s));
      (this.hasMutatedConstraints = !!a), a && (s = i_(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = _t((c) => {
        if (!Ga(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Ld(this.visualElement, t), r.start(um(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    _t((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _t((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    _t((n) => {
      const { drag: r } = this.getProps();
      if (!Ga(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - we(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!wi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _t((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = yM({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _t((s) => {
        if (!Ga(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(we(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    EM.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = vs(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        wi(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ve.read(r);
    const s = qs(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (_t((c) => {
            const f = this.getAxisMotionValue(c);
            f && ((this.originPoint[c] += l[c].translate), f.set(f.get() + l[c].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Ud,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ga(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function PM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class CM extends hr {
  constructor(t) {
    super(t), (this.removeGroupControls = pt), (this.removeListeners = pt), (this.controls = new TM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || pt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Zy = (e) => (t, n) => {
  e && ve.postRender(() => e(t, n));
};
class kM extends hr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = pt);
  }
  onPointerDown(t) {
    this.session = new e_(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: l_(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Zy(t),
      onStart: Zy(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && ve.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = vs(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const gl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function eg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ao = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (W.test(e)) e = parseFloat(e);
        else return e;
      const n = eg(e, t.target.x),
        r = eg(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  OM = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = or.parse(e);
      if (i.length > 5) return r;
      const o = or.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = we(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    },
  };
class RM extends x.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: o } = t;
    YO(DM),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (gl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ve.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      jp.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function u_(e) {
  const [t, n] = Qb(),
    r = x.useContext(Rp);
  return O.jsx(RM, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(Zb), isPresent: t, safeToRemove: n });
}
const DM = {
  borderRadius: {
    ...Ao,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
  },
  borderTopLeftRadius: Ao,
  borderTopRightRadius: Ao,
  borderBottomLeftRadius: Ao,
  borderBottomRightRadius: Ao,
  boxShadow: OM,
};
function MM(e, t, n) {
  const r = He(e) ? e : Ws(e);
  return r.start(um("", r, t, n)), r.animation;
}
function AM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const IM = (e, t) => e.depth - t.depth;
class LM {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Jp(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Zp(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(IM), (this.isDirty = !1), this.children.forEach(t);
  }
}
function FM(e, t) {
  const n = Yt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (ir(r), e(o - t));
    };
  return ve.read(r, !0), () => ir(r);
}
const c_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  NM = c_.length,
  tg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ng = (e) => typeof e == "number" || W.test(e);
function jM(e, t, n, r, i, o) {
  i
    ? ((e.opacity = we(0, n.opacity !== void 0 ? n.opacity : 1, VM(r))),
      (e.opacityExit = we(t.opacity !== void 0 ? t.opacity : 1, 0, $M(r))))
    : o && (e.opacity = we(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < NM; s++) {
    const a = `border${c_[s]}Radius`;
    let l = rg(t, a),
      u = rg(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || ng(l) === ng(u)
        ? ((e[a] = Math.max(we(tg(l), tg(u), r), 0)), (Kt.test(u) || Kt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = we(t.rotate || 0, n.rotate || 0, r));
}
function rg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const VM = f_(0, 0.5, Ox),
  $M = f_(0.5, 0.95, pt);
function f_(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xi(e, t, r)));
}
function ig(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function wt(e, t) {
  ig(e.x, t.x), ig(e.y, t.y);
}
function og(e, t) {
  (e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin);
}
function sg(e, t, n, r, i) {
  return (e -= t), (e = fu(e, 1 / n, r)), i !== void 0 && (e = fu(e, 1 / i, r)), e;
}
function zM(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if ((Kt.test(t) && ((t = parseFloat(t)), (t = we(s.min, s.max, t / 100) - s.min)), typeof t != "number")) return;
  let a = we(o.min, o.max, r);
  e === o && (a -= t), (e.min = sg(e.min, t, n, a, i)), (e.max = sg(e.max, t, n, a, i));
}
function ag(e, t, [n, r, i], o, s) {
  zM(e, t[n], t[r], t[i], t.scale, o, s);
}
const BM = ["x", "scaleX", "originX"],
  UM = ["y", "scaleY", "originY"];
function lg(e, t, n, r) {
  ag(e.x, t, BM, n ? n.x : void 0, r ? r.x : void 0), ag(e.y, t, UM, n ? n.y : void 0, r ? r.y : void 0);
}
function ug(e) {
  return e.translate === 0 && e.scale === 1;
}
function d_(e) {
  return ug(e.x) && ug(e.y);
}
function cg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function WM(e, t) {
  return cg(e.x, t.x) && cg(e.y, t.y);
}
function fg(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function h_(e, t) {
  return fg(e.x, t.x) && fg(e.y, t.y);
}
function dg(e) {
  return vt(e.x) / vt(e.y);
}
function hg(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class QM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((Zp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qM(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: h, skewY: v } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const br = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 },
  Ko = typeof window < "u" && window.MotionDebug !== void 0,
  lf = ["", "X", "Y", "Z"],
  HM = { visibility: "hidden" },
  pg = 1e3;
let GM = 0;
function uf(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function p_(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = xx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ve, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && p_(r);
}
function m_({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = GM++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ko && (br.totalNodes = br.resolvedTargetDeltas = br.recalculatedProjection = 0),
            this.nodes.forEach(XM),
            this.nodes.forEach(nA),
            this.nodes.forEach(rA),
            this.nodes.forEach(JM),
            Ko && window.MotionDebug.record(br);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new LM());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new em()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = AM(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = FM(d, 250)),
            gl.hasAnimatedSinceResize && ((gl.hasAnimatedSinceResize = !1), this.nodes.forEach(vg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: v }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y = this.options.transition || c.getDefaultTransition() || lA,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: p } = c.getProps(),
                m = !this.targetLayout || !h_(this.targetLayout, v) || h,
                g = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const b = { ...Gp(y, "layout"), onPlay: w, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) && ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b);
              } else d || vg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ir(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(iA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && p_(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0), f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mg);
        return;
      }
      this.isUpdating || this.nodes.forEach(eA),
        (this.isUpdating = !1),
        this.nodes.forEach(tA),
        this.nodes.forEach(KM),
        this.nodes.forEach(YM),
        this.clearAllSnapshots();
      const a = Yt.now();
      (Ve.delta = wn(0, 1e3 / 60, a - Ve.timestamp)),
        (Ve.timestamp = a),
        (Ve.isProcessing = !0),
        Zc.update.process(Ve),
        Zc.preRender.process(Ve),
        Zc.render.process(Ve),
        (Ve.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), jp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ZM), this.sharedNodes.forEach(oA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ce()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !d_(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Sr(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        uA(l),
        { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return Ce();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(cA))) {
        const { scroll: c } = this.root;
        c && (xi(l.x, c.offset.x), xi(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = Ce();
      if ((wt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)) return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && wt(l, s), xi(l.x, f.offset.x), xi(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = Ce();
      wt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          _i(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Sr(c.latestValues) && _i(l, c.latestValues);
      }
      return Sr(this.latestValues) && _i(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ce();
      wt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Sr(u.latestValues)) continue;
        Wd(u.latestValues) && u.updateSnapshot();
        const c = Ce(),
          f = u.measurePageBox();
        wt(c, f), lg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Sr(this.latestValues) && lg(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ve.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (((this.resolvedRelativeTargetAt = Ve.timestamp), !this.targetDelta && !this.relativeTarget)) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ce()),
              (this.relativeTargetOrigin = Ce()),
              gs(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ce()), (this.targetWithTransforms = Ce())),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                hM(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : wt(this.target, this.layout.layoutBox),
                  s_(this.target, this.targetDelta))
                : wt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ce()),
                (this.relativeTargetOrigin = Ce()),
                gs(this.relativeTargetOrigin, this.target, h.target),
                wt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ko && br.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Wd(this.parent.latestValues) || o_(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty || (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) && (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === Ve.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      wt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      xM(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ce()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (og(this.prevProjectionDelta.x, this.projectionDelta.x),
          og(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ys(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== h ||
          !hg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", v)),
        Ko && br.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = bi()), (this.projectionDelta = bi()), (this.projectionDeltaWithTransform = bi());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = bi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = Ce(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = h !== v,
        w = this.getStack(),
        p = !w || w.members.length <= 1,
        m = !!(y && !p && this.options.crossfade === !0 && !this.path.some(aA));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (b) => {
        const S = b / 1e3;
        yg(f.x, s.x, S),
          yg(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (gs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            sA(this.relativeTarget, this.relativeTargetOrigin, d, S),
            g && WM(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ce()),
            wt(g, this.relativeTarget)),
          y && ((this.animationValues = c), jM(c, u, this.latestValues, S, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (ir(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ve.update(() => {
          (gl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = MM(0, pg, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pg), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
      if (!(!a || !l || !u)) {
        if (this !== s && this.layout && u && v_(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Ce();
          const f = vt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = vt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        wt(a, l), _i(a, c), ys(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new QM()), this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)) return;
      const u = {};
      l.z && uf("z", s, u, this.animationValues);
      for (let c = 0; c < lf.length; c++)
        uf(`rotate${lf[c]}`, s, u, this.animationValues), uf(`skew${lf[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return HM;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = vl(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (y.pointerEvents = vl(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Sr(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = qM(this.projectionDeltaWithTransform, this.treeScale, d)),
        c && (u.transform = c(d, u.transform));
      const { x: h, y: v } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null &&
                  l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this ? (d.opacity !== void 0 ? d.opacity : "") : d.opacityExit !== void 0 ? d.opacityExit : 0);
      for (const y in su) {
        if (d[y] === void 0) continue;
        const { correct: w, applyTo: p } = su[y],
          m = u.transform === "none" ? d[y] : w(d[y], f);
        if (p) {
          const g = p.length;
          for (let b = 0; b < g; b++) u[p[b]] = m;
        } else u[y] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? vl(s == null ? void 0 : s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(mg),
        this.root.sharedNodes.clear();
    }
  };
}
function KM(e) {
  e.updateLayout();
}
function YM(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? _t((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = vt(d);
          (d.min = r[f].min), (d.max = d.min + h);
        })
      : v_(o, n.layoutBox, r) &&
        _t((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = vt(r[f]);
          (d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    const a = bi();
    ys(a, r, n.layoutBox);
    const l = bi();
    s ? ys(l, e.applyTransform(i, !0), n.measuredBox) : ys(l, r, n.layoutBox);
    const u = !d_(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const v = Ce();
          gs(v, n.layoutBox, d.layoutBox);
          const y = Ce();
          gs(y, r, h.layoutBox),
            h_(v, y) || (c = !0),
            f.options.layoutRoot && ((e.relativeTarget = y), (e.relativeTargetOrigin = v), (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function XM(e) {
  Ko && br.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function JM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ZM(e) {
  e.clearSnapshot();
}
function mg(e) {
  e.clearMeasurements();
}
function eA(e) {
  e.isLayoutDirty = !1;
}
function tA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function vg(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function nA(e) {
  e.resolveTargetDelta();
}
function rA(e) {
  e.calcProjection();
}
function iA(e) {
  e.resetSkewAndRotation();
}
function oA(e) {
  e.removeLeadSnapshot();
}
function yg(e, t, n) {
  (e.translate = we(t.translate, 0, n)),
    (e.scale = we(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function gg(e, t, n, r) {
  (e.min = we(t.min, n.min, r)), (e.max = we(t.max, n.max, r));
}
function sA(e, t, n, r) {
  gg(e.x, t.x, n.x, r), gg(e.y, t.y, n.y, r);
}
function aA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const lA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wg = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Sg = wg("applewebkit/") && !wg("chrome/") ? Math.round : pt;
function bg(e) {
  (e.min = Sg(e.min)), (e.max = Sg(e.max));
}
function uA(e) {
  bg(e.x), bg(e.y);
}
function v_(e, t, n) {
  return e === "position" || (e === "preserve-aspect" && !dM(dg(t), dg(n), 0.2));
}
function cA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const fA = m_({
    attachResizeListener: (e, t) => qs(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  cf = { current: void 0 },
  y_ = m_({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!cf.current) {
        const e = new fA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (cf.current = e);
      }
      return cf.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  dA = { pan: { Feature: kM }, drag: { Feature: CM, ProjectionNode: y_, MeasureLayout: u_ } };
function xg(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && ve.postRender(() => o(t, fa(t)));
}
class hA extends hr {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = dR(t, (n) => (xg(this.node, n, "Start"), (r) => xg(this.node, r, "End"))));
  }
  unmount() {}
}
class pA extends hr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = ca(
      qs(this.node.current, "focus", () => this.onFocus()),
      qs(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function _g(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && ve.postRender(() => o(t, fa(t)));
}
class mA extends hr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = vR(
        t,
        (n) => (_g(this.node, n, "Start"), (r, { success: i }) => _g(this.node, r, i ? "End" : "Cancel")),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const qd = new WeakMap(),
  ff = new WeakMap(),
  vA = (e) => {
    const t = qd.get(e.target);
    t && t(e);
  },
  yA = (e) => {
    e.forEach(vA);
  };
function gA({ root: e, ...t }) {
  const n = e || document;
  ff.has(n) || ff.set(n, {});
  const r = ff.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(yA, { root: e, ...t })), r[i];
}
function wA(e, t, n) {
  const r = gA(t);
  return (
    qd.set(e, n),
    r.observe(e),
    () => {
      qd.delete(e), r.unobserve(e);
    }
  );
}
const SA = { some: 0, all: 1 };
class bA extends hr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == "number" ? i : SA[i] },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return wA(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(xA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function xA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const _A = { inView: { Feature: bA }, tap: { Feature: mA }, focus: { Feature: pA }, hover: { Feature: hA } },
  EA = { layout: { ProjectionNode: y_, MeasureLayout: u_ } },
  Hd = { current: null },
  g_ = { current: !1 };
function TA() {
  if (((g_.current = !0), !!Ap))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Hd.current = e.matches);
      e.addListener(t), t();
    } else Hd.current = !1;
}
const PA = [...Ux, Qe, or],
  CA = (e) => PA.find(Bx(e)),
  Eg = new WeakMap();
function kA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (He(i)) e.addValue(r, i);
    else if (He(o)) e.addValue(r, Ws(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Ws(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Tg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class OA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    { parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = sm),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Yt.now();
        this.renderScheduledAt < h && ((this.renderScheduledAt = h), ve.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    (this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Yu(n)),
      (this.isVariantNode = Xb(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const v = d[h];
      l[h] !== void 0 && He(v) && v.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Eg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      g_.current || TA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Hd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Eg.delete(this.current),
      this.projection && this.projection.unmount(),
      ir(this.notifyUpdate),
      ir(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Gr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ve.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ji) {
      const n = Ji[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if ((!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t])) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Tg.length; r++) {
      const i = Tg[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = kA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && ((r = Ws(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)), r;
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && ($x(i) || Dx(i)) ? (i = parseFloat(i)) : !CA(i) && or.test(n) && (i = Nx(t, n)),
        this.setBaseTarget(t, He(i) ? i.get() : i)),
      He(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = $p(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !He(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new em()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class w_ extends OA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Wx);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    He(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function RA(e) {
  return window.getComputedStyle(e);
}
class DA extends w_ {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = sx);
  }
  readValueFromInstance(t, n) {
    if (Gr.has(n)) {
      const r = om(n);
      return (r && r.default) || 0;
    } else {
      const r = RA(t),
        i = (rx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return a_(t, n);
  }
  build(t, n, r) {
    Up(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Hp(t, n, r);
  }
}
class MA extends w_ {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = Ce);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Gr.has(n)) {
      const r = om(n);
      return (r && r.default) || 0;
    }
    return (n = ax.has(n) ? n : Np(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return cx(t, n, r);
  }
  build(t, n, r) {
    Wp(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    lx(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = qp(t.tagName)), super.mount(t);
  }
}
const AA = (e, t) => (Vp(e) ? new MA(t) : new DA(t, { allowProjection: e !== x.Fragment })),
  IA = oR({ ...rM, ..._A, ...dA, ...EA }, AA),
  LA = SO(IA),
  H = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: !1,
    getContextId() {
      return Pg(this.context.count);
    },
    getNextContextId() {
      return Pg(this.context.count++);
    },
  };
function Pg(e) {
  const t = String(e),
    n = t.length - 1;
  return H.context.id + (n ? String.fromCharCode(96 + n) : "") + t;
}
function Yo(e) {
  H.context = e;
}
const S_ = !1,
  FA = (e, t) => e === t,
  du = Symbol("solid-proxy"),
  b_ = typeof Proxy == "function",
  hu = { equals: FA };
let x_ = P_;
const Tn = 1,
  pu = 2,
  __ = { owned: null, cleanups: null, context: null, owner: null },
  df = {};
var Oe = null;
let hf = null,
  NA = null,
  _e = null,
  Ge = null,
  dn = null,
  Zu = 0;
function jA(e, t) {
  const n = _e,
    r = Oe,
    i = e.length === 0,
    o = t === void 0 ? r : t,
    s = i ? __ : { owned: null, cleanups: null, context: o ? o.context : null, owner: o },
    a = i ? e : () => e(() => Sn(() => Hs(s)));
  (Oe = s), (_e = null);
  try {
    return Ur(a, !0);
  } finally {
    (_e = n), (Oe = r);
  }
}
function Wn(e, t) {
  t = t ? Object.assign({}, hu, t) : hu;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 },
    r = (i) => (typeof i == "function" && (i = i(n.value)), T_(n, i));
  return [E_.bind(n), r];
}
function VA(e, t, n) {
  const r = ec(e, t, !0, Tn);
  uo(r);
}
function Fr(e, t, n) {
  const r = ec(e, t, !1, Tn);
  uo(r);
}
function h5(e, t, n) {
  x_ = qA;
  const r = ec(e, t, !1, Tn);
  (!n || !n.render) && (r.user = !0), dn ? dn.push(r) : uo(r);
}
function Br(e, t, n) {
  n = n ? Object.assign({}, hu, n) : hu;
  const r = ec(e, t, !0, 0);
  return (r.observers = null), (r.observerSlots = null), (r.comparator = n.equals || void 0), uo(r), E_.bind(r);
}
function $A(e) {
  return e && typeof e == "object" && "then" in e;
}
function zA(e, t, n) {
  let r, i, o;
  (r = !0), (i = e), (o = {});
  let s = null,
    a = df,
    l = null,
    u = !1,
    c = "initialValue" in o,
    f = typeof r == "function" && Br(r);
  const d = new Set(),
    [h, v] = (o.storage || Wn)(o.initialValue),
    [y, w] = Wn(void 0),
    [p, m] = Wn(void 0, { equals: !1 }),
    [g, b] = Wn(c ? "ready" : "unresolved");
  H.context &&
    ((l = H.getNextContextId()),
    o.ssrLoadFrom === "initial" ? (a = o.initialValue) : H.load && H.has(l) && (a = H.load(l)));
  function S(C, k, D, R) {
    return (
      s === C &&
        ((s = null),
        R !== void 0 && (c = !0),
        (C === a || k === a) && o.onHydrated && queueMicrotask(() => o.onHydrated(R, { value: k })),
        (a = df),
        _(k, D)),
      k
    );
  }
  function _(C, k) {
    Ur(() => {
      k === void 0 && v(() => C), b(k !== void 0 ? "errored" : c ? "ready" : "unresolved"), w(k);
      for (const D of d.keys()) D.decrement();
      d.clear();
    }, !1);
  }
  function T() {
    const C = UA,
      k = h(),
      D = y();
    if (D !== void 0 && !s) throw D;
    return _e && _e.user, k;
  }
  function E(C = !0) {
    if (C !== !1 && u) return;
    u = !1;
    const k = f ? f() : r;
    if (k == null || k === !1) {
      S(s, Sn(h));
      return;
    }
    const D = a !== df ? a : Sn(() => i(k, { value: h(), refetching: C }));
    return $A(D)
      ? ((s = D),
        "value" in D
          ? (D.status === "success" ? S(s, D.value, void 0, k) : S(s, void 0, Gd(D.value), k), D)
          : ((u = !0),
            queueMicrotask(() => (u = !1)),
            Ur(() => {
              b(c ? "refreshing" : "pending"), m();
            }, !1),
            D.then(
              (R) => S(D, R, void 0, k),
              (R) => S(D, void 0, Gd(R), k)
            )))
      : (S(s, D, void 0, k), D);
  }
  return (
    Object.defineProperties(T, {
      state: { get: () => g() },
      error: { get: () => y() },
      loading: {
        get() {
          const C = g();
          return C === "pending" || C === "refreshing";
        },
      },
      latest: {
        get() {
          if (!c) return T();
          const C = y();
          if (C && !s) throw C;
          return h();
        },
      },
    }),
    f ? VA(() => E(!1)) : E(!1),
    [T, { refetch: E, mutate: v }]
  );
}
function Sn(e) {
  if (_e === null) return e();
  const t = _e;
  _e = null;
  try {
    return e();
  } finally {
    _e = t;
  }
}
const [p5, m5] = Wn(!1);
function v5(e, t) {
  const n = Symbol("context");
  return { id: n, Provider: HA(n), defaultValue: e };
}
function y5(e) {
  let t;
  return Oe && Oe.context && (t = Oe.context[e.id]) !== void 0 ? t : e.defaultValue;
}
function BA(e) {
  const t = Br(e),
    n = Br(() => Kd(t()));
  return (
    (n.toArray = () => {
      const r = n();
      return Array.isArray(r) ? r : r != null ? [r] : [];
    }),
    n
  );
}
let UA;
function E_() {
  if (this.sources && this.state)
    if (this.state === Tn) uo(this);
    else {
      const e = Ge;
      (Ge = null), Ur(() => vu(this), !1), (Ge = e);
    }
  if (_e) {
    const e = this.observers ? this.observers.length : 0;
    _e.sources ? (_e.sources.push(this), _e.sourceSlots.push(e)) : ((_e.sources = [this]), (_e.sourceSlots = [e])),
      this.observers
        ? (this.observers.push(_e), this.observerSlots.push(_e.sources.length - 1))
        : ((this.observers = [_e]), (this.observerSlots = [_e.sources.length - 1]));
  }
  return this.value;
}
function T_(e, t, n) {
  let r = e.value;
  return (
    (!e.comparator || !e.comparator(r, t)) &&
      ((e.value = t),
      e.observers &&
        e.observers.length &&
        Ur(() => {
          for (let i = 0; i < e.observers.length; i += 1) {
            const o = e.observers[i],
              s = hf && hf.running;
            s && hf.disposed.has(o),
              (s ? !o.tState : !o.state) && (o.pure ? Ge.push(o) : dn.push(o), o.observers && C_(o)),
              s || (o.state = Tn);
          }
          if (Ge.length > 1e6) throw ((Ge = []), new Error());
        }, !1)),
    t
  );
}
function uo(e) {
  if (!e.fn) return;
  Hs(e);
  const t = Zu;
  WA(e, e.value, t);
}
function WA(e, t, n) {
  let r;
  const i = Oe,
    o = _e;
  _e = Oe = e;
  try {
    r = e.fn(t);
  } catch (s) {
    return e.pure && ((e.state = Tn), e.owned && e.owned.forEach(Hs), (e.owned = null)), (e.updatedAt = n + 1), k_(s);
  } finally {
    (_e = o), (Oe = i);
  }
  (!e.updatedAt || e.updatedAt <= n) &&
    (e.updatedAt != null && "observers" in e ? T_(e, r) : (e.value = r), (e.updatedAt = n));
}
function ec(e, t, n, r = Tn, i) {
  const o = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: Oe,
    context: Oe ? Oe.context : null,
    pure: n,
  };
  return Oe === null || (Oe !== __ && (Oe.owned ? Oe.owned.push(o) : (Oe.owned = [o]))), o;
}
function mu(e) {
  if (e.state === 0) return;
  if (e.state === pu) return vu(e);
  if (e.suspense && Sn(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < Zu); ) e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (((e = t[n]), e.state === Tn)) uo(e);
    else if (e.state === pu) {
      const r = Ge;
      (Ge = null), Ur(() => vu(e, t[0]), !1), (Ge = r);
    }
}
function Ur(e, t) {
  if (Ge) return e();
  let n = !1;
  t || (Ge = []), dn ? (n = !0) : (dn = []), Zu++;
  try {
    const r = e();
    return QA(n), r;
  } catch (r) {
    n || (dn = null), (Ge = null), k_(r);
  }
}
function QA(e) {
  if ((Ge && (P_(Ge), (Ge = null)), e)) return;
  const t = dn;
  (dn = null), t.length && Ur(() => x_(t), !1);
}
function P_(e) {
  for (let t = 0; t < e.length; t++) mu(e[t]);
}
function qA(e) {
  let t,
    n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? (e[n++] = r) : mu(r);
  }
  if (H.context) {
    if (H.count) {
      H.effects || (H.effects = []), H.effects.push(...e.slice(0, n));
      return;
    }
    Yo();
  }
  for (
    H.effects && (H.done || !H.count) && ((e = [...H.effects, ...e]), (n += H.effects.length), delete H.effects), t = 0;
    t < n;
    t++
  )
    mu(e[t]);
}
function vu(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const r = e.sources[n];
    if (r.sources) {
      const i = r.state;
      i === Tn ? r !== t && (!r.updatedAt || r.updatedAt < Zu) && mu(r) : i === pu && vu(r, t);
    }
  }
}
function C_(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || ((n.state = pu), n.pure ? Ge.push(n) : dn.push(n), n.observers && C_(n));
  }
}
function Hs(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(),
        r = e.sourceSlots.pop(),
        i = n.observers;
      if (i && i.length) {
        const o = i.pop(),
          s = n.observerSlots.pop();
        r < i.length && ((o.sourceSlots[s] = r), (i[r] = o), (n.observerSlots[r] = s));
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) Hs(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) Hs(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Gd(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
}
function k_(e, t = Oe) {
  throw Gd(e);
}
function Kd(e) {
  if (typeof e == "function" && !e.length) return Kd(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = Kd(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r);
    }
    return t;
  }
  return e;
}
function HA(e, t) {
  return function (r) {
    let i;
    return Fr(() => (i = Sn(() => ((Oe.context = { ...Oe.context, [e]: r.value }), BA(() => r.children)))), void 0), i;
  };
}
function GA(e, t) {
  return Sn(() => e(t || {}));
}
function Ka() {
  return !0;
}
const Yd = {
  get(e, t, n) {
    return t === du ? n : e.get(t);
  },
  has(e, t) {
    return t === du ? !0 : e.has(t);
  },
  set: Ka,
  deleteProperty: Ka,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Ka,
      deleteProperty: Ka,
    };
  },
  ownKeys(e) {
    return e.keys();
  },
};
function pf(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function KA() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0) return n;
  }
}
function g5(...e) {
  let t = !1;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    (t = t || (!!a && du in a)), (e[s] = typeof a == "function" ? ((t = !0), Br(a)) : a);
  }
  if (b_ && t)
    return new Proxy(
      {
        get(s) {
          for (let a = e.length - 1; a >= 0; a--) {
            const l = pf(e[a])[s];
            if (l !== void 0) return l;
          }
        },
        has(s) {
          for (let a = e.length - 1; a >= 0; a--) if (s in pf(e[a])) return !0;
          return !1;
        },
        keys() {
          const s = [];
          for (let a = 0; a < e.length; a++) s.push(...Object.keys(pf(e[a])));
          return [...new Set(s)];
        },
      },
      Yd
    );
  const n = {},
    r = Object.create(null);
  for (let s = e.length - 1; s >= 0; s--) {
    const a = e[s];
    if (!a) continue;
    const l = Object.getOwnPropertyNames(a);
    for (let u = l.length - 1; u >= 0; u--) {
      const c = l[u];
      if (c === "__proto__" || c === "constructor") continue;
      const f = Object.getOwnPropertyDescriptor(a, c);
      if (!r[c])
        r[c] = f.get
          ? { enumerable: !0, configurable: !0, get: KA.bind((n[c] = [f.get.bind(a)])) }
          : f.value !== void 0
            ? f
            : void 0;
      else {
        const d = n[c];
        d && (f.get ? d.push(f.get.bind(a)) : f.value !== void 0 && d.push(() => f.value));
      }
    }
  }
  const i = {},
    o = Object.keys(r);
  for (let s = o.length - 1; s >= 0; s--) {
    const a = o[s],
      l = r[a];
    l && l.get ? Object.defineProperty(i, a, l) : (i[a] = l ? l.value : void 0);
  }
  return i;
}
function YA(e, ...t) {
  if (b_ && du in e) {
    const i = new Set(t.length > 1 ? t.flat() : t[0]),
      o = t.map(
        (s) =>
          new Proxy(
            {
              get(a) {
                return s.includes(a) ? e[a] : void 0;
              },
              has(a) {
                return s.includes(a) && a in e;
              },
              keys() {
                return s.filter((a) => a in e);
              },
            },
            Yd
          )
      );
    return (
      o.push(
        new Proxy(
          {
            get(s) {
              return i.has(s) ? void 0 : e[s];
            },
            has(s) {
              return i.has(s) ? !1 : s in e;
            },
            keys() {
              return Object.keys(e).filter((s) => !i.has(s));
            },
          },
          Yd
        )
      ),
      o
    );
  }
  const n = {},
    r = t.map(() => ({}));
  for (const i of Object.getOwnPropertyNames(e)) {
    const o = Object.getOwnPropertyDescriptor(e, i),
      s = !o.get && !o.set && o.enumerable && o.writable && o.configurable;
    let a = !1,
      l = 0;
    for (const u of t) u.includes(i) && ((a = !0), s ? (r[l][i] = o.value) : Object.defineProperty(r[l], i, o)), ++l;
    a || (s ? (n[i] = o.value) : Object.defineProperty(n, i, o));
  }
  return [...r, n];
}
function XA(e) {
  let t, n;
  const r = (i) => {
    const o = H.context;
    if (o) {
      const [a, l] = Wn();
      H.count || (H.count = 0),
        H.count++,
        (n || (n = e())).then((u) => {
          !H.done && Yo(o), H.count--, l(() => u.default), Yo();
        }),
        (t = a);
    } else if (!t) {
      const [a] = zA(() => (n || (n = e())).then((l) => l.default));
      t = a;
    }
    let s;
    return Br(() =>
      (s = t())
        ? Sn(() => {
            if (!o || H.done) return s(i);
            const a = H.context;
            Yo(o);
            const l = s(i);
            return Yo(a), l;
          })
        : ""
    );
  };
  return (r.preload = () => n || ((n = e()).then((i) => (t = () => i.default)), n)), r;
}
let JA = 0;
function w5() {
  return H.context ? H.getNextContextId() : `cl-${JA++}`;
}
const ZA = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ],
  eI = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...ZA]),
  tI = new Set(["innerHTML", "textContent", "innerText", "children"]),
  nI = Object.assign(Object.create(null), { className: "class", htmlFor: "for" }),
  rI = Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
    ismap: { $: "isMap", IMG: 1 },
    nomodule: { $: "noModule", SCRIPT: 1 },
    playsinline: { $: "playsInline", VIDEO: 1 },
    readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
  });
function iI(e, t) {
  const n = rI[e];
  return typeof n == "object" ? (n[t] ? n.$ : void 0) : n;
}
const oI = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  sI = new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ]),
  aI = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" };
function lI(e, t, n) {
  let r = n.length,
    i = t.length,
    o = r,
    s = 0,
    a = 0,
    l = t[i - 1].nextSibling,
    u = null;
  for (; s < i || a < o; ) {
    if (t[s] === n[a]) {
      s++, a++;
      continue;
    }
    for (; t[i - 1] === n[o - 1]; ) i--, o--;
    if (i === s) {
      const c = o < r ? (a ? n[a - 1].nextSibling : n[o - a]) : l;
      for (; a < o; ) e.insertBefore(n[a++], c);
    } else if (o === a) for (; s < i; ) (!u || !u.has(t[s])) && t[s].remove(), s++;
    else if (t[s] === n[o - 1] && n[a] === t[i - 1]) {
      const c = t[--i].nextSibling;
      e.insertBefore(n[a++], t[s++].nextSibling), e.insertBefore(n[--o], c), (t[i] = n[o]);
    } else {
      if (!u) {
        u = new Map();
        let f = a;
        for (; f < o; ) u.set(n[f], f++);
      }
      const c = u.get(t[s]);
      if (c != null)
        if (a < c && c < o) {
          let f = s,
            d = 1,
            h;
          for (; ++f < i && f < o && !((h = u.get(t[f])) == null || h !== c + d); ) d++;
          if (d > c - a) {
            const v = t[s];
            for (; a < c; ) e.insertBefore(n[a++], v);
          } else e.replaceChild(n[a++], t[s++]);
        } else s++;
      else t[s++].remove();
    }
  }
}
const Cg = "_$DX_DELEGATE";
function uI(e, t, n, r = {}) {
  let i;
  return (
    jA((o) => {
      (i = o), t === document ? e() : wI(t, e(), t.firstChild ? null : void 0, n);
    }, r.owner),
    () => {
      i(), (t.textContent = "");
    }
  );
}
function S5(e, t, n, r) {
  let i;
  const o = () => {
      const a = document.createElement("template");
      return (a.innerHTML = e), a.content.firstChild;
    },
    s = () => (i || (i = o())).cloneNode(!0);
  return (s.cloneNode = s), s;
}
function cI(e, t = window.document) {
  const n = t[Cg] || (t[Cg] = new Set());
  for (let r = 0, i = e.length; r < i; r++) {
    const o = e[r];
    n.has(o) || (n.add(o), t.addEventListener(o, _I));
  }
}
function Xd(e, t, n) {
  Kr(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function fI(e, t, n, r) {
  Kr(e) || (r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r));
}
function dI(e, t, n) {
  Kr(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function hI(e, t) {
  Kr(e) || (t == null ? e.removeAttribute("class") : (e.className = t));
}
function pI(e, t, n, r) {
  if (r) Array.isArray(n) ? ((e[`$$${t}`] = n[0]), (e[`$$${t}Data`] = n[1])) : (e[`$$${t}`] = n);
  else if (Array.isArray(n)) {
    const i = n[0];
    e.addEventListener(t, (n[0] = (o) => i.call(e, n[1], o)));
  } else e.addEventListener(t, n, typeof n != "function" && n);
}
function mI(e, t, n = {}) {
  const r = Object.keys(t || {}),
    i = Object.keys(n);
  let o, s;
  for (o = 0, s = i.length; o < s; o++) {
    const a = i[o];
    !a || a === "undefined" || t[a] || (kg(e, a, !1), delete n[a]);
  }
  for (o = 0, s = r.length; o < s; o++) {
    const a = r[o],
      l = !!t[a];
    !a || a === "undefined" || n[a] === l || !l || (kg(e, a, !0), (n[a] = l));
  }
  return n;
}
function vI(e, t, n) {
  if (!t) return n ? Xd(e, "style") : t;
  const r = e.style;
  if (typeof t == "string") return (r.cssText = t);
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let i, o;
  for (o in n) t[o] == null && r.removeProperty(o), delete n[o];
  for (o in t) (i = t[o]), i !== n[o] && (r.setProperty(o, i), (n[o] = i));
  return n;
}
function yI(e, t = {}, n, r) {
  const i = {};
  return (
    r || Fr(() => (i.children = Gs(e, t.children, i.children))),
    Fr(() => typeof t.ref == "function" && gI(t.ref, e)),
    Fr(() => SI(e, t, n, !0, i, !0)),
    i
  );
}
function gI(e, t, n) {
  return Sn(() => e(t, n));
}
function wI(e, t, n, r) {
  if ((n !== void 0 && !r && (r = []), typeof t != "function")) return Gs(e, t, r, n);
  Fr((i) => Gs(e, t(), i, n), r);
}
function SI(e, t, n, r, i = {}, o = !1) {
  t || (t = {});
  for (const s in i)
    if (!(s in t)) {
      if (s === "children") continue;
      i[s] = Og(e, s, null, i[s], n, o, t);
    }
  for (const s in t) {
    if (s === "children") continue;
    const a = t[s];
    i[s] = Og(e, s, a, i[s], n, o, t);
  }
}
function bI(e) {
  let t, n;
  return !Kr() || !(t = H.registry.get((n = EI())))
    ? e()
    : (H.completed && H.completed.add(t), H.registry.delete(n), t);
}
function Kr(e) {
  return !!H.context && !H.done && (!e || e.isConnected);
}
function xI(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function kg(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let i = 0, o = r.length; i < o; i++) e.classList.toggle(r[i], n);
}
function Og(e, t, n, r, i, o, s) {
  let a, l, u, c, f;
  if (t === "style") return vI(e, n, r);
  if (t === "classList") return mI(e, n, r);
  if (n === r) return r;
  if (t === "ref") o || n(e);
  else if (t.slice(0, 3) === "on:") {
    const d = t.slice(3);
    r && e.removeEventListener(d, r, typeof r != "function" && r),
      n && e.addEventListener(d, n, typeof n != "function" && n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const d = t.slice(10);
    r && e.removeEventListener(d, r, !0), n && e.addEventListener(d, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const d = t.slice(2).toLowerCase(),
      h = oI.has(d);
    if (!h && r) {
      const v = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(d, v);
    }
    (h || n) && (pI(e, d, n, h), h && cI([d]));
  } else if (t.slice(0, 5) === "attr:") Xd(e, t.slice(5), n);
  else if (t.slice(0, 5) === "bool:") dI(e, t.slice(5), n);
  else if (
    (f = t.slice(0, 5) === "prop:") ||
    (u = tI.has(t)) ||
    (!i && ((c = iI(t, e.tagName)) || (l = eI.has(t)))) ||
    (a = e.nodeName.includes("-") || "is" in s)
  ) {
    if (f) (t = t.slice(5)), (l = !0);
    else if (Kr(e)) return n;
    t === "class" || t === "className" ? hI(e, n) : a && !l && !u ? (e[xI(t)] = n) : (e[c || t] = n);
  } else {
    const d = i && t.indexOf(":") > -1 && aI[t.split(":")[0]];
    d ? fI(e, d, t, n) : Xd(e, nI[t] || t, n);
  }
  return n;
}
function _I(e) {
  if (H.registry && H.events && H.events.find(([l, u]) => u === e)) return;
  let t = e.target;
  const n = `$$${e.type}`,
    r = e.target,
    i = e.currentTarget,
    o = (l) => Object.defineProperty(e, "target", { configurable: !0, value: l }),
    s = () => {
      const l = t[n];
      if (l && !t.disabled) {
        const u = t[`${n}Data`];
        if ((u !== void 0 ? l.call(t, u, e) : l.call(t, e), e.cancelBubble)) return;
      }
      return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && o(t.host), !0;
    },
    a = () => {
      for (; s() && (t = t._$host || t.parentNode || t.host); );
    };
  if (
    (Object.defineProperty(e, "currentTarget", {
      configurable: !0,
      get() {
        return t || document;
      },
    }),
    H.registry && !H.done && (H.done = _$HY.done = !0),
    e.composedPath)
  ) {
    const l = e.composedPath();
    o(l[0]);
    for (let u = 0; u < l.length - 2 && ((t = l[u]), !!s()); u++) {
      if (t._$host) {
        (t = t._$host), a();
        break;
      }
      if (t.parentNode === i) break;
    }
  } else a();
  o(r);
}
function Gs(e, t, n, r, i) {
  const o = Kr(e);
  if (o) {
    !n && (n = [...e.childNodes]);
    let l = [];
    for (let u = 0; u < n.length; u++) {
      const c = n[u];
      c.nodeType === 8 && c.data.slice(0, 2) === "!$" ? c.remove() : l.push(c);
    }
    n = l;
  }
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const s = typeof t,
    a = r !== void 0;
  if (((e = (a && n[0] && n[0].parentNode) || e), s === "string" || s === "number")) {
    if (o || (s === "number" && ((t = t.toString()), t === n))) return n;
    if (a) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data !== t && (l.data = t) : (l = document.createTextNode(t)), (n = ei(e, n, r, l));
    } else n !== "" && typeof n == "string" ? (n = e.firstChild.data = t) : (n = e.textContent = t);
  } else if (t == null || s === "boolean") {
    if (o) return n;
    n = ei(e, n, r);
  } else {
    if (s === "function")
      return (
        Fr(() => {
          let l = t();
          for (; typeof l == "function"; ) l = l();
          n = Gs(e, l, n, r);
        }),
        () => n
      );
    if (Array.isArray(t)) {
      const l = [],
        u = n && Array.isArray(n);
      if (Jd(l, t, n, i)) return Fr(() => (n = Gs(e, l, n, r, !0))), () => n;
      if (o) {
        if (!l.length) return n;
        if (r === void 0) return (n = [...e.childNodes]);
        let c = l[0];
        if (c.parentNode !== e) return n;
        const f = [c];
        for (; (c = c.nextSibling) !== r; ) f.push(c);
        return (n = f);
      }
      if (l.length === 0) {
        if (((n = ei(e, n, r)), a)) return n;
      } else u ? (n.length === 0 ? Rg(e, l, r) : lI(e, n, l)) : (n && ei(e), Rg(e, l));
      n = l;
    } else if (t.nodeType) {
      if (o && t.parentNode) return (n = a ? [t] : t);
      if (Array.isArray(n)) {
        if (a) return (n = ei(e, n, r, t));
        ei(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function Jd(e, t, n, r) {
  let i = !1;
  for (let o = 0, s = t.length; o < s; o++) {
    let a = t[o],
      l = n && n[e.length],
      u;
    if (!(a == null || a === !0 || a === !1))
      if ((u = typeof a) == "object" && a.nodeType) e.push(a);
      else if (Array.isArray(a)) i = Jd(e, a, l) || i;
      else if (u === "function")
        if (r) {
          for (; typeof a == "function"; ) a = a();
          i = Jd(e, Array.isArray(a) ? a : [a], Array.isArray(l) ? l : [l]) || i;
        } else e.push(a), (i = !0);
      else {
        const c = String(a);
        l && l.nodeType === 3 && l.data === c ? e.push(l) : e.push(document.createTextNode(c));
      }
  }
  return i;
}
function Rg(e, t, n = null) {
  for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
}
function ei(e, t, n, r) {
  if (n === void 0) return (e.textContent = "");
  const i = r || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let s = t.length - 1; s >= 0; s--) {
      const a = t[s];
      if (i !== a) {
        const l = a.parentNode === e;
        !o && !s ? (l ? e.replaceChild(i, a) : e.insertBefore(i, n)) : l && a.remove();
      } else o = !0;
    }
  } else e.insertBefore(i, n);
  return [i];
}
function EI() {
  return H.getNextContextId();
}
const TI = "http://www.w3.org/2000/svg";
function PI(e, t = !1) {
  return t ? document.createElementNS(TI, e) : document.createElement(e);
}
function CI(e, t) {
  const n = Br(e);
  return Br(() => {
    const r = n();
    switch (typeof r) {
      case "function":
        return Sn(() => r(t));
      case "string":
        const i = sI.has(r),
          o = H.context ? bI() : PI(r, i);
        return yI(o, t, i), o;
    }
  });
}
function b5(e) {
  const [, t] = YA(e, ["component"]);
  return CI(() => e.component, t);
}
var O_ = (e) => {
    throw TypeError(e);
  },
  R_ = (e, t, n) => t.has(e) || O_("Cannot " + n),
  St = (e, t, n) => (R_(e, t, "read from private field"), t.get(e)),
  On = (e, t, n) =>
    t.has(e) ? O_("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
  bt = (e, t, n, r) => (R_(e, t, "write to private field"), t.set(e, n), n),
  Xo,
  Jo,
  Zo,
  es,
  ts,
  ni,
  ns,
  wl;
class kI {
  constructor(t) {
    On(this, Xo), On(this, Jo), On(this, Zo), On(this, es), On(this, ts), On(this, ni, !1), On(this, ns), On(this, wl);
    const { router: n, routerState: r, position: i, initialIsOpen: o, shadowDOMTarget: s } = t;
    bt(this, Xo, Wn(n)), bt(this, Jo, Wn(r)), bt(this, Zo, i ?? "bottom-left"), bt(this, es, o ?? !1), bt(this, ts, s);
  }
  mount(t) {
    if (St(this, ni)) throw new Error("Devtools is already mounted");
    const n = uI(() => {
      const [r] = St(this, Xo),
        [i] = St(this, Jo),
        o = St(this, Zo),
        s = St(this, es),
        a = St(this, ts);
      let l;
      return (
        St(this, ns)
          ? (l = St(this, ns))
          : ((l = XA(() => sa(() => import("./FloatingTanStackRouterDevtools-BSVwFicz.js"), []))), bt(this, ns, l)),
        GA(l, { position: o, initialIsOpen: s, shadowDOMTarget: a, router: r, routerState: i })
      );
    }, t);
    bt(this, ni, !0), bt(this, wl, n);
  }
  unmount() {
    var t;
    if (!St(this, ni)) throw new Error("Devtools is not mounted");
    (t = St(this, wl)) == null || t.call(this), bt(this, ni, !1);
  }
  setRouter(t) {
    St(this, Xo)[1](t);
  }
  setRouterState(t) {
    St(this, Jo)[1](t);
  }
  setOptions(t) {
    t.position !== void 0 && bt(this, Zo, t.position),
      t.initialIsOpen !== void 0 && bt(this, es, t.initialIsOpen),
      t.shadowDOMTarget !== void 0 && bt(this, ts, t.shadowDOMTarget);
  }
}
Xo = new WeakMap();
Jo = new WeakMap();
Zo = new WeakMap();
es = new WeakMap();
ts = new WeakMap();
ni = new WeakMap();
ns = new WeakMap();
wl = new WeakMap();
function D_(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = D_(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function M_() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = D_(e)) && (r && (r += " "), (r += t));
  return r;
}
function OI(e) {
  const {
      initialIsOpen: t,
      panelProps: n,
      closeButtonProps: r,
      toggleButtonProps: i,
      position: o,
      containerElement: s,
      shadowDOMTarget: a,
      router: l,
    } = e,
    u = Dt({ warn: l !== void 0 }),
    c = l ?? u,
    f = ze({ router: c }),
    d = x.useRef(null),
    [h] = x.useState(
      () =>
        new kI({
          initialIsOpen: t,
          panelProps: n,
          closeButtonProps: r,
          toggleButtonProps: i,
          position: o,
          containerElement: s,
          shadowDOMTarget: a,
          router: c,
          routerState: f,
        })
    );
  return (
    x.useEffect(() => {
      h.setRouter(c);
    }, [h, c]),
    x.useEffect(() => {
      h.setRouterState(f);
    }, [h, f]),
    x.useEffect(() => {
      h.setOptions({
        initialIsOpen: t,
        panelProps: n,
        closeButtonProps: r,
        toggleButtonProps: i,
        position: o,
        containerElement: s,
        shadowDOMTarget: a,
      });
    }, [h, t, n, r, i, o, s, a]),
    x.useEffect(
      () => (
        d.current && h.mount(d.current),
        () => {
          h.unmount();
        }
      ),
      [h]
    ),
    O.jsx(x.Fragment, { children: O.jsx("div", { ref: d }) })
  );
}
const RI = OI;
console.warn(
  "[@tanstack/router-devtools] This package has moved to @tanstack/react-router-devtools. Please switch to the new package at your earliest convenience, as this package will be dropped in the next major version release."
);
const DI = ({ children: e }) => O.jsx("div", { className: "max-w-[1440px] mx-auto px-4", children: e }),
  MI = () =>
    O.jsx("header", {
      children: O.jsx(DI, {
        children: O.jsxs("nav", {
          className: "p-3 flex gap-x-4",
          children: [
            O.jsx(Wa, { to: "/", className: "[&.active]:font-bold", children: "Home" }),
            O.jsx(Wa, { to: "/vocabulary", className: "[&.active]:font-bold", children: "Vocabulary" }),
            O.jsx(Wa, { to: "/flashcards", className: "[&.active]:font-bold", children: "Flashcards" }),
            O.jsx(Wa, { to: "/reviewed-words", className: "[&.active]:font-bold", children: "Reviewed" }),
          ],
        }),
      }),
    });
var Zd = function (e, t) {
  return (
    (Zd =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }),
    Zd(e, t)
  );
};
function Jt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Zd(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var P = function () {
  return (
    (P =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    P.apply(this, arguments)
  );
};
function hn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Nn(e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function jn(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    o,
    s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (s.next = a(0)),
    (s.throw = a(1)),
    (s.return = a(2)),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function a(u) {
    return function (c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && ((s = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          i &&
            (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) &&
            !(o = o.call(i, u[1])).done)
        )
          return o;
        switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (i = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (((o = n.trys), !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2))) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < o[1]) {
              (n.label = o[1]), (o = u);
              break;
            }
            if (o && n.label < o[2]) {
              (n.label = o[2]), n.ops.push(u);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (i = 0);
      } finally {
        r = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ke(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var mf = "Invariant Violation",
  Dg = Object.setPrototypeOf,
  AI =
    Dg === void 0
      ? function (e, t) {
          return (e.__proto__ = t), e;
        }
      : Dg,
  A_ = (function (e) {
    Jt(t, e);
    function t(n) {
      n === void 0 && (n = mf);
      var r =
        e.call(
          this,
          typeof n == "number" ? mf + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n
        ) || this;
      return (r.framesToPop = 1), (r.name = mf), AI(r, t.prototype), r;
    }
    return t;
  })(Error);
function Tr(e, t) {
  if (!e) throw new A_(t);
}
var I_ = ["debug", "log", "warn", "error", "silent"],
  II = I_.indexOf("log");
function Ya(e) {
  return function () {
    if (I_.indexOf(e) >= II) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function (e) {
  (e.debug = Ya("debug")), (e.log = Ya("log")), (e.warn = Ya("warn")), (e.error = Ya("error"));
})(Tr || (Tr = {}));
var cm = "3.13.3";
function jt(e) {
  try {
    return e();
  } catch {}
}
const eh =
  jt(function () {
    return globalThis;
  }) ||
  jt(function () {
    return window;
  }) ||
  jt(function () {
    return self;
  }) ||
  jt(function () {
    return global;
  }) ||
  jt(function () {
    return jt.constructor("return this")();
  });
var Mg = new Map();
function th(e) {
  var t = Mg.get(e) || 1;
  return Mg.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function L_(e, t) {
  t === void 0 && (t = 0);
  var n = th("stringifyForDisplay");
  return JSON.stringify(
    e,
    function (r, i) {
      return i === void 0 ? n : i;
    },
    t
  )
    .split(JSON.stringify(n))
    .join("<undefined>");
}
function Xa(e) {
  return function (t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (typeof t == "number") {
      var i = t;
      (t = fm(i)), t || ((t = dm(i, n)), (n = []));
    }
    e.apply(void 0, [t].concat(n));
  };
}
var $ = Object.assign(
  function (t, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    t || Tr(t, fm(n, r) || dm(n, r));
  },
  { debug: Xa(Tr.debug), log: Xa(Tr.log), warn: Xa(Tr.warn), error: Xa(Tr.error) }
);
function tt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new A_(fm(e, t) || dm(e, t));
}
var Ag = Symbol.for("ApolloErrorMessageHandler_" + cm);
function F_(e) {
  if (typeof e == "string") return e;
  try {
    return L_(e, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function fm(e, t) {
  if ((t === void 0 && (t = []), !!e)) return eh[Ag] && eh[Ag](e, t.map(F_));
}
function dm(e, t) {
  if ((t === void 0 && (t = []), !!e))
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(
      encodeURIComponent(JSON.stringify({ version: cm, message: e, args: t.map(F_) }))
    );
}
function LI(e, t) {
  if (!!!e) throw new Error(t);
}
class x5 {
  constructor(t, n, r) {
    (this.start = t.start), (this.end = n.end), (this.startToken = t), (this.endToken = n), (this.source = r);
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}
class _5 {
  constructor(t, n, r, i, o, s) {
    (this.kind = t),
      (this.start = n),
      (this.end = r),
      (this.line = i),
      (this.column = o),
      (this.value = s),
      (this.prev = null),
      (this.next = null);
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return { kind: this.kind, value: this.value, line: this.line, column: this.column };
  }
}
const N_ = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"],
  },
  FI = new Set(Object.keys(N_));
function Ig(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && FI.has(t);
}
var Lg;
(function (e) {
  (e.QUERY = "query"), (e.MUTATION = "mutation"), (e.SUBSCRIPTION = "subscription");
})(Lg || (Lg = {}));
var ue;
(function (e) {
  (e.NAME = "Name"),
    (e.DOCUMENT = "Document"),
    (e.OPERATION_DEFINITION = "OperationDefinition"),
    (e.VARIABLE_DEFINITION = "VariableDefinition"),
    (e.SELECTION_SET = "SelectionSet"),
    (e.FIELD = "Field"),
    (e.ARGUMENT = "Argument"),
    (e.FRAGMENT_SPREAD = "FragmentSpread"),
    (e.INLINE_FRAGMENT = "InlineFragment"),
    (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
    (e.VARIABLE = "Variable"),
    (e.INT = "IntValue"),
    (e.FLOAT = "FloatValue"),
    (e.STRING = "StringValue"),
    (e.BOOLEAN = "BooleanValue"),
    (e.NULL = "NullValue"),
    (e.ENUM = "EnumValue"),
    (e.LIST = "ListValue"),
    (e.OBJECT = "ObjectValue"),
    (e.OBJECT_FIELD = "ObjectField"),
    (e.DIRECTIVE = "Directive"),
    (e.NAMED_TYPE = "NamedType"),
    (e.LIST_TYPE = "ListType"),
    (e.NON_NULL_TYPE = "NonNullType"),
    (e.SCHEMA_DEFINITION = "SchemaDefinition"),
    (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
    (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
    (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
    (e.FIELD_DEFINITION = "FieldDefinition"),
    (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
    (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
    (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
    (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
    (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
    (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
    (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
    (e.SCHEMA_EXTENSION = "SchemaExtension"),
    (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
    (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
    (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
    (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
    (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
    (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
})(ue || (ue = {}));
function nh(e) {
  return e === 9 || e === 32;
}
function NI(e) {
  return e >= 48 && e <= 57;
}
function j_(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function E5(e) {
  return j_(e) || e === 95;
}
function T5(e) {
  return j_(e) || NI(e) || e === 95;
}
function P5(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER,
    r = null,
    i = -1;
  for (let s = 0; s < e.length; ++s) {
    var o;
    const a = e[s],
      l = jI(a);
    l !== a.length && ((r = (o = r) !== null && o !== void 0 ? o : s), (i = s), s !== 0 && l < n && (n = l));
  }
  return e.map((s, a) => (a === 0 ? s : s.slice(n))).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
}
function jI(e) {
  let t = 0;
  for (; t < e.length && nh(e.charCodeAt(t)); ) ++t;
  return t;
}
function VI(e, t) {
  const n = e.replace(/"""/g, '\\"""'),
    r = n.split(/\r\n|[\n\r]/g),
    i = r.length === 1,
    o = r.length > 1 && r.slice(1).every((h) => h.length === 0 || nh(h.charCodeAt(0))),
    s = n.endsWith('\\"""'),
    a = e.endsWith('"') && !s,
    l = e.endsWith("\\"),
    u = a || l,
    c = !i || e.length > 70 || u || o || s;
  let f = "";
  const d = i && nh(e.charCodeAt(0));
  return (
    ((c && !d) || o) &&
      (f += `
`),
    (f += n),
    (c || u) &&
      (f += `
`),
    '"""' + f + '"""'
  );
}
const $I = 10,
  V_ = 2;
function zI(e) {
  return tc(e, []);
}
function tc(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return BI(e, t);
    default:
      return String(e);
  }
}
function BI(e, t) {
  if (e === null) return "null";
  if (t.includes(e)) return "[Circular]";
  const n = [...t, e];
  if (UI(e)) {
    const r = e.toJSON();
    if (r !== e) return typeof r == "string" ? r : tc(r, n);
  } else if (Array.isArray(e)) return QI(e, n);
  return WI(e, n);
}
function UI(e) {
  return typeof e.toJSON == "function";
}
function WI(e, t) {
  const n = Object.entries(e);
  return n.length === 0
    ? "{}"
    : t.length > V_
      ? "[" + qI(e) + "]"
      : "{ " + n.map(([i, o]) => i + ": " + tc(o, t)).join(", ") + " }";
}
function QI(e, t) {
  if (e.length === 0) return "[]";
  if (t.length > V_) return "[Array]";
  const n = Math.min($I, e.length),
    r = e.length - n,
    i = [];
  for (let o = 0; o < n; ++o) i.push(tc(e[o], t));
  return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function qI(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, "")
    .replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "") return n;
  }
  return t;
}
function HI(e) {
  return `"${e.replace(GI, KI)}"`;
}
const GI = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function KI(e) {
  return YI[e.charCodeAt(0)];
}
const YI = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F",
  ],
  nc = Object.freeze({});
function Ut(e, t, n = N_) {
  const r = new Map();
  for (const p of Object.values(ue)) r.set(p, XI(t, p));
  let i,
    o = Array.isArray(e),
    s = [e],
    a = -1,
    l = [],
    u = e,
    c,
    f;
  const d = [],
    h = [];
  do {
    a++;
    const p = a === s.length,
      m = p && l.length !== 0;
    if (p) {
      if (((c = h.length === 0 ? void 0 : d[d.length - 1]), (u = f), (f = h.pop()), m))
        if (o) {
          u = u.slice();
          let b = 0;
          for (const [S, _] of l) {
            const T = S - b;
            _ === null ? (u.splice(T, 1), b++) : (u[T] = _);
          }
        } else {
          u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
          for (const [b, S] of l) u[b] = S;
        }
      (a = i.index), (s = i.keys), (l = i.edits), (o = i.inArray), (i = i.prev);
    } else if (f) {
      if (((c = o ? a : s[a]), (u = f[c]), u == null)) continue;
      d.push(c);
    }
    let g;
    if (!Array.isArray(u)) {
      var v, y;
      Ig(u) || LI(!1, `Invalid AST Node: ${zI(u)}.`);
      const b = p
        ? (v = r.get(u.kind)) === null || v === void 0
          ? void 0
          : v.leave
        : (y = r.get(u.kind)) === null || y === void 0
          ? void 0
          : y.enter;
      if (((g = b == null ? void 0 : b.call(t, u, c, f, d, h)), g === nc)) break;
      if (g === !1) {
        if (!p) {
          d.pop();
          continue;
        }
      } else if (g !== void 0 && (l.push([c, g]), !p))
        if (Ig(g)) u = g;
        else {
          d.pop();
          continue;
        }
    }
    if ((g === void 0 && m && l.push([c, u]), p)) d.pop();
    else {
      var w;
      (i = { inArray: o, index: a, keys: s, edits: l, prev: i }),
        (o = Array.isArray(u)),
        (s = o ? u : (w = n[u.kind]) !== null && w !== void 0 ? w : []),
        (a = -1),
        (l = []),
        f && h.push(f),
        (f = u);
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function XI(e, t) {
  const n = e[t];
  return typeof n == "object"
    ? n
    : typeof n == "function"
      ? { enter: n, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
}
function JI(e) {
  return Ut(e, eL);
}
const ZI = 80,
  eL = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => "$" + e.name },
    Document: {
      leave: (e) =>
        V(
          e.definitions,
          `

`
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = X("(", V(e.variableDefinitions, ", "), ")"),
          n = V([e.operation, V([e.name, t]), V(e.directives, " ")], " ");
        return (n === "query" ? "" : n + " ") + e.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
        e + ": " + t + X(" = ", n) + X(" ", V(r, " ")),
    },
    SelectionSet: { leave: ({ selections: e }) => At(e) },
    Field: {
      leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
        const o = X("", e, ": ") + t;
        let s = o + X("(", V(n, ", "), ")");
        return (
          s.length > ZI &&
            (s =
              o +
              X(
                `(
`,
                Sl(
                  V(
                    n,
                    `
`
                  )
                ),
                `
)`
              )),
          V([s, V(r, " "), i], " ")
        );
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
    FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + X(" ", V(t, " ")) },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) => V(["...", X("on ", e), V(t, " "), n], " "),
    },
    FragmentDefinition: {
      leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) =>
        `fragment ${e}${X("(", V(n, ", "), ")")} on ${t} ${X("", V(r, " "), " ")}` + i,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? VI(e) : HI(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
    NullValue: { leave: () => "null" },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => "[" + V(e, ", ") + "]" },
    ObjectValue: { leave: ({ fields: e }) => "{" + V(e, ", ") + "}" },
    ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
    Directive: { leave: ({ name: e, arguments: t }) => "@" + e + X("(", V(t, ", "), ")") },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => "[" + e + "]" },
    NonNullType: { leave: ({ type: e }) => e + "!" },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) =>
        X(
          "",
          e,
          `
`
        ) + V(["schema", V(t, " "), At(n)], " "),
    },
    OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        X(
          "",
          e,
          `
`
        ) + V(["scalar", t, V(n, " ")], " "),
    },
    ObjectTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
        X(
          "",
          e,
          `
`
        ) + V(["type", t, X("implements ", V(n, " & ")), V(r, " "), At(i)], " "),
    },
    FieldDefinition: {
      leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) =>
        X(
          "",
          e,
          `
`
        ) +
        t +
        (Fg(n)
          ? X(
              `(
`,
              Sl(
                V(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : X("(", V(n, ", "), ")")) +
        ": " +
        r +
        X(" ", V(i, " ")),
    },
    InputValueDefinition: {
      leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) =>
        X(
          "",
          e,
          `
`
        ) + V([t + ": " + n, X("= ", r), V(i, " ")], " "),
    },
    InterfaceTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
        X(
          "",
          e,
          `
`
        ) + V(["interface", t, X("implements ", V(n, " & ")), V(r, " "), At(i)], " "),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: r }) =>
        X(
          "",
          e,
          `
`
        ) + V(["union", t, V(n, " "), X("= ", V(r, " | "))], " "),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: r }) =>
        X(
          "",
          e,
          `
`
        ) + V(["enum", t, V(n, " "), At(r)], " "),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        X(
          "",
          e,
          `
`
        ) + V([t, V(n, " ")], " "),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: r }) =>
        X(
          "",
          e,
          `
`
        ) + V(["input", t, V(n, " "), At(r)], " "),
    },
    DirectiveDefinition: {
      leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) =>
        X(
          "",
          e,
          `
`
        ) +
        "directive @" +
        t +
        (Fg(n)
          ? X(
              `(
`,
              Sl(
                V(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : X("(", V(n, ", "), ")")) +
        (r ? " repeatable" : "") +
        " on " +
        V(i, " | "),
    },
    SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => V(["extend schema", V(e, " "), At(t)], " ") },
    ScalarTypeExtension: { leave: ({ name: e, directives: t }) => V(["extend scalar", e, V(t, " ")], " ") },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        V(["extend type", e, X("implements ", V(t, " & ")), V(n, " "), At(r)], " "),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        V(["extend interface", e, X("implements ", V(t, " & ")), V(n, " "), At(r)], " "),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) => V(["extend union", e, V(t, " "), X("= ", V(n, " | "))], " "),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) => V(["extend enum", e, V(t, " "), At(n)], " "),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) => V(["extend input", e, V(t, " "), At(n)], " "),
    },
  };
function V(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function At(e) {
  return X(
    `{
`,
    Sl(
      V(
        e,
        `
`
      )
    ),
    `
}`
  );
}
function X(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Sl(e) {
  return X(
    "  ",
    e.replace(
      /\n/g,
      `
  `
    )
  );
}
function Fg(e) {
  var t;
  return (t =
    e == null
      ? void 0
      : e.some((n) =>
          n.includes(`
`)
        )) !== null && t !== void 0
    ? t
    : !1;
}
function Ng(e) {
  return e.kind === ue.FIELD || e.kind === ue.FRAGMENT_SPREAD || e.kind === ue.INLINE_FRAGMENT;
}
function da(e, t) {
  var n = e.directives;
  return !n || !n.length
    ? !0
    : rL(n).every(function (r) {
        var i = r.directive,
          o = r.ifArgument,
          s = !1;
        return (
          o.value.kind === "Variable"
            ? ((s = t && t[o.value.name.value]), $(s !== void 0, 78, i.name.value))
            : (s = o.value.value),
          i.name.value === "skip" ? !s : s
        );
      });
}
function Ks(e, t, n) {
  var r = new Set(e),
    i = r.size;
  return (
    Ut(t, {
      Directive: function (o) {
        if (r.delete(o.name.value) && (!n || !r.size)) return nc;
      },
    }),
    n ? !r.size : r.size < i
  );
}
function tL(e) {
  return e && Ks(["client", "export"], e, !0);
}
function nL(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function rL(e) {
  var t = [];
  return (
    e &&
      e.length &&
      e.forEach(function (n) {
        if (nL(n)) {
          var r = n.arguments,
            i = n.name.value;
          $(r && r.length === 1, 79, i);
          var o = r[0];
          $(o.name && o.name.value === "if", 80, i);
          var s = o.value;
          $(s && (s.kind === "Variable" || s.kind === "BooleanValue"), 81, i), t.push({ directive: n, ifArgument: o });
        }
      }),
    t
  );
}
function iL(e) {
  var t,
    n,
    r =
      (t = e.directives) === null || t === void 0
        ? void 0
        : t.find(function (o) {
            var s = o.name;
            return s.value === "unmask";
          });
  if (!r) return "mask";
  var i =
    (n = r.arguments) === null || n === void 0
      ? void 0
      : n.find(function (o) {
          var s = o.name;
          return s.value === "mode";
        });
  return (
    globalThis.__DEV__ !== !1 &&
      i &&
      (i.value.kind === ue.VARIABLE
        ? globalThis.__DEV__ !== !1 && $.warn(82)
        : i.value.kind !== ue.STRING
          ? globalThis.__DEV__ !== !1 && $.warn(83)
          : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && $.warn(84, i.value.value)),
    i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask"
  );
}
const oL = () => Object.create(null),
  { forEach: sL, slice: jg } = Array.prototype,
  { hasOwnProperty: aL } = Object.prototype;
class Pn {
  constructor(t = !0, n = oL) {
    (this.weakness = t), (this.makeData = n);
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(t) {
    let n = this;
    return (
      sL.call(t, (r) => (n = n.getChildTrie(r))), aL.call(n, "data") ? n.data : (n.data = this.makeData(jg.call(t)))
    );
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(t) {
    let n = this;
    for (let r = 0, i = t.length; n && r < i; ++r) {
      const o = n.mapFor(t[r], !1);
      n = o && o.get(t[r]);
    }
    return n && n.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(t) {
    let n;
    if (t.length) {
      const r = t[0],
        i = this.mapFor(r, !1),
        o = i && i.get(r);
      o && ((n = o.removeArray(jg.call(t, 1))), !o.data && !o.weak && !(o.strong && o.strong.size) && i.delete(r));
    } else (n = this.data), delete this.data;
    return n;
  }
  getChildTrie(t) {
    const n = this.mapFor(t, !0);
    let r = n.get(t);
    return r || n.set(t, (r = new Pn(this.weakness, this.makeData))), r;
  }
  mapFor(t, n) {
    return this.weakness && lL(t)
      ? this.weak || (n ? (this.weak = new WeakMap()) : void 0)
      : this.strong || (n ? (this.strong = new Map()) : void 0);
  }
}
function lL(e) {
  switch (typeof e) {
    case "object":
      if (e === null) break;
    case "function":
      return !0;
  }
  return !1;
}
var $_ =
    jt(function () {
      return navigator.product;
    }) == "ReactNative",
  Yr = typeof WeakMap == "function" && !($_ && !global.HermesInternal),
  hm = typeof WeakSet == "function",
  pm = typeof Symbol == "function" && typeof Symbol.for == "function",
  rc = pm && Symbol.asyncIterator,
  uL =
    typeof jt(function () {
      return window.document.createElement;
    }) == "function",
  cL =
    jt(function () {
      return navigator.userAgent.indexOf("jsdom") >= 0;
    }) || !1,
  C5 = (uL || $_) && !cL;
function Te(e) {
  return e !== null && typeof e == "object";
}
function fL(e, t) {
  var n = t,
    r = [];
  e.definitions.forEach(function (o) {
    if (o.kind === "OperationDefinition") throw tt(85, o.operation, o.name ? " named '".concat(o.name.value, "'") : "");
    o.kind === "FragmentDefinition" && r.push(o);
  }),
    typeof n > "u" && ($(r.length === 1, 86, r.length), (n = r[0].name.value));
  var i = P(P({}, e), {
    definitions: Ke(
      [
        {
          kind: "OperationDefinition",
          operation: "query",
          selectionSet: {
            kind: "SelectionSet",
            selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: n } }],
          },
        },
      ],
      e.definitions,
      !0
    ),
  });
  return i;
}
function co(e) {
  e === void 0 && (e = []);
  var t = {};
  return (
    e.forEach(function (n) {
      t[n.name.value] = n;
    }),
    t
  );
}
function ic(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var n = e.name.value;
      if (typeof t == "function") return t(n);
      var r = t && t[n];
      return $(r, 87, n), r || null;
    }
    default:
      return null;
  }
}
function dL(e) {
  var t = !0;
  return (
    Ut(e, {
      FragmentSpread: function (n) {
        if (
          ((t =
            !!n.directives &&
            n.directives.some(function (r) {
              return r.name.value === "unmask";
            })),
          !t)
        )
          return nc;
      },
    }),
    t
  );
}
function hL() {}
class rh {
  constructor(t = 1 / 0, n = hL) {
    (this.max = t), (this.dispose = n), (this.map = new Map()), (this.newest = null), (this.oldest = null);
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const n = this.getNode(t);
    return n && n.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(t) {
    const n = this.map.get(t);
    if (n && n !== this.newest) {
      const { older: r, newer: i } = n;
      i && (i.older = r),
        r && (r.newer = i),
        (n.older = this.newest),
        (n.older.newer = n),
        (n.newer = null),
        (this.newest = n),
        n === this.oldest && (this.oldest = i);
    }
    return n;
  }
  set(t, n) {
    let r = this.getNode(t);
    return r
      ? (r.value = n)
      : ((r = { key: t, value: n, newer: null, older: this.newest }),
        this.newest && (this.newest.newer = r),
        (this.newest = r),
        (this.oldest = this.oldest || r),
        this.map.set(t, r),
        r.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; ) this.delete(this.oldest.key);
  }
  delete(t) {
    const n = this.map.get(t);
    return n
      ? (n === this.newest && (this.newest = n.older),
        n === this.oldest && (this.oldest = n.newer),
        n.newer && (n.newer.older = n.older),
        n.older && (n.older.newer = n.newer),
        this.map.delete(t),
        this.dispose(n.value, t),
        !0)
      : !1;
  }
}
function ih() {}
const pL = ih,
  mL =
    typeof WeakRef < "u"
      ? WeakRef
      : function (e) {
          return { deref: () => e };
        },
  vL = typeof WeakMap < "u" ? WeakMap : Map,
  yL =
    typeof FinalizationRegistry < "u"
      ? FinalizationRegistry
      : function () {
          return { register: ih, unregister: ih };
        },
  gL = 10024;
class yu {
  constructor(t = 1 / 0, n = pL) {
    (this.max = t),
      (this.dispose = n),
      (this.map = new vL()),
      (this.newest = null),
      (this.oldest = null),
      (this.unfinalizedNodes = new Set()),
      (this.finalizationScheduled = !1),
      (this.size = 0),
      (this.finalize = () => {
        const r = this.unfinalizedNodes.values();
        for (let i = 0; i < gL; i++) {
          const o = r.next().value;
          if (!o) break;
          this.unfinalizedNodes.delete(o);
          const s = o.key;
          delete o.key, (o.keyRef = new mL(s)), this.registry.register(s, o, o);
        }
        this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : (this.finalizationScheduled = !1);
      }),
      (this.registry = new yL(this.deleteNode.bind(this)));
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const n = this.getNode(t);
    return n && n.value;
  }
  getNode(t) {
    const n = this.map.get(t);
    if (n && n !== this.newest) {
      const { older: r, newer: i } = n;
      i && (i.older = r),
        r && (r.newer = i),
        (n.older = this.newest),
        (n.older.newer = n),
        (n.newer = null),
        (this.newest = n),
        n === this.oldest && (this.oldest = i);
    }
    return n;
  }
  set(t, n) {
    let r = this.getNode(t);
    return r
      ? (r.value = n)
      : ((r = { key: t, value: n, newer: null, older: this.newest }),
        this.newest && (this.newest.newer = r),
        (this.newest = r),
        (this.oldest = this.oldest || r),
        this.scheduleFinalization(r),
        this.map.set(t, r),
        this.size++,
        r.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; ) this.deleteNode(this.oldest);
  }
  deleteNode(t) {
    t === this.newest && (this.newest = t.older),
      t === this.oldest && (this.oldest = t.newer),
      t.newer && (t.newer.older = t.older),
      t.older && (t.older.newer = t.newer),
      this.size--;
    const n = t.key || (t.keyRef && t.keyRef.deref());
    this.dispose(t.value, n),
      t.keyRef ? this.registry.unregister(t) : this.unfinalizedNodes.delete(t),
      n && this.map.delete(n);
  }
  delete(t) {
    const n = this.map.get(t);
    return n ? (this.deleteNode(n), !0) : !1;
  }
  scheduleFinalization(t) {
    this.unfinalizedNodes.add(t),
      this.finalizationScheduled || ((this.finalizationScheduled = !0), queueMicrotask(this.finalize));
  }
}
var vf = new WeakSet();
function z_(e) {
  e.size <= (e.max || -1) ||
    vf.has(e) ||
    (vf.add(e),
    setTimeout(function () {
      e.clean(), vf.delete(e);
    }, 100));
}
var B_ = function (e, t) {
    var n = new yu(e, t);
    return (
      (n.set = function (r, i) {
        var o = yu.prototype.set.call(this, r, i);
        return z_(this), o;
      }),
      n
    );
  },
  wL = function (e, t) {
    var n = new rh(e, t);
    return (
      (n.set = function (r, i) {
        var o = rh.prototype.set.call(this, r, i);
        return z_(this), o;
      }),
      n
    );
  },
  SL = Symbol.for("apollo.cacheSize"),
  bn = P({}, eh[SL]),
  xr = {};
function U_(e, t) {
  xr[e] = t;
}
var bL = globalThis.__DEV__ !== !1 ? TL : void 0,
  xL = globalThis.__DEV__ !== !1 ? PL : void 0,
  _L = globalThis.__DEV__ !== !1 ? W_ : void 0;
function EL() {
  var e = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4,
  };
  return Object.fromEntries(
    Object.entries(e).map(function (t) {
      var n = t[0],
        r = t[1];
      return [n, bn[n] || r];
    })
  );
}
function TL() {
  var e, t, n, r, i;
  if (globalThis.__DEV__ === !1) throw new Error("only supported in development mode");
  return {
    limits: EL(),
    sizes: P(
      {
        print: (e = xr.print) === null || e === void 0 ? void 0 : e.call(xr),
        parser: (t = xr.parser) === null || t === void 0 ? void 0 : t.call(xr),
        canonicalStringify: (n = xr.canonicalStringify) === null || n === void 0 ? void 0 : n.call(xr),
        links: sh(this.link),
        queryManager: {
          getDocumentInfo: this.queryManager.transformCache.size,
          documentTransforms: q_(this.queryManager.documentTransform),
        },
      },
      (i = (r = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(r)
    ),
  };
}
function W_() {
  return { cache: { fragmentQueryDocuments: Vn(this.getFragmentDoc) } };
}
function PL() {
  var e = this.config.fragments;
  return P(P({}, W_.apply(this)), {
    addTypenameDocumentTransform: q_(this.addTypenameTransform),
    inMemoryCache: {
      executeSelectionSet: Vn(this.storeReader.executeSelectionSet),
      executeSubSelectedArray: Vn(this.storeReader.executeSubSelectedArray),
      maybeBroadcastWatch: Vn(this.maybeBroadcastWatch),
    },
    fragmentRegistry: {
      findFragmentSpreads: Vn(e == null ? void 0 : e.findFragmentSpreads),
      lookup: Vn(e == null ? void 0 : e.lookup),
      transform: Vn(e == null ? void 0 : e.transform),
    },
  });
}
function CL(e) {
  return !!e && "dirtyKey" in e;
}
function Vn(e) {
  return CL(e) ? e.size : void 0;
}
function Q_(e) {
  return e != null;
}
function q_(e) {
  return oh(e).map(function (t) {
    return { cache: t };
  });
}
function oh(e) {
  return e
    ? Ke(
        Ke([Vn(e == null ? void 0 : e.performWork)], oh(e == null ? void 0 : e.left), !0),
        oh(e == null ? void 0 : e.right),
        !0
      ).filter(Q_)
    : [];
}
function sh(e) {
  var t;
  return e
    ? Ke(
        Ke(
          [(t = e == null ? void 0 : e.getMemoryInternals) === null || t === void 0 ? void 0 : t.call(e)],
          sh(e == null ? void 0 : e.left),
          !0
        ),
        sh(e == null ? void 0 : e.right),
        !0
      ).filter(Q_)
    : [];
}
var er = Object.assign(
  function (t) {
    return JSON.stringify(t, kL);
  },
  {
    reset: function () {
      Ei = new wL(bn.canonicalStringify || 1e3);
    },
  }
);
globalThis.__DEV__ !== !1 &&
  U_("canonicalStringify", function () {
    return Ei.size;
  });
var Ei;
er.reset();
function kL(e, t) {
  if (t && typeof t == "object") {
    var n = Object.getPrototypeOf(t);
    if (n === Object.prototype || n === null) {
      var r = Object.keys(t);
      if (r.every(OL)) return t;
      var i = JSON.stringify(r),
        o = Ei.get(i);
      if (!o) {
        r.sort();
        var s = JSON.stringify(r);
        (o = Ei.get(s) || r), Ei.set(i, o), Ei.set(s, o);
      }
      var a = Object.create(n);
      return (
        o.forEach(function (l) {
          a[l] = t[l];
        }),
        a
      );
    }
  }
  return t;
}
function OL(e, t, n) {
  return t === 0 || n[t - 1] <= e;
}
function Ni(e) {
  return { __ref: String(e) };
}
function ne(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function RL(e) {
  return Te(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function DL(e) {
  return e.kind === "StringValue";
}
function ML(e) {
  return e.kind === "BooleanValue";
}
function AL(e) {
  return e.kind === "IntValue";
}
function IL(e) {
  return e.kind === "FloatValue";
}
function LL(e) {
  return e.kind === "Variable";
}
function FL(e) {
  return e.kind === "ObjectValue";
}
function NL(e) {
  return e.kind === "ListValue";
}
function jL(e) {
  return e.kind === "EnumValue";
}
function VL(e) {
  return e.kind === "NullValue";
}
function eo(e, t, n, r) {
  if (AL(n) || IL(n)) e[t.value] = Number(n.value);
  else if (ML(n) || DL(n)) e[t.value] = n.value;
  else if (FL(n)) {
    var i = {};
    n.fields.map(function (s) {
      return eo(i, s.name, s.value, r);
    }),
      (e[t.value] = i);
  } else if (LL(n)) {
    var o = (r || {})[n.name.value];
    e[t.value] = o;
  } else if (NL(n))
    e[t.value] = n.values.map(function (s) {
      var a = {};
      return eo(a, t, s, r), a[t.value];
    });
  else if (jL(n)) e[t.value] = n.value;
  else if (VL(n)) e[t.value] = null;
  else throw tt(96, t.value, n.kind);
}
function $L(e, t) {
  var n = null;
  e.directives &&
    ((n = {}),
    e.directives.forEach(function (i) {
      (n[i.name.value] = {}),
        i.arguments &&
          i.arguments.forEach(function (o) {
            var s = o.name,
              a = o.value;
            return eo(n[i.name.value], s, a, t);
          });
    }));
  var r = null;
  return (
    e.arguments &&
      e.arguments.length &&
      ((r = {}),
      e.arguments.forEach(function (i) {
        var o = i.name,
          s = i.value;
        return eo(r, o, s, t);
      })),
    H_(e.name.value, r, n)
  );
}
var zL = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"],
  Io = er,
  H_ = Object.assign(
    function (e, t, n) {
      if (t && n && n.connection && n.connection.key)
        if (n.connection.filter && n.connection.filter.length > 0) {
          var r = n.connection.filter ? n.connection.filter : [];
          r.sort();
          var i = {};
          return (
            r.forEach(function (a) {
              i[a] = t[a];
            }),
            "".concat(n.connection.key, "(").concat(Io(i), ")")
          );
        } else return n.connection.key;
      var o = e;
      if (t) {
        var s = Io(t);
        o += "(".concat(s, ")");
      }
      return (
        n &&
          Object.keys(n).forEach(function (a) {
            zL.indexOf(a) === -1 &&
              (n[a] && Object.keys(n[a]).length
                ? (o += "@".concat(a, "(").concat(Io(n[a]), ")"))
                : (o += "@".concat(a)));
          }),
        o
      );
    },
    {
      setStringify: function (e) {
        var t = Io;
        return (Io = e), t;
      },
    }
  );
function oc(e, t) {
  if (e.arguments && e.arguments.length) {
    var n = {};
    return (
      e.arguments.forEach(function (r) {
        var i = r.name,
          o = r.value;
        return eo(n, i, o, t);
      }),
      n
    );
  }
  return null;
}
function xn(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function ah(e, t, n) {
  for (var r, i = 0, o = t.selections; i < o.length; i++) {
    var s = o[i];
    if (sr(s)) {
      if (s.name.value === "__typename") return e[xn(s)];
    } else r ? r.push(s) : (r = [s]);
  }
  if (typeof e.__typename == "string") return e.__typename;
  if (r)
    for (var a = 0, l = r; a < l.length; a++) {
      var s = l[a],
        u = ah(e, ic(s, n).selectionSet, n);
      if (typeof u == "string") return u;
    }
}
function sr(e) {
  return e.kind === "Field";
}
function BL(e) {
  return e.kind === "InlineFragment";
}
function fo(e) {
  $(e && e.kind === "Document", 88);
  var t = e.definitions
    .filter(function (n) {
      return n.kind !== "FragmentDefinition";
    })
    .map(function (n) {
      if (n.kind !== "OperationDefinition") throw tt(89, n.kind);
      return n;
    });
  return $(t.length <= 1, 90, t.length), e;
}
function Wr(e) {
  return (
    fo(e),
    e.definitions.filter(function (t) {
      return t.kind === "OperationDefinition";
    })[0]
  );
}
function rs(e) {
  return (
    e.definitions
      .filter(function (t) {
        return t.kind === "OperationDefinition" && !!t.name;
      })
      .map(function (t) {
        return t.name.value;
      })[0] || null
  );
}
function ho(e) {
  return e.definitions.filter(function (t) {
    return t.kind === "FragmentDefinition";
  });
}
function G_(e) {
  var t = Wr(e);
  return $(t && t.operation === "query", 91), t;
}
function K_(e) {
  $(e.kind === "Document", 92), $(e.definitions.length <= 1, 93);
  var t = e.definitions[0];
  return $(t.kind === "FragmentDefinition", 94), t;
}
function ha(e) {
  fo(e);
  for (var t, n = 0, r = e.definitions; n < r.length; n++) {
    var i = r[n];
    if (i.kind === "OperationDefinition") {
      var o = i.operation;
      if (o === "query" || o === "mutation" || o === "subscription") return i;
    }
    i.kind === "FragmentDefinition" && !t && (t = i);
  }
  if (t) return t;
  throw tt(95);
}
function mm(e) {
  var t = Object.create(null),
    n = e && e.variableDefinitions;
  return (
    n &&
      n.length &&
      n.forEach(function (r) {
        r.defaultValue && eo(t, r.variable.name, r.defaultValue);
      }),
    t
  );
}
let Ne = null;
const Vg = {};
let UL = 1;
const WL = () =>
  class {
    constructor() {
      this.id = ["slot", UL++, Date.now(), Math.random().toString(36).slice(2)].join(":");
    }
    hasValue() {
      for (let t = Ne; t; t = t.parent)
        if (this.id in t.slots) {
          const n = t.slots[this.id];
          if (n === Vg) break;
          return t !== Ne && (Ne.slots[this.id] = n), !0;
        }
      return Ne && (Ne.slots[this.id] = Vg), !1;
    }
    getValue() {
      if (this.hasValue()) return Ne.slots[this.id];
    }
    withValue(t, n, r, i) {
      const o = { __proto__: null, [this.id]: t },
        s = Ne;
      Ne = { parent: s, slots: o };
      try {
        return n.apply(i, r);
      } finally {
        Ne = s;
      }
    }
    static bind(t) {
      const n = Ne;
      return function () {
        const r = Ne;
        try {
          return (Ne = n), t.apply(this, arguments);
        } finally {
          Ne = r;
        }
      };
    }
    static noContext(t, n, r) {
      if (Ne) {
        const i = Ne;
        try {
          return (Ne = null), t.apply(r, n);
        } finally {
          Ne = i;
        }
      } else return t.apply(r, n);
    }
  };
function $g(e) {
  try {
    return e();
  } catch {}
}
const yf = "@wry/context:Slot",
  QL = $g(() => globalThis) || $g(() => global) || Object.create(null),
  zg = QL,
  sc =
    zg[yf] ||
    Array[yf] ||
    (function (e) {
      try {
        Object.defineProperty(zg, yf, { value: e, enumerable: !1, writable: !1, configurable: !0 });
      } finally {
        return e;
      }
    })(WL()),
  { bind: O5, noContext: R5 } = sc,
  ac = new sc(),
  { hasOwnProperty: qL } = Object.prototype,
  vm =
    Array.from ||
    function (e) {
      const t = [];
      return e.forEach((n) => t.push(n)), t;
    };
function ym(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && ((e.unsubscribe = void 0), t());
}
const Ys = [],
  HL = 100;
function to(e, t) {
  if (!e) throw new Error(t || "assertion failure");
}
function Y_(e, t) {
  const n = e.length;
  return n > 0 && n === t.length && e[n - 1] === t[n - 1];
}
function X_(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function J_(e) {
  return e.slice(0);
}
class lc {
  constructor(t) {
    (this.fn = t),
      (this.parents = new Set()),
      (this.childValues = new Map()),
      (this.dirtyChildren = null),
      (this.dirty = !0),
      (this.recomputing = !1),
      (this.value = []),
      (this.deps = null),
      ++lc.count;
  }
  peek() {
    if (this.value.length === 1 && !ar(this)) return Bg(this), this.value[0];
  }
  recompute(t) {
    return to(!this.recomputing, "already recomputing"), Bg(this), ar(this) ? GL(this, t) : X_(this.value);
  }
  setDirty() {
    this.dirty || ((this.dirty = !0), Z_(this), ym(this));
  }
  dispose() {
    this.setDirty(),
      iE(this),
      gm(this, (t, n) => {
        t.setDirty(), oE(t, this);
      });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = Ys.pop() || new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps &&
      (vm(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), Ys.push(this.deps), (this.deps = null));
  }
}
lc.count = 0;
function Bg(e) {
  const t = ac.getValue();
  if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), ar(e) ? tE(t, e) : nE(t, e), t;
}
function GL(e, t) {
  return iE(e), ac.withValue(e, KL, [e, t]), XL(e, t) && YL(e), X_(e.value);
}
function KL(e, t) {
  e.recomputing = !0;
  const { normalizeResult: n } = e;
  let r;
  n && e.value.length === 1 && (r = J_(e.value)), (e.value.length = 0);
  try {
    if (((e.value[0] = e.fn.apply(null, t)), n && r && !Y_(r, e.value)))
      try {
        e.value[0] = n(e.value[0], r[0]);
      } catch {}
  } catch (i) {
    e.value[1] = i;
  }
  e.recomputing = !1;
}
function ar(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function YL(e) {
  (e.dirty = !1), !ar(e) && eE(e);
}
function Z_(e) {
  gm(e, tE);
}
function eE(e) {
  gm(e, nE);
}
function gm(e, t) {
  const n = e.parents.size;
  if (n) {
    const r = vm(e.parents);
    for (let i = 0; i < n; ++i) t(r[i], e);
  }
}
function tE(e, t) {
  to(e.childValues.has(t)), to(ar(t));
  const n = !ar(e);
  if (!e.dirtyChildren) e.dirtyChildren = Ys.pop() || new Set();
  else if (e.dirtyChildren.has(t)) return;
  e.dirtyChildren.add(t), n && Z_(e);
}
function nE(e, t) {
  to(e.childValues.has(t)), to(!ar(t));
  const n = e.childValues.get(t);
  n.length === 0 ? e.childValues.set(t, J_(t.value)) : Y_(n, t.value) || e.setDirty(), rE(e, t), !ar(e) && eE(e);
}
function rE(e, t) {
  const n = e.dirtyChildren;
  n && (n.delete(t), n.size === 0 && (Ys.length < HL && Ys.push(n), (e.dirtyChildren = null)));
}
function iE(e) {
  e.childValues.size > 0 &&
    e.childValues.forEach((t, n) => {
      oE(e, n);
    }),
    e.forgetDeps(),
    to(e.dirtyChildren === null);
}
function oE(e, t) {
  t.parents.delete(e), e.childValues.delete(t), rE(e, t);
}
function XL(e, t) {
  if (typeof e.subscribe == "function")
    try {
      ym(e), (e.unsubscribe = e.subscribe.apply(null, t));
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const JL = { setDirty: !0, dispose: !0, forget: !0 };
function sE(e) {
  const t = new Map();
  function n(r) {
    const i = ac.getValue();
    if (i) {
      let o = t.get(r);
      o || t.set(r, (o = new Set())), i.dependOn(o);
    }
  }
  return (
    (n.dirty = function (i, o) {
      const s = t.get(i);
      if (s) {
        const a = o && qL.call(JL, o) ? o : "setDirty";
        vm(s).forEach((l) => l[a]()), t.delete(i), ym(s);
      }
    }),
    n
  );
}
let Ug;
function ZL(...e) {
  return (Ug || (Ug = new Pn(typeof WeakMap == "function"))).lookupArray(e);
}
const gf = new Set();
function Xs(
  e,
  {
    max: t = Math.pow(2, 16),
    keyArgs: n,
    makeCacheKey: r = ZL,
    normalizeResult: i,
    subscribe: o,
    cache: s = rh,
  } = Object.create(null)
) {
  const a = typeof s == "function" ? new s(t, (d) => d.dispose()) : s,
    l = function () {
      const d = r.apply(null, n ? n.apply(null, arguments) : arguments);
      if (d === void 0) return e.apply(null, arguments);
      let h = a.get(d);
      h || (a.set(d, (h = new lc(e))), (h.normalizeResult = i), (h.subscribe = o), (h.forget = () => a.delete(d)));
      const v = h.recompute(Array.prototype.slice.call(arguments));
      return a.set(d, h), gf.add(a), ac.hasValue() || (gf.forEach((y) => y.clean()), gf.clear()), v;
    };
  Object.defineProperty(l, "size", { get: () => a.size, configurable: !1, enumerable: !1 }),
    Object.freeze((l.options = { max: t, keyArgs: n, makeCacheKey: r, normalizeResult: i, subscribe: o, cache: a }));
  function u(d) {
    const h = d && a.get(d);
    h && h.setDirty();
  }
  (l.dirtyKey = u),
    (l.dirty = function () {
      u(r.apply(null, arguments));
    });
  function c(d) {
    const h = d && a.get(d);
    if (h) return h.peek();
  }
  (l.peekKey = c),
    (l.peek = function () {
      return c(r.apply(null, arguments));
    });
  function f(d) {
    return d ? a.delete(d) : !1;
  }
  return (
    (l.forgetKey = f),
    (l.forget = function () {
      return f(r.apply(null, arguments));
    }),
    (l.makeCacheKey = r),
    (l.getKey = n
      ? function () {
          return r.apply(null, n.apply(null, arguments));
        }
      : r),
    Object.freeze(l)
  );
}
function eF(e) {
  return e;
}
var aE = (function () {
    function e(t, n) {
      n === void 0 && (n = Object.create(null)),
        (this.resultCache = hm ? new WeakSet() : new Set()),
        (this.transform = t),
        n.getCacheKey && (this.getCacheKey = n.getCacheKey),
        (this.cached = n.cache !== !1),
        this.resetCache();
    }
    return (
      (e.prototype.getCacheKey = function (t) {
        return [t];
      }),
      (e.identity = function () {
        return new e(eF, { cache: !1 });
      }),
      (e.split = function (t, n, r) {
        return (
          r === void 0 && (r = e.identity()),
          Object.assign(
            new e(
              function (i) {
                var o = t(i) ? n : r;
                return o.transformDocument(i);
              },
              { cache: !1 }
            ),
            { left: n, right: r }
          )
        );
      }),
      (e.prototype.resetCache = function () {
        var t = this;
        if (this.cached) {
          var n = new Pn(Yr);
          this.performWork = Xs(e.prototype.performWork.bind(this), {
            makeCacheKey: function (r) {
              var i = t.getCacheKey(r);
              if (i) return $(Array.isArray(i), 77), n.lookupArray(i);
            },
            max: bn["documentTransform.cache"],
            cache: yu,
          });
        }
      }),
      (e.prototype.performWork = function (t) {
        return fo(t), this.transform(t);
      }),
      (e.prototype.transformDocument = function (t) {
        if (this.resultCache.has(t)) return t;
        var n = this.performWork(t);
        return this.resultCache.add(n), n;
      }),
      (e.prototype.concat = function (t) {
        var n = this;
        return Object.assign(
          new e(
            function (r) {
              return t.transformDocument(n.transformDocument(r));
            },
            { cache: !1 }
          ),
          { left: this, right: t }
        );
      }),
      e
    );
  })(),
  ws,
  Mr = Object.assign(
    function (e) {
      var t = ws.get(e);
      return t || ((t = JI(e)), ws.set(e, t)), t;
    },
    {
      reset: function () {
        ws = new B_(bn.print || 2e3);
      },
    }
  );
Mr.reset();
globalThis.__DEV__ !== !1 &&
  U_("print", function () {
    return ws ? ws.size : 0;
  });
var Pe = Array.isArray;
function Xt(e) {
  return Array.isArray(e) && e.length > 0;
}
var Wg = { kind: ue.FIELD, name: { kind: ue.NAME, value: "__typename" } };
function lE(e, t) {
  return (
    !e ||
    e.selectionSet.selections.every(function (n) {
      return n.kind === ue.FRAGMENT_SPREAD && lE(t[n.name.value], t);
    })
  );
}
function tF(e) {
  return lE(Wr(e) || K_(e), co(ho(e))) ? null : e;
}
function nF(e) {
  var t = new Map(),
    n = new Map();
  return (
    e.forEach(function (r) {
      r && (r.name ? t.set(r.name, r) : r.test && n.set(r.test, r));
    }),
    function (r) {
      var i = t.get(r.name.value);
      return (
        !i &&
          n.size &&
          n.forEach(function (o, s) {
            s(r) && (i = o);
          }),
        i
      );
    }
  );
}
function Qg(e) {
  var t = new Map();
  return function (r) {
    r === void 0 && (r = e);
    var i = t.get(r);
    return i || t.set(r, (i = { variables: new Set(), fragmentSpreads: new Set() })), i;
  };
}
function uE(e, t) {
  fo(t);
  for (
    var n = Qg(""),
      r = Qg(""),
      i = function (p) {
        for (var m = 0, g = void 0; m < p.length && (g = p[m]); ++m)
          if (!Pe(g)) {
            if (g.kind === ue.OPERATION_DEFINITION) return n(g.name && g.name.value);
            if (g.kind === ue.FRAGMENT_DEFINITION) return r(g.name.value);
          }
        return globalThis.__DEV__ !== !1 && $.error(97), null;
      },
      o = 0,
      s = t.definitions.length - 1;
    s >= 0;
    --s
  )
    t.definitions[s].kind === ue.OPERATION_DEFINITION && ++o;
  var a = nF(e),
    l = function (p) {
      return (
        Xt(p) &&
        p.map(a).some(function (m) {
          return m && m.remove;
        })
      );
    },
    u = new Map(),
    c = !1,
    f = {
      enter: function (p) {
        if (l(p.directives)) return (c = !0), null;
      },
    },
    d = Ut(t, {
      Field: f,
      InlineFragment: f,
      VariableDefinition: {
        enter: function () {
          return !1;
        },
      },
      Variable: {
        enter: function (p, m, g, b, S) {
          var _ = i(S);
          _ && _.variables.add(p.name.value);
        },
      },
      FragmentSpread: {
        enter: function (p, m, g, b, S) {
          if (l(p.directives)) return (c = !0), null;
          var _ = i(S);
          _ && _.fragmentSpreads.add(p.name.value);
        },
      },
      FragmentDefinition: {
        enter: function (p, m, g, b) {
          u.set(JSON.stringify(b), p);
        },
        leave: function (p, m, g, b) {
          var S = u.get(JSON.stringify(b));
          if (p === S) return p;
          if (
            o > 0 &&
            p.selectionSet.selections.every(function (_) {
              return _.kind === ue.FIELD && _.name.value === "__typename";
            })
          )
            return (r(p.name.value).removed = !0), (c = !0), null;
        },
      },
      Directive: {
        leave: function (p) {
          if (a(p)) return (c = !0), null;
        },
      },
    });
  if (!c) return t;
  var h = function (p) {
      return (
        p.transitiveVars ||
          ((p.transitiveVars = new Set(p.variables)),
          p.removed ||
            p.fragmentSpreads.forEach(function (m) {
              h(r(m)).transitiveVars.forEach(function (g) {
                p.transitiveVars.add(g);
              });
            })),
        p
      );
    },
    v = new Set();
  d.definitions.forEach(function (p) {
    p.kind === ue.OPERATION_DEFINITION
      ? h(n(p.name && p.name.value)).fragmentSpreads.forEach(function (m) {
          v.add(m);
        })
      : p.kind === ue.FRAGMENT_DEFINITION && o === 0 && !r(p.name.value).removed && v.add(p.name.value);
  }),
    v.forEach(function (p) {
      h(r(p)).fragmentSpreads.forEach(function (m) {
        v.add(m);
      });
    });
  var y = function (p) {
      return !!(!v.has(p) || r(p).removed);
    },
    w = {
      enter: function (p) {
        if (y(p.name.value)) return null;
      },
    };
  return tF(
    Ut(d, {
      FragmentSpread: w,
      FragmentDefinition: w,
      OperationDefinition: {
        leave: function (p) {
          if (p.variableDefinitions) {
            var m = h(n(p.name && p.name.value)).transitiveVars;
            if (m.size < p.variableDefinitions.length)
              return P(P({}, p), {
                variableDefinitions: p.variableDefinitions.filter(function (g) {
                  return m.has(g.variable.name.value);
                }),
              });
          }
        },
      },
    })
  );
}
var wm = Object.assign(
  function (e) {
    return Ut(e, {
      SelectionSet: {
        enter: function (t, n, r) {
          if (!(r && r.kind === ue.OPERATION_DEFINITION)) {
            var i = t.selections;
            if (i) {
              var o = i.some(function (a) {
                return sr(a) && (a.name.value === "__typename" || a.name.value.lastIndexOf("__", 0) === 0);
              });
              if (!o) {
                var s = r;
                if (
                  !(
                    sr(s) &&
                    s.directives &&
                    s.directives.some(function (a) {
                      return a.name.value === "export";
                    })
                  )
                )
                  return P(P({}, t), { selections: Ke(Ke([], i, !0), [Wg], !1) });
              }
            }
          }
        },
      },
    });
  },
  {
    added: function (e) {
      return e === Wg;
    },
  }
);
function rF(e) {
  var t = ha(e),
    n = t.operation;
  if (n === "query") return e;
  var r = Ut(e, {
    OperationDefinition: {
      enter: function (i) {
        return P(P({}, i), { operation: "query" });
      },
    },
  });
  return r;
}
function cE(e) {
  fo(e);
  var t = uE(
    [
      {
        test: function (n) {
          return n.name.value === "client";
        },
        remove: !0,
      },
    ],
    e
  );
  return t;
}
function iF(e) {
  return (
    fo(e),
    Ut(e, {
      FragmentSpread: function (t) {
        var n;
        if (
          !(
            !((n = t.directives) === null || n === void 0) &&
            n.some(function (r) {
              return r.name.value === "unmask";
            })
          )
        )
          return P(P({}, t), {
            directives: Ke(
              Ke([], t.directives || [], !0),
              [{ kind: ue.DIRECTIVE, name: { kind: ue.NAME, value: "nonreactive" } }],
              !1
            ),
          });
      },
    })
  );
}
var oF = Object.prototype.hasOwnProperty;
function qg() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return uc(e);
}
function uc(e) {
  var t = e[0] || {},
    n = e.length;
  if (n > 1) for (var r = new lr(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
  return t;
}
var sF = function (e, t, n) {
    return this.merge(e[n], t[n]);
  },
  lr = (function () {
    function e(t) {
      t === void 0 && (t = sF), (this.reconciler = t), (this.isObject = Te), (this.pastCopies = new Set());
    }
    return (
      (e.prototype.merge = function (t, n) {
        for (var r = this, i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
        return Te(n) && Te(t)
          ? (Object.keys(n).forEach(function (s) {
              if (oF.call(t, s)) {
                var a = t[s];
                if (n[s] !== a) {
                  var l = r.reconciler.apply(r, Ke([t, n, s], i, !1));
                  l !== a && ((t = r.shallowCopyForMerge(t)), (t[s] = l));
                }
              } else (t = r.shallowCopyForMerge(t)), (t[s] = n[s]);
            }),
            t)
          : n;
      }),
      (e.prototype.shallowCopyForMerge = function (t) {
        return (
          Te(t) &&
            (this.pastCopies.has(t) ||
              (Array.isArray(t) ? (t = t.slice(0)) : (t = P({ __proto__: Object.getPrototypeOf(t) }, t)),
              this.pastCopies.add(t))),
          t
        );
      }),
      e
    );
  })();
function aF(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = lF(e)) || t) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lF(e, t) {
  if (e) {
    if (typeof e == "string") return Hg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")) return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hg(e, t);
  }
}
function Hg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Gg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Sm(e, t, n) {
  return t && Gg(e.prototype, t), n && Gg(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var bm = function () {
    return typeof Symbol == "function";
  },
  xm = function (e) {
    return bm() && !!Symbol[e];
  },
  _m = function (e) {
    return xm(e) ? Symbol[e] : "@@" + e;
  };
bm() && !xm("observable") && (Symbol.observable = Symbol("observable"));
var uF = _m("iterator"),
  lh = _m("observable"),
  fE = _m("species");
function gu(e, t) {
  var n = e[t];
  if (n != null) {
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    return n;
  }
}
function Lo(e) {
  var t = e.constructor;
  return t !== void 0 && ((t = t[fE]), t === null && (t = void 0)), t !== void 0 ? t : ae;
}
function cF(e) {
  return e instanceof ae;
}
function no(e) {
  no.log
    ? no.log(e)
    : setTimeout(function () {
        throw e;
      });
}
function bl(e) {
  Promise.resolve().then(function () {
    try {
      e();
    } catch (t) {
      no(t);
    }
  });
}
function dE(e) {
  var t = e._cleanup;
  if (t !== void 0 && ((e._cleanup = void 0), !!t))
    try {
      if (typeof t == "function") t();
      else {
        var n = gu(t, "unsubscribe");
        n && n.call(t);
      }
    } catch (r) {
      no(r);
    }
}
function uh(e) {
  (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
}
function fF(e) {
  var t = e._queue;
  if (t) {
    (e._queue = void 0), (e._state = "ready");
    for (var n = 0; n < t.length && (hE(e, t[n].type, t[n].value), e._state !== "closed"); ++n);
  }
}
function hE(e, t, n) {
  e._state = "running";
  var r = e._observer;
  try {
    var i = gu(r, t);
    switch (t) {
      case "next":
        i && i.call(r, n);
        break;
      case "error":
        if ((uh(e), i)) i.call(r, n);
        else throw n;
        break;
      case "complete":
        uh(e), i && i.call(r);
        break;
    }
  } catch (o) {
    no(o);
  }
  e._state === "closed" ? dE(e) : e._state === "running" && (e._state = "ready");
}
function wf(e, t, n) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({ type: t, value: n });
      return;
    }
    if (e._state !== "ready") {
      (e._state = "buffering"),
        (e._queue = [{ type: t, value: n }]),
        bl(function () {
          return fF(e);
        });
      return;
    }
    hE(e, t, n);
  }
}
var dF = (function () {
    function e(n, r) {
      (this._cleanup = void 0), (this._observer = n), (this._queue = void 0), (this._state = "initializing");
      var i = new hF(this);
      try {
        this._cleanup = r.call(void 0, i);
      } catch (o) {
        i.error(o);
      }
      this._state === "initializing" && (this._state = "ready");
    }
    var t = e.prototype;
    return (
      (t.unsubscribe = function () {
        this._state !== "closed" && (uh(this), dE(this));
      }),
      Sm(e, [
        {
          key: "closed",
          get: function () {
            return this._state === "closed";
          },
        },
      ]),
      e
    );
  })(),
  hF = (function () {
    function e(n) {
      this._subscription = n;
    }
    var t = e.prototype;
    return (
      (t.next = function (r) {
        wf(this._subscription, "next", r);
      }),
      (t.error = function (r) {
        wf(this._subscription, "error", r);
      }),
      (t.complete = function () {
        wf(this._subscription, "complete");
      }),
      Sm(e, [
        {
          key: "closed",
          get: function () {
            return this._subscription._state === "closed";
          },
        },
      ]),
      e
    );
  })(),
  ae = (function () {
    function e(n) {
      if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
      if (typeof n != "function") throw new TypeError("Observable initializer must be a function");
      this._subscriber = n;
    }
    var t = e.prototype;
    return (
      (t.subscribe = function (r) {
        return (
          (typeof r != "object" || r === null) && (r = { next: r, error: arguments[1], complete: arguments[2] }),
          new dF(r, this._subscriber)
        );
      }),
      (t.forEach = function (r) {
        var i = this;
        return new Promise(function (o, s) {
          if (typeof r != "function") {
            s(new TypeError(r + " is not a function"));
            return;
          }
          function a() {
            l.unsubscribe(), o();
          }
          var l = i.subscribe({
            next: function (u) {
              try {
                r(u, a);
              } catch (c) {
                s(c), l.unsubscribe();
              }
            },
            error: s,
            complete: o,
          });
        });
      }),
      (t.map = function (r) {
        var i = this;
        if (typeof r != "function") throw new TypeError(r + " is not a function");
        var o = Lo(this);
        return new o(function (s) {
          return i.subscribe({
            next: function (a) {
              try {
                a = r(a);
              } catch (l) {
                return s.error(l);
              }
              s.next(a);
            },
            error: function (a) {
              s.error(a);
            },
            complete: function () {
              s.complete();
            },
          });
        });
      }),
      (t.filter = function (r) {
        var i = this;
        if (typeof r != "function") throw new TypeError(r + " is not a function");
        var o = Lo(this);
        return new o(function (s) {
          return i.subscribe({
            next: function (a) {
              try {
                if (!r(a)) return;
              } catch (l) {
                return s.error(l);
              }
              s.next(a);
            },
            error: function (a) {
              s.error(a);
            },
            complete: function () {
              s.complete();
            },
          });
        });
      }),
      (t.reduce = function (r) {
        var i = this;
        if (typeof r != "function") throw new TypeError(r + " is not a function");
        var o = Lo(this),
          s = arguments.length > 1,
          a = !1,
          l = arguments[1],
          u = l;
        return new o(function (c) {
          return i.subscribe({
            next: function (f) {
              var d = !a;
              if (((a = !0), !d || s))
                try {
                  u = r(u, f);
                } catch (h) {
                  return c.error(h);
                }
              else u = f;
            },
            error: function (f) {
              c.error(f);
            },
            complete: function () {
              if (!a && !s) return c.error(new TypeError("Cannot reduce an empty sequence"));
              c.next(u), c.complete();
            },
          });
        });
      }),
      (t.concat = function () {
        for (var r = this, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        var a = Lo(this);
        return new a(function (l) {
          var u,
            c = 0;
          function f(d) {
            u = d.subscribe({
              next: function (h) {
                l.next(h);
              },
              error: function (h) {
                l.error(h);
              },
              complete: function () {
                c === o.length ? ((u = void 0), l.complete()) : f(a.from(o[c++]));
              },
            });
          }
          return (
            f(r),
            function () {
              u && (u.unsubscribe(), (u = void 0));
            }
          );
        });
      }),
      (t.flatMap = function (r) {
        var i = this;
        if (typeof r != "function") throw new TypeError(r + " is not a function");
        var o = Lo(this);
        return new o(function (s) {
          var a = [],
            l = i.subscribe({
              next: function (c) {
                if (r)
                  try {
                    c = r(c);
                  } catch (d) {
                    return s.error(d);
                  }
                var f = o.from(c).subscribe({
                  next: function (d) {
                    s.next(d);
                  },
                  error: function (d) {
                    s.error(d);
                  },
                  complete: function () {
                    var d = a.indexOf(f);
                    d >= 0 && a.splice(d, 1), u();
                  },
                });
                a.push(f);
              },
              error: function (c) {
                s.error(c);
              },
              complete: function () {
                u();
              },
            });
          function u() {
            l.closed && a.length === 0 && s.complete();
          }
          return function () {
            a.forEach(function (c) {
              return c.unsubscribe();
            }),
              l.unsubscribe();
          };
        });
      }),
      (t[lh] = function () {
        return this;
      }),
      (e.from = function (r) {
        var i = typeof this == "function" ? this : e;
        if (r == null) throw new TypeError(r + " is not an object");
        var o = gu(r, lh);
        if (o) {
          var s = o.call(r);
          if (Object(s) !== s) throw new TypeError(s + " is not an object");
          return cF(s) && s.constructor === i
            ? s
            : new i(function (a) {
                return s.subscribe(a);
              });
        }
        if (xm("iterator") && ((o = gu(r, uF)), o))
          return new i(function (a) {
            bl(function () {
              if (!a.closed) {
                for (var l = aF(o.call(r)), u; !(u = l()).done; ) {
                  var c = u.value;
                  if ((a.next(c), a.closed)) return;
                }
                a.complete();
              }
            });
          });
        if (Array.isArray(r))
          return new i(function (a) {
            bl(function () {
              if (!a.closed) {
                for (var l = 0; l < r.length; ++l) if ((a.next(r[l]), a.closed)) return;
                a.complete();
              }
            });
          });
        throw new TypeError(r + " is not observable");
      }),
      (e.of = function () {
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        var s = typeof this == "function" ? this : e;
        return new s(function (a) {
          bl(function () {
            if (!a.closed) {
              for (var l = 0; l < i.length; ++l) if ((a.next(i[l]), a.closed)) return;
              a.complete();
            }
          });
        });
      }),
      Sm(e, null, [
        {
          key: fE,
          get: function () {
            return this;
          },
        },
      ]),
      e
    );
  })();
bm() &&
  Object.defineProperty(ae, Symbol("extensions"), { value: { symbol: lh, hostReportError: no }, configurable: !0 });
function pF(e) {
  var t,
    n = e.Symbol;
  if (typeof n == "function")
    if (n.observable) t = n.observable;
    else {
      typeof n.for == "function"
        ? (t = n.for("https://github.com/benlesh/symbol-observable"))
        : (t = n("https://github.com/benlesh/symbol-observable"));
      try {
        n.observable = t;
      } catch {}
    }
  else t = "@@observable";
  return t;
}
var ri;
typeof self < "u"
  ? (ri = self)
  : typeof window < "u"
    ? (ri = window)
    : typeof global < "u"
      ? (ri = global)
      : typeof module < "u"
        ? (ri = module)
        : (ri = Function("return this")());
pF(ri);
var Kg = ae.prototype,
  Yg = "@@observable";
Kg[Yg] ||
  (Kg[Yg] = function () {
    return this;
  });
function mF(e) {
  return e.catch(function () {}), e;
}
var vF = Object.prototype.toString;
function pE(e) {
  return ch(e);
}
function ch(e, t) {
  switch (vF.call(e)) {
    case "[object Array]": {
      if (((t = t || new Map()), t.has(e))) return t.get(e);
      var n = e.slice(0);
      return (
        t.set(e, n),
        n.forEach(function (i, o) {
          n[o] = ch(i, t);
        }),
        n
      );
    }
    case "[object Object]": {
      if (((t = t || new Map()), t.has(e))) return t.get(e);
      var r = Object.create(Object.getPrototypeOf(e));
      return (
        t.set(e, r),
        Object.keys(e).forEach(function (i) {
          r[i] = ch(e[i], t);
        }),
        r
      );
    }
    default:
      return e;
  }
}
function yF(e) {
  var t = new Set([e]);
  return (
    t.forEach(function (n) {
      Te(n) &&
        gF(n) === n &&
        Object.getOwnPropertyNames(n).forEach(function (r) {
          Te(n[r]) && t.add(n[r]);
        });
    }),
    e
  );
}
function gF(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError) return null;
      throw t;
    }
  return e;
}
function wu(e) {
  return globalThis.__DEV__ !== !1 && yF(e), e;
}
function Ss(e, t, n) {
  var r = [];
  e.forEach(function (i) {
    return i[t] && r.push(i);
  }),
    r.forEach(function (i) {
      return i[t](n);
    });
}
function Sf(e, t, n) {
  return new ae(function (r) {
    var i = {
      then: function (l) {
        return new Promise(function (u) {
          return u(l());
        });
      },
    };
    function o(l, u) {
      return function (c) {
        if (l) {
          var f = function () {
            return r.closed ? 0 : l(c);
          };
          i = i.then(f, f).then(
            function (d) {
              return r.next(d);
            },
            function (d) {
              return r.error(d);
            }
          );
        } else r[u](c);
      };
    }
    var s = {
        next: o(t, "next"),
        error: o(n, "error"),
        complete: function () {
          i.then(function () {
            return r.complete();
          });
        },
      },
      a = e.subscribe(s);
    return function () {
      return a.unsubscribe();
    };
  });
}
function mE(e) {
  function t(n) {
    Object.defineProperty(e, n, { value: ae });
  }
  return pm && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Xg(e) {
  return e && typeof e.then == "function";
}
var ii = (function (e) {
  Jt(t, e);
  function t(n) {
    var r =
      e.call(this, function (i) {
        return (
          r.addObserver(i),
          function () {
            return r.removeObserver(i);
          }
        );
      }) || this;
    return (
      (r.observers = new Set()),
      (r.promise = new Promise(function (i, o) {
        (r.resolve = i), (r.reject = o);
      })),
      (r.handlers = {
        next: function (i) {
          r.sub !== null && ((r.latest = ["next", i]), r.notify("next", i), Ss(r.observers, "next", i));
        },
        error: function (i) {
          var o = r.sub;
          o !== null &&
            (o &&
              setTimeout(function () {
                return o.unsubscribe();
              }),
            (r.sub = null),
            (r.latest = ["error", i]),
            r.reject(i),
            r.notify("error", i),
            Ss(r.observers, "error", i));
        },
        complete: function () {
          var i = r,
            o = i.sub,
            s = i.sources,
            a = s === void 0 ? [] : s;
          if (o !== null) {
            var l = a.shift();
            l
              ? Xg(l)
                ? l.then(function (u) {
                    return (r.sub = u.subscribe(r.handlers));
                  }, r.handlers.error)
                : (r.sub = l.subscribe(r.handlers))
              : (o &&
                  setTimeout(function () {
                    return o.unsubscribe();
                  }),
                (r.sub = null),
                r.latest && r.latest[0] === "next" ? r.resolve(r.latest[1]) : r.resolve(),
                r.notify("complete"),
                Ss(r.observers, "complete"));
          }
        },
      }),
      (r.nextResultListeners = new Set()),
      (r.cancel = function (i) {
        r.reject(i), (r.sources = []), r.handlers.error(i);
      }),
      r.promise.catch(function (i) {}),
      typeof n == "function" && (n = [new ae(n)]),
      Xg(n)
        ? n.then(function (i) {
            return r.start(i);
          }, r.handlers.error)
        : r.start(n),
      r
    );
  }
  return (
    (t.prototype.start = function (n) {
      this.sub === void 0 && ((this.sources = Array.from(n)), this.handlers.complete());
    }),
    (t.prototype.deliverLastMessage = function (n) {
      if (this.latest) {
        var r = this.latest[0],
          i = n[r];
        i && i.call(n, this.latest[1]), this.sub === null && r === "next" && n.complete && n.complete();
      }
    }),
    (t.prototype.addObserver = function (n) {
      this.observers.has(n) || (this.deliverLastMessage(n), this.observers.add(n));
    }),
    (t.prototype.removeObserver = function (n) {
      this.observers.delete(n) && this.observers.size < 1 && this.handlers.complete();
    }),
    (t.prototype.notify = function (n, r) {
      var i = this.nextResultListeners;
      i.size &&
        ((this.nextResultListeners = new Set()),
        i.forEach(function (o) {
          return o(n, r);
        }));
    }),
    (t.prototype.beforeNext = function (n) {
      var r = !1;
      this.nextResultListeners.add(function (i, o) {
        r || ((r = !0), n(i, o));
      });
    }),
    t
  );
})(ae);
mE(ii);
function ji(e) {
  return "incremental" in e;
}
function wF(e) {
  return "hasNext" in e && "data" in e;
}
function SF(e) {
  return ji(e) || wF(e);
}
function bF(e) {
  return Te(e) && "payload" in e;
}
function vE(e, t) {
  var n = e,
    r = new lr();
  return (
    ji(t) &&
      Xt(t.incremental) &&
      t.incremental.forEach(function (i) {
        for (var o = i.data, s = i.path, a = s.length - 1; a >= 0; --a) {
          var l = s[a],
            u = !isNaN(+l),
            c = u ? [] : {};
          (c[l] = o), (o = c);
        }
        n = r.merge(n, o);
      }),
    n
  );
}
function xl(e) {
  var t = fh(e);
  return Xt(t);
}
function fh(e) {
  var t = Xt(e.errors) ? e.errors.slice(0) : [];
  return (
    ji(e) &&
      Xt(e.incremental) &&
      e.incremental.forEach(function (n) {
        n.errors && t.push.apply(t, n.errors);
      }),
    t
  );
}
function ro() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = Object.create(null);
  return (
    e.forEach(function (r) {
      r &&
        Object.keys(r).forEach(function (i) {
          var o = r[i];
          o !== void 0 && (n[i] = o);
        });
    }),
    n
  );
}
function bf(e, t) {
  return ro(e, t, t.variables && { variables: ro(P(P({}, e && e.variables), t.variables)) });
}
function xf(e) {
  return new ae(function (t) {
    t.error(e);
  });
}
var yE = function (e, t, n) {
  var r = new Error(n);
  throw ((r.name = "ServerError"), (r.response = e), (r.statusCode = e.status), (r.result = t), r);
};
function xF(e) {
  for (
    var t = ["query", "operationName", "variables", "extensions", "context"], n = 0, r = Object.keys(e);
    n < r.length;
    n++
  ) {
    var i = r[n];
    if (t.indexOf(i) < 0) throw tt(46, i);
  }
  return e;
}
function _F(e, t) {
  var n = P({}, e),
    r = function (o) {
      typeof o == "function" ? (n = P(P({}, n), o(n))) : (n = P(P({}, n), o));
    },
    i = function () {
      return P({}, n);
    };
  return (
    Object.defineProperty(t, "setContext", { enumerable: !1, value: r }),
    Object.defineProperty(t, "getContext", { enumerable: !1, value: i }),
    t
  );
}
function EF(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query,
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? rs(t.query) || void 0 : ""), t;
}
function TF(e, t) {
  var n = P({}, e),
    r = new Set(Object.keys(e));
  return (
    Ut(t, {
      Variable: function (i, o, s) {
        s && s.kind !== "VariableDefinition" && r.delete(i.name.value);
      },
    }),
    r.forEach(function (i) {
      delete n[i];
    }),
    n
  );
}
function Jg(e, t) {
  return t ? t(e) : ae.of();
}
function Fo(e) {
  return typeof e == "function" ? new pa(e) : e;
}
function Ja(e) {
  return e.request.length <= 1;
}
var pa = (function () {
    function e(t) {
      t && (this.request = t);
    }
    return (
      (e.empty = function () {
        return new e(function () {
          return ae.of();
        });
      }),
      (e.from = function (t) {
        return t.length === 0
          ? e.empty()
          : t.map(Fo).reduce(function (n, r) {
              return n.concat(r);
            });
      }),
      (e.split = function (t, n, r) {
        var i = Fo(n),
          o = Fo(r || new e(Jg)),
          s;
        return (
          Ja(i) && Ja(o)
            ? (s = new e(function (a) {
                return t(a) ? i.request(a) || ae.of() : o.request(a) || ae.of();
              }))
            : (s = new e(function (a, l) {
                return t(a) ? i.request(a, l) || ae.of() : o.request(a, l) || ae.of();
              })),
          Object.assign(s, { left: i, right: o })
        );
      }),
      (e.execute = function (t, n) {
        return t.request(_F(n.context, EF(xF(n)))) || ae.of();
      }),
      (e.concat = function (t, n) {
        var r = Fo(t);
        if (Ja(r)) return globalThis.__DEV__ !== !1 && $.warn(38, r), r;
        var i = Fo(n),
          o;
        return (
          Ja(i)
            ? (o = new e(function (s) {
                return (
                  r.request(s, function (a) {
                    return i.request(a) || ae.of();
                  }) || ae.of()
                );
              }))
            : (o = new e(function (s, a) {
                return (
                  r.request(s, function (l) {
                    return i.request(l, a) || ae.of();
                  }) || ae.of()
                );
              })),
          Object.assign(o, { left: r, right: i })
        );
      }),
      (e.prototype.split = function (t, n, r) {
        return this.concat(e.split(t, n, r || new e(Jg)));
      }),
      (e.prototype.concat = function (t) {
        return e.concat(this, t);
      }),
      (e.prototype.request = function (t, n) {
        throw tt(39);
      }),
      (e.prototype.onError = function (t, n) {
        if (n && n.error) return n.error(t), !1;
        throw t;
      }),
      (e.prototype.setOnError = function (t) {
        return (this.onError = t), this;
      }),
      e
    );
  })(),
  dh = pa.execute;
function PF(e) {
  var t,
    n = e[Symbol.asyncIterator]();
  return (
    (t = {
      next: function () {
        return n.next();
      },
    }),
    (t[Symbol.asyncIterator] = function () {
      return this;
    }),
    t
  );
}
function CF(e) {
  var t = null,
    n = null,
    r = !1,
    i = [],
    o = [];
  function s(f) {
    if (!n) {
      if (o.length) {
        var d = o.shift();
        if (Array.isArray(d) && d[0]) return d[0]({ value: f, done: !1 });
      }
      i.push(f);
    }
  }
  function a(f) {
    n = f;
    var d = o.slice();
    d.forEach(function (h) {
      h[1](f);
    }),
      !t || t();
  }
  function l() {
    r = !0;
    var f = o.slice();
    f.forEach(function (d) {
      d[0]({ value: void 0, done: !0 });
    }),
      !t || t();
  }
  (t = function () {
    (t = null),
      e.removeListener("data", s),
      e.removeListener("error", a),
      e.removeListener("end", l),
      e.removeListener("finish", l),
      e.removeListener("close", l);
  }),
    e.on("data", s),
    e.on("error", a),
    e.on("end", l),
    e.on("finish", l),
    e.on("close", l);
  function u() {
    return new Promise(function (f, d) {
      if (n) return d(n);
      if (i.length) return f({ value: i.shift(), done: !1 });
      if (r) return f({ value: void 0, done: !0 });
      o.push([f, d]);
    });
  }
  var c = {
    next: function () {
      return u();
    },
  };
  return (
    rc &&
      (c[Symbol.asyncIterator] = function () {
        return this;
      }),
    c
  );
}
function kF(e) {
  var t = !1,
    n = {
      next: function () {
        return t
          ? Promise.resolve({ value: void 0, done: !0 })
          : ((t = !0),
            new Promise(function (r, i) {
              e.then(function (o) {
                r({ value: o, done: !1 });
              }).catch(i);
            }));
      },
    };
  return (
    rc &&
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
    n
  );
}
function Zg(e) {
  var t = {
    next: function () {
      return e.read();
    },
  };
  return (
    rc &&
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
    t
  );
}
function OF(e) {
  return !!e.body;
}
function RF(e) {
  return !!e.getReader;
}
function DF(e) {
  return !!(rc && e[Symbol.asyncIterator]);
}
function MF(e) {
  return !!e.stream;
}
function AF(e) {
  return !!e.arrayBuffer;
}
function IF(e) {
  return !!e.pipe;
}
function LF(e) {
  var t = e;
  if ((OF(e) && (t = e.body), DF(t))) return PF(t);
  if (RF(t)) return Zg(t.getReader());
  if (MF(t)) return Zg(t.stream().getReader());
  if (AF(t)) return kF(t.arrayBuffer());
  if (IF(t)) return CF(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Em = Symbol();
function FF(e) {
  return e.extensions ? Array.isArray(e.extensions[Em]) : !1;
}
function gE(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var NF = function (e) {
    var t = Ke(Ke(Ke([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
    return (
      e.networkError && t.push(e.networkError),
      t.map(function (n) {
        return (Te(n) && n.message) || "Error message not found.";
      }).join(`
`)
    );
  },
  _r = (function (e) {
    Jt(t, e);
    function t(n) {
      var r = n.graphQLErrors,
        i = n.protocolErrors,
        o = n.clientErrors,
        s = n.networkError,
        a = n.errorMessage,
        l = n.extraInfo,
        u = e.call(this, a) || this;
      return (
        (u.name = "ApolloError"),
        (u.graphQLErrors = r || []),
        (u.protocolErrors = i || []),
        (u.clientErrors = o || []),
        (u.networkError = s || null),
        (u.message = a || NF(u)),
        (u.extraInfo = l),
        (u.cause =
          Ke(Ke(Ke([s], r || [], !0), i || [], !0), o || [], !0).find(function (c) {
            return !!c;
          }) || null),
        (u.__proto__ = t.prototype),
        u
      );
    }
    return t;
  })(Error),
  e0 = Object.prototype.hasOwnProperty;
function jF(e, t) {
  return Nn(this, void 0, void 0, function () {
    var n, r, i, o, s, a, l, u, c, f, d, h, v, y, w, p, m, g, b, S, _, T, E, C;
    return jn(this, function (k) {
      switch (k.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          (n = new TextDecoder("utf-8")),
            (r = (C = e.headers) === null || C === void 0 ? void 0 : C.get("content-type")),
            (i = "boundary="),
            (o =
              r != null && r.includes(i)
                ? r == null
                  ? void 0
                  : r
                      .substring((r == null ? void 0 : r.indexOf(i)) + i.length)
                      .replace(/['"]/g, "")
                      .replace(/\;(.*)/gm, "")
                      .trim()
                : "-"),
            (s = `\r
--`.concat(o)),
            (a = ""),
            (l = LF(e)),
            (u = !0),
            (k.label = 1);
        case 1:
          return u ? [4, l.next()] : [3, 3];
        case 2:
          for (
            c = k.sent(),
              f = c.value,
              d = c.done,
              h = typeof f == "string" ? f : n.decode(f),
              v = a.length - s.length + 1,
              u = !d,
              a += h,
              y = a.indexOf(s, v);
            y > -1;

          ) {
            if (
              ((w = void 0),
              (T = [a.slice(0, y), a.slice(y + s.length)]),
              (w = T[0]),
              (a = T[1]),
              (p = w.indexOf(`\r
\r
`)),
              (m = VF(w.slice(0, p))),
              (g = m["content-type"]),
              g && g.toLowerCase().indexOf("application/json") === -1)
            )
              throw new Error("Unsupported patch content type: application/json is required.");
            if (((b = w.slice(p)), b)) {
              if (
                ((S = wE(e, b)),
                Object.keys(S).length > 1 || "data" in S || "incremental" in S || "errors" in S || "payload" in S)
              )
                if (bF(S)) {
                  if (((_ = {}), "payload" in S)) {
                    if (Object.keys(S).length === 1 && S.payload === null) return [2];
                    _ = P({}, S.payload);
                  }
                  "errors" in S &&
                    (_ = P(P({}, _), {
                      extensions: P(P({}, "extensions" in _ ? _.extensions : null), ((E = {}), (E[Em] = S.errors), E)),
                    })),
                    t(_);
                } else t(S);
              else if (Object.keys(S).length === 1 && "hasNext" in S && !S.hasNext) return [2];
            }
            y = a.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function VF(e) {
  var t = {};
  return (
    e
      .split(
        `
`
      )
      .forEach(function (n) {
        var r = n.indexOf(":");
        if (r > -1) {
          var i = n.slice(0, r).trim().toLowerCase(),
            o = n.slice(r + 1).trim();
          t[i] = o;
        }
      }),
    t
  );
}
function wE(e, t) {
  if (e.status >= 300) {
    var n = function () {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    yE(e, n(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var r = i;
    throw ((r.name = "ServerParseError"), (r.response = e), (r.statusCode = e.status), (r.bodyText = t), r);
  }
}
function $F(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function zF(e) {
  return function (t) {
    return t
      .text()
      .then(function (n) {
        return wE(t, n);
      })
      .then(function (n) {
        return (
          !Array.isArray(n) &&
            !e0.call(n, "data") &&
            !e0.call(n, "errors") &&
            yE(
              t,
              n,
              "Server response was missing for query '".concat(
                Array.isArray(e)
                  ? e.map(function (r) {
                      return r.operationName;
                    })
                  : e.operationName,
                "'."
              )
            ),
          n
        );
      });
  };
}
var hh = function (e, t) {
    var n;
    try {
      n = JSON.stringify(e);
    } catch (i) {
      var r = tt(42, t, i.message);
      throw ((r.parseError = i), r);
    }
    return n;
  },
  BF = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
  UF = { accept: "*/*", "content-type": "application/json" },
  WF = { method: "POST" },
  QF = { http: BF, headers: UF, options: WF },
  qF = function (e, t) {
    return t(e);
  };
function HF(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = {},
    o = {};
  n.forEach(function (f) {
    (i = P(P(P({}, i), f.options), { headers: P(P({}, i.headers), f.headers) })),
      f.credentials && (i.credentials = f.credentials),
      (o = P(P({}, o), f.http));
  }),
    i.headers && (i.headers = GF(i.headers, o.preserveHeaderCase));
  var s = e.operationName,
    a = e.extensions,
    l = e.variables,
    u = e.query,
    c = { operationName: s, variables: l };
  return o.includeExtensions && (c.extensions = a), o.includeQuery && (c.query = t(u, Mr)), { options: i, body: c };
}
function GF(e, t) {
  if (!t) {
    var n = {};
    return (
      Object.keys(Object(e)).forEach(function (o) {
        n[o.toLowerCase()] = e[o];
      }),
      n
    );
  }
  var r = {};
  Object.keys(Object(e)).forEach(function (o) {
    r[o.toLowerCase()] = { originalName: o, value: e[o] };
  });
  var i = {};
  return (
    Object.keys(r).forEach(function (o) {
      i[r[o].originalName] = r[o].value;
    }),
    i
  );
}
var KF = function (e) {
    if (!e && typeof fetch > "u") throw tt(40);
  },
  YF = function (e, t) {
    var n = e.getContext(),
      r = n.uri;
    return r || (typeof t == "function" ? t(e) : t || "/graphql");
  };
function XF(e, t) {
  var n = [],
    r = function (f, d) {
      n.push("".concat(f, "=").concat(encodeURIComponent(d)));
    };
  if (("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables)) {
    var i = void 0;
    try {
      i = hh(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    r("variables", i);
  }
  if (t.extensions) {
    var o = void 0;
    try {
      o = hh(t.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    r("extensions", o);
  }
  var s = "",
    a = e,
    l = e.indexOf("#");
  l !== -1 && ((s = e.substr(l)), (a = e.substr(0, l)));
  var u = a.indexOf("?") === -1 ? "?" : "&",
    c = a + u + n.join("&") + s;
  return { newURI: c };
}
var t0 = jt(function () {
    return fetch;
  }),
  SE = function (e) {
    e === void 0 && (e = {});
    var t = e.uri,
      n = t === void 0 ? "/graphql" : t,
      r = e.fetch,
      i = e.print,
      o = i === void 0 ? qF : i,
      s = e.includeExtensions,
      a = e.preserveHeaderCase,
      l = e.useGETForQueries,
      u = e.includeUnusedVariables,
      c = u === void 0 ? !1 : u,
      f = hn(e, [
        "uri",
        "fetch",
        "print",
        "includeExtensions",
        "preserveHeaderCase",
        "useGETForQueries",
        "includeUnusedVariables",
      ]);
    globalThis.__DEV__ !== !1 && KF(r || t0);
    var d = {
      http: { includeExtensions: s, preserveHeaderCase: a },
      options: f.fetchOptions,
      credentials: f.credentials,
      headers: f.headers,
    };
    return new pa(function (h) {
      var v = YF(h, n),
        y = h.getContext(),
        w = {};
      if (y.clientAwareness) {
        var p = y.clientAwareness,
          m = p.name,
          g = p.version;
        m && (w["apollographql-client-name"] = m), g && (w["apollographql-client-version"] = g);
      }
      var b = P(P({}, w), y.headers),
        S = { http: y.http, options: y.fetchOptions, credentials: y.credentials, headers: b };
      if (Ks(["client"], h.query)) {
        var _ = cE(h.query);
        if (!_)
          return xf(
            new Error(
              "HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."
            )
          );
        h.query = _;
      }
      var T = HF(h, o, QF, d, S),
        E = T.options,
        C = T.body;
      C.variables && !c && (C.variables = TF(C.variables, h.query));
      var k;
      !E.signal && typeof AbortController < "u" && ((k = new AbortController()), (E.signal = k.signal));
      var D = function (I) {
          return I.kind === "OperationDefinition" && I.operation === "mutation";
        },
        R = function (I) {
          return I.kind === "OperationDefinition" && I.operation === "subscription";
        },
        F = R(ha(h.query)),
        L = Ks(["defer"], h.query);
      if ((l && !h.query.definitions.some(D) && (E.method = "GET"), L || F)) {
        E.headers = E.headers || {};
        var B = "multipart/mixed;";
        F && L && globalThis.__DEV__ !== !1 && $.warn(41),
          F
            ? (B += "boundary=graphql;subscriptionSpec=1.0,application/json")
            : L && (B += "deferSpec=20220824,application/json"),
          (E.headers.accept = B);
      }
      if (E.method === "GET") {
        var q = XF(v, C),
          z = q.newURI,
          M = q.parseError;
        if (M) return xf(M);
        v = z;
      } else
        try {
          E.body = hh(C, "Payload");
        } catch (I) {
          return xf(I);
        }
      return new ae(function (I) {
        var j =
            r ||
            jt(function () {
              return fetch;
            }) ||
            t0,
          Q = I.next.bind(I);
        return (
          j(v, E)
            .then(function (U) {
              var Y;
              h.setContext({ response: U });
              var J = (Y = U.headers) === null || Y === void 0 ? void 0 : Y.get("content-type");
              return J !== null && /^multipart\/mixed/i.test(J) ? jF(U, Q) : zF(h)(U).then(Q);
            })
            .then(function () {
              (k = void 0), I.complete();
            })
            .catch(function (U) {
              (k = void 0), $F(U, I);
            }),
          function () {
            k && k.abort();
          }
        );
      });
    });
  },
  JF = (function (e) {
    Jt(t, e);
    function t(n) {
      n === void 0 && (n = {});
      var r = e.call(this, SE(n).request) || this;
      return (r.options = n), r;
    }
    return t;
  })(pa);
const { toString: n0, hasOwnProperty: ZF } = Object.prototype,
  r0 = Function.prototype.toString,
  ph = new Map();
function le(e, t) {
  try {
    return mh(e, t);
  } finally {
    ph.clear();
  }
}
function mh(e, t) {
  if (e === t) return !0;
  const n = n0.call(e),
    r = n0.call(t);
  if (n !== r) return !1;
  switch (n) {
    case "[object Array]":
      if (e.length !== t.length) return !1;
    case "[object Object]": {
      if (o0(e, t)) return !0;
      const i = i0(e),
        o = i0(t),
        s = i.length;
      if (s !== o.length) return !1;
      for (let a = 0; a < s; ++a) if (!ZF.call(t, i[a])) return !1;
      for (let a = 0; a < s; ++a) {
        const l = i[a];
        if (!mh(e[l], t[l])) return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e !== e) return t !== t;
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == `${t}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== t.size) return !1;
      if (o0(e, t)) return !0;
      const i = e.entries(),
        o = n === "[object Map]";
      for (;;) {
        const s = i.next();
        if (s.done) break;
        const [a, l] = s.value;
        if (!t.has(a) || (o && !mh(l, t.get(a)))) return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      (e = new Uint8Array(e)), (t = new Uint8Array(t));
    case "[object DataView]": {
      let i = e.byteLength;
      if (i === t.byteLength) for (; i-- && e[i] === t[i]; );
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = r0.call(e);
      return i !== r0.call(t) ? !1 : !nN(i, tN);
    }
  }
  return !1;
}
function i0(e) {
  return Object.keys(e).filter(eN, e);
}
function eN(e) {
  return this[e] !== void 0;
}
const tN = "{ [native code] }";
function nN(e, t) {
  const n = e.length - t.length;
  return n >= 0 && e.indexOf(t, n) === n;
}
function o0(e, t) {
  let n = ph.get(e);
  if (n) {
    if (n.has(t)) return !0;
  } else ph.set(e, (n = new Set()));
  return n.add(t), !1;
}
function bE(e, t, n, r) {
  var i = t.data,
    o = hn(t, ["data"]),
    s = n.data,
    a = hn(n, ["data"]);
  return le(o, a) && _l(ha(e).selectionSet, i, s, { fragmentMap: co(ho(e)), variables: r });
}
function _l(e, t, n, r) {
  if (t === n) return !0;
  var i = new Set();
  return e.selections.every(function (o) {
    if (i.has(o) || (i.add(o), !da(o, r.variables)) || s0(o)) return !0;
    if (sr(o)) {
      var s = xn(o),
        a = t && t[s],
        l = n && n[s],
        u = o.selectionSet;
      if (!u) return le(a, l);
      var c = Array.isArray(a),
        f = Array.isArray(l);
      if (c !== f) return !1;
      if (c && f) {
        var d = a.length;
        if (l.length !== d) return !1;
        for (var h = 0; h < d; ++h) if (!_l(u, a[h], l[h], r)) return !1;
        return !0;
      }
      return _l(u, a, l, r);
    } else {
      var v = ic(o, r.fragmentMap);
      if (v) return s0(v) ? !0 : _l(v.selectionSet, t, n, r);
    }
  });
}
function s0(e) {
  return !!e.directives && e.directives.some(rN);
}
function rN(e) {
  return e.name.value === "nonreactive";
}
var xE = Yr ? WeakMap : Map,
  _E = hm ? WeakSet : Set,
  Tm = new sc(),
  a0 = !1;
function EE() {
  a0 || ((a0 = !0), globalThis.__DEV__ !== !1 && $.warn(52));
}
function TE(e, t, n) {
  return Tm.withValue(!0, function () {
    var r = is(e, t, n, !1);
    return Object.isFrozen(e) && wu(r), r;
  });
}
function iN(e, t) {
  if (t.has(e)) return t.get(e);
  var n = Array.isArray(e) ? [] : Object.create(null);
  return t.set(e, n), n;
}
function is(e, t, n, r, i) {
  var o,
    s = n.knownChanged,
    a = iN(e, n.mutableTargets);
  if (Array.isArray(e)) {
    for (var l = 0, u = Array.from(e.entries()); l < u.length; l++) {
      var c = u[l],
        f = c[0],
        d = c[1];
      if (d === null) {
        a[f] = null;
        continue;
      }
      var h = is(d, t, n, r, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(f, "]") : void 0);
      s.has(h) && s.add(a), (a[f] = h);
    }
    return s.has(a) ? a : e;
  }
  for (var v = 0, y = t.selections; v < y.length; v++) {
    var w = y[v],
      p = void 0;
    if ((r && s.add(a), w.kind === ue.FIELD)) {
      var m = xn(w),
        g = w.selectionSet;
      if (((p = a[m] || e[m]), p === void 0)) continue;
      if (g && p !== null) {
        var h = is(e[m], g, n, r, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(m) : void 0);
        s.has(h) && (p = h);
      }
      globalThis.__DEV__ === !1 && (a[m] = p),
        globalThis.__DEV__ !== !1 &&
          (r &&
          m !== "__typename" &&
          !(!((o = Object.getOwnPropertyDescriptor(a, m)) === null || o === void 0) && o.value)
            ? Object.defineProperty(a, m, oN(m, p, i || "", n.operationName, n.operationType))
            : (delete a[m], (a[m] = p)));
    }
    if (
      (w.kind === ue.INLINE_FRAGMENT &&
        (!w.typeCondition || n.cache.fragmentMatches(w, e.__typename)) &&
        (p = is(e, w.selectionSet, n, r, i)),
      w.kind === ue.FRAGMENT_SPREAD)
    ) {
      var b = w.name.value,
        S = n.fragmentMap[b] || (n.fragmentMap[b] = n.cache.lookupFragment(b));
      $(S, 47, b);
      var _ = iL(w);
      _ !== "mask" && (p = is(e, S.selectionSet, n, _ === "migrate", i));
    }
    s.has(p) && s.add(a);
  }
  return (
    "__typename" in e && !("__typename" in a) && (a.__typename = e.__typename),
    Object.keys(a).length !== Object.keys(e).length && s.add(a),
    s.has(a) ? a : e
  );
}
function oN(e, t, n, r, i) {
  var o = function () {
    return (
      Tm.getValue() ||
        (globalThis.__DEV__ !== !1 &&
          $.warn(
            48,
            r ? "".concat(i, " '").concat(r, "'") : "anonymous ".concat(i),
            "".concat(n, ".").concat(e).replace(/^\./, "")
          ),
        (o = function () {
          return t;
        })),
      t
    );
  };
  return {
    get: function () {
      return o();
    },
    set: function (s) {
      o = function () {
        return s;
      };
    },
    enumerable: !0,
    configurable: !0,
  };
}
function PE(e, t, n, r) {
  if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && EE(), e;
  var i = t.definitions.filter(function (s) {
    return s.kind === ue.FRAGMENT_DEFINITION;
  });
  typeof r > "u" && ($(i.length === 1, 49, i.length), (r = i[0].name.value));
  var o = i.find(function (s) {
    return s.name.value === r;
  });
  return (
    $(!!o, 50, r),
    e == null || le(e, {})
      ? e
      : TE(e, o.selectionSet, {
          operationType: "fragment",
          operationName: o.name.value,
          fragmentMap: co(ho(t)),
          cache: n,
          mutableTargets: new xE(),
          knownChanged: new _E(),
        })
  );
}
function sN(e, t, n) {
  var r;
  if (!n.fragmentMatches) return globalThis.__DEV__ !== !1 && EE(), e;
  var i = Wr(t);
  return (
    $(i, 51),
    e == null
      ? e
      : TE(e, i.selectionSet, {
          operationType: i.operation,
          operationName: (r = i.name) === null || r === void 0 ? void 0 : r.value,
          fragmentMap: co(ho(t)),
          cache: n,
          mutableTargets: new xE(),
          knownChanged: new _E(),
        })
  );
}
var CE = (function () {
  function e() {
    (this.assumeImmutableResults = !1),
      (this.getFragmentDoc = Xs(fL, { max: bn["cache.fragmentQueryDocuments"] || 1e3, cache: yu }));
  }
  return (
    (e.prototype.lookupFragment = function (t) {
      return null;
    }),
    (e.prototype.batch = function (t) {
      var n = this,
        r = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0,
        i;
      return (
        this.performTransaction(function () {
          return (i = t.update(n));
        }, r),
        i
      );
    }),
    (e.prototype.recordOptimisticTransaction = function (t, n) {
      this.performTransaction(t, n);
    }),
    (e.prototype.transformDocument = function (t) {
      return t;
    }),
    (e.prototype.transformForLink = function (t) {
      return t;
    }),
    (e.prototype.identify = function (t) {}),
    (e.prototype.gc = function () {
      return [];
    }),
    (e.prototype.modify = function (t) {
      return !1;
    }),
    (e.prototype.readQuery = function (t, n) {
      return (
        n === void 0 && (n = !!t.optimistic), this.read(P(P({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: n }))
      );
    }),
    (e.prototype.watchFragment = function (t) {
      var n = this,
        r = t.fragment,
        i = t.fragmentName,
        o = t.from,
        s = t.optimistic,
        a = s === void 0 ? !0 : s,
        l = hn(t, ["fragment", "fragmentName", "from", "optimistic"]),
        u = this.getFragmentDoc(r, i),
        c = typeof o > "u" || typeof o == "string" ? o : this.identify(o),
        f = !!t[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== !1) {
        var d = i || K_(r).name.value;
        c || (globalThis.__DEV__ !== !1 && $.warn(1, d));
      }
      var h = P(P({}, l), { returnPartialData: !0, id: c, query: u, optimistic: a }),
        v;
      return new ae(function (y) {
        return n.watch(
          P(P({}, h), {
            immediate: !0,
            callback: function (w) {
              var p = f ? PE(w.result, r, n, i) : w.result;
              if (!(v && bE(u, { data: v.result }, { data: p }, t.variables))) {
                var m = { data: p, complete: !!w.complete };
                w.missing &&
                  (m.missing = uc(
                    w.missing.map(function (g) {
                      return g.missing;
                    })
                  )),
                  (v = P(P({}, w), { result: p })),
                  y.next(m);
              }
            },
          })
        );
      });
    }),
    (e.prototype.readFragment = function (t, n) {
      return (
        n === void 0 && (n = !!t.optimistic),
        this.read(P(P({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: n }))
      );
    }),
    (e.prototype.writeQuery = function (t) {
      var n = t.id,
        r = t.data,
        i = hn(t, ["id", "data"]);
      return this.write(Object.assign(i, { dataId: n || "ROOT_QUERY", result: r }));
    }),
    (e.prototype.writeFragment = function (t) {
      var n = t.id,
        r = t.data,
        i = t.fragment,
        o = t.fragmentName,
        s = hn(t, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(s, { query: this.getFragmentDoc(i, o), dataId: n, result: r }));
    }),
    (e.prototype.updateQuery = function (t, n) {
      return this.batch({
        update: function (r) {
          var i = r.readQuery(t),
            o = n(i);
          return o == null ? i : (r.writeQuery(P(P({}, t), { data: o })), o);
        },
      });
    }),
    (e.prototype.updateFragment = function (t, n) {
      return this.batch({
        update: function (r) {
          var i = r.readFragment(t),
            o = n(i);
          return o == null ? i : (r.writeFragment(P(P({}, t), { data: o })), o);
        },
      });
    }),
    e
  );
})();
globalThis.__DEV__ !== !1 && (CE.prototype.getMemoryInternals = _L);
var kE = (function (e) {
    Jt(t, e);
    function t(n, r, i, o) {
      var s,
        a = e.call(this, n) || this;
      if (((a.message = n), (a.path = r), (a.query = i), (a.variables = o), Array.isArray(a.path))) {
        a.missing = a.message;
        for (var l = a.path.length - 1; l >= 0; --l) a.missing = ((s = {}), (s[a.path[l]] = a.missing), s);
      } else a.missing = a.path;
      return (a.__proto__ = t.prototype), a;
    }
    return t;
  })(Error),
  Ae = Object.prototype.hasOwnProperty;
function No(e) {
  return e == null;
}
function OE(e, t) {
  var n = e.__typename,
    r = e.id,
    i = e._id;
  if (
    typeof n == "string" &&
    (t && (t.keyObject = No(r) ? (No(i) ? void 0 : { _id: i }) : { id: r }), No(r) && !No(i) && (r = i), !No(r))
  )
    return "".concat(n, ":").concat(typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r));
}
var RE = { dataIdFromObject: OE, addTypename: !0, resultCaching: !0, canonizeResults: !1 };
function aN(e) {
  return ro(RE, e);
}
function DE(e) {
  var t = e.canonizeResults;
  return t === void 0 ? RE.canonizeResults : t;
}
function lN(e, t) {
  return ne(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var ME = /^[_a-z][_0-9a-z]*/i;
function ur(e) {
  var t = e.match(ME);
  return t ? t[0] : e;
}
function vh(e, t, n) {
  return Te(t)
    ? Pe(t)
      ? t.every(function (r) {
          return vh(e, r, n);
        })
      : e.selections.every(function (r) {
          if (sr(r) && da(r, n)) {
            var i = xn(r);
            return Ae.call(t, i) && (!r.selectionSet || vh(r.selectionSet, t[i], n));
          }
          return !0;
        })
    : !1;
}
function Ti(e) {
  return Te(e) && !ne(e) && !Pe(e);
}
function uN() {
  return new lr();
}
function AE(e, t) {
  var n = co(ho(e));
  return {
    fragmentMap: n,
    lookupFragment: function (r) {
      var i = n[r];
      return !i && t && (i = t.lookup(r)), i || null;
    },
  };
}
var El = Object.create(null),
  _f = function () {
    return El;
  },
  l0 = Object.create(null),
  Js = (function () {
    function e(t, n) {
      var r = this;
      (this.policies = t),
        (this.group = n),
        (this.data = Object.create(null)),
        (this.rootIds = Object.create(null)),
        (this.refs = Object.create(null)),
        (this.getFieldValue = function (i, o) {
          return wu(ne(i) ? r.get(i.__ref, o) : i && i[o]);
        }),
        (this.canRead = function (i) {
          return ne(i) ? r.has(i.__ref) : typeof i == "object";
        }),
        (this.toReference = function (i, o) {
          if (typeof i == "string") return Ni(i);
          if (ne(i)) return i;
          var s = r.policies.identify(i)[0];
          if (s) {
            var a = Ni(s);
            return o && r.merge(s, i), a;
          }
        });
    }
    return (
      (e.prototype.toObject = function () {
        return P({}, this.data);
      }),
      (e.prototype.has = function (t) {
        return this.lookup(t, !0) !== void 0;
      }),
      (e.prototype.get = function (t, n) {
        if ((this.group.depend(t, n), Ae.call(this.data, t))) {
          var r = this.data[t];
          if (r && Ae.call(r, n)) return r[n];
        }
        if (n === "__typename" && Ae.call(this.policies.rootTypenamesById, t))
          return this.policies.rootTypenamesById[t];
        if (this instanceof In) return this.parent.get(t, n);
      }),
      (e.prototype.lookup = function (t, n) {
        if ((n && this.group.depend(t, "__exists"), Ae.call(this.data, t))) return this.data[t];
        if (this instanceof In) return this.parent.lookup(t, n);
        if (this.policies.rootTypenamesById[t]) return Object.create(null);
      }),
      (e.prototype.merge = function (t, n) {
        var r = this,
          i;
        ne(t) && (t = t.__ref), ne(n) && (n = n.__ref);
        var o = typeof t == "string" ? this.lookup((i = t)) : t,
          s = typeof n == "string" ? this.lookup((i = n)) : n;
        if (s) {
          $(typeof i == "string", 2);
          var a = new lr(fN).merge(o, s);
          if (((this.data[i] = a), a !== o && (delete this.refs[i], this.group.caching))) {
            var l = Object.create(null);
            o || (l.__exists = 1),
              Object.keys(s).forEach(function (u) {
                if (!o || o[u] !== a[u]) {
                  l[u] = 1;
                  var c = ur(u);
                  c !== u && !r.policies.hasKeyArgs(a.__typename, c) && (l[c] = 1),
                    a[u] === void 0 && !(r instanceof In) && delete a[u];
                }
              }),
              l.__typename &&
                !(o && o.__typename) &&
                this.policies.rootTypenamesById[i] === a.__typename &&
                delete l.__typename,
              Object.keys(l).forEach(function (u) {
                return r.group.dirty(i, u);
              });
          }
        }
      }),
      (e.prototype.modify = function (t, n) {
        var r = this,
          i = this.lookup(t);
        if (i) {
          var o = Object.create(null),
            s = !1,
            a = !0,
            l = {
              DELETE: El,
              INVALIDATE: l0,
              isReference: ne,
              toReference: this.toReference,
              canRead: this.canRead,
              readField: function (u, c) {
                return r.policies.readField(typeof u == "string" ? { fieldName: u, from: c || Ni(t) } : u, {
                  store: r,
                });
              },
            };
          if (
            (Object.keys(i).forEach(function (u) {
              var c = ur(u),
                f = i[u];
              if (f !== void 0) {
                var d = typeof n == "function" ? n : n[u] || n[c];
                if (d) {
                  var h =
                    d === _f
                      ? El
                      : d(wu(f), P(P({}, l), { fieldName: c, storeFieldName: u, storage: r.getStorage(t, u) }));
                  if (h === l0) r.group.dirty(t, u);
                  else if (
                    (h === El && (h = void 0), h !== f && ((o[u] = h), (s = !0), (f = h), globalThis.__DEV__ !== !1))
                  ) {
                    var v = function (S) {
                      if (r.lookup(S.__ref) === void 0) return globalThis.__DEV__ !== !1 && $.warn(3, S), !0;
                    };
                    if (ne(h)) v(h);
                    else if (Array.isArray(h))
                      for (var y = !1, w = void 0, p = 0, m = h; p < m.length; p++) {
                        var g = m[p];
                        if (ne(g)) {
                          if (((y = !0), v(g))) break;
                        } else if (typeof g == "object" && g) {
                          var b = r.policies.identify(g)[0];
                          b && (w = g);
                        }
                        if (y && w !== void 0) {
                          globalThis.__DEV__ !== !1 && $.warn(4, w);
                          break;
                        }
                      }
                  }
                }
                f !== void 0 && (a = !1);
              }
            }),
            s)
          )
            return (
              this.merge(t, o),
              a &&
                (this instanceof In ? (this.data[t] = void 0) : delete this.data[t], this.group.dirty(t, "__exists")),
              !0
            );
        }
        return !1;
      }),
      (e.prototype.delete = function (t, n, r) {
        var i,
          o = this.lookup(t);
        if (o) {
          var s = this.getFieldValue(o, "__typename"),
            a = n && r ? this.policies.getStoreFieldName({ typename: s, fieldName: n, args: r }) : n;
          return this.modify(t, a ? ((i = {}), (i[a] = _f), i) : _f);
        }
        return !1;
      }),
      (e.prototype.evict = function (t, n) {
        var r = !1;
        return (
          t.id &&
            (Ae.call(this.data, t.id) && (r = this.delete(t.id, t.fieldName, t.args)),
            this instanceof In && this !== n && (r = this.parent.evict(t, n) || r),
            (t.fieldName || r) && this.group.dirty(t.id, t.fieldName || "__exists")),
          r
        );
      }),
      (e.prototype.clear = function () {
        this.replace(null);
      }),
      (e.prototype.extract = function () {
        var t = this,
          n = this.toObject(),
          r = [];
        return (
          this.getRootIdSet().forEach(function (i) {
            Ae.call(t.policies.rootTypenamesById, i) || r.push(i);
          }),
          r.length && (n.__META = { extraRootIds: r.sort() }),
          n
        );
      }),
      (e.prototype.replace = function (t) {
        var n = this;
        if (
          (Object.keys(this.data).forEach(function (o) {
            (t && Ae.call(t, o)) || n.delete(o);
          }),
          t)
        ) {
          var r = t.__META,
            i = hn(t, ["__META"]);
          Object.keys(i).forEach(function (o) {
            n.merge(o, i[o]);
          }),
            r && r.extraRootIds.forEach(this.retain, this);
        }
      }),
      (e.prototype.retain = function (t) {
        return (this.rootIds[t] = (this.rootIds[t] || 0) + 1);
      }),
      (e.prototype.release = function (t) {
        if (this.rootIds[t] > 0) {
          var n = --this.rootIds[t];
          return n || delete this.rootIds[t], n;
        }
        return 0;
      }),
      (e.prototype.getRootIdSet = function (t) {
        return (
          t === void 0 && (t = new Set()),
          Object.keys(this.rootIds).forEach(t.add, t),
          this instanceof In
            ? this.parent.getRootIdSet(t)
            : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t),
          t
        );
      }),
      (e.prototype.gc = function () {
        var t = this,
          n = this.getRootIdSet(),
          r = this.toObject();
        n.forEach(function (s) {
          Ae.call(r, s) && (Object.keys(t.findChildRefIds(s)).forEach(n.add, n), delete r[s]);
        });
        var i = Object.keys(r);
        if (i.length) {
          for (var o = this; o instanceof In; ) o = o.parent;
          i.forEach(function (s) {
            return o.delete(s);
          });
        }
        return i;
      }),
      (e.prototype.findChildRefIds = function (t) {
        if (!Ae.call(this.refs, t)) {
          var n = (this.refs[t] = Object.create(null)),
            r = this.data[t];
          if (!r) return n;
          var i = new Set([r]);
          i.forEach(function (o) {
            ne(o) && (n[o.__ref] = !0),
              Te(o) &&
                Object.keys(o).forEach(function (s) {
                  var a = o[s];
                  Te(a) && i.add(a);
                });
          });
        }
        return this.refs[t];
      }),
      (e.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
      }),
      e
    );
  })(),
  IE = (function () {
    function e(t, n) {
      n === void 0 && (n = null), (this.caching = t), (this.parent = n), (this.d = null), this.resetCaching();
    }
    return (
      (e.prototype.resetCaching = function () {
        (this.d = this.caching ? sE() : null), (this.keyMaker = new Pn(Yr));
      }),
      (e.prototype.depend = function (t, n) {
        if (this.d) {
          this.d(Ef(t, n));
          var r = ur(n);
          r !== n && this.d(Ef(t, r)), this.parent && this.parent.depend(t, n);
        }
      }),
      (e.prototype.dirty = function (t, n) {
        this.d && this.d.dirty(Ef(t, n), n === "__exists" ? "forget" : "setDirty");
      }),
      e
    );
  })();
function Ef(e, t) {
  return t + "#" + e;
}
function u0(e, t) {
  bs(e) && e.group.depend(t, "__exists");
}
(function (e) {
  var t = (function (n) {
    Jt(r, n);
    function r(i) {
      var o = i.policies,
        s = i.resultCaching,
        a = s === void 0 ? !0 : s,
        l = i.seed,
        u = n.call(this, o, new IE(a)) || this;
      return (u.stump = new cN(u)), (u.storageTrie = new Pn(Yr)), l && u.replace(l), u;
    }
    return (
      (r.prototype.addLayer = function (i, o) {
        return this.stump.addLayer(i, o);
      }),
      (r.prototype.removeLayer = function () {
        return this;
      }),
      (r.prototype.getStorage = function () {
        return this.storageTrie.lookupArray(arguments);
      }),
      r
    );
  })(e);
  e.Root = t;
})(Js || (Js = {}));
var In = (function (e) {
    Jt(t, e);
    function t(n, r, i, o) {
      var s = e.call(this, r.policies, o) || this;
      return (s.id = n), (s.parent = r), (s.replay = i), (s.group = o), i(s), s;
    }
    return (
      (t.prototype.addLayer = function (n, r) {
        return new t(n, this, r, this.group);
      }),
      (t.prototype.removeLayer = function (n) {
        var r = this,
          i = this.parent.removeLayer(n);
        return n === this.id
          ? (this.group.caching &&
              Object.keys(this.data).forEach(function (o) {
                var s = r.data[o],
                  a = i.lookup(o);
                a
                  ? s
                    ? s !== a &&
                      Object.keys(s).forEach(function (l) {
                        le(s[l], a[l]) || r.group.dirty(o, l);
                      })
                    : (r.group.dirty(o, "__exists"),
                      Object.keys(a).forEach(function (l) {
                        r.group.dirty(o, l);
                      }))
                  : r.delete(o);
              }),
            i)
          : i === this.parent
            ? this
            : i.addLayer(this.id, this.replay);
      }),
      (t.prototype.toObject = function () {
        return P(P({}, this.parent.toObject()), this.data);
      }),
      (t.prototype.findChildRefIds = function (n) {
        var r = this.parent.findChildRefIds(n);
        return Ae.call(this.data, n) ? P(P({}, r), e.prototype.findChildRefIds.call(this, n)) : r;
      }),
      (t.prototype.getStorage = function () {
        for (var n = this.parent; n.parent; ) n = n.parent;
        return n.getStorage.apply(n, arguments);
      }),
      t
    );
  })(Js),
  cN = (function (e) {
    Jt(t, e);
    function t(n) {
      return e.call(this, "EntityStore.Stump", n, function () {}, new IE(n.group.caching, n.group)) || this;
    }
    return (
      (t.prototype.removeLayer = function () {
        return this;
      }),
      (t.prototype.merge = function (n, r) {
        return this.parent.merge(n, r);
      }),
      t
    );
  })(In);
function fN(e, t, n) {
  var r = e[n],
    i = t[n];
  return le(r, i) ? r : i;
}
function bs(e) {
  return !!(e instanceof Js && e.group.caching);
}
function dN(e) {
  return Te(e) ? (Pe(e) ? e.slice(0) : P({ __proto__: Object.getPrototypeOf(e) }, e)) : e;
}
var c0 = (function () {
  function e() {
    (this.known = new (hm ? WeakSet : Set)()),
      (this.pool = new Pn(Yr)),
      (this.passes = new WeakMap()),
      (this.keysByJSON = new Map()),
      (this.empty = this.admit({}));
  }
  return (
    (e.prototype.isKnown = function (t) {
      return Te(t) && this.known.has(t);
    }),
    (e.prototype.pass = function (t) {
      if (Te(t)) {
        var n = dN(t);
        return this.passes.set(n, t), n;
      }
      return t;
    }),
    (e.prototype.admit = function (t) {
      var n = this;
      if (Te(t)) {
        var r = this.passes.get(t);
        if (r) return r;
        var i = Object.getPrototypeOf(t);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(t)) return t;
            var o = t.map(this.admit, this),
              s = this.pool.lookupArray(o);
            return s.array || (this.known.add((s.array = o)), globalThis.__DEV__ !== !1 && Object.freeze(o)), s.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(t)) return t;
            var a = Object.getPrototypeOf(t),
              l = [a],
              u = this.sortedKeys(t);
            l.push(u.json);
            var c = l.length;
            u.sorted.forEach(function (h) {
              l.push(n.admit(t[h]));
            });
            var s = this.pool.lookupArray(l);
            if (!s.object) {
              var f = (s.object = Object.create(a));
              this.known.add(f),
                u.sorted.forEach(function (h, v) {
                  f[h] = l[c + v];
                }),
                globalThis.__DEV__ !== !1 && Object.freeze(f);
            }
            return s.object;
          }
        }
      }
      return t;
    }),
    (e.prototype.sortedKeys = function (t) {
      var n = Object.keys(t),
        r = this.pool.lookupArray(n);
      if (!r.keys) {
        n.sort();
        var i = JSON.stringify(n);
        (r.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, (r.keys = { sorted: n, json: i }));
      }
      return r.keys;
    }),
    e
  );
})();
function f0(e) {
  return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults];
}
var hN = (function () {
  function e(t) {
    var n = this;
    (this.knownResults = new (Yr ? WeakMap : Map)()),
      (this.config = ro(t, { addTypename: t.addTypename !== !1, canonizeResults: DE(t) })),
      (this.canon = t.canon || new c0()),
      (this.executeSelectionSet = Xs(
        function (r) {
          var i,
            o = r.context.canonizeResults,
            s = f0(r);
          s[3] = !o;
          var a = (i = n.executeSelectionSet).peek.apply(i, s);
          return a
            ? o
              ? P(P({}, a), { result: n.canon.admit(a.result) })
              : a
            : (u0(r.context.store, r.enclosingRef.__ref), n.execSelectionSetImpl(r));
        },
        {
          max: this.config.resultCacheMaxSize || bn["inMemoryCache.executeSelectionSet"] || 5e4,
          keyArgs: f0,
          makeCacheKey: function (r, i, o, s) {
            if (bs(o.store)) return o.store.makeCacheKey(r, ne(i) ? i.__ref : i, o.varString, s);
          },
        }
      )),
      (this.executeSubSelectedArray = Xs(
        function (r) {
          return u0(r.context.store, r.enclosingRef.__ref), n.execSubSelectedArrayImpl(r);
        },
        {
          max: this.config.resultCacheMaxSize || bn["inMemoryCache.executeSubSelectedArray"] || 1e4,
          makeCacheKey: function (r) {
            var i = r.field,
              o = r.array,
              s = r.context;
            if (bs(s.store)) return s.store.makeCacheKey(i, o, s.varString);
          },
        }
      ));
  }
  return (
    (e.prototype.resetCanon = function () {
      this.canon = new c0();
    }),
    (e.prototype.diffQueryAgainstStore = function (t) {
      var n = t.store,
        r = t.query,
        i = t.rootId,
        o = i === void 0 ? "ROOT_QUERY" : i,
        s = t.variables,
        a = t.returnPartialData,
        l = a === void 0 ? !0 : a,
        u = t.canonizeResults,
        c = u === void 0 ? this.config.canonizeResults : u,
        f = this.config.cache.policies;
      s = P(P({}, mm(G_(r))), s);
      var d = Ni(o),
        h = this.executeSelectionSet({
          selectionSet: ha(r).selectionSet,
          objectOrReference: d,
          enclosingRef: d,
          context: P(
            { store: n, query: r, policies: f, variables: s, varString: er(s), canonizeResults: c },
            AE(r, this.config.fragments)
          ),
        }),
        v;
      if (h.missing && ((v = [new kE(pN(h.missing), h.missing, r, s)]), !l)) throw v[0];
      return { result: h.result, complete: !v, missing: v };
    }),
    (e.prototype.isFresh = function (t, n, r, i) {
      if (bs(i.store) && this.knownResults.get(t) === r) {
        var o = this.executeSelectionSet.peek(r, n, i, this.canon.isKnown(t));
        if (o && t === o.result) return !0;
      }
      return !1;
    }),
    (e.prototype.execSelectionSetImpl = function (t) {
      var n = this,
        r = t.selectionSet,
        i = t.objectOrReference,
        o = t.enclosingRef,
        s = t.context;
      if (ne(i) && !s.policies.rootTypenamesById[i.__ref] && !s.store.has(i.__ref))
        return { result: this.canon.empty, missing: "Dangling reference to missing ".concat(i.__ref, " object") };
      var a = s.variables,
        l = s.policies,
        u = s.store,
        c = u.getFieldValue(i, "__typename"),
        f = [],
        d,
        h = new lr();
      this.config.addTypename && typeof c == "string" && !l.rootIdsByTypename[c] && f.push({ __typename: c });
      function v(g, b) {
        var S;
        return g.missing && (d = h.merge(d, ((S = {}), (S[b] = g.missing), S))), g.result;
      }
      var y = new Set(r.selections);
      y.forEach(function (g) {
        var b, S;
        if (da(g, a))
          if (sr(g)) {
            var _ = l.readField({ fieldName: g.name.value, field: g, variables: s.variables, from: i }, s),
              T = xn(g);
            _ === void 0
              ? wm.added(g) ||
                (d = h.merge(
                  d,
                  ((b = {}),
                  (b[T] = "Can't find field '"
                    .concat(g.name.value, "' on ")
                    .concat(ne(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2))),
                  b)
                ))
              : Pe(_)
                ? _.length > 0 &&
                  (_ = v(n.executeSubSelectedArray({ field: g, array: _, enclosingRef: o, context: s }), T))
                : g.selectionSet
                  ? _ != null &&
                    (_ = v(
                      n.executeSelectionSet({
                        selectionSet: g.selectionSet,
                        objectOrReference: _,
                        enclosingRef: ne(_) ? _ : o,
                        context: s,
                      }),
                      T
                    ))
                  : s.canonizeResults && (_ = n.canon.pass(_)),
              _ !== void 0 && f.push(((S = {}), (S[T] = _), S));
          } else {
            var E = ic(g, s.lookupFragment);
            if (!E && g.kind === ue.FRAGMENT_SPREAD) throw tt(10, g.name.value);
            E && l.fragmentMatches(E, c) && E.selectionSet.selections.forEach(y.add, y);
          }
      });
      var w = uc(f),
        p = { result: w, missing: d },
        m = s.canonizeResults ? this.canon.admit(p) : wu(p);
      return m.result && this.knownResults.set(m.result, r), m;
    }),
    (e.prototype.execSubSelectedArrayImpl = function (t) {
      var n = this,
        r = t.field,
        i = t.array,
        o = t.enclosingRef,
        s = t.context,
        a,
        l = new lr();
      function u(c, f) {
        var d;
        return c.missing && (a = l.merge(a, ((d = {}), (d[f] = c.missing), d))), c.result;
      }
      return (
        r.selectionSet && (i = i.filter(s.store.canRead)),
        (i = i.map(function (c, f) {
          return c === null
            ? null
            : Pe(c)
              ? u(n.executeSubSelectedArray({ field: r, array: c, enclosingRef: o, context: s }), f)
              : r.selectionSet
                ? u(
                    n.executeSelectionSet({
                      selectionSet: r.selectionSet,
                      objectOrReference: c,
                      enclosingRef: ne(c) ? c : o,
                      context: s,
                    }),
                    f
                  )
                : (globalThis.__DEV__ !== !1 && mN(s.store, r, c), c);
        })),
        { result: s.canonizeResults ? this.canon.admit(i) : i, missing: a }
      );
    }),
    e
  );
})();
function pN(e) {
  try {
    JSON.stringify(e, function (t, n) {
      if (typeof n == "string") throw n;
      return n;
    });
  } catch (t) {
    return t;
  }
}
function mN(e, t, n) {
  if (!t.selectionSet) {
    var r = new Set([n]);
    r.forEach(function (i) {
      Te(i) && ($(!ne(i), 11, lN(e, i), t.name.value), Object.values(i).forEach(r.add, r));
    });
  }
}
var Pm = new sc(),
  d0 = new WeakMap();
function xs(e) {
  var t = d0.get(e);
  return t || d0.set(e, (t = { vars: new Set(), dep: sE() })), t;
}
function h0(e) {
  xs(e).vars.forEach(function (t) {
    return t.forgetCache(e);
  });
}
function vN(e) {
  xs(e).vars.forEach(function (t) {
    return t.attachCache(e);
  });
}
function yN(e) {
  var t = new Set(),
    n = new Set(),
    r = function (o) {
      if (arguments.length > 0) {
        if (e !== o) {
          (e = o),
            t.forEach(function (l) {
              xs(l).dep.dirty(r), gN(l);
            });
          var s = Array.from(n);
          n.clear(),
            s.forEach(function (l) {
              return l(e);
            });
        }
      } else {
        var a = Pm.getValue();
        a && (i(a), xs(a).dep(r));
      }
      return e;
    };
  r.onNextChange = function (o) {
    return (
      n.add(o),
      function () {
        n.delete(o);
      }
    );
  };
  var i = (r.attachCache = function (o) {
    return t.add(o), xs(o).vars.add(r), r;
  });
  return (
    (r.forgetCache = function (o) {
      return t.delete(o);
    }),
    r
  );
}
function gN(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var p0 = Object.create(null);
function Cm(e) {
  var t = JSON.stringify(e);
  return p0[t] || (p0[t] = Object.create(null));
}
function m0(e) {
  var t = Cm(e);
  return (
    t.keyFieldsFn ||
    (t.keyFieldsFn = function (n, r) {
      var i = function (s, a) {
          return r.readField(a, s);
        },
        o = (r.keyObject = km(e, function (s) {
          var a = Vi(r.storeObject, s, i);
          return (
            a === void 0 && n !== r.storeObject && Ae.call(n, s[0]) && (a = Vi(n, s, FE)),
            $(a !== void 0, 5, s.join("."), n),
            a
          );
        }));
      return "".concat(r.typename, ":").concat(JSON.stringify(o));
    })
  );
}
function v0(e) {
  var t = Cm(e);
  return (
    t.keyArgsFn ||
    (t.keyArgsFn = function (n, r) {
      var i = r.field,
        o = r.variables,
        s = r.fieldName,
        a = km(e, function (u) {
          var c = u[0],
            f = c.charAt(0);
          if (f === "@") {
            if (i && Xt(i.directives)) {
              var d = c.slice(1),
                h = i.directives.find(function (p) {
                  return p.name.value === d;
                }),
                v = h && oc(h, o);
              return v && Vi(v, u.slice(1));
            }
            return;
          }
          if (f === "$") {
            var y = c.slice(1);
            if (o && Ae.call(o, y)) {
              var w = u.slice(0);
              return (w[0] = y), Vi(o, w);
            }
            return;
          }
          if (n) return Vi(n, u);
        }),
        l = JSON.stringify(a);
      return (n || l !== "{}") && (s += ":" + l), s;
    })
  );
}
function km(e, t) {
  var n = new lr();
  return LE(e).reduce(function (r, i) {
    var o,
      s = t(i);
    if (s !== void 0) {
      for (var a = i.length - 1; a >= 0; --a) s = ((o = {}), (o[i[a]] = s), o);
      r = n.merge(r, s);
    }
    return r;
  }, Object.create(null));
}
function LE(e) {
  var t = Cm(e);
  if (!t.paths) {
    var n = (t.paths = []),
      r = [];
    e.forEach(function (i, o) {
      Pe(i)
        ? (LE(i).forEach(function (s) {
            return n.push(r.concat(s));
          }),
          (r.length = 0))
        : (r.push(i), Pe(e[o + 1]) || (n.push(r.slice(0)), (r.length = 0)));
    });
  }
  return t.paths;
}
function FE(e, t) {
  return e[t];
}
function Vi(e, t, n) {
  return (
    (n = n || FE),
    NE(
      t.reduce(function r(i, o) {
        return Pe(i)
          ? i.map(function (s) {
              return r(s, o);
            })
          : i && n(i, o);
      }, e)
    )
  );
}
function NE(e) {
  return Te(e)
    ? Pe(e)
      ? e.map(NE)
      : km(Object.keys(e).sort(), function (t) {
          return Vi(e, t);
        })
    : e;
}
function yh(e) {
  return e.args !== void 0 ? e.args : e.field ? oc(e.field, e.variables) : null;
}
var wN = function () {},
  y0 = function (e, t) {
    return t.fieldName;
  },
  g0 = function (e, t, n) {
    var r = n.mergeObjects;
    return r(e, t);
  },
  w0 = function (e, t) {
    return t;
  },
  SN = (function () {
    function e(t) {
      (this.config = t),
        (this.typePolicies = Object.create(null)),
        (this.toBeAdded = Object.create(null)),
        (this.supertypeMap = new Map()),
        (this.fuzzySubtypes = new Map()),
        (this.rootIdsByTypename = Object.create(null)),
        (this.rootTypenamesById = Object.create(null)),
        (this.usingPossibleTypes = !1),
        (this.config = P({ dataIdFromObject: OE }, t)),
        (this.cache = this.config.cache),
        this.setRootTypename("Query"),
        this.setRootTypename("Mutation"),
        this.setRootTypename("Subscription"),
        t.possibleTypes && this.addPossibleTypes(t.possibleTypes),
        t.typePolicies && this.addTypePolicies(t.typePolicies);
    }
    return (
      (e.prototype.identify = function (t, n) {
        var r,
          i = this,
          o =
            (n && (n.typename || ((r = n.storeObject) === null || r === void 0 ? void 0 : r.__typename))) ||
            t.__typename;
        if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
        var s = (n && n.storeObject) || t,
          a = P(P({}, n), {
            typename: o,
            storeObject: s,
            readField:
              (n && n.readField) ||
              function () {
                var f = Om(arguments, s);
                return i.readField(f, { store: i.cache.data, variables: f.variables });
              },
          }),
          l,
          u = o && this.getTypePolicy(o),
          c = (u && u.keyFn) || this.config.dataIdFromObject;
        return (
          Tm.withValue(!0, function () {
            for (; c; ) {
              var f = c(P(P({}, t), s), a);
              if (Pe(f)) c = m0(f);
              else {
                l = f;
                break;
              }
            }
          }),
          (l = l ? String(l) : void 0),
          a.keyObject ? [l, a.keyObject] : [l]
        );
      }),
      (e.prototype.addTypePolicies = function (t) {
        var n = this;
        Object.keys(t).forEach(function (r) {
          var i = t[r],
            o = i.queryType,
            s = i.mutationType,
            a = i.subscriptionType,
            l = hn(i, ["queryType", "mutationType", "subscriptionType"]);
          o && n.setRootTypename("Query", r),
            s && n.setRootTypename("Mutation", r),
            a && n.setRootTypename("Subscription", r),
            Ae.call(n.toBeAdded, r) ? n.toBeAdded[r].push(l) : (n.toBeAdded[r] = [l]);
        });
      }),
      (e.prototype.updateTypePolicy = function (t, n) {
        var r = this,
          i = this.getTypePolicy(t),
          o = n.keyFields,
          s = n.fields;
        function a(l, u) {
          l.merge = typeof u == "function" ? u : u === !0 ? g0 : u === !1 ? w0 : l.merge;
        }
        a(i, n.merge),
          (i.keyFn = o === !1 ? wN : Pe(o) ? m0(o) : typeof o == "function" ? o : i.keyFn),
          s &&
            Object.keys(s).forEach(function (l) {
              var u = r.getFieldPolicy(t, l, !0),
                c = s[l];
              if (typeof c == "function") u.read = c;
              else {
                var f = c.keyArgs,
                  d = c.read,
                  h = c.merge;
                (u.keyFn = f === !1 ? y0 : Pe(f) ? v0(f) : typeof f == "function" ? f : u.keyFn),
                  typeof d == "function" && (u.read = d),
                  a(u, h);
              }
              u.read && u.merge && (u.keyFn = u.keyFn || y0);
            });
      }),
      (e.prototype.setRootTypename = function (t, n) {
        n === void 0 && (n = t);
        var r = "ROOT_" + t.toUpperCase(),
          i = this.rootTypenamesById[r];
        n !== i &&
          ($(!i || i === t, 6, t),
          i && delete this.rootIdsByTypename[i],
          (this.rootIdsByTypename[n] = r),
          (this.rootTypenamesById[r] = n));
      }),
      (e.prototype.addPossibleTypes = function (t) {
        var n = this;
        (this.usingPossibleTypes = !0),
          Object.keys(t).forEach(function (r) {
            n.getSupertypeSet(r, !0),
              t[r].forEach(function (i) {
                n.getSupertypeSet(i, !0).add(r);
                var o = i.match(ME);
                (!o || o[0] !== i) && n.fuzzySubtypes.set(i, new RegExp(i));
              });
          });
      }),
      (e.prototype.getTypePolicy = function (t) {
        var n = this;
        if (!Ae.call(this.typePolicies, t)) {
          var r = (this.typePolicies[t] = Object.create(null));
          r.fields = Object.create(null);
          var i = this.supertypeMap.get(t);
          !i &&
            this.fuzzySubtypes.size &&
            ((i = this.getSupertypeSet(t, !0)),
            this.fuzzySubtypes.forEach(function (s, a) {
              if (s.test(t)) {
                var l = n.supertypeMap.get(a);
                l &&
                  l.forEach(function (u) {
                    return i.add(u);
                  });
              }
            })),
            i &&
              i.size &&
              i.forEach(function (s) {
                var a = n.getTypePolicy(s),
                  l = a.fields,
                  u = hn(a, ["fields"]);
                Object.assign(r, u), Object.assign(r.fields, l);
              });
        }
        var o = this.toBeAdded[t];
        return (
          o &&
            o.length &&
            o.splice(0).forEach(function (s) {
              n.updateTypePolicy(t, s);
            }),
          this.typePolicies[t]
        );
      }),
      (e.prototype.getFieldPolicy = function (t, n, r) {
        if (t) {
          var i = this.getTypePolicy(t).fields;
          return i[n] || (r && (i[n] = Object.create(null)));
        }
      }),
      (e.prototype.getSupertypeSet = function (t, n) {
        var r = this.supertypeMap.get(t);
        return !r && n && this.supertypeMap.set(t, (r = new Set())), r;
      }),
      (e.prototype.fragmentMatches = function (t, n, r, i) {
        var o = this;
        if (!t.typeCondition) return !0;
        if (!n) return !1;
        var s = t.typeCondition.name.value;
        if (n === s) return !0;
        if (this.usingPossibleTypes && this.supertypeMap.has(s))
          for (
            var a = this.getSupertypeSet(n, !0),
              l = [a],
              u = function (v) {
                var y = o.getSupertypeSet(v, !1);
                y && y.size && l.indexOf(y) < 0 && l.push(y);
              },
              c = !!(r && this.fuzzySubtypes.size),
              f = !1,
              d = 0;
            d < l.length;
            ++d
          ) {
            var h = l[d];
            if (h.has(s)) return a.has(s) || (f && globalThis.__DEV__ !== !1 && $.warn(7, n, s), a.add(s)), !0;
            h.forEach(u),
              c &&
                d === l.length - 1 &&
                vh(t.selectionSet, r, i) &&
                ((c = !1),
                (f = !0),
                this.fuzzySubtypes.forEach(function (v, y) {
                  var w = n.match(v);
                  w && w[0] === n && u(y);
                }));
          }
        return !1;
      }),
      (e.prototype.hasKeyArgs = function (t, n) {
        var r = this.getFieldPolicy(t, n, !1);
        return !!(r && r.keyFn);
      }),
      (e.prototype.getStoreFieldName = function (t) {
        var n = t.typename,
          r = t.fieldName,
          i = this.getFieldPolicy(n, r, !1),
          o,
          s = i && i.keyFn;
        if (s && n)
          for (var a = { typename: n, fieldName: r, field: t.field || null, variables: t.variables }, l = yh(t); s; ) {
            var u = s(l, a);
            if (Pe(u)) s = v0(u);
            else {
              o = u || r;
              break;
            }
          }
        return (
          o === void 0 && (o = t.field ? $L(t.field, t.variables) : H_(r, yh(t))),
          o === !1 ? r : r === ur(o) ? o : r + ":" + o
        );
      }),
      (e.prototype.readField = function (t, n) {
        var r = t.from;
        if (r) {
          var i = t.field || t.fieldName;
          if (i) {
            if (t.typename === void 0) {
              var o = n.store.getFieldValue(r, "__typename");
              o && (t.typename = o);
            }
            var s = this.getStoreFieldName(t),
              a = ur(s),
              l = n.store.getFieldValue(r, s),
              u = this.getFieldPolicy(t.typename, a, !1),
              c = u && u.read;
            if (c) {
              var f = S0(this, r, t, n, n.store.getStorage(ne(r) ? r.__ref : r, s));
              return Pm.withValue(this.cache, c, [l, f]);
            }
            return l;
          }
        }
      }),
      (e.prototype.getReadFunction = function (t, n) {
        var r = this.getFieldPolicy(t, n, !1);
        return r && r.read;
      }),
      (e.prototype.getMergeFunction = function (t, n, r) {
        var i = this.getFieldPolicy(t, n, !1),
          o = i && i.merge;
        return !o && r && ((i = this.getTypePolicy(r)), (o = i && i.merge)), o;
      }),
      (e.prototype.runMergeFunction = function (t, n, r, i, o) {
        var s = r.field,
          a = r.typename,
          l = r.merge;
        return l === g0
          ? jE(i.store)(t, n)
          : l === w0
            ? n
            : (i.overwrite && (t = void 0),
              l(
                t,
                n,
                S0(
                  this,
                  void 0,
                  { typename: a, fieldName: s.name.value, field: s, variables: i.variables },
                  i,
                  o || Object.create(null)
                )
              ));
      }),
      e
    );
  })();
function S0(e, t, n, r, i) {
  var o = e.getStoreFieldName(n),
    s = ur(o),
    a = n.variables || r.variables,
    l = r.store,
    u = l.toReference,
    c = l.canRead;
  return {
    args: yh(n),
    field: n.field || null,
    fieldName: s,
    storeFieldName: o,
    variables: a,
    isReference: ne,
    toReference: u,
    storage: i,
    cache: e.cache,
    canRead: c,
    readField: function () {
      return e.readField(Om(arguments, t, a), r);
    },
    mergeObjects: jE(r.store),
  };
}
function Om(e, t, n) {
  var r = e[0],
    i = e[1],
    o = e.length,
    s;
  return (
    typeof r == "string"
      ? (s = { fieldName: r, from: o > 1 ? i : t })
      : ((s = P({}, r)), Ae.call(s, "from") || (s.from = t)),
    globalThis.__DEV__ !== !1 && s.from === void 0 && globalThis.__DEV__ !== !1 && $.warn(8, L_(Array.from(e))),
    s.variables === void 0 && (s.variables = n),
    s
  );
}
function jE(e) {
  return function (n, r) {
    if (Pe(n) || Pe(r)) throw tt(9);
    if (Te(n) && Te(r)) {
      var i = e.getFieldValue(n, "__typename"),
        o = e.getFieldValue(r, "__typename"),
        s = i && o && i !== o;
      if (s) return r;
      if (ne(n) && Ti(r)) return e.merge(n.__ref, r), n;
      if (Ti(n) && ne(r)) return e.merge(n, r.__ref), r;
      if (Ti(n) && Ti(r)) return P(P({}, n), r);
    }
    return r;
  };
}
function Tf(e, t, n) {
  var r = "".concat(t).concat(n),
    i = e.flavors.get(r);
  return (
    i ||
      e.flavors.set(r, (i = e.clientOnly === t && e.deferred === n ? e : P(P({}, e), { clientOnly: t, deferred: n }))),
    i
  );
}
var bN = (function () {
    function e(t, n, r) {
      (this.cache = t), (this.reader = n), (this.fragments = r);
    }
    return (
      (e.prototype.writeToStore = function (t, n) {
        var r = this,
          i = n.query,
          o = n.result,
          s = n.dataId,
          a = n.variables,
          l = n.overwrite,
          u = Wr(i),
          c = uN();
        a = P(P({}, mm(u)), a);
        var f = P(
            P(
              {
                store: t,
                written: Object.create(null),
                merge: function (h, v) {
                  return c.merge(h, v);
                },
                variables: a,
                varString: er(a),
              },
              AE(i, this.fragments)
            ),
            { overwrite: !!l, incomingById: new Map(), clientOnly: !1, deferred: !1, flavors: new Map() }
          ),
          d = this.processSelectionSet({
            result: o || Object.create(null),
            dataId: s,
            selectionSet: u.selectionSet,
            mergeTree: { map: new Map() },
            context: f,
          });
        if (!ne(d)) throw tt(12, o);
        return (
          f.incomingById.forEach(function (h, v) {
            var y = h.storeObject,
              w = h.mergeTree,
              p = h.fieldNodeSet,
              m = Ni(v);
            if (w && w.map.size) {
              var g = r.applyMerges(w, m, y, f);
              if (ne(g)) return;
              y = g;
            }
            if (globalThis.__DEV__ !== !1 && !f.overwrite) {
              var b = Object.create(null);
              p.forEach(function (T) {
                T.selectionSet && (b[T.name.value] = !0);
              });
              var S = function (T) {
                  return b[ur(T)] === !0;
                },
                _ = function (T) {
                  var E = w && w.map.get(T);
                  return !!(E && E.info && E.info.merge);
                };
              Object.keys(y).forEach(function (T) {
                S(T) && !_(T) && xN(m, y, T, f.store);
              });
            }
            t.merge(v, y);
          }),
          t.retain(d.__ref),
          d
        );
      }),
      (e.prototype.processSelectionSet = function (t) {
        var n = this,
          r = t.dataId,
          i = t.result,
          o = t.selectionSet,
          s = t.context,
          a = t.mergeTree,
          l = this.cache.policies,
          u = Object.create(null),
          c = (r && l.rootTypenamesById[r]) || ah(i, o, s.fragmentMap) || (r && s.store.get(r, "__typename"));
        typeof c == "string" && (u.__typename = c);
        var f = function () {
            var g = Om(arguments, u, s.variables);
            if (ne(g.from)) {
              var b = s.incomingById.get(g.from.__ref);
              if (b) {
                var S = l.readField(P(P({}, g), { from: b.storeObject }), s);
                if (S !== void 0) return S;
              }
            }
            return l.readField(g, s);
          },
          d = new Set();
        this.flattenFields(o, i, s, c).forEach(function (g, b) {
          var S,
            _ = xn(b),
            T = i[_];
          if ((d.add(b), T !== void 0)) {
            var E = l.getStoreFieldName({ typename: c, fieldName: b.name.value, field: b, variables: g.variables }),
              C = b0(a, E),
              k = n.processFieldValue(T, b, b.selectionSet ? Tf(g, !1, !1) : g, C),
              D = void 0;
            b.selectionSet && (ne(k) || Ti(k)) && (D = f("__typename", k));
            var R = l.getMergeFunction(c, b.name.value, D);
            R ? (C.info = { field: b, typename: c, merge: R }) : x0(a, E), (u = g.merge(u, ((S = {}), (S[E] = k), S)));
          } else
            globalThis.__DEV__ !== !1 &&
              !g.clientOnly &&
              !g.deferred &&
              !wm.added(b) &&
              !l.getReadFunction(c, b.name.value) &&
              globalThis.__DEV__ !== !1 &&
              $.error(13, xn(b), i);
        });
        try {
          var h = l.identify(i, {
              typename: c,
              selectionSet: o,
              fragmentMap: s.fragmentMap,
              storeObject: u,
              readField: f,
            }),
            v = h[0],
            y = h[1];
          (r = r || v), y && (u = s.merge(u, y));
        } catch (g) {
          if (!r) throw g;
        }
        if (typeof r == "string") {
          var w = Ni(r),
            p = s.written[r] || (s.written[r] = []);
          if (p.indexOf(o) >= 0 || (p.push(o), this.reader && this.reader.isFresh(i, w, o, s))) return w;
          var m = s.incomingById.get(r);
          return (
            m
              ? ((m.storeObject = s.merge(m.storeObject, u)),
                (m.mergeTree = gh(m.mergeTree, a)),
                d.forEach(function (g) {
                  return m.fieldNodeSet.add(g);
                }))
              : s.incomingById.set(r, { storeObject: u, mergeTree: Su(a) ? void 0 : a, fieldNodeSet: d }),
            w
          );
        }
        return u;
      }),
      (e.prototype.processFieldValue = function (t, n, r, i) {
        var o = this;
        return !n.selectionSet || t === null
          ? globalThis.__DEV__ !== !1
            ? pE(t)
            : t
          : Pe(t)
            ? t.map(function (s, a) {
                var l = o.processFieldValue(s, n, r, b0(i, a));
                return x0(i, a), l;
              })
            : this.processSelectionSet({ result: t, selectionSet: n.selectionSet, context: r, mergeTree: i });
      }),
      (e.prototype.flattenFields = function (t, n, r, i) {
        i === void 0 && (i = ah(n, t, r.fragmentMap));
        var o = new Map(),
          s = this.cache.policies,
          a = new Pn(!1);
        return (
          (function l(u, c) {
            var f = a.lookup(u, c.clientOnly, c.deferred);
            f.visited ||
              ((f.visited = !0),
              u.selections.forEach(function (d) {
                if (da(d, r.variables)) {
                  var h = c.clientOnly,
                    v = c.deferred;
                  if (
                    (!(h && v) &&
                      Xt(d.directives) &&
                      d.directives.forEach(function (p) {
                        var m = p.name.value;
                        if ((m === "client" && (h = !0), m === "defer")) {
                          var g = oc(p, r.variables);
                          (!g || g.if !== !1) && (v = !0);
                        }
                      }),
                    sr(d))
                  ) {
                    var y = o.get(d);
                    y && ((h = h && y.clientOnly), (v = v && y.deferred)), o.set(d, Tf(r, h, v));
                  } else {
                    var w = ic(d, r.lookupFragment);
                    if (!w && d.kind === ue.FRAGMENT_SPREAD) throw tt(14, d.name.value);
                    w && s.fragmentMatches(w, i, n, r.variables) && l(w.selectionSet, Tf(r, h, v));
                  }
                }
              }));
          })(t, r),
          o
        );
      }),
      (e.prototype.applyMerges = function (t, n, r, i, o) {
        var s,
          a = this;
        if (t.map.size && !ne(r)) {
          var l = !Pe(r) && (ne(n) || Ti(n)) ? n : void 0,
            u = r;
          l && !o && (o = [ne(l) ? l.__ref : l]);
          var c,
            f = function (d, h) {
              return Pe(d) ? (typeof h == "number" ? d[h] : void 0) : i.store.getFieldValue(d, String(h));
            };
          t.map.forEach(function (d, h) {
            var v = f(l, h),
              y = f(u, h);
            if (y !== void 0) {
              o && o.push(h);
              var w = a.applyMerges(d, v, y, i, o);
              w !== y && ((c = c || new Map()), c.set(h, w)), o && $(o.pop() === h);
            }
          }),
            c &&
              ((r = Pe(u) ? u.slice(0) : P({}, u)),
              c.forEach(function (d, h) {
                r[h] = d;
              }));
        }
        return t.info
          ? this.cache.policies.runMergeFunction(n, r, t.info, i, o && (s = i.store).getStorage.apply(s, o))
          : r;
      }),
      e
    );
  })(),
  VE = [];
function b0(e, t) {
  var n = e.map;
  return n.has(t) || n.set(t, VE.pop() || { map: new Map() }), n.get(t);
}
function gh(e, t) {
  if (e === t || !t || Su(t)) return e;
  if (!e || Su(e)) return t;
  var n = e.info && t.info ? P(P({}, e.info), t.info) : e.info || t.info,
    r = e.map.size && t.map.size,
    i = r ? new Map() : e.map.size ? e.map : t.map,
    o = { info: n, map: i };
  if (r) {
    var s = new Set(t.map.keys());
    e.map.forEach(function (a, l) {
      o.map.set(l, gh(a, t.map.get(l))), s.delete(l);
    }),
      s.forEach(function (a) {
        o.map.set(a, gh(t.map.get(a), e.map.get(a)));
      });
  }
  return o;
}
function Su(e) {
  return !e || !(e.info || e.map.size);
}
function x0(e, t) {
  var n = e.map,
    r = n.get(t);
  r && Su(r) && (VE.push(r), n.delete(t));
}
var _0 = new Set();
function xN(e, t, n, r) {
  var i = function (f) {
      var d = r.getFieldValue(f, n);
      return typeof d == "object" && d;
    },
    o = i(e);
  if (o) {
    var s = i(t);
    if (
      s &&
      !ne(o) &&
      !le(o, s) &&
      !Object.keys(o).every(function (f) {
        return r.getFieldValue(s, f) !== void 0;
      })
    ) {
      var a = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"),
        l = ur(n),
        u = "".concat(a, ".").concat(l);
      if (!_0.has(u)) {
        _0.add(u);
        var c = [];
        !Pe(o) &&
          !Pe(s) &&
          [o, s].forEach(function (f) {
            var d = r.getFieldValue(f, "__typename");
            typeof d == "string" && !c.includes(d) && c.push(d);
          }),
          globalThis.__DEV__ !== !1 &&
            $.warn(
              15,
              l,
              a,
              c.length
                ? "either ensure all objects of type " + c.join(" and ") + " have an ID or a custom merge function, or "
                : "",
              u,
              P({}, o),
              P({}, s)
            );
      }
    }
  }
}
var $E = (function (e) {
  Jt(t, e);
  function t(n) {
    n === void 0 && (n = {});
    var r = e.call(this) || this;
    return (
      (r.watches = new Set()),
      (r.addTypenameTransform = new aE(wm)),
      (r.assumeImmutableResults = !0),
      (r.makeVar = yN),
      (r.txCount = 0),
      (r.config = aN(n)),
      (r.addTypename = !!r.config.addTypename),
      (r.policies = new SN({
        cache: r,
        dataIdFromObject: r.config.dataIdFromObject,
        possibleTypes: r.config.possibleTypes,
        typePolicies: r.config.typePolicies,
      })),
      r.init(),
      r
    );
  }
  return (
    (t.prototype.init = function () {
      var n = (this.data = new Js.Root({ policies: this.policies, resultCaching: this.config.resultCaching }));
      (this.optimisticData = n.stump), this.resetResultCache();
    }),
    (t.prototype.resetResultCache = function (n) {
      var r = this,
        i = this.storeReader,
        o = this.config.fragments;
      (this.storeWriter = new bN(
        this,
        (this.storeReader = new hN({
          cache: this,
          addTypename: this.addTypename,
          resultCacheMaxSize: this.config.resultCacheMaxSize,
          canonizeResults: DE(this.config),
          canon: n ? void 0 : i && i.canon,
          fragments: o,
        })),
        o
      )),
        (this.maybeBroadcastWatch = Xs(
          function (s, a) {
            return r.broadcastWatch(s, a);
          },
          {
            max: this.config.resultCacheMaxSize || bn["inMemoryCache.maybeBroadcastWatch"] || 5e3,
            makeCacheKey: function (s) {
              var a = s.optimistic ? r.optimisticData : r.data;
              if (bs(a)) {
                var l = s.optimistic,
                  u = s.id,
                  c = s.variables;
                return a.makeCacheKey(s.query, s.callback, er({ optimistic: l, id: u, variables: c }));
              }
            },
          }
        )),
        new Set([this.data.group, this.optimisticData.group]).forEach(function (s) {
          return s.resetCaching();
        });
    }),
    (t.prototype.restore = function (n) {
      return this.init(), n && this.data.replace(n), this;
    }),
    (t.prototype.extract = function (n) {
      return n === void 0 && (n = !1), (n ? this.optimisticData : this.data).extract();
    }),
    (t.prototype.read = function (n) {
      var r = n.returnPartialData,
        i = r === void 0 ? !1 : r;
      try {
        return (
          this.storeReader.diffQueryAgainstStore(
            P(P({}, n), {
              store: n.optimistic ? this.optimisticData : this.data,
              config: this.config,
              returnPartialData: i,
            })
          ).result || null
        );
      } catch (o) {
        if (o instanceof kE) return null;
        throw o;
      }
    }),
    (t.prototype.write = function (n) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, n);
      } finally {
        !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
      }
    }),
    (t.prototype.modify = function (n) {
      if (Ae.call(n, "id") && !n.id) return !1;
      var r = n.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, r.modify(n.id || "ROOT_QUERY", n.fields);
      } finally {
        !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
      }
    }),
    (t.prototype.diff = function (n) {
      return this.storeReader.diffQueryAgainstStore(
        P(P({}, n), {
          store: n.optimistic ? this.optimisticData : this.data,
          rootId: n.id || "ROOT_QUERY",
          config: this.config,
        })
      );
    }),
    (t.prototype.watch = function (n) {
      var r = this;
      return (
        this.watches.size || vN(this),
        this.watches.add(n),
        n.immediate && this.maybeBroadcastWatch(n),
        function () {
          r.watches.delete(n) && !r.watches.size && h0(r), r.maybeBroadcastWatch.forget(n);
        }
      );
    }),
    (t.prototype.gc = function (n) {
      var r;
      er.reset(),
        Mr.reset(),
        this.addTypenameTransform.resetCache(),
        (r = this.config.fragments) === null || r === void 0 || r.resetCaches();
      var i = this.optimisticData.gc();
      return (
        n &&
          !this.txCount &&
          (n.resetResultCache
            ? this.resetResultCache(n.resetResultIdentities)
            : n.resetResultIdentities && this.storeReader.resetCanon()),
        i
      );
    }),
    (t.prototype.retain = function (n, r) {
      return (r ? this.optimisticData : this.data).retain(n);
    }),
    (t.prototype.release = function (n, r) {
      return (r ? this.optimisticData : this.data).release(n);
    }),
    (t.prototype.identify = function (n) {
      if (ne(n)) return n.__ref;
      try {
        return this.policies.identify(n)[0];
      } catch (r) {
        globalThis.__DEV__ !== !1 && $.warn(r);
      }
    }),
    (t.prototype.evict = function (n) {
      if (!n.id) {
        if (Ae.call(n, "id")) return !1;
        n = P(P({}, n), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(n, this.data);
      } finally {
        !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
      }
    }),
    (t.prototype.reset = function (n) {
      var r = this;
      return (
        this.init(),
        er.reset(),
        n && n.discardWatches
          ? (this.watches.forEach(function (i) {
              return r.maybeBroadcastWatch.forget(i);
            }),
            this.watches.clear(),
            h0(this))
          : this.broadcastWatches(),
        Promise.resolve()
      );
    }),
    (t.prototype.removeOptimistic = function (n) {
      var r = this.optimisticData.removeLayer(n);
      r !== this.optimisticData && ((this.optimisticData = r), this.broadcastWatches());
    }),
    (t.prototype.batch = function (n) {
      var r = this,
        i = n.update,
        o = n.optimistic,
        s = o === void 0 ? !0 : o,
        a = n.removeOptimistic,
        l = n.onWatchUpdated,
        u,
        c = function (d) {
          var h = r,
            v = h.data,
            y = h.optimisticData;
          ++r.txCount, d && (r.data = r.optimisticData = d);
          try {
            return (u = i(r));
          } finally {
            --r.txCount, (r.data = v), (r.optimisticData = y);
          }
        },
        f = new Set();
      return (
        l &&
          !this.txCount &&
          this.broadcastWatches(
            P(P({}, n), {
              onWatchUpdated: function (d) {
                return f.add(d), !1;
              },
            })
          ),
        typeof s == "string"
          ? (this.optimisticData = this.optimisticData.addLayer(s, c))
          : s === !1
            ? c(this.data)
            : c(),
        typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)),
        l && f.size
          ? (this.broadcastWatches(
              P(P({}, n), {
                onWatchUpdated: function (d, h) {
                  var v = l.call(this, d, h);
                  return v !== !1 && f.delete(d), v;
                },
              })
            ),
            f.size &&
              f.forEach(function (d) {
                return r.maybeBroadcastWatch.dirty(d);
              }))
          : this.broadcastWatches(n),
        u
      );
    }),
    (t.prototype.performTransaction = function (n, r) {
      return this.batch({ update: n, optimistic: r || r !== null });
    }),
    (t.prototype.transformDocument = function (n) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(n));
    }),
    (t.prototype.fragmentMatches = function (n, r) {
      return this.policies.fragmentMatches(n, r);
    }),
    (t.prototype.lookupFragment = function (n) {
      var r;
      return ((r = this.config.fragments) === null || r === void 0 ? void 0 : r.lookup(n)) || null;
    }),
    (t.prototype.broadcastWatches = function (n) {
      var r = this;
      this.txCount ||
        this.watches.forEach(function (i) {
          return r.maybeBroadcastWatch(i, n);
        });
    }),
    (t.prototype.addFragmentsToDocument = function (n) {
      var r = this.config.fragments;
      return r ? r.transform(n) : n;
    }),
    (t.prototype.addTypenameToDocument = function (n) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(n) : n;
    }),
    (t.prototype.broadcastWatch = function (n, r) {
      var i = n.lastDiff,
        o = this.diff(n);
      (r &&
        (n.optimistic && typeof r.optimistic == "string" && (o.fromOptimisticTransaction = !0),
        r.onWatchUpdated && r.onWatchUpdated.call(this, n, o, i) === !1)) ||
        ((!i || !le(i.result, o.result)) && n.callback((n.lastDiff = o), i));
    }),
    t
  );
})(CE);
globalThis.__DEV__ !== !1 && ($E.prototype.getMemoryInternals = xL);
var te;
(function (e) {
  (e[(e.loading = 1)] = "loading"),
    (e[(e.setVariables = 2)] = "setVariables"),
    (e[(e.fetchMore = 3)] = "fetchMore"),
    (e[(e.refetch = 4)] = "refetch"),
    (e[(e.poll = 6)] = "poll"),
    (e[(e.ready = 7)] = "ready"),
    (e[(e.error = 8)] = "error");
})(te || (te = {}));
function $i(e) {
  return e ? e < 7 : !1;
}
var E0 = Object.assign,
  _N = Object.hasOwnProperty,
  wh = (function (e) {
    Jt(t, e);
    function t(n) {
      var r = n.queryManager,
        i = n.queryInfo,
        o = n.options,
        s =
          e.call(this, function (w) {
            try {
              var p = w._subscription._observer;
              p && !p.error && (p.error = EN);
            } catch {}
            var m = !s.observers.size;
            s.observers.add(w);
            var g = s.last;
            return (
              g && g.error ? w.error && w.error(g.error) : g && g.result && w.next && w.next(s.maskResult(g.result)),
              m && s.reobserve().catch(function () {}),
              function () {
                s.observers.delete(w) && !s.observers.size && s.tearDownQuery();
              }
            );
          }) || this;
      (s.observers = new Set()),
        (s.subscriptions = new Set()),
        (s.queryInfo = i),
        (s.queryManager = r),
        (s.waitForOwnResult = Pf(o.fetchPolicy)),
        (s.isTornDown = !1),
        (s.subscribeToMore = s.subscribeToMore.bind(s)),
        (s.maskResult = s.maskResult.bind(s));
      var a = r.defaultOptions.watchQuery,
        l = a === void 0 ? {} : a,
        u = l.fetchPolicy,
        c = u === void 0 ? "cache-first" : u,
        f = o.fetchPolicy,
        d = f === void 0 ? c : f,
        h = o.initialFetchPolicy,
        v = h === void 0 ? (d === "standby" ? c : d) : h;
      (s.options = P(P({}, o), { initialFetchPolicy: v, fetchPolicy: d })),
        (s.queryId = i.queryId || r.generateQueryId());
      var y = Wr(s.query);
      return (s.queryName = y && y.name && y.name.value), s;
    }
    return (
      Object.defineProperty(t.prototype, "query", {
        get: function () {
          return this.lastQuery || this.options.query;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "variables", {
        get: function () {
          return this.options.variables;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.result = function () {
        var n = this;
        return new Promise(function (r, i) {
          var o = {
              next: function (a) {
                r(a),
                  n.observers.delete(o),
                  n.observers.size || n.queryManager.removeQuery(n.queryId),
                  setTimeout(function () {
                    s.unsubscribe();
                  }, 0);
              },
              error: i,
            },
            s = n.subscribe(o);
        });
      }),
      (t.prototype.resetDiff = function () {
        this.queryInfo.resetDiff();
      }),
      (t.prototype.getCurrentFullResult = function (n) {
        n === void 0 && (n = !0);
        var r = this.getLastResult(!0),
          i = this.queryInfo.networkStatus || (r && r.networkStatus) || te.ready,
          o = P(P({}, r), { loading: $i(i), networkStatus: i }),
          s = this.options.fetchPolicy,
          a = s === void 0 ? "cache-first" : s;
        if (!(Pf(a) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
          if (this.waitForOwnResult) this.queryInfo.updateWatch();
          else {
            var l = this.queryInfo.getDiff();
            (l.complete || this.options.returnPartialData) && (o.data = l.result),
              le(o.data, {}) && (o.data = void 0),
              l.complete
                ? (delete o.partial,
                  l.complete &&
                    o.networkStatus === te.loading &&
                    (a === "cache-first" || a === "cache-only") &&
                    ((o.networkStatus = te.ready), (o.loading = !1)))
                : (o.partial = !0),
              o.networkStatus === te.ready && (o.error || o.errors) && (o.networkStatus = te.error),
              globalThis.__DEV__ !== !1 &&
                !l.complete &&
                !this.options.partialRefetch &&
                !o.loading &&
                !o.data &&
                !o.error &&
                BE(l.missing);
          }
        return n && this.updateLastResult(o), o;
      }),
      (t.prototype.getCurrentResult = function (n) {
        return n === void 0 && (n = !0), this.maskResult(this.getCurrentFullResult(n));
      }),
      (t.prototype.isDifferentFromLastResult = function (n, r) {
        if (!this.last) return !0;
        var i = this.queryManager.getDocumentInfo(this.query),
          o = this.queryManager.dataMasking,
          s = o ? i.nonReactiveQuery : this.query,
          a = o || i.hasNonreactiveDirective ? !bE(s, this.last.result, n, this.variables) : !le(this.last.result, n);
        return a || (r && !le(this.last.variables, r));
      }),
      (t.prototype.getLast = function (n, r) {
        var i = this.last;
        if (i && i[n] && (!r || le(i.variables, this.variables))) return i[n];
      }),
      (t.prototype.getLastResult = function (n) {
        return this.getLast("result", n);
      }),
      (t.prototype.getLastError = function (n) {
        return this.getLast("error", n);
      }),
      (t.prototype.resetLastResults = function () {
        delete this.last, (this.isTornDown = !1);
      }),
      (t.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
      }),
      (t.prototype.refetch = function (n) {
        var r,
          i = { pollInterval: 0 },
          o = this.options.fetchPolicy;
        if (
          (o === "no-cache" ? (i.fetchPolicy = "no-cache") : (i.fetchPolicy = "network-only"),
          globalThis.__DEV__ !== !1 && n && _N.call(n, "variables"))
        ) {
          var s = G_(this.query),
            a = s.variableDefinitions;
          (!a ||
            !a.some(function (l) {
              return l.variable.name.value === "variables";
            })) &&
            globalThis.__DEV__ !== !1 &&
            $.warn(21, n, ((r = s.name) === null || r === void 0 ? void 0 : r.value) || s);
        }
        return (
          n &&
            !le(this.options.variables, n) &&
            (i.variables = this.options.variables = P(P({}, this.options.variables), n)),
          this.queryInfo.resetLastWrite(),
          this.reobserve(i, te.refetch)
        );
      }),
      (t.prototype.fetchMore = function (n) {
        var r = this,
          i = P(
            P(
              {},
              n.query
                ? n
                : P(P(P(P({}, this.options), { query: this.options.query }), n), {
                    variables: P(P({}, this.options.variables), n.variables),
                  })
            ),
            { fetchPolicy: "no-cache" }
          );
        i.query = this.transformDocument(i.query);
        var o = this.queryManager.generateQueryId();
        this.lastQuery = n.query ? this.transformDocument(this.options.query) : i.query;
        var s = this.queryInfo,
          a = s.networkStatus;
        (s.networkStatus = te.fetchMore), i.notifyOnNetworkStatusChange && this.observe();
        var l = new Set(),
          u = n == null ? void 0 : n.updateQuery,
          c = this.options.fetchPolicy !== "no-cache";
        return (
          c || $(u, 22),
          this.queryManager
            .fetchQuery(o, i, te.fetchMore)
            .then(function (f) {
              if ((r.queryManager.removeQuery(o), s.networkStatus === te.fetchMore && (s.networkStatus = a), c))
                r.queryManager.cache.batch({
                  update: function (v) {
                    var y = n.updateQuery;
                    y
                      ? v.updateQuery(
                          { query: r.query, variables: r.variables, returnPartialData: !0, optimistic: !1 },
                          function (w) {
                            return y(w, { fetchMoreResult: f.data, variables: i.variables });
                          }
                        )
                      : v.writeQuery({ query: i.query, variables: i.variables, data: f.data });
                  },
                  onWatchUpdated: function (v) {
                    l.add(v.query);
                  },
                });
              else {
                var d = r.getLast("result"),
                  h = u(d.data, { fetchMoreResult: f.data, variables: i.variables });
                r.reportResult(P(P({}, d), { networkStatus: a, loading: $i(a), data: h }), r.variables);
              }
              return r.maskResult(f);
            })
            .finally(function () {
              c && !l.has(r.query) && zE(r);
            })
        );
      }),
      (t.prototype.subscribeToMore = function (n) {
        var r = this,
          i = this.queryManager
            .startGraphQLSubscription({ query: n.document, variables: n.variables, context: n.context })
            .subscribe({
              next: function (o) {
                var s = n.updateQuery;
                s &&
                  r.updateQuery(function (a, l) {
                    return s(a, P({ subscriptionData: o }, l));
                  });
              },
              error: function (o) {
                if (n.onError) {
                  n.onError(o);
                  return;
                }
                globalThis.__DEV__ !== !1 && $.error(23, o);
              },
            });
        return (
          this.subscriptions.add(i),
          function () {
            r.subscriptions.delete(i) && i.unsubscribe();
          }
        );
      }),
      (t.prototype.setOptions = function (n) {
        return this.reobserve(n);
      }),
      (t.prototype.silentSetOptions = function (n) {
        var r = ro(this.options, n || {});
        E0(this.options, r);
      }),
      (t.prototype.setVariables = function (n) {
        return le(this.variables, n)
          ? this.observers.size
            ? this.result()
            : Promise.resolve()
          : ((this.options.variables = n),
            this.observers.size
              ? this.reobserve({ fetchPolicy: this.options.initialFetchPolicy, variables: n }, te.setVariables)
              : Promise.resolve());
      }),
      (t.prototype.updateQuery = function (n) {
        var r = this.queryManager,
          i = r.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: !0,
            optimistic: !1,
          }),
          o = i.result,
          s = i.complete,
          a = n(o, { variables: this.variables, complete: !!s, previousData: o });
        a &&
          (r.cache.writeQuery({ query: this.options.query, data: a, variables: this.variables }), r.broadcastQueries());
      }),
      (t.prototype.startPolling = function (n) {
        (this.options.pollInterval = n), this.updatePolling();
      }),
      (t.prototype.stopPolling = function () {
        (this.options.pollInterval = 0), this.updatePolling();
      }),
      (t.prototype.applyNextFetchPolicy = function (n, r) {
        if (r.nextFetchPolicy) {
          var i = r.fetchPolicy,
            o = i === void 0 ? "cache-first" : i,
            s = r.initialFetchPolicy,
            a = s === void 0 ? o : s;
          o === "standby" ||
            (typeof r.nextFetchPolicy == "function"
              ? (r.fetchPolicy = r.nextFetchPolicy(o, {
                  reason: n,
                  options: r,
                  observable: this,
                  initialFetchPolicy: a,
                }))
              : n === "variables-changed"
                ? (r.fetchPolicy = a)
                : (r.fetchPolicy = r.nextFetchPolicy));
        }
        return r.fetchPolicy;
      }),
      (t.prototype.fetch = function (n, r, i) {
        return (
          this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, n, r, i)
        );
      }),
      (t.prototype.updatePolling = function () {
        var n = this;
        if (!this.queryManager.ssrMode) {
          var r = this,
            i = r.pollingInfo,
            o = r.options.pollInterval;
          if (!o || !this.hasObservers()) {
            i && (clearTimeout(i.timeout), delete this.pollingInfo);
            return;
          }
          if (!(i && i.interval === o)) {
            $(o, 24);
            var s = i || (this.pollingInfo = {});
            s.interval = o;
            var a = function () {
                var u, c;
                n.pollingInfo &&
                  (!$i(n.queryInfo.networkStatus) &&
                  !(!((c = (u = n.options).skipPollAttempt) === null || c === void 0) && c.call(u))
                    ? n
                        .reobserve(
                          { fetchPolicy: n.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only" },
                          te.poll
                        )
                        .then(l, l)
                    : l());
              },
              l = function () {
                var u = n.pollingInfo;
                u && (clearTimeout(u.timeout), (u.timeout = setTimeout(a, u.interval)));
              };
            l();
          }
        }
      }),
      (t.prototype.updateLastResult = function (n, r) {
        r === void 0 && (r = this.variables);
        var i = this.getLastError();
        return (
          i && this.last && !le(r, this.last.variables) && (i = void 0),
          (this.last = P(
            { result: this.queryManager.assumeImmutableResults ? n : pE(n), variables: r },
            i ? { error: i } : null
          ))
        );
      }),
      (t.prototype.reobserveAsConcast = function (n, r) {
        var i = this;
        this.isTornDown = !1;
        var o = r === te.refetch || r === te.fetchMore || r === te.poll,
          s = this.options.variables,
          a = this.options.fetchPolicy,
          l = ro(this.options, n || {}),
          u = o ? l : E0(this.options, l),
          c = this.transformDocument(u.query);
        (this.lastQuery = c),
          o ||
            (this.updatePolling(),
            n &&
              n.variables &&
              !le(n.variables, s) &&
              u.fetchPolicy !== "standby" &&
              (u.fetchPolicy === a || typeof u.nextFetchPolicy == "function") &&
              (this.applyNextFetchPolicy("variables-changed", u), r === void 0 && (r = te.setVariables))),
          this.waitForOwnResult && (this.waitForOwnResult = Pf(u.fetchPolicy));
        var f = function () {
            i.concast === v && (i.waitForOwnResult = !1);
          },
          d = u.variables && P({}, u.variables),
          h = this.fetch(u, r, c),
          v = h.concast,
          y = h.fromLink,
          w = {
            next: function (p) {
              le(i.variables, d) && (f(), i.reportResult(p, d));
            },
            error: function (p) {
              le(i.variables, d) && (gE(p) || (p = new _r({ networkError: p })), f(), i.reportError(p, d));
            },
          };
        return (
          !o &&
            (y || !this.concast) &&
            (this.concast && this.observer && this.concast.removeObserver(this.observer),
            (this.concast = v),
            (this.observer = w)),
          v.addObserver(w),
          v
        );
      }),
      (t.prototype.reobserve = function (n, r) {
        return mF(this.reobserveAsConcast(n, r).promise.then(this.maskResult));
      }),
      (t.prototype.resubscribeAfterError = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var i = this.last;
        this.resetLastResults();
        var o = this.subscribe.apply(this, n);
        return (this.last = i), o;
      }),
      (t.prototype.observe = function () {
        this.reportResult(this.getCurrentFullResult(!1), this.variables);
      }),
      (t.prototype.reportResult = function (n, r) {
        var i = this.getLastError(),
          o = this.isDifferentFromLastResult(n, r);
        (i || !n.partial || this.options.returnPartialData) && this.updateLastResult(n, r),
          (i || o) && Ss(this.observers, "next", this.maskResult(n));
      }),
      (t.prototype.reportError = function (n, r) {
        var i = P(P({}, this.getLastResult()), {
          error: n,
          errors: n.graphQLErrors,
          networkStatus: te.error,
          loading: !1,
        });
        this.updateLastResult(i, r), Ss(this.observers, "error", (this.last.error = n));
      }),
      (t.prototype.hasObservers = function () {
        return this.observers.size > 0;
      }),
      (t.prototype.tearDownQuery = function () {
        this.isTornDown ||
          (this.concast &&
            this.observer &&
            (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer),
          this.stopPolling(),
          this.subscriptions.forEach(function (n) {
            return n.unsubscribe();
          }),
          this.subscriptions.clear(),
          this.queryManager.stopQuery(this.queryId),
          this.observers.clear(),
          (this.isTornDown = !0));
      }),
      (t.prototype.transformDocument = function (n) {
        return this.queryManager.transform(n);
      }),
      (t.prototype.maskResult = function (n) {
        return n && "data" in n
          ? P(P({}, n), {
              data: this.queryManager.maskOperation({
                document: this.query,
                data: n.data,
                fetchPolicy: this.options.fetchPolicy,
                id: this.queryId,
              }),
            })
          : n;
      }),
      t
    );
  })(ae);
mE(wh);
function zE(e) {
  var t = e.options,
    n = t.fetchPolicy,
    r = t.nextFetchPolicy;
  return n === "cache-and-network" || n === "network-only"
    ? e.reobserve({
        fetchPolicy: "cache-first",
        nextFetchPolicy: function (i, o) {
          return (this.nextFetchPolicy = r), typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, o) : n;
        },
      })
    : e.reobserve();
}
function EN(e) {
  globalThis.__DEV__ !== !1 && $.error(25, e.message, e.stack);
}
function BE(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && $.debug(26, e);
}
function Pf(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Pi = new (Yr ? WeakMap : Map)();
function Cf(e, t) {
  var n = e[t];
  typeof n == "function" &&
    (e[t] = function () {
      return Pi.set(e, (Pi.get(e) + 1) % 1e15), n.apply(this, arguments);
    });
}
function T0(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
}
var kf = (function () {
  function e(t, n) {
    n === void 0 && (n = t.generateQueryId()),
      (this.queryId = n),
      (this.listeners = new Set()),
      (this.document = null),
      (this.lastRequestId = 1),
      (this.stopped = !1),
      (this.dirty = !1),
      (this.observableQuery = null);
    var r = (this.cache = t.cache);
    Pi.has(r) || (Pi.set(r, 0), Cf(r, "evict"), Cf(r, "modify"), Cf(r, "reset"));
  }
  return (
    (e.prototype.init = function (t) {
      var n = t.networkStatus || te.loading;
      return (
        this.variables &&
          this.networkStatus !== te.loading &&
          !le(this.variables, t.variables) &&
          (n = te.setVariables),
        le(t.variables, this.variables) || (this.lastDiff = void 0),
        Object.assign(this, {
          document: t.document,
          variables: t.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus: n,
        }),
        t.observableQuery && this.setObservableQuery(t.observableQuery),
        t.lastRequestId && (this.lastRequestId = t.lastRequestId),
        this
      );
    }),
    (e.prototype.reset = function () {
      T0(this), (this.dirty = !1);
    }),
    (e.prototype.resetDiff = function () {
      this.lastDiff = void 0;
    }),
    (e.prototype.getDiff = function () {
      var t = this.getDiffOptions();
      if (this.lastDiff && le(t, this.lastDiff.options)) return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var n = this.observableQuery;
      if (n && n.options.fetchPolicy === "no-cache") return { complete: !1 };
      var r = this.cache.diff(t);
      return this.updateLastDiff(r, t), r;
    }),
    (e.prototype.updateLastDiff = function (t, n) {
      this.lastDiff = t ? { diff: t, options: n || this.getDiffOptions() } : void 0;
    }),
    (e.prototype.getDiffOptions = function (t) {
      var n;
      return (
        t === void 0 && (t = this.variables),
        {
          query: this.document,
          variables: t,
          returnPartialData: !0,
          optimistic: !0,
          canonizeResults: (n = this.observableQuery) === null || n === void 0 ? void 0 : n.options.canonizeResults,
        }
      );
    }),
    (e.prototype.setDiff = function (t) {
      var n = this,
        r,
        i = this.lastDiff && this.lastDiff.diff;
      (t && !t.complete && !((r = this.observableQuery) === null || r === void 0) && r.getLastError()) ||
        (this.updateLastDiff(t),
        !this.dirty &&
          !le(i && i.result, t && t.result) &&
          ((this.dirty = !0),
          this.notifyTimeout ||
            (this.notifyTimeout = setTimeout(function () {
              return n.notify();
            }, 0))));
    }),
    (e.prototype.setObservableQuery = function (t) {
      var n = this;
      t !== this.observableQuery &&
        (this.oqListener && this.listeners.delete(this.oqListener),
        (this.observableQuery = t),
        t
          ? ((t.queryInfo = this),
            this.listeners.add(
              (this.oqListener = function () {
                var r = n.getDiff();
                r.fromOptimisticTransaction ? t.observe() : zE(t);
              })
            ))
          : delete this.oqListener);
    }),
    (e.prototype.notify = function () {
      var t = this;
      T0(this),
        this.shouldNotify() &&
          this.listeners.forEach(function (n) {
            return n(t);
          }),
        (this.dirty = !1);
    }),
    (e.prototype.shouldNotify = function () {
      if (!this.dirty || !this.listeners.size) return !1;
      if ($i(this.networkStatus) && this.observableQuery) {
        var t = this.observableQuery.options.fetchPolicy;
        if (t !== "cache-only" && t !== "cache-and-network") return !1;
      }
      return !0;
    }),
    (e.prototype.stop = function () {
      if (!this.stopped) {
        (this.stopped = !0), this.reset(), this.cancel(), (this.cancel = e.prototype.cancel);
        var t = this.observableQuery;
        t && t.stopPolling();
      }
    }),
    (e.prototype.cancel = function () {}),
    (e.prototype.updateWatch = function (t) {
      var n = this;
      t === void 0 && (t = this.variables);
      var r = this.observableQuery;
      if (!(r && r.options.fetchPolicy === "no-cache")) {
        var i = P(P({}, this.getDiffOptions(t)), {
          watcher: this,
          callback: function (o) {
            return n.setDiff(o);
          },
        });
        (!this.lastWatch || !le(i, this.lastWatch)) &&
          (this.cancel(), (this.cancel = this.cache.watch((this.lastWatch = i))));
      }
    }),
    (e.prototype.resetLastWrite = function () {
      this.lastWrite = void 0;
    }),
    (e.prototype.shouldWrite = function (t, n) {
      var r = this.lastWrite;
      return !(r && r.dmCount === Pi.get(this.cache) && le(n, r.variables) && le(t.data, r.result.data));
    }),
    (e.prototype.markResult = function (t, n, r, i) {
      var o = this,
        s = new lr(),
        a = Xt(t.errors) ? t.errors.slice(0) : [];
      if ((this.reset(), "incremental" in t && Xt(t.incremental))) {
        var l = vE(this.getDiff().result, t);
        t.data = l;
      } else if ("hasNext" in t && t.hasNext) {
        var u = this.getDiff();
        t.data = s.merge(u.result, t.data);
      }
      (this.graphQLErrors = a),
        r.fetchPolicy === "no-cache"
          ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(r.variables))
          : i !== 0 &&
            (Sh(t, r.errorPolicy)
              ? this.cache.performTransaction(function (c) {
                  if (o.shouldWrite(t, r.variables))
                    c.writeQuery({ query: n, data: t.data, variables: r.variables, overwrite: i === 1 }),
                      (o.lastWrite = { result: t, variables: r.variables, dmCount: Pi.get(o.cache) });
                  else if (o.lastDiff && o.lastDiff.diff.complete) {
                    t.data = o.lastDiff.diff.result;
                    return;
                  }
                  var f = o.getDiffOptions(r.variables),
                    d = c.diff(f);
                  !o.stopped && le(o.variables, r.variables) && o.updateWatch(r.variables),
                    o.updateLastDiff(d, f),
                    d.complete && (t.data = d.result);
                })
              : (this.lastWrite = void 0));
    }),
    (e.prototype.markReady = function () {
      return (this.networkError = null), (this.networkStatus = te.ready);
    }),
    (e.prototype.markError = function (t) {
      return (
        (this.networkStatus = te.error),
        (this.lastWrite = void 0),
        this.reset(),
        t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors),
        t.networkError && (this.networkError = t.networkError),
        t
      );
    }),
    e
  );
})();
function Sh(e, t) {
  t === void 0 && (t = "none");
  var n = t === "ignore" || t === "all",
    r = !xl(e);
  return !r && n && e.data && (r = !0), r;
}
var TN = Object.prototype.hasOwnProperty,
  P0 = Object.create(null),
  PN = (function () {
    function e(t) {
      var n = this;
      (this.clientAwareness = {}),
        (this.queries = new Map()),
        (this.fetchCancelFns = new Map()),
        (this.transformCache = new B_(bn["queryManager.getDocumentInfo"] || 2e3)),
        (this.queryIdCounter = 1),
        (this.requestIdCounter = 1),
        (this.mutationIdCounter = 1),
        (this.inFlightLinkObservables = new Pn(!1)),
        (this.noCacheWarningsByQueryId = new Set());
      var r = new aE(
        function (o) {
          return n.cache.transformDocument(o);
        },
        { cache: !1 }
      );
      (this.cache = t.cache),
        (this.link = t.link),
        (this.defaultOptions = t.defaultOptions),
        (this.queryDeduplication = t.queryDeduplication),
        (this.clientAwareness = t.clientAwareness),
        (this.localState = t.localState),
        (this.ssrMode = t.ssrMode),
        (this.assumeImmutableResults = t.assumeImmutableResults),
        (this.dataMasking = t.dataMasking);
      var i = t.documentTransform;
      (this.documentTransform = i ? r.concat(i).concat(r) : r),
        (this.defaultContext = t.defaultContext || Object.create(null)),
        (this.onBroadcast = t.onBroadcast) && (this.mutationStore = Object.create(null));
    }
    return (
      (e.prototype.stop = function () {
        var t = this;
        this.queries.forEach(function (n, r) {
          t.stopQueryNoBroadcast(r);
        }),
          this.cancelPendingFetches(tt(27));
      }),
      (e.prototype.cancelPendingFetches = function (t) {
        this.fetchCancelFns.forEach(function (n) {
          return n(t);
        }),
          this.fetchCancelFns.clear();
      }),
      (e.prototype.mutate = function (t) {
        return Nn(this, arguments, void 0, function (n) {
          var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c = n.mutation,
            f = n.variables,
            d = n.optimisticResponse,
            h = n.updateQueries,
            v = n.refetchQueries,
            y = v === void 0 ? [] : v,
            w = n.awaitRefetchQueries,
            p = w === void 0 ? !1 : w,
            m = n.update,
            g = n.onQueryUpdated,
            b = n.fetchPolicy,
            S =
              b === void 0
                ? ((l = this.defaultOptions.mutate) === null || l === void 0 ? void 0 : l.fetchPolicy) || "network-only"
                : b,
            _ = n.errorPolicy,
            T =
              _ === void 0
                ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.errorPolicy) || "none"
                : _,
            E = n.keepRootFields,
            C = n.context;
          return jn(this, function (k) {
            switch (k.label) {
              case 0:
                return (
                  $(c, 28),
                  $(S === "network-only" || S === "no-cache", 29),
                  (r = this.generateMutationId()),
                  (c = this.cache.transformForLink(this.transform(c))),
                  (i = this.getDocumentInfo(c).hasClientExports),
                  (f = this.getVariables(c, f)),
                  i ? [4, this.localState.addExportedVariables(c, f, C)] : [3, 2]
                );
              case 1:
                (f = k.sent()), (k.label = 2);
              case 2:
                return (
                  (o =
                    this.mutationStore &&
                    (this.mutationStore[r] = { mutation: c, variables: f, loading: !0, error: null })),
                  (s =
                    d &&
                    this.markMutationOptimistic(d, {
                      mutationId: r,
                      document: c,
                      variables: f,
                      fetchPolicy: S,
                      errorPolicy: T,
                      context: C,
                      updateQueries: h,
                      update: m,
                      keepRootFields: E,
                    })),
                  this.broadcastQueries(),
                  (a = this),
                  [
                    2,
                    new Promise(function (D, R) {
                      return Sf(
                        a.getObservableFromLink(c, P(P({}, C), { optimisticResponse: s ? d : void 0 }), f, {}, !1),
                        function (F) {
                          if (xl(F) && T === "none") throw new _r({ graphQLErrors: fh(F) });
                          o && ((o.loading = !1), (o.error = null));
                          var L = P({}, F);
                          return (
                            typeof y == "function" && (y = y(L)),
                            T === "ignore" && xl(L) && delete L.errors,
                            a.markMutationResult({
                              mutationId: r,
                              result: L,
                              document: c,
                              variables: f,
                              fetchPolicy: S,
                              errorPolicy: T,
                              context: C,
                              update: m,
                              updateQueries: h,
                              awaitRefetchQueries: p,
                              refetchQueries: y,
                              removeOptimistic: s ? r : void 0,
                              onQueryUpdated: g,
                              keepRootFields: E,
                            })
                          );
                        }
                      ).subscribe({
                        next: function (F) {
                          a.broadcastQueries(),
                            (!("hasNext" in F) || F.hasNext === !1) &&
                              D(
                                P(P({}, F), {
                                  data: a.maskOperation({ document: c, data: F.data, fetchPolicy: S, id: r }),
                                })
                              );
                        },
                        error: function (F) {
                          o && ((o.loading = !1), (o.error = F)),
                            s && a.cache.removeOptimistic(r),
                            a.broadcastQueries(),
                            R(F instanceof _r ? F : new _r({ networkError: F }));
                        },
                      });
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype.markMutationResult = function (t, n) {
        var r = this;
        n === void 0 && (n = this.cache);
        var i = t.result,
          o = [],
          s = t.fetchPolicy === "no-cache";
        if (!s && Sh(i, t.errorPolicy)) {
          if (
            (ji(i) || o.push({ result: i.data, dataId: "ROOT_MUTATION", query: t.document, variables: t.variables }),
            ji(i) && Xt(i.incremental))
          ) {
            var a = n.diff({
                id: "ROOT_MUTATION",
                query: this.getDocumentInfo(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0,
              }),
              l = void 0;
            a.result && (l = vE(a.result, i)),
              typeof l < "u" &&
                ((i.data = l),
                o.push({ result: l, dataId: "ROOT_MUTATION", query: t.document, variables: t.variables }));
          }
          var u = t.updateQueries;
          u &&
            this.queries.forEach(function (f, d) {
              var h = f.observableQuery,
                v = h && h.queryName;
              if (!(!v || !TN.call(u, v))) {
                var y = u[v],
                  w = r.queries.get(d),
                  p = w.document,
                  m = w.variables,
                  g = n.diff({ query: p, variables: m, returnPartialData: !0, optimistic: !1 }),
                  b = g.result,
                  S = g.complete;
                if (S && b) {
                  var _ = y(b, { mutationResult: i, queryName: (p && rs(p)) || void 0, queryVariables: m });
                  _ && o.push({ result: _, dataId: "ROOT_QUERY", query: p, variables: m });
                }
              }
            });
        }
        if (o.length > 0 || (t.refetchQueries || "").length > 0 || t.update || t.onQueryUpdated || t.removeOptimistic) {
          var c = [];
          if (
            (this.refetchQueries({
              updateCache: function (f) {
                s ||
                  o.forEach(function (y) {
                    return f.write(y);
                  });
                var d = t.update,
                  h = !SF(i) || (ji(i) && !i.hasNext);
                if (d) {
                  if (!s) {
                    var v = f.diff({
                      id: "ROOT_MUTATION",
                      query: r.getDocumentInfo(t.document).asQuery,
                      variables: t.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    });
                    v.complete &&
                      ((i = P(P({}, i), { data: v.result })),
                      "incremental" in i && delete i.incremental,
                      "hasNext" in i && delete i.hasNext);
                  }
                  h && d(f, i, { context: t.context, variables: t.variables });
                }
                !s &&
                  !t.keepRootFields &&
                  h &&
                  f.modify({
                    id: "ROOT_MUTATION",
                    fields: function (y, w) {
                      var p = w.fieldName,
                        m = w.DELETE;
                      return p === "__typename" ? y : m;
                    },
                  });
              },
              include: t.refetchQueries,
              optimistic: !1,
              removeOptimistic: t.removeOptimistic,
              onQueryUpdated: t.onQueryUpdated || null,
            }).forEach(function (f) {
              return c.push(f);
            }),
            t.awaitRefetchQueries || t.onQueryUpdated)
          )
            return Promise.all(c).then(function () {
              return i;
            });
        }
        return Promise.resolve(i);
      }),
      (e.prototype.markMutationOptimistic = function (t, n) {
        var r = this,
          i = typeof t == "function" ? t(n.variables, { IGNORE: P0 }) : t;
        return i === P0
          ? !1
          : (this.cache.recordOptimisticTransaction(function (o) {
              try {
                r.markMutationResult(P(P({}, n), { result: { data: i } }), o);
              } catch (s) {
                globalThis.__DEV__ !== !1 && $.error(s);
              }
            }, n.mutationId),
            !0);
      }),
      (e.prototype.fetchQuery = function (t, n, r) {
        return this.fetchConcastWithInfo(t, n, r).concast.promise;
      }),
      (e.prototype.getQueryStore = function () {
        var t = Object.create(null);
        return (
          this.queries.forEach(function (n, r) {
            t[r] = {
              variables: n.variables,
              networkStatus: n.networkStatus,
              networkError: n.networkError,
              graphQLErrors: n.graphQLErrors,
            };
          }),
          t
        );
      }),
      (e.prototype.resetErrors = function (t) {
        var n = this.queries.get(t);
        n && ((n.networkError = void 0), (n.graphQLErrors = []));
      }),
      (e.prototype.transform = function (t) {
        return this.documentTransform.transformDocument(t);
      }),
      (e.prototype.getDocumentInfo = function (t) {
        var n = this.transformCache;
        if (!n.has(t)) {
          var r = {
            hasClientExports: tL(t),
            hasForcedResolvers: this.localState.shouldForceResolvers(t),
            hasNonreactiveDirective: Ks(["nonreactive"], t),
            nonReactiveQuery: iF(t),
            clientQuery: this.localState.clientQuery(t),
            serverQuery: uE(
              [{ name: "client", remove: !0 }, { name: "connection" }, { name: "nonreactive" }, { name: "unmask" }],
              t
            ),
            defaultVars: mm(Wr(t)),
            asQuery: P(P({}, t), {
              definitions: t.definitions.map(function (i) {
                return i.kind === "OperationDefinition" && i.operation !== "query"
                  ? P(P({}, i), { operation: "query" })
                  : i;
              }),
            }),
          };
          n.set(t, r);
        }
        return n.get(t);
      }),
      (e.prototype.getVariables = function (t, n) {
        return P(P({}, this.getDocumentInfo(t).defaultVars), n);
      }),
      (e.prototype.watchQuery = function (t) {
        var n = this.transform(t.query);
        (t = P(P({}, t), { variables: this.getVariables(n, t.variables) })),
          typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
        var r = new kf(this),
          i = new wh({ queryManager: this, queryInfo: r, options: t });
        return (
          (i.lastQuery = n),
          this.queries.set(i.queryId, r),
          r.init({ document: n, observableQuery: i, variables: i.variables }),
          i
        );
      }),
      (e.prototype.query = function (t, n) {
        var r = this;
        n === void 0 && (n = this.generateQueryId()),
          $(t.query, 30),
          $(t.query.kind === "Document", 31),
          $(!t.returnPartialData, 32),
          $(!t.pollInterval, 33);
        var i = this.transform(t.query);
        return this.fetchQuery(n, P(P({}, t), { query: i }))
          .then(function (o) {
            return (
              o &&
              P(P({}, o), { data: r.maskOperation({ document: i, data: o.data, fetchPolicy: t.fetchPolicy, id: n }) })
            );
          })
          .finally(function () {
            return r.stopQuery(n);
          });
      }),
      (e.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
      }),
      (e.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
      }),
      (e.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
      }),
      (e.prototype.stopQueryInStore = function (t) {
        this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
      }),
      (e.prototype.stopQueryInStoreNoBroadcast = function (t) {
        var n = this.queries.get(t);
        n && n.stop();
      }),
      (e.prototype.clearStore = function (t) {
        return (
          t === void 0 && (t = { discardWatches: !0 }),
          this.cancelPendingFetches(tt(34)),
          this.queries.forEach(function (n) {
            n.observableQuery ? (n.networkStatus = te.loading) : n.stop();
          }),
          this.mutationStore && (this.mutationStore = Object.create(null)),
          this.cache.reset(t)
        );
      }),
      (e.prototype.getObservableQueries = function (t) {
        var n = this;
        t === void 0 && (t = "active");
        var r = new Map(),
          i = new Map(),
          o = new Map(),
          s = new Set();
        return (
          Array.isArray(t) &&
            t.forEach(function (a) {
              if (typeof a == "string") i.set(a, a), o.set(a, !1);
              else if (RL(a)) {
                var l = Mr(n.transform(a));
                i.set(l, rs(a)), o.set(l, !1);
              } else Te(a) && a.query && s.add(a);
            }),
          this.queries.forEach(function (a, l) {
            var u = a.observableQuery,
              c = a.document;
            if (u) {
              if (t === "all") {
                r.set(l, u);
                return;
              }
              var f = u.queryName,
                d = u.options.fetchPolicy;
              if (d === "standby" || (t === "active" && !u.hasObservers())) return;
              (t === "active" || (f && o.has(f)) || (c && o.has(Mr(c)))) &&
                (r.set(l, u), f && o.set(f, !0), c && o.set(Mr(c), !0));
            }
          }),
          s.size &&
            s.forEach(function (a) {
              var l = th("legacyOneTimeQuery"),
                u = n.getQuery(l).init({ document: a.query, variables: a.variables }),
                c = new wh({ queryManager: n, queryInfo: u, options: P(P({}, a), { fetchPolicy: "network-only" }) });
              $(c.queryId === l), u.setObservableQuery(c), r.set(l, c);
            }),
          globalThis.__DEV__ !== !1 &&
            o.size &&
            o.forEach(function (a, l) {
              if (!a) {
                var u = i.get(l);
                u ? globalThis.__DEV__ !== !1 && $.warn(35, u) : globalThis.__DEV__ !== !1 && $.warn(36);
              }
            }),
          r
        );
      }),
      (e.prototype.reFetchObservableQueries = function (t) {
        var n = this;
        t === void 0 && (t = !1);
        var r = [];
        return (
          this.getObservableQueries(t ? "all" : "active").forEach(function (i, o) {
            var s = i.options.fetchPolicy;
            i.resetLastResults(),
              (t || (s !== "standby" && s !== "cache-only")) && r.push(i.refetch()),
              n.getQuery(o).setDiff(null);
          }),
          this.broadcastQueries(),
          Promise.all(r)
        );
      }),
      (e.prototype.setObservableQuery = function (t) {
        this.getQuery(t.queryId).setObservableQuery(t);
      }),
      (e.prototype.startGraphQLSubscription = function (t) {
        var n = this,
          r = t.query,
          i = t.variables,
          o = t.fetchPolicy,
          s = t.errorPolicy,
          a = s === void 0 ? "none" : s,
          l = t.context,
          u = l === void 0 ? {} : l,
          c = t.extensions,
          f = c === void 0 ? {} : c;
        (r = this.transform(r)), (i = this.getVariables(r, i));
        var d = function (v) {
          return n.getObservableFromLink(r, u, v, f).map(function (y) {
            o !== "no-cache" &&
              (Sh(y, a) && n.cache.write({ query: r, result: y.data, dataId: "ROOT_SUBSCRIPTION", variables: v }),
              n.broadcastQueries());
            var w = xl(y),
              p = FF(y);
            if (w || p) {
              var m = {};
              if ((w && (m.graphQLErrors = y.errors), p && (m.protocolErrors = y.extensions[Em]), a === "none" || p))
                throw new _r(m);
            }
            return a === "ignore" && delete y.errors, y;
          });
        };
        if (this.getDocumentInfo(r).hasClientExports) {
          var h = this.localState.addExportedVariables(r, i, u).then(d);
          return new ae(function (v) {
            var y = null;
            return (
              h.then(function (w) {
                return (y = w.subscribe(v));
              }, v.error),
              function () {
                return y && y.unsubscribe();
              }
            );
          });
        }
        return d(i);
      }),
      (e.prototype.stopQuery = function (t) {
        this.stopQueryNoBroadcast(t), this.broadcastQueries();
      }),
      (e.prototype.stopQueryNoBroadcast = function (t) {
        this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
      }),
      (e.prototype.removeQuery = function (t) {
        this.fetchCancelFns.delete(t), this.queries.has(t) && (this.getQuery(t).stop(), this.queries.delete(t));
      }),
      (e.prototype.broadcastQueries = function () {
        this.onBroadcast && this.onBroadcast(),
          this.queries.forEach(function (t) {
            return t.notify();
          });
      }),
      (e.prototype.getLocalState = function () {
        return this.localState;
      }),
      (e.prototype.getObservableFromLink = function (t, n, r, i, o) {
        var s = this,
          a;
        o === void 0 &&
          (o = (a = n == null ? void 0 : n.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
        var l,
          u = this.getDocumentInfo(t),
          c = u.serverQuery,
          f = u.clientQuery;
        if (c) {
          var d = this,
            h = d.inFlightLinkObservables,
            v = d.link,
            y = {
              query: c,
              variables: r,
              operationName: rs(c) || void 0,
              context: this.prepareContext(P(P({}, n), { forceFetch: !o })),
              extensions: i,
            };
          if (((n = y.context), o)) {
            var w = Mr(c),
              p = er(r),
              m = h.lookup(w, p);
            if (((l = m.observable), !l)) {
              var g = new ii([dh(v, y)]);
              (l = m.observable = g),
                g.beforeNext(function b(S, _) {
                  S === "next" && "hasNext" in _ && _.hasNext ? g.beforeNext(b) : h.remove(w, p);
                });
            }
          } else l = new ii([dh(v, y)]);
        } else (l = new ii([ae.of({ data: {} })])), (n = this.prepareContext(n));
        return (
          f &&
            (l = Sf(l, function (b) {
              return s.localState.runResolvers({ document: f, remoteResult: b, context: n, variables: r });
            })),
          l
        );
      }),
      (e.prototype.getResultsFromLink = function (t, n, r) {
        var i = (t.lastRequestId = this.generateRequestId()),
          o = this.cache.transformForLink(r.query);
        return Sf(
          this.getObservableFromLink(o, r.context, r.variables),
          function (s) {
            var a = fh(s),
              l = a.length > 0,
              u = r.errorPolicy;
            if (i >= t.lastRequestId) {
              if (l && u === "none") throw t.markError(new _r({ graphQLErrors: a }));
              t.markResult(s, o, r, n), t.markReady();
            }
            var c = { data: s.data, loading: !1, networkStatus: te.ready };
            return (
              l && u === "none" && (c.data = void 0),
              l && u !== "ignore" && ((c.errors = a), (c.networkStatus = te.error)),
              c
            );
          },
          function (s) {
            var a = gE(s) ? s : new _r({ networkError: s });
            throw (i >= t.lastRequestId && t.markError(a), a);
          }
        );
      }),
      (e.prototype.fetchConcastWithInfo = function (t, n, r, i) {
        var o = this;
        r === void 0 && (r = te.loading), i === void 0 && (i = n.query);
        var s = this.getVariables(i, n.variables),
          a = this.getQuery(t),
          l = this.defaultOptions.watchQuery,
          u = n.fetchPolicy,
          c = u === void 0 ? (l && l.fetchPolicy) || "cache-first" : u,
          f = n.errorPolicy,
          d = f === void 0 ? (l && l.errorPolicy) || "none" : f,
          h = n.returnPartialData,
          v = h === void 0 ? !1 : h,
          y = n.notifyOnNetworkStatusChange,
          w = y === void 0 ? !1 : y,
          p = n.context,
          m = p === void 0 ? {} : p,
          g = Object.assign({}, n, {
            query: i,
            variables: s,
            fetchPolicy: c,
            errorPolicy: d,
            returnPartialData: v,
            notifyOnNetworkStatusChange: w,
            context: m,
          }),
          b = function (C) {
            g.variables = C;
            var k = o.fetchQueryByPolicy(a, g, r);
            return (
              g.fetchPolicy !== "standby" &&
                k.sources.length > 0 &&
                a.observableQuery &&
                a.observableQuery.applyNextFetchPolicy("after-fetch", n),
              k
            );
          },
          S = function () {
            return o.fetchCancelFns.delete(t);
          };
        this.fetchCancelFns.set(t, function (C) {
          S(),
            setTimeout(function () {
              return _.cancel(C);
            });
        });
        var _, T;
        if (this.getDocumentInfo(g.query).hasClientExports)
          (_ = new ii(
            this.localState
              .addExportedVariables(g.query, g.variables, g.context)
              .then(b)
              .then(function (C) {
                return C.sources;
              })
          )),
            (T = !0);
        else {
          var E = b(g.variables);
          (T = E.fromLink), (_ = new ii(E.sources));
        }
        return _.promise.then(S, S), { concast: _, fromLink: T };
      }),
      (e.prototype.refetchQueries = function (t) {
        var n = this,
          r = t.updateCache,
          i = t.include,
          o = t.optimistic,
          s = o === void 0 ? !1 : o,
          a = t.removeOptimistic,
          l = a === void 0 ? (s ? th("refetchQueries") : void 0) : a,
          u = t.onQueryUpdated,
          c = new Map();
        i &&
          this.getObservableQueries(i).forEach(function (d, h) {
            c.set(h, { oq: d, lastDiff: n.getQuery(h).getDiff() });
          });
        var f = new Map();
        return (
          r &&
            this.cache.batch({
              update: r,
              optimistic: (s && l) || !1,
              removeOptimistic: l,
              onWatchUpdated: function (d, h, v) {
                var y = d.watcher instanceof kf && d.watcher.observableQuery;
                if (y) {
                  if (u) {
                    c.delete(y.queryId);
                    var w = u(y, h, v);
                    return w === !0 && (w = y.refetch()), w !== !1 && f.set(y, w), w;
                  }
                  u !== null && c.set(y.queryId, { oq: y, lastDiff: v, diff: h });
                }
              },
            }),
          c.size &&
            c.forEach(function (d, h) {
              var v = d.oq,
                y = d.lastDiff,
                w = d.diff,
                p;
              if (u) {
                if (!w) {
                  var m = v.queryInfo;
                  m.reset(), (w = m.getDiff());
                }
                p = u(v, w, y);
              }
              (!u || p === !0) && (p = v.refetch()),
                p !== !1 && f.set(v, p),
                h.indexOf("legacyOneTimeQuery") >= 0 && n.stopQueryNoBroadcast(h);
            }),
          l && this.cache.removeOptimistic(l),
          f
        );
      }),
      (e.prototype.maskOperation = function (t) {
        var n,
          r,
          i,
          o = t.document,
          s = t.data;
        if (globalThis.__DEV__ !== !1) {
          var a = t.fetchPolicy,
            l = t.id,
            u = (n = Wr(o)) === null || n === void 0 ? void 0 : n.operation,
            c = ((r = u == null ? void 0 : u[0]) !== null && r !== void 0 ? r : "o") + l;
          this.dataMasking &&
            a === "no-cache" &&
            !dL(o) &&
            !this.noCacheWarningsByQueryId.has(c) &&
            (this.noCacheWarningsByQueryId.add(c),
            globalThis.__DEV__ !== !1 &&
              $.warn(37, (i = rs(o)) !== null && i !== void 0 ? i : "Unnamed ".concat(u ?? "operation")));
        }
        return this.dataMasking ? sN(s, o, this.cache) : s;
      }),
      (e.prototype.maskFragment = function (t) {
        var n = t.data,
          r = t.fragment,
          i = t.fragmentName;
        return this.dataMasking ? PE(n, r, this.cache, i) : n;
      }),
      (e.prototype.fetchQueryByPolicy = function (t, n, r) {
        var i = this,
          o = n.query,
          s = n.variables,
          a = n.fetchPolicy,
          l = n.refetchWritePolicy,
          u = n.errorPolicy,
          c = n.returnPartialData,
          f = n.context,
          d = n.notifyOnNetworkStatusChange,
          h = t.networkStatus;
        t.init({ document: o, variables: s, networkStatus: r });
        var v = function () {
            return t.getDiff();
          },
          y = function (b, S) {
            S === void 0 && (S = t.networkStatus || te.loading);
            var _ = b.result;
            globalThis.__DEV__ !== !1 && !c && !le(_, {}) && BE(b.missing);
            var T = function (E) {
              return ae.of(P({ data: E, loading: $i(S), networkStatus: S }, b.complete ? null : { partial: !0 }));
            };
            return _ && i.getDocumentInfo(o).hasForcedResolvers
              ? i.localState
                  .runResolvers({
                    document: o,
                    remoteResult: { data: _ },
                    context: f,
                    variables: s,
                    onlyRunForcedResolvers: !0,
                  })
                  .then(function (E) {
                    return T(E.data || void 0);
                  })
              : u === "none" && S === te.refetch && Array.isArray(b.missing)
                ? T(void 0)
                : T(_);
          },
          w = a === "no-cache" ? 0 : r === te.refetch && l !== "merge" ? 1 : 2,
          p = function () {
            return i.getResultsFromLink(t, w, { query: o, variables: s, context: f, fetchPolicy: a, errorPolicy: u });
          },
          m = d && typeof h == "number" && h !== r && $i(r);
        switch (a) {
          default:
          case "cache-first": {
            var g = v();
            return g.complete
              ? { fromLink: !1, sources: [y(g, t.markReady())] }
              : c || m
                ? { fromLink: !0, sources: [y(g), p()] }
                : { fromLink: !0, sources: [p()] };
          }
          case "cache-and-network": {
            var g = v();
            return g.complete || c || m ? { fromLink: !0, sources: [y(g), p()] } : { fromLink: !0, sources: [p()] };
          }
          case "cache-only":
            return { fromLink: !1, sources: [y(v(), t.markReady())] };
          case "network-only":
            return m ? { fromLink: !0, sources: [y(v()), p()] } : { fromLink: !0, sources: [p()] };
          case "no-cache":
            return m ? { fromLink: !0, sources: [y(t.getDiff()), p()] } : { fromLink: !0, sources: [p()] };
          case "standby":
            return { fromLink: !1, sources: [] };
        }
      }),
      (e.prototype.getQuery = function (t) {
        return t && !this.queries.has(t) && this.queries.set(t, new kf(this, t)), this.queries.get(t);
      }),
      (e.prototype.prepareContext = function (t) {
        t === void 0 && (t = {});
        var n = this.localState.prepareContext(t);
        return P(P(P({}, this.defaultContext), n), { clientAwareness: this.clientAwareness });
      }),
      e
    );
  })(),
  CN = (function () {
    function e(t) {
      var n = t.cache,
        r = t.client,
        i = t.resolvers,
        o = t.fragmentMatcher;
      (this.selectionsToResolveCache = new WeakMap()),
        (this.cache = n),
        r && (this.client = r),
        i && this.addResolvers(i),
        o && this.setFragmentMatcher(o);
    }
    return (
      (e.prototype.addResolvers = function (t) {
        var n = this;
        (this.resolvers = this.resolvers || {}),
          Array.isArray(t)
            ? t.forEach(function (r) {
                n.resolvers = qg(n.resolvers, r);
              })
            : (this.resolvers = qg(this.resolvers, t));
      }),
      (e.prototype.setResolvers = function (t) {
        (this.resolvers = {}), this.addResolvers(t);
      }),
      (e.prototype.getResolvers = function () {
        return this.resolvers || {};
      }),
      (e.prototype.runResolvers = function (t) {
        return Nn(this, arguments, void 0, function (n) {
          var r = n.document,
            i = n.remoteResult,
            o = n.context,
            s = n.variables,
            a = n.onlyRunForcedResolvers,
            l = a === void 0 ? !1 : a;
          return jn(this, function (u) {
            return r
              ? [
                  2,
                  this.resolveDocument(r, i.data, o, s, this.fragmentMatcher, l).then(function (c) {
                    return P(P({}, i), { data: c.result });
                  }),
                ]
              : [2, i];
          });
        });
      }),
      (e.prototype.setFragmentMatcher = function (t) {
        this.fragmentMatcher = t;
      }),
      (e.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
      }),
      (e.prototype.clientQuery = function (t) {
        return Ks(["client"], t) && this.resolvers ? t : null;
      }),
      (e.prototype.serverQuery = function (t) {
        return cE(t);
      }),
      (e.prototype.prepareContext = function (t) {
        var n = this.cache;
        return P(P({}, t), {
          cache: n,
          getCacheKey: function (r) {
            return n.identify(r);
          },
        });
      }),
      (e.prototype.addExportedVariables = function (t) {
        return Nn(this, arguments, void 0, function (n, r, i) {
          return (
            r === void 0 && (r = {}),
            i === void 0 && (i = {}),
            jn(this, function (o) {
              return n
                ? [
                    2,
                    this.resolveDocument(n, this.buildRootValueFromCache(n, r) || {}, this.prepareContext(i), r).then(
                      function (s) {
                        return P(P({}, r), s.exportedVariables);
                      }
                    ),
                  ]
                : [2, P({}, r)];
            })
          );
        });
      }),
      (e.prototype.shouldForceResolvers = function (t) {
        var n = !1;
        return (
          Ut(t, {
            Directive: {
              enter: function (r) {
                if (
                  r.name.value === "client" &&
                  r.arguments &&
                  ((n = r.arguments.some(function (i) {
                    return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
                  })),
                  n)
                )
                  return nc;
              },
            },
          }),
          n
        );
      }),
      (e.prototype.buildRootValueFromCache = function (t, n) {
        return this.cache.diff({ query: rF(t), variables: n, returnPartialData: !0, optimistic: !1 }).result;
      }),
      (e.prototype.resolveDocument = function (t, n) {
        return Nn(this, arguments, void 0, function (r, i, o, s, a, l) {
          var u, c, f, d, h, v, y, w, p, m, g;
          return (
            o === void 0 && (o = {}),
            s === void 0 && (s = {}),
            a === void 0 &&
              (a = function () {
                return !0;
              }),
            l === void 0 && (l = !1),
            jn(this, function (b) {
              return (
                (u = ha(r)),
                (c = ho(r)),
                (f = co(c)),
                (d = this.collectSelectionsToResolve(u, f)),
                (h = u.operation),
                (v = h ? h.charAt(0).toUpperCase() + h.slice(1) : "Query"),
                (y = this),
                (w = y.cache),
                (p = y.client),
                (m = {
                  fragmentMap: f,
                  context: P(P({}, o), { cache: w, client: p }),
                  variables: s,
                  fragmentMatcher: a,
                  defaultOperationType: v,
                  exportedVariables: {},
                  selectionsToResolve: d,
                  onlyRunForcedResolvers: l,
                }),
                (g = !1),
                [
                  2,
                  this.resolveSelectionSet(u.selectionSet, g, i, m).then(function (S) {
                    return { result: S, exportedVariables: m.exportedVariables };
                  }),
                ]
              );
            })
          );
        });
      }),
      (e.prototype.resolveSelectionSet = function (t, n, r, i) {
        return Nn(this, void 0, void 0, function () {
          var o,
            s,
            a,
            l,
            u,
            c = this;
          return jn(this, function (f) {
            return (
              (o = i.fragmentMap),
              (s = i.context),
              (a = i.variables),
              (l = [r]),
              (u = function (d) {
                return Nn(c, void 0, void 0, function () {
                  var h, v;
                  return jn(this, function (y) {
                    return !n && !i.selectionsToResolve.has(d)
                      ? [2]
                      : da(d, a)
                        ? sr(d)
                          ? [
                              2,
                              this.resolveField(d, n, r, i).then(function (w) {
                                var p;
                                typeof w < "u" && l.push(((p = {}), (p[xn(d)] = w), p));
                              }),
                            ]
                          : (BL(d) ? (h = d) : ((h = o[d.name.value]), $(h, 19, d.name.value)),
                            h && h.typeCondition && ((v = h.typeCondition.name.value), i.fragmentMatcher(r, v, s))
                              ? [
                                  2,
                                  this.resolveSelectionSet(h.selectionSet, n, r, i).then(function (w) {
                                    l.push(w);
                                  }),
                                ]
                              : [2])
                        : [2];
                  });
                });
              }),
              [
                2,
                Promise.all(t.selections.map(u)).then(function () {
                  return uc(l);
                }),
              ]
            );
          });
        });
      }),
      (e.prototype.resolveField = function (t, n, r, i) {
        return Nn(this, void 0, void 0, function () {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            v = this;
          return jn(this, function (y) {
            return r
              ? ((o = i.variables),
                (s = t.name.value),
                (a = xn(t)),
                (l = s !== a),
                (u = r[a] || r[s]),
                (c = Promise.resolve(u)),
                (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) &&
                  ((f = r.__typename || i.defaultOperationType),
                  (d = this.resolvers && this.resolvers[f]),
                  d &&
                    ((h = d[l ? s : a]),
                    h &&
                      (c = Promise.resolve(
                        Pm.withValue(this.cache, h, [r, oc(t, o), i.context, { field: t, fragmentMap: i.fragmentMap }])
                      )))),
                [
                  2,
                  c.then(function (w) {
                    var p, m;
                    if (
                      (w === void 0 && (w = u),
                      t.directives &&
                        t.directives.forEach(function (b) {
                          b.name.value === "export" &&
                            b.arguments &&
                            b.arguments.forEach(function (S) {
                              S.name.value === "as" &&
                                S.value.kind === "StringValue" &&
                                (i.exportedVariables[S.value.value] = w);
                            });
                        }),
                      !t.selectionSet || w == null)
                    )
                      return w;
                    var g =
                      (m =
                        (p = t.directives) === null || p === void 0
                          ? void 0
                          : p.some(function (b) {
                              return b.name.value === "client";
                            })) !== null && m !== void 0
                        ? m
                        : !1;
                    if (Array.isArray(w)) return v.resolveSubSelectedArray(t, n || g, w, i);
                    if (t.selectionSet) return v.resolveSelectionSet(t.selectionSet, n || g, w, i);
                  }),
                ])
              : [2, null];
          });
        });
      }),
      (e.prototype.resolveSubSelectedArray = function (t, n, r, i) {
        var o = this;
        return Promise.all(
          r.map(function (s) {
            if (s === null) return null;
            if (Array.isArray(s)) return o.resolveSubSelectedArray(t, n, s, i);
            if (t.selectionSet) return o.resolveSelectionSet(t.selectionSet, n, s, i);
          })
        );
      }),
      (e.prototype.collectSelectionsToResolve = function (t, n) {
        var r = function (s) {
            return !Array.isArray(s);
          },
          i = this.selectionsToResolveCache;
        function o(s) {
          if (!i.has(s)) {
            var a = new Set();
            i.set(s, a),
              Ut(s, {
                Directive: function (l, u, c, f, d) {
                  l.name.value === "client" &&
                    d.forEach(function (h) {
                      r(h) && Ng(h) && a.add(h);
                    });
                },
                FragmentSpread: function (l, u, c, f, d) {
                  var h = n[l.name.value];
                  $(h, 20, l.name.value);
                  var v = o(h);
                  v.size > 0 &&
                    (d.forEach(function (y) {
                      r(y) && Ng(y) && a.add(y);
                    }),
                    a.add(l),
                    v.forEach(function (y) {
                      a.add(y);
                    }));
                },
              });
          }
          return i.get(s);
        }
        return o(t);
      }),
      e
    );
  })(),
  C0 = !1,
  UE = (function () {
    function e(t) {
      var n = this,
        r;
      if (((this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []), !t.cache)) throw tt(16);
      var i = t.uri,
        o = t.credentials,
        s = t.headers,
        a = t.cache,
        l = t.documentTransform,
        u = t.ssrMode,
        c = u === void 0 ? !1 : u,
        f = t.ssrForceFetchDelay,
        d = f === void 0 ? 0 : f,
        h = t.connectToDevTools,
        v = t.queryDeduplication,
        y = v === void 0 ? !0 : v,
        w = t.defaultOptions,
        p = t.defaultContext,
        m = t.assumeImmutableResults,
        g = m === void 0 ? a.assumeImmutableResults : m,
        b = t.resolvers,
        S = t.typeDefs,
        _ = t.fragmentMatcher,
        T = t.name,
        E = t.version,
        C = t.devtools,
        k = t.dataMasking,
        D = t.link;
      D || (D = i ? new JF({ uri: i, credentials: o, headers: s }) : pa.empty()),
        (this.link = D),
        (this.cache = a),
        (this.disableNetworkFetches = c || d > 0),
        (this.queryDeduplication = y),
        (this.defaultOptions = w || Object.create(null)),
        (this.typeDefs = S),
        (this.devtoolsConfig = P(P({}, C), {
          enabled: (r = C == null ? void 0 : C.enabled) !== null && r !== void 0 ? r : h,
        })),
        this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1),
        d &&
          setTimeout(function () {
            return (n.disableNetworkFetches = !1);
          }, d),
        (this.watchQuery = this.watchQuery.bind(this)),
        (this.query = this.query.bind(this)),
        (this.mutate = this.mutate.bind(this)),
        (this.watchFragment = this.watchFragment.bind(this)),
        (this.resetStore = this.resetStore.bind(this)),
        (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this)),
        (this.version = cm),
        (this.localState = new CN({ cache: a, client: this, resolvers: b, fragmentMatcher: _ })),
        (this.queryManager = new PN({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          defaultContext: p,
          documentTransform: l,
          queryDeduplication: y,
          ssrMode: c,
          dataMasking: !!k,
          clientAwareness: { name: T, version: E },
          localState: this.localState,
          assumeImmutableResults: g,
          onBroadcast: this.devtoolsConfig.enabled
            ? function () {
                n.devToolsHookCb &&
                  n.devToolsHookCb({
                    action: {},
                    state: { queries: n.queryManager.getQueryStore(), mutations: n.queryManager.mutationStore || {} },
                    dataWithOptimisticResults: n.cache.extract(!0),
                  });
              }
            : void 0,
        })),
        this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return (
      (e.prototype.connectToDevTools = function () {
        if (!(typeof window > "u")) {
          var t = window,
            n = Symbol.for("apollo.devtools");
          (t[n] = t[n] || []).push(this),
            (t.__APOLLO_CLIENT__ = this),
            !C0 &&
              globalThis.__DEV__ !== !1 &&
              ((C0 = !0),
              window.document &&
                window.top === window.self &&
                /^(https?|file):$/.test(window.location.protocol) &&
                setTimeout(function () {
                  if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                    var r = window.navigator,
                      i = r && r.userAgent,
                      o = void 0;
                    typeof i == "string" &&
                      (i.indexOf("Chrome/") > -1
                        ? (o =
                            "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                        : i.indexOf("Firefox/") > -1 &&
                          (o = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                      o &&
                        globalThis.__DEV__ !== !1 &&
                        $.log("Download the Apollo DevTools for a better development experience: %s", o);
                  }
                }, 1e4));
        }
      }),
      Object.defineProperty(e.prototype, "documentTransform", {
        get: function () {
          return this.queryManager.documentTransform;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.stop = function () {
        this.queryManager.stop();
      }),
      (e.prototype.watchQuery = function (t) {
        return (
          this.defaultOptions.watchQuery && (t = bf(this.defaultOptions.watchQuery, t)),
          this.disableNetworkFetches &&
            (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") &&
            (t = P(P({}, t), { fetchPolicy: "cache-first" })),
          this.queryManager.watchQuery(t)
        );
      }),
      (e.prototype.query = function (t) {
        return (
          this.defaultOptions.query && (t = bf(this.defaultOptions.query, t)),
          $(t.fetchPolicy !== "cache-and-network", 17),
          this.disableNetworkFetches &&
            t.fetchPolicy === "network-only" &&
            (t = P(P({}, t), { fetchPolicy: "cache-first" })),
          this.queryManager.query(t)
        );
      }),
      (e.prototype.mutate = function (t) {
        return this.defaultOptions.mutate && (t = bf(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
      }),
      (e.prototype.subscribe = function (t) {
        var n = this,
          r = this.queryManager.generateQueryId();
        return this.queryManager.startGraphQLSubscription(t).map(function (i) {
          return P(P({}, i), {
            data: n.queryManager.maskOperation({ document: t.query, data: i.data, fetchPolicy: t.fetchPolicy, id: r }),
          });
        });
      }),
      (e.prototype.readQuery = function (t, n) {
        return n === void 0 && (n = !1), this.cache.readQuery(t, n);
      }),
      (e.prototype.watchFragment = function (t) {
        var n;
        return this.cache.watchFragment(
          P(P({}, t), ((n = {}), (n[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking), n))
        );
      }),
      (e.prototype.readFragment = function (t, n) {
        return n === void 0 && (n = !1), this.cache.readFragment(t, n);
      }),
      (e.prototype.writeQuery = function (t) {
        var n = this.cache.writeQuery(t);
        return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
      }),
      (e.prototype.writeFragment = function (t) {
        var n = this.cache.writeFragment(t);
        return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
      }),
      (e.prototype.__actionHookForDevTools = function (t) {
        this.devToolsHookCb = t;
      }),
      (e.prototype.__requestRaw = function (t) {
        return dh(this.link, t);
      }),
      (e.prototype.resetStore = function () {
        var t = this;
        return Promise.resolve()
          .then(function () {
            return t.queryManager.clearStore({ discardWatches: !1 });
          })
          .then(function () {
            return Promise.all(
              t.resetStoreCallbacks.map(function (n) {
                return n();
              })
            );
          })
          .then(function () {
            return t.reFetchObservableQueries();
          });
      }),
      (e.prototype.clearStore = function () {
        var t = this;
        return Promise.resolve()
          .then(function () {
            return t.queryManager.clearStore({ discardWatches: !0 });
          })
          .then(function () {
            return Promise.all(
              t.clearStoreCallbacks.map(function (n) {
                return n();
              })
            );
          });
      }),
      (e.prototype.onResetStore = function (t) {
        var n = this;
        return (
          this.resetStoreCallbacks.push(t),
          function () {
            n.resetStoreCallbacks = n.resetStoreCallbacks.filter(function (r) {
              return r !== t;
            });
          }
        );
      }),
      (e.prototype.onClearStore = function (t) {
        var n = this;
        return (
          this.clearStoreCallbacks.push(t),
          function () {
            n.clearStoreCallbacks = n.clearStoreCallbacks.filter(function (r) {
              return r !== t;
            });
          }
        );
      }),
      (e.prototype.reFetchObservableQueries = function (t) {
        return this.queryManager.reFetchObservableQueries(t);
      }),
      (e.prototype.refetchQueries = function (t) {
        var n = this.queryManager.refetchQueries(t),
          r = [],
          i = [];
        n.forEach(function (s, a) {
          r.push(a), i.push(s);
        });
        var o = Promise.all(i);
        return (
          (o.queries = r),
          (o.results = i),
          o.catch(function (s) {
            globalThis.__DEV__ !== !1 && $.debug(18, s);
          }),
          o
        );
      }),
      (e.prototype.getObservableQueries = function (t) {
        return t === void 0 && (t = "active"), this.queryManager.getObservableQueries(t);
      }),
      (e.prototype.extract = function (t) {
        return this.cache.extract(t);
      }),
      (e.prototype.restore = function (t) {
        return this.cache.restore(t);
      }),
      (e.prototype.addResolvers = function (t) {
        this.localState.addResolvers(t);
      }),
      (e.prototype.setResolvers = function (t) {
        this.localState.setResolvers(t);
      }),
      (e.prototype.getResolvers = function () {
        return this.localState.getResolvers();
      }),
      (e.prototype.setLocalStateFragmentMatcher = function (t) {
        this.localState.setFragmentMatcher(t);
      }),
      (e.prototype.setLink = function (t) {
        this.link = this.queryManager.link = t;
      }),
      Object.defineProperty(e.prototype, "defaultContext", {
        get: function () {
          return this.queryManager.defaultContext;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })();
globalThis.__DEV__ !== !1 && (UE.prototype.getMemoryInternals = bL);
var WE = { exports: {} };
(function (e) {
  (e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0),
    (e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0),
    (e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0),
    Object.assign(e.exports, x);
})(WE);
var tr = WE.exports;
const kN = Pu(tr),
  ON = uw({ __proto__: null, default: kN }, [tr]);
var k0 = pm ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function RN() {
  $("createContext" in ON, 54);
  var e = tr.createContext[k0];
  return (
    e ||
      (Object.defineProperty(tr.createContext, k0, {
        value: (e = tr.createContext({})),
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
      (e.displayName = "ApolloContext")),
    e
  );
}
var DN = function (e) {
  var t = e.client,
    n = e.children,
    r = RN(),
    i = tr.useContext(r),
    o = tr.useMemo(
      function () {
        return P(P({}, i), { client: t || i.client });
      },
      [i, t]
    );
  return $(o.client, 55), tr.createElement(r.Provider, { value: o }, n);
};
const MN = 1,
  AN = 5e3;
let Of = 0;
function IN() {
  return (Of = (Of + 1) % Number.MAX_SAFE_INTEGER), Of.toString();
}
const Rf = new Map(),
  O0 = (e) => {
    if (Rf.has(e)) return;
    const t = setTimeout(() => {
      Rf.delete(e), _s({ type: "REMOVE_TOAST", toastId: e });
    }, AN);
    Rf.set(e, t);
  },
  LN = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, MN) };
      case "UPDATE_TOAST":
        return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? O0(n)
            : e.toasts.forEach((r) => {
                O0(r.id);
              }),
          { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Tl = [];
let Pl = { toasts: [] };
function _s(e) {
  (Pl = LN(Pl, e)),
    Tl.forEach((t) => {
      t(Pl);
    });
}
function FN({ ...e }) {
  const t = IN(),
    n = (i) => _s({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => _s({ type: "DISMISS_TOAST", toastId: t });
  return (
    _s({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function NN() {
  const [e, t] = x.useState(Pl);
  return (
    x.useEffect(
      () => (
        Tl.push(t),
        () => {
          const n = Tl.indexOf(t);
          n > -1 && Tl.splice(n, 1);
        }
      ),
      [e]
    ),
    { ...e, toast: FN, dismiss: (n) => _s({ type: "DISMISS_TOAST", toastId: n }) }
  );
}
function ft(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented)) return t == null ? void 0 : t(i);
  };
}
function R0(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function QE(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = R0(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : R0(e[i], null);
        }
      };
  };
}
function Qr(...e) {
  return x.useCallback(QE(...e), e);
}
function D5(e, t) {
  const n = x.createContext(t),
    r = (o) => {
      const { children: s, ...a } = o,
        l = x.useMemo(() => a, Object.values(a));
      return O.jsx(n.Provider, { value: l, children: s });
    };
  r.displayName = e + "Provider";
  function i(o) {
    const s = x.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [r, i];
}
function qE(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = x.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var p;
      const { scope: d, children: h, ...v } = f,
        y = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
        w = x.useMemo(() => v, Object.values(v));
      return O.jsx(y.Provider, { value: w, children: h });
    };
    u.displayName = o + "Provider";
    function c(f, d) {
      var y;
      const h = ((y = d == null ? void 0 : d[e]) == null ? void 0 : y[l]) || a,
        v = x.useContext(h);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((s) => x.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, jN(i, ...t)];
}
function jN(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(o)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var bu = x.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    i = x.Children.toArray(n),
    o = i.find($N);
  if (o) {
    const s = o.props.children,
      a = i.map((l) =>
        l === o ? (x.Children.count(s) > 1 ? x.Children.only(null) : x.isValidElement(s) ? s.props.children : null) : l
      );
    return O.jsx(bh, { ...r, ref: t, children: x.isValidElement(s) ? x.cloneElement(s, void 0, a) : null });
  }
  return O.jsx(bh, { ...r, ref: t, children: n });
});
bu.displayName = "Slot";
var bh = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const i = BN(n),
      o = zN(r, n.props);
    return n.type !== x.Fragment && (o.ref = t ? QE(t, i) : i), x.cloneElement(n, o);
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
bh.displayName = "SlotClone";
var VN = ({ children: e }) => O.jsx(O.Fragment, { children: e });
function $N(e) {
  return x.isValidElement(e) && e.type === VN;
}
function zN(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            o(...a), i(...a);
          })
        : i && (n[r] = i)
      : r === "style"
        ? (n[r] = { ...i, ...o })
        : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function BN(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function UN(e) {
  const t = e + "CollectionProvider",
    [n, r] = qE(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (h) => {
      const { scope: v, children: y } = h,
        w = Mn.useRef(null),
        p = Mn.useRef(new Map()).current;
      return O.jsx(i, { scope: v, itemMap: p, collectionRef: w, children: y });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Mn.forwardRef((h, v) => {
      const { scope: y, children: w } = h,
        p = o(a, y),
        m = Qr(v, p.collectionRef);
      return O.jsx(bu, { ref: m, children: w });
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    f = Mn.forwardRef((h, v) => {
      const { scope: y, children: w, ...p } = h,
        m = Mn.useRef(null),
        g = Qr(v, m),
        b = o(u, y);
      return (
        Mn.useEffect(() => (b.itemMap.set(m, { ref: m, ...p }), () => void b.itemMap.delete(m))),
        O.jsx(bu, { [c]: "", ref: g, children: w })
      );
    });
  f.displayName = u;
  function d(h) {
    const v = o(e + "CollectionConsumer", h);
    return Mn.useCallback(() => {
      const w = v.collectionRef.current;
      if (!w) return [];
      const p = Array.from(w.querySelectorAll(`[${c}]`));
      return Array.from(v.itemMap.values()).sort((b, S) => p.indexOf(b.ref.current) - p.indexOf(S.ref.current));
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: f }, d, r];
}
var WN = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Zt = WN.reduce((e, t) => {
    const n = x.forwardRef((r, i) => {
      const { asChild: o, ...s } = r,
        a = o ? bu : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), O.jsx(a, { ...s, ref: i });
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function HE(e, t) {
  e && ia.flushSync(() => e.dispatchEvent(t));
}
function _n(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function QN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e);
  x.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var qN = "DismissableLayer",
  xh = "dismissableLayer.update",
  HN = "dismissableLayer.pointerDownOutside",
  GN = "dismissableLayer.focusOutside",
  D0,
  GE = x.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
  KE = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = x.useContext(GE),
      [c, f] = x.useState(null),
      d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
      [, h] = x.useState({}),
      v = Qr(t, (T) => f(T)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = y.indexOf(w),
      m = c ? y.indexOf(c) : -1,
      g = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = m >= p,
      S = YN((T) => {
        const E = T.target,
          C = [...u.branches].some((k) => k.contains(E));
        !b || C || (i == null || i(T), s == null || s(T), T.defaultPrevented || a == null || a());
      }, d),
      _ = XN((T) => {
        const E = T.target;
        [...u.branches].some((k) => k.contains(E)) ||
          (o == null || o(T), s == null || s(T), T.defaultPrevented || a == null || a());
      }, d);
    return (
      QN((T) => {
        m === u.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, d),
      x.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((D0 = d.body.style.pointerEvents), (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            M0(),
            () => {
              n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = D0);
            }
          );
      }, [c, d, n, u]),
      x.useEffect(
        () => () => {
          c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), M0());
        },
        [c, u]
      ),
      x.useEffect(() => {
        const T = () => h({});
        return document.addEventListener(xh, T), () => document.removeEventListener(xh, T);
      }, []),
      O.jsx(Zt.div, {
        ...l,
        ref: v,
        style: { pointerEvents: g ? (b ? "auto" : "none") : void 0, ...e.style },
        onFocusCapture: ft(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: ft(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: ft(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
KE.displayName = qN;
var KN = "DismissableLayerBranch",
  YE = x.forwardRef((e, t) => {
    const n = x.useContext(GE),
      r = x.useRef(null),
      i = Qr(t, r);
    return (
      x.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      O.jsx(Zt.div, { ...e, ref: i })
    );
  });
YE.displayName = KN;
function YN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e),
    r = x.useRef(!1),
    i = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              XE(HN, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(s), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function XN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const i = (o) => {
        o.target && !r.current && XE(GN, n, { originalEvent: o }, { discrete: !1 });
      };
      return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function M0() {
  const e = new CustomEvent(xh);
  document.dispatchEvent(e);
}
function XE(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? HE(i, o) : i.dispatchEvent(o);
}
var JN = KE,
  ZN = YE,
  xu = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  ej = "Portal",
  JE = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = x.useState(!1);
    xu(() => o(!0), []);
    const s = n || (i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body));
    return s ? T1.createPortal(O.jsx(Zt.div, { ...r, ref: t }), s) : null;
  });
JE.displayName = ej;
function tj(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var ZE = (e) => {
  const { present: t, children: n } = e,
    r = nj(t),
    i = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    o = Qr(r.ref, rj(i));
  return typeof n == "function" || r.isPresent ? x.cloneElement(i, { ref: o }) : null;
};
ZE.displayName = "Presence";
function nj(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    i = x.useRef(e),
    o = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = tj(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Za(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    xu(() => {
      const u = r.current,
        c = i.current;
      if (c !== e) {
        const d = o.current,
          h = Za(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && d !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    xu(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (h) => {
            const y = Za(r.current).includes(h.animationName);
            if (h.target === t && y && (l("ANIMATION_END"), !i.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
                }));
            }
          },
          d = (h) => {
            h.target === t && (o.current = Za(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Za(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function rj(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function ij({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, i] = oj({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    s = o ? e : r,
    a = _n(n),
    l = x.useCallback(
      (u) => {
        if (o) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && a(f);
        } else i(u);
      },
      [o, e, i, a]
    );
  return [s, l];
}
function oj({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    i = x.useRef(r),
    o = _n(t);
  return (
    x.useEffect(() => {
      i.current !== r && (o(r), (i.current = r));
    }, [r, i, o]),
    n
  );
}
var sj = "VisuallyHidden",
  Rm = x.forwardRef((e, t) =>
    O.jsx(Zt.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
Rm.displayName = sj;
var Dm = "ToastProvider",
  [Mm, aj, lj] = UN("Toast"),
  [eT, M5] = qE("Toast", [lj]),
  [uj, cc] = eT(Dm),
  tT = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: o = 50,
        children: s,
      } = e,
      [a, l] = x.useState(null),
      [u, c] = x.useState(0),
      f = x.useRef(!1),
      d = x.useRef(!1);
    return (
      n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Dm}\`. Expected non-empty \`string\`.`),
      O.jsx(Mm.Provider, {
        scope: t,
        children: O.jsx(uj, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: x.useCallback(() => c((h) => h + 1), []),
          onToastRemove: x.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: d,
          children: s,
        }),
      })
    );
  };
tT.displayName = Dm;
var nT = "ToastViewport",
  cj = ["F8"],
  _h = "toast.viewportPause",
  Eh = "toast.viewportResume",
  rT = x.forwardRef((e, t) => {
    const { __scopeToast: n, hotkey: r = cj, label: i = "Notifications ({hotkey})", ...o } = e,
      s = cc(nT, n),
      a = aj(n),
      l = x.useRef(null),
      u = x.useRef(null),
      c = x.useRef(null),
      f = x.useRef(null),
      d = Qr(t, f, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = s.toastCount > 0;
    x.useEffect(() => {
      const w = (p) => {
        var g;
        r.length !== 0 && r.every((b) => p[b] || p.code === b) && ((g = f.current) == null || g.focus());
      };
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
    }, [r]),
      x.useEffect(() => {
        const w = l.current,
          p = f.current;
        if (v && w && p) {
          const m = () => {
              if (!s.isClosePausedRef.current) {
                const _ = new CustomEvent(_h);
                p.dispatchEvent(_), (s.isClosePausedRef.current = !0);
              }
            },
            g = () => {
              if (s.isClosePausedRef.current) {
                const _ = new CustomEvent(Eh);
                p.dispatchEvent(_), (s.isClosePausedRef.current = !1);
              }
            },
            b = (_) => {
              !w.contains(_.relatedTarget) && g();
            },
            S = () => {
              w.contains(document.activeElement) || g();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", S),
            window.addEventListener("blur", m),
            window.addEventListener("focus", g),
            () => {
              w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", g);
            }
          );
        }
      }, [v, s.isClosePausedRef]);
    const y = x.useCallback(
      ({ tabbingDirection: w }) => {
        const m = a().map((g) => {
          const b = g.ref.current,
            S = [b, ..._j(b)];
          return w === "forwards" ? S : S.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      x.useEffect(() => {
        const w = f.current;
        if (w) {
          const p = (m) => {
            var S, _, T;
            const g = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !g) {
              const E = document.activeElement,
                C = m.shiftKey;
              if (m.target === w && C) {
                (S = u.current) == null || S.focus();
                return;
              }
              const R = y({ tabbingDirection: C ? "backwards" : "forwards" }),
                F = R.findIndex((L) => L === E);
              Df(R.slice(F + 1))
                ? m.preventDefault()
                : C
                  ? (_ = u.current) == null || _.focus()
                  : (T = c.current) == null || T.focus();
            }
          };
          return w.addEventListener("keydown", p), () => w.removeEventListener("keydown", p);
        }
      }, [a, y]),
      O.jsxs(ZN, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            O.jsx(Th, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                Df(w);
              },
            }),
          O.jsx(Mm.Slot, { scope: n, children: O.jsx(Zt.ol, { tabIndex: -1, ...o, ref: d }) }),
          v &&
            O.jsx(Th, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                Df(w);
              },
            }),
        ],
      })
    );
  });
rT.displayName = nT;
var iT = "ToastFocusProxy",
  Th = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = cc(iT, n);
    return O.jsx(Rm, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Th.displayName = iT;
var fc = "Toast",
  fj = "toast.swipeStart",
  dj = "toast.swipeMove",
  hj = "toast.swipeCancel",
  pj = "toast.swipeEnd",
  oT = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a = !0, l] = ij({ prop: r, defaultProp: i, onChange: o });
    return O.jsx(ZE, {
      present: n || a,
      children: O.jsx(yj, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: _n(e.onPause),
        onResume: _n(e.onResume),
        onSwipeStart: ft(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ft(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
            u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: ft(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ft(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
            u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
            l(!1);
        }),
      }),
    });
  });
oT.displayName = fc;
var [mj, vj] = eT(fc, { onClose() {} }),
  yj = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: d,
        onSwipeEnd: h,
        ...v
      } = e,
      y = cc(fc, n),
      [w, p] = x.useState(null),
      m = Qr(t, (L) => p(L)),
      g = x.useRef(null),
      b = x.useRef(null),
      S = i || y.duration,
      _ = x.useRef(0),
      T = x.useRef(S),
      E = x.useRef(0),
      { onToastAdd: C, onToastRemove: k } = y,
      D = _n(() => {
        var B;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((B = y.viewport) == null || B.focus()), s();
      }),
      R = x.useCallback(
        (L) => {
          !L ||
            L === 1 / 0 ||
            (window.clearTimeout(E.current), (_.current = new Date().getTime()), (E.current = window.setTimeout(D, L)));
        },
        [D]
      );
    x.useEffect(() => {
      const L = y.viewport;
      if (L) {
        const B = () => {
            R(T.current), u == null || u();
          },
          q = () => {
            const z = new Date().getTime() - _.current;
            (T.current = T.current - z), window.clearTimeout(E.current), l == null || l();
          };
        return (
          L.addEventListener(_h, q),
          L.addEventListener(Eh, B),
          () => {
            L.removeEventListener(_h, q), L.removeEventListener(Eh, B);
          }
        );
      }
    }, [y.viewport, S, l, u, R]),
      x.useEffect(() => {
        o && !y.isClosePausedRef.current && R(S);
      }, [o, S, y.isClosePausedRef, R]),
      x.useEffect(() => (C(), () => k()), [C, k]);
    const F = x.useMemo(() => (w ? dT(w) : null), [w]);
    return y.viewport
      ? O.jsxs(O.Fragment, {
          children: [
            F &&
              O.jsx(gj, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: F,
              }),
            O.jsx(mj, {
              scope: n,
              onClose: D,
              children: ia.createPortal(
                O.jsx(Mm.ItemSlot, {
                  scope: n,
                  children: O.jsx(JN, {
                    asChild: !0,
                    onEscapeKeyDown: ft(a, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || D(), (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: O.jsx(Zt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...v,
                      ref: m,
                      style: { userSelect: "none", touchAction: "none", ...e.style },
                      onKeyDown: ft(e.onKeyDown, (L) => {
                        L.key === "Escape" &&
                          (a == null || a(L.nativeEvent),
                          L.nativeEvent.defaultPrevented || ((y.isFocusedToastEscapeKeyDownRef.current = !0), D()));
                      }),
                      onPointerDown: ft(e.onPointerDown, (L) => {
                        L.button === 0 && (g.current = { x: L.clientX, y: L.clientY });
                      }),
                      onPointerMove: ft(e.onPointerMove, (L) => {
                        if (!g.current) return;
                        const B = L.clientX - g.current.x,
                          q = L.clientY - g.current.y,
                          z = !!b.current,
                          M = ["left", "right"].includes(y.swipeDirection),
                          I = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                          j = M ? I(0, B) : 0,
                          Q = M ? 0 : I(0, q),
                          U = L.pointerType === "touch" ? 10 : 2,
                          Y = { x: j, y: Q },
                          J = { originalEvent: L, delta: Y };
                        z
                          ? ((b.current = Y), el(dj, f, J, { discrete: !1 }))
                          : A0(Y, y.swipeDirection, U)
                            ? ((b.current = Y), el(fj, c, J, { discrete: !1 }), L.target.setPointerCapture(L.pointerId))
                            : (Math.abs(B) > U || Math.abs(q) > U) && (g.current = null);
                      }),
                      onPointerUp: ft(e.onPointerUp, (L) => {
                        const B = b.current,
                          q = L.target;
                        if (
                          (q.hasPointerCapture(L.pointerId) && q.releasePointerCapture(L.pointerId),
                          (b.current = null),
                          (g.current = null),
                          B)
                        ) {
                          const z = L.currentTarget,
                            M = { originalEvent: L, delta: B };
                          A0(B, y.swipeDirection, y.swipeThreshold)
                            ? el(pj, h, M, { discrete: !0 })
                            : el(hj, d, M, { discrete: !0 }),
                            z.addEventListener("click", (I) => I.preventDefault(), { once: !0 });
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  gj = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = cc(fc, t),
      [o, s] = x.useState(!1),
      [a, l] = x.useState(!1);
    return (
      bj(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : O.jsx(JE, {
            asChild: !0,
            children: O.jsx(Rm, { ...r, children: o && O.jsxs(O.Fragment, { children: [i.label, " ", n] }) }),
          })
    );
  },
  wj = "ToastTitle",
  sT = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return O.jsx(Zt.div, { ...r, ref: t });
  });
sT.displayName = wj;
var Sj = "ToastDescription",
  aT = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return O.jsx(Zt.div, { ...r, ref: t });
  });
aT.displayName = Sj;
var lT = "ToastAction",
  uT = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? O.jsx(fT, { altText: n, asChild: !0, children: O.jsx(Am, { ...r, ref: t }) })
      : (console.error(`Invalid prop \`altText\` supplied to \`${lT}\`. Expected non-empty \`string\`.`), null);
  });
uT.displayName = lT;
var cT = "ToastClose",
  Am = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = vj(cT, n);
    return O.jsx(fT, {
      asChild: !0,
      children: O.jsx(Zt.button, { type: "button", ...r, ref: t, onClick: ft(e.onClick, i.onClose) }),
    });
  });
Am.displayName = cT;
var fT = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return O.jsx(Zt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function dT(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), xj(r))) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...dT(r));
      }
    }),
    t
  );
}
function el(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? HE(i, o) : i.dispatchEvent(o);
}
var A0 = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function bj(e = () => {}) {
  const t = _n(e);
  xu(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function xj(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function _j(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Df(e) {
  const t = document.activeElement;
  return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var Ej = tT,
  hT = rT,
  pT = oT,
  mT = sT,
  vT = aT,
  yT = uT,
  gT = Am;
const I0 = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  L0 = M_,
  Tj = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return L0(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = o == null ? void 0 : o[u];
        if (c === null) return null;
        const d = I0(c) || I0(f);
        return i[u][d];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, d] = c;
          return d === void 0 || (u[f] = d), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: d, ...h } = c;
              return Object.entries(h).every((v) => {
                let [y, w] = v;
                return Array.isArray(w) ? w.includes({ ...o, ...a }[y]) : { ...o, ...a }[y] === w;
              })
                ? [...u, f, d]
                : u;
            }, []);
    return L0(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pj = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  wT = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Cj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kj = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...Cj,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: wT("lucide", i),
        ...a,
      },
      [...s.map(([u, c]) => x.createElement(u, c)), ...(Array.isArray(o) ? o : [o])]
    )
);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oj = (e, t) => {
  const n = x.forwardRef(({ className: r, ...i }, o) =>
    x.createElement(kj, { ref: o, iconNode: t, className: wT(`lucide-${Pj(e)}`, r), ...i })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rj = Oj("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Im = "-",
  Dj = (e) => {
    const t = Aj(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Im);
        return a[0] === "" && a.length !== 1 && a.shift(), ST(a, t) || Mj(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  ST = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? ST(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(Im);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null ? void 0 : s.classGroupId;
  },
  F0 = /^\[(.+)\]$/,
  Mj = (e) => {
    if (F0.test(e)) {
      const t = F0.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Aj = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Lj(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        Ph(s, r, o, t);
      }),
      r
    );
  },
  Ph = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : N0(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (Ij(i)) {
          Ph(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        Ph(s, N0(t, o), n, r);
      });
    });
  },
  N0 = (e, t) => {
    let n = e;
    return (
      t.split(Im).forEach((r) => {
        n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }), (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Ij = (e) => e.isThemeGetter,
  Lj = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(Object.entries(o).map(([s, a]) => [t + s, a]))
                : o
          );
          return [n, i];
        })
      : e,
  Fj = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return i(o, s), s;
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  bT = "!",
  Nj = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < a.length; w++) {
          let p = a[w];
          if (u === 0) {
            if (p === i && (r || a.slice(w, w + o) === t)) {
              l.push(a.slice(c, w)), (c = w + o);
              continue;
            }
            if (p === "/") {
              f = w;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const d = l.length === 0 ? a : a.substring(c),
          h = d.startsWith(bT),
          v = h ? d.substring(1) : d,
          y = f && f > c ? f - c : void 0;
        return { modifiers: l, hasImportantModifier: h, baseClassName: v, maybePostfixModifierPosition: y };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  jj = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Vj = (e) => ({ cache: Fj(e.cacheSize), parseClassName: Nj(e), ...Dj(e) }),
  $j = /\s+/,
  zj = (e, t) => {
    const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t,
      o = [],
      s = e.trim().split($j);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        { modifiers: c, hasImportantModifier: f, baseClassName: d, maybePostfixModifierPosition: h } = n(u);
      let v = !!h,
        y = r(v ? d.substring(0, h) : d);
      if (!y) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = r(d)), !y)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const w = jj(c).join(":"),
        p = f ? w + bT : w,
        m = p + y;
      if (o.includes(m)) continue;
      o.push(m);
      const g = i(y, v);
      for (let b = 0; b < g.length; ++b) {
        const S = g[b];
        o.push(p + S);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Bj() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = xT(t)) && (r && (r += " "), (r += n));
  return r;
}
const xT = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = xT(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Uj(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = Vj(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = zj(l, n);
    return i(l, c), c;
  }
  return function () {
    return o(Bj.apply(null, arguments));
  };
}
const de = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  _T = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Wj = /^\d+\/\d+$/,
  Qj = new Set(["px", "full", "screen"]),
  qj = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Hj =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Gj = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Kj = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Yj = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  nn = (e) => zi(e) || Qj.has(e) || Wj.test(e),
  Rn = (e) => po(e, "length", iV),
  zi = (e) => !!e && !Number.isNaN(Number(e)),
  Mf = (e) => po(e, "number", zi),
  jo = (e) => !!e && Number.isInteger(Number(e)),
  Xj = (e) => e.endsWith("%") && zi(e.slice(0, -1)),
  G = (e) => _T.test(e),
  Dn = (e) => qj.test(e),
  Jj = new Set(["length", "size", "percentage"]),
  Zj = (e) => po(e, Jj, ET),
  eV = (e) => po(e, "position", ET),
  tV = new Set(["image", "url"]),
  nV = (e) => po(e, tV, sV),
  rV = (e) => po(e, "", oV),
  Vo = () => !0,
  po = (e, t, n) => {
    const r = _T.exec(e);
    return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
  },
  iV = (e) => Hj.test(e) && !Gj.test(e),
  ET = () => !1,
  oV = (e) => Kj.test(e),
  sV = (e) => Yj.test(e),
  aV = () => {
    const e = de("colors"),
      t = de("spacing"),
      n = de("blur"),
      r = de("brightness"),
      i = de("borderColor"),
      o = de("borderRadius"),
      s = de("borderSpacing"),
      a = de("borderWidth"),
      l = de("contrast"),
      u = de("grayscale"),
      c = de("hueRotate"),
      f = de("invert"),
      d = de("gap"),
      h = de("gradientColorStops"),
      v = de("gradientColorStopPositions"),
      y = de("inset"),
      w = de("margin"),
      p = de("opacity"),
      m = de("padding"),
      g = de("saturate"),
      b = de("scale"),
      S = de("sepia"),
      _ = de("skew"),
      T = de("space"),
      E = de("translate"),
      C = () => ["auto", "contain", "none"],
      k = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", G, t],
      R = () => [G, t],
      F = () => ["", nn, Rn],
      L = () => ["auto", zi, G],
      B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      q = () => ["solid", "dashed", "dotted", "double", "none"],
      z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      I = () => ["", "0", G],
      j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      Q = () => [zi, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Vo],
        spacing: [nn, Rn],
        blur: ["none", "", Dn, G],
        brightness: Q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Dn, G],
        borderSpacing: R(),
        borderWidth: F(),
        contrast: Q(),
        grayscale: I(),
        hueRotate: Q(),
        invert: I(),
        gap: R(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Xj, Rn],
        inset: D(),
        margin: D(),
        opacity: Q(),
        padding: R(),
        saturate: Q(),
        scale: Q(),
        sepia: I(),
        skew: Q(),
        space: R(),
        translate: R(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [Dn] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: [...B(), G] }],
        overflow: [{ overflow: k() }],
        "overflow-x": [{ "overflow-x": k() }],
        "overflow-y": [{ "overflow-y": k() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", jo, G] }],
        basis: [{ basis: D() }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: I() }],
        shrink: [{ shrink: I() }],
        order: [{ order: ["first", "last", "none", jo, G] }],
        "grid-cols": [{ "grid-cols": [Vo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", jo, G] }, G] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [Vo] }],
        "row-start-end": [{ row: ["auto", { span: [jo, G] }, G] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [d] }],
        "gap-x": [{ "gap-x": [d] }],
        "gap-y": [{ "gap-y": [d] }],
        "justify-content": [{ justify: ["normal", ...M()] }],
        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
        "align-content": [{ content: ["normal", ...M(), "baseline"] }],
        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
        "place-content": [{ "place-content": [...M(), "baseline"] }],
        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [{ "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", { screen: [Dn] }, Dn] }],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [{ "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "max-h": [{ "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Dn, Rn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          { font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mf] },
        ],
        "font-family": [{ font: [Vo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G] }],
        "line-clamp": [{ "line-clamp": ["none", zi, Mf] }],
        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", nn, G] }],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: ["auto", "from-font", nn, Rn] }],
        "underline-offset": [{ "underline-offset": ["auto", nn, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: R() }],
        "vertical-align": [
          { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G] },
        ],
        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...B(), eV] }],
        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
        "bg-size": [{ bg: ["auto", "cover", "contain", Zj] }],
        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, nV] }],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...q(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: q() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...q()] }],
        "outline-offset": [{ "outline-offset": [nn, G] }],
        "outline-w": [{ outline: [nn, Rn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: F() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [nn, Rn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Dn, rV] }],
        "shadow-color": [{ shadow: [Vo] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [...z(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": z() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Dn, G] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G] }],
        duration: [{ duration: Q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: Q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [jo, G] }],
        "translate-x": [{ "translate-x": [E] }],
        "translate-y": [{ "translate-y": [E] }],
        "skew-x": [{ "skew-x": [_] }],
        "skew-y": [{ "skew-y": [_] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": R() }],
        "scroll-mx": [{ "scroll-mx": R() }],
        "scroll-my": [{ "scroll-my": R() }],
        "scroll-ms": [{ "scroll-ms": R() }],
        "scroll-me": [{ "scroll-me": R() }],
        "scroll-mt": [{ "scroll-mt": R() }],
        "scroll-mr": [{ "scroll-mr": R() }],
        "scroll-mb": [{ "scroll-mb": R() }],
        "scroll-ml": [{ "scroll-ml": R() }],
        "scroll-p": [{ "scroll-p": R() }],
        "scroll-px": [{ "scroll-px": R() }],
        "scroll-py": [{ "scroll-py": R() }],
        "scroll-ps": [{ "scroll-ps": R() }],
        "scroll-pe": [{ "scroll-pe": R() }],
        "scroll-pt": [{ "scroll-pt": R() }],
        "scroll-pr": [{ "scroll-pr": R() }],
        "scroll-pb": [{ "scroll-pb": R() }],
        "scroll-pl": [{ "scroll-pl": R() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", G] }],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [nn, Rn, Mf] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  lV = Uj(aV);
function mo(...e) {
  return lV(M_(e));
}
function uV(e) {
  return typeof e == "number";
}
function A5() {
  const e = Date.now().toString(36),
    t = Math.random().toString(36).substring(2, 7);
  return `${e}-${t}`;
}
function tl(e) {
  const t = structuredClone(e);
  for (let n = t.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t;
}
function I5(e) {
  const t = [],
    n = [],
    r = [],
    i = [];
  e.forEach((u, c) => {
    switch (u.status) {
      case "unset":
        t.push(c);
        break;
      case "unrecognized":
        n.push(c);
        break;
      case "familiar":
        r.push(c);
        break;
      case "known":
        i.push(c);
        break;
    }
  });
  const o = tl(t),
    s = tl(n),
    a = tl(r),
    l = tl(i);
  return [...o, ...s, ...a, ...l];
}
function L5(e) {
  let t = null,
    n;
  return function (...i) {
    (n = i),
      !uV(t) &&
        (t = requestAnimationFrame(() => {
          e(...n), (t = null);
        }));
  };
}
let Af = !1;
const If = [];
function F5(e) {
  If.push(e),
    !Af &&
      ((Af = !0),
      requestAnimationFrame(() => {
        const t = If.slice();
        (If.length = 0), t.forEach((n) => n()), (Af = !1);
      }));
}
const cV = Ej,
  TT = x.forwardRef(({ className: e, ...t }, n) =>
    O.jsx(hT, {
      ref: n,
      className: mo(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
TT.displayName = hT.displayName;
const fV = Tj(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  PT = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    O.jsx(pT, { ref: r, className: mo(fV({ variant: t }), e), ...n })
  );
PT.displayName = pT.displayName;
const dV = x.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(yT, {
    ref: n,
    className: mo(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
dV.displayName = yT.displayName;
const CT = x.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(gT, {
    ref: n,
    className: mo(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: O.jsx(Rj, { className: "h-4 w-4" }),
  })
);
CT.displayName = gT.displayName;
const kT = x.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(mT, { ref: n, className: mo("text-sm font-semibold", e), ...t })
);
kT.displayName = mT.displayName;
const OT = x.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(vT, { ref: n, className: mo("text-sm opacity-90", e), ...t })
);
OT.displayName = vT.displayName;
function hV() {
  const { toasts: e } = NN();
  return O.jsxs(cV, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
        return O.jsxs(
          PT,
          {
            ...o,
            children: [
              O.jsxs("div", {
                className: "grid gap-1",
                children: [n && O.jsx(kT, { children: n }), r && O.jsx(OT, { children: r })],
              }),
              i,
              O.jsx(CT, {}),
            ],
          },
          t
        );
      }),
      O.jsx(TT, {}),
    ],
  });
}
const pV = SE({ uri: "http://localhost:5000/graphql" }),
  mV = new UE({
    link: pV,
    cache: new $E(),
    defaultOptions: {
      watchQuery: { fetchPolicy: "cache-and-network", errorPolicy: "ignore" },
      query: { fetchPolicy: "network-only", errorPolicy: "all" },
      mutate: { errorPolicy: "all" },
    },
  });
function vV({ children: e }) {
  return O.jsx(DN, { client: mV, children: e });
}
const yV = ({ children: e }) => O.jsxs(vV, { children: [e, O.jsx(hV, {})] });
function gV() {
  (this.__data__ = []), (this.size = 0);
}
var wV = gV;
function SV(e, t) {
  return e === t || (e !== e && t !== t);
}
var RT = SV,
  bV = RT;
function xV(e, t) {
  for (var n = e.length; n--; ) if (bV(e[n][0], t)) return n;
  return -1;
}
var dc = xV,
  _V = dc,
  EV = Array.prototype,
  TV = EV.splice;
function PV(e) {
  var t = this.__data__,
    n = _V(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : TV.call(t, n, 1), --this.size, !0;
}
var CV = PV,
  kV = dc;
function OV(e) {
  var t = this.__data__,
    n = kV(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var RV = OV,
  DV = dc;
function MV(e) {
  return DV(this.__data__, e) > -1;
}
var AV = MV,
  IV = dc;
function LV(e, t) {
  var n = this.__data__,
    r = IV(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var FV = LV,
  NV = wV,
  jV = CV,
  VV = RV,
  $V = AV,
  zV = FV;
function vo(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vo.prototype.clear = NV;
vo.prototype.delete = jV;
vo.prototype.get = VV;
vo.prototype.has = $V;
vo.prototype.set = zV;
var hc = vo,
  BV = hc;
function UV() {
  (this.__data__ = new BV()), (this.size = 0);
}
var WV = UV;
function QV(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var qV = QV;
function HV(e) {
  return this.__data__.get(e);
}
var GV = HV;
function KV(e) {
  return this.__data__.has(e);
}
var YV = KV,
  XV = typeof xa == "object" && xa && xa.Object === Object && xa,
  DT = XV,
  JV = DT,
  ZV = typeof self == "object" && self && self.Object === Object && self,
  e2 = JV || ZV || Function("return this")(),
  en = e2,
  t2 = en,
  n2 = t2.Symbol,
  Lm = n2,
  j0 = Lm,
  MT = Object.prototype,
  r2 = MT.hasOwnProperty,
  i2 = MT.toString,
  $o = j0 ? j0.toStringTag : void 0;
function o2(e) {
  var t = r2.call(e, $o),
    n = e[$o];
  try {
    e[$o] = void 0;
    var r = !0;
  } catch {}
  var i = i2.call(e);
  return r && (t ? (e[$o] = n) : delete e[$o]), i;
}
var s2 = o2,
  a2 = Object.prototype,
  l2 = a2.toString;
function u2(e) {
  return l2.call(e);
}
var c2 = u2,
  V0 = Lm,
  f2 = s2,
  d2 = c2,
  h2 = "[object Null]",
  p2 = "[object Undefined]",
  $0 = V0 ? V0.toStringTag : void 0;
function m2(e) {
  return e == null ? (e === void 0 ? p2 : h2) : $0 && $0 in Object(e) ? f2(e) : d2(e);
}
var pc = m2;
function v2(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ma = v2,
  y2 = pc,
  g2 = ma,
  w2 = "[object AsyncFunction]",
  S2 = "[object Function]",
  b2 = "[object GeneratorFunction]",
  x2 = "[object Proxy]";
function _2(e) {
  if (!g2(e)) return !1;
  var t = y2(e);
  return t == S2 || t == b2 || t == w2 || t == x2;
}
var AT = _2,
  E2 = en,
  T2 = E2["__core-js_shared__"],
  P2 = T2,
  Lf = P2,
  z0 = (function () {
    var e = /[^.]+$/.exec((Lf && Lf.keys && Lf.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function C2(e) {
  return !!z0 && z0 in e;
}
var k2 = C2,
  O2 = Function.prototype,
  R2 = O2.toString;
function D2(e) {
  if (e != null) {
    try {
      return R2.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var IT = D2,
  M2 = AT,
  A2 = k2,
  I2 = ma,
  L2 = IT,
  F2 = /[\\^$.*+?()[\]{}|]/g,
  N2 = /^\[object .+?Constructor\]$/,
  j2 = Function.prototype,
  V2 = Object.prototype,
  $2 = j2.toString,
  z2 = V2.hasOwnProperty,
  B2 = RegExp(
    "^" +
      $2
        .call(z2)
        .replace(F2, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
function U2(e) {
  if (!I2(e) || A2(e)) return !1;
  var t = M2(e) ? B2 : N2;
  return t.test(L2(e));
}
var W2 = U2;
function Q2(e, t) {
  return e == null ? void 0 : e[t];
}
var q2 = Q2,
  H2 = W2,
  G2 = q2;
function K2(e, t) {
  var n = G2(e, t);
  return H2(n) ? n : void 0;
}
var Xr = K2,
  Y2 = Xr,
  X2 = en,
  J2 = Y2(X2, "Map"),
  Fm = J2,
  Z2 = Xr,
  e$ = Z2(Object, "create"),
  mc = e$,
  B0 = mc;
function t$() {
  (this.__data__ = B0 ? B0(null) : {}), (this.size = 0);
}
var n$ = t$;
function r$(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var i$ = r$,
  o$ = mc,
  s$ = "__lodash_hash_undefined__",
  a$ = Object.prototype,
  l$ = a$.hasOwnProperty;
function u$(e) {
  var t = this.__data__;
  if (o$) {
    var n = t[e];
    return n === s$ ? void 0 : n;
  }
  return l$.call(t, e) ? t[e] : void 0;
}
var c$ = u$,
  f$ = mc,
  d$ = Object.prototype,
  h$ = d$.hasOwnProperty;
function p$(e) {
  var t = this.__data__;
  return f$ ? t[e] !== void 0 : h$.call(t, e);
}
var m$ = p$,
  v$ = mc,
  y$ = "__lodash_hash_undefined__";
function g$(e, t) {
  var n = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (n[e] = v$ && t === void 0 ? y$ : t), this;
}
var w$ = g$,
  S$ = n$,
  b$ = i$,
  x$ = c$,
  _$ = m$,
  E$ = w$;
function yo(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
yo.prototype.clear = S$;
yo.prototype.delete = b$;
yo.prototype.get = x$;
yo.prototype.has = _$;
yo.prototype.set = E$;
var T$ = yo,
  U0 = T$,
  P$ = hc,
  C$ = Fm;
function k$() {
  (this.size = 0), (this.__data__ = { hash: new U0(), map: new (C$ || P$)(), string: new U0() });
}
var O$ = k$;
function R$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var D$ = R$,
  M$ = D$;
function A$(e, t) {
  var n = e.__data__;
  return M$(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var vc = A$,
  I$ = vc;
function L$(e) {
  var t = I$(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var F$ = L$,
  N$ = vc;
function j$(e) {
  return N$(this, e).get(e);
}
var V$ = j$,
  $$ = vc;
function z$(e) {
  return $$(this, e).has(e);
}
var B$ = z$,
  U$ = vc;
function W$(e, t) {
  var n = U$(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var Q$ = W$,
  q$ = O$,
  H$ = F$,
  G$ = V$,
  K$ = B$,
  Y$ = Q$;
function go(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
go.prototype.clear = q$;
go.prototype.delete = H$;
go.prototype.get = G$;
go.prototype.has = K$;
go.prototype.set = Y$;
var X$ = go,
  J$ = hc,
  Z$ = Fm,
  ez = X$,
  tz = 200;
function nz(e, t) {
  var n = this.__data__;
  if (n instanceof J$) {
    var r = n.__data__;
    if (!Z$ || r.length < tz - 1) return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new ez(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var rz = nz,
  iz = hc,
  oz = WV,
  sz = qV,
  az = GV,
  lz = YV,
  uz = rz;
function wo(e) {
  var t = (this.__data__ = new iz(e));
  this.size = t.size;
}
wo.prototype.clear = oz;
wo.prototype.delete = sz;
wo.prototype.get = az;
wo.prototype.has = lz;
wo.prototype.set = uz;
var cz = wo;
function fz(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; );
  return e;
}
var dz = fz,
  hz = Xr,
  pz = (function () {
    try {
      var e = hz(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  mz = pz,
  W0 = mz;
function vz(e, t, n) {
  t == "__proto__" && W0 ? W0(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
}
var LT = vz,
  yz = LT,
  gz = RT,
  wz = Object.prototype,
  Sz = wz.hasOwnProperty;
function bz(e, t, n) {
  var r = e[t];
  (!(Sz.call(e, t) && gz(r, n)) || (n === void 0 && !(t in e))) && yz(e, t, n);
}
var FT = bz,
  xz = FT,
  _z = LT;
function Ez(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var a = t[o],
      l = r ? r(n[a], e[a], a, n, e) : void 0;
    l === void 0 && (l = e[a]), i ? _z(n, a, l) : xz(n, a, l);
  }
  return n;
}
var yc = Ez;
function Tz(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var Pz = Tz;
function Cz(e) {
  return e != null && typeof e == "object";
}
var va = Cz,
  kz = pc,
  Oz = va,
  Rz = "[object Arguments]";
function Dz(e) {
  return Oz(e) && kz(e) == Rz;
}
var Mz = Dz,
  Q0 = Mz,
  Az = va,
  NT = Object.prototype,
  Iz = NT.hasOwnProperty,
  Lz = NT.propertyIsEnumerable,
  Fz = Q0(
    (function () {
      return arguments;
    })()
  )
    ? Q0
    : function (e) {
        return Az(e) && Iz.call(e, "callee") && !Lz.call(e, "callee");
      },
  Nz = Fz,
  jz = Array.isArray,
  Nm = jz,
  _u = { exports: {} };
function Vz() {
  return !1;
}
var $z = Vz;
_u.exports;
(function (e, t) {
  var n = en,
    r = $z,
    i = t && !t.nodeType && t,
    o = i && !0 && e && !e.nodeType && e,
    s = o && o.exports === i,
    a = s ? n.Buffer : void 0,
    l = a ? a.isBuffer : void 0,
    u = l || r;
  e.exports = u;
})(_u, _u.exports);
var jT = _u.exports,
  zz = 9007199254740991,
  Bz = /^(?:0|[1-9]\d*)$/;
function Uz(e, t) {
  var n = typeof e;
  return (t = t ?? zz), !!t && (n == "number" || (n != "symbol" && Bz.test(e))) && e > -1 && e % 1 == 0 && e < t;
}
var Wz = Uz,
  Qz = 9007199254740991;
function qz(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qz;
}
var VT = qz,
  Hz = pc,
  Gz = VT,
  Kz = va,
  Yz = "[object Arguments]",
  Xz = "[object Array]",
  Jz = "[object Boolean]",
  Zz = "[object Date]",
  eB = "[object Error]",
  tB = "[object Function]",
  nB = "[object Map]",
  rB = "[object Number]",
  iB = "[object Object]",
  oB = "[object RegExp]",
  sB = "[object Set]",
  aB = "[object String]",
  lB = "[object WeakMap]",
  uB = "[object ArrayBuffer]",
  cB = "[object DataView]",
  fB = "[object Float32Array]",
  dB = "[object Float64Array]",
  hB = "[object Int8Array]",
  pB = "[object Int16Array]",
  mB = "[object Int32Array]",
  vB = "[object Uint8Array]",
  yB = "[object Uint8ClampedArray]",
  gB = "[object Uint16Array]",
  wB = "[object Uint32Array]",
  pe = {};
pe[fB] = pe[dB] = pe[hB] = pe[pB] = pe[mB] = pe[vB] = pe[yB] = pe[gB] = pe[wB] = !0;
pe[Yz] =
  pe[Xz] =
  pe[uB] =
  pe[Jz] =
  pe[cB] =
  pe[Zz] =
  pe[eB] =
  pe[tB] =
  pe[nB] =
  pe[rB] =
  pe[iB] =
  pe[oB] =
  pe[sB] =
  pe[aB] =
  pe[lB] =
    !1;
function SB(e) {
  return Kz(e) && Gz(e.length) && !!pe[Hz(e)];
}
var bB = SB;
function xB(e) {
  return function (t) {
    return e(t);
  };
}
var jm = xB,
  Eu = { exports: {} };
Eu.exports;
(function (e, t) {
  var n = DT,
    r = t && !t.nodeType && t,
    i = r && !0 && e && !e.nodeType && e,
    o = i && i.exports === r,
    s = o && n.process,
    a = (function () {
      try {
        var l = i && i.require && i.require("util").types;
        return l || (s && s.binding && s.binding("util"));
      } catch {}
    })();
  e.exports = a;
})(Eu, Eu.exports);
var Vm = Eu.exports,
  _B = bB,
  EB = jm,
  q0 = Vm,
  H0 = q0 && q0.isTypedArray,
  TB = H0 ? EB(H0) : _B,
  PB = TB,
  CB = Pz,
  kB = Nz,
  OB = Nm,
  RB = jT,
  DB = Wz,
  MB = PB,
  AB = Object.prototype,
  IB = AB.hasOwnProperty;
function LB(e, t) {
  var n = OB(e),
    r = !n && kB(e),
    i = !n && !r && RB(e),
    o = !n && !r && !i && MB(e),
    s = n || r || i || o,
    a = s ? CB(e.length, String) : [],
    l = a.length;
  for (var u in e)
    (t || IB.call(e, u)) &&
      !(
        s &&
        (u == "length" ||
          (i && (u == "offset" || u == "parent")) ||
          (o && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          DB(u, l))
      ) &&
      a.push(u);
  return a;
}
var $T = LB,
  FB = Object.prototype;
function NB(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || FB;
  return e === n;
}
var $m = NB;
function jB(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var zT = jB,
  VB = zT,
  $B = VB(Object.keys, Object),
  zB = $B,
  BB = $m,
  UB = zB,
  WB = Object.prototype,
  QB = WB.hasOwnProperty;
function qB(e) {
  if (!BB(e)) return UB(e);
  var t = [];
  for (var n in Object(e)) QB.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var HB = qB,
  GB = AT,
  KB = VT;
function YB(e) {
  return e != null && KB(e.length) && !GB(e);
}
var BT = YB,
  XB = $T,
  JB = HB,
  ZB = BT;
function e3(e) {
  return ZB(e) ? XB(e) : JB(e);
}
var zm = e3,
  t3 = yc,
  n3 = zm;
function r3(e, t) {
  return e && t3(t, n3(t), e);
}
var i3 = r3;
function o3(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var s3 = o3,
  a3 = ma,
  l3 = $m,
  u3 = s3,
  c3 = Object.prototype,
  f3 = c3.hasOwnProperty;
function d3(e) {
  if (!a3(e)) return u3(e);
  var t = l3(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !f3.call(e, r))) || n.push(r);
  return n;
}
var h3 = d3,
  p3 = $T,
  m3 = h3,
  v3 = BT;
function y3(e) {
  return v3(e) ? p3(e, !0) : m3(e);
}
var Bm = y3,
  g3 = yc,
  w3 = Bm;
function S3(e, t) {
  return e && g3(t, w3(t), e);
}
var b3 = S3,
  Tu = { exports: {} };
Tu.exports;
(function (e, t) {
  var n = en,
    r = t && !t.nodeType && t,
    i = r && !0 && e && !e.nodeType && e,
    o = i && i.exports === r,
    s = o ? n.Buffer : void 0,
    a = s ? s.allocUnsafe : void 0;
  function l(u, c) {
    if (c) return u.slice();
    var f = u.length,
      d = a ? a(f) : new u.constructor(f);
    return u.copy(d), d;
  }
  e.exports = l;
})(Tu, Tu.exports);
var x3 = Tu.exports;
function _3(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var E3 = _3;
function T3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[i++] = s);
  }
  return o;
}
var P3 = T3;
function C3() {
  return [];
}
var UT = C3,
  k3 = P3,
  O3 = UT,
  R3 = Object.prototype,
  D3 = R3.propertyIsEnumerable,
  G0 = Object.getOwnPropertySymbols,
  M3 = G0
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            k3(G0(e), function (t) {
              return D3.call(e, t);
            }));
      }
    : O3,
  Um = M3,
  A3 = yc,
  I3 = Um;
function L3(e, t) {
  return A3(e, I3(e), t);
}
var F3 = L3;
function N3(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}
var WT = N3,
  j3 = zT,
  V3 = j3(Object.getPrototypeOf, Object),
  QT = V3,
  $3 = WT,
  z3 = QT,
  B3 = Um,
  U3 = UT,
  W3 = Object.getOwnPropertySymbols,
  Q3 = W3
    ? function (e) {
        for (var t = []; e; ) $3(t, B3(e)), (e = z3(e));
        return t;
      }
    : U3,
  qT = Q3,
  q3 = yc,
  H3 = qT;
function G3(e, t) {
  return q3(e, H3(e), t);
}
var K3 = G3,
  Y3 = WT,
  X3 = Nm;
function J3(e, t, n) {
  var r = t(e);
  return X3(e) ? r : Y3(r, n(e));
}
var HT = J3,
  Z3 = HT,
  eU = Um,
  tU = zm;
function nU(e) {
  return Z3(e, tU, eU);
}
var rU = nU,
  iU = HT,
  oU = qT,
  sU = Bm;
function aU(e) {
  return iU(e, sU, oU);
}
var lU = aU,
  uU = Xr,
  cU = en,
  fU = uU(cU, "DataView"),
  dU = fU,
  hU = Xr,
  pU = en,
  mU = hU(pU, "Promise"),
  vU = mU,
  yU = Xr,
  gU = en,
  wU = yU(gU, "Set"),
  SU = wU,
  bU = Xr,
  xU = en,
  _U = bU(xU, "WeakMap"),
  EU = _U,
  Ch = dU,
  kh = Fm,
  Oh = vU,
  Rh = SU,
  Dh = EU,
  GT = pc,
  So = IT,
  K0 = "[object Map]",
  TU = "[object Object]",
  Y0 = "[object Promise]",
  X0 = "[object Set]",
  J0 = "[object WeakMap]",
  Z0 = "[object DataView]",
  PU = So(Ch),
  CU = So(kh),
  kU = So(Oh),
  OU = So(Rh),
  RU = So(Dh),
  Er = GT;
((Ch && Er(new Ch(new ArrayBuffer(1))) != Z0) ||
  (kh && Er(new kh()) != K0) ||
  (Oh && Er(Oh.resolve()) != Y0) ||
  (Rh && Er(new Rh()) != X0) ||
  (Dh && Er(new Dh()) != J0)) &&
  (Er = function (e) {
    var t = GT(e),
      n = t == TU ? e.constructor : void 0,
      r = n ? So(n) : "";
    if (r)
      switch (r) {
        case PU:
          return Z0;
        case CU:
          return K0;
        case kU:
          return Y0;
        case OU:
          return X0;
        case RU:
          return J0;
      }
    return t;
  });
var Wm = Er,
  DU = Object.prototype,
  MU = DU.hasOwnProperty;
function AU(e) {
  var t = e.length,
    n = new e.constructor(t);
  return t && typeof e[0] == "string" && MU.call(e, "index") && ((n.index = e.index), (n.input = e.input)), n;
}
var IU = AU,
  LU = en,
  FU = LU.Uint8Array,
  NU = FU,
  ew = NU;
function jU(e) {
  var t = new e.constructor(e.byteLength);
  return new ew(t).set(new ew(e)), t;
}
var Qm = jU,
  VU = Qm;
function $U(e, t) {
  var n = t ? VU(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var zU = $U,
  BU = /\w*$/;
function UU(e) {
  var t = new e.constructor(e.source, BU.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var WU = UU,
  tw = Lm,
  nw = tw ? tw.prototype : void 0,
  rw = nw ? nw.valueOf : void 0;
function QU(e) {
  return rw ? Object(rw.call(e)) : {};
}
var qU = QU,
  HU = Qm;
function GU(e, t) {
  var n = t ? HU(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var KU = GU,
  YU = Qm,
  XU = zU,
  JU = WU,
  ZU = qU,
  e4 = KU,
  t4 = "[object Boolean]",
  n4 = "[object Date]",
  r4 = "[object Map]",
  i4 = "[object Number]",
  o4 = "[object RegExp]",
  s4 = "[object Set]",
  a4 = "[object String]",
  l4 = "[object Symbol]",
  u4 = "[object ArrayBuffer]",
  c4 = "[object DataView]",
  f4 = "[object Float32Array]",
  d4 = "[object Float64Array]",
  h4 = "[object Int8Array]",
  p4 = "[object Int16Array]",
  m4 = "[object Int32Array]",
  v4 = "[object Uint8Array]",
  y4 = "[object Uint8ClampedArray]",
  g4 = "[object Uint16Array]",
  w4 = "[object Uint32Array]";
function S4(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case u4:
      return YU(e);
    case t4:
    case n4:
      return new r(+e);
    case c4:
      return XU(e, n);
    case f4:
    case d4:
    case h4:
    case p4:
    case m4:
    case v4:
    case y4:
    case g4:
    case w4:
      return e4(e, n);
    case r4:
      return new r();
    case i4:
    case a4:
      return new r(e);
    case o4:
      return JU(e);
    case s4:
      return new r();
    case l4:
      return ZU(e);
  }
}
var b4 = S4,
  x4 = ma,
  iw = Object.create,
  _4 = (function () {
    function e() {}
    return function (t) {
      if (!x4(t)) return {};
      if (iw) return iw(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  E4 = _4,
  T4 = E4,
  P4 = QT,
  C4 = $m;
function k4(e) {
  return typeof e.constructor == "function" && !C4(e) ? T4(P4(e)) : {};
}
var O4 = k4,
  R4 = Wm,
  D4 = va,
  M4 = "[object Map]";
function A4(e) {
  return D4(e) && R4(e) == M4;
}
var I4 = A4,
  L4 = I4,
  F4 = jm,
  ow = Vm,
  sw = ow && ow.isMap,
  N4 = sw ? F4(sw) : L4,
  j4 = N4,
  V4 = Wm,
  $4 = va,
  z4 = "[object Set]";
function B4(e) {
  return $4(e) && V4(e) == z4;
}
var U4 = B4,
  W4 = U4,
  Q4 = jm,
  aw = Vm,
  lw = aw && aw.isSet,
  q4 = lw ? Q4(lw) : W4,
  H4 = q4,
  G4 = cz,
  K4 = dz,
  Y4 = FT,
  X4 = i3,
  J4 = b3,
  Z4 = x3,
  eW = E3,
  tW = F3,
  nW = K3,
  rW = rU,
  iW = lU,
  oW = Wm,
  sW = IU,
  aW = b4,
  lW = O4,
  uW = Nm,
  cW = jT,
  fW = j4,
  dW = ma,
  hW = H4,
  pW = zm,
  mW = Bm,
  vW = 1,
  yW = 2,
  gW = 4,
  KT = "[object Arguments]",
  wW = "[object Array]",
  SW = "[object Boolean]",
  bW = "[object Date]",
  xW = "[object Error]",
  YT = "[object Function]",
  _W = "[object GeneratorFunction]",
  EW = "[object Map]",
  TW = "[object Number]",
  XT = "[object Object]",
  PW = "[object RegExp]",
  CW = "[object Set]",
  kW = "[object String]",
  OW = "[object Symbol]",
  RW = "[object WeakMap]",
  DW = "[object ArrayBuffer]",
  MW = "[object DataView]",
  AW = "[object Float32Array]",
  IW = "[object Float64Array]",
  LW = "[object Int8Array]",
  FW = "[object Int16Array]",
  NW = "[object Int32Array]",
  jW = "[object Uint8Array]",
  VW = "[object Uint8ClampedArray]",
  $W = "[object Uint16Array]",
  zW = "[object Uint32Array]",
  se = {};
se[KT] =
  se[wW] =
  se[DW] =
  se[MW] =
  se[SW] =
  se[bW] =
  se[AW] =
  se[IW] =
  se[LW] =
  se[FW] =
  se[NW] =
  se[EW] =
  se[TW] =
  se[XT] =
  se[PW] =
  se[CW] =
  se[kW] =
  se[OW] =
  se[jW] =
  se[VW] =
  se[$W] =
  se[zW] =
    !0;
se[xW] = se[YT] = se[RW] = !1;
function Cl(e, t, n, r, i, o) {
  var s,
    a = t & vW,
    l = t & yW,
    u = t & gW;
  if ((n && (s = i ? n(e, r, i, o) : n(e)), s !== void 0)) return s;
  if (!dW(e)) return e;
  var c = uW(e);
  if (c) {
    if (((s = sW(e)), !a)) return eW(e, s);
  } else {
    var f = oW(e),
      d = f == YT || f == _W;
    if (cW(e)) return Z4(e, a);
    if (f == XT || f == KT || (d && !i)) {
      if (((s = l || d ? {} : lW(e)), !a)) return l ? nW(e, J4(s, e)) : tW(e, X4(s, e));
    } else {
      if (!se[f]) return i ? e : {};
      s = aW(e, f, a);
    }
  }
  o || (o = new G4());
  var h = o.get(e);
  if (h) return h;
  o.set(e, s),
    hW(e)
      ? e.forEach(function (w) {
          s.add(Cl(w, t, n, w, e, o));
        })
      : fW(e) &&
        e.forEach(function (w, p) {
          s.set(p, Cl(w, t, n, p, e, o));
        });
  var v = u ? (l ? iW : rW) : l ? mW : pW,
    y = c ? void 0 : v(e);
  return (
    K4(y || e, function (w, p) {
      y && ((p = w), (w = e[p])), Y4(s, p, Cl(w, t, n, p, e, o));
    }),
    s
  );
}
var BW = Cl,
  UW = BW,
  WW = 1,
  QW = 4;
function qW(e) {
  return UW(e, WW | QW);
}
var HW = qW;
const GW = Pu(HW),
  KW = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.75 } },
  YW = x.forwardRef((e, t) => {
    const n = fO(),
      r = Op(),
      i = x.useContext(r),
      o = x.useRef(i);
    return (
      n && (o.current = GW(i)),
      O.jsx(LA.div, { ref: t, ...KW, children: O.jsx(r.Provider, { value: o.current, children: O.jsx(Bb, {}) }) })
    );
  }),
  XW = () => {
    const e = Ub(),
      t = gn({ strict: !1 }),
      n = e.findIndex((o) => o.id === t.id) + 1,
      r = e[n],
      i = e.some((o) => o.id === "/");
    return O.jsx(yV, {
      children: O.jsxs("main", {
        className: "overflow-x-hidden",
        children: [
          O.jsx(cy, { children: !i && O.jsx(MI, {}) }),
          O.jsx("hr", {}),
          O.jsx(cy, { mode: "popLayout", children: O.jsx(YW, {}, (r == null ? void 0 : r.id) || t.id) }),
          O.jsx(RI, {}),
        ],
      }),
    });
  },
  ya = gk({ component: XW }),
  JW = Hu("/vocabulary")(),
  ZW = Hu("/reviewed-words")(),
  e5 = Hu("/flashcards")(),
  t5 = Hu("/")(),
  n5 = JW.update({ id: "/vocabulary", path: "/vocabulary", getParentRoute: () => ya }).lazy(() =>
    sa(() => import("./vocabulary.lazy-iK1gqOvH.js"), __vite__mapDeps([0, 1, 2, 3, 4])).then((e) => e.Route)
  ),
  r5 = ZW.update({ id: "/reviewed-words", path: "/reviewed-words", getParentRoute: () => ya }).lazy(() =>
    sa(() => import("./reviewed-words.lazy-CVga3iFm.js"), __vite__mapDeps([5, 1, 2, 3])).then((e) => e.Route)
  ),
  i5 = e5
    .update({ id: "/flashcards", path: "/flashcards", getParentRoute: () => ya })
    .lazy(() => sa(() => import("./flashcards.lazy-BVa94mGS.js"), __vite__mapDeps([6, 4, 2, 3])).then((e) => e.Route)),
  o5 = t5
    .update({ id: "/", path: "/", getParentRoute: () => ya })
    .lazy(() => sa(() => import("./index.lazy-CM5Ogc1x.js"), __vite__mapDeps([7, 2])).then((e) => e.Route)),
  s5 = { IndexLazyRoute: o5, FlashcardsLazyRoute: i5, ReviewedWordsLazyRoute: r5, VocabularyLazyRoute: n5 },
  a5 = ya._addFileChildren(s5)._addFileTypes(),
  l5 = Zk({ routeTree: a5 });
xb(document.getElementById("root")).render(O.jsx(x.StrictMode, { children: O.jsx(iO, { router: l5 }) }));
export {
  B_ as $,
  cy as A,
  Mn as B,
  NN as C,
  KE as D,
  I5 as E,
  M_ as F,
  NI as G,
  E5 as H,
  P5 as I,
  T5 as J,
  zI as K,
  LI as L,
  ue as M,
  x5 as N,
  Lg as O,
  Zt as P,
  tr as Q,
  u5 as R,
  bu as S,
  _5 as T,
  RN as U,
  $ as V,
  DI as W,
  Rj as X,
  ON as Y,
  C5 as Z,
  en as _,
  pc as a,
  bn as a0,
  U_ as a1,
  uL as a2,
  le as a3,
  wu as a4,
  ro as a5,
  bf as a6,
  te as a7,
  Xt as a8,
  _r as a9,
  Wa as aa,
  Tj as ab,
  v5 as ac,
  y5 as ad,
  Wn as ae,
  h5 as af,
  Fr as ag,
  Br as ah,
  S5 as ai,
  wI as aj,
  GA as ak,
  hI as al,
  Xd as am,
  g5 as an,
  cI as ao,
  Vt as ap,
  yI as aq,
  pI as ar,
  it as as,
  R1 as at,
  w5 as au,
  b5 as av,
  ma as b,
  Oj as c,
  mo as d,
  L5 as e,
  uV as f,
  Pu as g,
  A5 as h,
  va as i,
  O as j,
  f5 as k,
  _n as l,
  LA as m,
  Qr as n,
  P as o,
  hn as p,
  Ke as q,
  x as r,
  F5 as s,
  ij as t,
  xu as u,
  qE as v,
  ZE as w,
  JE as x,
  ft as y,
  D5 as z,
};
