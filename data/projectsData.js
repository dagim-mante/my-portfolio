import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Project - Marefiya',
		url: 'https://marefiya.vercel.app',
		github_url: "https://github.com/dagim-mante/Marefiya---Find-a-perfect-home-to-match-your-needs.",
		category: 'Web Application',
		img: '/images/project-marefiya-1.png',
		ProjectHeader: {
			title: 'Marefiya',
			publishDate: 'Aug 30, 2024',
			tags: 'UI / Fullstack',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Home Page',
				img: '/images/project-marefiya-1.png',
			},
			{
				id: uuidv4(),
				title: 'Details Page',
				img: '/images/project-marefiya-2.png',
			},
			{
				id: uuidv4(),
				title: 'Realtime Chat',
				img: '/images/project-marefiya-3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Marefiya - Find a home',
				},
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Full-stack Web app',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://marefiya.vercel.app',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'The objective of Marefiya was to improve my practical knowledege of Next.js on a large scale project. I was also experimenting with new technologies like Algolia Search, Redis and others.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'TailwindCSS',
						'Postgresql',
						'Drizzle',
						'Git',
						'Figma'
					],
				},
			],
			ProjectDetailsHeading: 'Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Marefiya (ማረፍያ) is a full-stack platform designed to make property searching and listing more efficient and user-friendly. It allows users to search, filter, and save properties based on their preferences, making it easier to find suitable options. For homeowners, the platform provides a streamlined process to list properties, ensuring they can reach potential renters or buyers with minimal effort. Marefiya combines intuitive design with powerful features, creating an organized space where property seekers and owners can connect. With its range of tools, the platform addresses the challenges of navigating the real estate market, offering a simplified solution for both sides.',
				},
				{
					id: uuidv4(),
					details:
						'At the core of Marefiya’s functionality are several cutting-edge features. It offers full authentication options, allowing users to sign in with credentials or OAuth, powered by NextAuth. The platform\'s search and filtering capabilities are enhanced with Algolia Search, providing fast and accurate results. Marefiya also includes real-time chat functionality using Redis and Pusher, ensuring smooth communication between users and property owners. Interactive geolocation filtering is made possible with React Leaflet, allowing users to find properties based on their preferred location visually. For homeowners and property managers, comprehensive analytics are displayed through Recharts, providing insights into property views and engagement. These features, along with many others, make Marefiya a powerful tool for anyone involved in property searching or listing.',
				},
			],
			SocialSharingHeading: '',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
];
