import { Chart } from '@/components/Chart/Chart';
import { ChartTitle } from '@/components/Chart/ChartTitle';

function Home() {
  return (
    <>
      <ChartTitle title={'시계열 차트'} content={'2023-2-1의 시계열 차트'} />
      <Chart />
    </>
  );
}

export default Home;
