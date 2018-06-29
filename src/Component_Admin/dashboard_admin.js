import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/input.scss';
import '../styles/components/button.scss';
import '../icomoon/style.css';
import Dashboard_mange from './dashboard_mange';
import Addnew_admin from './addnew_admin';

class Dashboard_admin extends Component {
	render() {
		return (
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
					<Dashboard_mange />
					<Addnew_admin />
				</div>
			</dashboard>
		);
	}
}
export default Dashboard_admin;
