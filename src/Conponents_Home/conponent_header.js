import React, { Component } from 'react';
import '../App.css';
import ship from '../ship.jpg';
import logonews from '../logonews.png';

class Conponent_header extends Component {
	render() {
		return (
			<div className="navigation">
				<div className="logo">
					<img alt="Photo" src={logonews} />
				</div>
				<ul className="topnav">
					<li><a className="active" href="#home">Home</a></li>
					<li><a href="news">Sport</a></li>
					<li><a href="contact">Health</a></li>
					<li><a href="contact">Business</a></li>
					<li><a href="contact">Technology</a></li>
				</ul>
				<div className="search-container">
					<form >
						<input type="text" placeholder="Search.." name="search" />
					</form>
				</div>
			</div>
		)
	}
}
export default Conponent_header;