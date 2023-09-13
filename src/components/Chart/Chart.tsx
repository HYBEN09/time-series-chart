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
import Buttons from '../UI/Buttons';
import { styled } from 'styled-components';
import { CustomTooltip } from './CustomTooltip';
import { useChartState } from '@/hooks/useChartState';
import { useChartDataFetcher } from '@/hooks/useChartDataFetcher';

export function Chart() {
  const { data, uniqueIds } = useChartDataFetcher();

  const {
    selectedId,
    setSelectedId,
    selectedCategory,
    handleButtonClick,
    resetFilters,
  } = useChartState();

  const filteredData = selectedId
    ? data.filter((item) => item.id === selectedId)
    : data;

  const formattedData = filteredData.map((item) => ({
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
      <SCategoryButtons>
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
      </SCategoryButtons>
      <SUniqButton>
        <Buttons
          onClick={resetFilters}
          activated={!selectedId && selectedCategory === 'All'}
        >
          필터 해제
        </Buttons>

        {uniqueIds.map((id) => (
          <Buttons
            key={id}
            onClick={() => setSelectedId(id)}
            activated={selectedId === id}
          >
            {id}
          </Buttons>
        ))}
      </SUniqButton>
      <ChartWrapper>
        <ComposedChart width={1000} height={500} data={formattedData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" stroke="#5f3eb2" />
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="value_area"
            stroke="#fa5a20"
            tickCount={5}
            domain={[0, 200]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            dataKey="value_bar"
            stroke="#00539C"
            tickCount={7}
            domain={[0, 20000]}
          />
          <Tooltip content={<CustomTooltip />} />

          <Legend />

          {selectedCategory === 'All' || selectedCategory === 'Bar' ? (
            <Bar
              dataKey="value_bar"
              yAxisId="right"
              name="Value Bar"
              fill="#00539C"
              barSize={70}
            />
          ) : null}

          {selectedCategory === 'All' || selectedCategory === 'Area' ? (
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="value_area"
              stroke="#fa5a20"
              fill="#fa5a20"
            />
          ) : null}
        </ComposedChart>
      </ChartWrapper>
    </>
  );
}

const SCategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SUniqButton = styled.div`
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
