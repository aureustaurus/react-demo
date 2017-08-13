import React from 'react';
// import Products from './Products';
// import Header from './Header';

var Container = React.createClass({
  displayName: 'Container',
  render: function() {
    return React.createElement("h1", null, "Main"//,
      //  <Header/>,
      //  <Products/>
    );
  }

});

module.exports = Container