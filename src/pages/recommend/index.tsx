import * as React from "react";
import Proportion from "~/components/Proportion";
import Table from "~/components/Table";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import banner_pic from "~/image/banner_port.png";
import Image from "next/image";

export default function recommend() {
  const router = useRouter();
  const { userScore } = router.query;

  const score = parseInt(userScore as string) || 0;
  let text: string | null = null;
  let level: number | null = null;
  text = "";
  level = 0;

  if (score < 15) {
    level = 1;
    text = "นักลงทุนที่รับความเสี่ยงได้ต่ำ";
  } else if (score <= 21) {
    level = 2;
    text = "นักลงทุนที่รับความเสี่ยงได้ปานกลางค่อนข้างต่ำ";
  } else if (score <= 29) {
    level = 3;
    text = "นักลงทุนที่รับความเสี่ยงได้ปานกลางค่อนข้างสูง";
  } else if (score <= 36) {
    level = 4;
    text = "นักลงทุนที่รับความเสี่ยงได้สูง";
  } else if (score >= 37) {
    level = 5;
    text = "นักลงทุนที่รับความเสี่ยงได้สูงมาก";
  }

  const components = [
    <Table key={1} />,
    <Table key={2} />,
    <Table key={3} />,
    <Table key={4} />,
  ];

  return (
    <div>
      <div className="">
        <Image src={banner_pic} alt="banner" width={1550} />
      </div>
      <div className="flex flex-col px-52 py-12 ">
        <div>
          <Proportion level={level} text={text} />
        </div>
        <div className="py-12">
          {components.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </div>
        <div className="flex justify-center gap-8">
          <Button
            radius="md"
            color="primary"
            variant="shadow"
            size="lg"
            className="text-lg"
          >
            จัดซื้อกองทุนที่แนะนำทั้งหมด
          </Button>
          <Button
            radius="md"
            color="primary"
            variant="shadow"
            size="lg"
            className="text-lg"
            onClick={() => router.push('/organize')}
          >
            ทดลองจัดพอร์ต
          </Button>
        </div>
      </div>
    </div>
  );
}
