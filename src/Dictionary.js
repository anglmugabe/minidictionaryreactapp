import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(" ");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function search(event) {
		event.preventDefault();

		let apiKey = "cadc0335bc0tc128c364a2674f06oeee1";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					onChange={handleKeywordChange}
					placeholder="Let's find your word..."
				/>
			</form>
			<Results />
		</div>
	);
}
