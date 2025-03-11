import {
  T as Ee,
  G as j,
  H as me,
  I as Pe,
  J as Me,
  K as ve,
  L as z,
  M as l,
  O as U,
  N as Ue,
  o as T,
  Q as x,
  U as ge,
  V as I,
  Y as Be,
  Z as Ve,
  $ as $e,
  a0 as Qe,
  a1 as je,
  a2 as Ge,
  p as ye,
  a3 as w,
  a4 as xe,
  a5 as Ke,
  a6 as Ne,
  a7 as F,
  a8 as ke,
  a9 as ne,
} from "./index-DznMvQEf.js";
function qe(e) {
  return typeof e == "object" && e !== null;
}
function Ye(e, t) {
  if (!!!e) throw new Error("Unexpected invariant triggered.");
}
const ze = /\r\n|[\n\r]/g;
function X(e, t) {
  let n = 0,
    i = 1;
  for (const r of e.body.matchAll(ze)) {
    if ((typeof r.index == "number" || Ye(!1), r.index >= t)) break;
    (n = r.index + r[0].length), (i += 1);
  }
  return { line: i, column: t + 1 - n };
}
function We(e) {
  return Te(e.source, X(e.source, e.start));
}
function Te(e, t) {
  const n = e.locationOffset.column - 1,
    i = "".padStart(n) + e.body,
    r = t.line - 1,
    s = e.locationOffset.line - 1,
    o = t.line + s,
    c = t.line === 1 ? n : 0,
    u = t.column + c,
    h = `${e.name}:${o}:${u}
`,
    p = i.split(/\r\n|[\n\r]/g),
    d = p[r];
  if (d.length > 120) {
    const f = Math.floor(u / 80),
      m = u % 80,
      E = [];
    for (let k = 0; k < d.length; k += 80) E.push(d.slice(k, k + 80));
    return (
      h + oe([[`${o} |`, E[0]], ...E.slice(1, f + 1).map((k) => ["|", k]), ["|", "^".padStart(m)], ["|", E[f + 1]]])
    );
  }
  return (
    h +
    oe([
      [`${o - 1} |`, p[r - 1]],
      [`${o} |`, d],
      ["|", "^".padStart(u)],
      [`${o + 1} |`, p[r + 1]],
    ])
  );
}
function oe(e) {
  const t = e.filter(([i, r]) => r !== void 0),
    n = Math.max(...t.map(([i]) => i.length));
  return t.map(([i, r]) => i.padStart(n) + (r ? " " + r : "")).join(`
`);
}
function Je(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t
    ? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] }
    : t;
}
class re extends Error {
  constructor(t, ...n) {
    var i, r, s;
    const { nodes: o, source: c, positions: u, path: h, originalError: p, extensions: d } = Je(n);
    super(t),
      (this.name = "GraphQLError"),
      (this.path = h ?? void 0),
      (this.originalError = p ?? void 0),
      (this.nodes = ce(Array.isArray(o) ? o : o ? [o] : void 0));
    const f = ce((i = this.nodes) === null || i === void 0 ? void 0 : i.map((E) => E.loc).filter((E) => E != null));
    (this.source = c ?? (f == null || (r = f[0]) === null || r === void 0 ? void 0 : r.source)),
      (this.positions = u ?? (f == null ? void 0 : f.map((E) => E.start))),
      (this.locations = u && c ? u.map((E) => X(c, E)) : f == null ? void 0 : f.map((E) => X(E.source, E.start)));
    const m = qe(p == null ? void 0 : p.extensions) ? (p == null ? void 0 : p.extensions) : void 0;
    (this.extensions = (s = d ?? m) !== null && s !== void 0 ? s : Object.create(null)),
      Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 },
      }),
      p != null && p.stack
        ? Object.defineProperty(this, "stack", { value: p.stack, writable: !0, configurable: !0 })
        : Error.captureStackTrace
          ? Error.captureStackTrace(this, re)
          : Object.defineProperty(this, "stack", { value: Error().stack, writable: !0, configurable: !0 });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc &&
          (t +=
            `

` + We(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t +=
          `

` + Te(this.source, n);
    return t;
  }
  toJSON() {
    const t = { message: this.message };
    return (
      this.locations != null && (t.locations = this.locations),
      this.path != null && (t.path = this.path),
      this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions),
      t
    );
  }
}
function ce(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function N(e, t, n) {
  return new re(`Syntax Error: ${n}`, { source: e, positions: [t] });
}
var Z;
(function (e) {
  (e.QUERY = "QUERY"),
    (e.MUTATION = "MUTATION"),
    (e.SUBSCRIPTION = "SUBSCRIPTION"),
    (e.FIELD = "FIELD"),
    (e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"),
    (e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"),
    (e.INLINE_FRAGMENT = "INLINE_FRAGMENT"),
    (e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"),
    (e.SCHEMA = "SCHEMA"),
    (e.SCALAR = "SCALAR"),
    (e.OBJECT = "OBJECT"),
    (e.FIELD_DEFINITION = "FIELD_DEFINITION"),
    (e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"),
    (e.INTERFACE = "INTERFACE"),
    (e.UNION = "UNION"),
    (e.ENUM = "ENUM"),
    (e.ENUM_VALUE = "ENUM_VALUE"),
    (e.INPUT_OBJECT = "INPUT_OBJECT"),
    (e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION");
})(Z || (Z = {}));
var a;
(function (e) {
  (e.SOF = "<SOF>"),
    (e.EOF = "<EOF>"),
    (e.BANG = "!"),
    (e.DOLLAR = "$"),
    (e.AMP = "&"),
    (e.PAREN_L = "("),
    (e.PAREN_R = ")"),
    (e.SPREAD = "..."),
    (e.COLON = ":"),
    (e.EQUALS = "="),
    (e.AT = "@"),
    (e.BRACKET_L = "["),
    (e.BRACKET_R = "]"),
    (e.BRACE_L = "{"),
    (e.PIPE = "|"),
    (e.BRACE_R = "}"),
    (e.NAME = "Name"),
    (e.INT = "Int"),
    (e.FLOAT = "Float"),
    (e.STRING = "String"),
    (e.BLOCK_STRING = "BlockString"),
    (e.COMMENT = "Comment");
})(a || (a = {}));
class He {
  constructor(t) {
    const n = new Ee(a.SOF, 0, 0, 0, 0);
    (this.source = t), (this.lastToken = n), (this.token = n), (this.line = 1), (this.lineStart = 0);
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return (this.lastToken = this.token), (this.token = this.lookahead());
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== a.EOF)
      do
        if (t.next) t = t.next;
        else {
          const n = Ze(this, t.end);
          (t.next = n), (n.prev = t), (t = n);
        }
      while (t.kind === a.COMMENT);
    return t;
  }
}
function Xe(e) {
  return (
    e === a.BANG ||
    e === a.DOLLAR ||
    e === a.AMP ||
    e === a.PAREN_L ||
    e === a.PAREN_R ||
    e === a.SPREAD ||
    e === a.COLON ||
    e === a.EQUALS ||
    e === a.AT ||
    e === a.BRACKET_L ||
    e === a.BRACKET_R ||
    e === a.BRACE_L ||
    e === a.PIPE ||
    e === a.BRACE_R
  );
}
function D(e) {
  return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
}
function K(e, t) {
  return Ae(e.charCodeAt(t)) && _e(e.charCodeAt(t + 1));
}
function Ae(e) {
  return e >= 55296 && e <= 56319;
}
function _e(e) {
  return e >= 56320 && e <= 57343;
}
function S(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0) return a.EOF;
  if (n >= 32 && n <= 126) {
    const i = String.fromCodePoint(n);
    return i === '"' ? `'"'` : `"${i}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function v(e, t, n, i, r) {
  const s = e.line,
    o = 1 + n - e.lineStart;
  return new Ee(t, n, i, s, o, r);
}
function Ze(e, t) {
  const n = e.source.body,
    i = n.length;
  let r = t;
  for (; r < i; ) {
    const s = n.charCodeAt(r);
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++r;
        continue;
      case 10:
        ++r, ++e.line, (e.lineStart = r);
        continue;
      case 13:
        n.charCodeAt(r + 1) === 10 ? (r += 2) : ++r, ++e.line, (e.lineStart = r);
        continue;
      case 35:
        return et(e, r);
      case 33:
        return v(e, a.BANG, r, r + 1);
      case 36:
        return v(e, a.DOLLAR, r, r + 1);
      case 38:
        return v(e, a.AMP, r, r + 1);
      case 40:
        return v(e, a.PAREN_L, r, r + 1);
      case 41:
        return v(e, a.PAREN_R, r, r + 1);
      case 46:
        if (n.charCodeAt(r + 1) === 46 && n.charCodeAt(r + 2) === 46) return v(e, a.SPREAD, r, r + 3);
        break;
      case 58:
        return v(e, a.COLON, r, r + 1);
      case 61:
        return v(e, a.EQUALS, r, r + 1);
      case 64:
        return v(e, a.AT, r, r + 1);
      case 91:
        return v(e, a.BRACKET_L, r, r + 1);
      case 93:
        return v(e, a.BRACKET_R, r, r + 1);
      case 123:
        return v(e, a.BRACE_L, r, r + 1);
      case 124:
        return v(e, a.PIPE, r, r + 1);
      case 125:
        return v(e, a.BRACE_R, r, r + 1);
      case 34:
        return n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 ? at(e, r) : nt(e, r);
    }
    if (j(s) || s === 45) return tt(e, r, s);
    if (me(s)) return ot(e, r);
    throw N(
      e.source,
      r,
      s === 39
        ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
        : D(s) || K(n, r)
          ? `Unexpected character: ${S(e, r)}.`
          : `Invalid character: ${S(e, r)}.`
    );
  }
  return v(e, a.EOF, i, i);
}
function et(e, t) {
  const n = e.source.body,
    i = n.length;
  let r = t + 1;
  for (; r < i; ) {
    const s = n.charCodeAt(r);
    if (s === 10 || s === 13) break;
    if (D(s)) ++r;
    else if (K(n, r)) r += 2;
    else break;
  }
  return v(e, a.COMMENT, t, r, n.slice(t + 1, r));
}
function tt(e, t, n) {
  const i = e.source.body;
  let r = t,
    s = n,
    o = !1;
  if ((s === 45 && (s = i.charCodeAt(++r)), s === 48)) {
    if (((s = i.charCodeAt(++r)), j(s))) throw N(e.source, r, `Invalid number, unexpected digit after 0: ${S(e, r)}.`);
  } else (r = W(e, r, s)), (s = i.charCodeAt(r));
  if (
    (s === 46 && ((o = !0), (s = i.charCodeAt(++r)), (r = W(e, r, s)), (s = i.charCodeAt(r))),
    (s === 69 || s === 101) &&
      ((o = !0),
      (s = i.charCodeAt(++r)),
      (s === 43 || s === 45) && (s = i.charCodeAt(++r)),
      (r = W(e, r, s)),
      (s = i.charCodeAt(r))),
    s === 46 || me(s))
  )
    throw N(e.source, r, `Invalid number, expected digit but got: ${S(e, r)}.`);
  return v(e, o ? a.FLOAT : a.INT, t, r, i.slice(t, r));
}
function W(e, t, n) {
  if (!j(n)) throw N(e.source, t, `Invalid number, expected digit but got: ${S(e, t)}.`);
  const i = e.source.body;
  let r = t + 1;
  for (; j(i.charCodeAt(r)); ) ++r;
  return r;
}
function nt(e, t) {
  const n = e.source.body,
    i = n.length;
  let r = t + 1,
    s = r,
    o = "";
  for (; r < i; ) {
    const c = n.charCodeAt(r);
    if (c === 34) return (o += n.slice(s, r)), v(e, a.STRING, t, r + 1, o);
    if (c === 92) {
      o += n.slice(s, r);
      const u = n.charCodeAt(r + 1) === 117 ? (n.charCodeAt(r + 2) === 123 ? rt(e, r) : it(e, r)) : st(e, r);
      (o += u.value), (r += u.size), (s = r);
      continue;
    }
    if (c === 10 || c === 13) break;
    if (D(c)) ++r;
    else if (K(n, r)) r += 2;
    else throw N(e.source, r, `Invalid character within String: ${S(e, r)}.`);
  }
  throw N(e.source, r, "Unterminated string.");
}
function rt(e, t) {
  const n = e.source.body;
  let i = 0,
    r = 3;
  for (; r < 12; ) {
    const s = n.charCodeAt(t + r++);
    if (s === 125) {
      if (r < 5 || !D(i)) break;
      return { value: String.fromCodePoint(i), size: r };
    }
    if (((i = (i << 4) | L(s)), i < 0)) break;
  }
  throw N(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + r)}".`);
}
function it(e, t) {
  const n = e.source.body,
    i = ue(n, t + 2);
  if (D(i)) return { value: String.fromCodePoint(i), size: 6 };
  if (Ae(i) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const r = ue(n, t + 8);
    if (_e(r)) return { value: String.fromCodePoint(i, r), size: 12 };
  }
  throw N(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function ue(e, t) {
  return (
    (L(e.charCodeAt(t)) << 12) | (L(e.charCodeAt(t + 1)) << 8) | (L(e.charCodeAt(t + 2)) << 4) | L(e.charCodeAt(t + 3))
  );
}
function L(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function st(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: "\\", size: 2 };
    case 47:
      return { value: "/", size: 2 };
    case 98:
      return { value: "\b", size: 2 };
    case 102:
      return { value: "\f", size: 2 };
    case 110:
      return {
        value: `
`,
        size: 2,
      };
    case 114:
      return { value: "\r", size: 2 };
    case 116:
      return { value: "	", size: 2 };
  }
  throw N(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function at(e, t) {
  const n = e.source.body,
    i = n.length;
  let r = e.lineStart,
    s = t + 3,
    o = s,
    c = "";
  const u = [];
  for (; s < i; ) {
    const h = n.charCodeAt(s);
    if (h === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
      (c += n.slice(o, s)), u.push(c);
      const p = v(
        e,
        a.BLOCK_STRING,
        t,
        s + 3,
        Pe(u).join(`
`)
      );
      return (e.line += u.length - 1), (e.lineStart = r), p;
    }
    if (h === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
      (c += n.slice(o, s)), (o = s + 1), (s += 4);
      continue;
    }
    if (h === 10 || h === 13) {
      (c += n.slice(o, s)),
        u.push(c),
        h === 13 && n.charCodeAt(s + 1) === 10 ? (s += 2) : ++s,
        (c = ""),
        (o = s),
        (r = s);
      continue;
    }
    if (D(h)) ++s;
    else if (K(n, s)) s += 2;
    else throw N(e.source, s, `Invalid character within String: ${S(e, s)}.`);
  }
  throw N(e.source, s, "Unterminated string.");
}
function ot(e, t) {
  const n = e.source.body,
    i = n.length;
  let r = t + 1;
  for (; r < i; ) {
    const s = n.charCodeAt(r);
    if (Me(s)) ++r;
    else break;
  }
  return v(e, a.NAME, t, r, n.slice(t, r));
}
const ct = globalThis.process && !0,
  ut = ct
    ? function (t, n) {
        return t instanceof n;
      }
    : function (t, n) {
        if (t instanceof n) return !0;
        if (typeof t == "object" && t !== null) {
          var i;
          const r = n.prototype[Symbol.toStringTag],
            s =
              Symbol.toStringTag in t
                ? t[Symbol.toStringTag]
                : (i = t.constructor) === null || i === void 0
                  ? void 0
                  : i.name;
          if (r === s) {
            const o = ve(t);
            throw new Error(`Cannot use ${r} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }
        return !1;
      };
class Oe {
  constructor(t, n = "GraphQL request", i = { line: 1, column: 1 }) {
    typeof t == "string" || z(!1, `Body must be a string. Received: ${ve(t)}.`),
      (this.body = t),
      (this.name = n),
      (this.locationOffset = i),
      this.locationOffset.line > 0 || z(!1, "line in locationOffset is 1-indexed and must be positive."),
      this.locationOffset.column > 0 || z(!1, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function lt(e) {
  return ut(e, Oe);
}
function ht(e, t) {
  const n = new dt(e, t),
    i = n.parseDocument();
  return Object.defineProperty(i, "tokenCount", { enumerable: !1, value: n.tokenCount }), i;
}
class dt {
  constructor(t, n = {}) {
    const i = lt(t) ? t : new Oe(t);
    (this._lexer = new He(i)), (this._options = n), (this._tokenCounter = 0);
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  parseName() {
    const t = this.expectToken(a.NAME);
    return this.node(t, { kind: l.NAME, value: t.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: l.DOCUMENT,
      definitions: this.many(a.SOF, this.parseDefinition, a.EOF),
    });
  }
  parseDefinition() {
    if (this.peek(a.BRACE_L)) return this.parseOperationDefinition();
    const t = this.peekDescription(),
      n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === a.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw N(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(a.BRACE_L))
      return this.node(t, {
        kind: l.OPERATION_DEFINITION,
        operation: U.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    const n = this.parseOperationType();
    let i;
    return (
      this.peek(a.NAME) && (i = this.parseName()),
      this.node(t, {
        kind: l.OPERATION_DEFINITION,
        operation: n,
        name: i,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet(),
      })
    );
  }
  parseOperationType() {
    const t = this.expectToken(a.NAME);
    switch (t.value) {
      case "query":
        return U.QUERY;
      case "mutation":
        return U.MUTATION;
      case "subscription":
        return U.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(a.PAREN_L, this.parseVariableDefinition, a.PAREN_R);
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: l.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(a.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(a.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives(),
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(a.DOLLAR), this.node(t, { kind: l.VARIABLE, name: this.parseName() });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: l.SELECTION_SET,
      selections: this.many(a.BRACE_L, this.parseSelection, a.BRACE_R),
    });
  }
  parseSelection() {
    return this.peek(a.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token,
      n = this.parseName();
    let i, r;
    return (
      this.expectOptionalToken(a.COLON) ? ((i = n), (r = this.parseName())) : (r = n),
      this.node(t, {
        kind: l.FIELD,
        alias: i,
        name: r,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(a.BRACE_L) ? this.parseSelectionSet() : void 0,
      })
    );
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(a.PAREN_L, n, a.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token,
      i = this.parseName();
    return this.expectToken(a.COLON), this.node(n, { kind: l.ARGUMENT, name: i, value: this.parseValueLiteral(t) });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(a.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(a.NAME)
      ? this.node(t, { kind: l.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1) })
      : this.node(t, {
          kind: l.INLINE_FRAGMENT,
          typeCondition: n ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        });
  }
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return (
      this.expectKeyword("fragment"),
      this._options.allowLegacyFragmentVariables === !0
        ? this.node(t, {
            kind: l.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
        : this.node(t, {
            kind: l.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
    );
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on") throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case a.BRACKET_L:
        return this.parseList(t);
      case a.BRACE_L:
        return this.parseObject(t);
      case a.INT:
        return this.advanceLexer(), this.node(n, { kind: l.INT, value: n.value });
      case a.FLOAT:
        return this.advanceLexer(), this.node(n, { kind: l.FLOAT, value: n.value });
      case a.STRING:
      case a.BLOCK_STRING:
        return this.parseStringLiteral();
      case a.NAME:
        switch ((this.advanceLexer(), n.value)) {
          case "true":
            return this.node(n, { kind: l.BOOLEAN, value: !0 });
          case "false":
            return this.node(n, { kind: l.BOOLEAN, value: !1 });
          case "null":
            return this.node(n, { kind: l.NULL });
          default:
            return this.node(n, { kind: l.ENUM, value: n.value });
        }
      case a.DOLLAR:
        if (t)
          if ((this.expectToken(a.DOLLAR), this._lexer.token.kind === a.NAME)) {
            const i = this._lexer.token.value;
            throw N(this._lexer.source, n.start, `Unexpected variable "$${i}" in constant value.`);
          } else throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this.advanceLexer(), this.node(t, { kind: l.STRING, value: t.value, block: t.kind === a.BLOCK_STRING });
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, { kind: l.LIST, values: this.any(a.BRACKET_L, n, a.BRACKET_R) });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, { kind: l.OBJECT, fields: this.any(a.BRACE_L, n, a.BRACE_R) });
  }
  parseObjectField(t) {
    const n = this._lexer.token,
      i = this.parseName();
    return this.expectToken(a.COLON), this.node(n, { kind: l.OBJECT_FIELD, name: i, value: this.parseValueLiteral(t) });
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek(a.AT); ) n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return (
      this.expectToken(a.AT),
      this.node(n, { kind: l.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(t) })
    );
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(a.BRACKET_L)) {
      const i = this.parseTypeReference();
      this.expectToken(a.BRACKET_R), (n = this.node(t, { kind: l.LIST_TYPE, type: i }));
    } else n = this.parseNamedType();
    return this.expectOptionalToken(a.BANG) ? this.node(t, { kind: l.NON_NULL_TYPE, type: n }) : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, { kind: l.NAMED_TYPE, name: this.parseName() });
  }
  peekDescription() {
    return this.peek(a.STRING) || this.peek(a.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("schema");
    const i = this.parseConstDirectives(),
      r = this.many(a.BRACE_L, this.parseOperationTypeDefinition, a.BRACE_R);
    return this.node(t, { kind: l.SCHEMA_DEFINITION, description: n, directives: i, operationTypes: r });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseOperationType();
    this.expectToken(a.COLON);
    const i = this.parseNamedType();
    return this.node(t, { kind: l.OPERATION_TYPE_DEFINITION, operation: n, type: i });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("scalar");
    const i = this.parseName(),
      r = this.parseConstDirectives();
    return this.node(t, { kind: l.SCALAR_TYPE_DEFINITION, description: n, name: i, directives: r });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("type");
    const i = this.parseName(),
      r = this.parseImplementsInterfaces(),
      s = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: l.OBJECT_TYPE_DEFINITION,
      description: n,
      name: i,
      interfaces: r,
      directives: s,
      fields: o,
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(a.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(a.BRACE_L, this.parseFieldDefinition, a.BRACE_R);
  }
  parseFieldDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      i = this.parseName(),
      r = this.parseArgumentDefs();
    this.expectToken(a.COLON);
    const s = this.parseTypeReference(),
      o = this.parseConstDirectives();
    return this.node(t, { kind: l.FIELD_DEFINITION, description: n, name: i, arguments: r, type: s, directives: o });
  }
  parseArgumentDefs() {
    return this.optionalMany(a.PAREN_L, this.parseInputValueDef, a.PAREN_R);
  }
  parseInputValueDef() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      i = this.parseName();
    this.expectToken(a.COLON);
    const r = this.parseTypeReference();
    let s;
    this.expectOptionalToken(a.EQUALS) && (s = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(t, {
      kind: l.INPUT_VALUE_DEFINITION,
      description: n,
      name: i,
      type: r,
      defaultValue: s,
      directives: o,
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("interface");
    const i = this.parseName(),
      r = this.parseImplementsInterfaces(),
      s = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: l.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: i,
      interfaces: r,
      directives: s,
      fields: o,
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("union");
    const i = this.parseName(),
      r = this.parseConstDirectives(),
      s = this.parseUnionMemberTypes();
    return this.node(t, { kind: l.UNION_TYPE_DEFINITION, description: n, name: i, directives: r, types: s });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(a.EQUALS) ? this.delimitedMany(a.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("enum");
    const i = this.parseName(),
      r = this.parseConstDirectives(),
      s = this.parseEnumValuesDefinition();
    return this.node(t, { kind: l.ENUM_TYPE_DEFINITION, description: n, name: i, directives: r, values: s });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(a.BRACE_L, this.parseEnumValueDefinition, a.BRACE_R);
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      i = this.parseEnumValueName(),
      r = this.parseConstDirectives();
    return this.node(t, { kind: l.ENUM_VALUE_DEFINITION, description: n, name: i, directives: r });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw N(
        this._lexer.source,
        this._lexer.token.start,
        `${B(this._lexer.token)} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("input");
    const i = this.parseName(),
      r = this.parseConstDirectives(),
      s = this.parseInputFieldsDefinition();
    return this.node(t, { kind: l.INPUT_OBJECT_TYPE_DEFINITION, description: n, name: i, directives: r, fields: s });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(a.BRACE_L, this.parseInputValueDef, a.BRACE_R);
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === a.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(),
      i = this.optionalMany(a.BRACE_L, this.parseOperationTypeDefinition, a.BRACE_R);
    if (n.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.SCHEMA_EXTENSION, directives: n, operationTypes: i });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(),
      i = this.parseConstDirectives();
    if (i.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.SCALAR_TYPE_EXTENSION, name: n, directives: i });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(),
      i = this.parseImplementsInterfaces(),
      r = this.parseConstDirectives(),
      s = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.OBJECT_TYPE_EXTENSION, name: n, interfaces: i, directives: r, fields: s });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(),
      i = this.parseImplementsInterfaces(),
      r = this.parseConstDirectives(),
      s = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.INTERFACE_TYPE_EXTENSION, name: n, interfaces: i, directives: r, fields: s });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(),
      i = this.parseConstDirectives(),
      r = this.parseUnionMemberTypes();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.UNION_TYPE_EXTENSION, name: n, directives: i, types: r });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(),
      i = this.parseConstDirectives(),
      r = this.parseEnumValuesDefinition();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.ENUM_TYPE_EXTENSION, name: n, directives: i, values: r });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(),
      i = this.parseConstDirectives(),
      r = this.parseInputFieldsDefinition();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: l.INPUT_OBJECT_TYPE_EXTENSION, name: n, directives: i, fields: r });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(a.AT);
    const i = this.parseName(),
      r = this.parseArgumentDefs(),
      s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(t, {
      kind: l.DIRECTIVE_DEFINITION,
      description: n,
      name: i,
      arguments: r,
      repeatable: s,
      locations: o,
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(a.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token,
      n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(Z, n.value)) return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    return this._options.noLocation !== !0 && (n.loc = new Ue(t, this._lexer.lastToken, this._lexer.source)), n;
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t) return this.advanceLexer(), n;
    throw N(this._lexer.source, n.start, `Expected ${Ie(t)}, found ${B(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === a.NAME && n.value === t) this.advanceLexer();
    else throw N(this._lexer.source, n.start, `Expected "${t}", found ${B(n)}.`);
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === a.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  unexpected(t) {
    const n = t ?? this._lexer.token;
    return N(this._lexer.source, n.start, `Unexpected ${B(n)}.`);
  }
  any(t, n, i) {
    this.expectToken(t);
    const r = [];
    for (; !this.expectOptionalToken(i); ) r.push(n.call(this));
    return r;
  }
  optionalMany(t, n, i) {
    if (this.expectOptionalToken(t)) {
      const r = [];
      do r.push(n.call(this));
      while (!this.expectOptionalToken(i));
      return r;
    }
    return [];
  }
  many(t, n, i) {
    this.expectToken(t);
    const r = [];
    do r.push(n.call(this));
    while (!this.expectOptionalToken(i));
    return r;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const i = [];
    do i.push(n.call(this));
    while (this.expectOptionalToken(t));
    return i;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options,
      n = this._lexer.advance();
    if (n.kind !== a.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t))
      throw N(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`);
  }
}
function B(e) {
  const t = e.value;
  return Ie(e.kind) + (t != null ? ` "${t}"` : "");
}
function Ie(e) {
  return Xe(e) ? `"${e}"` : e;
}
var $ = new Map(),
  ee = new Map(),
  Ce = !0,
  G = !1;
