'use client'

import * as React from 'react';
import Image from "next/image";
import { Button } from "@nextui-org/react";
import logo from "~/image/banner_risk.jpg"
import router from 'next/router';
export default function Risk_assessment() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center pt-[185px] relative flex-col  place-items-center">
      <div>
        <Image
          src={logo}
          alt="LHFund Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='-z-50'
        />
      </div>
      <div className="text-white">
        <h1 className="text-5xl font-bold flex justify-center">"คุณเป็นนักลงทุนที่รับความเสี่ยงได้ขนาดไหน"</h1>
        <p className="text-2xl pt-10 flex justify-center">ไปทำความรู้จักกับตัวเองเพื่อการลงทุนที่มีประสิทธิภาพและเหมาะกับตัวคุณมากที่สุด</p>
      </div>
      <div className="pt-20">
        <Button onClick={() => router.push('/Form')} radius="md" color="primary" variant="shadow" size="lg">
          เริ่มทำแบบประเมิน
        </Button>
      </div>
    </div>

  );
}
