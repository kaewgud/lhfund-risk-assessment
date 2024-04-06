import React from "react";
import {Divider} from "@nextui-org/react";
import Barchart from "./Barchart";

export default function Risklevel(){
    return(
        <div className="mt-6 ml-5">
            <p className="uppercase text-xs text-primary-300 mb-1"> PRIMARY TEXT </p>
            <p className="text-3xl text-primary-100 font-bold">5.6787,34</p>
            <p className="lowercase text-xs text-primary-300 mb-3"> Secondary text </p>
            <Divider/>
            <div className="ml-5">
                <Barchart/>
            </div>

            
        </div>
        

        
    )
}