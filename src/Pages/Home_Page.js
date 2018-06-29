import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import ship from '../ship.jpg';
import logonews from '../logonews.png';
import '../App.css';
import '../styles/themes/page/home.scss';
import '../styles/components/input.scss';
import '../icomoon/style.css';
import styles2 from '../styles/testLocal2.scss';
import Conponent_header from '../Conponents_Home/conponent_header';
import Conponent_footer from '../Conponents_Home/conponent_footer';
import Component_right from '../Conponents_Home/component_right';
import Component_left from '../Conponents_Home/component_left';

class Home_Page extends Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <Conponent_header/>
          <div className="main-body">
            <div className="wrap">
             <Component_left/>
             <Component_right/>
            </div>
          </div>
        </div>
        <Conponent_footer/>
      </div>
    );
  }
}
export default Home_Page;
