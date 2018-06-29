import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/button.scss';
import '../icomoon/style.css';

class Dashboard_mange extends Component {
	render() {
		return (
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
							<td><img alt="Photo" src={unnamed} width='120px ' height='80px' text-align='center' /></td>
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
							<td><img alt="Photo" src={unnamed} width='120px ' height='80px' text-align='center' /></td>
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
					</tbody>
				</table>
			</div>
		);
	}
}
export default Dashboard_mange;
