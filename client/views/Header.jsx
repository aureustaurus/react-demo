import React from 'react';

var Header = React.createClass({
  displayName: 'Header',

  render: function() {
    return (
      React.createElement("div", null,
        React.createElement("span", null,
          React.createElement("a", {href: "/"},
            "Main page"
          )
        ),
        React.createElement("span", null,
          React.createElement("a", {href: "/product"},
            "Products"
          )
        )
      )
    );
  }
});

module.exports = Header