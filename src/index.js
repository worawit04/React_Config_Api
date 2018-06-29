import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {BrowserRouter}  from 'react-router-dom';
// import Root from './components/Root';
import Home_Pages from './Pages/Home_Page';
import './index.css';
// import Admin from './Admin';
// import Navbar_admin from './Component_Admin/navbar_admin'
// import App from './App';
// import Root from './components/Root';
// import Admin_back from './Admin/Admin_back';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 

// import 'semantic-ui-css/semantic.min.css';

ReactDOM.render( 
        <Home_Pages/>
     , document.getElementById('root'));
registerServiceWorker();
