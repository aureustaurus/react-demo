import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import productActions from '../actions/productActions.js';

var Product = React.createClass({
  displayName: 'Product',
  getInitialState: function() {
    return {
      product: {
        inputValue: '',
        color: ''
      },
      validClass: 'valid'
    };
  },

  checkValidName: function(value) {
    if (typeof value == 'string' && value.length > 0) {
      let pattern = (/^[\w\d]{4,8}$/g);
      return pattern.test(value);
    }
    return false;
  },

  updateInputValue: function(e) {
    let validClass = 'valid'
    let isValidName = this.checkValidName(e.target.value);
    if (!isValidName) {
      validClass = 'invalid'
    }
    let newProduct = Object.assign({}, this.state.product);
    newProduct.inputValue = e.target.value;
    this.setState({
      product: newProduct,
      validClass
    });

  },

  changeColor: function(e) {
    let newProduct = Object.assign({}, this.state.product);
    newProduct.color = e.target.value;
    this.setState({
      product: newProduct
    });
  },

  saveProduct: function(e) {
    e.preventDefault();
    let isValidName = this.checkValidName(this.state.product.inputValue);
    console.log(isValidName, this.state.product.inputValue)
    if (!isValidName) {
      alert('Please set right name');
    }
    // this.props.actions.createProduct(this.state.product);
    console.log('VALUES', this.state.product, isValidName);
  },

  render: function() {
    let colors = ['red', 'green', 'blue'];
    return (
      <div>
        <form onSubmit={this.saveProduct}>
          <label>Name:</label>
          <input className={this.state.validClass} value={this.state.inputValue} onChange={this.updateInputValue}/>
            {
              colors.map((color, i) =>
                <div className="radio" key={color}>
                  <label>
                  <input
                    type='radio'
                    value={color}
                    checked={this.state.product.color === color}
                    onChange={this.changeColor}/>
                    {color}
                  </label>
                </div>
              )
            }
          <button type='Submit'> Save </button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Product)
// module.exports = connect(mapStateToProps, mapDispatchToProps)(Product)

module.exports = Product