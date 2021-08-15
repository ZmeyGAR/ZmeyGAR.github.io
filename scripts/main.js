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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\ndocument.addEventListener('DOMContentLoaded', function () {\n  var headerElem = document.querySelector('header.header');\n  var sidebarElem = document.querySelector('.sidebar#sidebar');\n  var btnSidebarClose = document.querySelector('#sidebar-close');\n  var btnBurgerSidebarElem = document.querySelector('#burger-sidebar');\n  var sidebarNavbar = document.querySelector('.sidebar-nav'),\n      sidebarNavbarButtons = document.querySelectorAll('button[data-target]');\n  var catalogList = document.querySelector('.catalog--list');\n  var baloonCarusel = document.querySelectorAll('.baloon-carusel'); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  if (baloonCarusel.length) {\n    _toConsumableArray(baloonCarusel).forEach(function (baloonSlider) {\n      if (!baloonSlider.children[0].children.length) return; // слайды находятся внутри контейнера \n      //  baloonSlider.children[0] = '.baloon-carusel__container'\n\n      var animationDuration = parseInt(window.getComputedStyle(baloonSlider).animationDuration, '10');\n      var children = baloonSlider.children[0].children;\n      var currentSlide = 1;\n      var prevSlide = 0;\n      setInterval(showSlide, animationDuration * 1000);\n\n      function showSlide() {\n        if (currentSlide > children.length - 1) currentSlide = 0;\n        if (prevSlide >= 0) children[prevSlide].style.order = '';\n        children[currentSlide].style.order = '-1';\n        prevSlide = currentSlide;\n        currentSlide++;\n      }\n    });\n  } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // шапка сайта и фиксация в зависимости от размера окна и прокрутки страницы\n\n\n  function headerFixedOnResize() {\n    function fixedHeaderOnScroll() {\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      } else if (window.pageYOffset <= headerElem.offsetHeight) {\n        headerElem.classList.remove('fixed');\n      }\n    }\n\n    if (document.body.clientWidth < 768) {\n      headerElem.classList.add('fixed');\n      document.removeEventListener('scroll', fixedHeaderOnScroll);\n    } else if (document.body.clientWidth >= 768) {\n      headerElem.classList.remove('fixed');\n\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      }\n\n      document.addEventListener('scroll', fixedHeaderOnScroll);\n    }\n  }\n\n  headerFixedOnResize();\n  window.addEventListener('resize', headerFixedOnResize); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  function clickHandler(e) {\n    var target = e.target;\n    var hiddenClass = document.body.clientWidth >= 768 ? 'desctop_hidden' : 'mobile_hidden'; // sidebar - burger\n    // if (target.closest(`#${btnBurgerSidebarElem.id}`)) {\n    //     btnBurgerSidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    // }\n\n    if (target.closest(\"#\".concat(btnSidebarClose.id))) {\n      sidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    } // catalog - list\n\n\n    if (target.closest(\".\".concat(catalogList.className))) {\n      // открываем субменю\n      var openSubMenu = function openSubMenu() {\n        // открываем вложенное меню\n        currentMenuBtn.classList.add('active');\n        currentMenu = currentMenuBtn.lastElementChild;\n        prevMenu = currentMenuBtn.parentNode;\n        toggleHiddenInactiveMenuList(prevMenu, 'hide');\n        toggleScroll(catalogList, currentMenu);\n      };\n\n      var closeSubMenu = function closeSubMenu() {\n        // закрываем вложенное меню\n        currentMenuBtn.classList.remove('active');\n        currentMenu = currentMenuBtn.parentNode;\n        toggleHiddenInactiveMenuList(currentMenu, 'show');\n        toggleScroll(catalogList, currentMenu); // закрываем все вложенные меню внутри\n\n        currentMenu.querySelectorAll('li.active').forEach(function (item) {\n          return item.classList.remove('active');\n        });\n      };\n\n      var toggleHiddenInactiveMenuList = function toggleHiddenInactiveMenuList(menuList, flag) {\n        _toConsumableArray(menuList.children).forEach(function (item) {\n          return !item.classList.contains('active') && flag === 'hide' ? item.hidden = true : item.hidden = '';\n        });\n      };\n\n      var toggleScroll = function toggleScroll(parent, currentMenu) {\n        if (currentMenu.offsetHeight > parent.offsetHeight) {\n          parent.style.overflowY = 'auto';\n        } else {\n          parent.style.overflowY = 'hidden';\n        }\n      };\n\n      if (target.nodeName !== 'SPAN') return; //\n\n      var currentMenuBtn = target.closest('li');\n      var currentMenu,\n          prevMenu = null;\n      currentMenuBtn.classList.contains('active') ? closeSubMenu() : openSubMenu();\n    } // mobile - footer - sidebar\n\n\n    if (target.closest('button[data-target]')) {\n      var targetBlock = sidebarElem.querySelector(\".\".concat(target.closest('button[data-target]').dataset.target));\n      if (!targetBlock) return; // получаем список всех блоков сайдбара, потенциальных таргет\n\n      var targetList = {\n        desctop: ['sidebar__page-navigation', 'sidebar__feedback', 'sidebar__cart'],\n        mobile: ['sidebar__profile', 'sidebar__page-navigation', 'sidebar__catalog', 'sidebar__feedback', 'sidebar__cart']\n      };\n\n      if (!sidebarElem.classList.contains('open')) {\n        // sidebar close\n        openSidebar();\n        isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n        targetBlock.classList.remove(hiddenClass);\n        return; ////////////////////////////////////////////////////\n      } else if (sidebarElem.classList.contains('open')) {\n        // sidebar open\n        if (targetBlock.classList.contains(hiddenClass)) {\n          // eсли таргет блок скрыт\n          isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n          targetBlock.classList.remove(hiddenClass);\n          return;\n        }\n\n        if (!targetBlock.classList.contains(hiddenClass)) {\n          // если таргет блок не скрыт\n          isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n          closeSidebar();\n          return;\n        }\n      }\n    }\n\n    function closeSidebar() {\n      var _ariaLabel = {\n        open: 'Открыть панель навигации по каталогу',\n        close: 'Свернуть панель навигации по каталогу'\n      };\n      document.body.classList.remove('sidebar-open');\n      sidebarElem.classList.remove('open');\n      btnBurgerSidebarElem.classList.remove('open');\n      btnBurgerSidebarElem.querySelector('svg.hamburger').classList.remove('open');\n\n      if (btnBurgerSidebarElem.classList.contains('open')) {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n      } else {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n      }\n\n      sidebarElem.classList.remove('open');\n    }\n\n    function openSidebar() {\n      var _ariaLabel = {\n        open: 'Открыть панель навигации по каталогу',\n        close: 'Свернуть панель навигации по каталогу'\n      };\n      document.body.classList.add('sidebar-open');\n      sidebarElem.classList.add('open');\n      btnBurgerSidebarElem.classList.add('open');\n      btnBurgerSidebarElem.querySelector('svg.hamburger').classList.add('open');\n\n      if (btnBurgerSidebarElem.classList.contains('open')) {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n      } else {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n      }\n\n      sidebarElem.classList.add('open');\n    }\n\n    function hideAllSidebarBlock(list, excludeItem) {\n      list.forEach(function (targetBlock) {\n        if (sidebarElem.querySelector(\".\".concat(targetBlock))) {\n          sidebarElem.querySelector(\".\".concat(targetBlock)).classList.add(hiddenClass);\n        }\n      });\n    }\n\n    function isDesctop() {\n      return document.body.clientWidth >= 768 ? true : false;\n    }\n  }\n\n  document.body.addEventListener('click', clickHandler);\n});\n\n//# sourceURL=webpack:///../#uspeh-magazin/#DevSource/scripts/main.js?");

/***/ })

/******/ });