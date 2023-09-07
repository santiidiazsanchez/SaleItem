import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Make&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
					<br />
					<h1 className={title()}>
						websites regardless of your design experience.
					</h1>
					<h2 className={subtitle({ class: "mt-4" })}>
						Beautiful, fast and modern React UI library.
					</h2>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.github}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						Documentation
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="flat">
						<span>
							Get started by editing <Code color="primary">app/page.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>

			<section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
				<div>
					<Image
						isZoomed
						alt="NextUI Fruit Image with Zoom"
						src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
					/>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-between items-center mb-10">
						<User
							name="Jane Doe"
							avatarProps={{
								src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
							}}
						/>
						<p
							className="text-default-500"
						>
							HSIRLS-21
						</p>
					</div>
					<h1 className={title() + " text-default-900"}>
						LuxeGlow Elixir
					</h1>
					<h1 className={title({ class: "my-10" })}>
						$ 199.00
					</h1>

				</div>
			</section>
		</>
	);
}
