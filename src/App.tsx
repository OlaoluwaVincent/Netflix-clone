import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./page/AllPages";
import { SearchContextComponent } from "./context/searchContext";

function App() {
	return (
		<SearchContextComponent>
			<Router>
				<div className="App">
					<Pages />
				</div>
			</Router>
		</SearchContextComponent>
	);
}

export default App;
