'use client'
import React from "react";
import { Navbar as Nav,  NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image  from 'next/image'
import logo  from "~/image/logo.png"

export default function Navbar() {
  return (
<div className="flex flex-col min-w-full">    
<Nav maxWidth="full" position="static" className="hidden md:block py-0 my-0 h-10 bg-[#1CA59B]">
    <NavbarContent className=" py-0 my-0 h-10" justify="center">
        <NavbarItem className='py-0 my-0 h-10  text-white'>
        <p className=" text-white  text-sm" >
          หน้าหลัก
        </p>
        </NavbarItem>
        <NavbarItem isActive>
          <p aria-current="page" className=" text-white text-sm h-10" >
          เกี่ยวกับเรา
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-10" >
          กลุ่มการเงินแลนด์แอนด์เฮ้าส์
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-10" >
          สถานที่ซื้อขายหน่วยลงทุน
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-10" >
          ขั้นตอนการซื้อขายหน่วยลงทุน 
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-10" >
          บริการออนไลน์
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className=" text-white text-sm h-10" >
          ติดต่อเรา
          </p>
        </NavbarItem>
        </NavbarContent>
  </Nav>
    <Nav maxWidth="full" position="static" className="py-0 h-[70px] text-[#1CA59B] text-wrap">
    <NavbarBrand>
    <Image src={logo}  alt="Logo" />
    <NavbarContent className="hidden md:flex gap-4 text-wrap h-[65px]" justify="end">
        <NavbarItem>
          <p className="text-[#1CA59B] text-wrap " >        
            กองทุนรวม
          </p>
        </NavbarItem>
        <NavbarItem isActive>
          <p  className="text-[#1CA59B] text-wrap">
          กองทุนส่วนบุคคล
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className="text-[#1CA59B] text-wrap"  >
          กองทุนสำรองเลี้ยงชีพ
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className="text-[#1CA59B] text-wrap"  >
          กองทุนรวมอสังหาริมทรัพย์/REIT
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className="text-[#1CA59B] text-wrap"  >
          ธุรกิจทรัสตี
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className="text-[#1CA59B] text-wrap"  >
          บริการนักลงทุน
          </p>
        </NavbarItem>
        <NavbarItem>
          <p className="text-[#1CA59B] text-wrap"  >
          ข่าวสารและกิจกรรม
          </p>
        </NavbarItem>
     </NavbarContent>
    </NavbarBrand>
  </Nav>
  </div>
  )
}