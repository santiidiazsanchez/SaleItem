import { Input } from "@nextui-org/input";
import { MailIcon, CopyRight } from "./icons";
import { Link } from "@nextui-org/link";

export default function Footer() {

    return (
        <footer className="container mx-auto max-w-7xl pt-20 mt-20 px-6 flex-grow">
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 md:col-span-5 text-center md:text-start">
                    <h5 className="font-bold">
                        Be in touch
                    </h5>
                    <p className="font-light mt-8 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.
                    </p>
                    <Input
                        isClearable
                        type="email"
                        label="Email"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        startContent={
                            <MailIcon className="text-warning" />
                        }
                        description="Enter your email"
                    />
                </div>
                <div className="col-span-6 md:col-span-3 flex flex-col md:ml-auto text-center md:text-start items-center md:items-end">
                    <h5 className="font-bold mb-8">
                        Shop Items
                    </h5>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Smartphones
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Computers
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Earphones
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Cameras
                    </Link>
                </div>
                <div className="col-span-6 md:col-span-2 flex flex-col md:ml-auto text-center md:text-start items-center md:items-end">
                    <h5 className="font-bold mb-8">
                        Navegation
                    </h5>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Shop
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Categories
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Contact
                    </Link>
                </div>
                <div className="col-span-6 md:col-span-2 flex flex-col md:ml-auto text-center md:text-start items-center md:items-end">
                    <h5 className="font-bold mb-8">
                        Account Settings
                    </h5>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Team Settings
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Analytics
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        System
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Configurations
                    </Link>
                    <Link
                        href="#"
                        color="foreground"
                        className="font-light mb-2"
                    >
                        Help & Feedback
                    </Link>
                </div>

                <div className="col-span-12 flex flex-col md:flex-row items-center justify-between pb-5 pt-20 mt-10">
                    <p className="hidden md:flex gap-2 text-default font-semibold">
                        <CopyRight /> 2023 Your company. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        <Link
                            href="#"
                            color="foreground"
                            className="font-light"
                        >
                            Smartphones
                        </Link>
                        <Link
                            href="#"
                            color="foreground"
                            className="font-light"
                        >
                            Computers
                        </Link>
                        <Link
                            href="#"
                            color="foreground"
                            className="font-light"
                        >
                            Earphones
                        </Link>
                        <Link
                            href="#"
                            color="foreground"
                            className="font-light"
                        >
                            Cameras
                        </Link>
                    </div>
                    <p className="md:hidden flex gap-2 text-default font-semibold my-5">
                        <CopyRight /> 2023 Your company. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
