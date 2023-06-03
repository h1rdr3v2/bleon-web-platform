import React from "react"
import Icon from "../../images/icon.png"

const Cards = ({ image = null, title, description }) => {
	return (
		<div className="card">
			<div className="card--bg">
				<img
					src={Icon}
					style={{
						position: "absolute",
						marginTop: 10,
						marginLeft: 10,
						width: 80,
						height: 80,
					}}
				/>
				<div className="card--bg--blur"></div>
			</div>
			<div className="card--body">
				<p className="card--title">{title}</p>
				<p className="card--descrip">{description}</p>
			</div>
		</div>
	)
}

export default Cards
