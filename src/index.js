import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "index.scss";

import Application from "components/Application";

axios.defaults.baseURL="http://localhost:8001";

ReactDOM.render(<Application />, document.getElementById("root"));