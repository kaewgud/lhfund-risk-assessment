import React from "react";
import { Button } from "@nextui-org/react";
import AdminLineChart from "./Adminlinechart";
import {Card, CardBody, Divider} from "@nextui-org/react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { risks } from "~/data-mockup/risk";


export default function Simulation(){
    const [showInput, setShowInput] = React.useState(true);//status box
    const [count, setCount] = React.useState(0);
    const handleSelectionChange = (key: any) => {

        setShowInput(true)
        setCount(0)
    };
    return(
        <div className="flex flex-row">
            <div className="mt-6 ml-5">
                <p className="text-primary-100 text-lg"> Set Simulation Instance </p>
                <p className="text-gray-400 font-semibold text-sm mt-3 mb-3"> Select FundType </p>
                <Autocomplete

                            placeholder="เลือกกองทุน"
                            defaultItems={risks}
                            labelPlacement="outside"
                            className="max-w-xs"
                            onSelectionChange={handleSelectionChange}

                        >
                            {(item: { id: any; name: any; }) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
                </Autocomplete>
                <p className="text-gray-400 font-semibold text-sm mt-3 mb-3"> Select MFs as Instance </p>
                <Autocomplete

                            placeholder="MFs"
                            defaultItems={risks}
                            labelPlacement="outside"
                            className="max-w-xs"
                            onSelectionChange={handleSelectionChange}

                        >
                            {(item: { id: any; name: any; }) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
                </Autocomplete>
                <Button className="mt-5 bg-gray-700 text-white"> save</Button>
            </div>
            <Card className="bg-white m-5 ml-">
                <CardBody className="ml-5 mt-3">
                <p className="uppercase text-xs text-primary-300 mb-1"> PRIMARY TEXT </p>
                <p className="text-3xl text-primary-100 font-bold">5.6787,34</p>
                <p className="lowercase text-xs text-primary-300 mb-3"> Secondary text </p>
                <Divider/>
                <AdminLineChart/> 
                
            </CardBody>
        </Card>
        </div>
    ) 
}