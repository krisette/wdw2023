/* eslint-disable react/prop-types */
import React from 'react'

function FoodCard({ item }) {
	const parkBadge = (park) => {
		switch (park) {
		case 'Magic Kingdom':
			return <span className="border-[1px] border-pink-700 dark:border-pink-200 border-solid text-pink-700 dark:text-pink-200 text-xs rounded-full py-0.5 px-1.5">MK</span>

		case 'Hollywood Studios':
			return <span className="border-[1px] border-purple-700 dark:border-purple-200 border-solid text-purple-700 dark:text-purple-200 text-xs rounded-full py-0.5 px-2">HS</span>

		case 'Animal Kingdom':
			return <span className="border-[1px] border-green-700 dark:border-green-200 border-solid text-green-700 dark:text-green-200 text-xs rounded-full py-0.5 px-1.5">AK</span>

		case 'Disney Springs':
			return <span className="border-[1px] border-amber-700 dark:border-amber-200 border-solid text-amber-700 dark:text-amber-200 text-xs rounded-full py-0.5 px-1.5">DS</span>

		default:
			return (
				<span className="border-[1px] border-neutral-700 dark:border-neutral-200 border-solid text-neutral-700 dark:text-neutral-200 text-xs rounded-full py-0.5 px-1.5">{park}</span>
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
				<h2 className="card-title dark:text-white">{item.item}</h2>
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
