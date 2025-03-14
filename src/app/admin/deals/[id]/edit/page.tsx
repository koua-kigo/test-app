import { notFound } from "next/navigation";
import { getDeals } from "@/db/models/restaurants/restaurants";
import { EditDealForm } from "@/components/admin/deals";

export const metadata = {
	title: "Admin - Edit Deal",
	description: "Edit an existing restaurant deal or offer",
};

export default async function EditDealPage({
	params,
}: { params: { id: string } }) {
	// Fetch the deal data
	const deals = await getDeals();
	const deal = deals.find((deal) => deal.id === BigInt(params.id));

	// If the deal doesn't exist, show 404
	if (!deal) {
		notFound();
	}

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Edit Deal</h2>
				<p className="text-muted-foreground">
					Update details for this restaurant deal
				</p>
			</div>

			<div className="bg-white rounded-lg shadow-sm p-6">
				<EditDealForm id={params.id} deal={deal} />
			</div>
		</div>
	);
}
