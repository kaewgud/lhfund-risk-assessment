import React from "react";
import {Card, CardBody, Divider} from "@nextui-org/react";
import Piechart from "./Piechart";

export default function Showchart(){
    return(
        <Card className="bg-white mt-5 w-11/12 shadow-2xl">
            <CardBody>
            <p className="uppercase text-xs text-primary-300 mb-1"> PRIMARY TEXT </p>
            <p className="text-3xl text-primary-100 font-bold">5.6787,34</p>
            <p className="lowercasr text-xs text-primary-300 mb-3"> Secondary text </p>
            <Divider/>
            <div className="mt-5"> <Piechart/> </div>
            </CardBody>
        </Card>
    )

}