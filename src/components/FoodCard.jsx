/* eslint-disable react/prop-types */
import React from 'react'

function FoodCard({ item }) {
	const parkBadge = (park) => {
		switch (park) {
		case 'Magic Kingdom':
			return <span className="badge badge-outline">MK</span>

		case 'EPCOT':
			return <span className="badge badge-primary badge-outline">EP</span>

		case 'Hollywood Studios':
			return <span className="badge badge-secondary badge-outline">HS</span>

		case 'Animal Kingdom':
			return <span className="badge badge-accent badge-outline">AK</span>

		case 'Disney Springs':
			return <span className="badge badge-success badge-outline">DS</span>

		default:
			return (
				<span className="badge badge-warning badge-outline">{park}</span>
			)
		}
	}

	return (
		<div className="card mx-2 my-6 lg:m-0 bg-white dark:bg-[#545052] lg:card-side shadow-xl">
			<figure>
				{item.imgUrl && (
					<img src={item.imgUrl} alt={item.foodItem} className="lg:ml-2" />
				)}
			</figure>
			<div className="card-body">
				<h2 className="card-title dark:text-white">{item.foodItem}</h2>
				<h3 className="text-md -mt-3 dark:text-gray-200">{item.name}</h3>
				<p className="text-sm dark:text-zinc-400">{item.notes}</p>
				<div className="card-actions justify-end">
					{item.park && parkBadge(item.park)}
				</div>
			</div>
		</div>
	)
}

export default FoodCard
