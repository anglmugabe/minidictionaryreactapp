import "./App.css";
import Dictionary from ".//Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1> Your Pocket Dictionary </h1>
				<header className="App-header">
					<Dictionary defaultKeyword="sunset" />
				</header>{" "}
				<footer className="App-footer">
					This website was coded by <a href=""> Angela Mugabe </a>, and is{" "}
					<a href=""> open-sourced </a>, and hosted on <a href=""> Netlify </a>
				</footer>
			</div>
		</div>
	);
}
export default App;
