import { BrowserRouter as Router } from "react-router-dom";
import {useState} from 'react'
import SearchInput from "./components/SearchInput";
import Pages from "./page/AllPages";
import { Movies } from "../typings";
import SearchedMovie from "./components/SearchedMovie";
function App() {
	const [result, setResult] = useState<Movies[] | undefined>([]);
	return (
		<Router>
			<div className="App">
				<SearchInput setResult={setResult}/>
				{result!.length===0 && <Pages/>}
				{result!.length>1  && <SearchedMovie movies={result}/>}
				
			</div>
		</Router>
	)
}

export default App;
