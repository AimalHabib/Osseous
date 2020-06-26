import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './Images/meritAmerica.png';
import About from "./Pages/About";
import Update from "./Pages/Updates";
import Developer from "./Pages/Developers";
import Particles from 'react-particles-js';
 
class Main extends Component {
    render() {
      return (
        
        <HashRouter>
          <div>
            <div>
              <img src={logo} alt="this is car image" />
            </div>
            <ul className="header">
                <li><NavLink to="/developer">For Developers</NavLink></li>
                <li><NavLink to="/update">Updates</NavLink></li>
                <li><NavLink exact to="/">About</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={About}/>
                <Route path="/update" component={Update}/>
                <Route path="/developer" component={Developer}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;