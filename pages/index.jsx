import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead 
				title="Dagimawi - Portfolio" 
				description="Fullstack developer specializing in React, Next.js, Tailwind CSS, and the MERN stack. Expertise in crafting high-performance web applications with clean, maintainable code."
				keywords="fullstack developer, React, Next.js, Tailwind CSS, MERN stack, web applications, high-performance solutions, clean code, maintainable code, usability, scalability, efficiency, user experience, innovative solutions, GitHub"
			/>

			<AppBanner />

			<ProjectsGrid />

			<div className="mt-10 sm:mt-15 flex justify-center">
				<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
					<Link href="/projects" aria-label="More Projects" passHref>
						<Button title="More Projects" />
					</Link>
				</div>
			</div>
		</div>
	);
}
