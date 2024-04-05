
import * as React from 'react';
import Proportion from "~/components/Proportion";
import Table from "~/components/Table";
import {Button} from "@nextui-org/react";

export default function recommend() {
    const score = 38;
    const text = "นักลงทุนที่รับความเสี่ยงได้ต่ำ";

    const components = [
        <Table key={1} />,
        <Table key={2} />,
        <Table key={3} />,
        <Table key={4} />,
      ];

    return(
        <div>
            <div className='h-[250px] w-full bg-black'>
                
            </div>
            <div className='px-52 py-12 flex flex-col '>
                <div>
                    <Proportion score={score} text={text}/>
                </div>
                <div className='py-12'>
                    {components.map((component, index) => (
                    <div key={index}>
                        {component}
                    </div>
                ))}
                </div>
                <div className="flex justify-center">
                    <Button radius="md" color="primary" variant="shadow" size="lg" className='text-lg'>
                        ทดลองจัดพอร์ต
                    </Button> 
                </div> 
            </div>
            
        </div>
    )
}