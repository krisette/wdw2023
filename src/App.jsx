import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'


function App() {

	return (
		<div className="bg-zinc-100 dark:bg-zinc-800">
			<NavBar />
			<Outlet />
		</div>
	)
}

export default App
