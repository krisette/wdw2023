/* eslint-disable react/prop-types */
import React from 'react'

function EPCOTFoodCard({ item }) {
	const countryText = (country) => {
		return (<span className="text-2xl">{country}</span>)
	}

	const countryBadge = (country) => {
		switch (country) {
		case 'Mexico':
			return countryText('🇲🇽')

		case 'Norway':
			return countryText('🇳🇴')

		case 'China':
			return countryText('🇨🇳')

		case 'Germany':
			return countryText('🇩🇪')

		case 'Italy':
			return countryText('🇮🇹')

		case 'Canada':
			return countryText('🇨🇦')

		case 'UK':
			return countryText('🇬🇧')

		case 'France':
			return countryText('🇫🇷')

		case 'Morocco':
			return countryText('🇲🇦')

		case 'Japan':
			return countryText('🇯🇵')

		case 'USA':
			return countryText('🇺🇸')

		default:
			return <span className="border-[1px] border-neutral-700 dark:border-neutral-200 border-solid text-neutral-700 dark:text-neutral-200 text-xs rounded-full py-0.5 px-1.5 mt-1">{country}</span>
		}
	}

	const typeBadge = (type) => {
		switch (type) {
		case 'Food':
			return <span className="border-[1px] border-violet-700 dark:border-violet-200 border-solid text-violet-700 dark:text-violet-200 text-xs rounded-full py-0.5 px-1.5 mt-1">Food</span>

		case 'Drink':
			return <span className="border-[1px] border-rose-700 dark:border-rose-200 border-solid text-rose-700 dark:text-rose-200 text-xs rounded-full py-0.5 px-1.5 mt-1">Drink</span>
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
					{item.festival && <span className="border-[1px] border-teal-700 dark:border-teal-200 border-solid text-teal-700 dark:text-teal-200 text-xs rounded-full py-0.5 px-1.5 mt-1">F&G</span>}
					{item.type && typeBadge(item.type)}
					{item.country && countryBadge(item.country)}
				</div>
			</div>
		</div>
	)
}

export default EPCOTFoodCard