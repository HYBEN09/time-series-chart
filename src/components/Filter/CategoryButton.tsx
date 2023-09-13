import Buttons from '../UI/Buttons';
import { styled } from 'styled-components';
import { Category } from '@/constants/@type/chartData';

interface CategoryButtonsProps {
  selectedCategory: string;
  handleButtonClick: (category: Category) => void;
}

export function CategoryButtons({
  selectedCategory,
  handleButtonClick,
}: CategoryButtonsProps) {
  return (
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
  );
}

const SCategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;
