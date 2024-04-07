
"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { DataLine } from "~/components/DataLine";
import { Autocomplete, AutocompleteItem, Button, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Chart as ChartJS, TimeScale, LineElement, LinearScale, PointElement, Tooltip, Legend, registerables, ChartConfiguration, AnimationOptions, TimeSeriesScale, ScriptableContext } from "chart.js";
import { NavData } from '~/components/NavData'
import 'chartjs-adapter-date-fns';
import { enUS, tr } from 'date-fns/locale';
import { risks } from "~/data-mockup/risk"
import { a1 as test } from "~/data-mockup/simulate"
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

const a1:{
  Fundcode: string;
  "NAV PerUnit": number;
  "Total NAV": number;
  Subscription: number;
  Redemption: number;
  Change: number;
  Date: string;
}[] = test.reverse();

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
    const [status, SetStatus] = React.useState(false)//สถานะเกม
    const [showInput, setShowInput] = React.useState(true);//status box
    const [minX, setMinX] = React.useState<string>('2023-10-01 00:00:00');//min graph
    const [indexDash, setIndexDash] = React.useState(1000)
    const [selectedKey, setSelectedKey] = React.useState<React.Key | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleSelectionChange = (key: any) => {
        setSelectedKey(key)
        setValue("");
        setShowInput(true)
        setCount(1)
        SetStatus(false)
        setDataTest([])
        setIndexDash(1000)
    };

    const onInputChange = () => {
        if ((Number(value) >= 0) && (value !== "") && (selectedKey !== null)) {
            setValue(value)
            setNowP(a1[Math.floor(((a1.length * count )/ 4))])
            setStartP(Number(a1[0]?.["NAV PerUnit"]))
            setShowInput(false)
            setDataTest(a1.slice(0, a1.length * count / 4))
            setCount(count + 1)
        }

    };
    const onBuy = () => {
        setIndexDash(a1.length * (count - 1) / 4)
        setDataTest(a1)
        SetStatus(true)
        setCount(1)
    }

    const onNoBuy = () => {
        setDataTest(a1.slice(0, a1.length * count / 4))
        setCount(count + 1)

        if (count === 5) {
            SetStatus(true)
            { onOpen() }
        } else {
            setDataTest(a1.slice(0, a1.length * count / 4))
            setNowP(a1[Math.floor(((a1.length * count )/ 4))-1])
        }

    }
    const onchange=()=>{
        handleSelectionChange(null)
    }


  return (

        <div className="w-full min-h-screen justify-center flex bg-[#F5F5F5]">
            <div className='w-fit h-fit  flex flex-col place-items-center drop-shadow-xl bg-white mt-20 lg:h-[500px] lg:w-[1000px]'>
        <div className='w-full bg-primary h-[50px] rounded-t-xl flex justify-center flex-col place-content-start px-5' >
          <div>
            <p className=" text-xl text-white ">จำลองการลงทุนในกองทุนรวม</p>
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
                  max:()=>{const parts = a1[a1.length-1].Date.split('/');
                  const dateObject = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
                  return dateObject},
                  // min: minX,
                  // reverse: true,
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
               {!showInput && <><NavData investment={Number(value)} startprice={startP} nowdata={Number(nowP?.["NAV PerUnit"])} buy={onBuy} nobuy={onNoBuy} restart={onchange} status={status} /></>}
               <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton={true}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">สิ้นสุดการจำลองการลงทุนกองทุนรวม</ModalHeader>
                                        <ModalBody>
                                            <p>ตัวอย่างกองทุนในประเภทกองทุนรวมตลาดเงิน </p>
                                            <a>- LHTREASURY-A</a>
                                            <a>- LHTREASURY-L</a>
                                            <a>- LHMMPVD</a>
                                        </ModalBody>
                                        <ModalFooter className="justify-center">
                                            <Button color="default" onPress={()=>{onchange;onClose()}}>
                                                เปลี่ยนกองทุน
                                            </Button>
                                            <Button className="bg-[#1CA59B] text-white" onPress={onClose}>
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





















































































