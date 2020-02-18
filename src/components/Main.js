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
				<div className="work, work-content">
					<h1>
						<Fade bottom cascade>
							Work.
						</Fade>
					</h1>
					<Fade bottom>
						<p className="intro-content">{data.intro}</p>
						<p className="intro-content">{data.intro2}</p>
						<p className="intro-content">{data.intro3}</p>
					</Fade>

					<div className="allProjects">
						<Fade bottom>
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/BangazonDashboard.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/BangazonDashboard.png")}
											className="img_link"
											alt="Bangazon"
										/>
									</a>
									<h2 className="date">Bangazon</h2>
									<h2 className="blurb">
										Delivered user experience design plan to
										stakeholders for an Etsy-like intranet
										platform incorporating information
										architecture, lo-fi and hi-fi mockups,
										user testing, competitor analysis,
										journey mapping, content mapping, and
										the HubSpot Canvas design system.
									</h2>
									<div className="buttonDiv">
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
											className="header-title"
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
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/Casaasa.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/Casaasa.png")}
											className="img_link"
											alt="CasaAszafran"
										/>
									</a>
									<h2 className="date">Alcanza</h2>
									<h2 className="blurb">
										Alcanza is a design solution for client
										Tennessee Immigrant & Refugee Rights
										Coalition (TIRRC) of a citizenship
										mentoring app, showcasing user research,
										contextual inquiry, lo- and hi-fi
										mockups, usability testing, user flow
										charts, and functional decomposition of
										the user experience of all user types:
										mentors, mentees, and admins. Resulted
										in high client satisfaction by
										clarifying user needs and program goals.
									</h2>
									<div className="buttonDiv">
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
											className="header-title"
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
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/Hitpan.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/Hitpan.png")}
											className="img_link"
											alt="Hitpan"
										/>
									</a>
									<h2 className="date">Hit Pan</h2>
									<h2 className="blurb">
										HitPan is an application designed to
										help people organize their make up.
										Hitpan is an enviromentally conscious
										application. This application was
										inspired by a statistic I read about
										consumer waste rising because of
										cosmetic waste. I built this appliction
										after 3 months at Nashville Software
										School, a coding bootcamp.
									</h2>
									<div className="buttonDiv">
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
											className="header-title"
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
							{/* </div> */}
						</Fade>{" "}
						<Fade bottom>
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/Sidekick.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/Sidekick.png")}
											className="img_link"
											alt="Sidekick"
										/>
									</a>
									<h2 className="date">Sidekick</h2>
									<h2 className="blurb">
										Sidekick is a behavioral modification
										Website Application for Teachers and
										Students. Sidekick intends to alter
										negative behavioral patterns through the
										use of positive reinforcement.
									</h2>
									<div className="buttonDiv">
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
											className="header-title"
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
						<Fade bottom>
							<div className="img_block">
								<div className="header-title">
									<a
										className="header-title"
										href={require("../images/website35.png")}
										rel="noopener noreferrer"
										target="_blank"
									>
										<img
											src={require("../images/website35.png")}
											className="img_link"
											alt="Cohort Website"
										/>
									</a>
									<h2 className="date">Cohort 35 Website</h2>
									<h2 className="blurb">
										Served as researcher, Lo-Fi and Hi-Fi
										mockup master on React-based class
										website highlighting students and their
										work. Contributed to UI/UX design
										planning, information architecture. I
										also helped code the site in React
										Javascript.
									</h2>
									<div className="buttonDiv">
										<a
											className="header-title"
											href="https://www.figma.com/file/X5AoHSp9DeCSdtqtISJwCR/Class-Website-Official-Official?node-id=0%3A1"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className=" header-title">
												View Prototype
											</button>
										</a>
										<a
											className="header-title"
											href="https://nss-day-cohort-35.github.io/website/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<button className="Case Study">
												View Class Site
											</button>
										</a>
									</div>
								</div>
							</div>
						</Fade>

					</div>
				</div>
			</div>
		);
	}
}

export default Main;
