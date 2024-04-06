import * as React from 'react';
import Port from "./Port";

export default function Proportion({ level , text}:{text: string; level: number}) {
    let fund_level1: string | null = null;
    let fund_level2: string | null = null;
    let fund_level3: string | null = null;
    let fund_level4: string | null = null;

    if (level === 2){
        fund_level1="น้อยกว่า 20%";
        fund_level2="น้อยกว่า 70%";
        fund_level3="น้อยกว่า 20%";
        fund_level4="น้อยกว่า 10%";

    }
    else if (level === 3){
        fund_level1="น้อยกว่า 10%";
        fund_level2="น้อยกว่า 60%";
        fund_level3="น้อยกว่า 30%";
        fund_level4="น้อยกว่า 10%";
    }
    else if (level === 4){
        fund_level1="น้อยกว่า 10%";
        fund_level2="น้อยกว่า 40%";
        fund_level3="น้อยกว่า 40%";
        fund_level4="น้อยกว่า 20%";
    }
    else if (level === 5){
        fund_level1="น้อยกว่า 5%";
        fund_level2="น้อยกว่า 30%";
        fund_level3="มากกว่า 60%";
        fund_level4="น้อยกว่า 30%";
    }

    return(
        <div>
            <div className=''>
                <h1 className='text-4xl font-bold'>{text}</h1>
                <h2 className='py-10 text-2xl font-bold'>สันส่วนการลงทุนที่แนะนำ</h2>
                <div className='flex gap-16 text-lg'>
                    <div>
                        <p>เงินฝากและตราสารหนี้ระยะสั้น</p>
                    </div>
                    <div>
                        <p>ตราสารหนี้ภาครัฐที่มีอายุมากกว่า 1 ปี</p>
                    </div>
                    <div>
                        <p>ตราสารหนี้ภาคเอกชน</p>
                    </div>
                    <div>
                        <p>ตราสารทุน</p>
                    </div>
                    <div>
                        <p>การลงทุนทางเลือก</p>
                    </div>
                </div>
                <div className='flex py-10 font-semibold text-lg text-white'>
                    { level === 1 ? (
                        <>
                        <div className='px-[235px] py-7 bg-gradient-to-r from-[#327061] to-[#5FB9A0]'>
                        <p>มากกว่า 60%</p>
                        </div>
                        <div className='px-14 py-7 bg-[#FDC21D]'>
                            <p>น้อยกว่า 20%</p>
                        </div>
                        <div className='px-7 py-7 bg-[#FF7A39]'>
                            <p>น้อยกว่า 10%</p>
                        </div>
                        <div className='px-8 py-7 bg-[#BE1311]'>
                            <p>น้อยกว่า 5%</p>
                        </div>
                        </>
                    ):(
                        <>
                        <div className='px-[70px] py-7 bg-[#327061]'>
                        <p>{fund_level1}</p>
                        </div>
                        <div className='px-[220px] py-7 bg-gradient-to-r from-[#5FB9A0] to-[#FDC21D]'>
                            <p>{fund_level2}</p>
                        </div>
                        <div className='px-6 py-7 bg-[#FF7A39]'>
                            <p>{fund_level3}</p>
                        </div>
                        <div className='px-8 py-7 bg-[#BE1311]'>
                            <p>{fund_level4}</p>
                        </div>
                        </>
                    )
                    }  
                </div>
                <div>
                    <Port level={level}/>
                </div>
            </div>
        </div>
    )
}