/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);








const content = document.querySelector("#content")

const removeElementsByClass = (className) => {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

const deleteContent = (active, inactive1, inactive2) => {
    removeElementsByClass("home")
    removeElementsByClass("menu")
    removeElementsByClass("contact")
    removeElementsByClass("footer")
    active.classList.add('active')
    inactive1.classList.remove('active')
    inactive2.classList.remove('active')
}

const mainComponent = () => {
    content.append((0,_components_header__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent)(_components_data__WEBPACK_IMPORTED_MODULE_1__.div, _components_data__WEBPACK_IMPORTED_MODULE_1__.home, _components_data__WEBPACK_IMPORTED_MODULE_1__.menu, _components_data__WEBPACK_IMPORTED_MODULE_1__.contact, _components_data__WEBPACK_IMPORTED_MODULE_1__.navbarComponents))

    ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_2__.HomeComponent)()
    ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_6__.FooterComponent)()
    _components_data__WEBPACK_IMPORTED_MODULE_1__.home.classList.add('active')

    _components_data__WEBPACK_IMPORTED_MODULE_1__.div.onclick = () => {
        deleteContent(_components_data__WEBPACK_IMPORTED_MODULE_1__.home, _components_data__WEBPACK_IMPORTED_MODULE_1__.menu, _components_data__WEBPACK_IMPORTED_MODULE_1__.contact)
        ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_2__.HomeComponent)()
        ;(0,_components_footer__WEBPACK_IMPORTED_MODULE_6__.FooterComponent)()
    }

    document.body.querySelectorAll("li").forEach(element => {
        element.addEventListener('click', (e) => {

            if (e.target.textContent === _components_data__WEBPACK_IMPORTED_MODULE_1__.navbarComponents.home) {
                deleteContent(_components_data__WEBPACK_IMPORTED_MODULE_1__.home, _components_data__WEBPACK_IMPORTED_MODULE_1__.menu, _components_data__WEBPACK_IMPORTED_MODULE_1__.contact)
                ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_2__.HomeComponent)()
            }
            else if (e.target.textContent === _components_data__WEBPACK_IMPORTED_MODULE_1__.navbarComponents.menu) {
                deleteContent(_components_data__WEBPACK_IMPORTED_MODULE_1__.menu, _components_data__WEBPACK_IMPORTED_MODULE_1__.home, _components_data__WEBPACK_IMPORTED_MODULE_1__.contact)
                ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.MenuComponent)()
            }
            else if (e.target.textContent === _components_data__WEBPACK_IMPORTED_MODULE_1__.navbarComponents.contact) {
                deleteContent(_components_data__WEBPACK_IMPORTED_MODULE_1__.contact, _components_data__WEBPACK_IMPORTED_MODULE_1__.home, _components_data__WEBPACK_IMPORTED_MODULE_1__.menu)
                ;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_4__.ContactComponent)()
            }

            (0,_components_footer__WEBPACK_IMPORTED_MODULE_6__.FooterComponent)()
        })
    })

    document.body.appendChild(content)
}

mainComponent()

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans&family=Prompt:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-background: #000066;
    --main-shadow: #000080;
    --section-background: #19196d7e;
    --color-shadow: #00000065;

    --main-color-theme: #FFD700;
    --modal-background: rgb(216, 216, 216);
    --secondary-color-theme: #ffffff;
    --tertiary-color-theme: #ffffff;

    --header-height: 15vh;
    --footer-height: 10vh;
}

body {
    margin: 0;
    padding: 0;
    font-size: 24px;
    background-color: var(--main-background);
}

#content {
    height: 100%;
    width: 100%;
}

body::-webkit-scrollbar { 
    display: none;
}

/* ---------------------- MODAL ---------------------- */

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0, 0, 0, 0.637); /* Black w/ opacity */
    font-family: 'Prompt';
}

.modal-content {
    background-color: var(--modal-background);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    border-radius: 20px;
    width: 50%; /* Could be more or less, depending on screen size */

    font-size: 24px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* ---------------------- HEADER ---------------------- */

header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    color: var(--main-color-theme);
    font-family: 'Prompt';
    letter-spacing: 0.5px;

    height: var(--header-height);
}

