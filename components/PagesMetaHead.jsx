import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<meta name="author" content="Dagimawi" />
			<meta property="og:title" content="Dagimawi - Fullstack Developer" />
			<meta property="og:description" content="Crafting end-to-end web applications with React, Next.js, Tailwind CSS, and the MERN stack. Building seamless, high-performance solutions with a focus on usability and scalability." />
			<meta property="og:url" content="https://github.com/dagim-mante" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Dagimawi - Portfolio',
	keywords: 'fullstack developer, React, Next.js, Tailwind CSS, MERN stack, web applications, high-performance solutions, clean code, maintainable code, usability, scalability, efficiency, user experience, innovative solutions, GitHub',
};

export default PagesMetaHead;
