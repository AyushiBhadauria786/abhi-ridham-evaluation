import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import type { PieChartData } from '../types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560']; 

// const data = [
//   { name: 'Category A', value: 400 },
//   { name: 'Category B', value: 300 },
//   { name: 'Category C', value: 200 },
//   { name: 'Category D', value: 100 },
// ];


const MyPieChart: React.FC<{data: PieChartData[]}> = ({data}) => {
  return (
    <ResponsiveContainer width={427} height={300} style={{display: "flex", justifyContent: 'center'}}>
      <PieChart style={{width:"80%",
          height:"100%"}} >
        <Pie
          data={data}
          cx="50%" 
          cy="50%" 
          outerRadius={140}
          fill="#8884d8" 
          dataKey="value" 
          paddingAngle={4}
          label 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MyPieChart;