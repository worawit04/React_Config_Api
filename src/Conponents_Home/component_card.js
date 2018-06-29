import React, { Component } from 'react';
import ship from '../ship.jpg';
import '../App.css';
import '../styles/themes/page/home.scss';
import '../styles/components/input.scss';
import '../icomoon/style.css';
import Component_left_highligth from './component_left_highligth';
import Component_left_all from './component_left_all';

const Component_card = ({ id, title, detail, userId }) => (
	<div className="articles">
		<div className="articlesLeft">
			<div className="list_img">
				<div className="post_img --boximage">
					<img alt="Photo" className="img-thumbnail" src={ship} />
				</div>
			</div>
		</div>
		<div className="articlesright">
			<div className="post_text ">
				<a className="title_detail" href="single.html"><h3>{title}</h3></a><br />
				<p>{detail}</p>
			</div>
		</div>
	</div>
)
export default Component_card;