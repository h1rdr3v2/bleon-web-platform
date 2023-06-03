import React from "react"
import Navbar from "./components/NavBar"
import ServicesSection from "./components/Services/ServicesSection"
import Team from "./components/team/Team"

const App = () => {
	return (
		<div>
			
			<Navbar />
			
			<ServicesSection />
			<Team />
		</div>
	)
}

export default App
