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
import { useChartDataFetcher } from '@/hooks/useChartDataFetcher';
import { CustomTooltip } from './CustomTooltip';
import { Category } from '@/@type/chartData';
import { useState } from 'react';
import Buttons from '../UI/Buttons';

export function Chart() {
  const { data } = useChartDataFetcher();
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const handleButtonClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const formattedData = data.map((item) => ({
    ...item,
    time: new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }),
  }));

  return (
    <>
      <ButtonsWrapper>
        <Buttons
          onClick={() => handleButtonClick('All')}
          activated={selectedCategory === 'All'}
        >
          All
        </Buttons>
        <Buttons
          onClick={() => handleButtonClick('Area')}
          activated={selectedCategory === 'Area'}
        >
          Area
        </Buttons>
        <Buttons
          onClick={() => handleButtonClick('Bar')}
          activated={selectedCategory === 'Bar'}
        >
          Bar
        </Buttons>
      </ButtonsWrapper>
      <ChartWrapper>
        <ComposedChart width={1000} height={500} data={formattedData}>
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
          <Tooltip
            wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}
            content={<CustomTooltip active={undefined} payload={undefined} />}
          />
          <Legend />

          {selectedCategory === 'All' || selectedCategory === 'Bar' ? (
            <Bar
              dataKey="value_bar"
              yAxisId="right"
              name="Value Bar"
              fill="#00539C"
              barSize={50}
            />
          ) : null}

          {selectedCategory === 'All' || selectedCategory === 'Area' ? (
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="value_area"
              stroke="#fa5a20"
              fill="#FFD662"
            />
          ) : null}
        </ComposedChart>
      </ChartWrapper>
    </>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
`;
