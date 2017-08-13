'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Products from './Products';
// import Header from './Header';

var Container = _react2.default.createClass({
  displayName: 'Container',
  render: function render() {
    return _react2.default.createElement("h1", null, "Main" //,
    //  <Header/>,
    //  <Products/>
    );
  }

});

module.exports = Container;