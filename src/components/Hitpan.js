import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../../src/css/project.css";

class hitpan extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className="bang">
					<div className="pic_under">
						<h1 className="title">
							Bangazon is an online Buy and Sell Platform
						</h1>
					</div>
					<h2 className="discription">
						Bangazon is a group project I participated in while at
						Nashville Software School. We were tasked with creating
						a company intranet website for an Amazon-esque
						marketplace. We consulted with company stakeholders to
						determine the functionality and requirements of the
						platform. The color Palette was put together based on
						design guideliness dictated by the Hubspot Canvas Design
						System. For this project I Designed the Personas
						featured below. I helped design a journey map to help
						understand the individual's relationships with the
						website and products it contains. I also utilized Lo-Fi
						Mockups for tangible representation of our design
						concept and use flow for feedback on improving our
						design. I interviewed stakeholders during the Lo-Fi
						Mockup navigation process and took notes on feedback and
						personal observations. Finally I helped make a Hi-Fi
						Mockup using Figma.
					</h2>
					<div className="">
						<img
							src={require("../images/BangazonDashboard.png")}
							className="img_link"
							alt="Bangazon"
						/>
					</div>
				</div>
			</Fade>
		);
	}
}

export default hitpan;
