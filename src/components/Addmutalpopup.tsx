import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { risks } from "~/data-mockup/risk";
import { levels } from "~/data-mockup/level";

export default function Addmutalpopup() {
    const [showInput, setShowInput] = React.useState(true);//status box
    const [count, setCount] = React.useState(0);
    const handleSelectionChange = (key: any) => {

        setShowInput(true)
        setCount(0)
    };
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">+</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add</ModalHeader>
              <ModalBody>
                    <Autocomplete

                    placeholder="เลือกประเภทกองทุน"
                    defaultItems={levels}
                    labelPlacement="outside"
                    className="max-w-xs"
                    onSelectionChange={handleSelectionChange}

                    >
                    {(item: { id: any; name: any; }) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
                    </Autocomplete>
                    <Input type="Fund Ratio" label="Fund Ratio"></Input>
                    <Autocomplete

                    placeholder="เลือกกองทุน"
                    defaultItems={risks}
                    labelPlacement="outside"
                    className="max-w-xs"
                    onSelectionChange={handleSelectionChange}

                    >
                    {(item: { id: any; name: any; }) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
                    </Autocomplete>
                    <Input type="Mutual Ratio" label="Mutual Ratio"></Input>
                    
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Add new
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
