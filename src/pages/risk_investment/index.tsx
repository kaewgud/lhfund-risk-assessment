'use client'

import * as React from 'react';
import Image from "next/image";
import { Button } from "@nextui-org/react";
import bg from "~/image/banner-invest.jpg"
import { Tab } from "~/components/TabRisk";
import { Info } from "~/components/InfoRisk"
import { useState } from "react";
import { risks } from "~/data-mockup/risk";
import router from 'next/router'
export default function Risk_assessment() {

  const [activeTab, setActiveTab] = useState<number>(1);
  const tabClass = " flex text-center justify-center  w-full h-15 z-10 text-white md:h-[140px] lg:h-[120px] md:max-w-[120px]  md:min-w-[80px]"
  const info = risks.find(({ id }) => id === activeTab);
  return (
    <div className="bg-cover bg-center h-screen items-center justify-start relative flex flex-col gap-7  place-items-center">
      <div>
        <Image
          src={bg}
          alt="LHFund Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='-z-50'
        />
      </div>
      <div className="text-white text-center pt-9">
        <h1 className="text-2xl pb-5 md:text-5xl font-bold flex items-start">"กองทุนรวมประเภทไหนเหมาะกับคุณ"</h1>
        <p className=" text-lg font-semibold px-5 text-pretty md:text-2xl flex justify-center">ระดับความเสี่ยงแต่ละกองทุนรวม</p>
      </div>

      <div className="flex flex-col justify-center justify-items-center w-fit mx-10 md:mx-20   shadow-lg
                      md:rounded-[40px] rounded-lg">
        <div className="flex  gap-0 justify-center justify-items-center md:w-[750px] lg:w-[870px]" >
          <Tab
            onClick={() => setActiveTab(1)}
            isTabActive={activeTab === 1}
            tabLabel="1"
            tabName="กองทุนรวมตลาดเงินในประเทศ"
            colorActive={tabClass + " text-black md:rounded-tl-[30px]  rounded-tl-lg bg-[#296254] "}
            colorInactive={tabClass + " md:rounded-tl-[30px] rounded-tl-lg  bg-[#658C83]"}
          />
          <Tab
            onClick={() => setActiveTab(2)}
            isTabActive={activeTab === 2}
            tabLabel="2"
            tabName="กองทุนรวมตลาดเงิน"
            colorActive={tabClass + "  bg-[#3E8774]"}
            colorInactive={tabClass + " bg-[#88B3A7]"}
          />
          <Tab
            onClick={() => setActiveTab(3)}
            isTabActive={activeTab === 3}
            tabLabel="3"
            tabName='กองทุนรวมพันธบัตรรัฐบาล'
            colorActive={tabClass + " bg-[#4FAA91]"}
            colorInactive={tabClass + " bg-[#99CFC0]"}
          />
          <Tab
            onClick={() => setActiveTab(4)}
            isTabActive={activeTab === 4}
            tabLabel="4"
            tabName="กองทุนรวมตราสารหนี้"
            colorActive={tabClass + " bg-[#20CDA5]"}
            colorInactive={tabClass + " bg-[#B2E6DA]"}
          />
          <Tab
            onClick={() => setActiveTab(5)}
            isTabActive={activeTab === 5}
            tabLabel="5"
            tabName="กองทุนรวมผสม"
            colorActive={tabClass + " bg-[#FDC21D]"}
            colorInactive={tabClass + " bg-[#F7D987]"}
          />
          <Tab
            onClick={() => setActiveTab(6)}
            isTabActive={activeTab === 6}
            tabLabel="6"
            tabName="กองทุนรวมตราสารทุน"
            colorActive={tabClass + " bg-[#FF7A39]"}
            colorInactive={tabClass + " bg-[#F8B595]"}
          />
          <Tab
            onClick={() => setActiveTab(7)}
            isTabActive={activeTab === 7}
            tabLabel="7"
            tabName="กองทุนรวมตามหมวดอุตสาหกรรม"
            colorActive={tabClass + " bg-[#EF4F51]"}
            colorInactive={tabClass + " bg-[#F0A0A1]"}
          />
          <Tab
            onClick={() => setActiveTab(8)}
            isTabActive={activeTab === 8}
            tabLabel="8"
            tabName="กองทุนรวมที่ลงทุนในทรัพย์สินทางเลือก"
            colorActive={tabClass + " md:rounded-tr-[30px] rounded-tr-lg  bg-[#BE1311]"}
            colorInactive={tabClass + " md:rounded-tr-[30px] rounded-tr-lg  bg-[#D78281]"}
          />

        </div>

        <div className=" p-6  borde w-full text-wrap md:w-[750px] lg:w-[870px] md:rounded-b-[30px] rounded-b-lg  bg-white text-gray-700 justify-start items-start">
          <Info name={info?.name} description={info?.description} />
        </div>
      </div>
      <div className="">
        <Button onClick={() => router.push('/invest-simulator')} radius="md" color="primary" variant="shadow" size="lg">
          จำลองการลงทุนในกองทุนรวม
        </Button>
      </div>
    </div>

  );
}
