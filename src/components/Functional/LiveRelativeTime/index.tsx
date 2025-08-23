import { useEffect, useState } from "preact/hooks"
export interface TimeSinceProps {
	date: Date
}

function timeSinceThing(date: Date) {
	const seconds = Math.floor((Date.now() - date.getTime()) / 1000)

	let interval = seconds / 31536000

	if (interval > 1) {
		return `${Math.floor(interval)} years ago`
	}
	interval = seconds / 2592000
	if (interval > 1) {
		return `${Math.floor(interval)} months ago`
	}
	interval = seconds / 86400
	if (interval > 1) {
		return `${Math.floor(interval)} days ago`
	}
	interval = seconds / 3600
	if (interval > 1) {
		return `${Math.floor(interval)} hours ago`
	}
	interval = seconds / 60
	if (interval > 1) {
		return `${Math.floor(interval)} minutes ago`
	}
	return `${Math.floor(seconds)} seconds ago`
}

export const LiveRelativeTime = (props: TimeSinceProps) => {
	const [_, setTime] = useState(new Date())

	useEffect(() => {
		const interval = 1000 // every second
		const intervalId = setInterval(() => {
			setTime(new Date())
		}, interval)

		return () => clearInterval(intervalId)
	}, [])

	return <>{timeSinceThing(props.date)}</>
}
