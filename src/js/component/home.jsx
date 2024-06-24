import React from "react";
import Navbar from "./Navbar";
import Jumpbotron from "./Jumpbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumpbotron />
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
