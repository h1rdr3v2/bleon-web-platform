import React from "react"

const CustomButton = ({ text, type = "BLACK", onClick = null }) => {
	const styles = {
		button: {
			paddingBlock: 18,
			borderRadius: 10,
			border: 0,
			width: 223,
		},
		PRIMARY: {
			backgroundColor: "#ff6600",
			color: "white",
		},
		SECONDARY: {
			backgroundColor: "transparent",
			borderColor: "#ff6600",
			border: "1px solid #ff6600",
		},
		BLACK: {
			backgroundColor: "black",
			color: "white",
		},
	}

	return (
		<div>
			<input
				style={{ ...styles.button, ...styles[type] }}
				value={text}
				type="button"
				className="custombutton"
				onClick={onClick}
			/>
		</div>
	)
}

export default CustomButton
