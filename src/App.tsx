import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./page/AllPages";
import { SearchContext } from "./context/searchContext";

function App() {
	return (
		<SearchContext>
			<Router>
				<div className="App">
					<Pages />
				</div>
			</Router>
		</SearchContext>
	);
}

export default App;
