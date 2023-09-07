export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="grid grid-cols-12 gap-10">
			{children}
		</section>
	);
}
