function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="flex gap-1 text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()} -
				<p>Dagimawi Mantefardo</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
