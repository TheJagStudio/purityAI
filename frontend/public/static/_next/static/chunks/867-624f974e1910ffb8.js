(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [867], {
        82329: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = r(85893),
                n = r(79547),
                a = r.n(n);
            r(67294);

            function i(e) {
                var t = e.highlights;
                return (0, o.jsx)(a(), {
                    id: "13734f156f215e2f",
                    dynamic: [t.text, t.background, t.string, t.comment, t.variable, t.variable2 || t.variable, t.variable3 || t.variable, t.number, t.keyword, t.property, t.definition, t.meta, t.operator, t.attribute, t.tag, t.builtin],
                    children: ".CodeMirror__container .CodeMirror{color:".concat(t.text, "!important;background-color:").concat(t.background, "!important}.cm-string,.cm-string-2{color:").concat(t.string, "!important}.cm-comment{color:").concat(t.comment, "!important}.cm-variable{color:").concat(t.variable, "!important}.cm-variable-2{color:").concat(t.variable2 || t.variable, "!important}.cm-variable-3{color:").concat(t.variable3 || t.variable, "!important}.cm-number{color:").concat(t.number, "!important}.cm-keyword{color:").concat(t.keyword, "!important}.cm-property{color:").concat(t.property, "!important}.cm-def{color:").concat(t.definition, "!important}.cm-meta{color:").concat(t.meta, "!important}.cm-operator{color:").concat(t.operator, "!important}.cm-attribute{color:").concat(t.attribute, "!important}.cm-tag{color:").concat(t.tag, "!important}.cm-builtin{color:").concat(t.builtin, "!important}.cm-s-dracula .CodeMirror-cursor{border-left:solid 2px#159588!important}.cm-s-vscode .CodeMirror-cursor{border-left:solid 2px#bebebe!important}.cm-s-solarized{-webkit-box-shadow:none!important;-moz-box-shadow:none!important;box-shadow:none!important}.cm-s-solarized.cm-s-light{text-shadow:#eee8d5 0 1px!important}.cm-s-solarized.cm-s-light .CodeMirror-linenumber,.cm-s-solarized.cm-s-light .CodeMirror-linenumbers{background-color:#fdf6e3!important}.cm-s-solarized.cm-s-dark .CodeMirror-linenumber,.cm-s-solarized.cm-s-dark .CodeMirror-linenumbers{background-color:#002b36!important}")
                })
            }
        },
        96262: function(e, t, r) {
            "use strict";
            r.d(t, {
                aA: function() {
                    return d
                },
                wy: function() {
                    return f
                }
            });
            var o = r(19613),
                n = r.n(o),
                a = r(11987),
                i = r.n(a),
                c = r(94959),
                s = new(n())({
                    types: {
                        bool: function(e) {
                            if (null != e) return "false" !== e && Boolean(e)
                        },
                        int: function(e) {
                            var t = parseInt(e);
                            if (!isNaN(t)) return t
                        },
                        intArray: function(e) {
                            if (null != e) return e.split(",").filter((function(e) {
                                return !isNaN(e)
                            })).map((function(e) {
                                return parseInt(e)
                            }))
                        },
                        parse: function(e) {
                            try {
                                return JSON.parse(e)
                            } catch (t) {
                                return e
                            }
                        },
                        decode: function(e) {
                            if (null != e) try {
                                return decodeURIComponent(e)
                            } catch (t) {
                                return e
                            }
                        },
                        encode: function(e) {
                            if (null != e) try {
                                var t = encodeURIComponent(e);
                                return t.length > 4e3 ? encodeURIComponent(e.slice(0, 2e3)) : t
                            } catch (r) {
                                return e
                            }
                        }
                    }
                }),
                l = [{
                    field: "bg:backgroundColor"
                }, {
                    field: "t:theme"
                }, {
                    field: "wt:windowTheme"
                }, {
                    field: "l:language"
                }, {
                    field: "width"
                }, {
                    field: "ds:dropShadow",
                    type: "bool"
                }, {
                    field: "dsyoff:dropShadowOffsetY"
                }, {
                    field: "dsblur:dropShadowBlurRadius"
                }, {
                    field: "wc:windowControls",
                    type: "bool"
                }, {
                    field: "wa:widthAdjustment",
                    type: "bool"
                }, {
                    field: "pv:paddingVertical"
                }, {
                    field: "ph:paddingHorizontal"
                }, {
                    field: "ln:lineNumbers",
                    type: "bool"
                }, {
                    field: "fl:firstLineNumber",
                    type: "int"
                }, {
                    field: "fm:fontFamily"
                }, {
                    field: "fs:fontSize"
                }, {
                    field: "lh:lineHeight"
                }, {
                    field: "si:squaredImage",
                    type: "bool"
                }, {
                    field: "es:exportSize"
                }, {
                    field: "wm:watermark",
                    type: "bool"
                }, {
                    field: "sl:selectedLines",
                    type: "intArray"
                }, {
                    field: "copy",
                    type: "bool"
                }, {
                    field: "readonly",
                    type: "bool"
                }, {
                    field: "id"
                }, {
                    field: "highlights",
                    type: "parse"
                }, {
                    field: "code",
                    type: "decode"
                }, {
                    field: "tb:titleBar",
                    type: "decode"
                }, {
                    field: "state"
                }],
                p = [{
                    field: "backgroundColor:bg"
                }, {
                    field: "theme:t"
                }, {
                    field: "windowTheme:wt"
                }, {
                    field: "language:l"
                }, {
                    field: "width"
                }, {
                    field: "dropShadow:ds",
                    type: "bool"
                }, {
                    field: "dropShadowOffsetY:dsyoff"
                }, {
                    field: "dropShadowBlurRadius:dsblur"
                }, {
                    field: "windowControls:wc",
                    type: "bool"
                }, {
                    field: "widthAdjustment:wa",
                    type: "bool"
                }, {
                    field: "paddingVertical:pv"
                }, {
                    field: "paddingHorizontal:ph"
                }, {
                    field: "lineNumbers:ln",
                    type: "bool"
                }, {
                    field: "firstLineNumber:fl",
                    type: "int"
                }, {
                    field: "fontFamily:fm"
                }, {
                    field: "fontSize:fs"
                }, {
                    field: "lineHeight:lh"
                }, {
                    field: "squaredImage:si",
                    type: "bool"
                }, {
                    field: "exportSize:es"
                }, {
                    field: "watermark:wm",
                    type: "bool"
                }, {
                    field: "code",
                    type: "encode"
                }, {
                    field: "titleBar:tb",
                    type: "encode"
                }, {
                    field: "state"
                }],
                u = function(e) {
                    if (e.state) return function(e) {
                        var t;
                        return t = atob(e), JSON.parse(decodeURIComponent(t))
                    }(e.state);
                    var t = s.map(l, e);
                    return Object.keys(t).forEach((function(e) {
                        "" === t[e] && (t[e] = void 0)
                    })), t
                };
            var f = function(e) {
                    var t = e.asPath,
                        r = function(e) {
                            try {
                                return i().parse(e, !0)
                            } catch (t) {
                                return i().parse(encodeURI(e), !0)
                            }
                        }(void 0 === t ? "" : t),
                        o = r.query,
                        n = r.pathname,
                        a = function(e) {
                            var t = u(e);
                            return Object.keys(t).length ? t : {}
                        }(o),
                        s = (0, c.Xv)(n.replace(/\/$/, "").split("/").pop());
                    return {
                        parameter: s.length >= 19 && s.indexOf(".") < 0 ? s : null,
                        queryState: a
                    }
                },
                d = function(e, t) {
                    var r = s.map(p, t);
                    e.replace({
                        pathname: e.pathname
                    }, {
                        pathname: e.pathname,
                        query: r
                    }, {
                        shallow: !0,
                        scroll: !1
                    })
                }
        },
        83867: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(34051),
                n = r.n(o),
                a = r(85893),
                i = r(79547),
                c = r.n(i),
                s = r(67294),
                l = r(9008),
                p = r.n(l),
                u = r(11163),
                f = r(17896),
                d = r(7533),
                h = r(25026),
                m = r(91802),
                b = r(82329),
                y = r(58299),
                v = r(96262);

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t, r, o, n, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (l) {
                    return void r(l)
                }
                c.done ? t(s) : Promise.resolve(s).then(o, n)
            }

            function x(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function j(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function O(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), o.forEach((function(t) {
                        O(e, t, r[t])
                    }))
                }
                return e
            }

            function k(e, t) {
                return !t || "object" !== U(t) && "function" !== typeof t ? g(e) : t
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var U = function(e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function z(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, o = C(e);
                    if (t) {
                        var n = C(this).constructor;
                        r = Reflect.construct(o, arguments, n)
                    } else r = o.apply(this, arguments);
                    return k(this, r)
                }
            }
            var I = function(e) {
                return (0, a.jsxs)(s.Fragment, {
                    children: [(0, a.jsx)(p(), {
                        children: (0, a.jsx)("title", {
                            className: "jsx-665d1a0250546110",
                            children: "Carbon Embeds"
                        })
                    }), (0, a.jsx)(d.NR, {}), (0, a.jsx)(d.wH, {
                        theme: e.theme
                    }), (0, a.jsx)(d.ap, {}), (0, a.jsx)(h.Z, {}), e.children, d.tO.includes(e.theme) && (0, a.jsx)(b.Z, {
                        highlights: y.a5[e.theme].highlights
                    }), (0, a.jsx)(c(), {
                        id: "665d1a0250546110",
                        children: "html,body{margin:0;background:transparent;min-height:0}"
                    })]
                })
            };

            function _() {
                window.dataLayer.push(arguments)
            }
            var N = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && S(e, t)
                }(l, e);
                var t, r, o, i = z(l);

                function l() {
                    var e;
                    return x(this, l), O(g(e = i.apply(this, arguments)), "state", R({}, y.Z, {
                        code: y.Zm,
                        mounted: !1,
                        readOnly: !0
                    })), O(g(e), "snippet", {}), O(g(e), "ref", s.createRef()), O(g(e), "postMessage", (function() {
                        setTimeout((function() {
                            return window.top.postMessage(JSON.stringify({
                                src: window.location.toString(),
                                context: "iframe.resize",
                                height: e.ref.current.offsetHeight
                            }), "*")
                        }), 0)
                    })), O(g(e), "updateCode", (function(t) {
                        e.setState({
                            code: t
                        }, e.postMessage), window.top.postMessage({
                            id: e.state.id ? "carbon:".concat(e.state.id) : "carbon",
                            code: t
                        }, "*")
                    })), e
                }
                return t = l, r = [{
                    key: "componentDidMount",
                    value: function() {
                        var e, t = this;
                        return (e = n().mark((function e() {
                            var r;
                            return n().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = (0, v.wy)(t.props.router).queryState, t.setState(R({}, t.props.snippet, r, {
                                            copyable: !1 !== r.copy,
                                            readOnly: !1 !== r.readonly,
                                            mounted: !0
                                        }), t.postMessage);
                                        try {
                                            window.dataLayer = window.dataLayer || [], _("js", new Date), _("config", y.vt), _("event", "iframe:mount", {
                                                event_category: "Embed",
                                                event_label: document.referrer,
                                                non_interaction: !0
                                            })
                                        } catch (o) {
                                            console.error(o)
                                        }
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(o, n) {
                                var a = e.apply(t, r);

                                function i(e) {
                                    w(a, o, n, i, c, "next", e)
                                }

                                function c(e) {
                                    w(a, o, n, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        })()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, a.jsxs)(I, {
                            theme: this.state.theme,
                            children: [(0, a.jsx)("div", {
                                hidden: !this.state.mounted,
                                className: "jsx-db172f055ec7c404",
                                children: (0, a.jsx)(m.Z, {
                                    ref: this.ref,
                                    config: this.state,
                                    readOnly: this.state.readOnly,
                                    copyable: this.state.copyable,
                                    onChange: this.updateCode,
                                    children: this.state.code
                                }, this.state.mounted)
                            }), (0, a.jsx)(c(), {
                                id: "db172f055ec7c404",
                                children: ".eliminateOnRender{display:none}"
                            })]
                        })
                    }
                }], r && j(t.prototype, r), o && j(t, o), l
            }(s.Component);
            O(N, "contextType", f.Z), t.default = (0, u.withRouter)(N)
        },
        11987: function(e, t, r) {
            ! function() {
                var t = {
                        477: function(e) {
                            "use strict";
                            e.exports = r(17673)
                        }
                    },
                    o = {};

                function n(e) {
                    var r = o[e];
                    if (void 0 !== r) return r.exports;
                    var a = o[e] = {
                            exports: {}
                        },
                        i = !0;
                    try {
                        t[e](a, a.exports, n), i = !1
                    } finally {
                        i && delete o[e]
                    }
                    return a.exports
                }
                n.ab = "//";
                var a = {};
                ! function() {
                    var e, t = a,
                        r = (e = n(477)) && "object" == typeof e && "default" in e ? e.default : e,
                        o = /https?|ftp|gopher|file/;

                    function i(e) {
                        "string" == typeof e && (e = g(e));
                        var t = function(e, t, r) {
                            var o = e.auth,
                                n = e.hostname,
                                a = e.protocol || "",
                                i = e.pathname || "",
                                c = e.hash || "",
                                s = e.query || "",
                                l = !1;
                            o = o ? encodeURIComponent(o).replace(/%3A/i, ":") + "@" : "", e.host ? l = o + e.host : n && (l = o + (~n.indexOf(":") ? "[" + n + "]" : n), e.port && (l += ":" + e.port)), s && "object" == typeof s && (s = t.encode(s));
                            var p = e.search || s && "?" + s || "";
                            return a && ":" !== a.substr(-1) && (a += ":"), e.slashes || (!a || r.test(a)) && !1 !== l ? (l = "//" + (l || ""), i && "/" !== i[0] && (i = "/" + i)) : l || (l = ""), c && "#" !== c[0] && (c = "#" + c), p && "?" !== p[0] && (p = "?" + p), {
                                protocol: a,
                                host: l,
                                pathname: i = i.replace(/[?#]/g, encodeURIComponent),
                                search: p = p.replace("#", "%23"),
                                hash: c
                            }
                        }(e, r, o);
                        return "" + t.protocol + t.host + t.pathname + t.search + t.hash
                    }
                    var c = "http://",
                        s = "w.w",
                        l = c + s,
                        p = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        u = /https?|ftp|gopher|file/;

                    function f(e, t) {
                        var r = "string" == typeof e ? g(e) : e;
                        e = "object" == typeof e ? i(e) : e;
                        var o = g(t),
                            n = "";
                        r.protocol && !r.slashes && (n = r.protocol, e = e.replace(r.protocol, ""), n += "/" === t[0] || "/" === e[0] ? "/" : ""), n && o.protocol && (n = "", o.slashes || (n = o.protocol, t = t.replace(o.protocol, "")));
                        var a = e.match(p);
                        a && !o.protocol && (e = e.substr((n = a[1] + (a[2] || "")).length), /^\/\/[^/]/.test(t) && (n = n.slice(0, -1)));
                        var s = new URL(e, l + "/"),
                            f = new URL(t, s).toString().replace(l, ""),
                            d = o.protocol || r.protocol;
                        return d += r.slashes || o.slashes ? "//" : "", !n && d ? f = f.replace(c, d) : n && (f = f.replace(c, "")), u.test(f) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== f.slice(-1) || (f = f.slice(0, -1)), n && (f = n + ("/" === f[0] ? f.substr(1) : f)), f
                    }

                    function d() {}
                    d.prototype.parse = g, d.prototype.format = i, d.prototype.resolve = f, d.prototype.resolveObject = f;
                    var h = /^https?|ftp|gopher|file/,
                        m = /^(.*?)([#?].*)/,
                        b = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        y = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        v = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

                    function g(e, t, o) {
                        if (void 0 === t && (t = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof d) return e;
                        var n = (e = e.trim()).match(m);
                        e = n ? n[1].replace(/\\/g, "/") + n[2] : e.replace(/\\/g, "/"), v.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var a = !/(^javascript)/.test(e) && e.match(b),
                            c = y.test(e),
                            p = "";
                        a && (h.test(a[1]) || (p = a[1].toLowerCase(), e = "" + a[2] + a[3]), a[2] || (c = !1, h.test(a[1]) ? (p = a[1], e = "" + a[3]) : e = "//" + a[3]), 3 !== a[2].length && 1 !== a[2].length || (p = a[1], e = "/" + a[3]));
                        var u, f = (n ? n[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            g = f && f[1],
                            w = new d,
                            x = "",
                            j = "";
                        try {
                            u = new URL(e)
                        } catch (t) {
                            x = t, p || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (j = "/", e = e.substr(1));
                            try {
                                u = new URL(e, l)
                            } catch (e) {
                                return w.protocol = p, w.href = p, w
                            }
                        }
                        w.slashes = c && !j, w.host = u.host === s ? "" : u.host, w.hostname = u.hostname === s ? "" : u.hostname.replace(/(\[|\])/g, ""), w.protocol = x ? p || null : u.protocol, w.search = u.search.replace(/\\/g, "%5C"), w.hash = u.hash.replace(/\\/g, "%5C");
                        var O = e.split("#");
                        !w.search && ~O[0].indexOf("?") && (w.search = "?"), w.hash || "" !== O[1] || (w.hash = "#"), w.query = t ? r.decode(u.search.substr(1)) : w.search.substr(1), w.pathname = j + (a ? function(e) {
                            return e.replace(/['^|`]/g, (function(e) {
                                return "%" + e.charCodeAt().toString(16).toUpperCase()
                            })).replace(/((?:%[0-9A-F]{2})+)/g, (function(e, t) {
                                try {
                                    return decodeURIComponent(t).split("").map((function(e) {
                                        var t = e.charCodeAt();
                                        return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                                    })).join("")
                                } catch (e) {
                                    return t
                                }
                            }))
                        }(u.pathname) : u.pathname), "about:" === w.protocol && "blank" === w.pathname && (w.protocol = "", w.pathname = ""), x && "/" !== e[0] && (w.pathname = w.pathname.substr(1)), p && !h.test(p) && "/" !== e.slice(-1) && "/" === w.pathname && (w.pathname = ""), w.path = w.pathname + w.search, w.auth = [u.username, u.password].map(decodeURIComponent).filter(Boolean).join(":"), w.port = u.port, g && !w.host.endsWith(g) && (w.host += g, w.port = g.slice(1)), w.href = j ? "" + w.pathname + w.search + w.hash : i(w);
                        var C = /^(file)/.test(w.href) ? ["host", "hostname"] : [];
                        return Object.keys(w).forEach((function(e) {
                            ~C.indexOf(e) || (w[e] = w[e] || null)
                        })), w
                    }
                    t.parse = g, t.format = i, t.resolve = f, t.resolveObject = function(e, t) {
                        return g(f(e, t))
                    }, t.Url = d
                }(), e.exports = a
            }()
        },
        62587: function(e) {
            "use strict";

            function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.exports = function(e, r, o, n) {
                r = r || "&", o = o || "=";
                var a = {};
                if ("string" !== typeof e || 0 === e.length) return a;
                var i = /\+/g;
                e = e.split(r);
                var c = 1e3;
                n && "number" === typeof n.maxKeys && (c = n.maxKeys);
                var s = e.length;
                c > 0 && s > c && (s = c);
                for (var l = 0; l < s; ++l) {
                    var p, u, f, d, h = e[l].replace(i, "%20"),
                        m = h.indexOf(o);
                    m >= 0 ? (p = h.substr(0, m), u = h.substr(m + 1)) : (p = h, u = ""), f = decodeURIComponent(p), d = decodeURIComponent(u), t(a, f) ? Array.isArray(a[f]) ? a[f].push(d) : a[f] = [a[f], d] : a[f] = d
                }
                return a
            }
        },
        12361: function(e) {
            "use strict";
            var t = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function(e, r, o, n) {
                return r = r || "&", o = o || "=", null === e && (e = void 0), "object" === typeof e ? Object.keys(e).map((function(n) {
                    var a = encodeURIComponent(t(n)) + o;
                    return Array.isArray(e[n]) ? e[n].map((function(e) {
                        return a + encodeURIComponent(t(e))
                    })).join(r) : a + encodeURIComponent(t(e[n]))
                })).join(r) : n ? encodeURIComponent(t(n)) + o + encodeURIComponent(t(e)) : ""
            }
        },
        17673: function(e, t, r) {
            "use strict";
            t.decode = t.parse = r(62587), t.encode = t.stringify = r(12361)
        }
    }
]);