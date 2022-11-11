import { BrowserRouter as Router } from "react-router-dom";
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
