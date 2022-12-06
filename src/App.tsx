import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./page/AllPages";
import { SearchContextComponent } from "./context/searchContext";

function App() {
	return (
		<Router>
			<SearchContextComponent>
				<div className="App">
					<Pages />
				</div>
			</SearchContextComponent>
		</Router>
	);
}

export default App;
