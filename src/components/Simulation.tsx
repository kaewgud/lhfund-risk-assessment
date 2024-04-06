import React from "react";
import Selecttype from "./Selecttype";
import { Button } from "@nextui-org/react";
import AdminLineChart from "./Adminlinechart";
import {Card, CardBody, Divider} from "@nextui-org/react";


export default function Simulation(){
    return(
        <div className="flex flex-row">
            <div className="mt-6 ml-5">
                <p className="text-primary-100 text-lg"> Set Simulation Instance </p>
                <p className="text-gray-400 font-semibold text-sm mt-3"> Select FundType </p>
                <div className="mt-3"> <Selecttype name="Fund Type (1)" type="1"/> </div>
                <p className="text-gray-400 font-semibold text-sm mt-3"> Select MFs as Instance </p>
                <div className="mt-3"> <Selecttype name="MFs (1)" type="1"/> </div>
                <Button className="mt-5 bg-gray-700 text-white"> save</Button>
            </div>
            <Card className="bg-white m-5 ml-10">
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