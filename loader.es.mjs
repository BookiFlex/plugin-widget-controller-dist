function K(n, t) {
  for (var o = 0; o < t.length; o++) {
    var e = t[o];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e);
  }
}
function g(n) {
  return function(t) {
    if (Array.isArray(t)) return f(t);
  }(n) || function(t) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
  }(n) || function(t, o) {
    if (t) {
      if (typeof t == "string") return f(t, o);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set") return Array.from(t);
      if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return f(t, o);
    }
  }(n) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function f(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var o = 0, e = new Array(t); o < t; o++) e[o] = n[o];
  return e;
}
var A, m, l, v, O, T = (A = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], m = function() {
  function n(e) {
    var i = e.targetModal, a = e.triggers, s = a === void 0 ? [] : a, c = e.onShow, r = c === void 0 ? function() {
    } : c, u = e.onClose, h = u === void 0 ? function() {
    } : u, w = e.openTrigger, I = w === void 0 ? "data-micromodal-trigger" : w, E = e.closeTrigger, x = E === void 0 ? "data-micromodal-close" : E, p = e.openClass, R = p === void 0 ? "is-open" : p, y = e.disableScroll, B = y !== void 0 && y, k = e.disableFocus, _ = k !== void 0 && k, M = e.awaitCloseAnimation, N = M !== void 0 && M, C = e.awaitOpenAnimation, D = C !== void 0 && C, L = e.debugMode, F = L !== void 0 && L;
    (function(G, H) {
      if (!(G instanceof H)) throw new TypeError("Cannot call a class as a function");
    })(this, n), this.modal = typeof i == "string" ? document.getElementById(i) : i, this.config = { debugMode: F, disableScroll: B, openTrigger: I, closeTrigger: x, openClass: R, onShow: r, onClose: h, awaitCloseAnimation: N, awaitOpenAnimation: D, disableFocus: _ }, s.length > 0 && this.registerTriggers.apply(this, g(s)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  var t, o;
  return t = n, (o = [{ key: "registerTriggers", value: function() {
    for (var e = this, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
    a.filter(Boolean).forEach(function(c) {
      c.addEventListener("click", function(r) {
        return e.showModal(r);
      });
    });
  } }, { key: "showModal", value: function() {
    var e = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
      var a = function s() {
        e.modal.removeEventListener("animationend", s, !1), e.setFocusToFirstNode();
      };
      this.modal.addEventListener("animationend", a, !1);
    } else this.setFocusToFirstNode();
    this.config.onShow(this.modal, this.activeElement, i);
  } }, { key: "closeModal", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = this.modal;
    if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
      var a = this.config.openClass;
      this.modal.addEventListener("animationend", function s() {
        i.classList.remove(a), i.removeEventListener("animationend", s, !1);
      }, !1);
    } else i.classList.remove(this.config.openClass);
  } }, { key: "closeModalByIdOrElement", value: function(e) {
    this.modal = typeof e == "string" ? document.getElementById(e) : e, this.modal && this.closeModal();
  } }, { key: "scrollBehaviour", value: function(e) {
    if (this.config.disableScroll) {
      var i = document.querySelector("body");
      switch (e) {
        case "enable":
          Object.assign(i.style, { overflow: "" });
          break;
        case "disable":
          Object.assign(i.style, { overflow: "hidden" });
      }
    }
  } }, { key: "addEventListeners", value: function() {
    this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
  } }, { key: "removeEventListeners", value: function() {
    this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
  } }, { key: "onClick", value: function(e) {
    (e.target.hasAttribute(this.config.closeTrigger) || e.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e.preventDefault(), e.stopPropagation(), this.closeModal(e));
  } }, { key: "onKeydown", value: function(e) {
    e.keyCode === 27 && this.closeModal(e), e.keyCode === 9 && this.retainFocus(e);
  } }, { key: "getFocusableNodes", value: function() {
    var e = this.modal.querySelectorAll(A);
    return Array.apply(void 0, g(e));
  } }, { key: "setFocusToFirstNode", value: function() {
    var e = this;
    if (!this.config.disableFocus) {
      var i = this.getFocusableNodes();
      if (i.length !== 0) {
        var a = i.filter(function(s) {
          return !s.hasAttribute(e.config.closeTrigger);
        });
        a.length > 0 && a[0].focus(), a.length === 0 && i[0].focus();
      }
    }
  } }, { key: "retainFocus", value: function(e) {
    var i = this.getFocusableNodes();
    if (i.length !== 0) if (i = i.filter(function(s) {
      return s.offsetParent !== null;
    }), this.modal.contains(document.activeElement)) {
      var a = i.indexOf(document.activeElement);
      e.shiftKey && a === 0 && (i[i.length - 1].focus(), e.preventDefault()), !e.shiftKey && i.length > 0 && a === i.length - 1 && (i[0].focus(), e.preventDefault());
    } else i[0].focus();
  } }]) && K(t.prototype, o), n;
}(), l = null, v = function(n) {
  if (typeof id == "string" ? !document.getElementById(n) : !n) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(n, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(n, '"></div>')), !1;
}, O = function(n, t) {
  if (function(e) {
    e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
  }(n), !t) return !0;
  for (var o in t) v(o);
  return !0;
}, { init: function(n) {
  var t = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, n), o = g(document.querySelectorAll("[".concat(t.openTrigger, "]"))), e = function(s, c) {
    var r = [];
    return s.forEach(function(u) {
      var h = u.attributes[c].value;
      r[h] === void 0 && (r[h] = []), r[h].push(u);
    }), r;
  }(o, t.openTrigger);
  if (t.debugMode !== !0 || O(o, e) !== !1) for (var i in e) {
    var a = e[i];
    t.targetModal = i, t.triggers = g(a), l = new m(t);
  }
}, show: function(n, t) {
  var o = t || {};
  o.targetModal = n, o.debugMode === !0 && v(n) === !1 || (l && l.removeEventListeners(), (l = new m(o)).showModal());
}, close: function(n) {
  n ? l.closeModalByIdOrElement(n) : l.closeModal();
} });
typeof window < "u" && (window.MicroModal = T);
const d = {
  OPEN_MODAL: "bflex:open-search-modal",
  SEARCH: "bflex:search-bar:search",
  BOOKING_READY: "bflex:booking-widget:ready",
  BOOKING_REMOVED: "bflex:booking-widget:removed"
}, b = {
  TRIGGER: "[data-open-bflex-widget]"
}, P = `
  <div id="booking-widget" aria-hidden="true" class="bflex-widget">
    <div tabindex="-1" class="bflex-widget__overlay">
      <div role="dialog" aria-modal="true" aria-labelledby="booking-widget-title" class="bflex-widget__container">
        <header class="modal__header">
            <button class="modal__close" aria-label="Close modal" data-micromodal-close=""></button>
        </header>
        <div id="booking-widget-content" class="modal__content">
          <div class="search-bar-wrapper">
            <bflex-search-bar-widget></bflex-search-bar-widget>                
          </div>
          <bflex-booking-widget></bflex-booking-widget>
        </div>
      </div>
    </div>
  </div>
`;
function j(n) {
  ((e = document) => {
    e.querySelectorAll(b.TRIGGER).forEach(n);
  })(), new MutationObserver((e) => {
    e.forEach(({ addedNodes: i }) => {
      i.forEach((a) => {
        var s;
        a.nodeType === Node.ELEMENT_NODE && (a.matches(b.TRIGGER) && n(a), (s = a.querySelectorAll) == null || s.call(a, b.TRIGGER).forEach(n));
      });
    });
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  });
}
const S = (n) => {
  const t = /* @__PURE__ */ new Date();
  return t.setDate(t.getDate() + n), t.toISOString().split("T")[0];
};
class W {
  constructor({ scripts: t, css: o }) {
    this.isBookingWidgetReady = !1, this.isModalShown = !1, this.widgetContainerId = "booking-widget-101", this.scripts = [], this.css = [], t && (t != null && t.length) && (this.scripts = t), o && (o != null && o.length) && (this.css = o), this.loadScripts(), this.loadCss(), this.observeTriggers(), this.registerEventListeners(), this.updateModalHeight();
  }
  loadScripts() {
    const t = (o) => {
      const e = document.createElement("script");
      e.type = "text/javascript", e.src = o, document.body.appendChild(e);
    };
    this.scripts.map((o) => t(o));
  }
  loadCss() {
    const t = (o) => {
      const e = document.createElement("link");
      e.href = o, e.rel = "stylesheet", document.head.appendChild(e);
    };
    this.css.map((o) => t(o));
  }
  observeTriggers() {
    j((t) => {
      t.addEventListener("click", () => {
        if (!this.isBookingWidgetReady) {
          const o = this.getPayloadFromElement(t);
          console.log("[ModalLauncher] Auto-opening with payload:", o), window.dispatchEvent(
            new CustomEvent(d.OPEN_MODAL, {
              detail: {
                payload: o,
                autoSearch: !0
              }
            })
          );
        }
      });
    });
  }
  getPayloadFromElement(t) {
    const { start: o, end: e } = t.dataset;
    return o && e ? { start: o, end: e } : {};
  }
  registerEventListeners() {
    window.addEventListener(d.BOOKING_READY, () => {
      this.isBookingWidgetReady = !0, console.info("[BookingWidget] Ready");
    }), window.addEventListener(d.BOOKING_REMOVED, () => {
      this.isBookingWidgetReady = !1, console.info("[BookingWidget] Removed");
    }), window.addEventListener(d.SEARCH, (t) => {
      !this.isBookingWidgetReady && !this.isModalShown && (console.info("[ModalLauncher] Auto-opening with payload:", t.detail), window.dispatchEvent(
        new CustomEvent(d.OPEN_MODAL, {
          detail: {
            payload: t.detail,
            autoSearch: !0
          }
        })
      ));
    }), window.addEventListener("booking-click", (t) => {
      window.dispatchEvent(
        new CustomEvent(d.SEARCH, {
          detail: {
            start: S(7),
            end: S(8),
            promoCode: ""
          }
        })
      );
    }), window.addEventListener(d.OPEN_MODAL, (t) => {
      this.insertModal(), this.showModal(t.detail);
    }), window.addEventListener("resize", this.updateModalHeight), window.addEventListener("orientationchange", this.updateModalHeight);
  }
  insertModal() {
    if (document.getElementById(this.widgetContainerId)) return;
    const t = document.createElement("div");
    t.id = this.widgetContainerId, t.innerHTML = P, document.body.appendChild(t);
  }
  actionUpdate({ detail: t }) {
    const o = t.action.replaceAll("_", "-"), e = document.getElementById(this.widgetContainerId);
    e.classList.forEach((i) => e.classList.remove(i)), e.classList.add(o);
  }
  showModal({ payload: t, autoSearch: o }) {
    setTimeout(() => {
      T.show("booking-widget", {
        onShow: (e) => {
          console.info(`[Modal: ${e.id}] is shown`), window.addEventListener("bflex:booking-widget:action", this.actionUpdate.bind(this)), this.isModalShown = !0;
        },
        onClose: (e) => {
          var i;
          console.info(`[Modal: ${e.id}] is hidden`), (i = document.getElementById(this.widgetContainerId)) == null || i.remove(), window.removeEventListener("bflex:booking-widget:action", this.actionUpdate.bind(this)), this.isModalShown = !1;
        },
        openTrigger: "data-booking-widget-open",
        openClass: "is-open",
        disableScroll: !0,
        disableFocus: !1,
        awaitOpenAnimation: !1,
        awaitCloseAnimation: !1,
        debugMode: !0
      });
    }, 0), o && t && setTimeout(() => {
      const e = document.getElementById(this.widgetContainerId);
      e == null || e.dispatchEvent(
        new CustomEvent(d.SEARCH, {
          detail: t,
          bubbles: !0,
          composed: !0
        })
      );
    }, 0);
  }
  updateModalHeight() {
    const t = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--bflex-vh", `${t}px`);
  }
}
export {
  W as SearchWidgetController
};
