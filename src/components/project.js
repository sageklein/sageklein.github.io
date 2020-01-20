import React, { Component } from "react";
import Fade from "react-reveal/Fade";


class Project extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className="project">
					<img src={this.props.imageSrc} alt={this.props.title}></img>
					<div className="pic_under">
						<h1>{this.props.title}</h1>
						<h2>
							<span>{this.props.service}</span>
						</h2>
					</div>
				</div>
			</Fade>
		);
	}
}

export default Project;