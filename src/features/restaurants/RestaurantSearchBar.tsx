"use client";

import type { ChangeEvent } from "react";
import { Search, ArrowUpDown, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { SortOption } from "@/hooks/useRestaurantSearch";

export interface RestaurantSearchBarProps {
	searchTerm: string;
	onSearchChange: (term: string) => void;
	sortOption: SortOption;
	onSortChange: (option: SortOption) => void;
	hasDeals: boolean;
	onDealsChange: (hasDeals: boolean) => void;
	className?: string;
}

export function RestaurantSearchBar({
	searchTerm,
	onSearchChange,
	sortOption,
	onSortChange,
	hasDeals,
	onDealsChange,
	className = "",
}: RestaurantSearchBarProps) {
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		onSearchChange(e.target.value);
	};

	const handleSortChange = (value: string) => {
		onSortChange(value as SortOption);
	};

	const handleDealsChange = (checked: boolean) => {
		onDealsChange(checked);
	};

	return (
		<div className={`flex flex-col md:flex-row gap-3 w-full mb-6 ${className}`}>
			<div className="relative flex-grow">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
				<Input
					type="text"
					placeholder="Search restaurants..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="pl-8 w-full"
				/>
			</div>

			<div className="flex items-center gap-4">
				<div className="flex items-center space-x-2">
					<Tag className="h-4 w-4 text-gray-500" />
					<Label htmlFor="has-deals" className="text-sm">
						Has Deals
					</Label>
					<Switch
						id="has-deals"
						checked={hasDeals}
						onCheckedChange={handleDealsChange}
					/>
				</div>

				<div className="flex items-center gap-2">
					<ArrowUpDown className="h-4 w-4 text-gray-500" />
					<Select value={sortOption} onValueChange={handleSortChange}>
						<SelectTrigger className="w-[160px]">
							<SelectValue placeholder="Sort by" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="name-asc">Name (A-Z)</SelectItem>
							<SelectItem value="name-desc">Name (Z-A)</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
}
