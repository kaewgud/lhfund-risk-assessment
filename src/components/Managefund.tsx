import React from "react";
import {Card, CardBody, Divider} from "@nextui-org/react";
import Changefund from "./changefund";
import Addmutalpopup from "./Addmutalpopup";

export default function Managefund(){
    return(
        <Card className="bg-white mt-5 w-11/12 shadow-2xl">
            <CardBody>
                <div className="flex flex-col w-full gap-3 mb-3"> 
                    <Changefund type="fund Type 1" percent="65" />
                    <Changefund type="fund Type 2" percent="3"/>
                </div>
                <Addmutalpopup/>
            </CardBody>
        </Card>
    )

}