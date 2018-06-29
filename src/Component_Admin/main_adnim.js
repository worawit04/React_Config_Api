import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/input.scss';
import '../styles/components/button.scss';
import '../icomoon/style.css';
import Header_admin from './header_admin';
import Dashboard_admin from './dashboard_admin';

class Main_admin extends Component {
	render() {
		return (
			<main>
				<Header_admin />
				<Dashboard_admin />
			</main>
		);
	}
}
export default Main_admin;
