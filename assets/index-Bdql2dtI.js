function Jc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r) if (l !== "default" && !(l in e)) {
                const o = Object.getOwnPropertyDescriptor(r, l);
                o && Object.defineProperty(e, l, o.get ? o : {enumerable: !0, get: () => r[l]})
            }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
}

(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {childList: !0, subtree: !0});

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();

function Zc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var xs = {exports: {}}, vl = {}, Es = {exports: {}}, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir = Symbol.for("react.element"), qc = Symbol.for("react.portal"), bc = Symbol.for("react.fragment"),
    ef = Symbol.for("react.strict_mode"), tf = Symbol.for("react.profiler"), nf = Symbol.for("react.provider"),
    rf = Symbol.for("react.context"), lf = Symbol.for("react.forward_ref"), of = Symbol.for("react.suspense"),
    uf = Symbol.for("react.memo"), sf = Symbol.for("react.lazy"), ou = Symbol.iterator;

function af(e) {
    return e === null || typeof e != "object" ? null : (e = ou && e[ou] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Cs = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, _s = Object.assign, Ps = {};

function pn(e, t, n) {
    this.props = e, this.context = t, this.refs = Ps, this.updater = n || Cs
}

pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
pn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ns() {
}

Ns.prototype = pn.prototype;

function si(e, t, n) {
    this.props = e, this.context = t, this.refs = Ps, this.updater = n || Cs
}

var ai = si.prototype = new Ns;
ai.constructor = si;
_s(ai, pn.prototype);
ai.isPureReactComponent = !0;
var iu = Array.isArray, js = Object.prototype.hasOwnProperty, ci = {current: null},
    Ls = {key: !0, ref: !0, __self: !0, __source: !0};

function Rs(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) js.call(t, r) && !Ls.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n; else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
        l.children = s
    }
    if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {$$typeof: ir, type: e, key: o, ref: i, props: l, _owner: ci.current}
}

