"use client"

import CardNav from "./CardNav"

const Navbar = () => {
	const items = [
		{
			label: "Services",
			bgColor: "#3B82F6",
			textColor: "#fff",
			links: [
				{
					label: "Web Development",
					href: "#services",
					ariaLabel: "Web Development Services",
				},
				{
					label: "VTU Services",
					href: "/airlypay",
					ariaLabel: "VTU Services Platform",
				},
				{
					label: "Cybersecurity",
					href: "#services",
					ariaLabel: "Cybersecurity Services",
				},
			],
		},
		{
			label: "Projects",
			bgColor: "#9333EA",
			textColor: "#fff",
			links: [
				{
					label: "MyCGPA",
					href: "/mycgpa",
					ariaLabel: "MyCGPA - GPA Calculator",
				},
				{
					label: "AirlyPay",
					href: "/airlypay",
					ariaLabel: "AirlyPay - VTU Platform",
				},
			],
		},
		{
			label: "Company",
			bgColor: "#1E293B",
			textColor: "#fff",
			links: [
				{ label: "About Us", href: "#about", ariaLabel: "About Bleon Co Ltd" },
				{ label: "Contact", href: "#contact", ariaLabel: "Contact Us" },
			],
		},
	]

	return (
		<CardNav
			logo="/logos/logo_no_bg.png"
			logoAlt="Bleon Co Ltd Logo"
			items={items}
			baseColor="#fff"
			menuColor="#000"
			buttonTextColor="#fff"
			ease="back.out(1.7)"
		/>
	)
}

export default Navbar
