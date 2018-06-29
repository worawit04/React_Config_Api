import React, { Component } from 'react';
import unnamed from '../unnamed.jpg';
import '../styles/themes/page/admin.scss';
import '../styles/components/input.scss';
import '../styles/components/button.scss';

class Addnew_admin extends Component {
	render() {
		return (
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
		);
	}
}
export default Addnew_admin;
