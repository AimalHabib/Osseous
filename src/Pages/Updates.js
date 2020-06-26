import React, { Component, Button, href} from "react";
import { Link } from 'react-router-dom';

import "./Updates.css";

class Updates extends Component {
  render(){
    const versionA = 'https://docs.google.com/document/d/1sYsY3nw1tnK-HfTake2aNhLreDvEQIi8vreXr_uTJLo/edit';
    const versionB = 'https://docs.google.com/document/d/17m6Tx4zYbM_0vpYEAUfkjUsih7pOv0yCqx3EJIUpE7s/edit';
    const versionC = 'https://docs.google.com/document/d/1rfE4EafmHgudgtfpNMI-_WQ-_LlNm8fXds_FzgrCEMM/edit';

    return(
        <div className = "updates">
            <h1 className = "h1">Welcome to the updates page</h1>
            <body className = "summary">
              In this page I will keep track of the updates for my project as I continue to make changes.
            </body>

            <ul>
              <div>
                <a href={versionA}>
                  Click Here for the base project
                </a>
              </div>
              <div>
                <a href={versionB}>
                  Click Here for the 1st update
                </a>
              </div>
              <div>
                <a href={versionC}>
                  Click Here for the 2nd update
                </a>
              </div>
            </ul>
        </div>
    );
  }
}
export default Updates;