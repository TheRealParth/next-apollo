
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(656);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(657);

var _Header2 = _interopRequireDefault(_Header);

var _Submit = __webpack_require__(660);

var _Submit2 = _interopRequireDefault(_Submit);

var _PostList = __webpack_require__(658);

var _PostList2 = _interopRequireDefault(_PostList);

var _withData = __webpack_require__(662);

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Submit2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_PostList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(566);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Parth/Documents/thirdTry/with-apollo/components/App.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    "data-jsx": 412430643,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 412430643,
    css: "\n      * {\n        font-family: Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\", monospace, serif;\n      }\n      body {\n        margin: 0;\n        padding: 25px 50px;\n      }\n      a {\n        color: #22BAD9;\n      }\n      p {\n        font-size: 14px;\n        line-height: 24px;\n      }\n      article {\n        margin: 0 auto;\n        max-width: 650px;\n      }\n      button {\n        align-items: center;\n        background-color: #22BAD9;\n        border: 0;\n        color: white;\n        display: flex;\n        padding: 5px 7px;\n      }\n      button:active {\n        background-color: #1B9DB7;\n        transition: background-color .3s\n      }\n      button:focus {\n        outline: none;\n      }\n    "
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/components/App.js"); } } })();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(566);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(649);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/components/Header.js';

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'About')), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: 'header[data-jsx="2280026175"] {margin-bottom: 25px;}a[data-jsx="2280026175"] {font-size: 14px;margin-right: 15px;text-decoration: none;}.is-active[data-jsx="2280026175"] {text-decoration: underline;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUNGLCtCQUNjLG9CQUNyQixDQUNFLDBCQUNlLGdCQUNHLG1CQUNHLHNCQUN2QixDQUNXLG1DQUNpQiwyQkFDNUIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BhcnRoL0RvY3VtZW50cy90aGlyZFRyeS93aXRoLWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgcGF0aG5hbWUgfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nICYmICdpcy1hY3RpdmUnfT5Ib21lPC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnaXMtYWN0aXZlJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG4iXX0= */\n/*@ sourceURL=components/Header.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/components/Header.js"); } } })();

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(577);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(566);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(565);

var _PostUpvoter = __webpack_require__(659);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/components/PostList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n']);

var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      allPosts = _ref$data.allPosts,
      loading = _ref$data.loading,
      _allPostsMeta = _ref$data._allPostsMeta,
      loadMorePosts = _ref.loadMorePosts;

  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return _react2.default.createElement('section', {
      'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement('ul', {
      'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, allPosts.map(function (post, index) {
      return _react2.default.createElement('li', { key: post.id, 'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', {
        'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, index + 1, '. '), _react2.default.createElement('a', { href: post.url, 'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, post.title), _react2.default.createElement(_PostUpvoter2.default, { id: post.id, votes: post.votes, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })));
    })), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, 'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_style2.default, {
      styleId: 1990168462,
      css: 'section[data-jsx="1990168462"] {padding-bottom: 20px;}li[data-jsx="1990168462"] {display: block;margin-bottom: 10px;}div[data-jsx="1990168462"] {align-items: center;display:-webkit-flex; display:flex;}a[data-jsx="1990168462"] {font-size: 14px;margin-right: 10px;text-decoration: none;padding-bottom: 0;border: 0;}span[data-jsx="1990168462"] {font-size: 14px;margin-right: 5px;}ul[data-jsx="1990168462"] {margin: 0;padding: 0;}button[data-jsx="1990168462"]:before {align-self: center;border-style: solid;border-width: 6px 4px 0 4px;border-color: #ffffff transparent transparent transparent;content: "";height: 0;margin-right: 5px;width: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUNELGdDQUNjLHFCQUN0QixDQUNHLDJCQUNhLGVBQ0ssb0JBQ3JCLENBQ0ksNEJBQ2lCLG9CQUNOLG1DQUNmLENBQ0UsMEJBQ2UsZ0JBQ0csbUJBQ0csc0JBQ0osa0JBQ1IsVUFDWCxDQUNLLDZCQUNZLGdCQUNFLGtCQUNuQixDQUNHLDJCQUNRLFVBQ0MsV0FDWixDQUNjLHNDQUNNLG1CQUNDLG9CQUNRLDRCQUM4QiwwREFDOUMsWUFDRixVQUNRLGtCQUNULFNBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUGFydGgvRG9jdW1lbnRzL3RoaXJkVHJ5L3dpdGgtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTBcblxuZnVuY3Rpb24gUG9zdExpc3QgKHsgZGF0YTogeyBhbGxQb3N0cywgbG9hZGluZywgX2FsbFBvc3RzTWV0YSB9LCBsb2FkTW9yZVBvc3RzIH0pIHtcbiAgaWYgKGFsbFBvc3RzICYmIGFsbFBvc3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFBvc3RzLmxlbmd0aCA8IF9hbGxQb3N0c01ldGEuY291bnRcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC51cmx9Pntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8UG9zdFVwdm90ZXIgaWQ9e3Bvc3QuaWR9IHZvdGVzPXtwb3N0LnZvdGVzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IGFsbFBvc3RzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxQb3N0cyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQywgZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgY3JlYXRlZEF0XG4gICAgfSxcbiAgICBfYWxsUG9zdHNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFBvc3RzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFBvc3RMaXN0KVxuIl19 */\n/*@ sourceURL=components/PostList.js */'
    }));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'Loading');
}

