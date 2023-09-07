import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Badge } from "@nextui-org/badge";

//Components
import DropdownTextIdiom from "@/components/dropdownTextIdiom";
import DropdownTextCurrency from "@/components/dropdownTextCurrency"
import UserItem from "@/components/userItem";
import { LinksNavbar } from "@/components/linksNavbar";

import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	CartShopping,
	FacebookF,
	Twitter,
	Phone,
	Heart,
	SearchIcon,
} from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<>
			<NextUINavbar
				maxWidth="xl"
				position="sticky"
			>
				<NavbarContent
					className="hidden sm:flex basis-1/5 sm:basis-full"
					justify="start"
				>
					<NavbarItem className="hidden sm:flex gap-4">
						<Link isExternal href={siteConfig.links.github} aria-label="Github">
							<FacebookF className="text-default-500" />
						</Link>
						<Link isExternal href={siteConfig.links.github} aria-label="Github">
							<Twitter className="text-default-500" />
						</Link>
						<Link isExternal href={siteConfig.links.github} aria-label="Github">
							<Phone className="text-default-500" />
						</Link>
						<p className="font-light">010-020-030-040</p>
					</NavbarItem>
				</NavbarContent>

				<NavbarContent
					className="hidden md:flex basis-1/5 sm:basis-full"
					justify="center"
				>
					<p className="font-light">
						Complimentary in-store delivery.
					</p>
				</NavbarContent>

				<NavbarContent
					className="hidden sm:flex basis-1/5 sm:basis-full"
					justify="end"
				>
					<DropdownTextIdiom />
					<DropdownTextCurrency />
				</NavbarContent>

				{/* Responsive */}
				<NavbarContent className="sm:hidden basis-1" justify="start">
					<NavbarItem className="flex gap-4">
						<Link
							isExternal
							href={siteConfig.links.github}
							aria-label="Github"
						>
							<FacebookF className="text-default-500" />
						</Link>
						<Link
							isExternal
							href={siteConfig.links.github}
							aria-label="Github"
						>
							<Twitter className="text-default-500" />
						</Link>
						<Link
							isExternal
							href={siteConfig.links.github}
							aria-label="Github"
						>
							<Phone className="text-default-500" />
						</Link>
						<p className="font-light">010-020-030-040</p>
					</NavbarItem>
				</NavbarContent>

			</NextUINavbar>

			<NextUINavbar
				shouldHideOnScroll
				maxWidth="xl"
			>

				<LinksNavbar />

				<NavbarContent
					className="hidden sm:flex basis-1/5 sm:basis-full"
					justify="center"
				>
					<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				</NavbarContent>

				<NavbarContent
					className="hidden sm:flex basis-1/5 sm:basis-full"
					justify="end"
				>
					<NavbarItem className="hidden sm:flex gap-4">

						<Badge color="warning" content={5} shape="circle">
							<Link isExternal href={siteConfig.links.github} aria-label="Github">
								<CartShopping className="text-default-500" />
							</Link>
						</Badge>

						<Badge color="warning" content={2} shape="circle">
							<Link isExternal href={siteConfig.links.github} aria-label="Github">
								<Heart className="text-default-500" />
							</Link>
						</Badge>

						<ThemeSwitch />

						<UserItem />

					</NavbarItem>
				</NavbarContent>

				{/* Responsive */}
				<NavbarContent className="sm:hidden basis-1" justify="end">

					<Badge color="warning" content={5} shape="circle">
						<Link isExternal href={siteConfig.links.github} aria-label="Github">
							<CartShopping className="text-default-500" />
						</Link>
					</Badge>

					<Badge color="warning" content={2} shape="circle">
						<Link isExternal href={siteConfig.links.github} aria-label="Github">
							<Heart className="text-default-500" />
						</Link>
					</Badge>

					<ThemeSwitch />

					<UserItem />

					<NavbarMenuToggle />

				</NavbarContent>

				{/* Menu */}
				<NavbarMenu>
					{searchInput}
					<div className="mx-4 mt-2 flex flex-col gap-2 text-center">
						{siteConfig.navMenuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={
										index === 1
											? "warning"
											: "foreground"
									}
									href="#"
									size="lg"
								>
									{item.label}
								</Link>
							</NavbarMenuItem>
						))}
					</div>
				</NavbarMenu>

			</NextUINavbar>
		</>
	);
};
