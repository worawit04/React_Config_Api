import React, { Component } from 'react';
import ship from '../ship.jpg';
import '../App.css';
import '../styles/themes/page/home.scss';
import '../styles/components/input.scss';
import '../icomoon/style.css';

const Component_right = () => (
	<div className="right">
		<div className="newsletter">
			<h1 className="side-title-head">Newsletter</h1>
			<p className="sign">Sign up to receive our free newsletters!</p>
			<form>
				<input type="text" className="signemail" value="Email Address" />
				<input type="submit" value="submit" />
			</form>
		</div>
		<div className="list_vertical">
			<div className="accordation_menu">
				<div className="popular_news">
					<div className="popular_head">Popular Posts</div>
					<div className="popular_post_grid">
						<div className="list-post">
							<div className="post-img">
								<img alt="Photo" className="img-thumbnail" src={ship} />
							</div>
							<div className="post-text">
								<a className="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
								<p>On Jan 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
							</div>
						</div>
						<div className="list-post">
							<div className="post-img">
								<img alt="Photo" className="img-thumbnail" src={ship} />
							</div>
							<div className="post-text">
								<a className="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
								<p>On Jan 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
							</div>
						</div>
						<div className="list-post">
							<div className="post-img">
								<img alt="Photo" className="img-thumbnail" src={ship} />
							</div>
							<div className="post-text">
								<a className="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
								<p>On Jan 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
							</div>
						</div>
						<div className="list-post">
							<div className="post-img">
								<img alt="Photo" className="img-thumbnail" src={ship} />
							</div>
							<div className="post-text">
								<a className="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
								<p>On Jan 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
							</div>
						</div>
						<div className="list-post">
							<div className="post-img">
								<img alt="Photo" className="img-thumbnail" src={ship} />
							</div>
							<div className="post-text">
								<a className="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
								<p>On Jan 25 <a className="span_link" href="#"><span className="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Component_right;