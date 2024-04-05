import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn} from "@nextui-org/react";

export default function Changefund({ type,percent }:{type:string,percent:string}) {
    return(
        <Dropdown backdrop="blur">
            <DropdownTrigger> 
                <Button> {type}</Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title="Mutual Fund" showDivider > 
                <DropdownItem key="fund name" > fund name {percent}% </DropdownItem>
            </DropdownSection>
            
            </DropdownMenu>
        </Dropdown>
    )
}