import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../actions/productActions.js';
import { Button } from 'react-bootstrap';

var Product = React.createClass({
  displayName: 'Product',
  getInitialState: function() {
    return {
      product: {
        name: '',
        color: ''
      },
      validClass: 'valid'
    };
  },

  componentWillMount: function() {
    this.props.actions.fetchProducts();
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.products != nextProps.products ) {
      if (nextProps.products && nextProps.products.product) {
        this.setState({ product: nextProps.products.product });
      }
    }
  },

  checkValidName: function(value) {
    if (typeof value == 'string' && value.length > 0) {
      let pattern = (/^[\w\d]{4,8}$/g);
      return pattern.test(value);
    }
    return false;
  },

  updatename: function(e) {
    let validClass = 'valid'
    let isValidName = this.checkValidName(e.target.value);
    if (!isValidName) {
      validClass = 'invalid'
    }
    let newProduct = Object.assign({}, this.state.product);
    newProduct.name = e.target.value;
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
    let isValidName = this.checkValidName(this.state.product.name);
    if (!isValidName) {
      alert('Please set right name');
    } else {
      if (this.state.product && this.state.product.id) {
        this.props.actions.updateProduct(this.state.product);
      } else {
        this.props.actions.createProduct(this.state.product);
      }
    }
  },

  selectProduct: function(product, e) {
    e.preventDefault();
    this.setState({
      product: product
    });
  },

  newProduct: function() {
    this.setState({
      product: {
        name: '',
        color: ''
      },
      validClass: 'valid'
    });
  },

  render: function() {
    let colors = ['red', 'green', 'blue'];
    let products = (this.props.products && this.props.products.allProducts) ? this.props.products.allProducts : [];

    return (
      <div className='main-container'>
        <div>
          <h2> Edit product: </h2>
          <Button bsStyle="primary" bsSize="small" onClick= {this.newProduct}>
            Create new
          </Button>
          <form className='edit-form' onSubmit={this.saveProduct}>
            <label>Name:</label>
            <input className={this.state.validClass} value={this.state.product.name} onChange={this.updatename}/>
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
            <Button bsStyle="primary" bsSize="small" type="submit">
              Save
            </Button>
            {/* <button type='Submit'> Save </button> */}
          </form>
          {/* <button onClick= {this.newProduct}> New </button> */}
        </div>
        <div className="all-products">
          <h2> All products: </h2>
          <table>
            <thead>
              <tr>
                <td> ID </td>
                <td> Name </td>
                <td> Color </td>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product, i) =>
                  <tr onClick={this.selectProduct.bind(this, product)} key={i}>
                    <td> {product.id} </td>
                    <td> {product.name} </td>
                    <td> {product.color} </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
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
module.exports = connect(mapStateToProps, mapDispatchToProps)(Product)

// module.exports = Product