import Image from "next/image";
import Link from "next/link";

export function RestaurantCard({ restaurant }: { restaurant: any }) {
	console.log("🚀 ~ RestaurantCard ~ restaurant:", restaurant);

	return (
		<div className="rounded-lg shadow-md p-0 overflow-hidden transition-all hover:shadow-lg w-auto">
			<Image
				src={"/RWP.jpg"}
				alt={restaurant.name}
				height={200}
				width={200}
				className="object-cover"
				// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>

			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
				<p className="text-gray-600 text-sm mb-2 line-clamp-2">
					{restaurant.description}
				</p>
				<p className="text-gray-500 text-sm mb-4">{restaurant.address}</p>
				<Link
					href={`/restaurants/${restaurant.id}`}
					className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
