"use strict";
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e)
            return _arrayLikeToArray(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(e, t) : void 0
    }
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e)
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e))
        return _arrayLikeToArray(e)
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, a = new Array(t); i < t; i++)
        a[i] = e[i];
    return a
}
if (!window.ActiveXObject && !("ActiveXObject" in window)) {
    var __getClientLogo = function () {
        var e,
            t = JSON.parse(decodeURI(atob("JTVCJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwLy8lMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMC8vJTIyLCUyMiUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUMlNUMlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlMjAvLyUyMiwlMjIlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyNEREREREREREREREREREREREREREREIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwREREREREREREREREREREREREREQlMjAjIyUyMiwlMjIlMjAlMjAlMjBfX19fX19fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fX19fX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwX19fJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCU3QyU1QyU1QyUyMCUyMCUyMF9fJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyMlMjBoaCUyMCUyMCUyMCUyMC8vJTIwJTIwJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAvXyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU3QyU1QyU1QyUyMC9fJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAvLyUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlMjBfXyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUNfX19fJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDX19fXyUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwd3d3dyUyMCUyMCUyMCUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyME1NTU1NTU1NTU1NTU1NTU1NTU1NJTIwIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFJlbGVhc2UlMjAyLjYuMS4lMjBQb3dlcmVkJTIwYnklMjBqaW5rZWxhLWNvcmUlMjAyLjguMy4lMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDLyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1Qy8lMjIsJTIyJTIyJTVEJTVE"))),
            i = ["%c"],
            a = [];
        t.forEach((function (e) {
            var t = e[0],
                a = e[1];
            i.push(t + a)
        })),
            a = a.concat(["color:#00a1d6"]),
            a = [i.join("\n")].concat(a),
            (e = console).log.apply(e, _toConsumableArray(a))
    };
    __getClientLogo()
}
!function (e) {
    function t(t) {
        for (var a, r, l = t[0], s = t[1], c = t[2], u = 0, m = []; u < l.length; u++)
            r = l[u], Object.prototype.hasOwnProperty.call(n, r) && n[r] && m.push(n[r][0]), n[r] = 0;
        for (a in s)
            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (d && d(t); m.length;)
            m.shift()();
        return o.push.apply(o, c || []),
            i()
    }
    function i() {
        for (var e, t = 0; t < o.length; t++) {
            for (var i = o[t], a = !0, l = 1; l < i.length; l++) {
                var s = i[l];
                0 !== n[s] && (a = !1)
            }
            a && (o.splice(t--, 1), e = r(r.s = i[0]))
        }
        return e
    }
    var a = {},
        n = {
            0: 0
        },
        o = [];
    function r(t) {
        if (a[t])
            return a[t].exports;
        var i = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r),
            i.l = !0,
            i.exports
    }
    r.m = e,
        r.c = a,
        r.d = function (e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        },
        r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var a in e)
                    r.d(i, a, function (t) {
                        return e[t]
                    }
                        .bind(null, a));
            return i
        },
        r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                };
            return r.d(t, "a", t),
                t
        },
        r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        r.p = "//s1.hdslb.com/bfs/static/jinkela/rank/";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        s = l.push.bind(l);
    l.push = t,
        l = l.slice();
    for (var c = 0; c < l.length; c++)
        t(l[c]);
    var d = s;
    o.push([165, 1]),
        i()
}
    ({
        165: function (e, t, i) {
            e.exports = i(408)
        },
        367: function (e, t, i) { },
        368: function (e, t, i) { },
        396: function (e, t, i) {
            e.exports = i.p + "asserts/cm_2.png"
        },
        397: function (e, t, i) {
            var a = i(73);
            i.n(a).a
        },
        398: function (e, t, i) {
            var a = i(74);
            i.n(a).a
        },
        399: function (e, t, i) {
            var a = i(75);
            i.n(a).a
        },
        400: function (e, t, i) {
            var a = i(76);
            i.n(a).a
        },
        401: function (e, t, i) {
            var a = i(77);
            i.n(a).a
        },
        402: function (e, t, i) {
            var a = i(78);
            i.n(a).a
        },
        403: function (e, t, i) {
            var a = i(79);
            i.n(a).a
        },
        404: function (e, t, i) {
            var a = i(80);
            i.n(a).a
        },
        405: function (e, t, i) {
            var a = i(81);
            i.n(a).a
        },
        406: function (e, t, i) {
            var a = i(82);
            i.n(a).a
        },
        407: function (e, t, i) {
            e.exports = i(112)
        },
        408: function (e, t, i) {
            i.r(t);
            i(166),
                i(367),
                i(368);
            var a = i(7),
                n = i(114),
                o = i(160),
                r = i.n(o),
                l = i(47),
                s = i(35),
                c = i.n(s),
                u = {
                    API: "//api.bilibili.com",
                    WWW: "//www.bilibili.com",
                    SEARCH: "//s.search.bilibili.com",
                    INTERFACE: "//interface.bilibili.com",
                    SAPI: "//api.bilibili.co",
                    MANGA: "//manga.bilibili.com"
                },
                m = i(161),
                w = i.n(m),
                p = i(162),
                y = i.n(p),
                f = i(115),
                h = i.n(f),
                v = function (e) {
                    return e.jsonp ? T(e).catch((function () {
                        if (e.fallbackUrl)
                            return e.url = e.fallbackUrl, T(e)
                    })) : M(e).catch((function () {
                        if (e.fallbackUrl)
                            return e.url = e.fallbackUrl, M(e)
                    }))
                };
            function T(e) {
                return e.query.jsonp = "jsonp",
                    e.param = e.params || e.param || e.data,
                    new Promise((function (t, i) {
                        e.url = e.query ? e.url + "?" + h.a.stringify(e.query) : "",
                            e.url.indexOf("http") < 0 && (e.url = window.location.protocol + e.url);
                        var a = {
                            timeout: e.timeout,
                            prefix: e.jsonCallback
                        };
                        y()(e.url, a, (function (e, a) {
                            if (e)
                                return i(e);
                            var n = {
                                code: a.code,
                                data: a
                            };
                            t(n)
                        }))
                    }))
            }
            function M(e) {
                return e.contentType && (e.headers = e.headers || {}, e.headers["Content-Type"] = e.contentType),
                    e.url = e.query ? e.url + "?" + h.a.stringify(e.query) : e.url,
                    w()(e)
            }
            var b = [{
                name: "全站",
                tid: 0
            }, {
                name: "动画",
                tid: 1
            }, {
                name: "国创相关",
                tid: 168
            }, {
                name: "音乐",
                tid: 3
            }, {
                name: "舞蹈",
                tid: 129
            }, {
                name: "游戏",
                tid: 4
            }, {
                name: "知识",
                tid: 36
            }, {
                name: "科技",
                tid: 188
            }, {
                name: "生活",
                tid: 160
            }, {
                name: "美食",
                tid: 211
            }, {
                name: "鬼畜",
                tid: 119
            }, {
                name: "时尚",
                tid: 155
            }, {
                name: "娱乐",
                tid: 5
            }, {
                name: "影视",
                tid: 181
            }
            ],
                U = [{
                    name: "日排行",
                    value: 1
                }, {
                    name: "三日排行",
                    value: 3
                }, {
                    name: "周排行",
                    value: 7
                }, {
                    name: "月排行",
                    value: 30
                }
                ],
                g = b.slice(0);
            g.splice(2, 1);
            var I = {
                all: {
                    channels: b,
                    showTypes: !0,
                    times: U,
                    type: 1
                },
                origin: {
                    channels: b,
                    showTypes: !0,
                    times: U,
                    type: 2
                },
                bangumi: {
                    channels: [{
                        name: "番剧",
                        tid: 13,
                        season_type: 1
                    }, {
                        name: "国产动画",
                        tid: 167,
                        season_type: 4
                    }
                    ],
                    showTypes: !1,
                    times: [{
                        name: "三日排行",
                        value: 3
                    }, {
                        name: "周排行",
                        value: 7
                    }
                    ]
                },
                cinema: {
                    channels: [{
                        name: "纪录片",
                        tid: 177,
                        season_type: 3
                    }, {
                        name: "电影",
                        tid: 23,
                        season_type: 2
                    }, {
                        name: "电视剧",
                        tid: 11,
                        season_type: 5
                    }
                    ],
                    showTypes: !1,
                    times: [{
                        name: "三日排行",
                        value: 3
                    }, {
                        name: "周排行",
                        value: 7
                    }
                    ]
                },
                rookie: {
                    channels: g,
                    showTypes: !1,
                    times: U,
                    type: 3
                }
            };
            function C(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))),
                        i.push.apply(i, a)
                }
                return i
            }
            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(i), !0).forEach((function (t) {
                        c()(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            i(112)("app:vuex.actions");
            var _ = {
                RANK_LIST: function (e) {
                    var t = e.commit,
                        i = e.state,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = i.rankRouteParams,
                        o = n.rankTab,
                        r = n.rid,
                        l = n.arc_type,
                        s = n.day,
                        c = n.season_type;
                    t("SET_RANK_CHANNELS", I[o].channels),
                        t("SET_RANK_SHOWTYPES", I[o].showTypes),
                        t("SET_RANK_TIMES", I[o].times),
                        t("SET_RANK_TYPE", [{
                            name: "全部投稿",
                            value: 0
                        }, {
                            name: "近期投稿",
                            value: 1
                        }
                        ]),
                        "all" !== o && "origin" !== o || (1 === l && t("SET_RANK_TIMES", [{
                            name: "日排行",
                            value: 1
                        }, {
                            name: "三日排行",
                            value: 3
                        }, {
                            name: "周排行",
                            value: 7
                        }
                        ]), 30 === s && t("SET_RANK_TYPE", [{
                            name: "全部投稿",
                            value: 0
                        }
                        ])),
                        t("SET_RANK_DATA", []),
                        t("SET_RANK_NOTE", " "),
                        t("SET_LOADING", !0);
                    var d = I[o].type;
                    if ("all" === o || "origin" === o || "rookie" === o) {
                        var m = "".concat(u.API, "/x/web-interface/ranking/v2");
                        return v({
                            url: m,
                            query: {
                                rid: r,
                                day: s,
                            },
                            headers: J({}, a.headers),
                            jsonp: !0,
                            encode: !0
                        }).then((function (e) {
                            if (!e.data || 0 !== e.data.code) {
                                var i = new Error("Api Access Error: ".concat(m, " ").concat(JSON.stringify(e.data)));
                                throw i.status = 404,
                                i
                            }
                            e.data.data.list.forEach((function (e, i, l) {
                                l[i] = Object.assign(l[i], {
                                    author: l[i].owner.name,
                                    coins: l[i].stat.coin,
                                    mid: l[i].owner.mid,
                                    play: l[i].stat.view,
                                    pts: l[i].score,
                                    trend: null,
                                    video_review: l[i].stat.danmaku
                                });
                                if (l[i].others) {
                                    l[i].others.forEach(((e, i, l) => {
                                        l[i] = Object.assign(l[i], {
                                            author: l[i].owner.name,
                                            coins: l[i].stat.coin,
                                            mid: l[i].owner.mid,
                                            play: l[i].stat.view,
                                            pts: l[i].score,
                                            trend: null,
                                            video_review: l[i].stat.danmaku
                                        });
                                    }));
                                }
                                e.open = !1
                            })),
                                t("SET_RANK_DATA", e.data.data.list),
                                t("SET_RANK_NOTE", e.data.data.note),
                                t("SET_LOADING", !1)
                        }))
                    }
                    if ("bangumi" === o || "cinema" === o) {
                        var w = "".concat(u.API, "/pgc/web/rank/list?day=").concat(s, "&season_type=").concat(c),
                            p = -1 !== [2, 3, 4, 5].indexOf(c);
                        p && (w = "".concat(u.API, "/pgc/season/rank/web/list?day=").concat(s, "&season_type=").concat(c));
                        var y = p ? "pgc.gateway.season" : "pgc.gateway.web";
                        return v({
                            url: w,
                            headers: J({}, a.headers),
                            sUrl: a.surl && a.surl[y] || ""
                        }).then((function (e) {
                            if (!e.data || 0 !== e.data.code) {
                                var i = new Error("Api Access Error: ".concat(w, " ").concat(JSON.stringify(e.data)));
                                throw i.status = 404,
                                i
                            }
                            var a = p ? "data" : "result";
                            e.data[a].list.forEach((function (e) {
                                e.pic = e.cover,
                                    e.play = e.stat.view,
                                    e.video_review = e.stat.danmaku
                            })),
                                t("SET_RANK_DATA", e.data[a].list),
                                t("SET_RANK_NOTE", e.data[a].note),
                                t("SET_LOADING", !1)
                        }))
                    }
                }
            };
            a.a.use(l.a);
            var j = new l.a.Store({
                state: {
                    rankList: [],
                    rankRouteParams: {
                        rankTab: "all",
                        rid: 0,
                        arc_type: 0,
                        day: 1,
                        season_type: 1
                    },
                    channels: [],
                    showTypes: !0,
                    typeList: [],
                    times: [],
                    note: "",
                    loading: !1
                },
                mutations: {
                    SET_RANK_DATA: function (e, t) {
                        e.rankList = t
                    },
                    SET_RANK_ROUTE: function (e, t) {
                        e.rankRouteParams = t
                    },
                    SET_RANK_CHANNELS: function (e, t) {
                        e.channels = t
                    },
                    SET_RANK_SHOWTYPES: function (e, t) {
                        e.showTypes = t
                    },
                    SET_RANK_TIMES: function (e, t) {
                        e.times = t
                    },
                    SET_RANK_NOTE: function (e, t) {
                        e.note = t
                    },
                    SET_RANK_TYPE: function (e, t) {
                        e.typeList = t
                    },
                    SET_LOADING: function (e, t) {
                        e.loading = t
                    }
                },
                actions: _
            }),
                A = i(116),
                k = i.n(A),
                N = i(163),
                D = i.n(N),
                O = i(164),
                E = i.n(O),
                S = i(52),
                L = i.n(S);
            var R = function (e) {
                var t = "" + document.cookie,
                    i = t.indexOf(e + "=");
                if (-1 === i || "" === e)
                    return "";
                var a = t.indexOf(";", i);
                return -1 === a && (a = t.length),
                    unescape(t.substring(i + e.length + 1, a))
            };
            !window || !window.localStorage || L()(window.localStorage);
            function V(e, t) {
                if (e) {
                    var i = e.getBoundingClientRect(),
                        a = t || 0;
                    return i.top < window.innerHeight + a && i.bottom >= 0
                }
            }
            function Q(e, t, i) {
                var a,
                    n = null;
                return function () {
                    var o = this,
                        r = arguments,
                        l = +new Date;
                    clearTimeout(n),
                        a || (a = l),
                        l - a >= i ? (e.apply(o, r), a = l) : n = setTimeout((function () {
                            e.apply(o, r)
                        }), t)
                }
            }
            function P(e) {
                return e < 10 ? "0" + e : e
            }
            var x = function (e) {
                return e ? e.replace(/^http:/, "") : ""
            },
                B = function () {
                    if ("undefined" == typeof window)
                        return !1;
                    try {
                        return 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                    } catch (e) {
                        return !1
                    }
                }
                    ();
            var X = function () {
                var e = 1;
                return "undefined" == typeof window || (void 0 !== window.screen.systemXDPI && void 0 !== window.screen.logicalXDPI && window.screen.systemXDPI > window.screen.logicalXDPI ? e = window.screen.systemXDPI / window.screen.logicalXDPI : void 0 !== window.devicePixelRatio && (e = window.devicePixelRatio)),
                    e
            },
                H = function () {
                    return window.console && "function" == typeof window.console.log ? function (e, t) {
                        window.console.log("[" + e + "] " + t)
                    }
                        : function () { }
                },
                K = function (e, t) {
                    if (window.spmReportData) {
                        var i = t || e;
                        window.spmReportData[e] = i
                    }
                };
            !function () {
                try {
                    R("bili_jct")
                } catch (e) {
                    return ""
                }
            }
                ();
            var G = function (e) {
                if (!e)
                    return "";
                var t = e.replace(/^(http:\/\/|:\/\/|\/\/|\/)/, "https://");
                return t.match(/^https:\/\//) ? t : "https://" + t
            };
            function z(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))),
                        i.push.apply(i, a)
                }
                return i
            }
            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(i), !0).forEach((function (t) {
                        c()(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : z(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var W = {},
                q = function () {
                    var e = D()(k.a.mark((function e(t, i) {
                        var a,
                            n,
                            o,
                            r,
                            l;
                        return k.a.wrap((function (e) {
                            for (; ;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (a = t.type || "get", n = t.data, o = a + t.url + JSON.stringify(n), r = Math.random().toString().substr(2), !i || !W[o]) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", W[o]);
                                    case 6:
                                        if ("post" !== a.toLowerCase()) {
                                            e.next = 13;
                                            break
                                        }
                                        return "string" != typeof n && (n.csrf = n.csrf || R("bili_jct")),
                                            e.next = 10,
                                            v({
                                                url: t.url,
                                                method: "post",
                                                data: "string" == typeof n ? n : E.a.stringify(n),
                                                withCredentials: !!t.xhrFields && t.xhrFields.withCredentials,
                                                headers: F({
                                                    "content-type": "application/x-www-form-urlencoded"
                                                }, t.headers)
                                            });
                                    case 10:
                                        l = e.sent,
                                            e.next = 16;
                                        break;
                                    case 13:
                                        return e.next = 15,
                                            v(F(F({
                                                url: t.url,
                                                data: n || {},
                                                query: n || {},
                                                fallBackUrl: t.fallBackUrl,
                                                jsonCallback: t.jsonCallback || "jsonCallback_bili_".concat(r)
                                            }, t), {}, {
                                                jsonp: !0
                                            }));
                                    case 15:
                                        l = e.sent;
                                    case 16:
                                        return l || console.log(t.url),
                                            i && (W[o] = l.data),
                                            e.abrupt("return", l.data);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                        }), e)
                    })));
                    return function (t, i) {
                        return e.apply(this, arguments)
                    }
                }
                    (),
                Y = {
                    props: {
                        src: {},
                        width: {},
                        height: {},
                        alt: {},
                        webp: {
                            default:
                                !0
                        },
                        hd: {
                            default:
                                !0
                        }
                    },
                    computed: {
                        ratio: function () {
                            return this.hd ? X() : 1
                        },
                        source: function () {
                            return this.webp ? x(function (e, t, i) {
                                if (!e)
                                    return e;
                                var a = e.match(/(.*\.(jpg|jpeg|gif|png|bmp))(\?.*)?/),
                                    n = -1 !== e.indexOf("/bfs/");
                                if (!a || "gif" === a[2] || "bmp" === a[2] || !n)
                                    return e;
                                var o = t && i ? "@" + t + "w_" + i + "h" : "@",
                                    r = a[3] ? a[3] : "";
                                return B ? a[1] + o + ".webp" + r : a[1] + o + "." + a[2] + r
                            }
                                (this.src, Math.ceil(this.width * this.ratio), Math.ceil(this.height * this.ratio))) : x(this.src)
                        }
                    }
                },
                Z = (i(397), i(11)),
                ee = Object(Z.a)(Y, (function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "lazy-img"
                    }, [t("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: this.source,
                            expression: "source"
                        }
                        ],
                        attrs: {
                            alt: this.alt || "",
                            src: ""
                        }
                    })])
                }), [], !1, null, null, null).exports,
                te = {
                    components: {
                        BiliImg: ee
                    },
                    props: {
                        config: {
                            type: Object
                        },
                        adData: {
                            type: Object
                        }
                    },
                    computed: {
                        source: function () {
                            var e = this.adData && this.adData[this.config.ad.dataLocId];
                            return e || []
                        }
                    },
                    methods: {
                        getStyle: function (e) {
                            return e.url ? {
                                height: "",
                                overflow: "hidden",
                                margin: "0 auto 0"
                            }
                                : {
                                    height: "1px",
                                    overflow: "hidden",
                                    margin: 0
                                }
                        }
                    }
                },
                ie = (i(398), Object(Z.a)(te, (function () {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return e.config.ad.active && 0 != e.source.length ? a("div", {
                        staticClass: "gg-floor-module"
                    }, e._l(e.source, (function (t, n) {
                        return a("div", {
                            key: n,
                            staticClass: "item",
                            style: e.getStyle(t),
                            attrs: {
                                "data-id": t.id,
                                "data-loc-id": e.config.ad.dataLocId
                            }
                        }, [a("a", {
                            directives: [{
                                name: "ad",
                                rawName: "v-ad",
                                value: {
                                    data: t,
                                    id: e.config.ad.dataLocId,
                                    report: !0
                                },
                                expression: "{data: item, id: config.ad.dataLocId, report: true}"
                            }
                            ],
                            attrs: {
                                target: "_blank"
                            }
                        }, [a("bili-img", {
                            attrs: {
                                src: t.pic,
                                alt: t.title,
                                webp: !1,
                                hd: !1
                            }
                        }), t.is_ad ? a("img", {
                            staticClass: "gg-pic",
                            attrs: {
                                src: i(396)
                            }
                        }) : e._e(), e._t("default")], 2)])
                    })), 0) : e._e()
                }), [], !1, null, null, null).exports),
                ae = {
                    data: function () {
                        return {
                            show: !1
                        }
                    },
                    mounted: function () {
                        this.onScroll()
                    },
                    methods: {
                        onScroll: function () {
                            var e = this;
                            $(window).on("scroll.gotop", (function () {
                                var t = $(window).scrollTop();
                                e.show = t > 170
                            }))
                        },
                        goTop: function () {
                            $("body,html").animate({
                                scrollTop: 0
                            }, 300)
                        }
                    }
                },
                ne = (i(399), Object(Z.a)(ae, (function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.show,
                            expression: "show"
                        }
                        ],
                        staticClass: "go-top-m"
                    }, [t("div", {
                        staticClass: "go-top icon",
                        attrs: {
                            title: "返回顶部"
                        },
                        on: {
                            click: this.goTop
                        }
                    })])
                }), [], !1, null, null, null).exports),
                oe = {
                    props: {
                        list: {
                            type: Array
                        },
                        selected: {}
                    },
                    computed: {
                        selectText: function () {
                            var e,
                                t;
                            for (e = 0, t = this.list.length; e < t; ++e)
                                if (this.list[e].value === this.selected)
                                    return this.list[e].name
                        }
                    },
                    methods: {
                        isShowItem: function (e) {
                            return e.value !== this.selected
                        },
                        selectItem: function (e) {
                            this.$emit("selectDropdown", e)
                        }
                    }
                },
                re = (i(400), Object(Z.a)(oe, (function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "bili-dropdown"
                    }, [i("span", {
                        staticClass: "selected",
                        domProps: {
                            textContent: e._s(e.selectText)
                        }
                    }), i("i", {
                        staticClass: "icon icon-arrow-down"
                    }), i("ul", {
                        staticClass: "dropdown-list"
                    }, e._l(e.list, (function (t) {
                        return i("li", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.isShowItem(t),
                                expression: "isShowItem(item)"
                            }
                            ],
                            staticClass: "dropdown-item",
                            domProps: {
                                textContent: e._s(t.name)
                            },
                            on: {
                                click: function (i) {
                                    return e.selectItem(t.value)
                                }
                            }
                        })
                    })), 0)])
                }), [], !1, null, null, null).exports),
                le = {
                    props: {
                        list: {},
                        type: {}
                    },
                    methods: {
                        selectItem: function (e) {
                            this.$emit("rankSwitchTab", e)
                        }
                    }
                },
                se = (i(401), Object(Z.a)(le, (function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "rank-head"
                    }, [i("ul", {
                        staticClass: "rank-menu"
                    }, e._l(e.list, (function (t, a) {
                        return i("li", {
                            directives: [{
                                name: "report",
                                rawName: "v-report:click",
                                value: "tab_click_" + t.type,
                                expression: "`tab_click_${item.type}`",
                                arg: "click"
                            }
                            ],
                            key: a,
                            class: {
                                active: e.type === t.type
                            },
                            attrs: {
                                type: t.type
                            },
                            on: {
                                click: function (i) {
                                    return e.selectItem(t.type)
                                }
                            }
                        }, [i("span", {
                            staticClass: "rank-icon",
                            class: t.type
                        }), i("span", {
                            staticClass: "text"
                        }, [e._v(e._s(t.name))])])
                    })), 0)])
                }), [], !1, null, null, null).exports),
                ce = {
                    props: {
                        list: {
                            type: Array
                        },
                        openShow: {
                            default:
                                !1
                        },
                        isListOpen: {
                            default:
                                !1
                        },
                        itemAid: {},
                        rank: 0
                    },
                    methods: {
                        open: function () {
                            this.$emit("open")
                        }
                    }
                },
                de = (i(402), Object(Z.a)(ce, (function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "other-panel"
                    }, [i("div", {
                        staticClass: "other",
                        class: {
                            open: !0 === e.isListOpen
                        }
                    }, e._l(e.list, (function (t, a) {
                        return i("a", {
                            directives: [{
                                name: "report",
                                rawName: "v-report:click",
                                value: {
                                    name: "video_up_other_click",
                                    ops: {
                                        currentAid: e.itemAid,
                                        currentRank: e.rank,
                                        targetAid: t.aid
                                    }
                                },
                                expression: "{name: 'video_up_other_click', ops: {\n        currentAid: itemAid,\n        currentRank: rank,\n        targetAid: item.aid\n      }}",
                                arg: "click"
                            }
                            ],
                            key: a,
                            staticClass: "other-link",
                            attrs: {
                                target: "_blank",
                                href: "//www.bilibili.com/video/" + t.bvid
                            }
                        }, [i("span", {
                            staticClass: "title"
                        }, [e._v(e._s(t.title))]), i("span", [e._v("综合评分")]), i("strong", [e._v(e._s(t.pts))])])
                    })), 0), i("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.openShow && !e.isListOpen,
                            expression: "openShow && !isListOpen"
                        }, {
                            name: "report",
                            rawName: "v-report:click",
                            value: {
                                name: "show_more_click",
                                ops: e.itemAid
                            },
                            expression: "{name: 'show_more_click', ops: itemAid}",
                            arg: "click"
                        }
                        ],
                        staticClass: "more-data",
                        on: {
                            click: e.open
                        }
                    }, [e._v("显示UP主全部上榜视频"), i("i")])])
                }), [], !1, null, null, null).exports);
            var ue = {
                props: {
                    aid: {}
                },
                data: function () {
                    return {
                        added: !1,
                        timer: null
                    }
                },
                methods: {
                    handleClick: function (e) {
                        e.preventDefault(),
                            e.stopPropagation();
                        try {
                            R("DedeUserID") ? this.added ? (this.removeToList(), K("watch_later_del")) : (this.addToList(), K("watch_later_add")) : this.quickLogin()
                        } catch (e) { }
                    },
                    addToList: function () {
                        var e = this;
                        console.log("addToList"),
                            q({
                                url: u.API + "/x/v2/history/toview/add",
                                type: "POST",
                                data: {
                                    aid: e.aid,
                                    jsonp: "jsonp",
                                    csrf: R("bili_jct")
                                },
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: !0
                                }
                            }).then((function (t) {
                                0 === t.code ? (e.added = !0, e.showHint(e.$el, "已加稍后再看", 1500)) : e.showHint(e.$el, t.message, 1500)
                            })).catch((function (t) {
                                console.log(t),
                                    e.showHint(e.$el, "添加失败，请重试", 1500)
                            }))
                    },
                    removeToList: function () {
                        var e = this;
                        q({
                            url: u.API + "/x/v2/history/toview/del",
                            type: "POST",
                            data: {
                                jsonp: "jsonp",
                                aid: e.aid,
                                csrf: R("bili_jct")
                            },
                            xhrFields: {
                                withCredentials: !0
                            }
                        }).then((function (t) {
                            t && 0 === t.code ? (e.added = !1, e.showHint(e.$el, "已从稍后再看列表中移除", 1500)) : e.showHint(e.$el, d.message, 1500)
                        })).catch((function (t) {
                            e.showHint(e.$el, "移除失败，请重试", 1500)
                        }))
                    },
                    showHint: function (e, t, i) {
                        clearTimeout(this.timer),
                            $("body .watch-later-hint").remove();
                        var a = $('<div class="watch-later-hint">' + t + "</div>");
                        $("body").append(a);
                        var n = $(e).offset().left - (a.outerWidth() - $(e).outerWidth()) / 2,
                            o = $(e).offset().top - $(e).height() - 8;
                        a.css({
                            top: o,
                            left: n
                        }).fadeIn(),
                            i && (this.timer = setTimeout((function () {
                                a.fadeOut()
                            }), i))
                    },
                    hideHint: function () {
                        $("body .watch-later-hint").remove()
                    },
                    over: function () {
                        var e = this.added ? "移除" : "稍后再看";
                        this.showHint(this.$el, e)
                    },
                    out: function () {
                        this.hideHint()
                    },
                    quickLogin: function () {
                        UserStatus.quickLogin()
                    }
                }
            },
                me = (i(403), Object(Z.a)(ue, (function () {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("div", {
                        staticClass: "watch-later-trigger",
                        class: e.added ? "added" : "",
                        on: {
                            click: function (t) {
                                return e.handleClick(t)
                            },
                            mouseover: function (t) {
                                return e.over()
                            },
                            mouseout: function (t) {
                                return e.out()
                            }
                        }
                    })
                }), [], !1, null, null, null).exports),
                we = {
                    props: {
                        list: {
                            type: Array
                        },
                        type: {},
                        width: {},
                        height: {},
                        loading: {
                            default:
                                !1
                        }
                    },
                    components: {
                        RankListOther: de,
                        BiliImg: ee,
                        WatchLater: me
                    },
                    computed: {
                        isPgc: function () {
                            return "bangumi" === this.type || "cinema" === this.type
                        }
                    },
                    methods: {
                        replaceHTTP: G,
                        open: function (e) {
                            e.open = !0
                        },
                        videoUrl: function (e) {
                            return "//www.bilibili.com/video/".concat(e.bvid)
                        },
                        openLink: function (e) {
                            var t = G(e);
                            window.open(t, "_blank")
                        }
                    },
                    watch: {
                        list: function () {
                            var e = this;
                            this.$nextTick((function () {
                                window.reportObserver.scrollTracker && window.reportObserver.scrollTracker.judgeCustom(e.$refs.list, ".rank-item", "video_pv", {
                                    id: function (e) {
                                        return e.dataset.id
                                    },
                                    rank: function (e) {
                                        return e.dataset.rank
                                    }
                                })
                            }))
                        }
                    },
                    mounted: function () {
                        var e = this;
                        setTimeout((function () {
                            window.reportObserver.scrollTracker && window.reportObserver.scrollTracker.customReport(e.$refs.list, ".rank-item", "video_pv", {
                                id: function (e) {
                                    return e.dataset.id
                                },
                                rank: function (e) {
                                    return e.dataset.rank
                                }
                            })
                        }), 1e3)
                    }
                },
                pe = (i(404), Object(Z.a)(we, (function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "rank-list-wrap"
                    }, [i("ul", {
                        ref: "list",
                        staticClass: "rank-list",
                        class: {
                            "pgc-list": e.isPgc
                        }
                    }, e._l(e.list, (function (t, a) {
                        return i("li", {
                            key: a,
                            staticClass: "rank-item",
                            attrs: {
                                "data-id": t.aid || t.season_id,
                                "data-rank": a + 1
                            }
                        }, [i("div", {
                            staticClass: "num"
                        }, [e._v(e._s(a + 1))]), i("div", {
                            staticClass: "content"
                        }, [i("div", {
                            staticClass: "img"
                        }, [i("a", {
                            directives: [{
                                name: "report",
                                rawName: "v-report:click",
                                value: {
                                    name: "video_click",
                                    ops: {
                                        id: t.aid || t.season_id,
                                        rank: a + 1
                                    }
                                },
                                expression: "{name: 'video_click', ops: {\n              id: item.aid || item.season_id,\n              rank: index + 1\n            }}",
                                arg: "click"
                            }
                            ],
                            attrs: {
                                href: e.replaceHTTP(e.isPgc ? t.url : e.videoUrl(t)),
                                target: "_blank"
                            }
                        }, [i("bili-img", {
                            staticClass: "cover",
                            attrs: {
                                src: e.replaceHTTP(t.pic),
                                alt: t.title,
                                width: e.width,
                                height: e.height
                            }
                        })], 1), e.isPgc ? e._e() : i("watch-later", {
                            staticClass: "w-later",
                            attrs: {
                                aid: t.aid
                            }
                        })], 1), i("div", {
                            directives: [{
                                name: "report",
                                rawName: "v-report:click",
                                value: {
                                    name: "video_click",
                                    ops: {
                                        id: t.aid || t.season_id,
                                        rank: a + 1
                                    }
                                },
                                expression: "{name: 'video_click', ops: {\n            id: item.aid || item.season_id,\n            rank: index + 1\n          }}",
                                arg: "click"
                            }
                            ],
                            staticClass: "info",
                            on: {
                                click: function (i) {
                                    e.openLink(e.isPgc ? t.url : e.videoUrl(t))
                                }
                            }
                        }, [i("a", {
                            directives: [{
                                name: "report",
                                rawName: "v-report:click",
                                value: {
                                    name: "video_click",
                                    ops: {
                                        id: t.aid || t.season_id,
                                        rank: a + 1
                                    }
                                },
                                expression: "{name: 'video_click', ops: {\n              id: item.aid || item.season_id,\n              rank: index + 1\n            }}",
                                arg: "click"
                            }
                            ],
                            staticClass: "title",
                            attrs: {
                                href: e.replaceHTTP(e.isPgc ? t.url : e.videoUrl(t)),
                                target: "_blank"
                            },
                            on: {
                                click: function (e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [e._v(e._s(t.title))]), e.isPgc ? i("div", {
                            staticClass: "pgc-info"
                        }, [e._v(e._s(t.new_ep.index_show))]) : e._e(), i("div", {
                            staticClass: "detail"
                        }, [i("span", {
                            staticClass: "data-box"
                        }, [i("i", {
                            staticClass: "b-icon play"
                        }), e._v(e._s(e._f("formatNum")(t.play)))]), i("span", {
                            staticClass: "data-box"
                        }, [i("i", {
                            staticClass: "b-icon view"
                        }), e._v(e._s(e._f("formatNum")(t.video_review)))]), e.isPgc ? i("span", {
                            staticClass: "data-box"
                        }, [i("i", {
                            staticClass: "fav"
                        }), e._v(e._s(e._f("formatNum")(t.stat.follow)))]) : i("a", {
                            attrs: {
                                target: "_blank",
                                href: "//space.bilibili.com/" + t.mid
                            },
                            on: {
                                click: function (e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [i("span", {
                            staticClass: "data-box"
                        }, [i("i", {
                            staticClass: "b-icon author"
                        }), e._v(e._s(t.author))])])]), i("div", {
                            staticClass: "pts"
                        }, [i("div", [e._v(e._s(t.pts))]), e._v("综合得分\n          ")])]), t.others ? i("rank-list-other", {
                            attrs: {
                                list: t.others,
                                itemAid: t.aid,
                                rank: a + 1,
                                openShow: t.others && t.others.length > 1,
                                isListOpen: t.open
                            },
                            on: {
                                open: function (i) {
                                    return e.open(t)
                                }
                            }
                        }) : e._e()], 1)])
                    })), 0), e.loading || 0 !== e.list.length ? e._e() : i("div", {
                        staticClass: "no-data"
                    }, [e._v("\n    没有数据\n  ")]), e.loading ? i("div", {
                        staticClass: "no-data loading"
                    }, [e._v("\n    加载中...\n  ")]) : e._e()])
                }), [], !1, null, null, null).exports),
                ye = {
                    props: {
                        list: {
                            type: Array,
                            default:
                                []
                        },
                        tabtid: {},
                        type: {},
                        rankTimeTab: {
                            default:
                                []
                        },
                        showTypes: {
                            default:
                                !0
                        },
                        rankArcTypeList: {
                            default:
                                []
                        },
                        arcType: {
                            default:
                                0
                        },
                        day: {
                            default:
                                1
                        },
                        season_type: {
                            default:
                                1
                        }
                    },
                    components: {
                        BiliDropdown: re
                    },
                    watch: {
                        rankTimeTab: function (e) {
                            this.durationTime = e[0].value
                        }
                    },
                    methods: {
                        selectItem: function (e, t, i) {
                            K("channel_click", {
                                tab: this.type,
                                channel: i.name
                            }),
                                this.$emit("rankNameTab", {
                                    tid: e,
                                    seasonType: t
                                })
                        },
                        selectArcType: function (e) {
                            this.$emit("selectArcType", e)
                        },
                        selectDay: function (e) {
                            this.$emit("selectDay", e)
                        }
                    }
                },
                fe = (i(405), Object(Z.a)(ye, (function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "rank-tab-wrap"
                    }, [i("ul", {
                        staticClass: "rank-tab"
                    }, e._l(e.list, (function (t) {
                        return i("li", {
                            key: t.tid,
                            class: {
                                active: e.tabtid === t.tid
                            },
                            on: {
                                click: function (i) {
                                    return e.selectItem(t.tid, t.season_type, t)
                                }
                            }
                        }, [e._v(e._s(t.name))])
                    })), 0), i("div", {
                        staticClass: "rank-type-dropdown"
                    }, [e.showTypes ? i("bili-dropdown", {
                        staticClass: "rank-dropdown",
                        attrs: {
                            list: e.rankArcTypeList,
                            selected: e.arcType
                        },
                        on: {
                            selectDropdown: e.selectArcType
                        }
                    }) : e._e(), i("bili-dropdown", {
                        staticClass: "rank-dropdown",
                        attrs: {
                            list: e.rankTimeTab,
                            selected: e.day
                        },
                        on: {
                            selectDropdown: e.selectDay
                        }
                    })], 1)])
                }), [], !1, null, null, null).exports),
                he = function (e, t) {
                    window.spmReportData && (window.spmReportData[e] = void 0 === t ? e : t),
                        window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit()
                };
            function ve(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))),
                        i.push.apply(i, a)
                }
                return i
            }
            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(i), !0).forEach((function (t) {
                        c()(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ve(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var Me = {
                components: {
                    BiliDropdown: re,
                    RankList: pe,
                    RankHead: se,
                    RankTabWrap: fe,
                    GoTop: ne,
                    AdFloor: ie
                },
                computed: Te(Te({}, Object(l.d)(["rankList", "rankRouteParams", "channels", "showTypes", "times", "note", "typeList", "loading"])), {}, {
                    pgcTab: function () {
                        return "bangumi" === this.rankRouteParams.rankTab || "cinema" === this.rankRouteParams.rankTab
                    }
                }),
                data: function () {
                    return {
                        rankMenu: [{
                            name: "全站榜",
                            type: "all"
                        }, {
                            name: "原创榜",
                            type: "origin"
                        }, {
                            name: "新番榜",
                            type: "bangumi"
                        }, {
                            name: "影视榜",
                            type: "cinema"
                        }, {
                            name: "新人榜",
                            type: "rookie"
                        }
                        ],
                        loaded: !1,
                        adData: {},
                        adConfig: [{
                            ad: {
                                active: !0,
                                dataLocId: 136
                            }
                        }, {
                            ad: {
                                active: !0,
                                dataLocId: 138
                            }
                        }
                        ]
                    }
                },
                mounted: function () {
                    this.getAdData()
                },
                methods: Te(Te(Te({}, Object(l.c)(["SET_RANK_ROUTE"])), Object(l.b)(["RANK_LIST"])), {}, {
                    getAdData: function () {
                        var e = this,
                            t = this;
                        q({
                            url: u.API + "/x/web-show/res/locs",
                            type: "GET",
                            data: {
                                pf: 0,
                                jsonp: "jsonp",
                                ids: t.adConfig.map((function (e) {
                                    return e.ad.dataLocId
                                })).join(",")
                            },
                            dataType: "jsonp"
                        }).then((function (i) {
                            if (i && 0 === i.code && i.data)
                                for (var a in t.adData = i.data, e.loaded = !0, i.data)
                                    if (i.data[a])
                                        for (var n = 0; n < i.data[a].length; n++)
                                            i.data[a][n].is_ad_loc && t.sendApidataData(i.data[a][n], a)
                        }))
                    },
                    sendApidataData: function (e, t) {
                        window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendApidataData ? window.BiliCm.Base.sendApidataData(e, t) : H()
                    },
                    rankSwitchTab: function (e) {
                        var t = "bangumi" === e || "cinema" === e ? I[e].times[0].value : I[e].times[1].value,
                            i = Object.assign({}, this.rankRouteParams, {
                                rankTab: e,
                                rid: I[e].channels[0].tid,
                                arc_type: 0,
                                day: t,
                                season_type: I[e].channels[0].season_type
                            });
                        this.SET_RANK_ROUTE(i),
                            this.RANK_LIST(),
                            this.routerChange()
                    },
                    rankChannelTab: function (e) {
                        var t = Object.assign({}, this.rankRouteParams, {
                            rid: e.tid,
                            season_type: e.seasonType
                        });
                        this.SET_RANK_ROUTE(t),
                            this.RANK_LIST(),
                            this.routerChange()
                    },
                    selectArcType: function (e) {
                        var t = Object.assign({}, this.rankRouteParams, {
                            arc_type: e
                        });
                        this.SET_RANK_ROUTE(t),
                            this.RANK_LIST(),
                            this.routerChange(),
                            he("ranking_select_publish_click", {
                                pubtime: e,
                                tab: this.rankRouteParams.rankTab,
                                channel: this.rankRouteParams.rid
                            })
                    },
                    selectDay: function (e) {
                        var t = Object.assign({}, this.rankRouteParams, {
                            day: e
                        });
                        this.SET_RANK_ROUTE(t),
                            this.RANK_LIST(),
                            this.routerChange(),
                            he("ranking_select_duration_click", {
                                ranktime: e,
                                tab: this.rankRouteParams.rankTab,
                                channel: this.rankRouteParams.rid
                            })
                    },
                    routerChange: function () {
                        var e = this.$route.path.split("/").indexOf("v"),
                            t = this.rankRouteParams,
                            i = t.rankTab,
                            a = t.rid,
                            n = t.arc_type,
                            o = t.day;
                        e < 0 ? this.$router.push({
                            path: "/ranking/".concat(i, "/").concat(a, "/").concat(n, "/").concat(o)
                        }) : this.$router.push({
                            path: "/v/ranking/".concat(i, "/").concat(a, "/").concat(n, "/").concat(o)
                        })
                    }
                }),
                asyncData: function (e, t) {
                    var i = e.dispatch;
                    return t.appname = ["pgc.gateway.web", "pgc.gateway.season"],
                        Promise.all([i("RANK_LIST", t)])
                }
            },
                be = (i(406), Object(Z.a)(Me, (function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [i("div", {
                        staticClass: "b-page-body"
                    }, [i("div", {
                        staticClass: "rank-main-container main-inner b-wrap"
                    }, [i("div", {
                        staticClass: "rank-container"
                    }, [i("rank-head", {
                        attrs: {
                            list: e.rankMenu,
                            type: e.rankRouteParams.rankTab
                        },
                        on: {
                            rankSwitchTab: e.rankSwitchTab
                        }
                    }), i("div", {
                        staticClass: "rank-body"
                    }, [i("rank-tab-wrap", {
                        attrs: {
                            list: e.channels,
                            tabtid: e.rankRouteParams.rid,
                            type: e.rankRouteParams.rankTab,
                            rankTimeTab: e.times,
                            showTypes: e.showTypes,
                            rankArcTypeList: e.typeList,
                            arcType: e.rankRouteParams.arc_type,
                            day: e.rankRouteParams.day,
                            seasonType: e.rankRouteParams.season_type
                        },
                        on: {
                            rankNameTab: e.rankChannelTab,
                            selectArcType: e.selectArcType,
                            selectDay: e.selectDay
                        }
                    }), i("div", {
                        staticClass: "rank-list-head"
                    }, [i("div", {
                        staticClass: "rank_tips"
                    }, [i("i", {
                        staticClass: "b-icon-tip"
                    }), i("span", {
                        staticClass: "tip-txt"
                    }, [e._v(e._s(e.note))])])]), i("rank-list", {
                        attrs: {
                            list: e.rankList,
                            loading: e.loading,
                            width: e.pgcTab ? "90" : "114",
                            height: e.pgcTab ? "120" : "70",
                            type: e.rankRouteParams.rankTab
                        }
                    })], 1)], 1), e.loaded ? i("div", e._l(e.adConfig, (function (t, a) {
                        return i("ad-floor", {
                            key: a,
                            attrs: {
                                adData: e.adData,
                                config: t
                            }
                        })
                    })), 1) : e._e()])]), i("GoTop")], 1)
                }), [], !1, null, null, null).exports);
            function Ue(e) {
                "string" == typeof e ? K(e) : K(e.name, e.ops)
            }
            a.a.filter("formatDuration", (function (e) {
                return function (e) {
                    return -1 !== String(e).indexOf(":") ? e : e < 60 ? (n = e < 10 ? "0".concat(e) : e, "00:".concat(n)) : e < 3600 ? (a = e % 60, i = parseInt(e / 60), n = a < 10 ? "0".concat(a) : a, o = i < 10 ? "0".concat(i) : i, "".concat(o, ":").concat(n)) : (a = e % 60, i = parseInt(e % 3600 / 60), t = parseInt(e / 3600), n = a < 10 ? "0".concat(a) : a, o = i < 10 ? "0".concat(i) : i, "".concat(t, ":").concat(o, ":").concat(n));
                    var t,
                        i,
                        a,
                        n,
                        o
                }
                    (e)
            })),
                a.a.filter("formatDate", (function (e) {
                    return function (e) {
                        if (e) {
                            var t = new Date(e);
                            return t.getFullYear() + "-" + (P(t.getMonth() + 1) + "-") + P(t.getDate())
                        }
                    }
                        (e)
                })),
                a.a.filter("formatDateTime", (function (e) {
                    return function (e) {
                        if (e) {
                            var t = new Date(e);
                            return t.getFullYear() + "-" + (P(t.getMonth() + 1) + "-") + P(t.getDate()) + " " + (P(t.getHours()) + ":") + (P(t.getMinutes()) + ":") + P(t.getSeconds())
                        }
                    }
                        (e)
                })),
                a.a.filter("formatNum", (function (e) {
                    return function (e, t) {
                        if (parseInt(e) < 0 || null == e || null == e)
                            return "--";
                        if (-1 !== String(e).indexOf(".") || -1 !== String(e).indexOf("-"))
                            return e;
                        if (0 === parseInt(e))
                            return 0;
                        var i = t ? "萬" : "万",
                            a = t ? "億" : "亿";
                        return (e = parseInt(e)) >= 1e4 && e < 1e8 ? (e / 1e4).toFixed(1) + i : e >= 1e8 ? (e / 1e8).toFixed(1) + a : e
                    }
                        (e)
                })),
                a.a.filter("trimHttp", (function (e) {
                    return x(e)
                })),
                a.a.directive("mouse-movieclip", {
                    bind: function (e, t) {
                        var i = t.value,
                            a = 0,
                            n = 0,
                            o = !1,
                            r = i.target ? $(e).find(i.target) : $(e),
                            l = i.direction ? i.direction : "x",
                            s = i.speed ? i.speed : 80;
                        e.addEventListener("mouseenter", (function () {
                            o = !0,
                                n = 0,
                                clearInterval(e.timer);
                            var t = {};
                            e.timer = setInterval((function () {
                                a = -n * i.step,
                                    "x" === l && (t = {
                                        "background-position-x": a
                                    }),
                                    "y" === l && (t = {
                                        "background-position-y": a
                                    }),
                                    $(r).css(t),
                                    o ? ++n > i.max - 1 && (n = i.point) : --n < 0 && clearInterval(e.timer)
                            }), s)
                        })),
                            e.addEventListener("mouseleave", (function () {
                                o = !1
                            }))
                    }
                }),
                a.a.directive("longClick", {
                    bind: function (e, t) {
                        e.addEventListener("mousedown", (function () {
                            e.isPressing = !0;
                            var i = t.value;
                            e.timer = setTimeout((function () {
                                e.isPressing && i()
                            }), t.arg)
                        }))
                    }
                }),
                a.a.directive("longClickLeave", {
                    bind: function (e, t) {
                        e.addEventListener("mouseup", (function () {
                            e.isPressing && (clearTimeout(e.timer), e.isPressing = !1, t.value())
                        })),
                            e.addEventListener("mouseleave", (function () {
                                e.isPressing && (clearTimeout(e.timer), e.isPressing = !1, t.value())
                            }))
                    }
                }),
                a.a.directive("report", {
                    bind: function (e, t) {
                        e.addEventListener(t.arg, (function () {
                            var e = t.value;
                            e instanceof Array ? e.forEach((function (e) {
                                return Ue(e)
                            })) : Ue(e),
                                t.modifiers.self && window.reportObserver.forceCommit()
                        }))
                    }
                }),
                a.a.directive("focus", {
                    inserted: function (e) {
                        e.focus()
                    }
                });
            var ge = new a.a,
                Ie = ["scroll", "resize", "load"];
            function Ce(e, t) {
                var i,
                    a;
                for (i = 0, a = e.length; i < a; ++i)
                    if (e[i].el === t)
                        return i;
                return -1
            }
            var Je = {
                install: function (e, t) {
                    var i = [],
                        a = [],
                        n = t || {
                            preload: 0
                        };
                    function o(e) {
                        e.loading || e.loaded || !V(e.el, n.preload) || function (e) {
                            if (e.loading || e.loaded)
                                return;
                            e.loading = !0;
                            var t = new Image;
                            t.onload = function () {
                                e.el.src = e.src,
                                    e.loading = !1,
                                    e.loaded = !0
                            },
                                t.onerror = function () {
                                    e.loading = !1,
                                        e.loaded = !0,
                                        e.el.src = e.defaultImg
                                },
                                t.src = e.src
                        }
                            (e)
                    }
                    function r(e) {
                        !e.loaded && V(e.el, n.preload) && (e.handler.call(), e.loaded = !0)
                    }
                    function l(t, n) {
                        var l = L()(t);
                        "string" === l ? function (t, a) {
                            var n = Ce(i, a),
                                r = a.getAttribute("src"),
                                l = {
                                    el: a,
                                    src: t,
                                    loading: !1,
                                    loaded: !1,
                                    defaultImg: r
                                };
                            -1 !== n ? i[n] = l : i.push(l),
                                e.nextTick((function () {
                                    o(l)
                                }))
                        }
                            (t, n) : "object" === l && function (t, i) {
                                var n = Ce(a, i),
                                    o = {
                                        el: i,
                                        id: t.id,
                                        loaded: !1,
                                        handler: t.handler || function () { }
                                    };
                                -1 !== n ? a[n].id !== t.id && (a[n] = o, e.nextTick((function () {
                                    r(o)
                                }))) : (a.push(o), e.nextTick((function () {
                                    r(o)
                                })))
                            }
                                (t, n)
                    }
                    e.directive("lazy", {
                        bind: function (e, t) {
                            l(t.value, e)
                        },
                        update: function (e, t) {
                            l(t.value, e)
                        },
                        unbind: function (e, t) {
                            var i = t.value;
                            if ("object" === L()(i)) {
                                var n = Ce(a, e);
                                -1 !== n && a.splice(n, 1)
                            }
                        }
                    });
                    for (var s = Q((function () {
                        !function () {
                            var e,
                                t;
                            for (e = 0, t = i.length; e < t; ++e)
                                o(i[e])
                        }
                            (),
                            function () {
                                var e,
                                    t;
                                for (e = 0, t = a.length; e < t; ++e)
                                    r(a[e])
                            }
                                ()
                    }), 200, 100), c = 0; c < Ie.length; ++c)
                        window.addEventListener(Ie[c], s);
                    ge.$on("updateFloor", (function () {
                        s()
                    })),
                        ge.$on("appMounted", (function () {
                            s()
                        }))
                }
            },
                _e = [{
                    name: "首页",
                    route: "/",
                    tid: "",
                    locid: 23,
                    sub: []
                }, {
                    name: "动画",
                    route: "douga",
                    tid: 1,
                    locid: 52,
                    count: "",
                    subMenuSize: 162,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2507,
                        leftId: 2452,
                        rightId: 2453
                    },
                    sub: [{
                        name: "MAD·AMV",
                        route: "mad",
                        tid: 24,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 151
                        },
                        desc: "具有一定制作程度的动画或静画的二次创作视频",
                        url: "//www.bilibili.com/video/douga-mad-1.html"
                    }, {
                        name: "MMD·3D",
                        route: "mmd",
                        tid: 25,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 152
                        },
                        desc: "使用MMD（MikuMikuDance）和其他3D建模类软件制作的视频",
                        url: "//www.bilibili.com/video/douga-mmd-1.html"
                    }, {
                        name: "短片·手书·配音",
                        route: "voice",
                        tid: 47,
                        ps: 15,
                        rps: 10,
                        desc: "追求创新并具有强烈特色的短片、手书（绘）及ACG相关配音",
                        url: "//www.bilibili.com/video/douga-voice-1.html"
                    }, {
                        name: "手办·模玩",
                        route: "garage_kit",
                        tid: 210,
                        ps: 15,
                        rps: 10,
                        desc: "手办模玩的测评、改造或其他衍生内容",
                        url: ""
                    }, {
                        name: "特摄",
                        route: "tokusatsu",
                        tid: 86,
                        ps: 15,
                        rps: 10,
                        desc: "特摄相关衍生视频",
                        url: "//www.bilibili.com/video/cinephile-tokusatsu.html"
                    }, {
                        name: "综合",
                        route: "other",
                        tid: 27,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 153
                        },
                        desc: "以动画及动画相关内容为素材，包括但不仅限于音频替换、杂谈、排行榜等内容",
                        url: "//www.bilibili.com/video/douga-else-1.html"
                    }
                    ]
                }, {
                    name: "番剧",
                    route: "anime",
                    tid: 13,
                    url: "//www.bilibili.com/anime/",
                    takeOvered: !0,
                    count: "",
                    subMenuSize: 172,
                    combination: !0,
                    sub: [{
                        name: "连载动画",
                        tid: 33,
                        route: "serial",
                        desc: "当季连载的动画番剧",
                        url: "//www.bilibili.com/video/bangumi-two-1.html"
                    }, {
                        name: "完结动画",
                        tid: 32,
                        route: "finish",
                        desc: "已完结的动画番剧合集",
                        url: "//www.bilibili.com/video/part-twoelement-1.html"
                    }, {
                        name: "资讯",
                        tid: 51,
                        route: "information",
                        desc: "动画番剧相关资讯视频",
                        url: "//www.bilibili.com/video/douga-else-information-1.html"
                    }, {
                        name: "官方延伸",
                        tid: 152,
                        route: "offical",
                        desc: "动画番剧为主题的宣传节目、采访视频，及声优相关视频",
                        url: "//www.bilibili.com/video/bagumi_offical_1.html"
                    }, {
                        name: "新番时间表",
                        url: "//www.bilibili.com/anime/timeline/",
                        desc: ""
                    }, {
                        name: "番剧索引",
                        url: "//www.bilibili.com/anime/index/",
                        desc: ""
                    }
                    ]
                }, {
                    name: "国创",
                    tid: 167,
                    route: "guochuang",
                    url: "//www.bilibili.com/guochuang/",
                    takeOvered: !0,
                    count: "",
                    subMenuSize: 214,
                    combination: !0,
                    sub: [{
                        name: "国产动画",
                        tid: 153,
                        route: "chinese",
                        desc: "我国出品的PGC动画",
                        url: "//www.bilibili.com/video/bangumi_chinese_1.html"
                    }, {
                        name: "国产原创相关",
                        tid: 168,
                        route: "original",
                        desc: "",
                        url: "//www.bilibili.com/video/guochuang-fanvid-1.html"
                    }, {
                        name: "布袋戏",
                        tid: 169,
                        route: "puppetry",
                        desc: "",
                        url: "//www.bilibili.com/video/glove-puppetry-1.html"
                    }, {
                        name: "动态漫·广播剧",
                        tid: 195,
                        route: "motioncomic",
                        desc: "",
                        url: ""
                    }, {
                        name: "资讯",
                        tid: 170,
                        route: "information",
                        desc: "",
                        url: "//www.bilibili.com/video/guochuang-offical-1.html"
                    }, {
                        name: "新番时间表",
                        url: "//www.bilibili.com/guochuang/timeline/",
                        desc: ""
                    }, {
                        name: "国产动画索引",
                        url: "//www.bilibili.com/guochuang/index/",
                        desc: ""
                    }
                    ]
                }, {
                    name: "音乐",
                    route: "music",
                    tid: 3,
                    locid: 58,
                    count: "",
                    subMenuSize: 268,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !0,
                    customComponent: {
                        name: "Energy",
                        titleId: 2511,
                        leftId: 2462,
                        rightId: 3131,
                        rightType: "slide"
                    },
                    sub: [{
                        name: "原创音乐",
                        route: "original",
                        tid: 28,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        ad: {
                            active: !0,
                            dataLocId: 243
                        },
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "个人或团队制作以音乐为主要原创因素的歌曲或纯音乐",
                        url: "//www.bilibili.com/video/music-original-1.html"
                    }, {
                        name: "翻唱",
                        route: "cover",
                        tid: 31,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 245
                        },
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "一切非官方的人声再演绎歌曲作品",
                        url: "//www.bilibili.com/video/music-Cover-1.html"
                    }, {
                        name: "VOCALOID·UTAU",
                        route: "vocaloid",
                        tid: 30,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "以雅马哈Vocaloid和UTAU引擎为基础，包含其他调教引擎，运用各类音源进行的歌曲创作内容",
                        url: "//www.bilibili.com/video/music-vocaloid-1.html"
                    }, {
                        name: "电音",
                        route: "electronic",
                        tid: 194,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "以电子合成器、音乐软体等产生的电子声响制作的音乐",
                        url: "#"
                    }, {
                        name: "演奏",
                        route: "perform",
                        tid: 59,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 247
                        },
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "传统或非传统乐器及器材的演奏作品",
                        url: "//www.bilibili.com/video/music-perform-1.html"
                    }, {
                        name: "MV",
                        route: "mv",
                        tid: 193,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "音乐录影带，为搭配音乐而拍摄的短片",
                        url: "//www.bilibili.com/video/music-coordinate-1.html"
                    }, {
                        name: "音乐现场",
                        route: "live",
                        tid: 29,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "音乐实况表演视频",
                        url: "//www.bilibili.com/video/music-oped-1.html"
                    }, {
                        name: "音乐综合",
                        route: "other",
                        tid: 130,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "一日",
                            value: 1
                        }, {
                            name: "三日",
                            value: 3
                        }
                        ],
                        desc: "收录无法定义到其他音乐子分区的音乐视频",
                        url: "//www.bilibili.com/video/music-collection-1.html"
                    }, {
                        name: "音频",
                        customZone: "Audio",
                        route: "audio",
                        url: "//www.bilibili.com/audio/home?musicType=music"
                    }, {
                        name: "说唱",
                        url: "//www.bilibili.com/v/rap"
                    }
                    ]
                }, {
                    name: "舞蹈",
                    route: "dance",
                    tid: 129,
                    locid: 64,
                    count: "",
                    subMenuSize: 172,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2513,
                        leftId: 2472,
                        rightId: 2473
                    },
                    sub: [{
                        name: "宅舞",
                        route: "otaku",
                        tid: 20,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 249
                        },
                        desc: "与ACG相关的翻跳、原创舞蹈",
                        url: "//www.bilibili.com/video/dance-1.html"
                    }, {
                        name: "街舞",
                        route: "hiphop",
                        tid: 198,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 251
                        },
                        desc: "收录街舞相关内容，包括赛事现场、舞室作品、个人翻跳、FREESTYLE等",
                        url: ""
                    }, {
                        name: "明星舞蹈",
                        route: "star",
                        tid: 199,
                        ps: 15,
                        rps: 10,
                        desc: "国内外明星发布的官方舞蹈及其翻跳内容",
                        url: ""
                    }, {
                        name: "中国舞",
                        route: "china",
                        tid: 200,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 253
                        },
                        desc: "传承中国艺术文化的舞蹈内容，包括古典舞、民族民间舞、汉唐舞、古风舞等",
                        url: ""
                    }, {
                        name: "舞蹈综合",
                        route: "three_d",
                        tid: 154,
                        ps: 15,
                        rps: 10,
                        desc: "收录无法定义到其他舞蹈子分区的舞蹈视频",
                        url: ""
                    }, {
                        name: "舞蹈教程",
                        route: "demo",
                        tid: 156,
                        ps: 10,
                        rps: 6,
                        desc: "镜面慢速，动作分解，基础教程等具有教学意义的舞蹈视频",
                        url: "//www.bilibili.com/video/dance-demo-1.html"
                    }
                    ]
                }, {
                    name: "游戏",
                    route: "game",
                    tid: 4,
                    locid: 70,
                    count: "",
                    subMenuSize: 240,
                    slider: {
                        width: 470,
                        height: 216
                    },
                    viewTag: !0,
                    customComponent: {
                        name: "Energy",
                        titleId: 3761,
                        leftId: 3765,
                        rightId: 3775,
                        rightType: "slide"
                    },
                    recommendCardType: "GameGroomBox",
                    sub: [{
                        name: "单机游戏",
                        route: "stand_alone",
                        tid: 17,
                        ps: 10,
                        rps: 7,
                        rankshow: 1,
                        viewHotTag: !0,
                        ad: {
                            active: !0,
                            dataLocId: 255
                        },
                        dpConfig: [{
                            name: "三日",
                            value: 3
                        }, {
                            name: "一日",
                            value: 1
                        }, {
                            name: "一周",
                            value: 7
                        }
                        ],
                        desc: "以所有平台（PC、主机、移动端）的单机或联机游戏为主的视频内容，包括游戏预告、CG、实况解说及相关的评测、杂谈与视频剪辑等",
                        url: "//www.bilibili.com/video/videogame-1.html"
                    }, {
                        name: "电子竞技",
                        route: "esports",
                        tid: 171,
                        ps: 10,
                        rps: 7,
                        rankshow: 1,
                        viewHotTag: !0,
                        ad: {
                            active: !0,
                            dataLocId: 257
                        },
                        desc: "具有高对抗性的电子竞技游戏项目，其相关的赛事、实况、攻略、解说、短剧等视频。",
                        url: "//www.bilibili.com/video/esports-1.html"
                    }, {
                        name: "手机游戏",
                        route: "mobile",
                        tid: 172,
                        ps: 10,
                        rps: 7,
                        rankshow: 1,
                        viewHotTag: !0,
                        desc: "以手机及平板设备为主要平台的游戏，其相关的实况、攻略、解说、短剧、演示等视频。",
                        url: "//www.bilibili.com/video/mobilegame-1.html"
                    }, {
                        name: "网络游戏",
                        route: "online",
                        tid: 65,
                        ps: 10,
                        rps: 7,
                        rankshow: 1,
                        viewHotTag: !0,
                        ad: {
                            active: !0,
                            dataLocId: 259
                        },
                        dpConfig: [{
                            name: "三日",
                            value: 3
                        }, {
                            name: "一日",
                            value: 1
                        }, {
                            name: "一周",
                            value: 7
                        }
                        ],
                        desc: "由网络运营商运营的多人在线游戏，以及电子竞技的相关游戏内容。包括赛事、攻略、实况、解说等相关视频",
                        url: "//www.bilibili.com/video/onlinegame-1.html"
                    }, {
                        name: "桌游棋牌",
                        route: "board",
                        tid: 173,
                        ps: 5,
                        rps: 3,
                        rankshow: 1,
                        viewHotTag: !0,
                        desc: "桌游、棋牌、卡牌对战等及其相关电子版游戏的实况、攻略、解说、演示等视频。",
                        url: "//www.bilibili.com/video/boardgame-1.html"
                    }, {
                        name: "GMV",
                        route: "gmv",
                        tid: 121,
                        ps: 5,
                        rps: 3,
                        rankshow: 1,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "三日",
                            value: 3
                        }, {
                            name: "一日",
                            value: 1
                        }, {
                            name: "一周",
                            value: 7
                        }
                        ],
                        desc: "由游戏素材制作的MV视频。以游戏内容或CG为主制作的，具有一定创作程度的MV类型的视频",
                        url: "//www.bilibili.com/video/gmv-1.html"
                    }, {
                        name: "音游",
                        route: "music",
                        tid: 136,
                        ps: 5,
                        rps: 3,
                        rankshow: 1,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "三日",
                            value: 3
                        }, {
                            name: "一日",
                            value: 1
                        }, {
                            name: "一周",
                            value: 7
                        }
                        ],
                        desc: "各个平台上，通过配合音乐与节奏而进行的音乐类游戏视频",
                        url: "//www.bilibili.com/video/music-game-1.html"
                    }, {
                        name: "Mugen",
                        route: "mugen",
                        tid: 19,
                        ps: 5,
                        rps: 3,
                        rankshow: 1,
                        viewHotTag: !0,
                        dpConfig: [{
                            name: "三日",
                            value: 3
                        }, {
                            name: "一日",
                            value: 1
                        }, {
                            name: "一周",
                            value: 7
                        }
                        ],
                        desc: "以Mugen引擎为平台制作、或与Mugen相关的游戏视频",
                        url: "//www.bilibili.com/video/game-mugen-1.html"
                    }, {
                        name: "游戏赛事",
                        url: "//www.bilibili.com/v/game/match/",
                        newIcon: !0
                    }
                    ]
                }, {
                    name: "知识",
                    route: "technology",
                    tid: 36,
                    locid: 76,
                    count: "",
                    subMenuSize: 172,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2058,
                        leftId: 2047,
                        rightId: 2048
                    },
                    sub: [{
                        name: "科学科普",
                        route: "science",
                        tid: 201,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 261
                        },
                        desc: "回答你的十万个为什么"
                    }, {
                        name: "社科人文",
                        route: "fun",
                        tid: 124,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 263
                        },
                        desc: "聊聊互联网社会法律，看看历史趣闻艺术，品品文化心理人物"
                    }, {
                        name: "财经",
                        route: "finance",
                        tid: 207,
                        ps: 15,
                        rps: 10,
                        desc: "宏观经济分析，证券市场动态，商业帝国故事，知识与财富齐飞~"
                    }, {
                        name: "校园学习",
                        route: "campus",
                        tid: 208,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 265
                        },
                        desc: "老师很有趣，同学多人才，我们都爱搞学习"
                    }, {
                        name: "职业职场",
                        route: "career",
                        tid: 209,
                        ps: 15,
                        rps: 10,
                        desc: "职场加油站，成为最有料的职场人"
                    }, {
                        name: "野生技术协会",
                        route: "wild",
                        tid: 122,
                        ps: 15,
                        rps: 10,
                        desc: "炫酷技能大集合，是时候展现真正的技术了"
                    }
                    ]
                }, {
                    name: "数码",
                    route: "digital",
                    tid: 188,
                    locid: 2977,
                    count: "",
                    subMenuSize: 80,
                    slider: {
                        width: 470,
                        height: 216
                    },
                    viewTag: !0,
                    customComponent: {
                        name: "Energy",
                        titleId: 2980,
                        leftId: 2978,
                        rightId: 2979
                    },
                    recommendCardType: "GameGroomBox",
                    sub: [{
                        name: "手机平板",
                        route: "mobile",
                        tid: 95,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        desc: "手机平板、app 和产品教程等相关视频",
                        url: "#"
                    }, {
                        name: "电脑装机",
                        route: "pc",
                        tid: 189,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        desc: "电脑、笔记本、装机配件、外设和软件教程等相关视频",
                        url: "#"
                    }, {
                        name: "摄影摄像",
                        route: "photography",
                        tid: 190,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        desc: "摄影摄像器材、拍摄剪辑技巧、拍摄作品分享等相关视频",
                        url: "#"
                    }, {
                        name: "影音智能",
                        route: "intelligence_av",
                        tid: 191,
                        ps: 15,
                        rps: 10,
                        viewHotTag: !0,
                        desc: "影音设备、智能硬件、生活家电等相关视频",
                        url: "#"
                    }
                    ]
                }, {
                    name: "生活",
                    route: "life",
                    tid: 160,
                    locid: 88,
                    count: "",
                    subMenuSize: 164,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2062,
                        leftId: 1674,
                        rightId: 1670
                    },
                    sub: [{
                        name: "搞笑",
                        route: "funny",
                        tid: 138,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 273
                        },
                        desc: "各种沙雕有趣的搞笑剪辑，挑战，表演，配音等视频",
                        url: "//www.bilibili.com/video/ent_funny_1.html",
                        locid: 4204,
                        recommendId: 4210,
                        slider: {
                            width: 620,
                            height: 220
                        },
                        customComponent: {
                            name: "Energy",
                            leftId: 4212,
                            rightId: 4218,
                            rightType: "slide"
                        }
                    }, {
                        name: "日常",
                        route: "daily",
                        tid: 21,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 275
                        },
                        desc: "记录日常生活，分享生活故事",
                        url: "//www.bilibili.com/video/ent-life-1.html"
                    }, {
                        name: "动物圈",
                        route: "animal",
                        tid: 75,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 277
                        },
                        desc: "萌萌的动物都在这里哦",
                        url: "//www.bilibili.com/video/ent-animal-1.html"
                    }, {
                        name: "手工",
                        route: "handmake",
                        tid: 161,
                        ps: 15,
                        rps: 10,
                        desc: "手工制品的制作过程或成品展示、教程、测评类视频",
                        url: "//www.bilibili.com/video/ent-handmake-1.html"
                    }, {
                        name: "绘画",
                        route: "painting",
                        tid: 162,
                        ps: 15,
                        rps: 10,
                        desc: "绘画过程或绘画教程，以及绘画相关的所有视频",
                        url: "//www.bilibili.com/video/ent-painting-1.html"
                    }, {
                        name: "运动",
                        route: "sports",
                        tid: 163,
                        ps: 15,
                        rps: 10,
                        desc: "运动相关的记录、教程、装备评测和精彩瞬间剪辑视频",
                        url: "//www.bilibili.com/video/ent-sports-1.html"
                    }, {
                        name: "汽车",
                        route: "automobile",
                        tid: 176,
                        ps: 15,
                        rps: 10,
                        desc: "汽车相关资讯、体验、测评、记录和车主生活视频",
                        url: "//www.bilibili.com/video/tech-future-automobile-1.html"
                    }, {
                        name: "其他",
                        route: "other",
                        tid: 174,
                        ps: 15,
                        rps: 10,
                        desc: "对分区归属不明的视频进行归纳整合的特定分区",
                        url: "//www.bilibili.com/video/others-1.html"
                    }
                    ]
                }, {
                    name: "美食",
                    route: "food",
                    tid: 211,
                    locid: 4243,
                    count: "",
                    isHide: !0,
                    subMenuSize: 164,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        leftId: 4258,
                        rightId: 4264
                    },
                    sub: [{
                        name: "美食制作",
                        route: "make",
                        tid: 76,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 4268
                        },
                        desc: "学做人间美味，展示精湛厨艺",
                        url: "#"
                    }, {
                        name: "美食侦探",
                        route: "detective",
                        tid: 212,
                        ps: 15,
                        rps: 10,
                        desc: "寻找美味餐厅，发现街头美食",
                        url: "#"
                    }, {
                        name: "美食测评",
                        route: "measurement",
                        tid: 213,
                        ps: 15,
                        rps: 10,
                        desc: "吃货世界，品尝世间美味",
                        url: "#"
                    }, {
                        name: "田园美食",
                        route: "rural",
                        tid: 214,
                        ps: 15,
                        rps: 10,
                        desc: "品味乡野美食，寻找山与海的味道",
                        url: "#"
                    }, {
                        name: "美食记录",
                        route: "record",
                        tid: 215,
                        ps: 15,
                        rps: 10,
                        desc: "记录一日三餐，给生活添一点幸福感",
                        url: "#"
                    }
                    ]
                }, {
                    name: "鬼畜",
                    route: "kichiku",
                    tid: 119,
                    locid: 100,
                    count: "",
                    subMenuSize: 118,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2509,
                        leftId: 2482,
                        rightId: 2483
                    },
                    sub: [{
                        name: "鬼畜调教",
                        route: "guide",
                        tid: 22,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 285
                        },
                        desc: "使用素材在音频、画面上做一定处理，达到与BGM一定的同步感",
                        url: "//www.bilibili.com/video/ent-Kichiku-1.html"
                    }, {
                        name: "音MAD",
                        route: "mad",
                        tid: 26,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 287
                        },
                        desc: "使用素材音频进行一定的二次创作来达到还原原曲的非商业性质稿件",
                        url: "//www.bilibili.com/video/douga-kichiku-1.html"
                    }, {
                        name: "人力VOCALOID",
                        route: "manual_vocaloid",
                        tid: 126,
                        ps: 15,
                        rps: 10,
                        desc: "将人物或者角色的无伴奏素材进行人工调音，使其就像VOCALOID一样歌唱的技术",
                        url: "//www.bilibili.com/video/kichiku-manual_vocaloid-1.html"
                    }, {
                        name: "教程演示",
                        route: "course",
                        tid: 127,
                        ps: 10,
                        rps: 6,
                        rightComponent: {
                            name: "CmImgList",
                            id: 148
                        },
                        ad: {
                            active: !0,
                            dataLocId: 289
                        },
                        hideDropdown: !1,
                        desc: "鬼畜相关的教程演示",
                        url: "//www.bilibili.com/video/kichiku-course-1.html"
                    }
                    ]
                }, {
                    name: "时尚",
                    route: "fashion",
                    tid: 155,
                    locid: 94,
                    count: "",
                    subMenuSize: 124,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2515,
                        leftId: 2492,
                        rightId: 2493
                    },
                    sub: [{
                        name: "美妆",
                        route: "makeup",
                        tid: 157,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 279
                        },
                        desc: "涵盖妆容、发型、美甲等教程，彩妆、护肤相关产品测评、分享等",
                        url: "//www.bilibili.com/video/fashion-makeup-fitness-1.html"
                    }, {
                        name: "服饰",
                        route: "clothing",
                        tid: 158,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 281
                        },
                        desc: "服饰风格、搭配技巧相关的展示和教程视频",
                        url: "//www.bilibili.com/video/fashion-clothing-1.html"
                    }, {
                        name: "健身",
                        route: "aerobics",
                        tid: 164,
                        ps: 15,
                        rps: 10,
                        desc: "器械、有氧、拉伸运动等，以达到强身健体、减肥瘦身、形体塑造目的",
                        url: "//www.bilibili.com/video/fashion-body-1.html"
                    }, {
                        name: "T台",
                        route: "catwalk",
                        tid: 159,
                        ps: 15,
                        rps: 10,
                        desc: "发布会走秀现场及模特相关时尚片、采访、后台花絮",
                        url: "#"
                    }, {
                        name: "风尚标",
                        route: "trends",
                        tid: 192,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 283
                        },
                        desc: "时尚明星专访、街拍、时尚购物相关知识科普",
                        url: "#"
                    }
                    ]
                }, {
                    name: "资讯",
                    route: "information",
                    tid: 202,
                    locid: 4076,
                    count: "",
                    subMenuSize: 60,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    sub: [{
                        name: "热点",
                        route: "hotspot",
                        tid: 203,
                        ps: 18,
                        rps: 10,
                        desc: "全民关注的时政热门资讯"
                    }, {
                        name: "环球",
                        route: "global",
                        tid: 204,
                        ps: 18,
                        rps: 10,
                        desc: "全球范围内发生的具有重大影响力的事件动态"
                    }, {
                        name: "社会",
                        route: "social",
                        tid: 205,
                        ps: 18,
                        rps: 10,
                        desc: "日常生活的社会事件、社会问题、社会风貌的报道"
                    }, {
                        name: "综合",
                        route: "multiple",
                        tid: 206,
                        ps: 18,
                        rps: 10,
                        desc: "除上述领域外其它垂直领域的综合资讯"
                    }
                    ]
                }, {
                    name: "娱乐",
                    route: "ent",
                    tid: 5,
                    locid: 82,
                    count: "",
                    subMenuSize: 62,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2067,
                        leftId: 2065,
                        rightId: 2066
                    },
                    sub: [{
                        name: "综艺",
                        route: "variety",
                        tid: 71,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 267
                        },
                        desc: "国内外有趣的综艺和综艺相关精彩剪辑",
                        url: "//www.bilibili.com/video/ent-variety-1.html"
                    }, {
                        name: "明星",
                        route: "star",
                        tid: 137,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 269
                        },
                        desc: "娱乐圈动态、明星资讯相关",
                        url: "//www.bilibili.com/video/ent-circle-1.html"
                    }
                    ]
                }, {
                    name: "影视",
                    route: "cinephile",
                    tid: 181,
                    locid: 2211,
                    count: "",
                    subMenuSize: 84,
                    slider: {
                        width: 620,
                        height: 220
                    },
                    viewTag: !1,
                    customComponent: {
                        name: "Energy",
                        titleId: 2309,
                        leftId: 2307,
                        rightId: 2308
                    },
                    sub: [{
                        name: "影视杂谈",
                        route: "cinecism",
                        tid: 182,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 2212
                        },
                        desc: "影视评论、解说、吐槽、科普等",
                        url: "//www.bilibili.com/video/cinephile-cinecism.html"
                    }, {
                        name: "影视剪辑",
                        route: "montage",
                        tid: 183,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 2213
                        },
                        desc: "对影视素材进行剪辑再创作的视频",
                        url: "//www.bilibili.com/video/cinephile-montage.html"
                    }, {
                        name: "短片",
                        route: "shortfilm",
                        tid: 85,
                        ps: 15,
                        rps: 10,
                        desc: "追求自我表达且具有特色的短片",
                        url: "//www.bilibili.com/video/cinephile-shortfilm.html"
                    }, {
                        name: "预告·资讯",
                        route: "trailer_info",
                        tid: 184,
                        ps: 15,
                        rps: 10,
                        ad: {
                            active: !0,
                            dataLocId: 2214
                        },
                        desc: "影视类相关资讯，预告，花絮等视频",
                        url: "//www.bilibili.com/video/cinephile-trailer-info.html"
                    }
                    ]
                }, {
                    name: "纪录片",
                    route: "documentary",
                    tid: 177,
                    url: "//www.bilibili.com/documentary/",
                    count: "",
                    takeOvered: !0,
                    hasParent: !0,
                    combination: !0,
                    sub: [{
                        name: "人文·历史",
                        tid: 37,
                        route: "history",
                        dise: "",
                        url: "//www.bilibili.com/video/doco-history.html"
                    }, {
                        name: "科学·探索·自然",
                        tid: 178,
                        route: "science",
                        dise: "",
                        url: "//www.bilibili.com/video/doco-science.html"
                    }, {
                        name: "军事",
                        tid: 179,
                        route: "military",
                        dise: "",
                        url: "//www.bilibili.com/video/doco-military.html"
                    }, {
                        name: "社会·美食·旅行",
                        tid: 180,
                        route: "travel",
                        dise: "",
                        url: "//www.bilibili.com/video/doco-travel.html"
                    }, {
                        name: "纪录片索引",
                        url: "//www.bilibili.com/documentary/index/"
                    }
                    ]
                }, {
                    name: "电影",
                    route: "movie",
                    tid: 23,
                    url: "//www.bilibili.com/movie/",
                    count: "",
                    takeOvered: !0,
                    hasParent: !0,
                    combination: !0,
                    sub: [{
                        name: "华语电影",
                        tid: 147,
                        route: "chinese",
                        desc: "",
                        url: "//www.bilibili.com/video/movie_chinese_1.html"
                    }, {
                        name: "欧美电影",
                        tid: 145,
                        route: "west",
                        desc: "",
                        url: "//www.bilibili.com/video/movie_west_1.html"
                    }, {
                        name: "日本电影",
                        tid: 146,
                        route: "japan",
                        desc: "",
                        url: "//www.bilibili.com/video/movie_japan_1.html"
                    }, {
                        name: "其他国家",
                        tid: 83,
                        route: "movie",
                        desc: "",
                        url: "//www.bilibili.com/video/movie-movie-1.html"
                    }, {
                        name: "电影索引",
                        url: "//www.bilibili.com/movie/index/"
                    }
                    ]
                }, {
                    name: "电视剧",
                    route: "tv",
                    tid: 11,
                    url: "//www.bilibili.com/tv/",
                    count: "",
                    takeOvered: !0,
                    hasParent: !0,
                    combination: !0,
                    sub: [{
                        name: "国产剧",
                        tid: 185,
                        route: "mainland",
                        desc: "",
                        url: "//www.bilibili.com/video/tv-mainland.html"
                    }, {
                        name: "海外剧",
                        tid: 187,
                        route: "overseas",
                        desc: "",
                        url: "//www.bilibili.com/video/tv-overseas.html"
                    }, {
                        name: "电视剧索引",
                        url: "//www.bilibili.com/tv/index/"
                    }
                    ]
                }
                ],
                je = ["scroll", "resize", "load"];
            function Ae(e, t) {
                window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendShowData ? window.BiliCm.Base.sendShowData(e, t) : H()
            }
            function ke(e, t) {
                window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendStrictShowData ? window.BiliCm.Base.sendStrictShowData(e, t) : H()
            }
            function Ne(e, t) {
                var i,
                    a;
                e.setAttribute("href", x((i = t.data, a = t.id, (window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.getSyncUrl ? window.BiliCm.Base.getSyncUrl(i, a, null, window.__BILI_CONFIG__ && window.__BILI_CONFIG__.show_bv) : (H(), "")) || ""))),
                    e.setAttribute("data-target-url", t.data.url)
            }
            var De = {
                install: function (e) {
                    var t = {},
                        i = [2624];
                    for (var a in _e)
                        _e[a].locid && i.push(_e[a].locid);
                    e.directive("ad", {
                        bind: function (e, a) {
                            var n = a.value;
                            if (n.data && n.id) {
                                n.data.is_ad_loc ? Ne(e, n) : e.setAttribute("href", x(n.data.url)),
                                    e.addEventListener("click", (function () {
                                        !function (e, t) {
                                            window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendClickData ? window.BiliCm.Base.sendClickData(e, t) : H()
                                        }
                                            (n.data, n.id)
                                    }));
                                var o = n.data.id || n.data.src_id;
                                -1 === i.indexOf(n.id) && (t[o] = {
                                    el: e,
                                    data: n.data,
                                    id: n.id,
                                    nowShow: !1
                                })
                            }
                        },
                        update: function (e, t) {
                            var i = t.value;
                            i.data && i.data.is_ad_loc && Ne(e, i)
                        }
                    });
                    for (var n = Q((function () {
                        for (var e = Object.keys(t), i = function (i, a) {
                            var n = e[i],
                                o = t[n].el && t[n].el.offsetHeight;
                            V(t[n].el, o / 2 * -1) && (t[n].nowShow || (t[n].nowShow = !0, Ae(t[n].data, t[n].id)), t[n].timer && clearTimeout(t[n].timer), t[n].timer = setTimeout((function () {
                                clearTimeout(t[n].timer),
                                    V(t[n].el, o / 2 * -1) && (ke(t[n].data, t[n].id), delete t[n])
                            }), 1e3))
                        }, a = 0, n = e.length; a < n; ++a)
                            i(a)
                    }), 200, 100), o = 0; o < je.length; ++o)
                        window.addEventListener(je[o], n);
                    ge.$on("adReport", n);
                    var r = {};
                    ge.$on("slideShow", (function (e) {
                        if (e.data && e.id && e.el) {
                            var t = $(e.el).height() / 2 * -1;
                            V(e.el, t) && Ae(e.data, e.id),
                                r.index = e.index,
                                r.timer = setTimeout((function () {
                                    clearTimeout(r.timer),
                                        V(e.el, t) && e.index === r.index && ke(e.data, e.id)
                                }), 1e3)
                        }
                    }))
                }
            },
                Oe = i(407)("app:rank.index");
            a.a.use(Je, {
                preload: 100
            }),
                a.a.use(De);
            var Ee = Object.keys(I),
                Se = "/:v(v)?/ranking/:rankTab(".concat(Ee.join("|"), ")/:rid(\\d+)/:arcType([0-1])/:day(1|3|7|30)");
            Oe("rankingPath", Se),
                a.a.use(n.a),
                a.a.use(r.a);
            var Le = new n.a({
                fallback: !1,
                mode: "history",
                routes: [{
                    path: Se,
                    component: be
                }, {
                    path: "/:v(v)?/ranking",
                    component: be
                }
                ]
            });
            a.a.mixin({
                beforeRouteUpdate: function (e, t, i) {
                    var a = this.$options.asyncData;
                    a ? a({
                        store: this.$store,
                        route: e
                    }).then(i).catch(i) : i()
                }
            });
            var Re = {
                app: new a.a({
                    store: j,
                    router: Le,
                    render: function (e) {
                        return e(be)
                    }
                }),
                router: Le,
                store: j
            },
                Ve = Re.app,
                Qe = Re.router,
                Pe = Re.store;
            if (window.__INITIAL_STATE__)
                Pe.replaceState(window.__INITIAL_STATE__);
            else {
                var xe = Qe.getMatchedComponents();
                if (Qe.currentRoute.params[0]) {
                    var Be = Qe.currentRoute.params[0].split("/");
                    "" !== Be[0] && (Pe.state.rankRouteParams.rankTab = Be[0]),
                        Be[1] && (Pe.state.rankRouteParams.rid = parseInt(Be[1]), "bangumi" === Be[0] && I.bangumi.channels.forEach((function (e) {
                            e.tid == Be[1] && (Pe.state.rankRouteParams.season_type = e.season_type)
                        })), "cinema" === Be[0] && I.cinema.channels.forEach((function (e) {
                            e.tid == Be[1] && (Pe.state.rankRouteParams.season_type = e.season_type)
                        }))),
                        Be[2] && (Pe.state.rankRouteParams.arc_type = parseInt(Be[2])),
                        Be[3] && (Pe.state.rankRouteParams.day = parseInt(Be[3]))
                }
                xe && 0 !== xe.length || console.log(xe),
                    Promise.all(xe.map((function (e) {
                        return e.asyncData && e.asyncData(Pe, {})
                    }))).then((function () {
                        Ve.$mount("#rank-app")
                    })).catch()
            }
            Qe.onReady((function () {
                Qe.beforeResolve((function (e, t, i) {
                    var a = Qe.getMatchedComponents(e),
                        n = Qe.getMatchedComponents(t),
                        o = !1,
                        r = a.filter((function (e, t) {
                            return o || (o = n[t] !== e)
                        }));
                    if (!r.length)
                        return i();
                    Promise.all(r.map((function (t) {
                        if (t.asyncData)
                            return t.asyncData({
                                store: Pe,
                                route: e
                            })
                    }))).then((function () {
                        i()
                    })).catch(i)
                })),
                    window && window.document.getElementById("app") && Ve.$mount("#app")
            }))
        },
        73: function (e, t, i) { },
        74: function (e, t, i) { },
        75: function (e, t, i) { },
        76: function (e, t, i) { },
        77: function (e, t, i) { },
        78: function (e, t, i) { },
        79: function (e, t, i) { },
        80: function (e, t, i) { },
        81: function (e, t, i) { },
        82: function (e, t, i) { }
    });