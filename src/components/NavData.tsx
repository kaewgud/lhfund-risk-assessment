import { Button, useDisclosure } from "@nextui-org/react"

interface NavDataType {
    investment:number;
    startprice: number;
    nowdata: number;
    buy:()=>void;
    nobuy:()=>void

}
export function NavData({investment, startprice,nowdata ,buy,nobuy}: NavDataType) {
    
    let unit = investment/startprice;
    let price = unit*nowdata;
    let diffprice = investment-price;
    let diffper = diffprice*100/investment;
    let diff,per ;
    if(diffprice > 0){
        diff='+'+diffprice.toFixed(2)
        per = '⭡' +diffper.toFixed(2) + '% )'
    }else{
        diff=diffprice.toFixed(2)
        per = '⭣' +diffper.toFixed(2) + '% )'
    }
    return (    
 <>
    <div className="grid grid-cols-2 grid-rows-3 gap-0  min-w-fit">
    <div className=" border-2 rounded-tl-xl gap-2 flex flex-col  justify-items-start">
        <div className="flex gap-2  items-end text-end px-3 pt-2 ">
            <span className="text-sm">เงินลงทุน </span>
            <span className="hidden lg:block text-end text-[10px]">( {startprice.toFixed(2)}บาทต่อหน่วย )</span>
        </div>
        <div className="flex justify-center h-full items-center px-3">
        <div className=" flex items-end gap-2 justify-center p-0 h-fit pb-2">
            <span className=" text-xl font-semibold justify-center"> {investment.toFixed(2)} </span>
            <span className="  justify-end"> บาท</span>
        </div>
        </div>
    </div>
    <div className="border-2 gap-2  flex flex-col rounded-tr-xl justify-items-start">
        <div className="flex gap-2 rou  items-end text-end px-3 pt-2 text-nowrap">
            <span className="text-sm">จำนวนหน่วยลงทุน</span>
           
        </div>
        <div className="flex justify-center h-full items-center">
        <div className=" items-end gap-2 justify-center px-3 h-fit pb-2">
            <span className=" text-xl font-semibold justify-center">{unit.toFixed(2)}</span>
            <span className="  justify-end"> หน่วย</span>
        </div>
        </div>
    </div>
    <div className="flex flex-col gap-2  justify-items-start col-span-2 border-2  h-full">
        <div className="flex gap-2  items-end text-end px-3 pt-2">
            <span className="text-sm">มูลค่าปัจจุบัน</span>
            <span className="text-end te text-[10px]">({nowdata.toFixed(2)} บาทต่อหน่วย )</span>
        </div>
        <div className="flex justify-center h-full items-center">
        <div className=" flex items-end gap-2 justify-center h-fit pb-2 px-3">
            <span className=" text-xl font-semibold text-center justify-center h-fit">{price.toFixed(2)}</span>
            <span >บาท</span>
            </div>
    </div>
    </div>
    <div className="flex flex-col gap-2  col-span-2 border-2 rounded-b-xl justify-center " style={{backgroundColor:diffprice > 0? "#E6F4EA":"#FCE8E6",borderColor:diffprice > 0? "#137333":"#A50E0F"}}>
        <div className="flex  gap-2  items-end text-end px-3 pt-2">
            <span className=" text-sm">กำไรส่วนต่างที่เกิดจากราคา</span>
        </div>
        <div className="flex h-full w-full justify-center items-center pb-2 px-3">

            <span className=" text-xl font-semibold text-center justify-center ">{diff+' ('+per}</span>

        </div>
    </div>
</div>
<div className="flex gap-3 justify-center">
<Button radius="md" color="primary" variant="shadow" size="md" onPress={buy}>
ขายคืน
</Button> 
<Button radius="md" color="primary" variant="shadow" size="md" onPress={nobuy}>
คงเงินลงทุนไว้
</Button> 
</div>
</> )
}