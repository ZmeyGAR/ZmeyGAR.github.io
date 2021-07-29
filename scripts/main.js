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
/***/ (function(module, exports) {

eval("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\ndocument.addEventListener('DOMContentLoaded', function () {\n  var headerElem = document.querySelector('header.header');\n  var sidebarElem = document.querySelector('.sidebar#sidebar'),\n      sidebarClose = sidebarElem.querySelector('.close#sidebar-close');\n  var burgerSidebarElem = document.querySelector('.burger-sidebar#burger-sidebar'); // фикс шапки сайта\n\n  if (document.body.clientWidth > 768) {\n    // фиксируем шапку при скролле\n    document.addEventListener('scroll', function (e) {\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      } else if (window.pageYOffset <= headerElem.offsetHeight) {\n        headerElem.classList.remove('fixed');\n      }\n    });\n  } else {\n    // фиксируем шапку всегда\n    headerElem.classList.add('fixed');\n  } ////////////////////////\n  // сайдбар и бургер\n  // burgerElem.addEventListener('click', toggleSidebar)\n  // sidebarClose.addEventListener('click', closeSidebar)\n\n\n  document.body.addEventListener('click', clickHandler);\n\n  function clickHandler(e) {\n    var target = e.target;\n\n    if (target.closest('.burger-sidebar#burger-sidebar')) {\n      burgerSidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    }\n\n    if (target.closest('.close#sidebar-close')) {\n      sidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    }\n  }\n\n  function closeSidebar() {\n    var _ariaLabel = {\n      open: 'Открыть панель навигации по каталогу',\n      close: 'Свернуть панель навигации по каталогу'\n    };\n    document.body.classList.remove('sidebar-open');\n    sidebarElem.classList.remove('open');\n    burgerSidebarElem.classList.remove('open');\n    burgerSidebarElem.querySelector('svg.burger').classList.remove('open');\n\n    if (burgerSidebarElem.classList.contains('open')) {\n      burgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n    } else {\n      burgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n    }\n\n    sidebarElem.classList.remove('open');\n  }\n\n  function openSidebar() {\n    var _ariaLabel = {\n      open: 'Открыть панель навигации по каталогу',\n      close: 'Свернуть панель навигации по каталогу'\n    };\n    document.body.classList.add('sidebar-open');\n    sidebarElem.classList.add('open');\n    burgerSidebarElem.classList.add('open');\n    burgerSidebarElem.querySelector('svg.burger').classList.add('open');\n\n    if (burgerSidebarElem.classList.contains('open')) {\n      burgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n    } else {\n      burgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n    }\n\n    sidebarElem.classList.add('open');\n  }\n}); // const burgerElem = headerElem.querySelector('.header__burger');\n// const menuElem = headerElem.querySelector('.header__menu');\n// function burgerClickHandler(e) {\n//     e.target.closest('.header__burger').classList.toggle('open');\n//     menuElem.classList.toggle('open')\n// };\n// burgerElem.addEventListener('click', burgerClickHandler);\n// фикс шапки\n\n//# sourceURL=webpack:///../#uspeh-magazin/#DevSource/scripts/main.js?");

/***/ })

/******/ });