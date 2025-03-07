import { getUsers } from "@/db/models/users/users";
import Link from "next/link";

export default async function AdminUsersPage() {
	const users = await getUsers();

	console.log("🚀 ~ AdminUsersPage ~ users:", users);

	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">User Management</h1>
				<Link
					href="/admin"
					className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
				>
					Back to Dashboard
				</Link>
			</div>

			<div className="bg-white rounded-lg shadow-sm overflow-hidden">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Email
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Role
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{users.map((user) => (
							<tr key={user.id}>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{user.name}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-500">{user.email}</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.role === "Admin"
												? "bg-purple-100 text-purple-800"
												: "bg-green-100 text-green-800"
										}`}
									>
										{/* {user.role} */}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									<button className="text-indigo-600 hover:text-indigo-900 mr-4">
										Edit
									</button>
									<button className="text-red-600 hover:text-red-900">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
