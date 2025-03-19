"use client";
import { useGeolocation } from "@/hooks/use-geolocation";
import { createContext, useMemo } from "react";

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

	// Use useMemo to prevent unnecessary re-renders of context consumers
	const value = useMemo(() => ({ coords, error }), [coords, error]);

	return (
		<LocationContext.Provider value={value}>
			{children}
		</LocationContext.Provider>
	);
};
