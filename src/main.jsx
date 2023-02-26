import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import EPCOTFoodsToTry from './components/EPCOTFoodsToTry'
import FoodsToTry from './components/FoodsToTry'
import Home from './components/Home'

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <FoodsToTry />
			},
			{
				path: 'epcot',
				element: <EPCOTFoodsToTry />,
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
