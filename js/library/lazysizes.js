!(function (t, e) {
    var i = (function (t, e) {
        "use strict";
        if (!e.getElementsByClassName) return;
        var i,
            n,
            a = e.documentElement,
            r = t.Date,
            s = t.HTMLPictureElement,
            o = t.addEventListener,
            l = t.setTimeout,
            d = t.requestAnimationFrame || l,
            u = t.requestIdleCallback,
            c = /^picture$/i,
            f = ["load", "error", "lazyincluded", "_lazyloaded"],
            g = {},
            m = Array.prototype.forEach,
            v = function (t, e) {
                return g[e] || (g[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), g[e].test(t.getAttribute("class") || "") && g[e];
            },
            y = function (t, e) {
                v(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e);
            },
            z = function (t, e) {
                var i;
                (i = v(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(i, " "));
            },
            b = function (t, e, i) {
                var n = i ? "addEventListener" : "removeEventListener";
                i && b(t, e),
                    f.forEach(function (i) {
                        t[n](i, e);
                    });
            },
            h = function (t, n, a, r, s) {
                var o = e.createEvent("Event");
                return a || (a = {}), (a.instance = i), o.initEvent(n, !r, !s), (o.detail = a), t.dispatchEvent(o), o;
            },
            A = function (e, i) {
                var a;
                !s && (a = t.picturefill || n.pf) ? (i && i.src && !e.getAttribute("srcset") && e.setAttribute("srcset", i.src), a({ reevaluate: !0, elements: [e] })) : i && i.src && (e.src = i.src);
            },
            p = function (t, e) {
                return (getComputedStyle(t, null) || {})[e];
            },
            C = function (t, e, i) {
                for (i = i || t.offsetWidth; i < n.minSize && e && !t._lazysizesWidth; ) (i = e.offsetWidth), (e = e.parentNode);
                return i;
            },
            E =
                ((L = []),
                (W = []),
                (x = L),
                (T = function () {
                    var t = x;
                    for (x = L.length ? W : L, N = !0, _ = !1; t.length; ) t.shift()();
                    N = !1;
                }),
                (k = function (t, i) {
                    N && !i ? t.apply(this, arguments) : (x.push(t), _ || ((_ = !0), (e.hidden ? l : d)(T)));
                }),
                (k._lsFlush = T),
                k),
            w = function (t, e) {
                return e
                    ? function () {
                          E(t);
                      }
                    : function () {
                          var e = this,
                              i = arguments;
                          E(function () {
                              t.apply(e, i);
                          });
                      };
            },
            M = function (t) {
                var e,
                    i,
                    n = function () {
                        (e = null), t();
                    },
                    a = function () {
                        var t = r.now() - i;
                        t < 99 ? l(a, 99 - t) : (u || n)(n);
                    };
                return function () {
                    (i = r.now()), e || (e = l(a, 99));
                };
            };
        var N, _, L, W, x, T, k;
        !(function () {
            var e,
                i = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-orig-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125,
                };
            for (e in ((n = t.lazySizesConfig || t.lazysizesConfig || {}), i)) e in n || (n[e] = i[e]);
            (t.lazySizesConfig = n),
                l(function () {
                    n.init && S();
                });
        })();
        var B = (function () {
                var s,
                    d,
                    f,
                    g,
                    C,
                    N,
                    _,
                    L,
                    W,
                    x,
                    T,
                    k,
                    B,
                    S,
                    R,
                    D,
                    H,
                    I,
                    O,
                    P,
                    $,
                    q = /^img$/i,
                    j = /^iframe$/i,
                    G = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent),
                    J = 0,
                    K = 0,
                    Q = -1,
                    U = function (t) {
                        K--, t && t.target && b(t.target, U), (!t || K < 0 || !t.target) && (K = 0);
                    },
                    V = function (t, i) {
                        var n,
                            r = t,
                            s = "hidden" == p(e.body, "visibility") || ("hidden" != p(t.parentNode, "visibility") && "hidden" != p(t, "visibility"));
                        for (L -= i, T += i, W -= i, x += i; s && (r = r.offsetParent) && r != e.body && r != a; )
                            (s = (p(r, "opacity") || 1) > 0) && "visible" != p(r, "overflow") && ((n = r.getBoundingClientRect()), (s = x > n.left && W < n.right && T > n.top - 1 && L < n.bottom + 1));
                        return s;
                    },
                    X = function () {
                        var t,
                            r,
                            o,
                            l,
                            u,
                            c,
                            f,
                            m,
                            v,
                            y = i.elements;
                        if ((g = n.loadMode) && K < 8 && (t = y.length)) {
                            (r = 0),
                                Q++,
                                null == B && ("expand" in n || (n.expand = a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370), (k = n.expand), (B = k * n.expFactor)),
                                J < B && K < 1 && Q > 2 && g > 2 && !e.hidden ? ((J = B), (Q = 0)) : (J = g > 1 && Q > 1 && K < 6 ? k : 0);
                            for (; r < t; r++)
                                if (y[r] && !y[r]._lazyRace)
                                    if (G)
                                        if (
                                            (((m = y[r].getAttribute("data-expand")) && (c = 1 * m)) || (c = J),
                                            v !== c && ((N = innerWidth + c * S), (_ = innerHeight + c), (f = -1 * c), (v = c)),
                                            (o = y[r].getBoundingClientRect()),
                                            (T = o.bottom) >= f &&
                                                (L = o.top) <= _ &&
                                                (x = o.right) >= f * S &&
                                                (W = o.left) <= N &&
                                                (T || x || W || L) &&
                                                (n.loadHidden || "hidden" != p(y[r], "visibility")) &&
                                                ((d && K < 3 && !m && (g < 3 || Q < 4)) || V(y[r], c)))
                                        ) {
                                            if ((at(y[r]), (u = !0), K > 9)) break;
                                        } else !u && d && !l && K < 4 && Q < 4 && g > 2 && (s[0] || n.preloadAfterLoad) && (s[0] || (!m && (T || x || W || L || "auto" != y[r].getAttribute(n.sizesAttr)))) && (l = s[0] || y[r]);
                                    else at(y[r]);
                            l && !u && at(l);
                        }
                    },
                    Y =
                        ((R = X),
                        (H = 0),
                        (I = n.throttleDelay),
                        (O = n.ricTimeout),
                        (P = function () {
                            (D = !1), (H = r.now()), R();
                        }),
                        ($ =
                            u && O > 49
                                ? function () {
                                      u(P, { timeout: O }), O !== n.ricTimeout && (O = n.ricTimeout);
                                  }
                                : w(function () {
                                      l(P);
                                  }, !0)),
                        function (t) {
                            var e;
                            (t = !0 === t) && (O = 33), D || ((D = !0), (e = I - (r.now() - H)) < 0 && (e = 0), t || e < 9 ? $() : l($, e));
                        }),
                    Z = function (t) {
                        y(t.target, n.loadedClass), z(t.target, n.loadingClass), b(t.target, et), h(t.target, "lazyloaded");
                    },
                    tt = w(Z),
                    et = function (t) {
                        tt({ target: t.target });
                    },
                    it = function (t) {
                        var e,
                            i = t.getAttribute(n.srcsetAttr);
                        (e = n.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i);
                    },
                    nt = w(function (t, e, i, a, r) {
                        var s, o, d, u, g, v;
                        (g = h(t, "lazybeforeunveil", e)).defaultPrevented ||
                            (a && (i ? y(t, n.autosizesClass) : t.setAttribute("sizes", a)),
                            (o = t.getAttribute(n.srcsetAttr)),
                            (s = t.getAttribute(n.srcAttr)),
                            r && ((d = t.parentNode), (u = d && c.test(d.nodeName || ""))),
                            (v = e.firesLoad || ("src" in t && (o || s || u))),
                            (g = { target: t }),
                            v && (b(t, U, !0), clearTimeout(f), (f = l(U, 2500)), y(t, n.loadingClass), b(t, et, !0)),
                            u && m.call(d.getElementsByTagName("source"), it),
                            o
                                ? t.setAttribute("srcset", o)
                                : s &&
                                  !u &&
                                  (j.test(t.nodeName)
                                      ? (function (t, e) {
                                            try {
                                                t.contentWindow.location.replace(e);
                                            } catch (i) {
                                                t.src = e;
                                            }
                                        })(t, s)
                                      : (t.src = s)),
                            r && (o || u) && A(t, { src: s })),
                            t._lazyRace && delete t._lazyRace,
                            z(t, n.lazyClass),
                            E(function () {
                                (!v || (t.complete && t.naturalWidth > 1)) && (v ? U(g) : K--, Z(g));
                            }, !0);
                    }),
                    at = function (t) {
                        var e,
                            i = q.test(t.nodeName),
                            a = i && (t.getAttribute(n.sizesAttr) || t.getAttribute("sizes")),
                            r = "auto" == a;
                        ((!r && d) || !i || (!t.getAttribute("src") && !t.srcset) || t.complete || v(t, n.errorClass) || !v(t, n.lazyClass)) &&
                            ((e = h(t, "lazyunveilread").detail), r && F.updateElem(t, !0, t.offsetWidth), (t._lazyRace = !0), K++, nt(t, e, r, a, i));
                    },
                    rt = function () {
                        if (!d)
                            if (r.now() - C < 999) l(rt, 999);
                            else {
                                var t = M(function () {
                                    (n.loadMode = 3), Y();
                                });
                                (d = !0),
                                    (n.loadMode = 3),
                                    Y(),
                                    o(
                                        "scroll",
                                        function () {
                                            3 == n.loadMode && (n.loadMode = 2), t();
                                        },
                                        !0
                                    );
                            }
                    };
                return {
                    _: function () {
                        (C = r.now()),
                            (i.elements = e.getElementsByClassName(n.lazyClass)),
                            (s = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass)),
                            (S = n.hFac),
                            o("scroll", Y, !0),
                            o("resize", Y, !0),
                            t.MutationObserver
                                ? new MutationObserver(Y).observe(a, { childList: !0, subtree: !0, attributes: !0 })
                                : (a.addEventListener("DOMNodeInserted", Y, !0), a.addEventListener("DOMAttrModified", Y, !0), setInterval(Y, 999)),
                            o("hashchange", Y, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (t) {
                                e.addEventListener(t, Y, !0);
                            }),
                            /d$|^c/.test(e.readyState) ? rt() : (o("load", rt), e.addEventListener("DOMContentLoaded", Y), l(rt, 2e4)),
                            i.elements.length ? (X(), E._lsFlush()) : Y();
                    },
                    checkElems: Y,
                    unveil: at,
                };
            })(),
            F =
                ((D = w(function (t, e, i, n) {
                    var a, r, s;
                    if (((t._lazysizesWidth = n), (n += "px"), t.setAttribute("sizes", n), c.test(e.nodeName || ""))) for (a = e.getElementsByTagName("source"), r = 0, s = a.length; r < s; r++) a[r].setAttribute("sizes", n);
                    i.detail.dataAttr || A(t, i.detail);
                })),
                (H = function (t, e, i) {
                    var n,
                        a = t.parentNode;
                    a && ((i = C(t, a, i)), (n = h(t, "lazybeforesizes", { width: i, dataAttr: !!e })).defaultPrevented || ((i = n.detail.width) && i !== t._lazysizesWidth && D(t, a, n, i)));
                }),
                (I = M(function () {
                    var t,
                        e = R.length;
                    if (e) for (t = 0; t < e; t++) H(R[t]);
                })),
                {
                    _: function () {
                        (R = e.getElementsByClassName(n.autosizesClass)), o("resize", I);
                    },
                    checkElems: I,
                    updateElem: H,
                }),
            S = function () {
                S.i || ((S.i = !0), F._(), B._());
            };
        var R, D, H, I;
        return (i = { cfg: n, autoSizer: F, loader: B, init: S, uP: A, aC: y, rC: z, hC: v, fire: h, gW: C, rAF: E });
    })(t, t.document);
    (t.lazySizes = i), "object" == typeof module && module.exports && (module.exports = i);
})(window),
    document.addEventListener("lazybeforeunveil", function (t) {
        var e = t.target.getAttribute("data-bg"),
            i = t.target.getAttribute("data-bg-gradient");
        i && e ? (t.target.style.backgroundImage = i + ",url(" + e + ")") : e && (t.target.style.backgroundImage = "url(" + e + ")");
    });
