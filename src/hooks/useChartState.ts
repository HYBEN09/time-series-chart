import { useState } from 'react';
import { Category } from '@/constants/@type/chartData';

interface ISelectedId {
  selectedId: string | null;
}

export function useChartState() {
  const [selectedId, setSelectedId] = useState<ISelectedId['selectedId']>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const handleButtonClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const resetFilters = () => {
    setSelectedId(null);
    setSelectedCategory('All');
  };

  return {
    selectedId,
    setSelectedId,
    selectedCategory,
    handleButtonClick,
    resetFilters,
  };
}
