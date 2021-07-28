/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../#uspeh-magazin/#DevSource/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../#uspeh-magazin/#DevSource/scripts/main.js":
/*!****************************************************!*\
  !*** ../#uspeh-magazin/#DevSource/scripts/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Dynamic Adapt v.1\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\n// e.x. data-da=\".item,992,2\"\n// Andrikanych Yevhen 2020\n// https://www.youtube.com/c/freelancerlifestyle\n\n\nfunction DynamicAdapt(type) {\n  this.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n  var _this2 = this;\n\n  var _this = this; // массив объектов\n\n\n  this.оbjects = [];\n  this.daClassname = \"_dynamic_adapt_\"; // массив DOM-элементов\n\n  this.nodes = document.querySelectorAll(\"[data-da]\"); // наполнение оbjects объктами\n\n  for (var i = 0; i < this.nodes.length; i++) {\n    var node = this.nodes[i];\n    var data = node.dataset.da.trim();\n    var dataArray = data.split(\",\");\n    var оbject = {};\n    оbject.element = node;\n    оbject.parent = node.parentNode;\n    оbject.destination = document.querySelector(dataArray[0].trim());\n    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n    оbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n    оbject.index = this.indexInParent(оbject.parent, оbject.element);\n    this.оbjects.push(оbject);\n  }\n\n  this.arraySort(this.оbjects); // массив уникальных медиа-запросов\n\n  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n    return '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n  }, this);\n  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n    return Array.prototype.indexOf.call(self, item) === index;\n  }); // навешивание слушателя на медиа-запрос\n  // и вызов обработчика при первом запуске\n\n  var _loop = function _loop(_i) {\n    var media = _this2.mediaQueries[_i];\n    var mediaSplit = String.prototype.split.call(media, ',');\n    var matchMedia = window.matchMedia(mediaSplit[0]);\n    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом\n\n    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {\n      return item.breakpoint === mediaBreakpoint;\n    });\n    matchMedia.addListener(function () {\n      _this.mediaHandler(matchMedia, оbjectsFilter);\n    });\n\n    _this2.mediaHandler(matchMedia, оbjectsFilter);\n  };\n\n  for (var _i = 0; _i < this.mediaQueries.length; _i++) {\n    _loop(_i);\n  }\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n  if (matchMedia.matches) {\n    for (var i = 0; i < оbjects.length; i++) {\n      var оbject = оbjects[i];\n      оbject.index = this.indexInParent(оbject.parent, оbject.element);\n      this.moveTo(оbject.place, оbject.element, оbject.destination);\n    }\n  } else {\n    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {\n      var _оbject = оbjects[_i2];\n\n      if (_оbject.element.classList.contains(this.daClassname)) {\n        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);\n      }\n    }\n  }\n}; // Функция перемещения\n\n\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n  element.classList.add(this.daClassname);\n\n  if (place === 'last' || place >= destination.children.length) {\n    destination.insertAdjacentElement('beforeend', element);\n    return;\n  }\n\n  if (place === 'first') {\n    destination.insertAdjacentElement('afterbegin', element);\n    return;\n  }\n\n  destination.children[place].insertAdjacentElement('beforebegin', element);\n}; // Функция возврата\n\n\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n  element.classList.remove(this.daClassname);\n\n  if (parent.children[index] !== undefined) {\n    parent.children[index].insertAdjacentElement('beforebegin', element);\n  } else {\n    parent.insertAdjacentElement('beforeend', element);\n  }\n}; // Функция получения индекса внутри родителя\n\n\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n  var array = Array.prototype.slice.call(parent.children);\n  return Array.prototype.indexOf.call(array, element);\n}; // Функция сортировки массива по breakpoint и place \n// по возрастанию для this.type = min\n// по убыванию для this.type = max\n\n\nDynamicAdapt.prototype.arraySort = function (arr) {\n  if (this.type === \"min\") {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return -1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return 1;\n        }\n\n        return a.place - b.place;\n      }\n\n      return a.breakpoint - b.breakpoint;\n    });\n  } else {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return 1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return -1;\n        }\n\n        return b.place - a.place;\n      }\n\n      return b.breakpoint - a.breakpoint;\n    });\n    return;\n  }\n};\n\nvar dinamicAdapt = new DynamicAdapt('max');\ndinamicAdapt.init(); ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var headerElem = document.querySelector('header.header');\n  var sidebarElem = document.querySelector('.sidebar#sidebar');\n  var burgerElem = document.querySelector('.burger-menu#burger-menu'); // фикс шапки сайта\n\n  if (document.body.clientWidth > 768) {\n    // фиксируем шапку при скролле\n    document.addEventListener('scroll', function (e) {\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      } else if (window.pageYOffset <= headerElem.offsetHeight) {\n        headerElem.classList.remove('fixed');\n      }\n    });\n  } else {\n    // фиксируем шапку всегда\n    headerElem.classList.add('fixed');\n  } // сайдбар и бургер\n\n\n  burgerElem.addEventListener('click', burgerClickHandler);\n\n  function burgerClickHandler() {\n    var ariaLabel = ['Открыть панель навигации по каталогу', 'Свернуть панель навигации по каталогу'];\n    burgerElem.classList.toggle('open');\n    burgerElem.querySelector('svg.burger').classList.toggle('open');\n\n    if (burgerElem.classList.contains('open')) {\n      burgerElem.setAttribute('aria-label', ariaLabel[1]);\n    } else {\n      burgerElem.setAttribute('aria-label', ariaLabel[0]);\n    }\n\n    sidebarElem.classList.toggle('open');\n  }\n}); // const burgerElem = headerElem.querySelector('.header__burger');\n// const menuElem = headerElem.querySelector('.header__menu');\n// function burgerClickHandler(e) {\n//     e.target.closest('.header__burger').classList.toggle('open');\n//     menuElem.classList.toggle('open')\n// };\n// burgerElem.addEventListener('click', burgerClickHandler);\n// фикс шапки\n\n//# sourceURL=webpack:///../#uspeh-magazin/#DevSource/scripts/main.js?");

/***/ })

/******/ });