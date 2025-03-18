import {
	Box,
	Button,
	IconButton,
	Modal,
	TextField,
	Typography,
} from "@mui/material"
import { useForm, ValidationError } from "@formspree/react"
import { Close } from "@mui/icons-material"

function ContactModal({
	open,
	handleClose,
}: {
	open: boolean
	handleClose: () => void
}) {
	const [state, handleSubmit] = useForm("xldjdaqd")
	if (state.succeeded) {
		alert("Thank you for contacting us!")
		window.location.href = "/"
	}

	const fieldStyle = {
		backgroundColor: "rgba(255, 255, 255, 0.05)",
		borderRadius: "5px",
		"& .MuiInputLabel-root": {
			color: "rgba(255, 255, 255, 0.7)",
		},
		"& .MuiInputLabel-root.Mui-focused": {
			padding: "2px 10px",
			color: "primary.light",
			backgroundColor: "rgba(255, 255, 255, 0.05)",
			borderRadius: "5px",
			border: "2px solid rgba(255, 255, 255, 0.1)",
			boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
		},
		"& .MuiOutlinedInput-root": {
			color: "rgba(255, 255, 255, 0.9)",
			"& fieldset": {
				borderColor: "rgba(255, 255, 255, 0.1)",
			},
			"&:hover fieldset": {
				borderColor: "rgba(255, 255, 255, 0.2)",
			},
			"&.Mui-focused fieldset": {
				borderColor: "primary.light",
			},
		},
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			sx={{
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					position: "relative",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					backdropFilter: "blur(10px)",
					borderRadius: "8px",
					padding: "3rem",
					maxWidth: "500px",
					width: "90%",
					border: "1px solid rgba(255, 255, 255, 0.1)",
				}}
			>
				<IconButton
					onClick={handleClose}
					sx={{
						position: { xs: "absolute", md: "absolute" },
						top: { xs: 10, md: 10 },
						right: { xs: 10, md: 10 },
						color: "rgba(255, 255, 255, 0.7)",
						"&:hover": {
							color: "primary.light",
						},
					}}
				>
					<Close />
				</IconButton>
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						color: "rgba(255, 255, 255, 0.9)",
						textAlign: "center",
						marginTop: { xs: 5, md: 0 },
					}}
				>
					Please fill out the form below to contact me!
				</Typography>
				<form
					onSubmit={handleSubmit}
					style={{ padding: "16px", maxWidth: "500px", margin: "0 auto" }}
				>
					<TextField
						id="name"
						label="Your Name"
						name="name"
						fullWidth
						margin="normal"
						variant="outlined"
						required
						sx={fieldStyle}
					/>
					<ValidationError prefix="Name" field="name" errors={state.errors} />
					<TextField
						id="email"
						label="Your Email Address"
						type="email"
						name="email"
						fullWidth
						margin="normal"
						variant="outlined"
            required
						sx={fieldStyle}
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
						id="phone"
						label="Your Phone Number"
						type="tel"
						name="phone"
						fullWidth
						margin="normal"
						variant="outlined"
						sx={fieldStyle}
					/>
					<ValidationError prefix="Phone" field="phone" errors={state.errors} />
					<TextField
						id="message"
						label="Your Message"
						name="message"
						multiline
						rows={4}
						fullWidth
						margin="normal"
						variant="outlined"
						required
						sx={fieldStyle}
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<Button
						type="submit"
						disabled={state.submitting}
						variant="contained"
						color="primary"
						sx={{
							backgroundColor: "primary.light",
							color: "white",
							marginTop: "10px",
							"&:hover": {
								backgroundColor: "primary.main",
							},
						}}
					>
						Submit
					</Button>
				</form>
			</Box>
		</Modal>
	)
}

export default ContactModal
