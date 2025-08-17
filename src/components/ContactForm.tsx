import { useForm, ValidationError } from "@formspree/react"
import { Box, Stack, TextField, Button, Alert } from "@mui/material"
import { useMemo } from "react"

export default function ContactForm() {
	const [state, handleSubmit] = useForm("xldjdaqd")

	const isSubmitting = state.submitting
	const isSucceeded = state.succeeded
	const hasErrors = useMemo(() => {
		return Array.isArray(state.errors)
			? state.errors.length > 0
			: Boolean(state.errors)
	}, [state.errors])

	if (isSucceeded) {
		return (
			<Alert severity="success">
				Thanks for reaching out — I'll reply shortly.
			</Alert>
		)
	}

	return (
		<Box component="form" onSubmit={handleSubmit} noValidate>
			<Stack spacing={2}>
				{/* Honeypot field for basic bot mitigation */}
				<input
					type="text"
					name="_gotcha"
					style={{ display: "none" }}
					tabIndex={-1}
					aria-hidden="true"
				/>

				<TextField
					name="name"
					label="Full name"
					placeholder="Jane Doe"
					autoComplete="name"
					required
				/>
				<TextField
					type="email"
					name="email"
					label="Email address"
					placeholder="you@example.com"
					autoComplete="email"
					required
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
				<TextField
					name="message"
					label="How can I help?"
					placeholder="Tell me about your project or role3030"
					multiline
					minRows={5}
					required
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<Button type="submit" disabled={isSubmitting} size="large">
					{isSubmitting ? "Sending…" : "Send message"}
				</Button>
				{hasErrors && (
					<Alert severity="error">
						There was an error sending your message. Please try again.
					</Alert>
				)}
			</Stack>
		</Box>
	)
}
