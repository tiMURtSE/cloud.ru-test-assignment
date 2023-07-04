import "@styles/index.scss";
import Main from "@pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "@pages/Create/Create";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/create" element={<Create />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
