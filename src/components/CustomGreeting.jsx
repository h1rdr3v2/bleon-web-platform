import React from "react"

const CustomGreeting = (props) => {
	const { greeting, age } = props
	return (
		<div>
			<h1>
				{greeting} - {age}
			</h1>
		</div>
	)
}

export default CustomGreeting
