import { useEffect, useState } from 'react';
import { fetchData } from '@/api/fetchData';
import { DataItem } from '@/@type/chartData';

interface ChartData {
  data: DataItem[];
  loading: boolean;
  error: Error | null;
  uniqueIds: string[];
}

export function useChartDataFetcher(): ChartData {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [uniqueIds, setUniqueIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        if (response) {
          setData(response);
          console.log(response);
          const ids = Array.from(new Set(response.map((item) => item.id)));
          console.log(ids);
          setUniqueIds(ids);
        } else {
          console.warn('데이터가 없습니다.🥲');
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return { data, loading, error, uniqueIds };
}
