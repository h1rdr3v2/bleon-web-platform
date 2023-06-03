import React from "react"
import Cards from "../Cards/Cards"
const ServicesSection = () => {
	return (
		<div className="services container">
			<div className="services--header-text">
				<p className="services--header-title">SERVICES WE PROVIDE</p>
				<p className="services--header-caption">
					Delivering Quality Services For More Than 15 years
				</p>
				<p className="services--header-descrip">
					At <span style={{ fontWeight: "bold" }}>Bleon</span>, we've
					been delivering quality software services for over 15 years.
					Our team of experts has extensive experience in designing,
					developing, and implementing software solutions for a wide
					range of industries. We pride ourselves on our ability to
					understand our clients' unique business needs and provide
					customized solutions that exceed their expectations.
				</p>
			</div>
			<div className="services--cards">
				<div className="cards--wrapper">
					<Cards
						title={"Custom Softwares"}
						description={
							"We specialise in developing top-quality websites, mobile\napplications and other custom digital solutions to meet our\nclient's unique needs."
						}
					/>
					<Cards
						title={"Enterprise Solutions"}
						description={
							"This solution can help you manage internal processes, improve reporting, while saving time and simplifying their processes."
						}
					/>
					<Cards
						title={"Enterprise"}
						description={
							"Sometimes it's much easier to have dedicated IT staff to help you complete your projects in-house, and that's where we come in."
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default ServicesSection
