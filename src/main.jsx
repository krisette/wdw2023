import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EPCOTFoodsToTry from './components/EPCOTFoodsToTry'
import FoodsToTry from './components/FoodsToTry'
import Home from './components/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'epcot',
				element: <EPCOTFoodsToTry />,
			},
			{
				path: 'non-epcot',
				element: <FoodsToTry />,
			},
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
