import React, { Component } from 'react';
import ship from '../ship.jpg';
import '../App.css';
import '../styles/themes/page/home.scss';
import '../styles/components/input.scss';
import '../icomoon/style.css';
import Component_left_highligth from './component_left_highligth';
import Component_left_all from './component_left_all';

class Component_left extends Component {
	constructor() {
		super()
		this.state = {
			news: [],
			hightlight: []
		}
	}
	componentDidMount() {
		fetch('https://agile-cliffs-83142.herokuapp.com/api/news')
			.then(response => response.json())
			.then(newtest => {
				this.setState({ news: newtest, hightlight: [...newtest][Object.keys(newtest)[Object.keys(newtest).length - 1]] })

				// console.log(this.state.news);
			}); // news Setstate เพื่อเอา  News เท่ากับ APIชื่อ newtest
	}
	render() {
		return (
			<div className="left">
				<Component_left_highligth newhightlight={this.state.hightlight} />
				<Component_left_all addnews={this.state.news} />
			</div>
		)
	}
}
export default Component_left;