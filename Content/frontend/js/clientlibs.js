
   
    (function () {
        var a = ("object" == typeof self && self.self === self && self) || ("object" == typeof global && global.global === global && global),
            b = a._,
            c = Array.prototype,
            d = Object.prototype,
            e = c.push,
            f = c.slice,
            g = d.toString,
            h = d.hasOwnProperty,
            i = Array.isArray,
            j = Object.keys,
            k = Object.create,
            l = function () {},
            m = function (a) {
                return a instanceof m ? a : this instanceof m ? void (this._wrapped = a) : new m(a);
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), (exports._ = m)) : (a._ = m), (m.VERSION = "1.8.3");
        var n = function (a, b, c) {
                if (void 0 === b) return a;
                switch (null == c ? 3 : c) {
                    case 1:
                        return function (c) {
                            return a.call(b, c);
                        };
                    case 2:
                        return function (c, d) {
                            return a.call(b, c, d);
                        };
                    case 3:
                        return function (c, d, e) {
                            return a.call(b, c, d, e);
                        };
                    case 4:
                        return function (c, d, e, f) {
                            return a.call(b, c, d, e, f);
                        };
                }
                return function () {
                    return a.apply(b, arguments);
                };
            },
            o = function (a, b, c) {
                return null == a ? m.identity : m.isFunction(a) ? n(a, b, c) : m.isObject(a) ? m.matcher(a) : m.property(a);
            };
        m.iteratee = function (a, b) {
            return o(a, b, 1 / 0);
        };
        var p = function (a, b) {
                return (
                    (b = null == b ? a.length - 1 : +b),
                    function () {
                        var c,
                            d = Math.max(arguments.length - b, 0),
                            e = Array(d);
                        for (c = 0; d > c; c++) e[c] = arguments[c + b];
                        switch (b) {
                            case 0:
                                return a.call(this, e);
                            case 1:
                                return a.call(this, arguments[0], e);
                            case 2:
                                return a.call(this, arguments[0], arguments[1], e);
                        }
                        var f = Array(b + 1);
                        for (c = 0; b > c; c++) f[c] = arguments[c];
                        return (f[b] = e), a.apply(this, f);
                    }
                );
            },
            q = function (a) {
                if (!m.isObject(a)) return {};
                if (k) return k(a);
                l.prototype = a;
                var b = new l();
                return (l.prototype = null), b;
            },
            r = function (a) {
                return function (b) {
                    return null == b ? void 0 : b[a];
                };
            },
            s = Math.pow(2, 53) - 1,
            t = r("length"),
            u = function (a) {
                var b = t(a);
                return "number" == typeof b && b >= 0 && s >= b;
            };
        (m.each = m.forEach = function (a, b, c) {
            b = n(b, c);
            var d, e;
            if (u(a)) for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
            else {
                var f = m.keys(a);
                for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a);
            }
            return a;
        }),
            (m.map = m.collect = function (a, b, c) {
                b = o(b, c);
                for (var d = !u(a) && m.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
                    var h = d ? d[g] : g;
                    f[g] = b(a[h], h, a);
                }
                return f;
            });
        var v = function (a) {
            var b = function (b, c, d, e) {
                var f = !u(b) && m.keys(b),
                    g = (f || b).length,
                    h = a > 0 ? 0 : g - 1;
                for (e || ((d = b[f ? f[h] : h]), (h += a)); h >= 0 && g > h; h += a) {
                    var i = f ? f[h] : h;
                    d = c(d, b[i], i, b);
                }
                return d;
            };
            return function (a, c, d, e) {
                var f = arguments.length >= 3;
                return b(a, n(c, e, 4), d, f);
            };
        };
        (m.reduce = m.foldl = m.inject = v(1)),
            (m.reduceRight = m.foldr = v(-1)),
            (m.find = m.detect = function (a, b, c) {
                var d;
                return (d = u(a) ? m.findIndex(a, b, c) : m.findKey(a, b, c)), void 0 !== d && -1 !== d ? a[d] : void 0;
            }),
            (m.filter = m.select = function (a, b, c) {
                var d = [];
                return (
                    (b = o(b, c)),
                    m.each(a, function (a, c, e) {
                        b(a, c, e) && d.push(a);
                    }),
                    d
                );
            }),
            (m.reject = function (a, b, c) {
                return m.filter(a, m.negate(o(b)), c);
            }),
            (m.every = m.all = function (a, b, c) {
                b = o(b, c);
                for (var d = !u(a) && m.keys(a), e = (d || a).length, f = 0; e > f; f++) {
                    var g = d ? d[f] : f;
                    if (!b(a[g], g, a)) return !1;
                }
                return !0;
            }),
            (m.some = m.any = function (a, b, c) {
                b = o(b, c);
                for (var d = !u(a) && m.keys(a), e = (d || a).length, f = 0; e > f; f++) {
                    var g = d ? d[f] : f;
                    if (b(a[g], g, a)) return !0;
                }
                return !1;
            }),
            (m.contains = m.includes = m.include = function (a, b, c, d) {
                return u(a) || (a = m.values(a)), ("number" != typeof c || d) && (c = 0), m.indexOf(a, b, c) >= 0;
            }),
            (m.invoke = p(function (a, b, c) {
                var d = m.isFunction(b);
                return m.map(a, function (a) {
                    var e = d ? b : a[b];
                    return null == e ? e : e.apply(a, c);
                });
            })),
            (m.pluck = function (a, b) {
                return m.map(a, m.property(b));
            }),
            (m.where = function (a, b) {
                return m.filter(a, m.matcher(b));
            }),
            (m.findWhere = function (a, b) {
                return m.find(a, m.matcher(b));
            }),
            (m.max = function (a, b, c) {
                var d,
                    e,
                    f = -(1 / 0),
                    g = -(1 / 0);
                if (null == b && null != a) {
                    a = u(a) ? a : m.values(a);
                    for (var h = 0, i = a.length; i > h; h++) (d = a[h]), d > f && (f = d);
                } else
                    (b = o(b, c)),
                        m.each(a, function (a, c, d) {
                            (e = b(a, c, d)), (e > g || (e === -(1 / 0) && f === -(1 / 0))) && ((f = a), (g = e));
                        });
                return f;
            }),
            (m.min = function (a, b, c) {
                var d,
                    e,
                    f = 1 / 0,
                    g = 1 / 0;
                if (null == b && null != a) {
                    a = u(a) ? a : m.values(a);
                    for (var h = 0, i = a.length; i > h; h++) (d = a[h]), f > d && (f = d);
                } else
                    (b = o(b, c)),
                        m.each(a, function (a, c, d) {
                            (e = b(a, c, d)), (g > e || (e === 1 / 0 && f === 1 / 0)) && ((f = a), (g = e));
                        });
                return f;
            }),
            (m.shuffle = function (a) {
                return m.sample(a, 1 / 0);
            }),
            (m.sample = function (a, b, c) {
                if (null == b || c) return u(a) || (a = m.values(a)), a[m.random(a.length - 1)];
                var d = u(a) ? m.clone(a) : m.values(a),
                    e = t(d);
                b = Math.max(Math.min(b, e), 0);
                for (var f = e - 1, g = 0; b > g; g++) {
                    var h = m.random(g, f),
                        i = d[g];
                    (d[g] = d[h]), (d[h] = i);
                }
                return d.slice(0, b);
            }),
            (m.sortBy = function (a, b, c) {
                return (
                    (b = o(b, c)),
                    m.pluck(
                        m
                            .map(a, function (a, c, d) {
                                return { value: a, index: c, criteria: b(a, c, d) };
                            })
                            .sort(function (a, b) {
                                var c = a.criteria,
                                    d = b.criteria;
                                if (c !== d) {
                                    if (c > d || void 0 === c) return 1;
                                    if (d > c || void 0 === d) return -1;
                                }
                                return a.index - b.index;
                            }),
                        "value"
                    )
                );
            });
        var w = function (a, b) {
            return function (c, d, e) {
                var f = b ? [[], []] : {};
                return (
                    (d = o(d, e)),
                    m.each(c, function (b, e) {
                        var g = d(b, e, c);
                        a(f, b, g);
                    }),
                    f
                );
            };
        };
        (m.groupBy = w(function (a, b, c) {
            m.has(a, c) ? a[c].push(b) : (a[c] = [b]);
        })),
            (m.indexBy = w(function (a, b, c) {
                a[c] = b;
            })),
            (m.countBy = w(function (a, b, c) {
                m.has(a, c) ? a[c]++ : (a[c] = 1);
            })),
            (m.toArray = function (a) {
                return a ? (m.isArray(a) ? f.call(a) : u(a) ? m.map(a, m.identity) : m.values(a)) : [];
            }),
            (m.size = function (a) {
                return null == a ? 0 : u(a) ? a.length : m.keys(a).length;
            }),
            (m.partition = w(function (a, b, c) {
                a[c ? 0 : 1].push(b);
            }, !0)),
            (m.first = m.head = m.take = function (a, b, c) {
                return null == a ? void 0 : null == b || c ? a[0] : m.initial(a, a.length - b);
            }),
            (m.initial = function (a, b, c) {
                return f.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)));
            }),
            (m.last = function (a, b, c) {
                return null == a ? void 0 : null == b || c ? a[a.length - 1] : m.rest(a, Math.max(0, a.length - b));
            }),
            (m.rest = m.tail = m.drop = function (a, b, c) {
                return f.call(a, null == b || c ? 1 : b);
            }),
            (m.compact = function (a) {
                return m.filter(a, m.identity);
            });
        var x = function (a, b, c, d) {
            d = d || [];
            for (var e = d.length, f = 0, g = t(a); g > f; f++) {
                var h = a[f];
                if (u(h) && (m.isArray(h) || m.isArguments(h)))
                    if (b) for (var i = 0, j = h.length; j > i; ) d[e++] = h[i++];
                    else x(h, b, c, d), (e = d.length);
                else c || (d[e++] = h);
            }
            return d;
        };
        (m.flatten = function (a, b) {
            return x(a, b, !1);
        }),
            (m.without = p(function (a, b) {
                return m.difference(a, b);
            })),
            (m.uniq = m.unique = function (a, b, c, d) {
                m.isBoolean(b) || ((d = c), (c = b), (b = !1)), null != c && (c = o(c, d));
                for (var e = [], f = [], g = 0, h = t(a); h > g; g++) {
                    var i = a[g],
                        j = c ? c(i, g, a) : i;
                    b ? ((g && f === j) || e.push(i), (f = j)) : c ? m.contains(f, j) || (f.push(j), e.push(i)) : m.contains(e, i) || e.push(i);
                }
                return e;
            }),
            (m.union = p(function (a) {
                return m.uniq(x(a, !0, !0));
            })),
            (m.intersection = function (a) {
                for (var b = [], c = arguments.length, d = 0, e = t(a); e > d; d++) {
                    var f = a[d];
                    if (!m.contains(b, f)) {
                        var g;
                        for (g = 1; c > g && m.contains(arguments[g], f); g++);
                        g === c && b.push(f);
                    }
                }
                return b;
            }),
            (m.difference = p(function (a, b) {
                return (
                    (b = x(b, !0, !0)),
                    m.filter(a, function (a) {
                        return !m.contains(b, a);
                    })
                );
            })),
            (m.unzip = function (a) {
                for (var b = (a && m.max(a, t).length) || 0, c = Array(b), d = 0; b > d; d++) c[d] = m.pluck(a, d);
                return c;
            }),
            (m.zip = p(m.unzip)),
            (m.object = function (a, b) {
                for (var c = {}, d = 0, e = t(a); e > d; d++) b ? (c[a[d]] = b[d]) : (c[a[d][0]] = a[d][1]);
                return c;
            });
        var y = function (a) {
            return function (b, c, d) {
                c = o(c, d);
                for (var e = t(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a) if (c(b[f], f, b)) return f;
                return -1;
            };
        };
        (m.findIndex = y(1)),
            (m.findLastIndex = y(-1)),
            (m.sortedIndex = function (a, b, c, d) {
                c = o(c, d, 1);
                for (var e = c(b), f = 0, g = t(a); g > f; ) {
                    var h = Math.floor((f + g) / 2);
                    c(a[h]) < e ? (f = h + 1) : (g = h);
                }
                return f;
            });
        var z = function (a, b, c) {
            return function (d, e, g) {
                var h = 0,
                    i = t(d);
                if ("number" == typeof g) a > 0 ? (h = g >= 0 ? g : Math.max(g + i, h)) : (i = g >= 0 ? Math.min(g + 1, i) : g + i + 1);
                else if (c && g && i) return (g = c(d, e)), d[g] === e ? g : -1;
                if (e !== e) return (g = b(f.call(d, h, i), m.isNaN)), g >= 0 ? g + h : -1;
                for (g = a > 0 ? h : i - 1; g >= 0 && i > g; g += a) if (d[g] === e) return g;
                return -1;
            };
        };
        (m.indexOf = z(1, m.findIndex, m.sortedIndex)),
            (m.lastIndexOf = z(-1, m.findLastIndex)),
            (m.range = function (a, b, c) {
                null == b && ((b = a || 0), (a = 0)), (c = c || 1);
                for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
                return e;
            });
        var A = function (a, b, c, d, e) {
            if (!(d instanceof b)) return a.apply(c, e);
            var f = q(a.prototype),
                g = a.apply(f, e);
            return m.isObject(g) ? g : f;
        };
        (m.bind = p(function (a, b, c) {
            if (!m.isFunction(a)) throw new TypeError("Bind must be called on a function");
            var d = p(function (e) {
                return A(a, d, b, this, c.concat(e));
            });
            return d;
        })),
            (m.partial = p(function (a, b) {
                var c = m.partial.placeholder,
                    d = function () {
                        for (var e = 0, f = b.length, g = Array(f), h = 0; f > h; h++) g[h] = b[h] === c ? arguments[e++] : b[h];
                        for (; e < arguments.length; ) g.push(arguments[e++]);
                        return A(a, d, this, this, g);
                    };
                return d;
            })),
            (m.partial.placeholder = m),
            (m.bindAll = p(function (a, b) {
                b = x(b, !1, !1);
                var c = b.length;
                if (1 > c) throw new Error("bindAll must be passed function names");
                for (; c--; ) {
                    var d = b[c];
                    a[d] = m.bind(a[d], a);
                }
            })),
            (m.memoize = function (a, b) {
                var c = function (d) {
                    var e = c.cache,
                        f = "" + (b ? b.apply(this, arguments) : d);
                    return m.has(e, f) || (e[f] = a.apply(this, arguments)), e[f];
                };
                return (c.cache = {}), c;
            }),
            (m.delay = p(function (a, b, c) {
                return setTimeout(function () {
                    return a.apply(null, c);
                }, b);
            })),
            (m.defer = m.partial(m.delay, m, 1)),
            (m.throttle = function (a, b, c) {
                var d,
                    e,
                    f,
                    g = null,
                    h = 0;
                c || (c = {});
                var i = function () {
                    (h = c.leading === !1 ? 0 : m.now()), (g = null), (f = a.apply(d, e)), g || (d = e = null);
                };
                return function () {
                    var j = m.now();
                    h || c.leading !== !1 || (h = j);
                    var k = b - (j - h);
                    return (d = this), (e = arguments), 0 >= k || k > b ? (g && (clearTimeout(g), (g = null)), (h = j), (f = a.apply(d, e)), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f;
                };
            }),
            (m.debounce = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = function () {
                        var j = m.now() - g;
                        b > j && j >= 0 ? (d = setTimeout(i, b - j)) : ((d = null), c || ((h = a.apply(f, e)), d || (f = e = null)));
                    };
                return function () {
                    (f = this), (e = arguments), (g = m.now());
                    var j = c && !d;
                    return d || (d = setTimeout(i, b)), j && ((h = a.apply(f, e)), (f = e = null)), h;
                };
            }),
            (m.wrap = function (a, b) {
                return m.partial(b, a);
            }),
            (m.negate = function (a) {
                return function () {
                    return !a.apply(this, arguments);
                };
            }),
            (m.compose = function () {
                var a = arguments,
                    b = a.length - 1;
                return function () {
                    for (var c = b, d = a[b].apply(this, arguments); c--; ) d = a[c].call(this, d);
                    return d;
                };
            }),
            (m.after = function (a, b) {
                return function () {
                    return --a < 1 ? b.apply(this, arguments) : void 0;
                };
            }),
            (m.before = function (a, b) {
                var c;
                return function () {
                    return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c;
                };
            }),
            (m.once = m.partial(m.before, 2)),
            (m.restArgs = p);
        var B = !{ toString: null }.propertyIsEnumerable("toString"),
            C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
            D = function (a, b) {
                var c = C.length,
                    e = a.constructor,
                    f = (m.isFunction(e) && e.prototype) || d,
                    g = "constructor";
                for (m.has(a, g) && !m.contains(b, g) && b.push(g); c--; ) (g = C[c]), g in a && a[g] !== f[g] && !m.contains(b, g) && b.push(g);
            };
        (m.keys = function (a) {
            if (!m.isObject(a)) return [];
            if (j) return j(a);
            var b = [];
            for (var c in a) m.has(a, c) && b.push(c);
            return B && D(a, b), b;
        }),
            (m.allKeys = function (a) {
                if (!m.isObject(a)) return [];
                var b = [];
                for (var c in a) b.push(c);
                return B && D(a, b), b;
            }),
            (m.values = function (a) {
                for (var b = m.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
                return d;
            }),
            (m.mapObject = function (a, b, c) {
                b = o(b, c);
                for (var d = m.keys(a), e = d.length, f = {}, g = 0; e > g; g++) {
                    var h = d[g];
                    f[h] = b(a[h], h, a);
                }
                return f;
            }),
            (m.pairs = function (a) {
                for (var b = m.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
                return d;
            }),
            (m.invert = function (a) {
                for (var b = {}, c = m.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
                return b;
            }),
            (m.functions = m.methods = function (a) {
                var b = [];
                for (var c in a) m.isFunction(a[c]) && b.push(c);
                return b.sort();
            });
        var E = function (a, b) {
            return function (c) {
                var d = arguments.length;
                if (2 > d || null == c) return c;
                for (var e = 1; d > e; e++)
                    for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                        var j = g[i];
                        (b && void 0 !== c[j]) || (c[j] = f[j]);
                    }
                return c;
            };
        };
        (m.extend = E(m.allKeys)),
            (m.extendOwn = m.assign = E(m.keys)),
            (m.findKey = function (a, b, c) {
                b = o(b, c);
                for (var d, e = m.keys(a), f = 0, g = e.length; g > f; f++) if (((d = e[f]), b(a[d], d, a))) return d;
            });
        var F = function (a, b, c) {
            return b in c;
        };
        (m.pick = p(function (a, b) {
            var c = {},
                d = b[0];
            if (null == a) return c;
            m.isFunction(d) ? (b.length > 1 && (d = n(d, b[1])), (b = m.allKeys(a))) : ((d = F), (b = x(b, !1, !1)), (a = Object(a)));
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = a[g];
                d(h, g, a) && (c[g] = h);
            }
            return c;
        })),
            (m.omit = p(function (a, b) {
                var c,
                    d = b[0];
                return (
                    m.isFunction(d)
                        ? ((d = m.negate(d)), b.length > 1 && (c = b[1]))
                        : ((b = m.map(x(b, !1, !1), String)),
                          (d = function (a, c) {
                              return !m.contains(b, c);
                          })),
                    m.pick(a, d, c)
                );
            })),
            (m.defaults = E(m.allKeys, !0)),
            (m.create = function (a, b) {
                var c = q(a);
                return b && m.extendOwn(c, b), c;
            }),
            (m.clone = function (a) {
                return m.isObject(a) ? (m.isArray(a) ? a.slice() : m.extend({}, a)) : a;
            }),
            (m.tap = function (a, b) {
                return b(a), a;
            }),
            (m.isMatch = function (a, b) {
                var c = m.keys(b),
                    d = c.length;
                if (null == a) return !d;
                for (var e = Object(a), f = 0; d > f; f++) {
                    var g = c[f];
                    if (b[g] !== e[g] || !(g in e)) return !1;
                }
                return !0;
            });
        var G, H;
        (G = function (a, b, c, d) {
            if (a === b) return 0 !== a || 1 / a === 1 / b;
            if (null == a || null == b) return a === b;
            if (a !== a) return b !== b;
            var e = typeof a;
            return "function" !== e && "object" !== e && "object" != typeof b ? !1 : H(a, b, c, d);
        }),
            (H = function (a, b, c, d) {
                a instanceof m && (a = a._wrapped), b instanceof m && (b = b._wrapped);
                var e = g.call(a);
                if (e !== g.call(b)) return !1;
                switch (e) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + a == "" + b;
                    case "[object Number]":
                        return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +a === +b;
                }
                var f = "[object Array]" === e;
                if (!f) {
                    if ("object" != typeof a || "object" != typeof b) return !1;
                    var h = a.constructor,
                        i = b.constructor;
                    if (h !== i && !(m.isFunction(h) && h instanceof h && m.isFunction(i) && i instanceof i) && "constructor" in a && "constructor" in b) return !1;
                }
                (c = c || []), (d = d || []);
                for (var j = c.length; j--; ) if (c[j] === a) return d[j] === b;
                if ((c.push(a), d.push(b), f)) {
                    if (((j = a.length), j !== b.length)) return !1;
                    for (; j--; ) if (!G(a[j], b[j], c, d)) return !1;
                } else {
                    var k,
                        l = m.keys(a);
                    if (((j = l.length), m.keys(b).length !== j)) return !1;
                    for (; j--; ) if (((k = l[j]), !m.has(b, k) || !G(a[k], b[k], c, d))) return !1;
                }
                return c.pop(), d.pop(), !0;
            }),
            (m.isEqual = function (a, b) {
                return G(a, b);
            }),
            (m.isEmpty = function (a) {
                return null == a ? !0 : u(a) && (m.isArray(a) || m.isString(a) || m.isArguments(a)) ? 0 === a.length : 0 === m.keys(a).length;
            }),
            (m.isElement = function (a) {
                return !(!a || 1 !== a.nodeType);
            }),
            (m.isArray =
                i ||
                function (a) {
                    return "[object Array]" === g.call(a);
                }),
            (m.isObject = function (a) {
                var b = typeof a;
                return "function" === b || ("object" === b && !!a);
            }),
            m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (a) {
                m["is" + a] = function (b) {
                    return g.call(b) === "[object " + a + "]";
                };
            }),
            m.isArguments(arguments) ||
                (m.isArguments = function (a) {
                    return m.has(a, "callee");
                }),
            "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                (m.isFunction = function (a) {
                    return "function" == typeof a || !1;
                }),
            (m.isFinite = function (a) {
                return isFinite(a) && !isNaN(parseFloat(a));
            }),
            (m.isNaN = function (a) {
                return m.isNumber(a) && a !== +a;
            }),
            (m.isBoolean = function (a) {
                return a === !0 || a === !1 || "[object Boolean]" === g.call(a);
            }),
            (m.isNull = function (a) {
                return null === a;
            }),
            (m.isUndefined = function (a) {
                return void 0 === a;
            }),
            (m.has = function (a, b) {
                return null != a && h.call(a, b);
            }),
            (m.noConflict = function () {
                return (a._ = b), this;
            }),
            (m.identity = function (a) {
                return a;
            }),
            (m.constant = function (a) {
                return function () {
                    return a;
                };
            }),
            (m.noop = function () {}),
            (m.property = r),
            (m.propertyOf = function (a) {
                return null == a
                    ? function () {}
                    : function (b) {
                          return a[b];
                      };
            }),
            (m.matcher = m.matches = function (a) {
                return (
                    (a = m.extendOwn({}, a)),
                    function (b) {
                        return m.isMatch(b, a);
                    }
                );
            }),
            (m.times = function (a, b, c) {
                var d = Array(Math.max(0, a));
                b = n(b, c, 1);
                for (var e = 0; a > e; e++) d[e] = b(e);
                return d;
            }),
            (m.random = function (a, b) {
                return null == b && ((b = a), (a = 0)), a + Math.floor(Math.random() * (b - a + 1));
            }),
            (m.now =
                Date.now ||
                function () {
                    return new Date().getTime();
                });
        var I = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            J = m.invert(I),
            K = function (a) {
                var b = function (b) {
                        return a[b];
                    },
                    c = "(?:" + m.keys(a).join("|") + ")",
                    d = RegExp(c),
                    e = RegExp(c, "g");
                return function (a) {
                    return (a = null == a ? "" : "" + a), d.test(a) ? a.replace(e, b) : a;
                };
            };
        (m.escape = K(I)),
            (m.unescape = K(J)),
            (m.result = function (a, b, c) {
                var d = null == a ? void 0 : a[b];
                return void 0 === d && (d = c), m.isFunction(d) ? d.call(a) : d;
            });
        var L = 0;
        (m.uniqueId = function (a) {
            var b = ++L + "";
            return a ? a + b : b;
        }),
            (m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
        var M = /(.)^/,
            N = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            O = /\\|'|\r|\n|\u2028|\u2029/g,
            P = function (a) {
                return "\\" + N[a];
            };
        (m.template = function (a, b, c) {
            !b && c && (b = c), (b = m.defaults({}, b, m.templateSettings));
            var d = RegExp([(b.escape || M).source, (b.interpolate || M).source, (b.evaluate || M).source].join("|") + "|$", "g"),
                e = 0,
                f = "__p+='";
            a.replace(d, function (b, c, d, g, h) {
                return (f += a.slice(e, h).replace(O, P)), (e = h + b.length), c ? (f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'") : d ? (f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'") : g && (f += "';\n" + g + "\n__p+='"), b;
            }),
                (f += "';\n"),
                b.variable || (f = "with(obj||{}){\n" + f + "}\n"),
                (f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n");
            var g;
            try {
                g = new Function(b.variable || "obj", "_", f);
            } catch (h) {
                throw ((h.source = f), h);
            }
            var i = function (a) {
                    return g.call(this, a, m);
                },
                j = b.variable || "obj";
            return (i.source = "function(" + j + "){\n" + f + "}"), i;
        }),
            (m.chain = function (a) {
                var b = m(a);
                return (b._chain = !0), b;
            });
        var Q = function (a, b) {
            return a._chain ? m(b).chain() : b;
        };
        (m.mixin = function (a) {
            m.each(m.functions(a), function (b) {
                var c = (m[b] = a[b]);
                m.prototype[b] = function () {
                    var a = [this._wrapped];
                    return e.apply(a, arguments), Q(this, c.apply(m, a));
                };
            });
        }),
            m.mixin(m),
            m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
                var b = c[a];
                m.prototype[a] = function () {
                    var c = this._wrapped;
                    return b.apply(c, arguments), ("shift" !== a && "splice" !== a) || 0 !== c.length || delete c[0], Q(this, c);
                };
            }),
            m.each(["concat", "join", "slice"], function (a) {
                var b = c[a];
                m.prototype[a] = function () {
                    return Q(this, b.apply(this._wrapped, arguments));
                };
            }),
            (m.prototype.value = function () {
                return this._wrapped;
            }),
            (m.prototype.valueOf = m.prototype.toJSON = m.prototype.value),
            (m.prototype.toString = function () {
                return "" + this._wrapped;
            }),
            "function" == typeof define &&
                define.amd &&
                define("underscore", [], function () {
                    return m;
                });
    })(),
    (function (a, b) {
        "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? (module.exports = b()) : (a.Handlebars = b());
    })(this, function () {
        var a = (function () {
                "use strict";
                function a(a) {
                    return i[a];
                }
                function b(a) {
                    for (var b = 1; b < arguments.length; b++) for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                    return a;
                }
                function c(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                    return -1;
                }
                function d(b) {
                    return b && b.toHTML ? b.toHTML() : null == b ? "" : b ? ((b = "" + b), k.test(b) ? b.replace(j, a) : b) : b + "";
                }
                function e(a) {
                    return a || 0 === a ? (n(a) && 0 === a.length ? !0 : !1) : !0;
                }
                function f(a, b) {
                    return (a.path = b), a;
                }
                function g(a, b) {
                    return (a ? a + "." : "") + b;
                }
                var h = {},
                    i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                    j = /[&<>"'`]/g,
                    k = /[&<>"'`]/;
                h.extend = b;
                var l = Object.prototype.toString;
                h.toString = l;
                var m = function (a) {
                    return "function" == typeof a;
                };
                m(/x/) &&
                    (m = function (a) {
                        return "function" == typeof a && "[object Function]" === l.call(a);
                    });
                var m;
                h.isFunction = m;
                var n =
                    Array.isArray ||
                    function (a) {
                        return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1;
                    };
                return (h.isArray = n), (h.indexOf = c), (h.escapeExpression = d), (h.isEmpty = e), (h.blockParams = f), (h.appendContextPath = g), h;
            })(),
            b = (function () {
                "use strict";
                function a(a, b) {
                    var d,
                        e,
                        f = b && b.loc;
                    f && ((d = f.start.line), (e = f.start.column), (a += " - " + d + ":" + e));
                    for (var g = Error.prototype.constructor.call(this, a), h = 0; h < c.length; h++) this[c[h]] = g[c[h]];
                    f && ((this.lineNumber = d), (this.column = e));
                }
                var b,
                    c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                return (a.prototype = new Error()), (b = a);
            })(),
            c = (function (a, b) {
                "use strict";
                function c(a, b) {
                    (this.helpers = a || {}), (this.partials = b || {}), d(this);
                }
                function d(a) {
                    a.registerHelper("helperMissing", function () {
                        if (1 === arguments.length) return void 0;
                        throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'");
                    }),
                        a.registerHelper("blockHelperMissing", function (b, c) {
                            var d = c.inverse,
                                e = c.fn;
                            if (b === !0) return e(this);
                            if (b === !1 || null == b) return d(this);
                            if (k(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
                            if (c.data && c.ids) {
                                var g = q(c.data);
                                (g.contextPath = f.appendContextPath(c.data.contextPath, c.name)), (c = { data: g });
                            }
                            return e(b, c);
                        }),
                        a.registerHelper("each", function (a, b) {
                            function c(b, c, g) {
                                d && ((d.key = b), (d.index = c), (d.first = 0 === c), (d.last = !!g), e && (d.contextPath = e + b)), (m += h(a[b], { data: d, blockParams: f.blockParams([a[b], b], [e + b, null]) }));
                            }
                            if (!b) throw new g("Must pass iterator to #each");
                            var d,
                                e,
                                h = b.fn,
                                i = b.inverse,
                                j = 0,
                                m = "";
                            if ((b.data && b.ids && (e = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), l(a) && (a = a.call(this)), b.data && (d = q(b.data)), a && "object" == typeof a))
                                if (k(a)) for (var n = a.length; n > j; j++) c(j, j, j === a.length - 1);
                                else {
                                    var o;
                                    for (var p in a) a.hasOwnProperty(p) && (o && c(o, j - 1), (o = p), j++);
                                    o && c(o, j - 1, !0);
                                }
                            return 0 === j && (m = i(this)), m;
                        }),
                        a.registerHelper("if", function (a, b) {
                            return l(a) && (a = a.call(this)), (!b.hash.includeZero && !a) || f.isEmpty(a) ? b.inverse(this) : b.fn(this);
                        }),
                        a.registerHelper("unless", function (b, c) {
                            return a.helpers["if"].call(this, b, { fn: c.inverse, inverse: c.fn, hash: c.hash });
                        }),
                        a.registerHelper("with", function (a, b) {
                            l(a) && (a = a.call(this));
                            var c = b.fn;
                            if (f.isEmpty(a)) return b.inverse(this);
                            if (b.data && b.ids) {
                                var d = q(b.data);
                                (d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0])), (b = { data: d });
                            }
                            return c(a, b);
                        }),
                        a.registerHelper("log", function (b, c) {
                            var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                            a.log(d, b);
                        }),
                        a.registerHelper("lookup", function (a, b) {
                            return a && a[b];
                        });
                }
                var e = {},
                    f = a,
                    g = b,
                    h = "3.0.0";
                e.VERSION = h;
                var i = 6;
                e.COMPILER_REVISION = i;
                var j = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1" };
                e.REVISION_CHANGES = j;
                var k = f.isArray,
                    l = f.isFunction,
                    m = f.toString,
                    n = "[object Object]";
                (e.HandlebarsEnvironment = c),
                    (c.prototype = {
                        constructor: c,
                        logger: o,
                        log: p,
                        registerHelper: function (a, b) {
                            if (m.call(a) === n) {
                                if (b) throw new g("Arg not supported with multiple helpers");
                                f.extend(this.helpers, a);
                            } else this.helpers[a] = b;
                        },
                        unregisterHelper: function (a) {
                            delete this.helpers[a];
                        },
                        registerPartial: function (a, b) {
                            if (m.call(a) === n) f.extend(this.partials, a);
                            else {
                                if ("undefined" == typeof b) throw new g("Attempting to register a partial as undefined");
                                this.partials[a] = b;
                            }
                        },
                        unregisterPartial: function (a) {
                            delete this.partials[a];
                        },
                    });
                var o = {
                    methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 1,
                    log: function (a, b) {
                        if ("undefined" != typeof console && o.level <= a) {
                            var c = o.methodMap[a];
                            (console[c] || console.log).call(console, b);
                        }
                    },
                };
                e.logger = o;
                var p = o.log;
                e.log = p;
                var q = function (a) {
                    var b = f.extend({}, a);
                    return (b._parent = a), b;
                };
                return (e.createFrame = q), e;
            })(a, b),
            d = (function () {
                "use strict";
                function a(a) {
                    this.string = a;
                }
                var b;
                return (
                    (a.prototype.toString = a.prototype.toHTML = function () {
                        return "" + this.string;
                    }),
                    (b = a)
                );
            })(),
            e = (function (a, b, c) {
                "use strict";
                function d(a) {
                    var b = (a && a[0]) || 1,
                        c = n;
                    if (b !== c) {
                        if (c > b) {
                            var d = o[c],
                                e = o[b];
                            throw new m(
                                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                                    d +
                                    ") or downgrade your runtime to an older version (" +
                                    e +
                                    ")."
                            );
                        }
                        throw new m("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
                    }
                }
                function e(a, b) {
                    if (!b) throw new m("No environment passed to template");
                    if (!a || !a.main) throw new m("Unknown template object: " + typeof a);
                    b.VM.checkRevision(a.compiler);
                    var c = function (c, d, e) {
                            e.hash && (d = l.extend({}, d, e.hash)), (c = b.VM.resolvePartial.call(this, c, d, e));
                            var f = b.VM.invokePartial.call(this, c, d, e);
                            if ((null == f && b.compile && ((e.partials[e.name] = b.compile(c, a.compilerOptions, b)), (f = e.partials[e.name](d, e))), null != f)) {
                                if (e.indent) {
                                    for (var g = f.split("\n"), h = 0, i = g.length; i > h && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                                    f = g.join("\n");
                                }
                                return f;
                            }
                            throw new m("The partial " + e.name + " could not be compiled when running in runtime-only mode");
                        },
                        d = {
                            strict: function (a, b) {
                                if (!(b in a)) throw new m('"' + b + '" not defined in ' + a);
                                return a[b];
                            },
                            lookup: function (a, b) {
                                for (var c = a.length, d = 0; c > d; d++) if (a[d] && null != a[d][b]) return a[d][b];
                            },
                            lambda: function (a, b) {
                                return "function" == typeof a ? a.call(b) : a;
                            },
                            escapeExpression: l.escapeExpression,
                            invokePartial: c,
                            fn: function (b) {
                                return a[b];
                            },
                            programs: [],
                            program: function (a, b, c, d, e) {
                                var g = this.programs[a],
                                    h = this.fn(a);
                                return b || e || d || c ? (g = f(this, a, h, b, c, d, e)) : g || (g = this.programs[a] = f(this, a, h)), g;
                            },
                            data: function (a, b) {
                                for (; a && b--; ) a = a._parent;
                                return a;
                            },
                            merge: function (a, b) {
                                var c = a || b;
                                return a && b && a !== b && (c = l.extend({}, b, a)), c;
                            },
                            noop: b.VM.noop,
                            compilerInfo: a.compiler,
                        },
                        e = function (b, c) {
                            c = c || {};
                            var f = c.data;
                            e._setup(c), !c.partial && a.useData && (f = j(b, f));
                            var g,
                                h = a.useBlockParams ? [] : void 0;
                            return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(d, b, d.helpers, d.partials, f, h, g);
                        };
                    return (
                        (e.isTop = !0),
                        (e._setup = function (c) {
                            c.partial ? ((d.helpers = c.helpers), (d.partials = c.partials)) : ((d.helpers = d.merge(c.helpers, b.helpers)), a.usePartial && (d.partials = d.merge(c.partials, b.partials)));
                        }),
                        (e._child = function (b, c, e, g) {
                            if (a.useBlockParams && !e) throw new m("must pass block params");
                            if (a.useDepths && !g) throw new m("must pass parent depths");
                            return f(d, b, a[b], c, 0, e, g);
                        }),
                        e
                    );
                }
                function f(a, b, c, d, e, f, g) {
                    var h = function (b, e) {
                        return (e = e || {}), c.call(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), g && [b].concat(g));
                    };
                    return (h.program = b), (h.depth = g ? g.length : 0), (h.blockParams = e || 0), h;
                }
                function g(a, b, c) {
                    return a ? a.call || c.name || ((c.name = a), (a = c.partials[a])) : (a = c.partials[c.name]), a;
                }
                function h(a, b, c) {
                    if (((c.partial = !0), void 0 === a)) throw new m("The partial " + c.name + " could not be found");
                    return a instanceof Function ? a(b, c) : void 0;
                }
                function i() {
                    return "";
                }
                function j(a, b) {
                    return (b && "root" in b) || ((b = b ? p(b) : {}), (b.root = a)), b;
                }
                var k = {},
                    l = a,
                    m = b,
                    n = c.COMPILER_REVISION,
                    o = c.REVISION_CHANGES,
                    p = c.createFrame;
                return (k.checkRevision = d), (k.template = e), (k.program = f), (k.resolvePartial = g), (k.invokePartial = h), (k.noop = i), k;
            })(a, b, c),
            f = (function (a, b, c, d, e) {
                "use strict";
                var f,
                    g = a,
                    h = b,
                    i = c,
                    j = d,
                    k = e,
                    l = function () {
                        var a = new g.HandlebarsEnvironment();
                        return (
                            j.extend(a, g),
                            (a.SafeString = h),
                            (a.Exception = i),
                            (a.Utils = j),
                            (a.escapeExpression = j.escapeExpression),
                            (a.VM = k),
                            (a.template = function (b) {
                                return k.template(b, a);
                            }),
                            a
                        );
                    },
                    m = l();
                m.create = l;
                var n = "undefined" != typeof global ? global : window,
                    o = n.Handlebars;
                return (
                    (m.noConflict = function () {
                        n.Handlebars === m && (n.Handlebars = o);
                    }),
                    (m["default"] = m),
                    (f = m)
                );
            })(c, d, b, a, e),
            g = (function () {
                "use strict";
                var a,
                    b = {
                        Program: function (a, b, c, d) {
                            (this.loc = d), (this.type = "Program"), (this.body = a), (this.blockParams = b), (this.strip = c);
                        },
                        MustacheStatement: function (a, b, c, d, e, f) {
                            (this.loc = f), (this.type = "MustacheStatement"), (this.path = a), (this.params = b || []), (this.hash = c), (this.escaped = d), (this.strip = e);
                        },
                        BlockStatement: function (a, b, c, d, e, f, g, h, i) {
                            (this.loc = i),
                                (this.type = "BlockStatement"),
                                (this.path = a),
                                (this.params = b || []),
                                (this.hash = c),
                                (this.program = d),
                                (this.inverse = e),
                                (this.openStrip = f),
                                (this.inverseStrip = g),
                                (this.closeStrip = h);
                        },
                        PartialStatement: function (a, b, c, d, e) {
                            (this.loc = e), (this.type = "PartialStatement"), (this.name = a), (this.params = b || []), (this.hash = c), (this.indent = ""), (this.strip = d);
                        },
                        ContentStatement: function (a, b) {
                            (this.loc = b), (this.type = "ContentStatement"), (this.original = this.value = a);
                        },
                        CommentStatement: function (a, b, c) {
                            (this.loc = c), (this.type = "CommentStatement"), (this.value = a), (this.strip = b);
                        },
                        SubExpression: function (a, b, c, d) {
                            (this.loc = d), (this.type = "SubExpression"), (this.path = a), (this.params = b || []), (this.hash = c);
                        },
                        PathExpression: function (a, b, c, d, e) {
                            (this.loc = e), (this.type = "PathExpression"), (this.data = a), (this.original = d), (this.parts = c), (this.depth = b);
                        },
                        StringLiteral: function (a, b) {
                            (this.loc = b), (this.type = "StringLiteral"), (this.original = this.value = a);
                        },
                        NumberLiteral: function (a, b) {
                            (this.loc = b), (this.type = "NumberLiteral"), (this.original = this.value = Number(a));
                        },
                        BooleanLiteral: function (a, b) {
                            (this.loc = b), (this.type = "BooleanLiteral"), (this.original = this.value = "true" === a);
                        },
                        Hash: function (a, b) {
                            (this.loc = b), (this.type = "Hash"), (this.pairs = a);
                        },
                        HashPair: function (a, b, c) {
                            (this.loc = c), (this.type = "HashPair"), (this.key = a), (this.value = b);
                        },
                        helpers: {
                            helperExpression: function (a) {
                                return !("SubExpression" !== a.type && !a.params.length && !a.hash);
                            },
                            scopedId: function (a) {
                                return /^\.|this\b/.test(a.original);
                            },
                            simpleId: function (a) {
                                return 1 === a.parts.length && !b.helpers.scopedId(a) && !a.depth;
                            },
                        },
                    };
                return (a = b);
            })(),
            h = (function () {
                "use strict";
                var a,
                    b = (function () {
                        function a() {
                            this.yy = {};
                        }
                        var b = {
                                trace: function () {},
                                yy: {},
                                symbols_: {
                                    error: 2,
                                    root: 3,
                                    program: 4,
                                    EOF: 5,
                                    program_repetition0: 6,
                                    statement: 7,
                                    mustache: 8,
                                    block: 9,
                                    rawBlock: 10,
                                    partial: 11,
                                    content: 12,
                                    COMMENT: 13,
                                    CONTENT: 14,
                                    openRawBlock: 15,
                                    END_RAW_BLOCK: 16,
                                    OPEN_RAW_BLOCK: 17,
                                    helperName: 18,
                                    openRawBlock_repetition0: 19,
                                    openRawBlock_option0: 20,
                                    CLOSE_RAW_BLOCK: 21,
                                    openBlock: 22,
                                    block_option0: 23,
                                    closeBlock: 24,
                                    openInverse: 25,
                                    block_option1: 26,
                                    OPEN_BLOCK: 27,
                                    openBlock_repetition0: 28,
                                    openBlock_option0: 29,
                                    openBlock_option1: 30,
                                    CLOSE: 31,
                                    OPEN_INVERSE: 32,
                                    openInverse_repetition0: 33,
                                    openInverse_option0: 34,
                                    openInverse_option1: 35,
                                    openInverseChain: 36,
                                    OPEN_INVERSE_CHAIN: 37,
                                    openInverseChain_repetition0: 38,
                                    openInverseChain_option0: 39,
                                    openInverseChain_option1: 40,
                                    inverseAndProgram: 41,
                                    INVERSE: 42,
                                    inverseChain: 43,
                                    inverseChain_option0: 44,
                                    OPEN_ENDBLOCK: 45,
                                    OPEN: 46,
                                    mustache_repetition0: 47,
                                    mustache_option0: 48,
                                    OPEN_UNESCAPED: 49,
                                    mustache_repetition1: 50,
                                    mustache_option1: 51,
                                    CLOSE_UNESCAPED: 52,
                                    OPEN_PARTIAL: 53,
                                    partialName: 54,
                                    partial_repetition0: 55,
                                    partial_option0: 56,
                                    param: 57,
                                    sexpr: 58,
                                    OPEN_SEXPR: 59,
                                    sexpr_repetition0: 60,
                                    sexpr_option0: 61,
                                    CLOSE_SEXPR: 62,
                                    hash: 63,
                                    hash_repetition_plus0: 64,
                                    hashSegment: 65,
                                    ID: 66,
                                    EQUALS: 67,
                                    blockParams: 68,
                                    OPEN_BLOCK_PARAMS: 69,
                                    blockParams_repetition_plus0: 70,
                                    CLOSE_BLOCK_PARAMS: 71,
                                    path: 72,
                                    dataName: 73,
                                    STRING: 74,
                                    NUMBER: 75,
                                    BOOLEAN: 76,
                                    DATA: 77,
                                    pathSegments: 78,
                                    SEP: 79,
                                    $accept: 0,
                                    $end: 1,
                                },
                                terminals_: {
                                    2: "error",
                                    5: "EOF",
                                    13: "COMMENT",
                                    14: "CONTENT",
                                    16: "END_RAW_BLOCK",
                                    17: "OPEN_RAW_BLOCK",
                                    21: "CLOSE_RAW_BLOCK",
                                    27: "OPEN_BLOCK",
                                    31: "CLOSE",
                                    32: "OPEN_INVERSE",
                                    37: "OPEN_INVERSE_CHAIN",
                                    42: "INVERSE",
                                    45: "OPEN_ENDBLOCK",
                                    46: "OPEN",
                                    49: "OPEN_UNESCAPED",
                                    52: "CLOSE_UNESCAPED",
                                    53: "OPEN_PARTIAL",
                                    59: "OPEN_SEXPR",
                                    62: "CLOSE_SEXPR",
                                    66: "ID",
                                    67: "EQUALS",
                                    69: "OPEN_BLOCK_PARAMS",
                                    71: "CLOSE_BLOCK_PARAMS",
                                    74: "STRING",
                                    75: "NUMBER",
                                    76: "BOOLEAN",
                                    77: "DATA",
                                    79: "SEP",
                                },
                                productions_: [
                                    0,
                                    [3, 2],
                                    [4, 1],
                                    [7, 1],
                                    [7, 1],
                                    [7, 1],
                                    [7, 1],
                                    [7, 1],
                                    [7, 1],
                                    [12, 1],
                                    [10, 3],
                                    [15, 5],
                                    [9, 4],
                                    [9, 4],
                                    [22, 6],
                                    [25, 6],
                                    [36, 6],
                                    [41, 2],
                                    [43, 3],
                                    [43, 1],
                                    [24, 3],
                                    [8, 5],
                                    [8, 5],
                                    [11, 5],
                                    [57, 1],
                                    [57, 1],
                                    [58, 5],
                                    [63, 1],
                                    [65, 3],
                                    [68, 3],
                                    [18, 1],
                                    [18, 1],
                                    [18, 1],
                                    [18, 1],
                                    [18, 1],
                                    [54, 1],
                                    [54, 1],
                                    [73, 2],
                                    [72, 1],
                                    [78, 3],
                                    [78, 1],
                                    [6, 0],
                                    [6, 2],
                                    [19, 0],
                                    [19, 2],
                                    [20, 0],
                                    [20, 1],
                                    [23, 0],
                                    [23, 1],
                                    [26, 0],
                                    [26, 1],
                                    [28, 0],
                                    [28, 2],
                                    [29, 0],
                                    [29, 1],
                                    [30, 0],
                                    [30, 1],
                                    [33, 0],
                                    [33, 2],
                                    [34, 0],
                                    [34, 1],
                                    [35, 0],
                                    [35, 1],
                                    [38, 0],
                                    [38, 2],
                                    [39, 0],
                                    [39, 1],
                                    [40, 0],
                                    [40, 1],
                                    [44, 0],
                                    [44, 1],
                                    [47, 0],
                                    [47, 2],
                                    [48, 0],
                                    [48, 1],
                                    [50, 0],
                                    [50, 2],
                                    [51, 0],
                                    [51, 1],
                                    [55, 0],
                                    [55, 2],
                                    [56, 0],
                                    [56, 1],
                                    [60, 0],
                                    [60, 2],
                                    [61, 0],
                                    [61, 1],
                                    [64, 1],
                                    [64, 2],
                                    [70, 1],
                                    [70, 2],
                                ],
                                performAction: function (a, b, c, d, e, f, g) {
                                    var h = f.length - 1;
                                    switch (e) {
                                        case 1:
                                            return f[h - 1];
                                        case 2:
                                            this.$ = new d.Program(f[h], null, {}, d.locInfo(this._$));
                                            break;
                                        case 3:
                                            this.$ = f[h];
                                            break;
                                        case 4:
                                            this.$ = f[h];
                                            break;
                                        case 5:
                                            this.$ = f[h];
                                            break;
                                        case 6:
                                            this.$ = f[h];
                                            break;
                                        case 7:
                                            this.$ = f[h];
                                            break;
                                        case 8:
                                            this.$ = new d.CommentStatement(d.stripComment(f[h]), d.stripFlags(f[h], f[h]), d.locInfo(this._$));
                                            break;
                                        case 9:
                                            this.$ = new d.ContentStatement(f[h], d.locInfo(this._$));
                                            break;
                                        case 10:
                                            this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                                            break;
                                        case 11:
                                            this.$ = { path: f[h - 3], params: f[h - 2], hash: f[h - 1] };
                                            break;
                                        case 12:
                                            this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                                            break;
                                        case 13:
                                            this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                                            break;
                                        case 14:
                                            this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };
                                            break;
                                        case 15:
                                            this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };
                                            break;
                                        case 16:
                                            this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };
                                            break;
                                        case 17:
                                            this.$ = { strip: d.stripFlags(f[h - 1], f[h - 1]), program: f[h] };
                                            break;
                                        case 18:
                                            var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                                                j = new d.Program([i], null, {}, d.locInfo(this._$));
                                            (j.chained = !0), (this.$ = { strip: f[h - 2].strip, program: j, chain: !0 });
                                            break;
                                        case 19:
                                            this.$ = f[h];
                                            break;
                                        case 20:
                                            this.$ = { path: f[h - 1], strip: d.stripFlags(f[h - 2], f[h]) };
                                            break;
                                        case 21:
                                            this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                            break;
                                        case 22:
                                            this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                            break;
                                        case 23:
                                            this.$ = new d.PartialStatement(f[h - 3], f[h - 2], f[h - 1], d.stripFlags(f[h - 4], f[h]), d.locInfo(this._$));
                                            break;
                                        case 24:
                                            this.$ = f[h];
                                            break;
                                        case 25:
                                            this.$ = f[h];
                                            break;
                                        case 26:
                                            this.$ = new d.SubExpression(f[h - 3], f[h - 2], f[h - 1], d.locInfo(this._$));
                                            break;
                                        case 27:
                                            this.$ = new d.Hash(f[h], d.locInfo(this._$));
                                            break;
                                        case 28:
                                            this.$ = new d.HashPair(f[h - 2], f[h], d.locInfo(this._$));
                                            break;
                                        case 29:
                                            this.$ = f[h - 1];
                                            break;
                                        case 30:
                                            this.$ = f[h];
                                            break;
                                        case 31:
                                            this.$ = f[h];
                                            break;
                                        case 32:
                                            this.$ = new d.StringLiteral(f[h], d.locInfo(this._$));
                                            break;
                                        case 33:
                                            this.$ = new d.NumberLiteral(f[h], d.locInfo(this._$));
                                            break;
                                        case 34:
                                            this.$ = new d.BooleanLiteral(f[h], d.locInfo(this._$));
                                            break;
                                        case 35:
                                            this.$ = f[h];
                                            break;
                                        case 36:
                                            this.$ = f[h];
                                            break;
                                        case 37:
                                            this.$ = d.preparePath(!0, f[h], this._$);
                                            break;
                                        case 38:
                                            this.$ = d.preparePath(!1, f[h], this._$);
                                            break;
                                        case 39:
                                            f[h - 2].push({ part: f[h], separator: f[h - 1] }), (this.$ = f[h - 2]);
                                            break;
                                        case 40:
                                            this.$ = [{ part: f[h] }];
                                            break;
                                        case 41:
                                            this.$ = [];
                                            break;
                                        case 42:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 43:
                                            this.$ = [];
                                            break;
                                        case 44:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 51:
                                            this.$ = [];
                                            break;
                                        case 52:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 57:
                                            this.$ = [];
                                            break;
                                        case 58:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 63:
                                            this.$ = [];
                                            break;
                                        case 64:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 71:
                                            this.$ = [];
                                            break;
                                        case 72:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 75:
                                            this.$ = [];
                                            break;
                                        case 76:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 79:
                                            this.$ = [];
                                            break;
                                        case 80:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 83:
                                            this.$ = [];
                                            break;
                                        case 84:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 87:
                                            this.$ = [f[h]];
                                            break;
                                        case 88:
                                            f[h - 1].push(f[h]);
                                            break;
                                        case 89:
                                            this.$ = [f[h]];
                                            break;
                                        case 90:
                                            f[h - 1].push(f[h]);
                                    }
                                },
                                table: [
                                    { 3: 1, 4: 2, 5: [2, 41], 6: 3, 13: [2, 41], 14: [2, 41], 17: [2, 41], 27: [2, 41], 32: [2, 41], 46: [2, 41], 49: [2, 41], 53: [2, 41] },
                                    { 1: [3] },
                                    { 5: [1, 4] },
                                    {
                                        5: [2, 2],
                                        7: 5,
                                        8: 6,
                                        9: 7,
                                        10: 8,
                                        11: 9,
                                        12: 10,
                                        13: [1, 11],
                                        14: [1, 18],
                                        15: 16,
                                        17: [1, 21],
                                        22: 14,
                                        25: 15,
                                        27: [1, 19],
                                        32: [1, 20],
                                        37: [2, 2],
                                        42: [2, 2],
                                        45: [2, 2],
                                        46: [1, 12],
                                        49: [1, 13],
                                        53: [1, 17],
                                    },
                                    { 1: [2, 1] },
                                    { 5: [2, 42], 13: [2, 42], 14: [2, 42], 17: [2, 42], 27: [2, 42], 32: [2, 42], 37: [2, 42], 42: [2, 42], 45: [2, 42], 46: [2, 42], 49: [2, 42], 53: [2, 42] },
                                    { 5: [2, 3], 13: [2, 3], 14: [2, 3], 17: [2, 3], 27: [2, 3], 32: [2, 3], 37: [2, 3], 42: [2, 3], 45: [2, 3], 46: [2, 3], 49: [2, 3], 53: [2, 3] },
                                    { 5: [2, 4], 13: [2, 4], 14: [2, 4], 17: [2, 4], 27: [2, 4], 32: [2, 4], 37: [2, 4], 42: [2, 4], 45: [2, 4], 46: [2, 4], 49: [2, 4], 53: [2, 4] },
                                    { 5: [2, 5], 13: [2, 5], 14: [2, 5], 17: [2, 5], 27: [2, 5], 32: [2, 5], 37: [2, 5], 42: [2, 5], 45: [2, 5], 46: [2, 5], 49: [2, 5], 53: [2, 5] },
                                    { 5: [2, 6], 13: [2, 6], 14: [2, 6], 17: [2, 6], 27: [2, 6], 32: [2, 6], 37: [2, 6], 42: [2, 6], 45: [2, 6], 46: [2, 6], 49: [2, 6], 53: [2, 6] },
                                    { 5: [2, 7], 13: [2, 7], 14: [2, 7], 17: [2, 7], 27: [2, 7], 32: [2, 7], 37: [2, 7], 42: [2, 7], 45: [2, 7], 46: [2, 7], 49: [2, 7], 53: [2, 7] },
                                    { 5: [2, 8], 13: [2, 8], 14: [2, 8], 17: [2, 8], 27: [2, 8], 32: [2, 8], 37: [2, 8], 42: [2, 8], 45: [2, 8], 46: [2, 8], 49: [2, 8], 53: [2, 8] },
                                    { 18: 22, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 18: 31, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 4: 32, 6: 3, 13: [2, 41], 14: [2, 41], 17: [2, 41], 27: [2, 41], 32: [2, 41], 37: [2, 41], 42: [2, 41], 45: [2, 41], 46: [2, 41], 49: [2, 41], 53: [2, 41] },
                                    { 4: 33, 6: 3, 13: [2, 41], 14: [2, 41], 17: [2, 41], 27: [2, 41], 32: [2, 41], 42: [2, 41], 45: [2, 41], 46: [2, 41], 49: [2, 41], 53: [2, 41] },
                                    { 12: 34, 14: [1, 18] },
                                    { 18: 36, 54: 35, 58: 37, 59: [1, 38], 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 5: [2, 9], 13: [2, 9], 14: [2, 9], 16: [2, 9], 17: [2, 9], 27: [2, 9], 32: [2, 9], 37: [2, 9], 42: [2, 9], 45: [2, 9], 46: [2, 9], 49: [2, 9], 53: [2, 9] },
                                    { 18: 39, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 18: 40, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 18: 41, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 31: [2, 71], 47: 42, 59: [2, 71], 66: [2, 71], 74: [2, 71], 75: [2, 71], 76: [2, 71], 77: [2, 71] },
                                    { 21: [2, 30], 31: [2, 30], 52: [2, 30], 59: [2, 30], 62: [2, 30], 66: [2, 30], 69: [2, 30], 74: [2, 30], 75: [2, 30], 76: [2, 30], 77: [2, 30] },
                                    { 21: [2, 31], 31: [2, 31], 52: [2, 31], 59: [2, 31], 62: [2, 31], 66: [2, 31], 69: [2, 31], 74: [2, 31], 75: [2, 31], 76: [2, 31], 77: [2, 31] },
                                    { 21: [2, 32], 31: [2, 32], 52: [2, 32], 59: [2, 32], 62: [2, 32], 66: [2, 32], 69: [2, 32], 74: [2, 32], 75: [2, 32], 76: [2, 32], 77: [2, 32] },
                                    { 21: [2, 33], 31: [2, 33], 52: [2, 33], 59: [2, 33], 62: [2, 33], 66: [2, 33], 69: [2, 33], 74: [2, 33], 75: [2, 33], 76: [2, 33], 77: [2, 33] },
                                    { 21: [2, 34], 31: [2, 34], 52: [2, 34], 59: [2, 34], 62: [2, 34], 66: [2, 34], 69: [2, 34], 74: [2, 34], 75: [2, 34], 76: [2, 34], 77: [2, 34] },
                                    { 21: [2, 38], 31: [2, 38], 52: [2, 38], 59: [2, 38], 62: [2, 38], 66: [2, 38], 69: [2, 38], 74: [2, 38], 75: [2, 38], 76: [2, 38], 77: [2, 38], 79: [1, 43] },
                                    { 66: [1, 30], 78: 44 },
                                    { 21: [2, 40], 31: [2, 40], 52: [2, 40], 59: [2, 40], 62: [2, 40], 66: [2, 40], 69: [2, 40], 74: [2, 40], 75: [2, 40], 76: [2, 40], 77: [2, 40], 79: [2, 40] },
                                    { 50: 45, 52: [2, 75], 59: [2, 75], 66: [2, 75], 74: [2, 75], 75: [2, 75], 76: [2, 75], 77: [2, 75] },
                                    { 23: 46, 36: 48, 37: [1, 50], 41: 49, 42: [1, 51], 43: 47, 45: [2, 47] },
                                    { 26: 52, 41: 53, 42: [1, 51], 45: [2, 49] },
                                    { 16: [1, 54] },
                                    { 31: [2, 79], 55: 55, 59: [2, 79], 66: [2, 79], 74: [2, 79], 75: [2, 79], 76: [2, 79], 77: [2, 79] },
                                    { 31: [2, 35], 59: [2, 35], 66: [2, 35], 74: [2, 35], 75: [2, 35], 76: [2, 35], 77: [2, 35] },
                                    { 31: [2, 36], 59: [2, 36], 66: [2, 36], 74: [2, 36], 75: [2, 36], 76: [2, 36], 77: [2, 36] },
                                    { 18: 56, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 28: 57, 31: [2, 51], 59: [2, 51], 66: [2, 51], 69: [2, 51], 74: [2, 51], 75: [2, 51], 76: [2, 51], 77: [2, 51] },
                                    { 31: [2, 57], 33: 58, 59: [2, 57], 66: [2, 57], 69: [2, 57], 74: [2, 57], 75: [2, 57], 76: [2, 57], 77: [2, 57] },
                                    { 19: 59, 21: [2, 43], 59: [2, 43], 66: [2, 43], 74: [2, 43], 75: [2, 43], 76: [2, 43], 77: [2, 43] },
                                    { 18: 63, 31: [2, 73], 48: 60, 57: 61, 58: 64, 59: [1, 38], 63: 62, 64: 65, 65: 66, 66: [1, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 66: [1, 68] },
                                    { 21: [2, 37], 31: [2, 37], 52: [2, 37], 59: [2, 37], 62: [2, 37], 66: [2, 37], 69: [2, 37], 74: [2, 37], 75: [2, 37], 76: [2, 37], 77: [2, 37], 79: [1, 43] },
                                    { 18: 63, 51: 69, 52: [2, 77], 57: 70, 58: 64, 59: [1, 38], 63: 71, 64: 65, 65: 66, 66: [1, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 24: 72, 45: [1, 73] },
                                    { 45: [2, 48] },
                                    { 4: 74, 6: 3, 13: [2, 41], 14: [2, 41], 17: [2, 41], 27: [2, 41], 32: [2, 41], 37: [2, 41], 42: [2, 41], 45: [2, 41], 46: [2, 41], 49: [2, 41], 53: [2, 41] },
                                    { 45: [2, 19] },
                                    { 18: 75, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 4: 76, 6: 3, 13: [2, 41], 14: [2, 41], 17: [2, 41], 27: [2, 41], 32: [2, 41], 45: [2, 41], 46: [2, 41], 49: [2, 41], 53: [2, 41] },
                                    { 24: 77, 45: [1, 73] },
                                    { 45: [2, 50] },
                                    { 5: [2, 10], 13: [2, 10], 14: [2, 10], 17: [2, 10], 27: [2, 10], 32: [2, 10], 37: [2, 10], 42: [2, 10], 45: [2, 10], 46: [2, 10], 49: [2, 10], 53: [2, 10] },
                                    { 18: 63, 31: [2, 81], 56: 78, 57: 79, 58: 64, 59: [1, 38], 63: 80, 64: 65, 65: 66, 66: [1, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 59: [2, 83], 60: 81, 62: [2, 83], 66: [2, 83], 74: [2, 83], 75: [2, 83], 76: [2, 83], 77: [2, 83] },
                                    { 18: 63, 29: 82, 31: [2, 53], 57: 83, 58: 64, 59: [1, 38], 63: 84, 64: 65, 65: 66, 66: [1, 67], 69: [2, 53], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 18: 63, 31: [2, 59], 34: 85, 57: 86, 58: 64, 59: [1, 38], 63: 87, 64: 65, 65: 66, 66: [1, 67], 69: [2, 59], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 18: 63, 20: 88, 21: [2, 45], 57: 89, 58: 64, 59: [1, 38], 63: 90, 64: 65, 65: 66, 66: [1, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 31: [1, 91] },
                                    { 31: [2, 72], 59: [2, 72], 66: [2, 72], 74: [2, 72], 75: [2, 72], 76: [2, 72], 77: [2, 72] },
                                    { 31: [2, 74] },
                                    { 21: [2, 24], 31: [2, 24], 52: [2, 24], 59: [2, 24], 62: [2, 24], 66: [2, 24], 69: [2, 24], 74: [2, 24], 75: [2, 24], 76: [2, 24], 77: [2, 24] },
                                    { 21: [2, 25], 31: [2, 25], 52: [2, 25], 59: [2, 25], 62: [2, 25], 66: [2, 25], 69: [2, 25], 74: [2, 25], 75: [2, 25], 76: [2, 25], 77: [2, 25] },
                                    { 21: [2, 27], 31: [2, 27], 52: [2, 27], 62: [2, 27], 65: 92, 66: [1, 93], 69: [2, 27] },
                                    { 21: [2, 87], 31: [2, 87], 52: [2, 87], 62: [2, 87], 66: [2, 87], 69: [2, 87] },
                                    { 21: [2, 40], 31: [2, 40], 52: [2, 40], 59: [2, 40], 62: [2, 40], 66: [2, 40], 67: [1, 94], 69: [2, 40], 74: [2, 40], 75: [2, 40], 76: [2, 40], 77: [2, 40], 79: [2, 40] },
                                    { 21: [2, 39], 31: [2, 39], 52: [2, 39], 59: [2, 39], 62: [2, 39], 66: [2, 39], 69: [2, 39], 74: [2, 39], 75: [2, 39], 76: [2, 39], 77: [2, 39], 79: [2, 39] },
                                    { 52: [1, 95] },
                                    { 52: [2, 76], 59: [2, 76], 66: [2, 76], 74: [2, 76], 75: [2, 76], 76: [2, 76], 77: [2, 76] },
                                    { 52: [2, 78] },
                                    { 5: [2, 12], 13: [2, 12], 14: [2, 12], 17: [2, 12], 27: [2, 12], 32: [2, 12], 37: [2, 12], 42: [2, 12], 45: [2, 12], 46: [2, 12], 49: [2, 12], 53: [2, 12] },
                                    { 18: 96, 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 36: 48, 37: [1, 50], 41: 49, 42: [1, 51], 43: 98, 44: 97, 45: [2, 69] },
                                    { 31: [2, 63], 38: 99, 59: [2, 63], 66: [2, 63], 69: [2, 63], 74: [2, 63], 75: [2, 63], 76: [2, 63], 77: [2, 63] },
                                    { 45: [2, 17] },
                                    { 5: [2, 13], 13: [2, 13], 14: [2, 13], 17: [2, 13], 27: [2, 13], 32: [2, 13], 37: [2, 13], 42: [2, 13], 45: [2, 13], 46: [2, 13], 49: [2, 13], 53: [2, 13] },
                                    { 31: [1, 100] },
                                    { 31: [2, 80], 59: [2, 80], 66: [2, 80], 74: [2, 80], 75: [2, 80], 76: [2, 80], 77: [2, 80] },
                                    { 31: [2, 82] },
                                    { 18: 63, 57: 102, 58: 64, 59: [1, 38], 61: 101, 62: [2, 85], 63: 103, 64: 65, 65: 66, 66: [1, 67], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 30: 104, 31: [2, 55], 68: 105, 69: [1, 106] },
                                    { 31: [2, 52], 59: [2, 52], 66: [2, 52], 69: [2, 52], 74: [2, 52], 75: [2, 52], 76: [2, 52], 77: [2, 52] },
                                    { 31: [2, 54], 69: [2, 54] },
                                    { 31: [2, 61], 35: 107, 68: 108, 69: [1, 106] },
                                    { 31: [2, 58], 59: [2, 58], 66: [2, 58], 69: [2, 58], 74: [2, 58], 75: [2, 58], 76: [2, 58], 77: [2, 58] },
                                    { 31: [2, 60], 69: [2, 60] },
                                    { 21: [1, 109] },
                                    { 21: [2, 44], 59: [2, 44], 66: [2, 44], 74: [2, 44], 75: [2, 44], 76: [2, 44], 77: [2, 44] },
                                    { 21: [2, 46] },
                                    { 5: [2, 21], 13: [2, 21], 14: [2, 21], 17: [2, 21], 27: [2, 21], 32: [2, 21], 37: [2, 21], 42: [2, 21], 45: [2, 21], 46: [2, 21], 49: [2, 21], 53: [2, 21] },
                                    { 21: [2, 88], 31: [2, 88], 52: [2, 88], 62: [2, 88], 66: [2, 88], 69: [2, 88] },
                                    { 67: [1, 94] },
                                    { 18: 63, 57: 110, 58: 64, 59: [1, 38], 66: [1, 30], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 5: [2, 22], 13: [2, 22], 14: [2, 22], 17: [2, 22], 27: [2, 22], 32: [2, 22], 37: [2, 22], 42: [2, 22], 45: [2, 22], 46: [2, 22], 49: [2, 22], 53: [2, 22] },
                                    { 31: [1, 111] },
                                    { 45: [2, 18] },
                                    { 45: [2, 70] },
                                    { 18: 63, 31: [2, 65], 39: 112, 57: 113, 58: 64, 59: [1, 38], 63: 114, 64: 65, 65: 66, 66: [1, 67], 69: [2, 65], 72: 23, 73: 24, 74: [1, 25], 75: [1, 26], 76: [1, 27], 77: [1, 29], 78: 28 },
                                    { 5: [2, 23], 13: [2, 23], 14: [2, 23], 17: [2, 23], 27: [2, 23], 32: [2, 23], 37: [2, 23], 42: [2, 23], 45: [2, 23], 46: [2, 23], 49: [2, 23], 53: [2, 23] },
                                    { 62: [1, 115] },
                                    { 59: [2, 84], 62: [2, 84], 66: [2, 84], 74: [2, 84], 75: [2, 84], 76: [2, 84], 77: [2, 84] },
                                    { 62: [2, 86] },
                                    { 31: [1, 116] },
                                    { 31: [2, 56] },
                                    { 66: [1, 118], 70: 117 },
                                    { 31: [1, 119] },
                                    { 31: [2, 62] },
                                    { 14: [2, 11] },
                                    { 21: [2, 28], 31: [2, 28], 52: [2, 28], 62: [2, 28], 66: [2, 28], 69: [2, 28] },
                                    { 5: [2, 20], 13: [2, 20], 14: [2, 20], 17: [2, 20], 27: [2, 20], 32: [2, 20], 37: [2, 20], 42: [2, 20], 45: [2, 20], 46: [2, 20], 49: [2, 20], 53: [2, 20] },
                                    { 31: [2, 67], 40: 120, 68: 121, 69: [1, 106] },
                                    { 31: [2, 64], 59: [2, 64], 66: [2, 64], 69: [2, 64], 74: [2, 64], 75: [2, 64], 76: [2, 64], 77: [2, 64] },
                                    { 31: [2, 66], 69: [2, 66] },
                                    { 21: [2, 26], 31: [2, 26], 52: [2, 26], 59: [2, 26], 62: [2, 26], 66: [2, 26], 69: [2, 26], 74: [2, 26], 75: [2, 26], 76: [2, 26], 77: [2, 26] },
                                    { 13: [2, 14], 14: [2, 14], 17: [2, 14], 27: [2, 14], 32: [2, 14], 37: [2, 14], 42: [2, 14], 45: [2, 14], 46: [2, 14], 49: [2, 14], 53: [2, 14] },
                                    { 66: [1, 123], 71: [1, 122] },
                                    { 66: [2, 89], 71: [2, 89] },
                                    { 13: [2, 15], 14: [2, 15], 17: [2, 15], 27: [2, 15], 32: [2, 15], 42: [2, 15], 45: [2, 15], 46: [2, 15], 49: [2, 15], 53: [2, 15] },
                                    { 31: [1, 124] },
                                    { 31: [2, 68] },
                                    { 31: [2, 29] },
                                    { 66: [2, 90], 71: [2, 90] },
                                    { 13: [2, 16], 14: [2, 16], 17: [2, 16], 27: [2, 16], 32: [2, 16], 37: [2, 16], 42: [2, 16], 45: [2, 16], 46: [2, 16], 49: [2, 16], 53: [2, 16] },
                                ],
                                defaultActions: {
                                    4: [2, 1],
                                    47: [2, 48],
                                    49: [2, 19],
                                    53: [2, 50],
                                    62: [2, 74],
                                    71: [2, 78],
                                    76: [2, 17],
                                    80: [2, 82],
                                    90: [2, 46],
                                    97: [2, 18],
                                    98: [2, 70],
                                    103: [2, 86],
                                    105: [2, 56],
                                    108: [2, 62],
                                    109: [2, 11],
                                    121: [2, 68],
                                    122: [2, 29],
                                },
                                parseError: function (a, b) {
                                    throw new Error(a);
                                },
                                parse: function (a) {
                                    function b() {
                                        var a;
                                        return (a = c.lexer.lex() || 1), "number" != typeof a && (a = c.symbols_[a] || a), a;
                                    }
                                    var c = this,
                                        d = [0],
                                        e = [null],
                                        f = [],
                                        g = this.table,
                                        h = "",
                                        i = 0,
                                        j = 0,
                                        k = 0;
                                    this.lexer.setInput(a), (this.lexer.yy = this.yy), (this.yy.lexer = this.lexer), (this.yy.parser = this), "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                                    var l = this.lexer.yylloc;
                                    f.push(l);
                                    var m = this.lexer.options && this.lexer.options.ranges;
                                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                                    for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                                        if (
                                            ((p = d[d.length - 1]),
                                            this.defaultActions[p] ? (q = this.defaultActions[p]) : ((null === n || "undefined" == typeof n) && (n = b()), (q = g[p] && g[p][n])),
                                            "undefined" == typeof q || !q.length || !q[0])
                                        ) {
                                            var x = "";
                                            if (!k) {
                                                v = [];
                                                for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                                (x = this.lexer.showPosition
                                                    ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'"
                                                    : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'")),
                                                    this.parseError(x, { text: this.lexer.match, token: this.terminals_[n] || n, line: this.lexer.yylineno, loc: l, expected: v });
                                            }
                                        }
                                        if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                                        switch (q[0]) {
                                            case 1:
                                                d.push(n),
                                                    e.push(this.lexer.yytext),
                                                    f.push(this.lexer.yylloc),
                                                    d.push(q[1]),
                                                    (n = null),
                                                    o ? ((n = o), (o = null)) : ((j = this.lexer.yyleng), (h = this.lexer.yytext), (i = this.lexer.yylineno), (l = this.lexer.yylloc), k > 0 && k--);
                                                break;
                                            case 2:
                                                if (
                                                    ((t = this.productions_[q[1]][1]),
                                                    (w.$ = e[e.length - t]),
                                                    (w._$ = {
                                                        first_line: f[f.length - (t || 1)].first_line,
                                                        last_line: f[f.length - 1].last_line,
                                                        first_column: f[f.length - (t || 1)].first_column,
                                                        last_column: f[f.length - 1].last_column,
                                                    }),
                                                    m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]),
                                                    (r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f)),
                                                    "undefined" != typeof r)
                                                )
                                                    return r;
                                                t && ((d = d.slice(0, -1 * t * 2)), (e = e.slice(0, -1 * t)), (f = f.slice(0, -1 * t))),
                                                    d.push(this.productions_[q[1]][0]),
                                                    e.push(w.$),
                                                    f.push(w._$),
                                                    (u = g[d[d.length - 2]][d[d.length - 1]]),
                                                    d.push(u);
                                                break;
                                            case 3:
                                                return !0;
                                        }
                                    }
                                    return !0;
                                },
                            },
                            c = (function () {
                                var a = {
                                    EOF: 1,
                                    parseError: function (a, b) {
                                        if (!this.yy.parser) throw new Error(a);
                                        this.yy.parser.parseError(a, b);
                                    },
                                    setInput: function (a) {
                                        return (
                                            (this._input = a),
                                            (this._more = this._less = this.done = !1),
                                            (this.yylineno = this.yyleng = 0),
                                            (this.yytext = this.matched = this.match = ""),
                                            (this.conditionStack = ["INITIAL"]),
                                            (this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }),
                                            this.options.ranges && (this.yylloc.range = [0, 0]),
                                            (this.offset = 0),
                                            this
                                        );
                                    },
                                    input: function () {
                                        var a = this._input[0];
                                        (this.yytext += a), this.yyleng++, this.offset++, (this.match += a), (this.matched += a);
                                        var b = a.match(/(?:\r\n?|\n).*/g);
                                        return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, (this._input = this._input.slice(1)), a;
                                    },
                                    unput: function (a) {
                                        var b = a.length,
                                            c = a.split(/(?:\r\n?|\n)/g);
                                        (this._input = a + this._input), (this.yytext = this.yytext.substr(0, this.yytext.length - b - 1)), (this.offset -= b);
                                        var d = this.match.split(/(?:\r\n?|\n)/g);
                                        (this.match = this.match.substr(0, this.match.length - 1)), (this.matched = this.matched.substr(0, this.matched.length - 1)), c.length - 1 && (this.yylineno -= c.length - 1);
                                        var e = this.yylloc.range;
                                        return (
                                            (this.yylloc = {
                                                first_line: this.yylloc.first_line,
                                                last_line: this.yylineno + 1,
                                                first_column: this.yylloc.first_column,
                                                last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b,
                                            }),
                                            this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]),
                                            this
                                        );
                                    },
                                    more: function () {
                                        return (this._more = !0), this;
                                    },
                                    less: function (a) {
                                        this.unput(this.match.slice(a));
                                    },
                                    pastInput: function () {
                                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "");
                                    },
                                    upcomingInput: function () {
                                        var a = this.match;
                                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "");
                                    },
                                    showPosition: function () {
                                        var a = this.pastInput(),
                                            b = new Array(a.length + 1).join("-");
                                        return a + this.upcomingInput() + "\n" + b + "^";
                                    },
                                    next: function () {
                                        if (this.done) return this.EOF;
                                        this._input || (this.done = !0);
                                        var a, b, c, d, e;
                                        this._more || ((this.yytext = ""), (this.match = ""));
                                        for (var f = this._currentRules(), g = 0; g < f.length && ((c = this._input.match(this.rules[f[g]])), !c || (b && !(c[0].length > b[0].length)) || ((b = c), (d = g), this.options.flex)); g++);
                                        return b
                                            ? ((e = b[0].match(/(?:\r\n?|\n).*/g)),
                                              e && (this.yylineno += e.length),
                                              (this.yylloc = {
                                                  first_line: this.yylloc.last_line,
                                                  last_line: this.yylineno + 1,
                                                  first_column: this.yylloc.last_column,
                                                  last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length,
                                              }),
                                              (this.yytext += b[0]),
                                              (this.match += b[0]),
                                              (this.matches = b),
                                              (this.yyleng = this.yytext.length),
                                              this.options.ranges && (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
                                              (this._more = !1),
                                              (this._input = this._input.slice(b[0].length)),
                                              (this.matched += b[0]),
                                              (a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1])),
                                              this.done && this._input && (this.done = !1),
                                              a ? a : void 0)
                                            : "" === this._input
                                            ? this.EOF
                                            : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
                                    },
                                    lex: function () {
                                        var a = this.next();
                                        return "undefined" != typeof a ? a : this.lex();
                                    },
                                    begin: function (a) {
                                        this.conditionStack.push(a);
                                    },
                                    popState: function () {
                                        return this.conditionStack.pop();
                                    },
                                    _currentRules: function () {
                                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                                    },
                                    topState: function () {
                                        return this.conditionStack[this.conditionStack.length - 2];
                                    },
                                    pushState: function (a) {
                                        this.begin(a);
                                    },
                                };
                                return (
                                    (a.options = {}),
                                    (a.performAction = function (a, b, c, d) {
                                        function e(a, c) {
                                            return (b.yytext = b.yytext.substr(a, b.yyleng - c));
                                        }
                                        switch (c) {
                                            case 0:
                                                if (("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext)) return 14;
                                                break;
                                            case 1:
                                                return 14;
                                            case 2:
                                                return this.popState(), 14;
                                            case 3:
                                                return (b.yytext = b.yytext.substr(5, b.yyleng - 9)), this.popState(), 16;
                                            case 4:
                                                return 14;
                                            case 5:
                                                return this.popState(), 13;
                                            case 6:
                                                return 59;
                                            case 7:
                                                return 62;
                                            case 8:
                                                return 17;
                                            case 9:
                                                return this.popState(), this.begin("raw"), 21;
                                            case 10:
                                                return 53;
                                            case 11:
                                                return 27;
                                            case 12:
                                                return 45;
                                            case 13:
                                                return this.popState(), 42;
                                            case 14:
                                                return this.popState(), 42;
                                            case 15:
                                                return 32;
                                            case 16:
                                                return 37;
                                            case 17:
                                                return 49;
                                            case 18:
                                                return 46;
                                            case 19:
                                                this.unput(b.yytext), this.popState(), this.begin("com");
                                                break;
                                            case 20:
                                                return this.popState(), 13;
                                            case 21:
                                                return 46;
                                            case 22:
                                                return 67;
                                            case 23:
                                                return 66;
                                            case 24:
                                                return 66;
                                            case 25:
                                                return 79;
                                            case 26:
                                                break;
                                            case 27:
                                                return this.popState(), 52;
                                            case 28:
                                                return this.popState(), 31;
                                            case 29:
                                                return (b.yytext = e(1, 2).replace(/\\"/g, '"')), 74;
                                            case 30:
                                                return (b.yytext = e(1, 2).replace(/\\'/g, "'")), 74;
                                            case 31:
                                                return 77;
                                            case 32:
                                                return 76;
                                            case 33:
                                                return 76;
                                            case 34:
                                                return 75;
                                            case 35:
                                                return 69;
                                            case 36:
                                                return 71;
                                            case 37:
                                                return 66;
                                            case 38:
                                                return (b.yytext = e(1, 2)), 66;
                                            case 39:
                                                return "INVALID";
                                            case 40:
                                                return 5;
                                        }
                                    }),
                                    (a.rules = [
                                        /^(?:[^\x00]*?(?=(\{\{)))/,
                                        /^(?:[^\x00]+)/,
                                        /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
                                        /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
                                        /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,
                                        /^(?:[\s\S]*?--(~)?\}\})/,
                                        /^(?:\()/,
                                        /^(?:\))/,
                                        /^(?:\{\{\{\{)/,
                                        /^(?:\}\}\}\})/,
                                        /^(?:\{\{(~)?>)/,
                                        /^(?:\{\{(~)?#)/,
                                        /^(?:\{\{(~)?\/)/,
                                        /^(?:\{\{(~)?\^\s*(~)?\}\})/,
                                        /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
                                        /^(?:\{\{(~)?\^)/,
                                        /^(?:\{\{(~)?\s*else\b)/,
                                        /^(?:\{\{(~)?\{)/,
                                        /^(?:\{\{(~)?&)/,
                                        /^(?:\{\{(~)?!--)/,
                                        /^(?:\{\{(~)?![\s\S]*?\}\})/,
                                        /^(?:\{\{(~)?)/,
                                        /^(?:=)/,
                                        /^(?:\.\.)/,
                                        /^(?:\.(?=([=~}\s\/.)|])))/,
                                        /^(?:[\/.])/,
                                        /^(?:\s+)/,
                                        /^(?:\}(~)?\}\})/,
                                        /^(?:(~)?\}\})/,
                                        /^(?:"(\\["]|[^"])*")/,
                                        /^(?:'(\\[']|[^'])*')/,
                                        /^(?:@)/,
                                        /^(?:true(?=([~}\s)])))/,
                                        /^(?:false(?=([~}\s)])))/,
                                        /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
                                        /^(?:as\s+\|)/,
                                        /^(?:\|)/,
                                        /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
                                        /^(?:\[[^\]]*\])/,
                                        /^(?:.)/,
                                        /^(?:$)/,
                                    ]),
                                    (a.conditions = {
                                        mu: { rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], inclusive: !1 },
                                        emu: { rules: [2], inclusive: !1 },
                                        com: { rules: [5], inclusive: !1 },
                                        raw: { rules: [3, 4], inclusive: !1 },
                                        INITIAL: { rules: [0, 1, 40], inclusive: !0 },
                                    }),
                                    a
                                );
                            })();
                        return (b.lexer = c), (a.prototype = b), (b.Parser = a), new a();
                    })();
                return (a = b);
            })(),
            i = (function (a, b) {
                "use strict";
                function c() {
                    this.parents = [];
                }
                var d,
                    e = a,
                    f = b;
                return (
                    (c.prototype = {
                        constructor: c,
                        mutating: !1,
                        acceptKey: function (a, b) {
                            var c = this.accept(a[b]);
                            if (this.mutating) {
                                if (c && (!c.type || !f[c.type])) throw new e('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                                a[b] = c;
                            }
                        },
                        acceptRequired: function (a, b) {
                            if ((this.acceptKey(a, b), !a[b])) throw new e(a.type + " requires " + b);
                        },
                        acceptArray: function (a) {
                            for (var b = 0, c = a.length; c > b; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--);
                        },
                        accept: function (a) {
                            if (a) {
                                this.current && this.parents.unshift(this.current), (this.current = a);
                                var b = this[a.type](a);
                                return (this.current = this.parents.shift()), !this.mutating || b ? b : b !== !1 ? a : void 0;
                            }
                        },
                        Program: function (a) {
                            this.acceptArray(a.body);
                        },
                        MustacheStatement: function (a) {
                            this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
                        },
                        BlockStatement: function (a) {
                            this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash"), this.acceptKey(a, "program"), this.acceptKey(a, "inverse");
                        },
                        PartialStatement: function (a) {
                            this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
                        },
                        ContentStatement: function () {},
                        CommentStatement: function () {},
                        SubExpression: function (a) {
                            this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
                        },
                        PartialExpression: function (a) {
                            this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
                        },
                        PathExpression: function () {},
                        StringLiteral: function () {},
                        NumberLiteral: function () {},
                        BooleanLiteral: function () {},
                        Hash: function (a) {
                            this.acceptArray(a.pairs);
                        },
                        HashPair: function (a) {
                            this.acceptRequired(a, "value");
                        },
                    }),
                    (d = c)
                );
            })(b, g),
            j = (function (a) {
                "use strict";
                function b() {}
                function c(a, b, c) {
                    void 0 === b && (b = a.length);
                    var d = a[b - 1],
                        e = a[b - 2];
                    return d ? ("ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0) : c;
                }
                function d(a, b, c) {
                    void 0 === b && (b = -1);
                    var d = a[b + 1],
                        e = a[b + 2];
                    return d ? ("ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0) : c;
                }
                function e(a, b, c) {
                    var d = a[null == b ? 0 : b + 1];
                    if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                        var e = d.value;
                        (d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, "")), (d.rightStripped = d.value !== e);
                    }
                }
                function f(a, b, c) {
                    var d = a[null == b ? a.length - 1 : b - 1];
                    if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                        var e = d.value;
                        return (d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, "")), (d.leftStripped = d.value !== e), d.leftStripped;
                    }
                }
                var g,
                    h = a;
                return (
                    (b.prototype = new h()),
                    (b.prototype.Program = function (a) {
                        var b = !this.isRootSeen;
                        this.isRootSeen = !0;
                        for (var g = a.body, h = 0, i = g.length; i > h; h++) {
                            var j = g[h],
                                k = this.accept(j);
                            if (k) {
                                var l = c(g, h, b),
                                    m = d(g, h, b),
                                    n = k.openStandalone && l,
                                    o = k.closeStandalone && m,
                                    p = k.inlineStandalone && l && m;
                                k.close && e(g, h, !0),
                                    k.open && f(g, h, !0),
                                    p && (e(g, h), f(g, h) && "PartialStatement" === j.type && (j.indent = /([ \t]+$)/.exec(g[h - 1].original)[1])),
                                    n && (e((j.program || j.inverse).body), f(g, h)),
                                    o && (e(g, h), f((j.inverse || j.program).body));
                            }
                        }
                        return a;
                    }),
                    (b.prototype.BlockStatement = function (a) {
                        this.accept(a.program), this.accept(a.inverse);
                        var b = a.program || a.inverse,
                            g = a.program && a.inverse,
                            h = g,
                            i = g;
                        if (g && g.chained) for (h = g.body[0].program; i.chained; ) i = i.body[i.body.length - 1].program;
                        var j = { open: a.openStrip.open, close: a.closeStrip.close, openStandalone: d(b.body), closeStandalone: c((h || b).body) };
                        if ((a.openStrip.close && e(b.body, null, !0), g)) {
                            var k = a.inverseStrip;
                            k.open && f(b.body, null, !0), k.close && e(h.body, null, !0), a.closeStrip.open && f(i.body, null, !0), c(b.body) && d(h.body) && (f(b.body), e(h.body));
                        } else a.closeStrip.open && f(b.body, null, !0);
                        return j;
                    }),
                    (b.prototype.MustacheStatement = function (a) {
                        return a.strip;
                    }),
                    (b.prototype.PartialStatement = b.prototype.CommentStatement = function (a) {
                        var b = a.strip || {};
                        return { inlineStandalone: !0, open: b.open, close: b.close };
                    }),
                    (g = b)
                );
            })(i),
            k = (function (a) {
                "use strict";
                function b(a, b) {
                    (this.source = a), (this.start = { line: b.first_line, column: b.first_column }), (this.end = { line: b.last_line, column: b.last_column });
                }
                function c(a, b) {
                    return { open: "~" === a.charAt(2), close: "~" === b.charAt(b.length - 3) };
                }
                function d(a) {
                    return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
                }
                function e(a, b, c) {
                    c = this.locInfo(c);
                    for (var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length; i > h; h++) {
                        var k = b[h].part;
                        if (((d += (b[h].separator || "") + k), ".." === k || "." === k || "this" === k)) {
                            if (e.length > 0) throw new j("Invalid path: " + d, { loc: c });
                            ".." === k && (f++, (g += "../"));
                        } else e.push(k);
                    }
                    return new this.PathExpression(a, f, e, d, c);
                }
                function f(a, b, c, d, e, f) {
                    var g = d.charAt(3) || d.charAt(2),
                        h = "{" !== g && "&" !== g;
                    return new this.MustacheStatement(a, b, c, h, e, this.locInfo(f));
                }
                function g(a, b, c, d) {
                    if (a.path.original !== c) {
                        var e = { loc: a.path.loc };
                        throw new j(a.path.original + " doesn't match " + c, e);
                    }
                    d = this.locInfo(d);
                    var f = new this.Program([b], null, {}, d);
                    return new this.BlockStatement(a.path, a.params, a.hash, f, void 0, {}, {}, {}, d);
                }
                function h(a, b, c, d, e, f) {
                    if (d && d.path && a.path.original !== d.path.original) {
                        var g = { loc: a.path.loc };
                        throw new j(a.path.original + " doesn't match " + d.path.original, g);
                    }
                    b.blockParams = a.blockParams;
                    var h, i;
                    return (
                        c && (c.chain && (c.program.body[0].closeStrip = d.strip), (i = c.strip), (h = c.program)),
                        e && ((e = h), (h = b), (b = e)),
                        new this.BlockStatement(a.path, a.params, a.hash, b, h, a.strip, i, d && d.strip, this.locInfo(f))
                    );
                }
                var i = {},
                    j = a;
                return (i.SourceLocation = b), (i.stripFlags = c), (i.stripComment = d), (i.preparePath = e), (i.prepareMustache = f), (i.prepareRawBlock = g), (i.prepareBlock = h), i;
            })(b),
            l = (function (a, b, c, d, e) {
                "use strict";
                function f(a, b) {
                    if ("Program" === a.type) return a;
                    (h.yy = m),
                        (m.locInfo = function (a) {
                            return new m.SourceLocation(b && b.srcName, a);
                        });
                    var c = new j();
                    return c.accept(h.parse(a));
                }
                var g = {},
                    h = a,
                    i = b,
                    j = c,
                    k = d,
                    l = e.extend;
                g.parser = h;
                var m = {};
                return l(m, k, i), (g.parse = f), g;
            })(h, g, j, k, a),
            m = (function (a, b, c) {
                "use strict";
                function d() {}
                function e(a, b, c) {
                    if (null == a || ("string" != typeof a && "Program" !== a.type)) throw new j("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
                    (b = b || {}), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                    var d = c.parse(a, b),
                        e = new c.Compiler().compile(d, b);
                    return new c.JavaScriptCompiler().compile(e, b);
                }
                function f(a, b, c) {
                    function d() {
                        var d = c.parse(a, b),
                            e = new c.Compiler().compile(d, b),
                            f = new c.JavaScriptCompiler().compile(e, b, void 0, !0);
                        return c.template(f);
                    }
                    if (null == a || ("string" != typeof a && "Program" !== a.type)) throw new j("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
                    (b = b || {}), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                    var e,
                        f = function (a, b) {
                            return e || (e = d()), e.call(this, a, b);
                        };
                    return (
                        (f._setup = function (a) {
                            return e || (e = d()), e._setup(a);
                        }),
                        (f._child = function (a, b, c, f) {
                            return e || (e = d()), e._child(a, b, c, f);
                        }),
                        f
                    );
                }
                function g(a, b) {
                    if (a === b) return !0;
                    if (k(a) && k(b) && a.length === b.length) {
                        for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
                        return !0;
                    }
                }
                function h(a) {
                    if (!a.path.parts) {
                        var b = a.path;
                        a.path = new m.PathExpression(!1, 0, [b.original + ""], b.original + "", b.log);
                    }
                }
                var i = {},
                    j = a,
                    k = b.isArray,
                    l = b.indexOf,
                    m = c,
                    n = [].slice;
                return (
                    (i.Compiler = d),
                    (d.prototype = {
                        compiler: d,
                        equals: function (a) {
                            var b = this.opcodes.length;
                            if (a.opcodes.length !== b) return !1;
                            for (var c = 0; b > c; c++) {
                                var d = this.opcodes[c],
                                    e = a.opcodes[c];
                                if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
                            }
                            for (b = this.children.length, c = 0; b > c; c++) if (!this.children[c].equals(a.children[c])) return !1;
                            return !0;
                        },
                        guid: 0,
                        compile: function (a, b) {
                            (this.sourceNode = []), (this.opcodes = []), (this.children = []), (this.options = b), (this.stringParams = b.stringParams), (this.trackIds = b.trackIds), (b.blockParams = b.blockParams || []);
                            var c = b.knownHelpers;
                            if (((b.knownHelpers = { helperMissing: !0, blockHelperMissing: !0, each: !0, if: !0, unless: !0, with: !0, log: !0, lookup: !0 }), c)) for (var d in c) b.knownHelpers[d] = c[d];
                            return this.accept(a);
                        },
                        compileProgram: function (a) {
                            var b = new this.compiler().compile(a, this.options),
                                c = this.guid++;
                            return (this.usePartial = this.usePartial || b.usePartial), (this.children[c] = b), (this.useDepths = this.useDepths || b.useDepths), c;
                        },
                        accept: function (a) {
                            this.sourceNode.unshift(a);
                            var b = this[a.type](a);
                            return this.sourceNode.shift(), b;
                        },
                        Program: function (a) {
                            this.options.blockParams.unshift(a.blockParams);
                            for (var b = a.body, c = 0, d = b.length; d > c; c++) this.accept(b[c]);
                            return this.options.blockParams.shift(), (this.isSimple = 1 === d), (this.blockParams = a.blockParams ? a.blockParams.length : 0), this;
                        },
                        BlockStatement: function (a) {
                            h(a);
                            var b = a.program,
                                c = a.inverse;
                            (b = b && this.compileProgram(b)), (c = c && this.compileProgram(c));
                            var d = this.classifySexpr(a);
                            "helper" === d
                                ? this.helperSexpr(a, b, c)
                                : "simple" === d
                                ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original))
                                : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")),
                                this.opcode("append");
                        },
                        PartialStatement: function (a) {
                            this.usePartial = !0;
                            var b = a.params;
                            if (b.length > 1) throw new j("Unsupported number of partial arguments: " + b.length, a);
                            b.length || b.push({ type: "PathExpression", parts: [], depth: 0 });
                            var c = a.name.original,
                                d = "SubExpression" === a.name.type;
                            d && this.accept(a.name), this.setupFullMustacheParams(a, void 0, void 0, !0);
                            var e = a.indent || "";
                            this.options.preventIndent && e && (this.opcode("appendContent", e), (e = "")), this.opcode("invokePartial", d, c, e), this.opcode("append");
                        },
                        MustacheStatement: function (a) {
                            this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
                        },
                        ContentStatement: function (a) {
                            a.value && this.opcode("appendContent", a.value);
                        },
                        CommentStatement: function () {},
                        SubExpression: function (a) {
                            h(a);
                            var b = this.classifySexpr(a);
                            "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a);
                        },
                        ambiguousSexpr: function (a, b, c) {
                            var d = a.path,
                                e = d.parts[0],
                                f = null != b || null != c;
                            this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.accept(d), this.opcode("invokeAmbiguous", e, f);
                        },
                        simpleSexpr: function (a) {
                            this.accept(a.path), this.opcode("resolvePossibleLambda");
                        },
                        helperSexpr: function (a, b, c) {
                            var d = this.setupFullMustacheParams(a, b, c),
                                e = a.path,
                                f = e.parts[0];
                            if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
                            else {
                                if (this.options.knownHelpersOnly) throw new j("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                                (e.falsy = !0), this.accept(e), this.opcode("invokeHelper", d.length, e.original, m.helpers.simpleId(e));
                            }
                        },
                        PathExpression: function (a) {
                            this.addDepth(a.depth), this.opcode("getContext", a.depth);
                            var b = a.parts[0],
                                c = m.helpers.scopedId(a),
                                d = !a.depth && !c && this.blockParamIndex(b);
                            d
                                ? this.opcode("lookupBlockParam", d, a.parts)
                                : b
                                ? a.data
                                    ? ((this.options.data = !0), this.opcode("lookupData", a.depth, a.parts))
                                    : this.opcode("lookupOnContext", a.parts, a.falsy, c)
                                : this.opcode("pushContext");
                        },
                        StringLiteral: function (a) {
                            this.opcode("pushString", a.value);
                        },
                        NumberLiteral: function (a) {
                            this.opcode("pushLiteral", a.value);
                        },
                        BooleanLiteral: function (a) {
                            this.opcode("pushLiteral", a.value);
                        },
                        Hash: function (a) {
                            var b,
                                c,
                                d = a.pairs;
                            for (this.opcode("pushHash"), b = 0, c = d.length; c > b; b++) this.pushParam(d[b].value);
                            for (; b--; ) this.opcode("assignToHash", d[b].key);
                            this.opcode("popHash");
                        },
                        opcode: function (a) {
                            this.opcodes.push({ opcode: a, args: n.call(arguments, 1), loc: this.sourceNode[0].loc });
                        },
                        addDepth: function (a) {
                            a && (this.useDepths = !0);
                        },
                        classifySexpr: function (a) {
                            var b = m.helpers.simpleId(a.path),
                                c = b && !!this.blockParamIndex(a.path.parts[0]),
                                d = !c && m.helpers.helperExpression(a),
                                e = !c && (d || b),
                                f = this.options;
                            if (e && !d) {
                                var g = a.path.parts[0];
                                f.knownHelpers[g] ? (d = !0) : f.knownHelpersOnly && (e = !1);
                            }
                            return d ? "helper" : e ? "ambiguous" : "simple";
                        },
                        pushParams: function (a) {
                            for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b]);
                        },
                        pushParam: function (a) {
                            var b = null != a.value ? a.value : a.original || "";
                            if (this.stringParams)
                                b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                                    a.depth && this.addDepth(a.depth),
                                    this.opcode("getContext", a.depth || 0),
                                    this.opcode("pushStringParam", b, a.type),
                                    "SubExpression" === a.type && this.accept(a);
                            else {
                                if (this.trackIds) {
                                    var c;
                                    if ((!a.parts || m.helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c)) {
                                        var d = a.parts.slice(1).join(".");
                                        this.opcode("pushId", "BlockParam", c, d);
                                    } else (b = a.original || b), b.replace && (b = b.replace(/^\.\//g, "").replace(/^\.$/g, "")), this.opcode("pushId", a.type, b);
                                }
                                this.accept(a);
                            }
                        },
                        setupFullMustacheParams: function (a, b, c, d) {
                            var e = a.params;
                            return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e;
                        },
                        blockParamIndex: function (a) {
                            for (var b = 0, c = this.options.blockParams.length; c > b; b++) {
                                var d = this.options.blockParams[b],
                                    e = d && l(d, a);
                                if (d && e >= 0) return [b, e];
                            }
                        },
                    }),
                    (i.precompile = e),
                    (i.compile = f),
                    i
                );
            })(b, a, g),
            n = (function (a) {
                "use strict";
                function b(a, b, c) {
                    if (e(a)) {
                        for (var d = [], f = 0, g = a.length; g > f; f++) d.push(b.wrap(a[f], c));
                        return d;
                    }
                    return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
                }
                function c(a) {
                    (this.srcFile = a), (this.source = []);
                }
                var d,
                    e = a.isArray;
                try {
                    var f = require("source-map"),
                        g = f.SourceNode;
                } catch (h) {
                    (g = function (a, b, c, d) {
                        (this.src = ""), d && this.add(d);
                    }),
                        (g.prototype = {
                            add: function (a) {
                                e(a) && (a = a.join("")), (this.src += a);
                            },
                            prepend: function (a) {
                                e(a) && (a = a.join("")), (this.src = a + this.src);
                            },
                            toStringWithSourceMap: function () {
                                return { code: this.toString() };
                            },
                            toString: function () {
                                return this.src;
                            },
                        });
                }
                return (
                    (c.prototype = {
                        prepend: function (a, b) {
                            this.source.unshift(this.wrap(a, b));
                        },
                        push: function (a, b) {
                            this.source.push(this.wrap(a, b));
                        },
                        merge: function () {
                            var a = this.empty();
                            return (
                                this.each(function (b) {
                                    a.add(["  ", b, "\n"]);
                                }),
                                a
                            );
                        },
                        each: function (a) {
                            for (var b = 0, c = this.source.length; c > b; b++) a(this.source[b]);
                        },
                        empty: function (a) {
                            return (a = a || this.currentLocation || { start: {} }), new g(a.start.line, a.start.column, this.srcFile);
                        },
                        wrap: function (a, c) {
                            return a instanceof g ? a : ((c = c || this.currentLocation || { start: {} }), (a = b(a, this, c)), new g(c.start.line, c.start.column, this.srcFile, a));
                        },
                        functionCall: function (a, b, c) {
                            return (c = this.generateList(c)), this.wrap([a, b ? "." + b + "(" : "(", c, ")"]);
                        },
                        quotedString: function (a) {
                            return (
                                '"' +
                                (a + "")
                                    .replace(/\\/g, "\\\\")
                                    .replace(/"/g, '\\"')
                                    .replace(/\n/g, "\\n")
                                    .replace(/\r/g, "\\r")
                                    .replace(/\u2028/g, "\\u2028")
                                    .replace(/\u2029/g, "\\u2029") +
                                '"'
                            );
                        },
                        objectLiteral: function (a) {
                            var c = [];
                            for (var d in a)
                                if (a.hasOwnProperty(d)) {
                                    var e = b(a[d], this);
                                    "undefined" !== e && c.push([this.quotedString(d), ":", e]);
                                }
                            var f = this.generateList(c);
                            return f.prepend("{"), f.add("}"), f;
                        },
                        generateList: function (a, c) {
                            for (var d = this.empty(c), e = 0, f = a.length; f > e; e++) e && d.add(","), d.add(b(a[e], this, c));
                            return d;
                        },
                        generateArray: function (a, b) {
                            var c = this.generateList(a, b);
                            return c.prepend("["), c.add("]"), c;
                        },
                    }),
                    (d = c)
                );
            })(a),
            o = (function (a, b, c, d) {
                "use strict";
                function e(a) {
                    this.value = a;
                }
                function f() {}
                function g(a, b, c, d) {
                    var e = b.popStack(),
                        f = 0,
                        g = c.length;
                    for (a && g--; g > f; f++) e = b.nameLookup(e, c[f], d);
                    return a ? [b.aliasable("this.strict"), "(", e, ", ", b.quotedString(c[f]), ")"] : e;
                }
                var h,
                    i = a.COMPILER_REVISION,
                    j = a.REVISION_CHANGES,
                    k = b,
                    l = c.isArray,
                    m = d;
                f.prototype = {
                    nameLookup: function (a, b) {
                        return f.isValidJavaScriptVariableName(b) ? [a, ".", b] : [a, "['", b, "']"];
                    },
                    depthedLookup: function (a) {
                        return [this.aliasable("this.lookup"), '(depths, "', a, '")'];
                    },
                    compilerInfo: function () {
                        var a = i,
                            b = j[a];
                        return [a, b];
                    },
                    appendToBuffer: function (a, b, c) {
                        return l(a) || (a = [a]), (a = this.source.wrap(a, b)), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : ((a.appendToBuffer = !0), a);
                    },
                    initializeBuffer: function () {
                        return this.quotedString("");
                    },
                    compile: function (a, b, c, d) {
                        (this.environment = a),
                            (this.options = b),
                            (this.stringParams = this.options.stringParams),
                            (this.trackIds = this.options.trackIds),
                            (this.precompile = !d),
                            (this.name = this.environment.name),
                            (this.isChild = !!c),
                            (this.context = c || { programs: [], environments: [] }),
                            this.preamble(),
                            (this.stackSlot = 0),
                            (this.stackVars = []),
                            (this.aliases = {}),
                            (this.registers = { list: [] }),
                            (this.hashes = []),
                            (this.compileStack = []),
                            (this.inlineStack = []),
                            (this.blockParams = []),
                            this.compileChildren(a, b),
                            (this.useDepths = this.useDepths || a.useDepths || this.options.compat),
                            (this.useBlockParams = this.useBlockParams || a.useBlockParams);
                        var e,
                            f,
                            g,
                            h,
                            i = a.opcodes;
                        for (g = 0, h = i.length; h > g; g++) (e = i[g]), (this.source.currentLocation = e.loc), (f = f || e.loc), this[e.opcode].apply(this, e.args);
                        if (((this.source.currentLocation = f), this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)) throw new k("Compile completed with content left on stack");
                        var j = this.createFunctionContext(d);
                        if (this.isChild) return j;
                        var l = { compiler: this.compilerInfo(), main: j },
                            m = this.context.programs;
                        for (g = 0, h = m.length; h > g; g++) m[g] && (l[g] = m[g]);
                        return (
                            this.environment.usePartial && (l.usePartial = !0),
                            this.options.data && (l.useData = !0),
                            this.useDepths && (l.useDepths = !0),
                            this.useBlockParams && (l.useBlockParams = !0),
                            this.options.compat && (l.compat = !0),
                            d
                                ? (l.compilerOptions = this.options)
                                : ((l.compiler = JSON.stringify(l.compiler)),
                                  (this.source.currentLocation = { start: { line: 1, column: 0 } }),
                                  (l = this.objectLiteral(l)),
                                  b.srcName ? ((l = l.toStringWithSourceMap({ file: b.destName })), (l.map = l.map && l.map.toString())) : (l = l.toString())),
                            l
                        );
                    },
                    preamble: function () {
                        (this.lastContext = 0), (this.source = new m(this.options.srcName));
                    },
                    createFunctionContext: function (a) {
                        var b = "",
                            c = this.stackVars.concat(this.registers.list);
                        c.length > 0 && (b += ", " + c.join(", "));
                        var d = 0;
                        for (var e in this.aliases) {
                            var f = this.aliases[e];
                            this.aliases.hasOwnProperty(e) && f.children && f.referenceCount > 1 && ((b += ", alias" + ++d + "=" + e), (f.children[0] = "alias" + d));
                        }
                        var g = ["depth0", "helpers", "partials", "data"];
                        (this.useBlockParams || this.useDepths) && g.push("blockParams"), this.useDepths && g.push("depths");
                        var h = this.mergeSource(b);
                        return a ? (g.push(h), Function.apply(this, g)) : this.source.wrap(["function(", g.join(","), ") {\n  ", h, "}"]);
                    },
                    mergeSource: function (a) {
                        var b,
                            c,
                            d,
                            e,
                            f = this.environment.isSimple,
                            g = !this.forceBuffer;
                        return (
                            this.source.each(function (a) {
                                a.appendToBuffer ? (d ? a.prepend("  + ") : (d = a), (e = a)) : (d && (c ? d.prepend("buffer += ") : (b = !0), e.add(";"), (d = e = void 0)), (c = !0), f || (g = !1));
                            }),
                            g
                                ? d
                                    ? (d.prepend("return "), e.add(";"))
                                    : c || this.source.push('return "";')
                                : ((a += ", buffer = " + (b ? "" : this.initializeBuffer())), d ? (d.prepend("return buffer + "), e.add(";")) : this.source.push("return buffer;")),
                            a && this.source.prepend("var " + a.substring(2) + (b ? "" : ";\n")),
                            this.source.merge()
                        );
                    },
                    blockValue: function (a) {
                        var b = this.aliasable("helpers.blockHelperMissing"),
                            c = [this.contextName(0)];
                        this.setupHelperArgs(a, 0, c);
                        var d = this.popStack();
                        c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c));
                    },
                    ambiguousBlockValue: function () {
                        var a = this.aliasable("helpers.blockHelperMissing"),
                            b = [this.contextName(0)];
                        this.setupHelperArgs("", 0, b, !0), this.flushInline();
                        var c = this.topStack();
                        b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"]);
                    },
                    appendContent: function (a) {
                        this.pendingContent ? (a = this.pendingContent + a) : (this.pendingLocation = this.source.currentLocation), (this.pendingContent = a);
                    },
                    append: function () {
                        if (this.isInline())
                            this.replaceStack(function (a) {
                                return [" != null ? ", a, ' : ""'];
                            }),
                                this.pushSource(this.appendToBuffer(this.popStack()));
                        else {
                            var a = this.popStack();
                            this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
                        }
                    },
                    appendEscaped: function () {
                        this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"), "(", this.popStack(), ")"]));
                    },
                    getContext: function (a) {
                        this.lastContext = a;
                    },
                    pushContext: function () {
                        this.pushStackLiteral(this.contextName(this.lastContext));
                    },
                    lookupOnContext: function (a, b, c) {
                        var d = 0;
                        c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])), this.resolvePath("context", a, d, b);
                    },
                    lookupBlockParam: function (a, b) {
                        (this.useBlockParams = !0), this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1);
                    },
                    lookupData: function (a, b) {
                        a ? this.pushStackLiteral("this.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0);
                    },
                    resolvePath: function (a, b, c, d) {
                        if (this.options.strict || this.options.assumeObjects) return void this.push(g(this.options.strict, this, b, a));
                        for (var e = b.length; e > c; c++)
                            this.replaceStack(function (e) {
                                var f = this.nameLookup(e, b[c], a);
                                return d ? [" && ", f] : [" != null ? ", f, " : ", e];
                            });
                    },
                    resolvePossibleLambda: function () {
                        this.push([this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
                    },
                    pushStringParam: function (a, b) {
                        this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a));
                    },
                    emptyHash: function (a) {
                        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}");
                    },
                    pushHash: function () {
                        this.hash && this.hashes.push(this.hash), (this.hash = { values: [], types: [], contexts: [], ids: [] });
                    },
                    popHash: function () {
                        var a = this.hash;
                        (this.hash = this.hashes.pop()),
                            this.trackIds && this.push(this.objectLiteral(a.ids)),
                            this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))),
                            this.push(this.objectLiteral(a.values));
                    },
                    pushString: function (a) {
                        this.pushStackLiteral(this.quotedString(a));
                    },
                    pushLiteral: function (a) {
                        this.pushStackLiteral(a);
                    },
                    pushProgram: function (a) {
                        null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null);
                    },
                    invokeHelper: function (a, b, c) {
                        var d = this.popStack(),
                            e = this.setupHelper(a, b),
                            f = c ? [e.name, " || "] : "",
                            g = ["("].concat(f, d);
                        this.options.strict || g.push(" || ", this.aliasable("helpers.helperMissing")), g.push(")"), this.push(this.source.functionCall(g, "call", e.callParams));
                    },
                    invokeKnownHelper: function (a, b) {
                        var c = this.setupHelper(a, b);
                        this.push(this.source.functionCall(c.name, "call", c.callParams));
                    },
                    invokeAmbiguous: function (a, b) {
                        this.useRegister("helper");
                        var c = this.popStack();
                        this.emptyHash();
                        var d = this.setupHelper(0, a, b),
                            e = (this.lastHelper = this.nameLookup("helpers", a, "helper")),
                            f = ["(", "(helper = ", e, " || ", c, ")"];
                        this.options.strict || ((f[0] = "(helper = "), f.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))),
                            this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"]);
                    },
                    invokePartial: function (a, b, c) {
                        var d = [],
                            e = this.setupParams(b, 1, d, !1);
                        a && ((b = this.popStack()), delete e.name),
                            c && (e.indent = JSON.stringify(c)),
                            (e.helpers = "helpers"),
                            (e.partials = "partials"),
                            a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")),
                            this.options.compat && (e.depths = "depths"),
                            (e = this.objectLiteral(e)),
                            d.push(e),
                            this.push(this.source.functionCall("this.invokePartial", "", d));
                    },
                    assignToHash: function (a) {
                        var b,
                            c,
                            d,
                            e = this.popStack();
                        this.trackIds && (d = this.popStack()), this.stringParams && ((c = this.popStack()), (b = this.popStack()));
                        var f = this.hash;
                        b && (f.contexts[a] = b), c && (f.types[a] = c), d && (f.ids[a] = d), (f.values[a] = e);
                    },
                    pushId: function (a, b, c) {
                        "BlockParam" === a
                            ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : ""))
                            : "PathExpression" === a
                            ? this.pushString(b)
                            : "SubExpression" === a
                            ? this.pushStackLiteral("true")
                            : this.pushStackLiteral("null");
                    },
                    compiler: f,
                    compileChildren: function (a, b) {
                        for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                            (c = e[f]), (d = new this.compiler());
                            var h = this.matchExistingProgram(c);
                            null == h
                                ? (this.context.programs.push(""),
                                  (h = this.context.programs.length),
                                  (c.index = h),
                                  (c.name = "program" + h),
                                  (this.context.programs[h] = d.compile(c, b, this.context, !this.precompile)),
                                  (this.context.environments[h] = c),
                                  (this.useDepths = this.useDepths || d.useDepths),
                                  (this.useBlockParams = this.useBlockParams || d.useBlockParams))
                                : ((c.index = h), (c.name = "program" + h), (this.useDepths = this.useDepths || c.useDepths), (this.useBlockParams = this.useBlockParams || c.useBlockParams));
                        }
                    },
                    matchExistingProgram: function (a) {
                        for (var b = 0, c = this.context.environments.length; c > b; b++) {
                            var d = this.context.environments[b];
                            if (d && d.equals(a)) return b;
                        }
                    },
                    programExpression: function (a) {
                        var b = this.environment.children[a],
                            c = [b.index, "data", b.blockParams];
                        return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "this.program(" + c.join(", ") + ")";
                    },
                    useRegister: function (a) {
                        this.registers[a] || ((this.registers[a] = !0), this.registers.list.push(a));
                    },
                    push: function (a) {
                        return a instanceof e || (a = this.source.wrap(a)), this.inlineStack.push(a), a;
                    },
                    pushStackLiteral: function (a) {
                        this.push(new e(a));
                    },
                    pushSource: function (a) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), (this.pendingContent = void 0)), a && this.source.push(a);
                    },
                    replaceStack: function (a) {
                        var b,
                            c,
                            d,
                            f = ["("];
                        if (!this.isInline()) throw new k("replaceStack on non-inline");
                        var g = this.popStack(!0);
                        if (g instanceof e) (b = [g.value]), (f = ["(", b]), (d = !0);
                        else {
                            c = !0;
                            var h = this.incrStack();
                            (f = ["((", this.push(h), " = ", g, ")"]), (b = this.topStack());
                        }
                        var i = a.call(this, b);
                        d || this.popStack(), c && this.stackSlot--, this.push(f.concat(i, ")"));
                    },
                    incrStack: function () {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
                    },
                    topStackName: function () {
                        return "stack" + this.stackSlot;
                    },
                    flushInline: function () {
                        var a = this.inlineStack;
                        this.inlineStack = [];
                        for (var b = 0, c = a.length; c > b; b++) {
                            var d = a[b];
                            if (d instanceof e) this.compileStack.push(d);
                            else {
                                var f = this.incrStack();
                                this.pushSource([f, " = ", d, ";"]), this.compileStack.push(f);
                            }
                        }
                    },
                    isInline: function () {
                        return this.inlineStack.length;
                    },
                    popStack: function (a) {
                        var b = this.isInline(),
                            c = (b ? this.inlineStack : this.compileStack).pop();
                        if (!a && c instanceof e) return c.value;
                        if (!b) {
                            if (!this.stackSlot) throw new k("Invalid stack pop");
                            this.stackSlot--;
                        }
                        return c;
                    },
                    topStack: function () {
                        var a = this.isInline() ? this.inlineStack : this.compileStack,
                            b = a[a.length - 1];
                        return b instanceof e ? b.value : b;
                    },
                    contextName: function (a) {
                        return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
                    },
                    quotedString: function (a) {
                        return this.source.quotedString(a);
                    },
                    objectLiteral: function (a) {
                        return this.source.objectLiteral(a);
                    },
                    aliasable: function (a) {
                        var b = this.aliases[a];
                        return b ? (b.referenceCount++, b) : ((b = this.aliases[a] = this.source.wrap(a)), (b.aliasable = !0), (b.referenceCount = 1), b);
                    },
                    setupHelper: function (a, b, c) {
                        var d = [],
                            e = this.setupHelperArgs(b, a, d, c),
                            f = this.nameLookup("helpers", b, "helper");
                        return { params: d, paramsInit: e, name: f, callParams: [this.contextName(0)].concat(d) };
                    },
                    setupParams: function (a, b, c) {
                        var d,
                            e = {},
                            f = [],
                            g = [],
                            h = [];
                        (e.name = this.quotedString(a)), (e.hash = this.popStack()), this.trackIds && (e.hashIds = this.popStack()), this.stringParams && ((e.hashTypes = this.popStack()), (e.hashContexts = this.popStack()));
                        var i = this.popStack(),
                            j = this.popStack();
                        (j || i) && ((e.fn = j || "this.noop"), (e.inverse = i || "this.noop"));
                        for (var k = b; k--; ) (d = this.popStack()), (c[k] = d), this.trackIds && (h[k] = this.popStack()), this.stringParams && ((g[k] = this.popStack()), (f[k] = this.popStack()));
                        return (
                            this.trackIds && (e.ids = this.source.generateArray(h)),
                            this.stringParams && ((e.types = this.source.generateArray(g)), (e.contexts = this.source.generateArray(f))),
                            this.options.data && (e.data = "data"),
                            this.useBlockParams && (e.blockParams = "blockParams"),
                            e
                        );
                    },
                    setupHelperArgs: function (a, b, c, d) {
                        var e = this.setupParams(a, b, c, !0);
                        return (e = this.objectLiteral(e)), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : (c.push(e), "");
                    },
                };
                for (
                    var n = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(
                            " "
                        ),
                        o = (f.RESERVED_WORDS = {}),
                        p = 0,
                        q = n.length;
                    q > p;
                    p++
                )
                    o[n[p]] = !0;
                return (
                    (f.isValidJavaScriptVariableName = function (a) {
                        return !f.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
                    }),
                    (h = f)
                );
            })(c, b, a, n),
            p = (function (a, b, c, d, e) {
                "use strict";
                var f,
                    g = a,
                    h = b,
                    i = c.parser,
                    j = c.parse,
                    k = d.Compiler,
                    l = d.compile,
                    m = d.precompile,
                    n = e,
                    o = g.create,
                    p = function () {
                        var a = o();
                        return (
                            (a.compile = function (b, c) {
                                return l(b, c, a);
                            }),
                            (a.precompile = function (b, c) {
                                return m(b, c, a);
                            }),
                            (a.AST = h),
                            (a.Compiler = k),
                            (a.JavaScriptCompiler = n),
                            (a.Parser = i),
                            (a.parse = j),
                            a
                        );
                    };
                (g = p()), (g.create = p);
                var q = "undefined" != typeof global ? global : window,
                    r = q.Handlebars;
                return (
                    (g.noConflict = function () {
                        q.Handlebars === g && (q.Handlebars = r);
                    }),
                    (g["default"] = g),
                    (f = g)
                );
            })(f, g, l, m, o);
        return p;
    }),
    (function (a, b) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = b()) : "function" == typeof define && define.amd ? define(b) : (a.moment = b());
    })(this, function () {
        "use strict";
        function a() {
            return Uc.apply(null, arguments);
        }
        function b(a) {
            Uc = a;
        }
        function c(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
        }
        function d(a) {
            return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
        }
        function e(a, b) {
            var c,
                d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d;
        }
        function f(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        }
        function g(a, b) {
            for (var c in b) f(b, c) && (a[c] = b[c]);
            return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a;
        }
        function h(a, b, c, d) {
            return Da(a, b, c, d, !0).utc();
        }
        function i() {
            return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 };
        }
        function j(a) {
            return null == a._pf && (a._pf = i()), a._pf;
        }
        function k(a) {
            if (null == a._isValid) {
                var b = j(a);
                (a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated)),
                    a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
            }
            return a._isValid;
        }
        function l(a) {
            var b = h(NaN);
            return null != a ? g(j(b), a) : (j(b).userInvalidated = !0), b;
        }
        function m(a) {
            return void 0 === a;
        }
        function n(a, b) {
            var c, d, e;
            if (
                (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
                m(b._i) || (a._i = b._i),
                m(b._f) || (a._f = b._f),
                m(b._l) || (a._l = b._l),
                m(b._strict) || (a._strict = b._strict),
                m(b._tzm) || (a._tzm = b._tzm),
                m(b._isUTC) || (a._isUTC = b._isUTC),
                m(b._offset) || (a._offset = b._offset),
                m(b._pf) || (a._pf = j(b)),
                m(b._locale) || (a._locale = b._locale),
                Wc.length > 0)
            )
                for (c in Wc) (d = Wc[c]), (e = b[d]), m(e) || (a[d] = e);
            return a;
        }
        function o(b) {
            n(this, b), (this._d = new Date(null != b._d ? b._d.getTime() : NaN)), Xc === !1 && ((Xc = !0), a.updateOffset(this), (Xc = !1));
        }
        function p(a) {
            return a instanceof o || (null != a && null != a._isAMomentObject);
        }
        function q(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a);
        }
        function r(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = q(b)), c;
        }
        function s(a, b, c) {
            var d,
                e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++) ((c && a[d] !== b[d]) || (!c && r(a[d]) !== r(b[d]))) && g++;
            return g + f;
        }
        function t() {}
        function u(a) {
            return a ? a.toLowerCase().replace("_", "-") : a;
        }
        function v(a) {
            for (var b, c, d, e, f = 0; f < a.length; ) {
                for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0; ) {
                    if ((d = w(e.slice(0, b).join("-")))) return d;
                    if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                    b--;
                }
                f++;
            }
            return null;
        }
        function w(a) {
            var b = null;
            if (!Yc[a] && "undefined" != typeof module && module && module.exports)
                try {
                    (b = Vc._abbr), require("./locale/" + a), x(b);
                } catch (c) {}
            return Yc[a];
        }
        function x(a, b) {
            var c;
            return a && ((c = m(b) ? z(a) : y(a, b)), c && (Vc = c)), Vc._abbr;
        }
        function y(a, b) {
            return null !== b ? ((b.abbr = a), (Yc[a] = Yc[a] || new t()), Yc[a].set(b), x(a), Yc[a]) : (delete Yc[a], null);
        }
        function z(a) {
            var b;
            if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)) return Vc;
            if (!c(a)) {
                if ((b = w(a))) return b;
                a = [a];
            }
            return v(a);
        }
        function A(a, b) {
            var c = a.toLowerCase();
            Zc[c] = Zc[c + "s"] = Zc[b] = a;
        }
        function B(a) {
            return "string" == typeof a ? Zc[a] || Zc[a.toLowerCase()] : void 0;
        }
        function C(a) {
            var b,
                c,
                d = {};
            for (c in a) f(a, c) && ((b = B(c)), b && (d[b] = a[c]));
            return d;
        }
        function D(a) {
            return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
        }
        function E(b, c) {
            return function (d) {
                return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b);
            };
        }
        function F(a, b) {
            return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
        }
        function G(a, b, c) {
            a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
        }
        function H(a, b) {
            var c;
            if ("object" == typeof a) for (c in a) this.set(c, a[c]);
            else if (((a = B(a)), D(this[a]))) return this[a](b);
            return this;
        }
        function I(a, b, c) {
            var d = "" + Math.abs(a),
                e = b - d.length,
                f = a >= 0;
            return (f ? (c ? "+" : "") : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
        }
        function J(a, b, c, d) {
            var e = d;
            "string" == typeof d &&
                (e = function () {
                    return this[d]();
                }),
                a && (bd[a] = e),
                b &&
                    (bd[b[0]] = function () {
                        return I(e.apply(this, arguments), b[1], b[2]);
                    }),
                c &&
                    (bd[c] = function () {
                        return this.localeData().ordinal(e.apply(this, arguments), a);
                    });
        }
        function K(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
        }
        function L(a) {
            var b,
                c,
                d = a.match($c);
            for (b = 0, c = d.length; c > b; b++) bd[d[b]] ? (d[b] = bd[d[b]]) : (d[b] = K(d[b]));
            return function (e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f;
            };
        }
        function M(a, b) {
            return a.isValid() ? ((b = N(b, a.localeData())), (ad[b] = ad[b] || L(b)), ad[b](a)) : a.localeData().invalidDate();
        }
        function N(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a;
            }
            var d = 5;
            for (_c.lastIndex = 0; d >= 0 && _c.test(a); ) (a = a.replace(_c, c)), (_c.lastIndex = 0), (d -= 1);
            return a;
        }
        function O(a, b, c) {
            td[a] = D(b)
                ? b
                : function (a, d) {
                      return a && c ? c : b;
                  };
        }
        function P(a, b) {
            return f(td, a) ? td[a](b._strict, b._locale) : new RegExp(Q(a));
        }
        function Q(a) {
            return R(
                a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                    return b || c || d || e;
                })
            );
        }
        function R(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function S(a, b) {
            var c,
                d = b;
            for (
                "string" == typeof a && (a = [a]),
                    "number" == typeof b &&
                        (d = function (a, c) {
                            c[b] = r(a);
                        }),
                    c = 0;
                c < a.length;
                c++
            )
                ud[a[c]] = d;
        }
        function T(a, b) {
            S(a, function (a, c, d, e) {
                (d._w = d._w || {}), b(a, d._w, d, e);
            });
        }
        function U(a, b, c) {
            null != b && f(ud, a) && ud[a](b, c._a, c, a);
        }
        function V(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
        }
        function W(a, b) {
            return c(this._months) ? this._months[a.month()] : this._months[Ed.test(b) ? "format" : "standalone"][a.month()];
        }
        function X(a, b) {
            return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ed.test(b) ? "format" : "standalone"][a.month()];
        }
        function Y(a, b, c) {
            var d, e, f;
            for (this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), d = 0; 12 > d; d++) {
                if (
                    ((e = h([2e3, d])),
                    c &&
                        !this._longMonthsParse[d] &&
                        ((this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i")), (this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i"))),
                    c || this._monthsParse[d] || ((f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, "")), (this._monthsParse[d] = new RegExp(f.replace(".", ""), "i"))),
                    c && "MMMM" === b && this._longMonthsParse[d].test(a))
                )
                    return d;
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                if (!c && this._monthsParse[d].test(a)) return d;
            }
        }
        function Z(a, b) {
            var c;
            return a.isValid() ? ("string" == typeof b && ((b = a.localeData().monthsParse(b)), "number" != typeof b) ? a : ((c = Math.min(a.date(), V(a.year(), b))), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)) : a;
        }
        function $(b) {
            return null != b ? (Z(this, b), a.updateOffset(this, !0), this) : F(this, "Month");
        }
        function _() {
            return V(this.year(), this.month());
        }
        function aa(a) {
            return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
        function ba(a) {
            return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex;
        }
        function ca() {
            function a(a, b) {
                return b.length - a.length;
            }
            var b,
                c,
                d = [],
                e = [],
                f = [];
            for (b = 0; 12 > b; b++) (c = h([2e3, b])), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
            for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) (d[b] = R(d[b])), (e[b] = R(e[b])), (f[b] = R(f[b]));
            (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
                (this._monthsShortRegex = this._monthsRegex),
                (this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i")),
                (this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i"));
        }
        function da(a) {
            var b,
                c = a._a;
            return (
                c &&
                    -2 === j(a).overflow &&
                    ((b =
                        c[wd] < 0 || c[wd] > 11
                            ? wd
                            : c[xd] < 1 || c[xd] > V(c[vd], c[wd])
                            ? xd
                            : c[yd] < 0 || c[yd] > 24 || (24 === c[yd] && (0 !== c[zd] || 0 !== c[Ad] || 0 !== c[Bd]))
                            ? yd
                            : c[zd] < 0 || c[zd] > 59
                            ? zd
                            : c[Ad] < 0 || c[Ad] > 59
                            ? Ad
                            : c[Bd] < 0 || c[Bd] > 999
                            ? Bd
                            : -1),
                    j(a)._overflowDayOfYear && (vd > b || b > xd) && (b = xd),
                    j(a)._overflowWeeks && -1 === b && (b = Cd),
                    j(a)._overflowWeekday && -1 === b && (b = Dd),
                    (j(a).overflow = b)),
                a
            );
        }
        function ea(b) {
            a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
        }
        function fa(a, b) {
            var c = !0;
            return g(function () {
                return c && (ea(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + new Error().stack), (c = !1)), b.apply(this, arguments);
            }, b);
        }
        function ga(a, b) {
            Jd[a] || (ea(b), (Jd[a] = !0));
        }
        function ha(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = a._i,
                i = Kd.exec(h) || Ld.exec(h);
            if (i) {
                for (j(a).iso = !0, b = 0, c = Nd.length; c > b; b++)
                    if (Nd[b][1].exec(i[1])) {
                        (e = Nd[b][0]), (d = Nd[b][2] !== !1);
                        break;
                    }
                if (null == e) return void (a._isValid = !1);
                if (i[3]) {
                    for (b = 0, c = Od.length; c > b; b++)
                        if (Od[b][1].exec(i[3])) {
                            f = (i[2] || " ") + Od[b][0];
                            break;
                        }
                    if (null == f) return void (a._isValid = !1);
                }
                if (!d && null != f) return void (a._isValid = !1);
                if (i[4]) {
                    if (!Md.exec(i[4])) return void (a._isValid = !1);
                    g = "Z";
                }
                (a._f = e + (f || "") + (g || "")), wa(a);
            } else a._isValid = !1;
        }
        function ia(b) {
            var c = Pd.exec(b._i);
            return null !== c ? void (b._d = new Date(+c[1])) : (ha(b), void (b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))));
        }
        function ja(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
        }
        function ka(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
        }
        function la(a) {
            return ma(a) ? 366 : 365;
        }
        function ma(a) {
            return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
        }
        function na() {
            return ma(this.year());
        }
        function oa(a, b, c) {
            var d = 7 + b - c,
                e = (7 + ka(a, 0, d).getUTCDay() - b) % 7;
            return -e + d - 1;
        }
        function pa(a, b, c, d, e) {
            var f,
                g,
                h = (7 + c - d) % 7,
                i = oa(a, d, e),
                j = 1 + 7 * (b - 1) + h + i;
            return 0 >= j ? ((f = a - 1), (g = la(f) + j)) : j > la(a) ? ((f = a + 1), (g = j - la(a))) : ((f = a), (g = j)), { year: f, dayOfYear: g };
        }
        function qa(a, b, c) {
            var d,
                e,
                f = oa(a.year(), b, c),
                g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
            return 1 > g ? ((e = a.year() - 1), (d = g + ra(e, b, c))) : g > ra(a.year(), b, c) ? ((d = g - ra(a.year(), b, c)), (e = a.year() + 1)) : ((e = a.year()), (d = g)), { week: d, year: e };
        }
        function ra(a, b, c) {
            var d = oa(a, b, c),
                e = oa(a + 1, b, c);
            return (la(a) - d + e) / 7;
        }
        function sa(a, b, c) {
            return null != a ? a : null != b ? b : c;
        }
        function ta(b) {
            var c = new Date(a.now());
            return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
        }
        function ua(a) {
            var b,
                c,
                d,
                e,
                f = [];
            if (!a._d) {
                for (
                    d = ta(a),
                        a._w && null == a._a[xd] && null == a._a[wd] && va(a),
                        a._dayOfYear && ((e = sa(a._a[vd], d[vd])), a._dayOfYear > la(e) && (j(a)._overflowDayOfYear = !0), (c = ka(e, 0, a._dayOfYear)), (a._a[wd] = c.getUTCMonth()), (a._a[xd] = c.getUTCDate())),
                        b = 0;
                    3 > b && null == a._a[b];
                    ++b
                )
                    a._a[b] = f[b] = d[b];
                for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
                24 === a._a[yd] && 0 === a._a[zd] && 0 === a._a[Ad] && 0 === a._a[Bd] && ((a._nextDay = !0), (a._a[yd] = 0)),
                    (a._d = (a._useUTC ? ka : ja).apply(null, f)),
                    null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
                    a._nextDay && (a._a[yd] = 24);
            }
        }
        function va(a) {
            var b, c, d, e, f, g, h, i;
            (b = a._w),
                null != b.GG || null != b.W || null != b.E
                    ? ((f = 1), (g = 4), (c = sa(b.GG, a._a[vd], qa(Ea(), 1, 4).year)), (d = sa(b.W, 1)), (e = sa(b.E, 1)), (1 > e || e > 7) && (i = !0))
                    : ((f = a._locale._week.dow),
                      (g = a._locale._week.doy),
                      (c = sa(b.gg, a._a[vd], qa(Ea(), f, g).year)),
                      (d = sa(b.w, 1)),
                      null != b.d ? ((e = b.d), (0 > e || e > 6) && (i = !0)) : null != b.e ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0)) : (e = f)),
                1 > d || d > ra(c, f, g) ? (j(a)._overflowWeeks = !0) : null != i ? (j(a)._overflowWeekday = !0) : ((h = pa(c, d, e, f, g)), (a._a[vd] = h.year), (a._dayOfYear = h.dayOfYear));
        }
        function wa(b) {
            if (b._f === a.ISO_8601) return void ha(b);
            (b._a = []), (j(b).empty = !0);
            var c,
                d,
                e,
                f,
                g,
                h = "" + b._i,
                i = h.length,
                k = 0;
            for (e = N(b._f, b._locale).match($c) || [], c = 0; c < e.length; c++)
                (f = e[c]),
                    (d = (h.match(P(f, b)) || [])[0]),
                    d && ((g = h.substr(0, h.indexOf(d))), g.length > 0 && j(b).unusedInput.push(g), (h = h.slice(h.indexOf(d) + d.length)), (k += d.length)),
                    bd[f] ? (d ? (j(b).empty = !1) : j(b).unusedTokens.push(f), U(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
            (j(b).charsLeftOver = i - k), h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[yd] <= 12 && b._a[yd] > 0 && (j(b).bigHour = void 0), (b._a[yd] = xa(b._locale, b._a[yd], b._meridiem)), ua(b), da(b);
        }
        function xa(a, b, c) {
            var d;
            return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? ((d = a.isPM(c)), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b;
        }
        function ya(a) {
            var b, c, d, e, f;
            if (0 === a._f.length) return (j(a).invalidFormat = !0), void (a._d = new Date(NaN));
            for (e = 0; e < a._f.length; e++)
                (f = 0),
                    (b = n({}, a)),
                    null != a._useUTC && (b._useUTC = a._useUTC),
                    (b._f = a._f[e]),
                    wa(b),
                    k(b) && ((f += j(b).charsLeftOver), (f += 10 * j(b).unusedTokens.length), (j(b).score = f), (null == d || d > f) && ((d = f), (c = b)));
            g(a, c || b);
        }
        function za(a) {
            if (!a._d) {
                var b = C(a._i);
                (a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                    return a && parseInt(a, 10);
                })),
                    ua(a);
            }
        }
        function Aa(a) {
            var b = new o(da(Ba(a)));
            return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
        }
        function Ba(a) {
            var b = a._i,
                e = a._f;
            return (
                (a._locale = a._locale || z(a._l)),
                null === b || (void 0 === e && "" === b)
                    ? l({ nullInput: !0 })
                    : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(da(b)) : (c(e) ? ya(a) : e ? wa(a) : d(b) ? (a._d = b) : Ca(a), k(a) || (a._d = null), a))
            );
        }
        function Ca(b) {
            var f = b._i;
            void 0 === f
                ? (b._d = new Date(a.now()))
                : d(f)
                ? (b._d = new Date(+f))
                : "string" == typeof f
                ? ia(b)
                : c(f)
                ? ((b._a = e(f.slice(0), function (a) {
                      return parseInt(a, 10);
                  })),
                  ua(b))
                : "object" == typeof f
                ? za(b)
                : "number" == typeof f
                ? (b._d = new Date(f))
                : a.createFromInputFallback(b);
        }
        function Da(a, b, c, d, e) {
            var f = {};
            return "boolean" == typeof c && ((d = c), (c = void 0)), (f._isAMomentObject = !0), (f._useUTC = f._isUTC = e), (f._l = c), (f._i = a), (f._f = b), (f._strict = d), Aa(f);
        }
        function Ea(a, b, c, d) {
            return Da(a, b, c, d, !1);
        }
        function Fa(a, b) {
            var d, e;
            if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return Ea();
            for (d = b[0], e = 1; e < b.length; ++e) (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
            return d;
        }
        function Ga() {
            var a = [].slice.call(arguments, 0);
            return Fa("isBefore", a);
        }
        function Ha() {
            var a = [].slice.call(arguments, 0);
            return Fa("isAfter", a);
        }
        function Ia(a) {
            var b = C(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            (this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h), (this._days = +g + 7 * f), (this._months = +e + 3 * d + 12 * c), (this._data = {}), (this._locale = z()), this._bubble();
        }
        function Ja(a) {
            return a instanceof Ia;
        }
        function Ka(a, b) {
            J(a, 0, 0, function () {
                var a = this.utcOffset(),
                    c = "+";
                return 0 > a && ((a = -a), (c = "-")), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2);
            });
        }
        function La(a, b) {
            var c = (b || "").match(a) || [],
                d = c[c.length - 1] || [],
                e = (d + "").match(Ud) || ["-", 0, 0],
                f = +(60 * e[1]) + r(e[2]);
            return "+" === e[0] ? f : -f;
        }
        function Ma(b, c) {
            var e, f;
            return c._isUTC ? ((e = c.clone()), (f = (p(b) || d(b) ? +b : +Ea(b)) - +e), e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ea(b).local();
        }
        function Na(a) {
            return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
        }
        function Oa(b, c) {
            var d,
                e = this._offset || 0;
            return this.isValid()
                ? null != b
                    ? ("string" == typeof b ? (b = La(qd, b)) : Math.abs(b) < 16 && (b = 60 * b),
                      !this._isUTC && c && (d = Na(this)),
                      (this._offset = b),
                      (this._isUTC = !0),
                      null != d && this.add(d, "m"),
                      e !== b && (!c || this._changeInProgress ? cb(this, Za(b - e, "m"), 1, !1) : this._changeInProgress || ((this._changeInProgress = !0), a.updateOffset(this, !0), (this._changeInProgress = null))),
                      this)
                    : this._isUTC
                    ? e
                    : Na(this)
                : null != b
                ? this
                : NaN;
        }
        function Pa(a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
        }
        function Qa(a) {
            return this.utcOffset(0, a);
        }
        function Ra(a) {
            return this._isUTC && (this.utcOffset(0, a), (this._isUTC = !1), a && this.subtract(Na(this), "m")), this;
        }
        function Sa() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(La(pd, this._i)), this;
        }
        function Ta(a) {
            return this.isValid() ? ((a = a ? Ea(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0) : !1;
        }
        function Ua() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function Va() {
            if (!m(this._isDSTShifted)) return this._isDSTShifted;
            var a = {};
            if ((n(a, this), (a = Ba(a)), a._a)) {
                var b = a._isUTC ? h(a._a) : Ea(a._a);
                this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
            } else this._isDSTShifted = !1;
            return this._isDSTShifted;
        }
        function Wa() {
            return this.isValid() ? !this._isUTC : !1;
        }
        function Xa() {
            return this.isValid() ? this._isUTC : !1;
        }
        function Ya() {
            return this.isValid() ? this._isUTC && 0 === this._offset : !1;
        }
        function Za(a, b) {
            var c,
                d,
                e,
                g = a,
                h = null;
            return (
                Ja(a)
                    ? (g = { ms: a._milliseconds, d: a._days, M: a._months })
                    : "number" == typeof a
                    ? ((g = {}), b ? (g[b] = a) : (g.milliseconds = a))
                    : (h = Vd.exec(a))
                    ? ((c = "-" === h[1] ? -1 : 1), (g = { y: 0, d: r(h[xd]) * c, h: r(h[yd]) * c, m: r(h[zd]) * c, s: r(h[Ad]) * c, ms: r(h[Bd]) * c }))
                    : (h = Wd.exec(a))
                    ? ((c = "-" === h[1] ? -1 : 1), (g = { y: $a(h[2], c), M: $a(h[3], c), d: $a(h[4], c), h: $a(h[5], c), m: $a(h[6], c), s: $a(h[7], c), w: $a(h[8], c) }))
                    : null == g
                    ? (g = {})
                    : "object" == typeof g && ("from" in g || "to" in g) && ((e = ab(Ea(g.from), Ea(g.to))), (g = {}), (g.ms = e.milliseconds), (g.M = e.months)),
                (d = new Ia(g)),
                Ja(a) && f(a, "_locale") && (d._locale = a._locale),
                d
            );
        }
        function $a(a, b) {
            var c = a && parseFloat(a.replace(",", "."));
            return (isNaN(c) ? 0 : c) * b;
        }
        function _a(a, b) {
            var c = { milliseconds: 0, months: 0 };
            return (c.months = b.month() - a.month() + 12 * (b.year() - a.year())), a.clone().add(c.months, "M").isAfter(b) && --c.months, (c.milliseconds = +b - +a.clone().add(c.months, "M")), c;
        }
        function ab(a, b) {
            var c;
            return a.isValid() && b.isValid() ? ((b = Ma(b, a)), a.isBefore(b) ? (c = _a(a, b)) : ((c = _a(b, a)), (c.milliseconds = -c.milliseconds), (c.months = -c.months)), c) : { milliseconds: 0, months: 0 };
        }
        function bb(a, b) {
            return function (c, d) {
                var e, f;
                return (
                    null === d || isNaN(+d) || (ga(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), (f = c), (c = d), (d = f)),
                    (c = "string" == typeof c ? +c : c),
                    (e = Za(c, d)),
                    cb(this, e, a),
                    this
                );
            };
        }
        function cb(b, c, d, e) {
            var f = c._milliseconds,
                g = c._days,
                h = c._months;
            b.isValid() && ((e = null == e ? !0 : e), f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Z(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h));
        }
        function db(a, b) {
            var c = a || Ea(),
                d = Ma(c, this).startOf("day"),
                e = this.diff(d, "days", !0),
                f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
                g = b && (D(b[f]) ? b[f]() : b[f]);
            return this.format(g || this.localeData().calendar(f, this, Ea(c)));
        }
        function eb() {
            return new o(this);
        }
        function fb(a, b) {
            var c = p(a) ? a : Ea(a);
            return this.isValid() && c.isValid() ? ((b = B(m(b) ? "millisecond" : b)), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1;
        }
        function gb(a, b) {
            var c = p(a) ? a : Ea(a);
            return this.isValid() && c.isValid() ? ((b = B(m(b) ? "millisecond" : b)), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1;
        }
        function hb(a, b, c) {
            return this.isAfter(a, c) && this.isBefore(b, c);
        }
        function ib(a, b) {
            var c,
                d = p(a) ? a : Ea(a);
            return this.isValid() && d.isValid() ? ((b = B(b || "millisecond")), "millisecond" === b ? +this === +d : ((c = +d), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1;
        }
        function jb(a, b) {
            return this.isSame(a, b) || this.isAfter(a, b);
        }
        function kb(a, b) {
            return this.isSame(a, b) || this.isBefore(a, b);
        }
        function lb(a, b, c) {
            var d, e, f, g;
            return this.isValid()
                ? ((d = Ma(a, this)),
                  d.isValid()
                      ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
                        (b = B(b)),
                        "year" === b || "month" === b || "quarter" === b
                            ? ((g = mb(this, d)), "quarter" === b ? (g /= 3) : "year" === b && (g /= 12))
                            : ((f = this - d), (g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f)),
                        c ? g : q(g))
                      : NaN)
                : NaN;
        }
        function mb(a, b) {
            var c,
                d,
                e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                f = a.clone().add(e, "months");
            return 0 > b - f ? ((c = a.clone().add(e - 1, "months")), (d = (b - f) / (f - c))) : ((c = a.clone().add(e + 1, "months")), (d = (b - f) / (c - f))), -(e + d);
        }
        function nb() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function ob() {
            var a = this.clone().utc();
            return 0 < a.year() && a.year() <= 9999 ? (D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")) : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        }
        function pb(b) {
            var c = M(this, b || a.defaultFormat);
            return this.localeData().postformat(c);
        }
        function qb(a, b) {
            return this.isValid() && ((p(a) && a.isValid()) || Ea(a).isValid()) ? Za({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
        }
        function rb(a) {
            return this.from(Ea(), a);
        }
        function sb(a, b) {
            return this.isValid() && ((p(a) && a.isValid()) || Ea(a).isValid()) ? Za({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
        }
        function tb(a) {
            return this.to(Ea(), a);
        }
        function ub(a) {
            var b;
            return void 0 === a ? this._locale._abbr : ((b = z(a)), null != b && (this._locale = b), this);
        }
        function vb() {
            return this._locale;
        }
        function wb(a) {
            switch ((a = B(a))) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0);
            }
            return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
        }
        function xb(a) {
            return (
                (a = B(a)),
                void 0 === a || "millisecond" === a
                    ? this
                    : this.startOf(a)
                          .add(1, "isoWeek" === a ? "week" : a)
                          .subtract(1, "ms")
            );
        }
        function yb() {
            return +this._d - 6e4 * (this._offset || 0);
        }
        function zb() {
            return Math.floor(+this / 1e3);
        }
        function Ab() {
            return this._offset ? new Date(+this) : this._d;
        }
        function Bb() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
        }
        function Cb() {
            var a = this;
            return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
        }
        function Db() {
            return this.isValid() ? this.toISOString() : "null";
        }
        function Eb() {
            return k(this);
        }
        function Fb() {
            return g({}, j(this));
        }
        function Gb() {
            return j(this).overflow;
        }
        function Hb() {
            return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
        }
        function Ib(a, b) {
            J(0, [a, a.length], 0, b);
        }
        function Jb(a) {
            return Nb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }
        function Kb(a) {
            return Nb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function Lb() {
            return ra(this.year(), 1, 4);
        }
        function Mb() {
            var a = this.localeData()._week;
            return ra(this.year(), a.dow, a.doy);
        }
        function Nb(a, b, c, d, e) {
            var f;
            return null == a ? qa(this, d, e).year : ((f = ra(a, d, e)), b > f && (b = f), Ob.call(this, a, b, c, d, e));
        }
        function Ob(a, b, c, d, e) {
            var f = pa(a, b, c, d, e),
                g = ka(f.year, 0, f.dayOfYear);
            return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
        }
        function Pb(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + (this.month() % 3));
        }
        function Qb(a) {
            return qa(a, this._week.dow, this._week.doy).week;
        }
        function Rb() {
            return this._week.dow;
        }
        function Sb() {
            return this._week.doy;
        }
        function Tb(a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d");
        }
        function Ub(a) {
            var b = qa(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d");
        }
        function Vb(a, b) {
            return "string" != typeof a ? a : isNaN(a) ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null) : parseInt(a, 10);
        }
        function Wb(a, b) {
            return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()];
        }
        function Xb(a) {
            return this._weekdaysShort[a.day()];
        }
        function Yb(a) {
            return this._weekdaysMin[a.day()];
        }
        function Zb(a, b, c) {
            var d, e, f;
            for (this._weekdaysParse || ((this._weekdaysParse = []), (this._minWeekdaysParse = []), (this._shortWeekdaysParse = []), (this._fullWeekdaysParse = [])), d = 0; 7 > d; d++) {
                if (
                    ((e = Ea([2e3, 1]).day(d)),
                    c &&
                        !this._fullWeekdaysParse[d] &&
                        ((this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i")),
                        (this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i")),
                        (this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i"))),
                    this._weekdaysParse[d] || ((f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, "")), (this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i"))),
                    c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
                )
                    return d;
                if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
                if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
                if (!c && this._weekdaysParse[d].test(a)) return d;
            }
        }
        function $b(a) {
            if (!this.isValid()) return null != a ? this : NaN;
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? ((a = Vb(a, this.localeData())), this.add(a - b, "d")) : b;
        }
        function _b(a) {
            if (!this.isValid()) return null != a ? this : NaN;
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d");
        }
        function ac(a) {
            return this.isValid() ? (null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)) : null != a ? this : NaN;
        }
        function bc(a) {
            var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add(a - b, "d");
        }
        function cc() {
            return this.hours() % 12 || 12;
        }
        function dc(a, b) {
            J(a, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), b);
            });
        }
        function ec(a, b) {
            return b._meridiemParse;
        }
        function fc(a) {
            return "p" === (a + "").toLowerCase().charAt(0);
        }
        function gc(a, b, c) {
            return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
        }
        function hc(a, b) {
            b[Bd] = r(1e3 * ("0." + a));
        }
        function ic() {
            return this._isUTC ? "UTC" : "";
        }
        function jc() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        }
        function kc(a) {
            return Ea(1e3 * a);
        }
        function lc() {
            return Ea.apply(null, arguments).parseZone();
        }
        function mc(a, b, c) {
            var d = this._calendar[a];
            return D(d) ? d.call(b, c) : d;
        }
        function nc(a) {
            var b = this._longDateFormat[a],
                c = this._longDateFormat[a.toUpperCase()];
            return b || !c
                ? b
                : ((this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
                      return a.slice(1);
                  })),
                  this._longDateFormat[a]);
        }
        function oc() {
            return this._invalidDate;
        }
        function pc(a) {
            return this._ordinal.replace("%d", a);
        }
        function qc(a) {
            return a;
        }
        function rc(a, b, c, d) {
            var e = this._relativeTime[c];
            return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
        }
        function sc(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return D(c) ? c(b) : c.replace(/%s/i, b);
        }
        function tc(a) {
            var b, c;
            for (c in a) (b = a[c]), D(b) ? (this[c] = b) : (this["_" + c] = b);
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
        }
        function uc(a, b, c, d) {
            var e = z(),
                f = h().set(d, b);
            return e[c](f, a);
        }
        function vc(a, b, c, d, e) {
            if (("number" == typeof a && ((b = a), (a = void 0)), (a = a || ""), null != b)) return uc(a, b, c, e);
            var f,
                g = [];
            for (f = 0; d > f; f++) g[f] = uc(a, f, c, e);
            return g;
        }
        function wc(a, b) {
            return vc(a, b, "months", 12, "month");
        }
        function xc(a, b) {
            return vc(a, b, "monthsShort", 12, "month");
        }
        function yc(a, b) {
            return vc(a, b, "weekdays", 7, "day");
        }
        function zc(a, b) {
            return vc(a, b, "weekdaysShort", 7, "day");
        }
        function Ac(a, b) {
            return vc(a, b, "weekdaysMin", 7, "day");
        }
        function Bc() {
            var a = this._data;
            return (
                (this._milliseconds = se(this._milliseconds)),
                (this._days = se(this._days)),
                (this._months = se(this._months)),
                (a.milliseconds = se(a.milliseconds)),
                (a.seconds = se(a.seconds)),
                (a.minutes = se(a.minutes)),
                (a.hours = se(a.hours)),
                (a.months = se(a.months)),
                (a.years = se(a.years)),
                this
            );
        }
        function Cc(a, b, c, d) {
            var e = Za(b, c);
            return (a._milliseconds += d * e._milliseconds), (a._days += d * e._days), (a._months += d * e._months), a._bubble();
        }
        function Dc(a, b) {
            return Cc(this, a, b, 1);
        }
        function Ec(a, b) {
            return Cc(this, a, b, -1);
        }
        function Fc(a) {
            return 0 > a ? Math.floor(a) : Math.ceil(a);
        }
        function Gc() {
            var a,
                b,
                c,
                d,
                e,
                f = this._milliseconds,
                g = this._days,
                h = this._months,
                i = this._data;
            return (
                (f >= 0 && g >= 0 && h >= 0) || (0 >= f && 0 >= g && 0 >= h) || ((f += 864e5 * Fc(Ic(h) + g)), (g = 0), (h = 0)),
                (i.milliseconds = f % 1e3),
                (a = q(f / 1e3)),
                (i.seconds = a % 60),
                (b = q(a / 60)),
                (i.minutes = b % 60),
                (c = q(b / 60)),
                (i.hours = c % 24),
                (g += q(c / 24)),
                (e = q(Hc(g))),
                (h += e),
                (g -= Fc(Ic(e))),
                (d = q(h / 12)),
                (h %= 12),
                (i.days = g),
                (i.months = h),
                (i.years = d),
                this
            );
        }
        function Hc(a) {
            return (4800 * a) / 146097;
        }
        function Ic(a) {
            return (146097 * a) / 4800;
        }
        function Jc(a) {
            var b,
                c,
                d = this._milliseconds;
            if (((a = B(a)), "month" === a || "year" === a)) return (b = this._days + d / 864e5), (c = this._months + Hc(b)), "month" === a ? c : c / 12;
            switch (((b = this._days + Math.round(Ic(this._months))), a)) {
                case "week":
                    return b / 7 + d / 6048e5;
                case "day":
                    return b + d / 864e5;
                case "hour":
                    return 24 * b + d / 36e5;
                case "minute":
                    return 1440 * b + d / 6e4;
                case "second":
                    return 86400 * b + d / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * b) + d;
                default:
                    throw new Error("Unknown unit " + a);
            }
        }
        function Kc() {
            return this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * r(this._months / 12);
        }
        function Lc(a) {
            return function () {
                return this.as(a);
            };
        }
        function Mc(a) {
            return (a = B(a)), this[a + "s"]();
        }
        function Nc(a) {
            return function () {
                return this._data[a];
            };
        }
        function Oc() {
            return q(this.days() / 7);
        }
        function Pc(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d);
        }
        function Qc(a, b, c) {
            var d = Za(a).abs(),
                e = Ie(d.as("s")),
                f = Ie(d.as("m")),
                g = Ie(d.as("h")),
                h = Ie(d.as("d")),
                i = Ie(d.as("M")),
                j = Ie(d.as("y")),
                k = (e < Je.s && ["s", e]) ||
                    (1 >= f && ["m"]) ||
                    (f < Je.m && ["mm", f]) ||
                    (1 >= g && ["h"]) ||
                    (g < Je.h && ["hh", g]) ||
                    (1 >= h && ["d"]) ||
                    (h < Je.d && ["dd", h]) ||
                    (1 >= i && ["M"]) ||
                    (i < Je.M && ["MM", i]) ||
                    (1 >= j && ["y"]) || ["yy", j];
            return (k[2] = b), (k[3] = +a > 0), (k[4] = c), Pc.apply(null, k);
        }
        function Rc(a, b) {
            return void 0 === Je[a] ? !1 : void 0 === b ? Je[a] : ((Je[a] = b), !0);
        }
        function Sc(a) {
            var b = this.localeData(),
                c = Qc(this, !a, b);
            return a && (c = b.pastFuture(+this, c)), b.postformat(c);
        }
        function Tc() {
            var a,
                b,
                c,
                d = Ke(this._milliseconds) / 1e3,
                e = Ke(this._days),
                f = Ke(this._months);
            (a = q(d / 60)), (b = q(a / 60)), (d %= 60), (a %= 60), (c = q(f / 12)), (f %= 12);
            var g = c,
                h = f,
                i = e,
                j = b,
                k = a,
                l = d,
                m = this.asSeconds();
            return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
        }
        var Uc,
            Vc,
            Wc = (a.momentProperties = []),
            Xc = !1,
            Yc = {},
            Zc = {},
            $c = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            _c = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            ad = {},
            bd = {},
            cd = /\d/,
            dd = /\d\d/,
            ed = /\d{3}/,
            fd = /\d{4}/,
            gd = /[+-]?\d{6}/,
            hd = /\d\d?/,
            id = /\d\d\d\d?/,
            jd = /\d\d\d\d\d\d?/,
            kd = /\d{1,3}/,
            ld = /\d{1,4}/,
            md = /[+-]?\d{1,6}/,
            nd = /\d+/,
            od = /[+-]?\d+/,
            pd = /Z|[+-]\d\d:?\d\d/gi,
            qd = /Z|[+-]\d\d(?::?\d\d)?/gi,
            rd = /[+-]?\d+(\.\d{1,3})?/,
            sd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            td = {},
            ud = {},
            vd = 0,
            wd = 1,
            xd = 2,
            yd = 3,
            zd = 4,
            Ad = 5,
            Bd = 6,
            Cd = 7,
            Dd = 8;
        J("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
        }),
            J("MMM", 0, 0, function (a) {
                return this.localeData().monthsShort(this, a);
            }),
            J("MMMM", 0, 0, function (a) {
                return this.localeData().months(this, a);
            }),
            A("month", "M"),
            O("M", hd),
            O("MM", hd, dd),
            O("MMM", function (a, b) {
                return b.monthsShortRegex(a);
            }),
            O("MMMM", function (a, b) {
                return b.monthsRegex(a);
            }),
            S(["M", "MM"], function (a, b) {
                b[wd] = r(a) - 1;
            }),
            S(["MMM", "MMMM"], function (a, b, c, d) {
                var e = c._locale.monthsParse(a, d, c._strict);
                null != e ? (b[wd] = e) : (j(c).invalidMonth = a);
            });
        var Ed = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            Fd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Gd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Hd = sd,
            Id = sd,
            Jd = {};
        a.suppressDeprecationWarnings = !1;
        var Kd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Ld = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Md = /Z|[+-]\d\d(?::?\d\d)?/,
            Nd = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/],
            ],
            Od = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/],
            ],
            Pd = /^\/?Date\((\-?\d+)/i;
        (a.createFromInputFallback = fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (
            a
        ) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
        })),
            J("Y", 0, 0, function () {
                var a = this.year();
                return 9999 >= a ? "" + a : "+" + a;
            }),
            J(0, ["YY", 2], 0, function () {
                return this.year() % 100;
            }),
            J(0, ["YYYY", 4], 0, "year"),
            J(0, ["YYYYY", 5], 0, "year"),
            J(0, ["YYYYYY", 6, !0], 0, "year"),
            A("year", "y"),
            O("Y", od),
            O("YY", hd, dd),
            O("YYYY", ld, fd),
            O("YYYYY", md, gd),
            O("YYYYYY", md, gd),
            S(["YYYYY", "YYYYYY"], vd),
            S("YYYY", function (b, c) {
                c[vd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
            }),
            S("YY", function (b, c) {
                c[vd] = a.parseTwoDigitYear(b);
            }),
            S("Y", function (a, b) {
                b[vd] = parseInt(a, 10);
            }),
            (a.parseTwoDigitYear = function (a) {
                return r(a) + (r(a) > 68 ? 1900 : 2e3);
            });
        var Qd = E("FullYear", !1);
        a.ISO_8601 = function () {};
        var Rd = fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Ea.apply(null, arguments);
                return this.isValid() && a.isValid() ? (this > a ? this : a) : l();
            }),
            Sd = fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Ea.apply(null, arguments);
                return this.isValid() && a.isValid() ? (a > this ? this : a) : l();
            }),
            Td = function () {
                return Date.now ? Date.now() : +new Date();
            };
        Ka("Z", ":"),
            Ka("ZZ", ""),
            O("Z", qd),
            O("ZZ", qd),
            S(["Z", "ZZ"], function (a, b, c) {
                (c._useUTC = !0), (c._tzm = La(qd, a));
            });
        var Ud = /([\+\-]|\d\d)/gi;
        a.updateOffset = function () {};
        var Vd = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            Wd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Za.fn = Ia.prototype;
        var Xd = bb(1, "add"),
            Yd = bb(-1, "subtract");
        a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Zd = fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
            return void 0 === a ? this.localeData() : this.locale(a);
        });
        J(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
        }),
            J(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100;
            }),
            Ib("gggg", "weekYear"),
            Ib("ggggg", "weekYear"),
            Ib("GGGG", "isoWeekYear"),
            Ib("GGGGG", "isoWeekYear"),
            A("weekYear", "gg"),
            A("isoWeekYear", "GG"),
            O("G", od),
            O("g", od),
            O("GG", hd, dd),
            O("gg", hd, dd),
            O("GGGG", ld, fd),
            O("gggg", ld, fd),
            O("GGGGG", md, gd),
            O("ggggg", md, gd),
            T(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
                b[d.substr(0, 2)] = r(a);
            }),
            T(["gg", "GG"], function (b, c, d, e) {
                c[e] = a.parseTwoDigitYear(b);
            }),
            J("Q", 0, "Qo", "quarter"),
            A("quarter", "Q"),
            O("Q", cd),
            S("Q", function (a, b) {
                b[wd] = 3 * (r(a) - 1);
            }),
            J("w", ["ww", 2], "wo", "week"),
            J("W", ["WW", 2], "Wo", "isoWeek"),
            A("week", "w"),
            A("isoWeek", "W"),
            O("w", hd),
            O("ww", hd, dd),
            O("W", hd),
            O("WW", hd, dd),
            T(["w", "ww", "W", "WW"], function (a, b, c, d) {
                b[d.substr(0, 1)] = r(a);
            });
        var $d = { dow: 0, doy: 6 };
        J("D", ["DD", 2], "Do", "date"),
            A("date", "D"),
            O("D", hd),
            O("DD", hd, dd),
            O("Do", function (a, b) {
                return a ? b._ordinalParse : b._ordinalParseLenient;
            }),
            S(["D", "DD"], xd),
            S("Do", function (a, b) {
                b[xd] = r(a.match(hd)[0], 10);
            });
        var _d = E("Date", !0);
        J("d", 0, "do", "day"),
            J("dd", 0, 0, function (a) {
                return this.localeData().weekdaysMin(this, a);
            }),
            J("ddd", 0, 0, function (a) {
                return this.localeData().weekdaysShort(this, a);
            }),
            J("dddd", 0, 0, function (a) {
                return this.localeData().weekdays(this, a);
            }),
            J("e", 0, 0, "weekday"),
            J("E", 0, 0, "isoWeekday"),
            A("day", "d"),
            A("weekday", "e"),
            A("isoWeekday", "E"),
            O("d", hd),
            O("e", hd),
            O("E", hd),
            O("dd", sd),
            O("ddd", sd),
            O("dddd", sd),
            T(["dd", "ddd", "dddd"], function (a, b, c, d) {
                var e = c._locale.weekdaysParse(a, d, c._strict);
                null != e ? (b.d = e) : (j(c).invalidWeekday = a);
            }),
            T(["d", "e", "E"], function (a, b, c, d) {
                b[d] = r(a);
            });
        var ae = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            ce = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            A("dayOfYear", "DDD"),
            O("DDD", kd),
            O("DDDD", ed),
            S(["DDD", "DDDD"], function (a, b, c) {
                c._dayOfYear = r(a);
            }),
            J("H", ["HH", 2], 0, "hour"),
            J("h", ["hh", 2], 0, cc),
            J("hmm", 0, 0, function () {
                return "" + cc.apply(this) + I(this.minutes(), 2);
            }),
            J("hmmss", 0, 0, function () {
                return "" + cc.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2);
            }),
            J("Hmm", 0, 0, function () {
                return "" + this.hours() + I(this.minutes(), 2);
            }),
            J("Hmmss", 0, 0, function () {
                return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2);
            }),
            dc("a", !0),
            dc("A", !1),
            A("hour", "h"),
            O("a", ec),
            O("A", ec),
            O("H", hd),
            O("h", hd),
            O("HH", hd, dd),
            O("hh", hd, dd),
            O("hmm", id),
            O("hmmss", jd),
            O("Hmm", id),
            O("Hmmss", jd),
            S(["H", "HH"], yd),
            S(["a", "A"], function (a, b, c) {
                (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
            }),
            S(["h", "hh"], function (a, b, c) {
                (b[yd] = r(a)), (j(c).bigHour = !0);
            }),
            S("hmm", function (a, b, c) {
                var d = a.length - 2;
                (b[yd] = r(a.substr(0, d))), (b[zd] = r(a.substr(d))), (j(c).bigHour = !0);
            }),
            S("hmmss", function (a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                (b[yd] = r(a.substr(0, d))), (b[zd] = r(a.substr(d, 2))), (b[Ad] = r(a.substr(e))), (j(c).bigHour = !0);
            }),
            S("Hmm", function (a, b, c) {
                var d = a.length - 2;
                (b[yd] = r(a.substr(0, d))), (b[zd] = r(a.substr(d)));
            }),
            S("Hmmss", function (a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                (b[yd] = r(a.substr(0, d))), (b[zd] = r(a.substr(d, 2))), (b[Ad] = r(a.substr(e)));
            });
        var de = /[ap]\.?m?\.?/i,
            ee = E("Hours", !0);
        J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", hd), O("mm", hd, dd), S(["m", "mm"], zd);
        var fe = E("Minutes", !1);
        J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", hd), O("ss", hd, dd), S(["s", "ss"], Ad);
        var ge = E("Seconds", !1);
        J("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
        }),
            J(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
            }),
            J(0, ["SSS", 3], 0, "millisecond"),
            J(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
            }),
            J(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
            }),
            J(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
            }),
            J(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
            }),
            J(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
            }),
            J(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
            }),
            A("millisecond", "ms"),
            O("S", kd, cd),
            O("SS", kd, dd),
            O("SSS", kd, ed);
        var he;
        for (he = "SSSS"; he.length <= 9; he += "S") O(he, nd);
        for (he = "S"; he.length <= 9; he += "S") S(he, hc);
        var ie = E("Milliseconds", !1);
        J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
        var je = o.prototype;
        (je.add = Xd),
            (je.calendar = db),
            (je.clone = eb),
            (je.diff = lb),
            (je.endOf = xb),
            (je.format = pb),
            (je.from = qb),
            (je.fromNow = rb),
            (je.to = sb),
            (je.toNow = tb),
            (je.get = H),
            (je.invalidAt = Gb),
            (je.isAfter = fb),
            (je.isBefore = gb),
            (je.isBetween = hb),
            (je.isSame = ib),
            (je.isSameOrAfter = jb),
            (je.isSameOrBefore = kb),
            (je.isValid = Eb),
            (je.lang = Zd),
            (je.locale = ub),
            (je.localeData = vb),
            (je.max = Sd),
            (je.min = Rd),
            (je.parsingFlags = Fb),
            (je.set = H),
            (je.startOf = wb),
            (je.subtract = Yd),
            (je.toArray = Bb),
            (je.toObject = Cb),
            (je.toDate = Ab),
            (je.toISOString = ob),
            (je.toJSON = Db),
            (je.toString = nb),
            (je.unix = zb),
            (je.valueOf = yb),
            (je.creationData = Hb),
            (je.year = Qd),
            (je.isLeapYear = na),
            (je.weekYear = Jb),
            (je.isoWeekYear = Kb),
            (je.quarter = je.quarters = Pb),
            (je.month = $),
            (je.daysInMonth = _),
            (je.week = je.weeks = Tb),
            (je.isoWeek = je.isoWeeks = Ub),
            (je.weeksInYear = Mb),
            (je.isoWeeksInYear = Lb),
            (je.date = _d),
            (je.day = je.days = $b),
            (je.weekday = _b),
            (je.isoWeekday = ac),
            (je.dayOfYear = bc),
            (je.hour = je.hours = ee),
            (je.minute = je.minutes = fe),
            (je.second = je.seconds = ge),
            (je.millisecond = je.milliseconds = ie),
            (je.utcOffset = Oa),
            (je.utc = Qa),
            (je.local = Ra),
            (je.parseZone = Sa),
            (je.hasAlignedHourOffset = Ta),
            (je.isDST = Ua),
            (je.isDSTShifted = Va),
            (je.isLocal = Wa),
            (je.isUtcOffset = Xa),
            (je.isUtc = Ya),
            (je.isUTC = Ya),
            (je.zoneAbbr = ic),
            (je.zoneName = jc),
            (je.dates = fa("dates accessor is deprecated. Use date instead.", _d)),
            (je.months = fa("months accessor is deprecated. Use month instead", $)),
            (je.years = fa("years accessor is deprecated. Use year instead", Qd)),
            (je.zone = fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Pa));
        var ke = je,
            le = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            me = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
            ne = "Invalid date",
            oe = "%d",
            pe = /\d{1,2}/,
            qe = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            re = t.prototype;
        (re._calendar = le),
            (re.calendar = mc),
            (re._longDateFormat = me),
            (re.longDateFormat = nc),
            (re._invalidDate = ne),
            (re.invalidDate = oc),
            (re._ordinal = oe),
            (re.ordinal = pc),
            (re._ordinalParse = pe),
            (re.preparse = qc),
            (re.postformat = qc),
            (re._relativeTime = qe),
            (re.relativeTime = rc),
            (re.pastFuture = sc),
            (re.set = tc),
            (re.months = W),
            (re._months = Fd),
            (re.monthsShort = X),
            (re._monthsShort = Gd),
            (re.monthsParse = Y),
            (re._monthsRegex = Id),
            (re.monthsRegex = ba),
            (re._monthsShortRegex = Hd),
            (re.monthsShortRegex = aa),
            (re.week = Qb),
            (re._week = $d),
            (re.firstDayOfYear = Sb),
            (re.firstDayOfWeek = Rb),
            (re.weekdays = Wb),
            (re._weekdays = ae),
            (re.weekdaysMin = Yb),
            (re._weekdaysMin = ce),
            (re.weekdaysShort = Xb),
            (re._weekdaysShort = be),
            (re.weekdaysParse = Zb),
            (re.isPM = fc),
            (re._meridiemParse = de),
            (re.meridiem = gc),
            x("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (a) {
                    var b = a % 10,
                        c = 1 === r((a % 100) / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c;
                },
            }),
            (a.lang = fa("moment.lang is deprecated. Use moment.locale instead.", x)),
            (a.langData = fa("moment.langData is deprecated. Use moment.localeData instead.", z));
        var se = Math.abs,
            te = Lc("ms"),
            ue = Lc("s"),
            ve = Lc("m"),
            we = Lc("h"),
            xe = Lc("d"),
            ye = Lc("w"),
            ze = Lc("M"),
            Ae = Lc("y"),
            Be = Nc("milliseconds"),
            Ce = Nc("seconds"),
            De = Nc("minutes"),
            Ee = Nc("hours"),
            Fe = Nc("days"),
            Ge = Nc("months"),
            He = Nc("years"),
            Ie = Math.round,
            Je = { s: 45, m: 45, h: 22, d: 26, M: 11 },
            Ke = Math.abs,
            Le = Ia.prototype;
        (Le.abs = Bc),
            (Le.add = Dc),
            (Le.subtract = Ec),
            (Le.as = Jc),
            (Le.asMilliseconds = te),
            (Le.asSeconds = ue),
            (Le.asMinutes = ve),
            (Le.asHours = we),
            (Le.asDays = xe),
            (Le.asWeeks = ye),
            (Le.asMonths = ze),
            (Le.asYears = Ae),
            (Le.valueOf = Kc),
            (Le._bubble = Gc),
            (Le.get = Mc),
            (Le.milliseconds = Be),
            (Le.seconds = Ce),
            (Le.minutes = De),
            (Le.hours = Ee),
            (Le.days = Fe),
            (Le.weeks = Oc),
            (Le.months = Ge),
            (Le.years = He),
            (Le.humanize = Sc),
            (Le.toISOString = Tc),
            (Le.toString = Tc),
            (Le.toJSON = Tc),
            (Le.locale = ub),
            (Le.localeData = vb),
            (Le.toIsoString = fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tc)),
            (Le.lang = Zd),
            J("X", 0, 0, "unix"),
            J("x", 0, 0, "valueOf"),
            O("x", od),
            O("X", rd),
            S("X", function (a, b, c) {
                c._d = new Date(1e3 * parseFloat(a, 10));
            }),
            S("x", function (a, b, c) {
                c._d = new Date(r(a));
            }),
            (a.version = "2.11.1"),
            b(Ea),
            (a.fn = ke),
            (a.min = Ga),
            (a.max = Ha),
            (a.now = Td),
            (a.utc = h),
            (a.unix = kc),
            (a.months = wc),
            (a.isDate = d),
            (a.locale = x),
            (a.invalid = l),
            (a.duration = Za),
            (a.isMoment = p),
            (a.weekdays = yc),
            (a.parseZone = lc),
            (a.localeData = z),
            (a.isDuration = Ja),
            (a.monthsShort = xc),
            (a.weekdaysMin = Ac),
            (a.defineLocale = y),
            (a.weekdaysShort = zc),
            (a.normalizeUnits = B),
            (a.relativeTimeThreshold = Rc),
            (a.prototype = ke);
        var Me = a;
        return Me;
    }),
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[e].defaults, c)), this.init();
        }
        var e = "viewGroup";
        (d.prototype = {
            init: function () {
                var c = this;
                c.resetOption(),
                    c.element.find("[data-prev-next]").on("click", function () {
                        var d = a(this).data("trigger"),
                            e = a(this).data("validateStep"),
                            f = a(this).data("changeUrl"),
                            g = 0;
                        if (e) {
                            var h = c.elmItem.eq(c.elmItemActive),
                                i = h.find("[data-validate]");
                            if (
                                i &&
                                (i.each(function (b) {
                                    Site.isValidate(a(this)) || g++;
                                }),
                                g > 0)
                            )
                                return !1;
                        }
                        return d && a(d).length
                            ? (a(d).eq(0).trigger("click"), console.log("strObjTrigger", d), !1)
                            : ((c.elmItemActive += a(this).data("prevNext")), void (f ? (b.location = f + c.elmItemActive) : a(this).data("prevNext") ? c.showIndex(c.elmItemActive) : c.showIndex(a(this).data("showIndex"))));
                    });
                var d = b.location.hostname,
                    f = b.location.href.split(d);
                f && f[1].length && ((f = f[1].split("#group-view=")), parseInt(f[1]) > 0 && (c.elmItemActive = parseInt(f[1]))),
                    c.showIndex(c.elmItemActive),
                    a(b).on("resize." + e, function () {
                        c.resizeWindow(c.elmItemActive);
                    }) 
            },
            resetOption: function () {
                (this.elmItem = this.element.data("elmItem") ? this.element.find(this.element.data("elmItem")) : this.element.find(".g-item")),
                    (this.elmWrap = this.element.data("elmWrap") ? this.element.find(this.element.data("elmWrap")) : this.element.find(".g-content")),
                    (this.timeDelay = parseInt(this.element.data("timeDelay")) || 0),
                    (this.groupTotal = this.elmItem.length || 1);
            },
            showIndexLinkBaseOnUrl: function () {
                if (this.element.data("indexToHref")) {
                    var c = a(this.element.data("indexToHref")).find("a");
                    c.removeClass("active");
                    var d = b.location.hostname,
                        e = b.location.href.split(d),
                        f = a(".slide-animate");
                    f.length &&
                        c.each(function () {
                            return e && a(this).attr("href") == e[1] ? (f.addClass("active").animate({ left: a(this).offset().left, width: a(this).width() }), !1) : void 0;
                        });
                }
            },
            resizeWindow: function (c) {
                var d = a(b).height(),
                    e = this.element.width(),
                    f = this.timeDelay,
                    g = this.elmItem.eq(c),
                    h = g.data("focusElement"),
                    i = g.data("removeViewList"),
                    j = g.data("viewList");
                if ((this.elmItem.width(e), this.element.data("fullScreen") && e >= this.element.data("fullScreen"))) {
                    if (this.element.data("minusObj")) {
                        var k = this.element.data("minusObj");
                        a(k).length && (d -= a(k).eq(0).height());
                    }
                    this.elmItem.height(d);
                } else d = g.height();
                if (
                    (this.element.height(d),
                    this.elmWrap.width(e * this.groupTotal),
                    this.timeDelay > 0 ? this.elmWrap.animate({ marginLeft: -(e * c) }, f, function () {}) : this.elmWrap.css({ width: e * this.groupTotal, marginLeft: -(e * c) }),
                    j && i)
                ) {
                    var l = g.find(j);
                    l.viewListByHandlebar().removeAttr(i), g.css({ height: "auto" }), this.element.css({ height: "auto" });
                }
                h && a(h).length && a(h).focus();
            },
            
        }),
            (a.fn[e] = function (b, c) {
                return this.each(function () {
                    var f = a.data(this, e);
                    f ? (f[b] ? f[b](c) : console.warn(b ? b + " method is not exists in " + e : e + " plugin has been initialized")) : a.data(this, e, new d(this, b));
                });
            }),
            (a.fn[e].defaults = {}),
            a(function (a) {
                a("[data-view-group]")[e]();
            });
    })(jQuery, window),
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[f].defaults, c)), this.init();
        }
        function e(a) {
            for (var b = {}, c = 0, d = a.length; d > c; c++) {
                var e = a[c].name,
                    f = a[c].value;
                b = Site.setValueObjByKeyString(b, e, f);
            }
            return b;
        }
        var f = "buttonMagic";
        (d.prototype = {
            init: function () {
                if ((this.destroy(), this.element.data("specialFunction"))) {
                    var b = this.element.data("specialFunctionQuery");
                    a.fn[f][this.element.data("specialFunction")](b, this.element);
                } else this.buttonClick();
            },
            destroy: function () {
                a.removeData(this.element[0], f);
            },
        }),
            (a.fn[f] = function (b, c) {
                return this.each(function () {
                    var e = a.data(this, f);
                    e && e[b] ? e[b](c) : a.data(this, f, new d(this, b));
                });
            }),
            (a.fn[f].defaults = { initObject: null }),
            (a.fn[f].openBoxchatOfWebsite = function (b, c) {
                var d = c.data("event") || "click";
                c.on(d + "." + f, function (e) {
                    var g = c.data("urlValidation");
                    a.ajax({
                        url: g,
                        type: "POST",
                        data: JSON.stringify(b),
                        dataType: "json",
                        contentType: !1,
                        cache: !1,
                        processData: !1,
                        success: function (e) {
                            if (e && 200 == e.code) console.log(c, d, f), a(".waiting-open-box-chat").boxchatsimple(b), a(".website-chat-index").text(b.websiteId);
                            else {
                                a(".waiting-open-box-chat").html(
                                    '<p class="btn bg-warning form-group pd-10 mg-10" data-closet-toggle-class="view-form-login" data-unique-class="true" data-object="body"><strong>' + languageText.signinReInfo + "</strong></p>"
                                ),
                                    console.log("wrong Authorization", JSON.stringify(b));
                                var g = a(".button-login-owner-website");
                                g.length && (g.data("params", "query=" + JSON.stringify(b)), g.trigger("click").data("params", null));
                            }
                            localStorage.setItem("websiteIndex", b.websiteId), a(".website-chat-index").text(b.websiteId);
                        },
                    });
                });
            }),
            a(function () {
                a("[data-button-magic]")[f]();
            });
    })(jQuery, window),
    (function (a, b, c) {
        "use strict";
        function d(c, d) {
            b.WebSocket && "undefined" != typeof Storage ? ((this.element = a(c)), (this.options = a.extend({}, a.fn[j].defaults, d)), this.init()) : console.log("This browser does not support websockets");
        }
        var e,
            f,
            g,
            h,
            i,
            j = "boxchatsimple",
            k = !1,
            l = "has-notification",
            m = "connectdevice",
            n = function () {
                (k = !1), e.emit("noLongerTyping");
            },
            o = function (a, b) {
                return io(a, { query: b });
            };
        (b.viewBoxchat = function (b) {
            console.log("viewBoxchat", f, b.vid),
                f !== b.vid && ((f = b.vid), localStorage.setItem("vid", f), a(".view-connection-list .btn-view-each-connection").removeClass("active"), a(".view-connection-list ." + f).addClass("active"), e.emit("openboxchat", b));
        }),
            (b.clearBoxchat = function (a) {
                (f = a.vid), e.emit("clearboxchat", a);
            }),
            (d.prototype = {
                init: function () {
                    var c = this,
                        d = {},
                        i = this.options.websiteOwner || this.element.data("websiteOwner") || !1;
                    (g = this.options.websiteId || this.element.data("websiteId")),
                        (h = this.element.data("visitorName")),
                        (d.websiteId = g),
                        (f = localStorage.getItem(m) || !1),
                        i ? ((d.ownerWebsite = i), localStorage.setItem(m, "")) : f && "null" !== f && (d.vid = f),
                        e && e.query && (JSON.stringify(e.query) === JSON.stringify(d) ? (console.log("duplicate socket"), e.disconnect()) : (console.log("emit disconnect to old socket", e.query), e.disconnect()));
                    var j = c.element.data("socketUrl");
                    a.getScript(j)
                        .done(function (e, f) {
                            var g = a("#" + c.element.data("templateId")),
                                h = g.html() || Site.validateTemplate(c.element.data("templateId")),
                                i = c.element.data("elmData") || null,
                                j = Handlebars.compile(h);
                            c.element.html(j({ e: i, d: defineVariable, u: b.userAccess })), c.element.removeClass("disconnect"), c.socketOn(d);
                        })
                        .fail(function (a, b, c) {
                            console.log("Triggered ajaxError handler.");
                        });
                },
                socketOn: function (b) {
                    var c = this;
                    e = o(this.element.data("socketConnect"), b);
                    var d = (new Date(), this.element.data("elmInput")),
                        j = this.element.data("elmViewChat"),
                        p = this.element.data("elmFeedback"),
                        q = this.element.data("elmButtonSend"),
                        r = this.element.data("elmNotification"),
                        s = a(d).eq(0),
                        t = a(r).eq(0),
                        u = a(q).eq(0),
                        v = a(p).eq(0);
                    s.keyup(function (d) {
                        a(this).closest(c.element).hasClass(l) && a(this).closest(c.element).removeClass(l),
                            g &&
                                (k ? (clearTimeout(i), (i = setTimeout(n, 5e3))) : ((k = !0), console.log("has emit form owner", b), e.emit("typing", { websiteId: g }), (i = setTimeout(n, 5e3))),
                                13 == d.keyCode && s.val() && (e.emit("new message", { connect: { websiteId: g, vid: f, sms: { t: s.val(), f: h } } }), a(this).val("")));
                    }),
                        u.on("click", function () {
                            g && f && (console.log({ connect: { websiteId: g, vid: f, sms: { t: s.val(), f: h } } }), e.emit("new message", { connect: { websiteId: g, vid: f, sms: { t: s.val(), f: h } } }), s.val(""));
                        }),
                        c.element.on("click", function () {
                            a(this).hasClass(l) && (a(".boxchat-line").scrollTop(a(".boxchat-line").prop("scrollHeight")), a(this).removeClass(l), t.html(""), e.emit("clear notification", { websiteId: g, vid: f }));
                        }),
                        s.focusout(function (a) {
                            (k = !1), e.emit("noLongerTyping", { websiteId: g });
                        }),
                        e.on("disconnect", function (a) {
                            e.query.ownerWebsite, console.log("disconnect", e.query);
                        }),
                        e.on("typing", function (a) {
                            v.html("<p><i>" + a + " is typing a message...</i></p>");
                        }),
                        e.on("refresh", function (a) {
                            a.clearStorage && localStorage.setItem(a.clearStorage, ""), location.reload();
                        }),
                        e.on("noLongerTyping", function (a) {
                            (k = !1), v.html("no longer typing");
                        }),
                        e.on("notification", function (a) {
                            console.log("notification", a), c.element.addClass(l), a.number && a.number > 0 && (a.number > 5 ? t.html("5+") : t.html(a.number));
                        }),
                        e.on("viewconnection", function (d) {
                            if (d.data) {
                                a(".view-connection-list").viewListByHandlebar({ initObject: d.data });
                                var e = d.data.reduce(function (a, b) {
                                        return b.lastsms ? a + b.lastsms : a;
                                    }, 0),
                                    g = c.element.data("elmWebsiteNotification");
                                g &&
                                    a(g).length &&
                                    (e && e > 0
                                        ? (console.log("sum", e),
                                          a(g).eq(0).addClass(l),
                                          d.query &&
                                              navigator &&
                                              (navigator.vibrate && c.element.data("notificationVibrate") && navigator.vibrate(c.element.data("notificationVibrate")),
                                              navigator.notification && c.element.data("notificationBeep") && navigator.notification.beep(c.element.data("notificationBeep"))))
                                        : a(g).eq(0).removeClass(l));
                            }
                            a(".view-connection-list ." + f).addClass("active"), b.ownerWebsite && localStorage.getItem("vid") && console.log("vid ", f, b.ownerWebsite);
                        }),
                        e.on("boxchat", function (d) {
                            d.vid && !b.ownerWebsite ? (localStorage.setItem(m, d.vid), (f = localStorage.getItem(m))) : b.ownerWebsite && (console.log("openboxchat", j), a(j).addClass("active"));
                            var e = a("html").hasClass("touch") ? "touchmove" : "scroll";
                            a(".boxchat-sms [data-content]").empty().unbind(e),
                                a(".boxchat-sms").viewListByHandlebar({ initObject: d.data, reviewSms: !0, scrollViewIn: ".boxchat-line" }),
                                a(".boxchat-line").scrollTop(a(".boxchat-line").prop("scrollHeight")),
                                d.notifiClient && d.notifiClient > 0 && (d.notifiClient > 5 ? t.html("5+") : t.html(d.notifiClient), c.element.addClass(l));
                        }),
                        e.on("status_boxchat", function (a) {
                            console.log("status_boxchat", a);
                        }),
                        this.destroy();
                },
                resetOption: function () {},
                destroy: function () {
                    a.removeData(this.element[0], j);
                },
            }),
            (a.fn[j] = function (c, e) {
                return this.each(function () {
                    var f = a.data(this, j);
                    f ? (f[c] ? f[c](e) : (b.console && console.log(c ? c + " method is not exists in " + j : j + " plugin has been initialized"), new d(this, c))) : a.data(this, j, new d(this, c));
                });
            }),
            (a.fn[j].defaults = {}),
            a(function () {
                a("[data-" + j + "]")[j]();
            });
    })(jQuery, window),
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[e].defaults, c)), this.init();
        }
        var e = "dropdown";
        (d.prototype = {
            init: function () {
                var a = this.element.data("optionBaseOnUrl"),
                    b = this.element.data("indexValue") || 0;
                 
                this.dropdownFromJson(b);
            },
            genDropDownList: function (a, b) {
                var c = this,
                    d = c.element.data("strKey") || "id",
                    e = c.element.data("textByString") || !1,
                    f = c.element.data("strValue") || "ti",
                    g = c.element.data("strOption") || '<option value="{0}">{1}</option>',
                    h = (c.element.data("filterLocal"), c.element.data("inGroup") || !1),
                    i = c.element.data("keySort") || !1,
                    j = c.element.data("objectInit") || {};
                j[f] && c.element.append(Site.formatStr(g, j[d], j[f])),
                    i &&
                        (a = _.sortBy(a, function (a) {
                            return a[i];
                        }));
                var k = null;
                _.each(a, function (a) {
                    if (((k = a[f]), _.isObject(k) && e && (k = Site.getValueObjByKeyString(k, e)), a.sub)) {
                        var b = "";
                        (b += Site.formatStr(g, a[d], k)),
                            _.each(a.sub, function (a) {
                                (b += Site.formatStr(g, a[d], "&nbsp &nbsp" + a[f])),
                                    a.sub &&
                                        a.sub.length &&
                                        _.each(a.sub, function (a) {
                                            (b += Site.formatStr(g, a[d], "&nbsp &nbsp &nbsp " + a[f])),
                                                a.sub &&
                                                    a.sub.length &&
                                                    _.each(a.sub, function (a) {
                                                        (b += Site.formatStr(g, a[d], "&nbsp &nbsp &nbsp &nbsp " + a[f])),
                                                            a.sub &&
                                                                a.sub.length &&
                                                                _.each(a.sub, function (a) {
                                                                    (b += Site.formatStr(g, a[d], "&nbsp &nbsp &nbsp &nbsp &nbsp " + a[f])),
                                                                        a.sub &&
                                                                            a.sub.length &&
                                                                            _.each(a.sub, function (a) {
                                                                                b += Site.formatStr(g, a[d], "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + a[f]);
                                                                            });
                                                                });
                                                    });
                                        });
                            }),
                            c.element.append(b);
                    } else a[d] && (h ? c.element.append(Site.formatStr(g, a[d], k, a[h])) : c.element.append(Site.formatStr(g, a[d], k)));
                }),
                    (!j.ti && !b) || 0 === b ? c.element.find("option").eq(0).attr("selected", "selected") : b && c.element.val(b).trigger("change");
            },
            dropdownFromJson: function (c) {
                var d = this,
                    e = d.element.data("optionFromJson"),
                    f = "get",
                    g = d.element.data("localOptiona"),
                    h = [],
                    i = d.element.data("autoComplete") || null,
                    j = d.element.data("params") || null,
                    k = d.element.data("paramsIn");
                d.element.empty(),
                    _.isObject(g) || (g = defineVariable.l10n.dropdownLocalOption[g] || null),
                    g || (d.element.data("localOptionb") && (g = defineVariable.l10n[d.element.data("localOptionb")] || b[d.element.data("localOptionb")])),
                    "[object Array]" === Object.prototype.toString.call(g)
                        ? (h = g)
                        : g &&
                          _.each(g, function (a, b) {
                              h.push({ id: b, ti: a });
                          }),
                    h.length
                        ? (k
                              ? ((k = k.split("=")),
                                2 == k.length &&
                                    k[0] &&
                                    k[1] &&
                                    (h = _.filter(h, function (a) {
                                        return ("," + k[1] + ",").indexOf("," + a[k[0]] + ",") > -1 ? !0 : !1;
                                    })))
                              : j &&
                                ((j = j.split("=")),
                                2 == j.length &&
                                    j[0] &&
                                    j[1] &&
                                    (h = _.filter(h, function (a) {
                                        return a[j[0]] == j[1];
                                    }))),
                          i && console.log(d.element.offset(), d.element.width()),
                          d.genDropDownList(h, c))
                        : e &&
                          a.ajax({
                              dataType: "json",
                              url: e,
                              method: f,
                              data: j,
                              success: function (a) {
                                  (h = a.data || []), d.genDropDownList(h, c);
                              },
                          });
            },
        }),
            (a.fn[e] = function (b, c) {
                return this.each(function () {
                    var f = a.data(this, e);
                    f && f[b] ? f[b](c) : a.data(this, e, new d(this, b));
                });
            }),
            (a.fn[e].defaults = { initOption: null, strFilter: null, baseOnUrl: null }),
            a(function () {
                a("[data-dropdown]")[e]();
            });
    })(jQuery, window),
    Handlebars.registerHelper("calculatorQuestionnaires", function (a, b, c) {
        "use strict";
        try {
            var d = 0;
            return (
                _.each(b, function (b, c) {
                    a[c] &&
                        b &&
                        a[c].ra &&
                        a[c].po &&
                        (_.isObject(a[c].ra) || _.isObject(b) ? JSON.stringify(a[c].ra) === JSON.stringify(b) && (d = parseFloat(d) + parseFloat(a[c].po)) : a[c].ra === b && (d = parseFloat(d) + parseFloat(a[c].po)));
                }),
                d
            );
        } catch (e) {
            return "";
        }
    }),
    Handlebars.registerHelper("getListIdSubFormId", function (a, b, c, d) {
        "use strict";
        return dequySubId(a, b, c, d);
    }),
    Handlebars.registerHelper("lookup", function (a, b) {
        "use strict";
        return a ? a && a[b] : null;
    }),
    Handlebars.registerHelper("showPhoneNumberHiddenLast", function (a, b, c) {
        "use strict";
        (b = b || 4), (c = c || "*");
        for (var d = a.substring(0, a.length - b), e = 0; b > e; e++) d += c;
        return d;
    }),
    Handlebars.registerHelper("formatCurrency", function (a, b, c) {
        "use strict";
        if (a && "undefined" != typeof a) {
            var d = a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            if (languageText.strFormatCurrentLength) {
                var e = d.split(",");
                5 == e.length
                    ? (d = e[0] + e[1] + languageText.strFormatCurrentLength[0])
                    : 4 == e.length
                    ? ((d = e[0] + languageText.strFormatCurrentLength[0]), parseInt(e[1]) > 0 && (d = d + " <small>" + e[1] + languageText.strFormatCurrentLength[1] + "</small>"))
                    : 3 == e.length && ((d = e[0] + languageText.strFormatCurrentLength[1]), parseInt(e[1]) > 0 && (d = e[0] + "." + e[1][0] + languageText.strFormatCurrentLength[1]));
            } else b && c && (1 == b ? (d = c + d) : (d += c));
            return d;
        }
    }),
    Handlebars.registerHelper("calculator", function (a, b, c, d, e) {
        "use strict";
        return (
            (a = parseFloat(a)),
            (c = parseFloat(c)),
            (d = d ? parseInt(d) : null),
            {
                "+": d ? Math.round((a + c) * Math.pow(10, d)) / Math.pow(10, d) : a + c,
                "-": d ? Math.round((a - c) * Math.pow(10, d)) / Math.pow(10, d) : a - c,
                "*": d ? Math.round(a * c * Math.pow(10, d)) / Math.pow(10, d) : a * c,
                "/": d ? Math.round((a / c) * Math.pow(10, d)) / Math.pow(10, d) : a / c,
                "%": a % c,
                "%%": Math.round(((a - c) / a) * 100),
            }[b]
        );
    }),
    Handlebars.registerHelper("xif", function (a, b) {
        "use strict";
        return Handlebars.helpers.x.apply(this, [a, b]) ? b.fn(this) : b.inverse(this);
    }),
    Handlebars.registerHelper("xObject", function (a, b, c) {
        "use strict";
        var d = Site.getValueObjByKeyString(a, b);
        return d && (d.length || _.isObject(d)) ? c.fn(this) : c.inverse(this);
    }),
    Handlebars.registerHelper("xIsObject", function (a, b, c, d, e) {
        "use strict";
        return b && b.length && (((c && c.length) || (d && d.length)) && (b = Site.formatStr(b, c, d)), (a = Site.getValueObjByKeyString(a, b))), a && _.isObject(a) ? e.fn(this) : e.inverse(this);
    }),
    Handlebars.registerHelper("x", function (a, b) {
        "use strict";
        var c,
            d = function () {};
        try {
            d = Function.apply(this, ["window", "return" + a + ";"]);
        } catch (e) {
            console.log("[warning] {{x" + a + "}} is invalid javascript", e);
        }
        try {
            c = d.bind(this)(window);
        } catch (e) {
            console.log("[warning] {{x" + a + "}} runtime error", e);
        }
        return c;
    }),
    Handlebars.registerHelper("compare", function (a, b, c, d) {
        "use strict";
        var e, f;
        if (arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        if (
            (void 0 === d && ((d = c), (c = b), (b = "===")),
            (e = {
                "==": function (a, b) {
                    return a == b;
                },
                "===": function (a, b) {
                    return a === b;
                },
                "!=": function (a, b) {
                    return a != b;
                },
                "!==": function (a, b) {
                    return a !== b;
                },
                "<": function (a, b) {
                    return b > a;
                },
                ">": function (a, b) {
                    return a > b;
                },
                "<=": function (a, b) {
                    return b >= a;
                },
                ">=": function (a, b) {
                    return a >= b;
                },
                typeof: function (a, b) {
                    return typeof a == b;
                },
            }),
            !e[b])
        )
            throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + b);
        return (f = e[b](a, c)), f ? d.fn(this) : d.inverse(this);
    }),
    Handlebars.registerHelper("xKeyValueObject", function (a, b) {
        "use strict";
        try {
            if (b && a) return Site.getValueObjByKeyString(b, a);
        } catch (c) {
            return "";
        }
    }),
    Handlebars.registerHelper("xKeyValueObjectIndex", function (a, b, c, d, e, f, g, h, i) {
        "use strict";
        try {
            var j = Site.formatStr(b, c, f, g, h);
            if (_.isObject(a)) {
                var k = Site.getValueObjByKeyString(a, j);
                if (i) {
                    if (_.isObject(i) || _.isObject(k)) {
                        if (JSON.stringify(k) === JSON.stringify(i)) return e;
                    } else if (k && i && k.trim().toUpperCase() === i.trim().toUpperCase()) return e;
                } else {
                    if ((console.log(j, k, "index:", d, "show", e), !d)) return k;
                    if (_.isObject(k)) {
                        if (k[d]) return e;
                    } else if (k == d) return e;
                }
            }
        } catch (l) {
            return "";
        }
    }),
    Handlebars.registerHelper("xKeyValueObjectSpecial", function (a, b, c, d, e, f) {
        "use strict";
        try {
            (c = _.isString(c) ? c : null), (e = _.isString(e) ? e : null);
            var g = null;
            if (_.isObject(a)) {
                var h = "";
                return (
                    _.isString(d)
                        ? ((g = Site.formatStr(b, c, d, e)), (h = Site.getValueObjByKeyString(a, g) ? '<span class="option-answers">' + Site.getValueObjByKeyString(a, g) + "</span>" : 1 == f ? c : 2 == f ? d : 3 == f ? e : ""))
                        : _.isObject(d) &&
                          _.each(d, function (d, f) {
                              (g = Site.formatStr(b, c, f, e)), (h += '<span class="option-answers">' + Site.getValueObjByKeyString(a, g) + "</span>");
                          }),
                    h
                );
            }
        } catch (i) {
            return "";
        }
    }),
    Handlebars.registerHelper("formatDate", function (a, b, c) {
        "use strict";
        b = b || "DD-MM-YYYY";
        try {
            return c && 2 == c ? moment(a).format(b) : moment(1e3 * a).format(b);
        } catch (d) {
            return console.log("[warning] {{x" + expression + "}} is invalid javascript", d), a;
        }
    }),
    Handlebars.registerHelper("xInObject", function (a, b, c, d) {
        "use strict";
        if (!c || !b || !a) return d.inverse(this);
        var e = _.filter(c, function (c) {
            return c[b] == a;
        });
        return e.length ? d.fn(this) : d.inverse(this);
    }),
    Handlebars.registerHelper("xSubString", function (a, b, c, d, e) {
        "use strict";
        return b && a ? (c && (d && (b = b.join(c)), (b = c + b + c), (a = c + a + c)), b.indexOf(a) > -1 ? e.fn(this) : e.inverse(this)) : e.inverse(this);
    }),
    Handlebars.registerHelper("loopfor", function (a, b) {
        "use strict";
        for (var c = "", d = 0; a > d; ++d) c += b.fn(d);
        return c;
    }),
    Handlebars.registerHelper("checkboxList", function (a, b, c, d, e, f, g, h, i) {
        "use strict";
        var j = [],
            k = "",
            l = [],
            m = "";
        if (
            ((g = g || "group-check-box"),
            _.isObject(b) && (b = _.keys(b)),
            _.isArray(b) && (b = b.join(",")),
            _.isObject(a) || (a = defineVariable.l10n.dropdownLocalOption[a] || Site.getValueObjByKeyString(window, a)),
            a &&
                c &&
                c.length &&
                _.each(a, function (a, f) {
                    h && i && ((f = a[h] || ""), (a = a[i])), (m = ""), ("," + b + ",").indexOf("," + f + ",") > -1 && (m = ' checked="true" '), (m += d), j.push(Site.formatStr(c, f, a, m, e));
                }),
            j.length)
        )
            for (var n = 0, o = j.length; o > n; n++) f && f > 0 ? ((k += j[n]), (n + 1) % f === 0 ? (l.push(k), (k = "")) : n == o - 1 && (l.push(k), (k = ""))) : (k += j[n]);
        if (l && l.length) for (var p = 0, q = l.length; q > p; p++) k += '<div class="' + g + '">' + l[p] + "</div>";
        return new Handlebars.SafeString(k);
    }),
    Handlebars.registerHelper("radioList", function (a, b, c, d, e, f, g, h) {
        "use strict";
        var i = "",
            j = "";
        _.isObject(a) || (a = defineVariable.l10n.dropdownLocalOption[a] || Site.getValueObjByKeyString(window, a));
        var k = [];
        return (
            h && (b && b.length && (k = b.split(",")), k.length && k[h - 1] && (b = k[h - 1])),
            a &&
                c &&
                c.length &&
                _.each(a, function (a, h) {
                    d && e && ((h = a[d] || ""), (a = a[e])), (j = ""), b == h && (j = "checked"), (i += Site.formatStr(c, h, a, j, f, g));
                }),
            new Handlebars.SafeString(i)
        );
    }),
    Handlebars.registerHelper("xReplaceString", function (a, b, c, d, e, f, g) {
        "use strict";
        if (!a || !b || !c) return a;
        if (f && g && d && e) {
            var h = a.split(b);
            (h = _.map(h, function (a) {
                return f + a.replace(new RegExp(d, "g"), e) + g;
            })),
                (a = h.join(b));
        }
        return a.replace(new RegExp(b, "g"), c);
    }),
    Handlebars.registerHelper("totalObject", function (a) {
        "use strict";
        return a ? _.keys(a).length : "0";
    }),
    Handlebars.registerHelper("getOldFromYMD", function (a) {
        "use strict";
        try {
            var b = new Date(a),
                c = new Date().getFullYear() - b.getFullYear();
            return c;
        } catch (d) {
            console.log("[warning] value invalid", d);
        }
    }),
    Handlebars.registerHelper("timeago", function (a) {
        "use strict";
        var b,
            c = 3600;
        try {
            b =
                24 * c * 30 > a
                    ? 24 * c > a
                        ? c > a
                            ? 60 > a
                                ? a + "s"
                                : parseInt(a / 60) + "mi"
                            : parseInt(a / c) + "hr"
                        : parseInt(a / (24 * c)) + "d"
                    : 24 * c * 30 * 365 > a
                    ? parseInt(a / (24 * c * 30)) + "m"
                    : parseInt(a / (24 * c * 30 * 365)) + "y";
        } catch (d) {
            console.log("[warning] value invalid", d);
        }
        return b;
    }),
    Handlebars.registerHelper("textFromDropdownLocal", function (a, b, c, d, e) {
        "use strict";
        if ("undefined" != typeof a && a) {
            a = a.toString();
            var f = defineVariable.l10n.dropdownLocalOption[b] || null;
            if ((f = f || defineVariable.l10n[b])) {
                var g,
                    h = a && a.length ? a.split(",") : [],
                    i = "";
                if (c.length) {
                    if (!d.length) return;
                    (a = "," + a + ","),
                        _.each(f, function (b, f) {
                            return a.indexOf("," + b[c] + ",") > -1 ? ((i += e && e.length ? b[d] : "<span>" + b[d] + "</span>"), !1) : void 0;
                        });
                } else for (var j = 0, k = h.length; k > j; j++) (g = h[j].trim()), f[g] && (i += e && e.length ? f[g] : "<span>" + f[g] + "</span>");
                return new Handlebars.SafeString(i);
            }
        }
    }),
    Handlebars.registerHelper("shortenText", function (a, b) {
        "use strict";
        if (a && a.length) {
            var c = a;
            return c.length > b && (c = c.substr(0, b) + "..."), new Handlebars.SafeString(c);
        }
        return "";
    }),
  
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[g].defaults, c)), this.init();
        }
        function e(b) {
            var c = b.element.data("showBlock"),
                d = b.element.data("hideBlock");
            c && a(c).removeClass("hidden"), d && a(d).addClass("hidden");
        }
        function f(a, b) {
            for (var c = "", d = 0; b > d; d++) c += Site.formatStr(a, d, d + 1);
            return c;
        }
    })(jQuery, window),
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[e].defaults, c)), this.init();
        }
        var e = "lightbox",
            f = { width: 1, height: 1 },
            g = 0,
            h = function (c, d) {
                var e = c.width / c.height,
                    f = a(b),
                    g = f.width() - 2 * d.left,
                    h = f.height() - 2 * d.top;
                if (c.width > g) {
                    var i = g / e;
                    return i > h ? { width: h * e, height: h } : { width: g, height: i };
                }
                return c.height < h ? { width: c.width, height: c.height } : { width: h * e, height: h };
            };
        (d.prototype = {
            init: function () {
                var c = this;
                c.element.on("click", function (b) {
                    b.preventDefault(),
                        c.showLightbox(a(this)),
                        (g = a(this).index("[data-lightbox]")),
                        a(c.options.handler).data("index", g),
                        a(c.options.handler).hasClass("clicked") ||
                            (a(c.options.handler).on("click", c.options.button, function (b) {
                                if (a(this).attr("value")) {
                                    g += parseInt(a(this).attr("value"));
                                    var d = !0;
                                    g > a("[data-lightbox]").length - 1 ? ((g -= 1), c.destroy(), (d = !1)) : 0 > g && ((g += 1), c.destroy(), (d = !1)), d && c.showLightbox(a("[data-lightbox]").eq(g));
                                } else c.destroy();
                            }),
                            a(c.options.handler).addClass("clicked"));
                }),
                    a(b).on("keyup.keyboard." + e, function (b) {
                        try {
                            var d = 27,
                                e = 37,
                                f = 39,
                                g = b.keyCode;
                            String.fromCharCode(g).toLowerCase();
                            g == d ? c.destroy() : g == e ? a(c.options.content).find('[data-button][value="-1"]').eq(0).trigger("click") : g == f && a(c.options.content).find('[data-button][value="1"]').eq(0).trigger("click");
                        } catch (h) {}
                    });
            }
           
        }),
            (a.fn[e] = function (b, c) {
                return this.each(function () {
                    var f = a.data(this, e);
                    f ? f[b] && f[b](c) : a.data(this, e, new d(this, b));
                });
            }),
            (a.fn[e].defaults = { handler: "[data-lightbox-show]", marginTop: -20, curImage: 0, top: 20, left: 20, repeat: !1, keyboard: !1, resizebox: !0, classToggle: "active", hiddenBtnNav: "hidden" }),
            a(function () {
                a("[data-lightbox]")[e]();
            });
    })(jQuery, window),
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[e].defaults, c)), this.init();
        }
        var e = "rating",
            f = -1;
        (d.prototype = {
            init: function () {
                var b = this,
                    c = this.element.children();
                c.on("click." + e, function (c) {
                    c.preventDefault(), a(this).children("input").prop("checked", !0), (f = a(this).index()), b.rating(f, b.options.selectCls);
                })
                    .on("mouseenter." + e, function (c) {
                        c.preventDefault(), b.rating(a(this).index(), b.options.activeCls, b.options.selectCls);
                    })
                    .on("mouseout." + e, function (a) {
                        a.preventDefault(), b.rating(f, b.options.selectCls, b.options.activeCls);
                    });
            },
            rating: function (a, b, c) {
                var d = this.element.children(),
                    e = d.eq(a);
                return 0 > a ? void d.removeClass(c) : (d.removeClass(b).removeClass(c), void e.addClass(b).prevAll().addClass(b));
            },
        }),
            (a.fn[e] = function (c, f) {
                return this.each(function () {
                    var g = a.data(this, e);
                    g ? (g[c] ? g[c](f) : b.console && console.log(c ? c + " method is not exists in " + e : e + " plugin has been initialized")) : a.data(this, e, new d(this, c));
                });
            }),
            (a.fn[e].defaults = { selectCls: "selected", activeCls: "actived" }),
            a(function () {
                a("[data-" + e + "]")[e]();
            });
    })(jQuery, window),
    (function (a, b, c) {
        "use strict";
        function d(b, c) {
            (this.element = a(b)), (this.options = a.extend({}, a.fn[e].defaults, c)), this.init();
        }
        var e = "uiTabs",
            f = function (b, c) {
                var d = "";
                return (
                    (c = c || "#default=null"),
                    b.each(function (b) {
                        var e = c;
                        b && (e = c + "&tab=" + b), (d += '<li><a href="' + e + '" title="' + a(this).find(">h3").text() + '">' + a(this).find(">h3").text() + "</a></li>");
                    }),
                    d
                );
            };
        (d.prototype = {
            init: function () {
                this.contentEls = this.element.children().children();
                var c = '<nav class="{0}"><ul>{1}</ul></nav>',
                    d = this.element.data("hashUrl") || null;
                if (!this.contentEls.length) return void this.element.remove();
                (this.options.tabClass = this.element.data("tab-class") ? this.element.data("tab-class") : this.options.tabClass),
                    (this.options.mobileTitle = this.element.data("mobile-title") ? this.element.data("mobile-title") : this.options.mobileTitle);
                var g = a(Site.formatStr(c, this.options.tabClass, f(this.contentEls, d)));
                this.element.prepend(g);
                var h = this;
                g.on("click." + e, "li > a", function (b) {
                    h.element.data("ignoreHash") && b.preventDefault(), a("ul > li", g).removeClass(h.options.activeCls), h.showContent(a(this).parent().addClass(h.options.activeCls).index());
                }),
                    a("." + this.options.mobileTitle, this.element).on("click." + e, function () {
                        a(this).toggleClass(h.options.activeCls).next().slideToggle();
                        var b = a(this).parent();
                        h.showMoreSpecial(b);
                    });
               
            },
            showContent: function (b) {
                var c = this.contentEls.eq(b);
                if (
                    (this.contentEls.removeClass(this.options.activeCls), c.addClass(this.options.activeCls), c.find("." + this.options.mobileTitle).addClass(this.options.activeCls), this.showMoreSpecial(c), this.element.data("scrollTo"))
                ) {
                    var d = this.element.offset().top;
                    a("html,body").animate({ scrollTop: d }, 0);
                }
            },
            showMoreSpecial: function (b) {
                var c = b.data("viewList"),
                    d = b.data("copyTemplateInTab"),
                    e = b.data("removeViewList");
                if (c) {
                    var f = b.find(c);
                    f.viewListByHandlebar(), e && f.removeAttr(e);
                }
                if (d) {
                    var g = b.find(d);
                    g &&
                        g.length &&
                        g.each(function () {
                            a(this).data("onlyFristTime") ? a(this).hasClass("in") || Site.viewItemTemplateHandlebar(a(this)) : Site.viewItemTemplateHandlebar(a(this));
                        });
                }
                var h = b.data("googleMapInTab");
                h && b.attr("data-google-map-in-tab") && (Site.googleMap(h), b.data("set-first-time") && b.removeAttr("data-google-map-in-tab"));
            },
        }),
            (a.fn[e] = function (b, c) {
                return this.each(function () {
                    var f = a.data(this, e);
                    f ? (f[b] ? f[b](c) : console.warn(b ? b + " method is not exists in " + e : e + " plugin has been initialized")) : a.data(this, e, new d(this, b));
                });
            }),
            (a.fn[e].defaults = { tabClass: "tabs", mobileTitle: "tab-title", activeCls: "current" }),
            a(function (a) {
                a("[data-ui-tabs]")[e]();
            });
    })(jQuery, window),
    (function (a) {
        function b(a, b, c, d, e, f) {
            a = String(a);
            for (var g = 0, h = 0, i = a.length, j = "", k = 0; i > h; ) {
                var l = a.charCodeAt(h);
                for (l = 256 > l ? c[l] : -1, g = (g << e) + l, k += e; k >= f; ) {
                    k -= f;
                    var m = g >> k;
                    (j += d.charAt(m)), (g ^= m << k);
                }
                ++h;
            }
            return !b && k > 0 && (j += d.charAt(g << (f - k))), j;
        }
        for (
            var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                d = "",
                e = [256],
                f = [256],
                g = 0,
                h = {
                    encode: function (a) {
                        var b = a
                            .replace(/[\u0080-\u07ff]/g, function (a) {
                                var b = a.charCodeAt(0);
                                return String.fromCharCode(192 | (b >> 6), 128 | (63 & b));
                            })
                            .replace(/[\u0800-\uffff]/g, function (a) {
                                var b = a.charCodeAt(0);
                                return String.fromCharCode(224 | (b >> 12), 128 | ((b >> 6) & 63), 128 | (63 & b));
                            });
                        return b;
                    },
                    decode: function (a) {
                        var b = a
                            .replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (a) {
                                var b = ((15 & a.charCodeAt(0)) << 12) | ((63 & a.charCodeAt(1)) << 6) | (63 & a.charCodeAt(2));
                                return String.fromCharCode(b);
                            })
                            .replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (a) {
                                var b = ((31 & a.charCodeAt(0)) << 6) | (63 & a.charCodeAt(1));
                                return String.fromCharCode(b);
                            });
                        return b;
                    },
                };
            256 > g;

        ) {
            var i = String.fromCharCode(g);
            (d += i), (f[g] = g), (e[g] = c.indexOf(i)), ++g;
        }
        var j = (a.base64 = function (a, b, c) {
            return b ? j[a](b, c) : a ? null : this;
        });
        (j.btoa = j.encode = function (a, d) {
            return (a = j.raw === !1 || j.utf8encode || d ? h.encode(a) : a), (a = b(a, !1, f, c, 8, 6)), a + "====".slice(a.length % 4 || 4);
        }),
            (j.atob = j.decode = function (a, c) {
                a = String(a).split("=");
                var f = a.length;
                do --f, (a[f] = b(a[f], !0, e, d, 6, 8));
                while (f > 0);
                return (a = a.join("")), j.raw === !1 || j.utf8decode || c ? h.decode(a) : a;
            });
    })(jQuery),
    (function (a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? (module.exports = a(require("jquery"))) : a(jQuery);
    })(function (a) {
        "use strict";
        var b = window.Slick || {};
        (b = (function () {
            function b(b, d) {
                var e,
                    f = this;
                (f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (b, c) {
                        return a('<button type="button" />').text(c + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (f.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    a.extend(f, f.initials),
                    (f.activeBreakpoint = null),
                    (f.animType = null),
                    (f.animProp = null),
                    (f.breakpoints = []),
                    (f.breakpointSettings = []),
                    (f.cssTransitions = !1),
                    (f.focussed = !1),
                    (f.interrupted = !1),
                    (f.hidden = "hidden"),
                    (f.paused = !0),
                    (f.positionProp = null),
                    (f.respondTo = null),
                    (f.rowCount = 1),
                    (f.shouldClick = !0),
                    (f.$slider = a(b)),
                    (f.$slidesCache = null),
                    (f.transformType = null),
                    (f.transitionType = null),
                    (f.visibilityChange = "visibilitychange"),
                    (f.windowWidth = 0),
                    (f.windowTimer = null),
                    (e = a(b).data("slick") || {}),
                    (f.options = a.extend({}, f.defaults, d, e)),
                    (f.currentSlide = f.options.initialSlide),
                    (f.originalSettings = f.options),
                    "undefined" != typeof document.mozHidden
                        ? ((f.hidden = "mozHidden"), (f.visibilityChange = "mozvisibilitychange"))
                        : "undefined" != typeof document.webkitHidden && ((f.hidden = "webkitHidden"), (f.visibilityChange = "webkitvisibilitychange")),
                    (f.autoPlay = a.proxy(f.autoPlay, f)),
                    (f.autoPlayClear = a.proxy(f.autoPlayClear, f)),
                    (f.autoPlayIterator = a.proxy(f.autoPlayIterator, f)),
                    (f.changeSlide = a.proxy(f.changeSlide, f)),
                    (f.clickHandler = a.proxy(f.clickHandler, f)),
                    (f.selectHandler = a.proxy(f.selectHandler, f)),
                    (f.setPosition = a.proxy(f.setPosition, f)),
                    (f.swipeHandler = a.proxy(f.swipeHandler, f)),
                    (f.dragHandler = a.proxy(f.dragHandler, f)),
                    (f.keyHandler = a.proxy(f.keyHandler, f)),
                    (f.instanceUid = c++),
                    (f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    f.registerBreakpoints(),
                    f.init(!0);
            }
            var c = 0;
            return b;
        })()),
            (b.prototype.activateADA = function () {
                var a = this;
                a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
            (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
                var e = this;
                if ("boolean" == typeof c) (d = c), (c = null);
                else if (0 > c || c >= e.slideCount) return !1;
                e.unload(),
                    "number" == typeof c
                        ? 0 === c && 0 === e.$slides.length
                            ? a(b).appendTo(e.$slideTrack)
                            : d
                            ? a(b).insertBefore(e.$slides.eq(c))
                            : a(b).insertAfter(e.$slides.eq(c))
                        : d === !0
                        ? a(b).prependTo(e.$slideTrack)
                        : a(b).appendTo(e.$slideTrack),
                    (e.$slides = e.$slideTrack.children(this.options.slide)),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slideTrack.append(e.$slides),
                    e.$slides.each(function (b, c) {
                        a(c).attr("data-slick-index", b);
                    }),
                    (e.$slidesCache = e.$slides),
                    e.reinit();
            }),
            (b.prototype.animateHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.animate({ height: b }, a.options.speed);
                }
            }),
            (b.prototype.animateSlide = function (b, c) {
                var d = {},
                    e = this;
                e.animateHeight(),
                    e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                    e.transformsEnabled === !1
                        ? e.options.vertical === !1
                            ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c)
                            : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c)
                        : e.cssTransitions === !1
                        ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                          a({ animStart: e.currentLeft }).animate(
                              { animStart: b },
                              {
                                  duration: e.options.speed,
                                  easing: e.options.easing,
                                  step: function (a) {
                                      (a = Math.ceil(a)), e.options.vertical === !1 ? ((d[e.animType] = "translate(" + a + "px, 0px)"), e.$slideTrack.css(d)) : ((d[e.animType] = "translate(0px," + a + "px)"), e.$slideTrack.css(d));
                                  },
                                  complete: function () {
                                      c && c.call();
                                  },
                              }
                          ))
                        : (e.applyTransition(),
                          (b = Math.ceil(b)),
                          e.options.vertical === !1 ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)") : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
                          e.$slideTrack.css(d),
                          c &&
                              setTimeout(function () {
                                  e.disableTransition(), c.call();
                              }, e.options.speed));
            }),
            (b.prototype.getNavTarget = function () {
                var b = this,
                    c = b.options.asNavFor;
                return c && null !== c && (c = a(c).not(b.$slider)), c;
            }),
            (b.prototype.asNavFor = function (b) {
                var c = this,
                    d = c.getNavTarget();
                null !== d &&
                    "object" == typeof d &&
                    d.each(function () {
                        var c = a(this).slick("getSlick");
                        c.unslicked || c.slideHandler(b, !0);
                    });
            }),
            (b.prototype.applyTransition = function (a) {
                var b = this,
                    c = {};
                b.options.fade === !1 ? (c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase) : (c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase),
                    b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
            }),
            (b.prototype.autoPlay = function () {
                var a = this;
                a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
            }),
            (b.prototype.autoPlayClear = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer);
            }),
            (b.prototype.autoPlayIterator = function () {
                var a = this,
                    b = a.currentSlide + a.options.slidesToScroll;
                a.paused ||
                    a.interrupted ||
                    a.focussed ||
                    (a.options.infinite === !1 &&
                        (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? (a.direction = 0) : 0 === a.direction && ((b = a.currentSlide - a.options.slidesToScroll), a.currentSlide - 1 === 0 && (a.direction = 1))),
                    a.slideHandler(b));
            }),
            (b.prototype.buildArrows = function () {
                var b = this;
                b.options.arrows === !0 &&
                    ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
                    (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
                    b.slideCount > b.options.slidesToShow
                        ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
                          b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
                          b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (b.prototype.buildDots = function () {
                var b,
                    c,
                    d = this;
                if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                    for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                    (d.$dots = c.appendTo(d.options.appendDots)), d.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (b.prototype.buildOut = function () {
                var b = this;
                (b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (b.slideCount = b.$slides.length),
                    b.$slides.each(function (b, c) {
                        a(c)
                            .attr("data-slick-index", b)
                            .data("originalStyling", a(c).attr("style") || "");
                    }),
                    b.$slider.addClass("slick-slider"),
                    (b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    b.$slideTrack.css("opacity", 0),
                    (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
                    a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.buildDots(),
                    b.updateDots(),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.options.draggable === !0 && b.$list.addClass("draggable");
            }),
            (b.prototype.buildRows = function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = this;
                if (((d = document.createDocumentFragment()), (f = h.$slider.children()), h.options.rows > 0)) {
                    for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                        var i = document.createElement("div");
                        for (b = 0; b < h.options.rows; b++) {
                            var j = document.createElement("div");
                            for (c = 0; c < h.options.slidesPerRow; c++) {
                                var k = a * g + (b * h.options.slidesPerRow + c);
                                f.get(k) && j.appendChild(f.get(k));
                            }
                            i.appendChild(j);
                        }
                        d.appendChild(i);
                    }
                    h.$slider.empty().append(d),
                        h.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / h.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (b.prototype.checkResponsive = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = !1,
                    i = g.$slider.width(),
                    j = window.innerWidth || a(window).width();
                if (("window" === g.respondTo ? (f = j) : "slider" === g.respondTo ? (f = i) : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive)) {
                    e = null;
                    for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                    null !== e
                        ? null !== g.activeBreakpoint
                            ? (e !== g.activeBreakpoint || c) &&
                              ((g.activeBreakpoint = e),
                              "unslick" === g.breakpointSettings[e] ? g.unslick(e) : ((g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e])), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)),
                              (h = e))
                            : ((g.activeBreakpoint = e),
                              "unslick" === g.breakpointSettings[e] ? g.unslick(e) : ((g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e])), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)),
                              (h = e))
                        : null !== g.activeBreakpoint && ((g.activeBreakpoint = null), (g.options = g.originalSettings), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), (h = e)),
                        b || h === !1 || g.$slider.trigger("breakpoint", [g, h]);
                }
            }),
            (b.prototype.changeSlide = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = a(b.currentTarget);
                switch ((h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), (f = g.slideCount % g.options.slidesToScroll !== 0), (d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll), b.data.message)) {
                    case "previous":
                        (e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d), g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                        break;
                    case "next":
                        (e = 0 === d ? g.options.slidesToScroll : d), g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                        break;
                    case "index":
                        var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                        g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (b.prototype.checkNavigable = function (a) {
                var b,
                    c,
                    d = this;
                if (((b = d.getNavigableIndexes()), (c = 0), a > b[b.length - 1])) a = b[b.length - 1];
                else
                    for (var e in b) {
                        if (a < b[e]) {
                            a = c;
                            break;
                        }
                        c = b[e];
                    }
                return a;
            }),
            (b.prototype.cleanUpEvents = function () {
                var b = this;
                b.options.dots &&
                    null !== b.$dots &&
                    (a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
                    b.options.accessibility === !0 && b.$dots.off("keydown.slick", b.keyHandler)),
                    b.$slider.off("focus.slick blur.slick"),
                    b.options.arrows === !0 &&
                        b.slideCount > b.options.slidesToShow &&
                        (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
                        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide),
                        b.options.accessibility === !0 && (b.$prevArrow && b.$prevArrow.off("keydown.slick", b.keyHandler), b.$nextArrow && b.$nextArrow.off("keydown.slick", b.keyHandler))),
                    b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                    b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                    b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                    b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                    b.$list.off("click.slick", b.clickHandler),
                    a(document).off(b.visibilityChange, b.visibility),
                    b.cleanUpSlideEvents(),
                    b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
                    a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
                    a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                    a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
                    a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition);
            }),
            (b.prototype.cleanUpSlideEvents = function () {
                var b = this;
                b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
            }),
            (b.prototype.cleanUpRows = function () {
                var a,
                    b = this;
                b.options.rows > 0 && ((a = b.$slides.children().children()), a.removeAttr("style"), b.$slider.empty().append(a));
            }),
            (b.prototype.clickHandler = function (a) {
                var b = this;
                b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
            }),
            (b.prototype.destroy = function (b) {
                var c = this;
                c.autoPlayClear(),
                    (c.touchObject = {}),
                    c.cleanUpEvents(),
                    a(".slick-cloned", c.$slider).detach(),
                    c.$dots && c.$dots.remove(),
                    c.$prevArrow &&
                        c.$prevArrow.length &&
                        (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                    c.$nextArrow &&
                        c.$nextArrow.length &&
                        (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
                    c.$slides &&
                        (c.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                a(this).attr("style", a(this).data("originalStyling"));
                            }),
                        c.$slideTrack.children(this.options.slide).detach(),
                        c.$slideTrack.detach(),
                        c.$list.detach(),
                        c.$slider.append(c.$slides)),
                    c.cleanUpRows(),
                    c.$slider.removeClass("slick-slider"),
                    c.$slider.removeClass("slick-initialized"),
                    c.$slider.removeClass("slick-dotted"),
                    (c.unslicked = !0),
                    b || c.$slider.trigger("destroy", [c]);
            }),
            (b.prototype.disableTransition = function (a) {
                var b = this,
                    c = {};
                (c[b.transitionType] = ""), b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
            }),
            (b.prototype.fadeSlide = function (a, b) {
                var c = this;
                c.cssTransitions === !1
                    ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
                    : (c.applyTransition(a),
                      c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
                      b &&
                          setTimeout(function () {
                              c.disableTransition(a), b.call();
                          }, c.options.speed));
            }),
            (b.prototype.fadeSlideOut = function (a) {
                var b = this;
                b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
            }),
            (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
                var b = this;
                null !== a && ((b.$slidesCache = b.$slides), b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
            }),
            (b.prototype.focusHandler = function () {
                var b = this;
                b.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick", "*", function (c) {
                        var d = a(this);
                        setTimeout(function () {
                            b.options.pauseOnFocus && d.is(":focus") && ((b.focussed = !0), b.autoPlay());
                        }, 0);
                    })
                    .on("blur.slick", "*", function (c) {
                        a(this), b.options.pauseOnFocus && ((b.focussed = !1), b.autoPlay());
                    });
            }),
            (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
                var a = this;
                return a.currentSlide;
            }),
            (b.prototype.getDotCount = function () {
                var a = this,
                    b = 0,
                    c = 0,
                    d = 0;
                if (a.options.infinite === !0)
                    if (a.slideCount <= a.options.slidesToShow) ++d;
                    else for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
                else if (a.options.centerMode === !0) d = a.slideCount;
                else if (a.options.asNavFor) for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
                else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
                return d - 1;
            }),
            (b.prototype.getLeft = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f = this,
                    g = 0;
                return (
                    (f.slideOffset = 0),
                    (c = f.$slides.first().outerHeight(!0)),
                    f.options.infinite === !0
                        ? (f.slideCount > f.options.slidesToShow &&
                              ((f.slideOffset = f.slideWidth * f.options.slidesToShow * -1),
                              (e = -1),
                              f.options.vertical === !0 && f.options.centerMode === !0 && (2 === f.options.slidesToShow ? (e = -1.5) : 1 === f.options.slidesToShow && (e = -2)),
                              (g = c * f.options.slidesToShow * e)),
                          f.slideCount % f.options.slidesToScroll !== 0 &&
                              a + f.options.slidesToScroll > f.slideCount &&
                              f.slideCount > f.options.slidesToShow &&
                              (a > f.slideCount
                                  ? ((f.slideOffset = (f.options.slidesToShow - (a - f.slideCount)) * f.slideWidth * -1), (g = (f.options.slidesToShow - (a - f.slideCount)) * c * -1))
                                  : ((f.slideOffset = (f.slideCount % f.options.slidesToScroll) * f.slideWidth * -1), (g = (f.slideCount % f.options.slidesToScroll) * c * -1))))
                        : a + f.options.slidesToShow > f.slideCount && ((f.slideOffset = (a + f.options.slidesToShow - f.slideCount) * f.slideWidth), (g = (a + f.options.slidesToShow - f.slideCount) * c)),
                    f.slideCount <= f.options.slidesToShow && ((f.slideOffset = 0), (g = 0)),
                    f.options.centerMode === !0 && f.slideCount <= f.options.slidesToShow
                        ? (f.slideOffset = (f.slideWidth * Math.floor(f.options.slidesToShow)) / 2 - (f.slideWidth * f.slideCount) / 2)
                        : f.options.centerMode === !0 && f.options.infinite === !0
                        ? (f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2) - f.slideWidth)
                        : f.options.centerMode === !0 && ((f.slideOffset = 0), (f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2))),
                    (b = f.options.vertical === !1 ? a * f.slideWidth * -1 + f.slideOffset : a * c * -1 + g),
                    f.options.variableWidth === !0 &&
                        ((d = f.slideCount <= f.options.slidesToShow || f.options.infinite === !1 ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow)),
                        (b = f.options.rtl === !0 ? (d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0) : d[0] ? -1 * d[0].offsetLeft : 0),
                        f.options.centerMode === !0 &&
                            ((d = f.slideCount <= f.options.slidesToShow || f.options.infinite === !1 ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow + 1)),
                            (b = f.options.rtl === !0 ? (d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0) : d[0] ? -1 * d[0].offsetLeft : 0),
                            (b += (f.$list.width() - d.outerWidth()) / 2))),
                    b
                );
            }),
            (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
                var b = this;
                return b.options[a];
            }),
            (b.prototype.getNavigableIndexes = function () {
                var a,
                    b = this,
                    c = 0,
                    d = 0,
                    e = [];
                for (b.options.infinite === !1 ? (a = b.slideCount) : ((c = -1 * b.options.slidesToScroll), (d = -1 * b.options.slidesToScroll), (a = 2 * b.slideCount)); a > c; )
                    e.push(c), (c = d + b.options.slidesToScroll), (d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow);
                return e;
            }),
            (b.prototype.getSlick = function () {
                return this;
            }),
            (b.prototype.getSlideCount = function () {
                var b,
                    c,
                    d,
                    e,
                    f = this;
                return (
                    (e = f.options.centerMode === !0 ? Math.floor(f.$list.width() / 2) : 0),
                    (d = -1 * f.swipeLeft + e),
                    f.options.swipeToSlide === !0
                        ? (f.$slideTrack.find(".slick-slide").each(function (b, e) {
                              var g, h, i;
                              return (g = a(e).outerWidth()), (h = e.offsetLeft), f.options.centerMode !== !0 && (h += g / 2), (i = h + g), i > d ? ((c = e), !1) : void 0;
                          }),
                          (b = Math.abs(a(c).attr("data-slick-index") - f.currentSlide) || 1))
                        : f.options.slidesToScroll
                );
            }),
            (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
                var c = this;
                c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
            }),
            (b.prototype.init = function (b) {
                var c = this;
                a(c.$slider).hasClass("slick-initialized") ||
                    (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()),
                    b && c.$slider.trigger("init", [c]),
                    c.options.accessibility === !0 && c.initADA(),
                    c.options.autoplay && ((c.paused = !1), c.autoPlay());
            }),
            (b.prototype.initADA = function () {
                var b = this,
                    c = Math.ceil(b.slideCount / b.options.slidesToShow),
                    d = b.getNavigableIndexes().filter(function (a) {
                        return a >= 0 && a < b.slideCount;
                    });
                b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== b.$dots &&
                        (b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                            var e = d.indexOf(c);
                            if ((a(this).attr({ role: "tabpanel", id: "slick-slide" + b.instanceUid + c, tabindex: -1 }), -1 !== e)) {
                                var f = "slick-slide-control" + b.instanceUid + e;
                                a("#" + f).length && a(this).attr({ "aria-describedby": f });
                            }
                        }),
                        b.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (e) {
                                var f = d[e];
                                a(this).attr({ role: "presentation" }),
                                    a(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + b.instanceUid + e, "aria-controls": "slick-slide" + b.instanceUid + f, "aria-label": e + 1 + " of " + c, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(b.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var e = b.currentSlide, f = e + b.options.slidesToShow; f > e; e++) b.options.focusOnChange ? b.$slides.eq(e).attr({ tabindex: "0" }) : b.$slides.eq(e).removeAttr("tabindex");
                b.activateADA();
            }),
            (b.prototype.initArrowEvents = function () {
                var a = this;
                a.options.arrows === !0 &&
                    a.slideCount > a.options.slidesToShow &&
                    (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide),
                    a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide),
                    a.options.accessibility === !0 && (a.$prevArrow.on("keydown.slick", a.keyHandler), a.$nextArrow.on("keydown.slick", a.keyHandler)));
            }),
            (b.prototype.initDotEvents = function () {
                var b = this;
                b.options.dots === !0 && b.slideCount > b.options.slidesToShow && (a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.accessibility === !0 && b.$dots.on("keydown.slick", b.keyHandler)),
                    b.options.dots === !0 &&
                        b.options.pauseOnDotsHover === !0 &&
                        b.slideCount > b.options.slidesToShow &&
                        a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
            }),
            (b.prototype.initSlideEvents = function () {
                var b = this;
                b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
            }),
            (b.prototype.initializeEvents = function () {
                var b = this;
                b.initArrowEvents(),
                    b.initDotEvents(),
                    b.initSlideEvents(),
                    b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler),
                    b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler),
                    b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler),
                    b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler),
                    b.$list.on("click.slick", b.clickHandler),
                    a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                    b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                    a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
                    a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                    a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                    a(b.setPosition);
            }),
            (b.prototype.initUI = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
            }),
            (b.prototype.keyHandler = function (a) {
                var b = this;
                a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === a.keyCode && b.options.accessibility === !0
                        ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } })
                        : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
            }),
            (b.prototype.lazyLoad = function () {
                function b(b) {
                    a("img[data-lazy]", b).each(function () {
                        var b = a(this),
                            c = a(this).attr("data-lazy"),
                            d = a(this).attr("data-srcset"),
                            e = a(this).attr("data-sizes") || g.$slider.attr("data-sizes"),
                            f = document.createElement("img");
                        (f.onload = function () {
                            b.animate({ opacity: 0 }, 100, function () {
                                d && (b.attr("srcset", d), e && b.attr("sizes", e)),
                                    b.attr("src", c).animate({ opacity: 1 }, 200, function () {
                                        b.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    g.$slider.trigger("lazyLoaded", [g, b, c]);
                            });
                        }),
                            (f.onerror = function () {
                                b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c]);
                            }),
                            (f.src = c);
                    });
                }
                var c,
                    d,
                    e,
                    f,
                    g = this;
                if (
                    (g.options.centerMode === !0
                        ? g.options.infinite === !0
                            ? ((e = g.currentSlide + (g.options.slidesToShow / 2 + 1)), (f = e + g.options.slidesToShow + 2))
                            : ((e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1))), (f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide))
                        : ((e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide), (f = Math.ceil(e + g.options.slidesToShow)), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)),
                    (c = g.$slider.find(".slick-slide").slice(e, f)),
                    "anticipated" === g.options.lazyLoad)
                )
                    for (var h = e - 1, i = f, j = g.$slider.find(".slick-slide"), k = 0; k < g.options.slidesToScroll; k++) 0 > h && (h = g.slideCount - 1), (c = c.add(j.eq(h))), (c = c.add(j.eq(i))), h--, i++;
                b(c),
                    g.slideCount <= g.options.slidesToShow
                        ? ((d = g.$slider.find(".slick-slide")), b(d))
                        : g.currentSlide >= g.slideCount - g.options.slidesToShow
                        ? ((d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow)), b(d))
                        : 0 === g.currentSlide && ((d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow)), b(d));
            }),
            (b.prototype.loadSlider = function () {
                var a = this;
                a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
            }),
            (b.prototype.next = b.prototype.slickNext = function () {
                var a = this;
                a.changeSlide({ data: { message: "next" } });
            }),
            (b.prototype.orientationChange = function () {
                var a = this;
                a.checkResponsive(), a.setPosition();
            }),
            (b.prototype.pause = b.prototype.slickPause = function () {
                var a = this;
                a.autoPlayClear(), (a.paused = !0);
            }),
            (b.prototype.play = b.prototype.slickPlay = function () {
                var a = this;
                a.autoPlay(), (a.options.autoplay = !0), (a.paused = !1), (a.focussed = !1), (a.interrupted = !1);
            }),
            (b.prototype.postSlide = function (b) {
                var c = this;
                if (
                    !c.unslicked &&
                    (c.$slider.trigger("afterChange", [c, b]),
                    (c.animating = !1),
                    c.slideCount > c.options.slidesToShow && c.setPosition(),
                    (c.swipeLeft = null),
                    c.options.autoplay && c.autoPlay(),
                    c.options.accessibility === !0 && (c.initADA(), c.options.focusOnChange))
                ) {
                    var d = a(c.$slides.get(c.currentSlide));
                    d.attr("tabindex", 0).focus();
                }
            }),
            (b.prototype.prev = b.prototype.slickPrev = function () {
                var a = this;
                a.changeSlide({ data: { message: "previous" } });
            }),
            (b.prototype.preventDefault = function (a) {
                a.preventDefault();
            }),
            (b.prototype.progressiveLazyLoad = function (b) {
                b = b || 1;
                var c,
                    d,
                    e,
                    f,
                    g,
                    h = this,
                    i = a("img[data-lazy]", h.$slider);
                i.length
                    ? ((c = i.first()),
                      (d = c.attr("data-lazy")),
                      (e = c.attr("data-srcset")),
                      (f = c.attr("data-sizes") || h.$slider.attr("data-sizes")),
                      (g = document.createElement("img")),
                      (g.onload = function () {
                          e && (c.attr("srcset", e), f && c.attr("sizes", f)),
                              c.attr("src", d).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              h.options.adaptiveHeight === !0 && h.setPosition(),
                              h.$slider.trigger("lazyLoaded", [h, c, d]),
                              h.progressiveLazyLoad();
                      }),
                      (g.onerror = function () {
                          3 > b
                              ? setTimeout(function () {
                                    h.progressiveLazyLoad(b + 1);
                                }, 500)
                              : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), h.$slider.trigger("lazyLoadError", [h, c, d]), h.progressiveLazyLoad());
                      }),
                      (g.src = d))
                    : h.$slider.trigger("allImagesLoaded", [h]);
            }),
            (b.prototype.refresh = function (b) {
                var c,
                    d,
                    e = this;
                (d = e.slideCount - e.options.slidesToShow),
                    !e.options.infinite && e.currentSlide > d && (e.currentSlide = d),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    (c = e.currentSlide),
                    e.destroy(!0),
                    a.extend(e, e.initials, { currentSlide: c }),
                    e.init(),
                    b || e.changeSlide({ data: { message: "index", index: c } }, !1);
            }),
            (b.prototype.registerBreakpoints = function () {
                var b,
                    c,
                    d,
                    e = this,
                    f = e.options.responsive || null;
                if ("array" === a.type(f) && f.length) {
                    e.respondTo = e.options.respondTo || "window";
                    for (b in f)
                        if (((d = e.breakpoints.length - 1), f.hasOwnProperty(b))) {
                            for (c = f[b].breakpoint; d >= 0; ) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                            e.breakpoints.push(c), (e.breakpointSettings[c] = f[b].settings);
                        }
                    e.breakpoints.sort(function (a, b) {
                        return e.options.mobileFirst ? a - b : b - a;
                    });
                }
            }),
            (b.prototype.reinit = function () {
                var b = this;
                (b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide")),
                    (b.slideCount = b.$slides.length),
                    b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                    b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                    b.registerBreakpoints(),
                    b.setProps(),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.updateArrows(),
                    b.initArrowEvents(),
                    b.buildDots(),
                    b.updateDots(),
                    b.initDotEvents(),
                    b.cleanUpSlideEvents(),
                    b.initSlideEvents(),
                    b.checkResponsive(!1, !0),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.setPosition(),
                    b.focusHandler(),
                    (b.paused = !b.options.autoplay),
                    b.autoPlay(),
                    b.$slider.trigger("reInit", [b]);
            }),
            (b.prototype.resize = function () {
                var b = this;
                a(window).width() !== b.windowWidth &&
                    (clearTimeout(b.windowDelay),
                    (b.windowDelay = window.setTimeout(function () {
                        (b.windowWidth = a(window).width()), b.checkResponsive(), b.unslicked || b.setPosition();
                    }, 50)));
            }),
            (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
                var d = this;
                return (
                    "boolean" == typeof a ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1)) : (a = b === !0 ? --a : a),
                    d.slideCount < 1 || 0 > a || a > d.slideCount - 1
                        ? !1
                        : (d.unload(),
                          c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                          (d.$slides = d.$slideTrack.children(this.options.slide)),
                          d.$slideTrack.children(this.options.slide).detach(),
                          d.$slideTrack.append(d.$slides),
                          (d.$slidesCache = d.$slides),
                          void d.reinit())
                );
            }),
            (b.prototype.setCSS = function (a) {
                var b,
                    c,
                    d = this,
                    e = {};
                d.options.rtl === !0 && (a = -a),
                    (b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
                    (c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
                    (e[d.positionProp] = a),
                    d.transformsEnabled === !1
                        ? d.$slideTrack.css(e)
                        : ((e = {}), d.cssTransitions === !1 ? ((e[d.animType] = "translate(" + b + ", " + c + ")"), d.$slideTrack.css(e)) : ((e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)"), d.$slideTrack.css(e)));
            }),
            (b.prototype.setDimensions = function () {
                var a = this;
                a.options.vertical === !1
                    ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding })
                    : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })),
                    (a.listWidth = a.$list.width()),
                    (a.listHeight = a.$list.height()),
                    a.options.vertical === !1 && a.options.variableWidth === !1
                        ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)))
                        : a.options.variableWidth === !0
                        ? a.$slideTrack.width(5e3 * a.slideCount)
                        : ((a.slideWidth = Math.ceil(a.listWidth)), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
                var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
                a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
            }),
            (b.prototype.setFade = function () {
                var b,
                    c = this;
                c.$slides.each(function (d, e) {
                    (b = c.slideWidth * d * -1),
                        c.options.rtl === !0 ? a(e).css({ position: "relative", right: b, top: 0, zIndex: c.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: b, top: 0, zIndex: c.options.zIndex - 2, opacity: 0 });
                }),
                    c.$slides.eq(c.currentSlide).css({ zIndex: c.options.zIndex - 1, opacity: 1 });
            }),
            (b.prototype.setHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.css("height", b);
                }
            }),
            (b.prototype.setOption = b.prototype.slickSetOption = function () {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this,
                    h = !1;
                if (
                    ("object" === a.type(arguments[0])
                        ? ((d = arguments[0]), (h = arguments[1]), (f = "multiple"))
                        : "string" === a.type(arguments[0]) &&
                          ((d = arguments[0]), (e = arguments[1]), (h = arguments[2]), "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? (f = "responsive") : "undefined" != typeof arguments[1] && (f = "single")),
                    "single" === f)
                )
                    g.options[d] = e;
                else if ("multiple" === f)
                    a.each(d, function (a, b) {
                        g.options[a] = b;
                    });
                else if ("responsive" === f)
                    for (c in e)
                        if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
                        else {
                            for (b = g.options.responsive.length - 1; b >= 0; ) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
                            g.options.responsive.push(e[c]);
                        }
                h && (g.unload(), g.reinit());
            }),
            (b.prototype.setPosition = function () {
                var a = this;
                a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
            }),
            (b.prototype.setProps = function () {
                var a = this,
                    b = document.body.style;
                (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
                    "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
                    (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
                    a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : (a.options.zIndex = a.defaults.zIndex)),
                    void 0 !== b.OTransform && ((a.animType = "OTransform"), (a.transformType = "-o-transform"), (a.transitionType = "OTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.MozTransform &&
                        ((a.animType = "MozTransform"), (a.transformType = "-moz-transform"), (a.transitionType = "MozTransition"), void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
                    void 0 !== b.webkitTransform &&
                        ((a.animType = "webkitTransform"), (a.transformType = "-webkit-transform"), (a.transitionType = "webkitTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.msTransform && ((a.animType = "msTransform"), (a.transformType = "-ms-transform"), (a.transitionType = "msTransition"), void 0 === b.msTransform && (a.animType = !1)),
                    void 0 !== b.transform && a.animType !== !1 && ((a.animType = "transform"), (a.transformType = "transform"), (a.transitionType = "transition")),
                    (a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1);
            }),
            (b.prototype.setSlideClasses = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f = this;
                if (((c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0)) {
                    var g = f.options.slidesToShow % 2 === 0 ? 1 : 0;
                    (b = Math.floor(f.options.slidesToShow / 2)),
                        f.options.infinite === !0 &&
                            (a >= b && a <= f.slideCount - 1 - b
                                ? f.$slides
                                      .slice(a - b + g, a + b + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((d = f.options.slidesToShow + a),
                                  c
                                      .slice(d - b + 1 + g, d + b + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
                        f.$slides.eq(a).addClass("slick-center");
                } else
                    a >= 0 && a <= f.slideCount - f.options.slidesToShow
                        ? f.$slides
                              .slice(a, a + f.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : c.length <= f.options.slidesToShow
                        ? c.addClass("slick-active").attr("aria-hidden", "false")
                        : ((e = f.slideCount % f.options.slidesToShow),
                          (d = f.options.infinite === !0 ? f.options.slidesToShow + a : a),
                          f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow
                              ? c
                                    .slice(d - (f.options.slidesToShow - e), d + e)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : c
                                    .slice(d, d + f.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" === f.options.lazyLoad || "anticipated" === f.options.lazyLoad) && f.lazyLoad();
            }),
            (b.prototype.setupInfinite = function () {
                var b,
                    c,
                    d,
                    e = this;
                if ((e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && ((c = null), e.slideCount > e.options.slidesToShow))) {
                    for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1)
                        (c = b - 1),
                            a(e.$slides[c])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", c - e.slideCount)
                                .prependTo(e.$slideTrack)
                                .addClass("slick-cloned");
                    for (b = 0; b < d + e.slideCount; b += 1)
                        (c = b),
                            a(e.$slides[c])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", c + e.slideCount)
                                .appendTo(e.$slideTrack)
                                .addClass("slick-cloned");
                    e.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            a(this).attr("id", "");
                        });
                }
            }),
            (b.prototype.interrupt = function (a) {
                var b = this;
                a || b.autoPlay(), (b.interrupted = a);
            }),
            (b.prototype.selectHandler = function (b) {
                var c = this,
                    d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                    e = parseInt(d.attr("data-slick-index"));
                return e || (e = 0), c.slideCount <= c.options.slidesToShow ? void c.slideHandler(e, !1, !0) : void c.slideHandler(e);
            }),
            (b.prototype.slideHandler = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = null,
                    j = this;
                return (
                    (b = b || !1),
                    (j.animating === !0 && j.options.waitForAnimate === !0) || (j.options.fade === !0 && j.currentSlide === a)
                        ? void 0
                        : (b === !1 && j.asNavFor(a),
                          (d = a),
                          (i = j.getLeft(d)),
                          (g = j.getLeft(j.currentSlide)),
                          (j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft),
                          j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll)
                              ? void (
                                    j.options.fade === !1 &&
                                    ((d = j.currentSlide),
                                    c !== !0 && j.slideCount > j.options.slidesToShow
                                        ? j.animateSlide(g, function () {
                                              j.postSlide(d);
                                          })
                                        : j.postSlide(d))
                                )
                              : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll)
                              ? void (
                                    j.options.fade === !1 &&
                                    ((d = j.currentSlide),
                                    c !== !0 && j.slideCount > j.options.slidesToShow
                                        ? j.animateSlide(g, function () {
                                              j.postSlide(d);
                                          })
                                        : j.postSlide(d))
                                )
                              : (j.options.autoplay && clearInterval(j.autoPlayTimer),
                                (e =
                                    0 > d
                                        ? j.slideCount % j.options.slidesToScroll !== 0
                                            ? j.slideCount - (j.slideCount % j.options.slidesToScroll)
                                            : j.slideCount + d
                                        : d >= j.slideCount
                                        ? j.slideCount % j.options.slidesToScroll !== 0
                                            ? 0
                                            : d - j.slideCount
                                        : d),
                                (j.animating = !0),
                                j.$slider.trigger("beforeChange", [j, j.currentSlide, e]),
                                (f = j.currentSlide),
                                (j.currentSlide = e),
                                j.setSlideClasses(j.currentSlide),
                                j.options.asNavFor && ((h = j.getNavTarget()), (h = h.slick("getSlick")), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)),
                                j.updateDots(),
                                j.updateArrows(),
                                j.options.fade === !0
                                    ? (c !== !0
                                          ? (j.fadeSlideOut(f),
                                            j.fadeSlide(e, function () {
                                                j.postSlide(e);
                                            }))
                                          : j.postSlide(e),
                                      void j.animateHeight())
                                    : void (c !== !0 && j.slideCount > j.options.slidesToShow
                                          ? j.animateSlide(i, function () {
                                                j.postSlide(e);
                                            })
                                          : j.postSlide(e))))
                );
            }),
            (b.prototype.startLoad = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()),
                    a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
                    a.$slider.addClass("slick-loading");
            }),
            (b.prototype.swipeDirection = function () {
                var a,
                    b,
                    c,
                    d,
                    e = this;
                return (
                    (a = e.touchObject.startX - e.touchObject.curX),
                    (b = e.touchObject.startY - e.touchObject.curY),
                    (c = Math.atan2(b, a)),
                    (d = Math.round((180 * c) / Math.PI)),
                    0 > d && (d = 360 - Math.abs(d)),
                    45 >= d && d >= 0
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : 360 >= d && d >= 315
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : d >= 135 && 225 >= d
                        ? e.options.rtl === !1
                            ? "right"
                            : "left"
                        : e.options.verticalSwiping === !0
                        ? d >= 35 && 135 >= d
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (b.prototype.swipeEnd = function (a) {
                var b,
                    c,
                    d = this;
                if (((d.dragging = !1), (d.swiping = !1), d.scrolling)) return (d.scrolling = !1), !1;
                if (((d.interrupted = !1), (d.shouldClick = d.touchObject.swipeLength > 10 ? !1 : !0), void 0 === d.touchObject.curX)) return !1;
                if ((d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe)) {
                    switch ((c = d.swipeDirection())) {
                        case "left":
                        case "down":
                            (b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount()), (d.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount()), (d.currentDirection = 1);
                    }
                    "vertical" != c && (d.slideHandler(b), (d.touchObject = {}), d.$slider.trigger("swipe", [d, c]));
                } else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), (d.touchObject = {}));
            }),
            (b.prototype.swipeHandler = function (a) {
                var b = this;
                if (!(b.options.swipe === !1 || ("ontouchend" in document && b.options.swipe === !1) || (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))))
                    switch (
                        ((b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1),
                        (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
                        b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                        a.data.action)
                    ) {
                        case "start":
                            b.swipeStart(a);
                            break;
                        case "move":
                            b.swipeMove(a);
                            break;
                        case "end":
                            b.swipeEnd(a);
                    }
            }),
            (b.prototype.swipeMove = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = this;
                return (
                    (f = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
                    !h.dragging || h.scrolling || (f && 1 !== f.length)
                        ? !1
                        : ((b = h.getLeft(h.currentSlide)),
                          (h.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX),
                          (h.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY),
                          (h.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(h.touchObject.curX - h.touchObject.startX, 2)))),
                          (g = Math.round(Math.sqrt(Math.pow(h.touchObject.curY - h.touchObject.startY, 2)))),
                          !h.options.verticalSwiping && !h.swiping && g > 4
                              ? ((h.scrolling = !0), !1)
                              : (h.options.verticalSwiping === !0 && (h.touchObject.swipeLength = g),
                                (c = h.swipeDirection()),
                                void 0 !== a.originalEvent && h.touchObject.swipeLength > 4 && ((h.swiping = !0), a.preventDefault()),
                                (e = (h.options.rtl === !1 ? 1 : -1) * (h.touchObject.curX > h.touchObject.startX ? 1 : -1)),
                                h.options.verticalSwiping === !0 && (e = h.touchObject.curY > h.touchObject.startY ? 1 : -1),
                                (d = h.touchObject.swipeLength),
                                (h.touchObject.edgeHit = !1),
                                h.options.infinite === !1 &&
                                    ((0 === h.currentSlide && "right" === c) || (h.currentSlide >= h.getDotCount() && "left" === c)) &&
                                    ((d = h.touchObject.swipeLength * h.options.edgeFriction), (h.touchObject.edgeHit = !0)),
                                h.options.vertical === !1 ? (h.swipeLeft = b + d * e) : (h.swipeLeft = b + d * (h.$list.height() / h.listWidth) * e),
                                h.options.verticalSwiping === !0 && (h.swipeLeft = b + d * e),
                                h.options.fade === !0 || h.options.touchMove === !1 ? !1 : h.animating === !0 ? ((h.swipeLeft = null), !1) : void h.setCSS(h.swipeLeft)))
                );
            }),
            (b.prototype.swipeStart = function (a) {
                var b,
                    c = this;
                return (
                    (c.interrupted = !0),
                    1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow
                        ? ((c.touchObject = {}), !1)
                        : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
                          (c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX),
                          (c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY),
                          void (c.dragging = !0))
                );
            }),
            (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
                var a = this;
                null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
            }),
            (b.prototype.unload = function () {
                var b = this;
                a(".slick-cloned", b.$slider).remove(),
                    b.$dots && b.$dots.remove(),
                    b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
                    b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
                    b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (b.prototype.unslick = function (a) {
                var b = this;
                b.$slider.trigger("unslick", [b, a]), b.destroy();
            }),
            (b.prototype.updateArrows = function () {
                var a,
                    b = this;
                (a = Math.floor(b.options.slidesToShow / 2)),
                    b.options.arrows === !0 &&
                        b.slideCount > b.options.slidesToShow &&
                        !b.options.infinite &&
                        (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === b.currentSlide
                            ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1
                            ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : b.currentSlide >= b.slideCount - 1 &&
                              b.options.centerMode === !0 &&
                              (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (b.prototype.updateDots = function () {
                var a = this;
                null !== a.$dots &&
                    (a.$dots.find("li").removeClass("slick-active").end(),
                    a.$dots
                        .find("li")
                        .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (b.prototype.visibility = function () {
                var a = this;
                a.options.autoplay && (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
            }),
            (a.fn.slick = function () {
                var a,
                    c,
                    d = this,
                    e = arguments[0],
                    f = Array.prototype.slice.call(arguments, 1),
                    g = d.length;
                for (a = 0; g > a; a++) if (("object" == typeof e || "undefined" == typeof e ? (d[a].slick = new b(d[a], e)) : (c = d[a].slick[e].apply(d[a].slick, f)), "undefined" != typeof c)) return c;
                return d;
            });
    }),
    (function (a) {
        (a.supersized = function (b) {
            var c = "#supersized",
                d = this;
            (d.$el = a(c)),
                (d.el = c),
                (vars = a.supersized.vars),
                d.$el.data("supersized", d),
                (api = d.$el.data("supersized")),
                (d.init = function () {
                    (a.supersized.vars = a.extend(a.supersized.vars, a.supersized.themeVars)),
                        (a.supersized.vars.options = a.extend({}, a.supersized.defaultOptions, a.supersized.themeOptions, b)),
                        (d.options = a.supersized.vars.options),
                        d._build();
                }),
                (d._build = function () {
                    for (var b, c, e = 0, f = "", g = "", h = ""; e <= d.options.slides.length - 1; ) {
                        switch (d.options.slide_links) {
                            case "num":
                                b = e;
                                break;
                            case "name":
                                b = d.options.slides[e].title;
                                break;
                            case "blank":
                                b = "";
                        }
                        (f = f + '<li class="slide-' + e + '"></li>'),
                            e == d.options.start_slide - 1
                                ? (d.options.slide_links && (g = g + '<li class="slide-link-' + e + ' current-slide"><a>' + b + "</a></li>"),
                                  d.options.thumb_links && ((c = d.options.slides[e].thumb ? d.options.slides[e].thumb : d.options.slides[e].image), (h = h + '<li class="thumb' + e + ' current-thumb"><img src="' + c + '"/></li>')))
                                : (d.options.slide_links && (g = g + '<li class="slide-link-' + e + '" ><a>' + b + "</a></li>"),
                                  d.options.thumb_links && ((c = d.options.slides[e].thumb ? d.options.slides[e].thumb : d.options.slides[e].image), (h = h + '<li class="thumb' + e + '"><img src="' + c + '"/></li>'))),
                            e++;
                    }
                    d.options.slide_links && a(vars.slide_list).html(g),
                        d.options.thumb_links && vars.thumb_tray.length && a(vars.thumb_tray).append('<ul id="' + vars.thumb_list.replace("#", "") + '">' + h + "</ul>"),
                        a(d.el).append(f),
                        d.options.thumbnail_navigation &&
                            (vars.current_slide - 1 < 0 ? (prevThumb = d.options.slides.length - 1) : (prevThumb = vars.current_slide - 1),
                            a(vars.prev_thumb).show().html(a("<img/>").attr("src", d.options.slides[prevThumb].image)),
                            vars.current_slide == d.options.slides.length - 1 ? (nextThumb = 0) : (nextThumb = vars.current_slide + 1),
                            a(vars.next_thumb).show().html(a("<img/>").attr("src", d.options.slides[nextThumb].image))),
                        d._start();
                }),
                (d._start = function () {
                    d.options.start_slide ? (vars.current_slide = d.options.start_slide - 1) : (vars.current_slide = Math.floor(Math.random() * d.options.slides.length));
                    var b = d.options.new_window ? ' target="_blank"' : "";
                    if ((3 == d.options.performance ? d.$el.addClass("speed") : (1 == d.options.performance || 2 == d.options.performance) && d.$el.addClass("quality"), d.options.random)) {
                        arr = d.options.slides;
                        for (var c, e, f = arr.length; f; c = parseInt(Math.random() * f), e = arr[--f], arr[f] = arr[c], arr[c] = e);
                        d.options.slides = arr;
                    }
                    if (d.options.slides.length > 1) {
                        if (d.options.slides.length > 2) {
                            vars.current_slide - 1 < 0 ? (loadPrev = d.options.slides.length - 1) : (loadPrev = vars.current_slide - 1);
                            var g = d.options.slides[loadPrev].url ? "href='" + d.options.slides[loadPrev].url + "'" : "",
                                h = a('<img src="' + d.options.slides[loadPrev].image + '"/>'),
                                i = d.el + " li:eq(" + loadPrev + ")";
                            h
                                .appendTo(i)
                                .wrap("<a " + g + b + "></a>")
                                .parent()
                                .parent()
                                .addClass("image-loading prevslide"),
                                h.on("load", function () {
                                    a(this).data("origWidth", a(this).width()).data("origHeight", a(this).height()), d.resizeNow();
                                });
                        }
                    } else d.options.slideshow = 0;
                    g = api.getField("url") ? "href='" + api.getField("url") + "'" : "";
                    var j = a('<img src="' + api.getField("image") + '"/>'),
                        k = d.el + " li:eq(" + vars.current_slide + ")";
                    if (
                        (j
                            .appendTo(k)
                            .wrap("<a " + g + b + "></a>")
                            .parent()
                            .parent()
                            .addClass("image-loading activeslide"),
                        j.on("load", function () {
                            d._origDim(a(this)), d.resizeNow(), d.launch(), "undefined" != typeof theme && "function" == typeof theme._init && theme._init();
                        }),
                        d.options.slides && d.options.slides.length > 1)
                    ) {
                        vars.current_slide == d.options.slides.length - 1 ? (loadNext = 0) : (loadNext = vars.current_slide + 1), (g = d.options.slides[loadNext].url ? "href='" + d.options.slides[loadNext].url + "'" : "");
                        var l = a('<img src="' + d.options.slides[loadNext].image + '"/>'),
                            m = d.el + " li:eq(" + loadNext + ")";
                        l
                            .appendTo(m)
                            .wrap("<a " + g + b + "></a>")
                            .parent()
                            .parent()
                            .addClass("image-loading"),
                            l.on("load", function () {
                                a(this).data("origWidth", a(this).width()).data("origHeight", a(this).height()), d.resizeNow();
                            });
                    }
                }),
                (d.launch = function () {
                    d.$el.css("visibility", "visible"),
                        a("#supersized-loader").remove(),
                        "undefined" != typeof theme && "function" == typeof theme.beforeAnimation && theme.beforeAnimation("next"),
                        a(".load-item").show(),
                        d.options.keyboard_nav &&
                            a(document.documentElement).keyup(function (b) {
                                return vars.in_animation
                                    ? !1
                                    : a(document.activeElement).is("input, textarea")
                                    ? !1
                                    : void (37 == b.keyCode || 40 == b.keyCode
                                          ? (clearInterval(vars.slideshow_interval), d.prevSlide())
                                          : 39 == b.keyCode || 38 == b.keyCode
                                          ? (clearInterval(vars.slideshow_interval), d.nextSlide())
                                          : 32 != b.keyCode || vars.hover_pause || (clearInterval(vars.slideshow_interval), d.playToggle()));
                            }),
                        d.options.slideshow &&
                            d.options.pause_hover &&
                            a(d.el).hover(
                                function () {
                                    return vars.in_animation ? !1 : ((vars.hover_pause = !0), void (vars.is_paused || ((vars.hover_pause = "resume"), d.playToggle())));
                                },
                                function () {
                                    "resume" == vars.hover_pause && (d.playToggle(), (vars.hover_pause = !1));
                                }
                            ),
                        d.options.slide_links &&
                            a(vars.slide_list + "> li").click(function () {
                                return (index = a(vars.slide_list + "> li").index(this)), (targetSlide = index + 1), d.goTo(targetSlide), !1;
                            }),
                        d.options.thumb_links &&
                            a(vars.thumb_list + "> li").click(function () {
                                return (index = a(vars.thumb_list + "> li").index(this)), (targetSlide = index + 1), api.goTo(targetSlide), !1;
                            }),
                        d.options.slideshow &&
                            d.options.slides.length > 1 &&
                            (d.options.autoplay && d.options.slides.length > 1 ? (vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)) : (vars.is_paused = !0),
                            a(".load-item img").bind("contextmenu mousedown", function () {
                                return !1;
                            })),
                        a(window).resize(function () {
                            d.resizeNow();
                        });
                }),
                (d.resizeNow = function () {
                    return d.$el.each(function () {
                        return (
                            a("img", d.el).each(function () {
                                function b(a) {
                                    a
                                        ? (thisSlide.width() < f || thisSlide.width() < d.options.min_width) &&
                                          (thisSlide.width() * e >= d.options.min_height ? (thisSlide.width(d.options.min_width), thisSlide.height(thisSlide.width() * e)) : c())
                                        : d.options.min_height >= g && !d.options.fit_landscape
                                        ? f * e >= d.options.min_height || (f * e >= d.options.min_height && 1 >= e)
                                            ? (thisSlide.width(f), thisSlide.height(f * e))
                                            : e > 1
                                            ? (thisSlide.height(d.options.min_height), thisSlide.width(thisSlide.height() / e))
                                            : thisSlide.width() < f && (thisSlide.width(f), thisSlide.height(thisSlide.width() * e))
                                        : (thisSlide.width(f), thisSlide.height(f * e));
                                }
                                function c(a) {
                                    a
                                        ? thisSlide.height() < g && (thisSlide.height() / e >= d.options.min_width ? (thisSlide.height(d.options.min_height), thisSlide.width(thisSlide.height() / e)) : b(!0))
                                        : d.options.min_width >= f
                                        ? g / e >= d.options.min_width || e > 1
                                            ? (thisSlide.height(g), thisSlide.width(g / e))
                                            : 1 >= e && (thisSlide.width(d.options.min_width), thisSlide.height(thisSlide.width() * e))
                                        : (thisSlide.height(g), thisSlide.width(g / e));
                                }
                                thisSlide = a(this);
                                var e = (thisSlide.data("origHeight") / thisSlide.data("origWidth")).toFixed(2),
                                    f = d.$el.width(),
                                    g = d.$el.height();
                                d.options.fit_always
                                    ? g / f > e
                                        ? b()
                                        : c()
                                    : g <= d.options.min_height && f <= d.options.min_width
                                    ? g / f > e
                                        ? d.options.fit_landscape && 1 > e
                                            ? b(!0)
                                            : c(!0)
                                        : d.options.fit_portrait && e >= 1
                                        ? c(!0)
                                        : b(!0)
                                    : f <= d.options.min_width
                                    ? g / f > e
                                        ? d.options.fit_landscape && 1 > e
                                            ? b(!0)
                                            : c()
                                        : d.options.fit_portrait && e >= 1
                                        ? c()
                                        : b(!0)
                                    : g <= d.options.min_height
                                    ? g / f > e
                                        ? d.options.fit_landscape && 1 > e
                                            ? b()
                                            : c(!0)
                                        : d.options.fit_portrait && e >= 1
                                        ? c(!0)
                                        : b()
                                    : g / f > e
                                    ? d.options.fit_landscape && 1 > e
                                        ? b()
                                        : c()
                                    : d.options.fit_portrait && e >= 1
                                    ? c()
                                    : b(),
                                    thisSlide.parents("li").hasClass("image-loading") && a(".image-loading").removeClass("image-loading"),
                                    d.options.horizontal_center && a(this).css("left", (f - a(this).width()) / 2),
                                    d.options.vertical_center && a(this).css("top", (g - a(this).height()) / 2);
                            }),
                            d.options.image_protect &&
                                a("img", d.el).bind("contextmenu mousedown", function () {
                                    return !1;
                                }),
                            !1
                        );
                    });
                }),
                (d.nextSlide = function () {
                    if (vars.in_animation || !api.options.slideshow) return !1;
                    (vars.in_animation = !0), clearInterval(vars.slideshow_interval);
                    var b = (d.options.slides, d.$el.find(".activeslide"));
                    a(".prevslide").removeClass("prevslide"), b.removeClass("activeslide").addClass("prevslide"), vars.current_slide + 1 == d.options.slides.length ? (vars.current_slide = 0) : vars.current_slide++;
                    var c = a(d.el + " li:eq(" + vars.current_slide + ")");
                    d.$el.find(".prevslide"),
                        1 == d.options.performance && d.$el.removeClass("quality").addClass("speed"),
                        (loadSlide = !1),
                        vars.current_slide == d.options.slides.length - 1 ? (loadSlide = 0) : (loadSlide = vars.current_slide + 1);
                    var e = d.el + " li:eq(" + loadSlide + ")";
                    if (!a(e).html()) {
                        var f = d.options.new_window ? ' target="_blank"' : "";
                        imageLink = d.options.slides[loadSlide].url ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                        var g = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                        g
                            .appendTo(e)
                            .wrap("<a " + imageLink + f + "></a>")
                            .parent()
                            .parent()
                            .addClass("image-loading")
                            .css("visibility", "hidden"),
                            g.on("load", function () {
                                d._origDim(a(this)), d.resizeNow();
                            });
                    }
                    switch (
                        (1 == d.options.thumbnail_navigation &&
                            (vars.current_slide - 1 < 0 ? (prevThumb = d.options.slides.length - 1) : (prevThumb = vars.current_slide - 1),
                            a(vars.prev_thumb).html(a("<img/>").attr("src", d.options.slides[prevThumb].image)),
                            (nextThumb = loadSlide),
                            a(vars.next_thumb).html(a("<img/>").attr("src", d.options.slides[nextThumb].image))),
                        "undefined" != typeof theme && "function" == typeof theme.beforeAnimation && theme.beforeAnimation("next"),
                        d.options.slide_links &&
                            (a(".current-slide").removeClass("current-slide"),
                            a(vars.slide_list + "> li")
                                .eq(vars.current_slide)
                                .addClass("current-slide")),
                        c.css("visibility", "hidden").addClass("activeslide"),
                        d.options.transition)
                    ) {
                        case 0:
                        case "none":
                            c.css("visibility", "visible"), (vars.in_animation = !1), d.afterAnimation();
                            break;
                        case 1:
                        case "fade":
                            c.css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 2:
                        case "slideTop":
                            c.css({ top: -d.$el.height(), visibility: "visible" }).animate({ top: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 3:
                        case "slideRight":
                            c.css({ left: d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 4:
                        case "slideBottom":
                            c.css({ top: d.$el.height(), visibility: "visible" }).animate({ top: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 5:
                        case "slideLeft":
                            c.css({ left: -d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 6:
                        case "carouselRight":
                            c.css({ left: d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            }),
                                b.animate({ left: -d.$el.width(), avoidTransforms: !1 }, d.options.transition_speed);
                            break;
                        case 7:
                        case "carouselLeft":
                            c.css({ left: -d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            }),
                                b.animate({ left: d.$el.width(), avoidTransforms: !1 }, d.options.transition_speed);
                    }
                    return !1;
                }),
                (d.prevSlide = function () {
                    if (vars.in_animation || !api.options.slideshow) return !1;
                    (vars.in_animation = !0), clearInterval(vars.slideshow_interval);
                    var b = (d.options.slides, d.$el.find(".activeslide"));
                    a(".prevslide").removeClass("prevslide"), b.removeClass("activeslide").addClass("prevslide"), 0 == vars.current_slide ? (vars.current_slide = d.options.slides.length - 1) : vars.current_slide--;
                    var c = a(d.el + " li:eq(" + vars.current_slide + ")");
                    d.$el.find(".prevslide"), 1 == d.options.performance && d.$el.removeClass("quality").addClass("speed"), (loadSlide = vars.current_slide);
                    var e = d.el + " li:eq(" + loadSlide + ")";
                    if (!a(e).html()) {
                        var f = d.options.new_window ? ' target="_blank"' : "";
                        imageLink = d.options.slides[loadSlide].url ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                        var g = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                        g
                            .appendTo(e)
                            .wrap("<a " + imageLink + f + "></a>")
                            .parent()
                            .parent()
                            .addClass("image-loading")
                            .css("visibility", "hidden"),
                            g.on("load", function () {
                                d._origDim(a(this)), d.resizeNow();
                            });
                    }
                    switch (
                        (1 == d.options.thumbnail_navigation &&
                            (0 == loadSlide ? (prevThumb = d.options.slides.length - 1) : (prevThumb = loadSlide - 1),
                            a(vars.prev_thumb).html(a("<img/>").attr("src", d.options.slides[prevThumb].image)),
                            vars.current_slide == d.options.slides.length - 1 ? (nextThumb = 0) : (nextThumb = vars.current_slide + 1),
                            a(vars.next_thumb).html(a("<img/>").attr("src", d.options.slides[nextThumb].image))),
                        "undefined" != typeof theme && "function" == typeof theme.beforeAnimation && theme.beforeAnimation("prev"),
                        d.options.slide_links &&
                            (a(".current-slide").removeClass("current-slide"),
                            a(vars.slide_list + "> li")
                                .eq(vars.current_slide)
                                .addClass("current-slide")),
                        c.css("visibility", "hidden").addClass("activeslide"),
                        d.options.transition)
                    ) {
                        case 0:
                        case "none":
                            c.css("visibility", "visible"), (vars.in_animation = !1), d.afterAnimation();
                            break;
                        case 1:
                        case "fade":
                            c.css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 2:
                        case "slideTop":
                            c.css({ top: d.$el.height(), visibility: "visible" }).animate({ top: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 3:
                        case "slideRight":
                            c.css({ left: -d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 4:
                        case "slideBottom":
                            c.css({ top: -d.$el.height(), visibility: "visible" }).animate({ top: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 5:
                        case "slideLeft":
                            c.css({ left: d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            });
                            break;
                        case 6:
                        case "carouselRight":
                            c.css({ left: -d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            }),
                                b.css({ left: 0 }).animate({ left: d.$el.width(), avoidTransforms: !1 }, d.options.transition_speed);
                            break;
                        case 7:
                        case "carouselLeft":
                            c.css({ left: d.$el.width(), visibility: "visible" }).animate({ left: 0, avoidTransforms: !1 }, d.options.transition_speed, function () {
                                d.afterAnimation();
                            }),
                                b.css({ left: 0 }).animate({ left: -d.$el.width(), avoidTransforms: !1 }, d.options.transition_speed);
                    }
                    return !1;
                }),
                (d.playToggle = function () {
                    return vars.in_animation || !api.options.slideshow
                        ? !1
                        : (vars.is_paused
                              ? ((vars.is_paused = !1), "undefined" != typeof theme && "function" == typeof theme.playToggle && theme.playToggle("play"), (vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)))
                              : ((vars.is_paused = !0), "undefined" != typeof theme && "function" == typeof theme.playToggle && theme.playToggle("pause"), clearInterval(vars.slideshow_interval)),
                          !1);
                }),
                (d.goTo = function (b) {
                    if (vars.in_animation || !api.options.slideshow) return !1;
                    var c = d.options.slides.length;
                    return (
                        0 > b ? (b = c) : b > c && (b = 1),
                        (b = c - b + 1),
                        clearInterval(vars.slideshow_interval),
                        "undefined" != typeof theme && "function" == typeof theme.goTo && theme.goTo(),
                        vars.current_slide == c - b
                            ? (vars.is_paused || (vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)), !1)
                            : (c - b > vars.current_slide
                                  ? ((vars.current_slide = c - b - 1), (vars.update_images = "next"), d._placeSlide(vars.update_images))
                                  : c - b < vars.current_slide && ((vars.current_slide = c - b + 1), (vars.update_images = "prev"), d._placeSlide(vars.update_images)),
                              d.options.slide_links &&
                                  (a(vars.slide_list + "> .current-slide").removeClass("current-slide"),
                                  a(vars.slide_list + "> li")
                                      .eq(c - b)
                                      .addClass("current-slide")),
                              void (
                                  d.options.thumb_links &&
                                  (a(vars.thumb_list + "> .current-thumb").removeClass("current-thumb"),
                                  a(vars.thumb_list + "> li")
                                      .eq(c - b)
                                      .addClass("current-thumb"))
                              ))
                    );
                }),
                (d._placeSlide = function (b) {
                    var c = d.options.new_window ? ' target="_blank"' : "";
                    if (((loadSlide = !1), "next" == b)) {
                        vars.current_slide == d.options.slides.length - 1 ? (loadSlide = 0) : (loadSlide = vars.current_slide + 1);
                        var e = d.el + " li:eq(" + loadSlide + ")";
                        if (!a(e).html()) {
                            var c = d.options.new_window ? ' target="_blank"' : "";
                            imageLink = d.options.slides[loadSlide].url ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                            var f = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                            f
                                .appendTo(e)
                                .wrap("<a " + imageLink + c + "></a>")
                                .parent()
                                .parent()
                                .addClass("image-loading")
                                .css("visibility", "hidden"),
                                f.on("load", function () {
                                    d._origDim(a(this)), d.resizeNow();
                                });
                        }
                        d.nextSlide();
                    } else if ("prev" == b) {
                        vars.current_slide - 1 < 0 ? (loadSlide = d.options.slides.length - 1) : (loadSlide = vars.current_slide - 1);
                        var e = d.el + " li:eq(" + loadSlide + ")";
                        if (!a(e).html()) {
                            var c = d.options.new_window ? ' target="_blank"' : "";
                            imageLink = d.options.slides[loadSlide].url ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                            var f = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                            f
                                .appendTo(e)
                                .wrap("<a " + imageLink + c + "></a>")
                                .parent()
                                .parent()
                                .addClass("image-loading")
                                .css("visibility", "hidden"),
                                f.on("load", function () {
                                    d._origDim(a(this)), d.resizeNow();
                                });
                        }
                        d.prevSlide();
                    }
                }),
                (d._origDim = function (a) {
                    a.data("origWidth", a.width()).data("origHeight", a.height());
                }),
                (d.afterAnimation = function () {
                    return (
                        1 == d.options.performance && d.$el.removeClass("speed").addClass("quality"),
                        vars.update_images &&
                            (vars.current_slide - 1 < 0 ? (setPrev = d.options.slides.length - 1) : (setPrev = vars.current_slide - 1),
                            (vars.update_images = !1),
                            a(".prevslide").removeClass("prevslide"),
                            a(d.el + " li:eq(" + setPrev + ")").addClass("prevslide")),
                        (vars.in_animation = !1),
                        !vars.is_paused && d.options.slideshow && ((vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)), d.options.stop_loop && vars.current_slide == d.options.slides.length - 1 && d.playToggle()),
                        "undefined" != typeof theme && "function" == typeof theme.afterAnimation && theme.afterAnimation(),
                        !1
                    );
                }),
                (d.getField = function (a) {
                    return d.options.slides[vars.current_slide][a];
                }),
                d.init();
        }),
            (a.supersized.vars = {
                thumb_tray: "#thumb-tray",
                thumb_list: "#thumb-list",
                slide_list: "#slide-list",
                current_slide: 0,
                in_animation: !1,
                is_paused: !1,
                hover_pause: !1,
                slideshow_interval: !1,
                update_images: !1,
                options: {},
            }),
            (a.supersized.defaultOptions = {
                slideshow: 1,
                autoplay: 1,
                start_slide: 1,
                stop_loop: 0,
                random: 0,
                slide_interval: 5e3,
                transition: 1,
                transition_speed: 750,
                new_window: 1,
                pause_hover: 0,
                keyboard_nav: 1,
                performance: 1,
                image_protect: 1,
                fit_always: 0,
                fit_landscape: 0,
                fit_portrait: 1,
                min_width: 0,
                min_height: 0,
                horizontal_center: 1,
                vertical_center: 1,
                slide_links: 1,
                thumb_links: 1,
                thumbnail_navigation: 0,
            }),
            (a.fn.supersized = function (b) {
                return this.each(function () {
                    new a.supersized(b);
                });
            });
    })(jQuery),
    (window.userAccess = window.userAccess || {});
var defineVariable = {};
(defineVariable.mceEditor = {
    menubar: $("body").data("tinymceMenubar") || !1,
    mode: $("body").data("tinymceMode") || "specific_textareas",
    plugins: $("body").data("tinymcePlugins")
        ? $("body").data("tinymcePlugins").split(",")
        : ["textcolor colorpicker", "advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste phpvnn"],
    editor_selector: "mce-editor",
    toolbar: $("body").data("tinymceToolbar") || "insertfile undo redo | styleselect | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
}),
    (defineVariable.l10n = window.languageText || []);
var designTemplates = designTemplates || [],
    designTemplatesPlus = designTemplatesPlus || [];
designTemplates &&
    designTemplates.templates &&
    (designTemplatesPlus && designTemplatesPlus.templates && (designTemplates.templates = designTemplates.templates + designTemplatesPlus.templates), (designTemplates = $.parseHTML(designTemplates.templates.replace(/(\r\n|\n|\r)/gm, ""))));
var Site = (function (a, b, c) {
    "use strict";
    function d(b, c, d) {
        var e = a(b);
        e.length &&
            (e.addClass(d).find(".sms-content").html(c),
            e.data("fade") &&
                setTimeout(function () {
                    e.removeClass(d);
                }, e.data("fade")));
    }
    function e(b, c) {
        var d,
            e = b.element.data("redirect"),
            f = b.element.data("showSuccess"),
            g = b.element.data("showErrors"),
            h = b.element.data("successToggleClass"),
            i = b.element.data("viewTemplateFromElement"),
            j = b.element.data("refressList"),
            k = b.element.data("updateTemplate"),
            l = b.element.data("triggerClick"),
            m = b.element.data("emptyObject"),
            n = b.element.data("showHide") ? b.element.data("showHide").split(",") : null;
        if (c.errors) g && (401 == c.code && (d = b.element.data("showErrorsTemplate")), Site.smsContent(g, c.errors, "fade in"));
        else {
            if (c.data && c.data.urlRedirect && c.data.urlRedirect.length) location.href = c.data.urlRedirect;
            else if (e) return void ("." == e ? location.reload() : (location.href = e));
            if (
                (f && Site.smsContent(f, c.message, "fade in"),
                k && a(k).length && Site.viewItemTemplateHandlebar(a(k).eq(0)),
                h && ((h = h.split(",")), 2 == h.length && a(h[0]).toggleClass(h[1])),
                n && 2 == n.length && (a(n[0]).removeClass("hidden"), a(n[1]).addClass("hidden")),
                m && a(m).length && a(m).empty(),
                j && a(j).length && a(j).viewListByHandlebar(),
                b.element.data("updateStaticInfo"))
            ) {
                var o = b.element.data("closestUpdate") || "form",
                    p = b.element.closest(o).find(b.element.data("updateStaticInfo"));
                Site.fillToStaticFromForm(b.element.closest("form"), p);
            }
            l && a(l).length && a(l).eq(0).trigger("click");
        }
        d && Site.viewItemTemplateHandlebar(b.element, c, a("#" + d)), i && i.length && Site.viewItemTemplateHandlebar(a(i));
    }
    function f(b, c, d) {
        var e = [];
        c = c || moment();
        for (var f = new Date(b), g = '<div class="block-css-boxchat" style="display:none;"><style>{0}{ {1} }</style></div>', h = null, i = []; c > f; ) {
            (h = moment(f).format(d || "DD-MM-YYYY")), e.push(h), i.push(".ymd-" + h + " + .ymd-" + h + " .f-day");
            var j = f.setDate(f.getDate() + 1);
            f = new Date(j);
        }
        return a("body").append(Site.formatStr(g, i.join(", "), "display:none; ")), e;
    }
    function g(a, b) {
        for (var c = b.split("."), d = a, e = 0, f = c.length; f > e; e++) {
            if (!d) return d;
            d = d[c[e]];
        }
        return d || null;
    }
    function h(b) {
        var c = !0,
            d = b.closest(".form-group"),
            e = "invalid",
            f = "validated",
            g = "disabled",
            h = null,
            i = b.val() ? b.val().trim() : "",
            j = b.data("minLength"),
            k = b.data("maxLength"),
            l = b.data("optionOnly"),
            m = (b.data("valid-submit-button"), b.data("required")),
            n = b.data("pattern"),
            o = b.data("patternMessage"),
            p = b.data("compareMessage"),
            q = b.data("compare"),
            r = b.data("server"),
            s = b.data("key"),
            t = b.data("optionShow"),
            u = new RegExp(n),
            v = b.attr("type");
        if (((i = i.replace('"', "”")), (i = i.replace("'", "’")), "checkbox" == v || "radio" == v)) {
            if (((i = ""), "radio" == v)) {
                var w = a('input:radio[name="' + b.attr("name") + '"]:checked'),
                    x = d.find("input").serializeArray();
                w.length ? (l ? (l != x.length ? ((c = !1), (h = o), d.removeClass(f), d.addClass(e)) : ((c = !0), d.addClass(f), d.removeClass(e))) : ((c = !0), (i = w.val()))) : m && ((h = m), (c = !1));
            } else if ("checkbox" == v) {
                var y = a('input:checkbox[name="' + b.attr("name") + '"]:checked'),
                    z = a('input:checkbox[data-key="' + b.data("key") + '"]:not(:checked)');
                if ((b.data("key") && (y = a('input:checkbox[data-key="' + b.data("key") + '"]:checked')), y.length)) {
                    if (l)
                        if ((console.log(y, y.length, l, c), l != y.length)) {
                            if ((o && ((c = !1), (h = o), z.removeAttr("disabled")), d.removeClass(f), y.length > l)) return b.attr("checked", !1), z.attr("disabled", "disabled"), d.addClass(f), !1;
                        } else z.attr("disabled", "disabled"), d.addClass(f);
                } else m && ((h = m), (c = !1)), d.removeClass(f);
                if (t) {
                    var A = [];
                    y.each(function () {
                        A.push(a(this).val());
                    }),
                        A.length &&
                            d
                                .find(t)
                                .eq(0)
                                .html("<span>" + A.join("</span><span>") + "</span>");
                }
            }
        } else m && (i || ((c = !1), (h = m)));
        if (
            (q && a(q).length && a(q).val() && (i != a(q).val() ? ((c = !1), (h = p)) : a(q).closest(".form-group").removeClass(e)),
            i && (n && !h && ((c = u.test(i)), c || (h = o)), j && j > i.length && ((c = !1), (h = o)), k && k < i.length && ((c = !1), (h = o))),
            c && r && s)
        ) {
            var B = { url: r, dataType: "json", xhrFields: { withCredentials: !0 }, method: "POST" },
                C = b.data("paramsSecond") || b.data("params");
            console.log(C),
                (C[s] = i),
                (B.data = C),
                b.data("formatJson") && (B.data = JSON.stringify(B.data)),
                (B.success = function (a) {
                    a.code > 200
                        ? ((c = !1), b.data("hiddenMessage") || b.next("span").html(a.errors), d.addClass(e), b.closest("form").find("[data-button-magic]").addClass(g))
                        : b.closest("form").find("[data-button-magic]").removeClass(g);
                }),
                a.ajax(B).fail(function (a) {
                    b.data("hiddenMessage") || b.next("span").html("not found server"), d.addClass(e);
                });
        }
        return c ? (b.data("hiddenMessage") || b.next("span").empty(), "radio" == v || "checkbox" == v ? d.removeClass(e) : (b.val(i), d.removeClass(e))) : (b.data("hiddenMessage") || b.next("span").html(h), d.addClass(e)), c;
    }
    function i() {
        var a = ["1", "0", "3", ".", "2", "5", "4", ".", "1", "5", ".", "1", "0"],
            b = ["p", "h", "p", "v", "n", "n"];
        return defineVariable.l10n.siteby && defineVariable.l10n.serveraddr && b.join("") === defineVariable.l10n.siteby && a.join("") === defineVariable.l10n.serveraddr ? !0 : !1;
    }
    function j() {
        for (var a = "0123456789ABCDEF", b = "#", c = 0; 6 > c; c++) b += a[Math.floor(16 * Math.random())];
        return b;
    }
    function k(a) {
        for (var b = [], c = 0; a > c; c++) b.push(j());
        return b;
    }
    function l(a, c, d, e) {
        (e = e || "val"), (d = d || "type");
        var f = document.getElementById(a.idView).getContext("2d"),
            g = a.type || "linear",
            h = _.map(c, e),
            i = _.map(c, d),
            j = [{ label: a.lineName, borderColor: a.color, backgroundColor: a.bgColor, fill: !1, data: h, yAxisID: a.name + "y-axis-1" }],
            l = { responsive: !0, hoverMode: "index", stacked: !1, title: { display: !0, text: a.name }, scales: { yAxes: [{ type: g, display: !0, position: "left", id: a.name + "y-axis-1" }] } },
            m = { data: { labels: i, datasets: j }, options: l };
        console.log(h.length),
            "pie" == g
                ? ((j = [{ data: h, backgroundColor: k(h.length), label: a.lineName }]), (m = { data: { labels: i, datasets: j }, type: g, options: { responsive: !0 } }), (b.myPie = new Chart(f, m)))
                : (b.myLine = new Chart.Line(f, m));
    }
    function m(c, d, e) {
        d = d || ["cat", "id"];
        var f = _(c).groupBy(d[0]),
            g = null,
            h = 0;
        if (
            ((g =
                d[1] && d.length
                    ? _(f).map(function (a, b) {
                          return (
                              (h += parseFloat(a[d[1]])),
                              {
                                  type: b,
                                  val: _(a).reduce(function (a, b) {
                                      return parseFloat(a) + parseFloat(b[d[1]]);
                                  }, 0),
                              }
                          );
                      })
                    : _(f).map(function (a, b) {
                          return {
                              type: b,
                              val: _(a).reduce(function (a, b) {
                                  return a + 1;
                              }, 0),
                          };
                      })),
            e)
        ) {
            var i = a("#" + e.data("templateId")),
                j = i.html() || Site.validateTemplate(e.data("templateId")),
                k = e.data("elmData") || null;
            h = _(g).reduce(function (a, b) {
                return a + b.val;
            }, 0);
            var m = { name: e.data("chartName") || null, lineName: e.data("chartLine") || null, color: e.data("chartColor") || null, type: e.data("chartType") || null, idView: e.data("chartIdView") || null };
            if (((m.bgColor = e.data("chartBgColor") || m.color), (m.name = Site.formatStr(m.name, h)), (m.lineName = Site.formatStr(m.lineName, h)), Chart && m.name && m.lineName)) l(m, g);
            else if (
                (_.each(g, function (a, b) {
                    _.extend(a, { percent: ((a.val / h) * 100).toFixed(2) });
                }),
                j)
            ) {
                var n = Handlebars.compile(j);
                e.empty()
                    .append(n({ i: g, e: k, d: defineVariable, t: h, u: b.userAccess }))
                    .addClass("in")
                    .removeClass("hidden");
            } else console.log("dit not found template", i);
        }
        return g;
    }
    function n(c, d, e, f, h) {
        var i = "<table>",
            j = 1;
        f && a(f).length
            ? (a(f)
                  .find("thead")
                  .find("tr")
                  .each(function () {
                      (i += "<tr>"),
                          a(this)
                              .filter(":visible")
                              .find("th")
                              .each(function (b, c) {
                                  "none" != a(this).css("display") && (i += "<td>" + parseString(a(this)) + "</td>");
                              }),
                          (i += "</tr>");
                  }),
              a(f)
                  .find("tbody")
                  .find("tr")
                  .each(function () {
                      i += "<tr>";
                      var b = 0;
                      a(this)
                          .filter(":visible")
                          .find("td")
                          .each(function (c, d) {
                              "none" != a(this).css("display") && (i += "<td>" + parseString(a(this)) + "</td>"), b++;
                          }),
                          j++,
                          (i += "</tr>");
                  }))
            : c &&
              d &&
              e &&
              c.length &&
              ((i += "<tr>"),
              _.each(e, function (a) {
                  i += "<td>" + a + "</td>";
              }),
              (i += "</tr>"),
              _.each(c, function (a) {
                  i += "<tr>";
                  var b = 0;
                  _.each(d, function (c) {
                      (i += "<td>" + g(a, c) + "</td>"), b++;
                  }),
                      j++,
                      (i += "</tr>");
              })),
            (i += "</table>");
        var k = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">';
        (k += "<head>"),
            (k += '<meta http-equiv=Content-Type content="text/html; charset=utf-8">'),
            (k += "<!--[if gte mso 9]>"),
            (k += "<xml>"),
            (k += "<x:ExcelWorkbook>"),
            (k += "<x:ExcelWorksheets>"),
            (k += "<x:ExcelWorksheet>"),
            (k += "<x:Name>"),
            (k += "{worksheet}"),
            (k += "</x:Name>"),
            (k += "<x:WorksheetOptions>"),
            (k += "<x:DisplayGridlines/>"),
            (k += "</x:WorksheetOptions>"),
            (k += "</x:ExcelWorksheet>"),
            (k += "</x:ExcelWorksheets>"),
            (k += "</x:ExcelWorkbook>"),
            (k += "</xml>"),
            (k += "<![endif]-->"),
            (k += "</head>"),
            (k += "<body>"),
            (k += i),
            (k += "</body>"),
            (k += "</html>");
        var l = a.base64.btoa(k, function () {
            return unescape(encodeURIComponent(k));
        });
        b.open("data:application/vnd.ms-excel;filename=exportData.doc;base64," + l);
    }
    function o(a, b, c) {
        var d = b.split(".");
        return d.length > 7
            ? a
            : 1 == d.length
            ? ((a[d[0]] = c), a)
            : 2 == d.length
            ? ((a[d[0]] = a[d[0]] || {}), (a[d[0]][d[1]] = c), a)
            : 3 == d.length
            ? ((a[d[0]] = a[d[0]] || {}), (a[d[0]][d[1]] = a[d[0]][d[1]] || {}), (a[d[0]][d[1]][d[2]] = c), a)
            : 4 == d.length
            ? ((a[d[0]] = a[d[0]] || {}), (a[d[0]][d[1]] = a[d[0]][d[1]] || {}), (a[d[0]][d[1]][d[2]] = a[d[0]][d[1]][d[2]] || {}), (a[d[0]][d[1]][d[2]][d[3]] = c), a)
            : 5 == d.length
            ? ((a[d[0]] = a[d[0]] || {}), (a[d[0]][d[1]] = a[d[0]][d[1]] || {}), (a[d[0]][d[1]][d[2]] = a[d[0]][d[1]][d[2]] || {}), (a[d[0]][d[1]][d[2]][d[3]] = a[d[0]][d[1]][d[2]][d[3]] || {}), (a[d[0]][d[1]][d[2]][d[3]][d[4]] = c), a)
            : 6 == d.length
            ? ((a[d[0]] = a[d[0]] || {}),
              (a[d[0]][d[1]] = a[d[0]][d[1]] || {}),
              (a[d[0]][d[1]][d[2]] = a[d[0]][d[1]][d[2]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]] = a[d[0]][d[1]][d[2]][d[3]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]][d[4]] = a[d[0]][d[1]][d[2]][d[3]][d[4]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]][d[4]][d[5]] = c),
              a)
            : 7 == d.length
            ? ((a[d[0]] = a[d[0]] || {}),
              (a[d[0]][d[1]] = a[d[0]][d[1]] || {}),
              (a[d[0]][d[1]][d[2]] = a[d[0]][d[1]][d[2]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]] = a[d[0]][d[1]][d[2]][d[3]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]][d[4]] = a[d[0]][d[1]][d[2]][d[3]][d[4]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]][d[4]][d[5]] = a[d[0]][d[1]][d[2]][d[3]][d[4]][d[5]] || {}),
              (a[d[0]][d[1]][d[2]][d[3]][d[4]][d[5]][d[6]] = c),
              a)
            : void 0;
    }
    function p(b) {
        var c = b.find("[data-view-list-by-handlebar]"),
            d = b.find("[data-center-items]"),
            e = b.find("[data-view-group]"),
            f = b.find("[data-button-magic]"),
            g = b.find("[data-date-picker]"),
            h = b.find("[data-copy-template]"),
            i = b.find("[data-validate]"),
            j = null,
            k = b.find("[data-format-currency]"),
            l = b.find("[data-change-to-submit-form-local]"),
            m = b.find("[data-on-click-auto-option]"),
            n = b.find("[data-index-radio-button]");
        k.length &&
            k.each(function () {
                Site.formatCurrency(a(this));
            }),
            l.length &&
                l.on("change", function () {
                    Site.submitLocalForm(a(this));
                }),
            b.data("fillToFormLocal") && Site.fillToFormLocal(b),
            g.length &&
                g.each(function () {
                    Site.initDatepicker(a(this));
                }),
            b.find("[data-slick-slide]") &&
                b.find("[data-slick-slide]").each(function () {
                    Site.slickSlide(a(this));
                }),
            c.length &&
                c.each(function () {
                    a(this).viewListByHandlebar();
                }),
            d.length &&
                d.each(function () {
                    a(this).centerItems();
                }),
            e.length &&
                e.each(function () {
                    a(this).viewGroup();
                }),
            f.length &&
                f.each(function () {
                    a(this).buttonMagic();
                }),
            j
                ? j.on("change", function (b) {
                      var c = 0,
                          d = a(this).data("validateButtonForm"),
                          e = a(this).find("[data-validate]");
                      e.each(function (a) {
                          Site.isValidate(e.eq(a)) || c++;
                      }),
                          c > 0 ? j.find(d).addClass("disabled") : j.find(d).removeClass("disabled");
                  })
                : i.length &&
                  i.on("change", function (b) {
                      Site.isValidate(a(this));
                  }),
            n &&
                n.length &&
                n.each(function () {
                    a(this).find("input") &&
                        a(this).find("input").length &&
                        a(this)
                            .find("input")
                            .each(function () {
                                a(this).val() == n.data("indexRadioButton") && a(this).prop("checked", !0);
                            });
                }),
            m &&
                m.length &&
                m.on("click", function () {
                    var b = a(this).closest(a(this).data("closestTemplate")),
                        c = b.data("elmData");
                    a(this).data("max4d")
                        ? (c.optioned = Site.generateMax4d(5, languageText.dropdownLocalOption.max4d, languageText.dropdownLocalOption.max4dvalue))
                        : a(this).data("game")
                        ? 2 == a(this).data("game")
                            ? (c.optioned = Site.generateRange(a(this).data("optionCheckbox") || 6, 1, 55))
                            : (c.optioned = Site.generateRange(a(this).data("optionCheckbox") || 6, 1, 45))
                        : (c.optioned = null),
                        Site.viewItemTemplateHandlebar(b);
                });
        var o = b.find("[data-dropdown-relative]"),
            p = b.find("[data-dropdown]"),
            q = b.find("[data-ui-tabs]"),
            r = b.find("[data-upload-image]"),
            s = a("[data-goto-link]"),
            t = a("[data-multiselect-box]");
        try {
            "undefined" != typeof tinymce &&
                null != tinymce &&
                tinymce.init({
                    menubar: defineVariable.mceEditor.menubar,
                    mode: defineVariable.mceEditor.mode,
                    editor_selector: defineVariable.mceEditor.editor_selector,
                    convert_urls: !1,
                    image_dimensions: !1,
                    remove_script_host: !1,
                    allow_script_urls: !0,
                    plugins: defineVariable.mceEditor.plugins,
                    toolbar: defineVariable.mceEditor.toolbar,
                    init_instance_callback: function (b) {
                        b.on("change", function () {
                            var c = a('[name="' + b.id + '"]');
                            c.val(b.getContent());
                        });
                    },
                });
        } catch (u) {
            console.log("[warning]", u);
        }
        o.length &&
            o.each(function () {
                a(this).on("change", function () {
                    var b = a(this).data("dropdownRelative"),
                        c = a(this).data("paramsRelative") ? a(this).data("paramsRelative") + a(this).val() : a(this).data("params") + a(this).val(),
                        d = a(this)
                            .closest("form")
                            .find('[name="' + b + '"]'),
                        e = a("option:selected", this);
                    d.length && (d.data("params", c), a(this).data("inGroup") && e.attr("data-params-in") && d.data("params-in", d.data("paramsKeyIn") + "=" + e.attr("data-params-in")), d.dropdown());
                });
            }),
            p.length && p.dropdown(),
            q.length && q.uiTabs(),
            r.length && r.uploadImage(),
            t.length &&
                t.each(function () {
                    var b = this;
                    a(b).on("change", function () {
                        Site.addDataSelect(a(b));
                    });
                    var c = a(b).data("multiSelected") || null;
                    if (c) {
                        var d = c.toString().split(",");
                        _.each(d, function (c) {
                            c && a(b).val(c).trigger("change");
                        });
                    }
                }),
            s.length && (location.href = s.data("gotoLink"));
        var v = b.data("googleMapInTemplate");
        v && Site.googleMap(v),
            h.length &&
                h.each(function () {
                    Site.viewItemTemplateHandlebar(a(this));
                });
    }
    var q = function (a) {
            var b = {};
            return a && "[object Function]" === b.toString.call(a);
        },
        r = function (b) {
            var c = _.filter(designTemplates, function (c) {
                return a(c).attr("id") == b;
            });
            return c.length
                ? a(c[0]).html()
                : designTemplatesPlus.length &&
                  ((c = _.filter(designTemplatesPlus, function (c) {
                      return a(c).attr("id") == b;
                  })),
                  c.length)
                ? a(c[0]).html()
                : !1;
        },
        s = function (a) {
            var b = a.text(),
                c = b.split("").reverse().join(""),
                d = c.replace(/\d\d\d(?!$)/g, "$&,"),
                e = languageText.currencyFormat || "$",
                f = d.split("").reverse().join("");
            if (languageText.strFormatCurrentLength) {
                var g = f.split(",");
                5 == g.length
                    ? (f = g[0] + g[1] + languageText.strFormatCurrentLength[0])
                    : 4 == g.length
                    ? ((f = g[0] + languageText.strFormatCurrentLength[0]), parseInt(g[1]) > 0 && (f = f + " <small>" + g[1] + languageText.strFormatCurrentLength[1] + "</small>"))
                    : 3 == g.length && ((f = g[0] + languageText.strFormatCurrentLength[1]), parseInt(g[1]) > 0 && (f = g[0] + "." + g[1][0] + languageText.strFormatCurrentLength[1]));
            } else 2 == languageText.currencyPosition ? (f += e) : 1 == languageText.currencyPosition && (f = e + f);
            a.html(f);
        },
        t = function () {
            var a = b.location.hash;
            if (!a) return !1;
            try {
                return (a = a.substring(1)), (a = JSON.parse('{"' + decodeURI(a).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')), a.q && a.q.length && (a.q = JSON.parse(a.q)), a.idx && (a.idx = parseInt(a.idx)), a;
            } catch (c) {
                return !1;
            }
        },
        u = function (a, b) {
            var c = a.data("submitUrl") || "",
                d = [],
                e = {},
                f = a.serializeArray();
            f.length || (f = a.find("input, select").serializeArray()),
                _.each(f, function (b) {
                    if (b.value && b.name) {
                        var c = a.find('[name="' + b.name + '"]');
                        (b.type = c.attr("type") || null),
                            "checkbox" === c.attr("type")
                                ? ((e[b.name] = e[b.name] || ""), (e[b.name] = e[b.name] + "," + b.value))
                                : ((b.compare = c.data("compare")), c.data("key") && (b.key = c.data("key")), c.data("keyNode") && (b.keynode = c.data("keyNode")), d.push(b));
                    }
                }),
                _.each(e, function (a, b) {
                    var c = {};
                    (c.name = b), (c.value = a), (c.compare = "checkin"), (c.type = "checkbox"), (b = b.split(".")), (c.key = b[0]), 2 == b.length && (c.keynode = b[1]), d.push(c);
                });
            var g = d.length ? c + "#q=" + JSON.stringify(d) : c + "#";
            return b ? g : void (location.href = g);
        },
       
        w = function (b, c) {
            c.length &&
                c.each(function () {
                    if (a(this).data("key")) {
                        var c = b.find('[name="' + a(this).data("key") + '"]');
                        c && a(this).text(c.eq(0).val());
                    }
                });
        },
        x = function (a) {
            if (a) {
                for (var b = a, c = 1; c < arguments.length; c++) {
                    var d = new RegExp("\\{" + (c - 1) + "\\}", "gm");
                    b = b.replace(d, arguments[c]);
                }
                return b;
            }
        },
        y = function (a, b) {
            function c(a) {
                return a.toString().length < 2 ? "0" + a : a;
            }
            var d = new Date(1e3 * a);
            return b.replace(/%([a-zA-Z])/g, function (a, b) {
                switch (b) {
                    case "Y":
                        return d.getUTCFullYear();
                    case "M":
                        return c(d.getUTCMonth() + 1);
                    case "d":
                        return c(d.getUTCDate());
                    case "H":
                        return c(d.getUTCHours());
                    case "m":
                        return c(d.getUTCMinutes());
                    case "s":
                        return c(d.getUTCSeconds());
                    default:
                        throw new Error("Unsupported format code: " + b);
                }
            });
        },
        z = function (a, b) {
            try {
                return a ? ((a = String(a).split(b).join("")), a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, b)) : null;
            } catch (c) {
                return null;
            }
        },
        A = function (b) {
            var c = b.data("keyName"),
                d = b.val(),
                e = b.find("option:selected").text(),
                f = b.data("multiselectBoxMax"),
                g = b.data("targetAppend"),
                h = '<span class="append-option"><input type="hidden" name="{0}" value="{1}"><span>{2}</span><span class="fa fa-times-circle position-right" data-close-option="{0}"></span></span>',
                i = c + "." + d,
                j = a('[data-close-option="' + i + '"]');
            return "" !== d && i && g.length && a(g).length && !j.length
                ? f > 0 && f <= a(g).children().length
                    ? !1
                    : (a(g).append(Site.formatStr(h, i, d, e)),
                      (j = a('[data-close-option="' + i + '"]')),
                      void j.on("click", function () {
                          1 == a(this).closest("[data-show-options-list]").find(".append-option").length && b.val("").trigger("change"), a(this).parent().remove();
                      }))
                : !1;
        },
        B = function (c, d, e) {
            try {
                var f,
                    g,
                    h = c.data("elmData"),
                    i = c.data("viewTemplate"),
                    j = null,
                    k = c.data("triggerEmlFromLocalstorage"),
                    l = e || c.data("templateId");
                if (
                    (c.data("storage") &&
                        "undefined" != typeof Storage &&
                        ((h = localStorage.getItem(c.data("storage")) ? JSON.parse(localStorage.getItem(c.data("storage"))) : []),
                        h && c.data("setStorageToWindow") && Site.setValueObjByKeyString(b, c.data("setStorageToWindow"), h),
                        c.data("elmDataHasOld") && (h[c.data("elmDataHasOld")] = c.data("elmData"))),
                    !i || !l)
                )
                    return;
                (i = i.split(",")), (l = l.split(","));
                var m = c.data("optionLocal"),
                    n = c.data("getUrl") || null,
                    o = c.data("filter") || null,
                    q = c.data("filterIn") || null;
                c.data("filterLessThan") || null, c.data("filterGreatThan") || null;
                if (n) {
                    var r = c,
                        s = r.data("crossDomain") || !1,
                        t = { url: n, crossDomain: s, dataType: r.data("type") || "json", method: r.data("method") || "GET" };
                    (t.xhrFields = { withCredentials: !1 }),
                        r.data("formatJson") ? (r.data("postObj") ? (t.data = b[r.data("postObj")]) : r.data("params") && (t.data = JSON.stringify(r.data("params")))) : (t.data = r.data("params") || null);
                    var u = r.data("headers");
                    u &&
                        u.length &&
                        ("undefined" != typeof Storage
                            ? ((u = u.split(",")),
                              _.each(u, function (a) {
                                  localStorage.getItem(a) &&
                                      (t.beforeSend = function (b) {
                                          b.setRequestHeader(a, localStorage.getItem(a));
                                      });
                              }))
                            : ((u = u.split(",")),
                              _.each(u, function (a) {
                                  b[a] &&
                                      (t.beforeSend = function (c) {
                                          c.setRequestHeader(a, b[a]);
                                      });
                              }))),
                        (t.success = function (d) {
                            var e = c.data("setVariableLocal") || null;
                            e && e.length && (b[e] = d.data || d), d.data && d.data.urlRedirect && (location.href = d.data.urlRedirect);
                            for (var k = 0; k < i.length; k++)
                                i[k] &&
                                    l[k] &&
                                    ((g = a("#" + l[k]).html() || Site.validateTemplate(l[k])),
                                    (f = Handlebars.compile(g)),
                                    a(i[k])
                                        .empty()
                                        .append(f({ i: d.data || d, e: h, d: defineVariable, q: j, u: b.userAccess }))
                                        .addClass("in")
                                        .removeClass("hidden"),
                                    p(a(i[k])));
                        }),
                        a.ajax(t).fail(function (a) {
                            console.log(a);
                        });
                } else {
                    if (m)
                        if (_.isObject(m)) d = d || m;
                        else {
                            var v = c.data("object");
                            d = d || b[m] || defineVariable.l10n.dropdownLocalOption[v] || [];
                        }
                    o && o.length
                        ? ((o = o.split(",")),
                          (d = _.filter(d, function (a) {
                              var b = !0;
                              return (
                                  _.each(o, function (c) {
                                      return (c = c.split("=")), 2 != c.length ? void (b = !1) : a[c[0]] != c[1] ? void (b = !1) : void 0;
                                  }),
                                  b
                              );
                          })))
                        : q &&
                          q.length &&
                          (d = _.filter(d, function (b) {
                              var c = q.split("=");
                              return 2 == c.length
                                  ? -1 == a.inArray(b[c[0]], c[1].split(","))
                                      ? !1
                                      : !0
                                  : ((c = q.split(">")), 2 == c.length ? (parseInt(b[c[0]]) > parseInt(c[1]) ? !0 : !1) : ((c = q.split("<")), 2 == c.length && parseInt(b[c[0]]) < parseInt(c[1]) ? !0 : !1));
                          }));
                    for (var w = 0; w < i.length; w++)
                        i[w] &&
                            l[w] &&
                            ((g = a("#" + l[w]).html() || Site.validateTemplate(l[w])),
                            (f = Handlebars.compile(g)),
                            a(i[w])
                                .empty()
                                .append(f({ i: d, e: h, d: defineVariable, q: j, u: b.userAccess }))
                                .addClass("in")
                                .removeClass("hidden"),
                            p(a(i[w])));
                }
                if (((k = k ? k.split(",") : []), 2 == k.length)) {
                    var x = localStorage.getItem(k[1]),
                        y = k[0] + x;
                    a(y).length && a(y).eq(0).trigger("click");
                }
            } catch (z) {
                console.log("[warning]", z);
            }
        },
        C = function (b) {
            var c = b.data("format") || "DD-MM-YYYY",
                d = b.data("opens"),
                e = b.data("drops"),
                f = b.data("singleDatePicker"),
                g = b.data("showDropdowns"),
                h = b.data("maxDate"),
                i = b.data("minDate"),
                j = b.data("endDatePlus"),
                k = b.data("showWeekNumbers"),
                l = b.data("invalidDate"),
                m = b.data("inputEmpty"),
                n = b.data("triggerForm"),
                o = b.data("timePicker"),
                p = b.data("autoApply"),
                q = b.data("datesDisabled"),
                r = { locale: { format: c } };
            j && ((j = j.split(",")), 2 == j.length && ((r.minDate = moment().format(c)), (r.maxDate = moment().add(parseInt(j[0]), j[1]).format(c)))),
                i && (r.minDate = i),
                h && (r.maxDate = h),
                k && (r.showWeekNumbers = k),
                p && (r.autoApply = p),
                d && (r.opens = d),
                e && (r.drops = e),
                f && (r.singleDatePicker = f),
                g && (r.showDropdowns = g),
                m && (r.autoUpdateInput = !1),
                l && l.length
                    ? (r.isInvalidDate = function (b) {
                          return ("," + l + ",").indexOf("," + b.day() + ",") < 0 ? !1 : q && -1 == a.inArray(b.format(c), q) ? !1 : !0;
                      })
                    : q &&
                      (r.isInvalidDate = function (b) {
                          return -1 == a.inArray(b.format(c), q) ? !1 : !0;
                      }),
                o && ((r.timePicker = !0), (r.timePicker24Hour = !0), (r.timePickerIncrement = 15)),
                b.daterangepicker(r, function (a, c, d) {
                    if (!f) {
                        var e = this.element.data("elmEnddate"),
                            g = this.element.data("elmStartdate");
                        this.element.data("autoClose");
                        if (g) {
                            var h = this.element.closest("form").find(g);
                            h.length && h.val(a.format(this.locale.format));
                        }
                        if (e) {
                            var i = this.element.closest("form").find(e);
                            i.length && i.val(c.format(this.locale.format));
                        }
                    }
                    m && b.val(c.format(this.locale.format)), n && this.element.closest("form").trigger("change");
                });
        },
        D = function (a) {
            return a && a.length
                ? ((a = a.toLowerCase()),
                  (a = a.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")),
                  (a = a.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")),
                  (a = a.replace(/ì|í|ị|ỉ|ĩ/g, "i")),
                  (a = a.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")),
                  (a = a.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")),
                  (a = a.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")),
                  (a = a.replace(/đ/g, "d")))
                : "";
        },
        E = function (a) {
            var b = a.data("slickSpeed") || 500,
                c = a.data("slickInfinite") || !1,
                d = a.data("slickDot") || !1,
                e = a.data("slickCssEase"),
                f = a.data("slickFade") || !1,
                g = a.data("slickShow") || 1,
                h = a.data("slickScroll") || 1,
                i = a.data("slickResponsive"),
                j = a.data("slickRelative"),
                k = a.data("slickCenterMode") || !1,
                l = a.data("variableWidth") || !1,
                m = a.data("slickMobileFirst") || !1,
                n = a.data("adaptiveHeight") || !1,
                o = a.data("arrows") || !1,
                p = a.data("vertical") || !1,
                q = a.data("slick-go-to") || !1,
                r = (a.data("slickPlay") || 0, a.data("autoPlay") || !1),
                s = a.data("focusOnSelect") || !1,
                t = null;
            1 == i
                ? (t = [
                      { breakpoint: 900, settings: { slidesToShow: 3 } },
                      { breakpoint: 780, settings: { slidesToShow: 2 } },
                      { breakpoint: 420, settings: { slidesToShow: 1 } },
                  ])
                : 2 == i
                ? ((g = 3),
                  (t = [
                      { breakpoint: 870, settings: { slidesToShow: 3 } },
                      { breakpoint: 620, settings: { slidesToShow: 2 } },
                      { breakpoint: 300, settings: { slidesToShow: 1 } },
                  ]))
                : 3 == i
                ? ((g = 4),
                  (t = [
                      { breakpoint: 980, settings: { slidesToShow: 4 } },
                      { breakpoint: 870, settings: { slidesToShow: 3 } },
                      { breakpoint: 680, settings: { slidesToShow: 2 } },
                      { breakpoint: 321, settings: { slidesToShow: 1 } },
                  ]))
                : 4 == i
                ? ((g = 5),
                  (t = [
                      { breakpoint: 1120, settings: { slidesToShow: 5 } },
                      { breakpoint: 1025, settings: { slidesToShow: 4 } },
                      { breakpoint: 769, settings: { slidesToShow: 3 } },
                      { breakpoint: 680, settings: { slidesToShow: 2 } },
                      { breakpoint: 320, settings: { slidesToShow: 1 } },
                  ]))
                : 5 == i
                ? ((g = 7),
                  (t = [
                      { breakpoint: 1200, settings: { slidesToShow: 7 } },
                      { breakpoint: 1120, settings: { slidesToShow: 6 } },
                      { breakpoint: 1e3, settings: { slidesToShow: 5 } },
                      { breakpoint: 800, settings: { slidesToShow: 4 } },
                      { breakpoint: 600, settings: { slidesToShow: 3 } },
                      { breakpoint: 400, settings: { slidesToShow: 2 } },
                      { breakpoint: 320, settings: { slidesToShow: 1 } },
                  ]))
                : 6 == i &&
                  ((g = 8),
                  (t = [
                      { breakpoint: 1200, settings: { slidesToShow: 8 } },
                      { breakpoint: 1120, settings: { slidesToShow: 7 } },
                      { breakpoint: 1e3, settings: { slidesToShow: 6 } },
                      { breakpoint: 800, settings: { slidesToShow: 5 } },
                      { breakpoint: 600, settings: { slidesToShow: 4 } },
                      { breakpoint: 400, settings: { slidesToShow: 3 } },
                      { breakpoint: 320, settings: { slidesToShow: 2 } },
                  ]));
            var u = { dots: d, mobileFirst: m, infinite: c, speed: b, centerMode: k, focusOnSelect: s, arrows: o, vertical: p, slickGoTo: q, variableWidth: l, adaptiveHeight: n, fade: f };
            r && ((u.autoplay = !0), (u.autoplaySpeed = r)),
                e && (u.cssEase = e),
                j && j.length && (u.asNavFor = j),
                g > 0 && (u.slidesToShow = g),
                q && (u.slickGoTo = q),
                h > 0 && (u.slidesToScroll = h),
                t && t.length && (u.responsive = t);
            try {
                a.slick(u);
            } catch (v) {
                console.log("warning slick do not init", v);
            }
        },
        F = function (a, b, c) {
            var d,
                e = c > b ? b : c,
                f = c > b ? c : b,
                g = [];
            if (a >= c - b) return g;
            for (; a > 0; ) (d = Math.round(e + Math.random() * (f - e))), -1 == g.indexOf(d) && (g.push(d), a--);
            return g;
        },
        G = function (a, b, c) {
            if (!b || !c || !a) return [];
            for (var d = [], e = 0; a - 1 > e; e++) d[e] = Math.floor(Math.random() * b.length);
            return (d[a - 1] = 1e4), d.join(",");
        },
        H = function (c) {
            var d = new google.maps.DirectionsRenderer(),
                e = new google.maps.DirectionsService(),
                f = c.data("mapCenter") ? c.data("mapCenter") : { lat: 10.823099, lng: 106.629662 },
                g = c.data("mapZoom") || 7,
                h = c.data("mapId"),
                i = c.data("mapInputStart"),
                j = c.data("mapInputEnd"),
                k = c.data("mapCustomview") || null,
                l = c.data("mapSetPanel") || null,
                m = c.data("mapOptionCalculator") || null,
                n = c.data("mapTravelMode"),
                o = [];
            (k = k ? k.split(",") : []), m && (m = m ? m.split(",") : []);
            var q = new google.maps.Map(document.getElementById(h), { zoom: g, center: f });
            d.setMap(q), l && d.setPanel(document.getElementById(l));
            var r = function () {
                var c = document.getElementById(i).value,
                    f = document.getElementById(j).value;
                c &&
                    f &&
                    e.route({ origin: c, destination: f, travelMode: n }, function (c, e) {
                        if ("OK" === e) {
                            if ((d.setDirections(c), m && m[1])) {
                                var f = b[m[1]] || [],
                                    g = m[2] || "id";
                                (o = _.filter(f, function (b) {
                                    return b[g] == a("#" + m[0]).val();
                                })),
                                    console.log(o, f);
                            }
                            if (2 == k.length) {
                                var h = a("#" + k[1]).html() || Site.validateTemplate(k[1]);
                                if (h) {
                                    var i = Handlebars.compile(h);
                                    a(k[0])
                                        .empty()
                                        .append(i({ i: c.routes[0], o: o.length ? o[0] : [], d: defineVariable, u: b.userAccess })),
                                        p(a(k[0]));
                                } else console.log("not found source");
                            }
                        } else b.alert("Directions request failed due to " + e);
                    });
            };
            m && m[0] && document.getElementById(m[0]).addEventListener("change", r), document.getElementById(i).addEventListener("change", r), document.getElementById(j).addEventListener("change", r);
        },
        I = function (b) {
            var c = a('[data-google-map="' + b + '"]');
            if (!c.length) return console.log("[warning google map not found]", b), !1;
            var d = a(c.data("mapPoint")),
                e = c.data("openWindowInfo") || !1,
                f = [];
            try {
                var g = c.data("updateMaker"),
                    h = c.data("pacInputId"),
                    i = document.getElementById(h),
                    j = c.data("address") || "Quận 1, Hồ Chí Minh, Việt Nam",
                    k = new google.maps.Geocoder(),
                    l = {
                        zoom: parseInt(c.data("zoom")) || 14,
                        minZoom: parseInt(c.data("minZoom")) || 4,
                        maxZoom: parseInt(c.data("maxZoom")) || 21,
                        mapTypeId: c.data("roadmap") ? google.maps.MapTypeId.ROADMAP : google.maps.MapTypeId.SATELLITE,
                    },
                    m = null;
                c.data("latitude") && c.data("longitude")
                    ? ((l.center = new google.maps.LatLng(parseFloat(c.data("latitude")), parseFloat(c.data("longitude")))), (m = new google.maps.Map(document.getElementById(b), l)))
                    : j &&
                      k &&
                      ((m = new google.maps.Map(document.getElementById(b), l)),
                      k.geocode({ address: j }, function (a, b) {
                          b == google.maps.GeocoderStatus.OK
                              ? b != google.maps.GeocoderStatus.ZERO_RESULTS
                                  ? m.setCenter(a[0].geometry.location)
                                  : console.log("No results found")
                              : console.log("Geocode was not successful for the following reason: " + b);
                      })),
                    d.length &&
                        d.each(function () {
                            var b = a(this).data("latitude"),
                                d = a(this).data("longitude"),
                                e = new google.maps.LatLng(parseFloat(b), parseFloat(d)),
                                g = new google.maps.Marker({ position: e, map: m, draggable: c.data("draggable") || !1, id: a(this).data("id"), name: "pointID_" + a(this).data("id") });
                            f.push(g),
                                a(this).click(function () {
                                    google.maps.event.trigger(g, "click");
                                });
                        });
                var n = new google.maps.InfoWindow(),
                    o = function () {
                        var b = this,
                            c = a('[data-id="' + b.id + '"]'),
                            d = "";
                        c.length && ((d = c.find(".msm-content:eq(0)").html()), c.removeClass("actived"), c.addClass("actived"), c.parent().animate({ scrollTop: c.offset().top }, "slow"), n.setContent(d), n.open(m, b));
                    },
                    p = function (a) {
                        for (var b = 0; b < f.length; b++) f[b].setMap(a), google.maps.event.addListener(f[b], "click", o);
                    },
                    q = function (a) {
                        p(null);
                        var b = new google.maps.Marker({ position: a, map: m });
                        f.push(b), google.maps.event.addListener(b, "click", o);
                    },
                    r = function () {
                        p(m);
                    };
                if (
                    (m.addListener("click", function (b) {
                        console.log("a", c.data("disableUpdate")),
                            c.data("disableUpdate") ||
                                (g && g && a(g).length && (a(g).find("[data-key-lng]").val(b.latLng.lng()), a(g).find("[data-key-lat]").val(b.latLng.lat()), q(b.latLng), a(g).find("[data-button-magic]").removeClass("disabled")));
                    }),
                    m.addListener(m, "click", function () {
                        n.close();
                    }),
                    h && h.length && i)
                ) {
                    var s = new google.maps.places.SearchBox(i);
                    m.controls[google.maps.ControlPosition.TOP_LEFT].push(i),
                        m.addListener("bounds_changed", function () {
                            s.setBounds(m.getBounds());
                        }),
                        s.addListener("places_changed", function (b) {
                            var c = s.getPlaces();
                            if (c.length) {
                                f.forEach(function (a) {
                                    a.setMap(null);
                                }),
                                    (f = []);
                                var d = new google.maps.LatLngBounds();
                                c.forEach(function (a) {
                                    ({ url: a.icon, size: new google.maps.Size(71, 71), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(17, 34), scaledSize: new google.maps.Size(25, 25) });
                                    f.push(new google.maps.Marker({ map: m, title: a.name, position: a.geometry.location })), a.geometry.viewport ? d.union(a.geometry.viewport) : d.extend(a.geometry.location);
                                }),
                                    m.fitBounds(d);
                                var e = m.getCenter();
                                e && g && g && a(g).length && (a(g).find("[data-key-lng]").val(e.lng()), a(g).find("[data-key-lat]").val(e.lat()), a(g).find("[data-button-magic]").removeClass("disabled"));
                            }
                        });
                }
                r(), e && d.eq(0).trigger("click");
            } catch (t) {
                console.log("[warning google map]", t);
            }
        };
    return i()
        ? {
              parseUrlToObject: t,
              isFunction: q,
              validateTemplate: r,
              isValidate: h,
              formatStr: x,
              formatDate: y,
              formatCurrency: s,
              smsContent: d,
              successData: e,
              numberWithCommas: z,
              setValueObjByKeyString: o,
              getValueObjByKeyString: g,
              addDataSelect: A,
              slickSlide: E,
              initDatepicker: C,
              viewItemTemplateHandlebar: B,
              submitLocalForm: u,
              fillToFormLocal: v,
              fillToStaticFromForm: w,
              googleMap: I,
              googleDirections: H,
              dataExportToExcel: n,
              dataStatistic: m,
              generateRange: F,
              generateMax4d: G,
              getDaysRangeCSSBoxChat: f,
              convertVietnamese: D,
          }
        : {};
})(jQuery, window);
jQuery(function () {
    "use strict";
    var a = $("[data-copy-obj]"),
        b = $("[data-copy-template]");
    $("[data-cssmap]");
    a.length &&
        a.each(function () {
            var a = $($(this).data("copyObj"));
            a.length ? $(this).html(a.clone()) : $(this).remove();
        })
       
}),
    jQuery(function () {
        "use strict";
        var a = $("[data-format-currency]");
        a.length &&
            a.each(function () {
                Site.formatCurrency($(this));
            });
    }),
    jQuery(function () {
        "use strict";
        var a = $("[data-slick-slide]");
        a.length &&
            a.each(function () {
                Site.slickSlide($(this));
            });
    }),
    jQuery(function () {
        "use strict";
        var a = $("[data-goto-link]"),
            b = $("[data-goto-top]"),
            c = $("[data-change-to-submit-form]"),
            d = $("[data-option-goto-link]"),
            e = $("[data-btn-submit]"),
            f = $("[data-btn-slide-toggle]"),
            g = $("[data-parent-toggle]"),
            h = $("[data-confirm-question]"),
            i = $("[data-botton-export-excel]"),
            j = $("[data-countdown]"),
            k = $("[data-fixed]"),
            l = function (a, b, c) {
                var d = a.data("fixed") || null,
                    e = a.data("fixedCompare") || null;
                if (d) {
                    if (e && $(e).length) {
                        var f = a.offset().top + a.height(),
                            g = $(e).offset().top + $(e).height();
                        if (f > g) return;
                    }
                    d = d.split(",");
                    var h = $(d[0]).length ? $(d[0]) : null;
                    if (((h = h ? h : $(d[1]).length ? $(d[1]) : null), h && h.length)) {
                        var i = a.data("fixedStop") || null,
                            j = null;
                        i && ((i = i.split(",")), (j = $(i[0]).length ? i[0] : null), !j && i[1] && (j = i[1]));
                        var k = a.data("fixedClass"),
                            l = k + "-stop",
                            m = h.height() + h.offset().top;
                        m > b ? a.removeClass(k) : (a.addClass(k), a.removeClass(l), j && $(j).length && b > $(j).offset().top - a.height() - 60 && a.removeClass(k).addClass(l));
                    }
                }
            };
        i &&
            i.length &&
            i.on("click", function () {
                var a = $(this).data("label") || null,
                    b = $(this).data("strLocal") || null,
                    c = $(this).data("field") || null;
                c && a && b && window[b] ? ((a = a.split(",")), (c = c.split(",")), Site.dataExportToExcel(window[b], c, a)) : alert("null");
            }),
            f.on("click", function () {
                var a = $(this).data("btnSlideToggleObj"),
                    b = "actived";
                a && ($(this).toggleClass(b), $(a).slideToggle());
            }),
            h.length &&
                h.on("click", function () {
                    return confirm("do you want to delete?") ? void 0 : !1;
                }),
            d.on("change", function () {
                location.href = $(this).val();
            }),
            a.length && (location.href = a.data("url")),
            b.length &&
                b.on("click", function (a) {
                    a.preventDefault();
                    var b = 0,
                        c = $(this).data("time") || 1e3;
                    if ($(this).data("obj")) {
                        var d = $($(this).data("obj"));
                        d && d.length && (b = d.offset().top);
                    }
                    $("html,body").animate({ scrollTop: b }, c);
                }),
            e.on("click", function () {
                var a = $(this).data("btnSubmit");
                a && $(a).length ? $(a).submit() : $(this).closest("form").submit();
            }),
            $(document).keyup(function (a) {
                27 == a.keyCode && $(".modal.in").removeClass("in").empty();
            }),
            c.length &&
                c.on("change", function () {
                    $(this).submit();
                }),
            $(".icon-menu").on("click", function () {
                $("#nav-menu").toggleClass("mobile-menu");
            }),
            $(".button-menu").on("click", function () {
                $(this).closest(".top-link").toggleClass("mobile-menu");
            }),
            $(".nextToggle").on("click", function () {
                $(this).next().slideToggle();
            }),
            g.length &&
                g.click(function () {
                    $(this).parent().toggleClass($(this).data("parentToggle"));
                }),
            j.length &&
                j.each(function () {
                    var a = $(this).data("eventTime"),
                        b = $(this).data("currentTime");
                    if (a && b && a > b) {
                        var c = $(this).data("eventTime") - $(this).data("currentTime"),
                            d = moment.duration(1e3 * c, "milliseconds"),
                            e = 1e3,
                            f = this;
                        setInterval(function () {
                            (d = moment.duration(d - e, "milliseconds")),
                                $(f).find("[data-days]").text(d.days()),
                                $(f).find("[data-hours]").text(d.hours()),
                                $(f).find("[data-minutes]").text(d.minutes()),
                                $(f).find("[data-seconds]").text(d.seconds());
                        }, e);
                    }
                }),
            $(window).scroll(function () {
                var a;
                if (((a = "number" == typeof window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop), k.length > 0)) for (var b = 0, c = k.length; c > b; b++) l(k.eq(b), a);
            });
    }),
    jQuery(function () {
        "use strict";
        var a = $("#main .description img, #main .cat-detail img");
        a.length &&
            a.each(function () {
                var a = new Image(),
                    b = $(this),
                    c = $(this).parent().width();
                a.onload = function () {
                    a.width > c && b.attr("src", a.src).addClass("full-width");
                };
                var d = b.attr("src");
                (a.src = d), $(this).attr("src", d);
            });
        var b = $("img.img-detail, #main .description img");
        b.length &&
            b.each(function () {
                var a = new Image(),
                    b = $(this);
                a.onload = function () {
                    $(this).width() > b.closest("#main").width() && (b.attr("src", a.src), b.addClass("full-width"));
                };
                var c = b.data("src");
                (a.src = c), $(this).attr("src", c);
            });
        var c = $(".img-popup");
        c.length &&
            c.each(function () {
                var a = new Image(),
                    b = $(this),
                    c = b.closest(".content"),
                    d = parseInt(c.css("paddingTop"));
                a.onload = function () {
                    var b = parseInt((a.height * c.width()) / a.width);
                    c.css({ marginTop: -(b / 2 + d) });
                };
                var e = b.attr("src");
                a.src = e;
            });
    }),
    (function (a) {
        (theme = {
            _init: function () {
                api.options.slide_links && a(vars.slide_list).css("margin-left", -a(vars.slide_list).width() / 2),
                    api.options.autoplay
                        ? api.options.progress_bar && theme.progressBar()
                        : (a(vars.play_button).attr("src") && a(vars.play_button).attr("src", vars.image_path + "play.png"),
                          api.options.progress_bar &&
                              a(vars.progress_bar)
                                  .stop()
                                  .css({ left: -a(window).width() })),
                    a(vars.thumb_tray).css({ bottom: -a(vars.thumb_tray).height() }),
                    a(vars.tray_button).toggle(
                        function () {
                            return a(vars.thumb_tray).stop().animate({ bottom: 0, avoidTransforms: !0 }, 300), a(vars.tray_arrow).attr("src") && a(vars.tray_arrow).attr("src", vars.image_path + "button-tray-down.png"), !1;
                        },
                        function () {
                            return (
                                a(vars.thumb_tray)
                                    .stop()
                                    .animate({ bottom: -a(vars.thumb_tray).height(), avoidTransforms: !0 }, 300),
                                a(vars.tray_arrow).attr("src") && a(vars.tray_arrow).attr("src", vars.image_path + "button-tray-up.png"),
                                !1
                            );
                        }
                    ),
                    a(vars.thumb_list).width(a("> li", vars.thumb_list).length * a("> li", vars.thumb_list).outerWidth(!0)),
                    a(vars.slide_total).length && a(vars.slide_total).html(api.options.slides.length),
                    api.options.thumb_links &&
                        (a(vars.thumb_list).width() <= a(vars.thumb_tray).width() && a(vars.thumb_back + "," + vars.thumb_forward).fadeOut(0),
                        (vars.thumb_interval = Math.floor(a(vars.thumb_tray).width() / a("> li", vars.thumb_list).outerWidth(!0)) * a("> li", vars.thumb_list).outerWidth(!0)),
                        (vars.thumb_page = 0),
                        a(vars.thumb_forward).click(function () {
                            vars.thumb_page - vars.thumb_interval <= -a(vars.thumb_list).width()
                                ? ((vars.thumb_page = 0), a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" }))
                                : ((vars.thumb_page = vars.thumb_page - vars.thumb_interval), a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" }));
                        }),
                        a(vars.thumb_back).click(function () {
                            vars.thumb_page + vars.thumb_interval > 0
                                ? ((vars.thumb_page = Math.floor(a(vars.thumb_list).width() / vars.thumb_interval) * -vars.thumb_interval),
                                  a(vars.thumb_list).width() <= -vars.thumb_page && (vars.thumb_page = vars.thumb_page + vars.thumb_interval),
                                  a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" }))
                                : ((vars.thumb_page = vars.thumb_page + vars.thumb_interval), a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" }));
                        })),
                    a(vars.next_slide).click(function () {
                        api.nextSlide();
                    }),
                    a(vars.prev_slide).click(function () {
                        api.prevSlide();
                    }),
                    jQuery.support.opacity &&
                        a(vars.prev_slide + "," + vars.next_slide)
                            .mouseover(function () {
                                a(this).stop().animate({ opacity: 1 }, 100);
                            })
                            .mouseout(function () {
                                a(this).stop().animate({ opacity: 0.6 }, 100);
                            }),
                    api.options.thumbnail_navigation &&
                        (a(vars.next_thumb).click(function () {
                            api.nextSlide();
                        }),
                        a(vars.prev_thumb).click(function () {
                            api.prevSlide();
                        })),
                    a(vars.play_button).click(function () {
                        api.playToggle();
                    }),
                    api.options.mouse_scrub &&
                        a(vars.thumb_tray).mousemove(function (b) {
                            var c = a(vars.thumb_tray).width(),
                                d = a(vars.thumb_list).width();
                            if (d > c) {
                                var e = 1,
                                    f = b.pageX - e;
                                (f > 10 || -10 > f) &&
                                    ((e = b.pageX),
                                    (newX = (c - d) * (b.pageX / c)),
                                    (f = parseInt(Math.abs(parseInt(a(vars.thumb_list).css("left")) - newX)).toFixed(0)),
                                    a(vars.thumb_list)
                                        .stop()
                                        .animate({ left: newX }, { duration: 3 * f, easing: "easeOutExpo" }));
                            }
                        }),
                    a(window).resize(function () {
                        api.options.progress_bar &&
                            !vars.in_animation &&
                            (vars.slideshow_interval && clearInterval(vars.slideshow_interval),
                            api.options.slides.length - 1 > 0 && clearInterval(vars.slideshow_interval),
                            a(vars.progress_bar)
                                .stop()
                                .css({ left: -a(window).width() }),
                            !vars.progressDelay &&
                                api.options.slideshow &&
                                (vars.progressDelay = setTimeout(function () {
                                    vars.is_paused || (theme.progressBar(), (vars.slideshow_interval = setInterval(api.nextSlide, api.options.slide_interval))), (vars.progressDelay = !1);
                                }, 1e3))),
                            api.options.thumb_links &&
                                vars.thumb_tray.length &&
                                ((vars.thumb_page = 0),
                                (vars.thumb_interval = Math.floor(a(vars.thumb_tray).width() / a("> li", vars.thumb_list).outerWidth(!0)) * a("> li", vars.thumb_list).outerWidth(!0)),
                                a(vars.thumb_list).width() > a(vars.thumb_tray).width()
                                    ? (a(vars.thumb_back + "," + vars.thumb_forward).fadeIn("fast"), a(vars.thumb_list).stop().animate({ left: 0 }, 200))
                                    : a(vars.thumb_back + "," + vars.thumb_forward).fadeOut("fast"));
                    });
            },
            goTo: function () {
                api.options.progress_bar &&
                    !vars.is_paused &&
                    (a(vars.progress_bar)
                        .stop()
                        .css({ left: -a(window).width() }),
                    theme.progressBar());
            },
            playToggle: function (b) {
                "play" == b
                    ? (a(vars.play_button).attr("src") && a(vars.play_button).attr("src", vars.image_path + "pause.png"), api.options.progress_bar && !vars.is_paused && theme.progressBar())
                    : "pause" == b &&
                      (a(vars.play_button).attr("src") && a(vars.play_button).attr("src", vars.image_path + "play.png"),
                      api.options.progress_bar &&
                          vars.is_paused &&
                          a(vars.progress_bar)
                              .stop()
                              .css({ left: -a(window).width() }));
            },
            beforeAnimation: function (b) {
                if (
                    (api.options.progress_bar &&
                        !vars.is_paused &&
                        a(vars.progress_bar)
                            .stop()
                            .css({ left: -a(window).width() }),
                    a(vars.slide_caption).length && (api.getField("title") ? a(vars.slide_caption).html(api.getField("title")) : a(vars.slide_caption).html("")),
                    vars.slide_current.length && a(vars.slide_current).html(vars.current_slide + 1),
                    api.options.thumb_links && (a(".current-thumb").removeClass("current-thumb"), a("li", vars.thumb_list).eq(vars.current_slide).addClass("current-thumb"), a(vars.thumb_list).width() > a(vars.thumb_tray).width()))
                )
                    if ("next" == b)
                        0 === vars.current_slide
                            ? ((vars.thumb_page = 0), a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" }))
                            : a(".current-thumb").offset().left - a(vars.thumb_tray).offset().left >= vars.thumb_interval &&
                              ((vars.thumb_page = vars.thumb_page - vars.thumb_interval), a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" }));
                    else if ("prev" == b)
                        if (vars.current_slide == api.options.slides.length - 1)
                            (vars.thumb_page = Math.floor(a(vars.thumb_list).width() / vars.thumb_interval) * -vars.thumb_interval),
                                a(vars.thumb_list).width() <= -vars.thumb_page && (vars.thumb_page = vars.thumb_page + vars.thumb_interval),
                                a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" });
                        else if (a(".current-thumb").offset().left - a(vars.thumb_tray).offset().left < 0) {
                            if (vars.thumb_page + vars.thumb_interval > 0) return !1;
                            (vars.thumb_page = vars.thumb_page + vars.thumb_interval), a(vars.thumb_list).stop().animate({ left: vars.thumb_page }, { duration: 500, easing: "easeOutExpo" });
                        }
            },
            afterAnimation: function () {
                api.options.progress_bar && !vars.is_paused && theme.progressBar();
            },
            progressBar: function () {
                a(vars.progress_bar)
                    .stop()
                    .css({ left: -a(window).width() })
                    .animate({ left: 0 }, api.options.slide_interval);
            },
        }),
            (a.supersized.themeVars = {
                progress_delay: !1,
                thumb_page: !1,
                thumb_interval: !1,
                image_path: "img/",
                play_button: "#pauseplay",
                next_slide: "#nextslide",
                prev_slide: "#prevslide",
                next_thumb: "#nextthumb",
                prev_thumb: "#prevthumb",
                slide_caption: "#slidecaption",
                slide_current: ".slidenumber",
                slide_total: ".totalslides",
                slide_list: "#slide-list",
                thumb_tray: "#thumb-tray",
                thumb_list: "#thumb-list",
                thumb_forward: "#thumb-forward",
                thumb_back: "#thumb-back",
                tray_arrow: "#tray-arrow",
                tray_button: "#tray-button",
                progress_bar: "#progress-bar",
            }),
            (a.supersized.themeOptions = { progress_bar: 1, mouse_scrub: 0 });
    })(jQuery),
    jQuery(function () {
        "use strict";
        var a = $("[data-supersized-animate]:eq(0)");
        if (a.length) {
            a.hasClass("full-screen")
                ? $(window).height() > $(window).width()
                    ? a.css({ height: $(window).width() })
                    : a.data("minusHeader") && 1 == a.data("minusHeader")
                    ? a.css({ height: $(window).height() - a.offset().top })
                    : a.css({ marginTop: -a.offset().top, height: $(window).height() })
                : a.data("minusHeader") && 1 == a.data("minusHeader") && a.css({ marginTop: -a.offset().top });
            var b = a.data("transition") || 1,
                c = a.data("transitionSpeed") || 500,
                d = a.data("pauseHover") || 1,
                e = [],
                f = a.find(".banner-info");
            f.length &&
                f.each(function () {
                    e.push({ image: $(this).data("image"), url: $(this).data("url"), title: $(this).html() });
                }),
                $.supersized({ slide_interval: 4e3, pause_hover: d, new_window: 0, transition: b, transition_speed: c, slide_links: "false", slides: e });
        }
    });
var myWindow;
jQuery(function () {
    "use strict";
    var a = "[data-toggle-class]",
        b = "[data-add-class-active-to-obj]",
        c = "[data-set-value-to-inputid]",
        d = "[data-share-link]",
        e = "[data-closet-toggle-class]";
    b &&
        $(b).length &&
        $(b).each(function () {
            var a = $(this).data("addClassActiveToObj");
            a && a.length && (a = a.split(","));
            for (var b = 0, c = a.length; c > b; b++) $(a[b]).length && $(a[b]).addClass("active");
        }),
        $("body").on("click", d, function (a) {
            if ($(this).data("shareLink") && $(this).data("shareTo")) {
                var b = $(this).data("shareTo") + $(this).data("shareLink"),
                    c = $(this).data("windowWidth") || 600,
                    d = $(this).data("windowHeight") || 300;
                if ($(this).data("center")) {
                    var e = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
                        f = void 0 !== window.screenTop ? window.screenTop : screen.top,
                        g = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                        h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                        i = g / 2 - c / 2 + e,
                        j = h / 2 - d / 2 + f;
                    myWindow = window.open(b, "Share Link", "width=" + c + ", height=" + d + ", top=" + j + ", left=" + i);
                } else myWindow = window.open(b, "Share Link", "width=" + c + ", height=" + d);
            }
        }),
        $("body").on("click", a, function () {
            var a = $(this).data("toggleClassObject") ? $(this).data("toggleClassObject").split(",") : null,
                b = $(this).data("toggleClass") ? $(this).data("toggleClass").split(",") : null,
                c = $(this).data("showHide") ? $(this).data("showHide").split(",") : null,
                d = $(this).data("classInGroup") ? $(this).data("classInGroup") : null;
            if (a && b) for (var e = 0, f = a.length; f > e; e++) $($(a[e].trim())).toggleClass(b[e].trim());
            if ((c && (c[0] && $(c[0]).length && $(c[0].trim()).removeClass("hidden"), c[1] && $(c[1]).length && $(c[1].trim()).addClass("hidden")), d)) {
                $(this).hasClass(d) || ($(this).parent().children().removeClass(d), $(this).addClass(d));
            }
        }),
        $("body").on("click", c, function (a) {
            var b = "active";
            if (!$(this).hasClass(b) && $(this).data("setValueToInputid")) {
                $(c).removeClass(b);
                var d = $(this).data("setValueToInputid");
                $("#" + d).length && ($(this).addClass(b), $("#" + d).val($(this).data("value")));
            }
        }),
        $("body").on("click", e, function () {
            var a = $(this).data("emptyObject") || null,
                b = $(this).data("removeAttr") || null,
                c = $(this).data("addAttr") || null,
                d = $(this).data("triggerClick") || null,
                e = $(this).closest($(this).data("object")),
                f = $(this).data("closetToggleClass");
            $(this).data("uniqueClass") ? e.attr({ class: f }) : e.toggleClass(f),
                $(this).data("storageToggleIndex") && "undefined" != typeof Storage && (e.hasClass(f) ? localStorage.setItem($(this).data("storageToggleIndex"), f) : localStorage.removeItem($(this).data("storageToggleIndex"))),
                b && $(this).removeAttr(b),
                c && $(this).addAttr(c),
                d && (console.log("triggerClick", d), $(d).trigger("click")),
                a && $(a).length && $(a).empty();
        });
})
   