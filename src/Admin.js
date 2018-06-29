import React, { Component } from 'react';
import unnamed from './unnamed.jpg';
import './styles/themes/page/admin.scss';
import './styles/components/button.scss';
import './icomoon/style.css';
class Admin extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <div className="min_height">
            <nav>
              <div class="user-img-div">
                <div className="profile_main">         
                    <img alt="Photo" className="img-thumbnail" src={unnamed} width='70px' text-align='center' />
                </div>
                <div class="inner-text">
                  <p>Jhon Deo Alex</p><span> <p>Last Login</p></span>
                </div>
              </div>
              <ul className="menu_List">
                <li className="--active"><a href="#"><span class="icon-home"></span>Home</a></li>
                <li><a href="addnews"><span class="icon-pencil"></span>Addnews</a></li>
                <li><a href="#"><span class="icon-folder-plus"></span>News</a></li>
              </ul>
            </nav>
            <main>
              <header>
                <div className="list_dashboard">
                  <div className="menuList">
                    <div className="home"><span className="icon-menu"></span><span>Menu</span></div>
                  </div>
                  <div className="profile_admin">
                       <div className="profile_list">
                       <div className="nameadnim">  
                         <p>Worawit Sontikul</p>
                        </div> 
                        <div className="photoadmin">
                         <img alt="Photo" src={unnamed} width='50px' text-align='center' />
                        </div> 
                       </div>                   
                  </div>
                </div>
              </header>
              <dashboard>
                <div className="page-inner">
                  <div className="head_Dadhboard">
                    <h1 class="page-head-line">DASHBOARD</h1>
                    <h1 class="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                  </div>
                  <div class="flex-container">
                    <div class="main-box --mb-red">
                      <a href="#">
                         <span className="icon-star-empty"></span>
                      </a>
                    </div>
                    <div class="main-box --mb-blue">
                      <a href="#">
                      <span className="icon-star-empty"></span>
                      </a>
                    </div>
                    <div class="main-box --mb-green">
                      <a href="#">
                      <span className="icon-star-empty"></span>
                      </a>
                    </div>
                  </div>
                  <div className="table_Top">
                    <table class="table">
                      <thead>
                        <tr>
                          <th className="position">Position</th>
                          <th className="image">Image</th>
                          <th className="detail">Details</th>
                          <th className="action">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><img alt="Photo"src={unnamed} width='120px 'height='80px' text-align='center' /></td>
                          <td>
                            <div className="title_detail">
                              <h3 className="title"> TEst Bi</h3>
                              <p className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                            </div>
                            </td>
                          <td><div className="mange"> <button class="button --button_Blue"><span className="icon-pencil"></span></button>
                            <button class="button --button_Red"><span className="icon-bin"></span></button></div>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td><img alt="Photo"src={unnamed} width='120px 'height='80px' text-align='center' /></td>
                          <td>
                            <h3 className="title_detail"> TEst Bi</h3>
                            <p className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p></td>
                          <td><div className="mange"> <button class="button --button_Blue"><span className="icon-pencil"></span></button>
                            <button class="button --button_Red"><span className="icon-bin"></span></button></div>
                          </td>
                        </tr>     
                      </tbody>
                    </table>
                  </div>
                  <div className="addnews">
                    <form className="ui form" >
                      <h1>Add News</h1>
                      <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" id="title" placeholder="Title" />
                      </div>
                      <div className="field">
                        <label>Detail</label>
                        <textarea rows="4" name="detail" id="detail" placeholder="Detail" ></textarea>
                      </div>
                      <div className="buttonform addnews">
                        <a className="button --green" onClick={this.onOpenConfirmModal}>SAVE</a>
                        <a className="button --red " >
                          <span class="mls">CANCEL</span></a>
                      </div>
                    </form>
                  </div>

                </div>
              </dashboard>
            </main>
          </div>
        </section>
      </div >
    );
  }
}

export default Admin;