header div {
    cursor: pointer;
    font-size: 1.5em;
    font-weight: bold;
}

header div:hover {
    transform: scale(1.05);
}

header ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    width: 25vw;
}

header ul li {
    font-size: 1em;
    padding: 25px;
    margin: 0;
}

header ul li:hover, .active {
    cursor: pointer;
    transform: scale(1.1);
    background-color: var(--main-shadow);
}

/* ---------------------- FOOTER ---------------------- */
footer {
    display: flex;
    justify-content: center;
    align-items: center;

    height: var(--footer-height);
}

.icon {
    height: 1.5em;
    filter: invert(100%);
    margin-bottom: 10px;
    vertical-align: middle;
}

a:link, a:visited, a {
    color: var(--main-color-theme);
    text-decoration: none;
    font-family: 'Prompt';
    letter-spacing: 0.5px;
    text-shadow: 1px 1px gray;
}

a:hover, .icon:hover {
    transform: scale(1.05);
}

/* ---------------------- HOME ---------------------- */

.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: calc(100vh - var(--header-height) - var(--footer-height));

    background: linear-gradient(rgba(20, 24, 255, 0.1), rgba(20, 24, 255, 0.05)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    font-size: 1.8em;
    letter-spacing: 1.8px;
    color: rgb(0, 0, 0);
    text-align: center;
    text-shadow: -1px -1px 0 var(--color-shadow), 1px -1px 0 var(--color-shadow), -1px 1px 0 var(--color-shadow), 1px 1px 0 var(--color-shadow);
}

h1, h2 {
    width: 60vw;
    margin: 10px 0;
}

.home h1 {
    color: var(--secondary-color-theme);
    font-family: 'Great Vibes', cursive;
    text-shadow: 2.5px 2px black;
}

.home h2 {
    color: var(--main-color-theme);
    font-size: 1em;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: 2px 2px black;
}

.modal-content h2 {
    font-size: 1.5em;
}

.modal-content p {
    font-size: 0.7em;
}

.modal-content h3 {
    margin: 10px;
}

.home button {
    background-color: rgba(255, 0, 0, 0.555);
    padding: 0.25em;
    padding-right: 0.6em;
    margin-top: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px var(--color-shadow);

    color: var(--main-color-theme);
    font-size: 0.9em;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: 2px 2px black;
    font-style: italic;
}

.home button:hover {
    cursor: pointer;
    color: var(--main-shadow);
    background-color: var(--main-color-theme);
    text-shadow: -1px -1px 0 var(--tertiary-color-theme) 1px -1px 0 var(--tertiary-color-theme) -1px 1px 0 var(--tertiary-color-theme) 1px 1px 0 var(--tertiary-color-theme);

    transform: scale(1.03);
}

.modal-content button {
    font-style: normal;
    padding: 10px;
}

/* ---------------------- MENU ---------------------- */

.menu {
    padding-top: 5vh;
    background-color: var(--main-shadow);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.menu section {
    flex-basis: 40%;
    width: 100%;
    margin: 25px 10px;
    padding: 50px;

    box-sizing: border-box;
    box-shadow: 5px 5px var(--color-shadow);

    border-radius: 25px;
}

.menu section img { 
    margin: auto;
    display: block;
    height: minmax(500px, 120vh);
    width: 100%;
    margin-bottom: 2vh;
}

.product__title, .product__price {
    color: var(--main-color-theme);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1em;
}
.product__price {
    margin: 15px 0;
}

.product__desc {
    color: var(--secondary-color-theme);
    font-family: 'Prompt';
    font-size: 0.7em;
}

/* ---------------------- CONTACT ---------------------- */

.contact {
    width: 100%;
    height: calc(100vh - var(--footer-height) - var(--header-height));
    background-color: var(--section-background);

    font-family: 'Josefin Sans', sans-serif;
    color: var(--secondary-color-theme);

    display: flex;
    flex-basis: 50%;
}

.contact h2 {
    color: var(--main-color-theme);
    font-style: italic;

    text-shadow: 4px 4px var(--color-shadow);
}

.contact__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    gap: 8vh;
}

