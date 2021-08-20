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

eval("var _Swiper;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar galleryThumbs = new Swiper(\".galery__thumbs\", (_Swiper = {\n  centeredSlides: true,\n  centeredSlidesBounds: true,\n  slidesPerView: 3.9,\n  watchOverflow: true,\n  watchSlidesVisibility: true,\n  watchSlidesProgress: true,\n  direction: 'vertical',\n  simulateTouch: true,\n  grabCursor: true,\n  preloadImages: false,\n  lazy: {\n    loadOnTransitionStart: false,\n    checkInView: true,\n    loadPrevNext: false\n  }\n}, _defineProperty(_Swiper, \"watchOverflow\", true), _defineProperty(_Swiper, \"watchSlidesVisibility\", true), _Swiper));\nvar galleryMain = new Swiper(\".galery__slider\", {\n  watchSlidesProgress: true,\n  preventInteractionOnTransition: true,\n  effect: 'coverflow',\n  coverflowEffect: {\n    rotate: 30,\n    slideShadows: true,\n    depth: 500\n  },\n  preloadImages: false,\n  lazy: {\n    loadOnTransitionStart: false,\n    checkInView: true,\n    loadPrevNext: false\n  },\n  watchOverflow: true,\n  watchSlidesVisibility: true,\n  slideToClickedSlide: true,\n  simulateTouch: false,\n  spaceBetween: 30,\n  speed: 500,\n  autoplay: {\n    delay: 5000,\n    pauseOnMouseEnter: true,\n    disableOnInteraction: false\n  },\n  loop: true,\n  thumbs: {\n    swiper: galleryThumbs\n  }\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var headerElem = document.querySelector('header.header');\n  var sidebarElem = document.querySelector('.sidebar#sidebar');\n  var btnSidebarClose = document.querySelector('#sidebar-close');\n  var btnBurgerSidebarElem = document.querySelector('#burger-sidebar');\n  var sidebarNavbar = document.querySelector('.sidebar-nav'),\n      sidebarNavbarButtons = document.querySelectorAll('button[data-target]');\n  var catalogList = document.querySelector('.catalog--list');\n  var baloonCarusel = document.querySelectorAll('.baloon-carusel');\n  var tabsList = document.querySelectorAll('._tabs_');\n\n  if (baloonCarusel.length) {\n    _toConsumableArray(baloonCarusel).forEach(function (baloonSlider) {\n      if (!baloonSlider.children[0].children.length) return; // слайды находятся внутри контейнера \n      //  baloonSlider.children[0] = '.baloon-carusel__container'\n\n      var animationDuration = parseInt(window.getComputedStyle(baloonSlider).animationDuration, '10');\n      var children = baloonSlider.children[0].children;\n      var currentSlide = 1;\n      var prevSlide = 0;\n      setInterval(showSlide, animationDuration * 1000);\n\n      function showSlide() {\n        if (currentSlide > children.length - 1) currentSlide = 0;\n        if (prevSlide >= 0) children[prevSlide].style.order = '';\n        children[currentSlide].style.order = '-1';\n        prevSlide = currentSlide;\n        currentSlide++;\n      }\n    });\n  }\n\n  var Tab = /*#__PURE__*/function () {\n    function Tab(tabElement) {\n      _classCallCheck(this, Tab);\n\n      this.tabElement = tabElement;\n      this.tabNav = this.tabElement.querySelector('._tabs_nav_');\n      this.tabContent = this.tabElement.querySelector('._tabs_content_');\n      this.tabPills = this.tabNav.querySelectorAll('li');\n      this.tabLinks = this.tabNav.querySelectorAll('a[href]');\n      this.activePill = this.getActivePill() || this.setActivePill(this.tabPills[0]);\n      this.activePanel = 0;\n    }\n\n    _createClass(Tab, [{\n      key: \"getActivePill\",\n      value: function getActivePill() {\n        var pills = _toConsumableArray(this.tabPills).filter(function (link) {\n          return link.classList.contains('active');\n        });\n\n        if (!pills.length) return null;\n        return pills[0];\n      }\n    }, {\n      key: \"setActivePill\",\n      value: function setActivePill(element) {\n        this.removeActive.apply(this, _toConsumableArray(this.tabPills).concat(_toConsumableArray(this.tabContent.children)));\n        element.classList.add('active');\n        return element;\n      }\n    }, {\n      key: \"removeActive\",\n      value: function removeActive() {\n        for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {\n          elements[_key] = arguments[_key];\n        }\n\n        elements.forEach(function (elem) {\n          elem.classList.remove('active');\n        });\n      }\n    }, {\n      key: \"showPanel\",\n      value: function showPanel(link) {\n        var href = link.href.split('/').pop();\n        this.tabContent.querySelector(href).classList.add('active');\n      }\n    }, {\n      key: \"clickLinks\",\n      value: function clickLinks(links) {\n        var _this = this;\n\n        _toConsumableArray(links).forEach(function (link) {\n          return link.addEventListener('click', function (e) {\n            e.preventDefault();\n            if (link.parentNode === _this.getActivePill()) return;\n\n            _this.setActivePill(link.parentNode);\n\n            _this.showPanel(link);\n          });\n        });\n      }\n    }, {\n      key: \"init\",\n      value: function init() {\n        this.clickLinks(this.tabLinks);\n        this.showPanel(this.activePill.children[0]);\n      }\n    }]);\n\n    return Tab;\n  }(); // tabs\n\n\n  if (tabsList.length) {\n    _toConsumableArray(tabsList).forEach(function (tab) {\n      return new Tab(tab).init();\n    });\n  } // шапка сайта и фиксация в зависимости от размера окна и прокрутки страницы\n\n\n  function headerFixedOnResize() {\n    function fixedHeaderOnScroll() {\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      } else if (window.pageYOffset <= headerElem.offsetHeight) {\n        headerElem.classList.remove('fixed');\n      }\n    }\n\n    if (document.body.clientWidth < 768) {\n      headerElem.classList.add('fixed');\n      document.removeEventListener('scroll', fixedHeaderOnScroll);\n    } else if (document.body.clientWidth >= 768) {\n      headerElem.classList.remove('fixed');\n\n      if (window.pageYOffset > headerElem.offsetHeight) {\n        headerElem.classList.add('fixed');\n      }\n\n      document.addEventListener('scroll', fixedHeaderOnScroll);\n    }\n  }\n\n  function clickHandler(e) {\n    var target = e.target;\n    var hiddenClass = document.body.clientWidth >= 768 ? 'desctop_hidden' : 'mobile_hidden';\n\n    if (target.closest(\"#\".concat(btnSidebarClose.id))) {\n      sidebarElem.classList.contains('open') ? closeSidebar() : openSidebar();\n    } // catalog - list\n\n\n    if (target.closest(\".\".concat(catalogList.className))) {\n      // открываем субменю\n      var openSubMenu = function openSubMenu() {\n        // открываем вложенное меню\n        currentMenuBtn.classList.add('active');\n        currentMenu = currentMenuBtn.lastElementChild;\n        prevMenu = currentMenuBtn.parentNode;\n        toggleHiddenInactiveMenuList(prevMenu, 'hide');\n        toggleScroll(catalogList, currentMenu);\n      };\n\n      var closeSubMenu = function closeSubMenu() {\n        // закрываем вложенное меню\n        currentMenuBtn.classList.remove('active');\n        currentMenu = currentMenuBtn.parentNode;\n        prevMenu = currentMenuBtn.lastElementChild;\n        toggleHiddenInactiveMenuList(currentMenu, 'show');\n        toggleHiddenInactiveMenuList(prevMenu, 'show');\n        toggleScroll(catalogList, currentMenu); // закрываем все вложенные меню внутри\n\n        currentMenu.querySelectorAll('li.active').forEach(function (item) {\n          return item.classList.remove('active');\n        });\n      };\n\n      var toggleHiddenInactiveMenuList = function toggleHiddenInactiveMenuList(menuList, flag) {\n        _toConsumableArray(menuList.children).forEach(function (item) {\n          return !item.classList.contains('active') && flag === 'hide' ? item.hidden = true : item.hidden = '';\n        });\n      };\n\n      var toggleScroll = function toggleScroll(parent, currentMenu) {\n        if (currentMenu.offsetHeight > parent.offsetHeight) {\n          parent.style.overflowY = 'auto';\n        } else {\n          parent.style.overflowY = 'hidden';\n        }\n      };\n\n      if (target.nodeName !== 'SPAN') return; //\n\n      var currentMenuBtn = target.closest('li');\n      var currentMenu,\n          prevMenu = null;\n      currentMenuBtn.classList.contains('active') ? closeSubMenu() : openSubMenu();\n    } // mobile - footer - sidebar\n\n\n    if (target.closest('button[data-target]')) {\n      var targetBlock = sidebarElem.querySelector(\".\".concat(target.closest('button[data-target]').dataset.target));\n      if (!targetBlock) return; // получаем список всех блоков сайдбара, потенциальных таргет\n\n      var targetList = {\n        desctop: ['sidebar__page-navigation', 'sidebar__feedback', 'sidebar__cart'],\n        mobile: ['sidebar__profile', 'sidebar__page-navigation', 'sidebar__catalog', 'sidebar__feedback', 'sidebar__cart']\n      };\n\n      if (!sidebarElem.classList.contains('open')) {\n        // sidebar close\n        openSidebar();\n        isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n        targetBlock.classList.remove(hiddenClass);\n        return;\n      } else if (sidebarElem.classList.contains('open')) {\n        // sidebar open\n        if (targetBlock.classList.contains(hiddenClass)) {\n          // eсли таргет блок скрыт\n          isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n          targetBlock.classList.remove(hiddenClass);\n          return;\n        }\n\n        if (!targetBlock.classList.contains(hiddenClass)) {\n          // если таргет блок не скрыт\n          isDesctop() ? hideAllSidebarBlock(targetList.desctop) : hideAllSidebarBlock(targetList.mobile);\n          closeSidebar();\n          return;\n        }\n      }\n    }\n\n    function closeSidebar() {\n      var _ariaLabel = {\n        open: 'Открыть панель навигации по каталогу',\n        close: 'Свернуть панель навигации по каталогу'\n      };\n      document.body.classList.remove('sidebar-open');\n      sidebarElem.classList.remove('open');\n      btnBurgerSidebarElem.classList.remove('open'); // btnBurgerSidebarElem.querySelector('svg.hamburger').classList.remove('open');\n\n      if (btnBurgerSidebarElem.classList.contains('open')) {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n      } else {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n      }\n\n      sidebarElem.classList.remove('open');\n    }\n\n    function openSidebar() {\n      var _ariaLabel = {\n        open: 'Открыть панель навигации по каталогу',\n        close: 'Свернуть панель навигации по каталогу'\n      };\n      document.body.classList.add('sidebar-open');\n      sidebarElem.classList.add('open');\n      btnBurgerSidebarElem.classList.add('open'); // btnBurgerSidebarElem.querySelector('svg.hamburger').classList.add('open');\n\n      if (btnBurgerSidebarElem.classList.contains('open')) {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.close);\n      } else {\n        btnBurgerSidebarElem.setAttribute('aria-label', _ariaLabel.open);\n      }\n\n      sidebarElem.classList.add('open');\n    }\n\n    function hideAllSidebarBlock(list, excludeItem) {\n      list.forEach(function (targetBlock) {\n        if (sidebarElem.querySelector(\".\".concat(targetBlock))) {\n          sidebarElem.querySelector(\".\".concat(targetBlock)).classList.add(hiddenClass);\n        }\n      });\n    }\n\n    function isDesctop() {\n      return document.body.clientWidth >= 768 ? true : false;\n    }\n  }\n\n  headerFixedOnResize();\n  window.addEventListener('resize', headerFixedOnResize);\n  document.body.addEventListener('click', clickHandler);\n});\n\n//# sourceURL=webpack:///../#uspeh-magazin/#DevSource/scripts/main.js?");

/***/ })

/******/ });