/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from 'styled-components';

interface TooltipProps {
  active?: boolean;
  payload?: any[] | undefined;
}

export function CustomTooltip({ active, payload }: TooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    const { id, value_area, value_bar } = data;

    return (
      <TooltipContainer>
        <TooltipText>지역: {id}</TooltipText>
        <TooltipAreaText>
          Value Area: <TooltipValue>{value_area}</TooltipValue>
        </TooltipAreaText>
        <TooltipBarText>
          Value Bar: <TooltipValue>{value_bar}</TooltipValue>
        </TooltipBarText>
      </TooltipContainer>
    );
  }

  return null;
}

const TooltipContainer = styled.div`
  background-color: #ffffffd8;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TooltipText = styled.p`
  font-weight: 600;
  color: #5f3eb2;
`;

const TooltipAreaText = styled.p`
  padding-top: 5px;
  color: #fa5a20;
`;

const TooltipBarText = styled.p`
  padding-top: 5px;
  color: #00539c;
`;

const TooltipValue = styled.span`
  font-weight: 600;
`;
