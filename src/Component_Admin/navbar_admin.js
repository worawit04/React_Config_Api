import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/input.scss';
import '../styles/components/button.scss';
import '../icomoon/style.css';

class Navbar_admin extends Component {
  render() {
    return (
      <nav>
        <div class="user-img-div">
          <div className="profile_main">
            <img alt="Photo" src={unnamed} text-align='center' />
          </div>
          <div class="inner-text">
            <p>Jhon Deo Alex</p><span> <p>Last Login</p></span>
          </div>
        </div>
        <ul className="menu_List">
          <li className="--active"><a href="#"><span class="icon-home"></span> <p>Home</p></a></li>
          <li><a href="addnews"><span class="icon-pencil"></span><p>Addnews/</p></a></li>
          <li><a href="#"><span class="icon-folder-plus"></span><p>News</p></a></li>
        </ul>
      </nav>
    );
  }
}
export default Navbar_admin;
