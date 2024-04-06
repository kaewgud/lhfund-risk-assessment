import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Selectport() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["level (1)"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown className="shadow-2xl mt-1">
      <DropdownTrigger>
        <Button 
          variant="faded"
          color= "secondary"
          className="capitalize"
          endContent={<ArrowDropDownIcon/>}
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
        <DropdownItem key="level (1)">level (1)</DropdownItem>
        <DropdownItem key="level (2)">level (2)</DropdownItem>
        <DropdownItem key="level (3)">level (3)</DropdownItem>
        <DropdownItem key="level (4)">level (4)</DropdownItem>
        <DropdownItem key="level (5)">level (5)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
