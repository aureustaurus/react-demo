'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _productActions = require('../actions/productActions.js');

var _productActions2 = _interopRequireDefault(_productActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = _react2.default.createClass({
  displayName: 'Product',
  getInitialState: function getInitialState() {
    return {
      product: {
        inputValue: '',
        color: ''
      },
      validClass: 'valid'
    };
  },

  checkValidName: function checkValidName(value) {
    if (typeof value == 'string' && value.length > 0) {
      var pattern = /^[\w\d]{4,8}$/g;
      return pattern.test(value);
    }
    return false;
  },

  updateInputValue: function updateInputValue(e) {
    var validClass = 'valid';
    var isValidName = this.checkValidName(e.target.value);
    if (!isValidName) {
      validClass = 'invalid';
    }
    var newProduct = Object.assign({}, this.state.product);
    newProduct.inputValue = e.target.value;
    this.setState({
      product: newProduct,
      validClass: validClass
    });
  },

  changeColor: function changeColor(e) {
    var newProduct = Object.assign({}, this.state.product);
    newProduct.color = e.target.value;
    this.setState({
      product: newProduct
    });
  },

  saveProduct: function saveProduct(e) {
    e.preventDefault();
    var isValidName = this.checkValidName(this.state.product.inputValue);
    console.log(isValidName, this.state.product.inputValue);
    if (!isValidName) {
      alert('Please set right name');
    }
    // this.props.actions.createProduct(this.state.product);
    console.log('VALUES', this.state.product, isValidName);
  },

  render: function render() {
    var _this = this;

    var colors = ['red', 'green', 'blue'];
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'form',
        { onSubmit: this.saveProduct },
        _react2.default.createElement(
          'label',
          null,
          'Name:'
        ),
        _react2.default.createElement('input', { className: this.state.validClass, value: this.state.inputValue, onChange: this.updateInputValue }),
        colors.map(function (color, i) {
          return _react2.default.createElement(
            'div',
            { className: 'radio', key: color },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'radio',
                value: color,
                checked: _this.state.product.color === color,
                onChange: _this.changeColor }),
              color
            )
          );
        }),
        _react2.default.createElement(
          'button',
          { type: 'Submit' },
          ' Save '
        )
      )
    );
  }
});

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_productActions2.default, dispatch)
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(Product)
// module.exports = connect(mapStateToProps, mapDispatchToProps)(Product)

module.exports = Product;