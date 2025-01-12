import "./App.css";
import Dictionary from ".//Dictionary";

export default function App() {
	return (
		<div className="App">
			<div>
				<h1> Your Pocket Dictionary </h1>
			</div>
			<div className="App-header container">
				<main>
					<Dictionary defaultKeyword="sunset" />
				</main>{" "}
				<footer className="App-footer">
					<small>
						This website was coded by <a href=""> Angela Mugabe </a>, and is{" "}
						<a href=""> open-sourced </a>, and hosted on{" "}
						<a href=""> Netlify </a>
					</small>
				</footer>
			</div>
		</div>
	);
}
