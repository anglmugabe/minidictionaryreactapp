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
						This website was coded by{" "}
						<a href="https://www.shecodes.io/graduates/105285-angela-mugabe">
							{" "}
							Angela Mugabe{" "}
						</a>
						, and is{" "}
						<a href="https://github.com/anglmugabe/minidictionaryreactapp">
							{" "}
							open-sourced{" "}
						</a>
						, and hosted on{" "}
						<a href="https://minidictionaryreact.netlify.app"> Netlify </a>
					</small>
				</footer>
			</div>
		</div>
	);
}
