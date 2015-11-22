import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
      Hello, {this.props.name}!
      </div>
    );
  },
});


//var React = require("react");

//module.exports = React.createClass({
  //render: function () {
    //return <div className="greeting">Hello, {this.props.name}</div>
  //}
//})
