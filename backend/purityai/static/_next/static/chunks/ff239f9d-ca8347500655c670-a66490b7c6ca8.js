"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [834], {
        78481: function(t, e, n) {
            var i = n(64786);
            (function() {
                var t, e = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                };
                var r = function(t) {
                    t = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof n.g && n.g, t];
                    for (var e = 0; e < t.length; ++e) {
                        var i = t[e];
                        if (i && i.Math == Math) return i
                    }
                    return globalThis
                }(this);

                function o(t) {
                    var e = 0;
                    return function() {
                        return e < t.length ? {
                            done: !1,
                            value: t[e++]
                        } : {
                            done: !0
                        }
                    }
                }

                function a(t) {
                    var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                    return e ? e.call(t) : {
                        next: o(t)
                    }
                }! function(t, n) {
                    if (n) {
                        var i = r;
                        t = t.split(".");
                        for (var o = 0; o < t.length - 1; o++) {
                            var a = t[o];
                            a in i || (i[a] = {}), i = i[a]
                        }(n = n(o = i[t = t[t.length - 1]])) != o && null != n && e(i, t, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                }("Promise", (function(t) {
                    function e(t) {
                        this.b = 0, this.c = void 0, this.a = [];
                        var e = this.f();
                        try {
                            t(e.resolve, e.reject)
                        } catch (n) {
                            e.reject(n)
                        }
                    }

                    function n() {
                        this.a = null
                    }

                    function i(t) {
                        return t instanceof e ? t : new e((function(e) {
                            e(t)
                        }))
                    }
                    if (t) return t;
                    n.prototype.b = function(t) {
                        if (null == this.a) {
                            this.a = [];
                            var e = this;
                            this.c((function() {
                                e.g()
                            }))
                        }
                        this.a.push(t)
                    };
                    var o = r.setTimeout;
                    n.prototype.c = function(t) {
                        o(t, 0)
                    }, n.prototype.g = function() {
                        for (; this.a && this.a.length;) {
                            var t = this.a;
                            this.a = [];
                            for (var e = 0; e < t.length; ++e) {
                                var n = t[e];
                                t[e] = null;
                                try {
                                    n()
                                } catch (i) {
                                    this.f(i)
                                }
                            }
                        }
                        this.a = null
                    }, n.prototype.f = function(t) {
                        this.c((function() {
                            throw t
                        }))
                    }, e.prototype.f = function() {
                        function t(t) {
                            return function(i) {
                                n || (n = !0, t.call(e, i))
                            }
                        }
                        var e = this,
                            n = !1;
                        return {
                            resolve: t(this.m),
                            reject: t(this.g)
                        }
                    }, e.prototype.m = function(t) {
                        if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof e) this.s(t);
                        else {
                            t: switch (typeof t) {
                                case "object":
                                    var n = null != t;
                                    break t;
                                case "function":
                                    n = !0;
                                    break t;
                                default:
                                    n = !1
                            }
                            n ? this.v(t) : this.h(t)
                        }
                    }, e.prototype.v = function(t) {
                        var e = void 0;
                        try {
                            e = t.then
                        } catch (n) {
                            return void this.g(n)
                        }
                        "function" == typeof e ? this.u(e, t) : this.h(t)
                    }, e.prototype.g = function(t) {
                        this.i(2, t)
                    }, e.prototype.h = function(t) {
                        this.i(1, t)
                    }, e.prototype.i = function(t, e) {
                        if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                        this.b = t, this.c = e, this.l()
                    }, e.prototype.l = function() {
                        if (null != this.a) {
                            for (var t = 0; t < this.a.length; ++t) s.b(this.a[t]);
                            this.a = null
                        }
                    };
                    var s = new n;
                    return e.prototype.s = function(t) {
                        var e = this.f();
                        t.Ra(e.resolve, e.reject)
                    }, e.prototype.u = function(t, e) {
                        var n = this.f();
                        try {
                            t.call(e, n.resolve, n.reject)
                        } catch (i) {
                            n.reject(i)
                        }
                    }, e.prototype.then = function(t, n) {
                        function i(t, e) {
                            return "function" == typeof t ? function(e) {
                                try {
                                    r(t(e))
                                } catch (n) {
                                    o(n)
                                }
                            } : e
                        }
                        var r, o, a = new e((function(t, e) {
                            r = t, o = e
                        }));
                        return this.Ra(i(t, r), i(n, o)), a
                    }, e.prototype.catch = function(t) {
                        return this.then(void 0, t)
                    }, e.prototype.Ra = function(t, e) {
                        function n() {
                            switch (i.b) {
                                case 1:
                                    t(i.c);
                                    break;
                                case 2:
                                    e(i.c);
                                    break;
                                default:
                                    throw Error("Unexpected state: " + i.b)
                            }
                        }
                        var i = this;
                        null == this.a ? s.b(n) : this.a.push(n)
                    }, e.resolve = i, e.reject = function(t) {
                        return new e((function(e, n) {
                            n(t)
                        }))
                    }, e.race = function(t) {
                        return new e((function(e, n) {
                            for (var r = a(t), o = r.next(); !o.done; o = r.next()) i(o.value).Ra(e, n)
                        }))
                    }, e.all = function(t) {
                        var n = a(t),
                            r = n.next();
                        return r.done ? i([]) : new e((function(t, e) {
                            function o(e) {
                                return function(n) {
                                    a[e] = n, 0 == --s && t(a)
                                }
                            }
                            var a = [],
                                s = 0;
                            do {
                                a.push(void 0), s++, i(r.value).Ra(o(a.length - 1), e), r = n.next()
                            } while (!r.done)
                        }))
                    }, e
                }));
                var s = s || {},
                    u = this || self,
                    c = /^[\w+/_-]+[=]{0,2}$/,
                    h = null;

                function f(t) {
                    return (t = t.querySelector && t.querySelector("script[nonce]")) && (t = t.nonce || t.getAttribute("nonce")) && c.test(t) ? t : ""
                }

                function l() {}

                function d(t) {
                    var e = typeof t;
                    return "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null"
                }

                function p(t) {
                    var e = d(t);
                    return "array" == e || "object" == e && "number" == typeof t.length
                }

                function v(t) {
                    return "function" == d(t)
                }

                function m(t) {
                    var e = typeof t;
                    return "object" == e && null != t || "function" == e
                }

                function g(t) {
                    return Object.prototype.hasOwnProperty.call(t, b) && t[b] || (t[b] = ++y)
                }
                var b = "closure_uid_" + (1e9 * Math.random() >>> 0),
                    y = 0;

                function w(t, e, n) {
                    return t.call.apply(t.bind, arguments)
                }

                function I(t, e, n) {
                    if (!t) throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(n, i), t.apply(e, n)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function T(t, e, n) {
                    return (T = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w : I).apply(null, arguments)
                }

                function E(t, e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var e = n.slice();
                        return e.push.apply(e, arguments), t.apply(this, e)
                    }
                }
                var A = Date.now;

                function k(t, e) {
                    function n() {}
                    n.prototype = e.prototype, t.bb = e.prototype, t.prototype = new n, t.prototype.constructor = t
                }

                function S(t) {
                    return t
                }

                function N(t, e, n) {
                    this.code = C + t, this.message = e || R[t] || "", this.a = n || null
                }

                function _(t) {
                    var e = t && t.code;
                    return e ? new N(e.substring(C.length), t.message, t.serverResponse) : null
                }
                k(N, Error), N.prototype.w = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    return this.a && (t.serverResponse = this.a), t
                }, N.prototype.toJSON = function() {
                    return this.w()
                };
                var O, C = "auth/",
                    R = {
                        "admin-restricted-operation": "This operation is restricted to administrators only.",
                        "argument-error": "",
                        "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                        "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                        "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                        "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                        "cordova-not-ready": "Cordova framework is not ready.",
                        "cors-unsupported": "This browser is not supported.",
                        "credential-already-in-use": "This credential is already associated with a different user account.",
                        "custom-token-mismatch": "The custom token corresponds to a different audience.",
                        "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                        "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                        "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                        "email-already-in-use": "The email address is already in use by another account.",
                        "expired-action-code": "The action code has expired. ",
                        "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                        "internal-error": "An internal error has occurred.",
                        "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                        "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                        "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                        "invalid-auth-event": "An internal error has occurred.",
                        "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
                        "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                        "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                        "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                        "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                        "invalid-email": "The email address is badly formatted.",
                        "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                        "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                        "invalid-credential": "The supplied auth credential is malformed or has expired.",
                        "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                        "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                        "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                        "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                        "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                        "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                        "wrong-password": "The password is invalid or the user does not have a password.",
                        "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                        "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                        "invalid-provider-id": "The specified provider ID is invalid.",
                        "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                        "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                        "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                        "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                        "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                        "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                        "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                        "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                        "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                        "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                        "missing-continue-uri": "A continue URL must be provided in the request.",
                        "missing-iframe-start": "An internal error has occurred.",
                        "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                        "missing-multi-factor-info": "No second factor identifier is provided.",
                        "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                        "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                        "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                        "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                        "app-deleted": "This instance of FirebaseApp has been deleted.",
                        "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                        "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                        "no-auth-event": "An internal error has occurred.",
                        "no-such-provider": "User was not linked to an account with the given provider.",
                        "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                        "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                        "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                        "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                        "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                        "provider-already-linked": "User can only be linked to one identity for the given provider.",
                        "quota-exceeded": "The project's quota for this operation has been exceeded.",
                        "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                        "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                        "rejected-credential": "The request contains malformed or mismatching credentials.",
                        "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                        "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                        "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                        timeout: "The operation has timed out.",
                        "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                        "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                        "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                        "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                        "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                        "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                        "unverified-email": "The operation requires a verified email.",
                        "user-cancelled": "The user did not grant your application the permissions it requested.",
                        "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                        "user-disabled": "The user account has been disabled by an administrator.",
                        "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                        "user-signed-out": "",
                        "weak-password": "The password must be 6 characters long or more.",
                        "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                    },
                    P = {
                        ld: {
                            Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                            $a: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                            Xa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                            id: "b"
                        },
                        sd: {
                            Ua: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                            $a: "https://securetoken.googleapis.com/v1/token",
                            Xa: "https://identitytoolkit.googleapis.com/v2/",
                            id: "p"
                        },
                        ud: {
                            Ua: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                            $a: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                            Xa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                            id: "s"
                        },
                        vd: {
                            Ua: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                            $a: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                            Xa: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                            id: "t"
                        }
                    };

                function D(t) {
                    for (var e in P)
                        if (P[e].id === t) return {
                            firebaseEndpoint: (t = P[e]).Ua,
                            secureTokenEndpoint: t.$a,
                            identityPlatformEndpoint: t.Xa
                        };
                    return null
                }

                function L(t) {
                    if (!t) return !1;
                    try {
                        return !!t.$goog_Thenable
                    } catch (e) {
                        return !1
                    }
                }

                function x(t) {
                    if (Error.captureStackTrace) Error.captureStackTrace(this, x);
                    else {
                        var e = Error().stack;
                        e && (this.stack = e)
                    }
                    t && (this.message = String(t))
                }

                function M(t, e) {
                    for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
                    x.call(this, n + t[i])
                }

                function j(t, e) {
                    throw new M("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
                }

                function U(t, e) {
                    this.c = t, this.f = e, this.b = 0, this.a = null
                }

                function V(t, e) {
                    t.f(e), 100 > t.b && (t.b++, e.next = t.a, t.a = e)
                }

                function F() {
                    this.b = this.a = null
                }
                O = D("__EID__") ? "__EID__" : void 0, k(x, Error), x.prototype.name = "CustomError", k(M, x), M.prototype.name = "AssertionError", U.prototype.get = function() {
                    if (0 < this.b) {
                        this.b--;
                        var t = this.a;
                        this.a = t.next, t.next = null
                    } else t = this.c();
                    return t
                };
                var K = new U((function() {
                    return new H
                }), (function(t) {
                    t.reset()
                }));

                function q() {
                    var t = we,
                        e = null;
                    return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e
                }

                function H() {
                    this.next = this.b = this.a = null
                }
                F.prototype.add = function(t, e) {
                    var n = K.get();
                    n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
                }, H.prototype.set = function(t, e) {
                    this.a = t, this.b = e, this.next = null
                }, H.prototype.reset = function() {
                    this.next = this.b = this.a = null
                };
                var G = Array.prototype.indexOf ? function(t, e) {
                        return Array.prototype.indexOf.call(t, e, void 0)
                    } : function(t, e) {
                        if ("string" === typeof t) return "string" !== typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                        for (var n = 0; n < t.length; n++)
                            if (n in t && t[n] === e) return n;
                        return -1
                    },
                    B = Array.prototype.forEach ? function(t, e, n) {
                        Array.prototype.forEach.call(t, e, n)
                    } : function(t, e, n) {
                        for (var i = t.length, r = "string" === typeof t ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t)
                    };
                var W = Array.prototype.filter ? function(t, e) {
                        return Array.prototype.filter.call(t, e, void 0)
                    } : function(t, e) {
                        for (var n = t.length, i = [], r = 0, o = "string" === typeof t ? t.split("") : t, a = 0; a < n; a++)
                            if (a in o) {
                                var s = o[a];
                                e.call(void 0, s, a, t) && (i[r++] = s)
                            }
                        return i
                    },
                    X = Array.prototype.map ? function(t, e) {
                        return Array.prototype.map.call(t, e, void 0)
                    } : function(t, e) {
                        for (var n = t.length, i = Array(n), r = "string" === typeof t ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t));
                        return i
                    },
                    Z = Array.prototype.some ? function(t, e) {
                        return Array.prototype.some.call(t, e, void 0)
                    } : function(t, e) {
                        for (var n = t.length, i = "string" === typeof t ? t.split("") : t, r = 0; r < n; r++)
                            if (r in i && e.call(void 0, i[r], r, t)) return !0;
                        return !1
                    };

                function J(t, e) {
                    return 0 <= G(t, e)
                }

                function Y(t, e) {
                    var n;
                    return (n = 0 <= (e = G(t, e))) && Array.prototype.splice.call(t, e, 1), n
                }

                function z(t, e) {
                    ! function(t, e) {
                        for (var n = "string" === typeof t ? t.split("") : t, i = t.length - 1; 0 <= i; --i) i in n && e.call(void 0, n[i], i, t)
                    }(t, (function(n, i) {
                        e.call(void 0, n, i, t) && 1 == Array.prototype.splice.call(t, i, 1).length && 0
                    }))
                }

                function $(t) {
                    return Array.prototype.concat.apply([], arguments)
                }

                function Q(t) {
                    var e = t.length;
                    if (0 < e) {
                        for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
                        return n
                    }
                    return []
                }
                var tt, et = String.prototype.trim ? function(t) {
                        return t.trim()
                    } : function(t) {
                        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                    },
                    nt = /&/g,
                    it = /</g,
                    rt = />/g,
                    ot = /"/g,
                    at = /'/g,
                    st = /\x00/g,
                    ut = /[\x00&<>"']/;

                function ct(t, e) {
                    return -1 != t.indexOf(e)
                }

                function ht(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                }
                t: {
                    var ft = u.navigator;
                    if (ft) {
                        var lt = ft.userAgent;
                        if (lt) {
                            tt = lt;
                            break t
                        }
                    }
                    tt = ""
                }

                function dt(t) {
                    return ct(tt, t)
                }

                function pt(t, e) {
                    for (var n in t) e.call(void 0, t[n], n, t)
                }

                function vt(t) {
                    for (var e in t) return !1;
                    return !0
                }

                function mt(t) {
                    var e, n = {};
                    for (e in t) n[e] = t[e];
                    return n
                }
                var gt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                function bt(t, e) {
                    for (var n, i, r = 1; r < arguments.length; r++) {
                        for (n in i = arguments[r]) t[n] = i[n];
                        for (var o = 0; o < gt.length; o++) n = gt[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                }

                function yt(t, e) {
                    t: {
                        try {
                            var n = t && t.ownerDocument,
                                i = n && (n.defaultView || n.parentWindow);
                            if ((i = i || u).Element && i.Location) {
                                var r = i;
                                break t
                            }
                        } catch (a) {}
                        r = null
                    }
                    if (r && "undefined" != typeof r[e] && (!t || !(t instanceof r[e]) && (t instanceof r.Location || t instanceof r.Element))) {
                        if (m(t)) try {
                            var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                        } catch (a) {
                            o = "<object could not be stringified>"
                        } else o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        j("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o)
                    }
                }

                function wt(t, e) {
                    this.a = t === At && e || "", this.b = Et
                }

                function It(t) {
                    return t instanceof wt && t.constructor === wt && t.b === Et ? t.a : (j("expected object of type Const, got '" + t + "'"), "type_error:Const")
                }
                wt.prototype.ta = !0, wt.prototype.sa = function() {
                    return this.a
                }, wt.prototype.toString = function() {
                    return "Const{" + this.a + "}"
                };
                var Tt, Et = {},
                    At = {};

                function kt() {
                    if (void 0 === Tt) {
                        var t = null,
                            e = u.trustedTypes;
                        if (e && e.createPolicy) {
                            try {
                                t = e.createPolicy("goog#html", {
                                    createHTML: S,
                                    createScript: S,
                                    createScriptURL: S
                                })
                            } catch (n) {
                                u.console && u.console.error(n.message)
                            }
                            Tt = t
                        } else Tt = t
                    }
                    return Tt
                }

                function St(t, e) {
                    this.a = e === Rt ? t : ""
                }

                function Nt(t) {
                    return t instanceof St && t.constructor === St ? t.a : (j("expected object of type TrustedResourceUrl, got '" + t + "' of type " + d(t)), "type_error:TrustedResourceUrl")
                }

                function _t(t, e) {
                    var n = It(t);
                    if (!Ct.test(n)) throw Error("Invalid TrustedResourceUrl format: " + n);
                    return function(t) {
                        var e = kt();
                        return new St(t = e ? e.createScriptURL(t) : t, Rt)
                    }(t = n.replace(Ot, (function(t, i) {
                        if (!Object.prototype.hasOwnProperty.call(e, i)) throw Error('Found marker, "' + i + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(e));
                        return (t = e[i]) instanceof wt ? It(t) : encodeURIComponent(String(t))
                    })))
                }
                St.prototype.ta = !0, St.prototype.sa = function() {
                    return this.a.toString()
                }, St.prototype.toString = function() {
                    return "TrustedResourceUrl{" + this.a + "}"
                };
                var Ot = /%{(\w+)}/g,
                    Ct = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
                    Rt = {};

                function Pt(t, e) {
                    this.a = e === Vt ? t : ""
                }

                function Dt(t) {
                    return t instanceof Pt && t.constructor === Pt ? t.a : (j("expected object of type SafeUrl, got '" + t + "' of type " + d(t)), "type_error:SafeUrl")
                }
                Pt.prototype.ta = !0, Pt.prototype.sa = function() {
                    return this.a.toString()
                }, Pt.prototype.toString = function() {
                    return "SafeUrl{" + this.a + "}"
                };
                var Lt = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
                    xt = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
                    Mt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                function jt(t) {
                    if (t instanceof Pt) return t;
                    if (t = "object" == typeof t && t.ta ? t.sa() : String(t), Mt.test(t)) t = new Pt(t, Vt);
                    else {
                        var e = (t = (t = String(t)).replace(/(%0A|%0D)/g, "")).match(xt);
                        t = e && Lt.test(e[1]) ? new Pt(t, Vt) : null
                    }
                    return t
                }

                function Ut(t) {
                    return t instanceof Pt ? t : (t = "object" == typeof t && t.ta ? t.sa() : String(t), Mt.test(t) || (t = "about:invalid#zClosurez"), new Pt(t, Vt))
                }
                var Vt = {},
                    Ft = new Pt("about:invalid#zClosurez", Vt);

                function Kt(t, e, n) {
                    this.a = n === qt ? t : ""
                }
                Kt.prototype.ta = !0, Kt.prototype.sa = function() {
                    return this.a.toString()
                }, Kt.prototype.toString = function() {
                    return "SafeHtml{" + this.a + "}"
                };
                var qt = {};

                function Ht(t, e, n, i) {
                    return t = t instanceof Pt ? t : Ut(t), e = e || u, n = n instanceof wt ? It(n) : n || "", e.open(Dt(t), n, i, void 0)
                }

                function Gt(t, e) {
                    for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) i += n.shift() + r.shift();
                    return i + n.join("%s")
                }

                function Bt(t) {
                    return ut.test(t) && (-1 != t.indexOf("&") && (t = t.replace(nt, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(it, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(rt, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(ot, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(at, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(st, "&#0;"))), t
                }

                function Wt(t) {
                    return Wt[" "](t), t
                }
                Wt[" "] = l;
                var Xt, Zt = dt("Opera"),
                    Jt = dt("Trident") || dt("MSIE"),
                    Yt = dt("Edge"),
                    zt = Yt || Jt,
                    $t = dt("Gecko") && !(ct(tt.toLowerCase(), "webkit") && !dt("Edge")) && !(dt("Trident") || dt("MSIE")) && !dt("Edge"),
                    Qt = ct(tt.toLowerCase(), "webkit") && !dt("Edge");

                function te() {
                    var t = u.document;
                    return t ? t.documentMode : void 0
                }
                t: {
                    var ee = "",
                        ne = function() {
                            var t = tt;
                            return $t ? /rv:([^\);]+)(\)|;)/.exec(t) : Yt ? /Edge\/([\d\.]+)/.exec(t) : Jt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : Qt ? /WebKit\/(\S+)/.exec(t) : Zt ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
                        }();
                    if (ne && (ee = ne ? ne[1] : ""), Jt) {
                        var ie = te();
                        if (null != ie && ie > parseFloat(ee)) {
                            Xt = String(ie);
                            break t
                        }
                    }
                    Xt = ee
                }
                var re, oe = {};

                function ae(t) {
                    return function(t, e) {
                        var n = oe;
                        return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                    }(t, (function() {
                        for (var e = 0, n = et(String(Xt)).split("."), i = et(String(t)).split("."), r = Math.max(n.length, i.length), o = 0; 0 == e && o < r; o++) {
                            var a = n[o] || "",
                                s = i[o] || "";
                            do {
                                if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == a[0].length && 0 == s[0].length) break;
                                e = ht(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || ht(0 == a[2].length, 0 == s[2].length) || ht(a[2], s[2]), a = a[3], s = s[3]
                            } while (0 == e)
                        }
                        return 0 <= e
                    }))
                }
                if (u.document && Jt) {
                    var se = te();
                    re = se || (parseInt(Xt, 10) || void 0)
                } else re = void 0;
                var ue = re;
                try {
                    new self.OffscreenCanvas(0, 0).getContext("2d")
                } catch (la) {}
                var ce = !Jt || 9 <= Number(ue);

                function he(t) {
                    var e = document;
                    return "string" === typeof t ? e.getElementById(t) : t
                }

                function fe(t, e) {
                    pt(e, (function(e, n) {
                        e && "object" == typeof e && e.ta && (e = e.sa()), "style" == n ? t.style.cssText = e : "class" == n ? t.className = e : "for" == n ? t.htmlFor = e : pe.hasOwnProperty(n) ? t.setAttribute(pe[n], e) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? t.setAttribute(n, e) : t[n] = e
                    }))
                }
                var le, de, pe = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                };

                function ve(t, e, n) {
                    function i(n) {
                        n && e.appendChild("string" === typeof n ? t.createTextNode(n) : n)
                    }
                    for (var r = 2; r < n.length; r++) {
                        var o = n[r];
                        if (!p(o) || m(o) && 0 < o.nodeType) i(o);
                        else {
                            t: {
                                if (o && "number" == typeof o.length) {
                                    if (m(o)) {
                                        var a = "function" == typeof o.item || "string" == typeof o.item;
                                        break t
                                    }
                                    if (v(o)) {
                                        a = "function" == typeof o.item;
                                        break t
                                    }
                                }
                                a = !1
                            }
                            B(a ? Q(o) : o, i)
                        }
                    }
                }

                function me(t, e) {
                    return e = String(e), "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()), t.createElement(e)
                }

                function ge(t) {
                    u.setTimeout((function() {
                        throw t
                    }), 0)
                }

                function be(t, e) {
                    de || function() {
                        if (u.Promise && u.Promise.resolve) {
                            var t = u.Promise.resolve(void 0);
                            de = function() {
                                t.then(Ie)
                            }
                        } else de = function() {
                            var t = Ie;
                            !v(u.setImmediate) || u.Window && u.Window.prototype && !dt("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (le || (le = function() {
                                var t = u.MessageChannel;
                                if ("undefined" === typeof t && "undefined" !== typeof window && window.postMessage && window.addEventListener && !dt("Presto") && (t = function() {
                                        var t = me(document, "IFRAME");
                                        t.style.display = "none", document.documentElement.appendChild(t);
                                        var e = t.contentWindow;
                                        (t = e.document).open(), t.close();
                                        var n = "callImmediate" + Math.random(),
                                            i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                        t = T((function(t) {
                                            "*" != i && t.origin != i || t.data != n || this.port1.onmessage()
                                        }), this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
                                            postMessage: function() {
                                                e.postMessage(n, i)
                                            }
                                        }
                                    }), "undefined" !== typeof t && !dt("Trident") && !dt("MSIE")) {
                                    var e = new t,
                                        n = {},
                                        i = n;
                                    return e.port1.onmessage = function() {
                                            if (void 0 !== n.next) {
                                                var t = (n = n.next).Hb;
                                                n.Hb = null, t()
                                            }
                                        },
                                        function(t) {
                                            i.next = {
                                                Hb: t
                                            }, i = i.next, e.port2.postMessage(0)
                                        }
                                }
                                return function(t) {
                                    u.setTimeout(t, 0)
                                }
                            }()), le(t)) : u.setImmediate(t)
                        }
                    }(), ye || (de(), ye = !0), we.add(t, e)
                }
                var ye = !1,
                    we = new F;

                function Ie() {
                    for (var t; t = q();) {
                        try {
                            t.a.call(t.b)
                        } catch (e) {
                            ge(e)
                        }
                        V(K, t)
                    }
                    ye = !1
                }

                function Te(t, e) {
                    if (this.a = Ee, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != l) try {
                        var n = this;
                        t.call(e, (function(t) {
                            Me(n, Ae, t)
                        }), (function(t) {
                            if (!(t instanceof He)) try {
                                if (t instanceof Error) throw t;
                                throw Error("Promise rejected.")
                            } catch (e) {}
                            Me(n, ke, t)
                        }))
                    } catch (i) {
                        Me(this, ke, i)
                    }
                }
                var Ee = 0,
                    Ae = 2,
                    ke = 3;

                function Se() {
                    this.next = this.f = this.b = this.g = this.a = null, this.c = !1
                }
                Se.prototype.reset = function() {
                    this.f = this.b = this.g = this.a = null, this.c = !1
                };
                var Ne = new U((function() {
                    return new Se
                }), (function(t) {
                    t.reset()
                }));

                function _e(t, e, n) {
                    var i = Ne.get();
                    return i.g = t, i.b = e, i.f = n, i
                }

                function Oe(t) {
                    if (t instanceof Te) return t;
                    var e = new Te(l);
                    return Me(e, Ae, t), e
                }

                function Ce(t) {
                    return new Te((function(e, n) {
                        n(t)
                    }))
                }

                function Re(t, e, n) {
                    je(t, e, n, null) || be(E(e, t))
                }

                function Pe(t) {
                    return new Te((function(e) {
                        var n = t.length,
                            i = [];
                        if (n)
                            for (var r = function(t, r, o) {
                                    n--, i[t] = r ? {
                                        Qb: !0,
                                        value: o
                                    } : {
                                        Qb: !1,
                                        reason: o
                                    }, 0 == n && e(i)
                                }, o = 0; o < t.length; o++) Re(t[o], E(r, o, !0), E(r, o, !1));
                        else e(i)
                    }))
                }

                function De(t, e) {
                    if (t.a == Ee)
                        if (t.c) {
                            var n = t.c;
                            if (n.b) {
                                for (var i = 0, r = null, o = null, a = n.b; a && (a.c || (i++, a.a == t && (r = a), !(r && 1 < i))); a = a.next) r || (o = a);
                                r && (n.a == Ee && 1 == i ? De(n, e) : (o ? ((i = o).next == n.f && (n.f = i), i.next = i.next.next) : Ve(n), Fe(n, r, ke, e)))
                            }
                            t.c = null
                        } else Me(t, ke, e)
                }

                function Le(t, e) {
                    t.b || t.a != Ae && t.a != ke || Ue(t), t.f ? t.f.next = e : t.b = e, t.f = e
                }

                function xe(t, e, n, i) {
                    var r = _e(null, null, null);
                    return r.a = new Te((function(t, o) {
                        r.g = e ? function(n) {
                            try {
                                var r = e.call(i, n);
                                t(r)
                            } catch (a) {
                                o(a)
                            }
                        } : t, r.b = n ? function(e) {
                            try {
                                var r = n.call(i, e);
                                void 0 === r && e instanceof He ? o(e) : t(r)
                            } catch (a) {
                                o(a)
                            }
                        } : o
                    })), r.a.c = t, Le(t, r), r.a
                }

                function Me(t, e, n) {
                    t.a == Ee && (t === n && (e = ke, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, je(n, t.$c, t.ad, t) || (t.i = n, t.a = e, t.c = null, Ue(t), e != ke || n instanceof He || function(t, e) {
                        t.g = !0, be((function() {
                            t.g && qe.call(null, e)
                        }))
                    }(t, n)))
                }

                function je(t, e, n, i) {
                    if (t instanceof Te) return Le(t, _e(e || l, n || null, i)), !0;
                    if (L(t)) return t.then(e, n, i), !0;
                    if (m(t)) try {
                        var r = t.then;
                        if (v(r)) return function(t, e, n, i, r) {
                            function o(t) {
                                s || (s = !0, i.call(r, t))
                            }

                            function a(t) {
                                s || (s = !0, n.call(r, t))
                            }
                            var s = !1;
                            try {
                                e.call(t, a, o)
                            } catch (u) {
                                o(u)
                            }
                        }(t, r, e, n, i), !0
                    } catch (o) {
                        return n.call(i, o), !0
                    }
                    return !1
                }

                function Ue(t) {
                    t.h || (t.h = !0, be(t.gc, t))
                }

                function Ve(t) {
                    var e = null;
                    return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e
                }

                function Fe(t, e, n, i) {
                    if (n == ke && e.b && !e.c)
                        for (; t && t.g; t = t.c) t.g = !1;
                    if (e.a) e.a.c = null, Ke(e, n, i);
                    else try {
                        e.c ? e.g.call(e.f) : Ke(e, n, i)
                    } catch (r) {
                        qe.call(null, r)
                    }
                    V(Ne, e)
                }

                function Ke(t, e, n) {
                    e == Ae ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
                }
                Te.prototype.then = function(t, e, n) {
                    return xe(this, v(t) ? t : null, v(e) ? e : null, n)
                }, Te.prototype.$goog_Thenable = !0, (t = Te.prototype).oa = function(t, e) {
                    return (t = _e(t, t, e)).c = !0, Le(this, t), this
                }, t.o = function(t, e) {
                    return xe(this, null, t, e)
                }, t.cancel = function(t) {
                    if (this.a == Ee) {
                        var e = new He(t);
                        be((function() {
                            De(this, e)
                        }), this)
                    }
                }, t.$c = function(t) {
                    this.a = Ee, Me(this, Ae, t)
                }, t.ad = function(t) {
                    this.a = Ee, Me(this, ke, t)
                }, t.gc = function() {
                    for (var t; t = Ve(this);) Fe(this, t, this.a, this.i);
                    this.h = !1
                };
                var qe = ge;

                function He(t) {
                    x.call(this, t)
                }

                function Ge() {
                    0 != Be && (We[g(this)] = this), this.ya = this.ya, this.pa = this.pa
                }
                k(He, x), He.prototype.name = "cancel";
                var Be = 0,
                    We = {};

                function Xe(t) {
                    if (!t.ya && (t.ya = !0, t.Da(), 0 != Be)) {
                        var e = g(t);
                        if (0 != Be && t.pa && 0 < t.pa.length) throw Error(t + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                        delete We[e]
                    }
                }
                Ge.prototype.ya = !1, Ge.prototype.Da = function() {
                    if (this.pa)
                        for (; this.pa.length;) this.pa.shift()()
                };
                var Ze = Object.freeze || function(t) {
                        return t
                    },
                    Je = !Jt || 9 <= Number(ue),
                    Ye = Jt && !ae("9"),
                    ze = function() {
                        if (!u.addEventListener || !Object.defineProperty) return !1;
                        var t = !1,
                            e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                        try {
                            u.addEventListener("test", l, e), u.removeEventListener("test", l, e)
                        } catch (n) {}
                        return t
                    }();

                function $e(t, e) {
                    this.type = t, this.b = this.target = e, this.defaultPrevented = !1
                }

                function Qe(t, e) {
                    if ($e.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
                        var n = this.type = t.type,
                            i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                        if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
                            if ($t) {
                                t: {
                                    try {
                                        Wt(e.nodeName);
                                        var r = !0;
                                        break t
                                    } catch (o) {}
                                    r = !1
                                }
                                r || (e = null)
                            }
                        } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" === typeof t.pointerType ? t.pointerType : tn[t.pointerType] || "", this.a = t, t.defaultPrevented && this.preventDefault()
                    }
                }
                $e.prototype.preventDefault = function() {
                    this.defaultPrevented = !0
                }, k(Qe, $e);
                var tn = Ze({
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                });
                Qe.prototype.preventDefault = function() {
                    Qe.bb.preventDefault.call(this);
                    var t = this.a;
                    if (t.preventDefault) t.preventDefault();
                    else if (t.returnValue = !1, Ye) try {
                        (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                    } catch (e) {}
                }, Qe.prototype.g = function() {
                    return this.a
                };
                var en = "closure_listenable_" + (1e6 * Math.random() | 0),
                    nn = 0;

                function rn(t, e, n, i, r) {
                    this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Wa = r, this.key = ++nn, this.wa = this.Qa = !1
                }

                function on(t) {
                    t.wa = !0, t.listener = null, t.proxy = null, t.src = null, t.Wa = null
                }

                function an(t) {
                    this.src = t, this.a = {}, this.b = 0
                }

                function sn(t, e) {
                    var n = e.type;
                    n in t.a && Y(t.a[n], e) && (on(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                }

                function un(t, e, n, i) {
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (!o.wa && o.listener == e && o.capture == !!n && o.Wa == i) return r
                    }
                    return -1
                }
                an.prototype.add = function(t, e, n, i, r) {
                    var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                    var a = un(t, e, i, r);
                    return -1 < a ? (e = t[a], n || (e.Qa = !1)) : ((e = new rn(e, this.src, o, !!i, r)).Qa = n, t.push(e)), e
                };
                var cn = "closure_lm_" + (1e6 * Math.random() | 0),
                    hn = {};

                function fn(t, e, n, i, r) {
                    if (i && i.once) dn(t, e, n, i, r);
                    else if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) fn(t, e[o], n, i, r);
                    else n = Tn(n), t && t[en] ? An(t, e, n, m(i) ? !!i.capture : !!i, r) : ln(t, e, n, !1, i, r)
                }

                function ln(t, e, n, i, r, o) {
                    if (!e) throw Error("Invalid event type");
                    var a = m(r) ? !!r.capture : !!r,
                        s = wn(t);
                    if (s || (t[cn] = s = new an(t)), !(n = s.add(e, n, i, a, o)).proxy) {
                        if (i = function() {
                                var t = yn,
                                    e = Je ? function(n) {
                                        return t.call(e.src, e.listener, n)
                                    } : function(n) {
                                        if (!(n = t.call(e.src, e.listener, n))) return n
                                    };
                                return e
                            }(), n.proxy = i, i.src = t, i.listener = n, t.addEventListener) ze || (r = a), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
                        else if (t.attachEvent) t.attachEvent(mn(e.toString()), i);
                        else {
                            if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(i)
                        }
                        0
                    }
                }

                function dn(t, e, n, i, r) {
                    if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) dn(t, e[o], n, i, r);
                    else n = Tn(n), t && t[en] ? kn(t, e, n, m(i) ? !!i.capture : !!i, r) : ln(t, e, n, !0, i, r)
                }

                function pn(t, e, n, i, r) {
                    if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) pn(t, e[o], n, i, r);
                    else i = m(i) ? !!i.capture : !!i, n = Tn(n), t && t[en] ? (t = t.v, (e = String(e).toString()) in t.a && (-1 < (n = un(o = t.a[e], n, i, r)) && (on(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = wn(t)) && (e = t.a[e.toString()], t = -1, e && (t = un(e, n, i, r)), (n = -1 < t ? e[t] : null) && vn(n))
                }

                function vn(t) {
                    if ("number" !== typeof t && t && !t.wa) {
                        var e = t.src;
                        if (e && e[en]) sn(e.v, t);
                        else {
                            var n = t.type,
                                i = t.proxy;
                            e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(mn(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = wn(e)) ? (sn(n, t), 0 == n.b && (n.src = null, e[cn] = null)) : on(t)
                        }
                    }
                }

                function mn(t) {
                    return t in hn ? hn[t] : hn[t] = "on" + t
                }

                function gn(t, e, n, i) {
                    var r = !0;
                    if ((t = wn(t)) && (e = t.a[e.toString()]))
                        for (e = e.concat(), t = 0; t < e.length; t++) {
                            var o = e[t];
                            o && o.capture == n && !o.wa && (o = bn(o, i), r = r && !1 !== o)
                        }
                    return r
                }

                function bn(t, e) {
                    var n = t.listener,
                        i = t.Wa || t.src;
                    return t.Qa && vn(t), n.call(i, e)
                }

                function yn(t, e) {
                    if (t.wa) return !0;
                    if (!Je) {
                        if (!e) t: {
                            e = ["window", "event"];
                            for (var n = u, i = 0; i < e.length; i++)
                                if (null == (n = n[e[i]])) {
                                    e = null;
                                    break t
                                }
                            e = n
                        }
                        if (e = new Qe(i = e, this), n = !0, !(0 > i.keyCode || void 0 != i.returnValue)) {
                            t: {
                                var r = !1;
                                if (0 == i.keyCode) try {
                                    i.keyCode = -1;
                                    break t
                                } catch (a) {
                                    r = !0
                                }(r || void 0 == i.returnValue) && (i.returnValue = !0)
                            }
                            for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
                            for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                                e.b = i[r];
                                var o = gn(i[r], t, !0, e);
                                n = n && o
                            }
                            for (r = 0; r < i.length; r++) e.b = i[r],
                            o = gn(i[r], t, !1, e),
                            n = n && o
                        }
                        return n
                    }
                    return bn(t, new Qe(e, this))
                }

                function wn(t) {
                    return (t = t[cn]) instanceof an ? t : null
                }
                var In = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                function Tn(t) {
                    return v(t) ? t : (t[In] || (t[In] = function(e) {
                        return t.handleEvent(e)
                    }), t[In])
                }

                function En() {
                    Ge.call(this), this.v = new an(this), this.bc = this, this.hb = null
                }

                function An(t, e, n, i, r) {
                    t.v.add(String(e), n, !1, i, r)
                }

                function kn(t, e, n, i, r) {
                    t.v.add(String(e), n, !0, i, r)
                }

                function Sn(t, e, n, i) {
                    if (!(e = t.v.a[String(e)])) return !0;
                    e = e.concat();
                    for (var r = !0, o = 0; o < e.length; ++o) {
                        var a = e[o];
                        if (a && !a.wa && a.capture == n) {
                            var s = a.listener,
                                u = a.Wa || a.src;
                            a.Qa && sn(t.v, a), r = !1 !== s.call(u, i) && r
                        }
                    }
                    return r && !i.defaultPrevented
                }

                function Nn(t, e, n) {
                    if (v(t)) n && (t = T(t, n));
                    else {
                        if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                        t = T(t.handleEvent, t)
                    }
                    return 2147483647 < Number(e) ? -1 : u.setTimeout(t, e || 0)
                }

                function _n(t) {
                    var e = null;
                    return new Te((function(n, i) {
                        -1 == (e = Nn((function() {
                            n(void 0)
                        }), t)) && i(Error("Failed to schedule timer."))
                    })).o((function(t) {
                        throw u.clearTimeout(e), t
                    }))
                }

                function On(t) {
                    if (t.X && "function" == typeof t.X) return t.X();
                    if ("string" === typeof t) return t.split("");
                    if (p(t)) {
                        for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
                        return e
                    }
                    for (i in e = [], n = 0, t) e[n++] = t[i];
                    return e
                }

                function Cn(t) {
                    if (t.Y && "function" == typeof t.Y) return t.Y();
                    if (!t.X || "function" != typeof t.X) {
                        if (p(t) || "string" === typeof t) {
                            var e = [];
                            t = t.length;
                            for (var n = 0; n < t; n++) e.push(n);
                            return e
                        }
                        for (var i in e = [], n = 0, t) e[n++] = i;
                        return e
                    }
                }

                function Rn(t, e) {
                    this.b = {}, this.a = [], this.c = 0;
                    var n = arguments.length;
                    if (1 < n) {
                        if (n % 2) throw Error("Uneven number of arguments");
                        for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1])
                    } else if (t)
                        if (t instanceof Rn)
                            for (n = t.Y(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
                        else
                            for (i in t) this.set(i, t[i])
                }

                function Pn(t) {
                    if (t.c != t.a.length) {
                        for (var e = 0, n = 0; e < t.a.length;) {
                            var i = t.a[e];
                            Dn(t.b, i) && (t.a[n++] = i), e++
                        }
                        t.a.length = n
                    }
                    if (t.c != t.a.length) {
                        var r = {};
                        for (n = e = 0; e < t.a.length;) Dn(r, i = t.a[e]) || (t.a[n++] = i, r[i] = 1), e++;
                        t.a.length = n
                    }
                }

                function Dn(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                k(En, Ge), En.prototype[en] = !0, En.prototype.addEventListener = function(t, e, n, i) {
                    fn(this, t, e, n, i)
                }, En.prototype.removeEventListener = function(t, e, n, i) {
                    pn(this, t, e, n, i)
                }, En.prototype.dispatchEvent = function(t) {
                    var e, n = this.hb;
                    if (n)
                        for (e = []; n; n = n.hb) e.push(n);
                    n = this.bc;
                    var i = t.type || t;
                    if ("string" === typeof t) t = new $e(t, n);
                    else if (t instanceof $e) t.target = t.target || n;
                    else {
                        var r = t;
                        bt(t = new $e(i, n), r)
                    }
                    if (r = !0, e)
                        for (var o = e.length - 1; 0 <= o; o--) {
                            var a = t.b = e[o];
                            r = Sn(a, i, !0, t) && r
                        }
                    if (r = Sn(a = t.b = n, i, !0, t) && r, r = Sn(a, i, !1, t) && r, e)
                        for (o = 0; o < e.length; o++) r = Sn(a = t.b = e[o], i, !1, t) && r;
                    return r
                }, En.prototype.Da = function() {
                    if (En.bb.Da.call(this), this.v) {
                        var t, e = this.v;
                        for (t in e.a) {
                            for (var n = e.a[t], i = 0; i < n.length; i++) on(n[i]);
                            delete e.a[t], e.b--
                        }
                    }
                    this.hb = null
                }, (t = Rn.prototype).X = function() {
                    Pn(this);
                    for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                    return t
                }, t.Y = function() {
                    return Pn(this), this.a.concat()
                }, t.clear = function() {
                    this.b = {}, this.c = this.a.length = 0
                }, t.get = function(t, e) {
                    return Dn(this.b, t) ? this.b[t] : e
                }, t.set = function(t, e) {
                    Dn(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
                }, t.forEach = function(t, e) {
                    for (var n = this.Y(), i = 0; i < n.length; i++) {
                        var r = n[i],
                            o = this.get(r);
                        t.call(e, o, r, this)
                    }
                };
                var Ln = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                function xn(t, e) {
                    var n;
                    this.a = this.l = this.c = "", this.g = null, this.h = this.f = "", this.i = !1, t instanceof xn ? (this.i = void 0 !== e ? e : t.i, Mn(this, t.c), this.l = t.l, this.a = t.a, jn(this, t.g), this.f = t.f, Un(this, ii(t.b)), this.h = t.h) : t && (n = String(t).match(Ln)) ? (this.i = !!e, Mn(this, n[1] || "", !0), this.l = Hn(n[2] || ""), this.a = Hn(n[3] || "", !0), jn(this, n[4]), this.f = Hn(n[5] || "", !0), Un(this, n[6] || "", !0), this.h = Hn(n[7] || "")) : (this.i = !!e, this.b = new zn(null, this.i))
                }

                function Mn(t, e, n) {
                    t.c = n ? Hn(e, !0) : e, t.c && (t.c = t.c.replace(/:$/, ""))
                }

                function jn(t, e) {
                    if (e) {
                        if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
                        t.g = e
                    } else t.g = null
                }

                function Un(t, e, n) {
                    e instanceof zn ? (t.b = e, function(t, e) {
                        e && !t.f && ($n(t), t.c = null, t.a.forEach((function(t, e) {
                            var n = e.toLowerCase();
                            e != n && (ti(this, e), ni(this, n, t))
                        }), t)), t.f = e
                    }(t.b, t.i)) : (n || (e = Gn(e, Jn)), t.b = new zn(e, t.i))
                }

                function Vn(t, e, n) {
                    t.b.set(e, n)
                }

                function Fn(t, e) {
                    return t.b.get(e)
                }

                function Kn(t) {
                    return t instanceof xn ? new xn(t) : new xn(t, void 0)
                }

                function qn(t, e, n, i) {
                    var r = new xn(null, void 0);
                    return t && Mn(r, t), e && (r.a = e), n && jn(r, n), i && (r.f = i), r
                }

                function Hn(t, e) {
                    return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                }

                function Gn(t, e, n) {
                    return "string" === typeof t ? (t = encodeURI(t).replace(e, Bn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
                }

                function Bn(t) {
                    return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
                }
                xn.prototype.toString = function() {
                    var t = [],
                        e = this.c;
                    e && t.push(Gn(e, Wn, !0), ":");
                    var n = this.a;
                    return (n || "file" == e) && (t.push("//"), (e = this.l) && t.push(Gn(e, Wn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.g) && t.push(":", String(n))), (n = this.f) && (this.a && "/" != n.charAt(0) && t.push("/"), t.push(Gn(n, "/" == n.charAt(0) ? Zn : Xn, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.h) && t.push("#", Gn(n, Yn)), t.join("")
                }, xn.prototype.resolve = function(t) {
                    var e = new xn(this),
                        n = !!t.c;
                    n ? Mn(e, t.c) : n = !!t.l, n ? e.l = t.l : n = !!t.a, n ? e.a = t.a : n = null != t.g;
                    var i = t.f;
                    if (n) jn(e, t.g);
                    else if (n = !!t.f) {
                        if ("/" != i.charAt(0))
                            if (this.a && !this.f) i = "/" + i;
                            else {
                                var r = e.f.lastIndexOf("/"); - 1 != r && (i = e.f.substr(0, r + 1) + i)
                            }
                        if (".." == (r = i) || "." == r) i = "";
                        else if (ct(r, "./") || ct(r, "/.")) {
                            i = 0 == r.lastIndexOf("/", 0), r = r.split("/");
                            for (var o = [], a = 0; a < r.length;) {
                                var s = r[a++];
                                "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), i && a == r.length && o.push("")) : (o.push(s), i = !0)
                            }
                            i = o.join("/")
                        } else i = r
                    }
                    return n ? e.f = i : n = "" !== t.b.toString(), n ? Un(e, ii(t.b)) : n = !!t.h, n && (e.h = t.h), e
                };
                var Wn = /[#\/\?@]/g,
                    Xn = /[#\?:]/g,
                    Zn = /[#\?]/g,
                    Jn = /[#\?@]/g,
                    Yn = /#/g;

                function zn(t, e) {
                    this.b = this.a = null, this.c = t || null, this.f = !!e
                }

                function $n(t) {
                    t.a || (t.a = new Rn, t.b = 0, t.c && function(t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n].indexOf("="),
                                    r = null;
                                if (0 <= i) {
                                    var o = t[n].substring(0, i);
                                    r = t[n].substring(i + 1)
                                } else o = t[n];
                                e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(t.c, (function(e, n) {
                        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
                    })))
                }

                function Qn(t) {
                    var e = Cn(t);
                    if ("undefined" == typeof e) throw Error("Keys are undefined");
                    var n = new zn(null, void 0);
                    t = On(t);
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i],
                            o = t[i];
                        Array.isArray(o) ? ni(n, r, o) : n.add(r, o)
                    }
                    return n
                }

                function ti(t, e) {
                    $n(t), e = ri(t, e), Dn(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Dn((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Pn(t)))
                }

                function ei(t, e) {
                    return $n(t), e = ri(t, e), Dn(t.a.b, e)
                }

                function ni(t, e, n) {
                    ti(t, e), 0 < n.length && (t.c = null, t.a.set(ri(t, e), Q(n)), t.b += n.length)
                }

                function ii(t) {
                    var e = new zn;
                    return e.c = t.c, t.a && (e.a = new Rn(t.a), e.b = t.b), e
                }

                function ri(t, e) {
                    return e = String(e), t.f && (e = e.toLowerCase()), e
                }

                function oi(t) {
                    var e = [];
                    return si(new ai, t, e), e.join("")
                }

                function ai() {}

                function si(t, e, n) {
                    if (null == e) n.push("null");
                    else {
                        if ("object" == typeof e) {
                            if (Array.isArray(e)) {
                                var i = e;
                                e = i.length, n.push("[");
                                for (var r = "", o = 0; o < e; o++) n.push(r), si(t, i[o], n), r = ",";
                                return void n.push("]")
                            }
                            if (!(e instanceof String || e instanceof Number || e instanceof Boolean)) {
                                for (i in n.push("{"), r = "", e) Object.prototype.hasOwnProperty.call(e, i) && ("function" != typeof(o = e[i]) && (n.push(r), hi(i, n), n.push(":"), si(t, o, n), r = ","));
                                return void n.push("}")
                            }
                            e = e.valueOf()
                        }
                        switch (typeof e) {
                            case "string":
                                hi(e, n);
                                break;
                            case "number":
                                n.push(isFinite(e) && !isNaN(e) ? String(e) : "null");
                                break;
                            case "boolean":
                                n.push(String(e));
                                break;
                            case "function":
                                n.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof e)
                        }
                    }
                }(t = zn.prototype).add = function(t, e) {
                    $n(this), this.c = null, t = ri(this, t);
                    var n = this.a.get(t);
                    return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
                }, t.clear = function() {
                    this.a = this.c = null, this.b = 0
                }, t.forEach = function(t, e) {
                    $n(this), this.a.forEach((function(n, i) {
                        B(n, (function(n) {
                            t.call(e, n, i, this)
                        }), this)
                    }), this)
                }, t.Y = function() {
                    $n(this);
                    for (var t = this.a.X(), e = this.a.Y(), n = [], i = 0; i < e.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
                    return n
                }, t.X = function(t) {
                    $n(this);
                    var e = [];
                    if ("string" === typeof t) ei(this, t) && (e = $(e, this.a.get(ri(this, t))));
                    else {
                        t = this.a.X();
                        for (var n = 0; n < t.length; n++) e = $(e, t[n])
                    }
                    return e
                }, t.set = function(t, e) {
                    return $n(this), this.c = null, ei(this, t = ri(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
                }, t.get = function(t, e) {
                    return t && 0 < (t = this.X(t)).length ? String(t[0]) : e
                }, t.toString = function() {
                    if (this.c) return this.c;
                    if (!this.a) return "";
                    for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++) {
                        var i = e[n],
                            r = encodeURIComponent(String(i));
                        i = this.X(i);
                        for (var o = 0; o < i.length; o++) {
                            var a = r;
                            "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a)
                        }
                    }
                    return this.c = t.join("&")
                };
                var ui = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "/": "\\/",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\v": "\\u000b"
                    },
                    ci = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                function hi(t, e) {
                    e.push('"', t.replace(ci, (function(t) {
                        var e = ui[t];
                        return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), ui[t] = e), e
                    })), '"')
                }

                function fi() {
                    var t = Ri();
                    return Jt && !!ue && 11 == ue || /Edge\/\d+/.test(t)
                }

                function li() {
                    return u.window && u.window.location.href || self && self.location && self.location.href || ""
                }

                function di(t, e) {
                    e = e || u.window;
                    var n = "about:blank";
                    t && (n = Dt(jt(t) || Ft)), e.location.href = n
                }

                function pi(t, e) {
                    var n, i = [];
                    for (n in t) n in e ? typeof t[n] != typeof e[n] ? i.push(n) : "object" == typeof t[n] && null != t[n] && null != e[n] ? 0 < pi(t[n], e[n]).length && i.push(n) : t[n] !== e[n] && i.push(n) : i.push(n);
                    for (n in e) n in t || i.push(n);
                    return i
                }

                function vi(t) {
                    return !!((t = (t || Ri()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
                }

                function mi(t) {
                    t = t || u.window;
                    try {
                        t.close()
                    } catch (e) {}
                }

                function gi(t, e, n) {
                    var i = Math.floor(1e9 * Math.random()).toString();
                    e = e || 500, n = n || 600;
                    var r = (window.screen.availHeight - n) / 2,
                        o = (window.screen.availWidth - e) / 2;
                    for (a in e = {
                            width: e,
                            height: n,
                            top: 0 < r ? r : 0,
                            left: 0 < o ? o : 0,
                            location: !0,
                            resizable: !0,
                            statusbar: !0,
                            toolbar: !1
                        }, n = Ri().toLowerCase(), i && (e.target = i, ct(n, "crios/") && (e.target = "_blank")), _i(Ri()) == Si && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof Pt ? n : jt("undefined" != typeof n.href ? n.href : String(n)) || Ft, n = t.target || n.target, r = [], t) switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]);
                            break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0))
                    }
                    var a = r.join(",");
                    if ((dt("iPhone") && !dt("iPod") && !dt("iPad") || dt("iPad") || dt("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (yt(a = me(document, "A"), "HTMLAnchorElement"), e = e instanceof Pt ? e : Ut(e), a.href = Dt(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = Ht("", i, n, a), t = Dt(e), a && (zt && ct(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Bt(t) + '">', t = new Kt(t = (i = kt()) ? i.createHTML(t) : t, null, qt), i = a.document) && (i.write(function(t) {
                            return t instanceof Kt && t.constructor === Kt ? t.a : (j("expected object of type SafeHtml, got '" + t + "' of type " + d(t)), "type_error:SafeHtml")
                        }(t)), i.close())) : (a = Ht(e, i, n, a)) && t.noopener && (a.opener = null), a) try {
                        a.focus()
                    } catch (s) {}
                    return a
                }
                var bi = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                    yi = /^[^@]+@[^@]+$/;

                function wi() {
                    var t = null;
                    return new Te((function(e) {
                        "complete" == u.document.readyState ? e() : (t = function() {
                            e()
                        }, dn(window, "load", t))
                    })).o((function(e) {
                        throw pn(window, "load", t), e
                    }))
                }

                function Ii(t) {
                    return t = t || Ri(), !("file:" !== Mi() && "ionic:" !== Mi() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
                }

                function Ti() {
                    var t = u.window;
                    try {
                        return !(!t || t == t.top)
                    } catch (e) {
                        return !1
                    }
                }

                function Ei() {
                    return "undefined" !== typeof u.WorkerGlobalScope && "function" === typeof u.importScripts
                }

                function Ai() {
                    return i.Z.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : i.Z.INTERNAL.hasOwnProperty("node") ? "Node" : Ei() ? "Worker" : "Browser"
                }

                function ki() {
                    var t = Ai();
                    return "ReactNative" === t || "Node" === t
                }
                var Si = "Firefox",
                    Ni = "Chrome";

                function _i(t) {
                    var e = t.toLowerCase();
                    return ct(e, "opera/") || ct(e, "opr/") || ct(e, "opios/") ? "Opera" : ct(e, "iemobile") ? "IEMobile" : ct(e, "msie") || ct(e, "trident/") ? "IE" : ct(e, "edge/") ? "Edge" : ct(e, "firefox/") ? Si : ct(e, "silk/") ? "Silk" : ct(e, "blackberry") ? "Blackberry" : ct(e, "webos") ? "Webos" : !ct(e, "safari/") || ct(e, "chrome/") || ct(e, "crios/") || ct(e, "android") ? !ct(e, "chrome/") && !ct(e, "crios/") || ct(e, "edge/") ? ct(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : Ni : "Safari"
                }
                var Oi = {
                    md: "FirebaseCore-web",
                    od: "FirebaseUI-web"
                };

                function Ci(t, e) {
                    e = e || [];
                    var n, i = [],
                        r = {};
                    for (n in Oi) r[Oi[n]] = !0;
                    for (n = 0; n < e.length; n++) "undefined" !== typeof r[e[n]] && (delete r[e[n]], i.push(e[n]));
                    return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = Ai()) ? i = _i(r = Ri()) : "Worker" === i && (i = _i(r = Ri()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",")
                }

                function Ri() {
                    return u.navigator && u.navigator.userAgent || ""
                }

                function Pi(t, e) {
                    t = t.split("."), e = e || u;
                    for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]];
                    return n != t.length && (e = void 0), e
                }

                function Di() {
                    try {
                        var t = u.localStorage,
                            e = Ki();
                        if (t) return t.setItem(e, "1"), t.removeItem(e), !fi() || !!u.indexedDB
                    } catch (n) {
                        return Ei() && !!u.indexedDB
                    }
                    return !1
                }

                function Li() {
                    return (xi() || "chrome-extension:" === Mi() || Ii()) && !ki() && Di() && !Ei()
                }

                function xi() {
                    return "http:" === Mi() || "https:" === Mi()
                }

                function Mi() {
                    return u.location && u.location.protocol || null
                }

                function ji(t) {
                    return !vi(t = t || Ri()) && _i(t) != Si
                }

                function Ui(t) {
                    return "undefined" === typeof t ? null : oi(t)
                }

                function Vi(t) {
                    var e, n = {};
                    for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
                    return n
                }

                function Fi(t) {
                    if (null !== t) return JSON.parse(t)
                }

                function Ki(t) {
                    return t || Math.floor(1e9 * Math.random()).toString()
                }

                function qi(t) {
                    return "Safari" != _i(t = t || Ri()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
                }

                function Hi() {
                    var t = u.___jsl;
                    if (t && t.H)
                        for (var e in t.H)
                            if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
                }

                function Gi(t, e) {
                    if (t > e) throw Error("Short delay should be less than long delay!");
                    this.a = t, this.c = e, t = Ri(), e = Ai(), this.b = vi(t) || "ReactNative" === e
                }

                function Bi() {
                    var t = u.document;
                    return !t || "undefined" === typeof t.visibilityState || "visible" == t.visibilityState
                }

                function Wi(t) {
                    try {
                        var e = new Date(parseInt(t, 10));
                        if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
                    } catch (n) {}
                    return null
                }

                function Xi() {
                    return !(!Pi("fireauth.oauthhelper", u) && !Pi("fireauth.iframe", u))
                }
                Gi.prototype.get = function() {
                    var t = u.navigator;
                    return !t || "boolean" !== typeof t.onLine || !xi() && "chrome-extension:" !== Mi() && "undefined" === typeof t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                };
                var Zi, Ji = {};

                function Yi(t) {
                    Ji[t] || (Ji[t] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn(t))
                }
                try {
                    var zi = {};
                    Object.defineProperty(zi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 1
                    }), Object.defineProperty(zi, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 2
                    }), Zi = 2 == zi.abcd
                } catch (la) {
                    Zi = !1
                }

                function $i(t, e, n) {
                    Zi ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    }) : t[e] = n
                }

                function Qi(t, e) {
                    if (e)
                        for (var n in e) e.hasOwnProperty(n) && $i(t, n, e[n])
                }

                function tr(t) {
                    var e = {};
                    return Qi(e, t), e
                }

                function er(t) {
                    var e = t;
                    if ("object" == typeof t && null != t)
                        for (var n in e = "length" in t ? [] : {}, t) $i(e, n, er(t[n]));
                    return e
                }

                function nr(t) {
                    var e = t && (t[sr] ? "phone" : null);
                    if (!(e && t && t[ar])) throw new N("internal-error", "Internal assert: invalid MultiFactorInfo object");
                    $i(this, "uid", t[ar]), $i(this, "displayName", t[rr] || null);
                    var n = null;
                    t[or] && (n = new Date(t[or]).toUTCString()), $i(this, "enrollmentTime", n), $i(this, "factorId", e)
                }

                function ir(t) {
                    try {
                        var e = new ur(t)
                    } catch (n) {
                        e = null
                    }
                    return e
                }
                nr.prototype.w = function() {
                    return {
                        uid: this.uid,
                        displayName: this.displayName,
                        factorId: this.factorId,
                        enrollmentTime: this.enrollmentTime
                    }
                };
                var rr = "displayName",
                    or = "enrolledAt",
                    ar = "mfaEnrollmentId",
                    sr = "phoneInfo";

                function ur(t) {
                    nr.call(this, t), $i(this, "phoneNumber", t[sr])
                }

                function cr(t) {
                    var e = {},
                        n = t[dr],
                        i = t[vr],
                        r = t[mr];
                    if (t = ir(t[pr]), !r || r != fr && r != lr && !n || r == lr && !i || r == hr && !t) throw Error("Invalid checkActionCode response!");
                    r == lr ? (e[br] = n || null, e[wr] = n || null, e[gr] = i) : (e[br] = i || null, e[wr] = i || null, e[gr] = n || null), e[yr] = t || null, $i(this, Tr, r), $i(this, Ir, er(e))
                }
                k(ur, nr), ur.prototype.w = function() {
                    var t = ur.bb.w.call(this);
                    return t.phoneNumber = this.phoneNumber, t
                };
                var hr = "REVERT_SECOND_FACTOR_ADDITION",
                    fr = "EMAIL_SIGNIN",
                    lr = "VERIFY_AND_CHANGE_EMAIL",
                    dr = "email",
                    pr = "mfaInfo",
                    vr = "newEmail",
                    mr = "requestType",
                    gr = "email",
                    br = "fromEmail",
                    yr = "multiFactorInfo",
                    wr = "previousEmail",
                    Ir = "data",
                    Tr = "operation";

                function Er(t) {
                    var e = Fn(t = Kn(t), Ar) || null,
                        n = Fn(t, kr) || null,
                        i = Fn(t, _r) || null;
                    if (i = i && Cr[i] || null, !e || !n || !i) throw new N("argument-error", Ar + ", " + kr + "and " + _r + " are required in a valid action code URL.");
                    Qi(this, {
                        apiKey: e,
                        operation: i,
                        code: n,
                        continueUrl: Fn(t, Sr) || null,
                        languageCode: Fn(t, Nr) || null,
                        tenantId: Fn(t, Or) || null
                    })
                }
                var Ar = "apiKey",
                    kr = "oobCode",
                    Sr = "continueUrl",
                    Nr = "languageCode",
                    _r = "mode",
                    Or = "tenantId",
                    Cr = {
                        recoverEmail: "RECOVER_EMAIL",
                        resetPassword: "PASSWORD_RESET",
                        revertSecondFactorAddition: hr,
                        signIn: fr,
                        verifyAndChangeEmail: lr,
                        verifyEmail: "VERIFY_EMAIL"
                    };

                function Rr(t) {
                    try {
                        return new Er(t)
                    } catch (e) {
                        return null
                    }
                }

                function Pr(t) {
                    var e = t[jr];
                    if ("undefined" === typeof e) throw new N("missing-continue-uri");
                    if ("string" !== typeof e || "string" === typeof e && !e.length) throw new N("invalid-continue-uri");
                    this.h = e, this.b = this.a = null, this.g = !1;
                    var n = t[Dr];
                    if (n && "object" === typeof n) {
                        e = n[Fr];
                        var i = n[Ur];
                        if (n = n[Vr], "string" === typeof e && e.length) {
                            if (this.a = e, "undefined" !== typeof i && "boolean" !== typeof i) throw new N("argument-error", Ur + " property must be a boolean when specified.");
                            if (this.g = !!i, "undefined" !== typeof n && ("string" !== typeof n || "string" === typeof n && !n.length)) throw new N("argument-error", Vr + " property must be a non empty string when specified.");
                            this.b = n || null
                        } else {
                            if ("undefined" !== typeof e) throw new N("argument-error", Fr + " property must be a non empty string when specified.");
                            if ("undefined" !== typeof i || "undefined" !== typeof n) throw new N("missing-android-pkg-name")
                        }
                    } else if ("undefined" !== typeof n) throw new N("argument-error", Dr + " property must be a non null object when specified.");
                    if (this.f = null, (e = t[Mr]) && "object" === typeof e) {
                        if ("string" === typeof(e = e[Kr]) && e.length) this.f = e;
                        else if ("undefined" !== typeof e) throw new N("argument-error", Kr + " property must be a non empty string when specified.")
                    } else if ("undefined" !== typeof e) throw new N("argument-error", Mr + " property must be a non null object when specified.");
                    if ("undefined" !== typeof(e = t[xr]) && "boolean" !== typeof e) throw new N("argument-error", xr + " property must be a boolean when specified.");
                    if (this.c = !!e, "undefined" !== typeof(t = t[Lr]) && ("string" !== typeof t || "string" === typeof t && !t.length)) throw new N("argument-error", Lr + " property must be a non empty string when specified.");
                    this.i = t || null
                }
                var Dr = "android",
                    Lr = "dynamicLinkDomain",
                    xr = "handleCodeInApp",
                    Mr = "iOS",
                    jr = "url",
                    Ur = "installApp",
                    Vr = "minimumVersion",
                    Fr = "packageName",
                    Kr = "bundleId";

                function qr(t) {
                    var e = {};
                    for (var n in e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp = t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e) null === e[n] && delete e[n];
                    return e
                }
                var Hr = null;

                function Gr(t) {
                    var e = [];
                    return function(t, e) {
                        function n(e) {
                            for (; i < t.length;) {
                                var n = t.charAt(i++),
                                    r = Hr[n];
                                if (null != r) return r;
                                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n)
                            }
                            return e
                        }! function() {
                            if (!Hr) {
                                Hr = {};
                                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; 5 > n; n++)
                                    for (var i = t.concat(e[n].split("")), r = 0; r < i.length; r++) {
                                        var o = i[r];
                                        void 0 === Hr[o] && (Hr[o] = r)
                                    }
                            }
                        }();
                        for (var i = 0;;) {
                            var r = n(-1),
                                o = n(0),
                                a = n(64),
                                s = n(64);
                            if (64 === s && -1 === r) break;
                            e(r << 2 | o >> 4), 64 != a && (e(o << 4 & 240 | a >> 2), 64 != s && e(a << 6 & 192 | s))
                        }
                    }(t, (function(t) {
                        e.push(t)
                    })), e
                }

                function Br(t) {
                    var e = Xr(t);
                    if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error("Invalid JWT");
                    this.h = t, this.a = e.exp, this.i = e.sub, t = Date.now() / 1e3, this.g = e.iat || (t > this.a ? this.a : t), this.b = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.c = !!e.is_anonymous || "anonymous" == this.b
                }

                function Wr(t) {
                    try {
                        return new Br(t)
                    } catch (e) {
                        return null
                    }
                }

                function Xr(t) {
                    if (!t) return null;
                    if (3 != (t = t.split(".")).length) return null;
                    for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += ".";
                    try {
                        var i = Gr(t);
                        for (t = [], n = e = 0; e < i.length;) {
                            var r = i[e++];
                            if (128 > r) t[n++] = String.fromCharCode(r);
                            else if (191 < r && 224 > r) {
                                var o = i[e++];
                                t[n++] = String.fromCharCode((31 & r) << 6 | 63 & o)
                            } else if (239 < r && 365 > r) {
                                o = i[e++];
                                var a = i[e++],
                                    s = ((7 & r) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & i[e++]) - 65536;
                                t[n++] = String.fromCharCode(55296 + (s >> 10)), t[n++] = String.fromCharCode(56320 + (1023 & s))
                            } else o = i[e++], a = i[e++], t[n++] = String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & a)
                        }
                        return JSON.parse(t.join(""))
                    } catch (u) {}
                    return null
                }
                Br.prototype.T = function() {
                    return this.f
                }, Br.prototype.l = function() {
                    return this.c
                }, Br.prototype.toString = function() {
                    return this.h
                };
                var Zr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                    Jr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                    Yr = {
                        nd: {
                            Ja: "locale",
                            va: 700,
                            ua: 600,
                            fa: "facebook.com",
                            Ya: Jr
                        },
                        pd: {
                            Ja: null,
                            va: 500,
                            ua: 750,
                            fa: "github.com",
                            Ya: Jr
                        },
                        qd: {
                            Ja: "hl",
                            va: 515,
                            ua: 680,
                            fa: "google.com",
                            Ya: Jr
                        },
                        wd: {
                            Ja: "lang",
                            va: 485,
                            ua: 705,
                            fa: "twitter.com",
                            Ya: Zr
                        },
                        kd: {
                            Ja: "locale",
                            va: 640,
                            ua: 600,
                            fa: "apple.com",
                            Ya: []
                        }
                    };

                function zr(t) {
                    for (var e in Yr)
                        if (Yr[e].fa == t) return Yr[e];
                    return null
                }

                function $r(t) {
                    var e = {};
                    e["facebook.com"] = io, e["google.com"] = oo, e["github.com"] = ro, e["twitter.com"] = ao;
                    var n = t && t[to];
                    try {
                        if (n) return e[n] ? new e[n](t) : new no(t);
                        if ("undefined" !== typeof t[Qr]) return new eo(t)
                    } catch (i) {}
                    return null
                }
                var Qr = "idToken",
                    to = "providerId";

                function eo(t) {
                    var e = t[to];
                    if (!e && t[Qr]) {
                        var n = Wr(t[Qr]);
                        n && n.b && (e = n.b)
                    }
                    if (!e) throw Error("Invalid additional user info!");
                    "anonymous" != e && "custom" != e || (e = null), n = !1, "undefined" !== typeof t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), $i(this, "providerId", e), $i(this, "isNewUser", n)
                }

                function no(t) {
                    eo.call(this, t), $i(this, "profile", er((t = Fi(t.rawUserInfo || "{}")) || {}))
                }

                function io(t) {
                    if (no.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
                }

                function ro(t) {
                    if (no.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                    $i(this, "username", this.profile && this.profile.login || null)
                }

                function oo(t) {
                    if (no.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!")
                }

                function ao(t) {
                    if (no.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                    $i(this, "username", t.screenName || null)
                }

                function so(t) {
                    var e = Kn(t),
                        n = Fn(e, "link"),
                        i = Fn(Kn(n), "link");
                    return e = Fn(e, "deep_link_id"), Fn(Kn(e), "link") || e || i || n || t
                }

                function uo(t, e) {
                    if (!t && !e) throw new N("internal-error", "Internal assert: no raw session string available");
                    if (t && e) throw new N("internal-error", "Internal assert: unable to determine the session type");
                    this.a = t || null, this.b = e || null, this.type = this.a ? co : ho
                }
                k(no, eo), k(io, no), k(ro, no), k(oo, no), k(ao, no);
                var co = "enroll",
                    ho = "signin";

                function fo() {}

                function lo(t, e) {
                    return t.then((function(t) {
                        if (t[ns]) {
                            var n = Wr(t[ns]);
                            if (!n || e != n.i) throw new N("user-mismatch");
                            return t
                        }
                        throw new N("user-mismatch")
                    })).o((function(t) {
                        throw t && t.code && t.code == C + "user-not-found" ? new N("user-mismatch") : t
                    }))
                }

                function po(t, e) {
                    if (!e) throw new N("internal-error", "failed to construct a credential");
                    this.a = e, $i(this, "providerId", t), $i(this, "signInMethod", t)
                }

                function vo(t) {
                    return {
                        pendingToken: t.a,
                        requestUri: "http://localhost"
                    }
                }

                function mo(t) {
                    if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try {
                        return new po(t.providerId, t.pendingToken)
                    } catch (e) {}
                    return null
                }

                function go(t, e, n) {
                    if (this.a = null, e.idToken || e.accessToken) e.idToken && $i(this, "idToken", e.idToken), e.accessToken && $i(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && $i(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
                    else {
                        if (!e.oauthToken || !e.oauthTokenSecret) throw new N("internal-error", "failed to construct a credential");
                        $i(this, "accessToken", e.oauthToken), $i(this, "secret", e.oauthTokenSecret)
                    }
                    $i(this, "providerId", t), $i(this, "signInMethod", n)
                }

                function bo(t) {
                    var e = {};
                    return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
                        postBody: Qn(e).toString(),
                        requestUri: "http://localhost"
                    }, t.a && (delete e.postBody, e.pendingToken = t.a), e
                }

                function yo(t) {
                    if (t && t.providerId && t.signInMethod) {
                        var e = {
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                            oauthTokenSecret: t.oauthTokenSecret,
                            oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                            nonce: t.nonce,
                            pendingToken: t.pendingToken
                        };
                        try {
                            return new go(t.providerId, e, t.signInMethod)
                        } catch (n) {}
                    }
                    return null
                }

                function wo(t, e) {
                    this.Qc = e || [], Qi(this, {
                        providerId: t,
                        isOAuthProvider: !0
                    }), this.Jb = {}, this.qb = (zr(t) || {}).Ja || null, this.pb = null
                }

                function Io(t) {
                    if ("string" !== typeof t || 0 != t.indexOf("saml.")) throw new N("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                    wo.call(this, t, [])
                }

                function To(t) {
                    wo.call(this, t, Jr), this.a = []
                }

                function Eo() {
                    To.call(this, "facebook.com")
                }

                function Ao(t) {
                    if (!t) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return m(t) && (e = t.accessToken), (new Eo).credential({
                        accessToken: e
                    })
                }

                function ko() {
                    To.call(this, "github.com")
                }

                function So(t) {
                    if (!t) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return m(t) && (e = t.accessToken), (new ko).credential({
                        accessToken: e
                    })
                }

                function No() {
                    To.call(this, "google.com"), this.Ca("profile")
                }

                function _o(t, e) {
                    var n = t;
                    return m(t) && (n = t.idToken, e = t.accessToken), (new No).credential({
                        idToken: n,
                        accessToken: e
                    })
                }

                function Oo() {
                    wo.call(this, "twitter.com", Zr)
                }

                function Co(t, e) {
                    var n = t;
                    if (m(n) || (n = {
                            oauthToken: t,
                            oauthTokenSecret: e
                        }), !n.oauthToken || !n.oauthTokenSecret) throw new N("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                    return new go("twitter.com", n, "twitter.com")
                }

                function Ro(t, e, n) {
                    this.a = t, this.f = e, $i(this, "providerId", "password"), $i(this, "signInMethod", n === Do.EMAIL_LINK_SIGN_IN_METHOD ? Do.EMAIL_LINK_SIGN_IN_METHOD : Do.EMAIL_PASSWORD_SIGN_IN_METHOD)
                }

                function Po(t) {
                    return t && t.email && t.password ? new Ro(t.email, t.password, t.signInMethod) : null
                }

                function Do() {
                    Qi(this, {
                        providerId: "password",
                        isOAuthProvider: !1
                    })
                }

                function Lo(t, e) {
                    if (!(e = xo(e))) throw new N("argument-error", "Invalid email link!");
                    return new Ro(t, e.code, Do.EMAIL_LINK_SIGN_IN_METHOD)
                }

                function xo(t) {
                    return (t = Rr(t = so(t))) && t.operation === fr ? t : null
                }

                function Mo(t) {
                    if (!(t.fb && t.eb || t.La && t.ea)) throw new N("internal-error");
                    this.a = t, $i(this, "providerId", "phone"), this.fa = "phone", $i(this, "signInMethod", "phone")
                }

                function jo(t) {
                    if (t && "phone" === t.providerId && (t.verificationId && t.verificationCode || t.temporaryProof && t.phoneNumber)) {
                        var e = {};
                        return B(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], (function(n) {
                            t[n] && (e[n] = t[n])
                        })), new Mo(e)
                    }
                    return null
                }

                function Uo(t) {
                    return t.a.La && t.a.ea ? {
                        temporaryProof: t.a.La,
                        phoneNumber: t.a.ea
                    } : {
                        sessionInfo: t.a.fb,
                        code: t.a.eb
                    }
                }

                function Vo(t) {
                    try {
                        this.a = t || i.Z.auth()
                    } catch (e) {
                        throw new N("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                    }
                    Qi(this, {
                        providerId: "phone",
                        isOAuthProvider: !1
                    })
                }

                function Fo(t, e) {
                    if (!t) throw new N("missing-verification-id");
                    if (!e) throw new N("missing-verification-code");
                    return new Mo({
                        fb: t,
                        eb: e
                    })
                }

                function Ko(t) {
                    if (t.temporaryProof && t.phoneNumber) return new Mo({
                        La: t.temporaryProof,
                        ea: t.phoneNumber
                    });
                    var e = t && t.providerId;
                    if (!e || "password" === e) return null;
                    var n = t && t.oauthAccessToken,
                        i = t && t.oauthTokenSecret,
                        r = t && t.nonce,
                        o = t && t.oauthIdToken,
                        a = t && t.pendingToken;
                    try {
                        switch (e) {
                            case "google.com":
                                return _o(o, n);
                            case "facebook.com":
                                return Ao(n);
                            case "github.com":
                                return So(n);
                            case "twitter.com":
                                return Co(n, i);
                            default:
                                return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new po(e, a) : new go(e, {
                                    pendingToken: a,
                                    idToken: t.oauthIdToken,
                                    accessToken: t.oauthAccessToken
                                }, e) : new To(e).credential({
                                    idToken: o,
                                    accessToken: n,
                                    rawNonce: r
                                }) : null
                        }
                    } catch (s) {
                        return null
                    }
                }

                function qo(t) {
                    if (!t.isOAuthProvider) throw new N("invalid-oauth-provider")
                }

                function Ho(t, e, n, i, r, o, a) {
                    if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a) throw new N("invalid-auth-event");
                    if (this.g && this.a) throw new N("invalid-auth-event");
                    if (this.g && !this.f) throw new N("invalid-auth-event")
                }

                function Go(t) {
                    return (t = t || {}).type ? new Ho(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && _(t.error), t.postBody, t.tenantId) : null
                }

                function Bo() {
                    this.b = null, this.a = []
                }
                uo.prototype.Ha = function() {
                    return this.a ? Oe(this.a) : Oe(this.b)
                }, uo.prototype.w = function() {
                    return this.type == co ? {
                        multiFactorSession: {
                            idToken: this.a
                        }
                    } : {
                        multiFactorSession: {
                            pendingCredential: this.b
                        }
                    }
                }, fo.prototype.ka = function() {}, fo.prototype.b = function() {}, fo.prototype.c = function() {}, fo.prototype.w = function() {}, po.prototype.ka = function(t) {
                    return As(t, vo(this))
                }, po.prototype.b = function(t, e) {
                    var n = vo(this);
                    return n.idToken = e, ks(t, n)
                }, po.prototype.c = function(t, e) {
                    return lo(Ss(t, vo(this)), e)
                }, po.prototype.w = function() {
                    return {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod,
                        pendingToken: this.a
                    }
                }, go.prototype.ka = function(t) {
                    return As(t, bo(this))
                }, go.prototype.b = function(t, e) {
                    var n = bo(this);
                    return n.idToken = e, ks(t, n)
                }, go.prototype.c = function(t, e) {
                    return lo(Ss(t, bo(this)), e)
                }, go.prototype.w = function() {
                    var t = {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod
                    };
                    return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t
                }, wo.prototype.Ka = function(t) {
                    return this.Jb = mt(t), this
                }, k(Io, wo), k(To, wo), To.prototype.Ca = function(t) {
                    return J(this.a, t) || this.a.push(t), this
                }, To.prototype.Rb = function() {
                    return Q(this.a)
                }, To.prototype.credential = function(t, e) {
                    var n;
                    if (!(n = m(t) ? {
                            idToken: t.idToken || null,
                            accessToken: t.accessToken || null,
                            nonce: t.rawNonce || null
                        } : {
                            idToken: t || null,
                            accessToken: e || null
                        }).idToken && !n.accessToken) throw new N("argument-error", "credential failed: must provide the ID token and/or the access token.");
                    return new go(this.providerId, n, this.providerId)
                }, k(Eo, To), $i(Eo, "PROVIDER_ID", "facebook.com"), $i(Eo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), k(ko, To), $i(ko, "PROVIDER_ID", "github.com"), $i(ko, "GITHUB_SIGN_IN_METHOD", "github.com"), k(No, To), $i(No, "PROVIDER_ID", "google.com"), $i(No, "GOOGLE_SIGN_IN_METHOD", "google.com"), k(Oo, wo), $i(Oo, "PROVIDER_ID", "twitter.com"), $i(Oo, "TWITTER_SIGN_IN_METHOD", "twitter.com"), Ro.prototype.ka = function(t) {
                    return this.signInMethod == Do.EMAIL_LINK_SIGN_IN_METHOD ? su(t, Ls, {
                        email: this.a,
                        oobCode: this.f
                    }) : su(t, nu, {
                        email: this.a,
                        password: this.f
                    })
                }, Ro.prototype.b = function(t, e) {
                    return this.signInMethod == Do.EMAIL_LINK_SIGN_IN_METHOD ? su(t, xs, {
                        idToken: e,
                        email: this.a,
                        oobCode: this.f
                    }) : su(t, Zs, {
                        idToken: e,
                        email: this.a,
                        password: this.f
                    })
                }, Ro.prototype.c = function(t, e) {
                    return lo(this.ka(t), e)
                }, Ro.prototype.w = function() {
                    return {
                        email: this.a,
                        password: this.f,
                        signInMethod: this.signInMethod
                    }
                }, Qi(Do, {
                    PROVIDER_ID: "password"
                }), Qi(Do, {
                    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                }), Qi(Do, {
                    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                }), Mo.prototype.ka = function(t) {
                    return t.gb(Uo(this))
                }, Mo.prototype.b = function(t, e) {
                    var n = Uo(this);
                    return n.idToken = e, su(t, ru, n)
                }, Mo.prototype.c = function(t, e) {
                    var n = Uo(this);
                    return n.operation = "REAUTH", lo(t = su(t, ou, n), e)
                }, Mo.prototype.w = function() {
                    var t = {
                        providerId: "phone"
                    };
                    return this.a.fb && (t.verificationId = this.a.fb), this.a.eb && (t.verificationCode = this.a.eb), this.a.La && (t.temporaryProof = this.a.La), this.a.ea && (t.phoneNumber = this.a.ea), t
                }, Vo.prototype.gb = function(t, e) {
                    var n = this.a.a;
                    return Oe(e.verify()).then((function(i) {
                        if ("string" !== typeof i) throw new N("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                        if ("recaptcha" === e.type) {
                            var r, o = m(t) ? t.session : null,
                                a = m(t) ? t.phoneNumber : t;
                            return r = o && o.type == co ? o.Ha().then((function(t) {
                                return function(t, e) {
                                    return su(t, Ys, e).then((function(t) {
                                        return t.phoneSessionInfo.sessionInfo
                                    }))
                                }(n, {
                                    idToken: t,
                                    phoneEnrollmentInfo: {
                                        phoneNumber: a,
                                        recaptchaToken: i
                                    }
                                })
                            })) : o && o.type == ho ? o.Ha().then((function(e) {
                                return function(t, e) {
                                    return su(t, zs, e).then((function(t) {
                                        return t.phoneResponseInfo.sessionInfo
                                    }))
                                }(n, {
                                    mfaPendingCredential: e,
                                    mfaEnrollmentId: t.multiFactorHint && t.multiFactorHint.uid || t.multiFactorUid,
                                    phoneSignInInfo: {
                                        recaptchaToken: i
                                    }
                                })
                            })) : function(t, e) {
                                return su(t, Ws, e)
                            }(n, {
                                phoneNumber: a,
                                recaptchaToken: i
                            }), r.then((function(t) {
                                return "function" === typeof e.reset && e.reset(), t
                            }), (function(t) {
                                throw "function" === typeof e.reset && e.reset(), t
                            }))
                        }
                        throw new N("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                    }))
                }, Qi(Vo, {
                    PROVIDER_ID: "phone"
                }), Qi(Vo, {
                    PHONE_SIGN_IN_METHOD: "phone"
                }), Ho.prototype.getUid = function() {
                    var t = [];
                    return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-")
                }, Ho.prototype.T = function() {
                    return this.h
                }, Ho.prototype.w = function() {
                    return {
                        type: this.c,
                        eventId: this.b,
                        urlResponse: this.g,
                        sessionId: this.f,
                        postBody: this.i,
                        tenantId: this.h,
                        error: this.a && this.a.w()
                    }
                };
                var Wo, Xo = null;

                function Zo(t) {
                    var e = "unauthorized-domain",
                        n = void 0,
                        i = Kn(t);
                    t = i.a, "chrome-extension" == (i = i.c) ? n = Gt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = Gt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", N.call(this, e, n)
                }

                function Jo(t, e, n) {
                    N.call(this, t, n), (t = e || {}).Kb && $i(this, "email", t.Kb), t.ea && $i(this, "phoneNumber", t.ea), t.credential && $i(this, "credential", t.credential), t.$b && $i(this, "tenantId", t.$b)
                }

                function Yo(t) {
                    if (t.code) {
                        var e = t.code || "";
                        0 == e.indexOf(C) && (e = e.substring(C.length));
                        var n = {
                            credential: Ko(t),
                            $b: t.tenantId
                        };
                        if (t.email) n.Kb = t.email;
                        else if (t.phoneNumber) n.ea = t.phoneNumber;
                        else if (!n.credential) return new N(e, t.message || void 0);
                        return new Jo(e, n, t.message)
                    }
                    return null
                }

                function zo() {}

                function $o(t) {
                    return t.c || (t.c = t.b())
                }

                function Qo() {}

                function ta(t) {
                    if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                        for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
                            var i = e[n];
                            try {
                                return new ActiveXObject(i), t.f = i
                            } catch (r) {}
                        }
                        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                    }
                    return t.f
                }

                function ea() {}

                function na() {
                    this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = T(this.qc, this), this.a.onerror = T(this.Tb, this), this.a.onprogress = T(this.rc, this), this.a.ontimeout = T(this.vc, this)
                }

                function ia(t, e) {
                    t.readyState = e, t.onreadystatechange && t.onreadystatechange()
                }

                function ra(t, e, n) {
                    this.reset(t, e, n, void 0, void 0)
                }
                k(Zo, N), k(Jo, N), Jo.prototype.w = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId);
                    var e = this.credential && this.credential.w();
                    return e && bt(t, e), t
                }, Jo.prototype.toJSON = function() {
                    return this.w()
                }, zo.prototype.c = null, k(Qo, zo), Qo.prototype.a = function() {
                    var t = ta(this);
                    return t ? new ActiveXObject(t) : new XMLHttpRequest
                }, Qo.prototype.b = function() {
                    var t = {};
                    return ta(this) && (t[0] = !0, t[1] = !0), t
                }, Wo = new Qo, k(ea, zo), ea.prototype.a = function() {
                    var t = new XMLHttpRequest;
                    if ("withCredentials" in t) return t;
                    if ("undefined" != typeof XDomainRequest) return new na;
                    throw Error("Unsupported browser")
                }, ea.prototype.b = function() {
                    return {}
                }, (t = na.prototype).open = function(t, e, n) {
                    if (null != n && !n) throw Error("Only async requests are supported.");
                    this.a.open(t, e)
                }, t.send = function(t) {
                    if (t) {
                        if ("string" != typeof t) throw Error("Only string data is supported");
                        this.a.send(t)
                    } else this.a.send()
                }, t.abort = function() {
                    this.a.abort()
                }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) {
                    return "content-type" == t.toLowerCase() ? this.a.contentType : ""
                }, t.qc = function() {
                    this.status = 200, this.response = this.responseText = this.a.responseText, ia(this, 4)
                }, t.Tb = function() {
                    this.status = 500, this.response = this.responseText = "", ia(this, 4)
                }, t.vc = function() {
                    this.Tb()
                }, t.rc = function() {
                    this.status = 200, ia(this, 1)
                }, t.getAllResponseHeaders = function() {
                    return "content-type: " + this.a.contentType
                }, ra.prototype.a = null;

                function oa(t) {
                    this.f = t, this.b = this.c = this.a = null
                }

                function aa(t, e) {
                    this.name = t, this.value = e
                }
                ra.prototype.reset = function(t, e, n, i, r) {
                    "number" == typeof r || 0, i || A(), delete this.a
                }, aa.prototype.toString = function() {
                    return this.name
                };
                var sa = new aa("SEVERE", 1e3),
                    ua = new aa("WARNING", 900),
                    ca = new aa("CONFIG", 700),
                    ha = new aa("FINE", 500);

                function fa(t) {
                    return t.c ? t.c : t.a ? fa(t.a) : (j("Root logger has no level set."), null)
                }
                oa.prototype.log = function(t, e, n) {
                    if (t.value >= fa(this).value)
                        for (v(e) && (e = e()), t = new ra(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a
                };
                var la, da = {},
                    pa = null;

                function va(t) {
                    var e;
                    if (pa || (pa = new oa(""), da[""] = pa, pa.c = ca), !(e = da[t])) {
                        e = new oa(t);
                        var n = t.lastIndexOf("."),
                            i = t.substr(n + 1);
                        (n = va(t.substr(0, n))).b || (n.b = {}), n.b[i] = e, e.a = n, da[t] = e
                    }
                    return e
                }

                function ma(t, e) {
                    t && t.log(ha, e, void 0)
                }

                function ga(t) {
                    this.f = t
                }

                function ba(t) {
                    En.call(this), this.u = t, this.h = void 0, this.readyState = ya, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.l = new Headers, this.b = null, this.s = "GET", this.f = "", this.a = !1, this.i = va("goog.net.FetchXmlHttp"), this.m = this.c = this.g = null
                }
                k(ga, zo), ga.prototype.a = function() {
                    return new ba(this.f)
                }, ga.prototype.b = (la = {}, function() {
                    return la
                }), k(ba, En);
                var ya = 0;

                function wa(t) {
                    t.c.read().then(t.pc.bind(t)).catch(t.Va.bind(t))
                }

                function Ia(t) {
                    t.readyState = 4, t.g = null, t.c = null, t.m = null, Ta(t)
                }

                function Ta(t) {
                    t.onreadystatechange && t.onreadystatechange.call(t)
                }

                function Ea(t) {
                    En.call(this), this.headers = new Rn, this.D = t || null, this.c = !1, this.C = this.a = null, this.h = this.P = this.l = "", this.f = this.N = this.i = this.J = !1, this.g = 0, this.s = null, this.m = Aa, this.u = this.S = !1
                }(t = ba.prototype).open = function(t, e) {
                    if (this.readyState != ya) throw this.abort(), Error("Error reopening a connection");
                    this.s = t, this.f = e, this.readyState = 1, Ta(this)
                }, t.send = function(t) {
                    if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                    this.a = !0;
                    var e = {
                        headers: this.l,
                        method: this.s,
                        credentials: this.h,
                        cache: void 0
                    };
                    t && (e.body = t), this.u.fetch(new Request(this.f, e)).then(this.uc.bind(this), this.Va.bind(this))
                }, t.abort = function() {
                    this.response = this.responseText = "", this.l = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, Ia(this)), this.readyState = ya
                }, t.uc = function(t) {
                    this.a && (this.g = t, this.b || (this.status = this.g.status, this.statusText = this.g.statusText, this.b = t.headers, this.readyState = 2, Ta(this)), this.a && (this.readyState = 3, Ta(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.sc.bind(this), this.Va.bind(this)) : "undefined" !== typeof u.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.m = new TextDecoder, wa(this)) : t.text().then(this.tc.bind(this), this.Va.bind(this)))))
                }, t.pc = function(t) {
                    if (this.a) {
                        var e = this.m.decode(t.value ? t.value : new Uint8Array(0), {
                            stream: !t.done
                        });
                        e && (this.response = this.responseText += e), t.done ? Ia(this) : Ta(this), 3 == this.readyState && wa(this)
                    }
                }, t.tc = function(t) {
                    this.a && (this.response = this.responseText = t, Ia(this))
                }, t.sc = function(t) {
                    this.a && (this.response = t, Ia(this))
                }, t.Va = function(t) {
                    var e = this.i;
                    e && e.log(ua, "Failed to fetch url " + this.f, t instanceof Error ? t : Error(t)), this.a && Ia(this)
                }, t.setRequestHeader = function(t, e) {
                    this.l.append(t, e)
                }, t.getResponseHeader = function(t) {
                    return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.i) && t.log(ua, "Attempting to get response header but no headers have been received for url: " + this.f, void 0), "")
                }, t.getAllResponseHeaders = function() {
                    if (!this.b) {
                        var t = this.i;
                        return t && t.log(ua, "Attempting to get all response headers but no headers have been received for url: " + this.f, void 0), ""
                    }
                    t = [];
                    for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
                    return t.join("\r\n")
                }, Object.defineProperty(ba.prototype, "withCredentials", {
                    get: function() {
                        return "include" === this.h
                    },
                    set: function(t) {
                        this.h = t ? "include" : "same-origin"
                    }
                }), k(Ea, En);
                var Aa = "";
                Ea.prototype.b = va("goog.net.XhrIo");
                var ka = /^https?$/i,
                    Sa = ["POST", "PUT"];

                function Na(t, e, n, i, r) {
                    if (t.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + t.l + "; newUri=" + e);
                    n = n ? n.toUpperCase() : "GET", t.l = e, t.h = "", t.P = n, t.J = !1, t.c = !0, t.a = t.D ? t.D.a() : Wo.a(), t.C = t.D ? $o(t.D) : $o(Wo), t.a.onreadystatechange = T(t.Wb, t);
                    try {
                        ma(t.b, Ma(t, "Opening Xhr")), t.N = !0, t.a.open(n, String(e), !0), t.N = !1
                    } catch (a) {
                        return ma(t.b, Ma(t, "Error opening Xhr: " + a.message)), void Oa(t, a)
                    }
                    e = i || "";
                    var o = new Rn(t.headers);
                    r && function(t, e) {
                        if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                        else if (p(t) || "string" === typeof t) B(t, e, void 0);
                        else
                            for (var n = Cn(t), i = On(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t)
                    }(r, (function(t, e) {
                        o.set(e, t)
                    })), r = function(t) {
                        t: {
                            for (var e = _a, n = t.length, i = "string" === typeof t ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) {
                                    e = r;
                                    break t
                                }
                            e = -1
                        }
                        return 0 > e ? null : "string" === typeof t ? t.charAt(e) : t[e]
                    }(o.Y()), i = u.FormData && e instanceof u.FormData, !J(Sa, n) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach((function(t, e) {
                        this.a.setRequestHeader(e, t)
                    }), t), t.m && (t.a.responseType = t.m), "withCredentials" in t.a && t.a.withCredentials !== t.S && (t.a.withCredentials = t.S);
                    try {
                        Da(t), 0 < t.g && (t.u = function(t) {
                            return Jt && ae(9) && "number" === typeof t.timeout && void 0 !== t.ontimeout
                        }(t.a), ma(t.b, Ma(t, "Will abort after " + t.g + "ms if incomplete, xhr2 " + t.u)), t.u ? (t.a.timeout = t.g, t.a.ontimeout = T(t.Ma, t)) : t.s = Nn(t.Ma, t.g, t)), ma(t.b, Ma(t, "Sending request")), t.i = !0, t.a.send(e), t.i = !1
                    } catch (a) {
                        ma(t.b, Ma(t, "Send error: " + a.message)), Oa(t, a)
                    }
                }

                function _a(t) {
                    return "content-type" == t.toLowerCase()
                }

                function Oa(t, e) {
                    t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, Ca(t), Pa(t)
                }

                function Ca(t) {
                    t.J || (t.J = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
                }

                function Ra(t) {
                    if (t.c && "undefined" != typeof s)
                        if (t.C[1] && 4 == La(t) && 2 == xa(t)) ma(t.b, Ma(t, "Local request error detected and ignored"));
                        else if (t.i && 4 == La(t)) Nn(t.Wb, 0, t);
                    else if (t.dispatchEvent("readystatechange"), 4 == La(t)) {
                        ma(t.b, Ma(t, "Request complete")), t.c = !1;
                        try {
                            var e, n = xa(t);
                            t: switch (n) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var i = !0;
                                    break t;
                                default:
                                    i = !1
                            }
                            if (!(e = i)) {
                                var r;
                                if (r = 0 === n) {
                                    var o = String(t.l).match(Ln)[1] || null;
                                    if (!o && u.self && u.self.location) {
                                        var a = u.self.location.protocol;
                                        o = a.substr(0, a.length - 1)
                                    }
                                    r = !ka.test(o ? o.toLowerCase() : "")
                                }
                                e = r
                            }
                            if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
                            else {
                                try {
                                    var c = 2 < La(t) ? t.a.statusText : ""
                                } catch (h) {
                                    ma(t.b, "Can not get status: " + h.message), c = ""
                                }
                                t.h = c + " [" + xa(t) + "]", Ca(t)
                            }
                        } finally {
                            Pa(t)
                        }
                    }
                }

                function Pa(t, e) {
                    if (t.a) {
                        Da(t);
                        var n = t.a,
                            i = t.C[0] ? l : null;
                        t.a = null, t.C = null, e || t.dispatchEvent("ready");
                        try {
                            n.onreadystatechange = i
                        } catch (r) {
                            (t = t.b) && t.log(sa, "Problem encountered resetting onreadystatechange: " + r.message, void 0)
                        }
                    }
                }

                function Da(t) {
                    t.a && t.u && (t.a.ontimeout = null), t.s && (u.clearTimeout(t.s), t.s = null)
                }

                function La(t) {
                    return t.a ? t.a.readyState : 0
                }

                function xa(t) {
                    try {
                        return 2 < La(t) ? t.a.status : -1
                    } catch (e) {
                        return -1
                    }
                }

                function Ma(t, e) {
                    return e + " [" + t.P + " " + t.l + " " + xa(t) + "]"
                }

                function ja(t) {
                    var e = Za;
                    this.g = [], this.u = e, this.s = t || null, this.f = this.a = !1, this.c = void 0, this.v = this.C = this.i = !1, this.h = 0, this.b = null, this.l = 0
                }

                function Ua(t, e, n) {
                    t.a = !0, t.c = n, t.f = !e, qa(t)
                }

                function Va(t) {
                    if (t.a) {
                        if (!t.v) throw new Ha(t);
                        t.v = !1
                    }
                }

                function Fa(t, e, n, i) {
                    t.g.push([e, n, i]), t.a && qa(t)
                }

                function Ka(t) {
                    return Z(t.g, (function(t) {
                        return v(t[1])
                    }))
                }

                function qa(t) {
                    if (t.h && t.a && Ka(t)) {
                        var e = t.h,
                            n = Wa[e];
                        n && (u.clearTimeout(n.a), delete Wa[e]), t.h = 0
                    }
                    t.b && (t.b.l--, delete t.b), e = t.c;
                    for (var i = n = !1; t.g.length && !t.i;) {
                        var r = t.g.shift(),
                            o = r[0],
                            a = r[1];
                        if (r = r[2], o = t.f ? a : o) try {
                            var s = o.call(r || t.s, e);
                            void 0 !== s && (t.f = t.f && (s == e || s instanceof Error), t.c = e = s), (L(e) || "function" === typeof u.Promise && e instanceof u.Promise) && (i = !0, t.i = !0)
                        } catch (c) {
                            e = c, t.f = !0, Ka(t) || (n = !0)
                        }
                    }
                    t.c = e, i && (s = T(t.m, t, !0), i = T(t.m, t, !1), e instanceof ja ? (Fa(e, s, i), e.C = !0) : e.then(s, i)), n && (e = new Ba(e), Wa[e.a] = e, t.h = e.a)
                }

                function Ha() {
                    x.call(this)
                }

                function Ga() {
                    x.call(this)
                }

                function Ba(t) {
                    this.a = u.setTimeout(T(this.c, this), 0), this.b = t
                }(t = Ea.prototype).Ma = function() {
                    "undefined" != typeof s && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", ma(this.b, Ma(this, this.h)), this.dispatchEvent("timeout"), this.abort(8))
                }, t.abort = function() {
                    this.a && this.c && (ma(this.b, Ma(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Pa(this))
                }, t.Da = function() {
                    this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), Pa(this, !0)), Ea.bb.Da.call(this)
                }, t.Wb = function() {
                    this.ya || (this.N || this.i || this.f ? Ra(this) : this.Jc())
                }, t.Jc = function() {
                    Ra(this)
                }, t.getResponse = function() {
                    try {
                        if (!this.a) return null;
                        if ("response" in this.a) return this.a.response;
                        switch (this.m) {
                            case Aa:
                            case "text":
                                return this.a.responseText;
                            case "arraybuffer":
                                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                        }
                        var t = this.b;
                        return t && t.log(sa, "Response type " + this.m + " is not supported on this browser", void 0), null
                    } catch (e) {
                        return ma(this.b, "Can not get response: " + e.message), null
                    }
                }, ja.prototype.cancel = function(t) {
                    if (this.a) this.c instanceof ja && this.c.cancel();
                    else {
                        if (this.b) {
                            var e = this.b;
                            delete this.b, t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel())
                        }
                        this.u ? this.u.call(this.s, this) : this.v = !0, this.a || (t = new Ga(this), Va(this), Ua(this, !1, t))
                    }
                }, ja.prototype.m = function(t, e) {
                    this.i = !1, Ua(this, t, e)
                }, ja.prototype.then = function(t, e, n) {
                    var i, r, o = new Te((function(t, e) {
                        i = t, r = e
                    }));
                    return Fa(this, i, (function(t) {
                        t instanceof Ga ? o.cancel() : r(t)
                    })), o.then(t, e, n)
                }, ja.prototype.$goog_Thenable = !0, k(Ha, x), Ha.prototype.message = "Deferred has already fired", Ha.prototype.name = "AlreadyCalledError", k(Ga, x), Ga.prototype.message = "Deferred was canceled", Ga.prototype.name = "CanceledError", Ba.prototype.c = function() {
                    throw delete Wa[this.a], this.b
                };
                var Wa = {};

                function Xa(t) {
                    var e = {},
                        n = e.document || document,
                        i = Nt(t).toString(),
                        r = me(document, "SCRIPT"),
                        o = {
                            Xb: r,
                            Ma: void 0
                        },
                        a = new ja(o),
                        s = null,
                        c = null != e.timeout ? e.timeout : 5e3;
                    return 0 < c && (s = window.setTimeout((function() {
                            Ja(r, !0);
                            var t = new $a(za, "Timeout reached for loading script " + i);
                            Va(a), Ua(a, !1, t)
                        }), c), o.Ma = s), r.onload = r.onreadystatechange = function() {
                            r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (Ja(r, e.xd || !1, s), Va(a), Ua(a, !0, null))
                        }, r.onerror = function() {
                            Ja(r, !0, s);
                            var t = new $a(Ya, "Error while loading script " + i);
                            Va(a), Ua(a, !1, t)
                        }, bt(o = e.attributes || {}, {
                            type: "text/javascript",
                            charset: "UTF-8"
                        }), fe(r, o),
                        function(t, e) {
                            yt(t, "HTMLScriptElement"), t.src = Nt(e), (e = t.ownerDocument && t.ownerDocument.defaultView) && e != u ? e = f(e.document) : (null === h && (h = f(u.document)), e = h), e && t.setAttribute("nonce", e)
                        }(r, t),
                        function(t) {
                            var e;
                            return (e = (t || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : t.documentElement
                        }(n).appendChild(r), a
                }

                function Za() {
                    if (this && this.Xb) {
                        var t = this.Xb;
                        t && "SCRIPT" == t.tagName && Ja(t, !0, this.Ma)
                    }
                }

                function Ja(t, e, n) {
                    null != n && u.clearTimeout(n), t.onload = l, t.onerror = l, t.onreadystatechange = l, e && window.setTimeout((function() {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }), 0)
                }
                var Ya = 0,
                    za = 1;

                function $a(t, e) {
                    var n = "Jsloader error (code #" + t + ")";
                    e && (n += ": " + e), x.call(this, n), this.code = t
                }

                function Qa(t) {
                    this.f = t
                }

                function ts(t, e, n) {
                    if (this.c = t, t = e || {}, this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.m = t.secureTokenTimeout || is, this.g = mt(t.secureTokenHeaders || rs), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.i = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.v = t.firebaseTimeout || os, this.a = mt(t.firebaseHeaders || as), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == Ai(), !(n = u.XMLHttpRequest || n && i.Z.INTERNAL.node && i.Z.INTERNAL.node.XMLHttpRequest) && !Ei()) throw new N("internal-error", "The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0, Ei() ? this.f = new ga(self) : ki() ? this.f = new Qa(n) : this.f = new ea, this.b = null
                }
                k($a, x), k(Qa, zo), Qa.prototype.a = function() {
                    return new this.f
                }, Qa.prototype.b = function() {
                    return {}
                };
                var es, ns = "idToken",
                    is = new Gi(3e4, 6e4),
                    rs = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    os = new Gi(3e4, 6e4),
                    as = {
                        "Content-Type": "application/json"
                    };

                function ss(t, e) {
                    e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
                }

                function us(t, e) {
                    e && (t.l = cs("https://securetoken.googleapis.com/v1/token", e), t.h = cs("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", e), t.i = cs("https://identitytoolkit.googleapis.com/v2/", e))
                }

                function cs(t, e) {
                    return t = Kn(t), e = Kn(e.url), t.f = t.a + t.f, Mn(t, e.c), t.a = e.a, jn(t, e.g), t.toString()
                }

                function hs(t, e) {
                    e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"])
                }

                function fs(t, e, n, i, r, o, a) {
                    (function() {
                        var t = Ri();
                        return !((t = _i(t) != Ni ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t) && (!Jt || !ue || 9 < ue)
                    })() || Ei() ? t = T(t.u, t) : (es || (es = new Te((function(t, e) {
                        ! function(t, e) {
                            if (((window.gapi || {}).client || {}).request) t();
                            else {
                                u[ds] = function() {
                                        ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
                                    },
                                    function(t, e) {
                                        Fa(t, null, e, void 0)
                                    }(Xa(_t(ls, {
                                        onload: ds
                                    })), (function() {
                                        e(Error("CORS_UNSUPPORTED"))
                                    }))
                            }
                        }(t, e)
                    }))), t = T(t.s, t)), t(e, n, i, r, o, a)
                }
                ts.prototype.T = function() {
                    return this.b
                }, ts.prototype.u = function(t, e, n, i, r, o) {
                    if (Ei() && ("undefined" === typeof u.fetch || "undefined" === typeof u.Headers || "undefined" === typeof u.Request)) throw new N("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                    var a = new Ea(this.f);
                    if (o) {
                        a.g = Math.max(0, o);
                        var s = setTimeout((function() {
                            a.dispatchEvent("timeout")
                        }), o)
                    }
                    An(a, "complete", (function() {
                        s && clearTimeout(s);
                        var t = null;
                        try {
                            t = JSON.parse(function(t) {
                                try {
                                    return t.a ? t.a.responseText : ""
                                } catch (e) {
                                    return ma(t.b, "Can not get responseText: " + e.message), ""
                                }
                            }(this)) || null
                        } catch (n) {
                            t = null
                        }
                        e && e(t)
                    })), kn(a, "ready", (function() {
                        s && clearTimeout(s), Xe(this)
                    })), kn(a, "timeout", (function() {
                        s && clearTimeout(s), Xe(this), e && e(null)
                    })), Na(a, t, n, i, r)
                };
                var ls = new wt(At, "https://apis.google.com/js/client.js?onload=%{onload}"),
                    ds = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                function ps(t, e, n, i, r, o, a) {
                    var s = Kn(e + n);
                    Vn(s, "key", t.c), a && Vn(s, "cb", Date.now().toString());
                    var u = "GET" == i;
                    if (u)
                        for (var c in r) r.hasOwnProperty(c) && Vn(s, c, r[c]);
                    return new Te((function(e, n) {
                        fs(t, s.toString(), (function(t) {
                            t ? t.error ? n(cu(t, o || {})) : e(t) : n(new N("network-request-failed"))
                        }), i, u ? void 0 : oi(Vi(r)), t.a, t.v.get())
                    }))
                }

                function vs(t) {
                    if ("string" !== typeof(t = t.email) || !yi.test(t)) throw new N("invalid-email")
                }

                function ms(t) {
                    "email" in t && vs(t)
                }

                function gs(t) {
                    if (!t[ns]) {
                        if (t.mfaPendingCredential) throw new N("multi-factor-auth-required", null, mt(t));
                        throw new N("internal-error")
                    }
                }

                function bs(t) {
                    if (t.phoneNumber || t.temporaryProof) {
                        if (!t.phoneNumber || !t.temporaryProof) throw new N("internal-error")
                    } else {
                        if (!t.sessionInfo) throw new N("missing-verification-id");
                        if (!t.code) throw new N("missing-verification-code")
                    }
                }
                ts.prototype.s = function(t, e, n, i, r) {
                    var o = this;
                    es.then((function() {
                        window.gapi.client.setApiKey(o.c);
                        var a = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null), window.gapi.client.request({
                            path: t,
                            method: n,
                            body: i,
                            headers: r,
                            authType: "none",
                            callback: function(t) {
                                window.gapi.auth.setToken(a), e && e(t)
                            }
                        })
                    })).o((function(t) {
                        e && e({
                            error: {
                                message: t && t.message || "CORS_UNSUPPORTED"
                            }
                        })
                    }))
                }, ts.prototype.Ab = function() {
                    return su(this, Js, {})
                }, ts.prototype.Cb = function(t, e) {
                    return su(this, Xs, {
                        idToken: t,
                        email: e
                    })
                }, ts.prototype.Db = function(t, e) {
                    return su(this, Zs, {
                        idToken: t,
                        password: e
                    })
                };
                var ys = {
                    displayName: "DISPLAY_NAME",
                    photoUrl: "PHOTO_URL"
                };

                function ws(t) {
                    if (!t.phoneVerificationInfo) throw new N("internal-error");
                    if (!t.phoneVerificationInfo.sessionInfo) throw new N("missing-verification-id");
                    if (!t.phoneVerificationInfo.code) throw new N("missing-verification-code")
                }

                function Is(t) {
                    if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new N("internal-error")
                }

                function Ts(t, e) {
                    return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (ei(t = new zn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e
                }

                function Es(t) {
                    var e = null;
                    if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = Yo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = Yo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = Yo(t)) : t.errorMessage && (e = uu(t.errorMessage)), e) throw e;
                    gs(t)
                }

                function As(t, e) {
                    return e.returnIdpCredential = !0, su(t, $s, e)
                }

                function ks(t, e) {
                    return e.returnIdpCredential = !0, su(t, tu, e)
                }

                function Ss(t, e) {
                    return e.returnIdpCredential = !0, e.autoCreate = !1, su(t, Qs, e)
                }

                function Ns(t) {
                    if (!t.oobCode) throw new N("invalid-action-code")
                }(t = ts.prototype).Eb = function(t, e) {
                    var n = {
                            idToken: t
                        },
                        i = [];
                    return pt(ys, (function(t, r) {
                        var o = e[r];
                        null === o ? i.push(t) : r in e && (n[r] = o)
                    })), i.length && (n.deleteAttribute = i), su(this, Xs, n)
                }, t.wb = function(t, e) {
                    return bt(t = {
                        requestType: "PASSWORD_RESET",
                        email: t
                    }, e), su(this, qs, t)
                }, t.xb = function(t, e) {
                    return bt(t = {
                        requestType: "EMAIL_SIGNIN",
                        email: t
                    }, e), su(this, Vs, t)
                }, t.vb = function(t, e) {
                    return bt(t = {
                        requestType: "VERIFY_EMAIL",
                        idToken: t
                    }, e), su(this, Fs, t)
                }, t.Fb = function(t, e, n) {
                    return bt(t = {
                        requestType: "VERIFY_AND_CHANGE_EMAIL",
                        idToken: t,
                        newEmail: e
                    }, n), su(this, Ks, t)
                }, t.gb = function(t) {
                    return su(this, iu, t)
                }, t.ob = function(t, e) {
                    return su(this, Bs, {
                        oobCode: t,
                        newPassword: e
                    })
                }, t.Sa = function(t) {
                    return su(this, Os, {
                        oobCode: t
                    })
                }, t.kb = function(t) {
                    return su(this, _s, {
                        oobCode: t
                    })
                };
                var _s = {
                        endpoint: "setAccountInfo",
                        A: Ns,
                        Z: "email",
                        B: !0
                    },
                    Os = {
                        endpoint: "resetPassword",
                        A: Ns,
                        G: function(t) {
                            var e = t.requestType;
                            if (!e || !t.email && "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e) throw new N("internal-error")
                        },
                        B: !0
                    },
                    Cs = {
                        endpoint: "signupNewUser",
                        A: function(t) {
                            if (vs(t), !t.password) throw new N("weak-password")
                        },
                        G: gs,
                        V: !0,
                        B: !0
                    },
                    Rs = {
                        endpoint: "createAuthUri",
                        B: !0
                    },
                    Ps = {
                        endpoint: "deleteAccount",
                        O: ["idToken"]
                    },
                    Ds = {
                        endpoint: "setAccountInfo",
                        O: ["idToken", "deleteProvider"],
                        A: function(t) {
                            if (!Array.isArray(t.deleteProvider)) throw new N("internal-error")
                        }
                    },
                    Ls = {
                        endpoint: "emailLinkSignin",
                        O: ["email", "oobCode"],
                        A: vs,
                        G: gs,
                        V: !0,
                        B: !0
                    },
                    xs = {
                        endpoint: "emailLinkSignin",
                        O: ["idToken", "email", "oobCode"],
                        A: vs,
                        G: gs,
                        V: !0
                    },
                    Ms = {
                        endpoint: "accounts/mfaEnrollment:finalize",
                        O: ["idToken", "phoneVerificationInfo"],
                        A: ws,
                        G: gs,
                        B: !0,
                        Na: !0
                    },
                    js = {
                        endpoint: "accounts/mfaSignIn:finalize",
                        O: ["mfaPendingCredential", "phoneVerificationInfo"],
                        A: ws,
                        G: gs,
                        B: !0,
                        Na: !0
                    },
                    Us = {
                        endpoint: "getAccountInfo"
                    },
                    Vs = {
                        endpoint: "getOobConfirmationCode",
                        O: ["requestType"],
                        A: function(t) {
                            if ("EMAIL_SIGNIN" != t.requestType) throw new N("internal-error");
                            vs(t)
                        },
                        Z: "email",
                        B: !0
                    },
                    Fs = {
                        endpoint: "getOobConfirmationCode",
                        O: ["idToken", "requestType"],
                        A: function(t) {
                            if ("VERIFY_EMAIL" != t.requestType) throw new N("internal-error")
                        },
                        Z: "email",
                        B: !0
                    },
                    Ks = {
                        endpoint: "getOobConfirmationCode",
                        O: ["idToken", "newEmail", "requestType"],
                        A: function(t) {
                            if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType) throw new N("internal-error")
                        },
                        Z: "email",
                        B: !0
                    },
                    qs = {
                        endpoint: "getOobConfirmationCode",
                        O: ["requestType"],
                        A: function(t) {
                            if ("PASSWORD_RESET" != t.requestType) throw new N("internal-error");
                            vs(t)
                        },
                        Z: "email",
                        B: !0
                    },
                    Hs = {
                        mb: !0,
                        endpoint: "getProjectConfig",
                        Vb: "GET"
                    },
                    Gs = {
                        mb: !0,
                        endpoint: "getRecaptchaParam",
                        Vb: "GET",
                        G: function(t) {
                            if (!t.recaptchaSiteKey) throw new N("internal-error")
                        }
                    },
                    Bs = {
                        endpoint: "resetPassword",
                        A: Ns,
                        Z: "email",
                        B: !0
                    },
                    Ws = {
                        endpoint: "sendVerificationCode",
                        O: ["phoneNumber", "recaptchaToken"],
                        Z: "sessionInfo",
                        B: !0
                    },
                    Xs = {
                        endpoint: "setAccountInfo",
                        O: ["idToken"],
                        A: ms,
                        V: !0
                    },
                    Zs = {
                        endpoint: "setAccountInfo",
                        O: ["idToken"],
                        A: function(t) {
                            if (ms(t), !t.password) throw new N("weak-password")
                        },
                        G: gs,
                        V: !0
                    },
                    Js = {
                        endpoint: "signupNewUser",
                        G: gs,
                        V: !0,
                        B: !0
                    },
                    Ys = {
                        endpoint: "accounts/mfaEnrollment:start",
                        O: ["idToken", "phoneEnrollmentInfo"],
                        A: function(t) {
                            if (!t.phoneEnrollmentInfo) throw new N("internal-error");
                            if (!t.phoneEnrollmentInfo.phoneNumber) throw new N("missing-phone-number");
                            if (!t.phoneEnrollmentInfo.recaptchaToken) throw new N("missing-app-credential")
                        },
                        G: function(t) {
                            if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new N("internal-error")
                        },
                        B: !0,
                        Na: !0
                    },
                    zs = {
                        endpoint: "accounts/mfaSignIn:start",
                        O: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
                        A: function(t) {
                            if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new N("missing-app-credential")
                        },
                        G: function(t) {
                            if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new N("internal-error")
                        },
                        B: !0,
                        Na: !0
                    },
                    $s = {
                        endpoint: "verifyAssertion",
                        A: Is,
                        Za: Ts,
                        G: Es,
                        V: !0,
                        B: !0
                    },
                    Qs = {
                        endpoint: "verifyAssertion",
                        A: Is,
                        Za: Ts,
                        G: function(t) {
                            if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new N("user-not-found");
                            if (t.errorMessage) throw uu(t.errorMessage);
                            gs(t)
                        },
                        V: !0,
                        B: !0
                    },
                    tu = {
                        endpoint: "verifyAssertion",
                        A: function(t) {
                            if (Is(t), !t.idToken) throw new N("internal-error")
                        },
                        Za: Ts,
                        G: Es,
                        V: !0
                    },
                    eu = {
                        endpoint: "verifyCustomToken",
                        A: function(t) {
                            if (!t.token) throw new N("invalid-custom-token")
                        },
                        G: gs,
                        V: !0,
                        B: !0
                    },
                    nu = {
                        endpoint: "verifyPassword",
                        A: function(t) {
                            if (vs(t), !t.password) throw new N("wrong-password")
                        },
                        G: gs,
                        V: !0,
                        B: !0
                    },
                    iu = {
                        endpoint: "verifyPhoneNumber",
                        A: bs,
                        G: gs,
                        B: !0
                    },
                    ru = {
                        endpoint: "verifyPhoneNumber",
                        A: function(t) {
                            if (!t.idToken) throw new N("internal-error");
                            bs(t)
                        },
                        G: function(t) {
                            if (t.temporaryProof) throw t.code = "credential-already-in-use", Yo(t);
                            gs(t)
                        }
                    },
                    ou = {
                        Ib: {
                            USER_NOT_FOUND: "user-not-found"
                        },
                        endpoint: "verifyPhoneNumber",
                        A: bs,
                        G: gs,
                        B: !0
                    },
                    au = {
                        endpoint: "accounts/mfaEnrollment:withdraw",
                        O: ["idToken", "mfaEnrollmentId"],
                        G: function(t) {
                            if (!!t[ns] ^ !!t.refreshToken) throw new N("internal-error")
                        },
                        B: !0,
                        Na: !0
                    };

                function su(t, e, n) {
                    if (! function(t, e) {
                            if (!e || !e.length) return !0;
                            if (!t) return !1;
                            for (var n = 0; n < e.length; n++) {
                                var i = t[e[n]];
                                if (void 0 === i || null === i || "" === i) return !1
                            }
                            return !0
                        }(n, e.O)) return Ce(new N("internal-error"));
                    var i, r = !!e.Na,
                        o = e.Vb || "POST";
                    return Oe(n).then(e.A).then((function() {
                        return e.V && (n.returnSecureToken = !0), e.B && t.b && "undefined" === typeof n.tenantId && (n.tenantId = t.b), ps(t, r ? t.i : t.h, e.endpoint, o, n, e.Ib, e.mb || !1)
                    })).then((function(t) {
                        return i = t, e.Za ? e.Za(n, i) : i
                    })).then(e.G).then((function() {
                        if (!e.Z) return i;
                        if (!(e.Z in i)) throw new N("internal-error");
                        return i[e.Z]
                    }))
                }

                function uu(t) {
                    return cu({
                        error: {
                            errors: [{
                                message: t
                            }],
                            code: 400,
                            message: t
                        }
                    })
                }

                function cu(t, e) {
                    var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                        i = {
                            keyInvalid: "invalid-api-key",
                            ipRefererBlocked: "app-not-authorized"
                        };
                    if (n = i[n] ? new N(i[n]) : null) return n;
                    for (var r in n = t.error && t.error.message || "", bt(i = {
                            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                            CREDENTIAL_MISMATCH: "custom-token-mismatch",
                            MISSING_CUSTOM_TOKEN: "internal-error",
                            INVALID_IDENTIFIER: "invalid-email",
                            MISSING_CONTINUE_URI: "internal-error",
                            INVALID_EMAIL: "invalid-email",
                            INVALID_PASSWORD: "wrong-password",
                            USER_DISABLED: "user-disabled",
                            MISSING_PASSWORD: "internal-error",
                            EMAIL_EXISTS: "email-already-in-use",
                            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                            INVALID_IDP_RESPONSE: "invalid-credential",
                            INVALID_PENDING_TOKEN: "invalid-credential",
                            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                            INVALID_SENDER: "invalid-sender",
                            EMAIL_NOT_FOUND: "user-not-found",
                            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                            EXPIRED_OOB_CODE: "expired-action-code",
                            INVALID_OOB_CODE: "invalid-action-code",
                            MISSING_OOB_CODE: "internal-error",
                            INVALID_PROVIDER_ID: "invalid-provider-id",
                            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                            INVALID_ID_TOKEN: "invalid-user-token",
                            TOKEN_EXPIRED: "user-token-expired",
                            USER_NOT_FOUND: "user-token-expired",
                            CORS_UNSUPPORTED: "cors-unsupported",
                            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                            INVALID_APP_ID: "invalid-app-id",
                            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                            WEAK_PASSWORD: "weak-password",
                            OPERATION_NOT_ALLOWED: "operation-not-allowed",
                            USER_CANCELLED: "user-cancelled",
                            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                            INVALID_APP_CREDENTIAL: "invalid-app-credential",
                            INVALID_CODE: "invalid-verification-code",
                            INVALID_PHONE_NUMBER: "invalid-phone-number",
                            INVALID_SESSION_INFO: "invalid-verification-id",
                            INVALID_TEMPORARY_PROOF: "invalid-credential",
                            MISSING_APP_CREDENTIAL: "missing-app-credential",
                            MISSING_CODE: "missing-verification-code",
                            MISSING_PHONE_NUMBER: "missing-phone-number",
                            MISSING_SESSION_INFO: "missing-verification-id",
                            QUOTA_EXCEEDED: "quota-exceeded",
                            SESSION_EXPIRED: "code-expired",
                            REJECTED_CREDENTIAL: "rejected-credential",
                            INVALID_CONTINUE_URI: "invalid-continue-uri",
                            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                            INVALID_CERT_HASH: "invalid-cert-hash",
                            UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                            INVALID_TENANT_ID: "invalid-tenant-id",
                            TENANT_ID_MISMATCH: "tenant-id-mismatch",
                            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                            EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
                            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                            UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                            UNVERIFIED_EMAIL: "unverified-email"
                        }, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, i)
                        if (0 === n.indexOf(r)) return new N(i[r], e);
                    return !e && t && (e = Ui(t)), new N("internal-error", e)
                }

                function hu(t) {
                    this.b = t, this.a = null, this.sb = function(t) {
                        return (pu || (pu = new Te((function(t, e) {
                            function n() {
                                Hi(), Pi("gapi.load")("gapi.iframes", {
                                    callback: t,
                                    ontimeout: function() {
                                        Hi(), e(Error("Network Error"))
                                    },
                                    timeout: lu.get()
                                })
                            }
                            if (Pi("gapi.iframes.Iframe")) t();
                            else if (Pi("gapi.load")) n();
                            else {
                                var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                u[i] = function() {
                                    Pi("gapi.load") ? n() : e(Error("Network Error"))
                                }, Oe(Xa(i = _t(fu, {
                                    onload: i
                                }))).o((function() {
                                    e(Error("Network Error"))
                                }))
                            }
                        })).o((function(t) {
                            throw pu = null, t
                        })))).then((function() {
                            return new Te((function(e, n) {
                                Pi("gapi.iframes.getContext")().open({
                                    where: document.body,
                                    url: t.b,
                                    messageHandlersFilter: Pi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                    attributes: {
                                        style: {
                                            position: "absolute",
                                            top: "-100px",
                                            width: "1px",
                                            height: "1px"
                                        }
                                    },
                                    dontclear: !0
                                }, (function(i) {
                                    function r() {
                                        clearTimeout(o), e()
                                    }
                                    t.a = i, t.a.restyle({
                                        setHideOnLeave: !1
                                    });
                                    var o = setTimeout((function() {
                                        n(Error("Network Error"))
                                    }), du.get());
                                    i.ping(r).then(r, (function() {
                                        n(Error("Network Error"))
                                    }))
                                }))
                            }))
                        }))
                    }(this)
                }
                var fu = new wt(At, "https://apis.google.com/js/api.js?onload=%{onload}"),
                    lu = new Gi(3e4, 6e4),
                    du = new Gi(5e3, 15e3),
                    pu = null;

                function vu(t, e, n, i) {
                    this.l = t, this.h = e, this.i = n, this.g = i, this.f = null, this.g ? t = qn((t = Kn(this.g.url)).c, t.a, t.g, "/emulator/auth/iframe") : t = qn("https", this.l, null, "/__/auth/iframe"), this.a = t, Vn(this.a, "apiKey", this.h), Vn(this.a, "appName", this.i), this.b = null, this.c = []
                }

                function mu(t, e, n, i, r, o) {
                    this.u = t, this.s = e, this.c = n, this.m = i, this.v = o, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null
                }

                function gu(t) {
                    try {
                        return i.Z.app(t).auth().Ga()
                    } catch (e) {
                        return []
                    }
                }

                function bu(t, e, n, i, r, o) {
                    this.s = t, this.g = e, this.b = n, this.f = o, this.c = i || null, this.i = r || null, this.l = this.u = this.C = null, this.h = [], this.m = this.a = null
                }

                function yu(t) {
                    var e = li();
                    return function(t) {
                        return su(t, Hs, {}).then((function(t) {
                            return t.authorizedDomains || []
                        }))
                    }(t).then((function(t) {
                        t: {
                            var n = Kn(e),
                                i = n.c;n = n.a;
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r],
                                    a = n,
                                    s = i;
                                if (0 == o.indexOf("chrome-extension://") ? a = Kn(o).a == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : bi.test(o) ? a = a == o : (o = o.split(".").join("\\."), a = new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a)), a) {
                                    t = !0;
                                    break t
                                }
                            }
                            t = !1
                        }
                        if (!t) throw new Zo(li())
                    }))
                }

                function wu(t) {
                    return t.m || (t.m = wi().then((function() {
                        if (!t.u) {
                            var e = t.c,
                                n = t.i,
                                i = gu(t.b),
                                r = new vu(t.s, t.g, t.b, t.f);
                            r.f = e, r.b = n, r.c = Q(i || []), t.u = r.toString()
                        }
                        t.v = new hu(t.u),
                            function(t) {
                                if (!t.v) throw Error("IfcHandler must be initialized!");
                                ! function(t, e) {
                                    t.sb.then((function() {
                                        t.a.register("authEvent", e, Pi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                    }))
                                }(t.v, (function(e) {
                                    var n = {};
                                    if (e && e.authEvent) {
                                        var i = !1;
                                        for (e = Go(e.authEvent), n = 0; n < t.h.length; n++) i = t.h[n](e) || i;
                                        return (n = {}).status = i ? "ACK" : "ERROR", Oe(n)
                                    }
                                    return n.status = "ERROR", Oe(n)
                                }))
                            }(t)
                    }))), t.m
                }

                function Iu(t) {
                    return t.l || (t.C = t.c ? Ci(t.c, gu(t.b)) : null, t.l = new ts(t.g, D(t.i), t.C), t.f && us(t.l, t.f)), t.l
                }

                function Tu(t, e, n, i, r, o, a, s, u, c, h, f) {
                    return (t = new mu(t, e, n, i, r, f)).l = o, t.g = a, t.i = s, t.b = mt(u || null), t.f = c, t.zb(h).toString()
                }

                function Eu(t) {
                    if (this.a = t || i.Z.INTERNAL.reactNative && i.Z.INTERNAL.reactNative.AsyncStorage, !this.a) throw new N("internal-error", "The React Native compatibility library was not found.");
                    this.type = "asyncStorage"
                }

                function Au(t) {
                    this.b = t, this.a = {}, this.f = T(this.c, this)
                }
                vu.prototype.toString = function() {
                    return this.f ? Vn(this.a, "v", this.f) : ti(this.a.b, "v"), this.b ? Vn(this.a, "eid", this.b) : ti(this.a.b, "eid"), this.c.length ? Vn(this.a, "fw", this.c.join(",")) : ti(this.a.b, "fw"), this.a.toString()
                }, mu.prototype.zb = function(t) {
                    return this.h = t, this
                }, mu.prototype.toString = function() {
                    if (this.v) {
                        var t = Kn(this.v.url);
                        t = qn(t.c, t.a, t.g, "/emulator/auth/handler")
                    } else t = qn("https", this.u, null, "/__/auth/handler");
                    if (Vn(t, "apiKey", this.s), Vn(t, "appName", this.c), Vn(t, "authType", this.m), this.a.isOAuthProvider) {
                        var e = this.a;
                        try {
                            var n = i.Z.app(this.c).auth().la()
                        } catch (u) {
                            n = null
                        }
                        for (var r in e.pb = n, Vn(t, "providerId", this.a.providerId), e = Vi((n = this.a).Jb)) e[r] = e[r].toString();
                        r = n.Qc, e = mt(e);
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a in e && delete e[a]
                        }
                        n.qb && n.pb && !e[n.qb] && (e[n.qb] = n.pb), vt(e) || Vn(t, "customParameters", Ui(e))
                    }
                    if ("function" === typeof this.a.Rb && ((n = this.a.Rb()).length && Vn(t, "scopes", n.join(","))), this.l ? Vn(t, "redirectUrl", this.l) : ti(t.b, "redirectUrl"), this.g ? Vn(t, "eventId", this.g) : ti(t.b, "eventId"), this.i ? Vn(t, "v", this.i) : ti(t.b, "v"), this.b)
                        for (var s in this.b) this.b.hasOwnProperty(s) && !Fn(t, s) && Vn(t, s, this.b[s]);
                    return this.h ? Vn(t, "tid", this.h) : ti(t.b, "tid"), this.f ? Vn(t, "eid", this.f) : ti(t.b, "eid"), (s = gu(this.c)).length && Vn(t, "fw", s.join(",")), t.toString()
                }, (t = bu.prototype).Pb = function(t, e, n) {
                    var i = new N("popup-closed-by-user"),
                        r = new N("web-storage-unsupported"),
                        o = this,
                        a = !1;
                    return this.ma().then((function() {
                        (function(t) {
                            var e = {
                                type: "webStorageSupport"
                            };
                            return wu(t).then((function() {
                                return function(t, e) {
                                    return t.sb.then((function() {
                                        return new Te((function(n) {
                                            t.a.send(e.type, e, n, Pi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                        }))
                                    }))
                                }(t.v, e)
                            })).then((function(t) {
                                if (t && t.length && "undefined" !== typeof t[0].webStorageSupport) return t[0].webStorageSupport;
                                throw Error()
                            }))
                        })(o).then((function(n) {
                            n || (t && mi(t), e(r), a = !0)
                        }))
                    })).o((function() {})).then((function() {
                        if (!a) return function(t) {
                            return new Te((function(e) {
                                return function n() {
                                    _n(2e3).then((function() {
                                        if (t && !t.closed) return n();
                                        e()
                                    }))
                                }()
                            }))
                        }(t)
                    })).then((function() {
                        if (!a) return _n(n).then((function() {
                            e(i)
                        }))
                    }))
                }, t.Yb = function() {
                    var t = Ri();
                    return !ji(t) && !qi(t)
                }, t.Ub = function() {
                    return !1
                }, t.Nb = function(t, e, n, i, r, o, a, s) {
                    if (!t) return Ce(new N("popup-blocked"));
                    if (a && !ji()) return this.ma().o((function(e) {
                        mi(t), r(e)
                    })), i(), Oe();
                    this.a || (this.a = yu(Iu(this)));
                    var u = this;
                    return this.a.then((function() {
                        var e = u.ma().o((function(e) {
                            throw mi(t), r(e), e
                        }));
                        return i(), e
                    })).then((function() {
                        (qo(n), a) || di(Tu(u.s, u.g, u.b, e, n, null, o, u.c, void 0, u.i, s, u.f), t)
                    })).o((function(t) {
                        throw "auth/network-request-failed" == t.code && (u.a = null), t
                    }))
                }, t.Ob = function(t, e, n, i) {
                    this.a || (this.a = yu(Iu(this)));
                    var r = this;
                    return this.a.then((function() {
                        qo(e), di(Tu(r.s, r.g, r.b, t, e, li(), n, r.c, void 0, r.i, i, r.f))
                    })).o((function(t) {
                        throw "auth/network-request-failed" == t.code && (r.a = null), t
                    }))
                }, t.ma = function() {
                    var t = this;
                    return wu(this).then((function() {
                        return t.v.sb
                    })).o((function() {
                        throw t.a = null, new N("network-request-failed")
                    }))
                }, t.ac = function() {
                    return !0
                }, t.Ea = function(t) {
                    this.h.push(t)
                }, t.Ta = function(t) {
                    z(this.h, (function(e) {
                        return e == t
                    }))
                }, (t = Eu.prototype).get = function(t) {
                    return Oe(this.a.getItem(t)).then((function(t) {
                        return t && Fi(t)
                    }))
                }, t.set = function(t, e) {
                    return Oe(this.a.setItem(t, Ui(e)))
                }, t.U = function(t) {
                    return Oe(this.a.removeItem(t))
                }, t.ca = function() {}, t.ia = function() {};
                var ku, Su = [];

                function Nu(t, e, n) {
                    vt(t.a) && t.b.addEventListener("message", t.f), "undefined" === typeof t.a[e] && (t.a[e] = []), t.a[e].push(n)
                }

                function _u(t) {
                    this.a = t
                }

                function Ou(t) {
                    this.c = t, this.b = !1, this.a = []
                }

                function Cu(t, e, n, i) {
                    var r, o, a, s, u = n || {},
                        c = null;
                    if (t.b) return Ce(Error("connection_unavailable"));
                    var h = i ? 800 : 50,
                        f = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
                    return new Te((function(n, i) {
                        f ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), f.port1.start(), a = setTimeout((function() {
                            i(Error("unsupported_event"))
                        }), h), c = {
                            messageChannel: f,
                            onMessage: o = function(t) {
                                t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout((function() {
                                    i(Error("timeout"))
                                }), 3e3)) : "done" === t.data.status ? (clearTimeout(s), "undefined" !== typeof t.data.response ? n(t.data.response) : i(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), i(Error("invalid_response"))))
                            }
                        }, t.a.push(c), f.port1.addEventListener("message", o), t.c.postMessage({
                            eventType: e,
                            eventId: r,
                            data: u
                        }, [f.port2])) : i(Error("connection_unavailable"))
                    })).then((function(e) {
                        return Ru(t, c), e
                    })).o((function(e) {
                        throw Ru(t, c), e
                    }))
                }

                function Ru(t, e) {
                    if (e) {
                        var n = e.messageChannel,
                            i = e.onMessage;
                        n && (n.port1.removeEventListener("message", i), n.port1.close()), z(t.a, (function(t) {
                            return t == e
                        }))
                    }
                }

                function Pu() {
                    if (!Mu()) throw new N("web-storage-unsupported");
                    this.c = {}, this.a = [], this.b = 0, this.m = u.indexedDB, this.type = "indexedDB", this.g = this.v = this.f = this.l = null, this.s = !1, this.h = null;
                    var t = this;
                    Ei() && self ? (this.v = function() {
                        var t = Ei() ? self : null;
                        if (B(Su, (function(n) {
                                n.b == t && (e = n)
                            })), !e) {
                            var e = new Au(t);
                            Su.push(e)
                        }
                        return e
                    }(), Nu(this.v, "keyChanged", (function(e, n) {
                        return Ku(t).then((function(e) {
                            return 0 < e.length && B(t.a, (function(t) {
                                t(e)
                            })), {
                                keyProcessed: J(e, n.key)
                            }
                        }))
                    })), Nu(this.v, "ping", (function() {
                        return Oe(["keyChanged"])
                    }))) : function() {
                        var t = u.navigator;
                        return t && t.serviceWorker ? Oe().then((function() {
                            return t.serviceWorker.ready
                        })).then((function(t) {
                            return t.active || null
                        })).o((function() {
                            return null
                        })) : Oe(null)
                    }().then((function(e) {
                        (t.h = e) && (t.g = new Ou(new _u(e)), Cu(t.g, "ping", null, !0).then((function(e) {
                            e[0].fulfilled && J(e[0].value, "keyChanged") && (t.s = !0)
                        })).o((function() {})))
                    }))
                }

                function Du(t) {
                    return new Te((function(e, n) {
                        var i = t.m.open("firebaseLocalStorageDb", 1);
                        i.onerror = function(t) {
                            try {
                                t.preventDefault()
                            } catch (e) {}
                            n(Error(t.target.error))
                        }, i.onupgradeneeded = function(t) {
                            t = t.target.result;
                            try {
                                t.createObjectStore("firebaseLocalStorage", {
                                    keyPath: "fbase_key"
                                })
                            } catch (e) {
                                n(e)
                            }
                        }, i.onsuccess = function(i) {
                            (i = i.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(i) : function(t) {
                                return new Te((function(e, n) {
                                    var i = t.m.deleteDatabase("firebaseLocalStorageDb");
                                    i.onsuccess = function() {
                                        e()
                                    }, i.onerror = function(t) {
                                        n(Error(t.target.error))
                                    }
                                }))
                            }(t).then((function() {
                                return Du(t)
                            })).then((function(t) {
                                e(t)
                            })).o((function(t) {
                                n(t)
                            }))
                        }
                    }))
                }

                function Lu(t) {
                    return t.i || (t.i = Du(t)), t.i
                }

                function xu(t, e) {
                    var n = 0;
                    return new Te((function i(r, o) {
                        Lu(t).then(e).then(r).o((function(e) {
                            if (!(3 < ++n)) return Lu(t).then((function(e) {
                                return e.close(), t.i = void 0, i(r, o)
                            })).o((function(t) {
                                o(t)
                            }));
                            o(e)
                        }))
                    }))
                }

                function Mu() {
                    try {
                        return !!u.indexedDB
                    } catch (la) {
                        return !1
                    }
                }

                function ju(t) {
                    return t.objectStore("firebaseLocalStorage")
                }

                function Uu(t, e) {
                    return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
                }

                function Vu(t) {
                    return new Te((function(e, n) {
                        t.onsuccess = function(t) {
                            t && t.target ? e(t.target.result) : e()
                        }, t.onerror = function(t) {
                            n(t.target.error)
                        }
                    }))
                }

                function Fu(t, e) {
                    return t.g && t.h && function() {
                        var t = u.navigator;
                        return t && t.serviceWorker && t.serviceWorker.controller || null
                    }() === t.h ? Cu(t.g, "keyChanged", {
                        key: e
                    }, t.s).then((function() {})).o((function() {})) : Oe()
                }

                function Ku(t) {
                    return Lu(t).then((function(t) {
                        var e = ju(Uu(t, !1));
                        return e.getAll ? Vu(e.getAll()) : new Te((function(t, n) {
                            var i = [],
                                r = e.openCursor();
                            r.onsuccess = function(e) {
                                (e = e.target.result) ? (i.push(e.value), e.continue()) : t(i)
                            }, r.onerror = function(t) {
                                n(t.target.error)
                            }
                        }))
                    })).then((function(e) {
                        var n = {},
                            i = [];
                        if (0 == t.b) {
                            for (i = 0; i < e.length; i++) n[e[i].fbase_key] = e[i].value;
                            i = pi(t.c, n), t.c = n
                        }
                        return i
                    }))
                }

                function qu(t) {
                    t.l && t.l.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null)
                }

                function Hu(t) {
                    var e = this,
                        n = null;
                    this.a = [], this.type = "indexedDB", this.c = t, this.b = Oe().then((function() {
                        if (Mu()) {
                            var t = Ki(),
                                i = "__sak" + t;
                            return ku || (ku = new Pu), (n = ku).set(i, t).then((function() {
                                return n.get(i)
                            })).then((function(e) {
                                if (e !== t) throw Error("indexedDB not supported!");
                                return n.U(i)
                            })).then((function() {
                                return n
                            })).o((function() {
                                return e.c
                            }))
                        }
                        return e.c
                    })).then((function(t) {
                        return e.type = t.type, t.ca((function(t) {
                            B(e.a, (function(e) {
                                e(t)
                            }))
                        })), t
                    }))
                }

                function Gu() {
                    this.a = {}, this.type = "inMemory"
                }

                function Bu() {
                    if (! function() {
                            var t = "Node" == Ai();
                            if (!(t = Wu() || t && i.Z.INTERNAL.node && i.Z.INTERNAL.node.localStorage)) return !1;
                            try {
                                return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        if ("Node" == Ai()) throw new N("internal-error", "The LocalStorage compatibility library was not found.");
                        throw new N("web-storage-unsupported")
                    }
                    this.a = Wu() || i.Z.INTERNAL.node.localStorage, this.type = "localStorage"
                }

                function Wu() {
                    try {
                        var t = u.localStorage,
                            e = Ki();
                        return t && (t.setItem(e, "1"), t.removeItem(e)), t
                    } catch (n) {
                        return null
                    }
                }

                function Xu() {
                    this.type = "nullStorage"
                }

                function Zu() {
                    if (! function() {
                            var t = "Node" == Ai();
                            if (!(t = Ju() || t && i.Z.INTERNAL.node && i.Z.INTERNAL.node.sessionStorage)) return !1;
                            try {
                                return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        if ("Node" == Ai()) throw new N("internal-error", "The SessionStorage compatibility library was not found.");
                        throw new N("web-storage-unsupported")
                    }
                    this.a = Ju() || i.Z.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
                }

                function Ju() {
                    try {
                        var t = u.sessionStorage,
                            e = Ki();
                        return t && (t.setItem(e, "1"), t.removeItem(e)), t
                    } catch (n) {
                        return null
                    }
                }

                function Yu() {
                    var t = {};
                    t.Browser = Qu, t.Node = tc, t.ReactNative = ec, t.Worker = nc, this.a = t[Ai()]
                }
                Au.prototype.c = function(t) {
                    var e = t.data.eventType,
                        n = t.data.eventId,
                        i = this.a[e];
                    if (i && 0 < i.length) {
                        t.ports[0].postMessage({
                            status: "ack",
                            eventId: n,
                            eventType: e,
                            response: null
                        });
                        var r = [];
                        B(i, (function(e) {
                            r.push(Oe().then((function() {
                                return e(t.origin, t.data.data)
                            })))
                        })), Pe(r).then((function(i) {
                            var r = [];
                            B(i, (function(t) {
                                r.push({
                                    fulfilled: t.Qb,
                                    value: t.value,
                                    reason: t.reason ? t.reason.message : void 0
                                })
                            })), B(r, (function(t) {
                                for (var e in t) "undefined" === typeof t[e] && delete t[e]
                            })), t.ports[0].postMessage({
                                status: "done",
                                eventId: n,
                                eventType: e,
                                response: r
                            })
                        }))
                    }
                }, _u.prototype.postMessage = function(t, e) {
                    this.a.postMessage(t, e)
                }, Ou.prototype.close = function() {
                    for (; 0 < this.a.length;) Ru(this, this.a[0]);
                    this.b = !0
                }, (t = Pu.prototype).set = function(t, e) {
                    var n = this,
                        i = !1;
                    return xu(this, (function(e) {
                        return Vu((e = ju(Uu(e, !0))).get(t))
                    })).then((function(r) {
                        return xu(n, (function(o) {
                            if (o = ju(Uu(o, !0)), r) return r.value = e, Vu(o.put(r));
                            n.b++, i = !0;
                            var a = {};
                            return a.fbase_key = t, a.value = e, Vu(o.add(a))
                        }))
                    })).then((function() {
                        return n.c[t] = e, Fu(n, t)
                    })).oa((function() {
                        i && n.b--
                    }))
                }, t.get = function(t) {
                    return xu(this, (function(e) {
                        return Vu(ju(Uu(e, !1)).get(t))
                    })).then((function(t) {
                        return t && t.value
                    }))
                }, t.U = function(t) {
                    var e = this,
                        n = !1;
                    return xu(this, (function(i) {
                        return n = !0, e.b++, Vu(ju(Uu(i, !0)).delete(t))
                    })).then((function() {
                        return delete e.c[t], Fu(e, t)
                    })).oa((function() {
                        n && e.b--
                    }))
                }, t.ca = function(t) {
                    0 == this.a.length && function(t) {
                        function e() {
                            t.f = setTimeout((function() {
                                t.l = Ku(t).then((function(e) {
                                    0 < e.length && B(t.a, (function(t) {
                                        t(e)
                                    }))
                                })).then((function() {
                                    e()
                                })).o((function(t) {
                                    "STOP_EVENT" != t.message && e()
                                }))
                            }), 800)
                        }
                        qu(t), e()
                    }(this), this.a.push(t)
                }, t.ia = function(t) {
                    z(this.a, (function(e) {
                        return e == t
                    })), 0 == this.a.length && qu(this)
                }, (t = Hu.prototype).get = function(t) {
                    return this.b.then((function(e) {
                        return e.get(t)
                    }))
                }, t.set = function(t, e) {
                    return this.b.then((function(n) {
                        return n.set(t, e)
                    }))
                }, t.U = function(t) {
                    return this.b.then((function(e) {
                        return e.U(t)
                    }))
                }, t.ca = function(t) {
                    this.a.push(t)
                }, t.ia = function(t) {
                    z(this.a, (function(e) {
                        return e == t
                    }))
                }, (t = Gu.prototype).get = function(t) {
                    return Oe(this.a[t])
                }, t.set = function(t, e) {
                    return this.a[t] = e, Oe()
                }, t.U = function(t) {
                    return delete this.a[t], Oe()
                }, t.ca = function() {}, t.ia = function() {}, (t = Bu.prototype).get = function(t) {
                    var e = this;
                    return Oe().then((function() {
                        return Fi(e.a.getItem(t))
                    }))
                }, t.set = function(t, e) {
                    var n = this;
                    return Oe().then((function() {
                        var i = Ui(e);
                        null === i ? n.U(t) : n.a.setItem(t, i)
                    }))
                }, t.U = function(t) {
                    var e = this;
                    return Oe().then((function() {
                        e.a.removeItem(t)
                    }))
                }, t.ca = function(t) {
                    u.window && fn(u.window, "storage", t)
                }, t.ia = function(t) {
                    u.window && pn(u.window, "storage", t)
                }, (t = Xu.prototype).get = function() {
                    return Oe(null)
                }, t.set = function() {
                    return Oe()
                }, t.U = function() {
                    return Oe()
                }, t.ca = function() {}, t.ia = function() {}, (t = Zu.prototype).get = function(t) {
                    var e = this;
                    return Oe().then((function() {
                        return Fi(e.a.getItem(t))
                    }))
                }, t.set = function(t, e) {
                    var n = this;
                    return Oe().then((function() {
                        var i = Ui(e);
                        null === i ? n.U(t) : n.a.setItem(t, i)
                    }))
                }, t.U = function(t) {
                    var e = this;
                    return Oe().then((function() {
                        e.a.removeItem(t)
                    }))
                }, t.ca = function() {}, t.ia = function() {};
                var zu, $u, Qu = {
                        F: Bu,
                        cb: Zu
                    },
                    tc = {
                        F: Bu,
                        cb: Zu
                    },
                    ec = {
                        F: Eu,
                        cb: Xu
                    },
                    nc = {
                        F: Bu,
                        cb: Xu
                    },
                    ic = {
                        rd: "local",
                        NONE: "none",
                        td: "session"
                    };

                function rc() {
                    var t = !(qi(Ri()) || !Ti()),
                        e = ji(),
                        n = Di();
                    this.m = t, this.h = e, this.l = n, this.a = {}, zu || (zu = new Yu), t = zu;
                    try {
                        this.g = !fi() && Xi() || !u.indexedDB ? new t.a.F : new Hu(Ei() ? new Gu : new t.a.F)
                    } catch (i) {
                        this.g = new Gu, this.h = !0
                    }
                    try {
                        this.i = new t.a.cb
                    } catch (i) {
                        this.i = new Gu
                    }
                    this.v = new Gu, this.f = T(this.Zb, this), this.b = {}
                }

                function oc() {
                    return $u || ($u = new rc), $u
                }

                function ac(t, e) {
                    switch (e) {
                        case "session":
                            return t.i;
                        case "none":
                            return t.v;
                        default:
                            return t.g
                    }
                }

                function sc(t, e) {
                    return "firebase:" + t.name + (e ? ":" + e : "")
                }

                function uc(t, e, n) {
                    return n = sc(e, n), "local" == e.F && (t.b[n] = null), ac(t, e.F).U(n)
                }

                function cc(t) {
                    t.c && (clearInterval(t.c), t.c = null)
                }

                function hc(t) {
                    this.a = t, this.b = oc()
                }(t = rc.prototype).get = function(t, e) {
                    return ac(this, t.F).get(sc(t, e))
                }, t.set = function(t, e, n) {
                    var i = sc(t, n),
                        r = this,
                        o = ac(this, t.F);
                    return o.set(i, e).then((function() {
                        return o.get(i)
                    })).then((function(e) {
                        "local" == t.F && (r.b[i] = e)
                    }))
                }, t.addListener = function(t, e, n) {
                    t = sc(t, e), this.l && (this.b[t] = u.localStorage.getItem(t)), vt(this.a) && (ac(this, "local").ca(this.f), this.h || (fi() || !Xi()) && u.indexedDB || !this.l || function(t) {
                        cc(t), t.c = setInterval((function() {
                            for (var e in t.a) {
                                var n = u.localStorage.getItem(e),
                                    i = t.b[e];
                                n != i && (t.b[e] = n, n = new Qe({
                                    type: "storage",
                                    key: e,
                                    target: window,
                                    oldValue: i,
                                    newValue: n,
                                    a: !0
                                }), t.Zb(n))
                            }
                        }), 1e3)
                    }(this)), this.a[t] || (this.a[t] = []), this.a[t].push(n)
                }, t.removeListener = function(t, e, n) {
                    t = sc(t, e), this.a[t] && (z(this.a[t], (function(t) {
                        return t == n
                    })), 0 == this.a[t].length && delete this.a[t]), vt(this.a) && (ac(this, "local").ia(this.f), cc(this))
                }, t.Zb = function(t) {
                    if (t && t.g) {
                        var e = t.a.key;
                        if (null == e)
                            for (var n in this.a) {
                                var i = this.b[n];
                                "undefined" === typeof i && (i = null);
                                var r = u.localStorage.getItem(n);
                                r !== i && (this.b[n] = r, this.nb(n))
                            } else if (0 == e.indexOf("firebase:") && this.a[e]) {
                                if ("undefined" !== typeof t.a.a ? ac(this, "local").ia(this.f) : cc(this), this.m)
                                    if (n = u.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? u.localStorage.setItem(e, i) : u.localStorage.removeItem(e);
                                    else if (this.b[e] === i && "undefined" === typeof t.a.a) return;
                                var o = this;
                                n = function() {
                                    "undefined" === typeof t.a.a && o.b[e] === u.localStorage.getItem(e) || (o.b[e] = u.localStorage.getItem(e), o.nb(e))
                                }, Jt && ue && 10 == ue && u.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
                            }
                    } else B(t, T(this.nb, this))
                }, t.nb = function(t) {
                    this.a[t] && B(this.a[t], (function(t) {
                        t()
                    }))
                };
                var fc, lc = {
                    name: "authEvent",
                    F: "local"
                };

                function dc() {
                    this.a = oc()
                }

                function pc(t, e) {
                    this.b = vc, this.f = u.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = u.Int32Array ? new Int32Array(64) : Array(64), void 0 === fc && (fc = u.Int32Array ? new Int32Array(Tc) : Tc), this.reset()
                }
                k(pc, (function() {
                    this.b = -1
                }));
                for (var vc = 64, mc = vc - 1, gc = [], bc = 0; bc < mc; bc++) gc[bc] = 0;
                var yc = $(128, gc);

                function wc(t) {
                    for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
                    for (e = 16; 64 > e; e++) {
                        r = 0 | n[e - 15], i = 0 | n[e - 2];
                        var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                            a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        n[e] = o + a | 0
                    }
                    i = 0 | t.a[0], r = 0 | t.a[1];
                    var s = 0 | t.a[2],
                        u = 0 | t.a[3],
                        c = 0 | t.a[4],
                        h = 0 | t.a[5],
                        f = 0 | t.a[6];
                    for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
                        var l = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & f) + (0 | fc[e]) | 0) + (0 | n[e]) | 0) | 0, o = f, f = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + l | 0
                    }
                    t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + f | 0, t.a[7] = t.a[7] + o | 0
                }

                function Ic(t, e, n) {
                    void 0 === n && (n = e.length);
                    var i = 0,
                        r = t.c;
                    if ("string" === typeof e)
                        for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (wc(t), r = 0);
                    else {
                        if (!p(e)) throw Error("message must be string or array");
                        for (; i < n;) {
                            var o = e[i++];
                            if (!("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o))) throw Error("message must be a byte array");
                            t.f[r++] = o, r == t.b && (wc(t), r = 0)
                        }
                    }
                    t.c = r, t.g += n
                }
                pc.prototype.reset = function() {
                    this.g = this.c = 0, this.a = u.Int32Array ? new Int32Array(this.h) : Q(this.h)
                };
                var Tc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                function Ec() {
                    pc.call(this, 8, Ac)
                }
                k(Ec, pc);
                var Ac = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                function kc(t, e, n, i, r, o) {
                    this.v = t, this.i = e, this.l = n, this.m = i || null, this.u = r || null, this.s = o, this.h = e + ":" + n, this.C = new dc, this.g = new hc(this.h), this.f = null, this.b = [], this.a = this.c = null
                }

                function Sc(t) {
                    return new N("invalid-cordova-configuration", t)
                }

                function Nc(t) {
                    var e = new Ec;
                    Ic(e, t), t = [];
                    var n = 8 * e.g;
                    56 > e.c ? Ic(e, yc, 56 - e.c) : Ic(e, yc, e.b - (e.c - 56));
                    for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256;
                    for (wc(e), i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255;
                    return function(t) {
                        return X(t, (function(t) {
                            return 1 < (t = t.toString(16)).length ? t : "0" + t
                        })).join("")
                    }(t)
                }

                function _c(t, e) {
                    for (var n = 0; n < t.b.length; n++) try {
                        t.b[n](e)
                    } catch (i) {}
                }

                function Oc(t) {
                    return t.f || (t.f = t.ma().then((function() {
                        return new Te((function(e) {
                            t.Ea((function n(i) {
                                    return e(i), t.Ta(n), !1
                                })),
                                function(t) {
                                    function e(e) {
                                        i = !0, r && r.cancel(), Cc(t).then((function(i) {
                                            var r = n;
                                            if (i && e && e.url) {
                                                var o = null; - 1 != (r = so(e.url)).indexOf("/__/auth/callback") && (o = (o = "object" === typeof(o = Fi(Fn(o = Kn(r), "firebaseError") || null)) ? _(o) : null) ? new Ho(i.c, i.b, null, null, o, null, i.T()) : new Ho(i.c, i.b, r, i.f, null, null, i.T())), r = o || n
                                            }
                                            _c(t, r)
                                        }))
                                    }
                                    var n = new Ho("unknown", null, null, null, new N("no-auth-event")),
                                        i = !1,
                                        r = _n(500).then((function() {
                                            return Cc(t).then((function() {
                                                i || _c(t, n)
                                            }))
                                        })),
                                        o = u.handleOpenURL;
                                    u.handleOpenURL = function(t) {
                                            if (0 == t.toLowerCase().indexOf(Pi("BuildInfo.packageName", u).toLowerCase() + "://") && e({
                                                    url: t
                                                }), "function" === typeof o) try {
                                                o(t)
                                            } catch (n) {
                                                console.error(n)
                                            }
                                        }, Xo || (Xo = new Bo),
                                        function(t) {
                                            var e = Xo;
                                            e.a.push(t), e.b || (e.b = function(t) {
                                                for (var n = 0; n < e.a.length; n++) e.a[n](t)
                                            }, "function" === typeof(t = Pi("universalLinks.subscribe", u)) && t(null, e.b))
                                        }(e)
                                }(t)
                        }))
                    }))), t.f
                }

                function Cc(t) {
                    var e = null;
                    return function(t) {
                        return t.b.get(lc, t.a).then((function(t) {
                            return Go(t)
                        }))
                    }(t.g).then((function(n) {
                        return e = n, uc((n = t.g).b, lc, n.a)
                    })).then((function() {
                        return e
                    }))
                }

                function Rc(t) {
                    this.a = t, this.b = oc()
                }(t = kc.prototype).ma = function() {
                    return this.Ia ? this.Ia : this.Ia = (Ii(void 0) ? wi().then((function() {
                        return new Te((function(t, e) {
                            var n = u.document,
                                i = setTimeout((function() {
                                    e(Error("Cordova framework is not ready."))
                                }), 1e3);
                            n.addEventListener("deviceready", (function() {
                                clearTimeout(i), t()
                            }), !1)
                        }))
                    })) : Ce(Error("Cordova must run in an Android or iOS file scheme."))).then((function() {
                        if ("function" !== typeof Pi("universalLinks.subscribe", u)) throw Sc("cordova-universal-links-plugin-fix is not installed");
                        if ("undefined" === typeof Pi("BuildInfo.packageName", u)) throw Sc("cordova-plugin-buildinfo is not installed");
                        if ("function" !== typeof Pi("cordova.plugins.browsertab.openUrl", u)) throw Sc("cordova-plugin-browsertab is not installed");
                        if ("function" !== typeof Pi("cordova.InAppBrowser.open", u)) throw Sc("cordova-plugin-inappbrowser is not installed")
                    }), (function() {
                        throw new N("cordova-not-ready")
                    }))
                }, t.Pb = function(t, e) {
                    return e(new N("operation-not-supported-in-this-environment")), Oe()
                }, t.Nb = function() {
                    return Ce(new N("operation-not-supported-in-this-environment"))
                }, t.ac = function() {
                    return !1
                }, t.Yb = function() {
                    return !0
                }, t.Ub = function() {
                    return !0
                }, t.Ob = function(t, e, n, i) {
                    if (this.c) return Ce(new N("redirect-operation-pending"));
                    var r = this,
                        o = u.document,
                        a = null,
                        s = null,
                        c = null,
                        h = null;
                    return this.c = Oe().then((function() {
                        return qo(e), Oc(r)
                    })).then((function() {
                        return function(t, e, n, i, r) {
                            var o = function() {
                                    for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                                    return e.join("")
                                }(),
                                a = new Ho(e, i, null, o, new N("no-auth-event"), null, r),
                                s = Pi("BuildInfo.packageName", u);
                            if ("string" !== typeof s) throw new N("invalid-cordova-configuration");
                            var c = Pi("BuildInfo.displayName", u),
                                h = {};
                            if (Ri().toLowerCase().match(/iphone|ipad|ipod/)) h.ibi = s;
                            else {
                                if (!Ri().toLowerCase().match(/android/)) return Ce(new N("operation-not-supported-in-this-environment"));
                                h.apn = s
                            }
                            c && (h.appDisplayName = c), o = Nc(o), h.sessionId = o;
                            var f = Tu(t.v, t.i, t.l, e, n, null, i, t.m, h, t.u, r, t.s);
                            return t.ma().then((function() {
                                var e = t.h;
                                return t.C.a.set(lc, a.w(), e)
                            })).then((function() {
                                var e = Pi("cordova.plugins.browsertab.isAvailable", u);
                                if ("function" !== typeof e) throw new N("invalid-cordova-configuration");
                                var n = null;
                                e((function(e) {
                                    if (e) {
                                        if ("function" !== typeof(n = Pi("cordova.plugins.browsertab.openUrl", u))) throw new N("invalid-cordova-configuration");
                                        n(f)
                                    } else {
                                        if ("function" !== typeof(n = Pi("cordova.InAppBrowser.open", u))) throw new N("invalid-cordova-configuration");
                                        e = Ri(), t.a = n(f, e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || e.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                    }
                                }))
                            }))
                        }(r, t, e, n, i)
                    })).then((function() {
                        return new Te((function(t, e) {
                            s = function() {
                                var e = Pi("cordova.plugins.browsertab.close", u);
                                return t(), "function" === typeof e && e(), r.a && "function" === typeof r.a.close && (r.a.close(), r.a = null), !1
                            }, r.Ea(s), c = function() {
                                a || (a = _n(2e3).then((function() {
                                    e(new N("redirect-cancelled-by-user"))
                                })))
                            }, h = function() {
                                Bi() && c()
                            }, o.addEventListener("resume", c, !1), Ri().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", h, !1)
                        })).o((function(t) {
                            return Cc(r).then((function() {
                                throw t
                            }))
                        }))
                    })).oa((function() {
                        c && o.removeEventListener("resume", c, !1), h && o.removeEventListener("visibilitychange", h, !1), a && a.cancel(), s && r.Ta(s), r.c = null
                    }))
                }, t.Ea = function(t) {
                    this.b.push(t), Oc(this).o((function(e) {
                        "auth/invalid-cordova-configuration" === e.code && (e = new Ho("unknown", null, null, null, new N("no-auth-event")), t(e))
                    }))
                }, t.Ta = function(t) {
                    z(this.b, (function(e) {
                        return e == t
                    }))
                };
                var Pc = {
                    name: "pendingRedirect",
                    F: "session"
                };

                function Dc(t) {
                    return uc(t.b, Pc, t.a)
                }

                function Lc(t, e, n, i) {
                    this.i = {}, this.u = 0, this.D = t, this.v = e, this.m = n, this.J = i, this.h = [], this.f = !1, this.l = T(this.s, this), this.b = new Jc, this.C = new th, this.g = new Rc(Xc(this.v, this.m)), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.C, this.c.linkViaPopup = this.C, this.c.reauthViaPopup = this.C, this.a = xc(this.D, this.v, this.m, O, this.J)
                }

                function xc(t, e, n, r, o) {
                    var a = i.Z.SDK_VERSION || null;
                    return Ii() ? new kc(t, e, n, a, r, o) : new bu(t, e, n, a, r, o)
                }

                function Mc(t) {
                    t.f || (t.f = !0, t.a.Ea(t.l));
                    var e = t.a;
                    return t.a.ma().o((function(n) {
                        throw t.a == e && t.reset(), n
                    }))
                }

                function jc(t) {
                    t.a.Yb() && Mc(t).o((function(e) {
                        var n = new Ho("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));
                        Hc(e) && t.s(n)
                    })), t.a.Ub() || Yc(t.b)
                }

                function Uc(t, e) {
                    J(t.h, e) || t.h.push(e), t.f || function(t) {
                        return t.b.get(Pc, t.a).then((function(t) {
                            return "pending" == t
                        }))
                    }(t.g).then((function(e) {
                        e ? Dc(t.g).then((function() {
                            Mc(t).o((function(e) {
                                var n = new Ho("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));
                                Hc(e) && t.s(n)
                            }))
                        })) : jc(t)
                    })).o((function() {
                        jc(t)
                    }))
                }

                function Vc(t, e) {
                    z(t.h, (function(t) {
                        return t == e
                    }))
                }
                Lc.prototype.reset = function() {
                    this.f = !1, this.a.Ta(this.l), this.a = xc(this.D, this.v, this.m, null, this.J), this.i = {}
                }, Lc.prototype.s = function(t) {
                    if (!t) throw new N("invalid-auth-event");
                    if (6e5 <= Date.now() - this.u && (this.i = {}, this.u = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1;
                    for (var e = !1, n = 0; n < this.h.length; n++) {
                        var i = this.h[n];
                        if (i.Gb(t.c, t.b)) {
                            (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.u = Date.now())), e = !0;
                            break
                        }
                    }
                    return Yc(this.b), e
                };
                var Fc = new Gi(2e3, 1e4),
                    Kc = new Gi(3e4, 6e4);

                function qc(t, e, n, i, r, o, a) {
                    return t.a.Nb(e, n, i, (function() {
                        t.f || (t.f = !0, t.a.Ea(t.l))
                    }), (function() {
                        t.reset()
                    }), r, o, a)
                }

                function Hc(t) {
                    return !(!t || "auth/cordova-not-ready" != t.code)
                }

                function Gc(t, e, n, i, r) {
                    var o;
                    return function(t) {
                        return t.b.set(Pc, "pending", t.a)
                    }(t.g).then((function() {
                        return t.a.Ob(e, n, i, r).o((function(e) {
                            if (Hc(e)) throw new N("operation-not-supported-in-this-environment");
                            return o = e, Dc(t.g).then((function() {
                                throw o
                            }))
                        })).then((function() {
                            return t.a.ac() ? new Te((function() {})) : Dc(t.g).then((function() {
                                return t.ra()
                            })).then((function() {})).o((function() {}))
                        }))
                    }))
                }

                function Bc(t, e, n, i, r) {
                    return t.a.Pb(i, (function(t) {
                        e.na(n, null, t, r)
                    }), Fc.get())
                }
                Lc.prototype.ra = function() {
                    return this.b.ra()
                };
                var Wc = {};

                function Xc(t, e, n) {
                    return t = t + ":" + e, n && (t = t + ":" + n.url), t
                }

                function Zc(t, e, n, i) {
                    var r = Xc(e, n, i);
                    return Wc[r] || (Wc[r] = new Lc(t, e, n, i)), Wc[r]
                }

                function Jc() {
                    this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1
                }

                function Yc(t) {
                    t.g || (t.g = !0, Qc(t, !1, null, null))
                }

                function zc(t) {
                    t.g && !t.i && Qc(t, !1, null, null)
                }

                function $c(t, e) {
                    if (t.b = function() {
                            return Oe(e)
                        }, t.f.length)
                        for (var n = 0; n < t.f.length; n++) t.f[n](e)
                }

                function Qc(t, e, n, i) {
                    e ? i ? function(t, e) {
                        if (t.b = function() {
                                return Ce(e)
                            }, t.c.length)
                            for (var n = 0; n < t.c.length; n++) t.c[n](e)
                    }(t, i) : $c(t, n) : $c(t, {
                        user: null
                    }), t.f = [], t.c = []
                }

                function th() {}

                function eh() {
                    this.jb = !1, Object.defineProperty(this, "appVerificationDisabled", {
                        get: function() {
                            return this.jb
                        },
                        set: function(t) {
                            this.jb = t
                        },
                        enumerable: !1
                    })
                }

                function nh(t, e) {
                    this.a = e, $i(this, "verificationId", t)
                }

                function ih(t, e, n, i) {
                    return new Vo(t).gb(e, n).then((function(t) {
                        return new nh(t, i)
                    }))
                }

                function rh(t) {
                    var e = Xr(t);
                    if (!(e && e.exp && e.auth_time && e.iat)) throw new N("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    Qi(this, {
                        token: t,
                        expirationTime: Wi(1e3 * e.exp),
                        authTime: Wi(1e3 * e.auth_time),
                        issuedAtTime: Wi(1e3 * e.iat),
                        signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
                        signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null,
                        claims: e
                    })
                }

                function oh(t, e, n) {
                    var i = e && e[sh];
                    if (!i) throw new N("argument-error", "Internal assert: Invalid MultiFactorResolver");
                    this.a = t, this.f = mt(e), this.g = n, this.c = new uo(null, i), this.b = [];
                    var r = this;
                    B(e[ah] || [], (function(t) {
                        (t = ir(t)) && r.b.push(t)
                    })), $i(this, "auth", this.a), $i(this, "session", this.c), $i(this, "hints", this.b)
                }
                Jc.prototype.reset = function() {
                    this.b = null, this.a && (this.a.cancel(), this.a = null)
                }, Jc.prototype.h = function(t, e) {
                    if (t) {
                        this.reset(), this.g = !0;
                        var n = t.c,
                            i = t.b,
                            r = t.a && "auth/web-storage-unsupported" == t.a.code,
                            o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                        this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (Qc(this, !0, null, t.a), Oe()) : e.Fa(n, i) ? function(t, e, n) {
                            n = n.Fa(e.c, e.b);
                            var i = e.g,
                                r = e.f,
                                o = e.i,
                                a = e.T(),
                                s = !!e.c.match(/Redirect$/);
                            n(i, r, a, o).then((function(e) {
                                Qc(t, s, e, null)
                            })).o((function(e) {
                                Qc(t, s, null, e)
                            }))
                        }(this, t, e) : Ce(new N("invalid-auth-event")) : (Qc(this, !1, null, null), Oe())
                    } else Ce(new N("invalid-auth-event"))
                }, Jc.prototype.ra = function() {
                    var t = this;
                    return new Te((function(e, n) {
                        t.b ? t.b().then(e, n) : (t.f.push(e), t.c.push(n), function(t) {
                            var e = new N("timeout");
                            t.a && t.a.cancel(), t.a = _n(Kc.get()).then((function() {
                                t.b || (t.g = !0, Qc(t, !0, null, e))
                            }))
                        }(t))
                    }))
                }, th.prototype.h = function(t, e) {
                    if (t) {
                        var n = t.c,
                            i = t.b;
                        t.a ? (e.na(t.c, null, t.a, t.b), Oe()) : e.Fa(n, i) ? function(t, e) {
                            var n = t.b,
                                i = t.c;
                            e.Fa(i, n)(t.g, t.f, t.T(), t.i).then((function(t) {
                                e.na(i, t, null, n)
                            })).o((function(t) {
                                e.na(i, null, t, n)
                            }))
                        }(t, e) : Ce(new N("invalid-auth-event"))
                    } else Ce(new N("invalid-auth-event"))
                }, nh.prototype.confirm = function(t) {
                    return t = Fo(this.verificationId, t), this.a(t)
                };
                var ah = "mfaInfo",
                    sh = "mfaPendingCredential";

                function uh(t, e, n, i) {
                    N.call(this, "multi-factor-auth-required", i, e), this.b = new oh(t, e, n), $i(this, "resolver", this.b)
                }

                function ch(t, e, n) {
                    if (t && m(t.serverResponse) && "auth/multi-factor-auth-required" === t.code) try {
                        return new uh(e, t.serverResponse, n, t.message)
                    } catch (i) {}
                    return null
                }

                function hh() {}

                function fh(t) {
                    $i(this, "factorId", t.fa), this.a = t
                }

                function lh(t) {
                    if (fh.call(this, t), this.a.fa != Vo.PROVIDER_ID) throw new N("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")
                }

                function dh(t, e) {
                    for (var n in $e.call(this, t), e) this[n] = e[n]
                }

                function ph(t, e) {
                    this.a = t, this.b = [], this.c = T(this.yc, this), fn(this.a, "userReloaded", this.c);
                    var n = [];
                    e && e.multiFactor && e.multiFactor.enrolledFactors && B(e.multiFactor.enrolledFactors, (function(t) {
                        var e = null,
                            i = {};
                        if (t) {
                            t.uid && (i[ar] = t.uid), t.displayName && (i[rr] = t.displayName), t.enrollmentTime && (i[or] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (i[sr] = t.phoneNumber);
                            try {
                                e = new ur(i)
                            } catch (r) {}
                            t = e
                        } else t = null;
                        t && n.push(t)
                    })), vh(this, n)
                }

                function vh(t, e) {
                    t.b = e, $i(t, "enrolledFactors", e)
                }

                function mh(t, e, n) {
                    if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
                }

                function gh(t, e) {
                    t.stop(), t.b = _n(function(t, e) {
                        return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e)
                    }(t, e)).then((function() {
                        return function() {
                            var t = u.document,
                                e = null;
                            return Bi() || !t ? Oe() : new Te((function(n) {
                                e = function() {
                                    Bi() && (t.removeEventListener("visibilitychange", e, !1), n())
                                }, t.addEventListener("visibilitychange", e, !1)
                            })).o((function(n) {
                                throw t.removeEventListener("visibilitychange", e, !1), n
                            }))
                        }()
                    })).then((function() {
                        return t.h()
                    })).then((function() {
                        gh(t, !0)
                    })).o((function(e) {
                        t.i(e) && gh(t, !1)
                    }))
                }

                function bh(t) {
                    this.f = t, this.b = this.a = null, this.c = Date.now()
                }

                function yh(t, e) {
                    "undefined" === typeof e && (t.b ? e = (e = t.b).a - e.g : e = 0), t.c = Date.now() + 1e3 * e
                }

                function wh(t, e) {
                    t.b = Wr(e[ns] || ""), t.a = e.refreshToken, yh(t, "undefined" !== typeof(e = e.expiresIn) ? Number(e) : void 0)
                }

                function Ih(t, e) {
                    return function(t, e) {
                        return new Te((function(n, i) {
                            "refresh_token" == e.grant_type && e.refresh_token || "authorization_code" == e.grant_type && e.code ? fs(t, t.l + "?key=" + encodeURIComponent(t.c), (function(t) {
                                t ? t.error ? i(cu(t)) : t.access_token && t.refresh_token ? n(t) : i(new N("internal-error")) : i(new N("network-request-failed"))
                            }), "POST", Qn(e).toString(), t.g, t.m.get()) : i(new N("internal-error"))
                        }))
                    }(t.f, e).then((function(e) {
                        return t.b = Wr(e.access_token), t.a = e.refresh_token, yh(t, e.expires_in), {
                            accessToken: t.b.toString(),
                            refreshToken: t.a
                        }
                    })).o((function(e) {
                        throw "auth/user-token-expired" == e.code && (t.a = null), e
                    }))
                }

                function Th(t, e) {
                    this.a = t || null, this.b = e || null, Qi(this, {
                        lastSignInTime: Wi(e || null),
                        creationTime: Wi(t || null)
                    })
                }

                function Eh(t, e, n, i, r, o) {
                    Qi(this, {
                        uid: t,
                        displayName: i || null,
                        photoURL: r || null,
                        email: n || null,
                        phoneNumber: o || null,
                        providerId: e
                    })
                }

                function Ah(t, e, n) {
                    this.N = [], this.l = t.apiKey, this.m = t.appName, this.s = t.authDomain || null;
                    var r = i.Z.SDK_VERSION ? Ci(i.Z.SDK_VERSION) : null;
                    this.a = new ts(this.l, D(O), r), (this.u = t.emulatorConfig || null) && us(this.a, this.u), this.h = new bh(this.a), Dh(this, e[ns]), wh(this.h, e), $i(this, "refreshToken", this.h.a), Mh(this, n || {}), En.call(this), this.P = !1, this.s && Li() && (this.b = Zc(this.s, this.l, this.m, this.u)), this.W = [], this.i = null, this.D = function(t) {
                        return new mh((function() {
                            return t.I(!0)
                        }), (function(t) {
                            return !(!t || "auth/network-request-failed" != t.code)
                        }), (function() {
                            var e = t.h.c - Date.now() - 3e5;
                            return 0 < e ? e : 0
                        }))
                    }(this), this.ba = T(this.ib, this);
                    var o = this;
                    this.za = null, this.Pa = function(t) {
                        o.xa(t.h)
                    }, this.qa = null, this.Ba = function(t) {
                        kh(o, t.c)
                    }, this.$ = null, this.aa = [], this.Oa = function(t) {
                        _h(o, t.f)
                    }, this.ja = null, this.S = new ph(this, n), $i(this, "multiFactor", this.S)
                }

                function kh(t, e) {
                    t.u = e, us(t.a, e), t.b && (e = t.b, t.b = Zc(t.s, t.l, t.m, t.u), t.P && (Vc(e, t), Uc(t.b, t)))
                }

                function Sh(t, e) {
                    t.qa && pn(t.qa, "languageCodeChanged", t.Pa), (t.qa = e) && fn(e, "languageCodeChanged", t.Pa)
                }

                function Nh(t, e) {
                    t.$ && pn(t.$, "emulatorConfigChanged", t.Ba), (t.$ = e) && fn(e, "emulatorConfigChanged", t.Ba)
                }

                function _h(t, e) {
                    t.aa = e, hs(t.a, i.Z.SDK_VERSION ? Ci(i.Z.SDK_VERSION, t.aa) : null)
                }

                function Oh(t, e) {
                    t.ja && pn(t.ja, "frameworkChanged", t.Oa), (t.ja = e) && fn(e, "frameworkChanged", t.Oa)
                }

                function Ch(t) {
                    try {
                        return i.Z.app(t.m).auth()
                    } catch (e) {
                        throw new N("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + t.m + "'!")
                    }
                }

                function Rh(t) {
                    t.J || t.D.b || (t.D.start(), pn(t, "tokenChanged", t.ba), fn(t, "tokenChanged", t.ba))
                }

                function Ph(t) {
                    pn(t, "tokenChanged", t.ba), t.D.stop()
                }

                function Dh(t, e) {
                    t.Aa = e, $i(t, "_lat", e)
                }

                function Lh(t) {
                    for (var e = [], n = 0; n < t.W.length; n++) e.push(t.W[n](t));
                    return Pe(e).then((function() {
                        return t
                    }))
                }

                function xh(t) {
                    t.b && !t.P && (t.P = !0, Uc(t.b, t))
                }

                function Mh(t, e) {
                    Qi(t, {
                        uid: e.uid,
                        displayName: e.displayName || null,
                        photoURL: e.photoURL || null,
                        email: e.email || null,
                        emailVerified: e.emailVerified || !1,
                        phoneNumber: e.phoneNumber || null,
                        isAnonymous: e.isAnonymous || !1,
                        tenantId: e.tenantId || null,
                        metadata: new Th(e.createdAt, e.lastLoginAt),
                        providerData: []
                    }), t.a.b = t.tenantId
                }

                function jh() {}

                function Uh(t) {
                    return Oe().then((function() {
                        if (t.J) throw new N("app-deleted")
                    }))
                }

                function Vh(t) {
                    return X(t.providerData, (function(t) {
                        return t.providerId
                    }))
                }

                function Fh(t, e) {
                    e && (Kh(t, e.providerId), t.providerData.push(e))
                }

                function Kh(t, e) {
                    z(t.providerData, (function(t) {
                        return t.providerId == e
                    }))
                }

                function qh(t, e, n) {
                    ("uid" != e || n) && t.hasOwnProperty(e) && $i(t, e, n)
                }

                function Hh(t, e) {
                    t != e && (Qi(t, {
                        uid: e.uid,
                        displayName: e.displayName,
                        photoURL: e.photoURL,
                        email: e.email,
                        emailVerified: e.emailVerified,
                        phoneNumber: e.phoneNumber,
                        isAnonymous: e.isAnonymous,
                        tenantId: e.tenantId,
                        providerData: []
                    }), e.metadata ? $i(t, "metadata", function(t) {
                        return new Th(t.a, t.b)
                    }(e.metadata)) : $i(t, "metadata", new Th), B(e.providerData, (function(e) {
                        Fh(t, e)
                    })), function(t, e) {
                        t.b = e.b, t.a = e.a, t.c = e.c
                    }(t.h, e.h), $i(t, "refreshToken", t.h.a), vh(t.S, e.S.b))
                }

                function Gh(t) {
                    return t.I().then((function(e) {
                        var n = t.isAnonymous;
                        return function(t, e) {
                            return su(t.a, Us, {
                                idToken: e
                            }).then(T(t.Kc, t))
                        }(t, e).then((function() {
                            return n || qh(t, "isAnonymous", !1), e
                        }))
                    }))
                }

                function Bh(t, e) {
                    e[ns] && t.Aa != e[ns] && (wh(t.h, e), t.dispatchEvent(new dh("tokenChanged")), Dh(t, e[ns]), qh(t, "refreshToken", t.h.a))
                }

                function Wh(t, e) {
                    return Gh(t).then((function() {
                        if (J(Vh(t), e)) return Lh(t).then((function() {
                            throw new N("provider-already-linked")
                        }))
                    }))
                }

                function Xh(t, e, n) {
                    return tr({
                        user: t,
                        credential: Ko(e),
                        additionalUserInfo: e = $r(e),
                        operationType: n
                    })
                }

                function Zh(t, e) {
                    return Bh(t, e), t.reload().then((function() {
                        return t
                    }))
                }

                function Jh(t, e, n, r, o) {
                    if (!Li()) return Ce(new N("operation-not-supported-in-this-environment"));
                    if (t.i && !o) return Ce(t.i);
                    var a = zr(n.providerId),
                        s = Ki(t.uid + ":::"),
                        u = null;
                    (!ji() || Ti()) && t.s && n.isOAuthProvider && (u = Tu(t.s, t.l, t.m, e, n, null, s, i.Z.SDK_VERSION || null, null, null, t.tenantId, t.u));
                    var c = gi(u, a && a.va, a && a.ua);
                    return r = r().then((function() {
                        if (zh(t), !o) return t.I().then((function() {}))
                    })).then((function() {
                        return qc(t.b, c, e, n, s, !!u, t.tenantId)
                    })).then((function() {
                        return new Te((function(n, i) {
                            t.na(e, null, new N("cancelled-popup-request"), t.g || null), t.f = n, t.C = i, t.g = s, t.c = Bc(t.b, t, e, c, s)
                        }))
                    })).then((function(t) {
                        return c && mi(c), t ? tr(t) : null
                    })).o((function(t) {
                        throw c && mi(c), t
                    })), $h(t, r, o)
                }

                function Yh(t, e, n, i, r) {
                    if (!Li()) return Ce(new N("operation-not-supported-in-this-environment"));
                    if (t.i && !r) return Ce(t.i);
                    var o = null,
                        a = Ki(t.uid + ":::");
                    return i = i().then((function() {
                        if (zh(t), !r) return t.I().then((function() {}))
                    })).then((function() {
                        return t.ga = a, Lh(t)
                    })).then((function(e) {
                        return t.ha && (e = (e = t.ha).b.set(ef, t.w(), e.a)), e
                    })).then((function() {
                        return Gc(t.b, e, n, a, t.tenantId)
                    })).o((function(e) {
                        if (o = e, t.ha) return nf(t.ha);
                        throw o
                    })).then((function() {
                        if (o) throw o
                    })), $h(t, i, r)
                }

                function zh(t) {
                    if (!t.b || !t.P) {
                        if (t.b && !t.P) throw new N("internal-error");
                        throw new N("auth-domain-config-required")
                    }
                }

                function $h(t, e, n) {
                    var i = function(t, e, n) {
                        return t.i && !n ? (e.cancel(), Ce(t.i)) : e.o((function(e) {
                            throw !e || "auth/user-disabled" != e.code && "auth/user-token-expired" != e.code || (t.i || t.dispatchEvent(new dh("userInvalidated")), t.i = e), e
                        }))
                    }(t, e, n);
                    return t.N.push(i), i.oa((function() {
                        Y(t.N, i)
                    })), i.o((function(e) {
                        var n = null;
                        throw e && "auth/multi-factor-auth-required" === e.code && (n = ch(e.w(), Ch(t), T(t.jc, t))), n || e
                    }))
                }

                function Qh(t) {
                    if (!t.apiKey) return null;
                    var e = {
                            apiKey: t.apiKey,
                            authDomain: t.authDomain,
                            appName: t.appName,
                            emulatorConfig: t.emulatorConfig
                        },
                        n = {};
                    if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
                    n[ns] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null;
                    var i = t.stsTokenManager.expirationTime;
                    i && (n.expiresIn = (i - Date.now()) / 1e3);
                    var r = new Ah(e, n, t);
                    return t.providerData && B(t.providerData, (function(t) {
                        t && Fh(r, tr(t))
                    })), t.redirectEventId && (r.ga = t.redirectEventId), r
                }

                function tf(t) {
                    this.a = t, this.b = oc()
                }
                oh.prototype.Rc = function(t) {
                    var e = this;
                    return t.tb(this.a.a, this.c).then((function(t) {
                        var n = mt(e.f);
                        return delete n[ah], delete n[sh], bt(n, t), e.g(n)
                    }))
                }, k(uh, N), hh.prototype.tb = function(t, e, n) {
                    return e.type == co ? function(t, e, n, i) {
                        return n.Ha().then((function(n) {
                            return n = {
                                idToken: n
                            }, "undefined" !== typeof i && (n.displayName = i), bt(n, {
                                phoneVerificationInfo: Uo(t.a)
                            }), su(e, Ms, n)
                        }))
                    }(this, t, e, n) : function(t, e, n) {
                        return n.Ha().then((function(n) {
                            return bt(n = {
                                mfaPendingCredential: n
                            }, {
                                phoneVerificationInfo: Uo(t.a)
                            }), su(e, js, n)
                        }))
                    }(this, t, e)
                }, k(fh, hh), k(lh, fh), k(dh, $e), (t = ph.prototype).yc = function(t) {
                    vh(this, function(t) {
                        var e = [];
                        return B(t.mfaInfo || [], (function(t) {
                            (t = ir(t)) && e.push(t)
                        })), e
                    }(t.hd))
                }, t.Sb = function() {
                    return this.a.I().then((function(t) {
                        return new uo(t, null)
                    }))
                }, t.fc = function(t, e) {
                    var n = this,
                        i = this.a.a;
                    return this.Sb().then((function(n) {
                        return t.tb(i, n, e)
                    })).then((function(t) {
                        return Bh(n.a, t), n.a.reload()
                    }))
                }, t.bd = function(t) {
                    var e = this,
                        n = "string" === typeof t ? t : t.uid,
                        i = this.a.a;
                    return this.a.I().then((function(t) {
                        return su(i, au, {
                            idToken: t,
                            mfaEnrollmentId: n
                        })
                    })).then((function(t) {
                        var i = W(e.b, (function(t) {
                            return t.uid != n
                        }));
                        return vh(e, i), Bh(e.a, t), e.a.reload().o((function(t) {
                            if ("auth/user-token-expired" != t.code) throw t
                        }))
                    }))
                }, t.w = function() {
                    return {
                        multiFactor: {
                            enrolledFactors: X(this.b, (function(t) {
                                return t.w()
                            }))
                        }
                    }
                }, mh.prototype.start = function() {
                    this.a = this.c, gh(this, !0)
                }, mh.prototype.stop = function() {
                    this.b && (this.b.cancel(), this.b = null)
                }, bh.prototype.w = function() {
                    return {
                        apiKey: this.f.c,
                        refreshToken: this.a,
                        accessToken: this.b && this.b.toString(),
                        expirationTime: this.c
                    }
                }, bh.prototype.getToken = function(t) {
                    return t = !!t, this.b && !this.a ? Ce(new N("user-token-expired")) : t || !this.b || Date.now() > this.c - 3e4 ? this.a ? Ih(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a
                    }) : Oe(null) : Oe({
                        accessToken: this.b.toString(),
                        refreshToken: this.a
                    })
                }, Th.prototype.w = function() {
                    return {
                        lastLoginAt: this.b,
                        createdAt: this.a
                    }
                }, k(Ah, En), Ah.prototype.xa = function(t) {
                    this.za = t, ss(this.a, t)
                }, Ah.prototype.la = function() {
                    return this.za
                }, Ah.prototype.Ga = function() {
                    return Q(this.aa)
                }, Ah.prototype.ib = function() {
                    this.D.b && (this.D.stop(), this.D.start())
                }, $i(Ah.prototype, "providerId", "firebase"), (t = Ah.prototype).reload = function() {
                    var t = this;
                    return $h(this, Uh(this).then((function() {
                        return Gh(t).then((function() {
                            return Lh(t)
                        })).then(jh)
                    })))
                }, t.oc = function(t) {
                    return this.I(t).then((function(t) {
                        return new rh(t)
                    }))
                }, t.I = function(t) {
                    var e = this;
                    return $h(this, Uh(this).then((function() {
                        return e.h.getToken(t)
                    })).then((function(t) {
                        if (!t) throw new N("internal-error");
                        return t.accessToken != e.Aa && (Dh(e, t.accessToken), e.dispatchEvent(new dh("tokenChanged"))), qh(e, "refreshToken", t.refreshToken), t.accessToken
                    })))
                }, t.Kc = function(t) {
                    if (!(t = t.users) || !t.length) throw new N("internal-error");
                    Mh(this, {
                        uid: (t = t[0]).localId,
                        displayName: t.displayName,
                        photoURL: t.photoUrl,
                        email: t.email,
                        emailVerified: !!t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        lastLoginAt: t.lastLoginAt,
                        createdAt: t.createdAt,
                        tenantId: t.tenantId
                    });
                    for (var e = function(t) {
                            return (t = t.providerUserInfo) && t.length ? X(t, (function(t) {
                                return new Eh(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber)
                            })) : []
                        }(t), n = 0; n < e.length; n++) Fh(this, e[n]);
                    qh(this, "isAnonymous", !(this.email && t.passwordHash) && !(this.providerData && this.providerData.length)), this.dispatchEvent(new dh("userReloaded", {
                        hd: t
                    }))
                }, t.Lc = function(t) {
                    return Yi("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.ub(t)
                }, t.ub = function(t) {
                    var e = this,
                        n = null;
                    return $h(this, t.c(this.a, this.uid).then((function(t) {
                        return Bh(e, t), n = Xh(e, t, "reauthenticate"), e.i = null, e.reload()
                    })).then((function() {
                        return n
                    })), !0)
                }, t.Cc = function(t) {
                    return Yi("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.rb(t)
                }, t.rb = function(t) {
                    var e = this,
                        n = null;
                    return $h(this, Wh(this, t.providerId).then((function() {
                        return e.I()
                    })).then((function(n) {
                        return t.b(e.a, n)
                    })).then((function(t) {
                        return n = Xh(e, t, "link"), Zh(e, t)
                    })).then((function() {
                        return n
                    })))
                }, t.Dc = function(t, e) {
                    var n = this;
                    return $h(this, Wh(this, "phone").then((function() {
                        return ih(Ch(n), t, e, T(n.rb, n))
                    })))
                }, t.Mc = function(t, e) {
                    var n = this;
                    return $h(this, Oe().then((function() {
                        return ih(Ch(n), t, e, T(n.ub, n))
                    })), !0)
                }, t.Cb = function(t) {
                    var e = this;
                    return $h(this, this.I().then((function(n) {
                        return e.a.Cb(n, t)
                    })).then((function(t) {
                        return Bh(e, t), e.reload()
                    })))
                }, t.ed = function(t) {
                    var e = this;
                    return $h(this, this.I().then((function(n) {
                        return t.b(e.a, n)
                    })).then((function(t) {
                        return Bh(e, t), e.reload()
                    })))
                }, t.Db = function(t) {
                    var e = this;
                    return $h(this, this.I().then((function(n) {
                        return e.a.Db(n, t)
                    })).then((function(t) {
                        return Bh(e, t), e.reload()
                    })))
                }, t.Eb = function(t) {
                    if (void 0 === t.displayName && void 0 === t.photoURL) return Uh(this);
                    var e = this;
                    return $h(this, this.I().then((function(n) {
                        return e.a.Eb(n, {
                            displayName: t.displayName,
                            photoUrl: t.photoURL
                        })
                    })).then((function(t) {
                        return Bh(e, t), qh(e, "displayName", t.displayName || null), qh(e, "photoURL", t.photoUrl || null), B(e.providerData, (function(t) {
                            "password" === t.providerId && ($i(t, "displayName", e.displayName), $i(t, "photoURL", e.photoURL))
                        })), Lh(e)
                    })).then(jh))
                }, t.cd = function(t) {
                    var e = this;
                    return $h(this, Gh(this).then((function(n) {
                        return J(Vh(e), t) ? function(t, e, n) {
                            return su(t, Ds, {
                                idToken: e,
                                deleteProvider: n
                            })
                        }(e.a, n, [t]).then((function(t) {
                            var n = {};
                            return B(t.providerUserInfo || [], (function(t) {
                                n[t.providerId] = !0
                            })), B(Vh(e), (function(t) {
                                n[t] || Kh(e, t)
                            })), n[Vo.PROVIDER_ID] || $i(e, "phoneNumber", null), Lh(e)
                        })) : Lh(e).then((function() {
                            throw new N("no-such-provider")
                        }))
                    })))
                }, t.delete = function() {
                    var t = this;
                    return $h(this, this.I().then((function(e) {
                        return su(t.a, Ps, {
                            idToken: e
                        })
                    })).then((function() {
                        t.dispatchEvent(new dh("userDeleted"))
                    }))).then((function() {
                        for (var e = 0; e < t.N.length; e++) t.N[e].cancel("app-deleted");
                        Sh(t, null), Nh(t, null), Oh(t, null), t.N = [], t.J = !0, Ph(t), $i(t, "refreshToken", null), t.b && Vc(t.b, t)
                    }))
                }, t.Gb = function(t, e) {
                    return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.ga || null) == e || "reauthViaRedirect" == t && (this.ga || null) == e)
                }, t.na = function(t, e, n, i) {
                    "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.C ? this.C(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C)
                }, t.Fa = function(t, e) {
                    return "linkViaPopup" == t && e == (this.g || null) ? T(this.Lb, this) : "reauthViaPopup" == t && e == (this.g || null) ? T(this.Mb, this) : "linkViaRedirect" == t && (this.ga || null) == e ? T(this.Lb, this) : "reauthViaRedirect" == t && (this.ga || null) == e ? T(this.Mb, this) : null
                }, t.Ec = function(t) {
                    var e = this;
                    return Jh(this, "linkViaPopup", t, (function() {
                        return Wh(e, t.providerId).then((function() {
                            return Lh(e)
                        }))
                    }), !1)
                }, t.Nc = function(t) {
                    return Jh(this, "reauthViaPopup", t, (function() {
                        return Oe()
                    }), !0)
                }, t.Fc = function(t) {
                    var e = this;
                    return Yh(this, "linkViaRedirect", t, (function() {
                        return Wh(e, t.providerId)
                    }), !1)
                }, t.Oc = function(t) {
                    return Yh(this, "reauthViaRedirect", t, (function() {
                        return Oe()
                    }), !0)
                }, t.Lb = function(t, e, n, i) {
                    var r = this;
                    this.c && (this.c.cancel(), this.c = null);
                    var o = null;
                    return $h(this, this.I().then((function(n) {
                        return ks(r.a, {
                            requestUri: t,
                            postBody: i,
                            sessionId: e,
                            idToken: n
                        })
                    })).then((function(t) {
                        return o = Xh(r, t, "link"), Zh(r, t)
                    })).then((function() {
                        return o
                    })))
                }, t.Mb = function(t, e, n, i) {
                    var r = this;
                    this.c && (this.c.cancel(), this.c = null);
                    var o = null;
                    return $h(this, Oe().then((function() {
                        return lo(Ss(r.a, {
                            requestUri: t,
                            sessionId: e,
                            postBody: i,
                            tenantId: n
                        }), r.uid)
                    })).then((function(t) {
                        return o = Xh(r, t, "reauthenticate"), Bh(r, t), r.i = null, r.reload()
                    })).then((function() {
                        return o
                    })), !0)
                }, t.vb = function(t) {
                    var e = this,
                        n = null;
                    return $h(this, this.I().then((function(e) {
                        return n = e, "undefined" === typeof t || vt(t) ? {} : qr(new Pr(t))
                    })).then((function(t) {
                        return e.a.vb(n, t)
                    })).then((function(t) {
                        if (e.email != t) return e.reload()
                    })).then((function() {})))
                }, t.Fb = function(t, e) {
                    var n = this,
                        i = null;
                    return $h(this, this.I().then((function(t) {
                        return i = t, "undefined" === typeof e || vt(e) ? {} : qr(new Pr(e))
                    })).then((function(e) {
                        return n.a.Fb(i, t, e)
                    })).then((function(t) {
                        if (n.email != t) return n.reload()
                    })).then((function() {})))
                }, t.jc = function(t) {
                    var e = null,
                        n = this;
                    return $h(this, t = lo(Oe(t), n.uid).then((function(t) {
                        return e = Xh(n, t, "reauthenticate"), Bh(n, t), n.i = null, n.reload()
                    })).then((function() {
                        return e
                    })), !0)
                }, t.toJSON = function() {
                    return this.w()
                }, t.w = function() {
                    var t = {
                        uid: this.uid,
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                        email: this.email,
                        emailVerified: this.emailVerified,
                        phoneNumber: this.phoneNumber,
                        isAnonymous: this.isAnonymous,
                        tenantId: this.tenantId,
                        providerData: [],
                        apiKey: this.l,
                        appName: this.m,
                        authDomain: this.s,
                        stsTokenManager: this.h.w(),
                        redirectEventId: this.ga || null
                    };
                    return this.metadata && bt(t, this.metadata.w()), B(this.providerData, (function(e) {
                        t.providerData.push(function(t) {
                            var e, n = {};
                            for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                            return n
                        }(e))
                    })), bt(t, this.S.w()), t
                };
                var ef = {
                    name: "redirectUser",
                    F: "session"
                };

                function nf(t) {
                    return uc(t.b, ef, t.a)
                }

                function rf(t) {
                    this.a = t, this.b = oc(), this.c = null, this.f = function(t) {
                        var e = sf("local"),
                            n = sf("session"),
                            i = sf("none");
                        return function(t, e, n) {
                            var i = sc(e, n),
                                r = ac(t, e.F);
                            return t.get(e, n).then((function(o) {
                                var a = null;
                                try {
                                    a = Fi(u.localStorage.getItem(i))
                                } catch (s) {}
                                if (a && !o) return u.localStorage.removeItem(i), t.set(e, a, n);
                                a && o && "localStorage" != r.type && u.localStorage.removeItem(i)
                            }))
                        }(t.b, e, t.a).then((function() {
                            return t.b.get(n, t.a)
                        })).then((function(r) {
                            return r ? n : t.b.get(i, t.a).then((function(n) {
                                return n ? i : t.b.get(e, t.a).then((function(n) {
                                    return n ? e : t.b.get(af, t.a).then((function(t) {
                                        return t ? sf(t) : e
                                    }))
                                }))
                            }))
                        })).then((function(e) {
                            return t.c = e, of (t, e.F)
                        })).o((function() {
                            t.c || (t.c = e)
                        }))
                    }(this), this.b.addListener(sf("local"), this.a, T(this.g, this))
                }

                function of (t, e) {
                    var n, i = [];
                    for (n in ic) ic[n] !== e && i.push(uc(t.b, sf(ic[n]), t.a));
                    return i.push(uc(t.b, af, t.a)),
                        function(t) {
                            return new Te((function(e, n) {
                                var i = t.length,
                                    r = [];
                                if (i)
                                    for (var o = function(t, n) {
                                            i--, r[t] = n, 0 == i && e(r)
                                        }, a = function(t) {
                                            n(t)
                                        }, s = 0; s < t.length; s++) Re(t[s], E(o, s), a);
                                else e(r)
                            }))
                        }(i)
                }
                rf.prototype.g = function() {
                    var t = this,
                        e = sf("local");
                    ff(this, (function() {
                        return Oe().then((function() {
                            return t.c && "local" != t.c.F ? t.b.get(e, t.a) : null
                        })).then((function(n) {
                            if (n) return of(t, "local").then((function() {
                                t.c = e
                            }))
                        }))
                    }))
                };
                var af = {
                    name: "persistence",
                    F: "session"
                };

                function sf(t) {
                    return {
                        name: "authUser",
                        F: t
                    }
                }

                function uf(t, e) {
                    return ff(t, (function() {
                        return t.b.set(t.c, e.w(), t.a)
                    }))
                }

                function cf(t) {
                    return ff(t, (function() {
                        return uc(t.b, t.c, t.a)
                    }))
                }

                function hf(t, e, n) {
                    return ff(t, (function() {
                        return t.b.get(t.c, t.a).then((function(t) {
                            return t && e && (t.authDomain = e), t && n && (t.emulatorConfig = n), Qh(t || {})
                        }))
                    }))
                }

                function ff(t, e) {
                    return t.f = t.f.then(e, e), t.f
                }

                function lf(t) {
                    if (this.l = !1, $i(this, "settings", new eh), $i(this, "app", t), !If(this).options || !If(this).options.apiKey) throw new N("invalid-api-key");
                    t = i.Z.SDK_VERSION ? Ci(i.Z.SDK_VERSION) : null, this.a = new ts(If(this).options && If(this).options.apiKey, D(O), t), this.P = [], this.s = [], this.N = [], this.Pa = i.Z.INTERNAL.createSubscribe(T(this.zc, this)), this.W = void 0, this.ib = i.Z.INTERNAL.createSubscribe(T(this.Ac, this)), yf(this, null), this.i = new rf(If(this).options.apiKey + ":" + If(this).name), this.D = new tf(If(this).options.apiKey + ":" + If(this).name), this.$ = kf(this, function(t) {
                            var e = If(t).options.authDomain,
                                n = function(t) {
                                    var e = function(t, e) {
                                        return t.b.get(ef, t.a).then((function(t) {
                                            return t && e && (t.authDomain = e), Qh(t || {})
                                        }))
                                    }(t.D, If(t).options.authDomain).then((function(e) {
                                        return (t.m = e) && (e.ha = t.D), nf(t.D)
                                    }));
                                    return kf(t, e)
                                }(t).then((function() {
                                    return hf(t.i, e, t.R)
                                })).then((function(e) {
                                    return e ? (e.ha = t.D, t.m && (t.m.ga || null) == (e.ga || null) ? e : e.reload().then((function() {
                                        return uf(t.i, e).then((function() {
                                            return e
                                        }))
                                    })).o((function(n) {
                                        return "auth/network-request-failed" == n.code ? e : cf(t.i)
                                    }))) : null
                                })).then((function(e) {
                                    yf(t, e || null)
                                }));
                            return kf(t, n)
                        }(this)), this.h = kf(this, function(t) {
                            return t.$.then((function() {
                                return gf(t)
                            })).o((function() {})).then((function() {
                                if (!t.l) return t.ja()
                            })).o((function() {})).then((function() {
                                if (!t.l) {
                                    t.ba = !0;
                                    var e = t.i;
                                    e.b.addListener(sf("local"), e.a, t.ja)
                                }
                            }))
                        }(this)), this.ba = !1, this.ja = T(this.Zc, this), this.Ba = T(this.da, this), this.qa = T(this.mc, this), this.za = T(this.wc, this), this.Aa = T(this.xc, this), this.b = null,
                        function(t) {
                            var e = If(t).options.authDomain,
                                n = If(t).options.apiKey;
                            e && Li() && (t.Oa = t.$.then((function() {
                                if (!t.l) {
                                    if (t.b = Zc(e, n, If(t).name, t.R), Uc(t.b, t), Tf(t) && xh(Tf(t)), t.m) {
                                        xh(t.m);
                                        var i = t.m;
                                        i.xa(t.la()), Sh(i, t), _h(i = t.m, t.J), Oh(i, t), kh(i = t.m, t.R), Nh(i, t), t.m = null
                                    }
                                    return t.b
                                }
                            })))
                        }(this), this.INTERNAL = {}, this.INTERNAL.delete = T(this.delete, this), this.INTERNAL.logFramework = T(this.Gc, this), this.u = 0, En.call(this),
                        function(t) {
                            Object.defineProperty(t, "lc", {
                                get: function() {
                                    return this.la()
                                },
                                set: function(t) {
                                    this.xa(t)
                                },
                                enumerable: !1
                            }), t.aa = null, Object.defineProperty(t, "ti", {
                                get: function() {
                                    return this.T()
                                },
                                set: function(t) {
                                    this.zb(t)
                                },
                                enumerable: !1
                            }), t.S = null, Object.defineProperty(t, "emulatorConfig", {
                                get: function() {
                                    if (this.R) {
                                        var t = Kn(this.R.url);
                                        t = tr({
                                            protocol: t.c,
                                            host: t.a,
                                            port: t.g,
                                            options: tr({
                                                disableWarnings: this.R.ec
                                            })
                                        })
                                    } else t = null;
                                    return t
                                },
                                enumerable: !1
                            })
                        }(this), this.J = [], this.R = null
                }

                function df(t) {
                    $e.call(this, "languageCodeChanged"), this.h = t
                }

                function pf(t) {
                    $e.call(this, "emulatorConfigChanged"), this.c = t
                }

                function vf(t) {
                    $e.call(this, "frameworkChanged"), this.f = t
                }

                function mf(t) {
                    return t.Oa || Ce(new N("auth-domain-config-required"))
                }

                function gf(t) {
                    if (!Li()) return Ce(new N("operation-not-supported-in-this-environment"));
                    var e = mf(t).then((function() {
                        return t.b.ra()
                    })).then((function(t) {
                        return t ? tr(t) : null
                    }));
                    return kf(t, e)
                }

                function bf(t, e) {
                    var n = {};
                    return n.apiKey = If(t).options.apiKey, n.authDomain = If(t).options.authDomain, n.appName = If(t).name, t.R && (n.emulatorConfig = t.R), t.$.then((function() {
                        return function(t, e, n, i) {
                            var r = new Ah(t, e);
                            return n && (r.ha = n), i && _h(r, i), r.reload().then((function() {
                                return r
                            }))
                        }(n, e, t.D, t.Ga())
                    })).then((function(e) {
                        return Tf(t) && e.uid == Tf(t).uid ? (Hh(Tf(t), e), t.da(e)) : (yf(t, e), xh(e), t.da(e))
                    })).then((function() {
                        Af(t)
                    }))
                }

                function yf(t, e) {
                    Tf(t) && (function(t, e) {
                        z(t.W, (function(t) {
                            return t == e
                        }))
                    }(Tf(t), t.Ba), pn(Tf(t), "tokenChanged", t.qa), pn(Tf(t), "userDeleted", t.za), pn(Tf(t), "userInvalidated", t.Aa), Ph(Tf(t))), e && (e.W.push(t.Ba), fn(e, "tokenChanged", t.qa), fn(e, "userDeleted", t.za), fn(e, "userInvalidated", t.Aa), 0 < t.u && Rh(e)), $i(t, "currentUser", e), e && (e.xa(t.la()), Sh(e, t), _h(e, t.J), Oh(e, t), kh(e, t.R), Nh(e, t))
                }

                function wf(t, e) {
                    var n = null,
                        i = null;
                    return kf(t, e.then((function(e) {
                        return n = Ko(e), i = $r(e), bf(t, e)
                    }), (function(e) {
                        var n = null;
                        throw e && "auth/multi-factor-auth-required" === e.code && (n = ch(e.w(), t, T(t.kc, t))), n || e
                    })).then((function() {
                        return tr({
                            user: Tf(t),
                            credential: n,
                            additionalUserInfo: i,
                            operationType: "signIn"
                        })
                    })))
                }

                function If(t) {
                    return t.app
                }

                function Tf(t) {
                    return t.currentUser
                }

                function Ef(t) {
                    return Tf(t) && Tf(t)._lat || null
                }

                function Af(t) {
                    if (t.ba) {
                        for (var e = 0; e < t.s.length; e++) t.s[e] && t.s[e](Ef(t));
                        if (t.W !== t.getUid() && t.N.length)
                            for (t.W = t.getUid(), e = 0; e < t.N.length; e++) t.N[e] && t.N[e](Ef(t))
                    }
                }

                function kf(t, e) {
                    return t.P.push(e), e.oa((function() {
                        Y(t.P, e)
                    })), e
                }

                function Sf() {}

                function Nf() {
                    this.a = {}, this.b = 1e12
                }
                rf.prototype.yb = function(t) {
                    var e = null,
                        n = this;
                    return function(t) {
                        var e = new N("invalid-persistence-type"),
                            n = new N("unsupported-persistence-type");
                        t: {
                            for (i in ic)
                                if (ic[i] == t) {
                                    var i = !0;
                                    break t
                                }
                            i = !1
                        }
                        if (!i || "string" !== typeof t) throw e;
                        switch (Ai()) {
                            case "ReactNative":
                                if ("session" === t) throw n;
                                break;
                            case "Node":
                                if ("none" !== t) throw n;
                                break;
                            case "Worker":
                                if ("session" === t || !Mu() && "none" !== t) throw n;
                                break;
                            default:
                                if (!Di() && "none" !== t) throw n
                        }
                    }(t), ff(this, (function() {
                        return t != n.c.F ? n.b.get(n.c, n.a).then((function(i) {
                            return e = i, of (n, t)
                        })).then((function() {
                            if (n.c = sf(t), e) return n.b.set(n.c, e, n.a)
                        })) : Oe()
                    }))
                }, k(lf, En), k(df, $e), k(pf, $e), k(vf, $e), (t = lf.prototype).yb = function(t) {
                    return kf(this, t = this.i.yb(t))
                }, t.xa = function(t) {
                    this.aa === t || this.l || (this.aa = t, ss(this.a, this.aa), this.dispatchEvent(new df(this.la())))
                }, t.la = function() {
                    return this.aa
                }, t.fd = function() {
                    var t = u.navigator;
                    this.xa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                }, t.gd = function(t, e) {
                    if (!this.R) {
                        if (!/^https?:\/\//.test(t)) throw new N("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
                        (function(t) {
                            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), u.document && !t && wi().then((function() {
                                var t = u.document.createElement("div");
                                t.innerText = "Running in emulator mode. Do not use with production credentials.", t.style.position = "fixed", t.style.width = "100%", t.style.backgroundColor = "#ffffff", t.style.border = ".1em solid #000000", t.style.color = "#b50000", t.style.bottom = "0px", t.style.left = "0px", t.style.margin = "0px", t.style.zIndex = 1e4, t.style.textAlign = "center", t.classList.add("firebase-emulator-warning"), u.document.body.appendChild(t)
                            }))
                        })(e = !!e && !!e.disableWarnings), this.R = {
                            url: t,
                            ec: e
                        }, this.settings.jb = !0, us(this.a, this.R), this.dispatchEvent(new pf(this.R))
                    }
                }, t.Gc = function(t) {
                    this.J.push(t), hs(this.a, i.Z.SDK_VERSION ? Ci(i.Z.SDK_VERSION, this.J) : null), this.dispatchEvent(new vf(this.J))
                }, t.Ga = function() {
                    return Q(this.J)
                }, t.zb = function(t) {
                    this.S === t || this.l || (this.S = t, this.a.b = this.S)
                }, t.T = function() {
                    return this.S
                }, t.toJSON = function() {
                    return {
                        apiKey: If(this).options.apiKey,
                        authDomain: If(this).options.authDomain,
                        appName: If(this).name,
                        currentUser: Tf(this) && Tf(this).w()
                    }
                }, t.Gb = function(t, e) {
                    switch (t) {
                        case "unknown":
                        case "signInViaRedirect":
                            return !0;
                        case "signInViaPopup":
                            return this.g == e && !!this.f;
                        default:
                            return !1
                    }
                }, t.na = function(t, e, n, i) {
                    "signInViaPopup" == t && this.g == i && (n && this.C ? this.C(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C)
                }, t.Fa = function(t, e) {
                    return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? T(this.ic, this) : null
                }, t.ic = function(t, e, n, i) {
                    var r = this,
                        o = {
                            requestUri: t,
                            postBody: i,
                            sessionId: e,
                            tenantId: n
                        };
                    return this.c && (this.c.cancel(), this.c = null), r.$.then((function() {
                        return wf(r, As(r.a, o))
                    }))
                }, t.Xc = function(t) {
                    if (!Li()) return Ce(new N("operation-not-supported-in-this-environment"));
                    var e = this,
                        n = zr(t.providerId),
                        r = Ki(),
                        o = null;
                    (!ji() || Ti()) && If(this).options.authDomain && t.isOAuthProvider && (o = Tu(If(this).options.authDomain, If(this).options.apiKey, If(this).name, "signInViaPopup", t, null, r, i.Z.SDK_VERSION || null, null, null, this.T(), this.R));
                    var a = gi(o, n && n.va, n && n.ua);
                    return kf(this, n = mf(this).then((function(n) {
                        return qc(n, a, "signInViaPopup", t, r, !!o, e.T())
                    })).then((function() {
                        return new Te((function(t, n) {
                            e.na("signInViaPopup", null, new N("cancelled-popup-request"), e.g), e.f = t, e.C = n, e.g = r, e.c = Bc(e.b, e, "signInViaPopup", a, r)
                        }))
                    })).then((function(t) {
                        return a && mi(a), t ? tr(t) : null
                    })).o((function(t) {
                        throw a && mi(a), t
                    })))
                }, t.Yc = function(t) {
                    if (!Li()) return Ce(new N("operation-not-supported-in-this-environment"));
                    var e = this,
                        n = mf(this).then((function() {
                            return function(t) {
                                return ff(t, (function() {
                                    return t.b.set(af, t.c.F, t.a)
                                }))
                            }(e.i)
                        })).then((function() {
                            return Gc(e.b, "signInViaRedirect", t, void 0, e.T())
                        }));
                    return kf(this, n)
                }, t.ra = function() {
                    var t = this;
                    return gf(this).then((function(e) {
                        return t.b && zc(t.b.b), e
                    })).o((function(e) {
                        throw t.b && zc(t.b.b), e
                    }))
                }, t.dd = function(t) {
                    if (!t) return Ce(new N("null-user"));
                    if (this.S != t.tenantId) return Ce(new N("tenant-id-mismatch"));
                    var e = this,
                        n = {};
                    n.apiKey = If(this).options.apiKey, n.authDomain = If(this).options.authDomain, n.appName = If(this).name;
                    var i = function(t, e, n, i) {
                        var r = t.h,
                            o = {};
                        return o[ns] = r.b && r.b.toString(), o.refreshToken = r.a, e = new Ah(e || {
                            apiKey: t.l,
                            authDomain: t.s,
                            appName: t.m
                        }, o), n && (e.ha = n), i && _h(e, i), Hh(e, t), e
                    }(t, n, e.D, e.Ga());
                    return kf(this, this.h.then((function() {
                        if (If(e).options.apiKey != t.l) return i.reload()
                    })).then((function() {
                        return Tf(e) && t.uid == Tf(e).uid ? (Hh(Tf(e), t), e.da(t)) : (yf(e, i), xh(i), e.da(i))
                    })).then((function() {
                        Af(e)
                    })))
                }, t.Bb = function() {
                    var t = this;
                    return kf(this, this.h.then((function() {
                        return t.b && zc(t.b.b), Tf(t) ? (yf(t, null), cf(t.i).then((function() {
                            Af(t)
                        }))) : Oe()
                    })))
                }, t.Zc = function() {
                    var t = this;
                    return hf(this.i, If(this).options.authDomain).then((function(e) {
                        if (!t.l) {
                            var n;
                            if (n = Tf(t) && e) {
                                n = Tf(t).uid;
                                var i = e.uid;
                                n = void 0 !== n && null !== n && "" !== n && void 0 !== i && null !== i && "" !== i && n == i
                            }
                            if (n) return Hh(Tf(t), e), Tf(t).I();
                            (Tf(t) || e) && (yf(t, e), e && (xh(e), e.ha = t.D), t.b && Uc(t.b, t), Af(t))
                        }
                    }))
                }, t.da = function(t) {
                    return uf(this.i, t)
                }, t.mc = function() {
                    Af(this), this.da(Tf(this))
                }, t.wc = function() {
                    this.Bb()
                }, t.xc = function() {
                    this.Bb()
                }, t.kc = function(t) {
                    var e = this;
                    return this.h.then((function() {
                        return wf(e, Oe(t))
                    }))
                }, t.zc = function(t) {
                    var e = this;
                    this.addAuthTokenListener((function() {
                        t.next(Tf(e))
                    }))
                }, t.Ac = function(t) {
                    var e = this;
                    ! function(t, e) {
                        t.N.push(e), kf(t, t.h.then((function() {
                            !t.l && J(t.N, e) && t.W !== t.getUid() && (t.W = t.getUid(), e(Ef(t)))
                        })))
                    }(this, (function() {
                        t.next(Tf(e))
                    }))
                }, t.Ic = function(t, e, n) {
                    var i = this;
                    return this.ba && Promise.resolve().then((function() {
                        "function" === typeof t ? t(Tf(i)) : "function" === typeof t.next && t.next(Tf(i))
                    })), this.Pa(t, e, n)
                }, t.Hc = function(t, e, n) {
                    var i = this;
                    return this.ba && Promise.resolve().then((function() {
                        i.W = i.getUid(), "function" === typeof t ? t(Tf(i)) : "function" === typeof t.next && t.next(Tf(i))
                    })), this.ib(t, e, n)
                }, t.nc = function(t) {
                    var e = this;
                    return kf(this, this.h.then((function() {
                        return Tf(e) ? Tf(e).I(t).then((function(t) {
                            return {
                                accessToken: t
                            }
                        })) : null
                    })))
                }, t.Tc = function(t) {
                    var e = this;
                    return this.h.then((function() {
                        return wf(e, su(e.a, eu, {
                            token: t
                        }))
                    })).then((function(t) {
                        var n = t.user;
                        return qh(n, "isAnonymous", !1), e.da(n), t
                    }))
                }, t.Uc = function(t, e) {
                    var n = this;
                    return this.h.then((function() {
                        return wf(n, su(n.a, nu, {
                            email: t,
                            password: e
                        }))
                    }))
                }, t.dc = function(t, e) {
                    var n = this;
                    return this.h.then((function() {
                        return wf(n, su(n.a, Cs, {
                            email: t,
                            password: e
                        }))
                    }))
                }, t.ab = function(t) {
                    var e = this;
                    return this.h.then((function() {
                        return wf(e, t.ka(e.a))
                    }))
                }, t.Sc = function(t) {
                    return Yi("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.ab(t)
                }, t.Ab = function() {
                    var t = this;
                    return this.h.then((function() {
                        var e = Tf(t);
                        if (e && e.isAnonymous) {
                            var n = tr({
                                providerId: null,
                                isNewUser: !1
                            });
                            return tr({
                                user: e,
                                credential: null,
                                additionalUserInfo: n,
                                operationType: "signIn"
                            })
                        }
                        return wf(t, t.a.Ab()).then((function(e) {
                            var n = e.user;
                            return qh(n, "isAnonymous", !0), t.da(n), e
                        }))
                    }))
                }, t.getUid = function() {
                    return Tf(this) && Tf(this).uid || null
                }, t.cc = function(t) {
                    this.addAuthTokenListener(t), this.u++, 0 < this.u && Tf(this) && Rh(Tf(this))
                }, t.Pc = function(t) {
                    var e = this;
                    B(this.s, (function(n) {
                        n == t && e.u--
                    })), 0 > this.u && (this.u = 0), 0 == this.u && Tf(this) && Ph(Tf(this)), this.removeAuthTokenListener(t)
                }, t.addAuthTokenListener = function(t) {
                    var e = this;
                    this.s.push(t), kf(this, this.h.then((function() {
                        e.l || J(e.s, t) && t(Ef(e))
                    })))
                }, t.removeAuthTokenListener = function(t) {
                    z(this.s, (function(e) {
                        return e == t
                    }))
                }, t.delete = function() {
                    this.l = !0;
                    for (var t = 0; t < this.P.length; t++) this.P[t].cancel("app-deleted");
                    return this.P = [], this.i && (t = this.i).b.removeListener(sf("local"), t.a, this.ja), this.b && (Vc(this.b, this), zc(this.b.b)), Promise.resolve()
                }, t.hc = function(t) {
                    return kf(this, function(t, e) {
                        return su(t, Rs, {
                            identifier: e,
                            continueUri: xi() ? li() : "http://localhost"
                        }).then((function(t) {
                            return t.signinMethods || []
                        }))
                    }(this.a, t))
                }, t.Bc = function(t) {
                    return !!xo(t)
                }, t.xb = function(t, e) {
                    var n = this;
                    return kf(this, Oe().then((function() {
                        var t = new Pr(e);
                        if (!t.c) throw new N("argument-error", xr + " must be true when sending sign in link to email");
                        return qr(t)
                    })).then((function(e) {
                        return n.a.xb(t, e)
                    })).then((function() {})))
                }, t.jd = function(t) {
                    return this.Sa(t).then((function(t) {
                        return t.data.email
                    }))
                }, t.ob = function(t, e) {
                    return kf(this, this.a.ob(t, e).then((function() {})))
                }, t.Sa = function(t) {
                    return kf(this, this.a.Sa(t).then((function(t) {
                        return new cr(t)
                    })))
                }, t.kb = function(t) {
                    return kf(this, this.a.kb(t).then((function() {})))
                }, t.wb = function(t, e) {
                    var n = this;
                    return kf(this, Oe().then((function() {
                        return "undefined" === typeof e || vt(e) ? {} : qr(new Pr(e))
                    })).then((function(e) {
                        return n.a.wb(t, e)
                    })).then((function() {})))
                }, t.Wc = function(t, e) {
                    return kf(this, ih(this, t, e, T(this.ab, this)))
                }, t.Vc = function(t, e) {
                    var n = this;
                    return kf(this, Oe().then((function() {
                        var i = e || li(),
                            r = Lo(t, i);
                        if (!(i = xo(i))) throw new N("argument-error", "Invalid email link!");
                        if (i.tenantId !== n.T()) throw new N("tenant-id-mismatch");
                        return n.ab(r)
                    })))
                }, Sf.prototype.render = function() {}, Sf.prototype.reset = function() {}, Sf.prototype.getResponse = function() {}, Sf.prototype.execute = function() {};
                var _f = null;

                function Of(t, e) {
                    return (e = Cf(e)) && t.a[e] || null
                }

                function Cf(t) {
                    return (t = "undefined" === typeof t ? 1e12 : t) ? t.toString() : null
                }

                function Rf(t, e) {
                    this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = he(t);
                    var n = this;
                    this.i = function() {
                        n.execute()
                    }, this.h ? this.execute() : fn(this.f, "click", this.i)
                }

                function Pf(t) {
                    if (t.g) throw Error("reCAPTCHA mock was already deleted!")
                }

                function Df() {}

                function Lf() {}
                Nf.prototype.render = function(t, e) {
                    return this.a[this.b.toString()] = new Rf(t, e), this.b++
                }, Nf.prototype.reset = function(t) {
                    var e = Of(this, t);
                    t = Cf(t), e && t && (e.delete(), delete this.a[t])
                }, Nf.prototype.getResponse = function(t) {
                    return (t = Of(this, t)) ? t.getResponse() : null
                }, Nf.prototype.execute = function(t) {
                    (t = Of(this, t)) && t.execute()
                }, Rf.prototype.getResponse = function() {
                    return Pf(this), this.b
                }, Rf.prototype.execute = function() {
                    Pf(this);
                    var t = this;
                    this.a || (this.a = setTimeout((function() {
                        t.b = function() {
                            for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                            return e.join("")
                        }();
                        var e = t.c.callback,
                            n = t.c["expired-callback"];
                        if (e) try {
                            e(t.b)
                        } catch (i) {}
                        t.a = setTimeout((function() {
                            if (t.a = null, t.b = null, n) try {
                                n()
                            } catch (i) {}
                            t.h && t.execute()
                        }), 6e4)
                    }), 500))
                }, Rf.prototype.delete = function() {
                    Pf(this), this.g = !0, clearTimeout(this.a), this.a = null, pn(this.f, "click", this.i)
                }, $i(Df, "FACTOR_ID", "phone"), Lf.prototype.g = function() {
                    return _f || (_f = new Nf), Oe(_f)
                }, Lf.prototype.c = function() {};
                var xf = null;

                function Mf() {
                    this.b = u.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }
                var jf = new wt(At, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                    Uf = new Gi(3e4, 6e4);
                Mf.prototype.g = function(t) {
                    var e = this;
                    return new Te((function(n, i) {
                        var r = setTimeout((function() {
                            i(new N("network-request-failed"))
                        }), Uf.get());
                        !u.grecaptcha || t !== e.f && !e.b ? (u[e.a] = function() {
                            if (u.grecaptcha) {
                                e.f = t;
                                var o = u.grecaptcha.render;
                                u.grecaptcha.render = function(t, n) {
                                    return t = o(t, n), e.b++, t
                                }, clearTimeout(r), n(u.grecaptcha)
                            } else clearTimeout(r), i(new N("internal-error"));
                            delete u[e.a]
                        }, Oe(Xa(_t(jf, {
                            onload: e.a,
                            hl: t || ""
                        }))).o((function() {
                            clearTimeout(r), i(new N("internal-error", "Unable to load external reCAPTCHA dependencies!"))
                        }))) : (clearTimeout(r), n(u.grecaptcha))
                    }))
                }, Mf.prototype.c = function() {
                    this.b--
                };
                var Vf = null;

                function Ff(t, e, n, i, r, o, a) {
                    if ($i(this, "type", "recaptcha"), this.c = this.f = null, this.J = !1, this.v = e, this.g = null, a ? (xf || (xf = new Lf), a = xf) : (Vf || (Vf = new Mf), a = Vf), this.m = a, this.a = n || {
                            theme: "light",
                            type: "image"
                        }, this.h = [], this.a[Hf]) throw new N("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                    if (this.i = "invisible" === this.a[Gf], !u.document) throw new N("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                    if (!he(e) || !this.i && he(e).hasChildNodes()) throw new N("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                    this.s = new ts(t, o || null, r || null), this.u = i || function() {
                        return null
                    };
                    var s = this;
                    this.l = [];
                    var c = this.a[Kf];
                    this.a[Kf] = function(t) {
                        if (Bf(s, t), "function" === typeof c) c(t);
                        else if ("string" === typeof c) {
                            var e = Pi(c, u);
                            "function" === typeof e && e(t)
                        }
                    };
                    var h = this.a[qf];
                    this.a[qf] = function() {
                        if (Bf(s, null), "function" === typeof h) h();
                        else if ("string" === typeof h) {
                            var t = Pi(h, u);
                            "function" === typeof t && t()
                        }
                    }
                }
                var Kf = "callback",
                    qf = "expired-callback",
                    Hf = "sitekey",
                    Gf = "size";

                function Bf(t, e) {
                    for (var n = 0; n < t.l.length; n++) try {
                        t.l[n](e)
                    } catch (i) {}
                }

                function Wf(t, e) {
                    return t.h.push(e), e.oa((function() {
                        Y(t.h, e)
                    })), e
                }

                function Xf(t) {
                    if (t.J) throw new N("internal-error", "RecaptchaVerifier instance has been destroyed.")
                }

                function Zf(t, e, n) {
                    var r = !1;
                    try {
                        this.b = n || i.Z.app()
                    } catch (s) {
                        throw new N("argument-error", "No firebase.app.App instance is currently initialized.")
                    }
                    if (!this.b.options || !this.b.options.apiKey) throw new N("invalid-api-key");
                    n = this.b.options.apiKey;
                    var o = this,
                        a = null;
                    try {
                        a = this.b.auth().Ga()
                    } catch (s) {}
                    try {
                        r = this.b.auth().settings.appVerificationDisabledForTesting
                    } catch (s) {}
                    a = i.Z.SDK_VERSION ? Ci(i.Z.SDK_VERSION, a) : null, Ff.call(this, n, t, e, (function() {
                        try {
                            var t = o.b.auth().la()
                        } catch (e) {
                            t = null
                        }
                        return t
                    }), a, D(O), r)
                }

                function Jf(t, e, n, i) {
                    t: {
                        n = Array.prototype.slice.call(n);
                        for (var r = 0, o = !1, a = 0; a < e.length; a++)
                            if (e[a].optional) o = !0;
                            else {
                                if (o) throw new N("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                r++
                            }
                        if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                        else {
                            for (r = 0; r < n.length; r++)
                                if (o = e[r].optional && void 0 === n[r], !e[r].M(n[r]) && !o) {
                                    if (e = e[r], 0 > r || r >= Yf.length) throw new N("internal-error", "Argument validator received an unsupported number of arguments.");
                                    n = Yf[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + ".";
                                    break t
                                }
                            i = null
                        }
                    }
                    if (i) throw new N("argument-error", t + " failed: " + i)
                }(t = Ff.prototype).Ia = function() {
                    var t = this;
                    return this.f ? this.f : this.f = Wf(this, Oe().then((function() {
                        if (xi() && !Ei()) return wi();
                        throw new N("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                    })).then((function() {
                        return t.m.g(t.u())
                    })).then((function(e) {
                        return t.g = e, su(t.s, Gs, {})
                    })).then((function(e) {
                        t.a[Hf] = e.recaptchaSiteKey
                    })).o((function(e) {
                        throw t.f = null, e
                    })))
                }, t.render = function() {
                    Xf(this);
                    var t = this;
                    return Wf(this, this.Ia().then((function() {
                        if (null === t.c) {
                            var e = t.v;
                            if (!t.i) {
                                var n = he(e);
                                e = function(t, e, n) {
                                    var i = arguments,
                                        r = document,
                                        o = String(i[0]),
                                        a = i[1];
                                    if (!ce && a && (a.name || a.type)) {
                                        if (o = ["<", o], a.name && o.push(' name="', Bt(a.name), '"'), a.type) {
                                            o.push(' type="', Bt(a.type), '"');
                                            var s = {};
                                            bt(s, a), delete s.type, a = s
                                        }
                                        o.push(">"), o = o.join("")
                                    }
                                    return o = me(r, o), a && ("string" === typeof a ? o.className = a : Array.isArray(a) ? o.className = a.join(" ") : fe(o, a)), 2 < i.length && ve(r, o, i), o
                                }("DIV"), n.appendChild(e)
                            }
                            t.c = t.g.render(e, t.a)
                        }
                        return t.c
                    })))
                }, t.verify = function() {
                    Xf(this);
                    var t = this;
                    return Wf(this, this.render().then((function(e) {
                        return new Te((function(n) {
                            var i = t.g.getResponse(e);
                            if (i) n(i);
                            else {
                                var r = function(e) {
                                    e && (function(t, e) {
                                        z(t.l, (function(t) {
                                            return t == e
                                        }))
                                    }(t, r), n(e))
                                };
                                t.l.push(r), t.i && t.g.execute(t.c)
                            }
                        }))
                    })))
                }, t.reset = function() {
                    Xf(this), null !== this.c && this.g.reset(this.c)
                }, t.clear = function() {
                    Xf(this), this.J = !0, this.m.c();
                    for (var t = 0; t < this.h.length; t++) this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
                    if (!this.i) {
                        t = he(this.v);
                        for (var e; e = t.firstChild;) t.removeChild(e)
                    }
                }, k(Zf, Ff);
                var Yf = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                function zf(t, e) {
                    return {
                        name: t || "",
                        K: "a valid string",
                        optional: !!e,
                        M: function(t) {
                            return "string" === typeof t
                        }
                    }
                }

                function $f(t, e) {
                    return {
                        name: t || "",
                        K: "a boolean",
                        optional: !!e,
                        M: function(t) {
                            return "boolean" === typeof t
                        }
                    }
                }

                function Qf(t, e) {
                    return {
                        name: t || "",
                        K: "a valid object",
                        optional: !!e,
                        M: m
                    }
                }

                function tl(t, e) {
                    return {
                        name: t || "",
                        K: "a function",
                        optional: !!e,
                        M: function(t) {
                            return "function" === typeof t
                        }
                    }
                }

                function el(t, e) {
                    return {
                        name: t || "",
                        K: "null",
                        optional: !!e,
                        M: function(t) {
                            return null === t
                        }
                    }
                }

                function nl(t) {
                    return {
                        name: t ? t + "Credential" : "credential",
                        K: t ? "a valid " + t + " credential" : "a valid credential",
                        optional: !1,
                        M: function(e) {
                            if (!e) return !1;
                            var n = !t || e.providerId === t;
                            return !(!e.ka || !n)
                        }
                    }
                }

                function il(t, e) {
                    return m(t) && "string" === typeof t.type && t.type === e && "function" === typeof t.Ha
                }

                function rl(t) {
                    return m(t) && "string" === typeof t.uid
                }

                function ol(t, e, n, i) {
                    return {
                        name: n || "",
                        K: t.K + " or " + e.K,
                        optional: !!i,
                        M: function(n) {
                            return t.M(n) || e.M(n)
                        }
                    }
                }

                function al(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        t[i] = cl(i, t[n], e[n].j)
                    }
                }

                function sl(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        i !== n && Object.defineProperty(t, i, {
                            get: E((function(t) {
                                return this[t]
                            }), n),
                            set: E((function(t, e, n, i) {
                                Jf(t, [n], [i], !0), this[e] = i
                            }), i, n, e[n].lb),
                            enumerable: !0
                        })
                    }
                }

                function ul(t, e, n, i) {
                    t[e] = cl(e, n, i)
                }

                function cl(t, e, n) {
                    function i() {
                        var t = Array.prototype.slice.call(arguments);
                        return Jf(o, n, t), e.apply(this, t)
                    }
                    if (!n) return e;
                    var r, o = function(t) {
                        return (t = t.split("."))[t.length - 1]
                    }(t);
                    for (r in e) i[r] = e[r];
                    for (r in e.prototype) i.prototype[r] = e.prototype[r];
                    return i
                }
                al(lf.prototype, {
                        kb: {
                            name: "applyActionCode",
                            j: [zf("code")]
                        },
                        Sa: {
                            name: "checkActionCode",
                            j: [zf("code")]
                        },
                        ob: {
                            name: "confirmPasswordReset",
                            j: [zf("code"), zf("newPassword")]
                        },
                        dc: {
                            name: "createUserWithEmailAndPassword",
                            j: [zf("email"), zf("password")]
                        },
                        hc: {
                            name: "fetchSignInMethodsForEmail",
                            j: [zf("email")]
                        },
                        ra: {
                            name: "getRedirectResult",
                            j: []
                        },
                        Bc: {
                            name: "isSignInWithEmailLink",
                            j: [zf("emailLink")]
                        },
                        Hc: {
                            name: "onAuthStateChanged",
                            j: [ol(Qf(), tl(), "nextOrObserver"), tl("opt_error", !0), tl("opt_completed", !0)]
                        },
                        Ic: {
                            name: "onIdTokenChanged",
                            j: [ol(Qf(), tl(), "nextOrObserver"), tl("opt_error", !0), tl("opt_completed", !0)]
                        },
                        wb: {
                            name: "sendPasswordResetEmail",
                            j: [zf("email"), ol(Qf("opt_actionCodeSettings", !0), el(null, !0), "opt_actionCodeSettings", !0)]
                        },
                        xb: {
                            name: "sendSignInLinkToEmail",
                            j: [zf("email"), Qf("actionCodeSettings")]
                        },
                        yb: {
                            name: "setPersistence",
                            j: [zf("persistence")]
                        },
                        Sc: {
                            name: "signInAndRetrieveDataWithCredential",
                            j: [nl()]
                        },
                        Ab: {
                            name: "signInAnonymously",
                            j: []
                        },
                        ab: {
                            name: "signInWithCredential",
                            j: [nl()]
                        },
                        Tc: {
                            name: "signInWithCustomToken",
                            j: [zf("token")]
                        },
                        Uc: {
                            name: "signInWithEmailAndPassword",
                            j: [zf("email"), zf("password")]
                        },
                        Vc: {
                            name: "signInWithEmailLink",
                            j: [zf("email"), zf("emailLink", !0)]
                        },
                        Wc: {
                            name: "signInWithPhoneNumber",
                            j: [zf("phoneNumber"), {
                                name: "applicationVerifier",
                                K: "an implementation of firebase.auth.ApplicationVerifier",
                                optional: !1,
                                M: function(t) {
                                    return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
                                }
                            }]
                        },
                        Xc: {
                            name: "signInWithPopup",
                            j: [{
                                name: "authProvider",
                                K: "a valid Auth provider",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                }
                            }]
                        },
                        Yc: {
                            name: "signInWithRedirect",
                            j: [{
                                name: "authProvider",
                                K: "a valid Auth provider",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                }
                            }]
                        },
                        dd: {
                            name: "updateCurrentUser",
                            j: [ol({
                                name: "user",
                                K: "an instance of Firebase User",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t instanceof Ah)
                                }
                            }, el(), "user")]
                        },
                        Bb: {
                            name: "signOut",
                            j: []
                        },
                        toJSON: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        },
                        fd: {
                            name: "useDeviceLanguage",
                            j: []
                        },
                        gd: {
                            name: "useEmulator",
                            j: [zf("url"), Qf("options", !0)]
                        },
                        jd: {
                            name: "verifyPasswordResetCode",
                            j: [zf("code")]
                        }
                    }), sl(lf.prototype, {
                        lc: {
                            name: "languageCode",
                            lb: ol(zf(), el(), "languageCode")
                        },
                        ti: {
                            name: "tenantId",
                            lb: ol(zf(), el(), "tenantId")
                        }
                    }), lf.Persistence = ic, lf.Persistence.LOCAL = "local", lf.Persistence.SESSION = "session", lf.Persistence.NONE = "none", al(Ah.prototype, {
                        delete: {
                            name: "delete",
                            j: []
                        },
                        oc: {
                            name: "getIdTokenResult",
                            j: [$f("opt_forceRefresh", !0)]
                        },
                        I: {
                            name: "getIdToken",
                            j: [$f("opt_forceRefresh", !0)]
                        },
                        Cc: {
                            name: "linkAndRetrieveDataWithCredential",
                            j: [nl()]
                        },
                        rb: {
                            name: "linkWithCredential",
                            j: [nl()]
                        },
                        Dc: {
                            name: "linkWithPhoneNumber",
                            j: [zf("phoneNumber"), {
                                name: "applicationVerifier",
                                K: "an implementation of firebase.auth.ApplicationVerifier",
                                optional: !1,
                                M: function(t) {
                                    return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
                                }
                            }]
                        },
                        Ec: {
                            name: "linkWithPopup",
                            j: [{
                                name: "authProvider",
                                K: "a valid Auth provider",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                }
                            }]
                        },
                        Fc: {
                            name: "linkWithRedirect",
                            j: [{
                                name: "authProvider",
                                K: "a valid Auth provider",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                }
                            }]
                        },
                        Lc: {
                            name: "reauthenticateAndRetrieveDataWithCredential",
                            j: [nl()]
                        },
                        ub: {
                            name: "reauthenticateWithCredential",
                            j: [nl()]
                        },
                        Mc: {
                            name: "reauthenticateWithPhoneNumber",
                            j: [zf("phoneNumber"), {
                                name: "applicationVerifier",
                                K: "an implementation of firebase.auth.ApplicationVerifier",
                                optional: !1,
                                M: function(t) {
                                    return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
                                }
                            }]
                        },
                        Nc: {
                            name: "reauthenticateWithPopup",
                            j: [{
                                name: "authProvider",
                                K: "a valid Auth provider",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                }
                            }]
                        },
                        Oc: {
                            name: "reauthenticateWithRedirect",
                            j: [{
                                name: "authProvider",
                                K: "a valid Auth provider",
                                optional: !1,
                                M: function(t) {
                                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                                }
                            }]
                        },
                        reload: {
                            name: "reload",
                            j: []
                        },
                        vb: {
                            name: "sendEmailVerification",
                            j: [ol(Qf("opt_actionCodeSettings", !0), el(null, !0), "opt_actionCodeSettings", !0)]
                        },
                        toJSON: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        },
                        cd: {
                            name: "unlink",
                            j: [zf("provider")]
                        },
                        Cb: {
                            name: "updateEmail",
                            j: [zf("email")]
                        },
                        Db: {
                            name: "updatePassword",
                            j: [zf("password")]
                        },
                        ed: {
                            name: "updatePhoneNumber",
                            j: [nl("phone")]
                        },
                        Eb: {
                            name: "updateProfile",
                            j: [Qf("profile")]
                        },
                        Fb: {
                            name: "verifyBeforeUpdateEmail",
                            j: [zf("email"), ol(Qf("opt_actionCodeSettings", !0), el(null, !0), "opt_actionCodeSettings", !0)]
                        }
                    }), al(Nf.prototype, {
                        execute: {
                            name: "execute"
                        },
                        render: {
                            name: "render"
                        },
                        reset: {
                            name: "reset"
                        },
                        getResponse: {
                            name: "getResponse"
                        }
                    }), al(Sf.prototype, {
                        execute: {
                            name: "execute"
                        },
                        render: {
                            name: "render"
                        },
                        reset: {
                            name: "reset"
                        },
                        getResponse: {
                            name: "getResponse"
                        }
                    }), al(Te.prototype, {
                        oa: {
                            name: "finally"
                        },
                        o: {
                            name: "catch"
                        },
                        then: {
                            name: "then"
                        }
                    }), sl(eh.prototype, {
                        appVerificationDisabled: {
                            name: "appVerificationDisabledForTesting",
                            lb: $f("appVerificationDisabledForTesting")
                        }
                    }), al(nh.prototype, {
                        confirm: {
                            name: "confirm",
                            j: [zf("verificationCode")]
                        }
                    }), ul(fo, "fromJSON", (function(t) {
                        t = "string" === typeof t ? JSON.parse(t) : t;
                        for (var e, n = [yo, Po, jo, mo], i = 0; i < n.length; i++)
                            if (e = n[i](t)) return e;
                        return null
                    }), [ol(zf(), Qf(), "json")]), ul(Do, "credential", (function(t, e) {
                        return new Ro(t, e)
                    }), [zf("email"), zf("password")]), al(Ro.prototype, {
                        w: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(Eo.prototype, {
                        Ca: {
                            name: "addScope",
                            j: [zf("scope")]
                        },
                        Ka: {
                            name: "setCustomParameters",
                            j: [Qf("customOAuthParameters")]
                        }
                    }), ul(Eo, "credential", Ao, [ol(zf(), Qf(), "token")]), ul(Do, "credentialWithLink", Lo, [zf("email"), zf("emailLink")]), al(ko.prototype, {
                        Ca: {
                            name: "addScope",
                            j: [zf("scope")]
                        },
                        Ka: {
                            name: "setCustomParameters",
                            j: [Qf("customOAuthParameters")]
                        }
                    }), ul(ko, "credential", So, [ol(zf(), Qf(), "token")]), al(No.prototype, {
                        Ca: {
                            name: "addScope",
                            j: [zf("scope")]
                        },
                        Ka: {
                            name: "setCustomParameters",
                            j: [Qf("customOAuthParameters")]
                        }
                    }), ul(No, "credential", _o, [ol(zf(), ol(Qf(), el()), "idToken"), ol(zf(), el(), "accessToken", !0)]), al(Oo.prototype, {
                        Ka: {
                            name: "setCustomParameters",
                            j: [Qf("customOAuthParameters")]
                        }
                    }), ul(Oo, "credential", Co, [ol(zf(), Qf(), "token"), zf("secret", !0)]), al(To.prototype, {
                        Ca: {
                            name: "addScope",
                            j: [zf("scope")]
                        },
                        credential: {
                            name: "credential",
                            j: [ol(zf(), ol(Qf(), el()), "optionsOrIdToken"), ol(zf(), el(), "accessToken", !0)]
                        },
                        Ka: {
                            name: "setCustomParameters",
                            j: [Qf("customOAuthParameters")]
                        }
                    }), al(go.prototype, {
                        w: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(po.prototype, {
                        w: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), ul(Vo, "credential", Fo, [zf("verificationId"), zf("verificationCode")]), al(Vo.prototype, {
                        gb: {
                            name: "verifyPhoneNumber",
                            j: [ol(zf(), {
                                name: "phoneInfoOptions",
                                K: "valid phone info options",
                                optional: !1,
                                M: function(t) {
                                    return !!t && (t.session && t.phoneNumber ? il(t.session, co) && "string" === typeof t.phoneNumber : t.session && t.multiFactorHint ? il(t.session, ho) && rl(t.multiFactorHint) : t.session && t.multiFactorUid ? il(t.session, ho) && "string" === typeof t.multiFactorUid : !!t.phoneNumber && "string" === typeof t.phoneNumber)
                                }
                            }, "phoneInfoOptions"), {
                                name: "applicationVerifier",
                                K: "an implementation of firebase.auth.ApplicationVerifier",
                                optional: !1,
                                M: function(t) {
                                    return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
                                }
                            }]
                        }
                    }), al(Mo.prototype, {
                        w: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(N.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(Jo.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(Zo.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(uh.prototype, {
                        toJSON: {
                            name: "toJSON",
                            j: [zf(null, !0)]
                        }
                    }), al(oh.prototype, {
                        Rc: {
                            name: "resolveSignIn",
                            j: [{
                                name: "multiFactorAssertion",
                                K: "a valid multiFactorAssertion",
                                optional: !1,
                                M: function(t) {
                                    return !!t && !!t.tb
                                }
                            }]
                        }
                    }), al(ph.prototype, {
                        Sb: {
                            name: "getSession",
                            j: []
                        },
                        fc: {
                            name: "enroll",
                            j: [{
                                name: "multiFactorAssertion",
                                K: "a valid multiFactorAssertion",
                                optional: !1,
                                M: function(t) {
                                    return !!t && !!t.tb
                                }
                            }, zf("displayName", !0)]
                        },
                        bd: {
                            name: "unenroll",
                            j: [ol({
                                name: "multiFactorInfo",
                                K: "a valid multiFactorInfo",
                                optional: !1,
                                M: rl
                            }, zf(), "multiFactorInfoIdentifier")]
                        }
                    }), al(Zf.prototype, {
                        clear: {
                            name: "clear",
                            j: []
                        },
                        render: {
                            name: "render",
                            j: []
                        },
                        verify: {
                            name: "verify",
                            j: []
                        }
                    }), ul(Er, "parseLink", Rr, [zf("link")]), ul(Df, "assertion", (function(t) {
                        return new lh(t)
                    }), [nl("phone")]),
                    function() {
                        if ("undefined" === typeof i.Z || !i.Z.INTERNAL || !i.Z.INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                        var t = {
                            ActionCodeInfo: {
                                Operation: {
                                    EMAIL_SIGNIN: fr,
                                    PASSWORD_RESET: "PASSWORD_RESET",
                                    RECOVER_EMAIL: "RECOVER_EMAIL",
                                    REVERT_SECOND_FACTOR_ADDITION: hr,
                                    VERIFY_AND_CHANGE_EMAIL: lr,
                                    VERIFY_EMAIL: "VERIFY_EMAIL"
                                }
                            },
                            Auth: lf,
                            AuthCredential: fo,
                            Error: N
                        };
                        ul(t, "EmailAuthProvider", Do, []), ul(t, "FacebookAuthProvider", Eo, []), ul(t, "GithubAuthProvider", ko, []), ul(t, "GoogleAuthProvider", No, []), ul(t, "TwitterAuthProvider", Oo, []), ul(t, "OAuthProvider", To, [zf("providerId")]), ul(t, "SAMLAuthProvider", Io, [zf("providerId")]), ul(t, "PhoneAuthProvider", Vo, [{
                            name: "auth",
                            K: "an instance of Firebase Auth",
                            optional: !0,
                            M: function(t) {
                                return !!(t && t instanceof lf)
                            }
                        }]), ul(t, "RecaptchaVerifier", Zf, [ol(zf(), {
                            name: "",
                            K: "an HTML element",
                            optional: !1,
                            M: function(t) {
                                return !!(t && t instanceof Element)
                            }
                        }, "recaptchaContainer"), Qf("recaptchaParameters", !0), {
                            name: "app",
                            K: "an instance of Firebase App",
                            optional: !0,
                            M: function(t) {
                                return !!(t && t instanceof i.Z.app.App)
                            }
                        }]), ul(t, "ActionCodeURL", Er, []), ul(t, "PhoneMultiFactorGenerator", Df, []), i.Z.INTERNAL.registerComponent({
                            name: "auth",
                            instanceFactory: function(t) {
                                return new lf(t = t.getProvider("app").getImmediate())
                            },
                            multipleInstances: !1,
                            serviceProps: t,
                            instantiationMode: "LAZY",
                            type: "PUBLIC",
                            onInstanceCreated: function(t) {
                                t.getProvider("auth-internal").initialize()
                            }
                        }), i.Z.INTERNAL.registerComponent({
                            name: "auth-internal",
                            instanceFactory: function(t) {
                                return {
                                    getUid: T((t = t.getProvider("auth").getImmediate()).getUid, t),
                                    getToken: T(t.nc, t),
                                    addAuthTokenListener: T(t.cc, t),
                                    removeAuthTokenListener: T(t.Pc, t)
                                }
                            },
                            multipleInstances: !1,
                            instantiationMode: "LAZY",
                            type: "PRIVATE"
                        }), i.Z.registerVersion("@firebase/auth", "0.16.8"), i.Z.INTERNAL.extendNamespace({
                            User: Ah
                        })
                    }()
            }).apply("undefined" !== typeof n.g ? n.g : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }
    }
]);