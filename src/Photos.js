import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos) {
		return (
			<section className="Photos">
				<div className="photo-gallery">
					{props.photos.map(function (photo, index) {
						return (
							<div
								className="photo-item"
								key={index}
							>
								<a
									href={photo.src.original}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={photo.src.landscape}
										alt="image related to word you searched"
										className="img-fluid"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}
