import { useEffect, useState } from 'react';
import { ChartTitle } from './ChartTitle';
import { fetchData } from '@/api/fetchData';
import { DataItem } from '@/@type/chartData';

export function Chart() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        if (response) {
          setData(response);
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
    <div>
      <ChartTitle title={'시계열 차트'} content={'2023-2-1의 시계열 차트'} />
      <ul>
        {data.map((item) => (
          <li key={item.time}>
            <p>ID: {item.id}</p>
            <p>Time: {item.time}</p>
            <p>Value Area: {item.value_area}</p>
            <p>Value Bar: {item.value_bar}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
