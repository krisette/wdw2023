import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
	Bars3Icon,
	XMarkIcon,
	MoonIcon,
	SunIcon,
} from '@heroicons/react/24/outline'
import Logo from '../assets/mickeymousehead.png'
import DarkModeLogo from '../assets/mickeymousehead_darkmode.png'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useDarkMode } from '../context/DarkModeContext'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../context/SearchContext'

export default function NavBar() {
	const [isDark, setIsDark] = useDarkMode()
	const { setSearch } = useSearchContext()
	
	const toggleDarkMode = (checked) => {
		setIsDark(checked)
	}
	const toggleDarkModeMobile = () => {
		setIsDark(!isDark)
	}

	return (
		<Disclosure as="nav" className="bg-white dark:bg-zinc-900 shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex px-2 lg:px-0">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-8 w-auto lg:hidden"
										src={isDark ? DarkModeLogo : Logo}
										alt="Mickey Mouse head"
									/>
									<img
										className="hidden h-8 w-auto lg:block hover:animate-spin"
										src={isDark ? DarkModeLogo : Logo}
										alt="Mickey Mouse head"
									/>
								</div>
								<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
									<Link
										to={''}
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 dark:text-zinc-300 hover-underline-animation"
									>
                    Non-EPCOT
									</Link>
									<Link
										to={'epcot'}
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-zinc-300 hover-underline-animation"
									>
                    EPCOT
									</Link>
								</div>
							</div>
							<div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
								<div className="w-full max-w-lg lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
                    Search by name
									</label>
									<div className="relative">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
											<MagnifyingGlassIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full rounded-md border border-zinc-300 dark:border-gray-700 bg-white dark:bg-zinc-900 py-2 pl-10 pr-3 leading-5 placeholder-gray-500 dark:text-white focus:border-[#e0c2d0] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#e0c2d0] sm:text-sm"
											placeholder="Search by name"
											type="search"
											onChange={(e) => setSearch(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<div className="flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e0c2d0]">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:ml-4 lg:flex lg:items-center">
								<button
									type="button"
									className="flex-shrink-0 rounded-full p-1 focus:outline-none"
								>
									<span className="sr-only">Dark/light mode</span>
									<DarkModeSwitch checked={isDark} onChange={toggleDarkMode} />
								</button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="space-y-1 pt-2 pb-3">
							<Disclosure.Button
								as={Link}
								to={''}
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
							>
                Non-EPCOT
							</Disclosure.Button>
							<Disclosure.Button
								as={Link}
								to={'epcot'}
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
							>
                EPCOT
							</Disclosure.Button>
						</div>
						<div className="border-t border-gray-200 pt-4 pb-3">
							<div className="flex items-center px-4">
								<div>
									<div className="text-base font-medium text-gray-800 dark:text-gray-300">
										<button
											type="button"
											className=""
											onClick={toggleDarkModeMobile}
										>
                      Switch to {isDark ? 'light mode' : 'dark mode'}
										</button>
									</div>
								</div>
								<div className="ml-auto flex-shrink-0 flex items-center">
									<span className="sr-only">Dark or light mode</span>
									{!isDark ? (
										<SunIcon className="h-6 w-6 text-black" aria-hidden="true" />
									) : (
										<MoonIcon className="h-6 w-6 text-white" aria-hidden="true" />
									)}
								</div>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