var allPosts = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat((0, _toConsumableArray3.default)(previousResult.allPosts), (0, _toConsumableArray3.default)(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/components/PostList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/components/PostList.js"); } } })();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(577);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(566);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(565);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/components/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      votes\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return upvote(id, votes + 1);
    }, 'data-jsx': 2734071884,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement(_style2.default, {
    styleId: 2734071884,
    css: 'button[data-jsx="2734071884"] {background-color: transparent;border: 1px solid #e4e4e4;color: #000;}button[data-jsx="2734071884"]:active {background-color: transparent;}button[data-jsx="2734071884"]:before {align-self: center;border-color: transparent transparent #000000 transparent;border-style: solid;border-width: 0 4px 6px 4px;content: "";height: 0;margin-right: 5px;width: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBQ0YsK0JBQ3dCLDhCQUNKLDBCQUNkLFlBQ2IsQ0FDYyxzQ0FDaUIsOEJBQy9CLENBQ2Msc0NBQ00sbUJBQ3VDLDBEQUN0QyxvQkFDUSw0QkFDaEIsWUFDRixVQUNRLGtCQUNULFNBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUGFydGgvRG9jdW1lbnRzL3RoaXJkVHJ5L3dpdGgtYXBvbGxvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCA0cHggNnB4IDRweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBpZDogb3duUHJvcHMuaWQsXG4gICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuIl19 */\n/*@ sourceURL=components/PostUpvoter.js */'
  }));
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: { id: id, votes: votes },
          optimisticResponse: {
            updatePost: {
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/components/PostUpvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/components/PostUpvoter.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(577);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(566);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(565);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/components/Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('button', { type: 'submit', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'), _react2.default.createElement(_style2.default, {
    styleId: 567193191,
    css: 'form[data-jsx="567193191"] {border-bottom: 1px solid #ececec;padding-bottom: 20px;margin-bottom: 20px;}h1[data-jsx="567193191"] {font-size: 20px;}input[data-jsx="567193191"] {display: block;margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFDSiw0QkFDNkIsaUNBQ1oscUJBQ0Qsb0JBQ3JCLENBQ0csMEJBQ2MsZ0JBQ2pCLENBQ00sNkJBQ1UsZUFDSyxvQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9TdWJtaXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BhcnRoL0RvY3VtZW50cy90aGlyZFRyeS93aXRoLWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gU3VibWl0ICh7IGNyZWF0ZVBvc3QgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlXG4gICAgbGV0IHVybCA9IGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZVxuXG4gICAgaWYgKHRpdGxlID09PSAnJyB8fCB1cmwgPT09ICcnKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoJ0JvdGggZmllbGRzIGFyZSByZXF1aXJlZC4nKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCBodHRwIGlmIG1pc3NpbmcgZnJvbSB1cmxcbiAgICBpZiAoIXVybC5tYXRjaCgvXlthLXpBLVpdKzpcXC9cXC8vKSkge1xuICAgICAgdXJsID0gYGh0dHA6Ly8ke3VybH1gXG4gICAgfVxuXG4gICAgY3JlYXRlUG9zdCh0aXRsZSwgdXJsKVxuXG4gICAgLy8gcmVzZXQgZm9ybVxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlID0gJydcbiAgICBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWUgPSAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICAgIGFsbFBvc3RzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZVBvc3RcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbbmV3UG9zdCwgLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG4iXX0= */\n/*@ sourceURL=components/Submit.js */'
  }));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/components/Submit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/components/Submit.js"); } } })();

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClient = undefined;

var _reactApollo = __webpack_require__(565);

var apolloClient = null;

function _initClient(headers, initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser,
    dataIdFromObject: function dataIdFromObject(result) {
      return result.id || null;
    },
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
      opts: {
        credentials: 'same-origin'
        // Pass headers here if your graphql server requires them
      }
    })
  });
}

var initClient = exports.initClient = function initClient(headers) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!process.browser) {
    return _initClient(headers, initialState);
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState);
  }
  return apolloClient;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/lib/initClient.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/lib/initClient.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(639);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(565);

