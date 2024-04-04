import React from "react";
import Personacard from "~/components/Personacard";
import {Button, ButtonGroup} from "@nextui-org/react";


export default function Persona() {
    const score = 37;

  return (
    <div className="flex justify-center mt-8 mb-8">
        <Personacard score={score}/>
    </div>
   
  );
}