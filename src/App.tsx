import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./components/Modal";
import Pages from "./page/AllPages";
function App() {
	return (
		<Router>
			<div className="App">
				<Pages />
			</div>
		</Router>
	);
}

export default App;
