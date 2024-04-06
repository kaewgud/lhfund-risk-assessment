
import * as React from 'react';
import Proportion from "~/components/Proportion";
import Table from "~/components/Table";
import {Button} from "@nextui-org/react";
import banner_pic from "~/image/banner_port.png"
import Image from "next/image";

export default function recommend() {
    const score = 38;
    let text: string | null = null; 
    let level: number | null = null;
    text = "";
    level = 0;

    if (score < 15) {
        level = 1;
        text = "นักลงทุนที่รับความเสี่ยงได้ต่ำ";
    }else if (score <= 21){
        level = 2;
        text = "นักลงทุนที่รับความเสี่ยงได้ปานกลางค่อยข้างต่ำ";
    }
    else if (score <= 29){
        level = 3;
        text = "นักลงทุนที่รับความเสี่ยงได้ปานกลางค่อยข้างสูง";
    }
    else if (score <= 36){
        level = 4;
        text = "นักลงทุนที่รับความเสี่ยงได้สูง";
    }
    else if (score >= 37){
        level = 5;
        text = "นักลงทุนที่รับความเสี่ยงได้สูงมาก";
    }

    const components = [
        <Table key={1} />,
        <Table key={2} />,
        <Table key={3} />,
        <Table key={4} />,
      ];

    return(
        <div>
            <div className=''>
            <Image
                src= {banner_pic}
                alt="banner"
                width={1550}
            />
                        
            </div>
            <div className='px-52 py-12 flex flex-col '>
                <div>
                    <Proportion level={level} text={text}/>
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