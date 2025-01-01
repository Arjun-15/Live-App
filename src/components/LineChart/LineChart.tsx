import React from "react";
import { LineChart, PieChart } from "@mui/x-charts";

const sampleData = [
  { timestamp: '2023-01-01', price: 30 },
  { timestamp: '2023-01-02', price: 50 },
  { timestamp: '2023-01-03', price: 40 },
  { timestamp: '2023-01-04', price: 60 },
  { timestamp: '2023-01-05', price: 70 },
];
interface IMyLineChart{
  prices:[];
}
const MyLineChart: React.FC<IMyLineChart> = ({prices}) => {
 const yAxisData = prices.map(entry=>entry[1]);
 const xAxisData = prices.map(entry=>{
  const date = new Date(entry[0]);
  return date.toLocaleDateString();
 });
xAxisData.length = yAxisData.length = 6;
console.log(xAxisData)
// console.log(Array.isArray(yAxisData))
  return (
    <div>
      <LineChart
      xAxis={[{ data: [2,5.5, 2, 8.5, 1.5, 5.0] }]}
      series={[
        {
          data: yAxisData,
        },
      ]}
      width={500}
      height={300}
    />

       {/* <LineChart
      xAxis={[{ data: yAxisData ? yAxisData : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: xAxisData ? xAxisData : [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={500}
      height={300}
    /> */}
    </div>
  );
};

export default MyLineChart;
