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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);

$(function () {
  $('button.follow-toggle').each(function (idx, el) {
  new FollowToggle(el);
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

const FollowToggle = function(el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');

  this.render();
  this.$el.on('click', this.handleClick.bind(this));

  console.log("HELLO");
};

FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowed") {
    this.$el.prop('disabled', false);
    this.$el.html('Follow!');
  } else if (this.followState === "followed") {
    this.$el.prop('disabled', false);
    this.$el.html('Unfollow!');
  }
};

FollowToggle.prototype.handleClick = function(event) {
  const followToggle = this;

  event.preventDefault();

  if (this.followState === 'followed') {
    this.followState = 'unfollowing';
    this.render();
    APIUtil.unfollowUser(this.userId).then(() => {
      followToggle.followSate = "unfollowed";
      followToggle.render();
    });
  } else if (this.followState === 'unfollowed') {
    this.followState = 'following';
    this.render();
    APIUtil.followUser(this.userId).then(() => {
      followToggle.followState = 'followed';
      followToggle.render();
    });
  }
};


module.exports = FollowToggle;

// const APIUtil = require('./api_util');
//
// class FollowToggle {
//   constructor(el, options) {
//     this.$el = $(el);
//     this.userId = this.$el.data('user-id') || options.userId;
//     this.followState = (this.$el.data('initial-follow-state') ||
//                         options.followState);
//     this.render();
//
//     this.$el.on('click', this.handleClick.bind(this));
//   }
//
//   handleClick(event) {
//     const followToggle = this;
//
//     event.preventDefault();
//
//     if (this.followState === 'followed') {
//       this.followState = 'unfollowing';
//       this.render();
//       APIUtil.unfollowUser(this.userId).then(() => {
//         followToggle.followState = 'unfollowed';
//         followToggle.render();
//       });
//     } else if (this.followState === 'unfollowed') {
//       this.followState = 'following';
//       this.render();
//       APIUtil.followUser(this.userId).then(() => {
//         followToggle.followState = 'followed';
//         followToggle.render();
//       });
//     }
//   }
//
//   render() {
//     switch (this.followState) {
//       case 'followed':
//         this.$el.prop('disabled', false);
//         this.$el.html('Unfollow!');
//         break;
//       case 'unfollowed':
//         this.$el.prop('disabled', false);
//         this.$el.html('Follow!');
//         break;
//     }
//   }
// }
//
// module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUtil = {

  followUser: id => APIUtil.changeFollowStatus(id, 'POST'),

  unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method
    })
  )


};


module.exports = APIUtil;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map