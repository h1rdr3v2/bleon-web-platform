import React from "react"
import CustomButton from "./components/CustomButton"
import Navbar from "./components/NavBar"

import Navbar from "./components/Navbar"
import ServicesSection from "./components/Services/ServicesSection"
import Team from "./components/team/Team"
const App = () => {
	return (
		<div>
			
			<Navbar />
			<CustomButton text={"Talk to An expert"} />
			
			<Navbar />
			<ServicesSection />
			<Team />
		</div>
	)
}

export default App