.contact_numbers h2, .address h2{
    font-size: 1.2em;
    margin-bottom: 16px;
}

.contact_numbers div, .address div {
    font-size: 0.8em;
}


.schedule__container {
    margin: auto;
}

.schedule__container ul { 
    padding: 0;
    list-style-type: none;
}

.schedule__container li { 
    padding-top: 10px;
}


/* ---------------------- MEDIA ---------------------- */

@media screen and (max-width: 1100px) {
    body {
        font-size: 20px;
    }
    header {
        padding: 12px 0;
        margin: 8px 0;
    }
    header div {
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        margin: 0 8px;
    }
    header ul {
        width: 40vw;
    }
    header ul li {
        font-size: calc(16px*0.75em);
        padding: 15px;
        text-align: center;
        vertical-align: middle;
    }
    header ul li:hover, .active {
        font-size: calc(16px*0.75em);
        padding: 15px;
    }
    .menu section {
        flex-basis: 90%;
    }
    .menu section img { 
        height: minmax(500px, 80vh);
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6a6ba7afa233ddba2de.png";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact),
/* harmony export */   contactUs: () => (/* binding */ contactUs),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   gradientDirections: () => (/* binding */ gradientDirections),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   mapsrc: () => (/* binding */ mapsrc),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   navbarComponents: () => (/* binding */ navbarComponents),
/* harmony export */   products: () => (/* binding */ products)
/* harmony export */ });
const products = {
    product1: {
        title: 'Enchanted Moonrise Majesty Balloon',
        desc: "Experience the night like never before with our Enchanted Moonrise Majesty Balloon. Drift through the starlit sky in a deep blue balloon adorned with shimmering silver stars and a golden crescent moon. This balloon captures the essence of a magical moonlit night, offering a truly enchanting journey among the constellations.",
        price: '$49.99'
    },
    product2: {
        title: 'Royal Amethyst Nightglow Balloon',
        desc: "Introducing the Royal Amethyst Nightglow Balloon – a majestic purple wonder that takes you on a voyage through the velvety night sky. Its radiant purple hue, accompanied by intricate golden details, will make you feel like royalty as you soar among the stars. Witness the tranquil beauty of the night illuminated by the balloon's soft, luminous glow.",
        price: '$109.99'
    },
    product3: {
        title: 'Nebula Dreamscape Adventure Balloon',
        desc: "Embark on a Nebula Dreamscape Adventure with this captivating hot air balloon. Its midnight blue canvas is adorned with swirling patterns of radiant purples and deep blacks, mimicking the mesmerizing colors of distant galaxies. Let your imagination run wild as you float through the cosmos, surrounded by the mysteries of the universe.",
        price: '$2499.99'
    },
    product4: {
        title: 'Celestial Elegance Luminary Balloon',
        desc: "Indulge in the Celestial Elegance Luminary Balloon – a true masterpiece that combines sophistication and wonder. Its rich black backdrop, embellished with intricate silver and gold designs, creates a striking contrast against the night sky. As you glide serenely through the darkness, the balloon's luminous white accents will light up your journey with a touch of ethereal beauty.Remember that these product names and descriptions are meant to evoke a sense of wonder and adventure associated with each hot air balloon's theme. Adjust them according to your preferences and branding.",
        price: '$2.99'
    },
}

const gradientDirections = [
    'to right top',
    'to right bottom',
    'to left top',
    'to left bottom',
    'to top',
    'to bottom',
    'to left',
    'to right'
]

const navbarComponents = {
    name: "Up, Up and Away",
    home: "Home",
    menu: "Menu",
    contact: "Contact Us",
}

const contactUs = {
    mobileNo: "+621970312341",
    telNo: "416-2134",
    address: "Air Base, Clark, Pampanga, Philippines, 1107",
    schedule: [
        'Tuesday: 12:00 - 22:00',
        'Wednesday: 12:00 - 22:00',
        'Thursday: 12:00 - 22:00',
        'Friday: 12:00 - 23:30',
        'Saturday: 12:00 - 23:30',
        'Sunday: 12:00 - 23:30',
    ]
}

