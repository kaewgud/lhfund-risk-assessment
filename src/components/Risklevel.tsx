import React from "react";
import {Divider} from "@nextui-org/react";
import Barchart from "./Barchart";

export default function Risklevel({riskLevelAnalysis}: any){

    const barChartData = riskLevelAnalysis?.map(({ name, level, count }: any) => {
        return {
            name: name,
            level: level,
            count: count
        }
    });

    const sumCount = barChartData?.reduce((acc: any, item: any) => {
        return acc + item.count
    }, 0);

    return(
        <div className="mt-6 ml-5">
            <p className="uppercase text-xs text-primary-300 mb-1"> EACH RISKLEVEL MAPPED </p>
            <p className="text-3xl text-primary-100 font-bold">{sumCount}</p>
            <p className="lowercase text-xs text-primary-300 mb-3"> จำนวนของผู้ที่ได้ในแต่ละระดับความเสี่ยง </p>
            <Divider/>
            <div className="ml-5">
                <Barchart barChartData={barChartData} />
            </div>

            
        </div>
        

        
    )
}