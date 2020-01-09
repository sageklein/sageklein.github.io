import React, { Component } from "react";
import Persona from "./persona";
import Website from "./website";
import Research from "./research";
import Fade from "react-reveal/Fade";
import data from "../Data";

class Work extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1 className="heading">
					<Fade bottom cascade>
						Work.
					</Fade>
				</h1>
				<div className="persona-content">
					<div className="personas">
						{data.personas.map(personas => (
							<Persona
								key={personas.id}
								words={personas.words}
								title={personas.title}
								service={personas.service}
								imageSrc={personas.imageSrc}
								url={personas.url}
							></Persona>
						))}
					</div>
				</div>
				<div className="website-content">
					<div className="websites">
						{data.websites.map(websites => (
							<Website
								key={websites.id}
								words={websites.words}
								title={websites.title}
								service={websites.service}
								imageSrc={websites.imageSrc}
								url={websites.url}
							></Website>
						))}
					</div>
				</div>
				<div className="research-content">
					<div className="research">
						{data.research.map(research => (
							<Research
								key={research.id}
								words={research.words}
								title={research.title}
								service={research.service}
								imageSrc={research.imageSrc}
								url={research.url}
							></Research>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Work;
