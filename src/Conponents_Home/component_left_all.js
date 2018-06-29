import React, { Component } from 'react';
import ship from '../ship.jpg';
import '../App.css';
import '../styles/themes/page/home.scss';
import '../styles/components/input.scss';
import '../icomoon/style.css';
import Component_card from './component_card';

const Component_left_all = ({ addnews }) => (
	<div>
		<div className="article_top">
			<div> All around the world</div>
		</div>
		<div className="articles_main">
			{
				addnews.map((post, i) => {
					return (
						<Component_card
							key={i}
							id={post.id}
							title={post.title}
							detail={post.detail}
							userId={post.user}
						/>
					)
				})
			}
		</div>
	</div>

)

export default Component_left_all;