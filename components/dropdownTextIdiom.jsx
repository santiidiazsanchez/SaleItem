'use client'

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ChevronDown } from "./icons";

export default function DropdownTextIdiom() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["English"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    color="default"
                    variant="light"
                    className="capitalize"
                    endContent={<ChevronDown size={12} />}
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Chinese">
                    Chinese
                </DropdownItem>
                <DropdownItem key="Spanish">
                    Spanish
                </DropdownItem>
                <DropdownItem key="English">
                    English
                </DropdownItem>
                <DropdownItem key="Hindi">
                    Hindi
                </DropdownItem>
                <DropdownItem key="French">
                    French
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
