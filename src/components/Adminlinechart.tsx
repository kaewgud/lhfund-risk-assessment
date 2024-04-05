import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function AdminLineChart() {
  return (
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
      ]}
      
      width={300}
      height={200}
    />

    
  );
}