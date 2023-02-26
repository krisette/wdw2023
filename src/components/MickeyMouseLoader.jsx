import React from 'react'

function MickeyMouseLoader() {

	return (
		<div className="flex flex-col text-gray-900 dark:text-gray-300">
			<div className="items-center flex justify-center">
				<svg height="150" width="150" viewBox="0 0 50 50">
					<circle cx="25" cy="22" r="15" className="fill-current">
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="4s"
							values="15;9;15"
							keyTimes="0;0.5;1"
							keySplines="0 0.5 0.5 1;0.5 0 1 0.5"
							calcMode="spline"
							begin="-0.5s"
						/>
					</circle>
					<circle cx="10" cy="10" r="8" className="fill-current">
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="4s"
							values="8;3;8"
							keyTimes="0;0.5;1"
							keySplines="0 0.5 0.5 1;0.5 0 1 0.5"
							calcMode="spline"
							begin="-0.5s"
						/>
					</circle>
					<circle cx="40" cy="10" r="8" className="fill-current">
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="4s"
							values="8;3;8"
							keyTimes="0;0.5;1"
							keySplines="0 0.5 0.5 1;0.5 0 1 0.5"
							calcMode="spline"
							begin="-0.5s"
						/>
					</circle>
			</svg>
				</div>
				<div className="text-center text-2xl text-gray-700 dark:text-gray-300">
					Loading...
				</div>
		</div>
	)
}

export default MickeyMouseLoader