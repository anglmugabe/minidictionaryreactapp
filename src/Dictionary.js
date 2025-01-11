import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(" ");
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handleImagesResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		const apiKey = "cadc0335bc0tc128c364a2674f06oeee1";

		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);

		let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
		axios.get(imagesApiUrl, { headers: headers }).then(handleImagesResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<form onSubmit={search}>
						<input
							type="search"
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
							placeholder="Let's find your word..."
						/>
					</form>
					<div className="hint">
						suggested words: summer, sugar, book, love...
					</div>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
