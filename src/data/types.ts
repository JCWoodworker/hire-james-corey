export interface Project {
	title: string
	description: string
	image: string
	githubLink: string
	technologies: string[]
}

export interface ProfilePoint {
	text: string
}

export interface SocialLink {
	icon: React.ReactElement
	href: string
}
