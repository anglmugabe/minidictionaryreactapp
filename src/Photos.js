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
									href={photo.src.orginal}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={photo.src.landscape}
										className="img-fluid"
										alt="image related to word you searched"
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
