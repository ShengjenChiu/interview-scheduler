import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "index.scss";

import Application from "components/Application";

//set the axios api's initial baseURL
axios.defaults.baseURL="http://localhost:8001";

//react to render the virtual DOM
ReactDOM.render(<Application />, document.getElementById("root"));