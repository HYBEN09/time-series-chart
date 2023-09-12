import { useEffect, useState } from 'react';
import { fetchData } from '@/api/fetchData';
import { DataItem } from '@/@type/chartData';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Area,
} from 'recharts';
import { styled } from 'styled-components';

export function Chart() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        if (response) {
          setData(response);
          console.log(response);
        } else {
          console.warn('No data found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <ChartWrapper>
      <ComposedChart width={1000} height={500} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="time" stroke="#8884d8" />
        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="value_area"
          stroke="#FFD662"
          tickCount={6}
          domain={[0, 500]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="value_bar"
          stroke="#00539C"
          tickCount={7}
          domain={[0, 20000]}
        />
        <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
        <Legend />

        <Bar
          dataKey="value_bar"
          yAxisId="right"
          name="Value Bar"
          fill="#00539C"
          barSize={50}
        />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="value_area"
          stroke="#fa5a20"
          fill="#FFD662"
        />
      </ComposedChart>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
`;
