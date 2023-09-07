import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import {
    TruckFast,
    Coins,
    Percent,
    Headset
} from "./icons";

export default function Feature() {

    const list = [
        {
            title: "Quick Global Shipping",
            subtitle: "Experience Swift Delivery Across the Globl",
            icon: <TruckFast size={40} />,
        },
        {
            title: "Safe Checkout",
            subtitle: "Shop Securely with Confidence",
            icon: <Coins size={40} />,
        },
        {
            title: "Top Picks",
            subtitle: "Discover and Explore Our Finest Selections",
            icon: <Percent size={40} />,
        },
        {
            title: "Customer Support",
            subtitle: "24/7 Assistance: 1-800-123-4567",
            icon: <Headset size={40} />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20 py-10">
            {list.map((item, index) => (
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100"
                    shadow="sm"
                    key={index}
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4">

                            <div className="md:relative col-span-12 md:col-span-4 flex my-auto justify-center md:justify-start text-warning">
                                {item.icon}
                            </div>

                            <div className="flex flex-col col-span-12 md:col-span-8 text-center md:text-start">

                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">
                                        {item.title}
                                    </h3>
                                    <p className="text-small text-foreground/80">
                                        {item.subtitle}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
