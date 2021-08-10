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
eval("// Dynamic Adapt v.1\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\n// e.x. data-da=\".item,992,2\"\n// Andrikanych Yevhen 2020\n// https://www.youtube.com/c/freelancerlifestyle\n\n\nfunction DynamicAdapt(type) {\n  this.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n  var _this2 = this;\n\n  var _this = this; // массив объектов\n\n\n  this.оbjects = [];\n  this.daClassname = \"_dynamic_adapt_\"; // массив DOM-элементов\n\n  this.nodes = document.querySelectorAll(\"[data-da]\"); // наполнение оbjects объктами\n\n  for (var i = 0; i < this.nodes.length; i++) {\n    var node = this.nodes[i];\n    var data = node.dataset.da.trim();\n    var dataArray = data.split(\",\");\n    var оbject = {};\n    оbject.element = node;\n    оbject.parent = node.parentNode;\n    оbject.destination = document.querySelector(dataArray[0].trim());\n    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n    оbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n    оbject.index = this.indexInParent(оbject.parent, оbject.element);\n    this.оbjects.push(оbject);\n  }\n\n  this.arraySort(this.оbjects); // массив уникальных медиа-запросов\n\n  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n    return '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n  }, this);\n  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n    return Array.prototype.indexOf.call(self, item) === index;\n  }); // навешивание слушателя на медиа-запрос\n  // и вызов обработчика при первом запуске\n\n  var _loop = function _loop(_i) {\n    var media = _this2.mediaQueries[_i];\n    var mediaSplit = String.prototype.split.call(media, ',');\n    var matchMedia = window.matchMedia(mediaSplit[0]);\n    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом\n\n    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {\n      return item.breakpoint === mediaBreakpoint;\n    });\n    matchMedia.addListener(function () {\n      _this.mediaHandler(matchMedia, оbjectsFilter);\n    });\n\n    _this2.mediaHandler(matchMedia, оbjectsFilter);\n  };\n\n  for (var _i = 0; _i < this.mediaQueries.length; _i++) {\n    _loop(_i);\n  }\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n  if (matchMedia.matches) {\n    for (var i = 0; i < оbjects.length; i++) {\n      var оbject = оbjects[i];\n      оbject.index = this.indexInParent(оbject.parent, оbject.element);\n      this.moveTo(оbject.place, оbject.element, оbject.destination);\n    }\n  } else {\n    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {\n      var _оbject = оbjects[_i2];\n\n      if (_оbject.element.classList.contains(this.daClassname)) {\n        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);\n      }\n    }\n  }\n}; // Функция перемещения\n\n\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n  element.classList.add(this.daClassname);\n\n  if (place === 'last' || place >= destination.children.length) {\n    destination.insertAdjacentElement('beforeend', element);\n    return;\n  }\n\n  if (place === 'first') {\n    destination.insertAdjacentElement('afterbegin', element);\n    return;\n  }\n\n  destination.children[place].insertAdjacentElement('beforebegin', element);\n}; // Функция возврата\n\n\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n  element.classList.remove(this.daClassname);\n\n  if (parent.children[index] !== undefined) {\n    parent.children[index].insertAdjacentElement('beforebegin', element);\n  } else {\n    parent.insertAdjacentElement('beforeend', element);\n  }\n}; // Функция получения индекса внутри родителя\n\n\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n  var array = Array.prototype.slice.call(parent.children);\n  return Array.prototype.indexOf.call(array, element);\n}; // Функция сортировки массива по breakpoint и place \n// по возрастанию для this.type = min\n// по убыванию для this.type = max\n\n\nDynamicAdapt.prototype.arraySort = function (arr) {\n  if (this.type === \"min\") {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return -1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return 1;\n        }\n\n        return a.place - b.place;\n      }\n\n      return a.breakpoint - b.breakpoint;\n    });\n  } else {\n    Array.prototype.sort.call(arr, function (a, b) {\n      if (a.breakpoint === b.breakpoint) {\n        if (a.place === b.place) {\n          return 0;\n        }\n\n        if (a.place === \"first\" || b.place === \"last\") {\n          return 1;\n        }\n\n        if (a.place === \"last\" || b.place === \"first\") {\n          return -1;\n        }\n\n        return b.place - a.place;\n      }\n\n      return b.breakpoint - a.breakpoint;\n    });\n    return;\n  }\n};\n\nvar dynamicAdapt = new DynamicAdapt('max');\ndynamicAdapt.init(); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var headerElem = document.querySelector('header.header');\n  var sidebarElem = document.querySelector('.sidebar#sidebar');\n  var btnSidebarClose = document.querySelector('#sidebar-close');\n  var btnBurgerSidebarElem = document.querySelector('#burger-sidebar');\n  var sidebarNavbar = document.querySelector('.sidebar-nav'),\n      sidebarNavbarButtons = document.querySelectorAll('button[data-target]');\n  var catalogList = document.querySelector('.catalog--list'); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // шапка сайта и фиксация в зависимости от размера окна и прокрутки страницы\n\n  function headerFixedOnResize() {\n    function fixedHeaderOnScroll() {\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      } else if (window.pageYOffset <= headerElem.offsetHeight) {\n        headerElem.classList.remove('fixed');\n      }\n    }\n\n    if (document.body.clientWidth < 768) {\n      headerElem.classList.add('fixed');\n      document.removeEventListener('scroll', fixedHeaderOnScroll);\n    } else if (document.body.clientWidth >= 768) {\n      headerElem.classList.remove('fixed');\n\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      }\n\n      document.addEventListener('scroll', fixedHeaderOnScroll);\n    }\n  }\n\n  headerFixedOnResize();\n  window.addEventListener('resize', headerFixedOnResize); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  function clickHandler(e) {\n    var target = e.target;\n    var hiddenClass = document.body.clientWidth >= 768 ? 'desctop_hidden' : 'mobile_hidden'; // sidebar - burger\n    // if (target.closest(`#${btnBurgerSidebarElem.id}`)) {\n    //     btnBurgerSidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    // }\n\n    if (target.closest(\"#\".concat(btnSidebarClose.id))) {\n      sidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    } // catalog - list\n\n\n    if (target.closest(\".\".concat(catalogList.className))) {\n      // открываем субменю\n      var toggleScroll = function toggleScroll(parent, currentMenu) {\n        if (currentMenu.offsetHeight > parent.offsetHeight) {\n          parent.style.overflowY = 'auto';\n        } else {\n          parent.style.overflowY = 'hidden';\n          if (currentMenu != parent) currentMenu.style.height = '100vh';\n        }\n      };\n\n      var openSubMenu = function openSubMenu() {\n        // открываем вложенное меню\n        currentMenuBtn.classList.add('active');\n        currentMenu = currentMenuBtn.lastElementChild;\n        toggleScroll(catalogList, currentMenu);\n      };\n\n      var closeSubMenu = function closeSubMenu() {\n        // закрываем вложенное меню\n        currentMenuBtn.classList.remove('active');\n        currentMenu = currentMenuBtn.lastElementChild.style.height = '';\n        currentMenu = currentMenuBtn.parentNode;\n        toggleScroll(catalogList, currentMenu); // закрываем все вложенные меню внутри\n\n        currentMenu.querySelectorAll('li.active').forEach(function (item) {\n          return item.classList.remove('active');\n        });\n      };\n\n      if (target.nodeName !== 'SPAN') return; //\n\n      var currentMenuBtn = target.closest('li');\n      var currentMenu,\n          prevMenu = null;\n      currentMenuBtn.classList.contains('active') ? closeSubMenu() : openSubMenu();\n    } // mobile - footer - sidebar\n\n\n    if (target.closest('button[data-target]')) {\n      var targetBlock = sidebarElem.querySelector(\".\".concat(target.closest('button[data-target]').dataset.target));\n      if (!targetBlock) return; // получаем список всех блоков сайдбара, потенциальных таргет\n\n      var targetList = {\n        desctop: ['sidebar__catalog', 'sidebar__feedback', 'sidebar__cart'],\n        mobile: ['sidebar__profile', 'sidebar__page-navigation', 'sidebar__catalog', 'sidebar__feedback', 'sidebar__cart']\n      };\n\n      if (!sidebarElem.classList.contains('open')) {\n        // sidebar close\n        openSidebar();\n        isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n        targetBlock.classList.remove(hiddenClass);\n        return; ////////////////////////////////////////////////////\n      } else if (sidebarElem.classList.contains('open')) {\n        // sidebar open\n        if (targetBlock.classList.contains(hiddenClass)) {\n          // eсли таргет блок скрыт\n          isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n          targetBlock.classList.remove(hiddenClass);\n          return;\n        }\n\n        if (!targetBlock.classList.contains(hiddenClass)) {\n          // если таргет блок не скрыт\n          isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n          closeSidebar();\n          return;\n        }\n      }\n    }\n\n    function closeSidebar() {\n      var _ariaLabel = {\n        open: 'Открыть панель навигации по каталогу',\n        close: 'Свернуть панель навигации по каталогу'\n      };\n      document.body.classList.remove('sidebar-open');\n      sidebarElem.classList.remove('open');\n      btnBurgerSidebarElem.classList.remove('open');\n      btnBurgerSidebarElem.querySelector('svg.burger').classList.remove('open');\n\n      if (btnBurgerSidebarElem.classList.contains('open')) {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n      } else {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n      }\n\n      sidebarElem.classList.remove('open');\n    }\n\n    function openSidebar() {\n      var _ariaLabel = {\n        open: 'Открыть панель навигации по каталогу',\n        close: 'Свернуть панель навигации по каталогу'\n      };\n      document.body.classList.add('sidebar-open');\n      sidebarElem.classList.add('open');\n      btnBurgerSidebarElem.classList.add('open');\n      btnBurgerSidebarElem.querySelector('svg.burger').classList.add('open');\n\n      if (btnBurgerSidebarElem.classList.contains('open')) {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n      } else {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n      }\n\n      sidebarElem.classList.add('open');\n    }\n\n    function hideAllSidebarBlock(list, excludeItem) {\n      list.forEach(function (targetBlock) {\n        if (sidebarElem.querySelector(\".\".concat(targetBlock))) {\n          sidebarElem.querySelector(\".\".concat(targetBlock)).classList.add(hiddenClass);\n        }\n      });\n    }\n\n    function isDesctop() {\n      return document.body.clientWidth >= 768 ? true : false;\n    }\n  }\n\n  document.body.addEventListener('click', clickHandler);\n});\n\n//# sourceURL=webpack:///../#uspeh-magazin/#DevSource/scripts/main.js?");

/***/ })

/******/ });