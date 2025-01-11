import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [results, setResults] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [photos, setPhotos] = useState(null);

	function search() {
		const apiKey = "cadc0335bc0tc128c364a2674f06oeee";

		let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

		let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
		let headers = { Authorization: `Bearer ${apiKey}` };
		axios.get(imagesApiUrl, { headers: headers }).then(handleImagesResponse);
	}
	function handleDictionaryResponse(response) {
		setResults(response.data);
	}

	function handleImagesResponse(response) {
		setPhotos(response.data.photos);
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
					<h1> Meaning & Definitions of English Words</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							autoFocus={true}
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
