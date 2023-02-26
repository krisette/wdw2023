import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import EPCOTFoodCard from './EPCOTFoodCard'
import MickeyMouseLoader from './MickeyMouseLoader'
import useSWR from 'swr'

const filters = [
	{
		id: 'country',
		name: 'Country',
		options: [
			{ value: '1', label: 'Mexico' },
			{ value: '2', label: 'Norway' },
			{ value: '3', label: 'China' },
			{ value: '4', label: 'Germany' },
			{ value: '5', label: 'Italy' },
			{ value: '6', label: 'Canada' },
			{ value: '7', label: 'USA' },
			{ value: '8', label: 'Morocco' },
			{ value: '9', label: 'Japan' },
			{ value: '10', label: 'France' },
			{ value: '11', label: 'United Kingdom' },
			{ value: '12', label: 'Other' },
		],
	},
	{
		id: 'type',
		name: 'Type',
		options: [
			{ value: 'Food', label: 'Food' },
			{ value: 'Drink', label: 'Drink' },
		],
	},
	{
		id: 'festival',
		name: 'Festival',
		options: [
			{ value: 'fg', label: 'Flower & Garden Festival'}
		],
	},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const fetcher = (url) => fetch(url).then((r) => r.json())

const useFood = () => {
	const { data, error, isLoading } = useSWR(
		'https://api.sheety.co/cc270e0a474c6d0254ff0f218294996c/wdw2023/epcotFoodDrink',
		fetcher
	)

	return {
		food: data,
		isLoading,
		isError: error,
	}
}

export default function FoodsToTry() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
	const [defaultFood, setDefaultFood] = useState([])
	const [filtered, setFiltered] = useState(false)
	const [filteredFood, setFilteredFood] = useState([])
	const { food, isLoading, isError } = useFood()

	useEffect(() => {
		if (food) {
			setDefaultFood(food.epcotFoodDrink)
		}
	}, [food])

	useEffect(() => {
		if (filteredFood.length === 0) {
			setFiltered(false)
		}
	}, [filteredFood])

	const handleEpcotFilter = (category, e) => {
		console.log('checkbox clicked', category)
		if (category === 'country') {
			const countryId = parseInt(e.target.value)
			if (e.target.checked) {
				setFiltered(true)
				setFilteredFood(
					[...filteredFood, ...defaultFood.filter((food) => food.cid === countryId)]
				)
			} else {
				setFilteredFood(
					filteredFood.filter((food) => food.cid !== countryId)
				)
				console.log(filteredFood)
			}
		} else if (category === 'type') {
			const type = e.target.value
			if (e.target.checked) {
				setFiltered(true)
				setFilteredFood(
					[...filteredFood, ...defaultFood.filter((food) => food.type === type)]
				)
			} else {
				setFilteredFood(
					filteredFood.filter((food) => food.type !== type)
				)
			}
		} else if (category === 'festival') {
			if (e.target.checked) {
				setFiltered(true)
				setFilteredFood(
					[...filteredFood, ...defaultFood.filter((food) => food.festival)]
				)
			} else {
				setFilteredFood(
					filteredFood.filter((food) => !food.festival)
				)
			}
		}
	}

	const displayFood = () => {
		if (isLoading) {
			return (<MickeyMouseLoader />)
		} else if (isError) {
			return(<div className="text-center text-2xl text-red-700">Error loading data</div>)
		} else if (filtered) {
			return filteredFood.map((item) => (
				<EPCOTFoodCard
					key={item.id}
					item={item}
				/>
			))} else {
			return food.epcotFoodDrink.map((item) => (
				<EPCOTFoodCard
					key={item.id}
					item={item}
				/>
			))
		}
	}

	return (
		<div className="bg-zinc-100 dark:bg-zinc-800 min-h-screen">
			<div>
				{/* Mobile filter dialog */}
				<Transition.Root show={mobileFiltersOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 lg:hidden"
						onClose={setMobileFiltersOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-zinc-900 py-4 pb-6 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">
                      Filters
										</h2>
										<button
											type="button"
											className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Filters */}
									<form className="mt-4">
										{filters.map((section) => (
											<Disclosure
												as="div"
												key={section.name}
												className="border-t border-gray-200 pt-4 pb-4"
											>
												{({ open }) => (
													<fieldset>
														<legend className="w-full px-2">
															<Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
																<span className="text-sm font-medium text-gray-900 dark:text-gray-300">
																	{section.name}
																</span>
																<span className="ml-6 flex h-7 items-center">
																	<ChevronDownIcon
																		className={classNames(
																			open ? '-rotate-180' : 'rotate-0',
																			'h-5 w-5 transform'
																		)}
																		aria-hidden="true"
																	/>
																</span>
															</Disclosure.Button>
														</legend>
														<Disclosure.Panel className="px-4 pt-4 pb-2">
															<div className="space-y-6">
																{section.options.map((option, optionIdx) => (
																	<div
																		key={option.value}
																		className="flex items-center"
																	>
																		<input
																			id={`${section.id}-${optionIdx}-mobile`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type="checkbox"
																			className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																			onClick={(e) => handleEpcotFilter(section.id, e)}
																		/>
																		<label
																			htmlFor={`${section.id}-${optionIdx}-mobile`}
																			className="ml-3 text-sm text-gray-500 dark:text-gray-300"
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</Disclosure.Panel>
													</fieldset>
												)}
											</Disclosure>
										))}
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				<main className="mx-auto max-w-2xl px-6 lg:px-4 lg:max-w-7xl">
					<div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
						<aside>
							<h2 className="sr-only">Filters</h2>

							<button
								type="button"
								className="inline-flex items-center lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Filters
								</span>
								<PlusIcon
									className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
							</button>

							<div className="hidden lg:block">
								<form className="space-y-10 divide-y divide-gray-200">
									{filters.map((section, sectionIdx) => (
										<div
											key={section.name}
											className={sectionIdx === 0 ? null : 'pt-10'}
										>
											<fieldset>
												<legend className="block text-sm font-medium text-gray-900 dark:text-gray-300">
													{section.name}
												</legend>
												<div className="space-y-3 pt-6">
													{section.options.map((option, optionIdx) => (
														<div
															key={option.value}
															className="flex items-center"
														>
															<input
																id={`${section.id}-${optionIdx}`}
																name={`${section.id}[]`}
																defaultValue={option.value}
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																onClick={(e) => handleEpcotFilter(section.id, e)}
															/>
															<label
																htmlFor={`${section.id}-${optionIdx}`}
																className="ml-3 text-sm text-gray-600 dark:text-gray-400"
															>
																{option.label}
															</label>
														</div>
													))}
												</div>
											</fieldset>
										</div>
									))}
								</form>
							</div>
						</aside>

						<div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3 lg:grid lg:grid-cols-2 lg:gap-5 lg:m-0 pb-6">
							{displayFood()}
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
