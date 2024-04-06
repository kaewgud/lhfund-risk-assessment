import { ScrollShadow } from "@nextui-org/react";

 
interface InfoType {
   name?:string;
   description?:string;
  }
export function Info( {name,description}:InfoType) {
    return (
      <ScrollShadow className="h-[300px] md:h-[200px]">
        <h2 className="text-2xl font-semibold mb-4 ">{name}</h2>
        <p>
          {description}
        </p>
        </ScrollShadow>
    );
  }