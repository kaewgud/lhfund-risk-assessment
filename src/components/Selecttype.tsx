import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Selecttype({type,name}:{type:string,name:string}) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([{type}]));

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
        <DropdownItem key={name} > {name}</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}
