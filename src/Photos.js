import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos) {
		return (
			<section className="Photos">
				<div className="photo-gallery">
					{props.photos.map(function (photo, index) {
						console.log(photo);
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
										alt="picturelated to word searched"
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
