import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Website extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className="websites">
					<h1>{this.props.words}</h1>
					<a href={this.props.url} target="_blank">
						<img
							src={this.props.imageSrc}
							alt={this.props.title}
						></img>
					</a>
					<h1>{this.props.title}</h1>
					<span className="discription">{this.props.service}</span>
				</div>
			</Fade>
		);
	}
}

export default Website;

