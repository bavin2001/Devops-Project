!(function () {
  "use strict";
  function t(t, o, e, i) {
    var n,
      p = !1,
      s = 0;
    function a() {
      n && clearTimeout(n);
    }
    function r() {
      for (var r = arguments.length, c = new Array(r), f = 0; f < r; f++)
        c[f] = arguments[f];
      var m = this,
        v = Date.now() - s;
      function u() {
        (s = Date.now()), e.apply(m, c);
      }
      function d() {
        n = void 0;
      }
      p ||
        (i && !n && u(),
        a(),
        void 0 === i && v > t
          ? u()
          : !0 !== o && (n = setTimeout(i ? d : u, void 0 === i ? t - v : t)));
    }
    return (
      "boolean" != typeof o && ((i = e), (e = o), (o = void 0)),
      (r.cancel = function () {
        a(), (p = !0);
      }),
      r
    );
  }
  var o = function (t) {
    var o = [],
      e = null,
      i = function () {
        for (var i = arguments.length, n = new Array(i), p = 0; p < i; p++)
          n[p] = arguments[p];
        (o = n),
          e ||
            (e = requestAnimationFrame(function () {
              (e = null), t.apply(void 0, o);
            }));
      };
    return (
      (i.cancel = function () {
        e && (cancelAnimationFrame(e), (e = null));
      }),
      i
    );
  };
  const e = window.jQuery,
    i = e(window),
    n = e(document),
    p = ["tiles", "masonry", "grid"];
  n.on("extendClass.vpf", (t, o) => {
    "vpf" === t.namespace &&
      ((o.prototype.initIsotope = function (t) {
        const o = this;
        if (o.$items_wrap.isotope && p.includes(o.options.layout)) {
          const e = "rtl" === getComputedStyle(o.$items_wrap[0]).direction,
            i = t || {
              itemSelector: ".vp-portfolio__item-wrap",
              layoutMode: "masonry",
              transitionDuration: "0.3s",
              percentPosition: !0,
              originLeft: !e,
              resize: !1,
            };
          o.emitEvent("beforeInitIsotope", [i]),
            o.$items_wrap.isotope(i),
            o.emitEvent("initIsotope", [i]);
        }
      }),
      (o.prototype.destroyIsotope = function () {
        const t = this;
        t.$items_wrap.data("isotope") &&
          (t.$items_wrap.isotope("destroy"), t.emitEvent("destroyIsotope"));
      }));
  }),
    n.on("addItems.vpf", (t, o, e, i) => {
      if ("vpf" === t.namespace && o.$items_wrap.data("isotope")) {
        if (i) {
          const t = o.$items_wrap.find(".vp-portfolio__item-wrap");
          o.$items_wrap.isotope("remove", t),
            o.$items_wrap.prepend(e).isotope("prepended", e);
        } else o.$items_wrap.append(e).isotope("appended", e);
        setTimeout(() => {
          o.initIsotope("layout");
        }, 0);
      }
    }),
    n.on("removeItems.vpf", (t, o, e) => {
      "vpf" === t.namespace &&
        o.$items_wrap.data("isotope") &&
        o.$items_wrap.isotope("remove", e);
    }),
    n.on("init.vpf", (t, o) => {
      "vpf" === t.namespace && o.initIsotope();
    }),
    n.on("imagesLoaded.vpf", (t, o) => {
      "vpf" === t.namespace && o.initIsotope("layout");
    }),
    n.on("destroy.vpf", (t, o) => {
      "vpf" === t.namespace && o.destroyIsotope();
    }),
    n.on("initEvents.vpf", (e, n) => {
      if (
        "vpf" === e.namespace &&
        n.$items_wrap.isotope &&
        p.includes(n.options.layout)
      ) {
        const e = ".vpf-uid-".concat(n.uid);
        i.on(
          "resize".concat(e),
          t(
            100,
            o(() => {
              n.initIsotope("layout");
            })
          )
        );
      }
    }),
    n.on("destroyEvents.vpf", (t, o) => {
      if ("vpf" === t.namespace && p.includes(o.options.layout)) {
        const t = ".vpf-uid-".concat(o.uid);
        i.off("resize".concat(t));
      }
    }),
    n.on(
      "vc-full-width-row",
      (150,
      t(
        150,
        o((t, o) => {
          e(o)
            .find(".vp-portfolio")
            .each(function () {
              this.vpf &&
                this.vpf.initIsotope &&
                this.vpf.$items_wrap.data("isotope") &&
                this.vpf.initIsotope("layout");
            });
        }),
        !1
      ))
    );
})();
