"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { DataLine } from "~/components/DataLine";
import { Autocomplete, AutocompleteItem, Button, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Chart as ChartJS, TimeScale, LineElement, LinearScale, PointElement, Tooltip, Legend, registerables, ChartConfiguration, AnimationOptions, TimeSeriesScale, ScriptableContext } from "chart.js";
import { NavData } from '~/components/NavData'
import 'chartjs-adapter-date-fns';
import { enUS, tr } from 'date-fns/locale';
import { risks } from "~/data-mockup/risk"
import { a1 } from "~/data-mockup/simulate"
import { Line } from "react-chartjs-2";

ChartJS.register(
    TimeScale,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    TimeSeriesScale
);

const p1 = {
    "Fundcode": "LHEME-E",
    "NAV PerUnit": 6.7838,
    "Total NAV": 3351965.82,
    "Subscription": 6.7839,
    "Redemption": 6.7838,
    "Change": 0.0051,
    "Date": "30/11/2023"
}

const p2 = {
    "Fundcode": "LHEME-E",
    "NAV PerUnit": 7.7838,
    "Total NAV": 3351965.82,
    "Subscription": 6.7839,
    "Redemption": 6.7838,
    "Change": 0.0051,
    "Date": "30/11/2023"
}
const q: string[] = ['2024-02-01 00:00:00', '2024-01-01 00:00:00', '2023-12-01 00:00:00', '2023-11-01 00:00:00']


export default function Simulate() {
    const [box, setBox] = React.useState<React.JSX.Element>(<></>);
    const totalDuration = 3000;
    const delayBetweenPoints = 50;
    const previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const [dataTest, setDataTest] = useState<{
        Fundcode: string;
        "NAV PerUnit": number;
        "Total NAV": number;
        Subscription: number;
        Redemption: number;
        Change: number;
        Date: string;
    }[]>([]);
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState("");//เงินลงทุน
    const [startP, setStartP] = React.useState(0);//ข้อมูลแรก
    const [nowP, setNowP] = React.useState<{
        Fundcode: string;
        "NAV PerUnit": number;
        "Total NAV": number;
        Subscription: number;
        Redemption: number;
        Change: number;
        Date: string;
    }>();//ข้อมูลจุดที่กราฟหยุด
    const [showInput, setShowInput] = React.useState(true);//status box
    const [minX, setMinX] = React.useState<string>('2022-04-01 00:00:00');//min graph
    const [indexDash, setIndexDash] = React.useState(1000)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleSelectionChange = (key: any) => {

        setShowInput(true)
        setCount(0)
    };

    const onInputChange = () => {
        if (Number(value) > 0 || value !== "") {
            setValue(value)
            setNowP(p1)
            setStartP(7.013)
            setShowInput(false)
        }

    };
    const onBuy = () => {
        setIndexDash(a1.length * (count - 1) / 4)
        setDataTest(a1)
        onOpen()

        // setMinX('2023-12-01 00:00:00')
    }

    const onNoBuy = () => {
        setCount(count + 1)
        if (count === 4) {
            onOpen()
        }
        setDataTest(a1.slice(0, a1.length * count / 4))
        setNowP(p2)
    }



    return (

        <div className="w-full min-h-screen justify-center flex ">
            <div className='w-fit h-fit  flex flex-col place-items-center drop-shadow-xl bg-white mt-20'>
                <div className='w-full bg-primary h-[50px] rounded-t-xl flex justify-center flex-col place-content-start px-5' >
                    <div>
                        <p className=" text-2xl text-white ">จำลองการลงทุน</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row h-full w-full px-5 place-items-center justify-center">
                    <div className=" w-[500px] ">
                        <Line data={DataLine(dataTest, indexDash)} options={{
                            animations: {
                                x: {
                                    type: 'number',
                                    easing: 'linear',
                                    duration: delayBetweenPoints,
                                    from: NaN,
                                    delay(ctx: any) {
                                        if (ctx.type !== 'data' || ctx.xStarted) {
                                            return 0;
                                        }
                                        ctx.xStarted = true;
                                        return ctx.index * delayBetweenPoints;
                                    }
                                },
                                y: {
                                    type: 'number',
                                    easing: 'linear',
                                    duration: delayBetweenPoints,
                                    from: previousY,
                                    delay(ctx: any) {
                                        if (ctx.type !== 'data' || ctx.yStarted) {
                                            return 0;
                                        }
                                        ctx.yStarted = true;
                                        return ctx.index * delayBetweenPoints;
                                    }
                                }
                            },
                            interaction: {
                                intersect: false
                            },
                            responsive: true,
                            scales: {
                                x: {
                                    // min:1471174953000,
                                    // max:'2024-04-01 00:00:00',
                                    min: minX,
                                    reverse: true,
                                    type: 'time',
                                    time: {
                                        unit: 'month',
                                    },

                                    grid: {
                                        color: "#d3d3d3",
                                    },
                                },
                                y: {
                                    beginAtZero: false,
                                    min: 6,
                                    max: 7.5
                                }
                            },
                        }} />
                    </div>
                    <div className="flex flex-col gap-5 p-10">

                        <Autocomplete

                            label="ประเภทกองทุนรวม :"
                            placeholder="เลือกประเภทกองทุนรวม"
                            defaultItems={risks}
                            labelPlacement="outside"
                            className="max-w-xs"
                            onSelectionChange={handleSelectionChange}

                        >
                            {(item: { id: any; name: any; }) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
                        </Autocomplete>

                        {showInput && <><Input
                            type="number"
                            label="จำนวนเงินลงทุน (บาท ) : "
                            placeholder="0.00"
                            labelPlacement="outside"
                            value={value}
                            onValueChange={setValue}
                            className="max-w-xs"
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">฿</span>
                                </div>
                            }
                        /> <Button type="submit" radius="md" color="primary" variant="shadow" size="md"
                            onPress={onInputChange}>
                                ลงทุน
                            </Button></>}

                        {!showInput && <><NavData investment={Number(value)} startprice={startP} nowdata={Number(nowP?.["NAV PerUnit"])} buy={onBuy} nobuy={onNoBuy} /></>}

                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} backdrop="opaque" hideCloseButton={true}>
                            <ModalContent >
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">   สิ้นสุดการจำลองการลงทุนกองทุนรวม</ModalHeader>
                                        <ModalBody>

                                            <p>ตัวอย่างกองทุนในประเภทกองทุนรวมตลาดเงิน </p>
                                            <p>- LHTREASURY-A</p>
                                            <p>- LHTREASURY-L</p>
                                            <p>- LHMMPVD</p>
                                        </ModalBody>
                                        <ModalFooter className=" justify-center" >
                                            <Button color="default" onPress={onClose}>
                                                เปลี่ยนกองทุน
                                            </Button>
                                            <Button className=" bg-[#1CA59B] text-white" onPress={onClose}>
                                                เปิดบัญชี
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>

                    </div>
                </div>
            </div>
        </div>

    )
}