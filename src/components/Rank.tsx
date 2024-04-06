import React from "react";

export default function Rank({level,percent,user}:{level:string,percent:string,user:string}){
    
    return (
        <div className="text-primary-300 m-8">
            <p className="text-xl  ">{level}</p>
            <p className="text-2xl font-bold">{percent} %</p>
            <p className="text-lg">{user} users</p>
        </div>
        
    
        
    )
}
