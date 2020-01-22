import React, { Component } from "react";
import Fade from "react-reveal/Fade";


class Project extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className="project">
					<a
						href={this.props.imageSrc}
						rel="noopener noreferrer"
						target="_blank"
					>
						<img src={this.props.imageSrc} alt={this.props.title} />
					</a>
					<div className="pic_under">
						<h1>{this.props.title}</h1>
						<h2>
							<span className="service">{this.props.service}</span>
						</h2>
					</div>
				</div>
			</Fade>
		);
	}
}

export default Project;