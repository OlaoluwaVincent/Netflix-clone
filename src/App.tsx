import { BrowserRouter as Router } from "react-router-dom";
import Pages from './pages/Pages';
function App() {
	return (
		<Router>
			<div className="App">
        <Pages/>
				<p style={{ textAlign: "center" }}>Date here</p>
			</div>
		</Router>
	);
}

export default App;