var _initClient = __webpack_require__(661);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Parth/Documents/thirdTry/with-apollo/lib/withData.js';

exports.default = function (Component) {
  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var headers, client, props, app;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  headers = ctx.req ? ctx.req.headers : {};
                  client = (0, _initClient.initClient)(headers);
                  _context.t0 = _extends3.default;
                  _context.t1 = {
                    url: { query: ctx.query, pathname: ctx.pathname }
                  };
                  _context.next = 6;
                  return Component.getInitialProps ? Component.getInitialProps(ctx) : {};

                case 6:
                  _context.t2 = _context.sent;
                  props = (0, _context.t0)(_context.t1, _context.t2);

                  if (process.browser) {
                    _context.next = 12;
                    break;
                  }

                  app = _react2.default.createElement(_reactApollo.ApolloProvider, { client: client, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    }
                  }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
                    }
                  })));
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(app);

                case 12:
                  return _context.abrupt('return', (0, _extends3.default)({
                    initialState: {
                      apollo: {
                        data: client.getInitialState().data
                      }
                    },
                    headers: headers
                  }, props));

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

      _this.client = (0, _initClient.initClient)(_this.props.headers, _this.props.initialState);
      return _this;
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.client, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        })));
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Parth/Documents/thirdTry/with-apollo/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Parth/Documents/thirdTry/with-apollo/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(600);


