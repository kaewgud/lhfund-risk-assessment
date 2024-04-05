import React from "react";

export default function Rank({level,percent,user}:{level:string,percent:string,user:string}){
    
    return (
        <div className="text-primary-300 ml-5">
            <p className="text-l  mt-4 ">{level}</p>
            <p className="text-xl font-bold">{percent} %</p>
            <p className="text-xs ">{user} users</p>
        </div>
        
    
        
    )
}