function cf(e, t) {
    return {$$typeof: ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function fi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ir
}

function ff(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var uu = /\/+/g;

function Fl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ff("" + e.key) : t.toString(36)
}

function Tr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0; else switch (o) {
        case"string":
        case"number":
            i = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case ir:
                case qc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + Fl(i, 0) : r, iu(l) ? (n = "", e != null && (n = e.replace(uu, "$&/") + "/"), Tr(l, t, n, "", function (a) {
        return a
    })) : l != null && (fi(l) && (l = cf(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(uu, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", iu(e)) for (var u = 0; u < e.length; u++) {
        o = e[u];
        var s = r + Fl(o, u);
        i += Tr(o, t, n, s, l)
    } else if (s = af(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done;) o = o.value, s = r + Fl(o, u++), i += Tr(o, t, n, s, l); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function hr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Tr(e, r, "", "", function (o) {
        return t.call(n, o, l++)
    }), r
}

function df(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var ae = {current: null}, Or = {transition: null},
    pf = {ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: Or, ReactCurrentOwner: ci};

function zs() {
    throw Error("act(...) is not supported in production builds of React.")
}

T.Children = {
    map: hr, forEach: function (e, t, n) {
        hr(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return hr(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return hr(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!fi(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = pn;
T.Fragment = bc;
T.Profiler = tf;
T.PureComponent = si;
T.StrictMode = ef;
T.Suspense = of;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pf;
T.act = zs;
T.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = _s({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = ci.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (s in t) js.call(t, s) && !Ls.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n; else if (1 < s) {
        u = Array(s);
        for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
        r.children = u
    }
    return {$$typeof: ir, type: e.type, key: l, ref: o, props: r, _owner: i}
};
T.createContext = function (e) {
    return e = {
        $$typeof: rf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: nf, _context: e}, e.Consumer = e
};
T.createElement = Rs;
T.createFactory = function (e) {
    var t = Rs.bind(null, e);
    return t.type = e, t
};
T.createRef = function () {
    return {current: null}
};
T.forwardRef = function (e) {
    return {$$typeof: lf, render: e}
};
T.isValidElement = fi;
T.lazy = function (e) {
    return {$$typeof: sf, _payload: {_status: -1, _result: e}, _init: df}
};
T.memo = function (e, t) {
    return {$$typeof: uf, type: e, compare: t === void 0 ? null : t}
};
T.startTransition = function (e) {
    var t = Or.transition;
    Or.transition = {};
    try {
        e()
    } finally {
        Or.transition = t
    }
};
T.unstable_act = zs;
T.useCallback = function (e, t) {
    return ae.current.useCallback(e, t)
};
T.useContext = function (e) {
    return ae.current.useContext(e)
};
T.useDebugValue = function () {
};
T.useDeferredValue = function (e) {
    return ae.current.useDeferredValue(e)
};
T.useEffect = function (e, t) {
    return ae.current.useEffect(e, t)
};
T.useId = function () {
    return ae.current.useId()
};
T.useImperativeHandle = function (e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
T.useInsertionEffect = function (e, t) {
    return ae.current.useInsertionEffect(e, t)
};
T.useLayoutEffect = function (e, t) {
    return ae.current.useLayoutEffect(e, t)
};
T.useMemo = function (e, t) {
    return ae.current.useMemo(e, t)
};
T.useReducer = function (e, t, n) {
    return ae.current.useReducer(e, t, n)
};
T.useRef = function (e) {
    return ae.current.useRef(e)
};
T.useState = function (e) {
    return ae.current.useState(e)
};
T.useSyncExternalStore = function (e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
T.useTransition = function () {
    return ae.current.useTransition()
};
T.version = "18.3.1";
Es.exports = T;
var k = Es.exports;
const co = Zc(k), hf = Jc({__proto__: null, default: co}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf = k, vf = Symbol.for("react.element"), gf = Symbol.for("react.fragment"),
    yf = Object.prototype.hasOwnProperty, wf = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Sf = {key: !0, ref: !0, __self: !0, __source: !0};

function Ts(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) yf.call(t, r) && !Sf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {$$typeof: vf, type: e, key: o, ref: i, props: l, _owner: wf.current}
}

vl.Fragment = gf;
vl.jsx = Ts;
vl.jsxs = Ts;
xs.exports = vl;
var x = xs.exports, fo = {}, Os = {exports: {}}, Se = {}, Ms = {exports: {}}, Is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(P, R) {
        var z = P.length;
        P.push(R);
        e:for (; 0 < z;) {
            var Q = z - 1 >>> 1, Z = P[Q];
            if (0 < l(Z, R)) P[Q] = R, P[z] = Z, z = Q; else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var R = P[0], z = P.pop();
        if (z !== R) {
            P[0] = z;
            e:for (var Q = 0, Z = P.length, dr = Z >>> 1; Q < dr;) {
                var wt = 2 * (Q + 1) - 1, Dl = P[wt], St = wt + 1, pr = P[St];
                if (0 > l(Dl, z)) St < Z && 0 > l(pr, Dl) ? (P[Q] = pr, P[St] = z, Q = St) : (P[Q] = Dl, P[wt] = z, Q = wt); else if (St < Z && 0 > l(pr, z)) P[Q] = pr, P[St] = z, Q = St; else break e
            }
        }
        return R
    }

    function l(P, R) {
        var z = P.sortIndex - R.sortIndex;
        return z !== 0 ? z : P.id - R.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var i = Date, u = i.now();
        e.unstable_now = function () {
            return i.now() - u
        }
    }
    var s = [], a = [], p = 1, h = null, m = 3, g = !1, y = !1, w = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function d(P) {
        for (var R = n(a); R !== null;) {
            if (R.callback === null) r(a); else if (R.startTime <= P) r(a), R.sortIndex = R.expirationTime, t(s, R); else break;
            R = n(a)
        }
    }

    function v(P) {
        if (w = !1, d(P), !y) if (n(s) !== null) y = !0, Ml(E); else {
            var R = n(a);
            R !== null && Il(v, R.startTime - P)
        }
    }

    function E(P, R) {
        y = !1, w && (w = !1, f(L), L = -1), g = !0;
        var z = m;
        try {
            for (d(R), h = n(s); h !== null && (!(h.expirationTime > R) || P && !je());) {
                var Q = h.callback;
                if (typeof Q == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var Z = Q(h.expirationTime <= R);
                    R = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(s) && r(s), d(R)
                } else r(s);
                h = n(s)
            }
            if (h !== null) var dr = !0; else {
                var wt = n(a);
                wt !== null && Il(v, wt.startTime - R), dr = !1
            }
            return dr
        } finally {
            h = null, m = z, g = !1
        }
    }

    var N = !1, j = null, L = -1, H = 5, O = -1;

    function je() {
        return !(e.unstable_now() - O < H)
    }

    function gn() {
        if (j !== null) {
            var P = e.unstable_now();
            O = P;
            var R = !0;
            try {
                R = j(!0, P)
            } finally {
                R ? yn() : (N = !1, j = null)
            }
        } else N = !1
    }

    var yn;
    if (typeof c == "function") yn = function () {
        c(gn)
    }; else if (typeof MessageChannel < "u") {
        var lu = new MessageChannel, Gc = lu.port2;
        lu.port1.onmessage = gn, yn = function () {
            Gc.postMessage(null)
        }
    } else yn = function () {
        C(gn, 0)
    };

    function Ml(P) {
        j = P, N || (N = !0, yn())
    }

    function Il(P, R) {
        L = C(function () {
            P(e.unstable_now())
        }, R)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (P) {
        P.callback = null
    }, e.unstable_continueExecution = function () {
        y || g || (y = !0, Ml(E))
    }, e.unstable_forceFrameRate = function (P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return m
    }, e.unstable_getFirstCallbackNode = function () {
        return n(s)
    }, e.unstable_next = function (P) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = m
        }
        var z = m;
        m = R;
        try {
            return P()
        } finally {
            m = z
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (P, R) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var z = m;
        m = P;
        try {
            return R()
        } finally {
            m = z
        }
    }, e.unstable_scheduleCallback = function (P, R, z) {
        var Q = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, P) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = z + Z, P = {
            id: p++,
            callback: R,
            priorityLevel: P,
            startTime: z,
            expirationTime: Z,
            sortIndex: -1
        }, z > Q ? (P.sortIndex = z, t(a, P), n(s) === null && P === n(a) && (w ? (f(L), L = -1) : w = !0, Il(v, z - Q))) : (P.sortIndex = Z, t(s, P), y || g || (y = !0, Ml(E))), P
    }, e.unstable_shouldYield = je, e.unstable_wrapCallback = function (P) {
        var R = m;
        return function () {
            var z = m;
            m = R;
            try {
                return P.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
})(Is);
Ms.exports = Is;
var kf = Ms.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf = k, we = kf;

function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var Ds = new Set, An = {};

function Mt(e, t) {
    ln(e, t), ln(e + "Capture", t)
}

function ln(e, t) {
    for (An[e] = t, e = 0; e < t.length; e++) Ds.add(t[e])
}

var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    po = Object.prototype.hasOwnProperty,
    Ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    su = {}, au = {};

function Cf(e) {
    return po.call(au, e) ? !0 : po.call(su, e) ? !1 : Ef.test(e) ? au[e] = !0 : (su[e] = !0, !1)
}

function _f(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Pf(e, t, n, r) {
    if (t === null || typeof t > "u" || _f(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ce(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}

var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    ne[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ne[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ne[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    ne[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ne[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var di = /[\-:]([a-z])/g;

function pi(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(di, pi);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(di, pi);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(di, pi);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function hi(e, t, n, r) {
    var l = ne.hasOwnProperty(t) ? ne[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pf(t, n, l, r) && (n = null), r || l === null ? Cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var Je = xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = Symbol.for("react.element"),
    $t = Symbol.for("react.portal"), Bt = Symbol.for("react.fragment"), mi = Symbol.for("react.strict_mode"),
    ho = Symbol.for("react.profiler"), Fs = Symbol.for("react.provider"), Us = Symbol.for("react.context"),
    vi = Symbol.for("react.forward_ref"), mo = Symbol.for("react.suspense"), vo = Symbol.for("react.suspense_list"),
    gi = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), $s = Symbol.for("react.offscreen"),
    cu = Symbol.iterator;

function wn(e) {
    return e === null || typeof e != "object" ? null : (e = cu && e[cu] || e["@@iterator"], typeof e == "function" ? e : null)
}

var W = Object.assign, Ul;

function Nn(e) {
    if (Ul === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ul = t && t[1] || ""
    }
    return `
` + Ul + e
}

var $l = !1;

function Bl(e, t) {
    if (!e || $l) return "";
    $l = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (a) {
                var r = a
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (a) {
                r = a
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
                if (i !== 1 || u !== 1) do if (i--, u--, 0 > u || l[i] !== o[u]) {
                    var s = `
` + l[i].replace(" at new ", " at ");
                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                } while (1 <= i && 0 <= u);
                break
            }
        }
    } finally {
        $l = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nn(e) : ""
}

function Nf(e) {
    switch (e.tag) {
        case 5:
            return Nn(e.type);
        case 16:
            return Nn("Lazy");
        case 13:
            return Nn("Suspense");
        case 19:
            return Nn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Bl(e.type, !1), e;
        case 11:
            return e = Bl(e.type.render, !1), e;
        case 1:
            return e = Bl(e.type, !0), e;
        default:
            return ""
    }
}

function go(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Bt:
            return "Fragment";
        case $t:
            return "Portal";
        case ho:
            return "Profiler";
        case mi:
            return "StrictMode";
        case mo:
            return "Suspense";
        case vo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Us:
            return (e.displayName || "Context") + ".Consumer";
        case Fs:
            return (e._context.displayName || "Context") + ".Provider";
        case vi:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case gi:
            return t = e.displayName || null, t !== null ? t : go(e.type) || "Memo";
        case qe:
            t = e._payload, e = e._init;
            try {
                return go(e(t))
            } catch {
            }
    }
    return null
}

function jf(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return go(t);
        case 8:
            return t === mi ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function ht(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function Bs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Lf(e) {
    var t = Bs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return l.call(this)
            }, set: function (i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (i) {
                r = "" + i
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function vr(e) {
    e._valueTracker || (e._valueTracker = Lf(e))
}

function As(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Bs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Hr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function yo(e, t) {
    var n = t.checked;
    return W({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function fu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ht(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Ws(e, t) {
    t = t.checked, t != null && hi(e, "checked", t, !1)
}

function wo(e, t) {
    Ws(e, t);
    var n = ht(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? So(e, t.type, n) : t.hasOwnProperty("defaultValue") && So(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function du(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function So(e, t, n) {
    (t !== "number" || Hr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var jn = Array.isArray;

function qt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function ko(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return W({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function pu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(S(92));
            if (jn(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: ht(n)}
}

function Vs(e, t) {
    var n = ht(t.value), r = ht(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function hu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Hs(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function xo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var gr, Qs = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (gr = gr || document.createElement("div"), gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Wn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Tn = {
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
    strokeWidth: !0
}, Rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function (e) {
    Rf.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e]
    })
});

function Ks(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px"
}

function Ys(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, l = Ks(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
    }
}

var zf = W({menuitem: !0}, {
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
    wbr: !0
});

function Eo(e, t) {
    if (t) {
        if (zf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(S(62))
    }
}

function Co(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var _o = null;

function yi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var Po = null, bt = null, en = null;

function mu(e) {
    if (e = ar(e)) {
        if (typeof Po != "function") throw Error(S(280));
        var t = e.stateNode;
        t && (t = kl(t), Po(e.stateNode, e.type, t))
    }
}

function Xs(e) {
    bt ? en ? en.push(e) : en = [e] : bt = e
}

function Gs() {
    if (bt) {
        var e = bt, t = en;
        if (en = bt = null, mu(e), t) for (e = 0; e < t.length; e++) mu(t[e])
    }
}

function Js(e, t) {
    return e(t)
}

function Zs() {
}

var Al = !1;

function qs(e, t, n) {
    if (Al) return e(t, n);
    Al = !0;
    try {
        return Js(e, t, n)
    } finally {
        Al = !1, (bt !== null || en !== null) && (Zs(), Gs())
    }
}

function Vn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = kl(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n
}

var No = !1;
if (Ke) try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", {
        get: function () {
            No = !0
        }
    }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn)
} catch {
    No = !1
}

function Tf(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (p) {
        this.onError(p)
    }
}

var On = !1, Qr = null, Kr = !1, jo = null, Of = {
    onError: function (e) {
        On = !0, Qr = e
    }
};

function Mf(e, t, n, r, l, o, i, u, s) {
    On = !1, Qr = null, Tf.apply(Of, arguments)
}

function If(e, t, n, r, l, o, i, u, s) {
    if (Mf.apply(this, arguments), On) {
        if (On) {
            var a = Qr;
            On = !1, Qr = null
        } else throw Error(S(198));
        Kr || (Kr = !0, jo = a)
    }
}

function It(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function bs(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function vu(e) {
    if (It(e) !== e) throw Error(S(188))
}

function Df(e) {
    var t = e.alternate;
    if (!t) {
        if (t = It(e), t === null) throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return vu(l), e;
                if (o === r) return vu(l), t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return) n = l, r = o; else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(S(189))
            }
        }
        if (n.alternate !== r) throw Error(S(190))
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t
}

function ea(e) {
    return e = Df(e), e !== null ? ta(e) : null
}

function ta(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = ta(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var na = we.unstable_scheduleCallback, gu = we.unstable_cancelCallback, Ff = we.unstable_shouldYield,
    Uf = we.unstable_requestPaint, K = we.unstable_now, $f = we.unstable_getCurrentPriorityLevel,
    wi = we.unstable_ImmediatePriority, ra = we.unstable_UserBlockingPriority, Yr = we.unstable_NormalPriority,
    Bf = we.unstable_LowPriority, la = we.unstable_IdlePriority, gl = null, $e = null;

function Af(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function") try {
        $e.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var Oe = Math.clz32 ? Math.clz32 : Hf, Wf = Math.log, Vf = Math.LN2;

function Hf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wf(e) / Vf | 0) | 0
}

var yr = 64, wr = 4194304;

function Ln(e) {
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
            return e
    }
}

function Xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = Ln(u) : (o &= i, o !== 0 && (r = Ln(o)))
    } else i = n & ~l, i !== 0 ? r = Ln(i) : o !== 0 && (r = Ln(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Qf(e, t) {
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
            return -1
    }
}

function Kf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Oe(o), u = 1 << i, s = l[i];
        s === -1 ? (!(u & n) || u & r) && (l[i] = Qf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u
    }
}

function Lo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function oa() {
    var e = yr;
    return yr <<= 1, !(yr & 4194240) && (yr = 64), e
}

function Wl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ur(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n
}

function Yf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Oe(n), o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function Si(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Oe(n), l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}

var I = 0;

function ia(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}

var ua, ki, sa, aa, ca, Ro = !1, Sr = [], ot = null, it = null, ut = null, Hn = new Map, Qn = new Map, et = [],
    Xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function yu(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            ot = null;
            break;
        case"dragenter":
        case"dragleave":
            it = null;
            break;
        case"mouseover":
        case"mouseout":
            ut = null;
            break;
        case"pointerover":
        case"pointerout":
            Hn.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Qn.delete(t.pointerId)
    }
}

function kn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = ar(t), t !== null && ki(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Gf(e, t, n, r, l) {
    switch (t) {
        case"focusin":
            return ot = kn(ot, e, t, n, r, l), !0;
        case"dragenter":
            return it = kn(it, e, t, n, r, l), !0;
        case"mouseover":
            return ut = kn(ut, e, t, n, r, l), !0;
        case"pointerover":
            var o = l.pointerId;
            return Hn.set(o, kn(Hn.get(o) || null, e, t, n, r, l)), !0;
        case"gotpointercapture":
            return o = l.pointerId, Qn.set(o, kn(Qn.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function fa(e) {
    var t = Ct(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = bs(n), t !== null) {
                    e.blockedOn = t, ca(e.priority, function () {
                        sa(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            _o = r, n.target.dispatchEvent(r), _o = null
        } else return t = ar(n), t !== null && ki(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function wu(e, t, n) {
    Mr(e) && n.delete(t)
}

function Jf() {
    Ro = !1, ot !== null && Mr(ot) && (ot = null), it !== null && Mr(it) && (it = null), ut !== null && Mr(ut) && (ut = null), Hn.forEach(wu), Qn.forEach(wu)
}

function xn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ro || (Ro = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, Jf)))
}

function Kn(e) {
    function t(l) {
        return xn(l, e)
    }

    if (0 < Sr.length) {
        xn(Sr[0], e);
        for (var n = 1; n < Sr.length; n++) {
            var r = Sr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ot !== null && xn(ot, e), it !== null && xn(it, e), ut !== null && xn(ut, e), Hn.forEach(t), Qn.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) fa(n), n.blockedOn === null && et.shift()
}

var tn = Je.ReactCurrentBatchConfig, Gr = !0;

function Zf(e, t, n, r) {
    var l = I, o = tn.transition;
    tn.transition = null;
    try {
        I = 1, xi(e, t, n, r)
    } finally {
        I = l, tn.transition = o
    }
}

function qf(e, t, n, r) {
    var l = I, o = tn.transition;
    tn.transition = null;
    try {
        I = 4, xi(e, t, n, r)
    } finally {
        I = l, tn.transition = o
    }
}

function xi(e, t, n, r) {
    if (Gr) {
        var l = zo(e, t, n, r);
        if (l === null) ql(e, t, r, Jr, n), yu(e, r); else if (Gf(l, e, t, n, r)) r.stopPropagation(); else if (yu(e, r), t & 4 && -1 < Xf.indexOf(e)) {
            for (; l !== null;) {
                var o = ar(l);
                if (o !== null && ua(o), o = zo(e, t, n, r), o === null && ql(e, t, r, Jr, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else ql(e, t, r, null, n)
    }
}

var Jr = null;

function zo(e, t, n, r) {
    if (Jr = null, e = yi(r), e = Ct(e), e !== null) if (t = It(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = bs(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Jr = e, null
}

function da(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch ($f()) {
                case wi:
                    return 1;
                case ra:
                    return 4;
                case Yr:
                case Bf:
                    return 16;
                case la:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var nt = null, Ei = null, Ir = null;

function pa() {
    if (Ir) return Ir;
    var e, t = Ei, n = t.length, r, l = "value" in nt ? nt.value : nt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Ir = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Dr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function kr() {
    return !0
}

function Su() {
    return !1
}

function ke(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? kr : Su, this.isPropagationStopped = Su, this
    }

    return W(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kr)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kr)
        }, persist: function () {
        }, isPersistent: kr
    }), t
}

var hn = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, Ci = ke(hn), sr = W({}, hn, {view: 0, detail: 0}), bf = ke(sr), Vl, Hl, En, yl = W({}, sr, {
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
        getModifierState: _i,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Vl = e.screenX - En.screenX, Hl = e.screenY - En.screenY) : Hl = Vl = 0, En = e), Vl)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Hl
        }
    }), ku = ke(yl), ed = W({}, yl, {dataTransfer: 0}), td = ke(ed), nd = W({}, sr, {relatedTarget: 0}), Ql = ke(nd),
    rd = W({}, hn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), ld = ke(rd), od = W({}, hn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), id = ke(od), ud = W({}, hn, {data: 0}), xu = ke(ud), sd = {
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
        MozPrintableKey: "Unidentified"
    }, ad = {
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
        224: "Meta"
    }, cd = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function fd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = cd[e]) ? !!t[e] : !1
}

function _i() {
    return fd
}

var dd = W({}, sr, {
    key: function (e) {
        if (e.key) {
            var t = sd[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ad[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _i,
    charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), pd = ke(dd), hd = W({}, yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Eu = ke(hd), md = W({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _i
}), vd = ke(md), gd = W({}, hn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), yd = ke(gd), wd = W({}, yl, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), Sd = ke(wd), kd = [9, 13, 27, 32], Pi = Ke && "CompositionEvent" in window, Mn = null;
Ke && "documentMode" in document && (Mn = document.documentMode);
var xd = Ke && "TextEvent" in window && !Mn, ha = Ke && (!Pi || Mn && 8 < Mn && 11 >= Mn), Cu = " ", _u = !1;

function ma(e, t) {
    switch (e) {
        case"keyup":
            return kd.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function va(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var At = !1;

function Ed(e, t) {
    switch (e) {
        case"compositionend":
            return va(t);
        case"keypress":
            return t.which !== 32 ? null : (_u = !0, Cu);
        case"textInput":
            return e = t.data, e === Cu && _u ? null : e;
        default:
            return null
    }
}

function Cd(e, t) {
    if (At) return e === "compositionend" || !Pi && ma(e, t) ? (e = pa(), Ir = Ei = nt = null, At = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return ha && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var _d = {
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
    week: !0
};

function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_d[e.type] : t === "textarea"
}

function ga(e, t, n, r) {
    Xs(r), t = Zr(t, "onChange"), 0 < t.length && (n = new Ci("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var In = null, Yn = null;

function Pd(e) {
    ja(e, 0)
}

function wl(e) {
    var t = Ht(e);
    if (As(t)) return e
}

function Nd(e, t) {
    if (e === "change") return t
}

var ya = !1;
if (Ke) {
    var Kl;
    if (Ke) {
        var Yl = "oninput" in document;
        if (!Yl) {
            var Nu = document.createElement("div");
            Nu.setAttribute("oninput", "return;"), Yl = typeof Nu.oninput == "function"
        }
        Kl = Yl
    } else Kl = !1;
    ya = Kl && (!document.documentMode || 9 < document.documentMode)
}

function ju() {
    In && (In.detachEvent("onpropertychange", wa), Yn = In = null)
}

function wa(e) {
    if (e.propertyName === "value" && wl(Yn)) {
        var t = [];
        ga(t, Yn, e, yi(e)), qs(Pd, t)
    }
}

function jd(e, t, n) {
    e === "focusin" ? (ju(), In = t, Yn = n, In.attachEvent("onpropertychange", wa)) : e === "focusout" && ju()
}

function Ld(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(Yn)
}

function Rd(e, t) {
    if (e === "click") return wl(t)
}

function zd(e, t) {
    if (e === "input" || e === "change") return wl(t)
}

function Td(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var Ie = typeof Object.is == "function" ? Object.is : Td;

function Xn(e, t) {
    if (Ie(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!po.call(t, l) || !Ie(e[l], t[l])) return !1
    }
    return !0
}

function Lu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Ru(e, t) {
    var n = Lu(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Lu(n)
    }
}

function Sa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function ka() {
    for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = Hr(e.document)
    }
    return t
}

function Ni(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Od(e) {
    var t = ka(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sa(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ni(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length, o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ru(n, o);
                var i = Ru(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var Md = Ke && "documentMode" in document && 11 >= document.documentMode, Wt = null, To = null, Dn = null, Oo = !1;

function zu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oo || Wt == null || Wt !== Hr(r) || (r = Wt, "selectionStart" in r && Ni(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Dn && Xn(Dn, r) || (Dn = r, r = Zr(To, "onSelect"), 0 < r.length && (t = new Ci("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Wt)))
}

function xr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var Vt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd")
}, Xl = {}, xa = {};
Ke && (xa = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);

function Sl(e) {
    if (Xl[e]) return Xl[e];
    if (!Vt[e]) return e;
    var t = Vt[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in xa) return Xl[e] = t[n];
    return e
}

var Ea = Sl("animationend"), Ca = Sl("animationiteration"), _a = Sl("animationstart"), Pa = Sl("transitionend"),
    Na = new Map,
    Tu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function vt(e, t) {
    Na.set(e, t), Mt(t, [e])
}

for (var Gl = 0; Gl < Tu.length; Gl++) {
    var Jl = Tu[Gl], Id = Jl.toLowerCase(), Dd = Jl[0].toUpperCase() + Jl.slice(1);
    vt(Id, "on" + Dd)
}
vt(Ea, "onAnimationEnd");
vt(Ca, "onAnimationIteration");
vt(_a, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(Pa, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));

function Ou(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, If(r, t, void 0, e), e.currentTarget = null
}

function ja(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], l = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
                var u = r[i], s = u.instance, a = u.currentTarget;
                if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                Ou(l, u, a), o = s
            } else for (i = 0; i < r.length; i++) {
                if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                Ou(l, u, a), o = s
            }
        }
    }
    if (Kr) throw e = jo, Kr = !1, jo = null, e
}

function F(e, t) {
    var n = t[Uo];
    n === void 0 && (n = t[Uo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (La(t, e, 2, !1), n.add(r))
}

function Zl(e, t, n) {
    var r = 0;
    t && (r |= 4), La(n, e, r, t)
}

var Er = "_reactListening" + Math.random().toString(36).slice(2);

function Gn(e) {
    if (!e[Er]) {
        e[Er] = !0, Ds.forEach(function (n) {
            n !== "selectionchange" && (Fd.has(n) || Zl(n, !1, e), Zl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Er] || (t[Er] = !0, Zl("selectionchange", !1, t))
    }
}

function La(e, t, n, r) {
    switch (da(t)) {
        case 1:
            var l = Zf;
            break;
        case 4:
            l = qf;
            break;
        default:
            l = xi
    }
    n = l.bind(null, t, n, e), l = void 0, !No || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {passive: l}) : e.addEventListener(t, n, !1)
}

function ql(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e:for (; ;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4) for (i = r.return; i !== null;) {
                var s = i.tag;
                if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                i = i.return
            }
            for (; u !== null;) {
                if (i = Ct(u), i === null) return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = o = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    qs(function () {
        var a = o, p = yi(n), h = [];
        e:{
            var m = Na.get(e);
            if (m !== void 0) {
                var g = Ci, y = e;
                switch (e) {
                    case"keypress":
                        if (Dr(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        g = pd;
                        break;
                    case"focusin":
                        y = "focus", g = Ql;
                        break;
                    case"focusout":
                        y = "blur", g = Ql;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        g = Ql;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        g = ku;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        g = td;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        g = vd;
                        break;
                    case Ea:
                    case Ca:
                    case _a:
                        g = ld;
                        break;
                    case Pa:
                        g = yd;
                        break;
                    case"scroll":
                        g = bf;
                        break;
                    case"wheel":
                        g = Sd;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        g = id;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        g = Eu
                }
                var w = (t & 4) !== 0, C = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
                w = [];
                for (var c = a, d; c !== null;) {
                    d = c;
                    var v = d.stateNode;
                    if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Vn(c, f), v != null && w.push(Jn(c, v, d)))), C) break;
                    c = c.return
                }
                0 < w.length && (m = new g(m, y, null, n, p), h.push({event: m, listeners: w}))
            }
        }
        if (!(t & 7)) {
            e:{
                if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== _o && (y = n.relatedTarget || n.fromElement) && (Ct(y) || y[Ye])) break e;
                if ((g || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = a, y = y ? Ct(y) : null, y !== null && (C = It(y), y !== C || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = a), g !== y)) {
                    if (w = ku, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Eu, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), C = g == null ? m : Ht(g), d = y == null ? m : Ht(y), m = new w(v, c + "leave", g, n, p), m.target = C, m.relatedTarget = d, v = null, Ct(p) === a && (w = new w(f, c + "enter", y, n, p), w.target = d, w.relatedTarget = C, v = w), C = v, g && y) t:{
                        for (w = g, f = y, c = 0, d = w; d; d = Ut(d)) c++;
                        for (d = 0, v = f; v; v = Ut(v)) d++;
                        for (; 0 < c - d;) w = Ut(w), c--;
                        for (; 0 < d - c;) f = Ut(f), d--;
                        for (; c--;) {
                            if (w === f || f !== null && w === f.alternate) break t;
                            w = Ut(w), f = Ut(f)
                        }
                        w = null
                    } else w = null;
                    g !== null && Mu(h, m, g, w, !1), y !== null && C !== null && Mu(h, C, y, w, !0)
                }
            }
            e:{
                if (m = a ? Ht(a) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var E = Nd; else if (Pu(m)) if (ya) E = zd; else {
                    E = Ld;
                    var N = jd
                } else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Rd);
                if (E && (E = E(e, a))) {
                    ga(h, E, n, p);
                    break e
                }
                N && N(e, m, a), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && So(m, "number", m.value)
            }
            switch (N = a ? Ht(a) : window, e) {
                case"focusin":
                    (Pu(N) || N.contentEditable === "true") && (Wt = N, To = a, Dn = null);
                    break;
                case"focusout":
                    Dn = To = Wt = null;
                    break;
                case"mousedown":
                    Oo = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    Oo = !1, zu(h, n, p);
                    break;
                case"selectionchange":
                    if (Md) break;
                case"keydown":
                case"keyup":
                    zu(h, n, p)
            }
            var j;
            if (Pi) e:{
                switch (e) {
                    case"compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case"compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                }
                L = void 0
            } else At ? ma(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
            L && (ha && n.locale !== "ko" && (At || L !== "onCompositionStart" ? L === "onCompositionEnd" && At && (j = pa()) : (nt = p, Ei = "value" in nt ? nt.value : nt.textContent, At = !0)), N = Zr(a, L), 0 < N.length && (L = new xu(L, e, null, n, p), h.push({
                event: L,
                listeners: N
            }), j ? L.data = j : (j = va(n), j !== null && (L.data = j)))), (j = xd ? Ed(e, n) : Cd(e, n)) && (a = Zr(a, "onBeforeInput"), 0 < a.length && (p = new xu("onBeforeInput", "beforeinput", null, n, p), h.push({
                event: p,
                listeners: a
            }), p.data = j))
        }
        ja(h, t)
    })
}

function Jn(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e, o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = Vn(e, n), o != null && r.unshift(Jn(e, o, l)), o = Vn(e, t), o != null && r.push(Jn(e, o, l))), e = e.return
    }
    return r
}

function Ut(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Mu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n, s = u.alternate, a = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 && a !== null && (u = a, l ? (s = Vn(n, o), s != null && i.unshift(Jn(n, s, u))) : l || (s = Vn(n, o), s != null && i.push(Jn(n, s, u)))), n = n.return
    }
    i.length !== 0 && e.push({event: t, listeners: i})
}

var Ud = /\r\n?/g, $d = /\u0000|\uFFFD/g;

function Iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ud, `
`).replace($d, "")
}

function Cr(e, t, n) {
    if (t = Iu(t), Iu(e) !== t && n) throw Error(S(425))
}

function qr() {
}

var Mo = null, Io = null;

function Do(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Fo = typeof setTimeout == "function" ? setTimeout : void 0,
    Bd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Du = typeof Promise == "function" ? Promise : void 0,
    Ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function (e) {
        return Du.resolve(null).then(e).catch(Wd)
    } : Fo;

function Wd(e) {
    setTimeout(function () {
        throw e
    })
}

function bl(e, t) {
    var n = t, r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
            if (r === 0) {
                e.removeChild(l), Kn(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Kn(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Fu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var mn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + mn, Zn = "__reactProps$" + mn,
    Ye = "__reactContainer$" + mn, Uo = "__reactEvents$" + mn, Vd = "__reactListeners$" + mn,
    Hd = "__reactHandles$" + mn;

function Ct(e) {
    var t = e[Ue];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ye] || n[Ue]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fu(e); e !== null;) {
                if (n = e[Ue]) return n;
                e = Fu(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ar(e) {
    return e = e[Ue] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ht(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33))
}

function kl(e) {
    return e[Zn] || null
}

var $o = [], Qt = -1;

function gt(e) {
    return {current: e}
}

function U(e) {
    0 > Qt || (e.current = $o[Qt], $o[Qt] = null, Qt--)
}

function D(e, t) {
    Qt++, $o[Qt] = e.current, e.current = t
}

var mt = {}, ie = gt(mt), pe = gt(!1), Lt = mt;

function on(e, t) {
    var n = e.type.contextTypes;
    if (!n) return mt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function he(e) {
    return e = e.childContextTypes, e != null
}

function br() {
    U(pe), U(ie)
}

function Uu(e, t, n) {
    if (ie.current !== mt) throw Error(S(168));
    D(ie, t), D(pe, n)
}

function Ra(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, jf(e) || "Unknown", l));
    return W({}, n, r)
}

function el(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Lt = ie.current, D(ie, e), D(pe, pe.current), !0
}

function $u(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n ? (e = Ra(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, U(pe), U(ie), D(ie, e)) : U(pe), D(pe, n)
}

var We = null, xl = !1, eo = !1;

function za(e) {
    We === null ? We = [e] : We.push(e)
}

function Qd(e) {
    xl = !0, za(e)
}

function yt() {
    if (!eo && We !== null) {
        eo = !0;
        var e = 0, t = I;
        try {
            var n = We;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            We = null, xl = !1
        } catch (l) {
            throw We !== null && (We = We.slice(e + 1)), na(wi, yt), l
        } finally {
            I = t, eo = !1
        }
    }
    return null
}

var Kt = [], Yt = 0, tl = null, nl = 0, xe = [], Ee = 0, Rt = null, Ve = 1, He = "";

function kt(e, t) {
    Kt[Yt++] = nl, Kt[Yt++] = tl, tl = e, nl = t
}

function Ta(e, t, n) {
    xe[Ee++] = Ve, xe[Ee++] = He, xe[Ee++] = Rt, Rt = e;
    var r = Ve;
    e = He;
    var l = 32 - Oe(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Oe(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Oe(t) + l | n << l | r, He = o + e
    } else Ve = 1 << o | n << l | r, He = e
}

function ji(e) {
    e.return !== null && (kt(e, 1), Ta(e, 1, 0))
}

function Li(e) {
    for (; e === tl;) tl = Kt[--Yt], Kt[Yt] = null, nl = Kt[--Yt], Kt[Yt] = null;
    for (; e === Rt;) Rt = xe[--Ee], xe[Ee] = null, He = xe[--Ee], xe[Ee] = null, Ve = xe[--Ee], xe[Ee] = null
}

var ye = null, ge = null, $ = !1, Te = null;

function Oa(e, t) {
    var n = Ce(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Bu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ge = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rt !== null ? {
                id: Ve,
                overflow: He
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ge = null, !0) : !1;
        default:
            return !1
    }
}

function Bo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ao(e) {
    if ($) {
        var t = ge;
        if (t) {
            var n = t;
            if (!Bu(e, t)) {
                if (Bo(e)) throw Error(S(418));
                t = st(n.nextSibling);
                var r = ye;
                t && Bu(e, t) ? Oa(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, ye = e)
            }
        } else {
            if (Bo(e)) throw Error(S(418));
            e.flags = e.flags & -4097 | 2, $ = !1, ye = e
        }
    }
}

function Au(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ye = e
}

function _r(e) {
    if (e !== ye) return !1;
    if (!$) return Au(e), $ = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps)), t && (t = ge)) {
        if (Bo(e)) throw Ma(), Error(S(418));
        for (; t;) Oa(e, t), t = st(t.nextSibling)
    }
    if (Au(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ge = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ge = null
        }
    } else ge = ye ? st(e.stateNode.nextSibling) : null;
    return !0
}

function Ma() {
    for (var e = ge; e;) e = st(e.nextSibling)
}

function un() {
    ge = ye = null, $ = !1
}

function Ri(e) {
    Te === null ? Te = [e] : Te.push(e)
}

var Kd = Je.ReactCurrentBatchConfig;

function Cn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(S(309));
                var r = n.stateNode
            }
            if (!r) throw Error(S(147, e));
            var l = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(S(284));
        if (!n._owner) throw Error(S(290, e))
    }
    return e
}

function Pr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Wu(e) {
    var t = e._init;
    return t(e._payload)
}

function Ia(e) {
    function t(f, c) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = dt(f, c), f.index = 0, f.sibling = null, f
    }

    function o(f, c, d) {
        return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function u(f, c, d, v) {
        return c === null || c.tag !== 6 ? (c = uo(d, f.mode, v), c.return = f, c) : (c = l(c, d), c.return = f, c)
    }

    function s(f, c, d, v) {
        var E = d.type;
        return E === Bt ? p(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === qe && Wu(E) === c.type) ? (v = l(c, d.props), v.ref = Cn(f, c, d), v.return = f, v) : (v = Vr(d.type, d.key, d.props, null, f.mode, v), v.ref = Cn(f, c, d), v.return = f, v)
    }

    function a(f, c, d, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = so(d, f.mode, v), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c)
    }

    function p(f, c, d, v, E) {
        return c === null || c.tag !== 7 ? (c = jt(d, f.mode, v, E), c.return = f, c) : (c = l(c, d), c.return = f, c)
    }

    function h(f, c, d) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = uo("" + c, f.mode, d), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case mr:
                    return d = Vr(c.type, c.key, c.props, null, f.mode, d), d.ref = Cn(f, null, c), d.return = f, d;
                case $t:
                    return c = so(c, f.mode, d), c.return = f, c;
                case qe:
                    var v = c._init;
                    return h(f, v(c._payload), d)
            }
            if (jn(c) || wn(c)) return c = jt(c, f.mode, d, null), c.return = f, c;
            Pr(f, c)
        }
        return null
    }

    function m(f, c, d, v) {
        var E = c !== null ? c.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, c, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case mr:
                    return d.key === E ? s(f, c, d, v) : null;
                case $t:
                    return d.key === E ? a(f, c, d, v) : null;
                case qe:
                    return E = d._init, m(f, c, E(d._payload), v)
            }
            if (jn(d) || wn(d)) return E !== null ? null : p(f, c, d, v, null);
            Pr(f, d)
        }
        return null
    }

    function g(f, c, d, v, E) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(c, f, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case mr:
                    return f = f.get(v.key === null ? d : v.key) || null, s(c, f, v, E);
                case $t:
                    return f = f.get(v.key === null ? d : v.key) || null, a(c, f, v, E);
                case qe:
                    var N = v._init;
                    return g(f, c, d, N(v._payload), E)
            }
            if (jn(v) || wn(v)) return f = f.get(d) || null, p(c, f, v, E, null);
            Pr(c, v)
        }
        return null
    }

    function y(f, c, d, v) {
        for (var E = null, N = null, j = c, L = c = 0, H = null; j !== null && L < d.length; L++) {
            j.index > L ? (H = j, j = null) : H = j.sibling;
            var O = m(f, j, d[L], v);
            if (O === null) {
                j === null && (j = H);
                break
            }
            e && j && O.alternate === null && t(f, j), c = o(O, c, L), N === null ? E = O : N.sibling = O, N = O, j = H
        }
        if (L === d.length) return n(f, j), $ && kt(f, L), E;
        if (j === null) {
            for (; L < d.length; L++) j = h(f, d[L], v), j !== null && (c = o(j, c, L), N === null ? E = j : N.sibling = j, N = j);
            return $ && kt(f, L), E
        }
        for (j = r(f, j); L < d.length; L++) H = g(j, f, L, d[L], v), H !== null && (e && H.alternate !== null && j.delete(H.key === null ? L : H.key), c = o(H, c, L), N === null ? E = H : N.sibling = H, N = H);
        return e && j.forEach(function (je) {
            return t(f, je)
        }), $ && kt(f, L), E
    }

    function w(f, c, d, v) {
        var E = wn(d);
        if (typeof E != "function") throw Error(S(150));
        if (d = E.call(d), d == null) throw Error(S(151));
        for (var N = E = null, j = c, L = c = 0, H = null, O = d.next(); j !== null && !O.done; L++, O = d.next()) {
            j.index > L ? (H = j, j = null) : H = j.sibling;
            var je = m(f, j, O.value, v);
            if (je === null) {
                j === null && (j = H);
                break
            }
            e && j && je.alternate === null && t(f, j), c = o(je, c, L), N === null ? E = je : N.sibling = je, N = je, j = H
        }
        if (O.done) return n(f, j), $ && kt(f, L), E;
        if (j === null) {
            for (; !O.done; L++, O = d.next()) O = h(f, O.value, v), O !== null && (c = o(O, c, L), N === null ? E = O : N.sibling = O, N = O);
            return $ && kt(f, L), E
        }
        for (j = r(f, j); !O.done; L++, O = d.next()) O = g(j, f, L, O.value, v), O !== null && (e && O.alternate !== null && j.delete(O.key === null ? L : O.key), c = o(O, c, L), N === null ? E = O : N.sibling = O, N = O);
        return e && j.forEach(function (gn) {
            return t(f, gn)
        }), $ && kt(f, L), E
    }

    function C(f, c, d, v) {
        if (typeof d == "object" && d !== null && d.type === Bt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case mr:
                    e:{
                        for (var E = d.key, N = c; N !== null;) {
                            if (N.key === E) {
                                if (E = d.type, E === Bt) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling), c = l(N, d.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (N.elementType === E || typeof E == "object" && E !== null && E.$$typeof === qe && Wu(E) === N.type) {
                                    n(f, N.sibling), c = l(N, d.props), c.ref = Cn(f, N, d), c.return = f, f = c;
                                    break e
                                }
                                n(f, N);
                                break
                            } else t(f, N);
                            N = N.sibling
                        }
                        d.type === Bt ? (c = jt(d.props.children, f.mode, v, d.key), c.return = f, f = c) : (v = Vr(d.type, d.key, d.props, null, f.mode, v), v.ref = Cn(f, c, d), v.return = f, f = v)
                    }
                    return i(f);
                case $t:
                    e:{
                        for (N = d.key; c !== null;) {
                            if (c.key === N) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            } else t(f, c);
                            c = c.sibling
                        }
                        c = so(d, f.mode, v), c.return = f, f = c
                    }
                    return i(f);
                case qe:
                    return N = d._init, C(f, c, N(d._payload), v)
            }
            if (jn(d)) return y(f, c, d, v);
            if (wn(d)) return w(f, c, d, v);
            Pr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = uo(d, f.mode, v), c.return = f, f = c), i(f)) : n(f, c)
    }

    return C
}

var sn = Ia(!0), Da = Ia(!1), rl = gt(null), ll = null, Xt = null, zi = null;

function Ti() {
    zi = Xt = ll = null
}

function Oi(e) {
    var t = rl.current;
    U(rl), e._currentValue = t
}

function Wo(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function nn(e, t) {
    ll = e, zi = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null)
}

function Pe(e) {
    var t = e._currentValue;
    if (zi !== e) if (e = {context: e, memoizedValue: t, next: null}, Xt === null) {
        if (ll === null) throw Error(S(308));
        Xt = e, ll.dependencies = {lanes: 0, firstContext: e}
    } else Xt = Xt.next = e;
    return t
}

var _t = null;

function Mi(e) {
    _t === null ? _t = [e] : _t.push(e)
}

function Fa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Mi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r)
}

function Xe(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var be = !1;

function Ii(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function Ua(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Qe(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function at(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Mi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n)
}

function Fr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Si(e, n)
    }
}

function Vu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ol(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u, a = s.next;
        s.next = null, i === null ? o = a : i.next = a, i = s;
        var p = e.alternate;
        p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = a : u.next = a, p.lastBaseUpdate = s))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, p = a = s = null, u = o;
        do {
            var m = u.lane, g = u.eventTime;
            if ((r & m) === m) {
                p !== null && (p = p.next = {
                    eventTime: g,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e:{
                    var y = e, w = u;
                    switch (m = t, g = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") {
                                h = y.call(g, h, m);
                                break e
                            }
                            h = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload, m = typeof y == "function" ? y.call(g, h, m) : y, m == null) break e;
                            h = W({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u))
            } else g = {
                eventTime: g,
                lane: m,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, p === null ? (a = p = g, s = h) : p = p.next = g, i |= m;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (p === null && (s = h), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        Tt |= i, e.lanes = i, e.memoizedState = h
    }
}

function Hu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], l = r.callback;
        if (l !== null) {
            if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
            l.call(r)
        }
    }
}

var cr = {}, Be = gt(cr), qn = gt(cr), bn = gt(cr);

function Pt(e) {
    if (e === cr) throw Error(S(174));
    return e
}

function Di(e, t) {
    switch (D(bn, t), D(qn, e), D(Be, cr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : xo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xo(t, e)
    }
    U(Be), D(Be, t)
}

function an() {
    U(Be), U(qn), U(bn)
}

function $a(e) {
    Pt(bn.current);
    var t = Pt(Be.current), n = xo(t, e.type);
    t !== n && (D(qn, e), D(Be, n))
}

function Fi(e) {
    qn.current === e && (U(Be), U(qn))
}

var B = gt(0);

function il(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var to = [];

function Ui() {
    for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
    to.length = 0
}

var Ur = Je.ReactCurrentDispatcher, no = Je.ReactCurrentBatchConfig, zt = 0, A = null, G = null, q = null, ul = !1,
    Fn = !1, er = 0, Yd = 0;

function re() {
    throw Error(S(321))
}

function $i(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ie(e[n], t[n])) return !1;
    return !0
}

function Bi(e, t, n, r, l, o) {
    if (zt = o, A = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Zd : qd, e = n(r, l), Fn) {
        o = 0;
        do {
            if (Fn = !1, er = 0, 25 <= o) throw Error(S(301));
            o += 1, q = G = null, t.updateQueue = null, Ur.current = bd, e = n(r, l)
        } while (Fn)
    }
    if (Ur.current = sl, t = G !== null && G.next !== null, zt = 0, q = G = A = null, ul = !1, t) throw Error(S(300));
    return e
}

function Ai() {
    var e = er !== 0;
    return er = 0, e
}

function Fe() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return q === null ? A.memoizedState = q = e : q = q.next = e, q
}

function Ne() {
    if (G === null) {
        var e = A.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = G.next;
    var t = q === null ? A.memoizedState : q.next;
    if (t !== null) q = t, G = e; else {
        if (e === null) throw Error(S(310));
        G = e, e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        }, q === null ? A.memoizedState = q = e : q = q.next = e
    }
    return q
}

function tr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ro(e) {
    var t = Ne(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = G, l = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var u = i = null, s = null, a = o;
        do {
            var p = a.lane;
            if ((zt & p) === p) s !== null && (s = s.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action); else {
                var h = {
                    lane: p,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                s === null ? (u = s = h, i = r) : s = s.next = h, A.lanes |= p, Tt |= p
            }
            a = a.next
        } while (a !== null && a !== o);
        s === null ? i = r : s.next = u, Ie(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, A.lanes |= o, Tt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function lo(e) {
    var t = Ne(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Ie(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Ba() {
}

function Aa(e, t) {
    var n = A, r = Ne(), l = t(), o = !Ie(r.memoizedState, l);
    if (o && (r.memoizedState = l, de = !0), r = r.queue, Wi(Ha.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
        if (n.flags |= 2048, nr(9, Va.bind(null, n, r, l, t), void 0, null), b === null) throw Error(S(349));
        zt & 30 || Wa(n, t, l)
    }
    return l
}

function Wa(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = A.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, A.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Va(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qa(t) && Ka(e)
}

function Ha(e, t, n) {
    return n(function () {
        Qa(t) && Ka(e)
    })
}

function Qa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n)
    } catch {
        return !0
    }
}

function Ka(e) {
    var t = Xe(e, 1);
    t !== null && Me(t, e, 1, -1)
}

function Qu(e) {
    var t = Fe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Jd.bind(null, A, e), [t.memoizedState, e]
}

function nr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = A.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, A.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ya() {
    return Ne().memoizedState
}

function $r(e, t, n, r) {
    var l = Fe();
    A.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r)
}

function El(e, t, n, r) {
    var l = Ne();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (G !== null) {
        var i = G.memoizedState;
        if (o = i.destroy, r !== null && $i(r, i.deps)) {
            l.memoizedState = nr(t, n, o, r);
            return
        }
    }
    A.flags |= e, l.memoizedState = nr(1 | t, n, o, r)
}

function Ku(e, t) {
    return $r(8390656, 8, e, t)
}

function Wi(e, t) {
    return El(2048, 8, e, t)
}

function Xa(e, t) {
    return El(4, 2, e, t)
}

function Ga(e, t) {
    return El(4, 4, e, t)
}

function Ja(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function Za(e, t, n) {
    return n = n != null ? n.concat([e]) : null, El(4, 4, Ja.bind(null, t, e), n)
}

function Vi() {
}

function qa(e, t) {
    var n = Ne();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function ba(e, t) {
    var n = Ne();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $i(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function ec(e, t, n) {
    return zt & 21 ? (Ie(n, t) || (n = oa(), A.lanes |= n, Tt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n)
}

function Xd(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = no.transition;
    no.transition = {};
    try {
        e(!1), t()
    } finally {
        I = n, no.transition = r
    }
}

function tc() {
    return Ne().memoizedState
}

function Gd(e, t, n) {
    var r = ft(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, nc(e)) rc(t, n); else if (n = Fa(e, t, n, r), n !== null) {
        var l = se();
        Me(n, e, r, l), lc(n, t, r)
    }
}

function Jd(e, t, n) {
    var r = ft(e), l = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (nc(e)) rc(t, l); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState, u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, Ie(u, i)) {
                var s = t.interleaved;
                s === null ? (l.next = l, Mi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {
        } finally {
        }
        n = Fa(e, t, l, r), n !== null && (l = se(), Me(n, e, r, l), lc(n, t, r))
    }
}

function nc(e) {
    var t = e.alternate;
    return e === A || t !== null && t === A
}

function rc(e, t) {
    Fn = ul = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function lc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Si(e, n)
    }
}

var sl = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1
}, Zd = {
    readContext: Pe, useCallback: function (e, t) {
        return Fe().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: Pe, useEffect: Ku, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, $r(4194308, 4, Ja.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return $r(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return $r(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = Fe();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = Fe();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = Gd.bind(null, A, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = Fe();
        return e = {current: e}, t.memoizedState = e
    }, useState: Qu, useDebugValue: Vi, useDeferredValue: function (e) {
        return Fe().memoizedState = e
    }, useTransition: function () {
        var e = Qu(!1), t = e[0];
        return e = Xd.bind(null, e[1]), Fe().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = A, l = Fe();
        if ($) {
            if (n === void 0) throw Error(S(407));
            n = n()
        } else {
            if (n = t(), b === null) throw Error(S(349));
            zt & 30 || Wa(r, t, n)
        }
        l.memoizedState = n;
        var o = {value: n, getSnapshot: t};
        return l.queue = o, Ku(Ha.bind(null, r, o, e), [e]), r.flags |= 2048, nr(9, Va.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = Fe(), t = b.identifierPrefix;
        if ($) {
            var n = He, r = Ve;
            n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = Yd++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, qd = {
    readContext: Pe,
    useCallback: qa,
    useContext: Pe,
    useEffect: Wi,
    useImperativeHandle: Za,
    useInsertionEffect: Xa,
    useLayoutEffect: Ga,
    useMemo: ba,
    useReducer: ro,
    useRef: Ya,
    useState: function () {
        return ro(tr)
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
        var t = Ne();
        return ec(t, G.memoizedState, e)
    },
    useTransition: function () {
        var e = ro(tr)[0], t = Ne().memoizedState;
        return [e, t]
    },
    useMutableSource: Ba,
    useSyncExternalStore: Aa,
    useId: tc,
    unstable_isNewReconciler: !1
}, bd = {
    readContext: Pe,
    useCallback: qa,
    useContext: Pe,
    useEffect: Wi,
    useImperativeHandle: Za,
    useInsertionEffect: Xa,
    useLayoutEffect: Ga,
    useMemo: ba,
    useReducer: lo,
    useRef: Ya,
    useState: function () {
        return lo(tr)
    },
    useDebugValue: Vi,
    useDeferredValue: function (e) {
        var t = Ne();
        return G === null ? t.memoizedState = e : ec(t, G.memoizedState, e)
    },
    useTransition: function () {
        var e = lo(tr)[0], t = Ne().memoizedState;
        return [e, t]
    },
    useMutableSource: Ba,
    useSyncExternalStore: Aa,
    useId: tc,
    unstable_isNewReconciler: !1
};

function Re(e, t) {
    if (e && e.defaultProps) {
        t = W({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Vo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var Cl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? It(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = se(), l = ft(e), o = Qe(r, l);
        o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Me(t, e, l, r), Fr(t, e, l))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = se(), l = ft(e), o = Qe(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Me(t, e, l, r), Fr(t, e, l))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = se(), r = ft(e), l = Qe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Me(t, e, r, n), Fr(t, e, r))
    }
};

function Yu(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Xn(n, r) || !Xn(l, o) : !0
}

function oc(e, t, n) {
    var r = !1, l = mt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Pe(o) : (l = he(t) ? Lt : ie.current, r = t.contextTypes, o = (r = r != null) ? on(e, l) : mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Xu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cl.enqueueReplaceState(t, t.state, null)
}

function Ho(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ii(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Pe(o) : (o = he(t) ? Lt : ie.current, l.context = on(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Vo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Cl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function cn(e, t) {
    try {
        var n = "", r = t;
        do n += Nf(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {value: e, source: t, stack: l, digest: null}
}

function oo(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function Qo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var ep = typeof WeakMap == "function" ? WeakMap : Map;

function ic(e, t, n) {
    n = Qe(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        cl || (cl = !0, ti = r), Qo(e, t)
    }, n
}

function uc(e, t, n) {
    n = Qe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function () {
            return r(l)
        }, n.callback = function () {
            Qo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        Qo(e, t), typeof r != "function" && (ct === null ? ct = new Set([this]) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {componentStack: i !== null ? i : ""})
    }), n
}

function Gu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ep;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = hp.bind(null, e, t, n), t.then(e, e))
}

function Ju(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Zu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e)
}

var tp = Je.ReactCurrentOwner, de = !1;

function ue(e, t, n, r) {
    t.child = e === null ? Da(t, null, n, r) : sn(t, e.child, n, r)
}

function qu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return nn(t, l), r = Bi(e, t, n, r, o, l), n = Ai(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : ($ && n && ji(t), t.flags |= 1, ue(e, t, r, l), t.child)
}

function bu(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Zi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, sc(e, t, o, r, l)) : (e = Vr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Xn, n(i, r) && e.ref === t.ref) return Ge(e, t, l)
    }
    return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function sc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Xn(o, r) && e.ref === t.ref) if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0); else return t.lanes = e.lanes, Ge(e, t, l)
    }
    return Ko(e, t, n, r, l)
}

function ac(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, D(Jt, ve), ve |= n; else {
        if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, D(Jt, ve), ve |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, D(Jt, ve), ve |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(Jt, ve), ve |= r;
    return ue(e, t, l, n), t.child
}

function cc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ko(e, t, n, r, l) {
    var o = he(n) ? Lt : ie.current;
    return o = on(t, o), nn(t, l), n = Bi(e, t, n, r, o, l), r = Ai(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : ($ && r && ji(t), t.flags |= 1, ue(e, t, n, l), t.child)
}

function es(e, t, n, r, l) {
    if (he(n)) {
        var o = !0;
        el(t)
    } else o = !1;
    if (nn(t, l), t.stateNode === null) Br(e, t), oc(t, n, r), Ho(t, n, r, l), r = !0; else if (e === null) {
        var i = t.stateNode, u = t.memoizedProps;
        i.props = u;
        var s = i.context, a = n.contextType;
        typeof a == "object" && a !== null ? a = Pe(a) : (a = he(n) ? Lt : ie.current, a = on(t, a));
        var p = n.getDerivedStateFromProps,
            h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Xu(t, i, r, a), be = !1;
        var m = t.memoizedState;
        i.state = m, ol(t, r, i, l), s = t.memoizedState, u !== r || m !== s || pe.current || be ? (typeof p == "function" && (Vo(t, n, p, r), s = t.memoizedState), (u = be || Yu(t, n, u, r, m, s, a)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Ua(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Re(t.type, u), i.props = a, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = he(n) ? Lt : ie.current, s = on(t, s));
        var g = n.getDerivedStateFromProps;
        (p = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Xu(t, i, r, s), be = !1, m = t.memoizedState, i.state = m, ol(t, r, i, l);
        var y = t.memoizedState;
        u !== h || m !== y || pe.current || be ? (typeof g == "function" && (Vo(t, n, g, r), y = t.memoizedState), (a = be || Yu(t, n, a, r, m, y, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Yo(e, t, n, r, o, l)
}

function Yo(e, t, n, r, l, o) {
    cc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && $u(t, n, !1), Ge(e, t, o);
    r = t.stateNode, tp.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = sn(t, e.child, null, o), t.child = sn(t, null, u, o)) : ue(e, t, u, o), t.memoizedState = r.state, l && $u(t, n, !0), t.child
}

function fc(e) {
    var t = e.stateNode;
    t.pendingContext ? Uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uu(e, t.context, !1), Di(e, t.containerInfo)
}

function ts(e, t, n, r, l) {
    return un(), Ri(l), t.flags |= 256, ue(e, t, n, r), t.child
}

var Xo = {dehydrated: null, treeContext: null, retryLane: 0};

function Go(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function dc(e, t, n) {
    var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(B, l & 1), e === null) return Ao(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Nl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Go(n), t.memoizedState = Xo, e) : Hi(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return np(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var s = {mode: "hidden", children: r.children};
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = dt(u, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Go(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Xo, r
    }
    return o = e.child, e = o.sibling, r = dt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Hi(e, t) {
    return t = Nl({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Nr(e, t, n, r) {
    return r !== null && Ri(r), sn(t, e.child, null, n), e = Hi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function np(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = oo(Error(S(422))), Nr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Nl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && sn(t, e.child, null, i), t.child.memoizedState = Go(i), t.memoizedState = Xo, o);
    if (!(t.mode & 1)) return Nr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, o = Error(S(419)), r = oo(o, r, void 0), Nr(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, de || u) {
        if (r = b, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Xe(e, l), Me(r, e, l, -1))
        }
        return Ji(), r = oo(Error(S(421))), Nr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = st(l.nextSibling), ye = t, $ = !0, Te = null, e !== null && (xe[Ee++] = Ve, xe[Ee++] = He, xe[Ee++] = Rt, Ve = e.id, He = e.overflow, Rt = t), t = Hi(t, r.children), t.flags |= 4096, t)
}

function ns(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wo(e.return, t, n)
}

function io(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function pc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (ue(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && e.flags & 128) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ns(e, n, t); else if (e.tag === 19) ns(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (D(B, r), !(t.mode & 1)) t.memoizedState = null; else switch (l) {
        case"forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && il(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), io(t, !1, l, n, o);
            break;
        case"backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && il(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            io(t, !0, n, null, o);
            break;
        case"together":
            io(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Br(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ge(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Tt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function rp(e, t, n) {
    switch (t.tag) {
        case 3:
            fc(t), un();
            break;
        case 5:
            $a(t);
            break;
        case 1:
            he(t.type) && el(t);
            break;
        case 4:
            Di(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, l = t.memoizedProps.value;
            D(rl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (D(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? dc(e, t, n) : (D(B, B.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
            D(B, B.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return pc(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(B, B.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, ac(e, t, n)
    }
    return Ge(e, t, n)
}

var hc, Jo, mc, vc;
hc = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Jo = function () {
};
mc = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Pt(Be.current);
        var o = null;
        switch (n) {
            case"input":
                l = yo(e, l), r = yo(e, r), o = [];
                break;
            case"select":
                l = W({}, l, {value: void 0}), r = W({}, r, {value: void 0}), o = [];
                break;
            case"textarea":
                l = ko(e, l), r = ko(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr)
        }
        Eo(n, r);
        var i;
        n = null;
        for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
            var u = l[a];
            for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (An.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
                for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
            } else n || (o || (o = []), o.push(a, n)), n = s; else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (An.hasOwnProperty(a) ? (s != null && a === "onScroll" && F("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s))
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
vc = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function _n(e, t) {
    if (!$) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling; else for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function lp(e, t, n) {
    var r = t.pendingProps;
    switch (Li(t), t.tag) {
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
            return le(t), null;
        case 1:
            return he(t.type) && br(), le(t), null;
        case 3:
            return r = t.stateNode, an(), U(pe), U(ie), Ui(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Te !== null && (li(Te), Te = null))), Jo(e, t), le(t), null;
        case 5:
            Fi(t);
            var l = Pt(bn.current);
            if (n = t.type, e !== null && t.stateNode != null) mc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(S(166));
                    return le(t), null
                }
                if (e = Pt(Be.current), _r(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ue] = t, r[Zn] = o, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            F("cancel", r), F("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            F("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (l = 0; l < Rn.length; l++) F(Rn[l], r);
                            break;
                        case"source":
                            F("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            F("error", r), F("load", r);
                            break;
                        case"details":
                            F("toggle", r);
                            break;
                        case"input":
                            fu(r, o), F("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!o.multiple}, F("invalid", r);
                            break;
                        case"textarea":
                            pu(r, o), F("invalid", r)
                    }
                    Eo(n, o), l = null;
                    for (var i in o) if (o.hasOwnProperty(i)) {
                        var u = o[i];
                        i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Cr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Cr(r.textContent, u, e), l = ["children", "" + u]) : An.hasOwnProperty(i) && u != null && i === "onScroll" && F("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            vr(r), du(r, o, !0);
                            break;
                        case"textarea":
                            vr(r), hu(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = qr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {is: r.is}) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Zn] = r, hc(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (i = Co(n, r), n) {
                            case"dialog":
                                F("cancel", e), F("close", e), l = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                F("load", e), l = r;
                                break;
                            case"video":
                            case"audio":
                                for (l = 0; l < Rn.length; l++) F(Rn[l], e);
                                l = r;
                                break;
                            case"source":
                                F("error", e), l = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                F("error", e), F("load", e), l = r;
                                break;
                            case"details":
                                F("toggle", e), l = r;
                                break;
                            case"input":
                                fu(e, r), l = yo(e, r), F("invalid", e);
                                break;
                            case"option":
                                l = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, l = W({}, r, {value: void 0}), F("invalid", e);
                                break;
                            case"textarea":
                                pu(e, r), l = ko(e, r), F("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Eo(n, l), u = l;
                        for (o in u) if (u.hasOwnProperty(o)) {
                            var s = u[o];
                            o === "style" ? Ys(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Qs(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Wn(e, s) : typeof s == "number" && Wn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (An.hasOwnProperty(o) ? s != null && o === "onScroll" && F("scroll", e) : s != null && hi(e, o, s, i))
                        }
                        switch (n) {
                            case"input":
                                vr(e), du(e, r, !1);
                                break;
                            case"textarea":
                                vr(e), hu(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + ht(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? qt(e, !!r.multiple, o, !1) : r.defaultValue != null && qt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = qr)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
                if (n = Pt(bn.current), Pt(Be.current), _r(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (o = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
                        case 3:
                            Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Cr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r
            }
            return le(t), null;
        case 13:
            if (U(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if ($ && ge !== null && t.mode & 1 && !(t.flags & 128)) Ma(), un(), t.flags |= 98560, o = !1; else if (o = _r(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(S(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
                        o[Ue] = t
                    } else un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    le(t), o = !1
                } else Te !== null && (li(Te), Te = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? J === 0 && (J = 3) : Ji())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
        case 4:
            return an(), Jo(e, t), e === null && Gn(t.stateNode.containerInfo), le(t), null;
        case 10:
            return Oi(t.type._context), le(t), null;
        case 17:
            return he(t.type) && br(), le(t), null;
        case 19:
            if (U(B), o = t.memoizedState, o === null) return le(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) _n(o, !1); else {
                if (J !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                    if (i = il(e), i !== null) {
                        for (t.flags |= 128, _n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return D(B, B.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && K() > fn && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = il(i), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return le(t), null
                } else 2 * K() - o.renderingStartTime > fn && n !== 1073741824 && (t.flags |= 128, r = !0, _n(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, D(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
        case 22:
        case 23:
            return Gi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(S(156, t.tag))
}

function op(e, t) {
    switch (Li(t), t.tag) {
        case 1:
            return he(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return an(), U(pe), U(ie), Ui(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Fi(t), null;
        case 13:
            if (U(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(S(340));
                un()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return U(B), null;
        case 4:
            return an(), null;
        case 10:
            return Oi(t.type._context), null;
        case 22:
        case 23:
            return Gi(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var jr = !1, oe = !1, ip = typeof WeakSet == "function" ? WeakSet : Set, _ = null;

function Gt(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        V(e, t, r)
    } else n.current = null
}

function Zo(e, t, n) {
    try {
        n()
    } catch (r) {
        V(e, t, r)
    }
}

var rs = !1;

function up(e, t) {
    if (Mo = Gr, e = ka(), Ni(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0, u = -1, s = -1, a = 0, p = 0, h = e, m = null;
                t:for (; ;) {
                    for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null;) m = h, h = g;
                    for (; ;) {
                        if (h === e) break t;
                        if (m === n && ++a === l && (u = i), m === o && ++p === r && (s = i), (g = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = g
                }
                n = u === -1 || s === -1 ? null : {start: u, end: s}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (Io = {
        focusedElem: e,
        selectionRange: n
    }, Gr = !1, _ = t; _ !== null;) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e; else for (; _ !== null;) {
        t = _;
        try {
            var y = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (y !== null) {
                        var w = y.memoizedProps, C = y.memoizedState, f = t.stateNode,
                            c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Re(t.type, w), C);
                        f.__reactInternalSnapshotBeforeUpdate = c
                    }
                    break;
                case 3:
                    var d = t.stateNode.containerInfo;
                    d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(S(163))
            }
        } catch (v) {
            V(t, t.return, v)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, _ = e;
            break
        }
        _ = t.return
    }
    return y = rs, rs = !1, y
}

function Un(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Zo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function _l(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function qo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function gc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Zn], delete t[Uo], delete t[Vd], delete t[Hd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function yc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ls(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || yc(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qr)); else if (r !== 4 && (e = e.child, e !== null)) for (bo(e, t, n), e = e.sibling; e !== null;) bo(e, t, n), e = e.sibling
}

function ei(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (ei(e, t, n), e = e.sibling; e !== null;) ei(e, t, n), e = e.sibling
}

var ee = null, ze = !1;

function Ze(e, t, n) {
    for (n = n.child; n !== null;) wc(e, t, n), n = n.sibling
}

function wc(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function") try {
        $e.onCommitFiberUnmount(gl, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            oe || Gt(n, t);
        case 6:
            var r = ee, l = ze;
            ee = null, Ze(e, t, n), ee = r, ze = l, ee !== null && (ze ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
            break;
        case 18:
            ee !== null && (ze ? (e = ee, n = n.stateNode, e.nodeType === 8 ? bl(e.parentNode, n) : e.nodeType === 1 && bl(e, n), Kn(e)) : bl(ee, n.stateNode));
            break;
        case 4:
            r = ee, l = ze, ee = n.stateNode.containerInfo, ze = !0, Ze(e, t, n), ee = r, ze = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l, i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Zo(n, t, i), l = l.next
                } while (l !== r)
            }
            Ze(e, t, n);
            break;
        case 1:
            if (!oe && (Gt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                V(n, t, u)
            }
            Ze(e, t, n);
            break;
        case 21:
            Ze(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, Ze(e, t, n), oe = r) : Ze(e, t, n);
            break;
        default:
            Ze(e, t, n)
    }
}

function os(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ip), t.forEach(function (r) {
            var l = vp.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Le(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
            var o = e, i = t, u = i;
            e:for (; u !== null;) {
                switch (u.tag) {
                    case 5:
                        ee = u.stateNode, ze = !1;
                        break e;
                    case 3:
                        ee = u.stateNode.containerInfo, ze = !0;
                        break e;
                    case 4:
                        ee = u.stateNode.containerInfo, ze = !0;
                        break e
                }
                u = u.return
            }
            if (ee === null) throw Error(S(160));
            wc(o, i, l), ee = null, ze = !1;
            var s = l.alternate;
            s !== null && (s.return = null), l.return = null
        } catch (a) {
            V(l, t, a)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Sc(t, e), t = t.sibling
}

function Sc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Le(t, e), De(e), r & 4) {
                try {
                    Un(3, e, e.return), _l(3, e)
                } catch (w) {
                    V(e, e.return, w)
                }
                try {
                    Un(5, e, e.return)
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            break;
        case 1:
            Le(t, e), De(e), r & 512 && n !== null && Gt(n, n.return);
            break;
        case 5:
            if (Le(t, e), De(e), r & 512 && n !== null && Gt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Wn(l, "")
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    u === "input" && o.type === "radio" && o.name != null && Ws(l, o), Co(u, i);
                    var a = Co(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var p = s[i], h = s[i + 1];
                        p === "style" ? Ys(l, h) : p === "dangerouslySetInnerHTML" ? Qs(l, h) : p === "children" ? Wn(l, h) : hi(l, p, h, a)
                    }
                    switch (u) {
                        case"input":
                            wo(l, o);
                            break;
                        case"textarea":
                            Vs(l, o);
                            break;
                        case"select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var g = o.value;
                            g != null ? qt(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? qt(l, !!o.multiple, o.defaultValue, !0) : qt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Zn] = o
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            break;
        case 6:
            if (Le(t, e), De(e), r & 4) {
                if (e.stateNode === null) throw Error(S(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Kn(t.containerInfo)
            } catch (w) {
                V(e, e.return, w)
            }
            break;
        case 4:
            Le(t, e), De(e);
            break;
        case 13:
            Le(t, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Yi = K())), r & 4 && os(e);
            break;
        case 22:
            if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (a = oe) || p, Le(t, e), oe = a) : Le(t, e), De(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1) for (_ = e, p = e.child; p !== null;) {
                    for (h = _ = p; _ !== null;) {
                        switch (m = _, g = m.child, m.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Un(4, m, m.return);
                                break;
                            case 1:
                                Gt(m, m.return);
                                var y = m.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    r = m, n = m.return;
                                    try {
                                        t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                    } catch (w) {
                                        V(r, n, w)
                                    }
                                }
                                break;
                            case 5:
                                Gt(m, m.return);
                                break;
                            case 22:
                                if (m.memoizedState !== null) {
                                    us(h);
                                    continue
                                }
                        }
                        g !== null ? (g.return = m, _ = g) : us(h)
                    }
                    p = p.sibling
                }
                e:for (p = null, h = e; ;) {
                    if (h.tag === 5) {
                        if (p === null) {
                            p = h;
                            try {
                                l = h.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ks("display", i))
                            } catch (w) {
                                V(e, e.return, w)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (p === null) try {
                            h.stateNode.nodeValue = a ? "" : h.memoizedProps
                        } catch (w) {
                            V(e, e.return, w)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        p === h && (p = null), h = h.return
                    }
                    p === h && (p = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Le(t, e), De(e), r & 4 && os(e);
            break;
        case 21:
            break;
        default:
            Le(t, e), De(e)
    }
}

function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (yc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Wn(l, ""), r.flags &= -33);
                    var o = ls(e);
                    ei(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo, u = ls(e);
                    bo(e, u, i);
                    break;
                default:
                    throw Error(S(161))
            }
        } catch (s) {
            V(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function sp(e, t, n) {
    _ = e, kc(e)
}

function kc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
        var l = _, o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || jr;
            if (!i) {
                var u = l.alternate, s = u !== null && u.memoizedState !== null || oe;
                u = jr;
                var a = oe;
                if (jr = i, (oe = s) && !a) for (_ = l; _ !== null;) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? ss(l) : s !== null ? (s.return = i, _ = s) : ss(l);
                for (; o !== null;) _ = o, kc(o), o = o.sibling;
                _ = l, jr = u, oe = a
            }
            is(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : is(e)
    }
}

function is(e) {
    for (; _ !== null;) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        oe || _l(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !oe) if (n === null) r.componentDidMount(); else {
                            var l = t.elementType === t.type ? n.memoizedProps : Re(t.type, n.memoizedProps);
                            r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && Hu(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Hu(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case"img":
                                    s.src && (n.src = s.src)
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
                            var a = t.alternate;
                            if (a !== null) {
                                var p = a.memoizedState;
                                if (p !== null) {
                                    var h = p.dehydrated;
                                    h !== null && Kn(h)
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
                        throw Error(S(163))
                }
                oe || t.flags & 512 && qo(t)
            } catch (m) {
                V(t, t.return, m)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function us(e) {
    for (; _ !== null;) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function ss(e) {
    for (; _ !== null;) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        _l(4, t)
                    } catch (s) {
                        V(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            V(t, l, s)
                        }
                    }
                    var o = t.return;
                    try {
                        qo(t)
                    } catch (s) {
                        V(t, o, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        qo(t)
                    } catch (s) {
                        V(t, i, s)
                    }
            }
        } catch (s) {
            V(t, t.return, s)
        }
        if (t === e) {
            _ = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, _ = u;
            break
        }
        _ = t.return
    }
}

var ap = Math.ceil, al = Je.ReactCurrentDispatcher, Qi = Je.ReactCurrentOwner, _e = Je.ReactCurrentBatchConfig, M = 0,
    b = null, Y = null, te = 0, ve = 0, Jt = gt(0), J = 0, rr = null, Tt = 0, Pl = 0, Ki = 0, $n = null, fe = null,
    Yi = 0, fn = 1 / 0, Ae = null, cl = !1, ti = null, ct = null, Lr = !1, rt = null, fl = 0, Bn = 0, ni = null,
    Ar = -1, Wr = 0;

function se() {
    return M & 6 ? K() : Ar !== -1 ? Ar : Ar = K()
}

function ft(e) {
    return e.mode & 1 ? M & 2 && te !== 0 ? te & -te : Kd.transition !== null ? (Wr === 0 && (Wr = oa()), Wr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : da(e.type)), e) : 1
}

function Me(e, t, n, r) {
    if (50 < Bn) throw Bn = 0, ni = null, Error(S(185));
    ur(e, n, r), (!(M & 2) || e !== b) && (e === b && (!(M & 2) && (Pl |= n), J === 4 && tt(e, te)), me(e, r), n === 1 && M === 0 && !(t.mode & 1) && (fn = K() + 500, xl && yt()))
}

function me(e, t) {
    var n = e.callbackNode;
    Kf(e, t);
    var r = Xr(e, e === b ? te : 0);
    if (r === 0) n !== null && gu(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && gu(n), t === 1) e.tag === 0 ? Qd(as.bind(null, e)) : za(as.bind(null, e)), Ad(function () {
            !(M & 6) && yt()
        }), n = null; else {
            switch (ia(r)) {
                case 1:
                    n = wi;
                    break;
                case 4:
                    n = ra;
                    break;
                case 16:
                    n = Yr;
                    break;
                case 536870912:
                    n = la;
                    break;
                default:
                    n = Yr
            }
            n = Lc(n, xc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function xc(e, t) {
    if (Ar = -1, Wr = 0, M & 6) throw Error(S(327));
    var n = e.callbackNode;
    if (rn() && e.callbackNode !== n) return null;
    var r = Xr(e, e === b ? te : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = dl(e, r); else {
        t = r;
        var l = M;
        M |= 2;
        var o = Cc();
        (b !== e || te !== t) && (Ae = null, fn = K() + 500, Nt(e, t));
        do try {
            dp();
            break
        } catch (u) {
            Ec(e, u)
        } while (!0);
        Ti(), al.current = o, M = l, Y !== null ? t = 0 : (b = null, te = 0, t = J)
    }
    if (t !== 0) {
        if (t === 2 && (l = Lo(e), l !== 0 && (r = l, t = ri(e, l))), t === 1) throw n = rr, Nt(e, 0), tt(e, r), me(e, K()), n;
        if (t === 6) tt(e, r); else {
            if (l = e.current.alternate, !(r & 30) && !cp(l) && (t = dl(e, r), t === 2 && (o = Lo(e), o !== 0 && (r = o, t = ri(e, o))), t === 1)) throw n = rr, Nt(e, 0), tt(e, r), me(e, K()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    xt(e, fe, Ae);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = Yi + 500 - K(), 10 < t)) {
                        if (Xr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            se(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Fo(xt.bind(null, e, fe, Ae), t);
                        break
                    }
                    xt(e, fe, Ae);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Oe(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ap(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Fo(xt.bind(null, e, fe, Ae), r);
                        break
                    }
                    xt(e, fe, Ae);
                    break;
                case 5:
                    xt(e, fe, Ae);
                    break;
                default:
                    throw Error(S(329))
            }
        }
    }
    return me(e, K()), e.callbackNode === n ? xc.bind(null, e) : null
}

function ri(e, t) {
    var n = $n;
    return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256), e = dl(e, t), e !== 2 && (t = fe, fe = n, t !== null && li(t)), e
}

function li(e) {
    fe === null ? fe = e : fe.push.apply(fe, e)
}

function cp(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var l = n[r], o = l.getSnapshot;
                l = l.value;
                try {
                    if (!Ie(o(), l)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~Ki, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Oe(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function as(e) {
    if (M & 6) throw Error(S(327));
    rn();
    var t = Xr(e, 0);
    if (!(t & 1)) return me(e, K()), null;
    var n = dl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Lo(e);
        r !== 0 && (t = r, n = ri(e, r))
    }
    if (n === 1) throw n = rr, Nt(e, 0), tt(e, t), me(e, K()), n;
    if (n === 6) throw Error(S(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xt(e, fe, Ae), me(e, K()), null
}

function Xi(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (fn = K() + 500, xl && yt())
    }
}

function Ot(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && rn();
    var t = M;
    M |= 1;
    var n = _e.transition, r = I;
    try {
        if (_e.transition = null, I = 1, e) return e()
    } finally {
        I = r, _e.transition = n, M = t, !(M & 6) && yt()
    }
}

function Gi() {
    ve = Jt.current, U(Jt)
}

function Nt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Bd(n)), Y !== null) for (n = Y.return; n !== null;) {
        var r = n;
        switch (Li(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && br();
                break;
            case 3:
                an(), U(pe), U(ie), Ui();
                break;
            case 5:
                Fi(r);
                break;
            case 4:
                an();
                break;
            case 13:
                U(B);
                break;
            case 19:
                U(B);
                break;
            case 10:
                Oi(r.type._context);
                break;
            case 22:
            case 23:
                Gi()
        }
        n = n.return
    }
    if (b = e, Y = e = dt(e.current, null), te = ve = t, J = 0, rr = null, Ki = Pl = Tt = 0, fe = $n = null, _t !== null) {
        for (t = 0; t < _t.length; t++) if (n = _t[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var l = r.next, o = n.pending;
            if (o !== null) {
                var i = o.next;
                o.next = l, r.next = i
            }
            n.pending = r
        }
        _t = null
    }
    return e
}

function Ec(e, t) {
    do {
        var n = Y;
        try {
            if (Ti(), Ur.current = sl, ul) {
                for (var r = A.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                ul = !1
            }
            if (zt = 0, q = G = A = null, Fn = !1, er = 0, Qi.current = null, n === null || n.return === null) {
                J = 1, rr = t, Y = null;
                break
            }
            e:{
                var o = e, i = n.return, u = n, s = t;
                if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var a = s, p = u, h = p.tag;
                    if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = p.alternate;
                        m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null)
                    }
                    var g = Ju(i);
                    if (g !== null) {
                        g.flags &= -257, Zu(g, i, u, o, t), g.mode & 1 && Gu(o, a, t), t = g, s = a;
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(s), t.updateQueue = w
                        } else y.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Gu(o, a, t), Ji();
                            break e
                        }
                        s = Error(S(426))
                    }
                } else if ($ && u.mode & 1) {
                    var C = Ju(i);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256), Zu(C, i, u, o, t), Ri(cn(s, u));
                        break e
                    }
                }
                o = s = cn(s, u), J !== 4 && (J = 2), $n === null ? $n = [o] : $n.push(o), o = i;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = ic(o, s, t);
                            Vu(o, f);
                            break e;
                        case 1:
                            u = s;
                            var c = o.type, d = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var v = uc(o, u, t);
                                Vu(o, v);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Pc(n)
        } catch (E) {
            t = E, Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Cc() {
    var e = al.current;
    return al.current = sl, e === null ? sl : e
}

function Ji() {
    (J === 0 || J === 3 || J === 2) && (J = 4), b === null || !(Tt & 268435455) && !(Pl & 268435455) || tt(b, te)
}

function dl(e, t) {
    var n = M;
    M |= 2;
    var r = Cc();
    (b !== e || te !== t) && (Ae = null, Nt(e, t));
    do try {
        fp();
        break
    } catch (l) {
        Ec(e, l)
    } while (!0);
    if (Ti(), M = n, al.current = r, Y !== null) throw Error(S(261));
    return b = null, te = 0, J
}

function fp() {
    for (; Y !== null;) _c(Y)
}

function dp() {
    for (; Y !== null && !Ff();) _c(Y)
}

function _c(e) {
    var t = jc(e.alternate, e, ve);
    e.memoizedProps = e.pendingProps, t === null ? Pc(e) : Y = t, Qi.current = null
}

function Pc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = op(n, t), n !== null) {
                n.flags &= 32767, Y = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                J = 6, Y = null;
                return
            }
        } else if (n = lp(n, t, ve), n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}

function xt(e, t, n) {
    var r = I, l = _e.transition;
    try {
        _e.transition = null, I = 1, pp(e, t, n, r)
    } finally {
        _e.transition = l, I = r
    }
    return null
}

function pp(e, t, n, r) {
    do rn(); while (rt !== null);
    if (M & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Yf(e, o), e === b && (Y = b = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lr || (Lr = !0, Lc(Yr, function () {
        return rn(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = _e.transition, _e.transition = null;
        var i = I;
        I = 1;
        var u = M;
        M |= 4, Qi.current = null, up(e, n), Sc(n, e), Od(Io), Gr = !!Mo, Io = Mo = null, e.current = n, sp(n), Uf(), M = u, I = i, _e.transition = o
    } else e.current = n;
    if (Lr && (Lr = !1, rt = e, fl = l), o = e.pendingLanes, o === 0 && (ct = null), Af(n.stateNode), me(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
        componentStack: l.stack,
        digest: l.digest
    });
    if (cl) throw cl = !1, e = ti, ti = null, e;
    return fl & 1 && e.tag !== 0 && rn(), o = e.pendingLanes, o & 1 ? e === ni ? Bn++ : (Bn = 0, ni = e) : Bn = 0, yt(), null
}

function rn() {
    if (rt !== null) {
        var e = ia(fl), t = _e.transition, n = I;
        try {
            if (_e.transition = null, I = 16 > e ? 16 : e, rt === null) var r = !1; else {
                if (e = rt, rt = null, fl = 0, M & 6) throw Error(S(331));
                var l = M;
                for (M |= 4, _ = e.current; _ !== null;) {
                    var o = _, i = o.child;
                    if (_.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (_ = a; _ !== null;) {
                                    var p = _;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Un(8, p, o)
                                    }
                                    var h = p.child;
                                    if (h !== null) h.return = p, _ = h; else for (; _ !== null;) {
                                        p = _;
                                        var m = p.sibling, g = p.return;
                                        if (gc(p), p === a) {
                                            _ = null;
                                            break
                                        }
                                        if (m !== null) {
                                            m.return = g, _ = m;
                                            break
                                        }
                                        _ = g
                                    }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var C = w.sibling;
                                        w.sibling = null, w = C
                                    } while (w !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, _ = i; else e:for (; _ !== null;) {
                        if (o = _, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Un(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, _ = f;
                            break e
                        }
                        _ = o.return
                    }
                }
                var c = e.current;
                for (_ = c; _ !== null;) {
                    i = _;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null) d.return = i, _ = d; else e:for (i = c; _ !== null;) {
                        if (u = _, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    _l(9, u)
                            }
                        } catch (E) {
                            V(u, u.return, E)
                        }
                        if (u === i) {
                            _ = null;
                            break e
                        }
                        var v = u.sibling;
                        if (v !== null) {
                            v.return = u.return, _ = v;
                            break e
                        }
                        _ = u.return
                    }
                }
                if (M = l, yt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
                    $e.onPostCommitFiberRoot(gl, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            I = n, _e.transition = t
        }
    }
    return !1
}

function cs(e, t, n) {
    t = cn(n, t), t = ic(e, t, 1), e = at(e, t, 1), t = se(), e !== null && (ur(e, 1, t), me(e, t))
}

function V(e, t, n) {
    if (e.tag === 3) cs(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            cs(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
                e = cn(n, e), e = uc(t, e, 1), t = at(t, e, 1), e = se(), t !== null && (ur(t, 1, e), me(t, e));
                break
            }
        }
        t = t.return
    }
}

function hp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, b === e && (te & n) === n && (J === 4 || J === 3 && (te & 130023424) === te && 500 > K() - Yi ? Nt(e, 0) : Ki |= n), me(e, t)
}

function Nc(e, t) {
    t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
    var n = se();
    e = Xe(e, t), e !== null && (ur(e, t, n), me(e, n))
}

function mp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Nc(e, n)
}

function vp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(S(314))
    }
    r !== null && r.delete(t), Nc(e, n)
}

var jc;
jc = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || pe.current) de = !0; else {
        if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, rp(e, t, n);
        de = !!(e.flags & 131072)
    } else de = !1, $ && t.flags & 1048576 && Ta(t, nl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Br(e, t), e = t.pendingProps;
            var l = on(t, ie.current);
            nn(t, n), l = Bi(null, t, r, e, l, n);
            var o = Ai();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (o = !0, el(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ii(t), l.updater = Cl, t.stateNode = l, l._reactInternals = t, Ho(t, r, e, n), t = Yo(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && ji(t), ue(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (Br(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = yp(r), e = Re(r, e), l) {
                    case 0:
                        t = Ko(null, t, r, e, n);
                        break e;
                    case 1:
                        t = es(null, t, r, e, n);
                        break e;
                    case 11:
                        t = qu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = bu(null, t, r, Re(r.type, e), n);
                        break e
                }
                throw Error(S(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Ko(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), es(e, t, r, l, n);
        case 3:
            e:{
                if (fc(t), e === null) throw Error(S(387));
                r = t.pendingProps, o = t.memoizedState, l = o.element, Ua(e, t), ol(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated) if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    l = cn(Error(S(423)), t), t = ts(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = cn(Error(S(424)), t), t = ts(e, t, r, n, l);
                    break e
                } else for (ge = st(t.stateNode.containerInfo.firstChild), ye = t, $ = !0, Te = null, n = Da(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (un(), r === l) {
                        t = Ge(e, t, n);
                        break e
                    }
                    ue(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return $a(t), e === null && Ao(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Do(r, l) ? i = null : o !== null && Do(r, o) && (t.flags |= 32), cc(e, t), ue(e, t, i, n), t.child;
        case 6:
            return e === null && Ao(t), null;
        case 13:
            return dc(e, t, n);
        case 4:
            return Di(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sn(t, null, r, n) : ue(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), qu(e, t, r, l, n);
        case 7:
            return ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(rl, r._currentValue), r._currentValue = i, o !== null) if (Ie(o.value, i)) {
                    if (o.children === l.children && !pe.current) {
                        t = Ge(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var u = o.dependencies;
                    if (u !== null) {
                        i = o.child;
                        for (var s = u.firstContext; s !== null;) {
                            if (s.context === r) {
                                if (o.tag === 1) {
                                    s = Qe(-1, n & -n), s.tag = 2;
                                    var a = o.updateQueue;
                                    if (a !== null) {
                                        a = a.shared;
                                        var p = a.pending;
                                        p === null ? s.next = s : (s.next = p.next, p.next = s), a.pending = s
                                    }
                                }
                                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Wo(o.return, n, t), u.lanes |= n;
                                break
                            }
                            s = s.next
                        }
                    } else if (o.tag === 10) i = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (i = o.return, i === null) throw Error(S(341));
                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Wo(i, n, t), i = o.sibling
                    } else i = o.child;
                    if (i !== null) i.return = o; else for (i = o; i !== null;) {
                        if (i === t) {
                            i = null;
                            break
                        }
                        if (o = i.sibling, o !== null) {
                            o.return = i.return, i = o;
                            break
                        }
                        i = i.return
                    }
                    o = i
                }
                ue(e, t, l.children, n), t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, nn(t, n), l = Pe(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Re(r, t.pendingProps), l = Re(r.type, l), bu(e, t, r, l, n);
        case 15:
            return sc(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Br(e, t), t.tag = 1, he(r) ? (e = !0, el(t)) : e = !1, nn(t, n), oc(t, r, l), Ho(t, r, l, n), Yo(null, t, r, !0, e, n);
        case 19:
            return pc(e, t, n);
        case 22:
            return ac(e, t, n)
    }
    throw Error(S(156, t.tag))
};

function Lc(e, t) {
    return na(e, t)
}

function gp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ce(e, t, n, r) {
    return new gp(e, t, n, r)
}

function Zi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function yp(e) {
    if (typeof e == "function") return Zi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === vi) return 11;
        if (e === gi) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Vr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Zi(e) && (i = 1); else if (typeof e == "string") i = 5; else e:switch (e) {
        case Bt:
            return jt(n.children, l, o, t);
        case mi:
            i = 8, l |= 8;
            break;
        case ho:
            return e = Ce(12, n, t, l | 2), e.elementType = ho, e.lanes = o, e;
        case mo:
            return e = Ce(13, n, t, l), e.elementType = mo, e.lanes = o, e;
        case vo:
            return e = Ce(19, n, t, l), e.elementType = vo, e.lanes = o, e;
        case $s:
            return Nl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Fs:
                    i = 10;
                    break e;
                case Us:
                    i = 9;
                    break e;
                case vi:
                    i = 11;
                    break e;
                case gi:
                    i = 14;
                    break e;
                case qe:
                    i = 16, r = null;
                    break e
            }
            throw Error(S(130, e == null ? e : typeof e, ""))
    }
    return t = Ce(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function jt(e, t, n, r) {
    return e = Ce(7, e, r, t), e.lanes = n, e
}

function Nl(e, t, n, r) {
    return e = Ce(22, e, r, t), e.elementType = $s, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function uo(e, t, n) {
    return e = Ce(6, e, null, t), e.lanes = n, e
}

function so(e, t, n) {
    return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function wp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function qi(e, t, n, r, l, o, i, u, s) {
    return e = new wp(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ce(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ii(o), e
}

function Sp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: $t, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function Rc(e) {
    if (!e) return mt;
    e = e._reactInternals;
    e:{
        if (It(e) !== e || e.tag !== 1) throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (he(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (he(n)) return Ra(e, n, t)
    }
    return t
}

function zc(e, t, n, r, l, o, i, u, s) {
    return e = qi(n, r, !0, e, l, o, i, u, s), e.context = Rc(null), n = e.current, r = se(), l = ft(n), o = Qe(r, l), o.callback = t ?? null, at(n, o, l), e.current.lanes = l, ur(e, l, r), me(e, r), e
}

function jl(e, t, n, r) {
    var l = t.current, o = se(), i = ft(l);
    return n = Rc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(o, i), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, i), e !== null && (Me(e, l, i, o), Fr(e, l, i)), i
}

function pl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function fs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function bi(e, t) {
    fs(e, t), (e = e.alternate) && fs(e, t)
}

function kp() {
    return null
}

var Tc = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function eu(e) {
    this._internalRoot = e
}

Ll.prototype.render = eu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    jl(e, t, null, null)
};
Ll.prototype.unmount = eu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ot(function () {
            jl(null, e, null, null)
        }), t[Ye] = null
    }
};

function Ll(e) {
    this._internalRoot = e
}

Ll.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = aa();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++) ;
        et.splice(n, 0, e), n === 0 && fa(e)
    }
};

function tu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Rl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function ds() {
}

function xp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var a = pl(i);
                o.call(a)
            }
        }
        var i = zc(t, r, e, 0, null, !1, !1, "", ds);
        return e._reactRootContainer = i, e[Ye] = i.current, Gn(e.nodeType === 8 ? e.parentNode : e), Ot(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var a = pl(s);
            u.call(a)
        }
    }
    var s = qi(e, 0, !1, null, null, !1, !1, "", ds);
    return e._reactRootContainer = s, e[Ye] = s.current, Gn(e.nodeType === 8 ? e.parentNode : e), Ot(function () {
        jl(t, s, n, r)
    }), s
}

function zl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var s = pl(i);
                u.call(s)
            }
        }
        jl(t, i, e, l)
    } else i = xp(n, t, e, l, r);
    return pl(i)
}

ua = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ln(t.pendingLanes);
                n !== 0 && (Si(t, n | 1), me(t, K()), !(M & 6) && (fn = K() + 500, yt()))
            }
            break;
        case 13:
            Ot(function () {
                var r = Xe(e, 1);
                if (r !== null) {
                    var l = se();
                    Me(r, e, 1, l)
                }
            }), bi(e, 1)
    }
};
ki = function (e) {
    if (e.tag === 13) {
        var t = Xe(e, 134217728);
        if (t !== null) {
            var n = se();
            Me(t, e, 134217728, n)
        }
        bi(e, 134217728)
    }
};
sa = function (e) {
    if (e.tag === 13) {
        var t = ft(e), n = Xe(e, t);
        if (n !== null) {
            var r = se();
            Me(n, e, t, r)
        }
        bi(e, t)
    }
};
aa = function () {
    return I
};
ca = function (e, t) {
    var n = I;
    try {
        return I = e, t()
    } finally {
        I = n
    }
};
Po = function (e, t, n) {
    switch (t) {
        case"input":
            if (wo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = kl(r);
                        if (!l) throw Error(S(90));
                        As(r), wo(r, l)
                    }
                }
            }
            break;
        case"textarea":
            Vs(e, n);
            break;
        case"select":
            t = n.value, t != null && qt(e, !!n.multiple, t, !1)
    }
};
Js = Xi;
Zs = Ot;
var Ep = {usingClientEntryPoint: !1, Events: [ar, Ht, kl, Xs, Gs, Xi]},
    Pn = {findFiberByHostInstance: Ct, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom"}, Cp = {
        bundleType: Pn.bundleType,
        version: Pn.version,
        rendererPackageName: Pn.rendererPackageName,
        rendererConfig: Pn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Je.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = ea(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Pn.findFiberByHostInstance || kp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber) try {
        gl = Rr.inject(Cp), $e = Rr
    } catch {
    }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ep;
Se.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tu(t)) throw Error(S(200));
    return Sp(e, t, null, n)
};
Se.createRoot = function (e, t) {
    if (!tu(e)) throw Error(S(299));
    var n = !1, r = "", l = Tc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = qi(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Gn(e.nodeType === 8 ? e.parentNode : e), new eu(t)
};
Se.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
    return e = ea(t), e = e === null ? null : e.stateNode, e
};
Se.flushSync = function (e) {
    return Ot(e)
};
Se.hydrate = function (e, t, n) {
    if (!Rl(t)) throw Error(S(200));
    return zl(null, e, t, !0, n)
};
Se.hydrateRoot = function (e, t, n) {
    if (!tu(e)) throw Error(S(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Tc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = zc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ye] = t.current, Gn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ll(t)
};
Se.render = function (e, t, n) {
    if (!Rl(t)) throw Error(S(200));
    return zl(null, e, t, !1, n)
};
Se.unmountComponentAtNode = function (e) {
    if (!Rl(e)) throw Error(S(40));
    return e._reactRootContainer ? (Ot(function () {
        zl(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Ye] = null
        })
    }), !0) : !1
};
Se.unstable_batchedUpdates = Xi;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Rl(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return zl(e, t, n, !1, r)
};
Se.version = "18.3.1-next-f1338f8080-20240426";

function Oc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)
    } catch (e) {
        console.error(e)
    }
}

Oc(), Os.exports = Se;
var _p = Os.exports, ps = _p;
fo.createRoot = ps.createRoot, fo.hydrateRoot = ps.hydrateRoot;
const Pp = "./assets/friend1-Dco0CpTm.jpg", Np = "./assets/friend2-BZHdxBgh.jpg", jp = "./assets/friend3-CegvjJ6D.jpg",
    Lp = "./assets/friend4-33FWBozT.jpg", Rp = "./assets/friend5-B4R7hd-d.jpg", zp = "./assets/friend6-C2AoIAWQ.jpg",
    Tp = "./assets/friend7-DCWY6cc4.jpg", Op = "./assets/friend8-DkZ8dzOv.jpg", Mp = "./assets/friend9-DHtxMPKi.jpg",
    Ip = "./assets/main-BrJDQBlI.jpg",
    Dp = [{photo: Mp, name: "Yoda", id: 0}, {photo: Op, name: "Obi-Wan Kenobi", id: 10, other: "hero"}, {
        photo: Tp,
        name: "Millennium Falcon",
        id: 10,
        other: "starship"
    }, {photo: zp, name: "Leia Organa", id: 5, other: "hero"}, {
        photo: Rp,
        name: "Han Solo",
        id: 14,
        other: "hero"
    }, {photo: Lp, name: "Chewbacca", id: 13, other: "hero"}, {
        photo: jp,
        name: "Wicket Systri Warrick",
        id: 30,
        other: "hero"
    }, {photo: Np, name: "C-3PO", id: 2, other: "hero"}, {photo: Pp, name: "R2-D2", id: 3, other: "hero"}],
    Zt = "https://sw-info-api.herokuapp.com", Mc = 30 * 24 * 60 * 60 * 1e3,
    zn = [{name: "Home", route: "home"}, {name: "About Me", route: "aboutMe"}, {
        name: "Star Wars",
        route: "starWars"
    }, {name: "Contact", route: "contact"}];

/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr() {
    return lr = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, lr.apply(this, arguments)
}

var lt;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(lt || (lt = {}));
const hs = "popstate";

function Fp(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {pathname: o, search: i, hash: u} = r.location;
        return oi("", {
            pathname: o,
            search: i,
            hash: u
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : hl(l)
    }

    return $p(t, n, null, e)
}

function X(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Ic(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {
        }
    }
}

function Up() {
    return Math.random().toString(36).substr(2, 8)
}

function ms(e, t) {
    return {usr: e.state, key: e.key, idx: t}
}

function oi(e, t, n, r) {
    return n === void 0 && (n = null), lr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? vn(t) : t, {state: n, key: t && t.key || r || Up()})
}

function hl(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function vn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function $p(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l = document.defaultView, v5Compat: o = !1} = r, i = l.history, u = lt.Pop, s = null, a = p();
    a == null && (a = 0, i.replaceState(lr({}, i.state, {idx: a}), ""));

    function p() {
        return (i.state || {idx: null}).idx
    }

    function h() {
        u = lt.Pop;
        let C = p(), f = C == null ? null : C - a;
        a = C, s && s({action: u, location: w.location, delta: f})
    }

    function m(C, f) {
        u = lt.Push;
        let c = oi(w.location, C, f);
        a = p() + 1;
        let d = ms(c, a), v = w.createHref(c);
        try {
            i.pushState(d, "", v)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            l.location.assign(v)
        }
        o && s && s({action: u, location: w.location, delta: 1})
    }

    function g(C, f) {
        u = lt.Replace;
        let c = oi(w.location, C, f);
        a = p();
        let d = ms(c, a), v = w.createHref(c);
        i.replaceState(d, "", v), o && s && s({action: u, location: w.location, delta: 0})
    }

    function y(C) {
        let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
            c = typeof C == "string" ? C : hl(C);
        return c = c.replace(/ $/, "%20"), X(f, "No window.location.(origin|href) available to create URL for href: " + c), new URL(c, f)
    }

    let w = {
        get action() {
            return u
        }, get location() {
            return e(l, i)
        }, listen(C) {
            if (s) throw new Error("A history only accepts one active listener");
            return l.addEventListener(hs, h), s = C, () => {
                l.removeEventListener(hs, h), s = null
            }
        }, createHref(C) {
            return t(l, C)
        }, createURL: y, encodeLocation(C) {
            let f = y(C);
            return {pathname: f.pathname, search: f.search, hash: f.hash}
        }, push: m, replace: g, go(C) {
            return i.go(C)
        }
    };
    return w
}

var vs;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(vs || (vs = {}));

function Bp(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? vn(t) : t, l = nu(r.pathname || "/", n);
    if (l == null) return null;
    let o = Dc(e);
    Ap(o);
    let i = null;
    for (let u = 0; i == null && u < o.length; ++u) {
        let s = bp(l);
        i = Jp(o[u], s)
    }
    return i
}

function Dc(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (o, i, u) => {
        let s = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        s.relativePath.startsWith("/") && (X(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
        let a = pt([r, s.relativePath]), p = n.concat(s);
        o.children && o.children.length > 0 && (X(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), Dc(o.children, t, p, a)), !(o.path == null && !o.index) && t.push({
            path: a,
            score: Xp(a, o.index),
            routesMeta: p
        })
    };
    return e.forEach((o, i) => {
        var u;
        if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i); else for (let s of Fc(o.path)) l(o, i, s)
    }), t
}

function Fc(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = Fc(r.join("/")), u = [];
    return u.push(...i.map(s => s === "" ? o : [o, s].join("/"))), l && u.push(...i), u.map(s => e.startsWith("/") && s === "" ? "/" : s)
}

function Ap(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Gp(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}

const Wp = /^:[\w-]+$/, Vp = 3, Hp = 2, Qp = 1, Kp = 10, Yp = -2, gs = e => e === "*";

function Xp(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(gs) && (r += Yp), t && (r += Hp), n.filter(l => !gs(l)).reduce((l, o) => l + (Wp.test(o) ? Vp : o === "" ? Qp : Kp), r)
}

function Gp(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Jp(e, t) {
    let {routesMeta: n} = e, r = {}, l = "/", o = [];
    for (let i = 0; i < n.length; ++i) {
        let u = n[i], s = i === n.length - 1, a = l === "/" ? t : t.slice(l.length) || "/",
            p = Zp({path: u.relativePath, caseSensitive: u.caseSensitive, end: s}, a);
        if (!p) return null;
        Object.assign(r, p.params);
        let h = u.route;
        o.push({
            params: r,
            pathname: pt([l, p.pathname]),
            pathnameBase: rh(pt([l, p.pathnameBase])),
            route: h
        }), p.pathnameBase !== "/" && (l = pt([l, p.pathnameBase]))
    }
    return o
}

function Zp(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = qp(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
    return {
        params: r.reduce((a, p, h) => {
            let {paramName: m, isOptional: g} = p;
            if (m === "*") {
                let w = u[h] || "";
                i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const y = u[h];
            return g && !y ? a[m] = void 0 : a[m] = (y || "").replace(/%2F/g, "/"), a
        }, {}), pathname: o, pathnameBase: i, pattern: e
    }
}

function qp(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Ic(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, s) => (r.push({
            paramName: u,
            isOptional: s != null
        }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({paramName: "*"}), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function bp(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Ic(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function nu(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function eh(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r = "", hash: l = ""} = typeof e == "string" ? vn(e) : e;
    return {pathname: n ? n.startsWith("/") ? n : th(n, t) : t, search: lh(r), hash: oh(l)}
}

function th(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function ao(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function nh(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Uc(e, t) {
    let n = nh(e);
    return t ? n.map((r, l) => l === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function $c(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = vn(e) : (l = lr({}, e), X(!l.pathname || !l.pathname.includes("?"), ao("?", "pathname", "search", l)), X(!l.pathname || !l.pathname.includes("#"), ao("#", "pathname", "hash", l)), X(!l.search || !l.search.includes("#"), ao("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
    if (i == null) u = n; else {
        let h = t.length - 1;
        if (!r && i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === "..";) m.shift(), h -= 1;
            l.pathname = m.join("/")
        }
        u = h >= 0 ? t[h] : "/"
    }
    let s = eh(l, u), a = i && i !== "/" && i.endsWith("/"), p = (o || i === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (a || p) && (s.pathname += "/"), s
}

const pt = e => e.join("/").replace(/\/\/+/g, "/"), rh = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    lh = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    oh = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function ih(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}

const Bc = ["post", "put", "patch", "delete"];
new Set(Bc);
const uh = ["get", ...Bc];
new Set(uh);

/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function or() {
    return or = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, or.apply(this, arguments)
}

const ru = k.createContext(null), sh = k.createContext(null), Dt = k.createContext(null), Tl = k.createContext(null),
    Ft = k.createContext({outlet: null, matches: [], isDataRoute: !1}), Ac = k.createContext(null);

function ah(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    fr() || X(!1);
    let {basename: r, navigator: l} = k.useContext(Dt), {hash: o, pathname: i, search: u} = Vc(e, {relative: n}), s = i;
    return r !== "/" && (s = i === "/" ? r : pt([r, i])), l.createHref({pathname: s, search: u, hash: o})
}

function fr() {
    return k.useContext(Tl) != null
}

function Ol() {
    return fr() || X(!1), k.useContext(Tl).location
}

function Wc(e) {
    k.useContext(Dt).static || k.useLayoutEffect(e)
}

function ch() {
    let {isDataRoute: e} = k.useContext(Ft);
    return e ? Eh() : fh()
}

function fh() {
    fr() || X(!1);
    let e = k.useContext(ru), {
            basename: t,
            future: n,
            navigator: r
        } = k.useContext(Dt), {matches: l} = k.useContext(Ft), {pathname: o} = Ol(),
        i = JSON.stringify(Uc(l, n.v7_relativeSplatPath)), u = k.useRef(!1);
    return Wc(() => {
        u.current = !0
    }), k.useCallback(function (a, p) {
        if (p === void 0 && (p = {}), !u.current) return;
        if (typeof a == "number") {
            r.go(a);
            return
        }
        let h = $c(a, JSON.parse(i), o, p.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : pt([t, h.pathname])), (p.replace ? r.replace : r.push)(h, p.state, p)
    }, [t, r, i, o, e])
}

function Vc(e, t) {
    let {relative: n} = t === void 0 ? {} : t, {future: r} = k.useContext(Dt), {matches: l} = k.useContext(Ft), {pathname: o} = Ol(),
        i = JSON.stringify(Uc(l, r.v7_relativeSplatPath));
    return k.useMemo(() => $c(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function dh(e, t) {
    return ph(e, t)
}

function ph(e, t, n, r) {
    fr() || X(!1);
    let {navigator: l} = k.useContext(Dt), {matches: o} = k.useContext(Ft), i = o[o.length - 1], u = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let a = Ol(), p;
    if (t) {
        var h;
        let C = typeof t == "string" ? vn(t) : t;
        s === "/" || (h = C.pathname) != null && h.startsWith(s) || X(!1), p = C
    } else p = a;
    let m = p.pathname || "/", g = m;
    if (s !== "/") {
        let C = s.replace(/^\//, "").split("/");
        g = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/")
    }
    let y = Bp(e, {pathname: g}), w = yh(y && y.map(C => Object.assign({}, C, {
        params: Object.assign({}, u, C.params),
        pathname: pt([s, l.encodeLocation ? l.encodeLocation(C.pathname).pathname : C.pathname]),
        pathnameBase: C.pathnameBase === "/" ? s : pt([s, l.encodeLocation ? l.encodeLocation(C.pathnameBase).pathname : C.pathnameBase])
    })), o, n, r);
    return t && w ? k.createElement(Tl.Provider, {
        value: {
            location: or({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, p), navigationType: lt.Pop
        }
    }, w) : w
}

function hh() {
    let e = xh(), t = ih(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null, l = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"};
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? k.createElement("pre", {style: l}, n) : null, null)
}

const mh = k.createElement(hh, null);

class vh extends k.Component {
    constructor(t) {
        super(t), this.state = {location: t.location, revalidation: t.revalidation, error: t.error}
    }

    static getDerivedStateFromError(t) {
        return {error: t}
    }

    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }

    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }

    render() {
        return this.state.error !== void 0 ? k.createElement(Ft.Provider, {value: this.props.routeContext}, k.createElement(Ac.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function gh(e) {
    let {routeContext: t, match: n, children: r} = e, l = k.useContext(ru);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Ft.Provider, {value: t}, r)
}

function yh(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches; else return null
    }
    let i = e, u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let p = i.findIndex(h => h.route.id && (u == null ? void 0 : u[h.route.id]) !== void 0);
        p >= 0 || X(!1), i = i.slice(0, Math.min(i.length, p + 1))
    }
    let s = !1, a = -1;
    if (n && r && r.v7_partialHydration) for (let p = 0; p < i.length; p++) {
        let h = i[p];
        if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (a = p), h.route.id) {
            let {loaderData: m, errors: g} = n,
                y = h.route.loader && m[h.route.id] === void 0 && (!g || g[h.route.id] === void 0);
            if (h.route.lazy || y) {
                s = !0, a >= 0 ? i = i.slice(0, a + 1) : i = [i[0]];
                break
            }
        }
    }
    return i.reduceRight((p, h, m) => {
        let g, y = !1, w = null, C = null;
        n && (g = u && h.route.id ? u[h.route.id] : void 0, w = h.route.errorElement || mh, s && (a < 0 && m === 0 ? (y = !0, C = null) : a === m && (y = !0, C = h.route.hydrateFallbackElement || null)));
        let f = t.concat(i.slice(0, m + 1)), c = () => {
            let d;
            return g ? d = w : y ? d = C : h.route.Component ? d = k.createElement(h.route.Component, null) : h.route.element ? d = h.route.element : d = p, k.createElement(gh, {
                match: h,
                routeContext: {outlet: p, matches: f, isDataRoute: n != null},
                children: d
            })
        };
        return n && (h.route.ErrorBoundary || h.route.errorElement || m === 0) ? k.createElement(vh, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: g,
            children: c(),
            routeContext: {outlet: null, matches: f, isDataRoute: !0}
        }) : c()
    }, null)
}

var Hc = function (e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
}(Hc || {}), ml = function (e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(ml || {});

function wh(e) {
    let t = k.useContext(ru);
    return t || X(!1), t
}

function Sh(e) {
    let t = k.useContext(sh);
    return t || X(!1), t
}

function kh(e) {
    let t = k.useContext(Ft);
    return t || X(!1), t
}

function Qc(e) {
    let t = kh(), n = t.matches[t.matches.length - 1];
    return n.route.id || X(!1), n.route.id
}

function xh() {
    var e;
    let t = k.useContext(Ac), n = Sh(ml.UseRouteError), r = Qc(ml.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Eh() {
    let {router: e} = wh(Hc.UseNavigateStable), t = Qc(ml.UseNavigateStable), n = k.useRef(!1);
    return Wc(() => {
        n.current = !0
    }), k.useCallback(function (l, o) {
        o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, or({fromRouteId: t}, o)))
    }, [e, t])
}

function Et(e) {
    X(!1)
}

function Ch(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = lt.Pop,
        navigator: o,
        static: i = !1,
        future: u
    } = e;
    fr() && X(!1);
    let s = t.replace(/^\/*/, "/"), a = k.useMemo(() => ({
        basename: s,
        navigator: o,
        static: i,
        future: or({v7_relativeSplatPath: !1}, u)
    }), [s, u, o, i]);
    typeof r == "string" && (r = vn(r));
    let {pathname: p = "/", search: h = "", hash: m = "", state: g = null, key: y = "default"} = r,
        w = k.useMemo(() => {
            let C = nu(p, s);
            return C == null ? null : {location: {pathname: C, search: h, hash: m, state: g, key: y}, navigationType: l}
        }, [s, p, h, m, g, y, l]);
    return w == null ? null : k.createElement(Dt.Provider, {value: a}, k.createElement(Tl.Provider, {
        children: n,
        value: w
    }))
}

function Kc(e) {
    let {children: t, location: n} = e;
    return dh(ii(t), n)
}

new Promise(() => {
});

function ii(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return k.Children.forEach(e, (r, l) => {
        if (!k.isValidElement(r)) return;
        let o = [...t, l];
        if (r.type === k.Fragment) {
            n.push.apply(n, ii(r.props.children, o));
            return
        }
        r.type !== Et && X(!1), !r.props.index || !r.props.children || X(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = ii(r.props.children, o)), n.push(i)
    }), n
}

/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ui() {
    return ui = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ui.apply(this, arguments)
}

function _h(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), l, o;
    for (o = 0; o < r.length; o++) l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function Ph(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Nh(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Ph(e)
}

const jh = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    Lh = "6";
try {
    window.__reactRouterVersion = Lh
} catch {
}
const Rh = "startTransition", ys = hf[Rh];

function zh(e) {
    let {basename: t, children: n, future: r, window: l} = e, o = k.useRef();
    o.current == null && (o.current = Fp({window: l, v5Compat: !0}));
    let i = o.current, [u, s] = k.useState({action: i.action, location: i.location}), {v7_startTransition: a} = r || {},
        p = k.useCallback(h => {
            a && ys ? ys(() => s(h)) : s(h)
        }, [s, a]);
    return k.useLayoutEffect(() => i.listen(p), [i, p]), k.createElement(Ch, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: i,
        future: r
    })
}

const Th = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Yc = k.forwardRef(function (t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: o,
            replace: i,
            state: u,
            target: s,
            to: a,
            preventScrollReset: p,
            unstable_viewTransition: h
        } = t, m = _h(t, jh), {basename: g} = k.useContext(Dt), y, w = !1;
        if (typeof a == "string" && Oh.test(a) && (y = a, Th)) try {
            let d = new URL(window.location.href), v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a),
                E = nu(v.pathname, g);
            v.origin === d.origin && E != null ? a = E + v.search + v.hash : w = !0
        } catch {
        }
        let C = ah(a, {relative: l}),
            f = Mh(a, {replace: i, state: u, target: s, preventScrollReset: p, relative: l, unstable_viewTransition: h});

        function c(d) {
            r && r(d), d.defaultPrevented || f(d)
        }

        return k.createElement("a", ui({}, m, {href: y || C, onClick: w || o ? r : c, ref: n, target: s}))
    });
var ws;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(ws || (ws = {}));
var Ss;
(function (e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Ss || (Ss = {}));

function Mh(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: u
    } = t === void 0 ? {} : t, s = ch(), a = Ol(), p = Vc(e, {relative: i});
    return k.useCallback(h => {
        if (Nh(h, n)) {
            h.preventDefault();
            let m = r !== void 0 ? r : hl(a) === hl(p);
            s(e, {replace: m, state: l, preventScrollReset: o, relative: i, unstable_viewTransition: u})
        }
    }, [a, s, p, r, l, n, e, o, i, u])
}

const Ih = ({item: e}) => x.jsx("li", {
        children: x.jsx(Yc, {
            className: "nav-item btn btn-danger mx-1",
            to: e.route,
            children: e.name
        })
    }), Dh = () => x.jsx("nav", {
        className: "fixed-top mt-1 ms-5",
        children: x.jsx("ul", {className: "nav", children: zn.map((e, t) => x.jsx(Ih, {item: e}, t))})
    }), dn = k.createContext(""), Fh = () => {
        const {mainHeroPhoto: e, setMainHeroPhoto: t} = k.useContext(dn);
        return x.jsxs("header", {
            children: [x.jsx(Dh, {}), x.jsx("h1", {
                className: "text-center py-4 headerName",
                children: e.name
            })]
        })
    }, Uh = () => {
        const {mainHeroPhoto: e, setMainHeroPhoto: t} = k.useContext(dn);
        return x.jsx("section", {
            className: "float-start me-3 w-25",
            children: x.jsx("img", {className: "w-100", src: e.photo, alt: "hero"})
        })
    }, $h = ({friendPhoto: e, pos: t}) => {
        let n = "col-4 p-1";
        return t === 7 && (n += " bottom-left"), t === 9 && (n += " bottom-right"), x.jsx("img", {
            className: n,
            src: e,
            alt: "friend"
        })
    }, Bh = () => {
        const {dreamTeam: e, setDreamTeam: t} = k.useContext(dn), {
            mainHeroPhoto: n,
            setMainHeroPhoto: r
        } = k.useContext(dn), l = o => {
            let i = n;
            const u = o.target.attributes.src.value, s = e.find(p => p.photo === u),
                a = e.findIndex(p => p.name === s.name);
            if (a >= 0) {
                r(s);
                const p = e;
                p[a] = i, t(p)
            }
        };
        return x.jsxs("section", {
            className: "dreamTeam float-end w-50 border",
            children: [x.jsx("h2", {
                className: "col-12 border-bottom text-center",
                children: "Dream Team"
            }), x.jsx("section", {
                className: "display-1 flex-wrap flex-column",
                children: e.map((o, i) => x.jsx(Yc, {
                    className: "me-1 flex-wrap ",
                    to: `/home/${o.name}`,
                    children: x.jsx("img", {onClick: l, className: "img", src: o.photo, alt: "foto"})
                }, i.name))
            }), x.jsx(Kc, {
                children: e.map((o, i) => x.jsx(Et, {
                    path: `home/${o.name}`,
                    element: x.jsx($h, {friendPhoto: o.photo})
                }, i.name))
            })]
        })
    }, Xc = () => {
        const [e, t] = k.useState("");
        return k.useEffect(() => {
            console.log("Mount Story");
            const n = sessionStorage.getItem("opening_crawl");
            if (n) t(n); else {
                const r = Math.floor(1 + Math.random() * 6);
                fetch(`${Zt}/v1/films/${r}`).then(l => l.json()).then(l => {
                    t(l.opening_crawl), sessionStorage.setItem("opening_crawl", l.opening_crawl)
                }).catch(l => {
                    console.log(l.message)
                })
            }
            return () => {
                console.log("Unmounted Story")
            }
        }, []), e ? x.jsx("p", {
            className: "farGalaxy",
            children: e
        }) : x.jsx("div", {className: "spinner-border text-success"})
    }, ks = () => x.jsxs("main", {className: "clearfix", children: [x.jsx(Uh, {}), x.jsx(Bh, {}), x.jsx(Xc, {})]}),
    Ah = "_hero_box_tfwgi_1", Wh = "_img_hero_tfwgi_9", zr = {hero_box: Ah, img_hero: Wh}, Vh = () => {
        const [e, t] = k.useState(!0), [n, r] = k.useState({}), {mainHeroPhoto: l, setMainHeroPhoto: o} = k.useContext(dn);
        return k.useEffect(() => {
            console.log("AboutMe mount");
            const i = JSON.parse(localStorage.getItem("character"));
            return i.name === l.name && Date.now() - i.time < Mc ? (t(!1), r(i.payload)) : l.other === "starship" ? fetch(`${Zt}/v1/transports/${l.id}`).then(u => u.json()).then(u => {
                console.log(u);
                const s = {name: u.name, id: u.id, model: u.model, image: `${Zt}/${u.image}`};
                t(!1), r(s)
            }) : fetch(`${Zt}/v1/peoples/${l.id}`).then(u => u.json()).then(u => {
                console.log(u);
                const s = {
                    name: u.name,
                    eye_color: u.eye_color,
                    gender: u.gender,
                    birth_year: u.birth_year,
                    image: `${Zt}/${u.image}`
                };
                t(!1), r(s);
                const a = {payload: s, time: Date.now()};
                localStorage.setItem("character", JSON.stringify(a))
            }), () => {
                console.log("AboutMe unmounted")
            }
        }, []), e ? x.jsx("div", {className: "spinner-border text-success"}) : l.other === "starship" ? x.jsxs("div", {
            className: zr.hero_box,
            children: [x.jsxs("h1", {children: ["Name: ", x.jsx("span", {children: n.name})]}), x.jsxs("h2", {children: ["model:", x.jsx("span", {children: n.model}), " "]}), x.jsxs("h3", {children: ["id:", x.jsxs("span", {children: ["   ", n.id]}), " "]}), x.jsx("img", {
                className: zr.img_hero,
                src: n.image,
                alt: "hero"
            })]
        }) : x.jsxs("div", {
            className: zr.hero_box,
            children: [x.jsxs("h1", {children: ["Name:", n.name]}), x.jsxs("h2", {children: ["eye_color: ", n.eye_color]}), x.jsxs("h3", {children: ["gender: ", n.gender]}), x.jsxs("h4", {children: ["birth_year: ", n.birth_year]}), x.jsx("img", {
                className: zr.img_hero,
                src: n.image,
                alt: "hero"
            })]
        })
    }, Hh = () => x.jsx(Xc, {}), Qh = () => {
        const [e, t] = k.useState(["wait..."]), n = async r => {
            const i = (await (await fetch(r)).json()).map(s => s.name);
            t(i);
            const u = {payload: i, time: Date.now()};
            localStorage.setItem("planets", JSON.stringify(u))
        };
        return k.useEffect(() => {
            const r = JSON.parse(localStorage.getItem("planets"));
            return r && Date.now() - r.time < Mc ? t(r.payload) : n(`${Zt}/v1/planets`).catch(l => {
                console.log(l)
            }), () => {
                console.log("Contact unmounted")
            }
        }, []), x.jsx("div", {
            children: x.jsxs("form", {
                onSubmit: r => {
                    r.preventDefault()
                },
                children: [x.jsxs("label", {
                    children: ["First Name", x.jsx("input", {
                        type: "text",
                        name: "firstname",
                        placeholder: "Your name.."
                    })]
                }), x.jsxs("label", {
                    children: ["Planet", x.jsx("select", {
                        name: "planet",
                        children: e.map((r, l) => x.jsx("option", {value: r, children: r}, l))
                    })]
                }), x.jsxs("label", {
                    children: ["Subject", x.jsx("textarea", {
                        name: "subject",
                        placeholder: "Write something.."
                    })]
                }), x.jsx("input", {type: "submit", value: "Submit"})]
            })
        })
    }, Kh = () => x.jsxs(Kc, {
        children: [x.jsx(Et, {
            path: "/",
            element: x.jsx(ks, {})
        }), x.jsx(Et, {path: zn[0].route + "/*", element: x.jsx(ks, {})}), x.jsx(Et, {
            path: zn[1].route,
            element: x.jsx(Vh, {})
        }), x.jsx(Et, {path: zn[2].route, element: x.jsx(Hh, {})}), x.jsx(Et, {path: zn[3].route, element: x.jsx(Qh, {})})]
    });

class Yh extends k.Component {
    render() {
        return x.jsx("footer", {
            className: "row align-items-center",
            children: x.jsx("div", {
                className: "btn btn-danger col-2 offset-2 h-50",
                children: x.jsxs("p", {
                    className: "text-center m-0",
                    children: ["Send me an ", x.jsx("span", {className: "email", children: "email"})]
                })
            })
        })
    }
}

const Xh = () => {
    const [e, t] = co.useState({photo: Ip, name: "Luke Skywalker", id: 1, other: "hero"}), [n, r] = co.useState(Dp);
    return x.jsx("div", {
        children: x.jsxs(dn.Provider, {
            value: {
                mainHeroPhoto: e,
                setMainHeroPhoto: t,
                dreamTeam: n,
                setDreamTeam: r
            }, children: [x.jsx(Fh, {}), x.jsx(Kh, {}), x.jsx(Yh, {})]
        })
    })
};
fo.createRoot(document.getElementById("root")).render(x.jsxs(zh, {children: [x.jsx(Xh, {}), ","]}));
