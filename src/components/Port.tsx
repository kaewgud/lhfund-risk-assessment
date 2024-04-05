import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


export default function Port({ level }:{level: number}) {

    return(
        <div>
            <div>
                <h1 className='py-10 text-2xl font-bold'>พอร์ตการลงทุนที่แนะนำ</h1>
            </div>
            <div className='flex justify-center'>
            <PieChart
                colors={['#327061', '#5FB9A0', '#FDC21D', '#FF7A39', '#BE1311']} // Use palette
                series={[
                    {
                    data: [{ id: 1, value: 40, label: 'กองทุนรวมตลาดเงินในประเทศ' , color: '#327061'},
                    { id: 2, value: 30, label: 'กองทุนรวมพันธบัตรรัฐบาล' , color: '#5FB9A0' },
                    { id: 3, value: 20, label: 'กองทุนรวมตราสารหนี้'  , color: '#FDC21D'},
                    { id: 4, value: 10, label: 'กองทุนรวมตราสารทุน'  , color: '#FF7A39'},
                    { id: 5, value: 0, label: 'กองทุนรวมทางเลือก'  , color: '#BE1311'},],
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
                width={675}
                height={250}
                />
            </div>
        </div>
    )
}