import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./page/AllPages";
import { SearchContextComponent } from "./context/searchContext";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<SearchContextComponent>
				<Header/>
				<div className="App">
					<Pages />
				</div>
			</SearchContextComponent>
		</Router>
	);
}

export default App;
