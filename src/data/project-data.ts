import { Project } from "./types"

const awsS3Prefix = "https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/"
const githubPrefix = "https://github.com/JCWoodworker/"

export const projects: Project[] = [
	{
		title: "OnlyBizLinks",
		description:
			"A Business Link Directory with React front-end and NestJS back-end",
		image:
			`${awsS3Prefix}OBL-Foolproof.png`,
		githubLink: `${githubPrefix}OnlyBizLinks`,
		websiteLink: "https://onlybizlinks.com",
		technologies: [
			"TypeScript",
			"React",
			"Material-UI",
			"CSS",
			"Vite",
			"Netlify",
		],
	},
	{
		title: "Evergreen Construction, RI",
		description: "A basic website for a local construction company in Rhode Island",
		image: `${awsS3Prefix}EvergreenConstructionLogo.png`,
		githubLink: `${githubPrefix}evergreen-construction`,
		websiteLink: "https://evergreenconstructionri.com",
		technologies: [
			"TypeScript",
			"React",
			"Material-UI",
			"CSS",
			"Vite",
			"Netlify",
		],
	},
	{
		title: "Cutting Board Corner",
		description:
			"A website for customers who purchased my custom cutting boards.  Accessed via embedded NFC chips.",
		image: `${awsS3Prefix}CuttingBoardCornerLogoFull.png`,
		githubLink: `${githubPrefix}CuttingBoardCorner`,
		websiteLink: "https://cuttingboardcorner.com",
		technologies: [
			"TypeScript",
			"React",
			"Material-UI",
			"CSS",
			"Google Authentication",
			"Authorization Roles",
			"Light/Dark Mode",
			"Vite",
			"Netlify",
		],
	},
	{
		title: "React Portfolio",
		description: "You're looking at it!",
		image:
			`${awsS3Prefix}PortfolioScreenshot.jpg`,
		githubLink: `${githubPrefix}hirejamescorey`,
		websiteLink: "www.hirejamescorey.com",
		technologies: [
			"React",
			"TypeScript",
			"Material-UI",
			"CSS",
			"Vite",
			"Netlify",
		],
	},
	{
		title: "NestJS Mega Backend",
		description: "A NestJS back-end application with a PostgreSQL database",
		image:
			`${awsS3Prefix}NestJSScreenshot.png`,
		githubLink: `${githubPrefix}NestJS_Mega_Backend`,
		websiteLink: "",
		technologies: [
			"TypeScript",
			"NestJS",
			"PostgreSQL",
			"OOP",
			"TDD",
			"TypeORM",
			"Jest",
			"Heroku",
		],
	},
]
