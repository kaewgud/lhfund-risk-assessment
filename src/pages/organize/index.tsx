'use client'

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Resultscard from "~/components/Portresultscard";

export default function organize() {
    const value_percent = 5.89;

    return (
        <div>
            <div className="px-40 py-12 flex flex-col gap-y-16">
                <h1 className="text-4xl font-bold">ทดลองจัดพอร์ต</h1>
                <div className='flex justify-center '>
                    <div className='pr-40 self-center'>
                        <PieChart
                        colors={['#327061', '#5FB9A0', '#FDC21D', '#FF7A39', '#BE1311']} // Use palette
                        series={[
                            {
                            data: [
                            { id: 1, value: 60 , color: '#5FB9A0' },
                            { id: 2, value: 30 , color: '#FDC21D'},
                            { id: 3, value: 10 , color: '#FF7A39'},
                            ],
                            innerRadius: 120,
                            outerRadius: 75,
                            paddingAngle: 5,
                            cornerRadius: 10,
                            startAngle: 0,
                            endAngle: 359,
                            cx: 150,
                            cy: 120,
                            }
                        ]}
                        width={300}
                        height={250}
                        />
                    </div>
                    <div className='self-center'>
                        <div className='flex place-items-center py-5'>
                            <div className='bg-[#5FB9A0] w-[35px] h-[23px] mx-5'>
                            </div>
                            <p className='w-[200px]'>สินทรัพย์เสี่ยงต่ำ</p>
                            <Input
                                type="number"
                                placeholder="percent"
                                labelPlacement="outside"
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">%</span>
                                    </div>
                                }
                                className=''/>
                        </div>
                        <div className='flex place-items-center py-5'>
                            <div className='bg-[#FDC21D] w-[35px] h-[23px] mx-5'>
                            </div>
                            <p className='w-[300px]'>สินทรัพย์เสี่ยงปานกลาง</p>
                            <Input
                                type="number"
                                placeholder="percent"
                                labelPlacement="outside"
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">%</span>
                                    </div>
                                }
                                className=''/>
                        </div>
                        <div className='flex place-items-center py-5'>
                            <div className='bg-[#FF7A39] w-[35px] h-[23px] mx-5'>
                            </div>
                            <p className='w-[200px]'>สินทรัพย์เสี่ยงสูง</p>
                            <Input
                                type="number"
                                placeholder="percent"
                                labelPlacement="outside"
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">%</span>
                                    </div>
                                }
                                className=''/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-8 text-xl'>
                    <p>ผลการตอบแทนที่คาดว่าจะได้จากพอร์ต คือ</p>
                    <p className='text-2xl font-bold'>{value_percent} %</p>
                    <p>ต่อปี</p>
                </div>
                <div className='font-bold'>
                    <div className='flex place-items-center py-5'>
                        <p className='w-[300px]'>จำนวนเงินลงทุน ( บาท )   : </p>
                        <Input
                            type="number"
                            placeholder="จำนวนเงิน"
                            labelPlacement="outside"
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">บาท</span>
                                </div>
                            }
                            className=''/>
                    </div>
                    <div className='flex place-items-center py-5'>
                        <p className='w-[300px]'>จำนวนเงินเป้าหมาย (บาท)  :</p>
                        <Input
                            type="number"
                            placeholder="จำนวนเงิน"
                            labelPlacement="outside"
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">บาท</span>
                                </div>
                            }
                            className=''/>
                    </div>
                </div>
                <div className="grid place-items-center">
                        <Button radius="md" color="primary" variant="shadow" size="lg" className='text-lg'>
                            ทดลองลงทุน
                        </Button> 
                </div> 
                <div>
                    <Resultscard/>
                </div>
                
            </div>
        </div>
    )}