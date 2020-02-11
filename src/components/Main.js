import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import data from "../Data";

class Main extends Component {
	state = {};
	render() {
		return (
			<div className="main-wraper">
				<Header />
				<div className="about-content">
					<div className="img">
						<img
							src={require("../images/me.jpg")}
							className="picture"
							alt="Sage Klein"
						/>
					</div>
					<h1>
						<Fade bottom cascade>
							About.
						</Fade>
					</h1>

					<Fade bottom>
						<p>{data.abouttext}</p>
					</Fade>
				</div>
				<Fade bottom cascade>
					<div className="work-heading">Work.</div>
				</Fade>
				<Fade bottom>
					<p className="intro-content">{data.intro}</p>
				</Fade>
				<Fade bottom>
					<div className="allProjects">
						<div className="img_block">
							<Link to="/bangazon">
								<img
									src={require("../images/Bangazon.png")}
									className="img_link"
									alt="Bangazon"
								/>
							</Link>
							<h1>Consumer Platform Web-Application</h1>
						</div>
						<div className="img_block">
							<Link to="/casaasa">
								<img
									src={require("../images/Casa.png")}
									className="img_link"
									alt="Casa Asafran"
								/>
							</Link>
							<h1>Mentor Mentee Matching Application</h1>
						</div>
						<div className="img_block">
							<Link to="/hitpan">
								<img
									src={require("../images/Hitpan.png")}
									className="img_link"
									alt="Hit Pan"
								/>
							</Link>

							<h1>Make-Up Organizing Application</h1>
						</div>
						<div className="img_block">
							<Link to="/sidekick">
								<img
									src={require("../images/Sidekick.png")}
									className="img_link"
									alt="Sidekick"
								/>
							</Link>
							<h1>Behavioral Modification Web-Application</h1>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}

export default Main;
