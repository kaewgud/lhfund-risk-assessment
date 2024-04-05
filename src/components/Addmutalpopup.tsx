import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import Selecttype from "./Selecttype";

export default function Addmutalpopup() {
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
                <Selecttype type="Fund Type"name="fund 3"/>
                <Input type="Fund Ratio" label="Fund Ratio"></Input>
                <Selecttype type="Mutal Fund"name="fund 3"/>
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
