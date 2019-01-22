/*!
 * Flickity PACKAGED v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!(function(t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function(t, e) {
  "use strict";
  function i(i, o, a) {
    function l(t, e, n) {
      var s,
        o = "$()." + i + '("' + e + '")';
      return (
        t.each(function(t, l) {
          var h = a.data(l, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + o
            );
          var c = h[e];
          if (!c || "_" == e.charAt(0))
            return void r(o + " is not a valid method");
          var d = c.apply(h, n);
          s = void 0 === s ? d : s;
        }),
        void 0 !== s ? s : t
      );
    }
    function h(t, e) {
      t.each(function(t, n) {
        var s = a.data(n, i);
        s ? (s.option(e), s._init()) : ((s = new o(n, e)), a.data(n, i, s));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (o.prototype.option ||
          (o.prototype.option = function(t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function(t) {
          if ("string" == typeof t) {
            var e = s.call(arguments, 1);
            return l(this, t, e);
          }
          return h(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var s = Array.prototype.slice,
    o = t.console,
    r =
      "undefined" == typeof o
        ? function() {}
        : function(t) {
            o.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return n.indexOf(e) == -1 && n.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return n != -1 && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s],
              r = n && n[o];
            r && (this.off(t, o), delete n[o]), o.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function() {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function() {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = l[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function s() {
      if (!c) {
        c = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var s = n(e);
        (r = 200 == Math.round(t(s.width))),
          (o.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function o(e) {
      if (
        (s(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var o = n(e);
        if ("none" == o.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var c = (a.isBorderBox = "border-box" == o.boxSizing), d = 0;
          d < h;
          d++
        ) {
          var u = l[d],
            f = o[u],
            p = parseFloat(f);
          a[u] = isNaN(p) ? 0 : p;
        }
        var g = a.paddingLeft + a.paddingRight,
          v = a.paddingTop + a.paddingBottom,
          m = a.marginLeft + a.marginRight,
          y = a.marginTop + a.marginBottom,
          b = a.borderLeftWidth + a.borderRightWidth,
          E = a.borderTopWidth + a.borderBottomWidth,
          S = c && r,
          C = t(o.width);
        C !== !1 && (a.width = C + (S ? 0 : g + b));
        var x = t(o.height);
        return (
          x !== !1 && (a.height = x + (S ? 0 : v + E)),
          (a.innerWidth = a.width - (g + b)),
          (a.innerHeight = a.height - (v + E)),
          (a.outerWidth = a.width + m),
          (a.outerHeight = a.height + y),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function(t) {
              console.error(t);
            },
      l = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ],
      h = l.length,
      c = !1;
    return o;
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function() {
    "use strict";
    var t = (function() {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          s = n + "MatchesSelector";
        if (t[s]) return s;
      }
    })();
    return function(e, i) {
      return e[t](i);
    };
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "desandro-matches-selector/matches-selector"
        ], function(i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function(t, e) {
    var i = {};
    (i.extend = function(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function(t, e) {
        return ((t % e) + e) % e;
      });
    var n = Array.prototype.slice;
    (i.makeArray = function(t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? n.call(t) : [t];
    }),
      (i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return (
          t.forEach(function(t) {
            if (t instanceof HTMLElement) {
              if (!n) return void s.push(t);
              e(t, n) && s.push(t);
              for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                s.push(i[o]);
            }
          }),
          s
        );
      }),
      (i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
          s = e + "Timeout";
        t.prototype[e] = function() {
          var t = this[s];
          clearTimeout(t);
          var e = arguments,
            o = this;
          this[s] = setTimeout(function() {
            n.apply(o, e), delete o[s];
          }, i);
        };
      }),
      (i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function(t) {
        return t
          .replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var s = t.console;
    return (
      (i.htmlInit = function(e, n) {
        i.docReady(function() {
          var o = i.toDashed(n),
            r = "data-" + o,
            a = document.querySelectorAll("[" + r + "]"),
            l = document.querySelectorAll(".js-" + o),
            h = i.makeArray(a).concat(i.makeArray(l)),
            c = r + "-options",
            d = t.jQuery;
          h.forEach(function(t) {
            var i,
              o = t.getAttribute(r) || t.getAttribute(c);
            try {
              i = o && JSON.parse(o);
            } catch (a) {
              return void (
                s &&
                s.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var l = new e(t, i);
            d && d.data(t, n, l);
          });
        });
      }),
      i
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("get-size")))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
  })(window, function(t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function() {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-selected", "false"),
          (this.x = 0),
          (this.shift = 0);
      }),
      (n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.removeAttribute("aria-selected"),
          (this.element.style[t] = "");
      }),
      (n.getSize = function() {
        this.size = e(this.element);
      }),
      (n.setPosition = function(t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target =
          this.x + this.size[t] + this.size.width * this.parent.cellAlign;
      }),
      (n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.wrapShift = function(t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function() {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function() {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function(t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function() {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function() {
        this.changeSelected(!0);
      }),
      (e.unselect = function() {
        this.changeSelected(!1);
      }),
      (e.changeSelected = function(t) {
        var e = t ? "add" : "remove";
        this.cells.forEach(function(i) {
          i.element.classList[e]("is-selected"),
            i.element.setAttribute("aria-selected", t.toString());
        });
      }),
      (e.getCellElements = function() {
        return this.cells.map(function(t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("fizzy-ui-utils")))
      : ((t.Flickity = t.Flickity || {}),
        (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
  })(window, function(t, e) {
    var i = {};
    return (
      (i.startAnimation = function() {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      }),
      (i.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          requestAnimationFrame(function() {
            e.animate();
          });
        }
      }),
      (i.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          (t += this.cursorPosition),
          (t = this.options.rightToLeft ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style.transform = this.isAnimating
          ? "translate3d(" + i + ",0,0)"
          : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
          var s = -this.x - n.target,
            o = s / this.slidesWidth;
          this.dispatchEvent("scroll", null, [o, s]);
        }
      }),
      (i.positionSliderAtSelected = function() {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      }),
      (i.getPositionValue = function(t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      }),
      (i.settle = function(t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      }),
      (i.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      }),
      (i._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o = e > 0 ? i : 0;
          s.wrapShift(o), (e -= s.size.outerWidth);
        }
      }),
      (i._unshiftCells = function(t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      }),
      (i.integratePhysics = function() {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      }),
      (i.applyForce = function(t) {
        this.velocity += t;
      }),
      (i.getFrictionFactor = function() {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      }),
      (i.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      }),
      (i.applyDragForce = function() {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x,
            e = t - this.velocity;
          this.applyForce(e);
        }
      }),
      (i.applySelectedAttraction = function() {
        var t = this.isDraggable && this.isPointerDown;
        if (!t && !this.isFreeScrolling && this.slides.length) {
          var e = this.selectedSlide.target * -1 - this.x,
            i = e * this.options.selectedAttraction;
          this.applyForce(i);
        }
      }),
      i
    );
  }),
  (function(t, e) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate"
      ], function(i, n, s, o, r, a) {
        return e(t, i, n, s, o, r, a);
      });
    else if ("object" == typeof module && module.exports)
      module.exports = e(
        t,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var i = t.Flickity;
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      );
    }
  })(window, function(t, e, i, n, s, o, r) {
    function a(t, e) {
      for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    function l(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (d && d.error("Bad element for Flickity: " + (i || t)));
      if (((this.element = i), this.element.flickityGUID)) {
        var s = f[this.element.flickityGUID];
        return s.option(e), s;
      }
      h && (this.$element = h(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e),
        this._create();
    }
    var h = t.jQuery,
      c = t.getComputedStyle,
      d = t.console,
      u = 0,
      f = {};
    (l.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0
    }),
      (l.createMethods = []);
    var p = l.prototype;
    n.extend(p, e.prototype),
      (p._create = function() {
        var e = (this.guid = ++u);
        (this.element.flickityGUID = e),
          (f[e] = this),
          (this.selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.originSide = this.options.rightToLeft ? "right" : "left"),
          (this.viewport = document.createElement("div")),
          (this.viewport.className = "flickity-viewport"),
          this._createSlider(),
          (this.options.resize || this.options.watchCSS) &&
            t.addEventListener("resize", this);
        for (var i in this.options.on) {
          var n = this.options.on[i];
          this.on(i, n);
        }
        l.createMethods.forEach(function(t) {
          this[t]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function(t) {
        n.extend(this.options, t);
      }),
      (p.activate = function() {
        if (!this.isActive) {
          (this.isActive = !0),
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft &&
              this.element.classList.add("flickity-rtl"),
            this.getSize();
          var t = this._filterFindCellElements(this.element.children);
          a(t, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility &&
              ((this.element.tabIndex = 0),
              this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
          var e,
            i = this.options.initialIndex;
          (e = this.isInitActivated
            ? this.selectedIndex
            : void 0 !== i && this.cells[i]
            ? i
            : 0),
            this.select(e, !1, !0),
            (this.isInitActivated = !0),
            this.dispatchEvent("ready");
        }
      }),
      (p._createSlider = function() {
        var t = document.createElement("div");
        (t.className = "flickity-slider"),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function(t) {
        return n.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function() {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function(t) {
        var e = this._filterFindCellElements(t),
          i = e.map(function(t) {
            return new s(t, this);
          }, this);
        return i;
      }),
      (p.getLastCell = function() {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function(t) {
        (t = t || 0), (this.maxCellHeight = t ? this.maxCellHeight || 0 : 0);
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function(t) {
        t.forEach(function(t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function() {
        if (((this.slides = []), this.cells.length)) {
          var t = new o(this);
          this.slides.push(t);
          var e = "left" == this.originSide,
            i = e ? "marginRight" : "marginLeft",
            n = this._getCanCellFit();
          this.cells.forEach(function(e, s) {
            if (!t.cells.length) return void t.addCell(e);
            var r =
              t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
            n.call(this, s, r)
              ? t.addCell(e)
              : (t.updateTarget(),
                (t = new o(this)),
                this.slides.push(t),
                t.addCell(e));
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
          return function() {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function(t) {
            return t % e !== 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected();
      }),
      (p.getSize = function() {
        (this.size = i(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var g = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 }
    };
    return (
      (p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function() {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0; ) {
          var s = this.cells[e];
          if (!s) break;
          n.push(s), (e += i), (t -= s.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function() {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            s = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            r = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function(t) {
            s
              ? (t.target = n * this.cellAlign)
              : ((t.target = Math.max(t.target, o)),
                (t.target = Math.min(t.target, r)));
          }, this);
        }
      }),
      (p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), h && this.$element)) {
          t += this.options.namespaceJQueryEvents ? ".flickity" : "";
          var s = t;
          if (e) {
            var o = h.Event(e);
            (o.type = t), (s = o);
          }
          this.$element.trigger(s, i);
        }
      }),
      (p.select = function(t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = n.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var s = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != s && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect");
        }
      }),
      (p._wrapSelect = function(t) {
        var e = this.slides.length,
          i = this.options.wrapAround && e > 1;
        if (!i) return t;
        var s = n.modulo(t, e),
          o = Math.abs(s - this.selectedIndex),
          r = Math.abs(s + e - this.selectedIndex),
          a = Math.abs(s - e - this.selectedIndex);
        !this.isDragSelect && r < o
          ? (t += e)
          : !this.isDragSelect && a < o && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : t >= e && (this.x += this.slideableWidth);
      }),
      (p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectCell = function(t, e, i) {
        var n = this.queryCell(t);
        if (n) {
          var s = this.getCellSlideIndex(n);
          this.select(s, e, i);
        }
      }),
      (p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++) {
          var i = this.slides[e],
            n = i.cells.indexOf(t);
          if (n != -1) return e;
        }
      }),
      (p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function(t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (p.getCellElements = function() {
        return this.cells.map(function(t) {
          return t.element;
        });
      }),
      (p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e
          ? e
          : ((t = n.getParent(t, ".flickity-slider > *")), this.getCell(t));
      }),
      (p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var s = [], o = e - t; o <= e + t; o++) {
          var r = this.options.wrapAround ? n.modulo(o, i) : o,
            a = this.slides[r];
          a && (s = s.concat(a.getCellElements()));
        }
        return s;
      }),
      (p.queryCell = function(t) {
        return "number" == typeof t
          ? this.cells[t]
          : ("string" == typeof t && (t = this.element.querySelector(t)),
            this.getCell(t));
      }),
      (p.uiChange = function() {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t]);
      }),
      (p.onresize = function() {
        this.watchCSS(), this.resize();
      }),
      n.debounceMethod(l, "onresize", 150),
      (p.resize = function() {
        if (this.isActive) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function() {
        var t = this.options.watchCSS;
        if (t) {
          var e = c(this.element, ":after").content;
          e.indexOf("flickity") != -1 ? this.activate() : this.deactivate();
        }
      }),
      (p.onkeydown = function(t) {
        var e =
          document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
          var i = l.keyboardHandlers[t.keyCode];
          i && i.call(this);
        }
      }),
      (l.keyboardHandlers = {
        37: function() {
          var t = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t]();
        },
        39: function() {
          var t = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t]();
        }
      }),
      (p.focus = function() {
        var e = t.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
      }),
      (p.deactivate = function() {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function(t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          a(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function() {
        this.deactivate(),
          t.removeEventListener("resize", this),
          this.emitEvent("destroy"),
          h && this.$element && h.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete f[this.guid];
      }),
      n.extend(p, r),
      (l.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e];
      }),
      n.htmlInit(l, "flickity"),
      h && h.bridget && h.bridget("flickity", l),
      (l.setJQuery = function(t) {
        h = t;
      }),
      (l.Cell = s),
      l
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.Unipointer = e(t, t.EvEmitter));
  })(window, function(t, e) {
    function i() {}
    function n() {}
    var s = (n.prototype = Object.create(e.prototype));
    (s.bindStartEvent = function(t) {
      this._bindStartEvent(t, !0);
    }),
      (s.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1);
      }),
      (s._bindStartEvent = function(e, i) {
        i = void 0 === i || i;
        var n = i ? "addEventListener" : "removeEventListener",
          s = "mousedown";
        t.PointerEvent
          ? (s = "pointerdown")
          : "ontouchstart" in t && (s = "touchstart"),
          e[n](s, this);
      }),
      (s.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (s.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (s.onmousedown = function(t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (s.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (s.onpointerdown = function(t) {
        this._pointerDown(t, t);
      }),
      (s._pointerDown = function(t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (s.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var o = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return (
      (s._bindPostStartEvents = function(e) {
        if (e) {
          var i = o[e.type];
          i.forEach(function(e) {
            t.addEventListener(e, this);
          }, this),
            (this._boundPointerEvents = i);
        }
      }),
      (s._unbindPostStartEvents = function() {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (s.onmousemove = function(t) {
        this._pointerMove(t, t);
      }),
      (s.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (s.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (s._pointerMove = function(t, e) {
        this.pointerMove(t, e);
      }),
      (s.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (s.onmouseup = function(t) {
        this._pointerUp(t, t);
      }),
      (s.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (s.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (s._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (s.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (s._pointerDone = function() {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (s._pointerReset = function() {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (s.pointerDone = i),
      (s.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (s.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (s._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (s.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (n.getPointerPoint = function(t) {
        return { x: t.pageX, y: t.pageY };
      }),
      n
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.Unidragger = e(t, t.Unipointer));
  })(window, function(t, e) {
    function i() {}
    var n = (i.prototype = Object.create(e.prototype));
    (n.bindHandles = function() {
      this._bindHandles(!0);
    }),
      (n.unbindHandles = function() {
        this._bindHandles(!1);
      }),
      (n._bindHandles = function(e) {
        e = void 0 === e || e;
        for (
          var i = e ? "addEventListener" : "removeEventListener",
            n = e ? this._touchActionValue : "",
            s = 0;
          s < this.handles.length;
          s++
        ) {
          var o = this.handles[s];
          this._bindStartEvent(o, e),
            o[i]("click", this),
            t.PointerEvent && (o.style.touchAction = n);
        }
      }),
      (n._touchActionValue = "none"),
      (n.pointerDown = function(t, e) {
        var i = this.okayPointerDown(t);
        i &&
          ((this.pointerDownPointer = e),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]));
      });
    var s = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      o = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
      };
    return (
      (n.okayPointerDown = function(t) {
        var e = s[t.target.nodeName],
          i = o[t.target.type],
          n = !e || i;
        return n || this._pointerReset(), n;
      }),
      (n.pointerDownBlur = function() {
        var t = document.activeElement,
          e = t && t.blur && t != document.body;
        e && t.blur();
      }),
      (n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (n._dragPointerMove = function(t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (n.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (n._dragStart = function(t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (n._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (n.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (n._dragEnd = function(t, e) {
        (this.isDragging = !1),
          setTimeout(
            function() {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (n._staticClick = function(t, e) {
        (this.isIgnoringMouseUp && "mouseup" == t.type) ||
          (this.staticClick(t, e),
          "mouseup" != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function() {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (i.getPointerPoint = e.getPointerPoint),
      i
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/drag", [
          "./flickity",
          "unidragger/unidragger",
          "fizzy-ui-utils/utils"
        ], function(i, n, s) {
          return e(t, i, n, s);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })(window, function(t, e, i, n) {
    function s() {
      return { x: t.pageXOffset, y: t.pageYOffset };
    }
    n.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }),
      e.createMethods.push("_createDrag");
    var o = e.prototype;
    n.extend(o, i.prototype), (o._touchActionValue = "pan-y");
    var r = "createTouch" in document,
      a = !1;
    (o._createDrag = function() {
      this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        r && !a && (t.addEventListener("touchmove", function() {}), (a = !0));
    }),
      (o.onActivateDrag = function() {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (o.onDeactivateDrag = function() {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (o.updateDraggable = function() {
        ">1" == this.options.draggable
          ? (this.isDraggable = this.slides.length > 1)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (o.bindDrag = function() {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (o.unbindDrag = function() {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (o._uiChangeDrag = function() {
        delete this.isFreeScrolling;
      }),
      (o._childUIPointerDownDrag = function(t) {
        t.preventDefault(), this.pointerDownFocus(t);
      }),
      (o.pointerDown = function(e, i) {
        if (!this.isDraggable) return void this._pointerDownDefault(e, i);
        var n = this.okayPointerDown(e);
        n &&
          (this._pointerDownPreventDefault(e),
          this.pointerDownFocus(e),
          document.activeElement != this.element && this.pointerDownBlur(),
          (this.dragX = this.x),
          this.viewport.classList.add("is-pointer-down"),
          (this.pointerDownScroll = s()),
          t.addEventListener("scroll", this),
          this._pointerDownDefault(e, i));
      }),
      (o._pointerDownDefault = function(t, e) {
        (this.pointerDownPointer = e),
          this._bindPostStartEvents(t),
          this.dispatchEvent("pointerDown", t, [e]);
      });
    var l = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    return (
      (o.pointerDownFocus = function(t) {
        var e = l[t.target.nodeName];
        e || this.focus();
      }),
      (o._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type,
          i = "touch" == t.pointerType,
          n = l[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (o.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (o.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (o.pointerDone = function() {
        t.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (o.dragStart = function(e, i) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          t.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", e, [i]));
      }),
      (o.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (o.dragMove = function(t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var n = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i.x = i.x % this.slideableWidth);
          var s = this.dragStartPosition + i.x * n;
          if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = s > o ? 0.5 * (s + o) : s;
            var r = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            s = s < r ? 0.5 * (s + r) : s;
          }
          (this.dragX = s),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t, [e, i]);
        }
      }),
      (o.dragEnd = function(t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e]);
        }
      }),
      (o.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1),
          s = i.distance < n.distance ? i.index : n.index;
        return s;
      }),
      (o._getClosestResting = function(t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function(t, e) {
                    return t <= e;
                  }
                : function(t, e) {
                    return t < e;
                  };
          o(e, s) &&
          ((n += i), (s = e), (e = this.getSlideDistance(-t, n)), null !== e);

        )
          e = Math.abs(e);
        return { distance: s, index: n - i };
      }),
      (o.getSlideDistance = function(t, e) {
        var i = this.slides.length,
          s = this.options.wrapAround && i > 1,
          o = s ? n.modulo(e, i) : e,
          r = this.slides[o];
        if (!r) return null;
        var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + a);
      }),
      (o.dragEndBoostSelect = function() {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (o.staticClick = function(t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s]);
      }),
      (o.onscroll = function() {
        var t = s(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
      }),
      e
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(
          i
        ) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.TapListener = e(t, t.Unipointer));
  })(window, function(t, e) {
    function i(t) {
      this.bindTap(t);
    }
    var n = (i.prototype = Object.create(e.prototype));
    return (
      (n.bindTap = function(t) {
        t &&
          (this.unbindTap(),
          (this.tapElement = t),
          this._bindStartEvent(t, !0));
      }),
      (n.unbindTap = function() {
        this.tapElement &&
          (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
      }),
      (n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
          var s = e.getPointerPoint(n),
            o = this.tapElement.getBoundingClientRect(),
            r = t.pageXOffset,
            a = t.pageYOffset,
            l =
              s.x >= o.left + r &&
              s.x <= o.right + r &&
              s.y >= o.top + a &&
              s.y <= o.bottom + a;
          if ((l && this.emitEvent("tap", [i, n]), "mouseup" != i.type)) {
            this.isIgnoringMouseUp = !0;
            var h = this;
            setTimeout(function() {
              delete h.isIgnoringMouseUp;
            }, 400);
          }
        }
      }),
      (n.destroy = function() {
        this.pointerDone(), this.unbindTap();
      }),
      i
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/prev-next-button", [
          "./flickity",
          "tap-listener/tap-listener",
          "fizzy-ui-utils/utils"
        ], function(i, n, s) {
          return e(t, i, n, s);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("tap-listener"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function(t, e, i, n) {
    "use strict";
    function s(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    function o(t) {
      return "string" == typeof t
        ? t
        : "M " +
            t.x0 +
            ",50 L " +
            t.x1 +
            "," +
            (t.y1 + 50) +
            " L " +
            t.x2 +
            "," +
            (t.y2 + 50) +
            " L " +
            t.x3 +
            ",50  L " +
            t.x2 +
            "," +
            (50 - t.y2) +
            " L " +
            t.x1 +
            "," +
            (50 - t.y1) +
            " Z";
    }
    var r = "http://www.w3.org/2000/svg";
    (s.prototype = Object.create(i.prototype)),
      (s.prototype._create = function() {
        (this.isEnabled = !0), (this.isPrevious = this.direction == -1);
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = (this.element = document.createElement("button"));
        (e.className = "flickity-button flickity-prev-next-button"),
          (e.className += this.isPrevious ? " previous" : " next"),
          e.setAttribute("type", "button"),
          this.disable(),
          e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i),
          this.on("tap", this.onTap),
          this.parent.on("select", this.update.bind(this)),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (s.prototype.activate = function() {
        this.bindTap(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
          i.prototype.destroy.call(this),
          this.element.removeEventListener("click", this);
      }),
      (s.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("class", "flickity-button-icon"),
          t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path"),
          i = o(this.parent.options.arrowShape);
        return (
          e.setAttribute("d", i),
          e.setAttribute("class", "arrow"),
          this.isLeft ||
            e.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(e),
          t
        );
      }),
      (s.prototype.onTap = function() {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (s.prototype.handleEvent = n.handleEvent),
      (s.prototype.onclick = function(t) {
        var e = document.activeElement;
        e && e == this.element && this.onTap(t, t);
      }),
      (s.prototype.enable = function() {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (s.prototype.disable = function() {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (s.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1)
          return void this.enable();
        var e = t.length ? t.length - 1 : 0,
          i = this.isPrevious ? 0 : e,
          n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]();
      }),
      (s.prototype.destroy = function() {
        this.deactivate();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 }
      }),
      e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return (
      (a._createPrevNextButtons = function() {
        this.options.prevNextButtons &&
          ((this.prevButton = new s(-1, this)),
          (this.nextButton = new s(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (a.activatePrevNextButtons = function() {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = s),
      e
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/page-dots", [
          "./flickity",
          "tap-listener/tap-listener",
          "fizzy-ui-utils/utils"
        ], function(i, n, s) {
          return e(t, i, n, s);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("tap-listener"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function(t, e, i, n) {
    function s(t) {
      (this.parent = t), this._create();
    }
    (s.prototype = new i()),
      (s.prototype._create = function() {
        (this.holder = document.createElement("ol")),
          (this.holder.className = "flickity-page-dots"),
          (this.dots = []),
          this.on("tap", this.onTap),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (s.prototype.activate = function() {
        this.setDots(),
          this.bindTap(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
          i.prototype.destroy.call(this);
      }),
      (s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (s.prototype.addDots = function(t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            s = n + t,
            o = n;
          o < s;
          o++
        ) {
          var r = document.createElement("li");
          (r.className = "dot"),
            r.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(r),
            i.push(r);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (s.prototype.removeDots = function(t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function(t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (s.prototype.updateSelected = function() {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (s.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
          this.parent.uiChange();
          var i = this.dots.indexOf(e);
          this.parent.select(i);
        }
      }),
      (s.prototype.destroy = function() {
        this.deactivate();
      }),
      (e.PageDots = s),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return (
      (o._createPageDots = function() {
        this.options.pageDots &&
          ((this.pageDots = new s(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function() {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function() {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function() {
        this.pageDots.deactivate();
      }),
      (e.PageDots = s),
      e
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/player", [
          "ev-emitter/ev-emitter",
          "fizzy-ui-utils/utils",
          "./flickity"
        ], function(t, i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function(t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    (n.prototype = Object.create(t.prototype)),
      (n.prototype.play = function() {
        if ("playing" != this.state) {
          var t = document.hidden;
          if (t)
            return void document.addEventListener(
              "visibilitychange",
              this.onVisibilityPlay
            );
          (this.state = "playing"),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange
            ),
            this.tick();
        }
      }),
      (n.prototype.tick = function() {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function() {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function() {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function() {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function() {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function() {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function() {
        var t = document.hidden;
        this[t ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function() {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return (
      (s._createPlayer = function() {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (s.activatePlayer = function() {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (s.playPlayer = function() {
        this.player.play();
      }),
      (s.stopPlayer = function() {
        this.player.stop();
      }),
      (s.pausePlayer = function() {
        this.player.pause();
      }),
      (s.unpausePlayer = function() {
        this.player.unpause();
      }),
      (s.deactivatePlayer = function() {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (s.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (s.onmouseleave = function() {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/add-remove-cell", [
          "./flickity",
          "fizzy-ui-utils/utils"
        ], function(i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function(t, e, i) {
    function n(t) {
      var e = document.createDocumentFragment();
      return (
        t.forEach(function(t) {
          e.appendChild(t.element);
        }),
        e
      );
    }
    var s = e.prototype;
    return (
      (s.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var s = this.cells.length;
          e = void 0 === e ? s : e;
          var o = n(i),
            r = e == s;
          if (r) this.slider.appendChild(o);
          else {
            var a = this.cells[e].element;
            this.slider.insertBefore(o, a);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (r) this.cells = this.cells.concat(i);
          else {
            var l = this.cells.splice(e, s - e);
            this.cells = this.cells.concat(i).concat(l);
          }
          this._sizeCells(i), this.cellChange(e, !0);
        }
      }),
      (s.append = function(t) {
        this.insert(t, this.cells.length);
      }),
      (s.prepend = function(t) {
        this.insert(t, 0);
      }),
      (s.remove = function(t) {
        var e = this.getCells(t);
        if (e && e.length) {
          var n = this.cells.length - 1;
          e.forEach(function(t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (n = Math.min(e, n)), i.removeFrom(this.cells, t);
          }, this),
            this.cellChange(n, !0);
        }
      }),
      (s.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (s.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/lazyload", [
          "./flickity",
          "fizzy-ui-utils/utils"
        ], function(i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function(t, e, i) {
    "use strict";
    function n(t) {
      if ("IMG" == t.nodeName) {
        var e = t.getAttribute("data-flickity-lazyload"),
          n = t.getAttribute("data-flickity-lazyload-src"),
          s = t.getAttribute("data-flickity-lazyload-srcset");
        if (e || n || s) return [t];
      }
      var o =
          "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
        r = t.querySelectorAll(o);
      return i.makeArray(r);
    }
    function s(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    e.createMethods.push("_createLazyload");
    var o = e.prototype;
    return (
      (o._createLazyload = function() {
        this.on("select", this.lazyLoad);
      }),
      (o.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            o = [];
          i.forEach(function(t) {
            var e = n(t);
            o = o.concat(e);
          }),
            o.forEach(function(t) {
              new s(t, this);
            }, this);
        }
      }),
      (s.prototype.handleEvent = i.handleEvent),
      (s.prototype.load = function() {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t),
          e && this.img.setAttribute("srcset", e),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (s.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (s.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (s.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = s),
      e
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/index", [
          "./flickity",
          "./drag",
          "./prev-next-button",
          "./page-dots",
          "./player",
          "./add-remove-cell",
          "./lazyload"
        ], e)
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ));
  })(window, function(t) {
    return t;
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("flickity-as-nav-for/as-nav-for", [
          "flickity/js/index",
          "fizzy-ui-utils/utils"
        ], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function(t, e) {
    function i(t, e, i) {
      return (e - t) * i + t;
    }
    t.createMethods.push("_createAsNavFor");
    var n = t.prototype;
    return (
      (n._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function() {
            e.setNavCompanion(t);
          });
        }
      }),
      (n.setNavCompanion = function(i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
          this.navCompanion = n;
          var s = this;
          (this.onNavCompanionSelect = function() {
            s.navCompanionSelect();
          }),
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0);
        }
      }),
      (n.navCompanionSelect = function(t) {
        if (this.navCompanion) {
          var e = this.navCompanion.selectedCells[0],
            n = this.navCompanion.cells.indexOf(e),
            s = n + this.navCompanion.selectedCells.length - 1,
            o = Math.floor(i(n, s, this.navCompanion.cellAlign));
          if (
            (this.selectCell(o, !1, t),
            this.removeNavSelectedElements(),
            !(o >= this.cells.length))
          ) {
            var r = this.cells.slice(n, s + 1);
            (this.navSelectedElements = r.map(function(t) {
              return t.element;
            })),
              this.changeNavSelectedClass("add");
          }
        }
      }),
      (n.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
          e.classList[t]("is-nav-selected");
        });
      }),
      (n.activateAsNavFor = function() {
        this.navCompanionSelect(!0);
      }),
      (n.removeNavSelectedElements = function() {
        this.navSelectedElements &&
          (this.changeNavSelectedClass("remove"),
          delete this.navSelectedElements);
      }),
      (n.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (n.deactivateAsNavFor = function() {
        this.removeNavSelectedElements();
      }),
      (n.destroyAsNavFor = function() {
        this.navCompanion &&
          (this.navCompanion.off("select", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion);
      }),
      t
    );
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(
          i
        ) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t) {
      if (Array.isArray(t)) return t;
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? h.call(t) : [t];
    }
    function s(t, e, o) {
      if (!(this instanceof s)) return new s(t, e, o);
      var r = t;
      return (
        "string" == typeof t && (r = document.querySelectorAll(t)),
        r
          ? ((this.elements = n(r)),
            (this.options = i({}, this.options)),
            "function" == typeof e ? (o = e) : i(this.options, e),
            o && this.on("always", o),
            this.getImages(),
            a && (this.jqDeferred = new a.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void l.error("Bad element for imagesLoaded " + (r || t))
      );
    }
    function o(t) {
      this.img = t;
    }
    function r(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var a = t.jQuery,
      l = t.console,
      h = Array.prototype.slice;
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.options = {}),
      (s.prototype.getImages = function() {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
          this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var s = i[n];
            this.addImage(s);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var r = o[n];
              this.addElementBackgroundImages(r);
            }
          }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    return (
      (s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2];
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (s.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e);
      }),
      (s.prototype.addBackground = function(t, e) {
        var i = new r(t, e);
        this.images.push(i);
      }),
      (s.prototype.check = function() {
        function t(t, i, n) {
          setTimeout(function() {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (s.prototype.progress = function(t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && l && l.log("progress: " + i, t, e);
      }),
      (s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (o.prototype = Object.create(e.prototype)),
      (o.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (o.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      }),
      (o.prototype.confirm = function(t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (o.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (o.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (r.prototype = Object.create(o.prototype)),
      (r.prototype.check = function() {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var t = this.getIsImageComplete();
        t &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (r.prototype.confirm = function(t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (s.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery),
          e &&
            ((a = e),
            (a.fn.imagesLoaded = function(t, e) {
              var i = new s(this, t, e);
              return i.jqDeferred.promise(a(this));
            }));
      }),
      s.makeJQueryPlugin(),
      s
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(
          i,
          n
        ) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("flickity"), require("imagesloaded")))
      : (t.Flickity = e(t, t.Flickity, t.imagesLoaded));
  })(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded);
      }),
      (n.imagesLoaded = function() {
        function t(t, i) {
          var n = e.getParentCell(i.img);
          e.cellSizeChange(n && n.element),
            e.options.freeScroll || e.positionSliderAtSelected();
        }
        if (this.options.imagesLoaded) {
          var e = this;
          i(this.slider).on("progress", t);
        }
      }),
      e
    );
  });
