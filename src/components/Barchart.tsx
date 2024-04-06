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

export default function Barchart() {
  return (
    <BarChart
    series={[
        { data: uData, id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      width={500}
      height={300}
    />
  );
}
