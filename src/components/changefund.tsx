import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn} from "@nextui-org/react";

export default function Changefund({ type,percent }:{type:string,percent:string}) {
    return(
        <Dropdown >
            <DropdownTrigger> 
                <Button> {type}</Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title="Mutual Fund" showDivider > 
                <DropdownItem key="fund name" > <p className="text-lg"> fund name {percent}%</p> </DropdownItem>
            </DropdownSection>
            
            </DropdownMenu>
        </Dropdown>
    )
}