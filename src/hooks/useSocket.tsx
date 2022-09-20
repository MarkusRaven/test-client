import { WEBSOCKET_URI } from '../constants'
import { io, Socket } from 'socket.io-client'
import { useCallback, useEffect, useState } from 'react'

const socket: Socket = io(WEBSOCKET_URI, { transports: ['websocket'] })

export const useSocket = () => {
	const [isConnected, setIsConnected] = useState(socket.connected)

	useEffect(() => {
		socket.on('connection', (data) => {
			console.log(data)
			setIsConnected(true)
		})

		socket.on('disconnect', () => {
			setIsConnected(false)
		})

		socket.on('createdUser', (data) => console.log(data))
		socket.on('updatedUser', (data) => console.log(data))

		return () => {
			socket.off('connect')
			socket.off('disconnect')
		}
	}, [])

	return (
		<div>
			<p>Connected: {'' + isConnected}</p>
			<button>Send ping</button>
		</div>
	)
}
