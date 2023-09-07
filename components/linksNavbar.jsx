"use client";

import {
    NavbarContent,
    NavbarBrand,
    NavbarItem,
} from "@nextui-org/navbar";

import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
    SmartPhone,
    Desktop,
    HeadPhones,
    Camera,
    ChevronDown,
    Logo,
    Lightning,
    ArrowUpRightFromSquare,
    Rocket,
} from "@/components/icons";

export const LinksNavbar = () => {

    const menuItems = [
        {
            key: "Smartphones",
            startContent: <SmartPhone size={40} />,
        },
        {
            key: "Computers",
            startContent: <Desktop size={40} />,
        },
        {
            key: "Lightning",
            startContent: <Lightning size={40} />,
        },
        {
            key: "Earphone",
            startContent: <HeadPhones size={40} />,
        },
        {
            key: "Camera",
            startContent: <Camera size={40} />,
        },
    ];

    return (
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
                <NextLink className="flex justify-start items-center gap-1" href="/">
                    <Logo className="text-warning" />
                    <p className="font-bold text-inherit">
                        STRE
                    </p>
                </NextLink>
            </NavbarBrand>

            <ul className="hidden sm:flex items-center gap-4 justify-start ml-2">

                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <NextLink
                            className={clsx(
                                linkStyles({ color: "foreground" }),
                                "data-[active=true]:text-warning data-[active=true]:font-medium"
                            )}
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </NextLink>
                    </NavbarItem>

                ))}

                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="text-medium p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={<ChevronDown size={16} />}
                                radius="sm"
                                variant="light"
                                data-aria-level={1}

                            >
                                Categories
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu
                        aria-label="ACME features"
                        className="grid grid-cols-12 w-[35rem]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >

                        {menuItems.map((item) => (
                            <DropdownItem
                                key={item.key}
                                startContent={item.startContent}
                                className="col-span-3 flex flex-col gap-5 p-10"
                            >
                                {item.key}
                            </DropdownItem>
                        ))}

                        <DropdownItem
                            key="delete"
                            className="col-span-12 bg-warning text-center"
                            endContent={<ArrowUpRightFromSquare size={12} />}
                            startContent={<Rocket size={12} />}
                        >
                            Tech-lover's Paradise! Get a tech upgrade today. Use code 'GADGET20'
                        </DropdownItem>

                    </DropdownMenu>

                </Dropdown>

            </ul>

        </NavbarContent>
    );
};
