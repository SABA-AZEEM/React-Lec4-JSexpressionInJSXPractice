//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

let fname = "Saba";
let lname = "Azeem";
let currentYear = new Date().getFullYear();

ReactDOM.render(
  <>
    <h1>Created by {`${fname} ${lname}`}</h1>
    <p>Copyright {currentYear}.</p>
  </>,
  document.getElementById("root")
);
