import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Piechart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'LHTREASURY-A' },
            { id: 1, value: 20, label: 'LHTREASURY-L' },
            { id: 2, value: 70, label: 'None', color: '#FFFFFF' },
          ],
        },
      ]}
      width={450}
      height={150}
    />
  );
}
