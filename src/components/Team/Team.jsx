import React from "react"
import team from "../../images/team-innovative.jpeg"
import CustomButton from "../CustomButton"

const Team = () => {
	return (
		<div className="team container">
			<h1 className="team--title">
				At Bleon, we have always promoted a culture of creativity and
				innovation
			</h1>
			<div className="team--modal">
				<div className="team--pic">
					<img className="team--innovative-img" src={team} />
					<div className="team--overlay"></div>
				</div>
				<div className="team--innovative">
					<div className="team--innovative--title">
						TEAM-INNOVATIVE
					</div>
					<div className="team--innovative--text">
						Bleon provides full stack application and software
						solutions to small businesses, startups and large
						enterprises. We have engineers with a wide range of
						skills and backgrounds working together to create
						intuitive and agile products that make life easier for
						our customers. We bring the life to the products
					</div>
					<CustomButton text="Learn More" type="BLACK" />
				</div>
			</div>
		</div>
	)
}

export default Team
