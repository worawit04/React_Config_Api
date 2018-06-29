import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/input.scss';
import '../styles/components/button.scss';
import '../icomoon/style.css';

class Header_admin extends Component {
  render() {
    return (
      <header>
        <div className="list_dashboard">
          <div className="menuList">
            <div className="home"><span className="icon-menu"></span><span>Menu</span></div>
          </div>
          <div className="profile_admin">
            <div className="profile_list">
              <div className="name_admin">
                <p>Worawit Sontikul</p>
              </div>
              <div className="photoadmin">
                <img alt="Photo" src={unnamed} width='50px' text-align='center' />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header_admin;
