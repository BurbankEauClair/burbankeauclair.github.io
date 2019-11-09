! function (l) {
    function e(e) {
        for (var t, n, i = e[0], o = e[1], r = e[2], s = 0, a = []; s < i.length; s++) n = i[s], u[n] && a.push(u[n][0]), u[n] = 0;
        for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (l[t] = o[t]);
        for (f && f(e); a.length;) a.shift()();
        return h.push.apply(h, r || []), c()
    }

    function c() {
        for (var e, t = 0; t < h.length; t++) {
            for (var n = h[t], i = !0, o = 1; o < n.length; o++) {
                var r = n[o];
                0 !== u[r] && (i = !1)
            }
            i && (h.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var n = {},
        u = {
            0: 0
        },
        h = [];

    function s(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return l[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    s.m = l, s.c = n, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) s.d(n, i, function (e) {
                return t[e]
            }.bind(null, i));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/wp-content/themes/voila-theme/dist/";
    var t = window.webpackJsonp = window.webpackJsonp || [],
        i = t.push.bind(t);
    t.push = e, t = t.slice();
    for (var o = 0; o < t.length; o++) e(t[o]);
    var f = i;
    h.push([94, 1]), c()
}({
    138: function (e, t, n) {
        "use strict";
        n.r(t);
        n(95), n(96);
        var i = n(87),
            o = n(48),
            r = n.n(o),
            s = n(5),
            a = n.n(s),
            l = (n(12), n(11), n(24), n(25), {
                body: document.body,
                height: window.innerHeight,
                width: window.innerWidth,
                scrollHeight: 0,
                scrollEl: document.querySelector(".js-smooth"),
                sail: document.querySelector(".js-sail"),
                progressBar: document.querySelector(".js-progressbar"),
                menuIsOpen: !1,
                isScroll: !0,
                isScrolled: !1,
                isTransitioning: !1,
                isCase: !1,
                isProgressbar: !1,
                currentUrl: location.origin,
                scrollCurrent: null
            });
        Object.assign(l, r.a.getInfos()), Object.assign(l, {
            isSmooth: l.isDesktop,
            isMobile: l.isPhone
        });
        var p = l,
            u = (n(55), n(56), n(46), n(26), n(47), n(112), n(1)),
            c = n(92),
            h = n(89),
            f = n.n(h),
            d = (n(122), function (e, t, n) {
                return (e - t) / (n - t)
            }),
            y = function (e, t, n) {
                var i = n - t;
                return (i + (e - t) % i) % i + t
            };

        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var m, g, b, z, w, _, O, j, S, x, E, k = new(function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.isRunning = !1, this.el = document.querySelector(".js-pe")
                }
                return function (e, t, n) {
                    t && v(e.prototype, t), n && v(e, n)
                }(e, [{
                    key: "run",
                    value: function () {
                        var e = this;
                        clearTimeout(this.timer), this.timer = setTimeout(function () {
                            e.isRunning = !1, e.togglePointers("none")
                        }, 300), this.isRunning || (this.isRunning = !0, this.togglePointers("all"))
                    }
                }, {
                    key: "togglePointers",
                    value: function (e) {
                        this.el.style.pointerEvents = e
                    }
                }]), e
            }()),
            C = (n(57), n(123), n(82), n(0));

        function H(e) {
            return w.getComputedStyle(e)
        }

        function W(e, t, n, i) {
            var o;
            return (n = n || H(e)) ? o = (e = n.getPropertyValue(t.replace(_, "-$1").toLowerCase())) || n.length ? e : n[t] : e.currentStyle && (o = (n = e.currentStyle)[t]), i ? o : parseInt(o, 10) || 0
        }

        function T(e) {
            return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
        }

        function P(e, t) {
            for (var n, i = t.length; - 1 < --i;)
                if (n = t[i], e.substr(0, n.length) === n) return n.length
        }

        function L(e) {
            return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 65536
        }

        function A(e, t) {
            var n = -1 !== (e = e || "").indexOf("++"),
                i = 1;
            return n && (e = e.split("++").join("")),
                function () {
                    return "<" + t + S + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
                }
        }

        function G(e, t, n) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) G(e, t, n);
            else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(t).join(n))
        }

        function Z(e, t) {
            for (var n = t.length; - 1 < --n;) e.push(t[n])
        }

        function R(e) {
            var t, n = [],
                i = e.length;
            for (t = 0; t !== i; n.push(e[t++]));
            return n
        }

        function F(e, t, n) {
            for (var i; e && e !== t;) {
                if (i = e._next || e.nextSibling) return i.textContent.charAt(0) === n;
                e = e.parentNode || e._parent
            }
            return !1
        }

        function K(e) {
            var t, n, i = R(e.childNodes),
                o = i.length;
            for (t = 0; t < o; t++)(n = i[t])._isSplit ? K(n) : (t && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n))
        }

        function q(e, t, n, i, o, r, s) {
            var a, l, c, u, h, f, p, d, y, v, m, g, b = H(e),
                w = W(e, "paddingLeft", b),
                _ = -999,
                S = W(e, "borderBottomWidth", b) + W(e, "borderTopWidth", b),
                x = W(e, "borderLeftWidth", b) + W(e, "borderRightWidth", b),
                O = W(e, "paddingTop", b) + W(e, "paddingBottom", b),
                j = W(e, "paddingLeft", b) + W(e, "paddingRight", b),
                E = .2 * W(e, "fontSize"),
                k = W(e, "textAlign", b, !0),
                C = [],
                T = [],
                P = [],
                L = t.wordDelimiter || " ",
                A = t.tag ? t.tag : t.span ? "span" : "div",
                R = t.type || t.split || "chars,words,lines",
                q = o && -1 !== R.indexOf("lines") ? [] : null,
                I = -1 !== R.indexOf("words"),
                N = -1 !== R.indexOf("chars"),
                B = "absolute" === t.position || !0 === t.absolute,
                M = t.linesClass,
                V = -1 !== (M || "").indexOf("++"),
                D = [];
            for (V && (M = M.split("++").join("")), c = (l = e.getElementsByTagName("*")).length, h = [], a = 0; a < c; a++) h[a] = l[a];
            if (q || B)
                for (a = 0; a < c; a++)((f = (u = h[a]).parentNode === e) || B || N && !I) && (g = u.offsetTop, q && f && Math.abs(g - _) > E && ("BR" !== u.nodeName || 0 === a) && (p = [], q.push(p), _ = g), B && (u._x = u.offsetLeft, u._y = g, u._w = u.offsetWidth, u._h = u.offsetHeight), q && ((u._isSplit && f || !N && f || I && f || !I && u.parentNode.parentNode === e && !u.parentNode._isSplit) && (p.push(u), u._x -= w, F(u, e, L) && (u._wordEnd = !0)), "BR" === u.nodeName && (u.nextSibling && "BR" === u.nextSibling.nodeName || 0 === a) && q.push([])));
            for (a = 0; a < c; a++) f = (u = h[a]).parentNode === e, "BR" !== u.nodeName ? (B && (y = u.style, I || f || (u._x += u.parentNode._x, u._y += u.parentNode._y), y.left = u._x + "px", y.top = u._y + "px", y.position = "absolute", y.display = "block", y.width = u._w + 1 + "px", y.height = u._h + "px"), !I && N ? u._isSplit ? (u._next = u.nextSibling, u.parentNode.appendChild(u)) : u.parentNode._isSplit ? (u._parent = u.parentNode, !u.previousSibling && u.firstChild && (u.firstChild._isFirst = !0), u.nextSibling && " " === u.nextSibling.textContent && !u.nextSibling.nextSibling && D.push(u.nextSibling), u._next = u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling, u.parentNode.removeChild(u), h.splice(a--, 1), c--) : f || (g = !u.nextSibling && F(u.parentNode, e, L), u.parentNode._parent && u.parentNode._parent.appendChild(u), g && u.parentNode.appendChild(z.createTextNode(" ")), "span" === A && (u.style.display = "inline"), C.push(u)) : u.parentNode._isSplit && !u._isSplit && "" !== u.innerHTML ? T.push(u) : N && !u._isSplit && ("span" === A && (u.style.display = "inline"), C.push(u))) : q || B ? (u.parentNode && u.parentNode.removeChild(u), h.splice(a--, 1), c--) : I || e.appendChild(u);
            for (a = D.length; - 1 < --a;) D[a].parentNode.removeChild(D[a]);
            if (q) {
                for (B && (v = z.createElement(A), e.appendChild(v), m = v.offsetWidth + "px", g = v.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(v)), y = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                for (d = " " === L && (!B || !I && !N), a = 0; a < q.length; a++) {
                    for (p = q[a], (v = z.createElement(A)).style.cssText = "display:block;text-align:" + k + ";position:" + (B ? "absolute;" : "relative;"), M && (v.className = M + (V ? a + 1 : "")), P.push(v), c = p.length, l = 0; l < c; l++) "BR" !== p[l].nodeName && (u = p[l], v.appendChild(u), d && u._wordEnd && v.appendChild(z.createTextNode(" ")), B && (0 === l && (v.style.top = u._y + "px", v.style.left = w + g + "px"), u.style.top = "0px", g && (u.style.left = u._x - g + "px")));
                    0 === c ? v.innerHTML = "&nbsp;" : I || N || (K(v), G(v, String.fromCharCode(160), " ")), B && (v.style.width = m, v.style.height = u._h + "px"), e.appendChild(v)
                }
                e.style.cssText = y
            }
            B && (s > e.clientHeight && (e.style.height = s - O + "px", e.clientHeight < s && (e.style.height = s + S + "px")), r > e.clientWidth && (e.style.width = r - j + "px", e.clientWidth < r && (e.style.width = r + x + "px"))), Z(n, C), I && Z(i, T), Z(o, P)
        }

        function I(e, t, n, i) {
            var o, r, s = R(e.childNodes),
                a = s.length,
                l = "absolute" === t.position || !0 === t.absolute;
            if (3 !== e.nodeType || 1 < a) {
                for (t.absolute = !1, o = 0; o < a; o++) 3 === (r = s[o]).nodeType && !/\S+/.test(r.nodeValue) || (l && 3 !== r.nodeType && "inline" === W(r, "display", null, !0) && (r.style.display = "inline-block", r.style.position = "relative"), r._isSplit = !0, I(r, t, n, i));
                return t.absolute = l, void(e._isSplit = !0)
            }! function (e, t, n, i) {
                var o, r, s, a, l, c, u, h, f, p, d = t.tag ? t.tag : t.span ? "span" : "div",
                    y = -1 !== (t.type || t.split || "chars,words,lines").indexOf("chars"),
                    v = "absolute" === t.position || !0 === t.absolute,
                    m = t.wordDelimiter || " ",
                    g = " " !== m ? "" : v ? "&#173; " : " ",
                    b = "</" + d + ">",
                    w = !0,
                    _ = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : P : null,
                    S = z.createElement("div"),
                    x = e.parentNode;
                for (x.insertBefore(S, e), S.textContent = e.nodeValue, x.removeChild(e), u = -1 !== (o = function e(t) {
                        var n = t.nodeType,
                            i = "";
                        if (1 === n || 9 === n || 11 === n) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += e(t)
                        } else if (3 === n || 4 === n) return t.nodeValue;
                        return i
                    }(e = S)).indexOf("<"), !1 !== t.reduceWhiteSpace && (o = o.replace(j, " ").replace(O, "")), u && (o = o.split("<").join("{{LT}}")), l = o.length, r = (" " === o.charAt(0) ? g : "") + n(), s = 0; s < l; s++)
                    if (c = o.charAt(s), _ && (p = _(o.substr(s), t.specialChars))) c = o.substr(s, p || 1), r += y && " " !== c ? i() + c + "</" + d + ">" : c, s += p - 1;
                    else if (c === m && o.charAt(s - 1) !== m && s) {
                    for (r += w ? b : "", w = !1; o.charAt(s + 1) === m;) r += g, s++;
                    s === l - 1 ? r += g : ")" !== o.charAt(s + 1) && (r += g + n(), w = !0)
                } else "{" === c && "{{LT}}" === o.substr(s, 6) ? (r += y ? i() + "{{LT}}</" + d + ">" : "{{LT}}", s += 5) : 55296 <= c.charCodeAt(0) && c.charCodeAt(0) <= 56319 || 65024 <= o.charCodeAt(s + 1) && o.charCodeAt(s + 1) <= 65039 ? (h = L(o.substr(s, 2)), f = L(o.substr(s + 2, 2)), a = 127462 <= h && h <= 127487 && 127462 <= f && f <= 127487 || 127995 <= f && f <= 127999 ? 4 : 2, r += y && " " !== c ? i() + o.substr(s, a) + "</" + d + ">" : o.substr(s, a), s += a - 1) : r += y && " " !== c ? i() + c + "</" + d + ">" : c;
                e.outerHTML = r + (w ? b : ""), u && G(x, "{{LT}}", "<")
            }(e, t, n, i)
        }
        /*!
         * VERSION: 0.7.0
         * DATE: 2019-02-07
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
         * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
         * This work is subject to the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        m = C.f, g = m.GreenSockGlobals || m, b = function (e) {
            var t, n = e.split("."),
                i = g;
            for (t = 0; t < n.length; t++) i[n[t]] = i = i[n[t]] || {};
            return i
        }("com.greensock.utils"), z = C.f.document || {}, w = void 0 !== m ? m : z.defaultView || {
            getComputedStyle: function () {}
        }, _ = /([A-Z])/g, O = /(?:\r|\n|\t\t)/g, j = /(?:\s\s+)/g, S = " style='position:relative;display:inline-block;" + (z.all && !z.addEventListener ? "*display:inline;*zoom:1;'" : "'"), x = b.SplitText = g.SplitText = function (e, t) {
            if ("string" == typeof e && (e = x.selector(e)), !e) throw "cannot split a null element.";
            this.elements = T(e) ? function (e) {
                var t, n, i, o = [],
                    r = e.length;
                for (t = 0; t < r; t++)
                    if (n = e[t], T(n))
                        for (i = n.length, i = 0; i < n.length; i++) o.push(n[i]);
                    else o.push(n);
                return o
            }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
        }, (E = x.prototype).split = function (e) {
            this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var t, n, i, o = this.elements.length, r = e.tag ? e.tag : e.span ? "span" : "div", s = A(e.wordsClass, r), a = A(e.charsClass, r); - 1 < --o;) i = this.elements[o], this._originals[o] = i.innerHTML, t = i.clientHeight, n = i.clientWidth, I(i, e, s, a), q(i, e, this.chars, this.words, this.lines, n, t);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, E.revert = function () {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var e = this._originals.length; - 1 < --e;) this.elements[e].innerHTML = this._originals[e];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, x.selector = m.$ || m.jQuery || function (e) {
            var t = m.$ || m.jQuery;
            return t ? (x.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }, x.version = "0.7.0";
        var N = C.h.SplitText;
        var B = function (e, t, n, i, o) {
            var r = !0 === o && {
                passive: !0
            };
            e[("a" === t ? "add" : "remove") + "EventListener"](n, i, r)
        };

        function M(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function V(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function D(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var X = new(function () {
                function t() {
                    var e = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), D(this, "toggle", function () {
                        e.flags.isAnimating = !0, e.tl && e.tl.kill(), e.tl = new TimelineLite({
                            force3D: !0,
                            onComplete: function () {
                                e.flags.isAnimating = !1
                            }
                        }), e.flags.isOpen ? e.close() : e.open()
                    }), D(this, "onEnter", function () {
                        u.c.to(e.SVG.last, 1, {
                            x: 0,
                            ease: Expo.easeOut
                        })
                    }), D(this, "onLeave", function () {
                        u.c.to(e.SVG.last, 1, {
                            x: 10,
                            ease: Expo.easeOut
                        })
                    }), this.el = document.querySelector(".js-menu"), this.ui = {
                        btns: M(document.querySelectorAll(".js-toggle-menu"))
                    }, this.label = {
                        open: document.querySelector(".js-toggle-menu__label--open"),
                        close: document.querySelector(".js-toggle-menu__label--close"),
                        plus: document.querySelector(".js-toggle-menu__label--plus")
                    }, this.SVG = {
                        first: document.querySelector(".js-first-line"),
                        last: document.querySelector(".js-last-line")
                    }, u.c.set(this.SVG.last, {
                        x: 10,
                        ease: Expo.easeOut
                    }), this.flags = {
                        isOpen: !1,
                        isAnimating: !1
                    }, this.tl = null, this.clip = {
                        value: 0
                    }, this.splitLabelOpen = new N(this.label.open, {
                        type: "chars"
                    }).chars, this.splitLabelClose = new N(this.label.close, {
                        type: "chars"
                    }).chars
                }
                return function (e, t, n) {
                    t && V(e.prototype, t), n && V(e, n)
                }(t, [{
                    key: "setInitial",
                    value: function () {
                        u.c.set(".js-menu__content", {
                            scale: .95
                        }), u.c.set(this.splitLabelClose, {
                            yPercent: -100
                        })
                    }
                }, {
                    key: "open",
                    value: function () {
                        this.flags.isOpen = !0, p.isScroll = !1, document.body.classList.add("menu-is-opened"), p.isCase || se.checkAnchors(), this.tl.set(this.label.close, {
                            autoAlpha: 1
                        }).to(this.el, .75, {
                            autoAlpha: 1,
                            ease: Expo.easeOut
                        }).to(this.SVG.first, 1, {
                            rotation: 45,
                            yPercent: 115,
                            transformOrigin: "50% 50%",
                            ease: Expo.easeOut
                        }, 0).to(this.SVG.last, 1, {
                            rotation: -45,
                            yPercent: -115,
                            transformOrigin: "50% 50%",
                            ease: Expo.easeOut
                        }, 0).staggerTo(this.splitLabelOpen, .35, {
                            yPercent: 100,
                            ease: Power1.easeOut
                        }, .02, 0).staggerTo(this.splitLabelClose, .75, {
                            yPercent: 0,
                            ease: Expo.easeOut
                        }, .02, .1).fromTo(".js-menu__content", 1.1, {
                            scale: .925
                        }, {
                            scale: .999,
                            ease: Expo.easeOut
                        }, 0).set(this.label.open, {
                            autoAlpha: 0
                        })
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.flags.isOpen = !1, p.isScroll = !0, document.body.classList.remove("menu-is-opened"), this.tl.set(this.label.open, {
                            autoAlpha: 1
                        }).to(this.el, .25, {
                            autoAlpha: 0,
                            ease: Power1.easeOut
                        }).to(this.SVG.first, 1, {
                            rotation: 0,
                            yPercent: 0,
                            ease: Expo.easeOut
                        }, 0).to(this.SVG.last, 1, {
                            rotation: 0,
                            yPercent: 0,
                            ease: Expo.easeOut
                        }, 0).staggerTo(this.splitLabelClose, .35, {
                            yPercent: -100,
                            ease: Power1.easeOut
                        }, -.02, 0).staggerTo(this.splitLabelOpen, .75, {
                            yPercent: 0,
                            ease: Expo.easeOut
                        }, -.02, .1).set(this.label.close, {
                            autoAlpha: 0
                        })
                    }
                }, {
                    key: "addListeners",
                    value: function () {
                        var t = this;
                        this.ui.btns.forEach(function (e) {
                            B(e, "a", "click", t.toggle), B(e, "a", "mouseenter", function () {
                                document.body.classList.contains("menu-is-opened") || t.onEnter()
                            }), B(e, "a", "mouseleave", function () {
                                document.body.classList.contains("menu-is-opened") || t.onLeave()
                            })
                        })
                    }
                }, {
                    key: "init",
                    value: function () {
                        this.setInitial(), this.addListeners()
                    }
                }]), t
            }()),
            Y = n(90),
            J = new(n.n(Y).a),
            Q = n(91),
            U = n.n(Q);

        function $(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var ee = function () {
            function t() {
                var e = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function (e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(this, "onResize", function () {
                    e.updateStore(), e.setAspect(), J.emit(t.events.RESIZE)
                }), this.onResize(), window.addEventListener("resize", U()(this.onResize, 200))
            }
            return function (e, t, n) {
                t && $(e.prototype, t), n && $(e, n)
            }(t, [{
                key: "updateStore",
                value: function () {
                    Object.assign(p, {
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
            }, {
                key: "setAspect",
                value: function () {
                    p.height <= p.width ? (p.body.classList.remove("is-portrait"), p.body.classList.add("is-landscape"), Object.assign(p, {
                        isLandscape: !0
                    })) : (p.body.classList.remove("is-landscape"), p.body.classList.add("is-portrait"), Object.assign(p, {
                        isLandscape: !1
                    }))
                }
            }]), t
        }();
        ee.events = {
            RESIZE: "GlobalResize.events.RESIZE"
        };
        new ee;
        var te = ee.events;

        function ne(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ie(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function oe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        c.a;
        var re = function () {
            function o() {
                var i = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), oe(this, "setMaxHeight", function () {
                    var e = document.querySelector(".js-smooth__scroll");
                    Object.assign(p, {
                        scrollHeight: e.getBoundingClientRect().height - window.innerHeight
                    })
                }), oe(this, "tick", function () {
                    var e = i.state;
                    p.isSmooth ? (e.current += (e.target - e.current) * e.ease, e.currentRounded = Math.round(100 * e.current) / 100) : e.currentRounded = e.target, J.emit(o.events.TICK, {
                        target: e.target,
                        current: e.currentRounded
                    }), i.progressbar(), i.toggleToTop(e.target)
                }), oe(this, "progressbar", function () {
                    var e = d(i.state.currentRounded, 0, p.scrollHeight);
                    e = Math.max(Math.min(e, 1), 0), p.isProgressbar || u.c.set(p.progressBar, {
                        scaleX: e
                    })
                }), oe(this, "onEvent", function (e) {
                    if (p.isScroll) {
                        k.run();
                        var t = i.state,
                            n = -1 * e.deltaY;
                        t.target += n, J.emit(o.events.SCROLL, {
                            y: t.target,
                            deltaY: n
                        }), i.clampTarget(), i.removeHash()
                    }
                }), oe(this, "onScroll", function () {
                    if (p.isScroll) {
                        var e = i.state;
                        e.target = window.scrollY, J.emit(o.events.SCROLL, {
                            y: e.target
                        })
                    }
                }), oe(this, "onResize", function () {
                    p.isSmooth && (i.setMaxHeight(), i.clampTarget())
                }), oe(this, "toTop", function () {
                    p.isDevice ? u.c.to(window, 1, {
                        scrollTo: 0,
                        ease: Expo.easeInOut
                    }) : u.c.to(i.state, 1, {
                        target: 0,
                        ease: Expo.easeInOut
                    })
                }), oe(this, "toCases", function () {
                    var e = i.state.offsetCases;
                    p.isDevice ? u.c.to(window, 1, {
                        scrollTo: e,
                        ease: Expo.easeInOut
                    }) : u.c.to(i.state, 1, {
                        target: e,
                        ease: Expo.easeInOut
                    })
                }), oe(this, "update", function () {
                    p.isDesktop && (i.state.current = 0, i.state.target = 0, i.setMaxHeight()), i.ui.toCases = document.querySelector(".js-to-cases"), i.ui.toCases && (i.ui.cases = document.querySelector(".js-cases"), i.state.offsetCases = i.ui.cases.offsetTop, B(i.ui.toCases, "a", "click", i.toCases))
                }), B(u.c.ticker, "a", "tick", this.tick), this.ui = {
                    toTop: document.querySelector(".js-to-top"),
                    links: ne(document.querySelectorAll(".js-menu-link")),
                    toCases: null,
                    cases: null
                }, this.state = {
                    target: 0,
                    current: 0,
                    currentRounded: 0,
                    ease: .1075,
                    isAnchoring: !1,
                    offsetCases: 0,
                    extra: 1
                }, this.ui.toTop && u.c.set(this.ui.toTop, {
                    yPercent: 100,
                    alpha: 0,
                    pointerEvents: "none"
                }), this.init()
            }
            return function (e, t, n) {
                t && ie(e.prototype, t), n && ie(e, n)
            }(o, [{
                key: "removeHash",
                value: function () {
                    window.location.hash && history.pushState("", document.title, window.location.pathname + window.location.search)
                }
            }, {
                key: "clampTarget",
                value: function () {
                    var e = this.state.target;
                    this.state.target = Math.min(Math.max(e, 0), p.scrollHeight)
                }
            }, {
                key: "scrollTo",
                value: function (e) {
                    p.isSmooth ? (p.scrollCurrent = 0, this.state.target = e, this.clampTarget()) : u.c.to(window, 1, {
                        scrollTo: e,
                        ease: Expo.easeInOut
                    })
                }
            }, {
                key: "getAnchorLinks",
                value: function () {
                    var t = this;
                    this.cache = null, this.cache = [], ne(document.querySelectorAll(".js-scroll-target")).forEach(function (e) {
                        t.cache.push({
                            offset: e.offsetTop
                        })
                    })
                }
            }, {
                key: "checkAnchors",
                value: function () {
                    var n = this,
                        i = this.ui.links,
                        o = null;
                    o = p.isSmooth ? this.state.current : this.state.target, this.cache.forEach(function (e, t) {
                        e.offset <= o + n.state.extra && (i.forEach(function (e) {
                            e.classList.remove("is-active")
                        }), i[t].classList.add("is-active"))
                    })
                }
            }, {
                key: "clickAnchors",
                value: function () {
                    var n = this;
                    this.ui.links.forEach(function (e, t) {
                        B(e, "a", "click", function (e) {
                            e.preventDefault(), X.toggle(), p.isSmooth && (p.isCase || n.scrollTo(n.cache[t].offset))
                        })
                    })
                }
            }, {
                key: "toggleToTop",
                value: function (e) {
                    var t = this.ui.toTop;
                    100 < e && !p.isScrolled ? (p.isScrolled = !0, u.c.to(t, .75, {
                        yPercent: 0,
                        alpha: 1,
                        ease: Expo.easeOut
                    }), u.c.set(t, {
                        pointerEvents: "all"
                    }), p.isDevice && u.c.to(".js-toggle-menu__text", .5, {
                        alpha: 0,
                        yPercent: -100,
                        ease: Back.easeIn
                    }), p.body.classList.add("is-scrolled")) : e <= 100 && p.isScrolled && (p.isScrolled = !1, u.c.to(t, .5, {
                        yPercent: 100,
                        alpha: 0,
                        ease: Back.easeIn
                    }), u.c.set(t, {
                        pointerEvents: "none"
                    }), p.isDevice && u.c.to(".js-toggle-menu__text", .75, {
                        alpha: 1,
                        yPercent: 0,
                        ease: Expo.easeOut
                    }), p.body.classList.remove("is-scrolled"))
                }
            }, {
                key: "destroy",
                value: function () {
                    this.ui.toCases && B(this.ui.toCases, "r", "click", this.toCases)
                }
            }, {
                key: "addListeners",
                value: function () {
                    var e = this;
                    p.isSmooth ? (this.vs = new f.a({
                        limitInertia: !1,
                        mouseMultiplier: -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) ? .75 : .45,
                        touchMultiplier: 3,
                        firefoxMultiplier: 90,
                        passive: !0
                    }), this.vs.on(this.onEvent)) : B(window, "a", "scroll", this.onScroll, !0), this.clickAnchors(), J.on(te.RESIZE, this.onResize), this.ui.toTop && (B(this.ui.toTop, "a", "click", this.toTop), p.isDesktop && (B(this.ui.toTop, "a", "mouseenter", function () {
                        u.c.to(e.ui.toTop, 1, {
                            scale: 1.1,
                            ease: Elastic.easeOut
                        }), u.c.to(".js-to-top__text", 1.5, {
                            rotation: 360,
                            ease: Expo.easeOut
                        })
                    }), B(this.ui.toTop, "a", "mouseleave", function () {
                        u.c.to(e.ui.toTop, 1, {
                            scale: 1,
                            ease: Elastic.easeOut
                        }), u.c.to(".js-to-top__text", 1.5, {
                            rotation: 0,
                            ease: Expo.easeOut
                        })
                    })))
                }
            }, {
                key: "init",
                value: function () {
                    this.getAnchorLinks(), this.addListeners()
                }
            }]), o
        }();
        re.events = {
            TICK: "TICK",
            SCROLL: "SCROLL"
        };
        var se = new re,
            ae = re.events;
        n(59), n(125), n(84);

        function le(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ce(e, t, n, i, o, r, s) {
            try {
                var a = e[r](s),
                    l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }

        function ue(a) {
            return function () {
                var e = this,
                    s = arguments;
                return new Promise(function (t, n) {
                    var i = a.apply(e, s);

                    function o(e) {
                        ce(i, t, n, o, r, "next", e)
                    }

                    function r(e) {
                        ce(i, t, n, o, r, "throw", e)
                    }
                    o(void 0)
                })
            }
        }

        function he(n) {
            return new Promise(function (e) {
                var t = document.createElement("img");
                B(t, "a", "load", function () {
                    e(t)
                }), B(t, "a", "error", function () {
                    e()
                }), t.src = n
            })
        }

        function fe(n) {
            return new Promise(function (e) {
                var t = document.createElement("video");
                B(t, "a", "loadedmetadata", function () {
                    e(t)
                }), B(t), 2 <= t.readyState && e(t), t.src = n, t.load()
            })
        }
        var pe = function () {
            var t = ue(regeneratorRuntime.mark(function e(t) {
                var n, i, o, r;
                return regeneratorRuntime.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = le(p.scrollEl.querySelectorAll("img")), i = n.map(function () {
                                var t = ue(regeneratorRuntime.mark(function e(t) {
                                    return regeneratorRuntime.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, he(t.src);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()), o = le(p.scrollEl.querySelectorAll("video")), r = o.map(function () {
                                var t = ue(regeneratorRuntime.mark(function e(t) {
                                    return regeneratorRuntime.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, fe(t.src);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()), e.next = 6, Promise.all([].concat(le(i), le(r)));
                        case 6:
                            t();
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function (e) {
                return t.apply(this, arguments)
            }
        }();

        function de(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ye(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var ve = function () {
            function e() {
                var n = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), ye(this, "run", function (e) {
                    var t = e.current;
                    n.state.current = t, n.transformSections()
                }), ye(this, "onResize", function () {
                    n.state.isResizing = !0, n.sections && (n.sections.forEach(function (e) {
                        e.el.style.transform = "translate3d(0, 0, 0)";
                        var t = e.el.getBoundingClientRect();
                        e.bounds.top = t.top, e.bounds.bottom = t.bottom
                    }), n.transformSections()), n.state.isResizing = !1
                }), this.el = p.scrollEl, this.ui = {
                    el: this.el,
                    sections: document.querySelectorAll(".js-smooth-section")
                }, this.state = {
                    total: this.ui.sections.length,
                    current: 0,
                    target: 0,
                    elastic: {
                        current: 0,
                        ease: .05
                    },
                    threshold: 100,
                    isResizing: !1
                }, this.init()
            }
            return function (e, t, n) {
                t && de(e.prototype, t), n && de(e, n)
            }(e, [{
                key: "init",
                value: function () {
                    this.on()
                }
            }, {
                key: "on",
                value: function () {
                    this.setStyles(), this.getCache(), this.addListeners(), pe(this.onResize)
                }
            }, {
                key: "setStyles",
                value: function () {
                    p.body.classList.add("is-virtual-scroll")
                }
            }, {
                key: "transformSections",
                value: function () {
                    for (var e = this.state, t = e.total, n = e.isResizing, i = 0; i < t; i++) {
                        var o = this.sections[i],
                            r = o.el,
                            s = o.bounds,
                            a = o.speed,
                            l = o.parallaxOffset,
                            c = this.isVisible(s, a, l),
                            u = c.isVisible,
                            h = c.transform;
                        !u && o.out || (r.style.transform = "translate3d(0, ".concat(-h, "px, 0)")), u || n ? Object.assign(o, {
                            out: !1
                        }) : o.out || Object.assign(o, {
                            out: !0
                        })
                    }
                }
            }, {
                key: "isVisible",
                value: function (e, t, n) {
                    var i = e.top,
                        o = e.bottom,
                        r = e.offset,
                        s = this.state,
                        a = s.current,
                        l = s.threshold,
                        c = a * t,
                        u = c - n,
                        h = o + r - c,
                        f = i + r - c < l + p.height && -l < h;
                    return {
                        isVisible: f,
                        transform: u
                    }
                }
            }, {
                key: "getCache",
                value: function () {
                    this.getSections()
                }
            }, {
                key: "getSections",
                value: function () {
                    var l = this;
                    this.ui.sections && (this.sections = [], this.ui.sections.forEach(function (e) {
                        e.style.transform = "translate3d(0, 0, 0)";
                        var t = e.dataset.speed || 1,
                            n = e.getBoundingClientRect(),
                            i = n.top,
                            o = n.bottom,
                            r = n.height,
                            s = (i - (p.height / 2 - r / 2)) * t - (i - (p.height / 2 - r / 2)),
                            a = {
                                el: e,
                                bounds: {
                                    top: i,
                                    bottom: o,
                                    offset: l.state.current * t + s
                                },
                                speed: t,
                                parallaxOffset: s,
                                out: !0
                            };
                        l.sections.push(a)
                    }))
                }
            }, {
                key: "addListeners",
                value: function () {
                    J.on(ae.TICK, this.run), J.on(te.RESIZE, this.onResize)
                }
            }, {
                key: "removeListeners",
                value: function () {
                    J.off(ae.TICK, this.run), J.off(te.RESIZE, this.onResize)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.removeListeners(), this.ui = null, this.state = null, this.sections = null
                }
            }]), e
        }();
        n(135);

        function me(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ge(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var be = function () {
                function t(e) {
                    var n = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), ge(this, "run", function (e) {
                        var t = e.current;
                        n.state.current = t, n.animateElems()
                    }), ge(this, "intersectRatio", function (e, t, n, i) {
                        var o, r = t - p.height,
                            s = (p.height + n + e) * i;
                        return o = Math.abs(r / s), {
                            progress: o = d(o, 0, 1)
                        }
                    }), ge(this, "onResize", function () {
                        n.state.isResizing = !0, n.updateCache(), n.state.isResizing = !1
                    }), this.elems = e, this.cache = null, this.state = {
                        threshold: 100,
                        isResizing: !1
                    }, this.init()
                }
                return function (e, t, n) {
                    t && me(e.prototype, t), n && me(e, n)
                }(t, [{
                    key: "animateElems",
                    value: function () {
                        var h = this;
                        this.cache.forEach(function (e) {
                            var t = e.height,
                                n = e.top,
                                i = e.bottom,
                                o = e.tl,
                                r = e.duration,
                                s = h.isVisible(n, i),
                                a = s.isVisible,
                                l = s.start,
                                c = s.end;
                            if (a || h.state.isResizing) {
                                var u = h.intersectRatio(t, l, c, r).progress;
                                o.progress(u)
                            }
                        })
                    }
                }, {
                    key: "isVisible",
                    value: function (e, t) {
                        var n = this.state.current,
                            i = e - n,
                            o = t - n,
                            r = i < p.height && 0 < o;
                        return {
                            isVisible: r,
                            start: i,
                            end: o
                        }
                    }
                }, {
                    key: "getCache",
                    value: function () {
                        var l = this;
                        this.elems && (this.cache = [], this.elems.forEach(function (e) {
                            if (!(void 0 === e.dataset.animateMobile && p.isDevice || void 0 === e.dataset.animateFirefox && p.isFirefox)) {
                                var t = new TimelineLite({
                                        paused: !0
                                    }),
                                    n = JSON.parse(e.dataset.from),
                                    i = function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {},
                                                i = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))), i.forEach(function (e) {
                                                ge(t, e, n[e])
                                            })
                                        }
                                        return t
                                    }({}, JSON.parse(e.dataset.to), {
                                        ease: Linear.easeNone
                                    });
                                t.fromTo(e, 1, n, i), t.progress(1);
                                var o = e.getBoundingClientRect(),
                                    r = o.top,
                                    s = o.bottom,
                                    a = o.height;
                                t.progress(0), l.cache.push({
                                    el: e,
                                    tl: t,
                                    top: r > p.height ? r : p.height,
                                    bottom: s + p.height / 2,
                                    height: a,
                                    duration: e.dataset.duration || 1
                                })
                            }
                        }))
                    }
                }, {
                    key: "updateCache",
                    value: function () {
                        this.elems.forEach(function (e) {
                            var t = e.getBoundingClientRect(),
                                n = t.top,
                                i = t.bottom;
                            Object.assign(e, {
                                top: n > p.height ? n : p.height,
                                bottom: i,
                                height: i - n
                            })
                        })
                    }
                }, {
                    key: "addListeners",
                    value: function () {
                        J.on(ae.TICK, this.run), J.on(te.RESIZE, this.onResize)
                    }
                }, {
                    key: "removeListeners",
                    value: function () {
                        J.off(ae.TICK, this.run), J.off(te.RESIZE, this.onResize)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.removeListeners(), this.cache = null, this.elems = null, this.state = null
                    }
                }, {
                    key: "init",
                    value: function () {
                        this.getCache(), this.addListeners()
                    }
                }]), t
            }(),
            we = n(27);
        var _e = function (r) {
            return new Promise(function (e, t) {
                var n = "mp4" === r.split(".").pop() ? "video" : "image";
                if ("image" == n) {
                    var i = new Image;
                    i.onload = e, i.onerror = t, i.src = r
                } else if ("video" == n) {
                    var o = document.createElement("video");
                    o.onloadeddata = e, o.onerror = t, o.src = r
                }
            })
        };

        function Se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var xe = function () {
            function t(e) {
                var n = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function (e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(this, "handle", function (e, t) {
                    e.forEach(function (e) {
                        0 < e.intersectionRatio && (n.loadImage(e.target), n.observer.unobserve(e.target))
                    })
                }), this.images = e, this.options = {
                    root: null,
                    rootMargin: "50% 50% 50% 50%",
                    threshold: [0, 0]
                }, this.observer = new IntersectionObserver(this.handle, this.options), we.a.set(this.images, {
                    alpha: 0
                }), this.init()
            }
            return function (e, t, n) {
                t && Se(e.prototype, t), n && Se(e, n)
            }(t, [{
                key: "observe",
                value: function () {
                    var t = this;
                    this.images.forEach(function (e) {
                        t.observer.observe(e)
                    })
                }
            }, {
                key: "loadImage",
                value: function (e) {
                    var t = e.dataset.lazySrc;
                    _e(t).then(function () {
                        e.src = t, we.a.to(e, .5, {
                            alpha: 1,
                            ease: Power1.easeOut
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.observer.disconnect(), this.observer = null, this.images = null
                }
            }, {
                key: "init",
                value: function () {
                    this.observe()
                }
            }]), t
        }();

        function Oe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var je = function () {
            function t(e) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.elems = e, this.cache = null, this.options = null, this.observer = null, this.init()
            }
            return function (e, t, n) {
                t && Oe(e.prototype, t), n && Oe(e, n)
            }(t, [{
                key: "createObserver",
                value: function () {
                    this.options = {
                        root: null,
                        rootMargin: "0px 0px 0px 0px",
                        threshold: [0, 0]
                    }, this.observer = new IntersectionObserver(this.handler.bind(this), this.options)
                }
            }, {
                key: "handler",
                value: function (e) {
                    e.forEach(function (e) {
                        e.isIntersecting ? e.target.play() : e.target.pause()
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.cache = null, this.observer.disconnect(), this.observer = null, this.elems = null
                }
            }, {
                key: "run",
                value: function () {
                    var t = this;
                    this.elems.forEach(function (e) {
                        t.observer.observe(e)
                    })
                }
            }, {
                key: "init",
                value: function () {
                    this.createObserver(), this.run()
                }
            }]), t
        }();
        n(137);

        function Ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var ke = function () {
            function t(e) {
                var n = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function (e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(this, "copyText", function (e) {
                    e.preventDefault();
                    var t = n.el.querySelector("span");
                    n.input.select(), document.execCommand("copy"), n.tl && n.tl.kill(), n.tl = new TimelineLite, n.tl.fromTo(t, 1.25, {
                        yPercent: 0,
                        opacity: 0
                    }, {
                        yPercent: -50,
                        opacity: 1,
                        ease: Expo.easeOut
                    }).to(t, 1, {
                        opacity: 0,
                        ease: Expo.easeOut
                    }).set(t, {
                        yPercent: 0
                    })
                }), this.el = e, this.instance = Math.random().toString(36).substring(7), this.init()
            }
            return function (e, t, n) {
                t && Ee(e.prototype, t), n && Ee(e, n)
            }(t, [{
                key: "appendInput",
                value: function (e) {
                    this.input = document.createElement("input"), this.input.id = "text" + this.instance, this.input.name = "text" + this.instance, this.input.type = "text", this.input.setAttribute("value", this.el.dataset.href), this.label = document.createElement("label"), this.label.setAttribute("for", "text" + this.instance), this.label.innerHTML = "Copy Email", p.body.appendChild(this.input, e), p.body.appendChild(this.label, e), Object.assign(this.input.style, {
                        position: "fixed",
                        opacity: 0,
                        pointerEvents: "none"
                    }), Object.assign(this.label.style, {
                        position: "fixed",
                        opacity: 0,
                        pointerEvents: "none"
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.el = null, this.input.remove()
                }
            }, {
                key: "addEvents",
                value: function () {
                    this.el.addEventListener("click", this.copyText)
                }
            }, {
                key: "init",
                value: function () {
                    this.appendInput(), this.addEvents()
                }
            }]), t
        }();

        function Ce(e) {
            return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Te(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Pe(e, t) {
            return !t || "object" !== Ce(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Le(e) {
            return (Le = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ae(e, t) {
            return (Ae = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Re = function () {
                function e() {
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), Pe(this, Le(e).apply(this, arguments))
                }
                return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Ae(e, t)
                    }(e, a.a.Renderer),
                    function (e, t, n) {
                        t && Te(e.prototype, t), n && Te(e, n)
                    }(e, [{
                        key: "onEnter",
                        value: function () {
                            this.el = this.wrap.lastElementChild
                        }
                    }, {
                        key: "onLeave",
                        value: function () {}
                    }, {
                        key: "onEnterCompleted",
                        value: function () {
                            se.update(), p.isSmooth && this.initSmooth(), this.initParallax(), this.initLazyLoad(), this.initCheckVideos(), this.initCopyLinks()
                        }
                    }, {
                        key: "onLeaveCompleted",
                        value: function () {
                            this.smooth && this.smooth.destroy(), this.parallax && this.parallax.destroy(), this.copyLinks && this.copyLinks.forEach(function (e) {
                                e.destroy()
                            }), se.destroy()
                        }
                    }, {
                        key: "initSmooth",
                        value: function () {
                            var e = this.el.querySelectorAll(".js-smooth-section");
                            e && (this.smooth = new ve(e))
                        }
                    }, {
                        key: "initScrollAnimations",
                        value: function () {
                            var e = this.el.querySelectorAll("[data-scroll]");
                            e && (this.scrollAnimation = new ScrollAnimations(e))
                        }
                    }, {
                        key: "initParallax",
                        value: function () {
                            var e = this.el.querySelectorAll("[data-from]");
                            e && (this.parallax = new be(e))
                        }
                    }, {
                        key: "initLazyLoad",
                        value: function () {
                            var e = this.el.querySelectorAll("[data-lazy-src]");
                            e && (this.lazyLoad = new xe(e))
                        }
                    }, {
                        key: "initCheckVideos",
                        value: function () {
                            var e = this.el.querySelectorAll("video");
                            e && (this.checkVideos = new je(e))
                        }
                    }, {
                        key: "initCopyLinks",
                        value: function () {
                            var n = this,
                                e = document.querySelectorAll(".js-copy");
                            this.copyLinks = [], e && e.forEach(function (e) {
                                var t = new ke(e);
                                n.copyLinks.push(t)
                            })
                        }
                    }]), e
            }(),
            qe = (n(64), n(65)),
            Ie = n.n(qe);

        function Ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var Be = new(function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Ie.a.setQuality("low"), this.arr = null
            }
            return function (e, t, n) {
                t && Ne(e.prototype, t), n && Ne(e, n)
            }(e, [{
                key: "loadAnimations",
                value: function () {
                    var i = this;
                    this.arr = [], this.containers = document.querySelectorAll(".js-lottie"), this.containers.forEach(function (e) {
                        var t = e.dataset.slug,
                            n = Ie.a.loadAnimation({
                                container: e,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                path: "/wp-content/themes/voila-theme/static/lottie/".concat(t, "/data.json")
                            });
                        i.arr.push({
                            el: e,
                            animation: n
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.arr.forEach(function (e) {
                        e.animation.destroy()
                    }), this.arr = null, this.containers = null
                }
            }, {
                key: "init",
                value: function () {
                    this.loadAnimations()
                }
            }]), e
        }());

        function Me(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Ve(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var De = function () {
            function t(e) {
                var i = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Ve(this, "onLeft", function (e) {
                    return i.onLeft = e, i
                }), Ve(this, "onRight", function (e) {
                    return i.onRight = e, i
                }), Ve(this, "handleTouchMove", function (e) {
                    if (i.xDown && i.yDown) {
                        var t = e.touches[0].clientX,
                            n = e.touches[0].clientY;
                        i.xDiff = i.xDown - t, i.yDiff = i.yDown - n, 50 < Math.abs(i.xDiff) + Math.abs(i.yDiff) && (Math.abs(i.xDiff) > Math.abs(i.yDiff) && (0 < i.xDiff ? i.onLeft() : i.onRight()), i.xDown = null, i.yDown = null)
                    }
                }), this.xDown = null, this.yDown = null, this.element = "string" == typeof e ? document.querySelector(e) : e, B(this.element, "a", "touchstart", function (e) {
                    i.xDown = e.touches[0].clientX, i.yDown = e.touches[0].clientY
                }), this.init()
            }
            return function (e, t, n) {
                t && Me(e.prototype, t), n && Me(e, n)
            }(t, [{
                key: "init",
                value: function () {
                    B(this.element, "a", "touchmove", this.handleTouchMove)
                }
            }]), t
        }();

        function ze(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function He(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var We = new(function () {
            function e() {
                var r = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), He(this, "setActive", function (e, t) {
                    r.state.last = r.state.current, r.state.current = e;
                    var n = r.ui.dot,
                        i = r.cache[r.state.last],
                        o = r.cache[r.state.current];
                    r.ui.circle.href = t, u.c.to(n, 1, {
                        y: o.center,
                        ease: Expo.easeOut
                    }, 0), u.c.to(i.el, .5, {
                        opacity: .5,
                        ease: Expo.easeOut
                    }, 0), u.c.to(o.el, .5, {
                        opacity: 1,
                        ease: Expo.easeOut
                    }, 0)
                }), He(this, "onEnter", function () {
                    u.c.to(r.ui.circle, 1, {
                        scale: 1.1,
                        ease: Elastic.easeOut
                    })
                }), He(this, "onLeave", function () {
                    u.c.to(r.ui.circle, 1, {
                        scale: 1,
                        ease: Elastic.easeOut
                    })
                }), He(this, "setActiveClass", function (e) {
                    var t = document.querySelectorAll(".js-swiper__dot"),
                        n = document.querySelectorAll(".js-swiper-titles__item"),
                        i = t[e],
                        o = n[e];
                    t.forEach(function (e) {
                        e.classList.remove("is-active"), i.classList.add("is-active")
                    }), n.forEach(function (e) {
                        e.classList.remove("is-active"), o.classList.add("is-active")
                    })
                }), this.el = document.querySelector(".js-site-header-projects"), this.el
            }
            return function (e, t, n) {
                t && ze(e.prototype, t), n && ze(e, n)
            }(e, [{
                key: "getCache",
                value: function () {
                    var i = this;
                    this.cache = [];
                    var e = this.ui,
                        t = e.dot,
                        n = e.list,
                        o = e.links,
                        r = n.getBoundingClientRect(),
                        s = t.getBoundingClientRect();
                    o.forEach(function (e) {
                        var t = e.getBoundingClientRect(),
                            n = t.top + t.height / 2 - r.top - s.height / 2;
                        i.cache.push({
                            el: e,
                            center: n
                        })
                    })
                }
            }, {
                key: "setInitial",
                value: function () {
                    var e = this.ui.dot,
                        t = this.cache[this.state.current];
                    u.c.set(e, {
                        y: t.center
                    }), u.c.set(t.el, {
                        opacity: 1
                    }), this.ui.circle.href = t.el.href, t.el.classList.add("is-active")
                }
            }, {
                key: "addListeners",
                value: function () {
                    var i = this,
                        e = this.ui,
                        o = e.links,
                        t = e.circle;
                    B(t, "a", "mouseenter", this.onEnter), B(t, "a", "mouseleave", this.onLeave), o.forEach(function (e, t) {
                        var n = null;
                        B(e, "a", "mouseenter", function () {
                            e.classList.contains("is-active") || (o.forEach(function (e) {
                                e.classList.remove("is-active")
                            }), e.classList.add("is-active"), i.setActive(t, e.href), n = setTimeout(function () {
                                i.doLottie(t)
                            }, 200))
                        }), B(e, "a", "mouseleave", function () {
                            clearTimeout(n)
                        })
                    })
                }
            }, {
                key: "doLottie",
                value: function (e) {
                    this.state.lottieLast = this.state.lottieCurrent, this.state.lottieCurrent = e;
                    var t = this.lottieArr[this.state.lottieLast],
                        n = this.lottieArr[this.state.lottieCurrent];
                    u.c.set(t.el, {
                        autoAlpha: 0
                    }, 0), u.c.set(n.el, {
                        autoAlpha: 1
                    }, 0), t.animation.stop(), n.animation.play()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.ui = null, this.cache = null, this.lottieArr = null, Be.destroy()
                }
            }, {
                key: "initSwipe",
                value: function () {
                    var o = this,
                        e = this.ui,
                        t = e.links,
                        n = e.hero,
                        r = t.length - 1,
                        i = new De(n);
                    this.cache.forEach(function (e, t) {
                        var n = e.el;
                        o.createElems = document.createElement("div"), n.classList.contains("is-active") ? (document.querySelectorAll(".js-swiper-titles__item")[t].classList.add("is-active"), o.createElems.className = "c-swiper__dot | js-swiper__dot is-active") : o.createElems.className = "c-swiper__dot | js-swiper__dot", document.querySelector(".js-swiper__dots").appendChild(o.createElems)
                    }), i.onLeft(function () {
                        var n = parseInt(o.state.current, 10) === r ? 0 : parseInt(o.state.current, 10) + 1,
                            i = null;
                        t.forEach(function (e, t) {
                            n == t && (i = e)
                        }), null != i && (o.setActive(n, i.href), o.doLottie(n), o.setActiveClass(n))
                    }), i.onRight(function () {
                        var n = 0 === parseInt(o.state.current, 10) ? r : parseInt(o.state.current, 10) - 1,
                            i = null;
                        t.forEach(function (e, t) {
                            n == t && (i = e)
                        }), null != i && (o.setActive(n, i.href), o.doLottie(n), o.setActiveClass(n))
                    })
                }
            }, {
                key: "init",
                value: function () {
                    this.ui = {
                        dot: document.querySelector(".js-site-header-projects__dot"),
                        list: document.querySelector(".js-site-header-projects__list"),
                        links: document.querySelectorAll(".js-site-header-projects__link"),
                        circle: document.querySelector(".js-hero-circle"),
                        hero: document.querySelector(".c-hero")
                    }, this.cache = null, this.tl = null, this.lottieArr = Be.arr;
                    var e = this.el ? this.el.dataset.active : 0;
                    this.state = {
                        last: 0,
                        current: e,
                        lottieLast: 0,
                        lottieCurrent: e
                    }, this.getCache(), this.setInitial(), this.addListeners(), p.isPhone && this.initSwipe()
                }
            }]), e
        }());

        function Ge(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var Ze = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Be.init(), this.tl = null, this.index = document.querySelector(".js-site-header-projects").dataset.active, this.lottieCurrent = Be.arr[this.index], this.heroCircle = document.querySelector(".js-hero-circle"), this.heroCircleBounds = this.heroCircle.getBoundingClientRect(), this.maskCircle = document.querySelector(".js-mask__circle"), this.maskCircleBounds = this.maskCircle.getBoundingClientRect(), this.letters = {
                    v: document.querySelector(".js-hero__letter--v"),
                    i: document.querySelector(".js-hero__letter--i"),
                    l: document.querySelector(".js-hero__letter--l"),
                    a: document.querySelector(".js-hero__letter--a"),
                    d: document.querySelector(".js-hero__letter--d")
                }, this.duration = {
                    l: 3
                }, p.isPhone || (p.isScroll = !1), this.init()
            }
            return function (e, t, n) {
                t && Ge(e.prototype, t), n && Ge(e, n)
            }(e, [{
                key: "setValues",
                value: function () {
                    return {
                        scale: p.isLandscape ? this.heroCircleBounds.width / this.maskCircleBounds.width : this.heroCircleBounds.height / this.maskCircleBounds.height,
                        x: this.heroCircleBounds.left - p.width / 2 + this.heroCircleBounds.width / 2,
                        y: this.heroCircleBounds.bottom - p.height / 2 - this.heroCircleBounds.height / 2
                    }
                }
            }, {
                key: "createTl",
                value: function () {
                    var e = this,
                        t = this.setValues(),
                        n = t.scale,
                        i = t.x,
                        o = t.y,
                        r = this.duration.l;
                    this.tl = new TimelineMax({
                        paused: !0,
                        delay: .5,
                        immediateRender: !0,
                        onComplete: function () {
                            e.tl.kill()
                        }
                    }), this.tl.set(".js-overlay", {
                        alpha: 0
                    }).set(this.lottieCurrent.el, {
                        autoAlpha: 1
                    }), p.isPhone ? this.tl.to(".js-mask", .35, {
                        autoAlpha: 0
                    }, 0) : this.tl.set(".js-mask", {
                        x: i,
                        y: o
                    }, 0).to(this.maskCircle, .65, {
                        scale: n,
                        ease: Expo.easeOut
                    }).fromTo(".js-mask__icon", .9, {
                        xPercent: -200,
                        alpha: 0
                    }, {
                        xPercent: 0,
                        alpha: 1,
                        ease: Expo.easeOut
                    }, .25).set(".js-mask", {
                        autoAlpha: 0
                    }).addCallback(function () {
                        p.isScroll = !0
                    }), this.tl.addCallback(function () {
                        e.lottieCurrent.animation.play()
                    }, 0).fromTo(".js-hero__letters", r, {
                        scale: 1.1
                    }, {
                        scale: 1,
                        ease: Expo.easeOut
                    }, 0).fromTo(this.letters.v, r, {
                        xPercent: -25
                    }, {
                        xPercent: 0,
                        ease: Expo.easeOut
                    }, 0).fromTo(this.letters.i, r, {
                        xPercent: 50
                    }, {
                        xPercent: 0,
                        ease: Expo.easeOut
                    }, 0).fromTo(this.letters.l, r, {
                        xPercent: 100
                    }, {
                        xPercent: 0,
                        ease: Expo.easeOut
                    }, 0).fromTo(this.letters.a, r, {
                        xPercent: 45
                    }, {
                        xPercent: 0,
                        ease: Expo.easeOut
                    }, 0).fromTo(this.letters.d, r, {
                        xPercent: 150
                    }, {
                        xPercent: 0,
                        ease: Expo.easeOut
                    }, 0)
                }
            }, {
                key: "on",
                value: function () {
                    var e = this;
                    B(window, "a", "load", function () {
                        e.tl.play()
                    })
                }
            }, {
                key: "init",
                value: function () {
                    this.createTl(), this.on()
                }
            }]), e
        }();

        function Fe(e) {
            return (Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ke(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Xe(e, t) {
            return !t || "object" !== Fe(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Ye(e, t, n) {
            return (Ye = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var i = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Je(e)););
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Je(e) {
            return (Je = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Qe(e, t) {
            return (Qe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ue = function () {
                function t() {
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), Xe(this, Je(t).apply(this, arguments))
                }
                return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Qe(e, t)
                    }(t, Re),
                    function (e, t, n) {
                        t && Ke(e.prototype, t), n && Ke(e, n)
                    }(t, [{
                        key: "onEnter",
                        value: function () {
                            Ye(Je(t.prototype), "onEnter", this).call(this), a.a.initialLoad && (new Ze, We.init(), a.a.initialLoad = !1)
                        }
                    }, {
                        key: "onLeave",
                        value: function () {
                            Ye(Je(t.prototype), "onLeave", this).call(this), p.scrollCurrent = se.state.target
                        }
                    }, {
                        key: "onEnterCompleted",
                        value: function () {
                            var e = this;
                            Ye(Je(t.prototype), "onEnterCompleted", this).call(this), p.scrollCurrent && !window.location.hash ? se.state.target = p.scrollCurrent : window.location.hash && (p.scrollCurrent = null, this.target = document.querySelector(window.location.hash), setTimeout(function () {
                                se.scrollTo(e.target.offsetTop)
                            }, 100)), this.setHeroHeight()
                        }
                    }, {
                        key: "onLeaveCompleted",
                        value: function () {
                            Ye(Je(t.prototype), "onLeaveCompleted", this).call(this), We.destroy()
                        }
                    }, {
                        key: "setHeroHeight",
                        value: function () {
                            if (p.isPhone) {
                                var e = p.height - document.querySelector(".js-site-header").offsetHeight;
                                document.querySelector(".js-hero").style.height = "".concat(e, "px")
                            }
                        }
                    }]), t
            }(),
            $e = n(88);

        function et(e) {
            return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function tt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function nt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function it(e, t, n) {
            return (it = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var i = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ot(e)););
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function ot(e) {
            return (ot = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function rt(e, t) {
            return (rt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var st, at = null,
            lt = function () {
                function r() {
                    var e, t;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return function (e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(nt(t = function (e, t) {
                        return !t || "object" !== et(t) && "function" != typeof t ? nt(e) : t
                    }(this, (e = ot(r)).call.apply(e, [this].concat(i)))), "goBack", function () {
                        window.history.back()
                    }), t
                }
                return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && rt(e, t)
                    }(r, Re),
                    function (e, t, n) {
                        t && tt(e.prototype, t), n && tt(e, n)
                    }(r, [{
                        key: "onEnter",
                        value: function () {
                            it(ot(r.prototype), "onEnter", this).call(this), p.isCase = !0, a.a.initialLoad && (document.querySelector(".js-mask").remove(), $e.a.to(".js-overlay", .5, {
                                autoAlpha: 0,
                                ease: C.c.easeNone
                            }), a.a.initialLoad = !1)
                        }
                    }, {
                        key: "onLeave",
                        value: function () {
                            it(ot(r.prototype), "onLeave", this).call(this), p.isCase = !1
                        }
                    }, {
                        key: "onEnterCompleted",
                        value: function () {
                            it(ot(r.prototype), "onEnterCompleted", this).call(this), at = this.el.querySelector(".js-back"), B(at, "a", "click", this.goBack)
                        }
                    }, {
                        key: "onLeaveCompleted",
                        value: function () {
                            it(ot(r.prototype), "onLeaveCompleted", this).call(this), B(at, "r", "click", this.goBack), at = null
                        }
                    }]), r
            }();

        function ct(e) {
            return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ut(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ht(e, t) {
            return !t || "object" !== ct(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function ft(e) {
            return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function pt(e, t) {
            return (pt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var dt = function () {
            function e() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), ht(this, ft(e).apply(this, arguments))
            }
            return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && pt(e, t)
                }(e, a.a.Transition),
                function (e, t, n) {
                    t && ut(e.prototype, t), n && ut(e, n)
                }(e, [{
                    key: "in",
                    value: function (e) {
                        var t = e.from,
                            n = e.to,
                            i = e.done;
                        p.isProgressbar = !1;
                        var o = n.querySelector(".js-current-project__title");
                        if (st && st.kill(), (st = new TimelineLite({
                                paused: !0,
                                onComplete: function () {
                                    p.isTransitioning = !1
                                }
                            })).to(".js-overlay", .5, {
                                autoAlpha: 0,
                                ease: u.a.easeNone
                            }).set(".js-progressbar", {
                                clearProps: "scaleX"
                            }).to(".js-progressbar", .5, {
                                alpha: 1,
                                ease: u.a.easeNone
                            }, 0), o)
                            if (st.from(".js-current-project", 1.5, {
                                    y: 60,
                                    alpha: 0,
                                    ease: Expo.easeOut
                                }, .45), p.isLandscape) st.staggerFrom([".js-transition-media-wrap", ".js-transition-media"], 1, {
                                cycle: {
                                    yPercent: [-100, 100]
                                },
                                ease: Power3.easeInOut
                            }, 0, .35);
                            else {
                                var r = n.querySelectorAll(".js-case-columns__item");
                                st.staggerFrom([r[0], r[1]], 1.5, {
                                    y: 100,
                                    alpha: 0,
                                    ease: Expo.easeOut
                                }, .1, .35)
                            } if ("home" === n.dataset.routerView) {
                            var s = {
                                v: n.querySelector(".js-hero__letter--v"),
                                i: n.querySelector(".js-hero__letter--i"),
                                l: n.querySelector(".js-hero__letter--l"),
                                a: n.querySelector(".js-hero__letter--a"),
                                d: n.querySelector(".js-hero__letter--d")
                            };
                            st.fromTo(".js-hero__letters", 3, {
                                scale: 1.1
                            }, {
                                scale: 1,
                                ease: Expo.easeOut
                            }, 0).fromTo(s.v, 3, {
                                xPercent: -25
                            }, {
                                xPercent: 0,
                                ease: Expo.easeOut
                            }, 0).fromTo(s.i, 3, {
                                xPercent: 50
                            }, {
                                xPercent: 0,
                                ease: Expo.easeOut
                            }, 0).fromTo(s.l, 3, {
                                xPercent: 100
                            }, {
                                xPercent: 0,
                                ease: Expo.easeOut
                            }, 0).fromTo(s.a, 3, {
                                xPercent: 45
                            }, {
                                xPercent: 0,
                                ease: Expo.easeOut
                            }, 0).fromTo(s.d, 3, {
                                xPercent: 150
                            }, {
                                xPercent: 0,
                                ease: Expo.easeOut
                            }, 0), Be.init(), We.init();
                            var a = Be.arr[We.state.current];
                            u.c.set(a.el, {
                                autoAlpha: 1
                            }), a.animation.addEventListener("DOMLoaded", function () {
                                st.play(), a.animation.play()
                            })
                        } else st.play();
                        t.remove(), i()
                    }
                }, {
                    key: "out",
                    value: function (e) {
                        var t = e.done;
                        p.isTransitioning = !0, p.isProgressbar = !0, X.flags.isOpen && X.close(), st && st.kill(), (st = new u.b({
                            onComplete: function () {
                                p.currentUrl = location.href, t()
                            }
                        })).to(".js-progressbar", .75, {
                            scaleX: 1,
                            ease: Expo.easeInOut
                        }).to(".js-overlay", .5, {
                            autoAlpha: 1,
                            ease: u.a.easeNone
                        }).to(".js-progressbar", .35, {
                            alpha: 0,
                            ease: u.a.easeNone
                        })
                    }
                }]), e
        }();
        var yt, vt = function (e) {
            return window.getComputedStyle(e).getPropertyValue("--padding-top")
        };

        function mt(e) {
            return (mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function gt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function bt(e, t) {
            return !t || "object" !== mt(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function wt(e) {
            return (wt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _t(e, t) {
            return (_t = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var St = function () {
            function e() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), bt(this, wt(e).apply(this, arguments))
            }
            return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _t(e, t)
                }(e, a.a.Transition),
                function (e, t, n) {
                    t && gt(e.prototype, t), n && gt(e, n)
                }(e, [{
                    key: "in",
                    value: function (e) {
                        var t = e.from,
                            n = e.to,
                            i = e.done;
                        if (p.isScroll = !0, t.remove(), i(), yt && yt.kill(), (yt = new TimelineLite({
                                paused: !0,
                                onComplete: function () {
                                    p.isTransitioning = !1, u.c.set(".js-next-project", {
                                        clearProps: "all"
                                    })
                                }
                            })).set(".js-progressbar", {
                                scaleX: 0,
                                alpha: 1
                            }).from(".js-toggle-menu__label--open", 1, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, 0), p.isLandscape) yt.from(".js-transition-img", 1.5, {
                            y: 200,
                            alpha: 0,
                            ease: Expo.easeOut
                        }, 0);
                        else {
                            var o = n.querySelectorAll(".js-case-columns__item");
                            yt.staggerFrom([o[0], o[1]], 1.5, {
                                y: 100,
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .1, 0)
                        }
                        yt.from(".js-next-project", 1.5, {
                            y: 200,
                            alpha: 0,
                            ease: Expo.easeOut
                        }, 0).from(".js-case-link", 1, {
                            alpha: 0,
                            y: 60,
                            ease: Expo.easeOut
                        }, 0), yt.play()
                    }
                }, {
                    key: "out",
                    value: function (e) {
                        var t = e.done;
                        p.isTransitioning = !0, p.isProgressbar = !0, p.isScroll = !1;
                        var n = document.querySelector(".js-next-title"),
                            i = n.getBoundingClientRect().top,
                            o = document.querySelector(".js-last-column"),
                            r = -i + parseInt(vt(n));
                        yt && yt.kill(), (yt = new u.b({
                            onComplete: t
                        })).to(".js-progressbar", .25, {
                            scaleX: 1,
                            ease: Expo.easeInOut
                        }).to(".js-progressbar", .5, {
                            alpha: 0,
                            ease: C.c.easeNone
                        }).addCallback(function () {
                            p.isProgressbar = !1
                        }).staggerTo(".js-next-project__item", 1.25, {
                            y: r,
                            ease: Expo.easeInOut,
                            stagger: {
                                from: "right",
                                amount: .1
                            }
                        }, 0).to(".js-single-intro__next", 1.25, {
                            yPercent: 100,
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, 0).to(".js-single-intro__link", 1.25, {
                            yPercent: 0,
                            alpha: 1,
                            ease: Expo.easeInOut
                        }, 0).to(".c-single-title__sub", 1, {
                            alpha: 0,
                            ease: Expo.easeOut
                        }, .25), o && yt.to(o, .35, {
                            alpha: 0,
                            ease: C.c.easeNone
                        }, 0)
                    }
                }]), e
        }();
        a.a.initialLoad = !0;
        var xt = new a.a.Core({
                renderers: {
                    home: Ue,
                    case: lt,
                    default: Re
                },
                transitions: {
                    default: dt,
                    contextual: {
                        case: St
                    }
                }
            }),
            Ot = n(139);

        function jt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Et(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var kt = function () {
            function c(e) {
                var o = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, c), Et(this, "changeSlide", function (e) {
                    if (!o._state.isAnimating) {
                        var t = o._state,
                            n = t.next,
                            i = t.total;
                        o._state.direction = e, o._state.current = n, "previous" === o._state.direction ? o._state.next = n === i ? 0 : n + 1 : "next" === o._state.direction ? o._state.next = 0 === n ? i : n - 1 : o._state.next = o._state.direction, o._bullets && (o._bullets[o._state.current].classList.remove("is-active"), o._bullets[o._state.next].classList.add("is-active")), o._pagination && (u.c.to(o._pagination[o._state.current], .35, {
                            y: -10,
                            alpha: 0,
                            ease: Power1.easeOut
                        }), u.c.fromTo(o._pagination[o._state.next], 1.1, {
                            y: 15,
                            alpha: 0
                        }, {
                            y: 0,
                            alpha: 1,
                            ease: Expo.easeOut,
                            delay: .5
                        })), o.animate()
                    }
                }), Et(this, "onLeave", function (e) {
                    var t = o._navigation;
                    t.previous, t.next;
                    e && u.c.to(e, 1, {
                        scale: 1,
                        ease: Elastic.easeOut
                    })
                }), Et(this, "onEnter", function (e) {
                    var t = o._navigation;
                    t.previous, t.next;
                    e && u.c.to(e, 1, {
                        scale: 1.1,
                        ease: Elastic.easeOut
                    })
                }), Et(this, "onResize", function () {});
                var t = e.el,
                    n = e.slides,
                    i = void 0 === n ? ".js-slide" : n,
                    r = e.navigation,
                    s = e.slideviews,
                    a = e.bullets,
                    l = e.pagination;
                t && (this._el = "string" == typeof t ? document.querySelector("".concat(t)) : t, this._slides = "string" == typeof i ? this._el.querySelectorAll("".concat(i)) : i, this._state = {
                    total: this._slides.length - 1,
                    ease: 1,
                    slidesPerView: s || 1,
                    current: 0,
                    next: 0,
                    threshold: 100,
                    slideWidth: 0,
                    sliderWidth: 0,
                    createEl: document.createElement("div"),
                    direction: null,
                    isAnimating: !1
                }, this._navigation = {
                    previous: r ? this._el.querySelector(".js-slider-nav__btn--previous") : null,
                    next: r ? this._el.querySelector(".js-slider-nav__btn--next") : null
                }, this._bullets = a ? this._el.querySelectorAll(".js-bullet") : null, this._pagination = l ? this._el.querySelectorAll(".js-pagination__item") : null, this._paginationTotals = this._el.querySelectorAll(".js-pagination__total"), this._paginationTotals && this._paginationTotals.forEach(function (e) {
                    e.textContent = o._state.total + 1
                }), this._tl = null, this._cache = null, this.init())
            }
            return function (e, t, n) {
                t && jt(e.prototype, t), n && jt(e, n)
            }(c, [{
                key: "getCache",
                value: function () {
                    var i = this;
                    this._cache = [], this._slides.forEach(function (e) {
                        var t = e.getBoundingClientRect(),
                            n = {
                                el: e,
                                bounds: {
                                    left: t.left,
                                    right: t.right
                                },
                                out: !0
                            };
                        i._cache.push(n)
                    })
                }
            }, {
                key: "animate",
                value: function () {
                    this._tl && this._tl.kill()
                }
            }, {
                key: "addListeners",
                value: function () {
                    var e = this;
                    if (J.on(te.RESIZE, this.onResize), this._navigation) {
                        var t = this._navigation,
                            n = t.previous,
                            i = t.next;
                        n && (n.addEventListener("click", function () {
                            return e.changeSlide("previous")
                        }), n.addEventListener("mouseenter", function () {
                            return e.onEnter(n)
                        }), n.addEventListener("mouseleave", function () {
                            return e.onLeave(n)
                        })), i && (i.addEventListener("click", function () {
                            return e.changeSlide("next")
                        }), i.addEventListener("mouseenter", function () {
                            return e.onEnter(i)
                        }), i.addEventListener("mouseleave", function () {
                            return e.onLeave(i)
                        }))
                    }
                }
            }, {
                key: "removeListeners",
                value: function () {
                    J.off(te.RESIZE, this.onResize)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.removeListeners(), this._el = null, this._slides = null, this._navigation = null, this._pagination = null, this._bullets = null, this._state = null
                }
            }, {
                key: "init",
                value: function () {
                    this.getCache(), this.addListeners()
                }
            }]), c
        }();

        function Ct(e) {
            return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Tt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Pt(e, t) {
            return !t || "object" !== Ct(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Lt(e, t, n) {
            return (Lt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var i = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = At(e)););
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function At(e) {
            return (At = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Rt(e, t) {
            return (Rt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        Ot.a;
        var qt = function () {
            function n(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (t = Pt(this, At(n).call(this, e)))._length = t._cache.length, t._sliderWidth = 100 * t._state.total, t.setSliderPos(), t
            }
            return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Rt(e, t)
                }(n, kt),
                function (e, t, n) {
                    t && Tt(e.prototype, t), n && Tt(e, n)
                }(n, [{
                    key: "setSliderPos",
                    value: function () {
                        for (var e = 0; e < this._cache.length; e++) TweenLite.set(this._cache[e].el, {
                            xPercent: 100 * e
                        })
                    }
                }, {
                    key: "animate",
                    value: function () {
                        Lt(At(n.prototype), "animate", this).call(this), "next" === this._state.direction ? this.animateSlides("+") : this.animateSlides("-")
                    }
                }, {
                    key: "animateSlides",
                    value: function (e) {
                        var t = this;
                        this._state.isAnimating = !0;
                        for (var n = 0; n < this._length; n++) {
                            var i = this._cache[n],
                                o = i.el;
                            i.bounds;
                            if (TweenMax.isTweening(o)) return;
                            TweenMax.to(o, this._state.ease, {
                                xPercent: "".concat(e, "=100"),
                                ease: Expo.easeInOut,
                                modifiers: {
                                    xPercent: function (e) {
                                        return y(e, -100, t._sliderWidth)
                                    }
                                },
                                onComplete: function () {
                                    t._state.isAnimating = !1
                                }
                            })
                        }
                    }
                }]), n
        }();

        function It(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Nt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.p;
        location.hash = "", new(function () {
            function t() {
                var e = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Nt(this, "setup", function () {
                    r.a.addClasses(p.body), B(window, "a", "load", e.onLoad)
                }), Nt(this, "onLoad", function () {
                    se.setMaxHeight()
                }), this.setup(), this.init()
            }
            return function (e, t, n) {
                t && It(e.prototype, t), n && It(e, n)
            }(t, [{
                key: "init",
                value: function () {
                    this.initH(), X.init(), new qt({
                        el: document.querySelector(".js-menu-slider"),
                        bullets: document.querySelectorAll(".js-bullet"),
                        slideviews: 2,
                        navigation: {
                            previous: document.querySelector(".js-slider-nav__btn--previous"),
                            next: document.querySelector(".js-slider-nav__btn--next")
                        }
                    })
                }
            }, {
                key: "initH",
                value: function () {
                    xt.on("NAVIGATE_IN", function (e) {
                        e.to;
                        window.scrollTo(0, 0);
                        for (var t = document.querySelectorAll(".c-menu-link"), n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.classList.remove("is-active"), i.href === location.href && i.classList.add("is-active")
                        }
                    }), xt.on("NAVIGATE_OUT", function () {
                        document.querySelector(".c-menu.is-active") && X.close()
                    }), xt.on("NAVIGATE_END", function (e) {
                        var t = e.to;
                        Object(i.a)({
                            el: t.view
                        })
                    })
                }
            }]), t
        }())
    },
    94: function (e, t, n) {
        e.exports = n(138)
    },
    95: function (e, t, n) {}
});