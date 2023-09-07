'use client'

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";

export default function UserItem() {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://images.pexels.com/photos/8894629/pexels-photo-8894629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
            >
                <DropdownItem key="profile" className="h-14 gap-2" color="warning">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">
                    My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">
                    Team Settings
                </DropdownItem>
                <DropdownItem key="analytics">
                    Analytics
                </DropdownItem>
                <DropdownItem key="system">
                    System
                </DropdownItem>
                <DropdownItem key="configurations" color="primary">
                    Configurations
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                    Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}