const div = document.createElement('div')
const home = document.createElement('li')
const menu = document.createElement('li')
const contact = document.createElement('li')

const MAP_MODE = 'search'
const API_KEY = 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
const PARAMETERS = 'q=Air+Force+City+Park,Clark,Pampanga'


const mapsrc = `https://www.google.com/maps/embed/v1/${MAP_MODE}?key=${API_KEY}&${PARAMETERS}`

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



const readModal = () => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

const HomeComponent = () => {
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const button = document.createElement('button')
    main.classList.add("home")
    button.setAttribute("id", "myBtn")

    h1.innerHTML = "It's not where you go, it's how you get there."
    h2.innerHTML = "The sky is no longer the limit."
    button.innerHTML = "Order now!"

    main.append(h1)
    main.append(h2)
    main.append(button)
    main.append((0,_components_modal__WEBPACK_IMPORTED_MODULE_1__.createModal)())
    
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main)

    window.onload = readModal()
}



/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModal: () => (/* binding */ createModal)
/* harmony export */ });
const createModal = () => {
    const div = document.createElement('div')
    div.setAttribute("id", "myModal")
    div.classList.add("modal")

    const div2 = document.createElement('div')
    div2.classList.add("modal-content")

    const span = document.createElement('span')
    span.classList.add('close')
    span.innerHTML = '&times;'

    div2.appendChild(span)
    div2.innerHTML += `<h2>Hot Air Balloon Booking</h2>
    
    <h3>Booking Details</h3>
    <p>Date: August 15, 2023</p>
    <p>Time: 8:00 AM</p>
    <p>Location: Sky Adventures Park</p>
    
    <h3>Payment Options</h3>
    <div>
        <label>
            <input type="radio" name="paymentMethod" value="creditCard">
            Credit Card
        </label>
        <label>
            <input type="radio" name="paymentMethod" value="paypal">
            PayPal
        </label>
    </div>
    
    <button id="confirmButton">Confirm</button>`

    div.appendChild(div2)

    return div
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _menu_items_product_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _menu_items_product_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _menu_items_product_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _menu_items_product_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);








const changeBackgroundGradient = (element) => {
    let colors = 'rgba(69,44,99,1) 0%, rgb(71 27 71) 35%, rgba(0,45,98,1) 100%'
    element.style.backgroundImage = `linear-gradient(${_components_data__WEBPACK_IMPORTED_MODULE_1__.gradientDirections[Math.floor(Math.random() * _components_data__WEBPACK_IMPORTED_MODULE_1__.gradientDirections.length)]}, ${colors})`;
}

const createPhotoElement = (container, image, product) => {
    const section = document.createElement('section')
    const product_image = new Image()
    const div = document.createElement('div')
    const title = document.createElement('div')
    const price = document.createElement('div')
    const desc = document.createElement('div')

    div.classList.add('product__header')
    title.classList.add('product__title')
    price.classList.add('product__price')
    desc.classList.add('product__desc')

    product_image.src = image
    title.innerHTML = product.title
    price.innerHTML = product.price
    desc.innerHTML = product.desc

    div.append(title)
    div.append(price)
    section.append(product_image)
    section.append(div)
    section.append(desc)

    window.onload = changeBackgroundGradient(section)

    container.append(section)
}

const MenuComponent = () => {
    const main = document.createElement('main')
    main.classList.add('menu')

    createPhotoElement(main, _menu_items_product_1_jpg__WEBPACK_IMPORTED_MODULE_2__, _components_data__WEBPACK_IMPORTED_MODULE_1__.products.product1)
    createPhotoElement(main, _menu_items_product_2_jpg__WEBPACK_IMPORTED_MODULE_3__, _components_data__WEBPACK_IMPORTED_MODULE_1__.products.product2)
    createPhotoElement(main, _menu_items_product_3_jpg__WEBPACK_IMPORTED_MODULE_4__, _components_data__WEBPACK_IMPORTED_MODULE_1__.products.product3)
    createPhotoElement(main, _menu_items_product_4_jpg__WEBPACK_IMPORTED_MODULE_5__, _components_data__WEBPACK_IMPORTED_MODULE_1__.products.product4)

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main)
}


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39f6e32ef9bcee71bda8.jpg";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48934014779bdb58c52f.jpg";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62853fcdda0abd1b6e89.jpg";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd8fbf17b5bf44fe66e0.jpg";

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);




