// hooks/useGeolocation.js
import { useState, useEffect } from "react";

export const useGeolocation = () => {
	const [coords, setCoords] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!navigator.geolocation) {
			setError("Geolocation not supported");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => setCoords(position.coords),
			(err) => setError(err.message),
		);
	}, []);

	return { coords, error };
};
