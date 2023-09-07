'use client'

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ChevronDown } from "./icons";

export default function DropdownTextCurrency() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["USD"]));

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
                <DropdownItem key="USD">
                    USD
                </DropdownItem>
                <DropdownItem key="EUR">
                    EUR
                </DropdownItem>
                <DropdownItem key="CNY o RMB">
                    CNY o RMB
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
