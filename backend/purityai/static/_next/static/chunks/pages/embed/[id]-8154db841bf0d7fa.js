(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [975], {
        9264: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/embed/[id]", function() {
                return t(45605)
            }])
        },
        45605: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSP: function() {
                    return f
                }
            });
            var r = t(85893),
                u = t(67294),
                o = t(83867);

            function c(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var f = !0;
            e.default = u.memo((function(n) {
                return (0, r.jsx)(o.default, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })))), r.forEach((function(e) {
                            c(n, e, t[e])
                        }))
                    }
                    return n
                }({}, n))
            }))
        }
    },
    function(n) {
        n.O(0, [774, 834, 126, 369, 152, 524, 94, 2, 867, 888, 179], (function() {
            return e = 9264, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);