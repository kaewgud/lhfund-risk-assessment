import React from "react";
import {Card, CardBody, image} from "@nextui-org/react";
import Image  from 'next/image'
import { StaticImageData } from 'next/image';
import {Button, ButtonGroup} from "@nextui-org/react";
import persona5 from "~/image/persona5.png"

export default function Portresultscard() {
    const year = 5;

    return (
        <div className="flex justify-center">
             <Card className="bg-white w-3/4 p-8">
                <CardBody>
                    <div className="flex justify-center place-items-center gap-x-12">
                        <div className="">
                                <Image width={350} src= {persona5}  alt="Persona" />
                        </div>
                        <div className="grid gap-y-7">
                            <p className="text-black text-base text-center"> ในอีก : </p>
                            <p className="text-black text-center text-5xl font-bold"> {year} ปี</p>
                            <p className="text-black text-center text-2xl"> คุณจะมีจำนวนเงินถึงเป้าหมาย </p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-8">
                        <Button radius="md" color="primary" variant="shadow" size="lg"> เริ่มต้นเปิดบัญชี </Button>
                    </div>
                    

                </CardBody>
            </Card>
        </div>
    )
}