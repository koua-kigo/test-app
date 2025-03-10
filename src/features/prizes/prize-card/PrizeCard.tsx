import Image from 'next/image';

export function PrizeCard({ prize }: { prize: any }) {
	return (
		<div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
			<div className="relative h-32 w-full mb-3">
				<Image
					src={
						prize.imageUrl || "https://via.placeholder.com/400x250?text=Prize"
					}
					alt={prize.name}
					fill
					className="object-cover rounded"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<h4 className="text-lg font-semibold mb-1">{prize.name}</h4>
			<p className="text-gray-600 text-sm mb-2 line-clamp-2">
				{prize.description}
			</p>
			<div className="flex justify-between items-center">
				<span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
					{prize.requiredPunches} punches
				</span>
				<span
					className={`text-sm font-medium px-2 py-1 rounded ${
						prize.available
							? "bg-green-100 text-green-800"
							: "bg-red-100 text-red-800"
					}`}
				>
					{prize.available ? "Available" : "Unavailable"}
				</span>
			</div>
		</div>
	);
}
