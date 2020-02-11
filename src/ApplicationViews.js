import { Route } from "react-router-dom";
import React, { Component } from "react";
import Sidekick from "./components/Sidekick";
import Bangazon from "./components/Bangazon";
import Casaasa from "./components/Casaasa";
import Hitpan from "./components/Hitpan";
import Home from "./components/Home";

export default class ApplicationViews extends Component {
	render() {
		console.log("from app js", this.props);
		return (
			<>
				<Route
					exact
					path="/"
					render={props => {
						return <Home {...props} />;
					}}
				/>
				<Route
					exact
					path="/casaasa"
					render={props => {
						return (
							<Casaasa
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/bangazon"
					render={props => {
						return <Bangazon {...props} />;
					}}
				/>
				<Route
					exact
					path="/sidekick"
					render={props => {
						return <Sidekick {...props} />;
					}}
				/>
				<Route
					exact
					path="/hitpan"
					render={props => {
						return <Hitpan {...props} />;
					}}
				/>
			</>
		);
	}
}
