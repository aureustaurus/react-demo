'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
  displayName: 'Header',

  render: function render() {
    return _react2.default.createElement("div", null, _react2.default.createElement("span", null, _react2.default.createElement("a", { href: "/" }, "Main page")), _react2.default.createElement("span", null, _react2.default.createElement("a", { href: "/product" }, "Products")));
  }
});

module.exports = Header;