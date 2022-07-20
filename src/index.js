import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "index.scss";

import Application from "components/Application";

axios.defaults.baseURL="http://localhost:8001";

ReactDOM.render(<Application />, document.getElementById("root"));

  //test error
  // router.put("/appointments/:id", (request, response) => {
  //   if (process.env.TEST_ERROR) {
  //     setTimeout(() => response.status(500).json({}), 1000);
  //     return;
  //   }
  // });