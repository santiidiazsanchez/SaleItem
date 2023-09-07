'use client'

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
    SmartPhone,
    Desktop,
    HeadPhones,
    Camera,
    Lightning,
} from "./icons";
import { Link } from "@nextui-org/link";

export default function AccordionCategories() {
    const defaultContent = (
        <div className="flex flex-col gap-4 mx-7">
            <Link isBlock href="#" color="foreground">
                Lorem ipsum
            </Link>
            <Link isBlock href="#" color="foreground">
                Dolor sit amet
            </Link>
            <Link isBlock href="#" color="foreground">
                Consectetur adipiscing
            </Link>
            <Link isBlock href="#" color="foreground">
                Elit sed do
            </Link>
        </div>
    );



    return (
        <Accordion selectionMode="multiple">
            <AccordionItem
                key="1"
                aria-label="Smartphones"
                title="Smartphones"
                startContent={<SmartPhone />}
                className="font-semibold"
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="2"
                aria-label="Computers"
                title="Computers"
                startContent={<Desktop />}
                className="font-semibold"
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="3"
                aria-label="Lightning"
                title="Lightning"
                startContent={<Lightning />}
                className="font-semibold"
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="4"
                aria-label="Earphones"
                title="Earphones"
                startContent={<HeadPhones />}
                className="font-semibold"
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="5"
                aria-label="Cameras"
                title="Cameras"
                startContent={<Camera />}
                className="font-semibold"
            >
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}
