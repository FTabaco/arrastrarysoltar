// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _interactjs = require("interactjs");
var _interactjsDefault = parcelHelpers.interopDefault(_interactjs);
// Propiedad de transformación para gestionar la posición de los elementos arrastrables
let transformProp;
// Posiciones iniciales de los elementos arrastrables
const dragPositions = [
    1,
    2,
    3,
    4
].reduce((acc, n)=>{
    acc[`drag${n}`] = {
        x: 0,
        y: 0
    };
    return acc;
}, {});
// Configuración de interacciones máximas
(0, _interactjsDefault.default).maxInteractions(Infinity);
// Configuración de los elementos arrastrables
(0, _interactjsDefault.default)(".js-drag").draggable({
    listeners: {
        start (event) {
            // Al inicio del arrastre, guarda la posición inicial del elemento
            const position = dragPositions[event.target.id];
            position.x = parseInt(event.target.getAttribute("data-x"), 10) || 0;
            position.y = parseInt(event.target.getAttribute("data-y"), 10) || 0;
        },
        move (event) {
            // Durante el arrastre, actualiza la posición del elemento
            const position = dragPositions[event.target.id];
            position.x += event.dx;
            position.y += event.dy;
            // Aplica la transformación de acuerdo a la propiedad compatible
            if (transformProp) event.target.style[transformProp] = "translate(" + position.x + "px, " + position.y + "px)";
            else {
                event.target.style.left = position.x + "px";
                event.target.style.top = position.y + "px";
            }
        },
        end (event) {
            // Al finalizar el arrastre, guarda la posición final del elemento
            const position = dragPositions[event.target.id];
            event.target.setAttribute("data-x", position.x);
            event.target.setAttribute("data-y", position.y);
        }
    }
});
// Configuración de las áreas de destino
setupDropzone("#drop1", "#drag1"); // dropzone #1 acepta el draggable #1
setupDropzone("#drop2", "#drag1, #drag2"); // dropzone #2 acepta el draggable #1 y #2
setupDropzone(".js-drop", "#drag3"); // cada dropzone acepta el draggable #3
/**
 * Configura un elemento dado como una zona de destino.
 *
 * @param {HTMLElement|String} target
 * @param {String} accept
 */ function setupDropzone(target, accept) {
    (0, _interactjsDefault.default)(target).dropzone({
        accept,
        ondropactivate: function(event) {
            // Agrega una clase al activar la zona de destino
            addClass(event.relatedTarget, "-drop-possible");
        },
        ondropdeactivate: function(event) {
            // Elimina la clase al desactivar la zona de destino
            removeClass(event.relatedTarget, "-drop-possible");
        }
    }).on("dropactivate", (event)=>{
        // Incrementa el contador de activación y actualiza el estilo si es necesario
        const active = event.target.getAttribute("active") | 0;
        if (active === 0) {
            addClass(event.target, "-drop-possible");
            event.target.textContent = "\xa1Soltar aqu\xed!";
        }
        event.target.setAttribute("active", active + 1);
    }).on("dropdeactivate", (event)=>{
        // Decrementa el contador de activación y actualiza el estilo si es necesario
        const active = event.target.getAttribute("active") | 0;
        if (active === 1) {
            removeClass(event.target, "-drop-possible");
            event.target.textContent = "Zona de soltado";
        }
        event.target.setAttribute("active", active - 1);
    }).on("dragenter", (event)=>{
        // Agrega una clase al entrar en la zona de destino
        addClass(event.target, "-drop-over");
        event.relatedTarget.textContent = "Estoy dentro";
    }).on("dragleave", (event)=>{
        // Elimina la clase al salir de la zona de destino
        removeClass(event.target, "-drop-over");
        event.relatedTarget.textContent = "Su\xe9ltame";
    }).on("drop", (event)=>{
        // Realiza acciones al soltar el elemento sobre la zona de destino
        removeClass(event.target, "-drop-over");
        event.relatedTarget.textContent = "Ya me has soltado";
    });
}
// Función utilitaria para agregar una clase a un elemento
function addClass(element, className) {
    if (element.classList) return element.classList.add(className);
    else element.className += " " + className;
}
// Función utilitaria para eliminar una clase de un elemento
function removeClass(element, className) {
    if (element.classList) return element.classList.remove(className);
    else element.className = element.className.replace(new RegExp(className + " *", "g"), "");
}
// Verifica la propiedad de transformación compatible en el navegador
(0, _interactjsDefault.default)(document).on("ready", ()=>{
    transformProp = "transform" in document.body.style ? "transform" : "webkitTransform" in document.body.style ? "webkitTransform" : "mozTransform" in document.body.style ? "mozTransform" : "oTransform" in document.body.style ? "oTransform" : "msTransform" in document.body.style ? "msTransform" : null;
});

},{"interactjs":"fpa6e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpa6e":[function(require,module,exports) {
/* interact.js 1.10.27 | https://raw.github.com/taye/interact.js/main/LICENSE */ !function(t1, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t1(t1, e) {
        var n = Object.keys(t1);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t1);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t1, e).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function e(e) {
        for(var n = 1; n < arguments.length; n++){
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? t1(Object(r), !0).forEach(function(t1) {
                a(e, t1, r[t1]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t1(Object(r)).forEach(function(t1) {
                Object.defineProperty(e, t1, Object.getOwnPropertyDescriptor(r, t1));
            });
        }
        return e;
    }
    function n(t1) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
            return typeof t1;
        } : function(t1) {
            return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
        }, n(t1);
    }
    function r(t1, e) {
        if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t1, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t1, d(r.key), r);
        }
    }
    function o(t1, e, n) {
        return e && i(t1.prototype, e), n && i(t1, n), Object.defineProperty(t1, "prototype", {
            writable: !1
        }), t1;
    }
    function a(t1, e, n) {
        return (e = d(e)) in t1 ? Object.defineProperty(t1, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t1[e] = n, t1;
    }
    function s(t1, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t1.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t1,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t1, "prototype", {
            writable: !1
        }), e && l(t1, e);
    }
    function c(t1) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t1) {
            return t1.__proto__ || Object.getPrototypeOf(t1);
        }, c(t1);
    }
    function l(t1, e) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t1, e) {
            return t1.__proto__ = e, t1;
        }, l(t1, e);
    }
    function u(t1) {
        if (void 0 === t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t1;
    }
    function p(t1) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (t1) {
                return !1;
            }
        }();
        return function() {
            var n, r = c(t1);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return function(t1, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return u(t1);
            }(this, n);
        };
    }
    function f() {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t1, e, n) {
            var r = function(t1, e) {
                for(; !Object.prototype.hasOwnProperty.call(t1, e) && null !== (t1 = c(t1)););
                return t1;
            }(t1, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(arguments.length < 3 ? t1 : n) : i.value;
            }
        }, f.apply(this, arguments);
    }
    function d(t1) {
        var e = function(t1, e) {
            if ("object" != typeof t1 || null === t1) return t1;
            var n = t1[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t1, e || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t1);
        }(t1, "string");
        return "symbol" == typeof e ? e : e + "";
    }
    var h = function(t1) {
        return !(!t1 || !t1.Window) && t1 instanceof t1.Window;
    }, v = void 0, g = void 0;
    function m(t1) {
        v = t1;
        var e = t1.document.createTextNode("");
        e.ownerDocument !== t1.document && "function" == typeof t1.wrap && t1.wrap(e) === e && (t1 = t1.wrap(t1)), g = t1;
    }
    function y(t1) {
        return h(t1) ? t1 : (t1.ownerDocument || t1).defaultView || g.window;
    }
    "undefined" != typeof window && window && m(window);
    var b = function(t1) {
        return !!t1 && "object" === n(t1);
    }, x = function(t1) {
        return "function" == typeof t1;
    }, w = {
        window: function(t1) {
            return t1 === g || h(t1);
        },
        docFrag: function(t1) {
            return b(t1) && 11 === t1.nodeType;
        },
        object: b,
        func: x,
        number: function(t1) {
            return "number" == typeof t1;
        },
        bool: function(t1) {
            return "boolean" == typeof t1;
        },
        string: function(t1) {
            return "string" == typeof t1;
        },
        element: function(t1) {
            if (!t1 || "object" !== n(t1)) return !1;
            var e = y(t1) || g;
            return /object|function/.test("undefined" == typeof Element ? "undefined" : n(Element)) ? t1 instanceof Element || t1 instanceof e.Element : 1 === t1.nodeType && "string" == typeof t1.nodeName;
        },
        plainObject: function(t1) {
            return b(t1) && !!t1.constructor && /function Object\b/.test(t1.constructor.toString());
        },
        array: function(t1) {
            return b(t1) && void 0 !== t1.length && x(t1.splice);
        }
    };
    function E(t1) {
        var e = t1.interaction;
        if ("drag" === e.prepared.name) {
            var n = e.prepared.axis;
            "x" === n ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : "y" === n && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
    }
    function T(t1) {
        var e = t1.iEvent, n = t1.interaction;
        if ("drag" === n.prepared.name) {
            var r = n.prepared.axis;
            if ("x" === r || "y" === r) {
                var i = "x" === r ? "y" : "x";
                e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
            }
        }
    }
    var S = {
        id: "actions/drag",
        install: function(t1) {
            var e = t1.actions, n = t1.Interactable, r = t1.defaults;
            n.prototype.draggable = S.draggable, e.map.drag = S, e.methodDict.drag = "draggable", r.actions.drag = S.defaults;
        },
        listeners: {
            "interactions:before-action-move": E,
            "interactions:action-resume": E,
            "interactions:action-move": T,
            "auto-start:check": function(t1) {
                var e = t1.interaction, n = t1.interactable, r = t1.buttons, i = n.options.drag;
                if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (r & n.options.drag.mouseButtons))) return t1.action = {
                    name: "drag",
                    axis: "start" === i.lockAxis ? i.startAxis : i.lockAxis
                }, !1;
            }
        },
        draggable: function(t1) {
            return w.object(t1) ? (this.options.drag.enabled = !1 !== t1.enabled, this.setPerAction("drag", t1), this.setOnEvents("drag", t1), /^(xy|x|y|start)$/.test(t1.lockAxis) && (this.options.drag.lockAxis = t1.lockAxis), /^(xy|x|y)$/.test(t1.startAxis) && (this.options.drag.startAxis = t1.startAxis), this) : w.bool(t1) ? (this.options.drag.enabled = t1, this) : this.options.drag;
        },
        beforeMove: E,
        move: T,
        defaults: {
            startAxis: "xy",
            lockAxis: "xy"
        },
        getCursor: function() {
            return "move";
        },
        filterEventType: function(t1) {
            return 0 === t1.search("drag");
        }
    }, _ = S, P = {
        init: function(t1) {
            var e = t1;
            P.document = e.document, P.DocumentFragment = e.DocumentFragment || O, P.SVGElement = e.SVGElement || O, P.SVGSVGElement = e.SVGSVGElement || O, P.SVGElementInstance = e.SVGElementInstance || O, P.Element = e.Element || O, P.HTMLElement = e.HTMLElement || P.Element, P.Event = e.Event, P.Touch = e.Touch || O, P.PointerEvent = e.PointerEvent || e.MSPointerEvent;
        },
        document: null,
        DocumentFragment: null,
        SVGElement: null,
        SVGSVGElement: null,
        SVGElementInstance: null,
        Element: null,
        HTMLElement: null,
        Event: null,
        Touch: null,
        PointerEvent: null
    };
    function O() {}
    var k = P;
    var D = {
        init: function(t1) {
            var e = k.Element, n = t1.navigator || {};
            D.supportsTouch = "ontouchstart" in t1 || w.func(t1.DocumentTouch) && k.document instanceof t1.DocumentTouch, D.supportsPointerEvent = !1 !== n.pointerEnabled && !!k.PointerEvent, D.isIOS = /iP(hone|od|ad)/.test(n.platform), D.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), D.isIe9 = /MSIE 9/.test(n.userAgent), D.isOperaMobile = "Opera" === n.appName && D.supportsTouch && /Presto/.test(n.userAgent), D.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", D.pEventTypes = D.supportsPointerEvent ? k.PointerEvent === t1.MSPointerEvent ? {
                up: "MSPointerUp",
                down: "MSPointerDown",
                over: "mouseover",
                out: "mouseout",
                move: "MSPointerMove",
                cancel: "MSPointerCancel"
            } : {
                up: "pointerup",
                down: "pointerdown",
                over: "pointerover",
                out: "pointerout",
                move: "pointermove",
                cancel: "pointercancel"
            } : null, D.wheelEvent = k.document && "onmousewheel" in k.document ? "mousewheel" : "wheel";
        },
        supportsTouch: null,
        supportsPointerEvent: null,
        isIOS7: null,
        isIOS: null,
        isIe9: null,
        isOperaMobile: null,
        prefixedMatchesSelector: null,
        pEventTypes: null,
        wheelEvent: null
    };
    var I = D;
    function M(t1, e) {
        if (t1.contains) return t1.contains(e);
        for(; e;){
            if (e === t1) return !0;
            e = e.parentNode;
        }
        return !1;
    }
    function z(t1, e) {
        for(; w.element(t1);){
            if (R(t1, e)) return t1;
            t1 = A(t1);
        }
        return null;
    }
    function A(t1) {
        var e = t1.parentNode;
        if (w.docFrag(e)) {
            for(; (e = e.host) && w.docFrag(e););
            return e;
        }
        return e;
    }
    function R(t1, e) {
        return g !== v && (e = e.replace(/\/deep\//g, " ")), t1[I.prefixedMatchesSelector](e);
    }
    var C = function(t1) {
        return t1.parentNode || t1.host;
    };
    function j(t1, e) {
        for(var n, r = [], i = t1; (n = C(i)) && i !== e && n !== i.ownerDocument;)r.unshift(i), i = n;
        return r;
    }
    function F(t1, e, n) {
        for(; w.element(t1);){
            if (R(t1, e)) return !0;
            if ((t1 = A(t1)) === n) return R(t1, e);
        }
        return !1;
    }
    function X(t1) {
        return t1.correspondingUseElement || t1;
    }
    function Y(t1) {
        var e = t1 instanceof k.SVGElement ? t1.getBoundingClientRect() : t1.getClientRects()[0];
        return e && {
            left: e.left,
            right: e.right,
            top: e.top,
            bottom: e.bottom,
            width: e.width || e.right - e.left,
            height: e.height || e.bottom - e.top
        };
    }
    function L(t1) {
        var e, n = Y(t1);
        if (!I.isIOS7 && n) {
            var r = {
                x: (e = (e = y(t1)) || g).scrollX || e.document.documentElement.scrollLeft,
                y: e.scrollY || e.document.documentElement.scrollTop
            };
            n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
    }
    function q(t1) {
        for(var e = []; t1;)e.push(t1), t1 = A(t1);
        return e;
    }
    function B(t1) {
        return !!w.string(t1) && (k.document.querySelector(t1), !0);
    }
    function V(t1, e) {
        for(var n in e)t1[n] = e[n];
        return t1;
    }
    function W(t1, e, n) {
        return "parent" === t1 ? A(n) : "self" === t1 ? e.getRect(n) : z(n, t1);
    }
    function G(t1, e, n, r) {
        var i = t1;
        return w.string(i) ? i = W(i, e, n) : w.func(i) && (i = i.apply(void 0, r)), w.element(i) && (i = L(i)), i;
    }
    function N(t1) {
        return t1 && {
            x: "x" in t1 ? t1.x : t1.left,
            y: "y" in t1 ? t1.y : t1.top
        };
    }
    function U(t1) {
        return !t1 || "x" in t1 && "y" in t1 || ((t1 = V({}, t1)).x = t1.left || 0, t1.y = t1.top || 0, t1.width = t1.width || (t1.right || 0) - t1.x, t1.height = t1.height || (t1.bottom || 0) - t1.y), t1;
    }
    function H(t1, e, n) {
        t1.left && (e.left += n.x), t1.right && (e.right += n.x), t1.top && (e.top += n.y), t1.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
    }
    function K(t1, e, n) {
        var r = n && t1.options[n];
        return N(G(r && r.origin || t1.options.origin, t1, e, [
            t1 && e
        ])) || {
            x: 0,
            y: 0
        };
    }
    function $(t1, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t1) {
            return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, w.string(t1) && -1 !== t1.search(" ") && (t1 = J(t1)), w.array(t1)) return t1.forEach(function(t1) {
            return $(t1, e, n, r);
        }), r;
        if (w.object(t1) && (e = t1, t1 = ""), w.func(e) && n(t1)) r[t1] = r[t1] || [], r[t1].push(e);
        else if (w.array(e)) for(var i = 0, o = e; i < o.length; i++){
            var a = o[i];
            $(t1, a, n, r);
        }
        else if (w.object(e)) for(var s in e)$(J(s).map(function(e) {
            return "".concat(t1).concat(e);
        }), e[s], n, r);
        return r;
    }
    function J(t1) {
        return t1.trim().split(/ +/);
    }
    var Q = function(t1, e) {
        return Math.sqrt(t1 * t1 + e * e);
    }, Z = [
        "webkit",
        "moz"
    ];
    function tt(t1, e) {
        t1.__set || (t1.__set = {});
        var n = function(n) {
            if (Z.some(function(t1) {
                return 0 === n.indexOf(t1);
            })) return 1;
            "function" != typeof t1[n] && "__set" !== n && Object.defineProperty(t1, n, {
                get: function() {
                    return n in t1.__set ? t1.__set[n] : t1.__set[n] = e[n];
                },
                set: function(e) {
                    t1.__set[n] = e;
                },
                configurable: !0
            });
        };
        for(var r in e)n(r);
        return t1;
    }
    function et(t1, e) {
        t1.page = t1.page || {}, t1.page.x = e.page.x, t1.page.y = e.page.y, t1.client = t1.client || {}, t1.client.x = e.client.x, t1.client.y = e.client.y, t1.timeStamp = e.timeStamp;
    }
    function nt(t1) {
        t1.page.x = 0, t1.page.y = 0, t1.client.x = 0, t1.client.y = 0;
    }
    function rt(t1) {
        return t1 instanceof k.Event || t1 instanceof k.Touch;
    }
    function it(t1, e, n) {
        return t1 = t1 || "page", (n = n || {}).x = e[t1 + "X"], n.y = e[t1 + "Y"], n;
    }
    function ot(t1, e) {
        return e = e || {
            x: 0,
            y: 0
        }, I.isOperaMobile && rt(t1) ? (it("screen", t1, e), e.x += window.scrollX, e.y += window.scrollY) : it("page", t1, e), e;
    }
    function at(t1) {
        return w.number(t1.pointerId) ? t1.pointerId : t1.identifier;
    }
    function st(t1, e, n) {
        var r = e.length > 1 ? lt(e) : e[0];
        ot(r, t1.page), function(t1, e) {
            e = e || {}, I.isOperaMobile && rt(t1) ? it("screen", t1, e) : it("client", t1, e);
        }(r, t1.client), t1.timeStamp = n;
    }
    function ct(t1) {
        var e = [];
        return w.array(t1) ? (e[0] = t1[0], e[1] = t1[1]) : "touchend" === t1.type ? 1 === t1.touches.length ? (e[0] = t1.touches[0], e[1] = t1.changedTouches[0]) : 0 === t1.touches.length && (e[0] = t1.changedTouches[0], e[1] = t1.changedTouches[1]) : (e[0] = t1.touches[0], e[1] = t1.touches[1]), e;
    }
    function lt(t1) {
        for(var e = {
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0
        }, n = 0; n < t1.length; n++){
            var r = t1[n];
            for(var i in e)e[i] += r[i];
        }
        for(var o in e)e[o] /= t1.length;
        return e;
    }
    function ut(t1) {
        if (!t1.length) return null;
        var e = ct(t1), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return {
            x: n,
            y: r,
            left: n,
            top: r,
            right: i,
            bottom: o,
            width: i - n,
            height: o - r
        };
    }
    function pt(t1, e) {
        var n = e + "X", r = e + "Y", i = ct(t1), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return Q(o, a);
    }
    function ft(t1, e) {
        var n = e + "X", r = e + "Y", i = ct(t1), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
    }
    function dt(t1) {
        return w.string(t1.pointerType) ? t1.pointerType : w.number(t1.pointerType) ? [
            void 0,
            void 0,
            "touch",
            "pen",
            "mouse"
        ][t1.pointerType] : /touch/.test(t1.type || "") || t1 instanceof k.Touch ? "touch" : "mouse";
    }
    function ht(t1) {
        var e = w.func(t1.composedPath) ? t1.composedPath() : t1.path;
        return [
            X(e ? e[0] : t1.target),
            X(t1.currentTarget)
        ];
    }
    var vt = function() {
        function t1(e) {
            r(this, t1), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return o(t1, [
            {
                key: "preventDefault",
                value: function() {}
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.propagationStopped = !0;
                }
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0;
                }
            }
        ]), t1;
    }();
    Object.defineProperty(vt.prototype, "interaction", {
        get: function() {
            return this._interaction._proxy;
        },
        set: function() {}
    });
    var gt = function(t1, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            t1.push(r);
        }
        return t1;
    }, mt = function(t1) {
        return gt([], t1);
    }, yt = function(t1, e) {
        for(var n = 0; n < t1.length; n++)if (e(t1[n], n, t1)) return n;
        return -1;
    }, bt = function(t1, e) {
        return t1[yt(t1, e)];
    }, xt = function(t1) {
        s(n, t1);
        var e = p(n);
        function n(t1, i, o) {
            var a;
            r(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
            var s = "dragleave" === o ? t1.prev : t1.cur, c = s.element, l = s.dropzone;
            return a.type = o, a.target = c, a.currentTarget = c, a.dropzone = l, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
        }
        return o(n, [
            {
                key: "reject",
                value: function() {
                    var t1 = this, e = this._interaction.dropState;
                    if ("dropactivate" === this.type || this.dropzone && e.cur.dropzone === this.dropzone && e.cur.element === this.target) {
                        if (e.prev.dropzone = this.dropzone, e.prev.element = this.target, e.rejected = !0, e.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
                            var r = e.activeDrops, i = yt(r, function(e) {
                                var n = e.dropzone, r = e.element;
                                return n === t1.dropzone && r === t1.target;
                            });
                            e.activeDrops.splice(i, 1);
                            var o = new n(e, this.dragEvent, "dropdeactivate");
                            o.dropzone = this.dropzone, o.target = this.target, this.dropzone.fire(o);
                        } else this.dropzone.fire(new n(e, this.dragEvent, "dragleave"));
                    }
                }
            },
            {
                key: "preventDefault",
                value: function() {}
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.propagationStopped = !0;
                }
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0;
                }
            }
        ]), n;
    }(vt);
    function wt(t1, e) {
        for(var n = 0, r = t1.slice(); n < r.length; n++){
            var i = r[n], o = i.dropzone, a = i.element;
            e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
    }
    function Et(t1, e) {
        for(var n = function(t1, e) {
            for(var n = [], r = 0, i = t1.interactables.list; r < i.length; r++){
                var o = i[r];
                if (o.options.drop.enabled) {
                    var a = o.options.drop.accept;
                    if (!(w.element(a) && a !== e || w.string(a) && !R(e, a) || w.func(a) && !a({
                        dropzone: o,
                        draggableElement: e
                    }))) for(var s = 0, c = o.getAllElements(); s < c.length; s++){
                        var l = c[s];
                        l !== e && n.push({
                            dropzone: o,
                            element: l,
                            rect: o.getRect(l)
                        });
                    }
                }
            }
            return n;
        }(t1, e), r = 0; r < n.length; r++){
            var i = n[r];
            i.rect = i.dropzone.getRect(i.element);
        }
        return n;
    }
    function Tt(t1, e, n) {
        for(var r = t1.dropState, i = t1.interactable, o = t1.element, a = [], s = 0, c = r.activeDrops; s < c.length; s++){
            var l = c[s], u = l.dropzone, p = l.element, f = l.rect, d = u.dropCheck(e, n, i, o, p, f);
            a.push(d ? p : null);
        }
        var h = function(t1) {
            for(var e, n, r, i = [], o = 0; o < t1.length; o++){
                var a = t1[o], s = t1[e];
                if (a && o !== e) {
                    if (s) {
                        var c = C(a), l = C(s);
                        if (c !== a.ownerDocument) {
                            if (l !== a.ownerDocument) {
                                if (c !== l) {
                                    i = i.length ? i : j(s);
                                    var u = void 0;
                                    if (s instanceof k.HTMLElement && a instanceof k.SVGElement && !(a instanceof k.SVGSVGElement)) {
                                        if (a === l) continue;
                                        u = a.ownerSVGElement;
                                    } else u = a;
                                    for(var p = j(u, s.ownerDocument), f = 0; p[f] && p[f] === i[f];)f++;
                                    var d = [
                                        p[f - 1],
                                        p[f],
                                        i[f]
                                    ];
                                    if (d[0]) for(var h = d[0].lastChild; h;){
                                        if (h === d[1]) {
                                            e = o, i = p;
                                            break;
                                        }
                                        if (h === d[2]) break;
                                        h = h.previousSibling;
                                    }
                                } else r = s, (parseInt(y(n = a).getComputedStyle(n).zIndex, 10) || 0) >= (parseInt(y(r).getComputedStyle(r).zIndex, 10) || 0) && (e = o);
                            } else e = o;
                        }
                    } else e = o;
                }
            }
            return e;
        }(a);
        return r.activeDrops[h] || null;
    }
    function St(t1, e, n) {
        var r = t1.dropState, i = {
            enter: null,
            leave: null,
            activate: null,
            deactivate: null,
            move: null,
            drop: null
        };
        return "dragstart" === n.type && (i.activate = new xt(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), "dragend" === n.type && (i.deactivate = new xt(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new xt(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new xt(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), "dragend" === n.type && r.cur.dropzone && (i.drop = new xt(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), "dragmove" === n.type && r.cur.dropzone && (i.move = new xt(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
    }
    function _t(t1, e) {
        var n = t1.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && wt(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
    }
    function Pt(t1, e) {
        var n = t1.interaction, r = t1.iEvent, i = t1.event;
        if ("dragmove" === r.type || "dragend" === r.type) {
            var o = n.dropState;
            e.dynamicDrop && (o.activeDrops = Et(e, n.element));
            var a = r, s = Tt(n, a, i);
            o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element, o.cur.dropzone = s && s.dropzone, o.cur.element = s && s.element, o.events = St(n, 0, a);
        }
    }
    var Ot = {
        id: "actions/drop",
        install: function(t1) {
            var e = t1.actions, n = t1.interactStatic, r = t1.Interactable, i = t1.defaults;
            t1.usePlugin(_), r.prototype.dropzone = function(t1) {
                return function(t1, e) {
                    if (w.object(e)) {
                        if (t1.options.drop.enabled = !1 !== e.enabled, e.listeners) {
                            var n = $(e.listeners), r = Object.keys(n).reduce(function(t1, e) {
                                return t1[/^(enter|leave)/.test(e) ? "drag".concat(e) : /^(activate|deactivate|move)/.test(e) ? "drop".concat(e) : e] = n[e], t1;
                            }, {}), i = t1.options.drop.listeners;
                            i && t1.off(i), t1.on(r), t1.options.drop.listeners = r;
                        }
                        return w.func(e.ondrop) && t1.on("drop", e.ondrop), w.func(e.ondropactivate) && t1.on("dropactivate", e.ondropactivate), w.func(e.ondropdeactivate) && t1.on("dropdeactivate", e.ondropdeactivate), w.func(e.ondragenter) && t1.on("dragenter", e.ondragenter), w.func(e.ondragleave) && t1.on("dragleave", e.ondragleave), w.func(e.ondropmove) && t1.on("dropmove", e.ondropmove), /^(pointer|center)$/.test(e.overlap) ? t1.options.drop.overlap = e.overlap : w.number(e.overlap) && (t1.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)), "accept" in e && (t1.options.drop.accept = e.accept), "checker" in e && (t1.options.drop.checker = e.checker), t1;
                    }
                    if (w.bool(e)) return t1.options.drop.enabled = e, t1;
                    return t1.options.drop;
                }(this, t1);
            }, r.prototype.dropCheck = function(t1, e, n, r, i, o) {
                return function(t1, e, n, r, i, o, a) {
                    var s = !1;
                    if (!(a = a || t1.getRect(o))) return !!t1.options.drop.checker && t1.options.drop.checker(e, n, s, t1, o, r, i);
                    var c = t1.options.drop.overlap;
                    if ("pointer" === c) {
                        var l = K(r, i, "drag"), u = ot(e);
                        u.x += l.x, u.y += l.y;
                        var p = u.x > a.left && u.x < a.right, f = u.y > a.top && u.y < a.bottom;
                        s = p && f;
                    }
                    var d = r.getRect(i);
                    if (d && "center" === c) {
                        var h = d.left + d.width / 2, v = d.top + d.height / 2;
                        s = h >= a.left && h <= a.right && v >= a.top && v <= a.bottom;
                    }
                    if (d && w.number(c)) s = Math.max(0, Math.min(a.right, d.right) - Math.max(a.left, d.left)) * Math.max(0, Math.min(a.bottom, d.bottom) - Math.max(a.top, d.top)) / (d.width * d.height) >= c;
                    t1.options.drop.checker && (s = t1.options.drop.checker(e, n, s, t1, o, r, i));
                    return s;
                }(this, t1, e, n, r, i, o);
            }, n.dynamicDrop = function(e) {
                return w.bool(e) ? (t1.dynamicDrop = e, n) : t1.dynamicDrop;
            }, V(e.phaselessTypes, {
                dragenter: !0,
                dragleave: !0,
                dropactivate: !0,
                dropdeactivate: !0,
                dropmove: !0,
                drop: !0
            }), e.methodDict.drop = "dropzone", t1.dynamicDrop = !1, i.actions.drop = Ot.defaults;
        },
        listeners: {
            "interactions:before-action-start": function(t1) {
                var e = t1.interaction;
                "drag" === e.prepared.name && (e.dropState = {
                    cur: {
                        dropzone: null,
                        element: null
                    },
                    prev: {
                        dropzone: null,
                        element: null
                    },
                    rejected: null,
                    events: null,
                    activeDrops: []
                });
            },
            "interactions:after-action-start": function(t1, e) {
                var n = t1.interaction, r = (t1.event, t1.iEvent);
                if ("drag" === n.prepared.name) {
                    var i = n.dropState;
                    i.activeDrops = [], i.events = {}, i.activeDrops = Et(e, n.element), i.events = St(n, 0, r), i.events.activate && (wt(i.activeDrops, i.events.activate), e.fire("actions/drop:start", {
                        interaction: n,
                        dragEvent: r
                    }));
                }
            },
            "interactions:action-move": Pt,
            "interactions:after-action-move": function(t1, e) {
                var n = t1.interaction, r = t1.iEvent;
                if ("drag" === n.prepared.name) {
                    var i = n.dropState;
                    _t(n, i.events), e.fire("actions/drop:move", {
                        interaction: n,
                        dragEvent: r
                    }), i.events = {};
                }
            },
            "interactions:action-end": function(t1, e) {
                if ("drag" === t1.interaction.prepared.name) {
                    var n = t1.interaction, r = t1.iEvent;
                    Pt(t1, e), _t(n, n.dropState.events), e.fire("actions/drop:end", {
                        interaction: n,
                        dragEvent: r
                    });
                }
            },
            "interactions:stop": function(t1) {
                var e = t1.interaction;
                if ("drag" === e.prepared.name) {
                    var n = e.dropState;
                    n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
                }
            }
        },
        getActiveDrops: Et,
        getDrop: Tt,
        getDropEvents: St,
        fireDropEvents: _t,
        filterEventType: function(t1) {
            return 0 === t1.search("drag") || 0 === t1.search("drop");
        },
        defaults: {
            enabled: !1,
            accept: null,
            overlap: "pointer"
        }
    }, kt = Ot;
    function Dt(t1) {
        var e = t1.interaction, n = t1.iEvent, r = t1.phase;
        if ("gesture" === e.prepared.name) {
            var i = e.pointers.map(function(t1) {
                return t1.pointer;
            }), o = "start" === r, a = "end" === r, s = e.interactable.options.deltaSource;
            if (n.touches = [
                i[0],
                i[1]
            ], o) n.distance = pt(i, s), n.box = ut(i), n.scale = 1, n.ds = 0, n.angle = ft(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
            else if (a || e.pointers.length < 2) {
                var c = e.prevEvent;
                n.distance = c.distance, n.box = c.box, n.scale = c.scale, n.ds = 0, n.angle = c.angle, n.da = 0;
            } else n.distance = pt(i, s), n.box = ut(i), n.scale = n.distance / e.gesture.startDistance, n.angle = ft(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
            e.gesture.distance = n.distance, e.gesture.angle = n.angle, w.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
    }
    var It = {
        id: "actions/gesture",
        before: [
            "actions/drag",
            "actions/resize"
        ],
        install: function(t1) {
            var e = t1.actions, n = t1.Interactable, r = t1.defaults;
            n.prototype.gesturable = function(t1) {
                return w.object(t1) ? (this.options.gesture.enabled = !1 !== t1.enabled, this.setPerAction("gesture", t1), this.setOnEvents("gesture", t1), this) : w.bool(t1) ? (this.options.gesture.enabled = t1, this) : this.options.gesture;
            }, e.map.gesture = It, e.methodDict.gesture = "gesturable", r.actions.gesture = It.defaults;
        },
        listeners: {
            "interactions:action-start": Dt,
            "interactions:action-move": Dt,
            "interactions:action-end": Dt,
            "interactions:new": function(t1) {
                t1.interaction.gesture = {
                    angle: 0,
                    distance: 0,
                    scale: 1,
                    startAngle: 0,
                    startDistance: 0
                };
            },
            "auto-start:check": function(t1) {
                if (!(t1.interaction.pointers.length < 2)) {
                    var e = t1.interactable.options.gesture;
                    if (e && e.enabled) return t1.action = {
                        name: "gesture"
                    }, !1;
                }
            }
        },
        defaults: {},
        getCursor: function() {
            return "";
        },
        filterEventType: function(t1) {
            return 0 === t1.search("gesture");
        }
    }, Mt = It;
    function zt(t1, e, n, r, i, o, a) {
        if (!e) return !1;
        if (!0 === e) {
            var s = w.number(o.width) ? o.width : o.right - o.left, c = w.number(o.height) ? o.height : o.bottom - o.top;
            if (a = Math.min(a, Math.abs(("left" === t1 || "right" === t1 ? s : c) / 2)), s < 0 && ("left" === t1 ? t1 = "right" : "right" === t1 && (t1 = "left")), c < 0 && ("top" === t1 ? t1 = "bottom" : "bottom" === t1 && (t1 = "top")), "left" === t1) {
                var l = s >= 0 ? o.left : o.right;
                return n.x < l + a;
            }
            if ("top" === t1) {
                var u = c >= 0 ? o.top : o.bottom;
                return n.y < u + a;
            }
            if ("right" === t1) return n.x > (s >= 0 ? o.right : o.left) - a;
            if ("bottom" === t1) return n.y > (c >= 0 ? o.bottom : o.top) - a;
        }
        return !!w.element(r) && (w.element(e) ? e === r : F(r, e, i));
    }
    function At(t1) {
        var e = t1.iEvent, n = t1.interaction;
        if ("resize" === n.prepared.name && n.resizeAxes) {
            var r = e;
            n.interactable.options.resize.square ? ("y" === n.resizeAxes ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, "x" === n.resizeAxes ? r.delta.y = 0 : "y" === n.resizeAxes && (r.delta.x = 0));
        }
    }
    var Rt, Ct, jt = {
        id: "actions/resize",
        before: [
            "actions/drag"
        ],
        install: function(t1) {
            var e = t1.actions, n = t1.browser, r = t1.Interactable, i = t1.defaults;
            jt.cursors = function(t1) {
                return t1.isIe9 ? {
                    x: "e-resize",
                    y: "s-resize",
                    xy: "se-resize",
                    top: "n-resize",
                    left: "w-resize",
                    bottom: "s-resize",
                    right: "e-resize",
                    topleft: "se-resize",
                    bottomright: "se-resize",
                    topright: "ne-resize",
                    bottomleft: "ne-resize"
                } : {
                    x: "ew-resize",
                    y: "ns-resize",
                    xy: "nwse-resize",
                    top: "ns-resize",
                    left: "ew-resize",
                    bottom: "ns-resize",
                    right: "ew-resize",
                    topleft: "nwse-resize",
                    bottomright: "nwse-resize",
                    topright: "nesw-resize",
                    bottomleft: "nesw-resize"
                };
            }(n), jt.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(e) {
                return function(t1, e, n) {
                    if (w.object(e)) return t1.options.resize.enabled = !1 !== e.enabled, t1.setPerAction("resize", e), t1.setOnEvents("resize", e), w.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis) ? t1.options.resize.axis = e.axis : null === e.axis && (t1.options.resize.axis = n.defaults.actions.resize.axis), w.bool(e.preserveAspectRatio) ? t1.options.resize.preserveAspectRatio = e.preserveAspectRatio : w.bool(e.square) && (t1.options.resize.square = e.square), t1;
                    if (w.bool(e)) return t1.options.resize.enabled = e, t1;
                    return t1.options.resize;
                }(this, e, t1);
            }, e.map.resize = jt, e.methodDict.resize = "resizable", i.actions.resize = jt.defaults;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.resizeAxes = "xy";
            },
            "interactions:action-start": function(t1) {
                !function(t1) {
                    var e = t1.iEvent, n = t1.interaction;
                    if ("resize" === n.prepared.name && n.prepared.edges) {
                        var r = e, i = n.rect;
                        n._rects = {
                            start: V({}, i),
                            corrected: V({}, i),
                            previous: V({}, i),
                            delta: {
                                left: 0,
                                right: 0,
                                width: 0,
                                top: 0,
                                bottom: 0,
                                height: 0
                            }
                        }, r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
                    }
                }(t1), At(t1);
            },
            "interactions:action-move": function(t1) {
                !function(t1) {
                    var e = t1.iEvent, n = t1.interaction;
                    if ("resize" === n.prepared.name && n.prepared.edges) {
                        var r = e, i = n.interactable.options.resize.invert, o = "reposition" === i || "negate" === i, a = n.rect, s = n._rects, c = s.start, l = s.corrected, u = s.delta, p = s.previous;
                        if (V(p, l), o) {
                            if (V(l, a), "reposition" === i) {
                                if (l.top > l.bottom) {
                                    var f = l.top;
                                    l.top = l.bottom, l.bottom = f;
                                }
                                if (l.left > l.right) {
                                    var d = l.left;
                                    l.left = l.right, l.right = d;
                                }
                            }
                        } else l.top = Math.min(a.top, c.bottom), l.bottom = Math.max(a.bottom, c.top), l.left = Math.min(a.left, c.right), l.right = Math.max(a.right, c.left);
                        for(var h in l.width = l.right - l.left, l.height = l.bottom - l.top, l)u[h] = l[h] - p[h];
                        r.edges = n.prepared.edges, r.rect = l, r.deltaRect = u;
                    }
                }(t1), At(t1);
            },
            "interactions:action-end": function(t1) {
                var e = t1.iEvent, n = t1.interaction;
                if ("resize" === n.prepared.name && n.prepared.edges) {
                    var r = e;
                    r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
                }
            },
            "auto-start:check": function(t1) {
                var e = t1.interaction, n = t1.interactable, r = t1.element, i = t1.rect, o = t1.buttons;
                if (i) {
                    var a = V({}, e.coords.cur.page), s = n.options.resize;
                    if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (o & s.mouseButtons))) {
                        if (w.object(s.edges)) {
                            var c = {
                                left: !1,
                                right: !1,
                                top: !1,
                                bottom: !1
                            };
                            for(var l in c)c[l] = zt(l, s.edges[l], a, e._latestPointer.eventTarget, r, i, s.margin || jt.defaultMargin);
                            c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (t1.action = {
                                name: "resize",
                                edges: c
                            });
                        } else {
                            var u = "y" !== s.axis && a.x > i.right - jt.defaultMargin, p = "x" !== s.axis && a.y > i.bottom - jt.defaultMargin;
                            (u || p) && (t1.action = {
                                name: "resize",
                                axes: (u ? "x" : "") + (p ? "y" : "")
                            });
                        }
                        return !t1.action && void 0;
                    }
                }
            }
        },
        defaults: {
            square: !1,
            preserveAspectRatio: !1,
            axis: "xy",
            margin: NaN,
            edges: null,
            invert: "none"
        },
        cursors: null,
        getCursor: function(t1) {
            var e = t1.edges, n = t1.axis, r = t1.name, i = jt.cursors, o = null;
            if (n) o = i[r + n];
            else if (e) {
                for(var a = "", s = 0, c = [
                    "top",
                    "bottom",
                    "left",
                    "right"
                ]; s < c.length; s++){
                    var l = c[s];
                    e[l] && (a += l);
                }
                o = i[a];
            }
            return o;
        },
        filterEventType: function(t1) {
            return 0 === t1.search("resize");
        },
        defaultMargin: null
    }, Ft = jt, Xt = {
        id: "actions",
        install: function(t1) {
            t1.usePlugin(Mt), t1.usePlugin(Ft), t1.usePlugin(_), t1.usePlugin(kt);
        }
    }, Yt = 0;
    var Lt = {
        request: function(t1) {
            return Rt(t1);
        },
        cancel: function(t1) {
            return Ct(t1);
        },
        init: function(t1) {
            if (Rt = t1.requestAnimationFrame, Ct = t1.cancelAnimationFrame, !Rt) for(var e = [
                "ms",
                "moz",
                "webkit",
                "o"
            ], n = 0; n < e.length; n++){
                var r = e[n];
                Rt = t1["".concat(r, "RequestAnimationFrame")], Ct = t1["".concat(r, "CancelAnimationFrame")] || t1["".concat(r, "CancelRequestAnimationFrame")];
            }
            Rt = Rt && Rt.bind(t1), Ct = Ct && Ct.bind(t1), Rt || (Rt = function(e) {
                var n = Date.now(), r = Math.max(0, 16 - (n - Yt)), i = t1.setTimeout(function() {
                    e(n + r);
                }, r);
                return Yt = n + r, i;
            }, Ct = function(t1) {
                return clearTimeout(t1);
            });
        }
    };
    var qt = {
        defaults: {
            enabled: !1,
            margin: 60,
            container: null,
            speed: 300
        },
        now: Date.now,
        interaction: null,
        i: 0,
        x: 0,
        y: 0,
        isScrolling: !1,
        prevTime: 0,
        margin: 0,
        speed: 0,
        start: function(t1) {
            qt.isScrolling = !0, Lt.cancel(qt.i), t1.autoScroll = qt, qt.interaction = t1, qt.prevTime = qt.now(), qt.i = Lt.request(qt.scroll);
        },
        stop: function() {
            qt.isScrolling = !1, qt.interaction && (qt.interaction.autoScroll = null), Lt.cancel(qt.i);
        },
        scroll: function() {
            var t1 = qt.interaction, e = t1.interactable, n = t1.element, r = t1.prepared.name, i = e.options[r].autoScroll, o = Bt(i.container, e, n), a = qt.now(), s = (a - qt.prevTime) / 1e3, c = i.speed * s;
            if (c >= 1) {
                var l = {
                    x: qt.x * c,
                    y: qt.y * c
                };
                if (l.x || l.y) {
                    var u = Vt(o);
                    w.window(o) ? o.scrollBy(l.x, l.y) : o && (o.scrollLeft += l.x, o.scrollTop += l.y);
                    var p = Vt(o), f = {
                        x: p.x - u.x,
                        y: p.y - u.y
                    };
                    (f.x || f.y) && e.fire({
                        type: "autoscroll",
                        target: n,
                        interactable: e,
                        delta: f,
                        interaction: t1,
                        container: o
                    });
                }
                qt.prevTime = a;
            }
            qt.isScrolling && (Lt.cancel(qt.i), qt.i = Lt.request(qt.scroll));
        },
        check: function(t1, e) {
            var n;
            return null == (n = t1.options[e].autoScroll) ? void 0 : n.enabled;
        },
        onInteractionMove: function(t1) {
            var e = t1.interaction, n = t1.pointer;
            if (e.interacting() && qt.check(e.interactable, e.prepared.name)) {
                if (e.simulation) qt.x = qt.y = 0;
                else {
                    var r, i, o, a, s = e.interactable, c = e.element, l = e.prepared.name, u = s.options[l].autoScroll, p = Bt(u.container, s, c);
                    if (w.window(p)) a = n.clientX < qt.margin, r = n.clientY < qt.margin, i = n.clientX > p.innerWidth - qt.margin, o = n.clientY > p.innerHeight - qt.margin;
                    else {
                        var f = Y(p);
                        a = n.clientX < f.left + qt.margin, r = n.clientY < f.top + qt.margin, i = n.clientX > f.right - qt.margin, o = n.clientY > f.bottom - qt.margin;
                    }
                    qt.x = i ? 1 : a ? -1 : 0, qt.y = o ? 1 : r ? -1 : 0, qt.isScrolling || (qt.margin = u.margin, qt.speed = u.speed, qt.start(e));
                }
            }
        }
    };
    function Bt(t1, e, n) {
        return (w.string(t1) ? W(t1, e, n) : t1) || y(n);
    }
    function Vt(t1) {
        return w.window(t1) && (t1 = window.document.body), {
            x: t1.scrollLeft,
            y: t1.scrollTop
        };
    }
    var Wt = {
        id: "auto-scroll",
        install: function(t1) {
            var e = t1.defaults, n = t1.actions;
            t1.autoScroll = qt, qt.now = function() {
                return t1.now();
            }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = qt.defaults;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.autoScroll = null;
            },
            "interactions:destroy": function(t1) {
                t1.interaction.autoScroll = null, qt.stop(), qt.interaction && (qt.interaction = null);
            },
            "interactions:stop": qt.stop,
            "interactions:action-move": function(t1) {
                return qt.onInteractionMove(t1);
            }
        }
    }, Gt = Wt;
    function Nt(t1, e) {
        var n = !1;
        return function() {
            return n || (g.console.warn(e), n = !0), t1.apply(this, arguments);
        };
    }
    function Ut(t1, e) {
        return t1.name = e.name, t1.axis = e.axis, t1.edges = e.edges, t1;
    }
    function Ht(t1) {
        return w.bool(t1) ? (this.options.styleCursor = t1, this) : null === t1 ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function Kt(t1) {
        return w.func(t1) ? (this.options.actionChecker = t1, this) : null === t1 ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    var $t = {
        id: "auto-start/interactableMethods",
        install: function(t1) {
            var e = t1.Interactable;
            e.prototype.getAction = function(e, n, r, i) {
                var o = function(t1, e, n, r, i) {
                    var o = t1.getRect(r), a = e.buttons || ({
                        0: 1,
                        1: 4,
                        3: 8,
                        4: 16
                    })[e.button], s = {
                        action: null,
                        interactable: t1,
                        interaction: n,
                        element: r,
                        rect: o,
                        buttons: a
                    };
                    return i.fire("auto-start:check", s), s.action;
                }(this, n, r, i, t1);
                return this.options.actionChecker ? this.options.actionChecker(e, n, o, this, i, r) : o;
            }, e.prototype.ignoreFrom = Nt(function(t1) {
                return this._backCompatOption("ignoreFrom", t1);
            }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = Nt(function(t1) {
                return this._backCompatOption("allowFrom", t1);
            }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = Kt, e.prototype.styleCursor = Ht;
        }
    };
    function Jt(t1, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t1.name], n, r) && e.options[t1.name].enabled && ee(e, n, t1, i) ? t1 : null;
    }
    function Qt(t1, e, n, r, i, o, a) {
        for(var s = 0, c = r.length; s < c; s++){
            var l = r[s], u = i[s], p = l.getAction(e, n, t1, u);
            if (p) {
                var f = Jt(p, l, u, o, a);
                if (f) return {
                    action: f,
                    interactable: l,
                    element: u
                };
            }
        }
        return {
            action: null,
            interactable: null,
            element: null
        };
    }
    function Zt(t1, e, n, r, i) {
        var o = [], a = [], s = r;
        function c(t1) {
            o.push(t1), a.push(s);
        }
        for(; w.element(s);){
            o = [], a = [], i.interactables.forEachMatch(s, c);
            var l = Qt(t1, e, n, o, a, r, i);
            if (l.action && !l.interactable.options[l.action.name].manualStart) return l;
            s = A(s);
        }
        return {
            action: null,
            interactable: null,
            element: null
        };
    }
    function te(t1, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || {
            name: null
        }, t1.interactable = i, t1.element = o, Ut(t1.prepared, r), t1.rect = i && r.name ? i.getRect(o) : null, ie(t1, n), n.fire("autoStart:prepared", {
            interaction: t1
        });
    }
    function ee(t1, e, n, r) {
        var i = t1.options, o = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, c = 0, l = 0, u = 0;
        if (!(o && a && s)) return !1;
        for(var p = 0, f = r.interactions.list; p < f.length; p++){
            var d = f[p], h = d.prepared.name;
            if (d.interacting()) {
                if (++c >= s) return !1;
                if (d.interactable === t1) {
                    if ((l += h === n.name ? 1 : 0) >= o) return !1;
                    if (d.element === e && (u++, h === n.name && u >= a)) return !1;
                }
            }
        }
        return s > 0;
    }
    function ne(t1, e) {
        return w.number(t1) ? (e.autoStart.maxInteractions = t1, this) : e.autoStart.maxInteractions;
    }
    function re(t1, e, n) {
        var r = n.autoStart.cursorElement;
        r && r !== t1 && (r.style.cursor = ""), t1.ownerDocument.documentElement.style.cursor = e, t1.style.cursor = e, n.autoStart.cursorElement = e ? t1 : null;
    }
    function ie(t1, e) {
        var n = t1.interactable, r = t1.element, i = t1.prepared;
        if ("mouse" === t1.pointerType && n && n.options.styleCursor) {
            var o = "";
            if (i.name) {
                var a = n.options[i.name].cursorChecker;
                o = w.func(a) ? a(i, n, r, t1._interacting) : e.actions.map[i.name].getCursor(i);
            }
            re(t1.element, o || "", e);
        } else e.autoStart.cursorElement && re(e.autoStart.cursorElement, "", e);
    }
    var oe = {
        id: "auto-start/base",
        before: [
            "actions"
        ],
        install: function(t1) {
            var e = t1.interactStatic, n = t1.defaults;
            t1.usePlugin($t), n.base.actionChecker = null, n.base.styleCursor = !0, V(n.perAction, {
                manualStart: !1,
                max: 1 / 0,
                maxPerElement: 1,
                allowFrom: null,
                ignoreFrom: null,
                mouseButtons: 1
            }), e.maxInteractions = function(e) {
                return ne(e, t1);
            }, t1.autoStart = {
                maxInteractions: 1 / 0,
                withinInteractionLimit: ee,
                cursorElement: null
            };
        },
        listeners: {
            "interactions:down": function(t1, e) {
                var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                n.interacting() || te(n, Zt(n, r, i, o, e), e);
            },
            "interactions:move": function(t1, e) {
                !function(t1, e) {
                    var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                    "mouse" !== n.pointerType || n.pointerIsDown || n.interacting() || te(n, Zt(n, r, i, o, e), e);
                }(t1, e), function(t1, e) {
                    var n = t1.interaction;
                    if (n.pointerIsDown && !n.interacting() && n.pointerWasMoved && n.prepared.name) {
                        e.fire("autoStart:before-start", t1);
                        var r = n.interactable, i = n.prepared.name;
                        i && r && (r.options[i].manualStart || !ee(r, n.element, n.prepared, e) ? n.stop() : (n.start(n.prepared, r, n.element), ie(n, e)));
                    }
                }(t1, e);
            },
            "interactions:stop": function(t1, e) {
                var n = t1.interaction, r = n.interactable;
                r && r.options.styleCursor && re(n.element, "", e);
            }
        },
        maxInteractions: ne,
        withinInteractionLimit: ee,
        validateAction: Jt
    }, ae = oe;
    var se = {
        id: "auto-start/dragAxis",
        listeners: {
            "autoStart:before-start": function(t1, e) {
                var n = t1.interaction, r = t1.eventTarget, i = t1.dx, o = t1.dy;
                if ("drag" === n.prepared.name) {
                    var a = Math.abs(i), s = Math.abs(o), c = n.interactable.options.drag, l = c.startAxis, u = a > s ? "x" : a < s ? "y" : "xy";
                    if (n.prepared.axis = "start" === c.lockAxis ? u[0] : c.lockAxis, "xy" !== u && "xy" !== l && l !== u) {
                        n.prepared.name = null;
                        for(var p = r, f = function(t1) {
                            if (t1 !== n.interactable) {
                                var i = n.interactable.options.drag;
                                if (!i.manualStart && t1.testIgnoreAllow(i, p, r)) {
                                    var o = t1.getAction(n.downPointer, n.downEvent, n, p);
                                    if (o && "drag" === o.name && function(t1, e) {
                                        if (!e) return !1;
                                        var n = e.options.drag.startAxis;
                                        return "xy" === t1 || "xy" === n || n === t1;
                                    }(u, t1) && ae.validateAction(o, t1, p, r, e)) return t1;
                                }
                            }
                        }; w.element(p);){
                            var d = e.interactables.forEachMatch(p, f);
                            if (d) {
                                n.prepared.name = "drag", n.interactable = d, n.element = p;
                                break;
                            }
                            p = A(p);
                        }
                    }
                }
            }
        }
    };
    function ce(t1) {
        var e = t1.prepared && t1.prepared.name;
        if (!e) return null;
        var n = t1.interactable.options;
        return n[e].hold || n[e].delay;
    }
    var le = {
        id: "auto-start/hold",
        install: function(t1) {
            var e = t1.defaults;
            t1.usePlugin(ae), e.perAction.hold = 0, e.perAction.delay = 0;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.autoStartHoldTimer = null;
            },
            "autoStart:prepared": function(t1) {
                var e = t1.interaction, n = ce(e);
                n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
                    e.start(e.prepared, e.interactable, e.element);
                }, n));
            },
            "interactions:move": function(t1) {
                var e = t1.interaction, n = t1.duplicate;
                e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
            },
            "autoStart:before-start": function(t1) {
                var e = t1.interaction;
                ce(e) > 0 && (e.prepared.name = null);
            }
        },
        getHoldDuration: ce
    }, ue = le, pe = {
        id: "auto-start",
        install: function(t1) {
            t1.usePlugin(ae), t1.usePlugin(ue), t1.usePlugin(se);
        }
    }, fe = function(t1) {
        return /^(always|never|auto)$/.test(t1) ? (this.options.preventDefault = t1, this) : w.bool(t1) ? (this.options.preventDefault = t1 ? "always" : "never", this) : this.options.preventDefault;
    };
    function de(t1) {
        var e = t1.interaction, n = t1.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
    }
    var he = {
        id: "core/interactablePreventDefault",
        install: function(t1) {
            var e = t1.Interactable;
            e.prototype.preventDefault = fe, e.prototype.checkAndPreventDefault = function(e) {
                return function(t1, e, n) {
                    var r = t1.options.preventDefault;
                    if ("never" !== r) {
                        if ("always" !== r) {
                            if (e.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
                                var i = y(n.target).document, o = e.getDocOptions(i);
                                if (!o || !o.events || !1 !== o.events.passive) return;
                            }
                            /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || w.element(n.target) && R(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault();
                        } else n.preventDefault();
                    }
                }(this, t1, e);
            }, t1.interactions.docEvents.push({
                type: "dragstart",
                listener: function(e) {
                    for(var n = 0, r = t1.interactions.list; n < r.length; n++){
                        var i = r[n];
                        if (i.element && (i.element === e.target || M(i.element, e.target))) return void i.interactable.checkAndPreventDefault(e);
                    }
                }
            });
        },
        listeners: [
            "down",
            "move",
            "up",
            "cancel"
        ].reduce(function(t1, e) {
            return t1["interactions:".concat(e)] = de, t1;
        }, {})
    };
    function ve(t1, e) {
        if (e.phaselessTypes[t1]) return !0;
        for(var n in e.map)if (0 === t1.indexOf(n) && t1.substr(n.length) in e.phases) return !0;
        return !1;
    }
    function ge(t1) {
        var e = {};
        for(var n in t1){
            var r = t1[n];
            w.plainObject(r) ? e[n] = ge(r) : w.array(r) ? e[n] = mt(r) : e[n] = r;
        }
        return e;
    }
    var me = function() {
        function t1(e) {
            r(this, t1), this.states = [], this.startOffset = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = ye(), this.edges = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            };
        }
        return o(t1, [
            {
                key: "start",
                value: function(t1, e) {
                    var n, r, i = t1.phase, o = this.interaction, a = function(t1) {
                        var e = t1.interactable.options[t1.prepared.name], n = e.modifiers;
                        if (n && n.length) return n;
                        return [
                            "snap",
                            "snapSize",
                            "snapEdges",
                            "restrict",
                            "restrictEdges",
                            "restrictSize"
                        ].map(function(t1) {
                            var n = e[t1];
                            return n && n.enabled && {
                                options: n,
                                methods: n._methods
                            };
                        }).filter(function(t1) {
                            return !!t1;
                        });
                    }(o);
                    this.prepareStates(a), this.startEdges = V({}, o.edges), this.edges = V({}, this.startEdges), this.startOffset = (n = o.rect, r = e, n ? {
                        left: r.x - n.left,
                        top: r.y - n.top,
                        right: n.right - r.x,
                        bottom: n.bottom - r.y
                    } : {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }), this.startDelta = {
                        x: 0,
                        y: 0
                    };
                    var s = this.fillArg({
                        phase: i,
                        pageCoords: e,
                        preEnd: !1
                    });
                    return this.result = ye(), this.startAll(s), this.result = this.setAll(s);
                }
            },
            {
                key: "fillArg",
                value: function(t1) {
                    var e = this.interaction;
                    return t1.interaction = e, t1.interactable = e.interactable, t1.element = e.element, t1.rect || (t1.rect = e.rect), t1.edges || (t1.edges = this.startEdges), t1.startOffset = this.startOffset, t1;
                }
            },
            {
                key: "startAll",
                value: function(t1) {
                    for(var e = 0, n = this.states; e < n.length; e++){
                        var r = n[e];
                        r.methods.start && (t1.state = r, r.methods.start(t1));
                    }
                }
            },
            {
                key: "setAll",
                value: function(t1) {
                    var e = t1.phase, n = t1.preEnd, r = t1.skipModifiers, i = t1.rect, o = t1.edges;
                    t1.coords = V({}, t1.pageCoords), t1.rect = V({}, i), t1.edges = V({}, o);
                    for(var a = r ? this.states.slice(r) : this.states, s = ye(t1.coords, t1.rect), c = 0; c < a.length; c++){
                        var l, u = a[c], p = u.options, f = V({}, t1.coords), d = null;
                        null != (l = u.methods) && l.set && this.shouldDo(p, n, e) && (t1.state = u, d = u.methods.set(t1), H(t1.edges, t1.rect, {
                            x: t1.coords.x - f.x,
                            y: t1.coords.y - f.y
                        })), s.eventProps.push(d);
                    }
                    V(this.edges, t1.edges), s.delta.x = t1.coords.x - t1.pageCoords.x, s.delta.y = t1.coords.y - t1.pageCoords.y, s.rectDelta.left = t1.rect.left - i.left, s.rectDelta.right = t1.rect.right - i.right, s.rectDelta.top = t1.rect.top - i.top, s.rectDelta.bottom = t1.rect.bottom - i.bottom;
                    var h = this.result.coords, v = this.result.rect;
                    if (h && v) {
                        var g = s.rect.left !== v.left || s.rect.right !== v.right || s.rect.top !== v.top || s.rect.bottom !== v.bottom;
                        s.changed = g || h.x !== s.coords.x || h.y !== s.coords.y;
                    }
                    return s;
                }
            },
            {
                key: "applyToInteraction",
                value: function(t1) {
                    var e = this.interaction, n = t1.phase, r = e.coords.cur, i = e.coords.start, o = this.result, a = this.startDelta, s = o.delta;
                    "start" === n && V(this.startDelta, o.delta);
                    for(var c = 0, l = [
                        [
                            i,
                            a
                        ],
                        [
                            r,
                            s
                        ]
                    ]; c < l.length; c++){
                        var u = l[c], p = u[0], f = u[1];
                        p.page.x += f.x, p.page.y += f.y, p.client.x += f.x, p.client.y += f.y;
                    }
                    var d = this.result.rectDelta, h = t1.rect || e.rect;
                    h.left += d.left, h.right += d.right, h.top += d.top, h.bottom += d.bottom, h.width = h.right - h.left, h.height = h.bottom - h.top;
                }
            },
            {
                key: "setAndApply",
                value: function(t1) {
                    var e = this.interaction, n = t1.phase, r = t1.preEnd, i = t1.skipModifiers, o = this.setAll(this.fillArg({
                        preEnd: r,
                        phase: n,
                        pageCoords: t1.modifiedCoords || e.coords.cur.page
                    }));
                    if (this.result = o, !o.changed && (!i || i < this.states.length) && e.interacting()) return !1;
                    if (t1.modifiedCoords) {
                        var a = e.coords.cur.page, s = {
                            x: t1.modifiedCoords.x - a.x,
                            y: t1.modifiedCoords.y - a.y
                        };
                        o.coords.x += s.x, o.coords.y += s.y, o.delta.x += s.x, o.delta.y += s.y;
                    }
                    this.applyToInteraction(t1);
                }
            },
            {
                key: "beforeEnd",
                value: function(t1) {
                    var e = t1.interaction, n = t1.event, r = this.states;
                    if (r && r.length) {
                        for(var i = !1, o = 0; o < r.length; o++){
                            var a = r[o];
                            t1.state = a;
                            var s = a.options, c = a.methods, l = c.beforeEnd && c.beforeEnd(t1);
                            if (l) return this.endResult = l, !1;
                            i = i || !i && this.shouldDo(s, !0, t1.phase, !0);
                        }
                        i && e.move({
                            event: n,
                            preEnd: !0
                        });
                    }
                }
            },
            {
                key: "stop",
                value: function(t1) {
                    var e = t1.interaction;
                    if (this.states && this.states.length) {
                        var n = V({
                            states: this.states,
                            interactable: e.interactable,
                            element: e.element,
                            rect: null
                        }, t1);
                        this.fillArg(n);
                        for(var r = 0, i = this.states; r < i.length; r++){
                            var o = i[r];
                            n.state = o, o.methods.stop && o.methods.stop(n);
                        }
                        this.states = null, this.endResult = null;
                    }
                }
            },
            {
                key: "prepareStates",
                value: function(t1) {
                    this.states = [];
                    for(var e = 0; e < t1.length; e++){
                        var n = t1[e], r = n.options, i = n.methods, o = n.name;
                        this.states.push({
                            options: r,
                            methods: i,
                            index: e,
                            name: o
                        });
                    }
                    return this.states;
                }
            },
            {
                key: "restoreInteractionCoords",
                value: function(t1) {
                    var e = t1.interaction, n = e.coords, r = e.rect, i = e.modification;
                    if (i.result) {
                        for(var o = i.startDelta, a = i.result, s = a.delta, c = a.rectDelta, l = 0, u = [
                            [
                                n.start,
                                o
                            ],
                            [
                                n.cur,
                                s
                            ]
                        ]; l < u.length; l++){
                            var p = u[l], f = p[0], d = p[1];
                            f.page.x -= d.x, f.page.y -= d.y, f.client.x -= d.x, f.client.y -= d.y;
                        }
                        r.left -= c.left, r.right -= c.right, r.top -= c.top, r.bottom -= c.bottom;
                    }
                }
            },
            {
                key: "shouldDo",
                value: function(t1, e, n, r) {
                    return !(!t1 || !1 === t1.enabled || r && !t1.endOnly || t1.endOnly && !e || "start" === n && !t1.setStart);
                }
            },
            {
                key: "copyFrom",
                value: function(t1) {
                    this.startOffset = t1.startOffset, this.startDelta = t1.startDelta, this.startEdges = t1.startEdges, this.edges = t1.edges, this.states = t1.states.map(function(t1) {
                        return ge(t1);
                    }), this.result = ye(V({}, t1.result.coords), V({}, t1.result.rect));
                }
            },
            {
                key: "destroy",
                value: function() {
                    for(var t1 in this)this[t1] = null;
                }
            }
        ]), t1;
    }();
    function ye(t1, e) {
        return {
            rect: e,
            coords: t1,
            delta: {
                x: 0,
                y: 0
            },
            rectDelta: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            eventProps: [],
            changed: !0
        };
    }
    function be(t1, e) {
        var n = t1.defaults, r = {
            start: t1.start,
            set: t1.set,
            beforeEnd: t1.beforeEnd,
            stop: t1.stop
        }, i = function(t1) {
            var i = t1 || {};
            for(var o in i.enabled = !1 !== i.enabled, n)o in i || (i[o] = n[o]);
            var a = {
                options: i,
                methods: r,
                name: e,
                enable: function() {
                    return i.enabled = !0, a;
                },
                disable: function() {
                    return i.enabled = !1, a;
                }
            };
            return a;
        };
        return e && "string" == typeof e && (i._defaults = n, i._methods = r), i;
    }
    function xe(t1) {
        var e = t1.iEvent, n = t1.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
    }
    var we = {
        id: "modifiers/base",
        before: [
            "actions"
        ],
        install: function(t1) {
            t1.defaults.perAction.modifiers = [];
        },
        listeners: {
            "interactions:new": function(t1) {
                var e = t1.interaction;
                e.modification = new me(e);
            },
            "interactions:before-action-start": function(t1) {
                var e = t1.interaction, n = t1.interaction.modification;
                n.start(t1, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t1);
            },
            "interactions:before-action-move": function(t1) {
                var e = t1.interaction, n = e.modification, r = n.setAndApply(t1);
                return e.edges = n.edges, r;
            },
            "interactions:before-action-end": function(t1) {
                var e = t1.interaction, n = e.modification, r = n.beforeEnd(t1);
                return e.edges = n.startEdges, r;
            },
            "interactions:action-start": xe,
            "interactions:action-move": xe,
            "interactions:action-end": xe,
            "interactions:after-action-start": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            },
            "interactions:after-action-move": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            },
            "interactions:stop": function(t1) {
                return t1.interaction.modification.stop(t1);
            }
        }
    }, Ee = we, Te = {
        base: {
            preventDefault: "auto",
            deltaSource: "page"
        },
        perAction: {
            enabled: !1,
            origin: {
                x: 0,
                y: 0
            }
        },
        actions: {}
    }, Se = function(t1) {
        s(n, t1);
        var e = p(n);
        function n(t1, i, o, a, s, c, l) {
            var p;
            r(this, n), (p = e.call(this, t1)).relatedTarget = null, p.screenX = void 0, p.screenY = void 0, p.button = void 0, p.buttons = void 0, p.ctrlKey = void 0, p.shiftKey = void 0, p.altKey = void 0, p.metaKey = void 0, p.page = void 0, p.client = void 0, p.delta = void 0, p.rect = void 0, p.x0 = void 0, p.y0 = void 0, p.t0 = void 0, p.dt = void 0, p.duration = void 0, p.clientX0 = void 0, p.clientY0 = void 0, p.velocity = void 0, p.speed = void 0, p.swipe = void 0, p.axes = void 0, p.preEnd = void 0, s = s || t1.element;
            var f = t1.interactable, d = (f && f.options || Te).deltaSource, h = K(f, s, o), v = "start" === a, g = "end" === a, m = v ? u(p) : t1.prevEvent, y = v ? t1.coords.start : g ? {
                page: m.page,
                client: m.client,
                timeStamp: t1.coords.cur.timeStamp
            } : t1.coords.cur;
            return p.page = V({}, y.page), p.client = V({}, y.client), p.rect = V({}, t1.rect), p.timeStamp = y.timeStamp, g || (p.page.x -= h.x, p.page.y -= h.y, p.client.x -= h.x, p.client.y -= h.y), p.ctrlKey = i.ctrlKey, p.altKey = i.altKey, p.shiftKey = i.shiftKey, p.metaKey = i.metaKey, p.button = i.button, p.buttons = i.buttons, p.target = s, p.currentTarget = s, p.preEnd = c, p.type = l || o + (a || ""), p.interactable = f, p.t0 = v ? t1.pointers[t1.pointers.length - 1].downTime : m.t0, p.x0 = t1.coords.start.page.x - h.x, p.y0 = t1.coords.start.page.y - h.y, p.clientX0 = t1.coords.start.client.x - h.x, p.clientY0 = t1.coords.start.client.y - h.y, p.delta = v || g ? {
                x: 0,
                y: 0
            } : {
                x: p[d].x - m[d].x,
                y: p[d].y - m[d].y
            }, p.dt = t1.coords.delta.timeStamp, p.duration = p.timeStamp - p.t0, p.velocity = V({}, t1.coords.velocity[d]), p.speed = Q(p.velocity.x, p.velocity.y), p.swipe = g || "inertiastart" === a ? p.getSwipe() : null, p;
        }
        return o(n, [
            {
                key: "getSwipe",
                value: function() {
                    var t1 = this._interaction;
                    if (t1.prevEvent.speed < 600 || this.timeStamp - t1.prevEvent.timeStamp > 150) return null;
                    var e = 180 * Math.atan2(t1.prevEvent.velocityY, t1.prevEvent.velocityX) / Math.PI;
                    e < 0 && (e += 360);
                    var n = 112.5 <= e && e < 247.5, r = 202.5 <= e && e < 337.5;
                    return {
                        up: r,
                        down: !r && 22.5 <= e && e < 157.5,
                        left: n,
                        right: !n && (292.5 <= e || e < 67.5),
                        angle: e,
                        speed: t1.prevEvent.speed,
                        velocity: {
                            x: t1.prevEvent.velocityX,
                            y: t1.prevEvent.velocityY
                        }
                    };
                }
            },
            {
                key: "preventDefault",
                value: function() {}
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0;
                }
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.propagationStopped = !0;
                }
            }
        ]), n;
    }(vt);
    Object.defineProperties(Se.prototype, {
        pageX: {
            get: function() {
                return this.page.x;
            },
            set: function(t1) {
                this.page.x = t1;
            }
        },
        pageY: {
            get: function() {
                return this.page.y;
            },
            set: function(t1) {
                this.page.y = t1;
            }
        },
        clientX: {
            get: function() {
                return this.client.x;
            },
            set: function(t1) {
                this.client.x = t1;
            }
        },
        clientY: {
            get: function() {
                return this.client.y;
            },
            set: function(t1) {
                this.client.y = t1;
            }
        },
        dx: {
            get: function() {
                return this.delta.x;
            },
            set: function(t1) {
                this.delta.x = t1;
            }
        },
        dy: {
            get: function() {
                return this.delta.y;
            },
            set: function(t1) {
                this.delta.y = t1;
            }
        },
        velocityX: {
            get: function() {
                return this.velocity.x;
            },
            set: function(t1) {
                this.velocity.x = t1;
            }
        },
        velocityY: {
            get: function() {
                return this.velocity.y;
            },
            set: function(t1) {
                this.velocity.y = t1;
            }
        }
    });
    var _e = o(function t1(e, n, i, o, a) {
        r(this, t1), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = i, this.downTime = o, this.downTarget = a;
    }), Pe = function(t1) {
        return t1.interactable = "", t1.element = "", t1.prepared = "", t1.pointerIsDown = "", t1.pointerWasMoved = "", t1._proxy = "", t1;
    }({}), Oe = function(t1) {
        return t1.start = "", t1.move = "", t1.end = "", t1.stop = "", t1.interacting = "", t1;
    }({}), ke = 0, De = function() {
        function t1(e) {
            var n = this, i = e.pointerType, o = e.scopeFire;
            r(this, t1), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = {
                name: null,
                axis: null,
                edges: null
            }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = {
                pointer: null,
                event: null,
                eventTarget: null
            }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Nt(function(t1) {
                this.move(t1);
            }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = {
                start: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                prev: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                cur: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                delta: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                velocity: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                }
            }, this._id = ke++, this._scopeFire = o, this.pointerType = i;
            var a = this;
            this._proxy = {};
            var s = function(t1) {
                Object.defineProperty(n._proxy, t1, {
                    get: function() {
                        return a[t1];
                    }
                });
            };
            for(var c in Pe)s(c);
            var l = function(t1) {
                Object.defineProperty(n._proxy, t1, {
                    value: function() {
                        return a[t1].apply(a, arguments);
                    }
                });
            };
            for(var u in Oe)l(u);
            this._scopeFire("interactions:new", {
                interaction: this
            });
        }
        return o(t1, [
            {
                key: "pointerMoveTolerance",
                get: function() {
                    return 1;
                }
            },
            {
                key: "pointerDown",
                value: function(t1, e, n) {
                    var r = this.updatePointer(t1, e, n, !0), i = this.pointers[r];
                    this._scopeFire("interactions:down", {
                        pointer: t1,
                        event: e,
                        eventTarget: n,
                        pointerIndex: r,
                        pointerInfo: i,
                        type: "down",
                        interaction: this
                    });
                }
            },
            {
                key: "start",
                value: function(t1, e, n) {
                    return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t1.name ? 2 : 1) || !e.options[t1.name].enabled) && (Ut(this.prepared, t1), this.interactable = e, this.element = n, this.rect = e.getRect(n), this.edges = this.prepared.edges ? V({}, this.prepared.edges) : {
                        left: !0,
                        right: !0,
                        top: !0,
                        bottom: !0
                    }, this._stopped = !1, this._interacting = this._doPhase({
                        interaction: this,
                        event: this.downEvent,
                        phase: "start"
                    }) && !this._stopped, this._interacting);
                }
            },
            {
                key: "pointerMove",
                value: function(t1, e, n) {
                    this.simulation || this.modification && this.modification.endResult || this.updatePointer(t1, e, n, !1);
                    var r, i, o = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
                    this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, i = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Q(r, i) > this.pointerMoveTolerance);
                    var a, s, c, l = this.getPointerIndex(t1), u = {
                        pointer: t1,
                        pointerIndex: l,
                        pointerInfo: this.pointers[l],
                        event: e,
                        type: "move",
                        eventTarget: n,
                        dx: r,
                        dy: i,
                        duplicate: o,
                        interaction: this
                    };
                    o || (a = this.coords.velocity, s = this.coords.delta, c = Math.max(s.timeStamp / 1e3, .001), a.page.x = s.page.x / c, a.page.y = s.page.y / c, a.client.x = s.client.x / c, a.client.y = s.client.y / c, a.timeStamp = c), this._scopeFire("interactions:move", u), o || this.simulation || (this.interacting() && (u.type = null, this.move(u)), this.pointerWasMoved && et(this.coords.prev, this.coords.cur));
                }
            },
            {
                key: "move",
                value: function(t1) {
                    t1 && t1.event || nt(this.coords.delta), (t1 = V({
                        pointer: this._latestPointer.pointer,
                        event: this._latestPointer.event,
                        eventTarget: this._latestPointer.eventTarget,
                        interaction: this
                    }, t1 || {})).phase = "move", this._doPhase(t1);
                }
            },
            {
                key: "pointerUp",
                value: function(t1, e, n, r) {
                    var i = this.getPointerIndex(t1);
                    -1 === i && (i = this.updatePointer(t1, e, n, !1));
                    var o = /cancel$/i.test(e.type) ? "cancel" : "up";
                    this._scopeFire("interactions:".concat(o), {
                        pointer: t1,
                        pointerIndex: i,
                        pointerInfo: this.pointers[i],
                        event: e,
                        eventTarget: n,
                        type: o,
                        curEventTarget: r,
                        interaction: this
                    }), this.simulation || this.end(e), this.removePointer(t1, e);
                }
            },
            {
                key: "documentBlur",
                value: function(t1) {
                    this.end(t1), this._scopeFire("interactions:blur", {
                        event: t1,
                        type: "blur",
                        interaction: this
                    });
                }
            },
            {
                key: "end",
                value: function(t1) {
                    var e;
                    this._ending = !0, t1 = t1 || this._latestPointer.event, this.interacting() && (e = this._doPhase({
                        event: t1,
                        interaction: this,
                        phase: "end"
                    })), this._ending = !1, !0 === e && this.stop();
                }
            },
            {
                key: "currentAction",
                value: function() {
                    return this._interacting ? this.prepared.name : null;
                }
            },
            {
                key: "interacting",
                value: function() {
                    return this._interacting;
                }
            },
            {
                key: "stop",
                value: function() {
                    this._scopeFire("interactions:stop", {
                        interaction: this
                    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
                }
            },
            {
                key: "getPointerIndex",
                value: function(t1) {
                    var e = at(t1);
                    return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : yt(this.pointers, function(t1) {
                        return t1.id === e;
                    });
                }
            },
            {
                key: "getPointerInfo",
                value: function(t1) {
                    return this.pointers[this.getPointerIndex(t1)];
                }
            },
            {
                key: "updatePointer",
                value: function(t1, e, n, r) {
                    var i, o, a, s = at(t1), c = this.getPointerIndex(t1), l = this.pointers[c];
                    return r = !1 !== r && (r || /(down|start)$/i.test(e.type)), l ? l.pointer = t1 : (l = new _e(s, t1, e, null, null), c = this.pointers.length, this.pointers.push(l)), st(this.coords.cur, this.pointers.map(function(t1) {
                        return t1.pointer;
                    }), this._now()), i = this.coords.delta, o = this.coords.prev, a = this.coords.cur, i.page.x = a.page.x - o.page.x, i.page.y = a.page.y - o.page.y, i.client.x = a.client.x - o.client.x, i.client.y = a.client.y - o.client.y, i.timeStamp = a.timeStamp - o.timeStamp, r && (this.pointerIsDown = !0, l.downTime = this.coords.cur.timeStamp, l.downTarget = n, tt(this.downPointer, t1), this.interacting() || (et(this.coords.start, this.coords.cur), et(this.coords.prev, this.coords.cur), this.downEvent = e, this.pointerWasMoved = !1)), this._updateLatestPointer(t1, e, n), this._scopeFire("interactions:update-pointer", {
                        pointer: t1,
                        event: e,
                        eventTarget: n,
                        down: r,
                        pointerInfo: l,
                        pointerIndex: c,
                        interaction: this
                    }), c;
                }
            },
            {
                key: "removePointer",
                value: function(t1, e) {
                    var n = this.getPointerIndex(t1);
                    if (-1 !== n) {
                        var r = this.pointers[n];
                        this._scopeFire("interactions:remove-pointer", {
                            pointer: t1,
                            event: e,
                            eventTarget: null,
                            pointerIndex: n,
                            pointerInfo: r,
                            interaction: this
                        }), this.pointers.splice(n, 1), this.pointerIsDown = !1;
                    }
                }
            },
            {
                key: "_updateLatestPointer",
                value: function(t1, e, n) {
                    this._latestPointer.pointer = t1, this._latestPointer.event = e, this._latestPointer.eventTarget = n;
                }
            },
            {
                key: "destroy",
                value: function() {
                    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
                }
            },
            {
                key: "_createPreparedEvent",
                value: function(t1, e, n, r) {
                    return new Se(this, t1, this.prepared.name, e, this.element, n, r);
                }
            },
            {
                key: "_fireEvent",
                value: function(t1) {
                    var e;
                    null == (e = this.interactable) || e.fire(t1), (!this.prevEvent || t1.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t1);
                }
            },
            {
                key: "_doPhase",
                value: function(t1) {
                    var e = t1.event, n = t1.phase, r = t1.preEnd, i = t1.type, o = this.rect;
                    if (o && "move" === n && (H(this.edges, o, this.coords.delta[this.interactable.options.deltaSource]), o.width = o.right - o.left, o.height = o.bottom - o.top), !1 === this._scopeFire("interactions:before-action-".concat(n), t1)) return !1;
                    var a = t1.iEvent = this._createPreparedEvent(e, n, r, i);
                    return this._scopeFire("interactions:action-".concat(n), t1), "start" === n && (this.prevEvent = a), this._fireEvent(a), this._scopeFire("interactions:after-action-".concat(n), t1), !0;
                }
            },
            {
                key: "_now",
                value: function() {
                    return Date.now();
                }
            }
        ]), t1;
    }();
    function Ie(t1) {
        Me(t1.interaction);
    }
    function Me(t1) {
        if (!function(t1) {
            return !(!t1.offset.pending.x && !t1.offset.pending.y);
        }(t1)) return !1;
        var e = t1.offset.pending;
        return Ae(t1.coords.cur, e), Ae(t1.coords.delta, e), H(t1.edges, t1.rect, e), e.x = 0, e.y = 0, !0;
    }
    function ze(t1) {
        var e = t1.x, n = t1.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
    }
    function Ae(t1, e) {
        var n = t1.page, r = t1.client, i = e.x, o = e.y;
        n.x += i, n.y += o, r.x += i, r.y += o;
    }
    Oe.offsetBy = "";
    var Re = {
        id: "offset",
        before: [
            "modifiers",
            "pointer-events",
            "actions",
            "inertia"
        ],
        install: function(t1) {
            t1.Interaction.prototype.offsetBy = ze;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.offset = {
                    total: {
                        x: 0,
                        y: 0
                    },
                    pending: {
                        x: 0,
                        y: 0
                    }
                };
            },
            "interactions:update-pointer": function(t1) {
                return function(t1) {
                    t1.pointerIsDown && (Ae(t1.coords.cur, t1.offset.total), t1.offset.pending.x = 0, t1.offset.pending.y = 0);
                }(t1.interaction);
            },
            "interactions:before-action-start": Ie,
            "interactions:before-action-move": Ie,
            "interactions:before-action-end": function(t1) {
                var e = t1.interaction;
                if (Me(e)) return e.move({
                    offset: !0
                }), e.end(), !1;
            },
            "interactions:stop": function(t1) {
                var e = t1.interaction;
                e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
            }
        }
    }, Ce = Re;
    var je = function() {
        function t1(e) {
            r(this, t1), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return o(t1, [
            {
                key: "start",
                value: function(t1) {
                    var e = this.interaction, n = Fe(e);
                    if (!n || !n.enabled) return !1;
                    var r = e.coords.velocity.client, i = Q(r.x, r.y), o = this.modification || (this.modification = new me(e));
                    if (o.copyFrom(e.modification), this.t0 = e._now(), this.allowResume = n.allowResume, this.v0 = i, this.currentOffset = {
                        x: 0,
                        y: 0
                    }, this.startCoords = e.coords.cur.page, this.modifierArg = o.fillArg({
                        pageCoords: this.startCoords,
                        preEnd: !0,
                        phase: "inertiastart"
                    }), this.t0 - e.coords.cur.timeStamp < 50 && i > n.minSpeed && i > n.endSpeed) this.startInertia();
                    else {
                        if (o.result = o.setAll(this.modifierArg), !o.result.changed) return !1;
                        this.startSmoothEnd();
                    }
                    return e.modification.result.rect = null, e.offsetBy(this.targetOffset), e._doPhase({
                        interaction: e,
                        event: t1,
                        phase: "inertiastart"
                    }), e.offsetBy({
                        x: -this.targetOffset.x,
                        y: -this.targetOffset.y
                    }), e.modification.result.rect = null, this.active = !0, e.simulation = this, !0;
                }
            },
            {
                key: "startInertia",
                value: function() {
                    var t1 = this, e = this.interaction.coords.velocity.client, n = Fe(this.interaction), r = n.resistance, i = -Math.log(n.endSpeed / this.v0) / r;
                    this.targetOffset = {
                        x: (e.x - i) / r,
                        y: (e.y - i) / r
                    }, this.te = i, this.lambda_v0 = r / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
                    var o = this.modification, a = this.modifierArg;
                    a.pageCoords = {
                        x: this.startCoords.x + this.targetOffset.x,
                        y: this.startCoords.y + this.targetOffset.y
                    }, o.result = o.setAll(a), o.result.changed && (this.isModified = !0, this.modifiedOffset = {
                        x: this.targetOffset.x + o.result.delta.x,
                        y: this.targetOffset.y + o.result.delta.y
                    }), this.onNextFrame(function() {
                        return t1.inertiaTick();
                    });
                }
            },
            {
                key: "startSmoothEnd",
                value: function() {
                    var t1 = this;
                    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
                        x: this.modification.result.delta.x,
                        y: this.modification.result.delta.y
                    }, this.onNextFrame(function() {
                        return t1.smoothEndTick();
                    });
                }
            },
            {
                key: "onNextFrame",
                value: function(t1) {
                    var e = this;
                    this.timeout = Lt.request(function() {
                        e.active && t1();
                    });
                }
            },
            {
                key: "inertiaTick",
                value: function() {
                    var t1, e, n, r, i, o, a, s = this, c = this.interaction, l = Fe(c).resistance, u = (c._now() - this.t0) / 1e3;
                    if (u < this.te) {
                        var p, f = 1 - (Math.exp(-l * u) - this.lambda_v0) / this.one_ve_v0;
                        this.isModified ? (t1 = 0, e = 0, n = this.targetOffset.x, r = this.targetOffset.y, i = this.modifiedOffset.x, o = this.modifiedOffset.y, p = {
                            x: Ye(a = f, t1, n, i),
                            y: Ye(a, e, r, o)
                        }) : p = {
                            x: this.targetOffset.x * f,
                            y: this.targetOffset.y * f
                        };
                        var d = {
                            x: p.x - this.currentOffset.x,
                            y: p.y - this.currentOffset.y
                        };
                        this.currentOffset.x += d.x, this.currentOffset.y += d.y, c.offsetBy(d), c.move(), this.onNextFrame(function() {
                            return s.inertiaTick();
                        });
                    } else c.offsetBy({
                        x: this.modifiedOffset.x - this.currentOffset.x,
                        y: this.modifiedOffset.y - this.currentOffset.y
                    }), this.end();
                }
            },
            {
                key: "smoothEndTick",
                value: function() {
                    var t1 = this, e = this.interaction, n = e._now() - this.t0, r = Fe(e).smoothEndDuration;
                    if (n < r) {
                        var i = {
                            x: Le(n, 0, this.targetOffset.x, r),
                            y: Le(n, 0, this.targetOffset.y, r)
                        }, o = {
                            x: i.x - this.currentOffset.x,
                            y: i.y - this.currentOffset.y
                        };
                        this.currentOffset.x += o.x, this.currentOffset.y += o.y, e.offsetBy(o), e.move({
                            skipModifiers: this.modifierCount
                        }), this.onNextFrame(function() {
                            return t1.smoothEndTick();
                        });
                    } else e.offsetBy({
                        x: this.targetOffset.x - this.currentOffset.x,
                        y: this.targetOffset.y - this.currentOffset.y
                    }), this.end();
                }
            },
            {
                key: "resume",
                value: function(t1) {
                    var e = t1.pointer, n = t1.event, r = t1.eventTarget, i = this.interaction;
                    i.offsetBy({
                        x: -this.currentOffset.x,
                        y: -this.currentOffset.y
                    }), i.updatePointer(e, n, r, !0), i._doPhase({
                        interaction: i,
                        event: n,
                        phase: "resume"
                    }), et(i.coords.prev, i.coords.cur), this.stop();
                }
            },
            {
                key: "end",
                value: function() {
                    this.interaction.move(), this.interaction.end(), this.stop();
                }
            },
            {
                key: "stop",
                value: function() {
                    this.active = this.smoothEnd = !1, this.interaction.simulation = null, Lt.cancel(this.timeout);
                }
            }
        ]), t1;
    }();
    function Fe(t1) {
        var e = t1.interactable, n = t1.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
    }
    var Xe = {
        id: "inertia",
        before: [
            "modifiers",
            "actions"
        ],
        install: function(t1) {
            var e = t1.defaults;
            t1.usePlugin(Ce), t1.usePlugin(Ee), t1.actions.phases.inertiastart = !0, t1.actions.phases.resume = !0, e.perAction.inertia = {
                enabled: !1,
                resistance: 10,
                minSpeed: 100,
                endSpeed: 10,
                allowResume: !0,
                smoothEndDuration: 300
            };
        },
        listeners: {
            "interactions:new": function(t1) {
                var e = t1.interaction;
                e.inertia = new je(e);
            },
            "interactions:before-action-end": function(t1) {
                var e = t1.interaction, n = t1.event;
                return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
            },
            "interactions:down": function(t1) {
                var e = t1.interaction, n = t1.eventTarget, r = e.inertia;
                if (r.active) for(var i = n; w.element(i);){
                    if (i === e.element) {
                        r.resume(t1);
                        break;
                    }
                    i = A(i);
                }
            },
            "interactions:stop": function(t1) {
                var e = t1.interaction.inertia;
                e.active && e.stop();
            },
            "interactions:before-action-resume": function(t1) {
                var e = t1.interaction.modification;
                e.stop(t1), e.start(t1, t1.interaction.coords.cur.page), e.applyToInteraction(t1);
            },
            "interactions:before-action-inertiastart": function(t1) {
                return t1.interaction.modification.setAndApply(t1);
            },
            "interactions:action-resume": xe,
            "interactions:action-inertiastart": xe,
            "interactions:after-action-inertiastart": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            },
            "interactions:after-action-resume": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            }
        }
    };
    function Ye(t1, e, n, r) {
        var i = 1 - t1;
        return i * i * e + 2 * i * t1 * n + t1 * t1 * r;
    }
    function Le(t1, e, n, r) {
        return -n * (t1 /= r) * (t1 - 2) + e;
    }
    var qe = Xe;
    function Be(t1, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            if (t1.immediatePropagationStopped) break;
            r(t1);
        }
    }
    var Ve = function() {
        function t1(e) {
            r(this, t1), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = V({}, e || {});
        }
        return o(t1, [
            {
                key: "fire",
                value: function(t1) {
                    var e, n = this.global;
                    (e = this.types[t1.type]) && Be(t1, e), !t1.propagationStopped && n && (e = n[t1.type]) && Be(t1, e);
                }
            },
            {
                key: "on",
                value: function(t1, e) {
                    var n = $(t1, e);
                    for(t1 in n)this.types[t1] = gt(this.types[t1] || [], n[t1]);
                }
            },
            {
                key: "off",
                value: function(t1, e) {
                    var n = $(t1, e);
                    for(t1 in n){
                        var r = this.types[t1];
                        if (r && r.length) for(var i = 0, o = n[t1]; i < o.length; i++){
                            var a = o[i], s = r.indexOf(a);
                            -1 !== s && r.splice(s, 1);
                        }
                    }
                }
            },
            {
                key: "getRect",
                value: function(t1) {
                    return null;
                }
            }
        ]), t1;
    }();
    var We = function() {
        function t1(e) {
            r(this, t1), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, tt(this, e);
        }
        return o(t1, [
            {
                key: "preventOriginalDefault",
                value: function() {
                    this.originalEvent.preventDefault();
                }
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.originalEvent.stopPropagation();
                }
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.originalEvent.stopImmediatePropagation();
                }
            }
        ]), t1;
    }();
    function Ge(t1) {
        return w.object(t1) ? {
            capture: !!t1.capture,
            passive: !!t1.passive
        } : {
            capture: !!t1,
            passive: !1
        };
    }
    function Ne(t1, e) {
        return t1 === e || ("boolean" == typeof t1 ? !!e.capture === t1 && !1 == !!e.passive : !!t1.capture == !!e.capture && !!t1.passive == !!e.passive);
    }
    var Ue = {
        id: "events",
        install: function(t1) {
            var e, n = [], r = {}, i = [], o = {
                add: a,
                remove: s,
                addDelegate: function(t1, e, n, o, s) {
                    var u = Ge(s);
                    if (!r[n]) {
                        r[n] = [];
                        for(var p = 0; p < i.length; p++){
                            var f = i[p];
                            a(f, n, c), a(f, n, l, !0);
                        }
                    }
                    var d = r[n], h = bt(d, function(n) {
                        return n.selector === t1 && n.context === e;
                    });
                    h || (h = {
                        selector: t1,
                        context: e,
                        listeners: []
                    }, d.push(h));
                    h.listeners.push({
                        func: o,
                        options: u
                    });
                },
                removeDelegate: function(t1, e, n, i, o) {
                    var a, u = Ge(o), p = r[n], f = !1;
                    if (!p) return;
                    for(a = p.length - 1; a >= 0; a--){
                        var d = p[a];
                        if (d.selector === t1 && d.context === e) {
                            for(var h = d.listeners, v = h.length - 1; v >= 0; v--){
                                var g = h[v];
                                if (g.func === i && Ne(g.options, u)) {
                                    h.splice(v, 1), h.length || (p.splice(a, 1), s(e, n, c), s(e, n, l, !0)), f = !0;
                                    break;
                                }
                            }
                            if (f) break;
                        }
                    }
                },
                delegateListener: c,
                delegateUseCapture: l,
                delegatedEvents: r,
                documents: i,
                targets: n,
                supportsOptions: !1,
                supportsPassive: !1
            };
            function a(t1, e, r, i) {
                if (t1.addEventListener) {
                    var a = Ge(i), s = bt(n, function(e) {
                        return e.eventTarget === t1;
                    });
                    s || (s = {
                        eventTarget: t1,
                        events: {}
                    }, n.push(s)), s.events[e] || (s.events[e] = []), bt(s.events[e], function(t1) {
                        return t1.func === r && Ne(t1.options, a);
                    }) || (t1.addEventListener(e, r, o.supportsOptions ? a : a.capture), s.events[e].push({
                        func: r,
                        options: a
                    }));
                }
            }
            function s(t1, e, r, i) {
                if (t1.addEventListener && t1.removeEventListener) {
                    var a = yt(n, function(e) {
                        return e.eventTarget === t1;
                    }), c = n[a];
                    if (c && c.events) {
                        if ("all" !== e) {
                            var l = !1, u = c.events[e];
                            if (u) {
                                if ("all" === r) {
                                    for(var p = u.length - 1; p >= 0; p--){
                                        var f = u[p];
                                        s(t1, e, f.func, f.options);
                                    }
                                    return;
                                }
                                for(var d = Ge(i), h = 0; h < u.length; h++){
                                    var v = u[h];
                                    if (v.func === r && Ne(v.options, d)) {
                                        t1.removeEventListener(e, r, o.supportsOptions ? d : d.capture), u.splice(h, 1), 0 === u.length && (delete c.events[e], l = !0);
                                        break;
                                    }
                                }
                            }
                            l && !Object.keys(c.events).length && n.splice(a, 1);
                        } else for(e in c.events)c.events.hasOwnProperty(e) && s(t1, e, "all");
                    }
                }
            }
            function c(t1, e) {
                for(var n = Ge(e), i = new We(t1), o = r[t1.type], a = ht(t1)[0], s = a; w.element(s);){
                    for(var c = 0; c < o.length; c++){
                        var l = o[c], u = l.selector, p = l.context;
                        if (R(s, u) && M(p, a) && M(p, s)) {
                            var f = l.listeners;
                            i.currentTarget = s;
                            for(var d = 0; d < f.length; d++){
                                var h = f[d];
                                Ne(h.options, n) && h.func(i);
                            }
                        }
                    }
                    s = A(s);
                }
            }
            function l(t1) {
                return c(t1, !0);
            }
            return null == (e = t1.document) || e.createElement("div").addEventListener("test", null, {
                get capture () {
                    return o.supportsOptions = !0;
                },
                get passive () {
                    return o.supportsPassive = !0;
                }
            }), t1.events = o, o;
        }
    }, He = {
        methodOrder: [
            "simulationResume",
            "mouseOrPen",
            "hasPointer",
            "idle"
        ],
        search: function(t1) {
            for(var e = 0, n = He.methodOrder; e < n.length; e++){
                var r = n[e], i = He[r](t1);
                if (i) return i;
            }
            return null;
        },
        simulationResume: function(t1) {
            var e = t1.pointerType, n = t1.eventType, r = t1.eventTarget, i = t1.scope;
            if (!/down|start/i.test(n)) return null;
            for(var o = 0, a = i.interactions.list; o < a.length; o++){
                var s = a[o], c = r;
                if (s.simulation && s.simulation.allowResume && s.pointerType === e) for(; c;){
                    if (c === s.element) return s;
                    c = A(c);
                }
            }
            return null;
        },
        mouseOrPen: function(t1) {
            var e, n = t1.pointerId, r = t1.pointerType, i = t1.eventType, o = t1.scope;
            if ("mouse" !== r && "pen" !== r) return null;
            for(var a = 0, s = o.interactions.list; a < s.length; a++){
                var c = s[a];
                if (c.pointerType === r) {
                    if (c.simulation && !Ke(c, n)) continue;
                    if (c.interacting()) return c;
                    e || (e = c);
                }
            }
            if (e) return e;
            for(var l = 0, u = o.interactions.list; l < u.length; l++){
                var p = u[l];
                if (!(p.pointerType !== r || /down/i.test(i) && p.simulation)) return p;
            }
            return null;
        },
        hasPointer: function(t1) {
            for(var e = t1.pointerId, n = 0, r = t1.scope.interactions.list; n < r.length; n++){
                var i = r[n];
                if (Ke(i, e)) return i;
            }
            return null;
        },
        idle: function(t1) {
            for(var e = t1.pointerType, n = 0, r = t1.scope.interactions.list; n < r.length; n++){
                var i = r[n];
                if (1 === i.pointers.length) {
                    var o = i.interactable;
                    if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
                } else if (i.pointers.length >= 2) continue;
                if (!i.interacting() && e === i.pointerType) return i;
            }
            return null;
        }
    };
    function Ke(t1, e) {
        return t1.pointers.some(function(t1) {
            return t1.id === e;
        });
    }
    var $e = He, Je = [
        "pointerDown",
        "pointerMove",
        "pointerUp",
        "updatePointer",
        "removePointer",
        "windowBlur"
    ];
    function Qe(t1, e) {
        return function(n) {
            var r = e.interactions.list, i = dt(n), o = ht(n), a = o[0], s = o[1], c = [];
            if (/^touch/.test(n.type)) {
                e.prevTouchTime = e.now();
                for(var l = 0, u = n.changedTouches; l < u.length; l++){
                    var p = u[l], f = {
                        pointer: p,
                        pointerId: at(p),
                        pointerType: i,
                        eventType: n.type,
                        eventTarget: a,
                        curEventTarget: s,
                        scope: e
                    }, d = Ze(f);
                    c.push([
                        f.pointer,
                        f.eventTarget,
                        f.curEventTarget,
                        d
                    ]);
                }
            } else {
                var h = !1;
                if (!I.supportsPointerEvent && /mouse/.test(n.type)) {
                    for(var v = 0; v < r.length && !h; v++)h = "mouse" !== r[v].pointerType && r[v].pointerIsDown;
                    h = h || e.now() - e.prevTouchTime < 500 || 0 === n.timeStamp;
                }
                if (!h) {
                    var g = {
                        pointer: n,
                        pointerId: at(n),
                        pointerType: i,
                        eventType: n.type,
                        curEventTarget: s,
                        eventTarget: a,
                        scope: e
                    }, m = Ze(g);
                    c.push([
                        g.pointer,
                        g.eventTarget,
                        g.curEventTarget,
                        m
                    ]);
                }
            }
            for(var y = 0; y < c.length; y++){
                var b = c[y], x = b[0], w = b[1], E = b[2];
                b[3][t1](x, n, w, E);
            }
        };
    }
    function Ze(t1) {
        var e = t1.pointerType, n = t1.scope, r = {
            interaction: $e.search(t1),
            searchDetails: t1
        };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({
            pointerType: e
        });
    }
    function tn(t1, e) {
        var n = t1.doc, r = t1.scope, i = t1.options, o = r.interactions.docEvents, a = r.events, s = a[e];
        for(var c in r.browser.isIOS && !i.events && (i.events = {
            passive: !1
        }), a.delegatedEvents)s(n, c, a.delegateListener), s(n, c, a.delegateUseCapture, !0);
        for(var l = i && i.events, u = 0; u < o.length; u++){
            var p = o[u];
            s(n, p.type, p.listener, l);
        }
    }
    var en = {
        id: "core/interactions",
        install: function(t1) {
            for(var e = {}, n = 0; n < Je.length; n++){
                var i = Je[n];
                e[i] = Qe(i, t1);
            }
            var a, c = I.pEventTypes;
            function l() {
                for(var e = 0, n = t1.interactions.list; e < n.length; e++){
                    var r = n[e];
                    if (r.pointerIsDown && "touch" === r.pointerType && !r._interacting) for(var i = function() {
                        var e = a[o];
                        t1.documents.some(function(t1) {
                            return M(t1.doc, e.downTarget);
                        }) || r.removePointer(e.pointer, e.event);
                    }, o = 0, a = r.pointers; o < a.length; o++)i();
                }
            }
            (a = k.PointerEvent ? [
                {
                    type: c.down,
                    listener: l
                },
                {
                    type: c.down,
                    listener: e.pointerDown
                },
                {
                    type: c.move,
                    listener: e.pointerMove
                },
                {
                    type: c.up,
                    listener: e.pointerUp
                },
                {
                    type: c.cancel,
                    listener: e.pointerUp
                }
            ] : [
                {
                    type: "mousedown",
                    listener: e.pointerDown
                },
                {
                    type: "mousemove",
                    listener: e.pointerMove
                },
                {
                    type: "mouseup",
                    listener: e.pointerUp
                },
                {
                    type: "touchstart",
                    listener: l
                },
                {
                    type: "touchstart",
                    listener: e.pointerDown
                },
                {
                    type: "touchmove",
                    listener: e.pointerMove
                },
                {
                    type: "touchend",
                    listener: e.pointerUp
                },
                {
                    type: "touchcancel",
                    listener: e.pointerUp
                }
            ]).push({
                type: "blur",
                listener: function(e) {
                    for(var n = 0, r = t1.interactions.list; n < r.length; n++)r[n].documentBlur(e);
                }
            }), t1.prevTouchTime = 0, t1.Interaction = function(e) {
                s(i, e);
                var n = p(i);
                function i() {
                    return r(this, i), n.apply(this, arguments);
                }
                return o(i, [
                    {
                        key: "pointerMoveTolerance",
                        get: function() {
                            return t1.interactions.pointerMoveTolerance;
                        },
                        set: function(e) {
                            t1.interactions.pointerMoveTolerance = e;
                        }
                    },
                    {
                        key: "_now",
                        value: function() {
                            return t1.now();
                        }
                    }
                ]), i;
            }(De), t1.interactions = {
                list: [],
                new: function(e) {
                    e.scopeFire = function(e, n) {
                        return t1.fire(e, n);
                    };
                    var n = new t1.Interaction(e);
                    return t1.interactions.list.push(n), n;
                },
                listeners: e,
                docEvents: a,
                pointerMoveTolerance: 1
            }, t1.usePlugin(he);
        },
        listeners: {
            "scope:add-document": function(t1) {
                return tn(t1, "add");
            },
            "scope:remove-document": function(t1) {
                return tn(t1, "remove");
            },
            "interactable:unset": function(t1, e) {
                for(var n = t1.interactable, r = e.interactions.list.length - 1; r >= 0; r--){
                    var i = e.interactions.list[r];
                    i.interactable === n && (i.stop(), e.fire("interactions:destroy", {
                        interaction: i
                    }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
                }
            }
        },
        onDocSignal: tn,
        doOnInteractions: Qe,
        methodNames: Je
    }, nn = en, rn = function(t1) {
        return t1[t1.On = 0] = "On", t1[t1.Off = 1] = "Off", t1;
    }(rn || {}), on = function() {
        function t1(e, n, i, o) {
            r(this, t1), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Ve, this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || i, this._win = y(B(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = o, this.set(n);
        }
        return o(t1, [
            {
                key: "_defaults",
                get: function() {
                    return {
                        base: {},
                        perAction: {},
                        actions: {}
                    };
                }
            },
            {
                key: "setOnEvents",
                value: function(t1, e) {
                    return w.func(e.onstart) && this.on("".concat(t1, "start"), e.onstart), w.func(e.onmove) && this.on("".concat(t1, "move"), e.onmove), w.func(e.onend) && this.on("".concat(t1, "end"), e.onend), w.func(e.oninertiastart) && this.on("".concat(t1, "inertiastart"), e.oninertiastart), this;
                }
            },
            {
                key: "updatePerActionListeners",
                value: function(t1, e, n) {
                    var r, i = this, o = null == (r = this._actions.map[t1]) ? void 0 : r.filterEventType, a = function(t1) {
                        return (null == o || o(t1)) && ve(t1, i._actions);
                    };
                    (w.array(e) || w.object(e)) && this._onOff(rn.Off, t1, e, void 0, a), (w.array(n) || w.object(n)) && this._onOff(rn.On, t1, n, void 0, a);
                }
            },
            {
                key: "setPerAction",
                value: function(t1, e) {
                    var n = this._defaults;
                    for(var r in e){
                        var i = r, o = this.options[t1], a = e[i];
                        "listeners" === i && this.updatePerActionListeners(t1, o.listeners, a), w.array(a) ? o[i] = mt(a) : w.plainObject(a) ? (o[i] = V(o[i] || {}, ge(a)), w.object(n.perAction[i]) && "enabled" in n.perAction[i] && (o[i].enabled = !1 !== a.enabled)) : w.bool(a) && w.object(n.perAction[i]) ? o[i].enabled = a : o[i] = a;
                    }
                }
            },
            {
                key: "getRect",
                value: function(t1) {
                    return t1 = t1 || (w.element(this.target) ? this.target : null), w.string(this.target) && (t1 = t1 || this._context.querySelector(this.target)), L(t1);
                }
            },
            {
                key: "rectChecker",
                value: function(t1) {
                    var e = this;
                    return w.func(t1) ? (this.getRect = function(n) {
                        var r = V({}, t1.apply(e, n));
                        return "width" in r || (r.width = r.right - r.left, r.height = r.bottom - r.top), r;
                    }, this) : null === t1 ? (delete this.getRect, this) : this.getRect;
                }
            },
            {
                key: "_backCompatOption",
                value: function(t1, e) {
                    if (B(e) || w.object(e)) {
                        for(var n in this.options[t1] = e, this._actions.map)this.options[n][t1] = e;
                        return this;
                    }
                    return this.options[t1];
                }
            },
            {
                key: "origin",
                value: function(t1) {
                    return this._backCompatOption("origin", t1);
                }
            },
            {
                key: "deltaSource",
                value: function(t1) {
                    return "page" === t1 || "client" === t1 ? (this.options.deltaSource = t1, this) : this.options.deltaSource;
                }
            },
            {
                key: "getAllElements",
                value: function() {
                    var t1 = this.target;
                    return w.string(t1) ? Array.from(this._context.querySelectorAll(t1)) : w.func(t1) && t1.getAllElements ? t1.getAllElements() : w.element(t1) ? [
                        t1
                    ] : [];
                }
            },
            {
                key: "context",
                value: function() {
                    return this._context;
                }
            },
            {
                key: "inContext",
                value: function(t1) {
                    return this._context === t1.ownerDocument || M(this._context, t1);
                }
            },
            {
                key: "testIgnoreAllow",
                value: function(t1, e, n) {
                    return !this.testIgnore(t1.ignoreFrom, e, n) && this.testAllow(t1.allowFrom, e, n);
                }
            },
            {
                key: "testAllow",
                value: function(t1, e, n) {
                    return !t1 || !!w.element(n) && (w.string(t1) ? F(n, t1, e) : !!w.element(t1) && M(t1, n));
                }
            },
            {
                key: "testIgnore",
                value: function(t1, e, n) {
                    return !(!t1 || !w.element(n)) && (w.string(t1) ? F(n, t1, e) : !!w.element(t1) && M(t1, n));
                }
            },
            {
                key: "fire",
                value: function(t1) {
                    return this.events.fire(t1), this;
                }
            },
            {
                key: "_onOff",
                value: function(t1, e, n, r, i) {
                    w.object(e) && !w.array(e) && (r = n, n = null);
                    var o = $(e, n, i);
                    for(var a in o){
                        "wheel" === a && (a = I.wheelEvent);
                        for(var s = 0, c = o[a]; s < c.length; s++){
                            var l = c[s];
                            ve(a, this._actions) ? this.events[t1 === rn.On ? "on" : "off"](a, l) : w.string(this.target) ? this._scopeEvents[t1 === rn.On ? "addDelegate" : "removeDelegate"](this.target, this._context, a, l, r) : this._scopeEvents[t1 === rn.On ? "add" : "remove"](this.target, a, l, r);
                        }
                    }
                    return this;
                }
            },
            {
                key: "on",
                value: function(t1, e, n) {
                    return this._onOff(rn.On, t1, e, n);
                }
            },
            {
                key: "off",
                value: function(t1, e, n) {
                    return this._onOff(rn.Off, t1, e, n);
                }
            },
            {
                key: "set",
                value: function(t1) {
                    var e = this._defaults;
                    for(var n in w.object(t1) || (t1 = {}), this.options = ge(e.base), this._actions.methodDict){
                        var r = n, i = this._actions.methodDict[r];
                        this.options[r] = {}, this.setPerAction(r, V(V({}, e.perAction), e.actions[r])), this[i](t1[r]);
                    }
                    for(var o in t1)"getRect" !== o ? w.func(this[o]) && this[o](t1[o]) : this.rectChecker(t1.getRect);
                    return this;
                }
            },
            {
                key: "unset",
                value: function() {
                    if (w.string(this.target)) for(var t1 in this._scopeEvents.delegatedEvents)for(var e = this._scopeEvents.delegatedEvents[t1], n = e.length - 1; n >= 0; n--){
                        var r = e[n], i = r.selector, o = r.context, a = r.listeners;
                        i === this.target && o === this._context && e.splice(n, 1);
                        for(var s = a.length - 1; s >= 0; s--)this._scopeEvents.removeDelegate(this.target, this._context, t1, a[s][0], a[s][1]);
                    }
                    else this._scopeEvents.remove(this.target, "all");
                }
            }
        ]), t1;
    }(), an = function() {
        function t1(e) {
            var n = this;
            r(this, t1), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({
                "interactable:unset": function(t1) {
                    var e = t1.interactable, r = e.target, i = w.string(r) ? n.selectorMap[r] : r[n.scope.id], o = yt(i, function(t1) {
                        return t1 === e;
                    });
                    i.splice(o, 1);
                }
            });
        }
        return o(t1, [
            {
                key: "new",
                value: function(t1, e) {
                    e = V(e || {}, {
                        actions: this.scope.actions
                    });
                    var n = new this.scope.Interactable(t1, e, this.scope.document, this.scope.events);
                    return this.scope.addDocument(n._doc), this.list.push(n), w.string(t1) ? (this.selectorMap[t1] || (this.selectorMap[t1] = []), this.selectorMap[t1].push(n)) : (n.target[this.scope.id] || Object.defineProperty(t1, this.scope.id, {
                        value: [],
                        configurable: !0
                    }), t1[this.scope.id].push(n)), this.scope.fire("interactable:new", {
                        target: t1,
                        options: e,
                        interactable: n,
                        win: this.scope._win
                    }), n;
                }
            },
            {
                key: "getExisting",
                value: function(t1, e) {
                    var n = e && e.context || this.scope.document, r = w.string(t1), i = r ? this.selectorMap[t1] : t1[this.scope.id];
                    if (i) return bt(i, function(e) {
                        return e._context === n && (r || e.inContext(t1));
                    });
                }
            },
            {
                key: "forEachMatch",
                value: function(t1, e) {
                    for(var n = 0, r = this.list; n < r.length; n++){
                        var i = r[n], o = void 0;
                        if ((w.string(i.target) ? w.element(t1) && R(t1, i.target) : t1 === i.target) && i.inContext(t1) && (o = e(i)), void 0 !== o) return o;
                    }
                }
            }
        ]), t1;
    }();
    var sn = function() {
        function t1() {
            var e = this;
            r(this, t1), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = I, this.defaults = ge(Te), this.Eventable = Ve, this.actions = {
                map: {},
                phases: {
                    start: !0,
                    move: !0,
                    end: !0
                },
                methodDict: {},
                phaselessTypes: {}
            }, this.interactStatic = function(t1) {
                var e = function e(n, r) {
                    var i = t1.interactables.getExisting(n, r);
                    return i || ((i = t1.interactables.new(n, r)).events.global = e.globalEvents), i;
                };
                return e.getPointerAverage = lt, e.getTouchBBox = ut, e.getTouchDistance = pt, e.getTouchAngle = ft, e.getElementRect = L, e.getElementClientRect = Y, e.matchesSelector = R, e.closest = z, e.globalEvents = {}, e.version = "1.10.27", e.scope = t1, e.use = function(t1, e) {
                    return this.scope.usePlugin(t1, e), this;
                }, e.isSet = function(t1, e) {
                    return !!this.scope.interactables.get(t1, e && e.context);
                }, e.on = Nt(function(t1, e, n) {
                    if (w.string(t1) && -1 !== t1.search(" ") && (t1 = t1.trim().split(/ +/)), w.array(t1)) {
                        for(var r = 0, i = t1; r < i.length; r++){
                            var o = i[r];
                            this.on(o, e, n);
                        }
                        return this;
                    }
                    if (w.object(t1)) {
                        for(var a in t1)this.on(a, t1[a], e);
                        return this;
                    }
                    return ve(t1, this.scope.actions) ? this.globalEvents[t1] ? this.globalEvents[t1].push(e) : this.globalEvents[t1] = [
                        e
                    ] : this.scope.events.add(this.scope.document, t1, e, {
                        options: n
                    }), this;
                }, "The interact.on() method is being deprecated"), e.off = Nt(function(t1, e, n) {
                    if (w.string(t1) && -1 !== t1.search(" ") && (t1 = t1.trim().split(/ +/)), w.array(t1)) {
                        for(var r = 0, i = t1; r < i.length; r++){
                            var o = i[r];
                            this.off(o, e, n);
                        }
                        return this;
                    }
                    if (w.object(t1)) {
                        for(var a in t1)this.off(a, t1[a], e);
                        return this;
                    }
                    var s;
                    return ve(t1, this.scope.actions) ? t1 in this.globalEvents && -1 !== (s = this.globalEvents[t1].indexOf(e)) && this.globalEvents[t1].splice(s, 1) : this.scope.events.remove(this.scope.document, t1, e, n), this;
                }, "The interact.off() method is being deprecated"), e.debug = function() {
                    return this.scope;
                }, e.supportsTouch = function() {
                    return I.supportsTouch;
                }, e.supportsPointerEvent = function() {
                    return I.supportsPointerEvent;
                }, e.stop = function() {
                    for(var t1 = 0, e = this.scope.interactions.list; t1 < e.length; t1++)e[t1].stop();
                    return this;
                }, e.pointerMoveTolerance = function(t1) {
                    return w.number(t1) ? (this.scope.interactions.pointerMoveTolerance = t1, this) : this.scope.interactions.pointerMoveTolerance;
                }, e.addDocument = function(t1, e) {
                    this.scope.addDocument(t1, e);
                }, e.removeDocument = function(t1) {
                    this.scope.removeDocument(t1);
                }, e;
            }(this), this.InteractEvent = Se, this.Interactable = void 0, this.interactables = new an(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = {
                list: [],
                map: {}
            }, this.onWindowUnload = function(t1) {
                return e.removeDocument(t1.target);
            };
            var n = this;
            this.Interactable = function(t1) {
                s(i, t1);
                var e = p(i);
                function i() {
                    return r(this, i), e.apply(this, arguments);
                }
                return o(i, [
                    {
                        key: "_defaults",
                        get: function() {
                            return n.defaults;
                        }
                    },
                    {
                        key: "set",
                        value: function(t1) {
                            return f(c(i.prototype), "set", this).call(this, t1), n.fire("interactable:set", {
                                options: t1,
                                interactable: this
                            }), this;
                        }
                    },
                    {
                        key: "unset",
                        value: function() {
                            f(c(i.prototype), "unset", this).call(this);
                            var t1 = n.interactables.list.indexOf(this);
                            t1 < 0 || (n.interactables.list.splice(t1, 1), n.fire("interactable:unset", {
                                interactable: this
                            }));
                        }
                    }
                ]), i;
            }(on);
        }
        return o(t1, [
            {
                key: "addListeners",
                value: function(t1, e) {
                    this.listenerMaps.push({
                        id: e,
                        map: t1
                    });
                }
            },
            {
                key: "fire",
                value: function(t1, e) {
                    for(var n = 0, r = this.listenerMaps; n < r.length; n++){
                        var i = r[n].map[t1];
                        if (i && !1 === i(e, this, t1)) return !1;
                    }
                }
            },
            {
                key: "init",
                value: function(t1) {
                    return this.isInitialized ? this : function(t1, e) {
                        t1.isInitialized = !0, w.window(e) && m(e);
                        return k.init(e), I.init(e), Lt.init(e), t1.window = e, t1.document = e.document, t1.usePlugin(nn), t1.usePlugin(Ue), t1;
                    }(this, t1);
                }
            },
            {
                key: "pluginIsInstalled",
                value: function(t1) {
                    var e = t1.id;
                    return e ? !!this._plugins.map[e] : -1 !== this._plugins.list.indexOf(t1);
                }
            },
            {
                key: "usePlugin",
                value: function(t1, e) {
                    if (!this.isInitialized) return this;
                    if (this.pluginIsInstalled(t1)) return this;
                    if (t1.id && (this._plugins.map[t1.id] = t1), this._plugins.list.push(t1), t1.install && t1.install(this, e), t1.listeners && t1.before) {
                        for(var n = 0, r = this.listenerMaps.length, i = t1.before.reduce(function(t1, e) {
                            return t1[e] = !0, t1[cn(e)] = !0, t1;
                        }, {}); n < r; n++){
                            var o = this.listenerMaps[n].id;
                            if (o && (i[o] || i[cn(o)])) break;
                        }
                        this.listenerMaps.splice(n, 0, {
                            id: t1.id,
                            map: t1.listeners
                        });
                    } else t1.listeners && this.listenerMaps.push({
                        id: t1.id,
                        map: t1.listeners
                    });
                    return this;
                }
            },
            {
                key: "addDocument",
                value: function(t1, e) {
                    if (-1 !== this.getDocIndex(t1)) return !1;
                    var n = y(t1);
                    e = e ? V({}, e) : {}, this.documents.push({
                        doc: t1,
                        options: e
                    }), this.events.documents.push(t1), t1 !== this.document && this.events.add(n, "unload", this.onWindowUnload), this.fire("scope:add-document", {
                        doc: t1,
                        window: n,
                        scope: this,
                        options: e
                    });
                }
            },
            {
                key: "removeDocument",
                value: function(t1) {
                    var e = this.getDocIndex(t1), n = y(t1), r = this.documents[e].options;
                    this.events.remove(n, "unload", this.onWindowUnload), this.documents.splice(e, 1), this.events.documents.splice(e, 1), this.fire("scope:remove-document", {
                        doc: t1,
                        window: n,
                        scope: this,
                        options: r
                    });
                }
            },
            {
                key: "getDocIndex",
                value: function(t1) {
                    for(var e = 0; e < this.documents.length; e++)if (this.documents[e].doc === t1) return e;
                    return -1;
                }
            },
            {
                key: "getDocOptions",
                value: function(t1) {
                    var e = this.getDocIndex(t1);
                    return -1 === e ? null : this.documents[e].options;
                }
            },
            {
                key: "now",
                value: function() {
                    return (this.window.Date || Date).now();
                }
            }
        ]), t1;
    }();
    function cn(t1) {
        return t1 && t1.replace(/\/.*$/, "");
    }
    var ln = new sn, un = ln.interactStatic, pn = "undefined" != typeof globalThis ? globalThis : window;
    ln.init(pn);
    var fn = Object.freeze({
        __proto__: null,
        edgeTarget: function() {},
        elements: function() {},
        grid: function(t1) {
            var e = [
                [
                    "x",
                    "y"
                ],
                [
                    "left",
                    "top"
                ],
                [
                    "right",
                    "bottom"
                ],
                [
                    "width",
                    "height"
                ]
            ].filter(function(e) {
                var n = e[0], r = e[1];
                return n in t1 || r in t1;
            }), n = function(n, r) {
                for(var i = t1.range, o = t1.limits, a = void 0 === o ? {
                    left: -1 / 0,
                    right: 1 / 0,
                    top: -1 / 0,
                    bottom: 1 / 0
                } : o, s = t1.offset, c = void 0 === s ? {
                    x: 0,
                    y: 0
                } : s, l = {
                    range: i,
                    grid: t1,
                    x: null,
                    y: null
                }, u = 0; u < e.length; u++){
                    var p = e[u], f = p[0], d = p[1], h = Math.round((n - c.x) / t1[f]), v = Math.round((r - c.y) / t1[d]);
                    l[f] = Math.max(a.left, Math.min(a.right, h * t1[f] + c.x)), l[d] = Math.max(a.top, Math.min(a.bottom, v * t1[d] + c.y));
                }
                return l;
            };
            return n.grid = t1, n.coordFields = e, n;
        }
    }), dn = {
        id: "snappers",
        install: function(t1) {
            var e = t1.interactStatic;
            e.snappers = V(e.snappers || {}, fn), e.createSnapGrid = e.snappers.grid;
        }
    }, hn = dn, vn = {
        start: function(t1) {
            var n = t1.state, r = t1.rect, i = t1.edges, o = t1.pageCoords, a = n.options, s = a.ratio, c = a.enabled, l = n.options, u = l.equalDelta, p = l.modifiers;
            "preserve" === s && (s = r.width / r.height), n.startCoords = V({}, o), n.startRect = V({}, r), n.ratio = s, n.equalDelta = u;
            var f = n.linkedEdges = {
                top: i.top || i.left && !i.bottom,
                left: i.left || i.top && !i.right,
                bottom: i.bottom || i.right && !i.top,
                right: i.right || i.bottom && !i.left
            };
            if (n.xIsPrimaryAxis = !(!i.left && !i.right), n.equalDelta) {
                var d = (f.left ? 1 : -1) * (f.top ? 1 : -1);
                n.edgeSign = {
                    x: d,
                    y: d
                };
            } else n.edgeSign = {
                x: f.left ? -1 : 1,
                y: f.top ? -1 : 1
            };
            if (!1 !== c && V(i, f), null != p && p.length) {
                var h = new me(t1.interaction);
                h.copyFrom(t1.interaction.modification), h.prepareStates(p), n.subModification = h, h.startAll(e({}, t1));
            }
        },
        set: function(t1) {
            var n = t1.state, r = t1.rect, i = t1.coords, o = n.linkedEdges, a = V({}, i), s = n.equalDelta ? gn : mn;
            if (V(t1.edges, o), s(n, n.xIsPrimaryAxis, i, r), !n.subModification) return null;
            var c = V({}, r);
            H(o, c, {
                x: i.x - a.x,
                y: i.y - a.y
            });
            var l = n.subModification.setAll(e(e({}, t1), {}, {
                rect: c,
                edges: o,
                pageCoords: i,
                prevCoords: i,
                prevRect: c
            })), u = l.delta;
            l.changed && (s(n, Math.abs(u.x) > Math.abs(u.y), l.coords, l.rect), V(i, l.coords));
            return l.eventProps;
        },
        defaults: {
            ratio: "preserve",
            equalDelta: !1,
            modifiers: [],
            enabled: !1
        }
    };
    function gn(t1, e, n) {
        var r = t1.startCoords, i = t1.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
    }
    function mn(t1, e, n, r) {
        var i = t1.startRect, o = t1.startCoords, a = t1.ratio, s = t1.edgeSign;
        if (e) {
            var c = r.width / a;
            n.y = o.y + (c - i.height) * s.y;
        } else {
            var l = r.height * a;
            n.x = o.x + (l - i.width) * s.x;
        }
    }
    var yn = be(vn, "aspectRatio"), bn = function() {};
    bn._defaults = {};
    var xn = bn;
    function wn(t1, e, n) {
        return w.func(t1) ? G(t1, e.interactable, e.element, [
            n.x,
            n.y,
            e
        ]) : G(t1, e.interactable, e.element);
    }
    var En = {
        start: function(t1) {
            var e = t1.rect, n = t1.startOffset, r = t1.state, i = t1.interaction, o = t1.pageCoords, a = r.options, s = a.elementRect, c = V({
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }, a.offset || {});
            if (e && s) {
                var l = wn(a.restriction, i, o);
                if (l) {
                    var u = l.right - l.left - e.width, p = l.bottom - l.top - e.height;
                    u < 0 && (c.left += u, c.right += u), p < 0 && (c.top += p, c.bottom += p);
                }
                c.left += n.left - e.width * s.left, c.top += n.top - e.height * s.top, c.right += n.right - e.width * (1 - s.right), c.bottom += n.bottom - e.height * (1 - s.bottom);
            }
            r.offset = c;
        },
        set: function(t1) {
            var e = t1.coords, n = t1.interaction, r = t1.state, i = r.options, o = r.offset, a = wn(i.restriction, n, e);
            if (a) {
                var s = function(t1) {
                    return !t1 || "left" in t1 && "top" in t1 || ((t1 = V({}, t1)).left = t1.x || 0, t1.top = t1.y || 0, t1.right = t1.right || t1.left + t1.width, t1.bottom = t1.bottom || t1.top + t1.height), t1;
                }(a);
                e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left), e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top);
            }
        },
        defaults: {
            restriction: null,
            elementRect: null,
            offset: null,
            endOnly: !1,
            enabled: !1
        }
    }, Tn = be(En, "restrict"), Sn = {
        top: 1 / 0,
        left: 1 / 0,
        bottom: -1 / 0,
        right: -1 / 0
    }, _n = {
        top: -1 / 0,
        left: -1 / 0,
        bottom: 1 / 0,
        right: 1 / 0
    };
    function Pn(t1, e) {
        for(var n = 0, r = [
            "top",
            "left",
            "bottom",
            "right"
        ]; n < r.length; n++){
            var i = r[n];
            i in t1 || (t1[i] = e[i]);
        }
        return t1;
    }
    var On = {
        noInner: Sn,
        noOuter: _n,
        start: function(t1) {
            var e, n = t1.interaction, r = t1.startOffset, i = t1.state, o = i.options;
            o && (e = N(wn(o.offset, n, n.coords.start.page))), e = e || {
                x: 0,
                y: 0
            }, i.offset = {
                top: e.y + r.top,
                left: e.x + r.left,
                bottom: e.y - r.bottom,
                right: e.x - r.right
            };
        },
        set: function(t1) {
            var e = t1.coords, n = t1.edges, r = t1.interaction, i = t1.state, o = i.offset, a = i.options;
            if (n) {
                var s = V({}, e), c = wn(a.inner, r, s) || {}, l = wn(a.outer, r, s) || {};
                Pn(c, Sn), Pn(l, _n), n.top ? e.y = Math.min(Math.max(l.top + o.top, s.y), c.top + o.top) : n.bottom && (e.y = Math.max(Math.min(l.bottom + o.bottom, s.y), c.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(l.left + o.left, s.x), c.left + o.left) : n.right && (e.x = Math.max(Math.min(l.right + o.right, s.x), c.right + o.right));
            }
        },
        defaults: {
            inner: null,
            outer: null,
            offset: null,
            endOnly: !1,
            enabled: !1
        }
    }, kn = be(On, "restrictEdges"), Dn = V({
        get elementRect () {
            return {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            };
        },
        set elementRect (t){}
    }, En.defaults), In = be({
        start: En.start,
        set: En.set,
        defaults: Dn
    }, "restrictRect"), Mn = {
        width: -1 / 0,
        height: -1 / 0
    }, zn = {
        width: 1 / 0,
        height: 1 / 0
    };
    var An = be({
        start: function(t1) {
            return On.start(t1);
        },
        set: function(t1) {
            var e = t1.interaction, n = t1.state, r = t1.rect, i = t1.edges, o = n.options;
            if (i) {
                var a = U(wn(o.min, e, t1.coords)) || Mn, s = U(wn(o.max, e, t1.coords)) || zn;
                n.options = {
                    endOnly: o.endOnly,
                    inner: V({}, On.noInner),
                    outer: V({}, On.noOuter)
                }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), On.set(t1), n.options = o;
            }
        },
        defaults: {
            min: null,
            max: null,
            endOnly: !1,
            enabled: !1
        }
    }, "restrictSize");
    var Rn = {
        start: function(t1) {
            var e, n = t1.interaction, r = t1.interactable, i = t1.element, o = t1.rect, a = t1.state, s = t1.startOffset, c = a.options, l = c.offsetWithOrigin ? function(t1) {
                var e = t1.interaction.element, n = N(G(t1.state.options.origin, null, null, [
                    e
                ])), r = n || K(t1.interactable, e, t1.interaction.prepared.name);
                return r;
            }(t1) : {
                x: 0,
                y: 0
            };
            if ("startCoords" === c.offset) e = {
                x: n.coords.start.page.x,
                y: n.coords.start.page.y
            };
            else {
                var u = G(c.offset, r, i, [
                    n
                ]);
                (e = N(u) || {
                    x: 0,
                    y: 0
                }).x += l.x, e.y += l.y;
            }
            var p = c.relativePoints;
            a.offsets = o && p && p.length ? p.map(function(t1, n) {
                return {
                    index: n,
                    relativePoint: t1,
                    x: s.left - o.width * t1.x + e.x,
                    y: s.top - o.height * t1.y + e.y
                };
            }) : [
                {
                    index: 0,
                    relativePoint: null,
                    x: e.x,
                    y: e.y
                }
            ];
        },
        set: function(t1) {
            var e = t1.interaction, n = t1.coords, r = t1.state, i = r.options, o = r.offsets, a = K(e.interactable, e.element, e.prepared.name), s = V({}, n), c = [];
            i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
            for(var l = 0, u = o; l < u.length; l++)for(var p = u[l], f = s.x - p.x, d = s.y - p.y, h = 0, v = i.targets.length; h < v; h++){
                var g = i.targets[h], m = void 0;
                (m = w.func(g) ? g(f, d, e._proxy, p, h) : g) && c.push({
                    x: (w.number(m.x) ? m.x : f) + p.x,
                    y: (w.number(m.y) ? m.y : d) + p.y,
                    range: w.number(m.range) ? m.range : i.range,
                    source: g,
                    index: h,
                    offset: p
                });
            }
            for(var y = {
                target: null,
                inRange: !1,
                distance: 0,
                range: 0,
                delta: {
                    x: 0,
                    y: 0
                }
            }, b = 0; b < c.length; b++){
                var x = c[b], E = x.range, T = x.x - s.x, S = x.y - s.y, _ = Q(T, S), P = _ <= E;
                E === 1 / 0 && y.inRange && y.range !== 1 / 0 && (P = !1), y.target && !(P ? y.inRange && E !== 1 / 0 ? _ / E < y.distance / y.range : E === 1 / 0 && y.range !== 1 / 0 || _ < y.distance : !y.inRange && _ < y.distance) || (y.target = x, y.distance = _, y.range = E, y.inRange = P, y.delta.x = T, y.delta.y = S);
            }
            return y.inRange && (n.x = y.target.x, n.y = y.target.y), r.closest = y, y;
        },
        defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            offsetWithOrigin: !0,
            origin: null,
            relativePoints: null,
            endOnly: !1,
            enabled: !1
        }
    }, Cn = be(Rn, "snap");
    var jn = {
        start: function(t1) {
            var e = t1.state, n = t1.edges, r = e.options;
            if (!n) return null;
            t1.state = {
                options: {
                    targets: null,
                    relativePoints: [
                        {
                            x: n.left ? 0 : 1,
                            y: n.top ? 0 : 1
                        }
                    ],
                    offset: r.offset || "self",
                    origin: {
                        x: 0,
                        y: 0
                    },
                    range: r.range
                }
            }, e.targetFields = e.targetFields || [
                [
                    "width",
                    "height"
                ],
                [
                    "x",
                    "y"
                ]
            ], Rn.start(t1), e.offsets = t1.state.offsets, t1.state = e;
        },
        set: function(t1) {
            var e = t1.interaction, n = t1.state, r = t1.coords, i = n.options, o = n.offsets, a = {
                x: r.x - o[0].x,
                y: r.y - o[0].y
            };
            n.options = V({}, i), n.options.targets = [];
            for(var s = 0, c = i.targets || []; s < c.length; s++){
                var l = c[s], u = void 0;
                if (u = w.func(l) ? l(a.x, a.y, e) : l) {
                    for(var p = 0, f = n.targetFields; p < f.length; p++){
                        var d = f[p], h = d[0], v = d[1];
                        if (h in u || v in u) {
                            u.x = u[h], u.y = u[v];
                            break;
                        }
                    }
                    n.options.targets.push(u);
                }
            }
            var g = Rn.set(t1);
            return n.options = i, g;
        },
        defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            endOnly: !1,
            enabled: !1
        }
    }, Fn = be(jn, "snapSize");
    var Xn = {
        aspectRatio: yn,
        restrictEdges: kn,
        restrict: Tn,
        restrictRect: In,
        restrictSize: An,
        snapEdges: be({
            start: function(t1) {
                var e = t1.edges;
                return e ? (t1.state.targetFields = t1.state.targetFields || [
                    [
                        e.left ? "left" : "right",
                        e.top ? "top" : "bottom"
                    ]
                ], jn.start(t1)) : null;
            },
            set: jn.set,
            defaults: V(ge(jn.defaults), {
                targets: void 0,
                range: void 0,
                offset: {
                    x: 0,
                    y: 0
                }
            })
        }, "snapEdges"),
        snap: Cn,
        snapSize: Fn,
        spring: xn,
        avoid: xn,
        transform: xn,
        rubberband: xn
    }, Yn = {
        id: "modifiers",
        install: function(t1) {
            var e = t1.interactStatic;
            for(var n in t1.usePlugin(Ee), t1.usePlugin(hn), e.modifiers = Xn, Xn){
                var r = Xn[n], i = r._defaults, o = r._methods;
                i._methods = o, t1.defaults.perAction[n] = i;
            }
        }
    }, Ln = Yn, qn = function(t1) {
        s(n, t1);
        var e = p(n);
        function n(t1, i, o, a, s, c) {
            var l;
            if (r(this, n), tt(u(l = e.call(this, s)), o), o !== i && tt(u(l), i), l.timeStamp = c, l.originalEvent = o, l.type = t1, l.pointerId = at(i), l.pointerType = dt(i), l.target = a, l.currentTarget = null, "tap" === t1) {
                var p = s.getPointerIndex(i);
                l.dt = l.timeStamp - s.pointers[p].downTime;
                var f = l.timeStamp - s.tapTime;
                l.double = !!s.prevTap && "doubletap" !== s.prevTap.type && s.prevTap.target === l.target && f < 500;
            } else "doubletap" === t1 && (l.dt = i.timeStamp - s.tapTime, l.double = !0);
            return l;
        }
        return o(n, [
            {
                key: "_subtractOrigin",
                value: function(t1) {
                    var e = t1.x, n = t1.y;
                    return this.pageX -= e, this.pageY -= n, this.clientX -= e, this.clientY -= n, this;
                }
            },
            {
                key: "_addOrigin",
                value: function(t1) {
                    var e = t1.x, n = t1.y;
                    return this.pageX += e, this.pageY += n, this.clientX += e, this.clientY += n, this;
                }
            },
            {
                key: "preventDefault",
                value: function() {
                    this.originalEvent.preventDefault();
                }
            }
        ]), n;
    }(vt), Bn = {
        id: "pointer-events/base",
        before: [
            "inertia",
            "modifiers",
            "auto-start",
            "actions"
        ],
        install: function(t1) {
            t1.pointerEvents = Bn, t1.defaults.actions.pointerEvents = Bn.defaults, V(t1.actions.phaselessTypes, Bn.types);
        },
        listeners: {
            "interactions:new": function(t1) {
                var e = t1.interaction;
                e.prevTap = null, e.tapTime = 0;
            },
            "interactions:update-pointer": function(t1) {
                var e = t1.down, n = t1.pointerInfo;
                if (!e && n.hold) return;
                n.hold = {
                    duration: 1 / 0,
                    timeout: null
                };
            },
            "interactions:move": function(t1, e) {
                var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                t1.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && Gn(t1), Vn({
                    interaction: n,
                    pointer: r,
                    event: i,
                    eventTarget: o,
                    type: "move"
                }, e));
            },
            "interactions:down": function(t1, e) {
                !function(t1, e) {
                    for(var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget, a = t1.pointerIndex, s = n.pointers[a].hold, c = q(o), l = {
                        interaction: n,
                        pointer: r,
                        event: i,
                        eventTarget: o,
                        type: "hold",
                        targets: [],
                        path: c,
                        node: null
                    }, u = 0; u < c.length; u++){
                        var p = c[u];
                        l.node = p, e.fire("pointerEvents:collect-targets", l);
                    }
                    if (!l.targets.length) return;
                    for(var f = 1 / 0, d = 0, h = l.targets; d < h.length; d++){
                        var v = h[d].eventable.options.holdDuration;
                        v < f && (f = v);
                    }
                    s.duration = f, s.timeout = setTimeout(function() {
                        Vn({
                            interaction: n,
                            eventTarget: o,
                            pointer: r,
                            event: i,
                            type: "hold"
                        }, e);
                    }, f);
                }(t1, e), Vn(t1, e);
            },
            "interactions:up": function(t1, e) {
                Gn(t1), Vn(t1, e), function(t1, e) {
                    var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                    n.pointerWasMoved || Vn({
                        interaction: n,
                        eventTarget: o,
                        pointer: r,
                        event: i,
                        type: "tap"
                    }, e);
                }(t1, e);
            },
            "interactions:cancel": function(t1, e) {
                Gn(t1), Vn(t1, e);
            }
        },
        PointerEvent: qn,
        fire: Vn,
        collectEventTargets: Wn,
        defaults: {
            holdDuration: 600,
            ignoreFrom: null,
            allowFrom: null,
            origin: {
                x: 0,
                y: 0
            }
        },
        types: {
            down: !0,
            move: !0,
            up: !0,
            cancel: !0,
            tap: !0,
            doubletap: !0,
            hold: !0
        }
    };
    function Vn(t1, e) {
        var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget, a = t1.type, s = t1.targets, c = void 0 === s ? Wn(t1, e) : s, l = new qn(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", {
            pointerEvent: l
        });
        for(var u = {
            interaction: n,
            pointer: r,
            event: i,
            eventTarget: o,
            targets: c,
            type: a,
            pointerEvent: l
        }, p = 0; p < c.length; p++){
            var f = c[p];
            for(var d in f.props || {})l[d] = f.props[d];
            var h = K(f.eventable, f.node);
            if (l._subtractOrigin(h), l.eventable = f.eventable, l.currentTarget = f.node, f.eventable.fire(l), l._addOrigin(h), l.immediatePropagationStopped || l.propagationStopped && p + 1 < c.length && c[p + 1].node !== l.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", u), "tap" === a) {
            var v = l.double ? Vn({
                interaction: n,
                pointer: r,
                event: i,
                eventTarget: o,
                type: "doubletap"
            }, e) : l;
            n.prevTap = v, n.tapTime = v.timeStamp;
        }
        return l;
    }
    function Wn(t1, e) {
        var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget, a = t1.type, s = n.getPointerIndex(r), c = n.pointers[s];
        if ("tap" === a && (n.pointerWasMoved || !c || c.downTarget !== o)) return [];
        for(var l = q(o), u = {
            interaction: n,
            pointer: r,
            event: i,
            eventTarget: o,
            type: a,
            path: l,
            targets: [],
            node: null
        }, p = 0; p < l.length; p++){
            var f = l[p];
            u.node = f, e.fire("pointerEvents:collect-targets", u);
        }
        return "hold" === a && (u.targets = u.targets.filter(function(t1) {
            var e, r;
            return t1.eventable.options.holdDuration === (null == (e = n.pointers[s]) || null == (r = e.hold) ? void 0 : r.duration);
        })), u.targets;
    }
    function Gn(t1) {
        var e = t1.interaction, n = t1.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
    }
    var Nn = Object.freeze({
        __proto__: null,
        default: Bn
    });
    function Un(t1) {
        var e = t1.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
    }
    var Hn = {
        id: "pointer-events/holdRepeat",
        install: function(t1) {
            t1.usePlugin(Bn);
            var e = t1.pointerEvents;
            e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t1.actions.phaselessTypes.holdrepeat = !0;
        },
        listeners: [
            "move",
            "up",
            "cancel",
            "endall"
        ].reduce(function(t1, e) {
            return t1["pointerEvents:".concat(e)] = Un, t1;
        }, {
            "pointerEvents:new": function(t1) {
                var e = t1.pointerEvent;
                "hold" === e.type && (e.count = (e.count || 0) + 1);
            },
            "pointerEvents:fired": function(t1, e) {
                var n = t1.interaction, r = t1.pointerEvent, i = t1.eventTarget, o = t1.targets;
                if ("hold" === r.type && o.length) {
                    var a = o[0].eventable.options.holdRepeatInterval;
                    a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
                        e.pointerEvents.fire({
                            interaction: n,
                            eventTarget: i,
                            type: "hold",
                            pointer: r,
                            event: r
                        }, e);
                    }, a));
                }
            }
        })
    }, Kn = Hn;
    var $n = {
        id: "pointer-events/interactableTargets",
        install: function(t1) {
            var e = t1.Interactable;
            e.prototype.pointerEvents = function(t1) {
                return V(this.events.options, t1), this;
            };
            var n = e.prototype._backCompatOption;
            e.prototype._backCompatOption = function(t1, e) {
                var r = n.call(this, t1, e);
                return r === this && (this.events.options[t1] = e), r;
            };
        },
        listeners: {
            "pointerEvents:collect-targets": function(t1, e) {
                var n = t1.targets, r = t1.node, i = t1.type, o = t1.eventTarget;
                e.interactables.forEachMatch(r, function(t1) {
                    var e = t1.events, a = e.options;
                    e.types[i] && e.types[i].length && t1.testIgnoreAllow(a, r, o) && n.push({
                        node: r,
                        eventable: e,
                        props: {
                            interactable: t1
                        }
                    });
                });
            },
            "interactable:new": function(t1) {
                var e = t1.interactable;
                e.events.getRect = function(t1) {
                    return e.getRect(t1);
                };
            },
            "interactable:set": function(t1, e) {
                var n = t1.interactable, r = t1.options;
                V(n.events.options, e.pointerEvents.defaults), V(n.events.options, r.pointerEvents || {});
            }
        }
    }, Jn = $n, Qn = {
        id: "pointer-events",
        install: function(t1) {
            t1.usePlugin(Nn), t1.usePlugin(Kn), t1.usePlugin(Jn);
        }
    }, Zn = Qn;
    var tr = {
        id: "reflow",
        install: function(t1) {
            var e = t1.Interactable;
            t1.actions.phases.reflow = !0, e.prototype.reflow = function(e) {
                return function(t1, e, n) {
                    for(var r = t1.getAllElements(), i = n.window.Promise, o = i ? [] : null, a = function() {
                        var a = r[s], c = t1.getRect(a);
                        if (!c) return 1;
                        var l, u = bt(n.interactions.list, function(n) {
                            return n.interacting() && n.interactable === t1 && n.element === a && n.prepared.name === e.name;
                        });
                        if (u) u.move(), o && (l = u._reflowPromise || new i(function(t1) {
                            u._reflowResolve = t1;
                        }));
                        else {
                            var p = U(c), f = function(t1) {
                                return {
                                    coords: t1,
                                    get page () {
                                        return this.coords.page;
                                    },
                                    get client () {
                                        return this.coords.client;
                                    },
                                    get timeStamp () {
                                        return this.coords.timeStamp;
                                    },
                                    get pageX () {
                                        return this.coords.page.x;
                                    },
                                    get pageY () {
                                        return this.coords.page.y;
                                    },
                                    get clientX () {
                                        return this.coords.client.x;
                                    },
                                    get clientY () {
                                        return this.coords.client.y;
                                    },
                                    get pointerId () {
                                        return this.coords.pointerId;
                                    },
                                    get target () {
                                        return this.coords.target;
                                    },
                                    get type () {
                                        return this.coords.type;
                                    },
                                    get pointerType () {
                                        return this.coords.pointerType;
                                    },
                                    get buttons () {
                                        return this.coords.buttons;
                                    },
                                    preventDefault: function() {}
                                };
                            }({
                                page: {
                                    x: p.x,
                                    y: p.y
                                },
                                client: {
                                    x: p.x,
                                    y: p.y
                                },
                                timeStamp: n.now()
                            });
                            l = function(t1, e, n, r, i) {
                                var o = t1.interactions.new({
                                    pointerType: "reflow"
                                }), a = {
                                    interaction: o,
                                    event: i,
                                    pointer: i,
                                    eventTarget: n,
                                    phase: "reflow"
                                };
                                o.interactable = e, o.element = n, o.prevEvent = i, o.updatePointer(i, i, n, !0), nt(o.coords.delta), Ut(o.prepared, r), o._doPhase(a);
                                var s = t1.window, c = s.Promise, l = c ? new c(function(t1) {
                                    o._reflowResolve = t1;
                                }) : void 0;
                                o._reflowPromise = l, o.start(r, e, n), o._interacting ? (o.move(a), o.end(i)) : (o.stop(), o._reflowResolve());
                                return o.removePointer(i, i), l;
                            }(n, t1, a, e, f);
                        }
                        o && o.push(l);
                    }, s = 0; s < r.length && !a(); s++);
                    return o && i.all(o).then(function() {
                        return t1;
                    });
                }(this, e, t1);
            };
        },
        listeners: {
            "interactions:stop": function(t1, e) {
                var n = t1.interaction;
                "reflow" === n.pointerType && (n._reflowResolve && n._reflowResolve(), function(t1, e) {
                    t1.splice(t1.indexOf(e), 1);
                }(e.interactions.list, n));
            }
        }
    }, er = tr;
    if (un.use(he), un.use(Ce), un.use(Zn), un.use(qe), un.use(Ln), un.use(pe), un.use(Xt), un.use(Gt), un.use(er), un.default = un, "object" === n(module) && module) try {
        module.exports = un;
    } catch (t1) {}
    return un.default = un, un;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequirebaba")

//# sourceMappingURL=index.975ef6c8.js.map
