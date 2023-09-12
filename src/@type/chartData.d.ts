export interface DataItem {
  [timestamp: string]: {
    id: string;
    value_bar: number;
    value_area: number;
  };
}

export type Category = 'All' | 'Bar' | 'Area';
