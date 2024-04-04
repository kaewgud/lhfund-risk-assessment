import React from "react";
import {Card, CardBody, image} from "@nextui-org/react";
import Image  from 'next/image'
import { StaticImageData } from 'next/image';
import {Button, ButtonGroup} from "@nextui-org/react";
import persona1  from "~/image/persona1.png"
import persona2 from "~/image/persona2.png"
import persona3 from "~/image/persona3.png"
import persona4 from "~/image/persona4.png"
import persona5 from "~/image/persona5.png"

export default function Personacard({ score }:{score: number}) {
    let txt: string | null = null;
    let myImage: StaticImageData = persona1;
    let detail: JSX.Element | null = null;

    if (score < 15) {
        txt = "นักลงทุนที่รับความเสี่ยงได้ต่ำ "
        myImage = persona1
        detail = <p className="text-black text-xl text-center mt-5 "> 
        คุณต้องการผลตอบแทนจากการลงทุนมากกว่าการฝากเงินธนาคารเล็กน้อย <br/>
        ไม่ต้องการความเสี่ยงและมีวัตถุประสงค์การลงทุนในระยะสั้นๆ </p>
    }else if (score <= 21){
        txt = "นักลงทุนที่รับความเสี่ยงได้ปานกลางค่อนข้างต่ำ"
        myImage = persona2
        detail = <p className="text-black text-xl text-center mt-5 "> 
        คุณจัดเป็นผู้ลงทุนที่รับความเสี่ยงได้น้อย เน้นปกป้องเงินลงทุน <br/>
        โดยมุ่งหวังโอกาสรับผลตอบแทนที่สม่ำเสมอจากการลงทุน </p>
    }else if (score <= 29){
      txt = "นักลงทุนที่รับความเสี่ยงได้ปานกลางค่อนข้างสูง"
      myImage = persona3
      detail = <p className="text-black text-xl text-center mt-5 ">  คุณสามารถยอมรับมูลค่าการลงทุนที่ลดลงเป็นครั้งคราวได้ </p>
    }else if (score <= 36){
      txt = "นักลงทุนที่รับความเสี่ยงได้สูง"
      myImage = persona4
      detail = <p className="text-black text-xl text-center mt-5 "> 
        คุณสามารถรับความผันผวนของตลาดได้ และยอมรับการขาดทุนได้ <br/>
        โดยมุ่งหวังการเติบโตของเงินลงทุนและผลตอบแทนในระยะยาว </p>
    }else if (score >= 37){
      txt = "นักลงทุนที่รับความเสี่ยงได้สูงมาก"
      myImage = persona5
      detail = <p className="text-black text-xl text-center mt-5"> 
        คุณสามารถรับความเสี่ยงในระดับที่สูงมากได้ <br/>
        ตลอดทั้งยอมรับการขาดทุนอย่างมีนัยสำคัญได้ หากมีโอกาสได้รับผลตอบแทนสูงจากการลงทุน </p>
    }
    


  return (
    <Card className="bg-white w-3/4 ">
      <CardBody>
        <p className="text-black text-base text-center mt-10"> คุณเป็น : </p>
        <p className="text-black text-center text-4xl font-bold mt-5"> {txt} </p>
        <div className="flex justify-center mt-5">
                <Image width={350} src={myImage} alt="Persona" />
        </div>
        {detail}
        <div className="flex justify-center mt-6 mb-5 ">
          <Button radius="md" color="primary" variant="shadow" size="lg"> แผนการลงทุนที่เหมาะสมกับคุณ </Button>
        </div>
        

      </CardBody>
    </Card>
  );
}