// this file handles the video track of the user

import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "../../RoomPage.module.css";

const VideoTrack = ({ track }) => {
	const trackRef = useRef();

	useEffect(() => {
		const child = track.attach();
		trackRef.current.classList.add(track.kind);
		trackRef.current.appendChild(child);

		const videosPortal = document.getElementById("videos_portal");

		if (!videosPortal.classList.contains("videos_portal_styles")) {
			videosPortal.classList.add("videos_portal_styles");
		}
	}, []);

	const content = (
		<div className={classes.video_track_container}>
			<div ref={trackRef}></div>
		</div>
	);

	return ReactDOM.createPortal(
		content,
		document.getElementById("videos_portal")
	);
};

export default VideoTrack;
