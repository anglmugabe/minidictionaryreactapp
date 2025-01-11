import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
	return (
		<div className="Phonetic">
			<a
				href={props.phonetic.audio}
				target="_blank"
				rel="noreffer"
			>
				Listen
			</a>
			<span className="text">{props.phonetic.text} </span>
		</div>
	);
}
