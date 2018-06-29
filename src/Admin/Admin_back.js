import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/button.scss';
import '../icomoon/style.css';
import Navbar_admin from '../Component_Admin/navbar_admin';
import Main_admin from '../Component_Admin/main_adnim';
class Admin_back extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <div className="min_height">
            <Navbar_admin/>
            <Main_admin/>
          </div>
        </section>
      </div >
    );
  }
}

export default Admin_back;