function Se(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function pt(e) {
  return Se(e.source.body.substring(e.start, e.end));
}
function ft(e) {
  var t = new Set(),
    n = [];
  return (
    e.definitions.forEach(function (i) {
      if (i.kind === "FragmentDefinition") {
        var r = i.name.value,
          s = pt(i.loc),
          o = ee.get(r);
        o && !o.has(s)
          ? Ce &&
            console.warn(
              "Warning: fragment with name " +
                r +
                ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`
            )
          : o || ee.set(r, (o = new Set())),
          o.add(s),
          t.has(s) || (t.add(s), n.push(i));
      } else n.push(i);
    }),
    T(T({}, e), { definitions: n })
  );
}
function Et(e) {
  var t = new Set(e.definitions);
  t.forEach(function (i) {
    i.loc && delete i.loc,
      Object.keys(i).forEach(function (r) {
        var s = i[r];
        s && typeof s == "object" && t.add(s);
      });
  });
  var n = e.loc;
  return n && (delete n.startToken, delete n.endToken), e;
}
function mt(e) {
  var t = Se(e);
  if (!$.has(t)) {
    var n = ht(e, { experimentalFragmentVariables: G, allowLegacyFragmentVariables: G });
    if (!n || n.kind !== "Document") throw new Error("Not a valid GraphQL document.");
    $.set(t, Et(ft(n)));
  }
  return $.get(t);
}
function O(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  typeof e == "string" && (e = [e]);
  var i = e[0];
  return (
    t.forEach(function (r, s) {
      r && r.kind === "Document" ? (i += r.loc.source.body) : (i += r), (i += e[s + 1]);
    }),
    mt(i)
  );
}
function vt() {
  $.clear(), ee.clear();
}
function gt() {
  Ce = !1;
}
function yt() {
  G = !0;
}
function xt() {
  G = !1;
}
var R = {
  gql: O,
  resetCaches: vt,
  disableFragmentWarnings: gt,
  enableExperimentalFragmentVariables: yt,
  disableExperimentalFragmentVariables: xt,
};
(function (e) {
  (e.gql = R.gql),
    (e.resetCaches = R.resetCaches),
    (e.disableFragmentWarnings = R.disableFragmentWarnings),
    (e.enableExperimentalFragmentVariables = R.enableExperimentalFragmentVariables),
    (e.disableExperimentalFragmentVariables = R.disableExperimentalFragmentVariables);
})(O || (O = {}));
O.default = O;
function ie(e) {
  var t = x.useContext(ge()),
    n = e || t.client;
  return I(!!n, 58), n;
}
var le = !1,
  Nt = "useSyncExternalStore",
  kt = Be[Nt],
  Tt =
    kt ||
    function (e, t, n) {
      var i = t();
      globalThis.__DEV__ !== !1 && !le && i !== t() && ((le = !0), globalThis.__DEV__ !== !1 && I.error(68));
      var r = x.useState({ inst: { value: i, getSnapshot: t } }),
        s = r[0].inst,
        o = r[1];
      return (
        Ve
          ? x.useLayoutEffect(
              function () {
                Object.assign(s, { value: i, getSnapshot: t }), J(s) && o({ inst: s });
              },
              [e, i, t]
            )
          : Object.assign(s, { value: i, getSnapshot: t }),
        x.useEffect(
          function () {
            return (
              J(s) && o({ inst: s }),
              e(function () {
                J(s) && o({ inst: s });
              })
            );
          },
          [e]
        ),
        i
      );
    };
function J(e) {
  var t = e.value,
    n = e.getSnapshot;
  try {
    return t !== n();
  } catch {
    return !0;
  }
}
var _;
(function (e) {
  (e[(e.Query = 0)] = "Query"), (e[(e.Mutation = 1)] = "Mutation"), (e[(e.Subscription = 2)] = "Subscription");
})(_ || (_ = {}));
var C;
function he(e) {
  var t;
  switch (e) {
    case _.Query:
      t = "Query";
      break;
    case _.Mutation:
      t = "Mutation";
      break;
    case _.Subscription:
      t = "Subscription";
      break;
  }
  return t;
}
function be(e) {
  C || (C = new $e(Qe.parser || 1e3));
  var t = C.get(e);
  if (t) return t;
  var n, i, r;
  I(!!e && !!e.kind, 70, e);
  for (var s = [], o = [], c = [], u = [], h = 0, p = e.definitions; h < p.length; h++) {
    var d = p[h];
    if (d.kind === "FragmentDefinition") {
      s.push(d);
      continue;
    }
    if (d.kind === "OperationDefinition")
      switch (d.operation) {
        case "query":
          o.push(d);
          break;
        case "mutation":
          c.push(d);
          break;
        case "subscription":
          u.push(d);
          break;
      }
  }
  I(!s.length || o.length || c.length || u.length, 71),
    I(o.length + c.length + u.length <= 1, 72, e, o.length, u.length, c.length),
    (i = o.length ? _.Query : _.Mutation),
    !o.length && !c.length && (i = _.Subscription);
  var f = o.length ? o : c.length ? c : u;
  I(f.length === 1, 73, e, f.length);
  var m = f[0];
  (n = m.variableDefinitions || []), m.name && m.name.kind === "Name" ? (r = m.name.value) : (r = "data");
  var E = { name: r, type: i, variables: n };
  return C.set(e, E), E;
}
be.resetCache = function () {
  C = void 0;
};
globalThis.__DEV__ !== !1 &&
  je("parser", function () {
    return C ? C.size : 0;
  });
function De(e, t) {
  var n = be(e),
    i = he(t),
    r = he(n.type);
  I(n.type === t, 74, i, i, r);
}
var At = Ge ? x.useLayoutEffect : x.useEffect,
  _t = Symbol.for("apollo.hook.wrappers");
function Ot(e, t, n) {
  var i = n.queryManager,
    r = i && i[_t],
    s = r && r[e];
  return s ? s(t) : t;
}
var It = Object.prototype.hasOwnProperty;
function de() {}
var Q = Symbol();
function Ct(e, t) {
  return t === void 0 && (t = Object.create(null)), Ot("useQuery", St, ie(t && t.client))(e, t);
}
function St(e, t) {
  var n = Dt(e, t),
    i = n.result,
    r = n.obsQueryFields;
  return x.useMemo(
    function () {
      return T(T({}, i), r);
    },
    [i, r]
  );
}
function bt(e, t, n, i, r) {
  function s(d) {
    var f;
    De(t, _.Query);
    var m = {
      client: e,
      query: t,
      observable: (i && i.getSSRObservable(r())) || e.watchQuery(Re(void 0, e, n, r())),
      resultData: {
        previousData: (f = d == null ? void 0 : d.resultData.current) === null || f === void 0 ? void 0 : f.data,
      },
    };
    return m;
  }
  var o = x.useState(s),
    c = o[0],
    u = o[1];
  function h(d) {
    var f, m;
    Object.assign(c.observable, ((f = {}), (f[Q] = d), f));
    var E = c.resultData;
    u(
      T(T({}, c), {
        query: d.query,
        resultData: Object.assign(E, {
          previousData: ((m = E.current) === null || m === void 0 ? void 0 : m.data) || E.previousData,
          current: void 0,
        }),
      })
    );
  }
  if (e !== c.client || t !== c.query) {
    var p = s(c);
    return u(p), [p, h];
  }
  return [c, h];
}
function Dt(e, t) {
  var n = ie(t.client),
    i = x.useContext(ge()).renderPromises,
    r = !!i,
    s = n.disableNetworkFetches,
    o = t.ssr !== !1 && !t.skip,
    c = t.partialRefetch,
    u = Ft(n, e, t, r),
    h = bt(n, e, t, i, u),
    p = h[0],
    d = p.observable,
    f = p.resultData,
    m = h[1],
    E = u(d);
  wt(f, d, n, t, E);
  var k = x.useMemo(
    function () {
      return Bt(d);
    },
    [d]
  );
  Lt(d, i, o);
  var A = Rt(f, d, n, t, E, s, c, r, { onCompleted: t.onCompleted || de, onError: t.onError || de });
  return { result: A, obsQueryFields: k, observable: d, resultData: f, client: n, onQueryExecuted: m };
}
function Rt(e, t, n, i, r, s, o, c, u) {
  var h = x.useRef(u);
  x.useEffect(function () {
    h.current = u;
  });
  var p = (c || s) && i.ssr === !1 && !i.skip ? we : i.skip || r.fetchPolicy === "standby" ? Fe : void 0,
    d = e.previousData,
    f = x.useMemo(
      function () {
        return p && Le(p, d, t, n);
      },
      [n, t, p, d]
    );
  return Tt(
    x.useCallback(
      function (m) {
        if (c) return function () {};
        var E = function () {
            var g = e.current,
              y = t.getCurrentResult();
            (g && g.loading === y.loading && g.networkStatus === y.networkStatus && w(g.data, y.data)) ||
              te(y, e, t, n, o, m, h.current);
          },
          k = function (g) {
            if ((A.current.unsubscribe(), (A.current = t.resubscribeAfterError(E, k)), !It.call(g, "graphQLErrors")))
              throw g;
            var y = e.current;
            (!y || (y && y.loading) || !w(g, y.error)) &&
              te({ data: y && y.data, error: g, loading: !1, networkStatus: F.error }, e, t, n, o, m, h.current);
          },
          A = { current: t.subscribe(E, k) };
        return function () {
          setTimeout(function () {
            return A.current.unsubscribe();
          });
        };
      },
      [s, c, t, e, o, n]
    ),
    function () {
      return f || pe(e, t, h.current, o, n);
    },
    function () {
      return f || pe(e, t, h.current, o, n);
    }
  );
}
function Lt(e, t, n) {
  t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e));
}
function wt(e, t, n, i, r) {
  var s;
  t[Q] &&
    !w(t[Q], r) &&
    (t.reobserve(Re(t, n, i, r)),
    (e.previousData = ((s = e.current) === null || s === void 0 ? void 0 : s.data) || e.previousData),
    (e.current = void 0)),
    (t[Q] = r);
}
function Ft(e, t, n, i) {
  n === void 0 && (n = {});
  var r = n.skip;
  n.ssr, n.onCompleted, n.onError;
  var s = n.defaultOptions,
    o = ye(n, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
  return function (c) {
    var u = Object.assign(o, { query: t });
    return (
      i &&
        (u.fetchPolicy === "network-only" || u.fetchPolicy === "cache-and-network") &&
        (u.fetchPolicy = "cache-first"),
      u.variables || (u.variables = {}),
      r
        ? ((u.initialFetchPolicy = u.initialFetchPolicy || u.fetchPolicy || fe(s, e.defaultOptions)),
          (u.fetchPolicy = "standby"))
        : u.fetchPolicy ||
          (u.fetchPolicy = (c == null ? void 0 : c.options.initialFetchPolicy) || fe(s, e.defaultOptions)),
      u
    );
  };
}
function Re(e, t, n, i) {
  var r = [],
    s = t.defaultOptions.watchQuery;
  return s && r.push(s), n.defaultOptions && r.push(n.defaultOptions), r.push(Ke(e && e.options, i)), r.reduce(Ne);
}
function te(e, t, n, i, r, s, o) {
  var c = t.current;
  c && c.data && (t.previousData = c.data),
    !e.error && ke(e.errors) && (e.error = new ne({ graphQLErrors: e.errors })),
    (t.current = Le(Ut(e, n, r), t.previousData, n, i)),
    s(),
    Pt(e, c == null ? void 0 : c.networkStatus, o);
}
function Pt(e, t, n) {
  if (!e.loading) {
    var i = Mt(e);
    Promise.resolve()
      .then(function () {
        i ? n.onError(i) : e.data && t !== e.networkStatus && e.networkStatus === F.ready && n.onCompleted(e.data);
      })
      .catch(function (r) {
        globalThis.__DEV__ !== !1 && I.warn(r);
      });
  }
}
function pe(e, t, n, i, r) {
  return e.current || te(t.getCurrentResult(), e, t, r, i, function () {}, n), e.current;
}
function fe(e, t) {
  var n;
  return (
    (e == null ? void 0 : e.fetchPolicy) ||
    ((n = t == null ? void 0 : t.watchQuery) === null || n === void 0 ? void 0 : n.fetchPolicy) ||
    "cache-first"
  );
}
function Mt(e) {
  return ke(e.errors) ? new ne({ graphQLErrors: e.errors }) : e.error;
}
function Le(e, t, n, i) {
  var r = e.data;
  e.partial;
  var s = ye(e, ["data", "partial"]),
    o = T(T({ data: r }, s), {
      client: i,
      observable: n,
      variables: n.variables,
      called: e !== we && e !== Fe,
      previousData: t,
    });
  return o;
}
function Ut(e, t, n) {
  return e.partial &&
    n &&
    !e.loading &&
    (!e.data || Object.keys(e.data).length === 0) &&
    t.options.fetchPolicy !== "cache-only"
    ? (t.refetch(), T(T({}, e), { loading: !0, networkStatus: F.refetch }))
    : e;
}
var we = xe({ loading: !0, data: void 0, error: void 0, networkStatus: F.loading }),
  Fe = xe({ loading: !1, data: void 0, error: void 0, networkStatus: F.ready });
function Bt(e) {
  return {
    refetch: e.refetch.bind(e),
    reobserve: e.reobserve.bind(e),
    fetchMore: e.fetchMore.bind(e),
    updateQuery: e.updateQuery.bind(e),
    startPolling: e.startPolling.bind(e),
    stopPolling: e.stopPolling.bind(e),
    subscribeToMore: e.subscribeToMore.bind(e),
  };
}
function H(e, t) {
  var n = ie(t == null ? void 0 : t.client);
  De(e, _.Mutation);
  var i = x.useState({ called: !1, loading: !1, client: n }),
    r = i[0],
    s = i[1],
    o = x.useRef({ result: r, mutationId: 0, isMounted: !0, client: n, mutation: e, options: t });
  At(function () {
    Object.assign(o.current, { client: n, options: t, mutation: e });
  });
  var c = x.useCallback(function (h) {
      h === void 0 && (h = {});
      var p = o.current,
        d = p.options,
        f = p.mutation,
        m = T(T({}, d), { mutation: f }),
        E = h.client || o.current.client;
      !o.current.result.loading &&
        !m.ignoreResults &&
        o.current.isMounted &&
        s((o.current.result = { loading: !0, error: void 0, data: void 0, called: !0, client: E }));
      var k = ++o.current.mutationId,
        A = Ne(m, h);
      return E.mutate(A).then(
        function (g) {
          var y,
            b,
            P = g.data,
            q = g.errors,
            M = q && q.length > 0 ? new ne({ graphQLErrors: q }) : void 0,
            se = h.onError || ((y = o.current.options) === null || y === void 0 ? void 0 : y.onError);
          if ((M && se && se(M, A), k === o.current.mutationId && !A.ignoreResults)) {
            var ae = { called: !0, loading: !1, data: P, error: M, client: E };
            o.current.isMounted && !w(o.current.result, ae) && s((o.current.result = ae));
          }
          var Y = h.onCompleted || ((b = o.current.options) === null || b === void 0 ? void 0 : b.onCompleted);
          return M || Y == null || Y(g.data, A), g;
        },
        function (g) {
          var y;
          if (k === o.current.mutationId && o.current.isMounted) {
            var b = { loading: !1, error: g, data: void 0, called: !0, client: E };
            w(o.current.result, b) || s((o.current.result = b));
          }
          var P = h.onError || ((y = o.current.options) === null || y === void 0 ? void 0 : y.onError);
          if (P) return P(g, A), { data: void 0, errors: g };
          throw g;
        }
      );
    }, []),
    u = x.useCallback(function () {
      if (o.current.isMounted) {
        var h = { called: !1, loading: !1, client: o.current.client };
        Object.assign(o.current, { mutationId: 0, result: h }), s(h);
      }
    }, []);
  return (
    x.useEffect(function () {
      var h = o.current;
      return (
        (h.isMounted = !0),
        function () {
          h.isMounted = !1;
        }
      );
    }, []),
    [c, T({ reset: u }, r)]
  );
}
const V = O`
  query GetAllFlashcards {
    allFlashcards {
      id
      kanji
      reading
      meaning
      status
    }
  }
`,
  Vt = O`
  mutation CreateFlashcard(
    $id: String!
    $kanji: String
    $reading: String!
    $meaning: String!
    $status: FlashcardStatus
  ) {
    createFlashcard(id: $id, kanji: $kanji, reading: $reading, meaning: $meaning, status: $status) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`,
  $t = O`
  mutation UpdateFlashcard($id: String!, $kanji: String, $reading: String, $meaning: String, $status: FlashcardStatus) {
    updateFlashcard(id: $id, kanji: $kanji, reading: $reading, meaning: $meaning, status: $status) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`,
  Qt = O`
  mutation DeleteFlashcard($id: String!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`;
function Gt() {
  const { data: e, loading: t, error: n, refetch: i } = Ct(V),
    [r] = H(Vt, { refetchQueries: [{ query: V }] }),
    [s] = H($t, { refetchQueries: [{ query: V }] }),
    [o] = H(Qt, { refetchQueries: [{ query: V }] }),
    c = async (p) => {
      try {
        await r({ variables: p });
      } catch (d) {
        throw (console.error("Error creating flashcard:", d), d);
      }
    },
    u = async (p) => {
      const { id: d, ...f } = p;
      try {
        const { data: m } = await s({ variables: { id: d, ...f } });
        return m.updateFlashcard;
      } catch (m) {
        throw (console.error("Error updating flashcard:", m), m);
      }
    },
    h = async (p) => {
      try {
        await o({ variables: { id: p } });
      } catch (d) {
        throw (console.error("Error deleting flashcard:", d), d);
      }
    };
  return {
    flashcards: (e == null ? void 0 : e.allFlashcards) ?? [],
    loading: t,
    error: n,
    refetchFlashcards: i,
    handleCreateFlashcard: c,
    handleUpdateFlashcard: u,
    handleRemoveFlashcard: h,
  };
}
export { Gt as u };
