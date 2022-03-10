import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Content from "./components/hero/content";

function App() {
	return (
		<Fragment>
			<Navbar />
			<Content />
		</Fragment>
	);
}

export default App;
