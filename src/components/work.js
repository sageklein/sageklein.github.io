import React, { Component } from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
import data from "../Data";



class Work extends Component {

	state = {};
	render() {

		return (
			<div className="workBg">
				<div className="work-heading">
					<Fade bottom cascade>
						Work.
					</Fade>
				</div>{" "}
				<Fade bottom>
					<div className="intro-content">
					<p>{data.intro}</p>
					</div>
				</Fade>
				<div className="project_container">
					{data.projects.map(project => (
						<Project
							key={project.id}
							title={project.title}
							service={project.service}
							imageSrc={project.imageSrc}
							url={project.url}
						></Project>
					))}
				</div>
			</div>
		);
	}
}

export default Work;
