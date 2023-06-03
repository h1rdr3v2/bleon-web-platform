import React from "react"
import CustomButton from "./components/CustomButton"
import Navbar from "./components/Navbar"

const App = () => {
	return (
		<div>
			<Navbar />
			<h1>React App</h1>
			<CustomButton text={"Talk to An expert"} />
		</div>
	)
}

export default App
