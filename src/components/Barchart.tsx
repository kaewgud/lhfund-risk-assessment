import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [75,125,175,75,125];
const xLabels = [
    'level 1',
    'level 2',
    'level 3',
    'level 4',
    'level 5',

  ];

export default function Barchart({barChartData}: any) {

  const nameList = barChartData?.map(({ name }: any) => name);
  const levelList = barChartData?.map(({ level }: any) => level);
  const countList = barChartData?.map(({ count }: any) => count);

  return (
    <BarChart
    series={[
        { data: countList, id: 'uvId' },
      ]}
      xAxis={[{ data: levelList, scaleType: 'band' }]}
      width={500}
      height={300}
    />
  );
}
