'use client'
import React from "react";
import { Navbar as Nav,  NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image  from 'next/image'
import logo  from "~/image/LHFund_logo.png"
import  Choice  from "~/image/Choice.png"
import  pie  from "~/image/Circle Chart.png"
import  task from "~/image/Combo Chart.png"
import { tr } from "date-fns/locale";

export default function Navbar() {
  return (
<div className="flex flex-col min-w-full">    
<Nav maxWidth="full" position="static" className="hidden md:block py-0 my-0 h-12 bg-[#1CA59B]">
    <NavbarContent className=" py-0 my-0 h-10" justify="center">
        <NavbarItem className='py-0 my-0 h-8  text-white'>
        <p className=" text-white  text-sm" >
          หน้าหลัก
        </p>
        </NavbarItem>
        <NavbarItem>
          <p aria-current="page" className=" text-white text-sm h-8" >
          เกี่ยวกับเรา
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-8" >
          กลุ่มการเงินแลนด์แอนด์เฮ้าส์
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-8" >
          สถานที่ซื้อขายหน่วยลงทุน
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-8" >
          ขั้นตอนการซื้อขายหน่วยลงทุน 
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-8" >
          บริการออนไลน์
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-8" >
          ติดต่อเรา
          </p>
        </NavbarItem>
        </NavbarContent>
  </Nav>
    <Nav maxWidth="full" isBordered={true} position="static" className="py-0 h-[95px] text-[#1CA59B] text-wrap drop-shadow-2xl">
    <NavbarBrand>
    <Image src={logo}  alt="Logo" />
    <NavbarContent className="hidden md:flex gap-10 text-wrap h-full  px-28" justify="center">
        <NavbarItem className="">
          <div className="flex flew-row gap-2 h-full place-items-center ">
          <span className="text-[#1CA59B] text-wrap h-full " >        
            แบบประเมิน
          </span>
          <Image
          src={Choice}
          alt="LHFund Logo"
          height={30}
          // layout="fill"
          // objectFit="cover"
          objectPosition="center"
          className='-z-50 '
        />
          </div>
        </NavbarItem >
        <NavbarItem >
        <div className="flex flew-row gap-4 h-full place-items-center ">
          <p  className="text-[#1CA59B] text-wrap">
          ทดลองจัดพอร์ต
          </p>
          <Image
          src={pie}
          alt="LHFund Logo"
          height={30}
          // layout="fill"
          // objectFit="cover"
          objectPosition="center"
          className='-z-50 '
        />
          </div>
        </NavbarItem>
        <NavbarItem>
        <div className="flex flew-row gap-2 h-full place-items-center ">
          <p className="text-[#1CA59B] text-wrap"  >
          จำลองลงทุน
          </p>
          <Image
          src={task}
          alt="LHFund Logo"
          height={30}
          // layout="fill"
          // objectFit="cover"
          objectPosition="center"
          className='-z-50 '
        />
          </div>
        </NavbarItem>
       
     </NavbarContent>
    </NavbarBrand>
  </Nav>
  </div>
  )
}