'use client'

import { useState } from 'react';
import { useRouter } from 'next/router';
import { PieChart } from '@mui/x-charts/PieChart';
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Resultscard from "~/components/Portresultscard";

export default function organize() {
  const router = useRouter();
  const lowRisk_reward = 1.65;
  const mediumRisk_reward = 5.12;
  const highRisk_reward = 6.96;

  const [lowRiskPercent, setLowRiskPercent] = useState(40);
  const [mediumRiskPercent, setMediumRiskPercent] = useState(40);
  const [highRiskPercent, setHighRiskPercent] = useState(20);

  const value_percent: number = ((lowRisk_reward * lowRiskPercent / 100) + (mediumRisk_reward * mediumRiskPercent / 100) + (highRisk_reward * highRiskPercent / 100));
  const [totalPercent, setTotalPercent] = useState(100);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);

  const [isInvested, setIsInvested] = useState(false);
  const [yearsToTarget, setYearsToTarget] = useState(0);

  const handleInvest = () => {
    const yearsToTarget = Math.ceil(
      Math.log(targetAmount / investmentAmount) /
      Math.log(1 + value_percent / 100)
    );

    setIsInvested(true);
    setYearsToTarget(yearsToTarget);

    router.push("#target_year");
  }

  return (
    <div>
      <div className="px-40 py-12 flex flex-col gap-y-16">
        <h1 className="text-4xl font-bold">ทดลองจัดพอร์ต</h1>
        <div className='flex justify-center '>
          <div className='pr-40 self-center'>
            <PieChart
              colors={['#327061', '#5FB9A0', '#FDC21D', '#FF7A39', '#BE1311']} // Use palette
              series={[
                {
                  data: [
                    { id: 1, value: lowRiskPercent, color: '#5FB9A0' },
                    { id: 2, value: mediumRiskPercent, color: '#FDC21D' },
                    { id: 3, value: highRiskPercent, color: '#FF7A39' },
                  ],
                  innerRadius: 120,
                  outerRadius: 75,
                  paddingAngle: 5,
                  cornerRadius: 10,
                  startAngle: 0,
                  endAngle: 359,
                  cx: 150,
                  cy: 120,
                }
              ]}
              width={300}
              height={250}
            />
          </div>
          <div className='self-center'>
            <div className='flex place-items-center py-5'>
              <div className='bg-[#5FB9A0] w-[35px] h-[23px] mx-5'>
              </div>
              <p className='w-[200px]'>สินทรัพย์เสี่ยงต่ำ</p>
              <Input
                type="number"
                placeholder="percent"
                labelPlacement="outside"
                value={lowRiskPercent.toString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    const newPercent = Math.max(Math.min(value, 100), 0);
                    setLowRiskPercent(newPercent);
                    setTotalPercent(newPercent + mediumRiskPercent + highRiskPercent);
                  }
                }}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">%</span>
                  </div>
                }
                className=""
              />
            </div>
            <div className='flex place-items-center py-5'>
              <div className='bg-[#FDC21D] w-[35px] h-[23px] mx-5'>
              </div>
              <p className='w-[300px]'>สินทรัพย์เสี่ยงปานกลาง</p>
              <Input
                type="number"
                placeholder="percent"
                labelPlacement="outside"
                value={mediumRiskPercent.toString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    const newPercent = Math.max(Math.min(value, 100), 0);
                    setMediumRiskPercent(newPercent);
                    setTotalPercent(lowRiskPercent + newPercent + highRiskPercent);
                  }
                }}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">%</span>
                  </div>
                }
                className=""
              />
            </div>
            <div className='flex place-items-center py-5'>
              <div className='bg-[#FF7A39] w-[35px] h-[23px] mx-5'>
              </div>
              <p className='w-[200px]'>สินทรัพย์เสี่ยงสูง</p>
              <Input
                type="number"
                placeholder="percent"
                labelPlacement="outside"
                value={highRiskPercent.toString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    const newPercent = Math.max(Math.min(value, 100), 0);
                    setHighRiskPercent(newPercent);
                    setTotalPercent(lowRiskPercent + mediumRiskPercent + newPercent);
                  }
                }}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">%</span>
                  </div>
                }
                className=""
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-8 text-xl'>
          <p>ผลการตอบแทนที่คาดว่าจะได้จากพอร์ต คือ</p>
          <p className='text-2xl font-bold'>{value_percent.toFixed(2)} %</p>
          <p>ต่อปี</p>
        </div>
        <div className='font-bold'>
          <div className='flex place-items-center py-5'>
            <p className='w-[300px]'>จำนวนเงินลงทุน ( บาท )   : </p>
            <Input
              type="number"
              placeholder="จำนวนเงิน"
              labelPlacement="outside"
              value={investmentAmount.toString()}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  setInvestmentAmount(value);
                }
              }}
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">บาท</span>
                </div>
              }
              className=""
            />
          </div>
          <div className='flex place-items-center py-5'>
            <p className='w-[300px]'>จำนวนเงินเป้าหมาย (บาท)  :</p>
            <Input
              type="number"
              placeholder="จำนวนเงิน"
              labelPlacement="outside"
              value={targetAmount.toString()}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value)) {
                  setTargetAmount(value);
                }
              }}
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">บาท</span>
                </div>
              }
              className=""
            />
          </div>
        </div>
        <div className="grid place-items-center">
          <Button onClick={handleInvest} radius="md" color="primary" variant="shadow" size="lg" className='text-lg' disabled={totalPercent !== 100 || targetAmount < investmentAmount}>
            ทดลองลงทุน
          </Button>
        </div>
        {isInvested && (
          <Resultscard year={yearsToTarget} />
        )}
      </div>
    </div >
  )
}
