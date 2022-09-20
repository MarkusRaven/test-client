import React from 'react'
import './App.css'
import Table from './components/Table'
import { useSocket } from './hooks/useSocket'

function App() {
	const socketIo = useSocket()
	return (
		<div className='App'>
			<Table />
			<div className='container'>
				<p>{socketIo}</p>
			</div>
		</div>
	)
}

export default App
