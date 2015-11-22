//es2015
//import React from "react";
//import ReactDom from "react-dom";
//import Greeting from "./greeting";

var React = require("react");
var ReactDom = require("react-dom");
var Greeting = require("./greeting");

ReactDom.render(
  <Greeting name="Sassha"/>,
    document.body
);
