import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import NavBar from './components/NavBar'
import FoodsToTry from './components/FoodsToTry'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavBar />
		<FoodsToTry />
	</React.StrictMode>
)
