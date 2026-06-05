// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"TlhM":[function(require,module,exports) {
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function jsxProd(type, config, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  if ("key" in config) {
    maybeKey = {};
    for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
  } else maybeKey = config;
  config = maybeKey.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== config ? config : null,
    props: maybeKey
  };
}
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;
},{}],"plwR":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-jsx-runtime.production.js');
} else {
  module.exports = require('./cjs/react-jsx-runtime.development.js');
}
},{"./cjs/react-jsx-runtime.production.js":"TlhM"}],"zo2T":[function(require,module,exports) {
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FootballPlayerCard = exports.PlayerCard = void 0;
exports.getPlayerTier = getPlayerTier;
const jsx_runtime_1 = require("react/jsx-runtime");
const _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
const POSITIONS = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST", "CF"];
const STORAGE_KEY = "football_player_card";
function getPlayerTier(rating) {
  if (rating >= 92) return "elite";
  if (rating >= 85) return "gold";
  if (rating >= 75) return "silver";
  return "bronze";
}
const PlayerCard = _ref => {
  let player = _ref.player;
  return (0, jsx_runtime_1.jsx)("div", {
    className: "card-wrapper tier-".concat(getPlayerTier(player.overallRating)),
    children: (0, jsx_runtime_1.jsxs)("div", {
      className: "card",
      children: [(0, jsx_runtime_1.jsxs)("div", {
        className: "card-header",
        children: [(0, jsx_runtime_1.jsxs)("div", {
          children: [(0, jsx_runtime_1.jsx)("div", {
            className: "card-rating",
            children: player.overallRating
          }), (0, jsx_runtime_1.jsx)("div", {
            className: "card-position",
            children: player.position
          })]
        }), (0, jsx_runtime_1.jsxs)("div", {
          className: "card-header-right",
          children: [(0, jsx_runtime_1.jsx)("div", {
            className: "card-tier-badge",
            children: getPlayerTier(player.overallRating).toUpperCase()
          }), (0, jsx_runtime_1.jsx)("div", {
            className: "card-club",
            children: player.club
          })]
        })]
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "card-image-wrap",
        children: (0, jsx_runtime_1.jsx)("img", {
          src: player.imageUrl,
          alt: "".concat(player.name, " headshot"),
          className: "card-image"
        })
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "card-name-strip",
        children: (0, jsx_runtime_1.jsx)("span", {
          className: "card-name",
          children: player.name
        })
      }), (0, jsx_runtime_1.jsxs)("div", {
        className: "card-stats",
        children: [(0, jsx_runtime_1.jsxs)("div", {
          className: "stat-col",
          children: [(0, jsx_runtime_1.jsxs)("div", {
            className: "stat-row",
            children: [(0, jsx_runtime_1.jsx)("span", {
              className: "stat-value",
              children: player.pac
            }), (0, jsx_runtime_1.jsx)("span", {
              className: "stat-label",
              children: "PAC"
            })]
          }), (0, jsx_runtime_1.jsxs)("div", {
            className: "stat-row",
            children: [(0, jsx_runtime_1.jsx)("span", {
              className: "stat-value",
              children: player.sho
            }), (0, jsx_runtime_1.jsx)("span", {
              className: "stat-label",
              children: "SHO"
            })]
          }), (0, jsx_runtime_1.jsxs)("div", {
            className: "stat-row",
            children: [(0, jsx_runtime_1.jsx)("span", {
              className: "stat-value",
              children: player.pas
            }), (0, jsx_runtime_1.jsx)("span", {
              className: "stat-label",
              children: "PAS"
            })]
          })]
        }), (0, jsx_runtime_1.jsx)("div", {
          className: "stat-divider"
        }), (0, jsx_runtime_1.jsxs)("div", {
          className: "stat-col",
          children: [(0, jsx_runtime_1.jsxs)("div", {
            className: "stat-row",
            children: [(0, jsx_runtime_1.jsx)("span", {
              className: "stat-value",
              children: player.dri
            }), (0, jsx_runtime_1.jsx)("span", {
              className: "stat-label",
              children: "DRI"
            })]
          }), (0, jsx_runtime_1.jsxs)("div", {
            className: "stat-row",
            children: [(0, jsx_runtime_1.jsx)("span", {
              className: "stat-value",
              children: player.def
            }), (0, jsx_runtime_1.jsx)("span", {
              className: "stat-label",
              children: "DEF"
            })]
          }), (0, jsx_runtime_1.jsxs)("div", {
            className: "stat-row",
            children: [(0, jsx_runtime_1.jsx)("span", {
              className: "stat-value",
              children: player.phy
            }), (0, jsx_runtime_1.jsx)("span", {
              className: "stat-label",
              children: "PHY"
            })]
          })]
        })]
      })]
    })
  });
};
exports.PlayerCard = PlayerCard;
const defaultPlayer = {
  name: "PELE",
  overallRating: 98,
  position: "ST",
  club: "Santos FC",
  imageUrl: "https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg",
  pac: 97,
  sho: 98,
  pas: 83,
  dri: 99,
  def: 41,
  phy: 75
};
function loadPlayer() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return _objectSpread(_objectSpread({}, defaultPlayer), JSON.parse(saved));
    }
    ;
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}
const FootballPlayerCard = () => {
  const _useState = useState(loadPlayer),
    _useState2 = _slicedToArray(_useState, 2),
    player = _useState2[0],
    setPlayer = _useState2[1];
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    } catch (error) {
      console.log("Failed to save player data:", error);
    }
  }, [player]);
  return (0, jsx_runtime_1.jsxs)("div", {
    className: "page",
    children: [(0, jsx_runtime_1.jsx)("header", {
      className: "header",
      children: (0, jsx_runtime_1.jsxs)("div", {
        className: "header-inner",
        children: [(0, jsx_runtime_1.jsx)("p", {
          className: "header-title",
          children: "Football Card Builder"
        }), (0, jsx_runtime_1.jsx)("p", {
          className: "header-subtitle",
          children: "Customize your player card"
        })]
      })
    }), (0, jsx_runtime_1.jsx)("main", {
      className: "main",
      children: (0, jsx_runtime_1.jsxs)("div", {
        className: "layout",
        children: [(0, jsx_runtime_1.jsxs)("div", {
          className: "form-panel",
          children: [(0, jsx_runtime_1.jsxs)("div", {
            children: [(0, jsx_runtime_1.jsx)("p", {
              className: "form-section-title",
              children: "Player Info"
            }), (0, jsx_runtime_1.jsxs)("div", {
              className: "form-group",
              children: [(0, jsx_runtime_1.jsx)("label", {
                className: "label",
                htmlFor: "name",
                children: "Name"
              }), (0, jsx_runtime_1.jsx)("input", {
                id: "name",
                className: "input",
                type: "text",
                value: player.name,
                onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                  name: e.target.value
                }))
              })]
            }), (0, jsx_runtime_1.jsxs)("div", {
              className: "form-row",
              children: [(0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "position",
                  children: "Position"
                }), (0, jsx_runtime_1.jsx)("select", {
                  id: "position",
                  className: "input",
                  value: player.position,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    position: e.target.value
                  })),
                  children: POSITIONS.map(pos => (0, jsx_runtime_1.jsx)("option", {
                    value: pos,
                    children: pos
                  }, pos))
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "overallRating",
                  children: "Overall"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "overallRating",
                  className: "input",
                  type: "number",
                  value: player.overallRating,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    overallRating: Number(e.target.value)
                  }))
                })]
              })]
            }), (0, jsx_runtime_1.jsxs)("div", {
              className: "form-group",
              children: [(0, jsx_runtime_1.jsx)("label", {
                className: "label",
                htmlFor: "club",
                children: "Club"
              }), (0, jsx_runtime_1.jsx)("input", {
                id: "club",
                className: "input",
                type: "text",
                value: player.club,
                onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                  club: e.target.value
                }))
              })]
            }), (0, jsx_runtime_1.jsxs)("div", {
              className: "form-group",
              children: [(0, jsx_runtime_1.jsx)("label", {
                className: "label",
                htmlFor: "imageUrl",
                children: "Image URL"
              }), (0, jsx_runtime_1.jsx)("input", {
                id: "imageUrl",
                className: "input",
                type: "text",
                value: player.imageUrl,
                onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                  imageUrl: e.target.value
                }))
              })]
            })]
          }), (0, jsx_runtime_1.jsxs)("div", {
            children: [(0, jsx_runtime_1.jsx)("p", {
              className: "form-section-title",
              children: "Player Stats"
            }), (0, jsx_runtime_1.jsxs)("div", {
              className: "stats-grid",
              children: [(0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "pac",
                  children: "PAC"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "pac",
                  className: "input",
                  type: "number",
                  value: player.pac,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    pac: Number(e.target.value)
                  }))
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "sho",
                  children: "SHO"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "sho",
                  className: "input",
                  type: "number",
                  value: player.sho,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    sho: Number(e.target.value)
                  }))
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "pas",
                  children: "PAS"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "pas",
                  className: "input",
                  type: "number",
                  value: player.pas,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    pas: Number(e.target.value)
                  }))
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "dri",
                  children: "DRI"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "dri",
                  className: "input",
                  type: "number",
                  value: player.dri,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    dri: Number(e.target.value)
                  }))
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "def",
                  children: "DEF"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "def",
                  className: "input",
                  type: "number",
                  value: player.def,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    def: Number(e.target.value)
                  }))
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "form-group",
                children: [(0, jsx_runtime_1.jsx)("label", {
                  className: "label",
                  htmlFor: "phy",
                  children: "PHY"
                }), (0, jsx_runtime_1.jsx)("input", {
                  id: "phy",
                  className: "input",
                  type: "number",
                  value: player.phy,
                  onChange: e => setPlayer(_objectSpread(_objectSpread({}, player), {}, {
                    phy: Number(e.target.value)
                  }))
                })]
              })]
            })]
          })]
        }), (0, jsx_runtime_1.jsxs)("div", {
          className: "preview-panel",
          children: [(0, jsx_runtime_1.jsx)("p", {
            className: "preview-label",
            children: "Live Preview"
          }), (0, jsx_runtime_1.jsx)("p", {
            className: "preview-hint",
            children: "Updates as you type"
          }), (0, jsx_runtime_1.jsx)("div", {
            className: "preview-box tier-".concat(getPlayerTier(player.overallRating)),
            children: (0, jsx_runtime_1.jsx)(exports.PlayerCard, {
              player: player
            })
          })]
        })]
      })
    })]
  });
};
exports.FootballPlayerCard = FootballPlayerCard;
},{"react/jsx-runtime":"plwR"}]},{},["zo2T"], null)
//# sourceMappingURL=/src.25295403.js.map