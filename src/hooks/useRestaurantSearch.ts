import { useState, useMemo } from "react";
import type { Restaurant } from "@/types/db";
import Fuse from "fuse.js";
import type { FuseResult } from "fuse.js";

export type SortOption = "name-asc" | "name-desc";

interface UseRestaurantSearchProps {
	restaurants: Restaurant[];
	initialSortOption?: SortOption;
}

interface UseRestaurantSearchResult {
	filteredRestaurants: Restaurant[];
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	sortOption: SortOption;
	setSortOption: (option: SortOption) => void;
	isSearching: boolean;
}

export const useRestaurantSearch = ({
	restaurants,
	initialSortOption = "name-asc",
}: UseRestaurantSearchProps): UseRestaurantSearchResult => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOption, setSortOption] = useState<SortOption>(initialSortOption);

	// Initialize Fuse.js for fuzzy search
	const fuse = useMemo(() => {
		return new Fuse(restaurants, {
			keys: ["name", "description", "address"],
			threshold: 0.4,
			includeScore: true,
		});
	}, [restaurants]);

	// Apply search and sorting
	const filteredRestaurants = useMemo(() => {
		let results = [...restaurants];

		// Apply fuzzy search if search term exists
		if (searchTerm.trim()) {
			const searchResults = fuse.search(searchTerm);
			results = searchResults.map(
				(result: FuseResult<Restaurant>) => result.item,
			);
		}

		// Apply sorting
		return results.sort((a, b) => {
			if (sortOption === "name-asc") {
				return a.name.localeCompare(b.name);
			}
			return b.name.localeCompare(a.name); // name-desc
		});
	}, [restaurants, searchTerm, sortOption, fuse]);

	// Determine if search is active
	const isSearching = searchTerm.trim().length > 0;

	return {
		filteredRestaurants,
		searchTerm,
		setSearchTerm,
		sortOption,
		setSortOption,
		isSearching,
	};
};
