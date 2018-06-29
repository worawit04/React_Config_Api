import React, { Component } from 'react';
import ship from '../ship.jpg';
import '../App.css';
import '../styles/themes/page/home.scss';
import '../styles/components/input.scss';
import '../icomoon/style.css';

const Component_left_highligth = ({newhightlight}) => (
    
      <div className="slider">
        <div className="callbacks_wrap" >
          <img alt="Photo" className="img-thumbnail" src={ship} />
        </div>
        <div className="post-text">
          <div className="title_highligth"> <h3>{newhightlight.title}</h3></div>
          <div className="--pp-title" href="single.html"> <p>{newhightlight.detail}</p></div>
        </div>
        <br/>
      </div>
)

export default Component_left_highligth;