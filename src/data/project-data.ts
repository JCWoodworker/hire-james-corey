import { Project } from "./types"

export const projects: Project[] = [
	{
		title: "OnlyBizLinks",
		description: "A Business Link Directory with React front-end and NestJS back-end",
		image:
			"https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/OBL-Foolproof.png",
		githubLink: "https://github.com/JCWoodworker/OnlyBizLinks",
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
		title: "NestJS Mega Backend",
		description: "A NestJS back-end application with a PostgreSQL database",
		image:
			"https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/NestJSScreenshot.png",
		githubLink: "https://github.com/JCWoodworker/NestJS_Mega_Backend",
		websiteLink: "",
		technologies: [
			"TypeScript",
			"NestJS",
			"PostgreSQL",
			"OOP",
			"TDD",
			"TypeORM",
			"Jest",
      "Heroku"
		],
	},
	{
		title: "React Portfolio",
		description: "You're looking at it!",
		image: "https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/my-portfolio/PortfolioScreenshot.jpg",
		githubLink: "https://github.com/JCWoodworker/hirejamescorey",
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
]