const ContactComponent = () => {
    const main = document.createElement('main')
    main.classList.add("contact")
    
    const contacts = document.createElement('div')
    contacts.classList.add('contact__container')
    const schedule = document.createElement('div')
    schedule.classList.add('schedule__container')


    // Left side of contacts (contact number and address)
    const contactNumbers = document.createElement('section')
    contactNumbers.classList.add('contact_numbers')
    const address = document.createElement('section')
    address.classList.add('address')

    
    // Right side of contacts (Schedule)
    const scheduleTitle = document.createElement('h2')
    scheduleTitle.classList.add('schedule_title')
    const scheduleTime = document.createElement('ul')
    scheduleTime.classList.add('schedule_time')



    const h2Contact = document.createElement('h2')
    const spanContact1 = document.createElement('div')
    const spanContact2 = document.createElement('div')
    h2Contact.innerHTML = "Contact Us @"
    spanContact1.innerHTML = `Mobile No. ${_components_data__WEBPACK_IMPORTED_MODULE_2__.contactUs.mobileNo}`
    spanContact2.innerHTML =  `Telephone No. ${_components_data__WEBPACK_IMPORTED_MODULE_2__.contactUs.telNo}`

    const h2Address = document.createElement('h2')
    const spanAddress = document.createElement('div')
    h2Address.innerHTML = 'Visit Us @'
    spanAddress.innerHTML = _components_data__WEBPACK_IMPORTED_MODULE_2__.contactUs.address

    scheduleTitle.innerHTML = 'Schedule:'
    _components_data__WEBPACK_IMPORTED_MODULE_2__.contactUs.schedule.forEach(sched => {
        scheduleTime.innerHTML += `<li>${sched}</li>`
    })

    // const map = buildMap()
    // main.append(map)

    contactNumbers.append(h2Contact)
    contactNumbers.append(spanContact1)
    contactNumbers.append(spanContact2)
    address.append(h2Address)
    address.append(spanAddress)

    contacts.append(contactNumbers)
    contacts.append(address)
    schedule.append(scheduleTitle)
    schedule.append(scheduleTime)

    main.append(contacts)
    main.append(schedule)

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main)
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMap: () => (/* binding */ buildMap)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


const buildMap = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'map-container');
    const display = document.createElement('div');
    display.setAttribute('class', 'map-display');
    const frame = document.createElement('iframe');
    frame.setAttribute('class', 'map-frame');
    frame.setAttribute('src', _data__WEBPACK_IMPORTED_MODULE_0__.mapsrc);
  
    display.appendChild(frame);

    return display
};

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
const HeaderComponent = (div, home, menu, contact, navbarComponents) => {
    const header = document.createElement('header')
    const ul = document.createElement('ul')


    home.innerHTML = navbarComponents.home
    menu.innerHTML = navbarComponents.menu
    contact.innerHTML = navbarComponents.contact
    div.innerHTML = navbarComponents.name

    ul.append(home)
    ul.append(menu)
    ul.append(contact)

    header.append(div)
    header.append(ul)

    return header
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _github_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);



const FooterComponent = () => {
    const footer = document.createElement('footer')
    footer.classList.add("footer")
    const a = document.createElement('a')
    const github_icon = new Image();
    github_icon.src = _github_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    github_icon.classList.add("icon")

    a.innerHTML = 'Created by: Karl Espiritu '
    a.setAttribute('href', 'https://github.com/espiritukarl');

    a.append(github_icon)
    footer.append(a)
    
    _index__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(footer) 
}

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;