/***/ })

},[668]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9lYTE4ODRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzP2VhMTg4NGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZWExODg0ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzP2VhMTg4NGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcz9lYTE4ODRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3VibWl0LmpzP2VhMTg4NGYiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRDbGllbnQuanM/ZWExODg0ZiIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/ZWExODg0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR1A7Ozs7Ozs7MENBQXdCLFVBQUMsT0FBRDt5QkFDckI7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxxQkFDRyxrQ0FBTyxVQUFVLE1BQU0sSUFBSTtnQkFBNUI7a0JBQ0E7QUFEQTtzQkFDQzs7Z0JBQUQ7a0JBQ0E7QUFEQTtBQUFBLHNCQUNDOztnQkFBRDtrQkFBQTtBQUFBO0FBQUE7QUFKVyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mOzs7Ozs7OztrQkFBZTtNQUFHO3lCQUNoQjtnQkFBQTs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBO2FBQUE7U0FBQTtBQUFBO0FBREYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7Ozs7Ozs7O2tCQUFlO01BQUc7eUJBQ2hCO2dCQUFBOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0csZ0NBQUssVUFBTixNQUFlLE1BQUs7Z0JBQXBCO2tCQUNFO0FBREY7cUJBQ0UscUJBQUcsV0FBVyxhQUFhLE9BQU8seUJBQWxDOztnQkFBQTtrQkFBQTtBQUFB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QkFHTyxJQUFJLE1BQU0sSUFBSSxJQUFJLFVBQzVCO0FBSkcsMkJBSU0sNEJBQVc7MkJBSmpCOzt5QkFPRixFQUFFLE9BQU8sSUFBSSxPQUFPLFVBQVUsSUFBSTtBQUF2QztrQ0FQTzt5QkFRRyxVQUFVLGtCQUFrQixVQUFVLGdCQUFnQixPQUFPOztxQkFSaEU7eUNBTUg7QUFORzs7c0JBV0osUUFBUSxTQVhKO29DQUFBO0FBQUE7QUFZRDs7QUFaQyx3Q0FhSiw2Q0FBZSxRQUFRO2dDQUF4QjtrQ0FDRTtBQURGO21CQUFBLGdDQUNHLHNDQUFjOztnQ0FBZjtrQ0FBQTtBQUFBO0FBQUE7a0NBZEc7eUJBaUJELGtDQUFnQjs7cUJBakJmOzs7OzhCQXVCRyxPQUFPLGtCQUdqQjtBQUhJO0FBREY7NkJBdEJLO0FBcUJQLHFCQU1HOztxQkEzQkk7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBQTs7cUNBQUE7a0NBQUE7QUFBQTs7ZUFBQTtBQStCWDtBQS9CVzs7b0JBK0JFLE9BQU87MENBQUE7O3dJQUVsQjs7WUFBSyxTQUFTLDRCQUFXLE1BQUssTUFBTSxTQUFTLE1BQUssTUFBTTthQUN6RDtBQWxDVTs7O1dBQUE7K0JBcUNUOytCQUNHLDZDQUFlLFFBQVEsS0FBSztzQkFBN0I7d0JBQ0U7QUFERjtTQUFBLGdDQUNHLHNDQUFjLEtBQUs7O3NCQUFwQjt3QkFHTDtBQUhLO0FBQUE7QUF2Q0s7QUFBQTs7V0FBQTtJQUNDLGdCQUFNO0FBRHRCLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuLi9jb21wb25lbnRzL1N1Ym1pdCdcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RMaXN0J1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoKHByb3BzKSA9PiAoXG4gIDxBcHA+XG4gICAgPEhlYWRlciBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfSAvPlxuICAgIDxTdWJtaXQgLz5cbiAgICA8UG9zdExpc3QgLz5cbiAgPC9BcHA+XG4pKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtYWluPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBcIkx1Y2lkYSBDb25zb2xlXCIsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMyMkJBRDk7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJBRDk7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgfVxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjlEQjc7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzXG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHBhdGhuYW1lIH0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYWJvdXQnPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ2lzLWFjdGl2ZSd9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgUG9zdFVwdm90ZXIgZnJvbSAnLi9Qb3N0VXB2b3RlcidcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBQb3N0TGlzdCAoeyBkYXRhOiB7IGFsbFBvc3RzLCBsb2FkaW5nLCBfYWxsUG9zdHNNZXRhIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xuICBpZiAoYWxsUG9zdHMgJiYgYWxsUG9zdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsUG9zdHMubGVuZ3RoIDwgX2FsbFBvc3RzTWV0YS5jb3VudFxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2luZGV4ICsgMX0uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxQb3N0VXB2b3RlciBpZD17cG9zdC5pZH0gdm90ZXM9e3Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkgYWxsUG9zdHMoJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgIGFsbFBvc3RzKG9yZGVyQnk6IGNyZWF0ZWRBdF9ERVNDLCBmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9LFxuICAgIF9hbGxQb3N0c01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCA0cHggNnB4IDRweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBpZDogb3duUHJvcHMuaWQsXG4gICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gU3VibWl0ICh7IGNyZWF0ZVBvc3QgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlXG4gICAgbGV0IHVybCA9IGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZVxuXG4gICAgaWYgKHRpdGxlID09PSAnJyB8fCB1cmwgPT09ICcnKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoJ0JvdGggZmllbGRzIGFyZSByZXF1aXJlZC4nKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCBodHRwIGlmIG1pc3NpbmcgZnJvbSB1cmxcbiAgICBpZiAoIXVybC5tYXRjaCgvXlthLXpBLVpdKzpcXC9cXC8vKSkge1xuICAgICAgdXJsID0gYGh0dHA6Ly8ke3VybH1gXG4gICAgfVxuXG4gICAgY3JlYXRlUG9zdCh0aXRsZSwgdXJsKVxuXG4gICAgLy8gcmVzZXQgZm9ybVxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlID0gJydcbiAgICBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWUgPSAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICAgIGFsbFBvc3RzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZVBvc3RcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbbmV3UG9zdCwgLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1N1Ym1pdC5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGxcblxuZnVuY3Rpb24gX2luaXRDbGllbnQgKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsXG4gICAgZGF0YUlkRnJvbU9iamVjdDogcmVzdWx0ID0+IHJlc3VsdC5pZCB8fCBudWxsLFxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2l4bWt0MnVsMDFxMDAxMjJta3NnODJwbicsXG4gICAgICBvcHRzOiB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIC8vIFBhc3MgaGVhZGVycyBoZXJlIGlmIHlvdXIgZ3JhcGhxbCBzZXJ2ZXIgcmVxdWlyZXMgdGhlbVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBpbml0Q2xpZW50ID0gKGhlYWRlcnMsIGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIF9pbml0Q2xpZW50KGhlYWRlcnMsIGluaXRpYWxTdGF0ZSlcbiAgfVxuICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgIGFwb2xsb0NsaWVudCA9IF9pbml0Q2xpZW50KGhlYWRlcnMsIGluaXRpYWxTdGF0ZSlcbiAgfVxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdENsaWVudC5qcyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpbml0Q2xpZW50IH0gZnJvbSAnLi9pbml0Q2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KSA9PiAoXG4gIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBjdHgucmVxID8gY3R4LnJlcS5oZWFkZXJzIDoge31cbiAgICAgIGNvbnN0IGNsaWVudCA9IGluaXRDbGllbnQoaGVhZGVycylcblxuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHVybDogeyBxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lIH0sXG4gICAgICAgIC4uLmF3YWl0IChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge30pXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIGRhdGE6IGNsaWVudC5nZXRJbml0aWFsU3RhdGUoKS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLmNsaWVudCA9IGluaXRDbGllbnQodGhpcy5wcm9wcy5oZWFkZXJzLCB0aGlzLnByb3BzLmluaXRpYWxTdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5jbGllbnR9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICApXG4gICAgfVxuICB9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvd2l0aERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        