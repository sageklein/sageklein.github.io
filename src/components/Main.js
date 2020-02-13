import React, { Component } from "react";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import data from "../Data";

class Main extends Component {
	state = {};
	render() {
		return (
			<div className="main-wraper">
				<Header />
				<div className="about-content">
					<div className="about">
						<h1>
							<Fade bottom cascade>
								About.
							</Fade>
						</h1>

						<Fade bottom>
							<div className="img">
								<p>{data.abouttext}</p>
								<img
									src={require("../images/me.jpg")}
									className="picture"
									alt="Sage Klein"
								/>
							</div>
						</Fade>
					</div>
				</div>
				<div className="work">
					<Fade bottom cascade>
						<div className="work-heading">Work.</div>
					</Fade>
					<Fade bottom>
						<p className="intro-content">{data.intro}</p>
						<p className="intro-content">{data.intro2}</p>
						<p className="intro-content">{data.intro3}</p>
						<p className="intro-content"></p>
					</Fade>
					<Fade bottom>
						<div className="allProjects">
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href="#Bangazon.png"
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/BangazonDashboard.png")}
											className="img_link"
											alt="Bangazon"
										/>
									</a>
									<a
										className="header-title"
										href="https://www.figma.com/proto/Qbt3MbONrBQ9faxAKmXRHv/BANGAZON?node-id=28%3A760&viewport=355%2C471%2C0.09000614285469055&scaling=min-zoom"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className=" header-title">
											View Prototype
										</button>
									</a>
									<a
										className="header-title, resume"
										href="https://github.com/nss-day-cohort-35/bangazon/blob/master/README.md"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className="Case Study">
											View Case Study
										</button>
									</a>
								</div>
							</div>
						</div>
					</Fade>
					<Fade bottom>
						<div className="allProjects">
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href="#Casa.png"
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/Casa.png")}
											className="img_link"
											alt="CasaAszafran"
										/>
									</a>
									<a
										className="header-title"
										href="https://www.figma.com/proto/TJp9ggRNziv6yTAAmMjX6p/Casa-Asafran?node-id=22%3A0&viewport=379%2C385%2C0.12408243864774704&scaling=scale-down"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className=" header-title">
											View Prototype
										</button>
									</a>
									<a
										className="header-title, resume"
										href="https://docs.google.com/presentation/d/1xbWSW-3UcPYLpLtxNnBuErsDtr0GCbcVcapARPrF8ow/edit?usp=sharing"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className="Case Study">
											View Case Study
										</button>
									</a>
								</div>
							</div>
						</div>
					</Fade>
					<Fade bottom>
						<div className="allProjects">
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href="#Hitpan.png"
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/Hitpan.png")}
											className="img_link"
											alt="Hitpan"
										/>
									</a>
									<a
										className="header-title"
										href="https://www.figma.com/proto/zktBnojjGWWSLoUR8YLjCv/Login?node-id=86183%3A1&viewport=770%2C306%2C0.20323914289474487&scaling=min-zoom"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className=" header-title">
											View Prototype
										</button>
									</a>
									<a
										className="header-title, resume"
										href="https://github.com/sageklein/Hit-Pan/blob/master/README.md"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className="Case Study">
											View Case Study
										</button>
									</a>
								</div>
							</div>
						</div>
					</Fade>{" "}
					<Fade bottom>
						<div className="allProjects">
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href="#Hitpan.png"
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/Sidekick.png")}
											className="img_link"
											alt="Sidekick"
										/>
									</a>
									<a
										className="header-title"
										href="https://www.figma.com/proto/wGq1mdLPiyRfw8lMtAtYOh/Sidekick-Persona?node-id=45%3A1&scaling=min-zoom"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className=" header-title">
											View Prototype
										</button>
									</a>
									<a
										className="header-title, resume"
										href="https://github.com/sageklein/Sidekick2.0/blob/master/README.md"
										rel="noopener noreferrer"
										target="_blank"
									>
										<button className="Case Study">
											View Case Study
										</button>
									</a>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		);
	}
}

export default Main;


