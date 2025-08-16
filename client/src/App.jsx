import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
	return (
		<div className="flex min-h-screen bg-gray-50 text-gray-900">
			<Sidebar />
			<div className="flex-1 ml-72 p-5 md:p-6 lg:p-8">
				<Header />
				<Dashboard />
			</div>
		</div>
	)
}

export default App
