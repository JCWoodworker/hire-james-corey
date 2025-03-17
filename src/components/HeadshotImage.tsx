const HeadshotImage = () => {
	return (
		<>
			<img
				src="https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/Headshot.jpg"
				alt="Headshot"
				style={{
					margin: "0 auto",
					marginBottom: "20px",
					width: "200px",
					height: "auto",
					objectFit: "cover",
					borderRadius: "50%",
				}}
			/>
		</>
	)
}

export default HeadshotImage
