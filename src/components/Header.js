import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../Data";

class Header extends Component {
	state = {};

	render() {
		return (
			<div>
				<h1 className="heading-background"> </h1>
				<header>
					<h1>
						<Fade bottom cascade>
							{data.name}
						</Fade>
					</h1>
				</header>
				<Fade bottom>
					<p className="header-title">
						{data.headerTagline[0]}
						<br></br>
						{data.headerTagline[1]}
						<br></br>
						{data.headerTagline[2]}
						<br></br>
						<button>
							<a
								href={`mailto:${data.contactEmail}`}
								rel="noopener noreferrer"
								target="_blank"
							>
								Contact
							</a>
						</button>
						<button className="resume">
							<a
								href={`${data.resume}`}
								rel="noopener noreferrer"
								target="_blank"
							>
								Download Resume
							</a>
						</button>
					</p>
				</Fade>
			</div>
		);
	}
}

export default Header;
