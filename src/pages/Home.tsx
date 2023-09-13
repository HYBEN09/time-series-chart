import { Chart } from '@/components/Chart/Chart';
import Header from '@/components/UI/Header';

function Home() {
  return (
    <>
      <Header title={'시계열 차트'} content={'2023-2-1의 시계열 차트'} />
      <Chart />
    </>
  );
}

export default Home;
