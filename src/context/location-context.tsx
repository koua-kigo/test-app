"use client";
import { useGeolocation } from "@/hooks/use-geolocation";
import { createContext } from "react";

type LocationContextType = {
	coords: GeolocationCoordinates | null;
	error: string | null;
};

export const LocationContext = createContext<LocationContextType>({
	coords: null,
	error: null,
});

export const LocationProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const { coords, error } = useGeolocation();

	console.log("🚀 ~ coords:", coords);

	return (
		<LocationContext.Provider value={{ coords, error }}>
			{children}
		</LocationContext.Provider>
	);
};
