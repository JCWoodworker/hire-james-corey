export interface Project {
	title: string
	description: string
	image: string
	githubLink: string
	websiteLink: string
	technologies: string[]
}

export interface ProfilePoint {
	text: string
}

export interface SocialLink {
	icon: React.ReactElement
	href: string
}

export interface Experience {
	company: string
	role: string
	location?: string
	startDate: string
	endDate: string
	bullets: string[]
	technologies?: string[]
}

export interface Education {
	school: string
	degree: string
	startDate: string
	endDate: string
}

export interface Certification {
	name: string
	issuer: string
	date: string
	url?: string
}

export interface Resume {
	summary: string
	experiences: Experience[]
	education: Education[]
	certifications: Certification[]
	skills: string[]
}
