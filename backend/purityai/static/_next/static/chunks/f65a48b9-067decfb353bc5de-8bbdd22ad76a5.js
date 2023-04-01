(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [126], {
        4631: function(e) {
            e.exports = function() {
                "use strict";
                var e = navigator.userAgent,
                    t = navigator.platform,
                    r = /gecko\/\d/i.test(e),
                    n = /MSIE \d/.test(e),
                    i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
                    o = /Edge\/(\d+)/.exec(e),
                    l = n || i || o,
                    s = l && (n ? document.documentMode || 6 : +(o || i)[1]),
                    a = !o && /WebKit\//.test(e),
                    u = a && /Qt\/\d+\.\d+/.test(e),
                    c = !o && /Chrome\/(\d+)/.exec(e),
                    h = c && +c[1],
                    f = /Opera\//.test(e),
                    d = /Apple Computer/.test(navigator.vendor),
                    p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                    g = /PhantomJS/.test(e),
                    v = d && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
                    m = /Android/.test(e),
                    y = v || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                    b = v || /Mac/.test(t),
                    w = /\bCrOS\b/.test(e),
                    x = /win/i.test(t),
                    C = f && e.match(/Version\/(\d*\.\d*)/);
                C && (C = Number(C[1])), C && C >= 15 && (f = !1, a = !0);
                var S = b && (u || f && (null == C || C < 12.11)),
                    L = r || l && s >= 9;

                function k(e) {
                    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
                }
                var T, M = function(e, t) {
                    var r = e.className,
                        n = k(t).exec(r);
                    if (n) {
                        var i = r.slice(n.index + n[0].length);
                        e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
                    }
                };

                function N(e) {
                    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                    return e
                }

                function O(e, t) {
                    return N(e).appendChild(t)
                }

                function A(e, t, r, n) {
                    var i = document.createElement(e);
                    if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));
                    else if (t)
                        for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                    return i
                }

                function D(e, t, r, n) {
                    var i = A(e, t, r, n);
                    return i.setAttribute("role", "presentation"), i
                }

                function W(e, t) {
                    if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                    do {
                        if (11 == t.nodeType && (t = t.host), t == e) return !0
                    } while (t = t.parentNode)
                }

                function H() {
                    var e;
                    try {
                        e = document.activeElement
                    } catch (t) {
                        e = document.body || null
                    }
                    for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
                    return e
                }

                function F(e, t) {
                    var r = e.className;
                    k(t).test(r) || (e.className += (r ? " " : "") + t)
                }

                function E(e, t) {
                    for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !k(r[n]).test(t) && (t += " " + r[n]);
                    return t
                }
                T = document.createRange ? function(e, t, r, n) {
                    var i = document.createRange();
                    return i.setEnd(n || e, r), i.setStart(e, t), i
                } : function(e, t, r) {
                    var n = document.body.createTextRange();
                    try {
                        n.moveToElementText(e.parentNode)
                    } catch (i) {
                        return n
                    }
                    return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n
                };
                var P = function(e) {
                    e.select()
                };

                function I(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        return e.apply(null, t)
                    }
                }

                function z(e, t, r) {
                    for (var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
                    return t
                }

                function R(e, t, r, n, i) {
                    null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                    for (var o = n || 0, l = i || 0;;) {
                        var s = e.indexOf("\t", o);
                        if (s < 0 || s >= t) return l + (t - o);
                        l += s - o, l += r - l % r, o = s + 1
                    }
                }
                v ? P = function(e) {
                    e.selectionStart = 0, e.selectionEnd = e.value.length
                } : l && (P = function(e) {
                    try {
                        e.select()
                    } catch (t) {}
                });
                var B = function() {
                    this.id = null, this.f = null, this.time = 0, this.handler = I(this.onTimeout, this)
                };

                function G(e, t) {
                    for (var r = 0; r < e.length; ++r)
                        if (e[r] == t) return r;
                    return -1
                }
                B.prototype.onTimeout = function(e) {
                    e.id = 0, e.time <= +new Date ? e.f() : setTimeout(e.handler, e.time - +new Date)
                }, B.prototype.set = function(e, t) {
                    this.f = t;
                    var r = +new Date + e;
                    (!this.id || r < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = r)
                };
                var U = 50,
                    V = {
                        toString: function() {
                            return "CodeMirror.Pass"
                        }
                    },
                    K = {
                        scroll: !1
                    },
                    j = {
                        origin: "*mouse"
                    },
                    X = {
                        origin: "+move"
                    };

                function Y(e, t, r) {
                    for (var n = 0, i = 0;;) {
                        var o = e.indexOf("\t", n); - 1 == o && (o = e.length);
                        var l = o - n;
                        if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
                        if (i += o - n, n = o + 1, (i += r - i % r) >= t) return n
                    }
                }
                var _ = [""];

                function $(e) {
                    for (; _.length <= e;) _.push(q(_) + " ");
                    return _[e]
                }

                function q(e) {
                    return e[e.length - 1]
                }

                function Z(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
                    return r
                }

                function Q(e, t, r) {
                    for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i;) n++;
                    e.splice(n, 0, t)
                }

                function J() {}

                function ee(e, t) {
                    var r;
                    return Object.create ? r = Object.create(e) : (J.prototype = e, r = new J), t && z(t, r), r
                }
                var te = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

                function re(e) {
                    return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || te.test(e))
                }

                function ne(e, t) {
                    return t ? !!(t.source.indexOf("\\w") > -1 && re(e)) || t.test(e) : re(e)
                }

                function ie(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0
                }
                var oe = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

                function le(e) {
                    return e.charCodeAt(0) >= 768 && oe.test(e)
                }

                function se(e, t, r) {
                    for (;
                        (r < 0 ? t > 0 : t < e.length) && le(e.charAt(t));) t += r;
                    return t
                }

                function ae(e, t, r) {
                    for (var n = t > r ? -1 : 1;;) {
                        if (t == r) return t;
                        var i = (t + r) / 2,
                            o = n < 0 ? Math.ceil(i) : Math.floor(i);
                        if (o == t) return e(o) ? t : r;
                        e(o) ? r = o : t = o + n
                    }
                }

                function ue(e, t, r, n) {
                    if (!e) return n(t, r, "ltr", 0);
                    for (var i = !1, o = 0; o < e.length; ++o) {
                        var l = e[o];
                        (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr", o), i = !0)
                    }
                    i || n(t, r, "ltr")
                }
                var ce = null;

                function he(e, t, r) {
                    var n;
                    ce = null;
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.from < t && o.to > t) return i;
                        o.to == t && (o.from != o.to && "before" == r ? n = i : ce = i), o.from == t && (o.from != o.to && "before" != r ? n = i : ce = i)
                    }
                    return null != n ? n : ce
                }
                var fe = function() {
                    var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                        t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

                    function r(r) {
                        return r <= 247 ? e.charAt(r) : 1424 <= r && r <= 1524 ? "R" : 1536 <= r && r <= 1785 ? t.charAt(r - 1536) : 1774 <= r && r <= 2220 ? "r" : 8192 <= r && r <= 8203 ? "w" : 8204 == r ? "b" : "L"
                    }
                    var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        i = /[stwN]/,
                        o = /[LRr]/,
                        l = /[Lb1n]/,
                        s = /[1n]/;

                    function a(e, t, r) {
                        this.level = e, this.from = t, this.to = r
                    }
                    return function(e, t) {
                        var u = "ltr" == t ? "L" : "R";
                        if (0 == e.length || "ltr" == t && !n.test(e)) return !1;
                        for (var c = e.length, h = [], f = 0; f < c; ++f) h.push(r(e.charCodeAt(f)));
                        for (var d = 0, p = u; d < c; ++d) {
                            var g = h[d];
                            "m" == g ? h[d] = p : p = g
                        }
                        for (var v = 0, m = u; v < c; ++v) {
                            var y = h[v];
                            "1" == y && "r" == m ? h[v] = "n" : o.test(y) && (m = y, "r" == y && (h[v] = "R"))
                        }
                        for (var b = 1, w = h[0]; b < c - 1; ++b) {
                            var x = h[b];
                            "+" == x && "1" == w && "1" == h[b + 1] ? h[b] = "1" : "," != x || w != h[b + 1] || "1" != w && "n" != w || (h[b] = w), w = x
                        }
                        for (var C = 0; C < c; ++C) {
                            var S = h[C];
                            if ("," == S) h[C] = "N";
                            else if ("%" == S) {
                                var L = void 0;
                                for (L = C + 1; L < c && "%" == h[L]; ++L);
                                for (var k = C && "!" == h[C - 1] || L < c && "1" == h[L] ? "1" : "N", T = C; T < L; ++T) h[T] = k;
                                C = L - 1
                            }
                        }
                        for (var M = 0, N = u; M < c; ++M) {
                            var O = h[M];
                            "L" == N && "1" == O ? h[M] = "L" : o.test(O) && (N = O)
                        }
                        for (var A = 0; A < c; ++A)
                            if (i.test(h[A])) {
                                var D = void 0;
                                for (D = A + 1; D < c && i.test(h[D]); ++D);
                                for (var W = "L" == (A ? h[A - 1] : u), H = W == ("L" == (D < c ? h[D] : u)) ? W ? "L" : "R" : u, F = A; F < D; ++F) h[F] = H;
                                A = D - 1
                            }
                        for (var E, P = [], I = 0; I < c;)
                            if (l.test(h[I])) {
                                var z = I;
                                for (++I; I < c && l.test(h[I]); ++I);
                                P.push(new a(0, z, I))
                            } else {
                                var R = I,
                                    B = P.length,
                                    G = "rtl" == t ? 1 : 0;
                                for (++I; I < c && "L" != h[I]; ++I);
                                for (var U = R; U < I;)
                                    if (s.test(h[U])) {
                                        R < U && (P.splice(B, 0, new a(1, R, U)), B += G);
                                        var V = U;
                                        for (++U; U < I && s.test(h[U]); ++U);
                                        P.splice(B, 0, new a(2, V, U)), B += G, R = U
                                    } else ++U;
                                R < I && P.splice(B, 0, new a(1, R, I))
                            }
                        return "ltr" == t && (1 == P[0].level && (E = e.match(/^\s+/)) && (P[0].from = E[0].length, P.unshift(new a(0, 0, E[0].length))), 1 == q(P).level && (E = e.match(/\s+$/)) && (q(P).to -= E[0].length, P.push(new a(0, c - E[0].length, c)))), "rtl" == t ? P.reverse() : P
                    }
                }();

                function de(e, t) {
                    var r = e.order;
                    return null == r && (r = e.order = fe(e.text, t)), r
                }
                var pe = [],
                    ge = function(e, t, r) {
                        if (e.addEventListener) e.addEventListener(t, r, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, r);
                        else {
                            var n = e._handlers || (e._handlers = {});
                            n[t] = (n[t] || pe).concat(r)
                        }
                    };

                function ve(e, t) {
                    return e._handlers && e._handlers[t] || pe
                }

                function me(e, t, r) {
                    if (e.removeEventListener) e.removeEventListener(t, r, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, r);
                    else {
                        var n = e._handlers,
                            i = n && n[t];
                        if (i) {
                            var o = G(i, r);
                            o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
                        }
                    }
                }

                function ye(e, t) {
                    var r = ve(e, t);
                    if (r.length)
                        for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
                }

                function be(e, t, r) {
                    return "string" == typeof t && (t = {
                        type: t,
                        preventDefault: function() {
                            this.defaultPrevented = !0
                        }
                    }), ye(e, r || t.type, e, t), ke(t) || t.codemirrorIgnore
                }

                function we(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t)
                        for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) - 1 == G(r, t[n]) && r.push(t[n])
                }

                function xe(e, t) {
                    return ve(e, t).length > 0
                }

                function Ce(e) {
                    e.prototype.on = function(e, t) {
                        ge(this, e, t)
                    }, e.prototype.off = function(e, t) {
                        me(this, e, t)
                    }
                }

                function Se(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }

                function Le(e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }

                function ke(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
                }

                function Te(e) {
                    Se(e), Le(e)
                }

                function Me(e) {
                    return e.target || e.srcElement
                }

                function Ne(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), b && e.ctrlKey && 1 == t && (t = 3), t
                }
                var Oe, Ae, De = function() {
                    if (l && s < 9) return !1;
                    var e = A("div");
                    return "draggable" in e || "dragDrop" in e
                }();

                function We(e) {
                    if (null == Oe) {
                        var t = A("span", "\u200b");
                        O(e, A("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Oe = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && s < 8))
                    }
                    var r = Oe ? A("span", "\u200b") : A("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return r.setAttribute("cm-text", ""), r
                }

                function He(e) {
                    if (null != Ae) return Ae;
                    var t = O(e, document.createTextNode("A\u062eA")),
                        r = T(t, 0, 1).getBoundingClientRect(),
                        n = T(t, 1, 2).getBoundingClientRect();
                    return N(e), !(!r || r.left == r.right) && (Ae = n.right - r.right < 3)
                }
                var Fe = 3 != "\n\nb".split(/\n/).length ? function(e) {
                        for (var t = 0, r = [], n = e.length; t <= n;) {
                            var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
                            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                                l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1)
                        }
                        return r
                    } : function(e) {
                        return e.split(/\r\n?|\n/)
                    },
                    Ee = window.getSelection ? function(e) {
                        try {
                            return e.selectionStart != e.selectionEnd
                        } catch (t) {
                            return !1
                        }
                    } : function(e) {
                        var t;
                        try {
                            t = e.ownerDocument.selection.createRange()
                        } catch (r) {}
                        return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                    },
                    Pe = function() {
                        var e = A("div");
                        return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
                    }(),
                    Ie = null;

                function ze(e) {
                    if (null != Ie) return Ie;
                    var t = O(e, A("span", "x")),
                        r = t.getBoundingClientRect(),
                        n = T(t, 0, 1).getBoundingClientRect();
                    return Ie = Math.abs(r.left - n.left) > 1
                }
                var Re = {},
                    Be = {};

                function Ge(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Re[e] = t
                }

                function Ue(e, t) {
                    Be[e] = t
                }

                function Ve(e) {
                    if ("string" == typeof e && Be.hasOwnProperty(e)) e = Be[e];
                    else if (e && "string" == typeof e.name && Be.hasOwnProperty(e.name)) {
                        var t = Be[e.name];
                        "string" == typeof t && (t = {
                            name: t
                        }), (e = ee(t, e)).name = t.name
                    } else {
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ve("application/xml");
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ve("application/json")
                    }
                    return "string" == typeof e ? {
                        name: e
                    } : e || {
                        name: "null"
                    }
                }

                function Ke(e, t) {
                    t = Ve(t);
                    var r = Re[t.name];
                    if (!r) return Ke(e, "text/plain");
                    var n = r(e, t);
                    if (je.hasOwnProperty(t.name)) {
                        var i = je[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o])
                    }
                    if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps)
                        for (var l in t.modeProps) n[l] = t.modeProps[l];
                    return n
                }
                var je = {};

                function Xe(e, t) {
                    z(t, je.hasOwnProperty(e) ? je[e] : je[e] = {})
                }

                function Ye(e, t) {
                    if (!0 === t) return t;
                    if (e.copyState) return e.copyState(t);
                    var r = {};
                    for (var n in t) {
                        var i = t[n];
                        i instanceof Array && (i = i.concat([])), r[n] = i
                    }
                    return r
                }

                function _e(e, t) {
                    for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e;) t = r.state, e = r.mode;
                    return r || {
                        mode: e,
                        state: t
                    }
                }

                function $e(e, t, r) {
                    return !e.startState || e.startState(t, r)
                }
                var qe = function(e, t, r) {
                    this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r
                };

                function Ze(e, t) {
                    if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                    for (var r = e; !r.lines;)
                        for (var n = 0;; ++n) {
                            var i = r.children[n],
                                o = i.chunkSize();
                            if (t < o) {
                                r = i;
                                break
                            }
                            t -= o
                        }
                    return r.lines[t]
                }

                function Qe(e, t, r) {
                    var n = [],
                        i = t.line;
                    return e.iter(t.line, r.line + 1, (function(e) {
                        var o = e.text;
                        i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i
                    })), n
                }

                function Je(e, t, r) {
                    var n = [];
                    return e.iter(t, r, (function(e) {
                        n.push(e.text)
                    })), n
                }

                function et(e, t) {
                    var r = t - e.height;
                    if (r)
                        for (var n = e; n; n = n.parent) n.height += r
                }

                function tt(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent, r = G(t.lines, e), n = t.parent; n; t = n, n = n.parent)
                        for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
                    return r + t.first
                }

                function rt(e, t) {
                    var r = e.first;
                    e: do {
                        for (var n = 0; n < e.children.length; ++n) {
                            var i = e.children[n],
                                o = i.height;
                            if (t < o) {
                                e = i;
                                continue e
                            }
                            t -= o, r += i.chunkSize()
                        }
                        return r
                    } while (!e.lines);
                    for (var l = 0; l < e.lines.length; ++l) {
                        var s = e.lines[l].height;
                        if (t < s) break;
                        t -= s
                    }
                    return r + l
                }

                function nt(e, t) {
                    return t >= e.first && t < e.first + e.size
                }

                function it(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber))
                }

                function ot(e, t, r) {
                    if (void 0 === r && (r = null), !(this instanceof ot)) return new ot(e, t, r);
                    this.line = e, this.ch = t, this.sticky = r
                }

                function lt(e, t) {
                    return e.line - t.line || e.ch - t.ch
                }

                function st(e, t) {
                    return e.sticky == t.sticky && 0 == lt(e, t)
                }

                function at(e) {
                    return ot(e.line, e.ch)
                }

                function ut(e, t) {
                    return lt(e, t) < 0 ? t : e
                }

                function ct(e, t) {
                    return lt(e, t) < 0 ? e : t
                }

                function ht(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1))
                }

                function ft(e, t) {
                    if (t.line < e.first) return ot(e.first, 0);
                    var r = e.first + e.size - 1;
                    return t.line > r ? ot(r, Ze(e, r).text.length) : dt(t, Ze(e, t.line).text.length)
                }

                function dt(e, t) {
                    var r = e.ch;
                    return null == r || r > t ? ot(e.line, t) : r < 0 ? ot(e.line, 0) : e
                }

                function pt(e, t) {
                    for (var r = [], n = 0; n < t.length; n++) r[n] = ft(e, t[n]);
                    return r
                }
                qe.prototype.eol = function() {
                    return this.pos >= this.string.length
                }, qe.prototype.sol = function() {
                    return this.pos == this.lineStart
                }, qe.prototype.peek = function() {
                    return this.string.charAt(this.pos) || void 0
                }, qe.prototype.next = function() {
                    if (this.pos < this.string.length) return this.string.charAt(this.pos++)
                }, qe.prototype.eat = function(e) {
                    var t = this.string.charAt(this.pos);
                    if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
                }, qe.prototype.eatWhile = function(e) {
                    for (var t = this.pos; this.eat(e););
                    return this.pos > t
                }, qe.prototype.eatSpace = function() {
                    for (var e = this.pos;
                        /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
                    return this.pos > e
                }, qe.prototype.skipToEnd = function() {
                    this.pos = this.string.length
                }, qe.prototype.skipTo = function(e) {
                    var t = this.string.indexOf(e, this.pos);
                    if (t > -1) return this.pos = t, !0
                }, qe.prototype.backUp = function(e) {
                    this.pos -= e
                }, qe.prototype.column = function() {
                    return this.lastColumnPos < this.start && (this.lastColumnValue = R(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0)
                }, qe.prototype.indentation = function() {
                    return R(this.string, null, this.tabSize) - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0)
                }, qe.prototype.match = function(e, t, r) {
                    if ("string" != typeof e) {
                        var n = this.string.slice(this.pos).match(e);
                        return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n)
                    }
                    var i = function(e) {
                        return r ? e.toLowerCase() : e
                    };
                    if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
                }, qe.prototype.current = function() {
                    return this.string.slice(this.start, this.pos)
                }, qe.prototype.hideFirstChars = function(e, t) {
                    this.lineStart += e;
                    try {
                        return t()
                    } finally {
                        this.lineStart -= e
                    }
                }, qe.prototype.lookAhead = function(e) {
                    var t = this.lineOracle;
                    return t && t.lookAhead(e)
                }, qe.prototype.baseToken = function() {
                    var e = this.lineOracle;
                    return e && e.baseToken(this.pos)
                };
                var gt = function(e, t) {
                        this.state = e, this.lookAhead = t
                    },
                    vt = function(e, t, r, n) {
                        this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1
                    };

                function mt(e, t, r, n) {
                    var i = [e.state.modeGen],
                        o = {};
                    Tt(e, t.text, e.doc.mode, r, (function(e, t) {
                        return i.push(e, t)
                    }), o, n);
                    for (var l = r.state, s = function(n) {
                            r.baseTokens = i;
                            var s = e.state.overlays[n],
                                a = 1,
                                u = 0;
                            r.state = !0, Tt(e, t.text, s.mode, r, (function(e, t) {
                                for (var r = a; u < e;) {
                                    var n = i[a];
                                    n > e && i.splice(a, 1, e, i[a + 1], n), a += 2, u = Math.min(e, n)
                                }
                                if (t)
                                    if (s.opaque) i.splice(r, a - r, e, "overlay " + t), a = r + 2;
                                    else
                                        for (; r < a; r += 2) {
                                            var o = i[r + 1];
                                            i[r + 1] = (o ? o + " " : "") + "overlay " + t
                                        }
                            }), o), r.state = l, r.baseTokens = null, r.baseTokenPos = 1
                        }, a = 0; a < e.state.overlays.length; ++a) s(a);
                    return {
                        styles: i,
                        classes: o.bgClass || o.textClass ? o : null
                    }
                }

                function yt(e, t, r) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var n = bt(e, tt(t)),
                            i = t.text.length > e.options.maxHighlightLength && Ye(e.doc.mode, n.state),
                            o = mt(e, t, n);
                        i && (n.state = i), t.stateAfter = n.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                    }
                    return t.styles
                }

                function bt(e, t, r) {
                    var n = e.doc,
                        i = e.display;
                    if (!n.mode.startState) return new vt(n, !0, t);
                    var o = Mt(e, t, r),
                        l = o > n.first && Ze(n, o - 1).stateAfter,
                        s = l ? vt.fromSaved(n, l, o) : new vt(n, $e(n.mode), o);
                    return n.iter(o, t, (function(r) {
                        wt(e, r.text, s);
                        var n = s.line;
                        r.stateAfter = n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo ? s.save() : null, s.nextLine()
                    })), r && (n.modeFrontier = s.line), s
                }

                function wt(e, t, r, n) {
                    var i = e.doc.mode,
                        o = new qe(t, e.options.tabSize, r);
                    for (o.start = o.pos = n || 0, "" == t && xt(i, r.state); !o.eol();) Ct(i, o, r.state), o.start = o.pos
                }

                function xt(e, t) {
                    if (e.blankLine) return e.blankLine(t);
                    if (e.innerMode) {
                        var r = _e(e, t);
                        return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
                    }
                }

                function Ct(e, t, r, n) {
                    for (var i = 0; i < 10; i++) {
                        n && (n[0] = _e(e, r).mode);
                        var o = e.token(t, r);
                        if (t.pos > t.start) return o
                    }
                    throw new Error("Mode " + e.name + " failed to advance stream.")
                }
                vt.prototype.lookAhead = function(e) {
                    var t = this.doc.getLine(this.line + e);
                    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
                }, vt.prototype.baseToken = function(e) {
                    if (!this.baseTokens) return null;
                    for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
                    var t = this.baseTokens[this.baseTokenPos + 1];
                    return {
                        type: t && t.replace(/( |^)overlay .*/, ""),
                        size: this.baseTokens[this.baseTokenPos] - e
                    }
                }, vt.prototype.nextLine = function() {
                    this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
                }, vt.fromSaved = function(e, t, r) {
                    return t instanceof gt ? new vt(e, Ye(e.mode, t.state), r, t.lookAhead) : new vt(e, Ye(e.mode, t), r)
                }, vt.prototype.save = function(e) {
                    var t = !1 !== e ? Ye(this.doc.mode, this.state) : this.state;
                    return this.maxLookAhead > 0 ? new gt(t, this.maxLookAhead) : t
                };
                var St = function(e, t, r) {
                    this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r
                };

                function Lt(e, t, r, n) {
                    var i, o, l = e.doc,
                        s = l.mode,
                        a = Ze(l, (t = ft(l, t)).line),
                        u = bt(e, t.line, r),
                        c = new qe(a.text, e.options.tabSize, u);
                    for (n && (o = []);
                        (n || c.pos < t.ch) && !c.eol();) c.start = c.pos, i = Ct(s, c, u.state), n && o.push(new St(c, i, Ye(l.mode, u.state)));
                    return n ? o : new St(c, i, u.state)
                }

                function kt(e, t) {
                    if (e)
                        for (;;) {
                            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                            if (!r) break;
                            e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
                            var n = r[1] ? "bgClass" : "textClass";
                            null == t[n] ? t[n] = r[2] : new RegExp("(?:^|\\s)" + r[2] + "(?:$|\\s)").test(t[n]) || (t[n] += " " + r[2])
                        }
                    return e
                }

                function Tt(e, t, r, n, i, o, l) {
                    var s = r.flattenSpans;
                    null == s && (s = e.options.flattenSpans);
                    var a, u = 0,
                        c = null,
                        h = new qe(t, e.options.tabSize, n),
                        f = e.options.addModeClass && [null];
                    for ("" == t && kt(xt(r, n.state), o); !h.eol();) {
                        if (h.pos > e.options.maxHighlightLength ? (s = !1, l && wt(e, t, n, h.pos), h.pos = t.length, a = null) : a = kt(Ct(r, h, n.state, f), o), f) {
                            var d = f[0].name;
                            d && (a = "m-" + (a ? d + " " + a : d))
                        }
                        if (!s || c != a) {
                            for (; u < h.start;) i(u = Math.min(h.start, u + 5e3), c);
                            c = a
                        }
                        h.start = h.pos
                    }
                    for (; u < h.pos;) {
                        var p = Math.min(h.pos, u + 5e3);
                        i(p, c), u = p
                    }
                }

                function Mt(e, t, r) {
                    for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > l; --s) {
                        if (s <= o.first) return o.first;
                        var a = Ze(o, s - 1),
                            u = a.stateAfter;
                        if (u && (!r || s + (u instanceof gt ? u.lookAhead : 0) <= o.modeFrontier)) return s;
                        var c = R(a.text, null, e.options.tabSize);
                        (null == i || n > c) && (i = s - 1, n = c)
                    }
                    return i
                }

                function Nt(e, t) {
                    if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                        for (var r = e.first, n = t - 1; n > r; n--) {
                            var i = Ze(e, n).stateAfter;
                            if (i && (!(i instanceof gt) || n + i.lookAhead < t)) {
                                r = n + 1;
                                break
                            }
                        }
                        e.highlightFrontier = Math.min(e.highlightFrontier, r)
                    }
                }
                var Ot = !1,
                    At = !1;

                function Dt() {
                    Ot = !0
                }

                function Wt() {
                    At = !0
                }

                function Ht(e, t, r) {
                    this.marker = e, this.from = t, this.to = r
                }

                function Ft(e, t) {
                    if (e)
                        for (var r = 0; r < e.length; ++r) {
                            var n = e[r];
                            if (n.marker == t) return n
                        }
                }

                function Et(e, t) {
                    for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
                    return r
                }

                function Pt(e, t, r) {
                    var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet));
                    n && e.markedSpans && n.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], n && n.add(e.markedSpans)), t.marker.attachLine(e)
                }

                function It(e, t, r) {
                    var n;
                    if (e)
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i],
                                l = o.marker;
                            if (null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
                                var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                                (n || (n = [])).push(new Ht(l, o.from, s ? null : o.to))
                            }
                        }
                    return n
                }

                function zt(e, t, r) {
                    var n;
                    if (e)
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i],
                                l = o.marker;
                            if (null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
                                var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                                (n || (n = [])).push(new Ht(l, s ? null : o.from - t, null == o.to ? null : o.to - t))
                            }
                        }
                    return n
                }

                function Rt(e, t) {
                    if (t.full) return null;
                    var r = nt(e, t.from.line) && Ze(e, t.from.line).markedSpans,
                        n = nt(e, t.to.line) && Ze(e, t.to.line).markedSpans;
                    if (!r && !n) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        l = 0 == lt(t.from, t.to),
                        s = It(r, i, l),
                        a = zt(n, o, l),
                        u = 1 == t.text.length,
                        c = q(t.text).length + (u ? i : 0);
                    if (s)
                        for (var h = 0; h < s.length; ++h) {
                            var f = s[h];
                            if (null == f.to) {
                                var d = Ft(a, f.marker);
                                d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i
                            }
                        }
                    if (a)
                        for (var p = 0; p < a.length; ++p) {
                            var g = a[p];
                            null != g.to && (g.to += c), null == g.from ? Ft(s, g.marker) || (g.from = c, u && (s || (s = [])).push(g)) : (g.from += c, u && (s || (s = [])).push(g))
                        }
                    s && (s = Bt(s)), a && a != s && (a = Bt(a));
                    var v = [s];
                    if (!u) {
                        var m, y = t.text.length - 2;
                        if (y > 0 && s)
                            for (var b = 0; b < s.length; ++b) null == s[b].to && (m || (m = [])).push(new Ht(s[b].marker, null, null));
                        for (var w = 0; w < y; ++w) v.push(m);
                        v.push(a)
                    }
                    return v
                }

                function Bt(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var r = e[t];
                        null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1)
                    }
                    return e.length ? e : null
                }

                function Gt(e, t, r) {
                    var n = null;
                    if (e.iter(t.line, r.line + 1, (function(e) {
                            if (e.markedSpans)
                                for (var t = 0; t < e.markedSpans.length; ++t) {
                                    var r = e.markedSpans[t].marker;
                                    !r.readOnly || n && -1 != G(n, r) || (n || (n = [])).push(r)
                                }
                        })), !n) return null;
                    for (var i = [{
                            from: t,
                            to: r
                        }], o = 0; o < n.length; ++o)
                        for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
                            var u = i[a];
                            if (!(lt(u.to, s.from) < 0 || lt(u.from, s.to) > 0)) {
                                var c = [a, 1],
                                    h = lt(u.from, s.from),
                                    f = lt(u.to, s.to);
                                (h < 0 || !l.inclusiveLeft && !h) && c.push({
                                    from: u.from,
                                    to: s.from
                                }), (f > 0 || !l.inclusiveRight && !f) && c.push({
                                    from: s.to,
                                    to: u.to
                                }), i.splice.apply(i, c), a += c.length - 3
                            }
                        }
                    return i
                }

                function Ut(e) {
                    var t = e.markedSpans;
                    if (t) {
                        for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
                        e.markedSpans = null
                    }
                }

                function Vt(e, t) {
                    if (t) {
                        for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
                        e.markedSpans = t
                    }
                }

                function Kt(e) {
                    return e.inclusiveLeft ? -1 : 0
                }

                function jt(e) {
                    return e.inclusiveRight ? 1 : 0
                }

                function Xt(e, t) {
                    var r = e.lines.length - t.lines.length;
                    if (0 != r) return r;
                    var n = e.find(),
                        i = t.find(),
                        o = lt(n.from, i.from) || Kt(e) - Kt(t);
                    if (o) return -o;
                    var l = lt(n.to, i.to) || jt(e) - jt(t);
                    return l || t.id - e.id
                }

                function Yt(e, t) {
                    var r, n = At && e.markedSpans;
                    if (n)
                        for (var i = void 0, o = 0; o < n.length; ++o)(i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || Xt(r, i.marker) < 0) && (r = i.marker);
                    return r
                }

                function _t(e) {
                    return Yt(e, !0)
                }

                function $t(e) {
                    return Yt(e, !1)
                }

                function qt(e, t) {
                    var r, n = At && e.markedSpans;
                    if (n)
                        for (var i = 0; i < n.length; ++i) {
                            var o = n[i];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Xt(r, o.marker) < 0) && (r = o.marker)
                        }
                    return r
                }

                function Zt(e, t, r, n, i) {
                    var o = Ze(e, t),
                        l = At && o.markedSpans;
                    if (l)
                        for (var s = 0; s < l.length; ++s) {
                            var a = l[s];
                            if (a.marker.collapsed) {
                                var u = a.marker.find(0),
                                    c = lt(u.from, r) || Kt(a.marker) - Kt(i),
                                    h = lt(u.to, n) || jt(a.marker) - jt(i);
                                if (!(c >= 0 && h <= 0 || c <= 0 && h >= 0) && (c <= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? lt(u.to, r) >= 0 : lt(u.to, r) > 0) || c >= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? lt(u.from, n) <= 0 : lt(u.from, n) < 0))) return !0
                            }
                        }
                }

                function Qt(e) {
                    for (var t; t = _t(e);) e = t.find(-1, !0).line;
                    return e
                }

                function Jt(e) {
                    for (var t; t = $t(e);) e = t.find(1, !0).line;
                    return e
                }

                function er(e) {
                    for (var t, r; t = $t(e);) e = t.find(1, !0).line, (r || (r = [])).push(e);
                    return r
                }

                function tr(e, t) {
                    var r = Ze(e, t),
                        n = Qt(r);
                    return r == n ? t : tt(n)
                }

                function rr(e, t) {
                    if (t > e.lastLine()) return t;
                    var r, n = Ze(e, t);
                    if (!nr(e, n)) return t;
                    for (; r = $t(n);) n = r.find(1, !0).line;
                    return tt(n) + 1
                }

                function nr(e, t) {
                    var r = At && t.markedSpans;
                    if (r)
                        for (var n = void 0, i = 0; i < r.length; ++i)
                            if ((n = r[i]).marker.collapsed) {
                                if (null == n.from) return !0;
                                if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && ir(e, t, n)) return !0
                            }
                }

                function ir(e, t, r) {
                    if (null == r.to) {
                        var n = r.marker.find(1, !0);
                        return ir(e, n.line, Ft(n.line.markedSpans, r.marker))
                    }
                    if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
                    for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                        if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && ir(e, t, i)) return !0
                }

                function or(e) {
                    for (var t = 0, r = (e = Qt(e)).parent, n = 0; n < r.lines.length; ++n) {
                        var i = r.lines[n];
                        if (i == e) break;
                        t += i.height
                    }
                    for (var o = r.parent; o; o = (r = o).parent)
                        for (var l = 0; l < o.children.length; ++l) {
                            var s = o.children[l];
                            if (s == r) break;
                            t += s.height
                        }
                    return t
                }

                function lr(e) {
                    if (0 == e.height) return 0;
                    for (var t, r = e.text.length, n = e; t = _t(n);) {
                        var i = t.find(0, !0);
                        n = i.from.line, r += i.from.ch - i.to.ch
                    }
                    for (n = e; t = $t(n);) {
                        var o = t.find(0, !0);
                        r -= n.text.length - o.from.ch, r += (n = o.to.line).text.length - o.to.ch
                    }
                    return r
                }

                function sr(e) {
                    var t = e.display,
                        r = e.doc;
                    t.maxLine = Ze(r, r.first), t.maxLineLength = lr(t.maxLine), t.maxLineChanged = !0, r.iter((function(e) {
                        var r = lr(e);
                        r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e)
                    }))
                }
                var ar = function(e, t, r) {
                    this.text = e, Vt(this, t), this.height = r ? r(this) : 1
                };

                function ur(e, t, r, n) {
                    e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Ut(e), Vt(e, r);
                    var i = n ? n(e) : 1;
                    i != e.height && et(e, i)
                }

                function cr(e) {
                    e.parent = null, Ut(e)
                }
                ar.prototype.lineNo = function() {
                    return tt(this)
                }, Ce(ar);
                var hr = {},
                    fr = {};

                function dr(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var r = t.addModeClass ? fr : hr;
                    return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
                }

                function pr(e, t) {
                    var r = D("span", null, null, a ? "padding-right: .1px" : null),
                        n = {
                            pre: D("pre", [r], "CodeMirror-line"),
                            content: r,
                            col: 0,
                            pos: 0,
                            cm: e,
                            trailingSpace: !1,
                            splitSpaces: e.getOption("lineWrapping")
                        };
                    t.measure = {};
                    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                        var o = i ? t.rest[i - 1] : t.line,
                            l = void 0;
                        n.pos = 0, n.addToken = vr, He(e.display.measure) && (l = de(o, e.doc.direction)) && (n.addToken = yr(n.addToken, l)), n.map = [], wr(o, n, yt(e, o, t != e.display.externalMeasured && tt(o))), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = E(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = E(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(We(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                    }
                    if (a) {
                        var s = n.content.lastChild;
                        (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
                    }
                    return ye(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = E(n.pre.className, n.textClass || "")), n
                }

                function gr(e) {
                    var t = A("span", "\u2022", "cm-invalidchar");
                    return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
                }

                function vr(e, t, r, n, i, o, a) {
                    if (t) {
                        var u, c = e.splitSpaces ? mr(t, e.trailingSpace) : t,
                            h = e.cm.state.specialChars,
                            f = !1;
                        if (h.test(t)) {
                            u = document.createDocumentFragment();
                            for (var d = 0;;) {
                                h.lastIndex = d;
                                var p = h.exec(t),
                                    g = p ? p.index - d : t.length - d;
                                if (g) {
                                    var v = document.createTextNode(c.slice(d, d + g));
                                    l && s < 9 ? u.appendChild(A("span", [v])) : u.appendChild(v), e.map.push(e.pos, e.pos + g, v), e.col += g, e.pos += g
                                }
                                if (!p) break;
                                d += g + 1;
                                var m = void 0;
                                if ("\t" == p[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - e.col % y;
                                    (m = u.appendChild(A("span", $(b), "cm-tab"))).setAttribute("role", "presentation"), m.setAttribute("cm-text", "\t"), e.col += b
                                } else "\r" == p[0] || "\n" == p[0] ? ((m = u.appendChild(A("span", "\r" == p[0] ? "\u240d" : "\u2424", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((m = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), l && s < 9 ? u.appendChild(A("span", [m])) : u.appendChild(m), e.col += 1);
                                e.map.push(e.pos, e.pos + 1, m), e.pos++
                            }
                        } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), l && s < 9 && (f = !0), e.pos += t.length;
                        if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), r || n || i || f || o || a) {
                            var w = r || "";
                            n && (w += n), i && (w += i);
                            var x = A("span", [u], w, o);
                            if (a)
                                for (var C in a) a.hasOwnProperty(C) && "style" != C && "class" != C && x.setAttribute(C, a[C]);
                            return e.content.appendChild(x)
                        }
                        e.content.appendChild(u)
                    }
                }

                function mr(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var r = t, n = "", i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = "\xa0"), n += o, r = " " == o
                    }
                    return n
                }

                function yr(e, t) {
                    return function(r, n, i, o, l, s, a) {
                        i = i ? i + " cm-force-border" : "cm-force-border";
                        for (var u = r.pos, c = u + n.length;;) {
                            for (var h = void 0, f = 0; f < t.length && !((h = t[f]).to > u && h.from <= u); f++);
                            if (h.to >= c) return e(r, n, i, o, l, s, a);
                            e(r, n.slice(0, h.to - u), i, o, null, s, a), o = null, n = n.slice(h.to - u), u = h.to
                        }
                    }
                }

                function br(e, t, r, n) {
                    var i = !n && r.widgetNode;
                    i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
                }

                function wr(e, t, r) {
                    var n = e.markedSpans,
                        i = e.text,
                        o = 0;
                    if (n)
                        for (var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = "", m = 0;;) {
                            if (m == p) {
                                a = u = c = s = "", f = null, h = null, m = 1 / 0;
                                for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                                    var x = n[w],
                                        C = x.marker;
                                    if ("bookmark" == C.type && x.from == p && C.widgetNode) y.push(C);
                                    else if (x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p)) {
                                        if (null != x.to && x.to != p && m > x.to && (m = x.to, u = ""), C.className && (a += " " + C.className), C.css && (s = (s ? s + ";" : "") + C.css), C.startStyle && x.from == p && (c += " " + C.startStyle), C.endStyle && x.to == m && (b || (b = [])).push(C.endStyle, x.to), C.title && ((f || (f = {})).title = C.title), C.attributes)
                                            for (var S in C.attributes)(f || (f = {}))[S] = C.attributes[S];
                                        C.collapsed && (!h || Xt(h.marker, C) < 0) && (h = x)
                                    } else x.from > p && m > x.from && (m = x.from)
                                }
                                if (b)
                                    for (var L = 0; L < b.length; L += 2) b[L + 1] == m && (u += " " + b[L]);
                                if (!h || h.from == p)
                                    for (var k = 0; k < y.length; ++k) br(t, 0, y[k]);
                                if (h && (h.from || 0) == p) {
                                    if (br(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;
                                    h.to == p && (h = !1)
                                }
                            }
                            if (p >= d) break;
                            for (var T = Math.min(d, m);;) {
                                if (v) {
                                    var M = p + v.length;
                                    if (!h) {
                                        var N = M > T ? v.slice(0, T - p) : v;
                                        t.addToken(t, N, l ? l + a : a, c, p + N.length == m ? u : "", s, f)
                                    }
                                    if (M >= T) {
                                        v = v.slice(T - p), p = T;
                                        break
                                    }
                                    p = M, c = ""
                                }
                                v = i.slice(o, o = r[g++]), l = dr(r[g++], t.cm.options)
                            }
                        } else
                            for (var O = 1; O < r.length; O += 2) t.addToken(t, i.slice(o, o = r[O]), dr(r[O + 1], t.cm.options))
                }

                function xr(e, t, r) {
                    this.line = t, this.rest = er(t), this.size = this.rest ? tt(q(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = nr(e, t)
                }

                function Cr(e, t, r) {
                    for (var n, i = [], o = t; o < r; o = n) {
                        var l = new xr(e.doc, Ze(e.doc, o), o);
                        n = o + l.size, i.push(l)
                    }
                    return i
                }
                var Sr = null;

                function Lr(e) {
                    Sr ? Sr.ops.push(e) : e.ownsGroup = Sr = {
                        ops: [e],
                        delayedCallbacks: []
                    }
                }

                function kr(e) {
                    var t = e.delayedCallbacks,
                        r = 0;
                    do {
                        for (; r < t.length; r++) t[r].call(null);
                        for (var n = 0; n < e.ops.length; n++) {
                            var i = e.ops[n];
                            if (i.cursorActivityHandlers)
                                for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                        }
                    } while (r < t.length)
                }

                function Tr(e, t) {
                    var r = e.ownsGroup;
                    if (r) try {
                        kr(r)
                    } finally {
                        Sr = null, t(r)
                    }
                }
                var Mr = null;

                function Nr(e, t) {
                    var r = ve(e, t);
                    if (r.length) {
                        var n, i = Array.prototype.slice.call(arguments, 2);
                        Sr ? n = Sr.delayedCallbacks : Mr ? n = Mr : (n = Mr = [], setTimeout(Or, 0));
                        for (var o = function(e) {
                                n.push((function() {
                                    return r[e].apply(null, i)
                                }))
                            }, l = 0; l < r.length; ++l) o(l)
                    }
                }

                function Or() {
                    var e = Mr;
                    Mr = null;
                    for (var t = 0; t < e.length; ++t) e[t]()
                }

                function Ar(e, t, r, n) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        "text" == o ? Fr(e, t) : "gutter" == o ? Pr(e, t, r, n) : "class" == o ? Er(e, t) : "widget" == o && Ir(e, t, n)
                    }
                    t.changes = null
                }

                function Dr(e) {
                    return e.node == e.text && (e.node = A("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), l && s < 8 && (e.node.style.zIndex = 2)), e.node
                }

                function Wr(e, t) {
                    var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                    if (r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null);
                    else if (r) {
                        var n = Dr(t);
                        t.background = n.insertBefore(A("div", null, r), n.firstChild), e.display.input.setUneditable(t.background)
                    }
                }

                function Hr(e, t) {
                    var r = e.display.externalMeasured;
                    return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : pr(e, t)
                }

                function Fr(e, t) {
                    var r = t.text.className,
                        n = Hr(e, t);
                    t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, Er(e, t)) : r && (t.text.className = r)
                }

                function Er(e, t) {
                    Wr(e, t), t.line.wrapClass ? Dr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                    var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                    t.text.className = r || ""
                }

                function Pr(e, t, r, n) {
                    if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                        var i = Dr(t);
                        t.gutterBackground = A("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
                    }
                    var o = t.line.gutterMarkers;
                    if (e.options.lineNumbers || o) {
                        var l = Dr(t),
                            s = t.gutter = A("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
                        if (s.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(s), l.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(A("div", it(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
                            for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
                                var u = e.display.gutterSpecs[a].className,
                                    c = o.hasOwnProperty(u) && o[u];
                                c && s.appendChild(A("div", [c], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[u] + "px; width: " + n.gutterWidth[u] + "px"))
                            }
                    }
                }

                function Ir(e, t, r) {
                    t.alignable && (t.alignable = null);
                    for (var n = k("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) o = i.nextSibling, n.test(i.className) && t.node.removeChild(i);
                    Rr(e, t, r)
                }

                function zr(e, t, r, n) {
                    var i = Hr(e, t);
                    return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), Er(e, t), Pr(e, t, r, n), Rr(e, t, n), t.node
                }

                function Rr(e, t, r) {
                    if (Br(e, t.line, t, r, !0), t.rest)
                        for (var n = 0; n < t.rest.length; n++) Br(e, t.rest[n], t, r, !1)
                }

                function Br(e, t, r, n, i) {
                    if (t.widgets)
                        for (var o = Dr(r), l = 0, s = t.widgets; l < s.length; ++l) {
                            var a = s[l],
                                u = A("div", [a.node], "CodeMirror-linewidget" + (a.className ? " " + a.className : ""));
                            a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Gr(a, u, r, n), e.display.input.setUneditable(u), i && a.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u), Nr(a, "redraw")
                        }
                }

                function Gr(e, t, r, n) {
                    if (e.noHScroll) {
                        (r.alignable || (r.alignable = [])).push(t);
                        var i = n.wrapperWidth;
                        t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px"
                    }
                    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
                }

                function Ur(e) {
                    if (null != e.height) return e.height;
                    var t = e.doc.cm;
                    if (!t) return 0;
                    if (!W(document.body, e.node)) {
                        var r = "position: relative;";
                        e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), O(t.display.measure, A("div", [e.node], null, r))
                    }
                    return e.height = e.node.parentNode.offsetHeight
                }

                function Vr(e, t) {
                    for (var r = Me(t); r != e.wrapper; r = r.parentNode)
                        if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0
                }

                function Kr(e) {
                    return e.lineSpace.offsetTop
                }

                function jr(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight
                }

                function Xr(e) {
                    if (e.cachedPaddingH) return e.cachedPaddingH;
                    var t = O(e.measure, A("pre", "x", "CodeMirror-line-like")),
                        r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        n = {
                            left: parseInt(r.paddingLeft),
                            right: parseInt(r.paddingRight)
                        };
                    return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
                }

                function Yr(e) {
                    return U - e.display.nativeBarWidth
                }

                function _r(e) {
                    return e.display.scroller.clientWidth - Yr(e) - e.display.barWidth
                }

                function $r(e) {
                    return e.display.scroller.clientHeight - Yr(e) - e.display.barHeight
                }

                function qr(e, t, r) {
                    var n = e.options.lineWrapping,
                        i = n && _r(e);
                    if (!t.measure.heights || n && t.measure.width != i) {
                        var o = t.measure.heights = [];
                        if (n) {
                            t.measure.width = i;
                            for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
                                var a = l[s],
                                    u = l[s + 1];
                                Math.abs(a.bottom - u.bottom) > 2 && o.push((a.bottom + u.top) / 2 - r.top)
                            }
                        }
                        o.push(r.bottom - r.top)
                    }
                }

                function Zr(e, t, r) {
                    if (e.line == t) return {
                        map: e.measure.map,
                        cache: e.measure.cache
                    };
                    if (e.rest) {
                        for (var n = 0; n < e.rest.length; n++)
                            if (e.rest[n] == t) return {
                                map: e.measure.maps[n],
                                cache: e.measure.caches[n]
                            };
                        for (var i = 0; i < e.rest.length; i++)
                            if (tt(e.rest[i]) > r) return {
                                map: e.measure.maps[i],
                                cache: e.measure.caches[i],
                                before: !0
                            }
                    }
                }

                function Qr(e, t) {
                    var r = tt(t = Qt(t)),
                        n = e.display.externalMeasured = new xr(e.doc, t, r);
                    n.lineN = r;
                    var i = n.built = pr(e, n);
                    return n.text = i.pre, O(e.display.lineMeasure, i.pre), n
                }

                function Jr(e, t, r, n) {
                    return rn(e, tn(e, t), r, n)
                }

                function en(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Pn(e, t)];
                    var r = e.display.externalMeasured;
                    return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
                }

                function tn(e, t) {
                    var r = tt(t),
                        n = en(e, r);
                    n && !n.text ? n = null : n && n.changes && (Ar(e, n, r, Dn(e)), e.curOp.forceUpdate = !0), n || (n = Qr(e, t));
                    var i = Zr(n, t, r);
                    return {
                        line: t,
                        view: n,
                        rect: null,
                        map: i.map,
                        cache: i.cache,
                        before: i.before,
                        hasHeights: !1
                    }
                }

                function rn(e, t, r, n, i) {
                    t.before && (r = -1);
                    var o, l = r + (n || "");
                    return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (qr(e, t.view, t.rect), t.hasHeights = !0), (o = an(e, t, r, n)).bogus || (t.cache[l] = o)), {
                        left: o.left,
                        right: o.right,
                        top: i ? o.rtop : o.top,
                        bottom: i ? o.rbottom : o.bottom
                    }
                }
                var nn, on = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };

                function ln(e, t, r) {
                    for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
                        if (s = e[u], a = e[u + 1], t < s ? (i = 0, o = 1, l = "left") : t < a ? o = 1 + (i = t - s) : (u == e.length - 3 || t == a && e[u + 3] > t) && (i = (o = a - s) - 1, t >= a && (l = "right")), null != i) {
                            if (n = e[u + 2], s == a && r == (n.insertLeft ? "left" : "right") && (l = r), "left" == r && 0 == i)
                                for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) n = e[2 + (u -= 3)], l = "left";
                            if ("right" == r && i == a - s)
                                for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) n = e[(u += 3) + 2], l = "right";
                            break
                        }
                    return {
                        node: n,
                        start: i,
                        end: o,
                        collapse: l,
                        coverStart: s,
                        coverEnd: a
                    }
                }

                function sn(e, t) {
                    var r = on;
                    if ("left" == t)
                        for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
                    else
                        for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--);
                    return r
                }

                function an(e, t, r, n) {
                    var i, o = ln(t.map, r, n),
                        a = o.node,
                        u = o.start,
                        c = o.end,
                        h = o.collapse;
                    if (3 == a.nodeType) {
                        for (var f = 0; f < 4; f++) {
                            for (; u && le(t.line.text.charAt(o.coverStart + u));) --u;
                            for (; o.coverStart + c < o.coverEnd && le(t.line.text.charAt(o.coverStart + c));) ++c;
                            if ((i = l && s < 9 && 0 == u && c == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : sn(T(a, u, c).getClientRects(), n)).left || i.right || 0 == u) break;
                            c = u, u -= 1, h = "right"
                        }
                        l && s < 11 && (i = un(e.display.measure, i))
                    } else {
                        var d;
                        u > 0 && (h = n = "right"), i = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == n ? d.length - 1 : 0] : a.getBoundingClientRect()
                    }
                    if (l && s < 9 && !u && (!i || !i.left && !i.right)) {
                        var p = a.parentNode.getClientRects()[0];
                        i = p ? {
                            left: p.left,
                            right: p.left + An(e.display),
                            top: p.top,
                            bottom: p.bottom
                        } : on
                    }
                    for (var g = i.top - t.rect.top, v = i.bottom - t.rect.top, m = (g + v) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(m < y[b]); b++);
                    var w = b ? y[b - 1] : 0,
                        x = y[b],
                        C = {
                            left: ("right" == h ? i.right : i.left) - t.rect.left,
                            right: ("left" == h ? i.left : i.right) - t.rect.left,
                            top: w,
                            bottom: x
                        };
                    return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = g, C.rbottom = v), C
                }

                function un(e, t) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !ze(e)) return t;
                    var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI;
                    return {
                        left: t.left * r,
                        right: t.right * r,
                        top: t.top * n,
                        bottom: t.bottom * n
                    }
                }

                function cn(e) {
                    if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
                }

                function hn(e) {
                    e.display.externalMeasure = null, N(e.display.lineMeasure);
                    for (var t = 0; t < e.display.view.length; t++) cn(e.display.view[t])
                }

                function fn(e) {
                    hn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
                }

                function dn() {
                    return c && m ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
                }

                function pn() {
                    return c && m ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
                }

                function gn(e) {
                    var t = Qt(e).widgets,
                        r = 0;
                    if (t)
                        for (var n = 0; n < t.length; ++n) t[n].above && (r += Ur(t[n]));
                    return r
                }

                function vn(e, t, r, n, i) {
                    if (!i) {
                        var o = gn(t);
                        r.top += o, r.bottom += o
                    }
                    if ("line" == n) return r;
                    n || (n = "local");
                    var l = or(t);
                    if ("local" == n ? l += Kr(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) {
                        var s = e.display.lineSpace.getBoundingClientRect();
                        l += s.top + ("window" == n ? 0 : pn());
                        var a = s.left + ("window" == n ? 0 : dn());
                        r.left += a, r.right += a
                    }
                    return r.top += l, r.bottom += l, r
                }

                function mn(e, t, r) {
                    if ("div" == r) return t;
                    var n = t.left,
                        i = t.top;
                    if ("page" == r) n -= dn(), i -= pn();
                    else if ("local" == r || !r) {
                        var o = e.display.sizer.getBoundingClientRect();
                        n += o.left, i += o.top
                    }
                    var l = e.display.lineSpace.getBoundingClientRect();
                    return {
                        left: n - l.left,
                        top: i - l.top
                    }
                }

                function yn(e, t, r, n, i) {
                    return n || (n = Ze(e.doc, t.line)), vn(e, n, Jr(e, n, t.ch, i), r)
                }

                function bn(e, t, r, n, i, o) {
                    function l(t, l) {
                        var s = rn(e, i, t, l ? "right" : "left", o);
                        return l ? s.left = s.right : s.right = s.left, vn(e, n, s, r)
                    }
                    n = n || Ze(e.doc, t.line), i || (i = tn(e, n));
                    var s = de(n, e.doc.direction),
                        a = t.ch,
                        u = t.sticky;
                    if (a >= n.text.length ? (a = n.text.length, u = "before") : a <= 0 && (a = 0, u = "after"), !s) return l("before" == u ? a - 1 : a, "before" == u);

                    function c(e, t, r) {
                        return l(r ? e - 1 : e, 1 == s[t].level != r)
                    }
                    var h = he(s, a, u),
                        f = ce,
                        d = c(a, h, "before" == u);
                    return null != f && (d.other = c(a, f, "before" != u)), d
                }

                function wn(e, t) {
                    var r = 0;
                    t = ft(e.doc, t), e.options.lineWrapping || (r = An(e.display) * t.ch);
                    var n = Ze(e.doc, t.line),
                        i = or(n) + Kr(e.display);
                    return {
                        left: r,
                        right: r,
                        top: i,
                        bottom: i + n.height
                    }
                }

                function xn(e, t, r, n, i) {
                    var o = ot(e, t, r);
                    return o.xRel = i, n && (o.outside = n), o
                }

                function Cn(e, t, r) {
                    var n = e.doc;
                    if ((r += e.display.viewOffset) < 0) return xn(n.first, 0, null, -1, -1);
                    var i = rt(n, r),
                        o = n.first + n.size - 1;
                    if (i > o) return xn(n.first + n.size - 1, Ze(n, o).text.length, null, 1, 1);
                    t < 0 && (t = 0);
                    for (var l = Ze(n, i);;) {
                        var s = Tn(e, l, i, t, r),
                            a = qt(l, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
                        if (!a) return s;
                        var u = a.find(1);
                        if (u.line == i) return u;
                        l = Ze(n, i = u.line)
                    }
                }

                function Sn(e, t, r, n) {
                    n -= gn(t);
                    var i = t.text.length,
                        o = ae((function(t) {
                            return rn(e, r, t - 1).bottom <= n
                        }), i, 0);
                    return {
                        begin: o,
                        end: i = ae((function(t) {
                            return rn(e, r, t).top > n
                        }), o, i)
                    }
                }

                function Ln(e, t, r, n) {
                    return r || (r = tn(e, t)), Sn(e, t, r, vn(e, t, rn(e, r, n), "line").top)
                }

                function kn(e, t, r, n) {
                    return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
                }

                function Tn(e, t, r, n, i) {
                    i -= or(t);
                    var o = tn(e, t),
                        l = gn(t),
                        s = 0,
                        a = t.text.length,
                        u = !0,
                        c = de(t, e.doc.direction);
                    if (c) {
                        var h = (e.options.lineWrapping ? Nn : Mn)(e, t, r, o, c, n, i);
                        s = (u = 1 != h.level) ? h.from : h.to - 1, a = u ? h.to : h.from - 1
                    }
                    var f, d, p = null,
                        g = null,
                        v = ae((function(t) {
                            var r = rn(e, o, t);
                            return r.top += l, r.bottom += l, !!kn(r, n, i, !1) && (r.top <= i && r.left <= n && (p = t, g = r), !0)
                        }), s, a),
                        m = !1;
                    if (g) {
                        var y = n - g.left < g.right - n,
                            b = y == u;
                        v = p + (b ? 0 : 1), d = b ? "after" : "before", f = y ? g.left : g.right
                    } else {
                        u || v != a && v != s || v++, d = 0 == v ? "after" : v == t.text.length ? "before" : rn(e, o, v - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before";
                        var w = bn(e, ot(r, v, d), "line", t, o);
                        f = w.left, m = i < w.top ? -1 : i >= w.bottom ? 1 : 0
                    }
                    return xn(r, v = se(t.text, v, 1), d, m, n - f)
                }

                function Mn(e, t, r, n, i, o, l) {
                    var s = ae((function(s) {
                            var a = i[s],
                                u = 1 != a.level;
                            return kn(bn(e, ot(r, u ? a.to : a.from, u ? "before" : "after"), "line", t, n), o, l, !0)
                        }), 0, i.length - 1),
                        a = i[s];
                    if (s > 0) {
                        var u = 1 != a.level,
                            c = bn(e, ot(r, u ? a.from : a.to, u ? "after" : "before"), "line", t, n);
                        kn(c, o, l, !0) && c.top > l && (a = i[s - 1])
                    }
                    return a
                }

                function Nn(e, t, r, n, i, o, l) {
                    var s = Sn(e, t, n, l),
                        a = s.begin,
                        u = s.end;
                    /\s/.test(t.text.charAt(u - 1)) && u--;
                    for (var c = null, h = null, f = 0; f < i.length; f++) {
                        var d = i[f];
                        if (!(d.from >= u || d.to <= a)) {
                            var p = rn(e, n, 1 != d.level ? Math.min(u, d.to) - 1 : Math.max(a, d.from)).right,
                                g = p < o ? o - p + 1e9 : p - o;
                            (!c || h > g) && (c = d, h = g)
                        }
                    }
                    return c || (c = i[i.length - 1]), c.from < a && (c = {
                        from: a,
                        to: c.to,
                        level: c.level
                    }), c.to > u && (c = {
                        from: c.from,
                        to: u,
                        level: c.level
                    }), c
                }

                function On(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == nn) {
                        nn = A("pre", null, "CodeMirror-line-like");
                        for (var t = 0; t < 49; ++t) nn.appendChild(document.createTextNode("x")), nn.appendChild(A("br"));
                        nn.appendChild(document.createTextNode("x"))
                    }
                    O(e.measure, nn);
                    var r = nn.offsetHeight / 50;
                    return r > 3 && (e.cachedTextHeight = r), N(e.measure), r || 1
                }

                function An(e) {
                    if (null != e.cachedCharWidth) return e.cachedCharWidth;
                    var t = A("span", "xxxxxxxxxx"),
                        r = A("pre", [t], "CodeMirror-line-like");
                    O(e.measure, r);
                    var n = t.getBoundingClientRect(),
                        i = (n.right - n.left) / 10;
                    return i > 2 && (e.cachedCharWidth = i), i || 10
                }

                function Dn(e) {
                    for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
                        var s = e.display.gutterSpecs[l].className;
                        r[s] = o.offsetLeft + o.clientLeft + i, n[s] = o.clientWidth
                    }
                    return {
                        fixedPos: Wn(t),
                        gutterTotalWidth: t.gutters.offsetWidth,
                        gutterLeft: r,
                        gutterWidth: n,
                        wrapperWidth: t.wrapper.clientWidth
                    }
                }

                function Wn(e) {
                    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
                }

                function Hn(e) {
                    var t = On(e.display),
                        r = e.options.lineWrapping,
                        n = r && Math.max(5, e.display.scroller.clientWidth / An(e.display) - 3);
                    return function(i) {
                        if (nr(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets)
                            for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                        return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t
                    }
                }

                function Fn(e) {
                    var t = e.doc,
                        r = Hn(e);
                    t.iter((function(e) {
                        var t = r(e);
                        t != e.height && et(e, t)
                    }))
                }

                function En(e, t, r, n) {
                    var i = e.display;
                    if (!r && "true" == Me(t).getAttribute("cm-not-content")) return null;
                    var o, l, s = i.lineSpace.getBoundingClientRect();
                    try {
                        o = t.clientX - s.left, l = t.clientY - s.top
                    } catch (h) {
                        return null
                    }
                    var a, u = Cn(e, o, l);
                    if (n && u.xRel > 0 && (a = Ze(e.doc, u.line).text).length == u.ch) {
                        var c = R(a, a.length, e.options.tabSize) - a.length;
                        u = ot(u.line, Math.max(0, Math.round((o - Xr(e.display).left) / An(e.display)) - c))
                    }
                    return u
                }

                function Pn(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if ((t -= e.display.viewFrom) < 0) return null;
                    for (var r = e.display.view, n = 0; n < r.length; n++)
                        if ((t -= r[n].size) < 0) return n
                }

                function In(e, t, r, n) {
                    null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
                    var i = e.display;
                    if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) At && tr(e.doc, t) < i.viewTo && Rn(e);
                    else if (r <= i.viewFrom) At && rr(e.doc, r + n) > i.viewFrom ? Rn(e) : (i.viewFrom += n, i.viewTo += n);
                    else if (t <= i.viewFrom && r >= i.viewTo) Rn(e);
                    else if (t <= i.viewFrom) {
                        var o = Bn(e, r, r + n, 1);
                        o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : Rn(e)
                    } else if (r >= i.viewTo) {
                        var l = Bn(e, t, t, -1);
                        l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : Rn(e)
                    } else {
                        var s = Bn(e, t, t, -1),
                            a = Bn(e, r, r + n, 1);
                        s && a ? (i.view = i.view.slice(0, s.index).concat(Cr(e, s.lineN, a.lineN)).concat(i.view.slice(a.index)), i.viewTo += n) : Rn(e)
                    }
                    var u = i.externalMeasured;
                    u && (r < u.lineN ? u.lineN += n : t < u.lineN + u.size && (i.externalMeasured = null))
                }

                function zn(e, t, r) {
                    e.curOp.viewChanged = !0;
                    var n = e.display,
                        i = e.display.externalMeasured;
                    if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
                        var o = n.view[Pn(e, t)];
                        if (null != o.node) {
                            var l = o.changes || (o.changes = []); - 1 == G(l, r) && l.push(r)
                        }
                    }
                }

                function Rn(e) {
                    e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
                }

                function Bn(e, t, r, n) {
                    var i, o = Pn(e, t),
                        l = e.display.view;
                    if (!At || r == e.doc.first + e.doc.size) return {
                        index: o,
                        lineN: r
                    };
                    for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
                    if (s != t) {
                        if (n > 0) {
                            if (o == l.length - 1) return null;
                            i = s + l[o].size - t, o++
                        } else i = s - t;
                        t += i, r += i
                    }
                    for (; tr(e.doc, r) != r;) {
                        if (o == (n < 0 ? 0 : l.length - 1)) return null;
                        r += n * l[o - (n < 0 ? 1 : 0)].size, o += n
                    }
                    return {
                        index: o,
                        lineN: r
                    }
                }

                function Gn(e, t, r) {
                    var n = e.display;
                    0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = Cr(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = Cr(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(Pn(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(Cr(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, Pn(e, r)))), n.viewTo = r
                }

                function Un(e) {
                    for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.hidden || i.node && !i.changes || ++r
                    }
                    return r
                }

                function Vn(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection())
                }

                function Kn(e, t) {
                    void 0 === t && (t = !0);
                    var r = e.doc,
                        n = {},
                        i = n.cursors = document.createDocumentFragment(),
                        o = n.selection = document.createDocumentFragment(),
                        l = e.options.$customCursor;
                    l && (t = !0);
                    for (var s = 0; s < r.sel.ranges.length; s++)
                        if (t || s != r.sel.primIndex) {
                            var a = r.sel.ranges[s];
                            if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                                var u = a.empty();
                                if (l) {
                                    var c = l(e, a);
                                    c && jn(e, c, i)
                                } else(u || e.options.showCursorWhenSelecting) && jn(e, a.head, i);
                                u || Yn(e, a, o)
                            }
                        }
                    return n
                }

                function jn(e, t, r) {
                    var n = bn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        i = r.appendChild(A("div", "\xa0", "CodeMirror-cursor"));
                    if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
                        var o = yn(e, t, "div", null, null),
                            l = o.right - o.left;
                        i.style.width = (l > 0 ? l : e.defaultCharWidth()) + "px"
                    }
                    if (n.other) {
                        var s = r.appendChild(A("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        s.style.display = "", s.style.left = n.other.left + "px", s.style.top = n.other.top + "px", s.style.height = .85 * (n.other.bottom - n.other.top) + "px"
                    }
                }

                function Xn(e, t) {
                    return e.top - t.top || e.left - t.left
                }

                function Yn(e, t, r) {
                    var n = e.display,
                        i = e.doc,
                        o = document.createDocumentFragment(),
                        l = Xr(e.display),
                        s = l.left,
                        a = Math.max(n.sizerWidth, _r(e) - n.sizer.offsetLeft) - l.right,
                        u = "ltr" == i.direction;

                    function c(e, t, r, n) {
                        t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(A("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? a - e : r) + "px;\n                             height: " + (n - t) + "px"))
                    }

                    function h(t, r, n) {
                        var o, l, h = Ze(i, t),
                            f = h.text.length;

                        function d(r, n) {
                            return yn(e, ot(t, r), "div", h, n)
                        }

                        function p(t, r, n) {
                            var i = Ln(e, h, null, t),
                                o = "ltr" == r == ("after" == n) ? "left" : "right";
                            return d("after" == n ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1), o)[o]
                        }
                        var g = de(h, i.direction);
                        return ue(g, r || 0, null == n ? f : n, (function(e, t, i, h) {
                            var v = "ltr" == i,
                                m = d(e, v ? "left" : "right"),
                                y = d(t - 1, v ? "right" : "left"),
                                b = null == r && 0 == e,
                                w = null == n && t == f,
                                x = 0 == h,
                                C = !g || h == g.length - 1;
                            if (y.top - m.top <= 3) {
                                var S = (u ? w : b) && C,
                                    L = (u ? b : w) && x ? s : (v ? m : y).left,
                                    k = S ? a : (v ? y : m).right;
                                c(L, m.top, k - L, m.bottom)
                            } else {
                                var T, M, N, O;
                                v ? (T = u && b && x ? s : m.left, M = u ? a : p(e, i, "before"), N = u ? s : p(t, i, "after"), O = u && w && C ? a : y.right) : (T = u ? p(e, i, "before") : s, M = !u && b && x ? a : m.right, N = !u && w && C ? s : y.left, O = u ? p(t, i, "after") : a), c(T, m.top, M - T, m.bottom), m.bottom < y.top && c(s, m.bottom, null, y.top), c(N, y.top, O - N, y.bottom)
                            }(!o || Xn(m, o) < 0) && (o = m), Xn(y, o) < 0 && (o = y), (!l || Xn(m, l) < 0) && (l = m), Xn(y, l) < 0 && (l = y)
                        })), {
                            start: o,
                            end: l
                        }
                    }
                    var f = t.from(),
                        d = t.to();
                    if (f.line == d.line) h(f.line, f.ch, d.ch);
                    else {
                        var p = Ze(i, f.line),
                            g = Ze(i, d.line),
                            v = Qt(p) == Qt(g),
                            m = h(f.line, f.ch, v ? p.text.length + 1 : null).end,
                            y = h(d.line, v ? 0 : null, d.ch).start;
                        v && (m.top < y.top - 2 ? (c(m.right, m.top, null, m.bottom), c(s, y.top, y.left, y.bottom)) : c(m.right, m.top, y.left - m.right, m.bottom)), m.bottom < y.top && c(s, m.bottom, null, y.top)
                    }
                    r.appendChild(o)
                }

                function _n(e) {
                    if (e.state.focused) {
                        var t = e.display;
                        clearInterval(t.blinker);
                        var r = !0;
                        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval((function() {
                            e.hasFocus() || Qn(e), t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
                        }), e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                    }
                }

                function $n(e) {
                    e.hasFocus() || (e.display.input.focus(), e.state.focused || Zn(e))
                }

                function qn(e) {
                    e.state.delayingBlurEvent = !0, setTimeout((function() {
                        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Qn(e))
                    }), 100)
                }

                function Zn(e, t) {
                    e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (ye(e, "focus", e, t), e.state.focused = !0, F(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), a && setTimeout((function() {
                        return e.display.input.reset(!0)
                    }), 20)), e.display.input.receivedFocus()), _n(e))
                }

                function Qn(e, t) {
                    e.state.delayingBlurEvent || (e.state.focused && (ye(e, "blur", e, t), e.state.focused = !1, M(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout((function() {
                        e.state.focused || (e.display.shift = !1)
                    }), 150))
                }

                function Jn(e) {
                    for (var t = e.display, r = t.lineDiv.offsetTop, n = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, o = 0, a = 0; a < t.view.length; a++) {
                        var u = t.view[a],
                            c = e.options.lineWrapping,
                            h = void 0,
                            f = 0;
                        if (!u.hidden) {
                            if (i += u.line.height, l && s < 8) {
                                var d = u.node.offsetTop + u.node.offsetHeight;
                                h = d - r, r = d
                            } else {
                                var p = u.node.getBoundingClientRect();
                                h = p.bottom - p.top, !c && u.text.firstChild && (f = u.text.firstChild.getBoundingClientRect().right - p.left - 1)
                            }
                            var g = u.line.height - h;
                            if ((g > .005 || g < -.005) && (i < n && (o -= g), et(u.line, h), ei(u.line), u.rest))
                                for (var v = 0; v < u.rest.length; v++) ei(u.rest[v]);
                            if (f > e.display.sizerWidth) {
                                var m = Math.ceil(f / An(e.display));
                                m > e.display.maxLineLength && (e.display.maxLineLength = m, e.display.maxLine = u.line, e.display.maxLineChanged = !0)
                            }
                        }
                    }
                    Math.abs(o) > 2 && (t.scroller.scrollTop += o)
                }

                function ei(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; ++t) {
                            var r = e.widgets[t],
                                n = r.node.parentNode;
                            n && (r.height = n.offsetHeight)
                        }
                }

                function ti(e, t, r) {
                    var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
                    n = Math.floor(n - Kr(e));
                    var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
                        o = rt(t, n),
                        l = rt(t, i);
                    if (r && r.ensure) {
                        var s = r.ensure.from.line,
                            a = r.ensure.to.line;
                        s < o ? (o = s, l = rt(t, or(Ze(t, s)) + e.wrapper.clientHeight)) : Math.min(a, t.lastLine()) >= l && (o = rt(t, or(Ze(t, a)) - e.wrapper.clientHeight), l = a)
                    }
                    return {
                        from: o,
                        to: Math.max(l, o + 1)
                    }
                }

                function ri(e, t) {
                    if (!be(e, "scrollCursorIntoView")) {
                        var r = e.display,
                            n = r.sizer.getBoundingClientRect(),
                            i = null;
                        if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !g) {
                            var o = A("div", "\u200b", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Kr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Yr(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                            e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
                        }
                    }
                }

                function ni(e, t, r, n) {
                    var i;
                    null == n && (n = 0), e.options.lineWrapping || t != r || (r = "before" == t.sticky ? ot(t.line, t.ch + 1, "before") : t, t = t.ch ? ot(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t);
                    for (var o = 0; o < 5; o++) {
                        var l = !1,
                            s = bn(e, t),
                            a = r && r != t ? bn(e, r) : s,
                            u = oi(e, i = {
                                left: Math.min(s.left, a.left),
                                top: Math.min(s.top, a.top) - n,
                                right: Math.max(s.left, a.left),
                                bottom: Math.max(s.bottom, a.bottom) + n
                            }),
                            c = e.doc.scrollTop,
                            h = e.doc.scrollLeft;
                        if (null != u.scrollTop && (fi(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)), null != u.scrollLeft && (pi(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (l = !0)), !l) break
                    }
                    return i
                }

                function ii(e, t) {
                    var r = oi(e, t);
                    null != r.scrollTop && fi(e, r.scrollTop), null != r.scrollLeft && pi(e, r.scrollLeft)
                }

                function oi(e, t) {
                    var r = e.display,
                        n = On(e.display);
                    t.top < 0 && (t.top = 0);
                    var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
                        o = $r(e),
                        l = {};
                    t.bottom - t.top > o && (t.bottom = t.top + o);
                    var s = e.doc.height + jr(r),
                        a = t.top < n,
                        u = t.bottom > s - n;
                    if (t.top < i) l.scrollTop = a ? 0 : t.top;
                    else if (t.bottom > i + o) {
                        var c = Math.min(t.top, (u ? s : t.bottom) - o);
                        c != i && (l.scrollTop = c)
                    }
                    var h = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
                        f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft - h,
                        d = _r(e) - r.gutters.offsetWidth,
                        p = t.right - t.left > d;
                    return p && (t.right = t.left + d), t.left < 10 ? l.scrollLeft = 0 : t.left < f ? l.scrollLeft = Math.max(0, t.left + h - (p ? 0 : 10)) : t.right > d + f - 3 && (l.scrollLeft = t.right + (p ? 0 : 10) - d), l
                }

                function li(e, t) {
                    null != t && (ci(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
                }

                function si(e) {
                    ci(e);
                    var t = e.getCursor();
                    e.curOp.scrollToPos = {
                        from: t,
                        to: t,
                        margin: e.options.cursorScrollMargin
                    }
                }

                function ai(e, t, r) {
                    null == t && null == r || ci(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r)
                }

                function ui(e, t) {
                    ci(e), e.curOp.scrollToPos = t
                }

                function ci(e) {
                    var t = e.curOp.scrollToPos;
                    t && (e.curOp.scrollToPos = null, hi(e, wn(e, t.from), wn(e, t.to), t.margin))
                }

                function hi(e, t, r, n) {
                    var i = oi(e, {
                        left: Math.min(t.left, r.left),
                        top: Math.min(t.top, r.top) - n,
                        right: Math.max(t.right, r.right),
                        bottom: Math.max(t.bottom, r.bottom) + n
                    });
                    ai(e, i.scrollLeft, i.scrollTop)
                }

                function fi(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (r || Vi(e, {
                        top: t
                    }), di(e, t, !0), r && Vi(e), Ei(e, 100))
                }

                function di(e, t, r) {
                    t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
                }

                function pi(e, t, r, n) {
                    t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, Yi(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
                }

                function gi(e) {
                    var t = e.display,
                        r = t.gutters.offsetWidth,
                        n = Math.round(e.doc.height + jr(e.display));
                    return {
                        clientHeight: t.scroller.clientHeight,
                        viewHeight: t.wrapper.clientHeight,
                        scrollWidth: t.scroller.scrollWidth,
                        clientWidth: t.scroller.clientWidth,
                        viewWidth: t.wrapper.clientWidth,
                        barLeft: e.options.fixedGutter ? r : 0,
                        docHeight: n,
                        scrollHeight: n + Yr(e) + t.barHeight,
                        nativeBarWidth: t.nativeBarWidth,
                        gutterWidth: r
                    }
                }
                var vi = function(e, t, r) {
                    this.cm = r;
                    var n = this.vert = A("div", [A("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                        i = this.horiz = A("div", [A("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                    n.tabIndex = i.tabIndex = -1, e(n), e(i), ge(n, "scroll", (function() {
                        n.clientHeight && t(n.scrollTop, "vertical")
                    })), ge(i, "scroll", (function() {
                        i.clientWidth && t(i.scrollLeft, "horizontal")
                    })), this.checkedZeroWidth = !1, l && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
                };
                vi.prototype.update = function(e) {
                    var t = e.scrollWidth > e.clientWidth + 1,
                        r = e.scrollHeight > e.clientHeight + 1,
                        n = e.nativeBarWidth;
                    if (r) {
                        this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
                        var i = e.viewHeight - (t ? n : 0);
                        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
                    } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                    if (t) {
                        this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                        var o = e.viewWidth - e.barLeft - (r ? n : 0);
                        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
                    } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                    return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                        right: r ? n : 0,
                        bottom: t ? n : 0
                    }
                }, vi.prototype.setScrollLeft = function(e) {
                    this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
                }, vi.prototype.setScrollTop = function(e) {
                    this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
                }, vi.prototype.zeroWidthHack = function() {
                    var e = b && !p ? "12px" : "18px";
                    this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new B, this.disableVert = new B
                }, vi.prototype.enableZeroWidthBar = function(e, t, r) {
                    function n() {
                        var i = e.getBoundingClientRect();
                        ("vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
                    }
                    e.style.pointerEvents = "auto", t.set(1e3, n)
                }, vi.prototype.clear = function() {
                    var e = this.horiz.parentNode;
                    e.removeChild(this.horiz), e.removeChild(this.vert)
                };
                var mi = function() {};

                function yi(e, t) {
                    t || (t = gi(e));
                    var r = e.display.barWidth,
                        n = e.display.barHeight;
                    bi(e, t);
                    for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && Jn(e), bi(e, gi(e)), r = e.display.barWidth, n = e.display.barHeight
                }

                function bi(e, t) {
                    var r = e.display,
                        n = r.scrollbars.update(t);
                    r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
                }
                mi.prototype.update = function() {
                    return {
                        bottom: 0,
                        right: 0
                    }
                }, mi.prototype.setScrollLeft = function() {}, mi.prototype.setScrollTop = function() {}, mi.prototype.clear = function() {};
                var wi = {
                    native: vi,
                    null: mi
                };

                function xi(e) {
                    e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && M(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new wi[e.options.scrollbarStyle]((function(t) {
                        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), ge(t, "mousedown", (function() {
                            e.state.focused && setTimeout((function() {
                                return e.display.input.focus()
                            }), 0)
                        })), t.setAttribute("cm-not-content", "true")
                    }), (function(t, r) {
                        "horizontal" == r ? pi(e, t) : fi(e, t)
                    }), e), e.display.scrollbars.addClass && F(e.display.wrapper, e.display.scrollbars.addClass)
                }
                var Ci = 0;

                function Si(e) {
                    e.curOp = {
                        cm: e,
                        viewChanged: !1,
                        startHeight: e.doc.height,
                        forceUpdate: !1,
                        updateInput: 0,
                        typing: !1,
                        changeObjs: null,
                        cursorActivityHandlers: null,
                        cursorActivityCalled: 0,
                        selectionChanged: !1,
                        updateMaxLine: !1,
                        scrollLeft: null,
                        scrollTop: null,
                        scrollToPos: null,
                        focus: !1,
                        id: ++Ci,
                        markArrays: null
                    }, Lr(e.curOp)
                }

                function Li(e) {
                    var t = e.curOp;
                    t && Tr(t, (function(e) {
                        for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                        ki(e)
                    }))
                }

                function ki(e) {
                    for (var t = e.ops, r = 0; r < t.length; r++) Ti(t[r]);
                    for (var n = 0; n < t.length; n++) Mi(t[n]);
                    for (var i = 0; i < t.length; i++) Ni(t[i]);
                    for (var o = 0; o < t.length; o++) Oi(t[o]);
                    for (var l = 0; l < t.length; l++) Ai(t[l])
                }

                function Ti(e) {
                    var t = e.cm,
                        r = t.display;
                    zi(t), e.updateMaxLine && sr(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new Ii(t, e.mustUpdate && {
                        top: e.scrollTop,
                        ensure: e.scrollToPos
                    }, e.forceUpdate)
                }

                function Mi(e) {
                    e.updatedDisplay = e.mustUpdate && Gi(e.cm, e.update)
                }

                function Ni(e) {
                    var t = e.cm,
                        r = t.display;
                    e.updatedDisplay && Jn(t), e.barMeasure = gi(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Jr(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Yr(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - _r(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
                }

                function Oi(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && pi(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                    var r = e.focus && e.focus == H();
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && yi(t, e.barMeasure), e.updatedDisplay && Xi(t, e.barMeasure), e.selectionChanged && _n(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && $n(e.cm)
                }

                function Ai(e) {
                    var t = e.cm,
                        r = t.display,
                        n = t.doc;
                    e.updatedDisplay && Ui(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && di(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && pi(t, e.scrollLeft, !0, !0), e.scrollToPos && ri(t, ni(t, ft(n, e.scrollToPos.from), ft(n, e.scrollToPos.to), e.scrollToPos.margin));
                    var i = e.maybeHiddenMarkers,
                        o = e.maybeUnhiddenMarkers;
                    if (i)
                        for (var l = 0; l < i.length; ++l) i[l].lines.length || ye(i[l], "hide");
                    if (o)
                        for (var s = 0; s < o.length; ++s) o[s].lines.length && ye(o[s], "unhide");
                    r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ye(t, "changes", t, e.changeObjs), e.update && e.update.finish()
                }

                function Di(e, t) {
                    if (e.curOp) return t();
                    Si(e);
                    try {
                        return t()
                    } finally {
                        Li(e)
                    }
                }

                function Wi(e, t) {
                    return function() {
                        if (e.curOp) return t.apply(e, arguments);
                        Si(e);
                        try {
                            return t.apply(e, arguments)
                        } finally {
                            Li(e)
                        }
                    }
                }

                function Hi(e) {
                    return function() {
                        if (this.curOp) return e.apply(this, arguments);
                        Si(this);
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            Li(this)
                        }
                    }
                }

                function Fi(e) {
                    return function() {
                        var t = this.cm;
                        if (!t || t.curOp) return e.apply(this, arguments);
                        Si(t);
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            Li(t)
                        }
                    }
                }

                function Ei(e, t) {
                    e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, I(Pi, e))
                }

                function Pi(e) {
                    var t = e.doc;
                    if (!(t.highlightFrontier >= e.display.viewTo)) {
                        var r = +new Date + e.options.workTime,
                            n = bt(e, t.highlightFrontier),
                            i = [];
                        t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), (function(o) {
                            if (n.line >= e.display.viewFrom) {
                                var l = o.styles,
                                    s = o.text.length > e.options.maxHighlightLength ? Ye(t.mode, n.state) : null,
                                    a = mt(e, o, n, !0);
                                s && (n.state = s), o.styles = a.styles;
                                var u = o.styleClasses,
                                    c = a.classes;
                                c ? o.styleClasses = c : u && (o.styleClasses = null);
                                for (var h = !l || l.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), f = 0; !h && f < l.length; ++f) h = l[f] != o.styles[f];
                                h && i.push(n.line), o.stateAfter = n.save(), n.nextLine()
                            } else o.text.length <= e.options.maxHighlightLength && wt(e, o.text, n), o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();
                            if (+new Date > r) return Ei(e, e.options.workDelay), !0
                        })), t.highlightFrontier = n.line, t.modeFrontier = Math.max(t.modeFrontier, n.line), i.length && Di(e, (function() {
                            for (var t = 0; t < i.length; t++) zn(e, i[t], "text")
                        }))
                    }
                }
                var Ii = function(e, t, r) {
                    var n = e.display;
                    this.viewport = t, this.visible = ti(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = _r(e), this.force = r, this.dims = Dn(e), this.events = []
                };

                function zi(e) {
                    var t = e.display;
                    !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Yr(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Yr(e) + "px", t.scrollbarsClipped = !0)
                }

                function Ri(e) {
                    if (e.hasFocus()) return null;
                    var t = H();
                    if (!t || !W(e.display.lineDiv, t)) return null;
                    var r = {
                        activeElt: t
                    };
                    if (window.getSelection) {
                        var n = window.getSelection();
                        n.anchorNode && n.extend && W(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset)
                    }
                    return r
                }

                function Bi(e) {
                    if (e && e.activeElt && e.activeElt != H() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && W(document.body, e.anchorNode) && W(document.body, e.focusNode))) {
                        var t = window.getSelection(),
                            r = document.createRange();
                        r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset)
                    }
                }

                function Gi(e, t) {
                    var r = e.display,
                        n = e.doc;
                    if (t.editorIsHidden) return Rn(e), !1;
                    if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == Un(e)) return !1;
                    _i(e) && (Rn(e), t.dims = Dn(e));
                    var i = n.first + n.size,
                        o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
                        l = Math.min(i, t.visible.to + e.options.viewportMargin);
                    r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), At && (o = tr(e.doc, o), l = rr(e.doc, l));
                    var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
                    Gn(e, o, l), r.viewOffset = or(Ze(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
                    var a = Un(e);
                    if (!s && 0 == a && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                    var u = Ri(e);
                    return a > 4 && (r.lineDiv.style.display = "none"), Ki(e, r.updateLineNumbers, t.dims), a > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, Bi(u), N(r.cursorDiv), N(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, s && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, Ei(e, 400)), r.updateLineNumbers = null, !0
                }

                function Ui(e, t) {
                    for (var r = t.viewport, n = !0;; n = !1) {
                        if (n && e.options.lineWrapping && t.oldDisplayWidth != _r(e)) n && (t.visible = ti(e.display, e.doc, r));
                        else if (r && null != r.top && (r = {
                                top: Math.min(e.doc.height + jr(e.display) - $r(e), r.top)
                            }), t.visible = ti(e.display, e.doc, r), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break;
                        if (!Gi(e, t)) break;
                        Jn(e);
                        var i = gi(e);
                        Vn(e), yi(e, i), Xi(e, i), t.force = !1
                    }
                    t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
                }

                function Vi(e, t) {
                    var r = new Ii(e, t);
                    if (Gi(e, r)) {
                        Jn(e), Ui(e, r);
                        var n = gi(e);
                        Vn(e), yi(e, n), Xi(e, n), r.finish()
                    }
                }

                function Ki(e, t, r) {
                    var n = e.display,
                        i = e.options.lineNumbers,
                        o = n.lineDiv,
                        l = o.firstChild;

                    function s(t) {
                        var r = t.nextSibling;
                        return a && b && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r
                    }
                    for (var u = n.view, c = n.viewFrom, h = 0; h < u.length; h++) {
                        var f = u[h];
                        if (f.hidden);
                        else if (f.node && f.node.parentNode == o) {
                            for (; l != f.node;) l = s(l);
                            var d = i && null != t && t <= c && f.lineNumber;
                            f.changes && (G(f.changes, "gutter") > -1 && (d = !1), Ar(e, f, c, r)), d && (N(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(it(e.options, c)))), l = f.node.nextSibling
                        } else {
                            var p = zr(e, f, c, r);
                            o.insertBefore(p, l)
                        }
                        c += f.size
                    }
                    for (; l;) l = s(l)
                }

                function ji(e) {
                    var t = e.gutters.offsetWidth;
                    e.sizer.style.marginLeft = t + "px", Nr(e, "gutterChanged", e)
                }

                function Xi(e, t) {
                    e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Yr(e) + "px"
                }

                function Yi(e) {
                    var t = e.display,
                        r = t.view;
                    if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                        for (var n = Wn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
                            if (!r[l].hidden) {
                                e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o), r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                                var s = r[l].alignable;
                                if (s)
                                    for (var a = 0; a < s.length; a++) s[a].style.left = o
                            }
                        e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
                    }
                }

                function _i(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        r = it(e.options, t.first + t.size - 1),
                        n = e.display;
                    if (r.length != n.lineNumChars) {
                        var i = n.measure.appendChild(A("div", [A("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            o = i.firstChild.offsetWidth,
                            l = i.offsetWidth - o;
                        return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1, n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", ji(e.display), !0
                    }
                    return !1
                }

                function $i(e, t) {
                    for (var r = [], n = !1, i = 0; i < e.length; i++) {
                        var o = e[i],
                            l = null;
                        if ("string" != typeof o && (l = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
                            if (!t) continue;
                            n = !0
                        }
                        r.push({
                            className: o,
                            style: l
                        })
                    }
                    return t && !n && r.push({
                        className: "CodeMirror-linenumbers",
                        style: null
                    }), r
                }

                function qi(e) {
                    var t = e.gutters,
                        r = e.gutterSpecs;
                    N(t), e.lineGutter = null;
                    for (var n = 0; n < r.length; ++n) {
                        var i = r[n],
                            o = i.className,
                            l = i.style,
                            s = t.appendChild(A("div", null, "CodeMirror-gutter " + o));
                        l && (s.style.cssText = l), "CodeMirror-linenumbers" == o && (e.lineGutter = s, s.style.width = (e.lineNumWidth || 1) + "px")
                    }
                    t.style.display = r.length ? "" : "none", ji(e)
                }

                function Zi(e) {
                    qi(e.display), In(e), Yi(e)
                }

                function Qi(e, t, n, i) {
                    var o = this;
                    this.input = n, o.scrollbarFiller = A("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = A("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = D("div", null, "CodeMirror-code"), o.selectionDiv = A("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = A("div", null, "CodeMirror-cursors"), o.measure = A("div", null, "CodeMirror-measure"), o.lineMeasure = A("div", null, "CodeMirror-measure"), o.lineSpace = D("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                    var u = D("div", [o.lineSpace], "CodeMirror-lines");
                    o.mover = A("div", [u], null, "position: relative"), o.sizer = A("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = A("div", null, null, "position: absolute; height: " + U + "px; width: 1px;"), o.gutters = A("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = A("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = A("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), o.wrapper.setAttribute("translate", "no"), l && s < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), a || r && y || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = $i(i.gutters, i.lineNumbers), qi(o), n.init(o)
                }
                Ii.prototype.signal = function(e, t) {
                    xe(e, t) && this.events.push(arguments)
                }, Ii.prototype.finish = function() {
                    for (var e = 0; e < this.events.length; e++) ye.apply(null, this.events[e])
                };
                var Ji = 0,
                    eo = null;

                function to(e) {
                    var t = e.wheelDeltaX,
                        r = e.wheelDeltaY;
                    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
                        x: t,
                        y: r
                    }
                }

                function ro(e) {
                    var t = to(e);
                    return t.x *= eo, t.y *= eo, t
                }

                function no(e, t) {
                    c && h >= 102 && (null == e.display.chromeScrollHack ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout((function() {
                        e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = ""
                    }), 100));
                    var n = to(t),
                        i = n.x,
                        o = n.y,
                        l = eo;
                    0 === t.deltaMode && (i = t.deltaX, o = t.deltaY, l = 1);
                    var s = e.display,
                        u = s.scroller,
                        d = u.scrollWidth > u.clientWidth,
                        p = u.scrollHeight > u.clientHeight;
                    if (i && d || o && p) {
                        if (o && b && a) e: for (var g = t.target, v = s.view; g != u; g = g.parentNode)
                            for (var m = 0; m < v.length; m++)
                                if (v[m].node == g) {
                                    e.display.currentWheelTarget = g;
                                    break e
                                }
                        if (i && !r && !f && null != l) return o && p && fi(e, Math.max(0, u.scrollTop + o * l)), pi(e, Math.max(0, u.scrollLeft + i * l)), (!o || o && p) && Se(t), void(s.wheelStartX = null);
                        if (o && null != l) {
                            var y = o * l,
                                w = e.doc.scrollTop,
                                x = w + s.wrapper.clientHeight;
                            y < 0 ? w = Math.max(0, w + y - 50) : x = Math.min(e.doc.height, x + y + 50), Vi(e, {
                                top: w,
                                bottom: x
                            })
                        }
                        Ji < 20 && 0 !== t.deltaMode && (null == s.wheelStartX ? (s.wheelStartX = u.scrollLeft, s.wheelStartY = u.scrollTop, s.wheelDX = i, s.wheelDY = o, setTimeout((function() {
                            if (null != s.wheelStartX) {
                                var e = u.scrollLeft - s.wheelStartX,
                                    t = u.scrollTop - s.wheelStartY,
                                    r = t && s.wheelDY && t / s.wheelDY || e && s.wheelDX && e / s.wheelDX;
                                s.wheelStartX = s.wheelStartY = null, r && (eo = (eo * Ji + r) / (Ji + 1), ++Ji)
                            }
                        }), 200)) : (s.wheelDX += i, s.wheelDY += o))
                    }
                }
                l ? eo = -.53 : r ? eo = 15 : c ? eo = -.7 : d && (eo = -1 / 3);
                var io = function(e, t) {
                    this.ranges = e, this.primIndex = t
                };
                io.prototype.primary = function() {
                    return this.ranges[this.primIndex]
                }, io.prototype.equals = function(e) {
                    if (e == this) return !0;
                    if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                    for (var t = 0; t < this.ranges.length; t++) {
                        var r = this.ranges[t],
                            n = e.ranges[t];
                        if (!st(r.anchor, n.anchor) || !st(r.head, n.head)) return !1
                    }
                    return !0
                }, io.prototype.deepCopy = function() {
                    for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new oo(at(this.ranges[t].anchor), at(this.ranges[t].head));
                    return new io(e, this.primIndex)
                }, io.prototype.somethingSelected = function() {
                    for (var e = 0; e < this.ranges.length; e++)
                        if (!this.ranges[e].empty()) return !0;
                    return !1
                }, io.prototype.contains = function(e, t) {
                    t || (t = e);
                    for (var r = 0; r < this.ranges.length; r++) {
                        var n = this.ranges[r];
                        if (lt(t, n.from()) >= 0 && lt(e, n.to()) <= 0) return r
                    }
                    return -1
                };
                var oo = function(e, t) {
                    this.anchor = e, this.head = t
                };

                function lo(e, t, r) {
                    var n = e && e.options.selectionsMayTouch,
                        i = t[r];
                    t.sort((function(e, t) {
                        return lt(e.from(), t.from())
                    })), r = G(t, i);
                    for (var o = 1; o < t.length; o++) {
                        var l = t[o],
                            s = t[o - 1],
                            a = lt(s.to(), l.from());
                        if (n && !l.empty() ? a > 0 : a >= 0) {
                            var u = ct(s.from(), l.from()),
                                c = ut(s.to(), l.to()),
                                h = s.empty() ? l.from() == l.head : s.from() == s.head;
                            o <= r && --r, t.splice(--o, 2, new oo(h ? c : u, h ? u : c))
                        }
                    }
                    return new io(t, r)
                }

                function so(e, t) {
                    return new io([new oo(e, t || e)], 0)
                }

                function ao(e) {
                    return e.text ? ot(e.from.line + e.text.length - 1, q(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
                }

                function uo(e, t) {
                    if (lt(e, t.from) < 0) return e;
                    if (lt(e, t.to) <= 0) return ao(t);
                    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        n = e.ch;
                    return e.line == t.to.line && (n += ao(t).ch - t.to.ch), ot(r, n)
                }

                function co(e, t) {
                    for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
                        var i = e.sel.ranges[n];
                        r.push(new oo(uo(i.anchor, t), uo(i.head, t)))
                    }
                    return lo(e.cm, r, e.sel.primIndex)
                }

                function ho(e, t, r) {
                    return e.line == t.line ? ot(r.line, e.ch - t.ch + r.ch) : ot(r.line + (e.line - t.line), e.ch)
                }

                function fo(e, t, r) {
                    for (var n = [], i = ot(e.first, 0), o = i, l = 0; l < t.length; l++) {
                        var s = t[l],
                            a = ho(s.from, i, o),
                            u = ho(ao(s), i, o);
                        if (i = s.to, o = u, "around" == r) {
                            var c = e.sel.ranges[l],
                                h = lt(c.head, c.anchor) < 0;
                            n[l] = new oo(h ? u : a, h ? a : u)
                        } else n[l] = new oo(a, a)
                    }
                    return new io(n, e.sel.primIndex)
                }

                function po(e) {
                    e.doc.mode = Ke(e.options, e.doc.modeOption), go(e)
                }

                function go(e) {
                    e.doc.iter((function(e) {
                        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
                    })), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Ei(e, 100), e.state.modeGen++, e.curOp && In(e)
                }

                function vo(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && "" == q(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
                }

                function mo(e, t, r, n) {
                    function i(e) {
                        return r ? r[e] : null
                    }

                    function o(e, r, i) {
                        ur(e, r, i, n), Nr(e, "change", e, t)
                    }

                    function l(e, t) {
                        for (var r = [], o = e; o < t; ++o) r.push(new ar(u[o], i(o), n));
                        return r
                    }
                    var s = t.from,
                        a = t.to,
                        u = t.text,
                        c = Ze(e, s.line),
                        h = Ze(e, a.line),
                        f = q(u),
                        d = i(u.length - 1),
                        p = a.line - s.line;
                    if (t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
                    else if (vo(e, t)) {
                        var g = l(0, u.length - 1);
                        o(h, h.text, d), p && e.remove(s.line, p), g.length && e.insert(s.line, g)
                    } else if (c == h)
                        if (1 == u.length) o(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
                        else {
                            var v = l(1, u.length - 1);
                            v.push(new ar(f + c.text.slice(a.ch), d, n)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, v)
                        }
                    else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), i(0)), e.remove(s.line + 1, p);
                    else {
                        o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, f + h.text.slice(a.ch), d);
                        var m = l(1, u.length - 1);
                        p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, m)
                    }
                    Nr(e, "change", e, t)
                }

                function yo(e, t, r) {
                    function n(e, i, o) {
                        if (e.linked)
                            for (var l = 0; l < e.linked.length; ++l) {
                                var s = e.linked[l];
                                if (s.doc != i) {
                                    var a = o && s.sharedHist;
                                    r && !a || (t(s.doc, a), n(s.doc, e, a))
                                }
                            }
                    }
                    n(e, null, !0)
                }

                function bo(e, t) {
                    if (t.cm) throw new Error("This document is already in use.");
                    e.doc = t, t.cm = e, Fn(e), po(e), wo(e), e.options.direction = t.direction, e.options.lineWrapping || sr(e), e.options.mode = t.modeOption, In(e)
                }

                function wo(e) {
                    ("rtl" == e.doc.direction ? F : M)(e.display.lineDiv, "CodeMirror-rtl")
                }

                function xo(e) {
                    Di(e, (function() {
                        wo(e), In(e)
                    }))
                }

                function Co(e) {
                    this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1
                }

                function So(e, t) {
                    var r = {
                        from: at(t.from),
                        to: ao(t),
                        text: Qe(e, t.from, t.to)
                    };
                    return Ao(e, r, t.from.line, t.to.line + 1), yo(e, (function(e) {
                        return Ao(e, r, t.from.line, t.to.line + 1)
                    }), !0), r
                }

                function Lo(e) {
                    for (; e.length && q(e).ranges;) e.pop()
                }

                function ko(e, t) {
                    return t ? (Lo(e.done), q(e.done)) : e.done.length && !q(e.done).ranges ? q(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), q(e.done)) : void 0
                }

                function To(e, t, r, n) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o, l, s = +new Date;
                    if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = ko(i, i.lastOp == n))) l = q(o.changes), 0 == lt(t.from, t.to) && 0 == lt(t.from, l.to) ? l.to = ao(t) : o.changes.push(So(e, t));
                    else {
                        var a = q(i.done);
                        for (a && a.ranges || Oo(e.sel, i.done), o = {
                                changes: [So(e, t)],
                                generation: i.generation
                            }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
                    }
                    i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, l || ye(e, "historyAdded")
                }

                function Mo(e, t, r, n) {
                    var i = t.charAt(0);
                    return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
                }

                function No(e, t, r, n) {
                    var i = e.history,
                        o = n && n.origin;
                    r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Mo(e, o, q(i.done), t)) ? i.done[i.done.length - 1] = t : Oo(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && Lo(i.undone)
                }

                function Oo(e, t) {
                    var r = q(t);
                    r && r.ranges && r.equals(e) || t.push(e)
                }

                function Ao(e, t, r, n) {
                    var i = t["spans_" + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), (function(r) {
                        r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o
                    }))
                }

                function Do(e) {
                    if (!e) return null;
                    for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
                    return t ? t.length ? t : null : e
                }

                function Wo(e, t) {
                    var r = t["spans_" + e.id];
                    if (!r) return null;
                    for (var n = [], i = 0; i < t.text.length; ++i) n.push(Do(r[i]));
                    return n
                }

                function Ho(e, t) {
                    var r = Wo(e, t),
                        n = Rt(e, t);
                    if (!r) return n;
                    if (!n) return r;
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i],
                            l = n[i];
                        if (o && l) e: for (var s = 0; s < l.length; ++s) {
                            for (var a = l[s], u = 0; u < o.length; ++u)
                                if (o[u].marker == a.marker) continue e;
                            o.push(a)
                        } else l && (r[i] = l)
                    }
                    return r
                }

                function Fo(e, t, r) {
                    for (var n = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) n.push(r ? io.prototype.deepCopy.call(o) : o);
                        else {
                            var l = o.changes,
                                s = [];
                            n.push({
                                changes: s
                            });
                            for (var a = 0; a < l.length; ++a) {
                                var u = l[a],
                                    c = void 0;
                                if (s.push({
                                        from: u.from,
                                        to: u.to,
                                        text: u.text
                                    }), t)
                                    for (var h in u)(c = h.match(/^spans_(\d+)$/)) && G(t, Number(c[1])) > -1 && (q(s)[h] = u[h], delete u[h])
                            }
                        }
                    }
                    return n
                }

                function Eo(e, t, r, n) {
                    if (n) {
                        var i = e.anchor;
                        if (r) {
                            var o = lt(t, i) < 0;
                            o != lt(r, i) < 0 ? (i = t, t = r) : o != lt(t, r) < 0 && (t = r)
                        }
                        return new oo(i, t)
                    }
                    return new oo(r || t, t)
                }

                function Po(e, t, r, n, i) {
                    null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Uo(e, new io([Eo(e.sel.primary(), t, r, i)], 0), n)
                }

                function Io(e, t, r) {
                    for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = Eo(e.sel.ranges[o], t[o], null, i);
                    Uo(e, lo(e.cm, n, e.sel.primIndex), r)
                }

                function zo(e, t, r, n) {
                    var i = e.sel.ranges.slice(0);
                    i[t] = r, Uo(e, lo(e.cm, i, e.sel.primIndex), n)
                }

                function Ro(e, t, r, n) {
                    Uo(e, so(t, r), n)
                }

                function Bo(e, t, r) {
                    var n = {
                        ranges: t.ranges,
                        update: function(t) {
                            this.ranges = [];
                            for (var r = 0; r < t.length; r++) this.ranges[r] = new oo(ft(e, t[r].anchor), ft(e, t[r].head))
                        },
                        origin: r && r.origin
                    };
                    return ye(e, "beforeSelectionChange", e, n), e.cm && ye(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? lo(e.cm, n.ranges, n.ranges.length - 1) : t
                }

                function Go(e, t, r) {
                    var n = e.history.done,
                        i = q(n);
                    i && i.ranges ? (n[n.length - 1] = t, Vo(e, t, r)) : Uo(e, t, r)
                }

                function Uo(e, t, r) {
                    Vo(e, t, r), No(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
                }

                function Vo(e, t, r) {
                    (xe(e, "beforeSelectionChange") || e.cm && xe(e.cm, "beforeSelectionChange")) && (t = Bo(e, t, r));
                    var n = r && r.bias || (lt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    Ko(e, Xo(e, t, n, !0)), r && !1 === r.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || si(e.cm)
                }

                function Ko(e, t) {
                    t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, we(e.cm)), Nr(e, "cursorActivity", e))
                }

                function jo(e) {
                    Ko(e, Xo(e, e.sel, null, !1))
                }

                function Xo(e, t, r, n) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var l = t.ranges[o],
                            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            a = _o(e, l.anchor, s && s.anchor, r, n),
                            u = _o(e, l.head, s && s.head, r, n);
                        (i || a != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new oo(a, u))
                    }
                    return i ? lo(e.cm, i, t.primIndex) : t
                }

                function Yo(e, t, r, n, i) {
                    var o = Ze(e, t.line);
                    if (o.markedSpans)
                        for (var l = 0; l < o.markedSpans.length; ++l) {
                            var s = o.markedSpans[l],
                                a = s.marker,
                                u = "selectLeft" in a ? !a.selectLeft : a.inclusiveLeft,
                                c = "selectRight" in a ? !a.selectRight : a.inclusiveRight;
                            if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                                if (i && (ye(a, "beforeCursorEnter"), a.explicitlyCleared)) {
                                    if (o.markedSpans) {
                                        --l;
                                        continue
                                    }
                                    break
                                }
                                if (!a.atomic) continue;
                                if (r) {
                                    var h = a.find(n < 0 ? 1 : -1),
                                        f = void 0;
                                    if ((n < 0 ? c : u) && (h = $o(e, h, -n, h && h.line == t.line ? o : null)), h && h.line == t.line && (f = lt(h, r)) && (n < 0 ? f < 0 : f > 0)) return Yo(e, h, t, n, i)
                                }
                                var d = a.find(n < 0 ? -1 : 1);
                                return (n < 0 ? u : c) && (d = $o(e, d, n, d.line == t.line ? o : null)), d ? Yo(e, d, t, n, i) : null
                            }
                        }
                    return t
                }

                function _o(e, t, r, n, i) {
                    var o = n || 1,
                        l = Yo(e, t, r, o, i) || !i && Yo(e, t, r, o, !0) || Yo(e, t, r, -o, i) || !i && Yo(e, t, r, -o, !0);
                    return l || (e.cantEdit = !0, ot(e.first, 0))
                }

                function $o(e, t, r, n) {
                    return r < 0 && 0 == t.ch ? t.line > e.first ? ft(e, ot(t.line - 1)) : null : r > 0 && t.ch == (n || Ze(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? ot(t.line + 1, 0) : null : new ot(t.line, t.ch + r)
                }

                function qo(e) {
                    e.setSelection(ot(e.firstLine(), 0), ot(e.lastLine()), K)
                }

                function Zo(e, t, r) {
                    var n = {
                        canceled: !1,
                        from: t.from,
                        to: t.to,
                        text: t.text,
                        origin: t.origin,
                        cancel: function() {
                            return n.canceled = !0
                        }
                    };
                    return r && (n.update = function(t, r, i, o) {
                        t && (n.from = ft(e, t)), r && (n.to = ft(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o)
                    }), ye(e, "beforeChange", e, n), e.cm && ye(e.cm, "beforeChange", e.cm, n), n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                        from: n.from,
                        to: n.to,
                        text: n.text,
                        origin: n.origin
                    }
                }

                function Qo(e, t, r) {
                    if (e.cm) {
                        if (!e.cm.curOp) return Wi(e.cm, Qo)(e, t, r);
                        if (e.cm.state.suppressEdits) return
                    }
                    if (!(xe(e, "beforeChange") || e.cm && xe(e.cm, "beforeChange")) || (t = Zo(e, t, !0))) {
                        var n = Ot && !r && Gt(e, t.from, t.to);
                        if (n)
                            for (var i = n.length - 1; i >= 0; --i) Jo(e, {
                                from: n[i].from,
                                to: n[i].to,
                                text: i ? [""] : t.text,
                                origin: t.origin
                            });
                        else Jo(e, t)
                    }
                }

                function Jo(e, t) {
                    if (1 != t.text.length || "" != t.text[0] || 0 != lt(t.from, t.to)) {
                        var r = co(e, t);
                        To(e, t, r, e.cm ? e.cm.curOp.id : NaN), rl(e, t, r, Rt(e, t));
                        var n = [];
                        yo(e, (function(e, r) {
                            r || -1 != G(n, e.history) || (sl(e.history, t), n.push(e.history)), rl(e, t, null, Rt(e, t))
                        }))
                    }
                }

                function el(e, t, r) {
                    var n = e.cm && e.cm.state.suppressEdits;
                    if (!n || r) {
                        for (var i, o = e.history, l = e.sel, s = "undo" == t ? o.done : o.undone, a = "undo" == t ? o.undone : o.done, u = 0; u < s.length && (i = s[u], r ? !i.ranges || i.equals(e.sel) : i.ranges); u++);
                        if (u != s.length) {
                            for (o.lastOrigin = o.lastSelOrigin = null;;) {
                                if (!(i = s.pop()).ranges) {
                                    if (n) return void s.push(i);
                                    break
                                }
                                if (Oo(i, a), r && !i.equals(e.sel)) return void Uo(e, i, {
                                    clearRedo: !1
                                });
                                l = i
                            }
                            var c = [];
                            Oo(l, a), a.push({
                                changes: c,
                                generation: o.generation
                            }), o.generation = i.generation || ++o.maxGeneration;
                            for (var h = xe(e, "beforeChange") || e.cm && xe(e.cm, "beforeChange"), f = function(r) {
                                    var n = i.changes[r];
                                    if (n.origin = t, h && !Zo(e, n, !1)) return s.length = 0, {};
                                    c.push(So(e, n));
                                    var o = r ? co(e, n) : q(s);
                                    rl(e, n, o, Ho(e, n)), !r && e.cm && e.cm.scrollIntoView({
                                        from: n.from,
                                        to: ao(n)
                                    });
                                    var l = [];
                                    yo(e, (function(e, t) {
                                        t || -1 != G(l, e.history) || (sl(e.history, n), l.push(e.history)), rl(e, n, null, Ho(e, n))
                                    }))
                                }, d = i.changes.length - 1; d >= 0; --d) {
                                var p = f(d);
                                if (p) return p.v
                            }
                        }
                    }
                }

                function tl(e, t) {
                    if (0 != t && (e.first += t, e.sel = new io(Z(e.sel.ranges, (function(e) {
                            return new oo(ot(e.anchor.line + t, e.anchor.ch), ot(e.head.line + t, e.head.ch))
                        })), e.sel.primIndex), e.cm)) {
                        In(e.cm, e.first, e.first - t, t);
                        for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) zn(e.cm, n, "gutter")
                    }
                }

                function rl(e, t, r, n) {
                    if (e.cm && !e.cm.curOp) return Wi(e.cm, rl)(e, t, r, n);
                    if (t.to.line < e.first) tl(e, t.text.length - 1 - (t.to.line - t.from.line));
                    else if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            tl(e, i), t = {
                                from: ot(e.first, 0),
                                to: ot(t.to.line + i, t.to.ch),
                                text: [q(t.text)],
                                origin: t.origin
                            }
                        }
                        var o = e.lastLine();
                        t.to.line > o && (t = {
                            from: t.from,
                            to: ot(o, Ze(e, o).text.length),
                            text: [t.text[0]],
                            origin: t.origin
                        }), t.removed = Qe(e, t.from, t.to), r || (r = co(e, t)), e.cm ? nl(e.cm, t, n) : mo(e, t, n), Vo(e, r, K), e.cantEdit && _o(e, ot(e.firstLine(), 0)) && (e.cantEdit = !1)
                    }
                }

                function nl(e, t, r) {
                    var n = e.doc,
                        i = e.display,
                        o = t.from,
                        l = t.to,
                        s = !1,
                        a = o.line;
                    e.options.lineWrapping || (a = tt(Qt(Ze(n, o.line))), n.iter(a, l.line + 1, (function(e) {
                        if (e == i.maxLine) return s = !0, !0
                    }))), n.sel.contains(t.from, t.to) > -1 && we(e), mo(n, t, r, Hn(e)), e.options.lineWrapping || (n.iter(a, o.line + t.text.length, (function(e) {
                        var t = lr(e);
                        t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
                    })), s && (e.curOp.updateMaxLine = !0)), Nt(n, o.line), Ei(e, 400);
                    var u = t.text.length - (l.line - o.line) - 1;
                    t.full ? In(e) : o.line != l.line || 1 != t.text.length || vo(e.doc, t) ? In(e, o.line, l.line + 1, u) : zn(e, o.line, "text");
                    var c = xe(e, "changes"),
                        h = xe(e, "change");
                    if (h || c) {
                        var f = {
                            from: o,
                            to: l,
                            text: t.text,
                            removed: t.removed,
                            origin: t.origin
                        };
                        h && Nr(e, "change", e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
                    }
                    e.display.selForContextMenu = null
                }

                function il(e, t, r, n, i) {
                    var o;
                    n || (n = r), lt(n, r) < 0 && (r = (o = [n, r])[0], n = o[1]), "string" == typeof t && (t = e.splitLines(t)), Qo(e, {
                        from: r,
                        to: n,
                        text: t,
                        origin: i
                    })
                }

                function ol(e, t, r, n) {
                    r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
                }

                function ll(e, t, r, n) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = !0;
                        if (o.ranges) {
                            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                            for (var s = 0; s < o.ranges.length; s++) ol(o.ranges[s].anchor, t, r, n), ol(o.ranges[s].head, t, r, n)
                        } else {
                            for (var a = 0; a < o.changes.length; ++a) {
                                var u = o.changes[a];
                                if (r < u.from.line) u.from = ot(u.from.line + n, u.from.ch), u.to = ot(u.to.line + n, u.to.ch);
                                else if (t <= u.to.line) {
                                    l = !1;
                                    break
                                }
                            }
                            l || (e.splice(0, i + 1), i = 0)
                        }
                    }
                }

                function sl(e, t) {
                    var r = t.from.line,
                        n = t.to.line,
                        i = t.text.length - (n - r) - 1;
                    ll(e.done, r, n, i), ll(e.undone, r, n, i)
                }

                function al(e, t, r, n) {
                    var i = t,
                        o = t;
                    return "number" == typeof t ? o = Ze(e, ht(e, t)) : i = tt(t), null == i ? null : (n(o, i) && e.cm && zn(e.cm, i, r), o)
                }

                function ul(e) {
                    this.lines = e, this.parent = null;
                    for (var t = 0, r = 0; r < e.length; ++r) e[r].parent = this, t += e[r].height;
                    this.height = t
                }

                function cl(e) {
                    this.children = e;
                    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
                        var i = e[n];
                        t += i.chunkSize(), r += i.height, i.parent = this
                    }
                    this.size = t, this.height = r, this.parent = null
                }
                oo.prototype.from = function() {
                    return ct(this.anchor, this.head)
                }, oo.prototype.to = function() {
                    return ut(this.anchor, this.head)
                }, oo.prototype.empty = function() {
                    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
                }, ul.prototype = {
                    chunkSize: function() {
                        return this.lines.length
                    },
                    removeInner: function(e, t) {
                        for (var r = e, n = e + t; r < n; ++r) {
                            var i = this.lines[r];
                            this.height -= i.height, cr(i), Nr(i, "delete")
                        }
                        this.lines.splice(e, t)
                    },
                    collapse: function(e) {
                        e.push.apply(e, this.lines)
                    },
                    insertInner: function(e, t, r) {
                        this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                        for (var n = 0; n < t.length; ++n) t[n].parent = this
                    },
                    iterN: function(e, t, r) {
                        for (var n = e + t; e < n; ++e)
                            if (r(this.lines[e])) return !0
                    }
                }, cl.prototype = {
                    chunkSize: function() {
                        return this.size
                    },
                    removeInner: function(e, t) {
                        this.size -= t;
                        for (var r = 0; r < this.children.length; ++r) {
                            var n = this.children[r],
                                i = n.chunkSize();
                            if (e < i) {
                                var o = Math.min(t, i - e),
                                    l = n.height;
                                if (n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
                                e = 0
                            } else e -= i
                        }
                        if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof ul))) {
                            var s = [];
                            this.collapse(s), this.children = [new ul(s)], this.children[0].parent = this
                        }
                    },
                    collapse: function(e) {
                        for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
                    },
                    insertInner: function(e, t, r) {
                        this.size += t.length, this.height += r;
                        for (var n = 0; n < this.children.length; ++n) {
                            var i = this.children[n],
                                o = i.chunkSize();
                            if (e <= o) {
                                if (i.insertInner(e, t, r), i.lines && i.lines.length > 50) {
                                    for (var l = i.lines.length % 25 + 25, s = l; s < i.lines.length;) {
                                        var a = new ul(i.lines.slice(s, s += 25));
                                        i.height -= a.height, this.children.splice(++n, 0, a), a.parent = this
                                    }
                                    i.lines = i.lines.slice(0, l), this.maybeSpill()
                                }
                                break
                            }
                            e -= o
                        }
                    },
                    maybeSpill: function() {
                        if (!(this.children.length <= 10)) {
                            var e = this;
                            do {
                                var t = new cl(e.children.splice(e.children.length - 5, 5));
                                if (e.parent) {
                                    e.size -= t.size, e.height -= t.height;
                                    var r = G(e.parent.children, e);
                                    e.parent.children.splice(r + 1, 0, t)
                                } else {
                                    var n = new cl(e.children);
                                    n.parent = e, e.children = [n, t], e = n
                                }
                                t.parent = e.parent
                            } while (e.children.length > 10);
                            e.parent.maybeSpill()
                        }
                    },
                    iterN: function(e, t, r) {
                        for (var n = 0; n < this.children.length; ++n) {
                            var i = this.children[n],
                                o = i.chunkSize();
                            if (e < o) {
                                var l = Math.min(t, o - e);
                                if (i.iterN(e, l, r)) return !0;
                                if (0 == (t -= l)) break;
                                e = 0
                            } else e -= o
                        }
                    }
                };
                var hl = function(e, t, r) {
                    if (r)
                        for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
                    this.doc = e, this.node = t
                };

                function fl(e, t, r) {
                    or(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && li(e, r)
                }

                function dl(e, t, r, n) {
                    var i = new hl(e, r, n),
                        o = e.cm;
                    return o && i.noHScroll && (o.display.alignWidgets = !0), al(e, t, "widget", (function(t) {
                        var r = t.widgets || (t.widgets = []);
                        if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !nr(e, t)) {
                            var n = or(t) < e.scrollTop;
                            et(t, t.height + Ur(i)), n && li(o, i.height), o.curOp.forceUpdate = !0
                        }
                        return !0
                    })), o && Nr(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : tt(t)), i
                }
                hl.prototype.clear = function() {
                    var e = this.doc.cm,
                        t = this.line.widgets,
                        r = this.line,
                        n = tt(r);
                    if (null != n && t) {
                        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                        t.length || (r.widgets = null);
                        var o = Ur(this);
                        et(r, Math.max(0, r.height - o)), e && (Di(e, (function() {
                            fl(e, r, -o), zn(e, n, "widget")
                        })), Nr(e, "lineWidgetCleared", e, this, n))
                    }
                }, hl.prototype.changed = function() {
                    var e = this,
                        t = this.height,
                        r = this.doc.cm,
                        n = this.line;
                    this.height = null;
                    var i = Ur(this) - t;
                    i && (nr(this.doc, n) || et(n, n.height + i), r && Di(r, (function() {
                        r.curOp.forceUpdate = !0, fl(r, n, i), Nr(r, "lineWidgetChanged", r, e, tt(n))
                    })))
                }, Ce(hl);
                var pl = 0,
                    gl = function(e, t) {
                        this.lines = [], this.type = t, this.doc = e, this.id = ++pl
                    };

                function vl(e, t, r, n, i) {
                    if (n && n.shared) return yl(e, t, r, n, i);
                    if (e.cm && !e.cm.curOp) return Wi(e.cm, vl)(e, t, r, n, i);
                    var o = new gl(e, i),
                        l = lt(t, r);
                    if (n && z(n, o, !1), l > 0 || 0 == l && !1 !== o.clearWhenEmpty) return o;
                    if (o.replacedWith && (o.collapsed = !0, o.widgetNode = D("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                        if (Zt(e, t.line, t, r, o) || t.line != r.line && Zt(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        Wt()
                    }
                    o.addToHistory && To(e, {
                        from: t,
                        to: r,
                        origin: "markText"
                    }, e.sel, NaN);
                    var s, a = t.line,
                        u = e.cm;
                    if (e.iter(a, r.line + 1, (function(n) {
                            u && o.collapsed && !u.options.lineWrapping && Qt(n) == u.display.maxLine && (s = !0), o.collapsed && a != t.line && et(n, 0), Pt(n, new Ht(o, a == t.line ? t.ch : null, a == r.line ? r.ch : null), e.cm && e.cm.curOp), ++a
                        })), o.collapsed && e.iter(t.line, r.line + 1, (function(t) {
                            nr(e, t) && et(t, 0)
                        })), o.clearOnEnter && ge(o, "beforeCursorEnter", (function() {
                            return o.clear()
                        })), o.readOnly && (Dt(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++pl, o.atomic = !0), u) {
                        if (s && (u.curOp.updateMaxLine = !0), o.collapsed) In(u, t.line, r.line + 1);
                        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                            for (var c = t.line; c <= r.line; c++) zn(u, c, "text");
                        o.atomic && jo(u.doc), Nr(u, "markerAdded", u, o)
                    }
                    return o
                }
                gl.prototype.clear = function() {
                    if (!this.explicitlyCleared) {
                        var e = this.doc.cm,
                            t = e && !e.curOp;
                        if (t && Si(e), xe(this, "clear")) {
                            var r = this.find();
                            r && Nr(this, "clear", r.from, r.to)
                        }
                        for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
                            var l = this.lines[o],
                                s = Ft(l.markedSpans, this);
                            e && !this.collapsed ? zn(e, tt(l), "text") : e && (null != s.to && (i = tt(l)), null != s.from && (n = tt(l))), l.markedSpans = Et(l.markedSpans, s), null == s.from && this.collapsed && !nr(this.doc, l) && e && et(l, On(e.display))
                        }
                        if (e && this.collapsed && !e.options.lineWrapping)
                            for (var a = 0; a < this.lines.length; ++a) {
                                var u = Qt(this.lines[a]),
                                    c = lr(u);
                                c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0)
                            }
                        null != n && e && this.collapsed && In(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && jo(e.doc)), e && Nr(e, "markerCleared", e, this, n, i), t && Li(e), this.parent && this.parent.clear()
                    }
                }, gl.prototype.find = function(e, t) {
                    var r, n;
                    null == e && "bookmark" == this.type && (e = 1);
                    for (var i = 0; i < this.lines.length; ++i) {
                        var o = this.lines[i],
                            l = Ft(o.markedSpans, this);
                        if (null != l.from && (r = ot(t ? o : tt(o), l.from), -1 == e)) return r;
                        if (null != l.to && (n = ot(t ? o : tt(o), l.to), 1 == e)) return n
                    }
                    return r && {
                        from: r,
                        to: n
                    }
                }, gl.prototype.changed = function() {
                    var e = this,
                        t = this.find(-1, !0),
                        r = this,
                        n = this.doc.cm;
                    t && n && Di(n, (function() {
                        var i = t.line,
                            o = tt(t.line),
                            l = en(n, o);
                        if (l && (cn(l), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !nr(r.doc, i) && null != r.height) {
                            var s = r.height;
                            r.height = null;
                            var a = Ur(r) - s;
                            a && et(i, i.height + a)
                        }
                        Nr(n, "markerChanged", n, e)
                    }))
                }, gl.prototype.attachLine = function(e) {
                    if (!this.lines.length && this.doc.cm) {
                        var t = this.doc.cm.curOp;
                        t.maybeHiddenMarkers && -1 != G(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                    }
                    this.lines.push(e)
                }, gl.prototype.detachLine = function(e) {
                    if (this.lines.splice(G(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                        var t = this.doc.cm.curOp;
                        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                    }
                }, Ce(gl);
                var ml = function(e, t) {
                    this.markers = e, this.primary = t;
                    for (var r = 0; r < e.length; ++r) e[r].parent = this
                };

                function yl(e, t, r, n, i) {
                    (n = z(n)).shared = !1;
                    var o = [vl(e, t, r, n, i)],
                        l = o[0],
                        s = n.widgetNode;
                    return yo(e, (function(e) {
                        s && (n.widgetNode = s.cloneNode(!0)), o.push(vl(e, ft(e, t), ft(e, r), n, i));
                        for (var a = 0; a < e.linked.length; ++a)
                            if (e.linked[a].isParent) return;
                        l = q(o)
                    })), new ml(o, l)
                }

                function bl(e) {
                    return e.findMarks(ot(e.first, 0), e.clipPos(ot(e.lastLine())), (function(e) {
                        return e.parent
                    }))
                }

                function wl(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                            i = n.find(),
                            o = e.clipPos(i.from),
                            l = e.clipPos(i.to);
                        if (lt(o, l)) {
                            var s = vl(e, o, l, n.primary, n.primary.type);
                            n.markers.push(s), s.parent = n
                        }
                    }
                }

                function xl(e) {
                    for (var t = function(t) {
                            var r = e[t],
                                n = [r.primary.doc];
                            yo(r.primary.doc, (function(e) {
                                return n.push(e)
                            }));
                            for (var i = 0; i < r.markers.length; i++) {
                                var o = r.markers[i]; - 1 == G(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1))
                            }
                        }, r = 0; r < e.length; r++) t(r)
                }
                ml.prototype.clear = function() {
                    if (!this.explicitlyCleared) {
                        this.explicitlyCleared = !0;
                        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                        Nr(this, "clear")
                    }
                }, ml.prototype.find = function(e, t) {
                    return this.primary.find(e, t)
                }, Ce(ml);
                var Cl = 0,
                    Sl = function(e, t, r, n, i) {
                        if (!(this instanceof Sl)) return new Sl(e, t, r, n, i);
                        null == r && (r = 0), cl.call(this, [new ul([new ar("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
                        var o = ot(r, 0);
                        this.sel = so(o), this.history = new Co(null), this.id = ++Cl, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), mo(this, {
                            from: o,
                            to: o,
                            text: e
                        }), Uo(this, so(o), K)
                    };
                Sl.prototype = ee(cl.prototype, {
                    constructor: Sl,
                    iter: function(e, t, r) {
                        r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
                    },
                    insert: function(e, t) {
                        for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
                        this.insertInner(e - this.first, t, r)
                    },
                    remove: function(e, t) {
                        this.removeInner(e - this.first, t)
                    },
                    getValue: function(e) {
                        var t = Je(this, this.first, this.first + this.size);
                        return !1 === e ? t : t.join(e || this.lineSeparator())
                    },
                    setValue: Fi((function(e) {
                        var t = ot(this.first, 0),
                            r = this.first + this.size - 1;
                        Qo(this, {
                            from: t,
                            to: ot(r, Ze(this, r).text.length),
                            text: this.splitLines(e),
                            origin: "setValue",
                            full: !0
                        }, !0), this.cm && ai(this.cm, 0, 0), Uo(this, so(t), K)
                    })),
                    replaceRange: function(e, t, r, n) {
                        il(this, e, t = ft(this, t), r = r ? ft(this, r) : t, n)
                    },
                    getRange: function(e, t, r) {
                        var n = Qe(this, ft(this, e), ft(this, t));
                        return !1 === r ? n : "" === r ? n.join("") : n.join(r || this.lineSeparator())
                    },
                    getLine: function(e) {
                        var t = this.getLineHandle(e);
                        return t && t.text
                    },
                    getLineHandle: function(e) {
                        if (nt(this, e)) return Ze(this, e)
                    },
                    getLineNumber: function(e) {
                        return tt(e)
                    },
                    getLineHandleVisualStart: function(e) {
                        return "number" == typeof e && (e = Ze(this, e)), Qt(e)
                    },
                    lineCount: function() {
                        return this.size
                    },
                    firstLine: function() {
                        return this.first
                    },
                    lastLine: function() {
                        return this.first + this.size - 1
                    },
                    clipPos: function(e) {
                        return ft(this, e)
                    },
                    getCursor: function(e) {
                        var t = this.sel.primary();
                        return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
                    },
                    listSelections: function() {
                        return this.sel.ranges
                    },
                    somethingSelected: function() {
                        return this.sel.somethingSelected()
                    },
                    setCursor: Fi((function(e, t, r) {
                        Ro(this, ft(this, "number" == typeof e ? ot(e, t || 0) : e), null, r)
                    })),
                    setSelection: Fi((function(e, t, r) {
                        Ro(this, ft(this, e), ft(this, t || e), r)
                    })),
                    extendSelection: Fi((function(e, t, r) {
                        Po(this, ft(this, e), t && ft(this, t), r)
                    })),
                    extendSelections: Fi((function(e, t) {
                        Io(this, pt(this, e), t)
                    })),
                    extendSelectionsBy: Fi((function(e, t) {
                        Io(this, pt(this, Z(this.sel.ranges, e)), t)
                    })),
                    setSelections: Fi((function(e, t, r) {
                        if (e.length) {
                            for (var n = [], i = 0; i < e.length; i++) n[i] = new oo(ft(this, e[i].anchor), ft(this, e[i].head || e[i].anchor));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Uo(this, lo(this.cm, n, t), r)
                        }
                    })),
                    addSelection: Fi((function(e, t, r) {
                        var n = this.sel.ranges.slice(0);
                        n.push(new oo(ft(this, e), ft(this, t || e))), Uo(this, lo(this.cm, n, n.length - 1), r)
                    })),
                    getSelection: function(e) {
                        for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
                            var i = Qe(this, r[n].from(), r[n].to());
                            t = t ? t.concat(i) : i
                        }
                        return !1 === e ? t : t.join(e || this.lineSeparator())
                    },
                    getSelections: function(e) {
                        for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
                            var i = Qe(this, r[n].from(), r[n].to());
                            !1 !== e && (i = i.join(e || this.lineSeparator())), t[n] = i
                        }
                        return t
                    },
                    replaceSelection: function(e, t, r) {
                        for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
                        this.replaceSelections(n, t, r || "+input")
                    },
                    replaceSelections: Fi((function(e, t, r) {
                        for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                            var l = i.ranges[o];
                            n[o] = {
                                from: l.from(),
                                to: l.to(),
                                text: this.splitLines(e[o]),
                                origin: r
                            }
                        }
                        for (var s = t && "end" != t && fo(this, n, t), a = n.length - 1; a >= 0; a--) Qo(this, n[a]);
                        s ? Go(this, s) : this.cm && si(this.cm)
                    })),
                    undo: Fi((function() {
                        el(this, "undo")
                    })),
                    redo: Fi((function() {
                        el(this, "redo")
                    })),
                    undoSelection: Fi((function() {
                        el(this, "undo", !0)
                    })),
                    redoSelection: Fi((function() {
                        el(this, "redo", !0)
                    })),
                    setExtending: function(e) {
                        this.extend = e
                    },
                    getExtending: function() {
                        return this.extend
                    },
                    historySize: function() {
                        for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
                        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
                        return {
                            undo: t,
                            redo: r
                        }
                    },
                    clearHistory: function() {
                        var e = this;
                        this.history = new Co(this.history), yo(this, (function(t) {
                            return t.history = e.history
                        }), !0)
                    },
                    markClean: function() {
                        this.cleanGeneration = this.changeGeneration(!0)
                    },
                    changeGeneration: function(e) {
                        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                    },
                    isClean: function(e) {
                        return this.history.generation == (e || this.cleanGeneration)
                    },
                    getHistory: function() {
                        return {
                            done: Fo(this.history.done),
                            undone: Fo(this.history.undone)
                        }
                    },
                    setHistory: function(e) {
                        var t = this.history = new Co(this.history);
                        t.done = Fo(e.done.slice(0), null, !0), t.undone = Fo(e.undone.slice(0), null, !0)
                    },
                    setGutterMarker: Fi((function(e, t, r) {
                        return al(this, e, "gutter", (function(e) {
                            var n = e.gutterMarkers || (e.gutterMarkers = {});
                            return n[t] = r, !r && ie(n) && (e.gutterMarkers = null), !0
                        }))
                    })),
                    clearGutter: Fi((function(e) {
                        var t = this;
                        this.iter((function(r) {
                            r.gutterMarkers && r.gutterMarkers[e] && al(t, r, "gutter", (function() {
                                return r.gutterMarkers[e] = null, ie(r.gutterMarkers) && (r.gutterMarkers = null), !0
                            }))
                        }))
                    })),
                    lineInfo: function(e) {
                        var t;
                        if ("number" == typeof e) {
                            if (!nt(this, e)) return null;
                            if (t = e, !(e = Ze(this, e))) return null
                        } else if (null == (t = tt(e))) return null;
                        return {
                            line: t,
                            handle: e,
                            text: e.text,
                            gutterMarkers: e.gutterMarkers,
                            textClass: e.textClass,
                            bgClass: e.bgClass,
                            wrapClass: e.wrapClass,
                            widgets: e.widgets
                        }
                    },
                    addLineClass: Fi((function(e, t, r) {
                        return al(this, e, "gutter" == t ? "gutter" : "class", (function(e) {
                            var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                            if (e[n]) {
                                if (k(r).test(e[n])) return !1;
                                e[n] += " " + r
                            } else e[n] = r;
                            return !0
                        }))
                    })),
                    removeLineClass: Fi((function(e, t, r) {
                        return al(this, e, "gutter" == t ? "gutter" : "class", (function(e) {
                            var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                                i = e[n];
                            if (!i) return !1;
                            if (null == r) e[n] = null;
                            else {
                                var o = i.match(k(r));
                                if (!o) return !1;
                                var l = o.index + o[0].length;
                                e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null
                            }
                            return !0
                        }))
                    })),
                    addLineWidget: Fi((function(e, t, r) {
                        return dl(this, e, t, r)
                    })),
                    removeLineWidget: function(e) {
                        e.clear()
                    },
                    markText: function(e, t, r) {
                        return vl(this, ft(this, e), ft(this, t), r, r && r.type || "range")
                    },
                    setBookmark: function(e, t) {
                        var r = {
                            replacedWith: t && (null == t.nodeType ? t.widget : t),
                            insertLeft: t && t.insertLeft,
                            clearWhenEmpty: !1,
                            shared: t && t.shared,
                            handleMouseEvents: t && t.handleMouseEvents
                        };
                        return vl(this, e = ft(this, e), e, r, "bookmark")
                    },
                    findMarksAt: function(e) {
                        var t = [],
                            r = Ze(this, (e = ft(this, e)).line).markedSpans;
                        if (r)
                            for (var n = 0; n < r.length; ++n) {
                                var i = r[n];
                                (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                            }
                        return t
                    },
                    findMarks: function(e, t, r) {
                        e = ft(this, e), t = ft(this, t);
                        var n = [],
                            i = e.line;
                        return this.iter(e.line, t.line + 1, (function(o) {
                            var l = o.markedSpans;
                            if (l)
                                for (var s = 0; s < l.length; s++) {
                                    var a = l[s];
                                    null != a.to && i == e.line && e.ch >= a.to || null == a.from && i != e.line || null != a.from && i == t.line && a.from >= t.ch || r && !r(a.marker) || n.push(a.marker.parent || a.marker)
                                }++i
                        })), n
                    },
                    getAllMarks: function() {
                        var e = [];
                        return this.iter((function(t) {
                            var r = t.markedSpans;
                            if (r)
                                for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker)
                        })), e
                    },
                    posFromIndex: function(e) {
                        var t, r = this.first,
                            n = this.lineSeparator().length;
                        return this.iter((function(i) {
                            var o = i.text.length + n;
                            if (o > e) return t = e, !0;
                            e -= o, ++r
                        })), ft(this, ot(r, t))
                    },
                    indexFromPos: function(e) {
                        var t = (e = ft(this, e)).ch;
                        if (e.line < this.first || e.ch < 0) return 0;
                        var r = this.lineSeparator().length;
                        return this.iter(this.first, e.line, (function(e) {
                            t += e.text.length + r
                        })), t
                    },
                    copy: function(e) {
                        var t = new Sl(Je(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                    },
                    linkedDoc: function(e) {
                        e || (e = {});
                        var t = this.first,
                            r = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
                        var n = new Sl(Je(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
                        return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
                            doc: n,
                            sharedHist: e.sharedHist
                        }), n.linked = [{
                            doc: this,
                            isParent: !0,
                            sharedHist: e.sharedHist
                        }], wl(n, bl(this)), n
                    },
                    unlinkDoc: function(e) {
                        if (e instanceof Is && (e = e.doc), this.linked)
                            for (var t = 0; t < this.linked.length; ++t)
                                if (this.linked[t].doc == e) {
                                    this.linked.splice(t, 1), e.unlinkDoc(this), xl(bl(this));
                                    break
                                }
                        if (e.history == this.history) {
                            var r = [e.id];
                            yo(e, (function(e) {
                                return r.push(e.id)
                            }), !0), e.history = new Co(null), e.history.done = Fo(this.history.done, r), e.history.undone = Fo(this.history.undone, r)
                        }
                    },
                    iterLinkedDocs: function(e) {
                        yo(this, e)
                    },
                    getMode: function() {
                        return this.mode
                    },
                    getEditor: function() {
                        return this.cm
                    },
                    splitLines: function(e) {
                        return this.lineSep ? e.split(this.lineSep) : Fe(e)
                    },
                    lineSeparator: function() {
                        return this.lineSep || "\n"
                    },
                    setDirection: Fi((function(e) {
                        "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter((function(e) {
                            return e.order = null
                        })), this.cm && xo(this.cm))
                    }))
                }), Sl.prototype.eachLine = Sl.prototype.iter;
                var Ll = 0;

                function kl(e) {
                    var t = this;
                    if (Nl(t), !be(t, e) && !Vr(t.display, e)) {
                        Se(e), l && (Ll = +new Date);
                        var r = En(t, e, !0),
                            n = e.dataTransfer.files;
                        if (r && !t.isReadOnly())
                            if (n && n.length && window.FileReader && window.File)
                                for (var i = n.length, o = Array(i), s = 0, a = function() {
                                        ++s == i && Wi(t, (function() {
                                            var e = {
                                                from: r = ft(t.doc, r),
                                                to: r,
                                                text: t.doc.splitLines(o.filter((function(e) {
                                                    return null != e
                                                })).join(t.doc.lineSeparator())),
                                                origin: "paste"
                                            };
                                            Qo(t.doc, e), Go(t.doc, so(ft(t.doc, r), ft(t.doc, ao(e))))
                                        }))()
                                    }, u = function(e, r) {
                                        if (t.options.allowDropFileTypes && -1 == G(t.options.allowDropFileTypes, e.type)) a();
                                        else {
                                            var n = new FileReader;
                                            n.onerror = function() {
                                                return a()
                                            }, n.onload = function() {
                                                var e = n.result;
                                                /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[r] = e), a()
                                            }, n.readAsText(e)
                                        }
                                    }, c = 0; c < n.length; c++) u(n[c], c);
                            else {
                                if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout((function() {
                                    return t.display.input.focus()
                                }), 20);
                                try {
                                    var h = e.dataTransfer.getData("Text");
                                    if (h) {
                                        var f;
                                        if (t.state.draggingText && !t.state.draggingText.copy && (f = t.listSelections()), Vo(t.doc, so(r, r)), f)
                                            for (var d = 0; d < f.length; ++d) il(t.doc, "", f[d].anchor, f[d].head, "drag");
                                        t.replaceSelection(h, "around", "paste"), t.display.input.focus()
                                    }
                                } catch (p) {}
                            }
                    }
                }

                function Tl(e, t) {
                    if (l && (!e.state.draggingText || +new Date - Ll < 100)) Te(t);
                    else if (!be(e, t) && !Vr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !d)) {
                        var r = A("img", null, null, "position: fixed; left: 0; top: 0;");
                        r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", f && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), f && r.parentNode.removeChild(r)
                    }
                }

                function Ml(e, t) {
                    var r = En(e, t);
                    if (r) {
                        var n = document.createDocumentFragment();
                        jn(e, r, n), e.display.dragCursor || (e.display.dragCursor = A("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), O(e.display.dragCursor, n)
                    }
                }

                function Nl(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
                }

                function Ol(e) {
                    if (document.getElementsByClassName) {
                        for (var t = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < t.length; n++) {
                            var i = t[n].CodeMirror;
                            i && r.push(i)
                        }
                        r.length && r[0].operation((function() {
                            for (var t = 0; t < r.length; t++) e(r[t])
                        }))
                    }
                }
                var Al = !1;

                function Dl() {
                    Al || (Wl(), Al = !0)
                }

                function Wl() {
                    var e;
                    ge(window, "resize", (function() {
                        null == e && (e = setTimeout((function() {
                            e = null, Ol(Hl)
                        }), 100))
                    })), ge(window, "blur", (function() {
                        return Ol(Qn)
                    }))
                }

                function Hl(e) {
                    var t = e.display;
                    t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
                }
                for (var Fl = {
                        3: "Pause",
                        8: "Backspace",
                        9: "Tab",
                        13: "Enter",
                        16: "Shift",
                        17: "Ctrl",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Esc",
                        32: "Space",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "Left",
                        38: "Up",
                        39: "Right",
                        40: "Down",
                        44: "PrintScrn",
                        45: "Insert",
                        46: "Delete",
                        59: ";",
                        61: "=",
                        91: "Mod",
                        92: "Mod",
                        93: "Mod",
                        106: "*",
                        107: "=",
                        109: "-",
                        110: ".",
                        111: "/",
                        145: "ScrollLock",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                        224: "Mod",
                        63232: "Up",
                        63233: "Down",
                        63234: "Left",
                        63235: "Right",
                        63272: "Delete",
                        63273: "Home",
                        63275: "End",
                        63276: "PageUp",
                        63277: "PageDown",
                        63302: "Insert"
                    }, El = 0; El < 10; El++) Fl[El + 48] = Fl[El + 96] = String(El);
                for (var Pl = 65; Pl <= 90; Pl++) Fl[Pl] = String.fromCharCode(Pl);
                for (var Il = 1; Il <= 12; Il++) Fl[Il + 111] = Fl[Il + 63235] = "F" + Il;
                var zl = {};

                function Rl(e) {
                    var t, r, n, i, o = e.split(/-(?!$)/);
                    e = o[o.length - 1];
                    for (var l = 0; l < o.length - 1; l++) {
                        var s = o[l];
                        if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                        else if (/^a(lt)?$/i.test(s)) t = !0;
                        else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
                        else {
                            if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                            n = !0
                        }
                    }
                    return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
                }

                function Bl(e) {
                    var t = {};
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = e[r];
                            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                            if ("..." == n) {
                                delete e[r];
                                continue
                            }
                            for (var i = Z(r.split(" "), Rl), o = 0; o < i.length; o++) {
                                var l = void 0,
                                    s = void 0;
                                o == i.length - 1 ? (s = i.join(" "), l = n) : (s = i.slice(0, o + 1).join(" "), l = "...");
                                var a = t[s];
                                if (a) {
                                    if (a != l) throw new Error("Inconsistent bindings for " + s)
                                } else t[s] = l
                            }
                            delete e[r]
                        }
                    for (var u in t) e[u] = t[u];
                    return e
                }

                function Gl(e, t, r, n) {
                    var i = (t = jl(t)).call ? t.call(e, n) : t[e];
                    if (!1 === i) return "nothing";
                    if ("..." === i) return "multi";
                    if (null != i && r(i)) return "handled";
                    if (t.fallthrough) {
                        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Gl(e, t.fallthrough, r, n);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var l = Gl(e, t.fallthrough[o], r, n);
                            if (l) return l
                        }
                    }
                }

                function Ul(e) {
                    var t = "string" == typeof e ? e : Fl[e.keyCode];
                    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
                }

                function Vl(e, t, r) {
                    var n = e;
                    return t.altKey && "Alt" != n && (e = "Alt-" + e), (S ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (S ? t.ctrlKey : t.metaKey) && "Mod" != n && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e
                }

                function Kl(e, t) {
                    if (f && 34 == e.keyCode && e.char) return !1;
                    var r = Fl[e.keyCode];
                    return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), Vl(r, e, t))
                }

                function jl(e) {
                    return "string" == typeof e ? zl[e] : e
                }

                function Xl(e, t) {
                    for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                        for (var o = t(r[i]); n.length && lt(o.from, q(n).to) <= 0;) {
                            var l = n.pop();
                            if (lt(l.from, o.from) < 0) {
                                o.from = l.from;
                                break
                            }
                        }
                        n.push(o)
                    }
                    Di(e, (function() {
                        for (var t = n.length - 1; t >= 0; t--) il(e.doc, "", n[t].from, n[t].to, "+delete");
                        si(e)
                    }))
                }

                function Yl(e, t, r) {
                    var n = se(e.text, t + r, r);
                    return n < 0 || n > e.text.length ? null : n
                }

                function _l(e, t, r) {
                    var n = Yl(e, t.ch, r);
                    return null == n ? null : new ot(t.line, n, r < 0 ? "after" : "before")
                }

                function $l(e, t, r, n, i) {
                    if (e) {
                        "rtl" == t.doc.direction && (i = -i);
                        var o = de(r, t.doc.direction);
                        if (o) {
                            var l, s = i < 0 ? q(o) : o[0],
                                a = i < 0 == (1 == s.level) ? "after" : "before";
                            if (s.level > 0 || "rtl" == t.doc.direction) {
                                var u = tn(t, r);
                                l = i < 0 ? r.text.length - 1 : 0;
                                var c = rn(t, u, l).top;
                                l = ae((function(e) {
                                    return rn(t, u, e).top == c
                                }), i < 0 == (1 == s.level) ? s.from : s.to - 1, l), "before" == a && (l = Yl(r, l, 1))
                            } else l = i < 0 ? s.to : s.from;
                            return new ot(n, l, a)
                        }
                    }
                    return new ot(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after")
                }

                function ql(e, t, r, n) {
                    var i = de(t, e.doc.direction);
                    if (!i) return _l(t, r, n);
                    r.ch >= t.text.length ? (r.ch = t.text.length, r.sticky = "before") : r.ch <= 0 && (r.ch = 0, r.sticky = "after");
                    var o = he(i, r.ch, r.sticky),
                        l = i[o];
                    if ("ltr" == e.doc.direction && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch)) return _l(t, r, n);
                    var s, a = function(e, r) {
                            return Yl(t, e instanceof ot ? e.ch : e, r)
                        },
                        u = function(r) {
                            return e.options.lineWrapping ? (s = s || tn(e, t), Ln(e, t, s, r)) : {
                                begin: 0,
                                end: t.text.length
                            }
                        },
                        c = u("before" == r.sticky ? a(r, -1) : r.ch);
                    if ("rtl" == e.doc.direction || 1 == l.level) {
                        var h = 1 == l.level == n < 0,
                            f = a(r, h ? 1 : -1);
                        if (null != f && (h ? f <= l.to && f <= c.end : f >= l.from && f >= c.begin)) {
                            var d = h ? "before" : "after";
                            return new ot(r.line, f, d)
                        }
                    }
                    var p = function(e, t, n) {
                            for (var o = function(e, t) {
                                    return t ? new ot(r.line, a(e, 1), "before") : new ot(r.line, e, "after")
                                }; e >= 0 && e < i.length; e += t) {
                                var l = i[e],
                                    s = t > 0 == (1 != l.level),
                                    u = s ? n.begin : a(n.end, -1);
                                if (l.from <= u && u < l.to) return o(u, s);
                                if (u = s ? l.from : a(l.to, -1), n.begin <= u && u < n.end) return o(u, s)
                            }
                        },
                        g = p(o + n, n, c);
                    if (g) return g;
                    var v = n > 0 ? c.end : a(c.begin, -1);
                    return null == v || n > 0 && v == t.text.length || !(g = p(n > 0 ? 0 : i.length - 1, n, u(v))) ? null : g
                }
                zl.basic = {
                    Left: "goCharLeft",
                    Right: "goCharRight",
                    Up: "goLineUp",
                    Down: "goLineDown",
                    End: "goLineEnd",
                    Home: "goLineStartSmart",
                    PageUp: "goPageUp",
                    PageDown: "goPageDown",
                    Delete: "delCharAfter",
                    Backspace: "delCharBefore",
                    "Shift-Backspace": "delCharBefore",
                    Tab: "defaultTab",
                    "Shift-Tab": "indentAuto",
                    Enter: "newlineAndIndent",
                    Insert: "toggleOverwrite",
                    Esc: "singleSelection"
                }, zl.pcDefault = {
                    "Ctrl-A": "selectAll",
                    "Ctrl-D": "deleteLine",
                    "Ctrl-Z": "undo",
                    "Shift-Ctrl-Z": "redo",
                    "Ctrl-Y": "redo",
                    "Ctrl-Home": "goDocStart",
                    "Ctrl-End": "goDocEnd",
                    "Ctrl-Up": "goLineUp",
                    "Ctrl-Down": "goLineDown",
                    "Ctrl-Left": "goGroupLeft",
                    "Ctrl-Right": "goGroupRight",
                    "Alt-Left": "goLineStart",
                    "Alt-Right": "goLineEnd",
                    "Ctrl-Backspace": "delGroupBefore",
                    "Ctrl-Delete": "delGroupAfter",
                    "Ctrl-S": "save",
                    "Ctrl-F": "find",
                    "Ctrl-G": "findNext",
                    "Shift-Ctrl-G": "findPrev",
                    "Shift-Ctrl-F": "replace",
                    "Shift-Ctrl-R": "replaceAll",
                    "Ctrl-[": "indentLess",
                    "Ctrl-]": "indentMore",
                    "Ctrl-U": "undoSelection",
                    "Shift-Ctrl-U": "redoSelection",
                    "Alt-U": "redoSelection",
                    fallthrough: "basic"
                }, zl.emacsy = {
                    "Ctrl-F": "goCharRight",
                    "Ctrl-B": "goCharLeft",
                    "Ctrl-P": "goLineUp",
                    "Ctrl-N": "goLineDown",
                    "Ctrl-A": "goLineStart",
                    "Ctrl-E": "goLineEnd",
                    "Ctrl-V": "goPageDown",
                    "Shift-Ctrl-V": "goPageUp",
                    "Ctrl-D": "delCharAfter",
                    "Ctrl-H": "delCharBefore",
                    "Alt-Backspace": "delWordBefore",
                    "Ctrl-K": "killLine",
                    "Ctrl-T": "transposeChars",
                    "Ctrl-O": "openLine"
                }, zl.macDefault = {
                    "Cmd-A": "selectAll",
                    "Cmd-D": "deleteLine",
                    "Cmd-Z": "undo",
                    "Shift-Cmd-Z": "redo",
                    "Cmd-Y": "redo",
                    "Cmd-Home": "goDocStart",
                    "Cmd-Up": "goDocStart",
                    "Cmd-End": "goDocEnd",
                    "Cmd-Down": "goDocEnd",
                    "Alt-Left": "goGroupLeft",
                    "Alt-Right": "goGroupRight",
                    "Cmd-Left": "goLineLeft",
                    "Cmd-Right": "goLineRight",
                    "Alt-Backspace": "delGroupBefore",
                    "Ctrl-Alt-Backspace": "delGroupAfter",
                    "Alt-Delete": "delGroupAfter",
                    "Cmd-S": "save",
                    "Cmd-F": "find",
                    "Cmd-G": "findNext",
                    "Shift-Cmd-G": "findPrev",
                    "Cmd-Alt-F": "replace",
                    "Shift-Cmd-Alt-F": "replaceAll",
                    "Cmd-[": "indentLess",
                    "Cmd-]": "indentMore",
                    "Cmd-Backspace": "delWrappedLineLeft",
                    "Cmd-Delete": "delWrappedLineRight",
                    "Cmd-U": "undoSelection",
                    "Shift-Cmd-U": "redoSelection",
                    "Ctrl-Up": "goDocStart",
                    "Ctrl-Down": "goDocEnd",
                    fallthrough: ["basic", "emacsy"]
                }, zl.default = b ? zl.macDefault : zl.pcDefault;
                var Zl = {
                    selectAll: qo,
                    singleSelection: function(e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), K)
                    },
                    killLine: function(e) {
                        return Xl(e, (function(t) {
                            if (t.empty()) {
                                var r = Ze(e.doc, t.head.line).text.length;
                                return t.head.ch == r && t.head.line < e.lastLine() ? {
                                    from: t.head,
                                    to: ot(t.head.line + 1, 0)
                                } : {
                                    from: t.head,
                                    to: ot(t.head.line, r)
                                }
                            }
                            return {
                                from: t.from(),
                                to: t.to()
                            }
                        }))
                    },
                    deleteLine: function(e) {
                        return Xl(e, (function(t) {
                            return {
                                from: ot(t.from().line, 0),
                                to: ft(e.doc, ot(t.to().line + 1, 0))
                            }
                        }))
                    },
                    delLineLeft: function(e) {
                        return Xl(e, (function(e) {
                            return {
                                from: ot(e.from().line, 0),
                                to: e.from()
                            }
                        }))
                    },
                    delWrappedLineLeft: function(e) {
                        return Xl(e, (function(t) {
                            var r = e.charCoords(t.head, "div").top + 5;
                            return {
                                from: e.coordsChar({
                                    left: 0,
                                    top: r
                                }, "div"),
                                to: t.from()
                            }
                        }))
                    },
                    delWrappedLineRight: function(e) {
                        return Xl(e, (function(t) {
                            var r = e.charCoords(t.head, "div").top + 5,
                                n = e.coordsChar({
                                    left: e.display.lineDiv.offsetWidth + 100,
                                    top: r
                                }, "div");
                            return {
                                from: t.from(),
                                to: n
                            }
                        }))
                    },
                    undo: function(e) {
                        return e.undo()
                    },
                    redo: function(e) {
                        return e.redo()
                    },
                    undoSelection: function(e) {
                        return e.undoSelection()
                    },
                    redoSelection: function(e) {
                        return e.redoSelection()
                    },
                    goDocStart: function(e) {
                        return e.extendSelection(ot(e.firstLine(), 0))
                    },
                    goDocEnd: function(e) {
                        return e.extendSelection(ot(e.lastLine()))
                    },
                    goLineStart: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            return Ql(e, t.head.line)
                        }), {
                            origin: "+move",
                            bias: 1
                        })
                    },
                    goLineStartSmart: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            return es(e, t.head)
                        }), {
                            origin: "+move",
                            bias: 1
                        })
                    },
                    goLineEnd: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            return Jl(e, t.head.line)
                        }), {
                            origin: "+move",
                            bias: -1
                        })
                    },
                    goLineRight: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            var r = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: e.display.lineDiv.offsetWidth + 100,
                                top: r
                            }, "div")
                        }), X)
                    },
                    goLineLeft: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            var r = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: 0,
                                top: r
                            }, "div")
                        }), X)
                    },
                    goLineLeftSmart: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            var r = e.cursorCoords(t.head, "div").top + 5,
                                n = e.coordsChar({
                                    left: 0,
                                    top: r
                                }, "div");
                            return n.ch < e.getLine(n.line).search(/\S/) ? es(e, t.head) : n
                        }), X)
                    },
                    goLineUp: function(e) {
                        return e.moveV(-1, "line")
                    },
                    goLineDown: function(e) {
                        return e.moveV(1, "line")
                    },
                    goPageUp: function(e) {
                        return e.moveV(-1, "page")
                    },
                    goPageDown: function(e) {
                        return e.moveV(1, "page")
                    },
                    goCharLeft: function(e) {
                        return e.moveH(-1, "char")
                    },
                    goCharRight: function(e) {
                        return e.moveH(1, "char")
                    },
                    goColumnLeft: function(e) {
                        return e.moveH(-1, "column")
                    },
                    goColumnRight: function(e) {
                        return e.moveH(1, "column")
                    },
                    goWordLeft: function(e) {
                        return e.moveH(-1, "word")
                    },
                    goGroupRight: function(e) {
                        return e.moveH(1, "group")
                    },
                    goGroupLeft: function(e) {
                        return e.moveH(-1, "group")
                    },
                    goWordRight: function(e) {
                        return e.moveH(1, "word")
                    },
                    delCharBefore: function(e) {
                        return e.deleteH(-1, "codepoint")
                    },
                    delCharAfter: function(e) {
                        return e.deleteH(1, "char")
                    },
                    delWordBefore: function(e) {
                        return e.deleteH(-1, "word")
                    },
                    delWordAfter: function(e) {
                        return e.deleteH(1, "word")
                    },
                    delGroupBefore: function(e) {
                        return e.deleteH(-1, "group")
                    },
                    delGroupAfter: function(e) {
                        return e.deleteH(1, "group")
                    },
                    indentAuto: function(e) {
                        return e.indentSelection("smart")
                    },
                    indentMore: function(e) {
                        return e.indentSelection("add")
                    },
                    indentLess: function(e) {
                        return e.indentSelection("subtract")
                    },
                    insertTab: function(e) {
                        return e.replaceSelection("\t")
                    },
                    insertSoftTab: function(e) {
                        for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                            var o = r[i].from(),
                                l = R(e.getLine(o.line), o.ch, n);
                            t.push($(n - l % n))
                        }
                        e.replaceSelections(t)
                    },
                    defaultTab: function(e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                    },
                    transposeChars: function(e) {
                        return Di(e, (function() {
                            for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                                if (t[n].empty()) {
                                    var i = t[n].head,
                                        o = Ze(e.doc, i.line).text;
                                    if (o)
                                        if (i.ch == o.length && (i = new ot(i.line, i.ch - 1)), i.ch > 0) i = new ot(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), ot(i.line, i.ch - 2), i, "+transpose");
                                        else if (i.line > e.doc.first) {
                                        var l = Ze(e.doc, i.line - 1).text;
                                        l && (i = new ot(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), ot(i.line - 1, l.length - 1), i, "+transpose"))
                                    }
                                    r.push(new oo(i, i))
                                }
                            e.setSelections(r)
                        }))
                    },
                    newlineAndIndent: function(e) {
                        return Di(e, (function() {
                            for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--) e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
                            t = e.listSelections();
                            for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
                            si(e)
                        }))
                    },
                    openLine: function(e) {
                        return e.replaceSelection("\n", "start")
                    },
                    toggleOverwrite: function(e) {
                        return e.toggleOverwrite()
                    }
                };

                function Ql(e, t) {
                    var r = Ze(e.doc, t),
                        n = Qt(r);
                    return n != r && (t = tt(n)), $l(!0, e, n, t, 1)
                }

                function Jl(e, t) {
                    var r = Ze(e.doc, t),
                        n = Jt(r);
                    return n != r && (t = tt(n)), $l(!0, e, r, t, -1)
                }

                function es(e, t) {
                    var r = Ql(e, t.line),
                        n = Ze(e.doc, r.line),
                        i = de(n, e.doc.direction);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(r.ch, n.text.search(/\S/)),
                            l = t.line == r.line && t.ch <= o && t.ch;
                        return ot(r.line, l ? 0 : o, r.sticky)
                    }
                    return r
                }

                function ts(e, t, r) {
                    if ("string" == typeof t && !(t = Zl[t])) return !1;
                    e.display.input.ensurePolled();
                    var n = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != V
                    } finally {
                        e.display.shift = n, e.state.suppressEdits = !1
                    }
                    return i
                }

                function rs(e, t, r) {
                    for (var n = 0; n < e.state.keyMaps.length; n++) {
                        var i = Gl(t, e.state.keyMaps[n], r, e);
                        if (i) return i
                    }
                    return e.options.extraKeys && Gl(t, e.options.extraKeys, r, e) || Gl(t, e.options.keyMap, r, e)
                }
                var ns = new B;

                function is(e, t, r, n) {
                    var i = e.state.keySeq;
                    if (i) {
                        if (Ul(t)) return "handled";
                        if (/\'$/.test(t) ? e.state.keySeq = null : ns.set(50, (function() {
                                e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                            })), os(e, i + " " + t, r, n)) return !0
                    }
                    return os(e, t, r, n)
                }

                function os(e, t, r, n) {
                    var i = rs(e, t, n);
                    return "multi" == i && (e.state.keySeq = t), "handled" == i && Nr(e, "keyHandled", e, t, r), "handled" != i && "multi" != i || (Se(r), _n(e)), !!i
                }

                function ls(e, t) {
                    var r = Kl(t, !0);
                    return !!r && (t.shiftKey && !e.state.keySeq ? is(e, "Shift-" + r, t, (function(t) {
                        return ts(e, t, !0)
                    })) || is(e, r, t, (function(t) {
                        if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ts(e, t)
                    })) : is(e, r, t, (function(t) {
                        return ts(e, t)
                    })))
                }

                function ss(e, t, r) {
                    return is(e, "'" + r + "'", t, (function(t) {
                        return ts(e, t, !0)
                    }))
                }
                var as = null;

                function us(e) {
                    var t = this;
                    if ((!e.target || e.target == t.display.input.getField()) && (t.curOp.focus = H(), !be(t, e))) {
                        l && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var n = e.keyCode;
                        t.display.shift = 16 == n || e.shiftKey;
                        var i = ls(t, e);
                        f && (as = i ? n : null, i || 88 != n || Pe || !(b ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), r && !b && !i && 46 == n && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || cs(t)
                    }
                }

                function cs(e) {
                    var t = e.display.lineDiv;

                    function r(e) {
                        18 != e.keyCode && e.altKey || (M(t, "CodeMirror-crosshair"), me(document, "keyup", r), me(document, "mouseover", r))
                    }
                    F(t, "CodeMirror-crosshair"), ge(document, "keyup", r), ge(document, "mouseover", r)
                }

                function hs(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1), be(this, e)
                }

                function fs(e) {
                    var t = this;
                    if ((!e.target || e.target == t.display.input.getField()) && !(Vr(t.display, e) || be(t, e) || e.ctrlKey && !e.altKey || b && e.metaKey)) {
                        var r = e.keyCode,
                            n = e.charCode;
                        if (f && r == as) return as = null, void Se(e);
                        if (!f || e.which && !(e.which < 10) || !ls(t, e)) {
                            var i = String.fromCharCode(null == n ? r : n);
                            "\b" != i && (ss(t, e, i) || t.display.input.onKeyPress(e))
                        }
                    }
                }
                var ds, ps, gs = 400,
                    vs = function(e, t, r) {
                        this.time = e, this.pos = t, this.button = r
                    };

                function ms(e, t) {
                    var r = +new Date;
                    return ps && ps.compare(r, e, t) ? (ds = ps = null, "triple") : ds && ds.compare(r, e, t) ? (ps = new vs(r, e, t), ds = null, "double") : (ds = new vs(r, e, t), ps = null, "single")
                }

                function ys(e) {
                    var t = this,
                        r = t.display;
                    if (!(be(t, e) || r.activeTouch && r.input.supportsTouch()))
                        if (r.input.ensurePolled(), r.shift = e.shiftKey, Vr(r, e)) a || (r.scroller.draggable = !1, setTimeout((function() {
                            return r.scroller.draggable = !0
                        }), 100));
                        else if (!Ms(t, e)) {
                        var n = En(t, e),
                            i = Ne(e),
                            o = n ? ms(n, i) : "single";
                        window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), n && bs(t, i, n, o, e) || (1 == i ? n ? xs(t, n, o, e) : Me(e) == r.scroller && Se(e) : 2 == i ? (n && Po(t.doc, n), setTimeout((function() {
                            return r.input.focus()
                        }), 20)) : 3 == i && (L ? t.display.input.onContextMenu(e) : qn(t)))
                    }
                }

                function bs(e, t, r, n, i) {
                    var o = "Click";
                    return "double" == n ? o = "Double" + o : "triple" == n && (o = "Triple" + o), is(e, Vl(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, (function(t) {
                        if ("string" == typeof t && (t = Zl[t]), !t) return !1;
                        var n = !1;
                        try {
                            e.isReadOnly() && (e.state.suppressEdits = !0), n = t(e, r) != V
                        } finally {
                            e.state.suppressEdits = !1
                        }
                        return n
                    }))
                }

                function ws(e, t, r) {
                    var n = e.getOption("configureMouse"),
                        i = n ? n(e, t, r) : {};
                    if (null == i.unit) {
                        var o = w ? r.shiftKey && r.metaKey : r.altKey;
                        i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                    }
                    return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey), null == i.addNew && (i.addNew = b ? r.metaKey : r.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(b ? r.altKey : r.ctrlKey)), i
                }

                function xs(e, t, r, n) {
                    l ? setTimeout(I($n, e), 0) : e.curOp.focus = H();
                    var i, o = ws(e, r, n),
                        s = e.doc.sel;
                    e.options.dragDrop && De && !e.isReadOnly() && "single" == r && (i = s.contains(t)) > -1 && (lt((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) && (lt(i.to(), t) > 0 || t.xRel < 0) ? Cs(e, n, t, o) : Ls(e, n, t, o)
                }

                function Cs(e, t, r, n) {
                    var i = e.display,
                        o = !1,
                        u = Wi(e, (function(t) {
                            a && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : qn(e)), me(i.wrapper.ownerDocument, "mouseup", u), me(i.wrapper.ownerDocument, "mousemove", c), me(i.scroller, "dragstart", h), me(i.scroller, "drop", u), o || (Se(t), n.addNew || Po(e.doc, r, null, null, n.extend), a && !d || l && 9 == s ? setTimeout((function() {
                                i.wrapper.ownerDocument.body.focus({
                                    preventScroll: !0
                                }), i.input.focus()
                            }), 20) : i.input.focus())
                        })),
                        c = function(e) {
                            o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
                        },
                        h = function() {
                            return o = !0
                        };
                    a && (i.scroller.draggable = !0), e.state.draggingText = u, u.copy = !n.moveOnDrag, ge(i.wrapper.ownerDocument, "mouseup", u), ge(i.wrapper.ownerDocument, "mousemove", c), ge(i.scroller, "dragstart", h), ge(i.scroller, "drop", u), e.state.delayingBlurEvent = !0, setTimeout((function() {
                        return i.input.focus()
                    }), 20), i.scroller.dragDrop && i.scroller.dragDrop()
                }

                function Ss(e, t, r) {
                    if ("char" == r) return new oo(t, t);
                    if ("word" == r) return e.findWordAt(t);
                    if ("line" == r) return new oo(ot(t.line, 0), ft(e.doc, ot(t.line + 1, 0)));
                    var n = r(e, t);
                    return new oo(n.from, n.to)
                }

                function Ls(e, t, r, n) {
                    l && qn(e);
                    var i = e.display,
                        o = e.doc;
                    Se(t);
                    var s, a, u = o.sel,
                        c = u.ranges;
                    if (n.addNew && !n.extend ? (a = o.sel.contains(r), s = a > -1 ? c[a] : new oo(r, r)) : (s = o.sel.primary(), a = o.sel.primIndex), "rectangle" == n.unit) n.addNew || (s = new oo(r, r)), r = En(e, t, !0, !0), a = -1;
                    else {
                        var h = Ss(e, r, n.unit);
                        s = n.extend ? Eo(s, h.anchor, h.head, n.extend) : h
                    }
                    n.addNew ? -1 == a ? (a = c.length, Uo(o, lo(e, c.concat([s]), a), {
                        scroll: !1,
                        origin: "*mouse"
                    })) : c.length > 1 && c[a].empty() && "char" == n.unit && !n.extend ? (Uo(o, lo(e, c.slice(0, a).concat(c.slice(a + 1)), 0), {
                        scroll: !1,
                        origin: "*mouse"
                    }), u = o.sel) : zo(o, a, s, j) : (a = 0, Uo(o, new io([s], 0), j), u = o.sel);
                    var f = r;

                    function d(t) {
                        if (0 != lt(f, t))
                            if (f = t, "rectangle" == n.unit) {
                                for (var i = [], l = e.options.tabSize, c = R(Ze(o, r.line).text, r.ch, l), h = R(Ze(o, t.line).text, t.ch, l), d = Math.min(c, h), p = Math.max(c, h), g = Math.min(r.line, t.line), v = Math.min(e.lastLine(), Math.max(r.line, t.line)); g <= v; g++) {
                                    var m = Ze(o, g).text,
                                        y = Y(m, d, l);
                                    d == p ? i.push(new oo(ot(g, y), ot(g, y))) : m.length > y && i.push(new oo(ot(g, y), ot(g, Y(m, p, l))))
                                }
                                i.length || i.push(new oo(r, r)), Uo(o, lo(e, u.ranges.slice(0, a).concat(i), a), {
                                    origin: "*mouse",
                                    scroll: !1
                                }), e.scrollIntoView(t)
                            } else {
                                var b, w = s,
                                    x = Ss(e, t, n.unit),
                                    C = w.anchor;
                                lt(x.anchor, C) > 0 ? (b = x.head, C = ct(w.from(), x.anchor)) : (b = x.anchor, C = ut(w.to(), x.head));
                                var S = u.ranges.slice(0);
                                S[a] = ks(e, new oo(ft(o, C), b)), Uo(o, lo(e, S, a), j)
                            }
                    }
                    var p = i.wrapper.getBoundingClientRect(),
                        g = 0;

                    function v(t) {
                        var r = ++g,
                            l = En(e, t, !0, "rectangle" == n.unit);
                        if (l)
                            if (0 != lt(l, f)) {
                                e.curOp.focus = H(), d(l);
                                var s = ti(i, o);
                                (l.line >= s.to || l.line < s.from) && setTimeout(Wi(e, (function() {
                                    g == r && v(t)
                                })), 150)
                            } else {
                                var a = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                                a && setTimeout(Wi(e, (function() {
                                    g == r && (i.scroller.scrollTop += a, v(t))
                                })), 50)
                            }
                    }

                    function m(t) {
                        e.state.selectingText = !1, g = 1 / 0, t && (Se(t), i.input.focus()), me(i.wrapper.ownerDocument, "mousemove", y), me(i.wrapper.ownerDocument, "mouseup", b), o.history.lastSelOrigin = null
                    }
                    var y = Wi(e, (function(e) {
                            0 !== e.buttons && Ne(e) ? v(e) : m(e)
                        })),
                        b = Wi(e, m);
                    e.state.selectingText = b, ge(i.wrapper.ownerDocument, "mousemove", y), ge(i.wrapper.ownerDocument, "mouseup", b)
                }

                function ks(e, t) {
                    var r = t.anchor,
                        n = t.head,
                        i = Ze(e.doc, r.line);
                    if (0 == lt(r, n) && r.sticky == n.sticky) return t;
                    var o = de(i);
                    if (!o) return t;
                    var l = he(o, r.ch, r.sticky),
                        s = o[l];
                    if (s.from != r.ch && s.to != r.ch) return t;
                    var a, u = l + (s.from == r.ch == (1 != s.level) ? 0 : 1);
                    if (0 == u || u == o.length) return t;
                    if (n.line != r.line) a = (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                    else {
                        var c = he(o, n.ch, n.sticky),
                            h = c - l || (n.ch - r.ch) * (1 == s.level ? -1 : 1);
                        a = c == u - 1 || c == u ? h < 0 : h > 0
                    }
                    var f = o[u + (a ? -1 : 0)],
                        d = a == (1 == f.level),
                        p = d ? f.from : f.to,
                        g = d ? "after" : "before";
                    return r.ch == p && r.sticky == g ? t : new oo(new ot(r.line, p, g), n)
                }

                function Ts(e, t, r, n) {
                    var i, o;
                    if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;
                    else try {
                        i = t.clientX, o = t.clientY
                    } catch (c) {
                        return !1
                    }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    n && Se(t);
                    var l = e.display,
                        s = l.lineDiv.getBoundingClientRect();
                    if (o > s.bottom || !xe(e, r)) return ke(t);
                    o -= s.top - l.viewOffset;
                    for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
                        var u = l.gutters.childNodes[a];
                        if (u && u.getBoundingClientRect().right >= i) return ye(e, r, e, rt(e.doc, o), e.display.gutterSpecs[a].className, t), ke(t)
                    }
                }

                function Ms(e, t) {
                    return Ts(e, t, "gutterClick", !0)
                }

                function Ns(e, t) {
                    Vr(e.display, t) || Os(e, t) || be(e, t, "contextmenu") || L || e.display.input.onContextMenu(t)
                }

                function Os(e, t) {
                    return !!xe(e, "gutterContextMenu") && Ts(e, t, "gutterContextMenu", !1)
                }

                function As(e) {
                    e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), fn(e)
                }
                vs.prototype.compare = function(e, t, r) {
                    return this.time + gs > e && 0 == lt(t, this.pos) && r == this.button
                };
                var Ds = {
                        toString: function() {
                            return "CodeMirror.Init"
                        }
                    },
                    Ws = {},
                    Hs = {};

                function Fs(e) {
                    var t = e.optionHandlers;

                    function r(r, n, i, o) {
                        e.defaults[r] = n, i && (t[r] = o ? function(e, t, r) {
                            r != Ds && i(e, t, r)
                        } : i)
                    }
                    e.defineOption = r, e.Init = Ds, r("value", "", (function(e, t) {
                        return e.setValue(t)
                    }), !0), r("mode", null, (function(e, t) {
                        e.doc.modeOption = t, po(e)
                    }), !0), r("indentUnit", 2, po, !0), r("indentWithTabs", !1), r("smartIndent", !0), r("tabSize", 4, (function(e) {
                        go(e), fn(e), In(e)
                    }), !0), r("lineSeparator", null, (function(e, t) {
                        if (e.doc.lineSep = t, t) {
                            var r = [],
                                n = e.doc.first;
                            e.doc.iter((function(e) {
                                for (var i = 0;;) {
                                    var o = e.text.indexOf(t, i);
                                    if (-1 == o) break;
                                    i = o + t.length, r.push(ot(n, o))
                                }
                                n++
                            }));
                            for (var i = r.length - 1; i >= 0; i--) il(e.doc, t, r[i], ot(r[i].line, r[i].ch + t.length))
                        }
                    })), r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, (function(e, t, r) {
                        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != Ds && e.refresh()
                    })), r("specialCharPlaceholder", gr, (function(e) {
                        return e.refresh()
                    }), !0), r("electricChars", !0), r("inputStyle", y ? "contenteditable" : "textarea", (function() {
                        throw new Error("inputStyle can not (yet) be changed in a running editor")
                    }), !0), r("spellcheck", !1, (function(e, t) {
                        return e.getInputField().spellcheck = t
                    }), !0), r("autocorrect", !1, (function(e, t) {
                        return e.getInputField().autocorrect = t
                    }), !0), r("autocapitalize", !1, (function(e, t) {
                        return e.getInputField().autocapitalize = t
                    }), !0), r("rtlMoveVisually", !x), r("wholeLineUpdateBefore", !0), r("theme", "default", (function(e) {
                        As(e), Zi(e)
                    }), !0), r("keyMap", "default", (function(e, t, r) {
                        var n = jl(t),
                            i = r != Ds && jl(r);
                        i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null)
                    })), r("extraKeys", null), r("configureMouse", null), r("lineWrapping", !1, Ps, !0), r("gutters", [], (function(e, t) {
                        e.display.gutterSpecs = $i(t, e.options.lineNumbers), Zi(e)
                    }), !0), r("fixedGutter", !0, (function(e, t) {
                        e.display.gutters.style.left = t ? Wn(e.display) + "px" : "0", e.refresh()
                    }), !0), r("coverGutterNextToScrollbar", !1, (function(e) {
                        return yi(e)
                    }), !0), r("scrollbarStyle", "native", (function(e) {
                        xi(e), yi(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                    }), !0), r("lineNumbers", !1, (function(e, t) {
                        e.display.gutterSpecs = $i(e.options.gutters, t), Zi(e)
                    }), !0), r("firstLineNumber", 1, Zi, !0), r("lineNumberFormatter", (function(e) {
                        return e
                    }), Zi, !0), r("showCursorWhenSelecting", !1, Vn, !0), r("resetSelectionOnContextMenu", !0), r("lineWiseCopyCut", !0), r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1), r("readOnly", !1, (function(e, t) {
                        "nocursor" == t && (Qn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                    })), r("screenReaderLabel", null, (function(e, t) {
                        t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t)
                    })), r("disableInput", !1, (function(e, t) {
                        t || e.display.input.reset()
                    }), !0), r("dragDrop", !0, Es), r("allowDropFileTypes", null), r("cursorBlinkRate", 530), r("cursorScrollMargin", 0), r("cursorHeight", 1, Vn, !0), r("singleCursorHeightPerLine", !0, Vn, !0), r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, go, !0), r("addModeClass", !1, go, !0), r("pollInterval", 100), r("undoDepth", 200, (function(e, t) {
                        return e.doc.history.undoDepth = t
                    })), r("historyEventDelay", 1250), r("viewportMargin", 10, (function(e) {
                        return e.refresh()
                    }), !0), r("maxHighlightLength", 1e4, go, !0), r("moveInputWithCursor", !0, (function(e, t) {
                        t || e.display.input.resetPosition()
                    })), r("tabindex", null, (function(e, t) {
                        return e.display.input.getField().tabIndex = t || ""
                    })), r("autofocus", null), r("direction", "ltr", (function(e, t) {
                        return e.doc.setDirection(t)
                    }), !0), r("phrases", null)
                }

                function Es(e, t, r) {
                    if (!t != !(r && r != Ds)) {
                        var n = e.display.dragFunctions,
                            i = t ? ge : me;
                        i(e.display.scroller, "dragstart", n.start), i(e.display.scroller, "dragenter", n.enter), i(e.display.scroller, "dragover", n.over), i(e.display.scroller, "dragleave", n.leave), i(e.display.scroller, "drop", n.drop)
                    }
                }

                function Ps(e) {
                    e.options.lineWrapping ? (F(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (M(e.display.wrapper, "CodeMirror-wrap"), sr(e)), Fn(e), In(e), fn(e), setTimeout((function() {
                        return yi(e)
                    }), 100)
                }

                function Is(e, t) {
                    var r = this;
                    if (!(this instanceof Is)) return new Is(e, t);
                    this.options = t = t ? z(t) : {}, z(Ws, t, !1);
                    var n = t.value;
                    "string" == typeof n ? n = new Sl(n, t.mode, null, t.lineSeparator, t.direction) : t.mode && (n.modeOption = t.mode), this.doc = n;
                    var i = new Is.inputStyles[t.inputStyle](this),
                        o = this.display = new Qi(e, n, i, t);
                    for (var u in o.wrapper.CodeMirror = this, As(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), xi(this), this.state = {
                            keyMaps: [],
                            overlays: [],
                            modeGen: 0,
                            overwrite: !1,
                            delayingBlurEvent: !1,
                            focused: !1,
                            suppressEdits: !1,
                            pasteIncoming: -1,
                            cutIncoming: -1,
                            selectingText: !1,
                            draggingText: !1,
                            highlight: new B,
                            keySeq: null,
                            specialChars: null
                        }, t.autofocus && !y && o.input.focus(), l && s < 11 && setTimeout((function() {
                            return r.display.input.reset(!0)
                        }), 20), zs(this), Dl(), Si(this), this.curOp.forceUpdate = !0, bo(this, n), t.autofocus && !y || this.hasFocus() ? setTimeout((function() {
                            r.hasFocus() && !r.state.focused && Zn(r)
                        }), 20) : Qn(this), Hs) Hs.hasOwnProperty(u) && Hs[u](this, t[u], Ds);
                    _i(this), t.finishInit && t.finishInit(this);
                    for (var c = 0; c < Rs.length; ++c) Rs[c](this);
                    Li(this), a && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
                }

                function zs(e) {
                    var t = e.display;
                    ge(t.scroller, "mousedown", Wi(e, ys)), ge(t.scroller, "dblclick", l && s < 11 ? Wi(e, (function(t) {
                        if (!be(e, t)) {
                            var r = En(e, t);
                            if (r && !Ms(e, t) && !Vr(e.display, t)) {
                                Se(t);
                                var n = e.findWordAt(r);
                                Po(e.doc, n.anchor, n.head)
                            }
                        }
                    })) : function(t) {
                        return be(e, t) || Se(t)
                    }), ge(t.scroller, "contextmenu", (function(t) {
                        return Ns(e, t)
                    })), ge(t.input.getField(), "contextmenu", (function(r) {
                        t.scroller.contains(r.target) || Ns(e, r)
                    }));
                    var r, n = {
                        end: 0
                    };

                    function i() {
                        t.activeTouch && (r = setTimeout((function() {
                            return t.activeTouch = null
                        }), 1e3), (n = t.activeTouch).end = +new Date)
                    }

                    function o(e) {
                        if (1 != e.touches.length) return !1;
                        var t = e.touches[0];
                        return t.radiusX <= 1 && t.radiusY <= 1
                    }

                    function a(e, t) {
                        if (null == t.left) return !0;
                        var r = t.left - e.left,
                            n = t.top - e.top;
                        return r * r + n * n > 400
                    }
                    ge(t.scroller, "touchstart", (function(i) {
                        if (!be(e, i) && !o(i) && !Ms(e, i)) {
                            t.input.ensurePolled(), clearTimeout(r);
                            var l = +new Date;
                            t.activeTouch = {
                                start: l,
                                moved: !1,
                                prev: l - n.end <= 300 ? n : null
                            }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY)
                        }
                    })), ge(t.scroller, "touchmove", (function() {
                        t.activeTouch && (t.activeTouch.moved = !0)
                    })), ge(t.scroller, "touchend", (function(r) {
                        var n = t.activeTouch;
                        if (n && !Vr(t, r) && null != n.left && !n.moved && new Date - n.start < 300) {
                            var o, l = e.coordsChar(t.activeTouch, "page");
                            o = !n.prev || a(n, n.prev) ? new oo(l, l) : !n.prev.prev || a(n, n.prev.prev) ? e.findWordAt(l) : new oo(ot(l.line, 0), ft(e.doc, ot(l.line + 1, 0))), e.setSelection(o.anchor, o.head), e.focus(), Se(r)
                        }
                        i()
                    })), ge(t.scroller, "touchcancel", i), ge(t.scroller, "scroll", (function() {
                        t.scroller.clientHeight && (fi(e, t.scroller.scrollTop), pi(e, t.scroller.scrollLeft, !0), ye(e, "scroll", e))
                    })), ge(t.scroller, "mousewheel", (function(t) {
                        return no(e, t)
                    })), ge(t.scroller, "DOMMouseScroll", (function(t) {
                        return no(e, t)
                    })), ge(t.wrapper, "scroll", (function() {
                        return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                    })), t.dragFunctions = {
                        enter: function(t) {
                            be(e, t) || Te(t)
                        },
                        over: function(t) {
                            be(e, t) || (Ml(e, t), Te(t))
                        },
                        start: function(t) {
                            return Tl(e, t)
                        },
                        drop: Wi(e, kl),
                        leave: function(t) {
                            be(e, t) || Nl(e)
                        }
                    };
                    var u = t.input.getField();
                    ge(u, "keyup", (function(t) {
                        return hs.call(e, t)
                    })), ge(u, "keydown", Wi(e, us)), ge(u, "keypress", Wi(e, fs)), ge(u, "focus", (function(t) {
                        return Zn(e, t)
                    })), ge(u, "blur", (function(t) {
                        return Qn(e, t)
                    }))
                }
                Is.defaults = Ws, Is.optionHandlers = Hs;
                var Rs = [];

                function Bs(e, t, r, n) {
                    var i, o = e.doc;
                    null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = bt(e, t).state : r = "prev");
                    var l = e.options.tabSize,
                        s = Ze(o, t),
                        a = R(s.text, null, l);
                    s.stateAfter && (s.stateAfter = null);
                    var u, c = s.text.match(/^\s*/)[0];
                    if (n || /\S/.test(s.text)) {
                        if ("smart" == r && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == V || u > 150)) {
                            if (!n) return;
                            r = "prev"
                        }
                    } else u = 0, r = "not";
                    "prev" == r ? u = t > o.first ? R(Ze(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r), u = Math.max(0, u);
                    var h = "",
                        f = 0;
                    if (e.options.indentWithTabs)
                        for (var d = Math.floor(u / l); d; --d) f += l, h += "\t";
                    if (f < u && (h += $(u - f)), h != c) return il(o, h, ot(t, 0), ot(t, c.length), "+input"), s.stateAfter = null, !0;
                    for (var p = 0; p < o.sel.ranges.length; p++) {
                        var g = o.sel.ranges[p];
                        if (g.head.line == t && g.head.ch < c.length) {
                            var v = ot(t, c.length);
                            zo(o, p, new oo(v, v));
                            break
                        }
                    }
                }
                Is.defineInitHook = function(e) {
                    return Rs.push(e)
                };
                var Gs = null;

                function Us(e) {
                    Gs = e
                }

                function Vs(e, t, r, n, i) {
                    var o = e.doc;
                    e.display.shift = !1, n || (n = o.sel);
                    var l = +new Date - 200,
                        s = "paste" == i || e.state.pasteIncoming > l,
                        a = Fe(t),
                        u = null;
                    if (s && n.ranges.length > 1)
                        if (Gs && Gs.text.join("\n") == t) {
                            if (n.ranges.length % Gs.text.length == 0) {
                                u = [];
                                for (var c = 0; c < Gs.text.length; c++) u.push(o.splitLines(Gs.text[c]))
                            }
                        } else a.length == n.ranges.length && e.options.pasteLinesPerSelection && (u = Z(a, (function(e) {
                            return [e]
                        })));
                    for (var h = e.curOp.updateInput, f = n.ranges.length - 1; f >= 0; f--) {
                        var d = n.ranges[f],
                            p = d.from(),
                            g = d.to();
                        d.empty() && (r && r > 0 ? p = ot(p.line, p.ch - r) : e.state.overwrite && !s ? g = ot(g.line, Math.min(Ze(o, g.line).text.length, g.ch + q(a).length)) : s && Gs && Gs.lineWise && Gs.text.join("\n") == a.join("\n") && (p = g = ot(p.line, 0)));
                        var v = {
                            from: p,
                            to: g,
                            text: u ? u[f % u.length] : a,
                            origin: i || (s ? "paste" : e.state.cutIncoming > l ? "cut" : "+input")
                        };
                        Qo(e.doc, v), Nr(e, "inputRead", e, v)
                    }
                    t && !s && js(e, t), si(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = h), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
                }

                function Ks(e, t) {
                    var r = e.clipboardData && e.clipboardData.getData("Text");
                    if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || !t.hasFocus() || Di(t, (function() {
                        return Vs(t, r, 0, null, "paste")
                    })), !0
                }

                function js(e, t) {
                    if (e.options.electricChars && e.options.smartIndent)
                        for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                            var i = r.ranges[n];
                            if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
                                var o = e.getModeAt(i.head),
                                    l = !1;
                                if (o.electricChars) {
                                    for (var s = 0; s < o.electricChars.length; s++)
                                        if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                                            l = Bs(e, i.head.line, "smart");
                                            break
                                        }
                                } else o.electricInput && o.electricInput.test(Ze(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Bs(e, i.head.line, "smart"));
                                l && Nr(e, "electricInput", e, i.head.line)
                            }
                        }
                }

                function Xs(e) {
                    for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
                        var i = e.doc.sel.ranges[n].head.line,
                            o = {
                                anchor: ot(i, 0),
                                head: ot(i + 1, 0)
                            };
                        r.push(o), t.push(e.getRange(o.anchor, o.head))
                    }
                    return {
                        text: t,
                        ranges: r
                    }
                }

                function Ys(e, t, r, n) {
                    e.setAttribute("autocorrect", r ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t)
                }

                function _s() {
                    var e = A("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),
                        t = A("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                    return a ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), v && (e.style.border = "1px solid black"), Ys(e), t
                }

                function $s(e) {
                    var t = e.optionHandlers,
                        r = e.helpers = {};
                    e.prototype = {
                        constructor: e,
                        focus: function() {
                            window.focus(), this.display.input.focus()
                        },
                        setOption: function(e, r) {
                            var n = this.options,
                                i = n[e];
                            n[e] == r && "mode" != e || (n[e] = r, t.hasOwnProperty(e) && Wi(this, t[e])(this, r, i), ye(this, "optionChange", this, e))
                        },
                        getOption: function(e) {
                            return this.options[e]
                        },
                        getDoc: function() {
                            return this.doc
                        },
                        addKeyMap: function(e, t) {
                            this.state.keyMaps[t ? "push" : "unshift"](jl(e))
                        },
                        removeKeyMap: function(e) {
                            for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0
                        },
                        addOverlay: Hi((function(t, r) {
                            var n = t.token ? t : e.getMode(this.options, t);
                            if (n.startState) throw new Error("Overlays may not be stateful.");
                            Q(this.state.overlays, {
                                mode: n,
                                modeSpec: t,
                                opaque: r && r.opaque,
                                priority: r && r.priority || 0
                            }, (function(e) {
                                return e.priority
                            })), this.state.modeGen++, In(this)
                        })),
                        removeOverlay: Hi((function(e) {
                            for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                                var n = t[r].modeSpec;
                                if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, void In(this)
                            }
                        })),
                        indentLine: Hi((function(e, t, r) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), nt(this.doc, e) && Bs(this, e, t, r)
                        })),
                        indentSelection: Hi((function(e) {
                            for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
                                var i = t[n];
                                if (i.empty()) i.head.line > r && (Bs(this, i.head.line, e, !0), r = i.head.line, n == this.doc.sel.primIndex && si(this));
                                else {
                                    var o = i.from(),
                                        l = i.to(),
                                        s = Math.max(r, o.line);
                                    r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                                    for (var a = s; a < r; ++a) Bs(this, a, e);
                                    var u = this.doc.sel.ranges;
                                    0 == o.ch && t.length == u.length && u[n].from().ch > 0 && zo(this.doc, n, new oo(o, u[n].to()), K)
                                }
                            }
                        })),
                        getTokenAt: function(e, t) {
                            return Lt(this, e, t)
                        },
                        getLineTokens: function(e, t) {
                            return Lt(this, ot(e), t, !0)
                        },
                        getTokenTypeAt: function(e) {
                            e = ft(this.doc, e);
                            var t, r = yt(this, Ze(this.doc, e.line)),
                                n = 0,
                                i = (r.length - 1) / 2,
                                o = e.ch;
                            if (0 == o) t = r[2];
                            else
                                for (;;) {
                                    var l = n + i >> 1;
                                    if ((l ? r[2 * l - 1] : 0) >= o) i = l;
                                    else {
                                        if (!(r[2 * l + 1] < o)) {
                                            t = r[2 * l + 2];
                                            break
                                        }
                                        n = l + 1
                                    }
                                }
                            var s = t ? t.indexOf("overlay ") : -1;
                            return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
                        },
                        getModeAt: function(t) {
                            var r = this.doc.mode;
                            return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
                        },
                        getHelper: function(e, t) {
                            return this.getHelpers(e, t)[0]
                        },
                        getHelpers: function(e, t) {
                            var n = [];
                            if (!r.hasOwnProperty(t)) return n;
                            var i = r[t],
                                o = this.getModeAt(e);
                            if ("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
                            else if (o[t])
                                for (var l = 0; l < o[t].length; l++) {
                                    var s = i[o[t][l]];
                                    s && n.push(s)
                                } else o.helperType && i[o.helperType] ? n.push(i[o.helperType]) : i[o.name] && n.push(i[o.name]);
                            for (var a = 0; a < i._global.length; a++) {
                                var u = i._global[a];
                                u.pred(o, this) && -1 == G(n, u.val) && n.push(u.val)
                            }
                            return n
                        },
                        getStateAfter: function(e, t) {
                            var r = this.doc;
                            return bt(this, (e = ht(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state
                        },
                        cursorCoords: function(e, t) {
                            var r = this.doc.sel.primary();
                            return bn(this, null == e ? r.head : "object" == typeof e ? ft(this.doc, e) : e ? r.from() : r.to(), t || "page")
                        },
                        charCoords: function(e, t) {
                            return yn(this, ft(this.doc, e), t || "page")
                        },
                        coordsChar: function(e, t) {
                            return Cn(this, (e = mn(this, e, t || "page")).left, e.top)
                        },
                        lineAtHeight: function(e, t) {
                            return e = mn(this, {
                                top: e,
                                left: 0
                            }, t || "page").top, rt(this.doc, e + this.display.viewOffset)
                        },
                        heightAtLine: function(e, t, r) {
                            var n, i = !1;
                            if ("number" == typeof e) {
                                var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), n = Ze(this.doc, e)
                            } else n = e;
                            return vn(this, n, {
                                top: 0,
                                left: 0
                            }, t || "page", r || i).top + (i ? this.doc.height - or(n) : 0)
                        },
                        defaultTextHeight: function() {
                            return On(this.display)
                        },
                        defaultCharWidth: function() {
                            return An(this.display)
                        },
                        getViewport: function() {
                            return {
                                from: this.display.viewFrom,
                                to: this.display.viewTo
                            }
                        },
                        addWidget: function(e, t, r, n, i) {
                            var o = this.display,
                                l = (e = bn(this, ft(this.doc, e))).bottom,
                                s = e.left;
                            if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == n) l = e.top;
                            else if ("above" == n || "near" == n) {
                                var a = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                                ("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth)
                            }
                            t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), r && ii(this, {
                                left: s,
                                top: l,
                                right: s + t.offsetWidth,
                                bottom: l + t.offsetHeight
                            })
                        },
                        triggerOnKeyDown: Hi(us),
                        triggerOnKeyPress: Hi(fs),
                        triggerOnKeyUp: hs,
                        triggerOnMouseDown: Hi(ys),
                        execCommand: function(e) {
                            if (Zl.hasOwnProperty(e)) return Zl[e].call(null, this)
                        },
                        triggerElectric: Hi((function(e) {
                            js(this, e)
                        })),
                        findPosH: function(e, t, r, n) {
                            var i = 1;
                            t < 0 && (i = -1, t = -t);
                            for (var o = ft(this.doc, e), l = 0; l < t && !(o = qs(this.doc, o, i, r, n)).hitSide; ++l);
                            return o
                        },
                        moveH: Hi((function(e, t) {
                            var r = this;
                            this.extendSelectionsBy((function(n) {
                                return r.display.shift || r.doc.extend || n.empty() ? qs(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to()
                            }), X)
                        })),
                        deleteH: Hi((function(e, t) {
                            var r = this.doc.sel,
                                n = this.doc;
                            r.somethingSelected() ? n.replaceSelection("", null, "+delete") : Xl(this, (function(r) {
                                var i = qs(n, r.head, e, t, !1);
                                return e < 0 ? {
                                    from: i,
                                    to: r.head
                                } : {
                                    from: r.head,
                                    to: i
                                }
                            }))
                        })),
                        findPosV: function(e, t, r, n) {
                            var i = 1,
                                o = n;
                            t < 0 && (i = -1, t = -t);
                            for (var l = ft(this.doc, e), s = 0; s < t; ++s) {
                                var a = bn(this, l, "div");
                                if (null == o ? o = a.left : a.left = o, (l = Zs(this, a, i, r)).hitSide) break
                            }
                            return l
                        },
                        moveV: Hi((function(e, t) {
                            var r = this,
                                n = this.doc,
                                i = [],
                                o = !this.display.shift && !n.extend && n.sel.somethingSelected();
                            if (n.extendSelectionsBy((function(l) {
                                    if (o) return e < 0 ? l.from() : l.to();
                                    var s = bn(r, l.head, "div");
                                    null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
                                    var a = Zs(r, s, e, t);
                                    return "page" == t && l == n.sel.primary() && li(r, yn(r, a, "div").top - s.top), a
                                }), X), i.length)
                                for (var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l]
                        })),
                        findWordAt: function(e) {
                            var t = Ze(this.doc, e.line).text,
                                r = e.ch,
                                n = e.ch;
                            if (t) {
                                var i = this.getHelper(e, "wordChars");
                                "before" != e.sticky && n != t.length || !r ? ++n : --r;
                                for (var o = t.charAt(r), l = ne(o, i) ? function(e) {
                                        return ne(e, i)
                                    } : /\s/.test(o) ? function(e) {
                                        return /\s/.test(e)
                                    } : function(e) {
                                        return !/\s/.test(e) && !ne(e)
                                    }; r > 0 && l(t.charAt(r - 1));) --r;
                                for (; n < t.length && l(t.charAt(n));) ++n
                            }
                            return new oo(ot(e.line, r), ot(e.line, n))
                        },
                        toggleOverwrite: function(e) {
                            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? F(this.display.cursorDiv, "CodeMirror-overwrite") : M(this.display.cursorDiv, "CodeMirror-overwrite"), ye(this, "overwriteToggle", this, this.state.overwrite))
                        },
                        hasFocus: function() {
                            return this.display.input.getField() == H()
                        },
                        isReadOnly: function() {
                            return !(!this.options.readOnly && !this.doc.cantEdit)
                        },
                        scrollTo: Hi((function(e, t) {
                            ai(this, e, t)
                        })),
                        getScrollInfo: function() {
                            var e = this.display.scroller;
                            return {
                                left: e.scrollLeft,
                                top: e.scrollTop,
                                height: e.scrollHeight - Yr(this) - this.display.barHeight,
                                width: e.scrollWidth - Yr(this) - this.display.barWidth,
                                clientHeight: $r(this),
                                clientWidth: _r(this)
                            }
                        },
                        scrollIntoView: Hi((function(e, t) {
                            null == e ? (e = {
                                from: this.doc.sel.primary().head,
                                to: null
                            }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                                from: ot(e, 0),
                                to: null
                            } : null == e.from && (e = {
                                from: e,
                                to: null
                            }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? ui(this, e) : hi(this, e.from, e.to, e.margin)
                        })),
                        setSize: Hi((function(e, t) {
                            var r = this,
                                n = function(e) {
                                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                                };
                            null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && hn(this);
                            var i = this.display.viewFrom;
                            this.doc.iter(i, this.display.viewTo, (function(e) {
                                if (e.widgets)
                                    for (var t = 0; t < e.widgets.length; t++)
                                        if (e.widgets[t].noHScroll) {
                                            zn(r, i, "widget");
                                            break
                                        }++i
                            })), this.curOp.forceUpdate = !0, ye(this, "refresh", this)
                        })),
                        operation: function(e) {
                            return Di(this, e)
                        },
                        startOperation: function() {
                            return Si(this)
                        },
                        endOperation: function() {
                            return Li(this)
                        },
                        refresh: Hi((function() {
                            var e = this.display.cachedTextHeight;
                            In(this), this.curOp.forceUpdate = !0, fn(this), ai(this, this.doc.scrollLeft, this.doc.scrollTop), ji(this.display), (null == e || Math.abs(e - On(this.display)) > .5 || this.options.lineWrapping) && Fn(this), ye(this, "refresh", this)
                        })),
                        swapDoc: Hi((function(e) {
                            var t = this.doc;
                            return t.cm = null, this.state.selectingText && this.state.selectingText(), bo(this, e), fn(this), this.display.input.reset(), ai(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Nr(this, "swapDoc", this, t), t
                        })),
                        phrase: function(e) {
                            var t = this.options.phrases;
                            return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                        },
                        getInputField: function() {
                            return this.display.input.getField()
                        },
                        getWrapperElement: function() {
                            return this.display.wrapper
                        },
                        getScrollerElement: function() {
                            return this.display.scroller
                        },
                        getGutterElement: function() {
                            return this.display.gutters
                        }
                    }, Ce(e), e.registerHelper = function(t, n, i) {
                        r.hasOwnProperty(t) || (r[t] = e[t] = {
                            _global: []
                        }), r[t][n] = i
                    }, e.registerGlobalHelper = function(t, n, i, o) {
                        e.registerHelper(t, n, o), r[t]._global.push({
                            pred: i,
                            val: o
                        })
                    }
                }

                function qs(e, t, r, n, i) {
                    var o = t,
                        l = r,
                        s = Ze(e, t.line),
                        a = i && "rtl" == e.direction ? -r : r;

                    function u() {
                        var r = t.line + a;
                        return !(r < e.first || r >= e.first + e.size) && (t = new ot(r, t.ch, t.sticky), s = Ze(e, r))
                    }

                    function c(o) {
                        var l;
                        if ("codepoint" == n) {
                            var c = s.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
                            if (isNaN(c)) l = null;
                            else {
                                var h = r > 0 ? c >= 55296 && c < 56320 : c >= 56320 && c < 57343;
                                l = new ot(t.line, Math.max(0, Math.min(s.text.length, t.ch + r * (h ? 2 : 1))), -r)
                            }
                        } else l = i ? ql(e.cm, s, t, r) : _l(s, t, r);
                        if (null == l) {
                            if (o || !u()) return !1;
                            t = $l(i, e.cm, s, t.line, a)
                        } else t = l;
                        return !0
                    }
                    if ("char" == n || "codepoint" == n) c();
                    else if ("column" == n) c(!0);
                    else if ("word" == n || "group" == n)
                        for (var h = null, f = "group" == n, d = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(r < 0) || c(!p); p = !1) {
                            var g = s.text.charAt(t.ch) || "\n",
                                v = ne(g, d) ? "w" : f && "\n" == g ? "n" : !f || /\s/.test(g) ? null : "p";
                            if (!f || p || v || (v = "s"), h && h != v) {
                                r < 0 && (r = 1, c(), t.sticky = "after");
                                break
                            }
                            if (v && (h = v), r > 0 && !c(!p)) break
                        }
                    var m = _o(e, t, o, l, !0);
                    return st(o, m) && (m.hitSide = !0), m
                }

                function Zs(e, t, r, n) {
                    var i, o, l = e.doc,
                        s = t.left;
                    if ("page" == n) {
                        var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            u = Math.max(a - .5 * On(e.display), 3);
                        i = (r > 0 ? t.bottom : t.top) + r * u
                    } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
                    for (;
                        (o = Cn(e, s, i)).outside;) {
                        if (r < 0 ? i <= 0 : i >= l.height) {
                            o.hitSide = !0;
                            break
                        }
                        i += 5 * r
                    }
                    return o
                }
                var Qs = function(e) {
                    this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new B, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
                };

                function Js(e, t) {
                    var r = en(e, t.line);
                    if (!r || r.hidden) return null;
                    var n = Ze(e.doc, t.line),
                        i = Zr(r, n, t.line),
                        o = de(n, e.doc.direction),
                        l = "left";
                    o && (l = he(o, t.ch) % 2 ? "right" : "left");
                    var s = ln(i.map, t.ch, l);
                    return s.offset = "right" == s.collapse ? s.end : s.start, s
                }

                function ea(e) {
                    for (var t = e; t; t = t.parentNode)
                        if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                    return !1
                }

                function ta(e, t) {
                    return t && (e.bad = !0), e
                }

                function ra(e, t, r, n, i) {
                    var o = "",
                        l = !1,
                        s = e.doc.lineSeparator(),
                        a = !1;

                    function u(e) {
                        return function(t) {
                            return t.id == e
                        }
                    }

                    function c() {
                        l && (o += s, a && (o += s), l = a = !1)
                    }

                    function h(e) {
                        e && (c(), o += e)
                    }

                    function f(t) {
                        if (1 == t.nodeType) {
                            var r = t.getAttribute("cm-text");
                            if (r) return void h(r);
                            var o, d = t.getAttribute("cm-marker");
                            if (d) {
                                var p = e.findMarks(ot(n, 0), ot(i + 1, 0), u(+d));
                                return void(p.length && (o = p[0].find(0)) && h(Qe(e.doc, o.from, o.to).join(s)))
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            var g = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                            if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                            g && c();
                            for (var v = 0; v < t.childNodes.length; v++) f(t.childNodes[v]);
                            /^(pre|p)$/i.test(t.nodeName) && (a = !0), g && (l = !0)
                        } else 3 == t.nodeType && h(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
                    }
                    for (; f(t), t != r;) t = t.nextSibling, a = !1;
                    return o
                }

                function na(e, t, r) {
                    var n;
                    if (t == e.display.lineDiv) {
                        if (!(n = e.display.lineDiv.childNodes[r])) return ta(e.clipPos(ot(e.display.viewTo - 1)), !0);
                        t = null, r = 0
                    } else
                        for (n = t;; n = n.parentNode) {
                            if (!n || n == e.display.lineDiv) return null;
                            if (n.parentNode && n.parentNode == e.display.lineDiv) break
                        }
                    for (var i = 0; i < e.display.view.length; i++) {
                        var o = e.display.view[i];
                        if (o.node == n) return ia(o, t, r)
                    }
                }

                function ia(e, t, r) {
                    var n = e.text.firstChild,
                        i = !1;
                    if (!t || !W(n, t)) return ta(ot(tt(e.line), 0), !0);
                    if (t == n && (i = !0, t = n.childNodes[r], r = 0, !t)) {
                        var o = e.rest ? q(e.rest) : e.line;
                        return ta(ot(tt(o), o.text.length), i)
                    }
                    var l = 3 == t.nodeType ? t : null,
                        s = t;
                    for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, r && (r = l.nodeValue.length)); s.parentNode != n;) s = s.parentNode;
                    var a = e.measure,
                        u = a.maps;

                    function c(t, r, n) {
                        for (var i = -1; i < (u ? u.length : 0); i++)
                            for (var o = i < 0 ? a.map : u[i], l = 0; l < o.length; l += 3) {
                                var s = o[l + 2];
                                if (s == t || s == r) {
                                    var c = tt(i < 0 ? e.line : e.rest[i]),
                                        h = o[l] + n;
                                    return (n < 0 || s != t) && (h = o[l + (n ? 1 : 0)]), ot(c, h)
                                }
                            }
                    }
                    var h = c(l, s, r);
                    if (h) return ta(h, i);
                    for (var f = s.nextSibling, d = l ? l.nodeValue.length - r : 0; f; f = f.nextSibling) {
                        if (h = c(f, f.firstChild, 0)) return ta(ot(h.line, h.ch - d), i);
                        d += f.textContent.length
                    }
                    for (var p = s.previousSibling, g = r; p; p = p.previousSibling) {
                        if (h = c(p, p.firstChild, -1)) return ta(ot(h.line, h.ch + g), i);
                        g += p.textContent.length
                    }
                }
                Qs.prototype.init = function(e) {
                    var t = this,
                        r = this,
                        n = r.cm,
                        i = r.div = e.lineDiv;

                    function o(e) {
                        for (var t = e.target; t; t = t.parentNode) {
                            if (t == i) return !0;
                            if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break
                        }
                        return !1
                    }

                    function l(e) {
                        if (o(e) && !be(n, e)) {
                            if (n.somethingSelected()) Us({
                                lineWise: !1,
                                text: n.getSelections()
                            }), "cut" == e.type && n.replaceSelection("", null, "cut");
                            else {
                                if (!n.options.lineWiseCopyCut) return;
                                var t = Xs(n);
                                Us({
                                    lineWise: !0,
                                    text: t.text
                                }), "cut" == e.type && n.operation((function() {
                                    n.setSelections(t.ranges, 0, K), n.replaceSelection("", null, "cut")
                                }))
                            }
                            if (e.clipboardData) {
                                e.clipboardData.clearData();
                                var l = Gs.text.join("\n");
                                if (e.clipboardData.setData("Text", l), e.clipboardData.getData("Text") == l) return void e.preventDefault()
                            }
                            var s = _s(),
                                a = s.firstChild;
                            n.display.lineSpace.insertBefore(s, n.display.lineSpace.firstChild), a.value = Gs.text.join("\n");
                            var u = H();
                            P(a), setTimeout((function() {
                                n.display.lineSpace.removeChild(s), u.focus(), u == i && r.showPrimarySelection()
                            }), 50)
                        }
                    }
                    i.contentEditable = !0, Ys(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize), ge(i, "paste", (function(e) {
                        !o(e) || be(n, e) || Ks(e, n) || s <= 11 && setTimeout(Wi(n, (function() {
                            return t.updateFromDOM()
                        })), 20)
                    })), ge(i, "compositionstart", (function(e) {
                        t.composing = {
                            data: e.data,
                            done: !1
                        }
                    })), ge(i, "compositionupdate", (function(e) {
                        t.composing || (t.composing = {
                            data: e.data,
                            done: !1
                        })
                    })), ge(i, "compositionend", (function(e) {
                        t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
                    })), ge(i, "touchstart", (function() {
                        return r.forceCompositionEnd()
                    })), ge(i, "input", (function() {
                        t.composing || t.readFromDOMSoon()
                    })), ge(i, "copy", l), ge(i, "cut", l)
                }, Qs.prototype.screenReaderLabelChanged = function(e) {
                    e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label")
                }, Qs.prototype.prepareSelection = function() {
                    var e = Kn(this.cm, !1);
                    return e.focus = H() == this.div, e
                }, Qs.prototype.showSelection = function(e, t) {
                    e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
                }, Qs.prototype.getSelection = function() {
                    return this.cm.display.wrapper.ownerDocument.getSelection()
                }, Qs.prototype.showPrimarySelection = function() {
                    var e = this.getSelection(),
                        t = this.cm,
                        n = t.doc.sel.primary(),
                        i = n.from(),
                        o = n.to();
                    if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
                    else {
                        var l = na(t, e.anchorNode, e.anchorOffset),
                            s = na(t, e.focusNode, e.focusOffset);
                        if (!l || l.bad || !s || s.bad || 0 != lt(ct(l, s), i) || 0 != lt(ut(l, s), o)) {
                            var a = t.display.view,
                                u = i.line >= t.display.viewFrom && Js(t, i) || {
                                    node: a[0].measure.map[2],
                                    offset: 0
                                },
                                c = o.line < t.display.viewTo && Js(t, o);
                            if (!c) {
                                var h = a[a.length - 1].measure,
                                    f = h.maps ? h.maps[h.maps.length - 1] : h.map;
                                c = {
                                    node: f[f.length - 1],
                                    offset: f[f.length - 2] - f[f.length - 3]
                                }
                            }
                            if (u && c) {
                                var d, p = e.rangeCount && e.getRangeAt(0);
                                try {
                                    d = T(u.node, u.offset, c.offset, c.node)
                                } catch (g) {}
                                d && (!r && t.state.focused ? (e.collapse(u.node, u.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d))) : (e.removeAllRanges(), e.addRange(d)), p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()), this.rememberSelection()
                            } else e.removeAllRanges()
                        }
                    }
                }, Qs.prototype.startGracePeriod = function() {
                    var e = this;
                    clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout((function() {
                        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation((function() {
                            return e.cm.curOp.selectionChanged = !0
                        }))
                    }), 20)
                }, Qs.prototype.showMultipleSelections = function(e) {
                    O(this.cm.display.cursorDiv, e.cursors), O(this.cm.display.selectionDiv, e.selection)
                }, Qs.prototype.rememberSelection = function() {
                    var e = this.getSelection();
                    this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
                }, Qs.prototype.selectionInEditor = function() {
                    var e = this.getSelection();
                    if (!e.rangeCount) return !1;
                    var t = e.getRangeAt(0).commonAncestorContainer;
                    return W(this.div, t)
                }, Qs.prototype.focus = function() {
                    "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && H() == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus())
                }, Qs.prototype.blur = function() {
                    this.div.blur()
                }, Qs.prototype.getField = function() {
                    return this.div
                }, Qs.prototype.supportsTouch = function() {
                    return !0
                }, Qs.prototype.receivedFocus = function() {
                    var e = this,
                        t = this;

                    function r() {
                        t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, r))
                    }
                    this.selectionInEditor() ? setTimeout((function() {
                        return e.pollSelection()
                    }), 20) : Di(this.cm, (function() {
                        return t.cm.curOp.selectionChanged = !0
                    })), this.polling.set(this.cm.options.pollInterval, r)
                }, Qs.prototype.selectionChanged = function() {
                    var e = this.getSelection();
                    return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
                }, Qs.prototype.pollSelection = function() {
                    if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                        var e = this.getSelection(),
                            t = this.cm;
                        if (m && c && this.cm.display.gutterSpecs.length && ea(e.anchorNode)) return this.cm.triggerOnKeyDown({
                            type: "keydown",
                            keyCode: 8,
                            preventDefault: Math.abs
                        }), this.blur(), void this.focus();
                        if (!this.composing) {
                            this.rememberSelection();
                            var r = na(t, e.anchorNode, e.anchorOffset),
                                n = na(t, e.focusNode, e.focusOffset);
                            r && n && Di(t, (function() {
                                Uo(t.doc, so(r, n), K), (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
                            }))
                        }
                    }
                }, Qs.prototype.pollContent = function() {
                    null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                    var e, t, r, n = this.cm,
                        i = n.display,
                        o = n.doc.sel.primary(),
                        l = o.from(),
                        s = o.to();
                    if (0 == l.ch && l.line > n.firstLine() && (l = ot(l.line - 1, Ze(n.doc, l.line - 1).length)), s.ch == Ze(n.doc, s.line).text.length && s.line < n.lastLine() && (s = ot(s.line + 1, 0)), l.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
                    l.line == i.viewFrom || 0 == (e = Pn(n, l.line)) ? (t = tt(i.view[0].line), r = i.view[0].node) : (t = tt(i.view[e].line), r = i.view[e - 1].node.nextSibling);
                    var a, u, c = Pn(n, s.line);
                    if (c == i.view.length - 1 ? (a = i.viewTo - 1, u = i.lineDiv.lastChild) : (a = tt(i.view[c + 1].line) - 1, u = i.view[c + 1].node.previousSibling), !r) return !1;
                    for (var h = n.doc.splitLines(ra(n, r, u, t, a)), f = Qe(n.doc, ot(t, 0), ot(a, Ze(n.doc, a).text.length)); h.length > 1 && f.length > 1;)
                        if (q(h) == q(f)) h.pop(), f.pop(), a--;
                        else {
                            if (h[0] != f[0]) break;
                            h.shift(), f.shift(), t++
                        }
                    for (var d = 0, p = 0, g = h[0], v = f[0], m = Math.min(g.length, v.length); d < m && g.charCodeAt(d) == v.charCodeAt(d);) ++d;
                    for (var y = q(h), b = q(f), w = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0)); p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p;
                    if (1 == h.length && 1 == f.length && t == l.line)
                        for (; d && d > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) d--, p++;
                    h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");
                    var x = ot(t, d),
                        C = ot(a, f.length ? q(f).length - p : 0);
                    return h.length > 1 || h[0] || lt(x, C) ? (il(n.doc, h, x, C, "+input"), !0) : void 0
                }, Qs.prototype.ensurePolled = function() {
                    this.forceCompositionEnd()
                }, Qs.prototype.reset = function() {
                    this.forceCompositionEnd()
                }, Qs.prototype.forceCompositionEnd = function() {
                    this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
                }, Qs.prototype.readFromDOMSoon = function() {
                    var e = this;
                    null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function() {
                        if (e.readDOMTimeout = null, e.composing) {
                            if (!e.composing.done) return;
                            e.composing = null
                        }
                        e.updateFromDOM()
                    }), 80))
                }, Qs.prototype.updateFromDOM = function() {
                    var e = this;
                    !this.cm.isReadOnly() && this.pollContent() || Di(this.cm, (function() {
                        return In(e.cm)
                    }))
                }, Qs.prototype.setUneditable = function(e) {
                    e.contentEditable = "false"
                }, Qs.prototype.onKeyPress = function(e) {
                    0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Wi(this.cm, Vs)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
                }, Qs.prototype.readOnlyChanged = function(e) {
                    this.div.contentEditable = String("nocursor" != e)
                }, Qs.prototype.onContextMenu = function() {}, Qs.prototype.resetPosition = function() {}, Qs.prototype.needsContentAttribute = !0;
                var oa = function(e) {
                    this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new B, this.hasSelection = !1, this.composing = null
                };

                function la(e, t) {
                    if ((t = t ? z(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                        var r = H();
                        t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
                    }

                    function n() {
                        e.value = s.getValue()
                    }
                    var i;
                    if (e.form && (ge(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                        var o = e.form;
                        i = o.submit;
                        try {
                            var l = o.submit = function() {
                                n(), o.submit = i, o.submit(), o.submit = l
                            }
                        } catch (a) {}
                    }
                    t.finishInit = function(r) {
                        r.save = n, r.getTextArea = function() {
                            return e
                        }, r.toTextArea = function() {
                            r.toTextArea = isNaN, n(), e.parentNode.removeChild(r.getWrapperElement()), e.style.display = "", e.form && (me(e.form, "submit", n), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i))
                        }
                    }, e.style.display = "none";
                    var s = Is((function(t) {
                        return e.parentNode.insertBefore(t, e.nextSibling)
                    }), t);
                    return s
                }

                function sa(e) {
                    e.off = me, e.on = ge, e.wheelEventPixels = ro, e.Doc = Sl, e.splitLines = Fe, e.countColumn = R, e.findColumn = Y, e.isWordChar = re, e.Pass = V, e.signal = ye, e.Line = ar, e.changeEnd = ao, e.scrollbarModel = wi, e.Pos = ot, e.cmpPos = lt, e.modes = Re, e.mimeModes = Be, e.resolveMode = Ve, e.getMode = Ke, e.modeExtensions = je, e.extendMode = Xe, e.copyState = Ye, e.startState = $e, e.innerMode = _e, e.commands = Zl, e.keyMap = zl, e.keyName = Kl, e.isModifierKey = Ul, e.lookupKey = Gl, e.normalizeKeyMap = Bl, e.StringStream = qe, e.SharedTextMarker = ml, e.TextMarker = gl, e.LineWidget = hl, e.e_preventDefault = Se, e.e_stopPropagation = Le, e.e_stop = Te, e.addClass = F, e.contains = W, e.rmClass = M, e.keyNames = Fl
                }
                oa.prototype.init = function(e) {
                    var t = this,
                        r = this,
                        n = this.cm;
                    this.createField(e);
                    var i = this.textarea;

                    function o(e) {
                        if (!be(n, e)) {
                            if (n.somethingSelected()) Us({
                                lineWise: !1,
                                text: n.getSelections()
                            });
                            else {
                                if (!n.options.lineWiseCopyCut) return;
                                var t = Xs(n);
                                Us({
                                    lineWise: !0,
                                    text: t.text
                                }), "cut" == e.type ? n.setSelections(t.ranges, null, K) : (r.prevInput = "", i.value = t.text.join("\n"), P(i))
                            }
                            "cut" == e.type && (n.state.cutIncoming = +new Date)
                        }
                    }
                    e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), v && (i.style.width = "0px"), ge(i, "input", (function() {
                        l && s >= 9 && t.hasSelection && (t.hasSelection = null), r.poll()
                    })), ge(i, "paste", (function(e) {
                        be(n, e) || Ks(e, n) || (n.state.pasteIncoming = +new Date, r.fastPoll())
                    })), ge(i, "cut", o), ge(i, "copy", o), ge(e.scroller, "paste", (function(t) {
                        if (!Vr(e, t) && !be(n, t)) {
                            if (!i.dispatchEvent) return n.state.pasteIncoming = +new Date, void r.focus();
                            var o = new Event("paste");
                            o.clipboardData = t.clipboardData, i.dispatchEvent(o)
                        }
                    })), ge(e.lineSpace, "selectstart", (function(t) {
                        Vr(e, t) || Se(t)
                    })), ge(i, "compositionstart", (function() {
                        var e = n.getCursor("from");
                        r.composing && r.composing.range.clear(), r.composing = {
                            start: e,
                            range: n.markText(e, n.getCursor("to"), {
                                className: "CodeMirror-composing"
                            })
                        }
                    })), ge(i, "compositionend", (function() {
                        r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
                    }))
                }, oa.prototype.createField = function(e) {
                    this.wrapper = _s(), this.textarea = this.wrapper.firstChild
                }, oa.prototype.screenReaderLabelChanged = function(e) {
                    e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label")
                }, oa.prototype.prepareSelection = function() {
                    var e = this.cm,
                        t = e.display,
                        r = e.doc,
                        n = Kn(e);
                    if (e.options.moveInputWithCursor) {
                        var i = bn(e, r.sel.primary().head, "div"),
                            o = t.wrapper.getBoundingClientRect(),
                            l = t.lineDiv.getBoundingClientRect();
                        n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
                    }
                    return n
                }, oa.prototype.showSelection = function(e) {
                    var t = this.cm.display;
                    O(t.cursorDiv, e.cursors), O(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
                }, oa.prototype.reset = function(e) {
                    if (!this.contextMenuPending && !this.composing) {
                        var t = this.cm;
                        if (t.somethingSelected()) {
                            this.prevInput = "";
                            var r = t.getSelection();
                            this.textarea.value = r, t.state.focused && P(this.textarea), l && s >= 9 && (this.hasSelection = r)
                        } else e || (this.prevInput = this.textarea.value = "", l && s >= 9 && (this.hasSelection = null))
                    }
                }, oa.prototype.getField = function() {
                    return this.textarea
                }, oa.prototype.supportsTouch = function() {
                    return !1
                }, oa.prototype.focus = function() {
                    if ("nocursor" != this.cm.options.readOnly && (!y || H() != this.textarea)) try {
                        this.textarea.focus()
                    } catch (e) {}
                }, oa.prototype.blur = function() {
                    this.textarea.blur()
                }, oa.prototype.resetPosition = function() {
                    this.wrapper.style.top = this.wrapper.style.left = 0
                }, oa.prototype.receivedFocus = function() {
                    this.slowPoll()
                }, oa.prototype.slowPoll = function() {
                    var e = this;
                    this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function() {
                        e.poll(), e.cm.state.focused && e.slowPoll()
                    }))
                }, oa.prototype.fastPoll = function() {
                    var e = !1,
                        t = this;

                    function r() {
                        t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, r))
                    }
                    t.pollingFast = !0, t.polling.set(20, r)
                }, oa.prototype.poll = function() {
                    var e = this,
                        t = this.cm,
                        r = this.textarea,
                        n = this.prevInput;
                    if (this.contextMenuPending || !t.state.focused || Ee(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                    var i = r.value;
                    if (i == n && !t.somethingSelected()) return !1;
                    if (l && s >= 9 && this.hasSelection === i || b && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
                    if (t.doc.sel == t.display.selForContextMenu) {
                        var o = i.charCodeAt(0);
                        if (8203 != o || n || (n = "\u200b"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
                    }
                    for (var a = 0, u = Math.min(n.length, i.length); a < u && n.charCodeAt(a) == i.charCodeAt(a);) ++a;
                    return Di(t, (function() {
                        Vs(t, i.slice(a), n.length - a, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                            className: "CodeMirror-composing"
                        }))
                    })), !0
                }, oa.prototype.ensurePolled = function() {
                    this.pollingFast && this.poll() && (this.pollingFast = !1)
                }, oa.prototype.onKeyPress = function() {
                    l && s >= 9 && (this.hasSelection = null), this.fastPoll()
                }, oa.prototype.onContextMenu = function(e) {
                    var t = this,
                        r = t.cm,
                        n = r.display,
                        i = t.textarea;
                    t.contextMenuPending && t.contextMenuPending();
                    var o = En(r, e),
                        u = n.scroller.scrollTop;
                    if (o && !f) {
                        r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(o) && Wi(r, Uo)(r.doc, so(o), K);
                        var c, h = i.style.cssText,
                            d = t.wrapper.style.cssText,
                            p = t.wrapper.offsetParent.getBoundingClientRect();
                        if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (l ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", a && (c = window.scrollY), n.input.focus(), a && window.scrollTo(null, c), n.input.reset(), r.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = m, n.selForContextMenu = r.doc.sel, clearTimeout(n.detectingSelectAll), l && s >= 9 && v(), L) {
                            Te(e);
                            var g = function() {
                                me(window, "mouseup", g), setTimeout(m, 20)
                            };
                            ge(window, "mouseup", g)
                        } else setTimeout(m, 50)
                    }

                    function v() {
                        if (null != i.selectionStart) {
                            var e = r.somethingSelected(),
                                o = "\u200b" + (e ? i.value : "");
                            i.value = "\u21da", i.value = o, t.prevInput = e ? "" : "\u200b", i.selectionStart = 1, i.selectionEnd = o.length, n.selForContextMenu = r.doc.sel
                        }
                    }

                    function m() {
                        if (t.contextMenuPending == m && (t.contextMenuPending = !1, t.wrapper.style.cssText = d, i.style.cssText = h, l && s < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = u), null != i.selectionStart)) {
                            (!l || l && s < 9) && v();
                            var e = 0,
                                o = function() {
                                    n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "\u200b" == t.prevInput ? Wi(r, qo)(r) : e++ < 10 ? n.detectingSelectAll = setTimeout(o, 500) : (n.selForContextMenu = null, n.input.reset())
                                };
                            n.detectingSelectAll = setTimeout(o, 200)
                        }
                    }
                }, oa.prototype.readOnlyChanged = function(e) {
                    e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e
                }, oa.prototype.setUneditable = function() {}, oa.prototype.needsContentAttribute = !1, Fs(Is), $s(Is);
                var aa = "iter insert remove copy getEditor constructor".split(" ");
                for (var ua in Sl.prototype) Sl.prototype.hasOwnProperty(ua) && G(aa, ua) < 0 && (Is.prototype[ua] = function(e) {
                    return function() {
                        return e.apply(this.doc, arguments)
                    }
                }(Sl.prototype[ua]));
                return Ce(Sl), Is.inputStyles = {
                    textarea: oa,
                    contenteditable: Qs
                }, Is.defineMode = function(e) {
                    Is.defaults.mode || "null" == e || (Is.defaults.mode = e), Ge.apply(this, arguments)
                }, Is.defineMIME = Ue, Is.defineMode("null", (function() {
                    return {
                        token: function(e) {
                            return e.skipToEnd()
                        }
                    }
                })), Is.defineMIME("text/plain", "null"), Is.defineExtension = function(e, t) {
                    Is.prototype[e] = t
                }, Is.defineDocExtension = function(e, t) {
                    Sl.prototype[e] = t
                }, Is.fromTextArea = la, sa(Is), Is.version = "5.65.5", Is
            }()
        }
    }
]);